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


// const replace = (word, replacement, index) => {
//   return word.substring(0, index) + replacement + word.substring(index + 2);
// };

const setWordBoard = (word) => {
    let wordBoard = ""
    for(const letter in word){
      if (!word[letter] ){
        wordBoard += "_ "
      }
      else{
        wordBoard += letter
      }
    }
    const board = document.getElementById("board");
    board.innerHTML = wordBoard
}

const start = () => {
  const image = document.getElementById("image");
  image.src = "./assets/1.png";
  
  
  document.addEventListener("keypress", (event) => {
    const choisen = getRandomWord();
    const answer = {};

    for (let i = 0; i < choisen.length; i++) {
      answer[choisen[i]] = false;
    }

    console.log(answer);
    const key = event.key;
    for (const letter in answer) {
      if (key == letter) {
        answer.letter = true;
        setWordBoard();
      }
    }
  });
};
start();
