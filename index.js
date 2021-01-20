// scritps.js

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// This function is to flip the card when clicked
function flipCard() {
  if (lockBoard) return;
 if (this === firstCard) return;

  this.classList.add('flip');

  // when your flip the first card this function waits until you have flipped two card. And then its checks for a match between the two cards. 
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;


  checkForMatch();
}

// here is the function for checking the match. It checks for the identical framework key word. 

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

 resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

 
   resetBoard();
  }, 1500);
}

function resetBoard() {
 [hasFlippedCard, lockBoard] = [false, false];
 [firstCard, secondCard] = [null, null];
}


// Function to suffle the card and place them randomly. 

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));




// Move counter function
let moves = 0;
let counter = document.querySelector('.moves');
function moveCounter() {
    moves++;
    counter.innerHTML = moves + ' moves'; 
};

//The Timer functions 
let time = 0;
let timer;
function startTimer() {
    timer = setInterval(function() {
    time++;
    minutes = ('0' + Math.floor(time / 60)).slice(-2);
    seconds = ('0' + time % 60).slice(-2); 
    document.querySelector('.timer').innerHTML = minutes + ':' + seconds;
  }, 1000);
}

//Victory popup when the game is complete 

 function victoryPopUp(moves) {
    let popUp = document.querySelector('.popUp');
        popUp.style.visibility = 'visible';
        popUp.querySelector('.popUpTime').innerHTML = 'You won the game in ' + minutes + ' mins and ' + seconds + ' secs!';
        popUp.querySelector('.popUpMoves').innerHTML = 'You made ' + moves + ' moves!';
};

// New game 
function clearBoard(memorygame)
    {
        //Remove all remaining cards from here
        document.getElementById(memorygame).innerHTML = "";
     
    }

function newGame()
    {
        gameStart();
    }























































