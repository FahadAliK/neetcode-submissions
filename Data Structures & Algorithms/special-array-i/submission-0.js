class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        for (let i = 0; i < nums.length; i++) {
            const prevElement = nums[i - 1];
            const currentElement = nums[i];
            if (!prevElement) {
                continue;
            }
            if(prevElement % 2 === currentElement % 2) {
                return false;
            }
        }
        return true;
    }
}
