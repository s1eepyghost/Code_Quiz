var timeContainer = document.querySelector(".time");
var timer = document.querySelector(".timer");
var scoreContainer = document.querySelector(".score");
var headingsContainer = document.querySelector(".main headings container");
var quizContainer = document.querySelector(".quiz-container");
var startButton = document.querySelector("#start-button");
var correctButton1 = document.querySelector("#correct-button1");
var correctButton2 = document.querySelector("#correct-button2");
var correctButton3 = document.querySelector("#correct-button3");
var correctButton4 = document.querySelector("#correct-button4");
var correctButton5 = document.querySelector("#correct-button5");
var wrongButton = document.querySelectorAll("#button");
var button = document.querySelector(".button");
var backButton = document.querySelector("#Go-back-button");
var clearButton = document.querySelector("#Clear-Highscore-button");
var form = document.querySelector("form-inline");
var scoreList = document.querySelector("#score-list");
var currentScore = 0;
var score = [];

var assessment1 = document.querySelector(".assessment1");
var assessment2 = document.querySelector(".assessment2");
var assessment3 = document.querySelector(".assessment3");
var assessment4 = document.querySelector(".assessment4");
var assessment5 = document.querySelector(".assessment5");

var secondsLeft = 30;

var slide1 = document.querySelector("#slide1");
var slide2 = document.querySelector("#slide2");
var slide3 = document.querySelector("#slide3");
var slide4 = document.querySelector("#slide4");
var slide5 = document.querySelector("#slide5");
var slide6 = document.querySelector("#slide6");
var slide7 = document.querySelector("#slide7");
var slide8 = document.querySelector("#slide8");

var slide = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

// Create a <li> node
  var node = document.createElement("LI"); 

// Create a "right" text node                
  var textnodeRight = document.createTextNode(" Correct! ");  

// Create a "wrong" text node                
  var textnodeWrong = document.createTextNode(" Wrong! ");  

  var timerInterval;


// Start quiz
startButton.addEventListener("click", function changePage() {
  document.querySelector("#slide1").style.display = "none";
  document.querySelector("#slide2").style.display = "flex";
    

  // Set timer
  function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeContainer.textContent = "Time: " + secondsLeft;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }
  setTime();

});



// Slide 1
// Correct
if (document.querySelector("#correct-button1").addEventListener) {
  currentScore++;
  document.querySelector("#correct-button1").addEventListener("click", function correct1() {

    // Append the text to <li>
    node.appendChild(textnodeRight);                              
    document.querySelector(".assessment1ul").appendChild(node);
    });
  }
// Wrong
if (document.querySelector("#button1").addEventListener) {

  document.querySelector("#button1").addEventListener("click", function wrong1() {

// Append the text to <li>
node.appendChild(textnodeWrong);                              
document.querySelector(".assessment1ul").appendChild(node);
  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }
});
}

if (document.querySelector("#button2").addEventListener) {
  document.querySelector("#button2").addEventListener("click", function wrong2() {

// Append the text to <li>
document.querySelector(".assessment1ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button4").addEventListener) {
  document.querySelector("#button4").addEventListener("click", function wrong4() {

// Append the text to <li>
document.querySelector(".assessment1ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

// Change to Slide 2

document.querySelector("#next1").addEventListener("click", function changePage1() {

  document.querySelector("#slide2").style.display = "none";
  document.querySelector("#slide3").style.display = "flex";

});

// Slide 2
// Correct
if (document.querySelector("#correct-button2").addEventListener) {
  currentScore++;
  document.querySelector("#correct-button2").addEventListener("click", function correct2() {

    // Append the text to <li>
document.querySelector(".assessment2ul").appendChild(textnodeRight);

 
    });

  }

// Wrong
if (document.querySelector("#button5").addEventListener) {

  document.querySelector("#button5").addEventListener("click", function wrong5() {

// Append the text to <li>
document.querySelector(".assessment2ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button6").addEventListener) {
  document.querySelector("#button6").addEventListener("click", function wrong6() {

  // Append the text to <li>
  document.querySelector(".assessment2ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button8").addEventListener) {
  document.querySelector("#button8").addEventListener("click", function wrong8() {

  // Append the text to <li>
  document.querySelector(".assessment2ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

// Change to Slide 3

document.querySelector("#next2").addEventListener("click", function changePage2() {

  document.querySelector("#slide3").style.display = "none";
  document.querySelector("#slide4").style.display = "flex";

});

// Slide 3
// Correct
if (document.querySelector("#correct-button3").addEventListener) {
  currentScore++;
  document.querySelector("#correct-button3").addEventListener("click", function correct3() {

    // Append the text to <li>
document.querySelector(".assessment3ul").appendChild(textnodeRight);

    });

  }

// Wrong
if (document.querySelector("#button9").addEventListener) {

  document.querySelector("#button9").addEventListener("click", function wrong9() {

// Append the text to <li>
document.querySelector(".assessment3ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button10").addEventListener) {
  document.querySelector("#button10").addEventListener("click", function wrong10() {

  // Append the text to <li>
  document.querySelector(".assessment3ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button11").addEventListener) {
  document.querySelector("#button11").addEventListener("click", function wrong11() {

  // Append the text to <li>
  document.querySelector(".assessment3ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

// Change to Slide 4

document.querySelector("#next3").addEventListener("click", function changePage3() {

  document.querySelector("#slide4").style.display = "none";
  document.querySelector("#slide5").style.display = "flex";

});

// Slide 4
// Correct
if (document.querySelector("#correct-button4").addEventListener) {
  currentScore++;
  document.querySelector("#correct-button4").addEventListener("click", function correct4() {

    // Append the text to <li>
document.querySelector(".assessment4ul").appendChild(textnodeRight);

 
    });

  }

// Wrong
if (document.querySelector("#button13").addEventListener) {

  document.querySelector("#button13").addEventListener("click", function wrong13() {

// Append the text to <li>
document.querySelector(".assessment4ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button14").addEventListener) {
  document.querySelector("#button14").addEventListener("click", function wrong14() {

  // Append the text to <li>
  document.querySelector(".assessment4ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button16").addEventListener) {
  document.querySelector("#button16").addEventListener("click", function wrong16() {

  // Append the text to <li>
  document.querySelector(".assessment4ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

// Change to Slide 5

document.querySelector("#next4").addEventListener("click", function changePage4() {

  document.querySelector("#slide5").style.display = "none";
  document.querySelector("#slide6").style.display = "flex";

});

// Slide 5
// Correct
if (document.querySelector("#correct-button5").addEventListener) {
  currentScore++;
  document.querySelector("#correct-button5").addEventListener("click", function correct4() {

    // Append the text to <li>
document.querySelector(".assessment5ul").appendChild(textnodeRight);

 
    });

  }

// Wrong
if (document.querySelector("#button17").addEventListener) {

  document.querySelector("#button17").addEventListener("click", function wrong17() {

// Append the text to <li>
document.querySelector(".assessment5ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button18").addEventListener) {
  document.querySelector("#button18").addEventListener("click", function wrong18() {

  // Append the text to <li>
  document.querySelector(".assessment5ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

if (document.querySelector("#button19").addEventListener) {
  document.querySelector("#button19").addEventListener("click", function wrong19() {

  // Append the text to <li>
  document.querySelector(".assessment5ul").appendChild(textnodeWrong);

  secondsLeft -=10;
  timeContainer.textContent = "Time: " + secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
  }

});

}

// Change to Slide 6

document.querySelector("#next5").addEventListener("click", function changePage5() {

  document.querySelector("#slide6").style.display = "none";
  document.querySelector("#slide7").style.display = "flex";
  
  // stop the timer
  clearInterval(timerInterval);
  
  // Append the time/score text to <p>                             
  document.querySelector(".span").textContent=currentScore;

});

// Submit high score

// When form is submitted...
document.querySelector("#submit-button").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector(".Form-inline").submit();

});

// Append score
  // Create a <li> node
  var nodeScore = document.createElement("LI");

  // Create a text node
  var textnodeScore = document.createTextNode(F);

  // Append the text to <li>
  nodeScore.appendChild(textnodeScore);

  // Append <li> to <ul>
  document.querySelector(".high-scores-list").appendChild(nodeScore);

// Change to High Scores page
scoreContainer.addEventListener("click", function scorePage() {

  document.querySelector("#slide1").style.display = "none";
  document.querySelector("#slide2").style.display = "none";
  document.querySelector("#slide3").style.display = "none";
  document.querySelector("#slide4").style.display = "none";
  document.querySelector("#slide5").style.display = "none";
  document.querySelector("#slide6").style.display = "none";
  document.querySelector("#slide7").style.display = "none";
  document.querySelector("#slide8").style.display = "flex";
});

// Change to home page
backButton.addEventListener("click", function homePage() {

  document.querySelector("#slide1").style.display = "flex";
  document.querySelector("#slide2").style.display = "none";
  document.querySelector("#slide3").style.display = "none";
  document.querySelector("#slide4").style.display = "none";
  document.querySelector("#slide5").style.display = "none";
  document.querySelector("#slide6").style.display = "none";
  document.querySelector("#slide7").style.display = "none";
  document.querySelector("#slide8").style.display = "none";

});

// Remove score

document.querySelector("#Clear-Highscore-button").addEventListener("click", function scorePage() {

  var scoreEL = document.querySelector(".high-scores-list.li");
  scoreEL.parentNode.removeChild(scoreEL);

});