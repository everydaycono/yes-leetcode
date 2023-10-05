function runningSum(nums: number[]): number[] {
    return nums.reduce((prev,curr,idx)=>{
  prev.push(idx>0?prev[idx-1]+curr:curr)
  return prev
},[])
};