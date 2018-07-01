/* Create a function gradeCalculator which takes a grade(number) and console.logs its letter grade.

grades 90 and above should return "A"

grades 80 to 89 should return "B"

grades 70 to 79 should return "C"

grades 60 to 69 should return "D"

59 and below should return "F" */


function gradeCalculator(grade) {
  
  var grade;
if(grade>90){
  grade='A';
}else if(grade<=89 && grade>=80){
  grade='B'
}else if(grade<=79 && grade>=70){
  grade='C'
}else if(grade<=69 && grade>=60){
  grade='D'
}else if(grade<=59){
  grade='F'
}
  return grade;
}



console.log(gradeCalculator(92)); //=> "A"
console.log(gradeCalculator(84)); //=> "B"
console.log(gradeCalculator(70)); //=> "C"
console.log(gradeCalculator(61)); //=> "D"
console.log(gradeCalculator(43)); //=> "F"