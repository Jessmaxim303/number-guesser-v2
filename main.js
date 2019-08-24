var minRange = document.getElementById('js__min--range');
var maxRange = document.getElementById('js__max--range');
var rangeButton = document.getElementById('js__range--button');
var minNumberDisplay = document.getElementById('min__number--display');
var maxNumberDisplay = document.getElementById('max__number--display');
var submitGuess = document.getElementById('guess__submit--button');
var playerOneGuess = document.getElementById("js__name1--guess")
var playerTwoGuess = document.getElementById("js__name2--guess")
var jsInputName1 = document.getElementById("js__input--name1");
var jsInputName2 = document.getElementById("js__input--name2");
var scoreCardName1 = document.getElementById("score__card--name1");
var scoreCardName2 = document.getElementById("score__card--name2");
var currentGuessOne = document.getElementById("player__one--guess");
var guessOne = currentGuessOne.value;
var guessParse = parseInt(guessOne);
var playerTwoGuess = document.getElementById("js__name2--guess")
var currentGuessTwo = document.getElementById("player__two--guess")
var pInner = document.getElementById("p__inner");
var p2Inner = document.getElementById("p2__inner");
var min = Math.ceil(minRange.value);
var max = Math.floor(maxRange.value);
var randomNumber = parseInt(0);
var playerOneGuessCount = 0;
var playerOneGuessCount = 0;
var winnerWinner = "BOOM!";
var jsGameOutcome = document.getElementById('js__game--outcome');
// var randomNumber = Math.floor(Math.random() * (max - min) + min);

rangeButton.addEventListener('click', setRangeValue);
submitGuess.addEventListener('click', changeText);

function setRangeValue(){
    setMinValue();
    setMaxValue();
    generateNumber();
};

function setMinValue(){
    minNumberDisplay.innerText = minRange.value;
};

function setMaxValue(){
    maxNumberDisplay.innerText = maxRange.value;
};

function generateNumber(){
    min = Math.ceil(minRange.value);
    max = Math.floor(maxRange.value);
    randomNumber = Math.floor(Math.random() * (parseInt(max) - parseInt(min)) + (parseInt(min)));
}

function changeText() {
    currentGuessOne.innerText = playerOneGuess.value;
    currentGuessTwo.innerText = playerTwoGuess.value;
    winnerP1();
    winnerP2();
}

function clearForms() {
  minRange.value = '';
  maxRange.value = '';
  jsInputName1 = '';
  jsInputName2 = '';
  // playerOneGuess.value = '';
  // playerTwoGuess.value = '';
};

function winnerP1() {
  playerOneGuessCount++;
  if (parseInt(playerOneGuess.value) === randomNumber){
		pInner.innerText = "BOOM!";
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    jsGameOutcome.insertAdjacentHTML('afterbegin',
      `<section id="game__card">
        <article id="game__card--vs">
          <h3>
            ${jsInputName1.value}
          </h3>
          <h4>
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
        <h1>WINNER!</h1>
        </article>
        <article id="game__card--states">
         <h3>player stats1</h3>
         <button id="js__card--delete"></button>
        </article>
        <img class="game__delete--icon" src="images/delete.svg"/>
       </section>`
	)};
       // clearForms()
}

function winnerP2() {
  if (parseInt(playerTwoGuess.value) === randomNumber){
    pInner.innerText = "BOOM!";
    scoreCardName1.innerText = jsInputName1.value;
    scoreCardName2.innerText = jsInputName2.value;
    jsGameOutcome.insertAdjacentHTML('afterbegin',
      `<section id="game__card">
        <article id="game__card--vs">
          <h3>
            ${jsInputName1.value}
          </h3>
          <h4>
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
        <h1>WINNER!</h1>
        </article>
        <article id="game__card--stats">
         <h3>player stats</h3>
         <button id="js__card--delete"></button>
        </article>
       </section>`
  )};
    // clearForms()
}

    // if (parseInt(playerOneGuess.value) > randomNumber) {
//          pInner.innerText = "that's too high";
//     } else {
//             pInner.innerText = "that's too low";
// }

