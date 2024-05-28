import React from 'react';

const AuthLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <>
        <h3>Auth Pages Layout</h3>
        {children}
        </>
    )
};

export default AuthLayout;