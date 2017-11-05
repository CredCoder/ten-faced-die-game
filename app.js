var activePlayer = 0;
var die;
var gamePlaying = true;
var current = document.querySelector("#current-" + activePlayer);
var score = document.querySelector("#score-" + activePlayer);
var dieDisplay = document.querySelector(".die");
var rollBtn = document.querySelector(".btn-roll");
var saveBtn = document.querySelector(".btn-hold");
var panel = document.querySelector(".player-" + activePlayer + "-panel");
var resetBtn = document.querySelector(".btn-new");

dieDisplay.style.display = 'none';

resetBtn.addEventListener("click", function(){
   dieDisplay.style.display = 'none';
   gamePlaying = true;
   document.querySelectorAll(".score-player")[0].textContent = 0;
   document.querySelectorAll(".score-player")[1].textContent = 0;
   document.querySelectorAll(".score-current-player")[0].textContent = 0;
   document.querySelectorAll(".score-current-player")[1].textContent = 0;
   if (activePlayer === 1)
   rollBtn.innerHTML = "<i class=" + "ion-ios-loop" + "></i>" + "Roll";
   score.style.color = "rgb(20, 20, 100)";
   panel.classList.remove("active");
   activePlayer = 0;
   current = document.querySelector("#current-" + activePlayer);
   score = document.querySelector("#score-" + activePlayer);
   panel = document.querySelector(".player-" + activePlayer + "-panel");
   panel.classList.add("active");
});

saveBtn.addEventListener("click", function(){
   if (score.textContent === "Winner") {
      score.textContent = "Winner";
   } else {
   score.textContent = Number(current.textContent) + Number(score.textContent);
   current.textContent = 0;
   toggle();
   }
});

rollBtn.addEventListener("click", function(){
   if (gamePlaying) {
      roll();
      if (die === 0) {
         current.textContent = 0;
         toggle();
      } else {
         current.textContent = Number(current.textContent) + die;   
      }
   } if (Number(current.textContent) + Number(score.textContent) > 100) {
      score.textContent = (Number(current.textContent) + Number(score.textContent)) - die;
      current.textContent = 0;
      toggle();
   } else if (Number(current.textContent) + Number(score.textContent) === 100) {
      score.textContent = "Winner";
      score.style.color = "red";
      gamePlaying = false;
   }
});

function roll() {
   die = Math.floor(Math.random()*10);
   dieDisplay.style.display = 'block';
   dieDisplay.src = "images/die-" + die  + ".png";
}

function toggle() {
   if (activePlayer === 0) {
      panel.classList.remove("active");
      rollBtn.innerHTML = "<i class=" + "ion-ios-loop" + "></i>" + "SHOOT";
      activePlayer = 1;
      panel = document.querySelector(".player-" + activePlayer + "-panel");
      panel.classList.add("active");
   } else {
      panel.classList.remove("active");
      activePlayer = 0;
      rollBtn.innerHTML = "<i class=" + "ion-ios-loop" + "></i>" + "Roll";
      panel = document.querySelector(".player-" + activePlayer + "-panel");
      panel.classList.add("active");
   }
   current = document.querySelector("#current-" + activePlayer);
   score = document.querySelector("#score-" + activePlayer);
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 