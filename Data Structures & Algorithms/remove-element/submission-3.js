class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
     const filter = nums.filter((n) => n != val);
     console.log(filter);
     for(let i = 0; i < nums.length; i++) {
        nums[i] = filter[i];
     }
     return filter.length;
    }
}
