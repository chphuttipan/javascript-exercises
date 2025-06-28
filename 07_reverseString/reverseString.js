const reverseString = function(word) {
    var reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
};

reverseString("bookclub journalclub");
// Do not edit below this line
module.exports = reverseString;
