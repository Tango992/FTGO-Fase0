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

let test = checkKeyword("Harry Potter")
checkKeyword("Twilight")
checkKeyword("Har#ry")
checkKeyword("Harry Pot")

console.log(test)
