// studentScore, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const studentScore = function(studentPoints, total) {
    const persentage = (studentPoints / total) * 100;
    let grade = 'F';
    if(persentage >= 90) grade = 'A';
    if(persentage >= 80 && persentage < 90) grade = 'B';
    if(persentage >= 70 && persentage < 80) grade = 'C';
    if(persentage >= 60 && persentage < 70) grade = 'D';
    if(persentage < 59) grade = 'F';
    return `You got a ${grade} (${persentage}%)!`;
}

const score = studentScore(11, 20);
console.log(score);


