const selection_sort = array =>{
    
    for (let i = 0; i < array.length; i++) {
        
        let min = i; 

        for (let j = i+1; j <array.length; j++){
           if(array[j] < array[min]){
               min = j;
           }          
        }
        
        if(min !=i){
            let temp = array[i]; 
            array[i] = array[min]; 
            array[min] = temp; 
        }
    }
    return array;
}

let inputArr = [5, 2, 4, 6, 1, 3];
selection_sort(inputArr);
console.log(inputArr);