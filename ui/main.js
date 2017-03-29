var button = document.getElementById('butto');
var span = document.getElementById('spa');

button.onclick = function(){
    var request = new XMLHttpRequest() ;
    request.onreadystatechange = function(){
        if (request.readystate===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://ashikameer.imad.hasura-app.io/counter',true);
    request.send(null);
};