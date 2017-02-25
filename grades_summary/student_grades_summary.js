//
// Exercise: Class Records Summary
//

var studentScores = {
  student1:{id:123456789,scores:{exams:[90,95,100,80],exercises:[20,15,10,19,15]}},
  student2:{id:123456799,scores:{exams:[50,70,90,100],exercises:[0,15,20,15,15]}},
  student3:{id:123457789,scores:{exams:[88,87,88,89],exercises:[10,20,10,19,18]}},
  student4:{id:112233445,scores:{exams:[100,100,100,100],exercises:[10,15,10,10,15]}},
  student5:{id:112233446,scores:{exams:[50,80,60,90],exercises:[10,0,10,10,0]}}};

function generateClassRecordSummary(scores) {
  return {studentGrades: constructStudentGrades(scores), exams: constructExams(scores)};
}

//
// functions for deriving the student grades
//

function constructStudentGrades(scores) {
  // returns an array of student grades in the form ['93 (A)', '81(C)', etc]
  return convertScoresObjectToArray(scores).map(function(student) {
    return deriveStudentGrade(averageExamScore(student), sumArray(student.scores.exercises));
  });
}

function deriveStudentGrade(examAverage, exerciseSum) {
  // constructs the student grade string for one student
  var score = Math.round(examAverage * 0.65 + exerciseSum * .35);
  return score.toString() + ' (' + getLetterGrade(score) + ')'; 
}

function averageExamScore(student) {
  // returns the rounded average exam score of one student
  var countExams = student.scores.exams.length;
  var sumExams = sumArray(student.scores.exams); 
  return Math.round(sumExams / countExams);
}

function getLetterGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

//
// functions for deriving the exams summary
//

function constructExams(scores) {
  // return an exams object with average grade, minimum grade, maximum grade for each exam
  // convert scores object to array
  var scoresArray = convertScoresObjectToArray(scores);

  // initialize empty array of scores for each exam
  var examScoresArray = scoresArray[0].scores.exams.map(function() { return []; });

  // for each student and each of their exams, add the exam scores to examScoresArray
  scoresArray.forEach(function(student, studentIndex) {
    student.scores.exams.forEach(function(studentExamScore, examIndex) {
      examScoresArray[examIndex][studentIndex] = studentExamScore;
    });
  });

  // return the exams array object of ave, min and max for each exam
  return examScoresArray.map(function(examScores) {
    var sum = sumArray(examScores)
    var ave = Math.round(sum / examScores.length * 10) / 10;
    var min = Math.min.apply(null, examScores);
    var max = Math.max.apply(null, examScores);
    
    return {average: ave, minimum: min, maximum: max};
  });
}

//
// generic functions
//

function convertScoresObjectToArray(scores) {
  return Object.keys(scores).map(function(student) {
    var object = {};
    return object[student] = scores[student];
  });
}

function sumArray(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }); 
}

var testResult = {studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
                  exams: [{ average: 75.6, minimum: 50, maximum: 100 },
                          { average: 86.4, minimum: 70, maximum: 100 },
                          { average: 87.6, minimum: 60, maximum: 100 },
                          { average: 91.8, minimum: 80, maximum: 100 },],};

var result = (generateClassRecordSummary(studentScores))
console.log('RESULT:')
console.log(result);
console.log('TEST RESULT:')
console.log(testResult);
document.write('RESULT:<br>')
document.write(JSON.stringify(result));
document.write('<br><br>');
document.write('TEST RESULT:<br>')
document.write(JSON.stringify(testResult));
