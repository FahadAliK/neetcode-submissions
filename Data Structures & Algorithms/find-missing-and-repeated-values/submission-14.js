class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const ans = [];
        const n = grid[0].length;
        const max = n * n;
        const arr = [];
        for (let i = 1; i <= max; i++) {
            arr.push(i);
        }
        const map = new Map();
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const element = grid[i][j];
                if (map.has(element)) {
                    map.set(element, map.get(element) + 1);
                } else {
                    map.set(element, 1);
                }
            }
        }
        for (const [key, value] of map) {
            if(value === 2) {
                ans.push(key);
            }
        }
        const keys = [...map.keys()];
        for(const e of arr) {
            if(!keys.includes(e)) {
                ans.push(e);
            }
        }
        return ans;
    }
}
