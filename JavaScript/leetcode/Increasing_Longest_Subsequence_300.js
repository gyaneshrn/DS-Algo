/**
 *   Given am integer array and return the length of longest subsequence in increasing order space.
 *   arr =[10,9,2,5,3,7,102,18]
 * 
 *   Answer would be 4 in length and sub array will be [2,5,7,102];
 */

function LengthOfLIS(nums) {
    const n = nums.length;

    if(n === 0) return 0;

    let dp = new Array(n).fill(1);

    for(let i=1;i<n;i++) {
        for(let j=0;j<i;j++) {
            if(nums[j]< nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] +1 );
            }
        }
    }

    return Math.max(...dp);
}


// Using Binary Search
function LengthOfLIS2(nums) {

    let sub = [];

    for(let num of nums) {
        let left = 0, right = nums.length;

        while(left < right) {
            const mid = Math.floor((left+right)/2);
            if(sub[mid]< num) {
                left = mid +1
            } else {
                right = mid
            }
        }
        if(left < sub.length) {
            sub[left] = num;
        }else {
            sub.push(num)
        }
    }
    return sub.length;
}

const arr =[10,9,2,5,3,7,102,18];
console.log(">>> Result -1 >>>>",LengthOfLIS(arr));
console.log(">>> Result -1 >>>>",LengthOfLIS2(arr));



