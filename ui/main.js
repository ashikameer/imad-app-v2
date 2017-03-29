var button = document.getElementById('butto');

button.onclick = function(){
    var request = new XMLHttpRequest() ;
    request.onreadystatechange = function(){
        if (request.readystate===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById('spa');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://ashikameer.imad.hasura-app.io/counter',true);
    request.send(null);
};