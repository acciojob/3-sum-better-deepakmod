function threeSum(nums, target) {
    nums.sort(function(a, b) { return a - b; }); // sort the array in non-descending order
    var closestSum = nums[0] + nums[1] + nums[2]; // initialize closest sum to the sum of the first three numbers
    for (var i = 0; i < nums.length - 2; i++) {
        var left = i + 1; // left pointer
        var right = nums.length - 1; // right pointer
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum; // update closest sum if the current sum is closer to the target
            }
            if (sum < target) {
                left++; // increase left pointer if the sum is too small
            } else if (sum > target) {
                right--; // decrease right pointer if the sum is too large
            } else {
                return closestSum; // return immediately if the sum is equal to the target
            }
        }
    }
    return closestSum;
}


module.exports = threeSum;
