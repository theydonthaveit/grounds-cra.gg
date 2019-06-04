import React from 'react';
// import Authentication from '../../components/Authentication'

function Auth({ children, isAuthenticated }) {
    return (
        <>
            {isAuthenticated
                ? children
                : <p>'Need to authenticate'</p>}
        </>
    );
}

export default Auth;