#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
import fs from 'node:fs'

import { checkPath, downloadTemplate } from './utils.js'

let json = fs.readFileSync('./package.json', 'utf-8')

json = JSON.parse(json)
program.version(json.version)

program.command('create <project>').alias('ctr').description('create a new project').action((project) => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter project name',
      default: project
    },
    {
      type: 'confirm',
      name: 'isTypescript',
      message: 'Is this a typescript project?',
    }
  ]).then((answers) => {
    if (checkPath(answers.projectName)) {
      console.log('文件名已存在')
      return
    }
    if (answers.isTypescript) {
      downloadTemplate('main', answers.projectName)
    } else {
      downloadTemplate('main', answers.projectName)
    }
  })
})

program.parse(process.argv)

console.log(process.argv)
