class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;
        for(let i = 0; i < s.length - 1; i++) {
            const current = s[i];
            const next = s[i + 1];
            const curr = s.charCodeAt(i);
            const nxt = s.charCodeAt(i + 1);
            score += Math.abs(nxt - curr);
        }
        return score;
    }
}
