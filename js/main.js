var redScore = 0;
var yellowScore = 0;
var greenScore = 0;
var blueScore = 0;
var amtOfPenalites = 0;

var amtOfRed = 0;
var amtOfyellow = 0;
var amtOfgreen = 0;
var amtOfblue = 0;

var red2Active = false
var red3Active = false
var red4Active = false
var red5Active = false
var red6Active = false
var red7Active = false
var red8Active = false
var red9Active = false
var red10Active = false
var red11Active = false
var red12Active = false
var redLockActive = false

var yellow2Active = false
var yellow3Active = false
var yellow4Active = false
var yellow5Active = false
var yellow6Active = false
var yellow7Active = false
var yellow8Active = false
var yellow9Active = false
var yellow10Active = false
var yellow11Active = false
var yellow12Active = false
var yellowLockActive = false

var green2Active = false
var green3Active = false
var green4Active = false
var green5Active = false
var green6Active = false
var green7Active = false
var green8Active = false
var green9Active = false
var green10Active = false
var green11Active = false
var green12Active = false
var greenLockActive = false

var blue2Active = false
var blue3Active = false
var blue4Active = false
var blue5Active = false
var blue6Active = false
var blue7Active = false
var blue8Active = false
var blue9Active = false
var blue10Active = false
var blue11Active = false
var blue12Active = false
var blueLockActive = false

var total = score + yellowScore + greenScore + blueScore - amtOfPenalites * 5;

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

     red2Active = false
 red3Active = false
 red4Active = false
 red5Active = false
 red6Active = false
 red7Active = false
 red8Active = false
 red9Active = false
 red10Active = false
 red11Active = false
 red12Active = false
 redLockActive = false

 yellow2Active = false
 yellow3Active = false
 yellow4Active = false
 yellow5Active = false
 yellow6Active = false
 yellow7Active = false
 yellow8Active = false
 yellow9Active = false
 yellow10Active = false
 yellow11Active = false
 yellow12Active = false
 yellowLockActive = false

 green2Active = false
 greenActive = false
 green4Active = false
 green5Active = false
 green6Active = false
 green7Active = false
 green8Active = false
 green9Active = false
 green10Active = false
 green11Active = false
 green12Active = false
 greenLockActive = false

 blue2Active = false
 blue3Active = false
 blue4Active = false
 blue5Active = false
 blue6Active = false
 blue7Active = false
 blue8Active = false
 blue9Active = false
 blue10Active = false
 blue11Active = false
 blue12Active = false
 blueLockActive = false

    total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;

}

// Score
function score() {
    document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + (amtOfPenalites * 5) + " = " + total
}

// Penalites
function penaltie1() {
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

function penaltie2() {
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

function penaltie3() {
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

function penaltie4() {
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
    if (red2Active == true) {
        document.getElementById("red2").style.background = "#FFBFC2";
        red2Active = false
        amtOfRed--;
    } else {
        document.getElementById("red2").style.background = "red";
        red2Active = true
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
    if (red3Active == true) {
        document.getElementById("red3").style.background = "#FFBFC2";
        red3Active = false
        amtOfRed--;
    } else {
        document.getElementById("red3").style.background = "red";
        red3Active = true
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
    if (red4Active == true) {
        document.getElementById("red4").style.background = "#FFBFC2";
        red4Active = false
        amtOfRed--;
    } else {
        document.getElementById("red4").style.background = "red";
        red4Active = true
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
    if (red5Active == true) {
        document.getElementById("red5").style.background = "#FFBFC2";
        yellow4Active = false
        amtOfRed--;
    } else {
        document.getElementById("red5").style.background = "red";
        red5Active = true
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
    if (red6Active == true) {
        document.getElementById("red6").style.background = "#FFBFC2";
        red6Active = false
        amtOfRed--;
    } else {
        document.getElementById("red6").style.background = "red";
        red6Active = true
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
    if (red7Active == true) {
        document.getElementById("red7").style.background = "#FFBFC2";
        red7Active = false
        amtOfRed--;
    } else {
        document.getElementById("red7").style.background = "red";
        red7Active = true
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
    if (red8Active == true) {
        document.getElementById("red8").style.background = "#FFBFC2";
        red8Active = false
        amtOfRed--;
    } else {
        document.getElementById("red8").style.background = "red";
        red8Active = true
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
    if (red9Active == true) {
        document.getElementById("red9").style.background = "#FFBFC2";
        red9Active = false
        amtOfRed--;
    } else {
        document.getElementById("red9").style.background = "red";
        red9Active = true
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
    if (red10Active == true) {
        document.getElementById("red10").style.background = "#FFBFC2";
        red10Active = false
        amtOfRed--;
    } else {
        document.getElementById("red10").style.background = "red";
        red10Active = true
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
    if (red11Active == true) {
        document.getElementById("red11").style.background = "#FFBFC2";
        red11Active = false
        amtOfRed--;
    } else {
        document.getElementById("red11").style.background = "red";
        red11Active = true
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
    if (red12Active == true) {
        document.getElementById("red12").style.background = "#FFBFC2";
        red12Active = false
        amtOfRed--;
    } else {
        document.getElementById("red12").style.background = "red";
        red12Active = true
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
    if (redLockActive == true) {
        document.getElementById("redLock").style.background = "#FFBFC2";
        redLockActive = false
        amtOfRed--;
    } else {
        document.getElementById("redLock").style.background = "red";
        redLockActive = true
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
    if (yellow2Active == true) {
        document.getElementById("yellow2").style.background = "#FEECC8";
        yellow2Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow2").style.background = "yellow";
        yellow2Active = true
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
    if (yellow3Active == true) {
        document.getElementById("yellow3").style.background = "#FEECC8";
        yellow3Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow3").style.background = "yellow";
        yellow3Active = true
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
    if (yellow4Active == true) {
        document.getElementById("yellow4").style.background = "#FEECC8";
        yellow4Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow4").style.background = "yellow";
        yellow4Active = true
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
   if (yellow5Active == true) {
        document.getElementById("yellow5").style.background = "#FEECC8";
        yellow5Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow5").style.background = "yellow";
        yellow5Active = true
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
    if (yellow6Active == true) {
        document.getElementById("yellow6").style.background = "#FEECC8";
        yellow6Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow6").style.background = "yellow";
        yellow6Active = true
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
    if (yellow7Active == true) {
        document.getElementById("yellow7").style.background = "#FEECC8";
        yellow7Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow7").style.background = "yellow";
        yellow7Active = true
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
    if (yellow8Active == true) {
        document.getElementById("yellow8").style.background = "#FEECC8";
        yellow8Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow8").style.background = "yellow";
        yellow8Active = true
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
    if (yellow9Active == true) {
        document.getElementById("yellow9").style.background = "#FEECC8";
        yellow9Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow9").style.background = "yellow";
        yellow9Active = true
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
    if (yellow10Active == true) {
        document.getElementById("yellow10").style.background = "#FEECC8";
        yellow10Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow10").style.background = "yellow";
        yellow10Active = true
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
    if (yellow11Active == true) {
        document.getElementById("yellow11").style.background = "#FEECC8";
        yellow11Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow11").style.background = "yellow";
        yellow11Active = true
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
    if (yellow12Active == true) {
        document.getElementById("yellow12").style.background = "#FEECC8";
        yellow12Active = false
        amtOfyellow--;
    } else {
        document.getElementById("yellow12").style.background = "yellow";
        yellow12Active = true
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
    if (yellowLockActive == true) {
        document.getElementById("yellowLock").style.background = "#FEECC8";
        yellowLockActive = false
        amtOfyellow--;
    } else {
        document.getElementById("yellowLock").style.background = "yellow";
        yellowLockActive = true
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
    if (green2Active == true) {
        document.getElementById("green2").style.background = "#C3EBD0";
        green2Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green2").style.background = "green";
        green2Active = true
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
    if (green3Active == true) {
        document.getElementById("green3").style.background = "#C3EBD0";
        green3Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green3").style.background = "green";
        green3Active = true
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
    if (green4Active == true) {
        document.getElementById("green4").style.background = "#C3EBD0";
        green4Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green4").style.background = "green";
        green4Active = true
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
    if (green5Active == true) {
        document.getElementById("green5").style.background = "#C3EBD0";
        green5Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green5").style.background = "green";
        green5Active = true
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
    if (green6Active == true) {
        document.getElementById("green6").style.background = "#C3EBD0";
        green6Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green6").style.background = "green";
        green6Active = true
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
    if (green7Active == true) {
        document.getElementById("green7").style.background = "#C3EBD0";
        green7Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green7").style.background = "green";
        green7Active = true
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
    if (green8Active == true) {
        document.getElementById("green8").style.background = "#C3EBD0";
        green8Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green8").style.background = "green";
        green8Active = true
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
    if (green9Active == true) {
        document.getElementById("green9").style.background = "#C3EBD0";
        green9Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green9").style.background = "green";
        green9Active = true
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
    if (green10Active == true) {
        document.getElementById("green10").style.background = "#C3EBD0";
        green10Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green10").style.background = "green";
        green10Active = true
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
    if (green11Active == true) {
        document.getElementById("green11").style.background = "#C3EBD0";
        green11Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green11").style.background = "green";
        green11Active = true
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
    if (green12Active == true) {
        document.getElementById("green12").style.background = "#C3EBD0";
        green12Active = false
        amtOfgreen--;
    } else {
        document.getElementById("green12").style.background = "green";
        green12Active = true
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
    if (greenLockActive == true) {
        document.getElementById("greenLock").style.background = "#C3EBD0";
        greenLockActive = false
        amtOfgreen--;
    } else {
        document.getElementById("greenLock").style.background = "green";
        greenLockActive = true
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
    if (blue2Active == true) {
        document.getElementById("blue2").style.background = "#BFC8E9";
        blue2Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue2").style.background = "blue";
        blue2Active = true
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
    if (blue3Active == true) {
        document.getElementById("blue3").style.background = "#BFC8E9";
        blue3Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue3").style.background = "blue";
        blue3Active = true
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
    if (blue4Active == true) {
        document.getElementById("blue4").style.background = "#BFC8E9";
        blue4Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue4").style.background = "blue";
        blue4Active = true
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
    if (blue5Active == true) {
        document.getElementById("blue5").style.background = "#BFC8E9";
        blue5Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue5").style.background = "blue";
        blue5Active = true
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
    if (blue6Active == true) {
        document.getElementById("blue6").style.background = "#BFC8E9";
        blue6Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue6").style.background = "blue";
        blue6Active = true
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
    if (blue7Active == true) {
        document.getElementById("blue7").style.background = "#BFC8E9";
        blue7Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue7").style.background = "blue";
        blue7Active = true
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
    if (blue8Active == true) {
        document.getElementById("blue8").style.background = "#BFC8E9";
        blue8Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue8").style.background = "blue";
        blue8Active = true
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
    if (blue9Active == true) {
        document.getElementById("blue9").style.background = "#BFC8E9";
        blue9Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue9").style.background = "blue";
        blue9Active = true
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
    if (blue10Active == true) {
        document.getElementById("blue10").style.background = "#BFC8E9";
        blue10Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue10").style.background = "blue";
        blue10Active = true
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
    if (blue11Active == true) {
        document.getElementById("blue11").style.background = "#BFC8E9";
        blue11Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue11").style.background = "blue";
        blue11Active = true
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
    if (blue12Active == true) {
        document.getElementById("blue12").style.background = "#BFC8E9";
        blue12Active = false
        amtOfblue--;
    } else {
        document.getElementById("blue12").style.background = "blue";
        blue12Active = true
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
    if (blueLockActive == true) {
        document.getElementById("blueLock").style.background = "#BFC8E9";
        blueLockActive = false
        amtOfblue--;
    } else {
        document.getElementById("blueLock").style.background = "blue";
        blueLockActive = true
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