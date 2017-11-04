//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

var activePlayer = 0;
var scores = document.querySelectorAll(".score-player");
var currents = document.querySelectorAll(".score-current-player");
var die;
var current = document.querySelector("#current-" + activePlayer);
var score = document.querySelector("#score-" + activePlayer);
var dieDisplay = document.querySelector(".die");
var rollBtn = document.querySelector(".btn-roll");
var holdBtn = document.querySelector(".btn-hold");
var panel = document.querySelector(".player-" + activePlayer + "-panel");
var resetBtn = document.querySelector(".btn-new");

dieDisplay.style.display = 'none';

resetBtn.addEventListener("click", function(){
   dieDisplay.style.display = 'none';
   rollBtn.style.display = "block";
   scores[0].textContent = 0;
   scores[1].textContent = 0;
   currents[0].textContent = 0;
   currents[1].textContent = 0;
   if (activePlayer === 1)
   rollBtn.innerHTML = "<i class=" + "ion-ios-loop" + "></i>" + "Roll"
   score.style.color = "rgb(20, 20, 100)";
   panel.classList.remove("active");
   activePlayer = 0;
   current = document.querySelector("#current-" + activePlayer);
   score = document.querySelector("#score-" + activePlayer);
   panel = document.querySelector(".player-" + activePlayer + "-panel");
   panel.classList.add("active");
});

holdBtn.addEventListener("click", function(){
   score.textContent = Number(current.textContent) + Number(score.textContent);
   current.textContent = 0;
   toggle();
});

rollBtn.addEventListener("click", function(){
   roll();
   if (die === 0) {
      current.textContent = 0;
      toggle();
   } else {
      current.textContent = Number(current.textContent) + die;   
   }
   if (Number(current.textContent) + Number(score.textContent) === 100) {
      score.textContent = "Winner";
      score.style.color = "red";
      rollBtn.style.display = "none";
   } else if (Number(current.textContent) + Number(score.textContent) > 100) {
      score.textContent = (Number(current.textContent) + Number(score.textContent)) - die;
      current.textContent = 0;
      toggle();
   }
});




function roll() {
   die = Math.floor(Math.random()*10);
   dieDisplay.style.display = 'block';
   dieDisplay.src = "die-" + die  + ".png";
}

function toggle() {
   if (activePlayer === 0) {
      panel.classList.remove("active");
      rollBtn.innerHTML = "<i class=" + "ion-ios-loop" + "></i>" + "SHOOT"
      activePlayer = 1;
      panel = document.querySelector(".player-" + activePlayer + "-panel");
      panel.classList.add("active");
   } else {
      panel.classList.remove("active");
      activePlayer = 0;
      rollBtn.innerHTML = "<i class=" + "ion-ios-loop" + "></i>" + "Roll"
      panel = document.querySelector(".player-" + activePlayer + "-panel");
      panel.classList.add("active");
   }
   current = document.querySelector("#current-" + activePlayer);
   score = document.querySelector("#score-" + activePlayer);
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 