class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }

    dequeue(){
        if(this.queue.length){
            return this.queue.shift()
        }
    }
}

const names = new Queue();

names.enqueue("Hridi"); 
names.enqueue("Shashi"); 
names.enqueue("Duti"); 
names.enqueue("Samaya"); 
names.enqueue("Mahin");
console.log(names.queue); 

const remove = names.dequeue();
console.log(remove); 
console.log(names.queue); 