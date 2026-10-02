class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const arr = [];
        const result = [];
        const map = new Map();
        for(const e of nums) {
            if(map.has(e)) {
                map.set(e, map.get(e) + 1);
            } else {
                map.set(e, 1);
            }
        }
        for(const [k, v] of map) {
            arr.push([k, v])
        }
        console.log(arr);
        arr.sort((a, b) => (a[1] -b[1]))
        console.log(arr);
        for(let counter = 0; counter < k; counter++) {
            result.push(arr.pop()[0])
        }
        return result;
    }
}
