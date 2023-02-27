let level = 1;

const setPicture = (level) => {
  const image = document.getElementById("image");
  image.src = `./assets/${level}.png`;
};

const todo = () => {
  const to = document.getElementById("todo");
  to.innerHTML = "reload to Replay again";
}

setPicture(level);

const answer = {};


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


const choisen = getRandomWord();


for (let i = 0; i < choisen.length; i++) {
  answer[choisen[i]] = false;
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
  console.log(answer);
  for (letter in answer) {
    if (answer[letter] == false) {
      console.log("haa");
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
const keyPress = (event) => {
  console.log("key");
  const key = event.key;
  let found = false;
  for (const letter in answer) {
    if (key == letter) {
      answer[letter] = true;
      testGame(answer)
      found = true;
      break;
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
