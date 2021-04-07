const clipboardBtn = document.querySelector('#copyBtn');
const retPassword = document.querySelector("#output-password");
const button = document.querySelector('#submitBtn');
const intNumPwd = 1;

//Slider functions
let slider_pwdlenght = document.getElementById("pwdlenght")
let output_pwdlenght = document.getElementById("span-pwdlenght")
output_pwdlenght.innerHTML = slider_pwdlenght.value;

slider_pwdlenght.oninput = function() {
  let slider_value = this.value;
  let ret_value = 0;
  
  ret_value = this.value < 10 ? slider_value.fontcolor("red") : slider_value.fontcolor("#111111"); 

  output_pwdlenght.innerHTML = ret_value;
}

// Password generator functions
button.addEventListener('click', (ev) => {
  const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789._?#$%&=),!-;*+([]{}|";
  let strText = "";
  let arrPasswords = [];
  
  ev.preventDefault();

  for (var intIterations = 1; intIterations <= 1; intIterations++) {
     strText = "";
     for (var intCont = 1; intCont <= slider_pwdlenght.value; intCont++) {
        strText += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
     }
     arrPasswords.push(strText);
  }
  document.getElementById('output-password').innerHTML = arrPasswords.join("\n");
  return true;
});

// Copy to clipboard functions
clipboardBtn.addEventListener('click', (ev) => {
  let copyText = document.getElementById("output-password");
  let textArea = document.createElement("textarea");

  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();

  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
});

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}