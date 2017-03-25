var img = document.getElementById("madi") ;
var lft=0 ;
function moveRight () {
    lft=lft+10;
    img.style.marginLeft = lft + 'px' 
};
img.onclick = function () {
    var interval =setInterval(moveRight,100);
};