class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0;
        let j = 0;
        while(j < t.length) {
            const character1 = s[i];
            const character2 = t[j];
            if(character1 === character2) {
                i++;
                j++;
            } else {
                j++;
            }
        }
        return i === s.length;
    }
}
