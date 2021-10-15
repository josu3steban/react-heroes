import React from 'react'
import { getHeroeByPublisher } from '../selectors/getHeoreByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeListPage = ({ publisher }) => {

    const heroes = getHeroeByPublisher( publisher );
    
    return (
        <div className='row g-4'>
            {
                heroes.map( ( heroe ) => (
                    <HeroeCard key={heroe.id} { ...heroe }/>
                ))
            }
        </div>
    )
}
