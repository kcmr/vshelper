#! /usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const yargs = require('yargs');
const os = require('os');

const argv = yargs.argv;
let type = argv.type || 'component';

const getFile = (file) => {
  const homedir = os.homedir();
  return fs.existsSync(`${homedir}/.vscode/vsproject/${type}/${file}.json`)
    ? path.resolve(`${homedir}/.vscode/vsproject/${type}/${file}.json`)
    : path.resolve(__dirname, `vscode/${type}/${file}.json`);
};

let settings = getFile('settings');
let tasks = getFile('tasks');

fs.copySync(settings, '.vscode/settings.json');
fs.copySync(tasks, '.vscode/tasks.json');
console.log('🍺  VSCode project set!');