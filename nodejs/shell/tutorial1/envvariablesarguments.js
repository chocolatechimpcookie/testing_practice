#!/usr/bin/env node



process.argv.forEach( (param, position) =>
{
  console.log(position + ': ' + param);
});
