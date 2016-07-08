/***********************************************************************************************************************

  Colors in palette

  black
  blue
  gray
  green
  orange
  red
  yellow

***********************************************************************************************************************/

var COLOR = "gray";

/***********************************************************************************************************************

  Write code for event Handler

***********************************************************************************************************************/
var scoreElement;                                                 // Write code to select score element
var circles;                                                      // Write code to select circles of your color

function clickHandler() {console.log(this)
  totalScore += SCORE;

  // Write code to update score text in HTML

  this.setAttribute("style", "visibility: hidden");
}

function attachEventHandler(circle) {
  // Write code to add event listener
}

function removeEventHandler(circle) {
  // Write code to remove event listener
}

/***********************************************************************************************************************

  End of beginners code

***********************************************************************************************************************/

































var SCORE = 10;
var TIMER = 10;
var totalScore = 0;
var timerElement = document.querySelector("#timer");
var playNowBtn = document.querySelector("#playNowBtn");
var timer, interval;
var length = circles.length;

playNowBtn.addEventListener("click", function() {
  var timerText = 10;
  totalScore = 0
  scoreElement.innerHTML = totalScore;
  timerElement.innerHTML = "10 Secs";
  playNowBtn.setAttribute("disabled", true);

  // Start Timer
  timer = setTimeout(function() {
    if (timer)
      clearTimeout(timer);

  }, TIMER);

  // Attach event handler
  length = circles.length;
  while(--length >= 0) {
    attachEventHandler(circles[length]);
  };

  // Update time
  interval = setInterval(function() {
    timerElement.innerHTML = timerText + " secs";
    if (timerText == 0) {
      clearInterval(interval);

      length = circles.length;
      while(--length >= 0) {
        circles[length].setAttribute("style", "visibility: visible");
        removeEventHandler(circles[length]);
      };
      playNowBtn.removeAttribute("disabled");
      alert("Time is up!!");
    }
    --timerText;
  }, 1000);



});