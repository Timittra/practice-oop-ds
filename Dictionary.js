class Dictionary{
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const noteBook = new Dictionary(); 

noteBook.add('Hridi', '987654');
noteBook.add('Samaya', '987699');
noteBook.add('Duti', '987894');
noteBook.add('Mahin', '987764');
noteBook.add('Manha', '980964');

const Samaya = noteBook.get("Samaya");
console.log(noteBook); 
console.log(Samaya);
