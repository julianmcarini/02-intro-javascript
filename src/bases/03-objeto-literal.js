const person = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 444555,
        lat: 123.44,
        lng: 45.666,
    }
};

// console.table(person);

//para clonar un objeto y no generar una mutacion para que no apunte a
//la misma direccion de memoria se usan los tres puntos
const person2 = person;
person2.nombre = 'Peter'

//aca afecta al primer objeto
console.log(person);
console.log(person2);

//para clonar el objeto le doy tres puntos antes de llamarlo
const persona3 = {...person};
persona3.nombre = 'Pedro';

console.log(' ')
console.log(person);
console.log(person2);
console.log(persona3)