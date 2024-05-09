"use strict";

const blackSquare = document.getElementById("blackSquare");

function jsFunction() {
  console.log(blackSquare);
  blackSquare.remove();
}
function myFunction() {
  blackSquare.classList.add("hidden");
}

//Task -2.
function onOfFunction() {
  console.log(blackSquare.getAttributeNames());
  console.log(blackSquare.className);
  console.log(blackSquare.className == "hidden");
  blackSquare.className == "hidden"
    ? blackSquare.classList.remove("hidden")
    : blackSquare.classList.add("hidden");
}
//Task -3.

const squares = document.getElementsByClassName("square");
console.log(squares);
function onOfSquares() {
  for (const i in squares) {
    console.log(squares[i].className);
    console.log(squares[i].classList);
    if (squares[i].className == "square") {
      console.log(i);
      console.log(squares[i].style.display);
      squares[i].style.display == ""
        ? (squares[i].style.display = "none")
        : (squares[i].style.display = "");
    }
  }
}
//Task -4.
const cssSelect = document.getElementById("select");
console.log(cssSelect);
function hideFunction() {
  console.log(cssSelect.value);
  let el = document.getElementsByClassName(cssSelect.value);
  console.log(el);
  for (const i in el) {
    if (el[i].className == cssSelect.value) {
      console.log(el[i]);
      el[i].style.display == ""
        ? (el[i].style.display = "none")
        : (el[i].style.display = "");
    }
  }
}

//Tasck -5.
const element = document.getElementById("yellowSquare");
function yellowClick1() {
  alert("Привіт");
  console.log(element.onclick);
  console.log(element.innerText);
  //delete first onclick function.
  element.onclick = null;
  console.log(element.onclick);
  element.innerText = "second tuch";
  console.log(element.innerText);
  //add second onclick function.
  element.onclick = function () {
    console.log(element.onclick);
    element.style.display = "none";
  };
  console.log(element.onclick);
}

//Task -7.
let focusInput = document.getElementById("focusInput");
let greenRectangle = document.getElementById("greenRectangle");

focusInput.addEventListener("focus", function () {
  console.log("focus");
  console.log(greenRectangle.style.display);
  greenRectangle.style.display = "inline-block";
});

focusInput.addEventListener("input", function () {
  console.log("input");
  greenRectangle.style.display = "none";
});

//Task -8.
let buttonUrl = document.getElementById('buttonUrl');
let inputUrl = document.getElementById('inputUrl');
let imgUrl = document.getElementById('image');
function loadUrl(){
  console.log(inputUrl.value);
  imgUrl.src = inputUrl.value;
  console.log(imgUrl.src);
} 
//Task -9.
let textArea = document.getElementById('textURLs');
let divPictures = document.getElementById('pictures');
let newImage;
function loadURLs(){
let urls = textArea.value.split("\n");
console.log(urls);  
  urls.forEach(url => {
    newImage = document.createElement('img');
    console.log(url);
    if(url != ""){
      newImage.src = url;
      divPictures.appendChild(newImage);
    }
  });
}
// Task - 10. 
let cursorPos = document.getElementById('cursorPos');
function pos(e){
  cursorPos.innerText = `X: +${e.pageX}  Y: +${e.pageY}`;
  //console.log(e.pageX);
  //console.log(e.pageY);
}

addEventListener('mousemove', pos, false);