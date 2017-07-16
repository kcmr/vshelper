# VS project helper

> A CLI tool to configure a directory as a Visual Studio Code project with typical settings for a Web Component using Polymer, a Polymer app or your own project types.

## Motivation

Unfortunately, Visual Studio Code does not have at the moment global tasks, task templates or something similar, so I usually find myself copying and pasting settings and tasks from project to project.

This script simply copies a basic predefined settings.json and tasks.json files into the current directory by executing the `vsproject` command.

The default settings and tasks are meant for Web Components and apps using Polymer, but you can customize your tasks and project types to suit your own needs.

## Install

    npm install -g vsproject

## Usage

In a component (default type)

    vsproject

In an app

    vsproject --type app

## Customize settings, tasks and project types

You can use your own predefined set of tasks or settings by placing a settings.json and/or tasks.json file inside a folder named as the type of project you want to set (eg.: component (default), app, your-own-project-type) in `~/.vscode/vsproject/<your-project-type>/`.

__Example:__

The following tasks.json template will be used for "dummy" projects:

In `~/.vscode/vsproject/dummy/tasks.json`:

    {
      // my own tasks for dummy projects
    }

In your project directory:

    $ vsproject --type dummy


## Running tasks in VSCode

Show the command palette (`Cmd+P`) and type `task` followed by a space to show the available tasks.

Additionally you can set your own custom key shortcut to show the project tasks by adding the following to your keybindings.json:

    {
        "key": "ctrl+t", // your own keybinding
        "command": "workbench.action.tasks.runTask"
    }

## Demo
![](https://d26dzxoao6i3hh.cloudfront.net/items/3Y110n3Y3Z3n2M1j2M11/Screen%20Recording%202017-07-16%20at%2001.17%20p.%20m..gif?v=a776da50) 