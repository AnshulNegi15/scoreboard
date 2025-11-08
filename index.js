let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")

let count1 = 0
let count2 = 0

function increment_home(num){
    count1 += num
    score1El.textContent = count1;
}
function increment_guest(num){
    count2 += num
    score2El.textContent = count2;
}