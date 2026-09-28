class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ones = 0;
        let zeros = 0;
        let maxOnes = 0;
        for(let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if(element === 1) {
                zeros = 0;
                ones++;
            } else {
                if(zeros === 0 && ones > maxOnes) {
                    maxOnes = ones;
                }
                ones = 0;
                zeros++;
            }
        }
        if(ones > maxOnes) {
            return ones;
        } else {
            return maxOnes;
        }
    }
}
