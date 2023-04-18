function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleaned = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (/^[0-9a-zA-Z]+$/.test(char)) {
      cleaned += char.toLowerCase();
    }
  }
  
  // Reverse the string
  let reversed = "";
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned.charAt(i);
  }
  
  // Compare the original and reversed strings
  return cleaned === reversed;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("five|\\_/|four")); // false