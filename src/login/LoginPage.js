import React from 'react'

export const LoginPage = ( { history } ) => {

    const handleLogin = () => {
        console.log('CLICK');
        history.replace('/dc');
    }
    
    return (
        <div className='container mt-5'>
            <h1>Login Page</h1>

            <button
                className='btn btn-primary'
                onClick={ handleLogin }
            >
                Ingresar
            </button>
        </div>
    )
}
