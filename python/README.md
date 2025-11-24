# vsdebug

`vsdebug` is a lightweight helper for managing VS Code C++ debug configurations.

It automates common workflows around `.vscode/launch.json`, including:

- Adding or updating a launch configuration and immediately starting the debugger
- Running an existing configuration outside the debugger
- Spawning MPI jobs under `mpirun` and generating per-rank attach configurations plus an `MPI` compound
- Backing up, listing, clearing, and reverting `launch.json`


## Installation

```bash
pip install vsdebug
```

## Command-line usage

```bash
vsdebug PUT my_config ./a.out arg1 arg2
vsdebug RUN my_config
vsdebug MPI 4 ./a.out arg1 arg2
```
