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



















































