//Funciones en JS
//NO crear funciones asi ya que si se toma el nombre de la funcion
//y se le asigna cualquier valor o objeto, pisaria a la funcion
function saludar(nombre){
    return `Hola, ${nombre}`
}

// console.log(saludar('goku'))

saludar = 30;

console.log(saludar);


//La mejor manera de crear una funcion es asignandoselo a una variable CONST

const saludar2 = function saludar(nombre){
    return `Hola, ${nombre}`
}

//pincha si hago esto, ya que le estoy tratando de asignar un valor
//a una constante
// saludar2 = 30;

// console.log(saludar2);


const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludar3('goku'));


//Si una funcion solo hace un return se puede hacer
const saludar4 = (nombre) => `Hola, ${nombre}`;

console.log(saludar4('veggeta'));


//o si la funcion no recibe parametros
const saludar5 = () => `Hola Mundo`;

console.log(saludar5());


const getUser = () => {
    return {
        uid: 'ABC123',
        userName: 'El_asd',
    }
}

console.log(getUser())

//si quiero retornar un objeto y sin ponerle el return el objeto
//debe ir entre corchete para decirle cual es el objeto a retornar
//esto en valores primitivos como numeros o string no hace falta
//agregar los parentesis


const getUser2 = () => ({
    uid: 'JPF1234',
    userName: 'El_asd4545',
}
)
console.log(getUser2())



const getUsuarioActivo = (nombre) => ({
    uid: 'AASD34',
    username: nombre,
});

console.log(getUsuarioActivo('julian'))