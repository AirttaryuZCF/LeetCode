/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var f = [];
    f[0] = true;

    nums.forEach(function(item, index, array) {
        if(f[index]) {
            var tmp = Math.min(array.length - 1, index + item);
            for (var i = index + 1; i <= tmp; i++) {
                f[i] = true;
            }
        }
    });

    return f[nums.length -1] ? false : true;
};

canJump([2,3,1,1,4])
// console.log(canJump([2,3,1,1,4]));
