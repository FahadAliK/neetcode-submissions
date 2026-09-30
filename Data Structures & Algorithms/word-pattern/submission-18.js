class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const sWords = s.split(" ");
        if (pattern.length != sWords.length) {
            return false;
        }
        const map = new Map();
        for(let i = 0; i < pattern.length; i++) {
            if(map.has(pattern[i])) {
                if(map.get(pattern[i]) != sWords[i]) {
                    return false;
                }
            } else {
                if([...map.values()].includes(sWords[i])) {
                    return false;
                }
                map.set(pattern[i], sWords[i]);
            }
        }
        console.log(map);
        return true;
    }
}
