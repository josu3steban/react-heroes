import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../selectors/getHeoreById';

export const HeroePage = () => {

    const params = useParams();

    const heroe = getHeroeById( params.heroeId );
    
    if( !heroe ) {
        return <Redirect to='/' />;
    }
    
    const {superheroe, characters, alter_ego, first_appearance} = heroe;
    
    return (
        <div>
            <h1>Heroe Page</h1>
        </div>
    )
}
