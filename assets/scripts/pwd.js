const clipboardBtn = document.querySelector('#copyBtn');
const retPassword = document.querySelector("#output-password");
const button = document.querySelector('#submitBtn');
const intNumPwd = 1;

//Slider functions
let slider_pwdlenght = document.getElementById("pwdlenght");
let output_pwdlenght = document.getElementById("span-pwdlenght");

let label_pwdlenght = document.getElementById("span-label-pwdlenght");
let label_icon = document.getElementById("span-label-icon");

output_pwdlenght.innerHTML = slider_pwdlenght.value;

slider_pwdlenght.oninput = function () {
  const red_color = "red";
  const ok_color = "#111111";
  let slider_value = this.value;
  let ret_value = 0;

  //ret_value = this.value < 10 ? slider_value.fontcolor(red_color) : slider_value.fontcolor(ok_color);
  //label_pwdlenght.style.color = this.value < 10 ? red_color : ok_color;

  if (this.value < 10) {
    ret_value = slider_value.fontcolor(red_color);
    label_pwdlenght.style.color = red_color;
    label_icon.innerHTML = "<i class='fa fa-exclamation-circle fa-2x'></i>&nbsp";
    label_icon.style.color = red_color;
  } else {
    ret_value = slider_value.fontcolor(ok_color);
    label_pwdlenght.style.color = ok_color;
    label_icon.innerHTML = "<i class='fa fa-check-circle fa-2x'></i>&nbsp";
    label_icon.style.color = ok_color;
  }

  output_pwdlenght.innerHTML = ret_value;
  pwdGen();
}

// Password generator functions
button.addEventListener('click', (ev) => {
  ev.preventDefault();
  pwdGen();
});

function pwdGen () {
  const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789._?#$%&=),!-;*+([]{}|";
  let strText = "";
  let arrPasswords = [];

  for (var intIterations = 1; intIterations <= 1; intIterations++) {
    strText = "";
    for (var intCont = 1; intCont <= slider_pwdlenght.value; intCont++) {
      strText += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    arrPasswords.push(strText);
  }
  document.getElementById('output-password').innerHTML = arrPasswords.join("\n");
}

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