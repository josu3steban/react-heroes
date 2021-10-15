import React from 'react'
import { HeroeListPage } from '../heroe/HeroeListPage'

export const MarvelPage = () => {
    return (
        <div>
            <h1>Marvel Page</h1>
            <hr />
            <HeroeListPage publisher='Marvel Comics'/>
        </div>
    )
}
