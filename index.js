#!/usr/bin/env node
const prog = require('caporal');
const buildCmd = require('./lib/build');

prog
  .version('1.0.0')
  .command('build', 'Create a new pipeline for application')
  .argument('<template>', 'Template to use default is <backend> <backend|frontend>')
  .option('--tp <template>', '<Template> of the pipeline is going to be created')
  .action(buildCmd);
 
prog.parse(process.argv);