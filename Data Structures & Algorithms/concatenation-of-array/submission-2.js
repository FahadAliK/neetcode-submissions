class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const LENGTH = nums.length;
        for(let i = 0; i < LENGTH; i++) {
            const element = nums[i];
            nums.push(element);
        }
        return nums;
    }
}
