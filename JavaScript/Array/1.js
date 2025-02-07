/**
 * 
 * Given array of integer without re ordering determine the maximum difference between any element.
 * If there is never a lower prior elemrt return -1
 * 
 * arr = [5,3,6,7,4]
 */

function maxDifference(arr) {
    let min_value= arr[0];
    let max_diff = -1;

    for(let i=1;i<arr.length;i++) {
        if(arr[i] > min_value) {
            max_diff = Math.max(max_diff, arr[i]- min_value);
        }
        min_value = Math.min(min_value, arr[i])
    }

    return max_diff;
}