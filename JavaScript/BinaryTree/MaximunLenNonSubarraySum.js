
/**
 * Given arr = array of interger and B is integer of sum of interger; Find K is maximun size of subarray whose sum should not be more than B.
 * find K from
 * 
 * @param {*} arr of interger
 * @param {*} B integer
 * @returns integer
 */
function maxSubarrayLen(arr, B) {

    function validateSize(size) {
        let currSum = 0;
        for(let i=0;i<size;i++) {
            currSum += arr[i]
        }

        if(currSum > B) {
            return false;
        }

        for(let i=size;i<arr.length;i++){
            currSum += arr[i] -arr[i - size];
            if(currSum > B) {
                return false;
            }
        }
        return true;
    }


    let left =1;
    let right = arr.length;
    let result =0;

    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(validateSize(mid)) {
            result = mid;
            left = mid +1;
        }else {
            right = mid -1;
        }
    }

    return result;
}


console.log(">>> Rsult -1 >>>", maxSubarrayLen([1,2,3,4,5], 10));