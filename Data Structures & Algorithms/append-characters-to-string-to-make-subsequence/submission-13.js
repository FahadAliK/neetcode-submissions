class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0;
        let j = 0;
        while(i < s.length && j < t.length) {
            const character1 = s[i];
            const character2 = t[j];
            if(character1 === character2) {
                i++;
                j++;
            } else {
                i++;
            }
        }
        if(j === t.length) {
            return 0;
        } else {
            return t.length - j;
        }
    }
}
