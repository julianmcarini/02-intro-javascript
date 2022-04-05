
//Existe la forma de crear un arreglo de esta manera pero no se usaa
// const arreglo = new Array( 100 );

// const arreglo = [];

//no usar el push ya que modifica el objeto principal cuando se 
//inserta un elemento al arreglo
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

const arreglo = [1,2,3,4];
let arreglo2 = arreglo;
arreglo2.push(5);


//la manera de asignarle un arreglo sin mutar el anterior es con los
//tres puntos

let arreglo3 = [...arreglo,6];
// arreglo3.push(6);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

// let arreglo4 = arreglo3.map(function(x){
//     return x
// })

let arreglo4 = arreglo3.map(function(x){
    return x * 2;
})

console.log(arreglo4);
