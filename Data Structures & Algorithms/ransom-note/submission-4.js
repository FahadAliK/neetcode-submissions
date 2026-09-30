class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const map1 = new Map();
        const map2 = new Map();
        for(const c of ransomNote) {
            if(map1.has(c)) {
                map1.set(c, map1.get(c) + 1)
            } else {
                map1.set(c, 1);
            }
        }
        for(const c of magazine) {
            if(map2.has(c)) {
                map2.set(c, map2.get(c) + 1)
            } else {
                map2.set(c, 1);
            }
        }
        for(const [k, v] of map1) {
            if(!map2.has(k)) return false;
            if(map2.get(k) < v) return false;
        }
        return true;
    }
}
