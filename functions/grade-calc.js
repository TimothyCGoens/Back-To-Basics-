const gradeCalculator = function (score, totalScore) {

    if(typeof score === 'number' && typeof totalScore === 'number') {
        const percent = (score / totalScore) * 100 
        if(percent >= 90) {
            letterGrade = 'A'
        }
        else if(percent >= 80 && grade < 90) {
            letterGrade = 'B'
        }
        else if(percent >= 70 && grade < 80) {
            letterGrade = 'C'
        }
        else if(percent >= 60 && grade < 70) {
            letterGrade = 'D'
        }
        else if(percent < 60) {
            letterGrade = 'F'
        }
        return `You got an (${letterGrade}) (${percent})`
    } else {
        throw Error('Please provide numbers only')
    }
 
}
    
try {
    let finalGrade = gradeCalculator(false, 100)
    console.log(finalGrade)
} catch (e) {
    console.log(e.message)
}
