//Codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo del Triangulo

console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo);

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo)/2;
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del Circulo es de: " + radioCirculo + "cm");
// Diametro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

function diametroCirculo(radio) {
    return radio*2;
}


// PI
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del Circulo es de: " + perimetroCirculo + "cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio * radio)* PI;
}
//console.log("El area del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();

///////////////////////////////////////////////////////////////////////////////

console.group("Triangulo Isoceles");

function perimetroTrianguloIsoceles(lado1, lado2, ladoBase) {
    if (lado1 != lado2) {
        console.error("Los lados de a y b no son iguales");
    }
    else {
        return lado1 + lado2 + ladoBase;
    }
}

function alturaTrianguloIsoceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB)
    {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
            }
    }


console.groupEnd();