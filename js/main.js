var redScore = 0;
var yellowScore = 0;
var greenScore = 0;
var blueScore = 0;
var amtOfPenalites = 0;

var amtOfRed = 0;
var amtOfyellow = 0;
var amtOfgreen = 0;
var amtOfblue = 0;

var total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;

// Reset
function reset() {
    // Red
    document.getElementById("red2").style.background = "#FFBFC2";
    document.getElementById("red3").style.background = "#FFBFC2";
    document.getElementById("red4").style.background = "#FFBFC2";
    document.getElementById("red5").style.background = "#FFBFC2";
    document.getElementById("red6").style.background = "#FFBFC2";
    document.getElementById("red7").style.background = "#FFBFC2";
    document.getElementById("red8").style.background = "#FFBFC2";
    document.getElementById("red9").style.background = "#FFBFC2";
    document.getElementById("red10").style.background = "#FFBFC2";
    document.getElementById("red11").style.background = "#FFBFC2";
    document.getElementById("red12").style.background = "#FFBFC2";

    document.getElementById("redLock").style.background = "#FFBFC2";

    // Yellow
    document.getElementById("yellow2").style.background = "#FEECC8";
    document.getElementById("yellow3").style.background = "#FEECC8";
    document.getElementById("yellow4").style.background = "#FEECC8";
    document.getElementById("yellow5").style.background = "#FEECC8";
    document.getElementById("yellow6").style.background = "#FEECC8";
    document.getElementById("yellow7").style.background = "#FEECC8";
    document.getElementById("yellow8").style.background = "#FEECC8";
    document.getElementById("yellow9").style.background = "#FEECC8";
    document.getElementById("yellow10").style.background = "#FEECC8";
    document.getElementById("yellow11").style.background = "#FEECC8";
    document.getElementById("yellow12").style.background = "#FEECC8";

    document.getElementById("yellowLock").style.background = "#FEECC8";

    // Green
    document.getElementById("green2").style.background = "#C3EBD0";
    document.getElementById("green3").style.background = "#C3EBD0";
    document.getElementById("green4").style.background = "#C3EBD0";
    document.getElementById("green5").style.background = "#C3EBD0";
    document.getElementById("green6").style.background = "#C3EBD0";
    document.getElementById("green7").style.background = "#C3EBD0";
    document.getElementById("green8").style.background = "#C3EBD0";
    document.getElementById("green9").style.background = "#C3EBD0";
    document.getElementById("green10").style.background = "#C3EBD0";
    document.getElementById("green11").style.background = "#C3EBD0";
    document.getElementById("green12").style.background = "#C3EBD0";

    document.getElementById("greenLock").style.background = "#C3EBD0";

    // Blue
    document.getElementById("blue2").style.background = "#BFC8E9";
    document.getElementById("blue3").style.background = "#BFC8E9";
    document.getElementById("blue4").style.background = "#BFC8E9";
    document.getElementById("blue5").style.background = "#BFC8E9";
    document.getElementById("blue6").style.background = "#BFC8E9";
    document.getElementById("blue7").style.background = "#BFC8E9";
    document.getElementById("blue8").style.background = "#BFC8E9";
    document.getElementById("blue9").style.background = "#BFC8E9";
    document.getElementById("blue10").style.background = "#BFC8E9";
    document.getElementById("blue11").style.background = "#BFC8E9";
    document.getElementById("blue12").style.background = "#BFC8E9";

    document.getElementById("blueLock").style.background = "#BFC8E9";
    document.getElementById("score").innerHTML = "Are you starting today?"

    document.getElementById("pen1").style.background = "#E2E1E6";
    document.getElementById("pen2").style.background = "#E2E1E6";
    document.getElementById("pen3").style.background = "#E2E1E6";
    document.getElementById("pen4").style.background = "#E2E1E6";

    redScore = 0;
    yellowScore = 0;
    greenScore = 0;
    blueScore = 0;
    amtOfPenalites = 0;

    amtOfRed = 0;
    amtOfyellow = 0;
    amtOfgreen = 0;
    amtOfblue = 0;

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;


    console.log("Restart")
}

// Score
function score() {
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}

// Penalites
function penaltie1(){
    if (document.getElementById("pen1").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("pen1").style.background = "#E2E1E6";
        amtOfPenalites--;
    } else {
        document.getElementById("pen1").style.background = "red";
        amtOfPenalites++;
    }
    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}
function penaltie2(){
    if (document.getElementById("pen2").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("pen2").style.background = "#E2E1E6";
        amtOfPenalites--;
    } else {
        document.getElementById("pen2").style.background = "red";
        amtOfPenalites++;
    }

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}

function penaltie3(){
    if (document.getElementById("pen3").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("pen3").style.background = "#E2E1E6";
        amtOfPenalites--;
    } else {
        document.getElementById("pen3").style.background = "red";
        amtOfPenalites++;
    }
    
    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}
function penaltie4(){
    if (document.getElementById("pen4").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("pen4").style.background = "#E2E1E6";
        amtOfPenalites--;
    } else {
        document.getElementById("pen4").style.background = "red";
        amtOfPenalites++;
    }

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}

// Red row
function keepRed2() {
    if (document.getElementById("red2").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red2").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red2").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed3() {
    if (document.getElementById("red3").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red3").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red3").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed4() {
    if (document.getElementById("red4").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red4").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red4").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed5() {
    if (document.getElementById("red5").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red5").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red5").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed6() {
    if (document.getElementById("red6").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red6").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red6").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed7() {
    if (document.getElementById("red7").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red7").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red7").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed8() {
    if (document.getElementById("red8").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red8").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red8").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed9() {
    if (document.getElementById("red9").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red9").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red9").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed10() {
    if (document.getElementById("red10").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red10").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red10").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed11() {
    if (document.getElementById("red11").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red11").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red11").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRed12() {
    if (document.getElementById("red12").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("red12").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("red12").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepRedLock() {
    if (document.getElementById("redLock").style.background == "red none repeat scroll 0% 0%") {
        document.getElementById("redLock").style.background = "#FFBFC2";
        amtOfRed--;
    } else {
        document.getElementById("redLock").style.background = "red";
        amtOfRed++;
    }

    if (amtOfRed == 1) redScore = 1
    if (amtOfRed == 2) redScore = 3
    if (amtOfRed == 3) redScore = 6
    if (amtOfRed == 4) redScore = 10
    if (amtOfRed == 5) redScore = 15
    if (amtOfRed == 6) redScore = 21
    if (amtOfRed == 7) redScore = 28
    if (amtOfRed == 8) redScore = 36
    if (amtOfRed == 9) redScore = 45
    if (amtOfRed == 10) redScore = 55
    if (amtOfRed == 11) redScore = 66
    if (amtOfRed == 12) redScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}


// Yellow row
function keepyellow2() {
    if (document.getElementById("yellow2").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow2").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow2").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow3() {
    if (document.getElementById("yellow3").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow3").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow3").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow4() {
    if (document.getElementById("yellow4").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow4").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow4").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow5() {
    if (document.getElementById("yellow5").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow5").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow5").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow6() {
    if (document.getElementById("yellow6").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow6").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow6").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow7() {
    if (document.getElementById("yellow7").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow7").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow7").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow8() {
    if (document.getElementById("yellow8").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow8").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow8").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow9() {
    if (document.getElementById("yellow9").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow9").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow9").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow10() {
    if (document.getElementById("yellow10").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow10").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow10").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow11() {
    if (document.getElementById("yellow11").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow11").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow11").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellow12() {
    if (document.getElementById("yellow12").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellow12").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellow12").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepyellowLock() {
    if (document.getElementById("yellowLock").style.background == "yellow none repeat scroll 0% 0%") {
        document.getElementById("yellowLock").style.background = "#FEECC8";
        amtOfyellow--;
    } else {
        document.getElementById("yellowLock").style.background = "yellow";
        amtOfyellow++;
    }

    if (amtOfyellow == 1) yellowScore = 1
    if (amtOfyellow == 2) yellowScore = 3
    if (amtOfyellow == 3) yellowScore = 6
    if (amtOfyellow == 4) yellowScore = 10
    if (amtOfyellow == 5) yellowScore = 15
    if (amtOfyellow == 6) yellowScore = 21
    if (amtOfyellow == 7) yellowScore = 28
    if (amtOfyellow == 8) yellowScore = 36
    if (amtOfyellow == 9) yellowScore = 45
    if (amtOfyellow == 10) yellowScore = 55
    if (amtOfyellow == 11) yellowScore = 66
    if (amtOfyellow == 12) yellowScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}


// Green row
function keepgreen2() {
    if (document.getElementById("green2").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green2").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green2").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen3() {
    if (document.getElementById("green3").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green3").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green3").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen4() {
    if (document.getElementById("green4").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green4").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green4").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen5() {
    if (document.getElementById("green5").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green5").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green5").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen6() {
    if (document.getElementById("green6").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green6").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green6").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen7() {
    if (document.getElementById("green7").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green7").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green7").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen8() {
    if (document.getElementById("green8").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green8").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green8").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen9() {
    if (document.getElementById("green9").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green9").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green9").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen10() {
    if (document.getElementById("green10").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green10").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green10").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen11() {
    if (document.getElementById("green11").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green11").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green11").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreen12() {
    if (document.getElementById("green12").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("green12").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("green12").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepgreenLock() {
    if (document.getElementById("greenLock").style.background == "green none repeat scroll 0% 0%") {
        document.getElementById("greenLock").style.background = "#C3EBD0";
        amtOfgreen--;
    } else {
        document.getElementById("greenLock").style.background = "green";
        amtOfgreen++;
    }

    if (amtOfgreen == 1) greenScore = 1
    if (amtOfgreen == 2) greenScore = 3
    if (amtOfgreen == 3) greenScore = 6
    if (amtOfgreen == 4) greenScore = 10
    if (amtOfgreen == 5) greenScore = 15
    if (amtOfgreen == 6) greenScore = 21
    if (amtOfgreen == 7) greenScore = 28
    if (amtOfgreen == 8) greenScore = 36
    if (amtOfgreen == 9) greenScore = 45
    if (amtOfgreen == 10) greenScore = 55
    if (amtOfgreen == 11) greenScore = 66
    if (amtOfgreen == 12) greenScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}


// Blue row
function keepblue2() {
    if (document.getElementById("blue2").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue2").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue2").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue3() {
    if (document.getElementById("blue3").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue3").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue3").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue4() {
    if (document.getElementById("blue4").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue4").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue4").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue5() {
    if (document.getElementById("blue5").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue5").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue5").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue6() {
    if (document.getElementById("blue6").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue6").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue6").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue7() {
    if (document.getElementById("blue7").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue7").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue7").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue8() {
    if (document.getElementById("blue8").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue8").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue8").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue9() {
    if (document.getElementById("blue9").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue9").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue9").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue10() {
    if (document.getElementById("blue10").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue10").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue10").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue11() {
    if (document.getElementById("blue11").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue11").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue11").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblue12() {
    if (document.getElementById("blue12").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blue12").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blue12").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total

}

function keepblueLock() {
    if (document.getElementById("blueLock").style.background == "blue none repeat scroll 0% 0%") {
        document.getElementById("blueLock").style.background = "#BFC8E9";
        amtOfblue--;
    } else {
        document.getElementById("blueLock").style.background = "blue";
        amtOfblue++;
    }

    if (amtOfblue == 1) blueScore = 1
    if (amtOfblue == 2) blueScore = 3
    if (amtOfblue == 3) blueScore = 6
    if (amtOfblue == 4) blueScore = 10
    if (amtOfblue == 5) blueScore = 15
    if (amtOfblue == 6) blueScore = 21
    if (amtOfblue == 7) blueScore = 28
    if (amtOfblue == 8) blueScore = 36
    if (amtOfblue == 9) blueScore = 45
    if (amtOfblue == 10) blueScore = 55
    if (amtOfblue == 11) blueScore = 66
    if (amtOfblue == 12) blueScore = 78

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}