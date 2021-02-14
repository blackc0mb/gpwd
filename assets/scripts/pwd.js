const intNumPwd = document.querySelector('#numpwd');
const intLength = document.querySelector('#pwdlenght');
const retPassword = document.querySelector("#lblresult");
const button = document.querySelector('#submitBtn');
const resetBtn = document.querySelector('#resetBtn');

button.addEventListener('click', (ev) => {
   const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789._?#$%&=),!-;*";   
   let strText = "";
   let strRetPasswords = "";   
   
   ev.preventDefault();   

   if (validate_form() == false) {
      document.getElementById('lblresult').innerHTML = "Number of passwords must between 1 - 50 | length password must be between 1 - 30"
      return strRetPasswords;
   }   

   for (var intIterations = 1; intIterations <= intNumPwd.value; intIterations++) {
      strText = "";
      for (var intCont = 1; intCont <= intLength.value; intCont++) {
         strText += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
      }
      strRetPasswords += strText + "\n";
   }
   document.getElementById('lblresult').innerHTML = strRetPasswords;
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
}