// --------------------------------apple
let quantity = 0;
let appleValue = document.querySelector('.input-apple');
let grandTotal = document.querySelector('#total');

function addApple() {
    appleValue.value = quantity++;
    grandTotal.value = appleValue.value * 10;
}


function minusApple() {
    appleValue.value = quantity--;
    grandTotal.value = grandTotal.value - 10;
}
// ----------------------------------orange
let orangeValue = document.querySelector('.input-orange');
function addOrange() {
    orangeValue.value = quantity++;
    grandTotal.value = orangeValue.value * 15;
}

function minusOrange() {
    orangeValue.value = quantity--;
    grandTotal.value = grandTotal.value - 15;
}
// -----------------------------------banana

let bananaValue = document.querySelector('.input-banana');
function addBanana() {
    bananaValue.value = quantity++;
    grandTotal.value = bananaValue.value * 7;

}

function minusBanana() {
    bananaValue.value = quantity--;
    grandTotal.value = grandTotal.value - 7;

}


