import {heroesDB} from '../data/heroesDB'


export const getHeroeByName = ( name='' ) => {

    if( name === '' ) {
        return [];
    }

    const nameLC = name.toLocaleLowerCase();

    return heroesDB.filter( ( hero ) => hero.superhero.toLocaleLowerCase().includes( nameLC ));
}