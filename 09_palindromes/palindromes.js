// const palindromes = function (str) {
//     // set index to last char
//     // iterate backwards until front, appending characters
//     // check if result == initial word    
//     clean_string = str
//                 .replace(/\W/g, '')
//                 .toLowerCase();
    
//     reverse = '';
    
//     for(let i = clean_string.length - 1; i >= 0; i--) {
//         reverse += clean_string[i];
//     }
//     return reverse == clean_string;
// };

const palindromes = function (str) {
    // set index to last char
    // iterate backwards until front, appending characters
    // check if result == initial word
    clean_string = str.replace(/\W/g, '').toLowerCase();

    const isPalindrome = clean_string
                .split("")
                .reverse()
                .join("") == clean_string;
    
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
