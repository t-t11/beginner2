let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/icon.jpg') {
    myImage.setAttribute('src', 'images/annya.jpeg');
  }else {
    myImage.setAttribute('src', 'images/icon.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  }else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to LAUGHING MAN WEBSIE,' + myName;
 }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to LAUGHING MAN WEBSIE,' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
