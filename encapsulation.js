class Tiger{
    #speed = 100; 
    location = 'Sundarbans';
    constructor(name){
        this.#speed = 125; 
        this.name = name; 
    }
    run(){
        console.log(`I am ${this.name}. I am running at ${this.#speed} mph. I live in ${this.location}`)
    }
}

const royal = new Tiger('Royal Bengal');
royal.name = 'Pormanobic Bengal';
royal.location = 'Borishal';
royal.run();