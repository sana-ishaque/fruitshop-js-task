// --------------------------------apple
let quantityOfApple = 0;
let appleInput = document.querySelector('.input-apple');
let totalOfFruits = document.querySelector('#total');
let haveRupees = document.querySelector('#have-rs').value;

function addApple() {
    appleInput.value = ++quantityOfApple;
    totalOfFruits.value = appleInput.value * 10;
}

function minusApple() {
    appleInput.value = ++quantityOfApple;
    totalOfFruits.value -= 10;
}

// ----------------------------------orange
let quantityOfOrange = 0;
let orangeInput = document.querySelector('.input-orange');
function addOrange() {
    orangeInput.value = ++quantityOfOrange;
    totalOfFruits.value = orangeInput.value * 15;
}

function minusOrange() {
    orangeInput.value = --quantityOfOrange;
    totalOfFruits.value -= 15;

}
// -----------------------------------banana
let quantityOfBanana = 0;
let bananaInput = document.querySelector('.input-banana');
function addBanana() {
    bananaInput.value = ++quantityOfBanana;
    totalOfFruits.value = bananaInput.value * 7;

}

function minusBanana() {
    bananaInput.value = --quantityOfBanana;
    totalOfFruits.value -= 7;

}

if (haveRupees < totalOfFruits.value)
{ 
    alert('sorry');
}