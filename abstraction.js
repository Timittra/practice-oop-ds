class Animal{
    constructor(){

    }
    talk(){
        // console.log('Make some noise');
        throw new Error ('You must implement talk method');
    }
}

class Cat extends Animal{
    talk(){
        console.log('Meow meow');
    }
}

class Dog extends Animal{
    talks(){
        console.log('bark bark'); 
    }
    talk(){
        this.talks();
    }
}

const myCat = new Cat();
myCat.talk();
const myDog = new Dog(); 
myDog.talks();