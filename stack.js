class Stack{
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop()
        }
       
    }
}

const guest = new Stack;

guest.add('Hridi'); 
guest.add('Shashi'); 
guest.add('Duti'); 
guest.add('Samaya'); 
guest.add('Mahin'); 

console.log(guest.stack);

const sparker = guest.remove(); 

console.log(sparker);
console.log(guest.stack);
