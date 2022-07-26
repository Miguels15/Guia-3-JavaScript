function global(){
    var contador=0;
    function incrementar(){
        var i=0;
        for(i=0; i<10; i++){
            contador++;
        }
        alert("El contador esta aumentando de 1 en 1  hasta 10 usando clausuras: "+contador);
    }
    incrementar();
}
global();