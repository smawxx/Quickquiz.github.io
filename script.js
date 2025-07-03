// script.js

function getResult1() {
  const questions = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
  let score = { vampire: 0, gethimback: 0, lacy: 0 };
  questions.forEach(q => {
    const value = document.querySelector(`input[name="${q}"]:checked`)?.value;
    if (value) score[value]++;
  });
  let result = Object.entries(score).sort((a,b) => b[1] - a[1])[0][0];
  const resultMap = {
    vampire: "You're 'vampire' 🧛 - full of intensity and heartbreak.",
    gethimback: "You're 'get him back!' 💅 - playful, confident, and fierce.",
    lacy: "You're 'lacy' 🌸 - soft, poetic, and full of emotion."
  };
  document.getElementById("result1").innerText = resultMap[result];
}

function getResult2() {
  const questions = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
  let score = { memories: 0, peoplewatching: 0, yours: 0 };
  questions.forEach(q => {
    const value = document.querySelector(`input[name="${q}"]:checked`)?.value;
    if (value) score[value]++;
  });
  let result = Object.entries(score).sort((a,b) => b[1] - a[1])[0][0];
  const resultMap = {
    memories: "You're 'Memories' 💔 - nostalgic, emotional, and deep-thinking.",
    peoplewatching: "You're 'People Watching' 👀 - observant, introverted, and thoughtful.",
    yours: "You're 'Yours' 🌧️ - selfless, romantic, and quietly strong."
  };
  document.getElementById("result2").innerText = resultMap[result];
}

function getResult3() {
  const questions = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
  let score = { itaewon: 0, goblin: 0, crash: 0 };
  questions.forEach(q => {
    const value = document.querySelector(`input[name="${q}"]:checked`)?.value;
    if (value) score[value]++;
  });
  let result = Object.entries(score).sort((a,b) => b[1] - a[1])[0][0];
  const resultMap = {
    itaewon: "You're 'Itaewon Class' 💼 Fierce, ambitious, and driven by your values.",
    goblin: "You're 'Goblin' ✨ Romantic, deep, and timelessly poetic.",
    crash: "You're 'Crash Landing on You' 💘 Loyal, emotional, and drawn to fate."
  };
  document.getElementById("result3").innerText = resultMap[result];

    

