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

let buttonUrl = document.getElementById("buttonUrl");
let inputUrl = document.getElementById("inputUrl");
let imgUrl = document.getElementById("image");
function loadUrl() {
  console.log(inputUrl.value);
  imgUrl.src = inputUrl.value;
  console.log(imgUrl.src);
}
//Task -9.

let textArea = document.getElementById("textURLs");
let divPictures = document.getElementById("pictures");
let newImage;
function loadURLs() {
  let urls = textArea.value.split("\n");
  console.log(urls);
  urls.forEach((url) => {
    newImage = document.createElement("img");
    console.log(url);
    if (url != "") {
      newImage.src = url;
      divPictures.appendChild(newImage);
    }
  });
}

// Task - 10.

const topRight = document.getElementById("topRight");
function onTop() {
  console.log("click");
  topRight.classList.remove("hidden");
}
let cursorPos = document.getElementById("cursorPos");
function pos(e) {
  cursorPos.innerText = `X: ${e.pageX}  Y: ${e.pageY}`;
}
addEventListener("mousemove", pos, false);

// Task - 11.

const divTop = document.getElementById("topRight");
function leng() {
  let newParagrapf = document.createElement("P");
  let lang = document.querySelector("html").getAttribute("lang");
  console.log(lang);
  newParagrapf.textContent = `language of the page: ${lang}`;
  divTop.appendChild(newParagrapf);
}

// Task - 12.

let geoPosClick = 0;
function geoPos() {
  if (geoPosClick != 0) {
    console.log("second click");
    return;
  }
  geoPosClick++;
  let newBr = document.createElement("br");
  let newParagrapf = document.createElement("P");
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    let coord = pos.coords;
    newParagrapf.innerText = `Ш: ${coord.latitude}, Д:${coord.longitude}`;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  divTop.appendChild(newBr);
  divTop.appendChild(newParagrapf);
}
//  Task - 13.

let locSt = document.getElementById("locSt");
let cook = document.getElementById("cook");
let sesSt = document.getElementById("sesSt");

function localSt() {
  let innerText = locSt.innerText;
  console.log(innerText);
  localStorage.setItem("localSt", innerText);
  console.log("save to local storage.");
}

//Create cookie string.
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function saveCookie() {
  let innerText = cook.innerText;
  console.log(innerText);
  setCookie("innerText", innerText, 1);
  console.log("save to cookie.");
  console.log(document.cookie);
}

function sessionSt() {
  let innerText = sesSt.innerText;
  console.log(innerText);
  sessionStorage.setItem("sessionSt", innerText);
  console.log("save to session storage.");
}
// loading data on page reload.
function onPageLoad() {
  console.log("Page reload");
  let innerText = localStorage.getItem("localSt");
  if (innerText) {
    console.log(innerText);
    locSt.innerText = innerText;
  }

  innerText = document.cookie.split("=")[1];
  if (innerText) {
    console.log(innerText);
    cook.innerText = innerText;
  }

  innerText = sessionStorage.getItem("sessionSt");
  if (innerText) {
    console.log(innerText);
    sesSt.innerText = innerText;
  }
}
// Monitors page updates.
document.body.onload = onPageLoad();

// Task - 14.

document.onscroll = (event) => {
  let height = window.innerHeight;
  let scroll = document.documentElement.scrollTop;
  console.log(`height ${height}`);
  console.log(`scroll ${scroll}`);
  if (scroll > height) {
    console.log("scroll > height");
    document.getElementById("pageDown").classList.remove("hidden");
  } else {
    document.getElementById("pageDown").classList.add("hidden");
  }
};

function moveUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Task - 15.

document.getElementById("external").addEventListener(
  "click",
  function () {
    alert("you click to external green blok.");
  },
  false
);

document.getElementById("internal").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    alert("you click to internal yellow blok.");
  },
  false
);

// Task -16.
let greySquer = document.getElementById("greySquare");
function addGreyFog() {
  console.log("show grey div");
  console.log(greySquer.classList);
  greySquer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

greySquer.addEventListener("click", function () {
  document.body.style.overflow = "auto";
  greySquer.classList.add("hidden");
});

// Task - 17.

document.addEventListener("submit", (e) => {
  e.preventDefault();
  return false;
});

// Task - 18.

let dropZone = document.querySelector(".dropZone");
let sendStatusText;
// Need to override default browser behavior for 
// dragover and drop events
["dragover", "drop"].forEach(function (event) {
  document.addEventListener(event, function (e) {
    e.preventDefault();
    return false;
  });
});

// They asked for it to be beautiful
dropZone.addEventListener("dragenter", function () {
  dropZone.classList.add("active");
});

// They asked for it to be beautiful
dropZone.addEventListener("dragleave", function () {
  dropZone.classList.remove("active");
});

dropZone.addEventListener("drop", function () {
console.log('drop');
let file = event.dataTransfer?.files[0];
console.log(file);
if(file && !event.dataTransfer?.files[1]){
  sendStatusText = `Loaded file - ${file.name}`;
  } else {
  sendStatusText = 'File not selected';
}
console.log(sendStatusText);
dropZone.innerText= sendStatusText;
});
