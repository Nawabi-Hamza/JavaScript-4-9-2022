

// user A
var imgA =document.getElementById('imgA')
var imgB =document.getElementById('imgB')
var total=document.getElementById('totalA')
var totalx=document.getElementById('totalB')

function useraclcik(){
    var num1= Math.random();
    var num2= num1*6;
    var intnum= Math.floor(num2)+1;

    var num1x= Math.random();
    var num2x= num1x*6;
    var intnumx= Math.floor(num2x)+1;
    

    alert("User A Clicked");
    imgA.src="./pics/"+intnum+".png";
    imgB.src="./pics/"+intnumx+".png";
    total.innerHTML = intnum+intnumx;
    document.getElementById('UA').style="display:none;"
    document.getElementById('UB').style="display:block;"
}



// User B
function userbclcik(){
    var num1= Math.random();
    var num2= num1*6;
    var intnum= Math.floor(num2)+1;

    var num1x= Math.random();
    var num2x= num1x*6;
    var intnumx= Math.floor(num2x)+1;
    

    alert("User A Clicked");
    imgA.src="./pics/"+intnum+".png";
    imgB.src="./pics/"+intnumx+".png";
    totalx.innerHTML = intnum+intnumx;
    document.getElementById('UB').style="display:none;"
    document.getElementById('UA').style="display:block;"

}