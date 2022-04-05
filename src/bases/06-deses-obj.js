
//Desestructuracion 
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const { edad, nombre, clave } = persona;

console.log(nombre, edad ,clave);

//La desestructuracion te permite pasarle un objeto a una funcion y entre
//llaves podes seleccionar que dato del objeto queres usar dentro de la 
//funcion.
//Tambien se le pueden asignar valor por defecto en el caso de que no este
//ese valor en el objeto, como ejemplo el rango, como viene ya en el objeto
//la funcion NO toma el por defecto

const retornaPersona = ({clave, nombre, rango = 'Capitan'}) => {
    console.log(nombre, clave, rango);
};

retornaPersona(persona);




const contextUse = ({clave, nombre, edad, rango = 'Capitan'}) => ({
        nombreClave: clave,
        anios: edad,
        latitud:{
            lat:123.34,
            lng:345.21
        }
});

const {nombreClave, anios, latitud:{lat, lng}} = contextUse(persona);
console.log(nombreClave, anios, lat, lng );