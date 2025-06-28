const repeatString = function(word, time) {
    if (time < 0) return "ERROR";
    let repeatWord = "";
    for (let i = 0; i < time; i++) {
        repeatWord += word;
    }
    return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
