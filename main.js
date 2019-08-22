var minRange = document.getElementById('js__min--range');
var maxRange = document.getElementById('js__max--range');
var rangeButton = document.getElementById('js__range--button');
var minNumberDisplay = document.getElementById('min__number--display');
var maxNumberDisplay = document.getElementById('max__number--display');
var submitGuess = document.getElementById('guess__submit--button');
var playerOneGuess = document.getElementById("js__name1--guess")
var currentGuessOne = document.getElementById("player__one--guess")
var playerTwoGuess = document.getElementById("js__name2--guess")
var currentGuessTwo = document.getElementById("player__two--guess")
var pInner = document.getElementById("p__inner");
var p2Inner = document.getElementById("p2__inner");
var min = Math.ceil(minRange.value);
var max = Math.floor(maxRange.value);
var randomNumber = 0;
// var randomNumber = Math.floor(Math.random() * (max - min) + min);


rangeButton.addEventListener('click', setRangeValue);
submitGuess.addEventListener('click', changeText);


function setRangeValue(){
    setMinValue();
    setMaxValue();
    generateNumber();
    console.log(minRange.value);
    console.log(maxRange.value);
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
randomNumber = Math.floor(Math.random() * (max - min) + min);
		console.log(randomNumber);
}

function changeText() {
        currentGuessOne.innerText = playerOneGuess.value;
        currentGuessTwo.innerText = playerTwoGuess.value;
        winnerP1()
}
//
// function clearForms() {
//     currentGuessOne.value = '';
//     currentGuessTwo.value = '';
// };

function winnerP1() {
	console.log(randomNumber.value);
if (playerOneGuess.value === randomNumber){
		pInner.innerText = "BOOM!";
	}
    if (playerOneGuess.value > randomNumber) {
         pInner.innerText = "that's too high";
    } else {
            pInner.innerText = "that's too low";
}
}
// function winnerP2() {
// 	if (player__one.value === randomNumber){
// 		console.log('winner winner!')
// 	}
//   if (playerTwoGuess.value > randomNumber) {
//          p2Inner.innerText = "that's too high";
//     } else {
//          p2Inner.innerText = "that's too low";
//             clearForms();
// }
// }




// function generateNumber(){
// 	var min = Math.ceil(minRange.value);
// 	var max = Math.floor(maxRange.value);
// 	var randomNumber = Math.floor(Math.random() * (max - min)) + min;
// 	console.log(randomNumber);
// }
