window.addEventListener('DOMContentLoaded', arrow, false);

function arrow () {
    alert ('Page loaded successfully. Now Initiating test 1: Buttons');
    var buttons = document.getElementByTagName("button")
    buttons [0].addEventListener('click', cat, false)
    buttons [1].addEventListener('click', dog, false)
    buttons [2].addEventListener('click', joke, false)
    buttons [3].addEventListener('click', fact, false)
}

function showCat() {
  var x = document.getElementById("cat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showDog() {
  var x = document.getElementById("dog");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showText() {
  var x = document.getElementById("joke");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function fact() {
  var x = document.getElementById("smart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}