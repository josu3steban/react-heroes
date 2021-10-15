import { heroesDB } from "../data/heroesDB";


export const getHeroeById = ( id ) => {

    return heroesDB.find( (heroe) => heroe.id === id );
    
}