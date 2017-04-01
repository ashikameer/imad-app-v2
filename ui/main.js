
var button=document.getElementById('counter');

button.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://ashikameer.imad.hasura-app.io/counter',true);
    request.send(null);
};

var list=[];
var submit= document.getElementById("submit.btn");
submit.onclick=function(){
    var inp = document.getElementById('name');
    var name=inp.value;
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var names = request.responseText;
                for(var i=0;i<names.length;i++){
                    list="<li>"+names[i]+"</li>";
                }
                var upd = document.getElementbyId("lis");
                upd.innerHTML = list;
            }
        }
    };
    request.open('GET','http://ashikameer.imad.hasura-app.io/submit-name'+name,true);
    request.send(null);
    
};

