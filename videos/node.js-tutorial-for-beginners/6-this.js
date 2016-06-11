var dreamapple = {
    printMyName: function() {
        console.log('My Name is dreamapple');
        console.log(this === dreamapple); // true
    }
};

dreamapple.printMyName();

function doWorthless() {
    console.log('I do not know do something!');
    console.log(this === global); // true
}

doWorthless();