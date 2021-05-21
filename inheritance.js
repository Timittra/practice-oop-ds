class SmartDevice{
    constructor(name, price){
        this.name = name; 
        this.price = price; 
    }
    
    charging(){
        console.log('I am eating electrons... they are yummy');
    }
    
   
}

class Phone extends SmartDevice{
    constructor(name, price, camera){
        super(name, price);
        this.camera = camera;
    }
    sendSMS(){
        console.log('I am sending sms to my gf/bf');
    }
}

class Watch extends SmartDevice{
    constructor(name, price, distance){
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartDevice{
    constructor(name, price, isWifi){
        super(name, price);
        this.isWifi = isWifi;
    }
}

const samsu = new Phone('samsung', 60000, '16GB'); 
// console.log(samsu);
samsu.charging(); 
samsu.sendSMS();

const ipad = new Tablet('Apple', 45000, true);
console.log(ipad); 