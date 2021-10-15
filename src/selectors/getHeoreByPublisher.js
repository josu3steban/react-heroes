import { heroesDB } from "../data/heroesDB";


export const getHeroeByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes( publisher )) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroesDB.filter( (heroe) => heroe.publisher === publisher );
    
}