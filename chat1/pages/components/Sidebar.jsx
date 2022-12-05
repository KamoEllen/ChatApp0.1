import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const Sidebar = () => {
  return (
    <div>
      Sidebar
      <Container>
        <Header>
        <UserAvatar/>
        <IconsContainer>
          <ChatIcon/>
          <MoreVertIcon/>
        </IconsContainer>
        </Header>
      </Container>
    </div>
  )
}

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;

const IconsContainer = styled.div``;