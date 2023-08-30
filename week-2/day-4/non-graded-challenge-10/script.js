const students = [
    {
        name: "Dimitri",
        score: 90,
        class: "foxes",
    },
    {
        name: "Alexei",
        score: 85,
        class: "wolves",
    },
    {
        name: "Sergei",
        score: 75,
        class: "foxes",
    },
    {
        name: "Anastasia",
        score: 78,
        class: "wolves",
    },
];

function graduates(students) {
    let bufferArr = [];
    let bufferObject = {};
    for (student of students) {
        if (student.score > 75) {
            bufferObject.name = student.name;
            bufferObject.class = student.class;
            bufferArr.push(Object.assign({}, bufferObject));
        }
    }   
    return bufferArr
}

console.log(graduates(students))