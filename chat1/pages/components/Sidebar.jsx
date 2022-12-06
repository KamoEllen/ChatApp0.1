import React from 'react';
import styled from 'styled-components'
import {Avatar, Button, IconButton} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

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
          <IconButton>

          </IconButton>
          <ChatIcon/>
          <MoreVertIcon/>
        </IconsContainer>
        </Header>
        <Search>
          <SearchIcon/>
          <SearchInput placeholder="search in chats"/>
          <SidebarButton>
            Start a new chat
          </SidebarButton>
        </Search>
        {/*list of chats*/}

          <ChatIcon/>
          <MoreVertIcon/>
        </IconsContainer>

    <div>Sidebar
      <Container>
        <Header>


        </Header>

      </Container>
    </div>
  )
}

const Container = styled.div``;

const SidebarButton = styled(Button)`
width: 100;
&&&{
  border-top: 1px solid whitesmoke;
border-bottom: 1px solid whitesmoke;
}

`;

const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 2px
`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;

`;

const Header = styled.div`
display: flex;
position:sticky;
top: 0;
background-color: white;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;

`;

const UserAvatar = styled(Avatar)`
cursor: pointer;
:hover{
  opacity: 0.8;

}
`;

const IconsContainer = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;

const IconsContainer = styled.div``;

const userAvatar = styled(Avatar)``;

