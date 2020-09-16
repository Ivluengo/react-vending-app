import React from 'react';
import { HeaderBox, LoginButton } from './styledHeader';

export default function Header( { handleLogin, isLogged } ) {
  return (
    <HeaderBox>

      <h1>VendingApp</h1>
      <LoginButton className="loginButton" onClick={ handleLogin } > {isLogged ? "Logout" : "Login"} </LoginButton>

    </HeaderBox>
  )
}