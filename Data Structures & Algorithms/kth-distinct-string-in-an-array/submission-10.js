class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const obj = new Map();
        for(let e of arr) {
            if(obj.has(e)) {
                obj.set(e, obj.get(e) + 1);
            } else {
                obj.set(e, 1);
            }
        }
        for(const [key, value] of obj.entries()) {
            if(value > 1) {
                obj.delete(key);
            }
        }
        const d = [...obj.keys()][k - 1];
        return d ? d : '';
    }
}
