var h1=document.createElement('h1');
var h1text = document.createTextNode('Guess This');
var break1 = document.createElement('br');
var h1span = document.createElement('span');
h1span.innerHTML= 'RGB'; 
h1span.id += "rgbCode";
var break2 = document.createElement('br');
var h1text2 = document.createTextNode('Color Code');
document.body.appendChild(h1);

h1.appendChild(h1text);
h1.appendChild(break1);
h1.appendChild(h1span);
h1.appendChild(break2);
h1.appendChild(h1text2);

var buttondiv = document.createElement('div');
var resetbutton = document.createElement('button');
var spanmessage = document.createElement('span');
var easybotton = document.createElement('button');
var hardbutton = document.createElement('button');
document.body.appendChild(buttondiv);
buttondiv.appendChild(resetbutton);
buttondiv.appendChild(spanmessage);
buttondiv.appendChild(easybotton);
buttondiv.appendChild(hardbutton);
buttondiv.id += "stripe";
resetbutton.id += "reset";
resetbutton.innerHTML = "New Colors";
spanmessage.id += "message";
easybotton.id += "eassyBtn";
easybotton.innerHTML = "Easy";
hardbutton.id += "hardBtn";
hardbutton.className += "selected";
hardbutton.innerHTML += "Hard";
var maindiv = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
document.body.appendChild(maindiv);
maindiv.appendChild(div1);
maindiv.appendChild(div2);
maindiv.appendChild(div3);
maindiv.appendChild(div4);
maindiv.appendChild(div5);
maindiv.appendChild(div6);
maindiv.className +="container";
div1.className += "square";
div2.className += "square";
div3.className += "square";
div4.className += "square";
div5.className += "square";
div6.className += "square";


   var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbCode = h1span;
var messageDisplay = spanmessage;

var resetButton = resetbutton;
var easyBtn = easybotton;
var hardBtn = hardbutton;
  
  easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  messageDisplay.textContent = "";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})

rgbCode.textContent = pickedColor;

for(var i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Good Job!";
      resetButton.textContent = "Play Again ?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}
function changeColors(color){
for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
}
}
function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256)
var g = Math.floor(Math.random() * 256)
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}
  













