function Animals(sex) {
    this.sex = sex;
    Animals.prototype.runing = function () {
        if (this.movement = 'run') {
            console.log('Бегун!');
        }
    };
    Animals.prototype.jumping = function () {
        if (this.movement = 'jump') {
            console.log('Попрыгун!')
        }
    };

};

function Mammals(sex,movement) {
    this.movement = movement;
    Animals.call(this,sex);
    Mammals.prototype.lactation = function () {
        if (this.sex == 'female') {
            console.log('milk');
        } else {
            console.log('no milk');
        }
    }
}

Mammals.prototype = Object.create(Animals.prototype);
Mammals.prototype.constructor = Mammals;

function Raccoon() {
    Mammals.call(this, 'female', 'run');
    this.skill = 'thief';
};
Raccoon.prototype = Object.create(Mammals.prototype);
Raccoon.prototype.constructor = Raccoon;

function Kangaroo() {
    Mammals.call(this, 'male', 'jump');
    this.skill = 'fight';
};
Kangaroo.prototype = Object.create(Mammals.prototype);
Kangaroo.prototype.constructor = Kangaroo;


let animal = new Animals;
let mammal = new Mammals;
let raccoon = new Raccoon;
let kangaroo = new Kangaroo;


console.log(animal);
console.log(mammal);

console.log(raccoon);
raccoon.lactation();
raccoon.runing();
console.log(kangaroo);
kangaroo.lactation();
kangaroo.jumping();