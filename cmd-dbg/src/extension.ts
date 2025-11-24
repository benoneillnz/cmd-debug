import * as vscode from 'vscode';
import * as fs from 'fs';
import * as readline from 'readline';
import { log } from 'console';
import path from 'path/win32';

export function activate(context: vscode.ExtensionContext) {

  const workspace = vscode.workspace.workspaceFolders?.[0];
  if (!workspace) {
    vscode.window.showErrorMessage('No workspace folder open.');
    return;
  }
  
  const logPath = vscode.Uri.joinPath(workspace.uri, ".vscode", "debug-trigger.txt").fsPath;
  
  // Ensure the parent .vscode directory exists
  const vscodeDir = path.dirname(logPath);
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
  }

  // Create the file if it does not exist
  if (!fs.existsSync(logPath)) {
     fs.writeFileSync(logPath, "");  // empty file
     vscode.window.showInformationMessage(`Created file: ${logPath}`);
  }
  
  var fsTimeout = 0;

  // Watch for file changes
  const watcher = fs.watch(logPath, async (eventType) => {
    if (eventType === 'change') {
       if (fsTimeout === 0) {
        fsTimeout = 1;
        setTimeout(function() { fsTimeout=0; }, 5000); // give 5 seconds for multiple events
        const lastLine = await getLastLine(logPath);
        handleLogLine(lastLine);
      }
    }
  });

  context.subscriptions.push({ dispose: () => watcher.close() });
}

// Read the last line from the log file
async function getLastLine(filePath: string): Promise<string> {
  return new Promise((resolve) => {
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    const rl = readline.createInterface({ input: stream });
    let last = '';
    rl.on('line', (line) => (last = line));
    rl.on('close', () => resolve(last));
  });
}

 async function handleLogLine(configName: string) {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0]; // Get the first workspace folder
        if (workspaceFolder) {
            await vscode.debug.startDebugging(workspaceFolder, configName);
        } else {
            vscode.window.showErrorMessage('No workspace folder open.');
        }
    }

export function deactivate() {}