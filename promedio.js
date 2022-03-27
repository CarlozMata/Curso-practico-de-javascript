/*const lista1 = [
    100, 200, 300, 500,
];*/

function calcularMediaAritmetica(lista) {

/*    let sumaLista = 0; //Esto es una variable que va cambiar su valor.
    for (let i = 0; i < lista.length; i++) 
    {
        sumaLista = sumaLista + lista[i];
    }
  */  
    const sumaLista =  lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); //Reduce = Recibe una funcion y va sumando cada uno de los elementos dentro de la lista..

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}