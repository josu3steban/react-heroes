import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ( { id, characters, alter_ego, superhero, first_appearance } ) => {
    return (
        <div className='card ms-3' style={ { maxWidth:500 } }>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={`./assets/heroes/${id}.jpg`} className='card-img' alt={ superhero } />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h4 className='card-title'>{ superhero }</h4>
                        <p className='card-text'>{ alter_ego }</p>
                        {
                            ( alter_ego !== characters )
                            && <p className='card-text'>{ characters }</p>
                        }
                        <p className='card-text'>
                            <small className='text-muted'>{ first_appearance }</small>
                        </p>
                        <Link to={`./heroe/${ id }`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
