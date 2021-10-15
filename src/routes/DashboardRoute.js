import React from 'react'
import { Redirect, Switch, Route } from 'react-router'
import { DcPage } from '../dc/DcPage'
import { HeroePage } from '../heroe/HeroePage'
import { MarvelPage } from '../marvel/MarvelPage'
import { Navbar } from '../ui/NavBar'

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path='/marvel' component={ MarvelPage } />
                <Route exact path='/dc' component={ DcPage } />
                <Route exact path='/heroe/:heroeId' component={ HeroePage } />
                <Redirect to='/marvel' />
            </Switch>
        </>
    )
}
