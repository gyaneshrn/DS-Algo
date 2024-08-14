/**
 * A string S consisting of the letter A,B,C, D is given. The string can be transformed either by removing a letter A together with an adjacent letter B or by removing a letter C with an adjacent letter D.

    Write a function solution (s):

    That given a Strong S consisting of N characters, returns any string that
    - Can be be obtained from S by repeatedly applying the described transformation and 
    - cannot be further transformed.

    If at some points there's is more than one possible way to transform the string, any of the valid transformation may be chosen

    Example,:
    1. Given S="CBACD", the function may return "C", because one of the possible sequences of operation as follows 
    CBACD --> CBA --> C

    2. Given S="CABABD", the function may return empty string ,because one of the possible sequences of operation as follows 
    CABABD --> CABD --> CD --> ""

    3. 1. Given S="ACBDACBD", the function may return "ACBDACBD", because no operation ca be applied on string S .

 * 
 */

    function solution(str) {
        let stack = [];

        for(const char of str) {
            if(char === "A" && stack[stack.length -1] === "B"){
                stack.pop();
            }else if(char === "B" && stack[stack.length -1] === "A"){
                stack.pop()
            }else if(char === "C" && stack[stack.length -1] === "D"){
                stack.pop()
            }else if(char === "D" && stack[stack.length -1] === "C"){
                stack.pop()
            }else {
                stack.push(char)
            }
        }

        return stack.join("");
    }


    console.log(">>> Solution-1 with CBACD >>>", solution("CBACD")) // returns "C"
    console.log(">>> Solution-2 with CABABD >>>", solution("CABABD")) // returns ""
    console.log(">>> Solution-3 with ACBDACBD >>>", solution("ACBDACBD")) // returns "ACBDACBD"