function esPar(numerito) {
    return (numerito % 2 === 0);
    }

    function calcularMediaAritmetica(lista) {
        const sumaLista =  lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

    //Calculadora de Mediana
    function medianaSalarios(lista) {
        const mitad = parseInt(lista.length / 2);

        if (esPar(lista.lenght)) {
            const personitaMitad1 = lista[mitad -1];
            const personitaMitad2 = lista[mitad];

            const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
            return mediana;
        }
        else
        { 
            const personitaMitad = lista[mitad];
            return personitaMitad;
        }
    }

    //Mediana General
const salariosCol = mexico.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

console.log(
    medianaSalarios(salariosColSorted)
);