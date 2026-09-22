class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = [];
        const map = {};
        const NUMS_LENGTH = nums.length;
        for(let i = 0; i < NUMS_LENGTH; i++) {
            const element = nums[i];
            const difference = target - element;
            if(Object.hasOwn(map, difference)) {
                const secIdx = map[difference];
                indices.push(i);
                indices.push(secIdx);
                break;
            } else {
                map[element] = i;
            }
        }
        return indices;
    }
}
