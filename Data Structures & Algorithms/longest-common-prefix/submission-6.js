class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        for(let i = 0; i < strs.length; i++) {
            const element = strs[i];
            let j = 0;
            while(j < Math.min(prefix.length, element.length)) {
                if(prefix[j] !== element[j]) {
                    break;
                }
                j++;
            }
            prefix = prefix.slice(0, j);
        }
        return prefix;
    }
}
