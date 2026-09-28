class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const str = s.trim().split(' ');
        console.log(str);
        return str[str.length - 1].length;
    }
}
