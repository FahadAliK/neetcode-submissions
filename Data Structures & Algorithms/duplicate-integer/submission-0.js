class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicates = false;
        nums.sort((a, b) => (a - b));
        const LENGTH = nums.length;
        for(let i = 0; i < LENGTH - 1; i++) {
            const element = nums[i];
            const nextElement = nums[i + 1];
            if(element === nextElement) {
                duplicates = true;
                break;
            }
        }
        return duplicates;
    }
}
