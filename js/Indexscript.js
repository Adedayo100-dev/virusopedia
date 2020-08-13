
// Time
var myTime = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h +":" + m  +":"+ s ;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
// =================================================================================================================================
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("first").style.width = "200px";
    document.getElementById("second").style.opacity = "0.4";
    document.getElementById("toast").style.opacity = "0.4";
}
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("first").style.width = "0";
    document.getElementById("second").style.opacity = "1";
    document.getElementById("toast").style.opacity = "1";
}
