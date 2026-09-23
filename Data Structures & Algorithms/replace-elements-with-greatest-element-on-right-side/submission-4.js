class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
      for(let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        let max = arr[i + 1];
        for(let j = i + 1; j < arr.length; j++) {
            const element2 = arr[j];
            if(element2 > max) {
                max = element2;
            }
        }
        arr[i] = max;
      }
      arr[arr.length - 1] = -1;
      return arr;
    }
}
