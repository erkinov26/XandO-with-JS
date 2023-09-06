let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let xScore = document.querySelector("#info1Number");
let oScore = document.querySelector("#info3Number");
let info2Number = document.querySelector("#info2Number");
let xIcon = "X";
let X = 0;
let O = 0;


console.log("sdfs");

box.forEach((e) => {
  e.onclick = () => {
    if (e.innerText == "") {
      e.innerText = xIcon;
      xIcon == "X" ? (xIcon = "O") : (xIcon = "X");
      winner();
    }
    if (e.textContent === "O") {
      info1.style.opacity = "1";
      info3.style.opacity = "0.5";
    }
    console.log(xIcon);
    if (e.textContent === "X") {
      info1.style.opacity = "0.5";
      info3.style.opacity = "1";
    }
  };
});



function winner() {
  let winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
 
  winCombination.forEach((e) => {
    if (
      box[e[0]].innerText == box[e[1]].innerText &&
      box[e[1]].innerText == box[e[2]].innerText &&
      box[e[0]].innerText
    ) {
      box[e[0]].innerText == "X" ? X++ : O++;
      timeFunc()
    }
    xScore.innerText = X;
    oScore.innerText = O;
  });
}



resetBtn.onclick = () => reset();
function reset() {
  box.forEach((e) => (e.innerText = ""));
  xIcon = "X";
  info1.style.opacity="1"
  info3.style.opacity="0.5"
}

function timeFunc() {
  box.forEach((e)=>{
    e.style.opacity="0.5"
    xIcon=""
    setTimeout(function () {
    e.style.opacity="1"
    xIcon=""
    }, 500)
    setTimeout(function(){
      e.style.opacity="0.5"
      xIcon=""
    },1000)
    setTimeout(function() {
      e.style.opacity="1"
      xIcon=""
    },1500);
    setTimeout(function() {
    xIcon=""
    reset()
    }, 2000);
  })
} 
