#CMD-Debug

CMD-Debug is a python library and vscode extension designed to make C++ debugging in vscode easier.

The project has two components:

##cmd-debug:
A vscode extension that lets you programmatically start a vscode debug session for a given configuration (Search CMD Debug Trigger in vscode marketplace to install). This saves you from having to choose your configuration from the dropdown menu and clicking start (yes, I am that lazy).

##vsdebug: 
A python script that lets you add C++ debug configurations to the "launch.json" file from the command-line (install with "pip install vsdebug"). E.g.

##Usage:

    vsdebug PUT <name> ./application --key value --key1 value .....

That will add (and start a session if you install the extension) a C++ debug configuration for the application with the given options.

##Motivation:
I wrote this script because I constantly found myself copying and pasting debug configuration in the vscode launch.json file. This library makes 
it really easy to add new configurations. Typically, I do all my programming using the vscode integrated terminal. When I find a bug in an application 
I am coding, I can simply throw a "vscode PUT <name> " in front of the previous command-line to launch the debugger session with that configuration. 

##Install 

vsdebug: pip install vsdebug
extension: Search "CMD Debugger Trigger" in the vscode marketplace. 

