const getRandomWord = () => {
  const WORDS = [
    "executioner",
    "headsman",
    "murderer",
    "assassin",
    "executor",
    "butcher",
    "deathsman",
    "decapitator",
  ];
  const r = Math.floor(Math.random() * WORDS.length);
  return WORDS[r];
};

const setPicture = (level) => {
  const image = document.getElementById("image");
  image.src = `./assets/${level}.png`;
}

const gameOver = () => {
    const result = document.getElementById("result");
    result.innerHTML = "you Lost"
    result.style = "color: red";  
    return;
}

const setWordBoard = (word) => {
  let wordBoard = "";
  for (const letter in word) {
    if (!word[letter]) {
      wordBoard += "_ ";
    } else {
      wordBoard += letter;
    }
  }
  const board = document.getElementById("board");
  board.innerHTML = wordBoard;
};

const start = () => {
  let level = 1

  setPicture(level);
  const answer = {};
  const choisen = getRandomWord();

  for (let i = 0; i < choisen.length; i++) {
    answer[choisen[i]] = false;
  }

  console.log(choisen);

  document.addEventListener("keypress", (event) => {
    console.log("key");
    const key = event.key;
    let found = false
    for (const letter in answer) {
    
      if (key == letter) {
        answer[letter] = true;
        found = true;
        break
      } 

    }
    if (!found) {
      level += 1;
      if(level > 7){
        gameOver() ;
        return;
      }
      else{
          setPicture(level)
      }
    }
    setWordBoard(answer);

  });
};
start();
