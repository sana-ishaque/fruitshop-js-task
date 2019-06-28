function add() {
    document.getElementById("apple").value++;
    // document.getElementById("total").value+=Number(document.getElementById("apple").value*10);

    document.getElementById("total").value = Number(document.getElementById("apple").value * 10) + Number(document.getElementById("orange").value * 15) + Number(document.getElementById("banana").value * 7)
    if (document.getElementById("total").value > (document.getElementById("balance").value)) {
        alert('Sorry, your wallet amount is less to shop more fruit.');
    }

}
function sub() {
    document.getElementById("apple").value--;
    // document.getElementById("total").value-=10;

    document.getElementById("total").value = Number(document.getElementById("apple").value * 10) + Number(document.getElementById("orange").value * 15) + Number(document.getElementById("banana").value * 7)
}


function add1() {
    document.getElementById("orange").value++;
    // document.getElementById("total").value+=Number(document.getElementById("orange").value*15);

    document.getElementById("total").value = Number(document.getElementById("apple").value * 10) + Number(document.getElementById("orange").value * 15) + Number(document.getElementById("banana").value * 7)
    if (document.getElementById("total").value > (document.getElementById("balance").value)) {
        alert('Sorry, your wallet amoun is less to shop more fruit.');
    }
}
function sub1() {
    document.getElementById("orange").value--;
    // document.getElementById("total").value-=15;

    document.getElementById("total").value = Number(document.getElementById("apple").value * 10) + Number(document.getElementById("orange").value * 15) + Number(document.getElementById("banana").value * 7)


}

function add2() {
    document.getElementById("banana").value++;

    document.getElementById("total").value = Number(document.getElementById("apple").value * 10) + Number(document.getElementById("orange").value * 15) + Number(document.getElementById("banana").value * 7)
    if (document.getElementById("total").value > document.getElementById("balance").value) {
        alert('Sorry, your wallet amoun is less to shop more fruit.');
    }
}
function sub2() {
    document.getElementById("banana").value--;
    document.getElementById("total").value = Number(document.getElementById("apple").value * 10) + Number(document.getElementById("orange").value * 15) + Number(document.getElementById("banana").value * 7)


}