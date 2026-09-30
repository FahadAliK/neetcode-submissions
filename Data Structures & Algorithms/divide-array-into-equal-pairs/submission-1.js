class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const map = new Map();
        let pairs = 0;
        for(const e of nums) {
            if(map.has(e)) {
                map.set(e, map.get(e) + 1);
            } else {
                map.set(e, 1);
            }
        }
        for(const [k,v] of map) {
            console.log(k, v);
            if(v % 2 !== 0) {
                return false;
            }
            pairs += parseInt(v / 2);
        }
        return pairs === parseInt(nums.length / 2);
    }
}
