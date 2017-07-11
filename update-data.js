/**
 * Created by asimz on 16/01/2017.
 */
var argv = require('yargs').argv;
var Spreadsheet = require('google-spreadsheet');
var fs = require('fs');

//https://www.nczonline.net/blog/2014/03/04/accessing-google-spreadsheets-from-node-js/
console.log('calling>>sheet>>new commands',argv.sheet)
