class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const result = [];
        for (const word of words) {
            const remaining = words.filter((w) => w != word);
            for (const w of remaining) {
                if(w.includes(word)) {
                    result.push(word);
                    break;
                }
            }
            
        }
        return result;
    }
}
