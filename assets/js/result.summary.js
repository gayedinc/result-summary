const summaryData = [
  {
    name: 'reactionScore',
    label: 'Reaction',
    icon: 'reaction-icon.svg',
    score: 3,
  },
  {
    name: 'memoryScore',
    label: 'Memory',
    icon: 'memory-icon.svg',
    score: 9,
  },
  {
    name: 'verbalScore',
    label: 'Verbal',
    icon: 'Verbal-icon.svg',
    score: 27,
  },
  {
    name: 'visualScore',
    label: 'Visual',
    icon: 'Visual-icon.svg',
    score: 39,
  },
];

let totalScore = 0;

for (const data of summaryData) {
  if (data.name == 'reactionScore') {
    reactionText.innerText = data.score;
    totalScore += data.score;
  }
  else if (data.name == 'memoryScore') {
    memoryText.innerText = data.score;
    totalScore += data.score;
  }
  else if (data.name == 'verbalScore') {
    verbalText.innerText = data.score;
    totalScore += data.score;
  }
  else if (data.name == 'visualScore') {
    visualText.innerText = data.score;
    totalScore += data.score;
  }
  resultText.innerText = Math.trunc(totalScore / 4);
}

