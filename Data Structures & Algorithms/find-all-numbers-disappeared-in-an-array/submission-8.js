class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const arr = [];
        const n = nums.length;
        for(let i = 1; i <= n; i++) {
            if(!nums.includes(i)) {
                arr.push(i);
            }
        }
        return arr;
    }
}
