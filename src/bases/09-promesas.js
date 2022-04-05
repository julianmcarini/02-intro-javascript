//promises

import { getHereoById } from "./bases/08-imp-exp";
import heroes from "./data/heroes";


// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout(() => {
//         const hereo = getHereoById(2);
//         console.log(heroes);
//         resolve(heroes);
    //    reject('No se pudo encontrar el heroe');
//     }, 2000);

// });

// promesa.then((heroes) => {
//     console.log('heroes',heroes);
// })
// .catch( err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
    
        setTimeout(() => {
            const heroes = getHereoById(id);
            if (heroes){
                resolve(heroes);
                console.log(heroes);
            }else{
                reject('Nose pudo encontrar al hereo');
            }
        }, 2000);  
    });
}

getHeroeByIdAsync(2).then(heroes).catch( console.warn);