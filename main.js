// letters
let letters = "abcdefglmnopqrjxyzwvkshit";

// create Array From Letters
let letterArray = Array.from(letters);

// Select Letter Container
let letterCon = document.querySelector(".letters");

// Append Letter To Letters Container
letterArray.forEach((letter) => {
  // create span for all letter
  let span = document.createElement("span");
  span.className = "letter-box";
  // create text Node for letter
  let text = document.createTextNode(letter);
  // Append Text node to span
  span.appendChild(text);
  // Append Span To letter Container
  letterCon.appendChild(span);
});

// Create Words Object & Generate Word
let words = {
  programing: [
    "PHP",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "New Year",
    "Happy Day",
    "Good Friends",
    "My Story",
    "The War",
    "The Lion King",
  ],
  langauge: ["Arabic", "English", "German", "Frensh", "Laten"],
  people: [
    "Mohamed",
    "Ali",
    "Ibrahim",
    "Moussa",
    "Hassan Hassan",
    "Ahmed Walid",
    "Ola Ahmed",
  ],
  countries: [
    "Egypt",
    "Cairo",
    "Mansoura",
    "Talkha",
    "Libya",
    "England",
    "Syria",
  ],
};

// Get Random Cat
let allkeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allkeys.length);
let randomProp = allkeys[randomPropNumber];
let randValues = words[randomProp];
// Get Random Word
let randValueNumber = Math.floor(Math.random() * randValues.length);
let randomValue = randValues[randValueNumber];
// Update GUI <Game Head>
let wordCat = document.querySelector(".word-group span");
wordCat.innerHTML = randomProp;

// select letter Container
let letterSpaceContainer = document.querySelector(".letter-guess");
// Create Letter&Spaces Guess Spans
let letterSpacesArray = Array.from(randomValue);

letterSpacesArray.forEach((letter) => {
  // create empty span for all letter
  let span = document.createElement("span");

  // if letter is space mark it
  if (letter === " ") {
    span.className = "space";
  }
  // Append Letter Letter Container
  letterSpaceContainer.append(span);
});

// selet all empty Spans
let emptySpans = document.querySelectorAll(".letter-guess span");
// Wrong Times
let wrongTimes = 0;
let theDraw = document.querySelector(".hangman-draw");
// Handle Letter Clicking
document.addEventListener("click", (e) => {
  let theStatus = false;
  const ele = e.target;
  if (ele.className === "letter-box") {
    ele.classList.add("clicked");
    let theclickedletter = ele.innerHTML.toLowerCase();
    // compare letter with all word letter
    letterSpacesArray.forEach((wordLetter, wordIndex) => {
      // check is letter is appear in word
      if (theclickedletter === wordLetter.toLowerCase()) {
        theStatus = true;
        emptySpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = theclickedletter;
          }
        });
      }
    });
    // if Player Enter Wrong Letter
    if (!theStatus) {
      // Increase The Wrong Times
      wrongTimes++;
      // Add Class To The Draw
      theDraw.classList.add(`wrong-${wrongTimes}`);
      // play fail sound
      console.log("fail");
      // check if end wrong times
      if (wrongTimes === 8) {
        endGame();
        letterCon.classList.add("finished");
      }
    } else {
      // paly success sound
      console.log("success");
    }
  }
});

// End Game
function endGame() {}
