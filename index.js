 
function isPalindrome(word) {
  let revesred = word.split("").reverse().join("")
    if (revesred === word)
    return true;
    return false;

}

 
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
