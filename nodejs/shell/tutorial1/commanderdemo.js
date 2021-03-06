#!/usr/bin/env node

var program = require('commander');

// program
//   .version('0.0.1')
//   .option('-p, peppers', 'Add peppers')
//   .option('-P, pineapple', 'Add pineapple')
//   .option('-b, bbqsauce', 'Add bbq sauce')
//   .option('-c, cheese [type]', 'Add the specified type of cheese [marble]', 'marble' )
//   .parse(process.argv);





// program
//   .version('0.0.1')
//   .option('-p, peppers', 'Add peppers')
//   .option('-P, pineapple', 'Add pineapple')
//   .option('-b, bbqsauce', 'Add bbq sauce')
//   .option('-c, cheese [type]', 'Add the specified type of cheese [marble]', 'marble' );
//
//   program.on('--help', function(){
//     console.log('  Examples:');
//     console.log('');
//     console.log('    $ custom-help --help');
//     console.log('    $ custom-help -h');
//     console.log('');
//   });
//
//   program.parse(process.argv);
//
//
//
//
//
//
//
//
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log(' peppers');
// if (program.pineapple) console.log(' pineapple');
// if (program.bbqsauce) console.log(' bbq');
// console.log('   %s cheese', program.cheese);














function range(val) {
  return val.split('..').map(Number);
}

function list(val) {
  return val.split(',');
}

function collect(val, memo) {
  memo.push(val);
  return memo;
}

function increaseVerbosity(v, total) {
  return total + 1;
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-f, --float <n>', 'A float argument', parseFloat)
  .option('-r, --range <a>..<b>', 'A range', range)
  // .option('-l, --lista <items>', 'A list', list)
  // .option('-b, --listb <items>', 'A list', list)
  .option('-l, --lista [item1,item2,item3]', 'A list', list)
  .option('-b, --listb [item1,item2,item3]', 'A list', list)
  .option('-o, --optional [value]', 'An optional value')
  .option('-c, --collect [value]', 'A repeatable value', collect, [])
  .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
  .parse(process.argv);

console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list1: %j', program.lista);
console.log(' list2: %j', program.listb);
console.log(' collect: %j', program.collect);
console.log(' verbosity: %j', program.verbose);
console.log(' args: %j', program.args);
