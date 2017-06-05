#!/usr/bin/env node

'use strict';

//get the external modules

var fs        = require('fs');
var request   = require('request');
var cheerio   = require('cheerio');
var program   = require('commander');

program
  .version('0.1.0')
  .usage('newspapers newspapers.txt keywords keywords.txt')
  .option('n, newspapers ', 'Newspapers list separated by \'\\n\' ')
  .option('k, keywords ', 'Keywords list seperated by \'\\n\' ')
  .parse(process.argv)
;

var newspapersFile = program.newspapers,
    keywordsFile = program.keywords;

if (!newspapersFile || !keywordsFile)
{
  program.help();
}

//Helpers
var file2Array = (fileName) =>
{
  return (fs.readFileSync(fileName, "utf8")
    .split('\n')
    .map(     (value)     =>  {return value.trim(); }  )
    .filter(  (element)   =>  {return !!element; }     )
  );
};


var getFullUrl = (baseUrl, url) =>
{
  url = url.trim();
  if(url.indexOf('http') !== 0)
  {
    url = baseUrl + url;
  }
  return url;
};

//the script

var
  duplicateControl = {},
  completed_request = 0,
  result = [],
  newspapers = file2Array(newspapersFile),
