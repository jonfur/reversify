/*Helper functions*/
function $q (cssSelector) {
  return document.querySelector(cssSelector);
};
function $el (element) {
  return document.createElement(element);
};


/*Cached Nodes*/
var inputField = $q("#input-field");
var displayH1 = $q("#display-h1");
var body = document.body;
var reverseButton = $q("#reverse-button");
var displayOpacity = displayH1.style.opacity;


/*String reversal function*/
function reverse (s) {
  return s.split('').reverse().join('');
}


/*Button click swap opacity value and call reverse function on #input-field
value*/
function clickHandler () {
  opacitySwitch();
};


/*Check opacity value and fade in or out depending on value*/
function opacitySwitch () {
  if (displayH1.style.opacity == 1) {
    fadeOut();
  }
  else {
    fadeIn();
  }
};

/*change opacity to 0 from 1, triggering transition, resulting in fade out
effect. add listener to displayH1. see below for details*/
function fadeOut () {
  displayH1.style.opacity = 0;
  addListener();
}


/*change opacity to 1 from 0, triggering transition, resulting in fade in
effect. also call reverse function on input-field value*/
function fadeIn () {
  displayH1.style.opacity = 1;
  writeH1();
};


/*write reversed input-field value to displayH1*/
function writeH1 () {
  displayH1.textContent = reverse(inputField.value);
};


/*Listeners*/

function addListener () {
  displayH1.addEventListener("transitionend", transHandler);
}

/*Click functionality for button (Add enter button functionality later)*/
reverseButton.addEventListener("click", clickHandler);



/*Called by addListener*/
function transHandler () {
  console.log("yay");
  fadeIn();
  displayH1.removeEventListener("transitionend", transHandler);
}
