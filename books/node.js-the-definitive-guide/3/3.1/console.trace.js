var user = new Object();
user.name = 'dreamapple';
user.age = 22;
user.getName = function(){ return this.name};
user.setName = function(name){ this.name = name;};
console.trace('user');
