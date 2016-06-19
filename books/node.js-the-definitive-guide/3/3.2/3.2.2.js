// setTimeout/clearTimeout

var sayHello = function() {
    console.log('Hello World!');
};

var timer = setTimeout(sayHello, 2000);

//clearTimeout(timer);

var timer2 = setInterval(sayHello, 1000);

clearInterval(timer2);

timer.unref();
timer.ref();