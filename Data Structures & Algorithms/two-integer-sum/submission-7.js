class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let index1 = 0;
        let index2 = 0;
        const map = {};
        const NUMS_LENGTH = nums.length;
        for(let i = 0; i < NUMS_LENGTH; i++) {
            const element = nums[i];
            const difference = target - element;
            if(Object.hasOwn(map, difference)) {
                const secIdx = map[difference];
                index1 = i;
                index2 = secIdx;
                break;
            } else {
                map[element] = i;
            }
        }
        return [index1, index2];
    }
}
