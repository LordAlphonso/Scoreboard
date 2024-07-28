homeScore = document.getElementById("home-score")
awayScore = document.getElementById("away-score")
let realHomeScore = 0
let realAwayScore = 0
function increaseScore1Home(){
    realHomeScore += 1
    homeScore.textContent=realHomeScore 
    
}
function increaseScore2Home(){
    realHomeScore += 2
    homeScore.textContent=realHomeScore
    
}
function increaseScore3Home(){
    realHomeScore += 3
    homeScore.textContent=realHomeScore
    
}
function increaseScore1Away(){
    realAwayScore += 1
    awayScore.textContent= realAwayScore
    
}
function increaseScore2Away(){
    realAwayScore += 2
    awayScore.textContent= realAwayScore
    
}
function increaseScore3Away(){
    realAwayScore += 3
    awayScore.textContent= realAwayScore
    
}