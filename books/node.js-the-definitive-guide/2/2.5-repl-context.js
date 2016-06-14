var repl = require('repl');
// 这里书本中有错误
var ctx = repl.start('> ').context;
ctx.name = "dreamapple";
ctx.sayHello = function() {
    console.log('Hello World!');
};