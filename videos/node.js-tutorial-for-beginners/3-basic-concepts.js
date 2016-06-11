var person = {
    firstName: 'dream',
    lastName: 'apple',
    age: 22
};

console.log(person);

// 定义一个函数
// 带有return 的函数返回后面的值,不带return的返回undefined
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(3, 7));

// 返回undefined
function doNothing(){
}
console.log(doNothing());

// 我们也可以把一个函数赋值给一个变量
var sayHello = function() {
    console.log('Hello, dreamapple!');
};
//sayHello();

setTimeout(sayHello, 5000);