//desestructuracion de arreglos

const personajes = ['goku','veggeta','Trunks'];

const [ , ,p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC',123];
}

const [letra,numero] = retornaArreglo();
console.log(letra,numero);

const uState = (valor) => {
    return [valor, () =>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre] = uState('goku');
console.log(nombre);

setNombre();