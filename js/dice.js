function roll(){
    document.getElementById("dice1").innerHTML = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice2").innerHTML = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice3").innerHTML = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice4").innerHTML = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice5").innerHTML = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice6").innerHTML = Math.floor(Math.random() * 6 + 1)
}