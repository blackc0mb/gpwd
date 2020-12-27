function get_passwords(intNumPwd, intLenght) {
   var strText = "";
   var strRetPasswords = "";
   var strPossible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ0123456789._?#$%&=),!-;*";

   for (var intIterations = 1; intIterations <= intNumPwd; intIterations++) {
      strText = "";
      for (var intCont = 1; intCont <= intLenght; intCont++) {
         strText += strPossible.charAt(Math.floor(Math.random() * strPossible.length));
      }      
      strRetPasswords += strText + "<br>"
   }
   //alert(strRetPasswords);
   document.getElementById('lblresult').innerHTML = strRetPasswords;
   // return strRetPasswords;
}

function setText(id,newvalue) {
   var s= document.getElementById(id);
   s.innerHTML = newvalue;
 } 
