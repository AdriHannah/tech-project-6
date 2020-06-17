const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;


let phrases = ["my precious",
    "just keep swimming",
    "why so serious",
    "nobody puts baby in the corner",
    "to infinity and beyond",
    "may the forth be with you"
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
    const lis = document.querySelectorAll('.letter');
    let match = null
    for (let i = 0; i < lis.length; i++) {
        if (button.textContent.toUpperCase() == lis[i].textContent.toUpperCase()) {
            lis[i].className += 'show';
            match = button.textContent;
        }
    }
    return console.log(match);
}


// // listen for the onscreen keyboard to be clicked 
qwerty.addEventListener('click', (event) => {
    const button = event.target;
    const letterFound = checkLetter(button);

    if (event.target.tagName == 'button') {
        button.className += 'chosen';
        button.disabled = 'true';

        if (event.target.className !== 'chosen') {
            letterFound == null;
            const tries = document.getElementById('scoreboard');
            tries.removeChild(tries.firstChild);
            missed ++;
        }
    }
});

// check if the game has been won or lost 
// const checkWin = () => {
// }