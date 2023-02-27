//read my readme before you start reading because its so blended :)

let level = 1;

const setPicture = (level) => {
  const image = document.getElementById("image");
  image.src = `./assets/${level}.png`;
};

setPicture(level);

const todo = () => {
  const to = document.getElementById("todo");
  to.innerHTML = "reload to Replay again";
}




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

const answer = [];

const choisen = getRandomWord();


for (let i = 0; i < choisen.length; i++) {
  answer.push( {
    letter: choisen[i],
    valid: false
  })
}




const gameWin = () => {
  const result = document.getElementById("result");
  result.innerHTML = "You Win";
  result.style = "color : lightblue";
  document.removeEventListener("keypress",keyPress)
  todo()
};



const testGame = (answer) => {
  let result = true;
  for (let i in answer) {
    if (answer[i].valid == false) {
        result = false;
    }
  }
  if (result) {
    gameWin();
  }
};



const gameOver = () => {
  const result = document.getElementById("result");
  result.innerHTML = "you Lost";
  result.style = "color: red";
  document.removeEventListener("keypress",keyPress)
  todo()
};

const setWordBoard = (word) => {
  let wordBoard = "";
  for (let i in word) {
    if (!word[i].valid) {
      wordBoard += "_ ";
    } else {
      console.log(word[i].letter);
      wordBoard += word[i].letter;
    }
  }
  const board = document.getElementById("board");
  board.innerHTML = wordBoard;
};
const keyPress = (event) => {
  const key = event.key;
  let found = false;
  for (let i in answer) {
    if (key == answer[i].letter) {
      
      console.log("yes");
      answer[i].valid = true;
      testGame(answer)
      found = true;
      
    }
  }
  if (!found) {
    level += 1;
    if (level > 7) {
      gameOver();
    } else {
      setPicture(level);
    }
  }
  setWordBoard(answer);
}

const start = () => {
  console.log(choisen);

  document.addEventListener("keypress", keyPress);
};
start();
