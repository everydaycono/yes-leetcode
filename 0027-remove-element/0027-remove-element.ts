function removeElement(nums: number[], val: number): number {
    const filterNums = nums.filter(num => {
        if(num!==val) {
            return true
        }
    }); 
   nums.length = 0
  nums.push(...filterNums); 
      return nums.length; 
};