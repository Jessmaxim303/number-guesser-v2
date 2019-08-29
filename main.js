var minRange = document.querySelector('.js__min--range');
var maxRange = document.querySelector('.js__max--range');
var rangeButton = document.getElementById('js__range--button');
var minNumberDisplay = document.getElementById('min__number--display');
var maxNumberDisplay = document.getElementById('max__number--display');
var submitGuess = document.getElementById('guess__submit--button');
var guessResetButton = document.getElementById('guess__reset--button');
var guessClearButton = document.getElementById('guess__clear--button');
var playerOneGuess = document.querySelector(".js__name1--guess")
var playerTwoGuess = document.querySelector(".js__name2--guess")
var jsInputName1 = document.querySelector(".js__input--name1");
var jsInputName2 = document.querySelector(".js__input--name2");
var scoreCardName1 = document.getElementById("score__card--name1");
var scoreCardName2 = document.getElementById("score__card--name2");
var currentGuessOne = document.getElementById("player__one--guess");
var jsCardDelete = document.getElementById("js__card--delete");
var gameCardStats = document.getElementById("game__card--stats");
var jsGameOutcome = document.getElementById("js__game--outcome");
var gameCard = document.querySelector(".game__card");
var gameCardVs = document.getElementById("game__card--vs");
var guessOne = currentGuessOne.value;
var guessParse = parseInt(guessOne);
var playerTwoGuess = document.querySelector(".js__name2--guess")
var currentGuessTwo = document.getElementById("player__two--guess")
var pInner = document.getElementById("p__inner");
var p2Inner = document.getElementById("p2__inner");
var min = Math.ceil(minRange.value);
var max = Math.floor(maxRange.value);
var randomNumber = 0;
var playerOneGuessCount = 0;
var playerTwoGuessCount = 0;

rangeButton.addEventListener('click', setRangeValue);
submitGuess.addEventListener('click', mainGameFunction);
guessResetButton.addEventListener('click', resetGame);
jsGameOutcome.addEventListener('click', deleteCard);

function setRangeValue(){
  setMinValue();
  setMaxValue();
  generateNumber();
  resetActiveState();
};

function setMinValue(){
  minNumberDisplay.innerText = minRange.value;
};

function setMaxValue(){
  maxNumberDisplay.innerText = maxRange.value;
};

function generateNumber(){
  errorMinMaxRange();
  min = Math.ceil(minRange.value);
  max = Math.floor(maxRange.value);
  randomNumber = Math.floor(Math.random() * (parseInt(max) - parseInt(min)) + (parseInt(min)));
};

function mainGameFunction() {
  currentGuessOne.innerText = playerOneGuess.value;
  currentGuessTwo.innerText = playerTwoGuess.value;
  winnerP1();
  winnerP2();
  errorPlayerName();
  errorGuess()
};

function clearForms() {
  minRange.value = '';
  maxRange.value = '';
  jsInputName1 = '';
  jsInputName2 = '';
};

function resetActiveState(){
  guessResetButton.classList.remove('reset__button');
  guessClearButton.classList.remove('clear__button');
};

function resetGame(){
  guessResetButton.classList.add('reset__button');
  guessClearButton.classList.add('clear__button');
  randomNumber = 0;
};

function winnerP1() {
  playerOneGuessCount++;
  if (parseInt(playerOneGuess.value) === randomNumber){
		pInner.innerText = "BOOM!";
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    jsGameOutcome.insertAdjacentHTML('afterbegin',
      `<section class="game__card">
        <article id="game__card--vs">
          <h3>
            ${jsInputName1.value}
          </h3>
          <h4 id="gamecard__h4--text">
            vs.
          </h4>
          <h3>
            ${jsInputName2.value}
          </h3>
        </article>
        <article id="game__card--winner">
        <h1>
          ${jsInputName1.value}
        </h1>
        <h1 id="gamecard__winner--text">WINNER!</h1>
        </article>
        <article id="game__card--stats">
        <h3>
        ${playerOneGuessCount} <span id="guess__count--text">GUESSES</span>
        </h3>
         <img class="js__card--delete" src="images/delete.svg">
        </article>
       </section>`
	)};

  if (parseInt(playerOneGuess.value) > randomNumber){
    playerOneGuessCount++;
    pInner.innerText = "That's too high";
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
  } else if (parseInt(playerOneGuess.value) < randomNumber){
    playerOneGuessCount++;
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    pInner.innerText = "That's too low";
  } 
       // clearForms()
};

function winnerP2() {
  if (parseInt(playerTwoGuess.value) === randomNumber){
    p2Inner.innerText = "BOOM!";
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    jsGameOutcome.insertAdjacentHTML('afterbegin',
      `<section class="game__card">
        <article id="game__card--vs">
          <h3>
            ${jsInputName1.value}
          </h3>
          <h4 id="gamecard__h4--text">
            vs.
          </h4>
          <h3>
            ${jsInputName2.value}
          </h3>
        </article>
        <article id="game__card--winner">
        <h1>
          ${jsInputName2.value}
        </h1>
        <h1 id="gamecard__winner--text">WINNER!</h1>
        </article>
        <article id="game__card--stats">
        <h3>
           ${playerTwoGuessCount} <span id="guess__count--text">GUESSES</span>
        </h3>
         <img class="js__card--delete" src="images/delete.svg">
        </article>
       </section>`
  )};

    if (parseInt(playerTwoGuess.value) > randomNumber){
    playerTwoGuessCount++;
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    p2Inner.innerText = "That's too high";
  } else if (parseInt(playerTwoGuess.value) < randomNumber){
    playerTwoGuessCount++;
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    p2Inner.innerText = "That's too low";
  } 
    // clearForms()
}

function deleteCard(e){
  if (e.target.classList.contains("js__card--delete")){
  e.target.parentNode.parentNode.remove();
 }
}

function errorMinMaxRange(){
  var invalidRangeError = document.querySelector('.alert__message--range');
    if (minRange.value === '' || maxRange.value === '') {
    invalidRangeError.innerText = ' Please set a min and max range';
    invalidRangeError.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`);
    minRange.classList.add('error-box');
    maxRange.classList.add('error-box');
  }
}

function errorPlayerName(){
  var p1NameError = document.querySelector('.alert__message--name1');
  var p2NameError = document.querySelector('.alert__message--name2');
  if (jsInputName1.value === ''){
    p1NameError.innerText = ' Enter a name';
    p1NameError.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`);
    jsInputName1.classList.add('error-box');
  }
  if (jsInputName2.value === ''){
    console.log('error 2 name')
    p2NameError.innerText = ' Enter a name';
    p2NameError.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`);
    jsInputName2.classList.add('error-box');
  }
}

function errorGuess(){
  var p1GuessError = document.querySelector('.alert__message--guess1');
  var p2GuessError = document.querySelector('.alert__message--guess2');
  if (playerOneGuess.value === ''){
    p1GuessError.innerText = ' Enter a guess';
    playerOneGuess.classList.add('error-box');
    p1GuessError.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`);
  }
  if (playerTwoGuess.value === ''){
    p2GuessError.innerText = ' Enter a guess';
    playerTwoGuess.classList.add('error-box');
    p2GuessError.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`);
  }
}






