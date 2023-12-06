function reverse(number) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  let reverse = number.toString().split('').reverse.join('');
  let reverseNum = parseInt(reverse);
  return reverseNum;
}