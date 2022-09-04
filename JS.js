// onclick
 var Theh1 = document.getElementById('h1')
 function mf(){
    // alert("clicked");
    Theh1.style.color="red"
}
// oncopy
function MC(){
    alert('you copied')
}
// onkeypress
function MK(){
    alert('you pressed the key')
}
//  onerror
function er(){
    alert("Invalid")
}
// onmouseover
  var myd =  document.getElementById('mydiv');
var showround= document.getElementById('shownumber');
function mover(){
    // myd.style="background-color:red; padding:34px; color:white;";
    var a= Math.random();
    var b= a*5+1 ;
    var c= Math.floor(b);

    showround.innerHTML=c;
    
}
