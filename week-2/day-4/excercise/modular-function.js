function removeSpaces(text) {
    return text.replace(" ", "")
}

function reverseText(text) {
    return text = text.split("").reverse()
}

function updateVowels(text) {
    const buffer = [];
    for (char of text) {
        buffer.push(String.fromCharCode(char.charCodeAt(0) + 1))
    }
    return buffer.join("")
}

var password = 'hacktiv 8';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);