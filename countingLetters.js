function countLetters(words) {

var letterCounts = {};

for (var i = 0; i < words.length; i++) {
  var letter = words[i]
    if (letter === ' ') {
    continue;
    }
    if (letterCounts[letter] !== undefined) {
       letterCounts[letter] += 1
    } else {
      letterCounts[letter] = 1;
      }
    }
    return letterCounts;
}
console.log(countLetters("LiTTle BiG")) // logs any string to the console, separated and lower case

