// function lowerName(name) {
//     return name.toLowerCase();
// }

// console.log(lowerName('VAN'));


// function isReal(real) {
//     return real > 10;
// }


// console.log(isReal(11));

// function sumGrades(grades) {
//     let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//         count += grades[i];
//     }
//     return count;
// }

// console.log(sumGrades([10, 5, 10])); // 
// console.log(sumGrades([12, 10, 13, 19])); // 54



function sumPositiveNumbers(numbers) {

    let count=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>=0){
            count+= numbers[i];
        }
    }
    return count;
}
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
