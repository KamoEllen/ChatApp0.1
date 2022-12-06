import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo
        src="http://assests.stickpng.com/images/580b57fcd9996e24bc43c543.png"
        />
        <Button variant="outlined">Sign in with gmail</Button>
      </LoginContainer>
    </Container>
  )
}

export default login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Logo = styled.div`
height: 200px;
width: 200px;
margin-bottom: 50px;

`;
