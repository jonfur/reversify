//Helper functions
function $q (cssSelector) {
  return document.querySelector(cssSelector);
};
function $el (element) {
  return document.createElement(element);
};

//Cached Nodes
var inputField = $q("#input-field");
var displayH1 = $q("#display-h1");
var body = document.body;
var reverseButton = $q("#reverse-button");

//String reversal function
function reverse (s) {
  return s.split('').reverse().join('');
}


//Call reversal function on button click
function clickHandler () {
  displayH1.textContent = reverse(inputField.value);
  opacityShow();
}

//Playing with opacity

function eraseH1() {
  displayH1.textContent = "";
}

function writeH1 () {
  displayH1.textContent = reverse(inputField.value);
}

function opacityReset () {
  displayH1.style.opacity = 0;
}

function opacityShow () {
  displayH1.style.opacity = 1;
}

function testTrans (event) {
  var toots = event;
  console.log(toots);
}

function opacitySwitch () {
  if (displayH1.style.opacity === 1) {

  }
}

//Attempting timeOuts
var timeoutID;

function delayFade () {
  timeoutID = window.setTimeout(opacityReset, 300);
}

function fadeInOut () {
  if (displayH1.style.opacity === 1) {

  }
}


/*Add enter button functionality*/
reverseButton.addEventListener("click", clickHandler);

//Transition event listener on h1 **Not Working**
displayH1.addEventListener("transitioned", testTrans);
