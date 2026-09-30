class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let max = -1;
        const map = new Map();
        for(const e of arr) {
            if(map.has(e)) {
                map.set(e, map.get(e) + 1);
            } else {
                map.set(e, 1);
            }
        }
        for(const [k, v] of map) {
            if(k === v) {
                if(k > max) {
                    max = k;
                }
            }
        }
        return max;
    }
}
