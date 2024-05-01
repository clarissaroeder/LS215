function scoreToGrade(score) {
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

function calculateExamAverage(scores) {
  return (scores.reduce((sum, score) => sum + score)) / scores.length;
}

function calculateExerciseTotal(scores) {
  return scores.reduce((sum, score) => sum + score);
}

function calculateWeightedScore(examAverage, exerciseTotal) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;

  return (examAverage * EXAM_WEIGHT) + (exerciseTotal * EXERCISE_WEIGHT);
}

function calculateGrade(student) {
  let examAverage = calculateExamAverage(student.exams);
  let exerciseTotal = calculateExerciseTotal(student.exercises);
  let finalScore = Math.round(calculateWeightedScore(examAverage, exerciseTotal));
  let grade = scoreToGrade(finalScore);

  return `${finalScore} (${grade})`;
}

function generateExamSummary(examData) {
  examData = transpose(examData);

  return examData.map(exam => {
    return {
      average: calculateExamAverage(exam),
      min: Math.min(...exam),
      max: Math.max(...exam),
    }
  })
}

function transpose(array) {
  let transposed = []

  for(let column = 0; column < array[0].length; column++) {
    transposed.push([]);
    for (let row = 0; row < array.length; row++) {
      transposed[column].push(array[row][column]);
    }
  }

  return transposed;
}

function generateClassRecordSummary(scores) {
  let studentData = Object.keys(scores).map(student => scores[student].scores);
  let examData = Object.keys(scores).map(student => scores[student].scores.exams);

  return { 
    studentGrades: studentData.map(student => calculateGrade(student)), 
    exams: generateExamSummary(examData),
  };
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }