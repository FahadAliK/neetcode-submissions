class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        // 11, 13
        let counter = 0;
        for(const detail of details) {
            const startIndex = 11;
            const endIndex = 13;
            const age = parseInt(detail.slice(startIndex, endIndex));
            if(age > 60) {
                counter++;
            }
        }
            return counter;
    }
}
