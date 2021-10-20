import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { HeroeCard } from '../heroe/HeroeCard'
import { useForm } from '../hooks/useForm';
import { getHeroeByName } from '../selectors/getHeroeByName';

export const SearchPage = ({ history }) => {

    const location = useLocation();
    
    const { q='' } = queryString.parse( location.search );
    
    const { formValue, handleInputChange} = useForm( {
        searchHero: q
    });
    
    const { searchHero } = formValue;
    
    const heroeFind = useMemo(() => getHeroeByName( q ), [ q ]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchHero }`);
    }
    
    return (
        <div className='row'>
            <h4>Buscar Personaje</h4>
            <hr />
            <div className='col-5'>
                <form onSubmit={ handleSubmit }>
                    <input
                        type='text'
                        placeholder='Nombre de personaje...'
                        className='form-control'
                        name='searchHero'
                        value={ searchHero }
                        onChange={ handleInputChange }
                    />
                    <button type='submit' className='m-1 btn btn-outline-primary'>
                        Buscar
                    </button>
                </form>
            </div>
            <div className='col-7'>
                <h4>Resultado</h4>
                {
                    heroeFind.map( (hero) => (
                        <HeroeCard key={ hero.id } { ...hero } />
                    ))
                }
            </div>
        </div>
    )
}
