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

const replace = (word,replacement, index) => {
  return word.substring(0, index) + replacement + word.substring(index + 1)
};

const start = () => {
  const r = Math.floor(Math.random() * WORDS.length);
  const choisen = WORDS[r];
  const image = document.getElementById("image");
  image.src = "./assets/1.png";
  const board = document.getElementById("board");
  let s = "";
  console.log(choisen);
  for (let i = 0; i < choisen.length; i++) {
    s += "_ ";
  }
  board.innerHTML = s;
  document.addEventListener("keypress", (event) => {
    const key = event.key;
    for (let i = 0; i < choisen.length; i++) {
      if (key == choisen[i])
      {
         s = replace(s,choisen[i],i)
        board.innerHTML = s

      }
    }
  });

};
start();
