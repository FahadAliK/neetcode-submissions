class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const arr = [];
        for(let i = 0; i < nums1.length; i++) {
            const num = nums1[i];
            const index = nums2.findIndex(n => n === num);
            const result = nums2.slice(index).find((n) => (n > num)) || -1;
            arr.push(result);
        }
        return arr;
    }
}
