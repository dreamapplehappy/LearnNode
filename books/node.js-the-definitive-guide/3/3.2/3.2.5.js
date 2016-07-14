var foo = require('./foo');
console.log(foo.foo.hello);

if(module === require.main) {
    console.log('this is the main module of application.');
}

console.log(require.resolve('./foo'));
//console.log(require.cache);
require('./foo');

delete require.cache[require.resolve('./foo')];
require('./foo');

// 当前文件的绝对路径
console.log(__filename);
// 当前文件所处的目录的绝对路径
console.log(__dirname);