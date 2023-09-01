function ayoJoget(exercise, userInput) {
    if (exercise.length !== userInput.length) {
        return "Input yang anda masukkan tidak lengkap!";
    }
    
    let score = 0;
    for (let i = 0; i < exercise.length; i++) {
        if (exercise[i] === userInput[i]) {
            score += 10;
        }
    }

    let totalScore = exercise.length * 10;
    let percentage = Math.floor((score / totalScore) * 100);
    
    let category = '';
    if (percentage === 100) {
        category = 'Perfect';
    } else if (percentage >= 80) {
        category = 'Great';
    } else if (percentage >= 60) {
        category = 'Good';
    } else {
        category = 'Bad';
    }

    return `Anda mendapatkan score ${score} / ${totalScore}. Persentase: ${percentage}%, Kategori : ${category}`;
}

function evaluateGame() {
    let exercise = document.getElementById("exercise").value;
    let userInput = document.getElementById("userInput").value;
    
    let result = ayoJoget(exercise, userInput);
    
    document.getElementById("result").innerText = result;
}
