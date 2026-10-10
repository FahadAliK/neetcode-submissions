class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const result = [];
        console.log(words);
        words.sort((a, b) => a.length - b.length);
        console.log(words);
        for(let i = 0; i < words.length - 1; i++) {
            for(let j = i + 1; j < words.length; j++) {
                if(words[j].includes(words[i])) {
                    result.push(words[i]);
                    break;
                }
            }
        }
        return result;
    }
}
