const p = document.getElementById("para")

let facultyGrades1 = [
    [80, 85, 90, 78, 88],
    [70, 75, 80, 72, 79],
    [65, 68, 71, 66, 67],
]

function calculateAverage(lists) {
    let avgs = []
    for (list of lists) {
        let avg = 0;
        for (i of list) {
            avg += i;
        }
        avg /= list.length
        avgs.push(avg)
    }
    return avgs
}

calculateAverage(facultyGrades1)


let facultyGrades2 = [
    [82, 88, 89, 80, 85],
    [71, 73, 75, 72, 70],
    [65, 70, 68, 67, 69],
]

// console.log(calculateAverage(facultyGrades1))