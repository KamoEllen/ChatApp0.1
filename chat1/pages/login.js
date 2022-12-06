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
      </LoginContainer>
    </Container>
  )
}

export default login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.div``;
