#! /usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const yargs = require('yargs');
const os = require('os');

const argv = yargs.argv;
let type = argv.type || 'component';

const defaultTypes = ['component', 'app'];

const getFile = (file) => {
  const homedir = os.homedir();
  let settingsFile;

  if (fs.existsSync(`${homedir}/.vscode/vsproject/${type}/${file}.json`)) {
    settingsFile = `${homedir}/.vscode/vsproject/${type}/${file}.json`;
  } else if (defaultTypes.indexOf(type) > -1) {
    settingsFile = path.resolve(__dirname, `vscode/${type}/${file}.json`);
  } else {
    return console.log(`${file}.json not found in ~/.vscode/${type}/`);
  }

  return settingsFile;
};

let settings = getFile('settings');
let tasks = getFile('tasks');

if (settings) {
  fs.copySync(settings, '.vscode/settings.json');
}
if (tasks) {
  fs.copySync(tasks, '.vscode/tasks.json');
}

if (settings || tasks) {
  console.log('🍺  VSCode project set!');
} else {
  console.log('VSCode project not set');
}