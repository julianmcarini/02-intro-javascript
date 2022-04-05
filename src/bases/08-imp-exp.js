import heroes, {owners} from "../data/heroes";

// console.log(heroes);
// console.log(owners)

export const getHereoById = (id) => 
    heroes.find((heroe) => heroe.id === id);


// console.log(getHereoById(2));


export const getHeroeByOwner = (owner) => 
    heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroeByOwner('DC'))