function principal() {
    var nombre = "Miguel Sánchez";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      alert(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
}
principal();