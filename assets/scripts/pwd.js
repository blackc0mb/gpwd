// Declarations for password generator
const intNumPwd = document.querySelector('#numpwd');
const intLength = document.querySelector('#pwdlenght');
const retPassword = document.querySelector("#lblresult");
const button = document.querySelector('#submitBtn');
const resetBtn = document.querySelector('#resetBtn');
const clipboardBtn = document.querySelector('#copyBtn');

// Declarations for title animation, source github => kubowania / typewriter
const textDisplay = document.getElementById('banner');
const title = [' Password Generator', ' Thanks for use it'];
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

// Password generator functions
button.addEventListener('click', (ev) => {
   const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789._?#$%&=),!-;*+([]{}";
   let strText = "";
   let arrPasswords = [];
   
   ev.preventDefault();   

   if (validate_form() == false) {
      document.getElementById('lblresult').innerHTML = "Number of passwords must between 1 - 50 | length password must be between 1 - 30"
      return false;
   }   

   for (var intIterations = 1; intIterations <= intNumPwd.value; intIterations++) {
      strText = "";
      for (var intCont = 1; intCont <= intLength.value; intCont++) {
         strText += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
      }
      arrPasswords.push(strText);
   }
   document.getElementById('lblresult').innerHTML = arrPasswords.join("\n");
   return true;
});

resetBtn.addEventListener('click', () => {
   document.getElementById('lblresult').innerHTML = 'Output';
});

function validate_form() {
   if ((parseInt(intNumPwd.value) > parseInt(intNumPwd.max)) || (parseInt(intLength.value) > parseInt(intLength.max))) {
      return false;
   }

   return true;
};

clipboardBtn.addEventListener('click', (ev) => {
   let copyText = document.getElementById("lblresult");
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   document.execCommand("copy");   
});

// Title animation functions
function loop () {
   isEnd = false;
   textDisplay.innerHTML = currentPhrase.join('');
 
   if (i < title.length) {
 
     if (!isDeleting && j <= title[i].length) {
       currentPhrase.push(title[i][j]);
       j++;
       textDisplay.innerHTML = currentPhrase.join('');
     }
 
     if(isDeleting && j <= title[i].length) {
       currentPhrase.pop(title[i][j]);
       j--;
       textDisplay.innerHTML = currentPhrase.join('');
     }
 
     if (j == title[i].length) {
       isEnd = true;
       isDeleting = true;
     }
 
     if (isDeleting && j === 0) {
       currentPhrase = [];
       isDeleting = false;
       i++;
       if (i === title.length) {
         i = 0;
       }
     }
   }
   const spedUp = Math.random() * (80 - 50) + 50;
   const normalSpeed = Math.random() * (300 -200) + 200;
   const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
   setTimeout(loop, time);
 };
 
 loop();