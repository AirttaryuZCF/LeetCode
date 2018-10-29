/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sums = 0;
    for(let index = i; index <= j ; index++) {
        sums += this.nums[index];
    }
    return sums;
};

let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
obj.sumRange(0,2);
obj.sumRange(2,5);
obj.sumRange(0,5);

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */