var redScore = 0;
var yellowScore = 0;
var greenScore = 0;
var blueScore = 0;
var amtOfPenalites = 0;

var amtOfRed = 0;
var amtOfyellow = 0;
var amtOfgreen = 0;
var amtOfblue = 0;

var red2Active = false;
var red3Active = false;
var red4Active = false;
var red5Active = false;
var red6Active = false;
var red7Active = false;
var red8Active = false;
var red9Active = false;
var red10Active = false;
var red11Active = false;
var red12Active = false;
var redLockActive = false;

var yellow2Active = false;
var yellow3Active = false;
var yellow4Active = false;
var yellow5Active = false;
var yellow6Active = false;
var yellow7Active = false;
var yellow8Active = false;
var yellow9Active = false;
var yellow10Active = false;
var yellow11Active = false;
var yellow12Active = false;
var yellowLockActive = false;

var green2Active = false;
var green3Active = false;
var green4Active = false;
var green5Active = false;
var green6Active = false;
var green7Active = false;
var green8Active = false;
var green9Active = false;
var green10Active = false;
var green11Active = false;
var green12Active = false;
var greenLockActive = false;

var blue2Active = false;
var blue3Active = false;
var blue4Active = false;
var blue5Active = false;
var blue6Active = false;
var blue7Active = false;
var blue8Active = false;
var blue9Active = false;
var blue10Active = false;
var blue11Active = false;
var blue12Active = false;
var blueLockActive = false;

var pen1Active = false;
var pen2Active = false;
var pen3Active = false;
var pen4Active = false;

var total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;

// Reset
function reset() {
  document.getElementById("checkRed").checked = false;
  document.getElementById("checkYellow").checked = false;
  document.getElementById("checkGreen").checked = false;
  document.getElementById("checkBlue").checked = false;

  stateRed = -1;
  stateBlue = -1;
  stateGreen = -1;
  stateYellow = -1;

  checkedRed();
  checkedYellow();
  checkedGreen();
  checkedBlue();

  for (z = 0; z < 4; z++) {
    if (z == 0) {
      color = "red";
      hexColor = "#FFBFC2";
    }
    if (z == 1) {
      color = "yellow";
      hexColor = "#FEECC8";
    }
    if (z == 2) {
      color = "green";
      hexColor = "#C3EBD0";
    }
    if (z == 3) {
      color = "blue";
      hexColor = "#BFC8E9";
    }
    for (i = 2; i < 14; i++) {
      if (i == 13) i = "Lock";
      document.getElementById(color + i).style.background = hexColor;
    }
  }

  for (x = 1; x < 5; x++) document.getElementById("pen" + x).style.background = "white";

  document.getElementById("score").innerHTML = "";

  redScore = 0;
  yellowScore = 0;
  greenScore = 0;
  blueScore = 0;
  amtOfPenalites = 0;

  amtOfRed = 0;
  amtOfyellow = 0;
  amtOfgreen = 0;
  amtOfblue = 0;

  red2Active = false;
  red3Active = false;
  red4Active = false;
  red5Active = false;
  red6Active = false;
  red7Active = false;
  red8Active = false;
  red9Active = false;
  red10Active = false;
  red11Active = false;
  red12Active = false;
  redLockActive = false;

  yellow2Active = false;
  yellow3Active = false;
  yellow4Active = false;
  yellow5Active = false;
  yellow6Active = false;
  yellow7Active = false;
  yellow8Active = false;
  yellow9Active = false;
  yellow10Active = false;
  yellow11Active = false;
  yellow12Active = false;
  yellowLockActive = false;

  green2Active = false;
  green3Active = false;
  green4Active = false;
  green5Active = false;
  green6Active = false;
  green7Active = false;
  green8Active = false;
  green9Active = false;
  green10Active = false;
  green11Active = false;
  green12Active = false;
  greenLockActive = false;

  blue2Active = false;
  blue3Active = false;
  blue4Active = false;
  blue5Active = false;
  blue6Active = false;
  blue7Active = false;
  blue8Active = false;
  blue9Active = false;
  blue10Active = false;
  blue11Active = false;
  blue12Active = false;
  blueLockActive = false;

  pen1Active = false;
  pen2Active = false;
  pen3Active = false;
  pen4Active = false;

  total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

// Cookies
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Recover old board
function recoverBoard() {
  // Red
  if (getCookie("red2") == "active") {
    document.getElementById("red2").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red3") == "active") {
    document.getElementById("red3").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red4") == "active") {
    document.getElementById("red4").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red5") == "active") {
    document.getElementById("red5").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red6") == "active") {
    document.getElementById("red6").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red7") == "active") {
    document.getElementById("red7").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red8") == "active") {
    document.getElementById("red8").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red9") == "active") {
    document.getElementById("red9").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red10") == "active") {
    document.getElementById("red10").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red11") == "active") {
    document.getElementById("red11").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("red12") == "active") {
    document.getElementById("red12").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }
  if (getCookie("redLock") == "active") {
    document.getElementById("redLock").style.background = "red";
    red2Active = true;
    amtOfRed++;

    redScore = getScore(amtOfRed);
    score();
  }

  // yellow
  if (getCookie("yellow2") == "active") {
    document.getElementById("yellow2").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow3") == "active") {
    document.getElementById("yellow3").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow4") == "active") {
    document.getElementById("yellow4").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow5") == "active") {
    document.getElementById("yellow5").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow6") == "active") {
    document.getElementById("yellow6").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow7") == "active") {
    document.getElementById("yellow7").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow8") == "active") {
    document.getElementById("yellow8").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow9") == "active") {
    document.getElementById("yellow9").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow10") == "active") {
    document.getElementById("yellow10").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow11") == "active") {
    document.getElementById("yellow11").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellow12") == "active") {
    document.getElementById("yellow12").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }
  if (getCookie("yellowLock") == "active") {
    document.getElementById("yellowLock").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;

    yellowScore = getScore(amtOfyellow);
    score();
  }

  // green
  if (getCookie("green2") == "active") {
    document.getElementById("green2").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green3") == "active") {
    document.getElementById("green3").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green4") == "active") {
    document.getElementById("green4").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green5") == "active") {
    document.getElementById("green5").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green6") == "active") {
    document.getElementById("green6").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green7") == "active") {
    document.getElementById("green7").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green8") == "active") {
    document.getElementById("green8").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green9") == "active") {
    document.getElementById("green9").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green10") == "active") {
    document.getElementById("green10").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green11") == "active") {
    document.getElementById("green11").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("green12") == "active") {
    document.getElementById("green12").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }
  if (getCookie("greenLock") == "active") {
    document.getElementById("greenLock").style.background = "green";
    green2Active = true;
    amtOfgreen++;

    greenScore = getScore(amtOfgreen);
    score();
  }

  // blue
  if (getCookie("blue2") == "active") {
    document.getElementById("blue2").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue3") == "active") {
    document.getElementById("blue3").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue4") == "active") {
    document.getElementById("blue4").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue5") == "active") {
    document.getElementById("blue5").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue6") == "active") {
    document.getElementById("blue6").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue7") == "active") {
    document.getElementById("blue7").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue8") == "active") {
    document.getElementById("blue8").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue9") == "active") {
    document.getElementById("blue9").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue10") == "active") {
    document.getElementById("blue10").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue11") == "active") {
    document.getElementById("blue11").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blue12") == "active") {
    document.getElementById("blue12").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }
  if (getCookie("blueLock") == "active") {
    document.getElementById("blueLock").style.background = "blue";
    blue2Active = true;
    amtOfblue++;

    blueScore = getScore(amtOfblue);
    score();
  }

  // Penalites
  if (getCookie("pen1") == "active") {
    document.getElementById("pen1").style.background = "red";
    pen1Active = true;
    amtOfPenalites++;
    score();
  }
  if (getCookie("pen2") == "active") {
    document.getElementById("pen2").style.background = "red";
    pen2Active = true;
    amtOfPenalites++;
    score();
  }
  if (getCookie("pen3") == "active") {
    document.getElementById("pen3").style.background = "red";
    pen3Active = true;
    amtOfPenalites++;
    score();
  }
  if (getCookie("pen4") == "active") {
    document.getElementById("pen4").style.background = "red";
    pen4Active = true;
    amtOfPenalites++;
    score();
  }
}

// Score
function score() {
  total = redScore + yellowScore + greenScore + blueScore - amtOfPenalites * 5;
  document.getElementById("score").innerHTML = redScore + " + " + yellowScore + " + " + greenScore + " + " + blueScore + " - " + amtOfPenalites * 5 + " = " + total;
}

function getScore(amt) {
  if (amt == 0) return 0;
  if (amt == 1) return 1;
  if (amt == 2) return 3;
  if (amt == 3) return 6;
  if (amt == 4) return 10;
  if (amt == 5) return 15;
  if (amt == 6) return 21;
  if (amt == 7) return 28;
  if (amt == 8) return 36;
  if (amt == 9) return 45;
  if (amt == 10) return 55;
  if (amt == 11) return 66;
  if (amt == 12) return 78;
}

// Crossover
var stateRed = 0;
var stateBlue = 0;
var stateGreen = 0;
var stateYellow = 0;
function checkedRed() {
  var status;
  if (stateRed % 2 == 0) {
    status = true;
    document.getElementById("red2").disabled = status;
    document.getElementById("red3").disabled = status;
    document.getElementById("red4").disabled = status;
    document.getElementById("red5").disabled = status;
    document.getElementById("red6").disabled = status;
    document.getElementById("red7").disabled = status;
    document.getElementById("red8").disabled = status;
    document.getElementById("red9").disabled = status;
    document.getElementById("red10").disabled = status;
    document.getElementById("red11").disabled = status;
    document.getElementById("red12").disabled = status;
    document.getElementById("redLock").disabled = status;
  } else {
    status = false;
    document.getElementById("red2").disabled = status;
    document.getElementById("red3").disabled = status;
    document.getElementById("red4").disabled = status;
    document.getElementById("red5").disabled = status;
    document.getElementById("red6").disabled = status;
    document.getElementById("red7").disabled = status;
    document.getElementById("red8").disabled = status;
    document.getElementById("red9").disabled = status;
    document.getElementById("red10").disabled = status;
    document.getElementById("red11").disabled = status;
    document.getElementById("red12").disabled = status;
    document.getElementById("redLock").disabled = status;
  }
  stateRed++;
}
function checkedGreen() {
  var status;
  if (stateGreen % 2 == 0) {
    status = true;
    document.getElementById("green2").disabled = status;
    document.getElementById("green3").disabled = status;
    document.getElementById("green4").disabled = status;
    document.getElementById("green5").disabled = status;
    document.getElementById("green6").disabled = status;
    document.getElementById("green7").disabled = status;
    document.getElementById("green8").disabled = status;
    document.getElementById("green9").disabled = status;
    document.getElementById("green10").disabled = status;
    document.getElementById("green11").disabled = status;
    document.getElementById("green12").disabled = status;
    document.getElementById("greenLock").disabled = status;
  } else {
    status = false;
    document.getElementById("green2").disabled = status;
    document.getElementById("green3").disabled = status;
    document.getElementById("green4").disabled = status;
    document.getElementById("green5").disabled = status;
    document.getElementById("green6").disabled = status;
    document.getElementById("green7").disabled = status;
    document.getElementById("green8").disabled = status;
    document.getElementById("green9").disabled = status;
    document.getElementById("green10").disabled = status;
    document.getElementById("green11").disabled = status;
    document.getElementById("green12").disabled = status;
    document.getElementById("greenLock").disabled = status;
  }
  stateGreen++;
}
function checkedBlue() {
  var status;
  if (stateBlue % 2 == 0) {
    status = true;
    document.getElementById("blue2").disabled = status;
    document.getElementById("blue3").disabled = status;
    document.getElementById("blue4").disabled = status;
    document.getElementById("blue5").disabled = status;
    document.getElementById("blue6").disabled = status;
    document.getElementById("blue7").disabled = status;
    document.getElementById("blue8").disabled = status;
    document.getElementById("blue9").disabled = status;
    document.getElementById("blue10").disabled = status;
    document.getElementById("blue11").disabled = status;
    document.getElementById("blue12").disabled = status;
    document.getElementById("blueLock").disabled = status;
  } else {
    status = false;
    document.getElementById("blue2").disabled = status;
    document.getElementById("blue3").disabled = status;
    document.getElementById("blue4").disabled = status;
    document.getElementById("blue5").disabled = status;
    document.getElementById("blue6").disabled = status;
    document.getElementById("blue7").disabled = status;
    document.getElementById("blue8").disabled = status;
    document.getElementById("blue9").disabled = status;
    document.getElementById("blue10").disabled = status;
    document.getElementById("blue11").disabled = status;
    document.getElementById("blue12").disabled = status;
    document.getElementById("blueLock").disabled = status;
  }
  stateBlue++;
}
function checkedYellow() {
  var status;
  if (stateYellow % 2 == 0) {
    status = true;
    document.getElementById("yellow2").disabled = status;
    document.getElementById("yellow3").disabled = status;
    document.getElementById("yellow4").disabled = status;
    document.getElementById("yellow5").disabled = status;
    document.getElementById("yellow6").disabled = status;
    document.getElementById("yellow7").disabled = status;
    document.getElementById("yellow8").disabled = status;
    document.getElementById("yellow9").disabled = status;
    document.getElementById("yellow10").disabled = status;
    document.getElementById("yellow11").disabled = status;
    document.getElementById("yellow12").disabled = status;
    document.getElementById("yellowLock").disabled = status;
  } else {
    status = false;
    document.getElementById("yellow2").disabled = status;
    document.getElementById("yellow3").disabled = status;
    document.getElementById("yellow4").disabled = status;
    document.getElementById("yellow5").disabled = status;
    document.getElementById("yellow6").disabled = status;
    document.getElementById("yellow7").disabled = status;
    document.getElementById("yellow8").disabled = status;
    document.getElementById("yellow9").disabled = status;
    document.getElementById("yellow10").disabled = status;
    document.getElementById("yellow11").disabled = status;
    document.getElementById("yellow12").disabled = status;
    document.getElementById("yellowLock").disabled = status;
  }
  stateYellow++;
}

// Penalites
function penaltie1() {
  if (pen1Active == true) {
    document.getElementById("pen1").style.background = "white";
    pen1Active = false;
    amtOfPenalites--;
    eraseCookie("pen1");
  } else {
    document.getElementById("pen1").style.background = "red";
    pen1Active = true;
    amtOfPenalites++;
    setCookie("pen1", "active");
  }

  score();
}

function penaltie2() {
  if (pen2Active == true) {
    document.getElementById("pen2").style.background = "white";
    pen2Active = false;
    amtOfPenalites--;
    eraseCookie("pen2");
  } else {
    document.getElementById("pen2").style.background = "red";
    pen2Active = true;
    amtOfPenalites++;
    setCookie("pen2", "active");
  }

  score();
}

function penaltie3() {
  if (pen3Active == true) {
    document.getElementById("pen3").style.background = "white";
    pen3Active = false;
    amtOfPenalites--;
    eraseCookie("pen3");
  } else {
    document.getElementById("pen3").style.background = "red";
    pen3Active = true;
    amtOfPenalites++;
    setCookie("pen3", "active");
  }

  score();
}

function penaltie4() {
  if (pen4Active == true) {
    document.getElementById("pen4").style.background = "white";
    pen4Active = false;
    amtOfPenalites--;
    eraseCookie("pen4");
  } else {
    document.getElementById("pen4").style.background = "red";
    pen4Active = true;
    amtOfPenalites++;
    setCookie("pen4", "active");
  }

  score();
}

// Red row
function keepRed2() {
  if (red2Active == true) {
    document.getElementById("red2").style.background = "#FFBFC2";
    red2Active = false;
    amtOfRed--;
    eraseCookie("red2");
  } else {
    document.getElementById("red2").style.background = "red";
    red2Active = true;
    amtOfRed++;
    setCookie("red2", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed3() {
  if (red3Active == true) {
    document.getElementById("red3").style.background = "#FFBFC2";
    red3Active = false;
    amtOfRed--;
    eraseCookie("red3");
  } else {
    document.getElementById("red3").style.background = "red";
    red3Active = true;
    amtOfRed++;
    setCookie("red3", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed4() {
  if (red4Active == true) {
    document.getElementById("red4").style.background = "#FFBFC2";
    red4Active = false;
    amtOfRed--;
    eraseCookie("red4");
  } else {
    document.getElementById("red4").style.background = "red";
    red4Active = true;
    amtOfRed++;
    setCookie("red4", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed5() {
  if (red5Active == true) {
    document.getElementById("red5").style.background = "#FFBFC2";
    red5Active = false;
    amtOfRed--;
    eraseCookie("red5");
  } else {
    document.getElementById("red5").style.background = "red";
    red5Active = true;
    amtOfRed++;
    setCookie("red5", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed6() {
  if (red6Active == true) {
    document.getElementById("red6").style.background = "#FFBFC2";
    red6Active = false;
    amtOfRed--;
    eraseCookie("red6");
  } else {
    document.getElementById("red6").style.background = "red";
    red6Active = true;
    amtOfRed++;
    setCookie("red6", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed7() {
  if (red7Active == true) {
    document.getElementById("red7").style.background = "#FFBFC2";
    red7Active = false;
    amtOfRed--;
    eraseCookie("red7");
  } else {
    document.getElementById("red7").style.background = "red";
    red7Active = true;
    amtOfRed++;
    setCookie("red7", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed8() {
  if (red8Active == true) {
    document.getElementById("red8").style.background = "#FFBFC2";
    red8Active = false;
    amtOfRed--;
    eraseCookie("red8");
  } else {
    document.getElementById("red8").style.background = "red";
    red8Active = true;
    amtOfRed++;
    setCookie("red8", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed9() {
  if (red9Active == true) {
    document.getElementById("red9").style.background = "#FFBFC2";
    red9Active = false;
    amtOfRed--;
    eraseCookie("red9");
  } else {
    document.getElementById("red9").style.background = "red";
    red9Active = true;
    amtOfRed++;
    setCookie("red9", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed10() {
  if (red10Active == true) {
    document.getElementById("red10").style.background = "#FFBFC2";
    red10Active = false;
    amtOfRed--;
    eraseCookie("red10");
  } else {
    document.getElementById("red10").style.background = "red";
    red10Active = true;
    amtOfRed++;
    setCookie("red10", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed11() {
  if (red11Active == true) {
    document.getElementById("red11").style.background = "#FFBFC2";
    red11Active = false;
    amtOfRed--;
    eraseCookie("red11");
  } else {
    document.getElementById("red11").style.background = "red";
    red11Active = true;
    amtOfRed++;
    setCookie("red11", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRed12() {
  if (red12Active == true) {
    document.getElementById("red12").style.background = "#FFBFC2";
    red12Active = false;
    amtOfRed--;
    eraseCookie("red12");
  } else {
    document.getElementById("red12").style.background = "red";
    red12Active = true;
    amtOfRed++;
    setCookie("red12", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

function keepRedLock() {
  if (redLockActive == true) {
    document.getElementById("redLock").style.background = "#FFBFC2";
    redLockActive = false;
    amtOfRed--;
    eraseCookie("redLock");
  } else {
    document.getElementById("redLock").style.background = "red";
    redLockActive = true;
    amtOfRed++;
    setCookie("redLock", "active");
  }

  redScore = getScore(amtOfRed);
  score();
}

// Yellow row
function keepyellow2() {
  if (yellow2Active == true) {
    document.getElementById("yellow2").style.background = "#FEECC8";
    yellow2Active = false;
    amtOfyellow--;
    eraseCookie("yellow2");
  } else {
    document.getElementById("yellow2").style.background = "yellow";
    yellow2Active = true;
    amtOfyellow++;
    setCookie("yellow2", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow3() {
  if (yellow3Active == true) {
    document.getElementById("yellow3").style.background = "#FEECC8";
    yellow3Active = false;
    amtOfyellow--;
    eraseCookie("yellow3");
  } else {
    document.getElementById("yellow3").style.background = "yellow";
    yellow3Active = true;
    amtOfyellow++;
    setCookie("yellow3", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow4() {
  if (yellow4Active == true) {
    document.getElementById("yellow4").style.background = "#FEECC8";
    yellow4Active = false;
    amtOfyellow--;
    eraseCookie("yellow4");
  } else {
    document.getElementById("yellow4").style.background = "yellow";
    yellow4Active = true;
    amtOfyellow++;
    setCookie("yellow4", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow5() {
  if (yellow5Active == true) {
    document.getElementById("yellow5").style.background = "#FEECC8";
    yellow5Active = false;
    amtOfyellow--;
    eraseCookie("yellow5");
  } else {
    document.getElementById("yellow5").style.background = "yellow";
    yellow5Active = true;
    amtOfyellow++;
    setCookie("yellow5", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow6() {
  if (yellow6Active == true) {
    document.getElementById("yellow6").style.background = "#FEECC8";
    yellow6Active = false;
    amtOfyellow--;
    eraseCookie("yellow6");
  } else {
    document.getElementById("yellow6").style.background = "yellow";
    yellow6Active = true;
    amtOfyellow++;
    setCookie("yellow6", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow7() {
  if (yellow7Active == true) {
    document.getElementById("yellow7").style.background = "#FEECC8";
    yellow7Active = false;
    amtOfyellow--;
    eraseCookie("yellow7");
  } else {
    document.getElementById("yellow7").style.background = "yellow";
    yellow7Active = true;
    amtOfyellow++;
    setCookie("yellow7", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow8() {
  if (yellow8Active == true) {
    document.getElementById("yellow8").style.background = "#FEECC8";
    yellow8Active = false;
    amtOfyellow--;
    eraseCookie("yellow8");
  } else {
    document.getElementById("yellow8").style.background = "yellow";
    yellow8Active = true;
    amtOfyellow++;
    setCookie("yellow8", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow9() {
  if (yellow9Active == true) {
    document.getElementById("yellow9").style.background = "#FEECC8";
    yellow9Active = false;
    amtOfyellow--;
    eraseCookie("yellow9");
  } else {
    document.getElementById("yellow9").style.background = "yellow";
    yellow9Active = true;
    amtOfyellow++;
    setCookie("yellow9", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow10() {
  if (yellow10Active == true) {
    document.getElementById("yellow10").style.background = "#FEECC8";
    yellow10Active = false;
    amtOfyellow--;
    eraseCookie("yellow10");
  } else {
    document.getElementById("yellow10").style.background = "yellow";
    yellow10Active = true;
    amtOfyellow++;
    setCookie("yellow10", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow11() {
  if (yellow11Active == true) {
    document.getElementById("yellow11").style.background = "#FEECC8";
    yellow11Active = false;
    amtOfyellow--;
    eraseCookie("yellow11");
  } else {
    document.getElementById("yellow11").style.background = "yellow";
    yellow11Active = true;
    amtOfyellow++;
    setCookie("yellow11", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellow12() {
  if (yellow12Active == true) {
    document.getElementById("yellow12").style.background = "#FEECC8";
    yellow12Active = false;
    amtOfyellow--;
    eraseCookie("yellow12");
  } else {
    document.getElementById("yellow12").style.background = "yellow";
    yellow12Active = true;
    amtOfyellow++;
    setCookie("yellow12", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

function keepyellowLock() {
  if (yellowLockActive == true) {
    document.getElementById("yellowLock").style.background = "#FEECC8";
    yellowLockActive = false;
    amtOfyellow--;
    eraseCookie("yellowLock");
  } else {
    document.getElementById("yellowLock").style.background = "yellow";
    yellowLockActive = true;
    amtOfyellow++;
    setCookie("yellowLock", "active");
  }

  yellowScore = getScore(amtOfyellow);
  score();
}

// Green row
function keepgreen2() {
  if (green2Active == true) {
    document.getElementById("green2").style.background = "#C3EBD0";
    green2Active = false;
    amtOfgreen--;
    eraseCookie("green2");
  } else {
    document.getElementById("green2").style.background = "green";
    green2Active = true;
    amtOfgreen++;
    setCookie("green2", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen3() {
  if (green3Active == true) {
    document.getElementById("green3").style.background = "#C3EBD0";
    green3Active = false;
    amtOfgreen--;
    eraseCookie("green3");
  } else {
    document.getElementById("green3").style.background = "green";
    green3Active = true;
    amtOfgreen++;
    setCookie("green3", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen4() {
  if (green4Active == true) {
    document.getElementById("green4").style.background = "#C3EBD0";
    green4Active = false;
    amtOfgreen--;
    eraseCookie("green4");
  } else {
    document.getElementById("green4").style.background = "green";
    green4Active = true;
    amtOfgreen++;
    setCookie("green4", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen5() {
  if (green5Active == true) {
    document.getElementById("green5").style.background = "#C3EBD0";
    green5Active = false;
    amtOfgreen--;
    eraseCookie("green5");
  } else {
    document.getElementById("green5").style.background = "green";
    green5Active = true;
    amtOfgreen++;
    setCookie("green5", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen6() {
  if (green6Active == true) {
    document.getElementById("green6").style.background = "#C3EBD0";
    green6Active = false;
    amtOfgreen--;
    eraseCookie("green6");
  } else {
    document.getElementById("green6").style.background = "green";
    green6Active = true;
    amtOfgreen++;
    setCookie("green6", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen7() {
  if (green7Active == true) {
    document.getElementById("green7").style.background = "#C3EBD0";
    green7Active = false;
    amtOfgreen--;
    eraseCookie("green7");
  } else {
    document.getElementById("green7").style.background = "green";
    green7Active = true;
    amtOfgreen++;
    setCookie("green7", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen8() {
  if (green8Active == true) {
    document.getElementById("green8").style.background = "#C3EBD0";
    green8Active = false;
    amtOfgreen--;
    eraseCookie("green8");
  } else {
    document.getElementById("green8").style.background = "green";
    green8Active = true;
    amtOfgreen++;
    setCookie("green8", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen9() {
  if (green9Active == true) {
    document.getElementById("green9").style.background = "#C3EBD0";
    green9Active = false;
    amtOfgreen--;
    eraseCookie("green9");
  } else {
    document.getElementById("green9").style.background = "green";
    green9Active = true;
    amtOfgreen++;
    setCookie("green9", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen10() {
  if (green10Active == true) {
    document.getElementById("green10").style.background = "#C3EBD0";
    green10Active = false;
    amtOfgreen--;
    eraseCookie("green10");
  } else {
    document.getElementById("green10").style.background = "green";
    green10Active = true;
    amtOfgreen++;
    setCookie("green10", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen11() {
  if (green11Active == true) {
    document.getElementById("green11").style.background = "#C3EBD0";
    green11Active = false;
    amtOfgreen--;
    eraseCookie("green11");
  } else {
    document.getElementById("green11").style.background = "green";
    green11Active = true;
    amtOfgreen++;
    setCookie("green11", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreen12() {
  if (green12Active == true) {
    document.getElementById("green12").style.background = "#C3EBD0";
    green12Active = false;
    amtOfgreen--;
    eraseCookie("green12");
  } else {
    document.getElementById("green12").style.background = "green";
    green12Active = true;
    amtOfgreen++;
    setCookie("green12", "active");
  }

  greenScore = getScore(amtOfgreen);
  score();
}

function keepgreenLock() {
  if (greenLockActive == true) {
    document.getElementById("greenLock").style.background = "#C3EBD0";
    greenLockActive = false;
    amtOfgreen--;
    eraseCookie("greenLock");
  } else {
    document.getElementById("greenLock").style.background = "green";
    greenLockActive = true;
    amtOfgreen++;
    setCookie("greenLock", "active");
  }
  greenScore = getScore(amtOfgreen);
  score();
}

// Blue row
function keepblue2() {
  if (blue2Active == true) {
    document.getElementById("blue2").style.background = "#BFC8E9";
    blue2Active = false;
    amtOfblue--;
    eraseCookie("blue2");
  } else {
    document.getElementById("blue2").style.background = "blue";
    blue2Active = true;
    amtOfblue++;
    setCookie("blue2", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue3() {
  if (blue3Active == true) {
    document.getElementById("blue3").style.background = "#BFC8E9";
    blue3Active = false;
    amtOfblue--;
    eraseCookie("blue3");
  } else {
    document.getElementById("blue3").style.background = "blue";
    blue3Active = true;
    amtOfblue++;
    setCookie("blue3", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue4() {
  if (blue4Active == true) {
    document.getElementById("blue4").style.background = "#BFC8E9";
    blue4Active = false;
    amtOfblue--;
    eraseCookie("blue4");
  } else {
    document.getElementById("blue4").style.background = "blue";
    blue4Active = true;
    amtOfblue++;
    setCookie("blue4", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue5() {
  if (blue5Active == true) {
    document.getElementById("blue5").style.background = "#BFC8E9";
    blue5Active = false;
    amtOfblue--;
    eraseCookie("blue5");
  } else {
    document.getElementById("blue5").style.background = "blue";
    blue5Active = true;
    amtOfblue++;
    setCookie("blue5", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue6() {
  if (blue6Active == true) {
    document.getElementById("blue6").style.background = "#BFC8E9";
    blue6Active = false;
    amtOfblue--;
    eraseCookie("blue6");
  } else {
    document.getElementById("blue6").style.background = "blue";
    blue6Active = true;
    amtOfblue++;
    setCookie("blue6", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue7() {
  if (blue7Active == true) {
    document.getElementById("blue7").style.background = "#BFC8E9";
    blue7Active = false;
    amtOfblue--;
    eraseCookie("blue7");
  } else {
    document.getElementById("blue7").style.background = "blue";
    blue7Active = true;
    amtOfblue++;
    setCookie("blue7", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue8() {
  if (blue8Active == true) {
    document.getElementById("blue8").style.background = "#BFC8E9";
    blue8Active = false;
    amtOfblue--;
    eraseCookie("blue8");
  } else {
    document.getElementById("blue8").style.background = "blue";
    blue8Active = true;
    amtOfblue++;
    setCookie("blue8", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue9() {
  if (blue9Active == true) {
    document.getElementById("blue9").style.background = "#BFC8E9";
    blue9Active = false;
    amtOfblue--;
    eraseCookie("blue9");
  } else {
    document.getElementById("blue9").style.background = "blue";
    blue9Active = true;
    amtOfblue++;
    setCookie("blue9", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue10() {
  if (blue10Active == true) {
    document.getElementById("blue10").style.background = "#BFC8E9";
    blue10Active = false;
    amtOfblue--;
    eraseCookie("blue10");
  } else {
    document.getElementById("blue10").style.background = "blue";
    blue10Active = true;
    amtOfblue++;
    setCookie("blue10", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue11() {
  if (blue11Active == true) {
    document.getElementById("blue11").style.background = "#BFC8E9";
    blue11Active = false;
    amtOfblue--;
    eraseCookie("blue11");
  } else {
    document.getElementById("blue11").style.background = "blue";
    blue11Active = true;
    amtOfblue++;
    setCookie("blue11", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblue12() {
  if (blue12Active == true) {
    document.getElementById("blue12").style.background = "#BFC8E9";
    blue12Active = false;
    amtOfblue--;
    eraseCookie("blue12");
  } else {
    document.getElementById("blue12").style.background = "blue";
    blue12Active = true;
    amtOfblue++;
    setCookie("blue12", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}

function keepblueLock() {
  if (blueLockActive == true) {
    document.getElementById("blueLock").style.background = "#BFC8E9";
    blueLockActive = false;
    amtOfblue--;
    eraseCookie("blueLock");
  } else {
    document.getElementById("blueLock").style.background = "blue";
    blueLockActive = true;
    amtOfblue++;
    setCookie("blueLock", "active");
  }

  blueScore = getScore(amtOfblue);
  score();
}
