const libraryData = {
    publisher: "Bloomsbury",
    books: [
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "The Casual Vacancy",
        "A Cuckoo's Calling",
        "The Silkworm",
    ]
}

function bookFinder(libraryData, keyword) {
    list = [libraryData.publisher]
    for (book of libraryData.books) {

        dataSplit = book.split(" ")
        inputSplit = keyword.split(" ")
        counter = 0;

        for (const dataWord of dataSplit) {
            for (const inputWord of inputSplit) {
                if (dataWord === inputWord) {
                    counter++
                    if (counter === inputSplit.length) {
                        list.push(book)
                        return list
                    }
                }
            }
        }
    }
    return "Keyword not suitable"
}

console.log(bookFinder(libraryData, "Harry Stone"))