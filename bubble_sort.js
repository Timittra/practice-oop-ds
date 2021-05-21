const bubble_sort = nums => {
    let len = nums.length; 

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j+1];
                nums[j+1] = nums[j]; 
                nums[j] = temp;
            }
        }
    }
    return nums;
}

console.log(bubble_sort([3, 0, 2, 5, -1, 4, 1]));