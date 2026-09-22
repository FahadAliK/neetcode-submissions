class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const map = new Map();
        const LENGTH = strs.length;
        for(let i = 0; i < LENGTH; i++) {
            const element = strs[i];
            const sortedElement = Array.from(element).sort().join('');
            if(map.has(sortedElement)) {
                map.get(sortedElement).push(element);
            } else {
                map.set(sortedElement, [element]);
            }
        }
        for(const item of map.values()) {
            result.push(item);
        }
        return(result);
    }
}
