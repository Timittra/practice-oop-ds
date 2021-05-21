class Node{
    constructor(value){
        this.value = value; 
        this.next = null; 
    }
}

class LinkedList{
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        let current = this.head; 

        while(current.next != null){
            current = current.next; 
        }
        current.next = newNode;
    }
}

const head = new Node(1200); 
const list = new LinkedList(head); 
list.add(12); 
list.add(20); 
list.add(32); 
list.add(40); 
list.add(19); 
list.add(40); 

console.log(JSON.stringify(list)); 