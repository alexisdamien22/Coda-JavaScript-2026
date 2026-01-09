const grades = [12, 15, 18, 10, 14, 16];
let gradesSum = 0;
for (const grade of grades) {
    gradesSum += grade;
}
console.log(gradesSum / grades.length);