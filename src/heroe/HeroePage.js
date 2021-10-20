import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../selectors/getHeoreById';

export const HeroePage = ({ history }) => {

    const params = useParams();

    const heroe = getHeroeById( params.heroeId );
    
    if( !heroe ) {
        return <Redirect to='/' />;
    }
    
    const handleReturn = () => {
        if( history.length <= 1 ) {
            history.push('/dc');
        } else {
            history.goBack();
        }
    }
    
    const {superheroe, characters, alter_ego, first_appearance, publisher} = heroe;
    
    return (
        <div className='row mt-5'>
            <div className='col-5'>
                <img src={ `../assets/heroes/${ params.heroeId }.jpg` } className='img-thumbnail' alt={ superheroe } />
            </div>
            <div className='col-7'>
                <h4>{ superheroe }</h4>
                <ul className='list-group '>
                    <li className='list-gruoup-item'><b>Alter ego: </b>{ alter_ego }</li>
                    <li className='list-gruoup-item'><b>Publisher: </b>{ publisher }</li>
                    <li className='list-gruoup-item'><b>First appearance: </b>{ first_appearance }</li>
                </ul>
                <h5>Characters: </h5>
                <p>{ characters }</p>

                <button
                    className='btn btn-outline-info'
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
