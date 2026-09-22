class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = [];
        const map = new Map();
        const NUMS_LENGTH = nums.length;
        for(let i = 0; i < NUMS_LENGTH; i++) {
            const element = nums[i];
            const difference = target - element;
            if(map.has(difference)) {
                const secIdx = map.get(difference);
                indices.push(i);
                indices.push(secIdx);
                break;
            } else {
                map.set(element, i);
            }
        }
        return indices;
    }
}
