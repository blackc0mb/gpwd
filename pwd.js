function get_passwords(intNumPwd, intLenght) {
   var strText = "";
   var strRetPasswords = "";
   var strChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789._?#$%&=),!-;*";

   for (var intIterations = 1; intIterations <= intNumPwd; intIterations++) {
      strText = "";
      for (var intCounter = 1; intCounter <= intLenght; intCounter++) {
         strText += strChars.charAt(Math.floor(Math.random() * strChars.length));
      }      
      strRetPasswords += strText + "<br>"
   }
   document.getElementById('lblresult').innerHTML = strRetPasswords;
}

function setText(id,newvalue) {
   var newtextelemnt = document.getElementById(id);
   newtextelemnt.innerHTML = newvalue;
 } 
