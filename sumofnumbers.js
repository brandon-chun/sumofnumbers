/**
 * Solving Experience E26.
 * Created by Brandon on 9/18/2016.
 */

const nums = [1, 2, 3, 4];

function sumFor(nums){
  let total = 0;
  for(const number of nums){
    total += number;
  }
  return total;
}

console.log(sumFor(nums));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while(i < nums.length){
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(nums));

function sumRecursion(nums){
  if(nums.length === 0){
    return 0;
  }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(nums));

function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo, num){return memo + num;}, 0);
}

console.log(sumTheSimpleWay(nums));