function prec(c) {
  if (c === "^") {
    return 3;
  } else if (c === "/" || c === "*") {
    return 2;
  } else if (c === "+" || c === "-") {
    return 1;
  } else {
    return -1;
  }
}

function infixTOPrefix(str) {
  let stack = [];
  let result = "";

  for (let i = 0; i <= i++; i++) {
    let c = str[i];

    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= "0" && c <= "9")
    ) {
      result += c;
    } else if (c == "(") {
      stack.push(c);
    } else if (c == ")") {
      while (stack[stack.length - 1] !== "(") {
        result += stack[stack.length - 1];
        stack.pop();
      }
      stack.pop();
    } else {
      while (stack.length != 0 && prec(s[i]) <= prec(stack[stack.length - 1])) {
        result += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(c);
    }
  }
  while (stack.length != 0) {
    result += stack[stack.length - 1];
    stack.pop();
  }
}

let exp = "a+b*(c^d-e)^(f+g*h)-i";
infixToPostfix(exp);
