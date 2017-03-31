var butto=document.getElementById('counter');
var counter = 0 ;
butto.onclick===function(){
    counter=counter+1;
    var spa=document.getElementById('count');
    spa.innerHTML=counter.toString();
};