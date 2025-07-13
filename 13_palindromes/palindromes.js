const palindromes = function (word) {
    // Consider letters and numbers
    alphabetnumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    
    // Clean the word
    const cleanWord = word
        .toLowerCase()
        .split('')
        .filter((character) => alphabetnumerical.includes(character))
        .join('');
    
    // Check word.length is odd or even
    const reverseWord = cleanWord.split('').reverse().join('');

    if (cleanWord === reverseWord) {
        return true;
    }
    else {
        return false;
    }
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
