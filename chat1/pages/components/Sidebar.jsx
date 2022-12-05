import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'

export const Sidebar = () => {
  return (
    <div>
      Sidebar
      <Container>
        <Header>
        <UserAvatar/>
        </Header>
      </Container>
    </div>
  )
}

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;
