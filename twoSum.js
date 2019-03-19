var nums = [2, 7, 11, 15]
var target = 9;
/*
// Brute force solution big o(n^2)
*/

var twoSum = function(nums, target) {
    
    for (var i = 0; i<nums.length; i++) {
        for (var j = i+1; j<nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j];
            }
        }
    }
    
};




// Slower version "hashmap" but in reality an object
/*
var twoSum = function (myNums, target) {
    var myHashMap = new Map();
    for (var i = 0; i < myNums.length; i++) {
       // console.log(nums[i]);
        // we going to look for nums[i]-target in hashmap, if it is there, 
        // we return the value of it if not, we gonna add it to our hashmap.
        var lookForVal = target-nums[i];
        for (let j = 0; j < myHashMap.size; j++) {
            if (myHashMap.get(j) == lookForVal) {
                console.log([j, i]);
                return [j, i];
            }
        }
        myHashMap.set(i, nums[i]);
    }
    throw new Error("Could not find")
}

*/

twoSum(nums,target);