function checkKeyword(key) {
    words = key.split(" ")
    if (words.length < 2) {
        return false
    }
    for (word of words) {
        if (word.length < 4) {
            return false
        }
    }
    for (word of words) {
        let regex = /^[A-Za-z0-9 ]+$/
        let valid = regex.test(word)
        if (!valid) {
            return false
        }
    }
    return true
}

console.log(checkKeyword("Harry Potter"))
console.log(checkKeyword("Twilight"))
console.log(checkKeyword("Har#ry"))
console.log(checkKeyword("Harry Pot"))
