class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const map = new Map();
        for(const character of s) {
            if(map.has(character)) {
                map.set(character, map.get(character) + 1);
            } else {
                map.set(character, 1);
            }
        }

        const even = new Map();
        let minEven = 0;
        const odd = new Map();
        let maxOdd = 0;
        for(const [key, value] of map.entries()) {
            console.log(key, value);
            if(value % 2 === 0) {
                if(minEven === 0) {
                    minEven = value;
                }
                if(value < minEven) {
                    minEven = value;
                }
            } else {
                if(value > maxOdd) {
                    maxOdd = value;
                }
            }

        }
        console.log(maxOdd)
        console.log(minEven)
        return (maxOdd - minEven);
    }
}
