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
                // console.log(ones);
            } else {
                if(zeros === 0 && ones > maxOnes) {
                    maxOnes = ones;
                    console.log(maxOnes);
                }
                ones = 0;
                zeros++;
                // console.log(zeros);
            }
        }
        if(ones > maxOnes) {
            return ones;
        } else {
            return maxOnes;
        }
    }
}
