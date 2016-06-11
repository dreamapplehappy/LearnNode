var User = function() {
    this.name = '';
    this.life = 100;
    this.helpOther = function(other) {
        other.life += 1;
        console.log(this.name + '帮助' + other.name + '增加了一年的寿命!');
    }
};

var dream = new User();
var apple = new User();
dream.name = 'dream';
apple.name = 'apple';
dream.helpOther(apple);
console.log(dream.name + '还有' + dream.life + '生命值.');
console.log(apple.name + '还有' + apple.life + '生命值.');

User.prototype.hurt = function(other) {
    this.life -= 3;
    other.life -= 1;
    console.log(this.name + '伤害了' + other.name + ':' + this.name + '还有' + this.life + other.name + '还有' + other.life);
};

apple.hurt(dream);
console.log(dream.name + '还有' + dream.life + '生命值.');
console.log(apple.name + '还有' + apple.life + '生命值.');

User.prototype.magic = 60;
console.log(dream.magic);
console.log(apple.magic);