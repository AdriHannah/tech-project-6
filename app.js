const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;


let phrases = ["MY PRECIOUS",
    "JUST KEEP SWIMMING",
    "WHY SO SERIOUS",
    "NOBODY PUTS BABY IN A CORNER",
    "TO INFINITY AND BEYOND",
    "MAY THE FORTH BE WITH YOU"
]

// listen for the start game button to be pressed 
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// return a random phrase from an array
function getRandomPhrasesAsArray(arr) {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    let word = randomPhrase.split("");
    return word;
};
const phraseArray = getRandomPhrasesAsArray(phrases)


// adds the letters of a string to the display
// loop through phrase array
// create li elements and add class(name)
function addPhraseToDisplay(arr) {
    const ul = document.querySelector('#phrase ul');
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        if (arr[i] === " ") {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        ul.appendChild(li);
    }
}
addPhraseToDisplay(phraseArray);


// // check if a letter is in the phrase 
function checkLetter(button) {

}
 
// check if the game has been won or lost 
// const checkWin = () => {

// }

// listen for the onscreen keyboard to be clicked 
// qwerty.addEventListener('click', () => {

  
// });