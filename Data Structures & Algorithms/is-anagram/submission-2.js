class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let isAnagram = true;
        const sArray = Array.from(s).sort();
        const tArray = Array.from(t).sort();
        const sArrayLength = sArray.length;
        const tArrayLength = tArray.length;
        if(sArrayLength != tArrayLength) {
            isAnagram = false;
            return isAnagram;
        }
        console.log(sArray);
        console.log(tArray);
        const LENGTH = sArray.length;
        for(let i = 0; i < LENGTH; i++) {
            const element1 = sArray[i];
            const element2 = tArray[i];
            if(element1 != element2) {
                isAnagram = false;
                break;
            }
        }
        return isAnagram;
    }
}
