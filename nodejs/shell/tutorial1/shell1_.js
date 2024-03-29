#!/usr/bin/env node
// /*jshint node: true */

 "use strict";
  //get the external modules
  var fs = require("fs"),
   request = require('request'),
   cheerio = require('cheerio'),
   program = require('commander');
  //set the params options

program.version('0.1.0')
  .usage('­­newspapers newspapers.js ­­keywords keywords.js')
  .option('­n, ­­newspapers ', 'Newspapers list separated by \'\\n\'')
  .option('­k, ­­keywords ', 'Keywords list separated by \'\\n\'')
  .parse(process.argv)
;

var newspapersFile = program.newspapers, keywordsFile = program.keywords;

if (!newspapersFile || !keywordsFile) { program.help(); }

//Helpers
var file2Array = function(fileName)
{
  return ( fs.readFileSync(fileName, "utf8")
  .split('\n')
  .map(function(value) { return value.trim(); })
  .filter(function(element){ return !!element; })
  );
};


var getFullUrl = function(baseUrl, url) { url = url.trim();
if (url.indexOf("http") !== 0) { url = baseUrl + url; } return url;
};


//The script
var duplicateControl =
  {},
  completed_request = 0,
  result = [],
  newspapers = file2Array(newspapersFile),
  keywords = file2Array(keywordsFile).map(function(value) { return value.toLowerCase(); })
;


var addNews = function(title, url, keyword)
{
 if (!duplicateControl[url])
  {
    duplicateControl[url] = true;
    result.push({ 'url': url, 'title': title.trim(), 'keyword': keyword });
  }
};

var processRequest = function(url, error, response, html)
{
  if (!error && response.statusCode === 200)
  {
    var $ = cheerio.load(html);
    $('a').each(function()
    {
      var a = $(this), text = a.text().toLowerCase(), href = a.attr('href');
       if (!href) { return; } href = getFullUrl(url, href);
      //using every to stop after I match with a keyword
      keywords.every(function(keyword)
      {
        if (text.indexOf(keyword) !== ­1)
        {
          addNews(a.text(), href, keyword);
          return false;
        }
        return true;
      });

    });
  }

  completed_request++;

  if (completed_request === newspapers.length)
  {
    console.log(result);
  }
};

newspapers.forEach(function(url)
{
  request(url, processRequest.bind(this, url));
});
