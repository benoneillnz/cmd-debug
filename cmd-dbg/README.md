# CMD Debug Trigger

Run a VS Code debug configuration from the integrated terminal (or any shell) by writing the configuration name to a trigger file inside your workspace.

```bash
echo "debug_config_1" > .vscode/debug-trigger.txt
```

The extension watches `.vscode/debug-trigger.txt` and launches the matching debug configuration from your `launch.json`.

## Features

- Trigger any existing debug configuration from the terminal.
- Simple file-based interface: write the config name to `.vscode/debug-trigger.txt`.
- Works with integrated terminal or external shell pointed at the workspace.

## Getting Started

1. Install the **CMD Debug Trigger** extension from the VS Code Marketplace.
2. Open your project folder in VS Code.
3. Create or update `.vscode/launch.json` with one or more named debug configurations.
4. From the integrated terminal, trigger a configuration by writing its name to `.vscode/debug-trigger.txt` (see examples below).

## Requirements

- A `launch.json` in `.vscode/` with at least one named debug configuration.
- The name you echo must exactly match the `name` of a configuration in `launch.json`.

## Usage

1. Open your workspace in VS Code.
2. Ensure `.vscode/launch.json` contains the debug configuration you want to run.
3. From the integrated terminal (or any shell in the workspace root), run:

	 ```bash
	 echo "My Debug Config" > .vscode/debug-trigger.txt
	 ```

4. VS Code will start the matching debug configuration.

You may want to create a small shell function or alias, for example:

```bash
dbg() {
	echo "$1" > .vscode/debug-trigger.txt
}

dbg my-config
```

## Extension Settings

None yet. Future versions may add settings for the trigger file path or behavior.

## Known Issues

- No validation is shown if the configuration name does not exist; the debug session simply does not start.
- Behavior may change if your workspace uses multi-root or advanced debug setups.

