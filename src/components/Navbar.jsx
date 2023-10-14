import React from 'react'
import styled from 'styled-components';

const Section = style.div`
  display: flex;
  justify-content: center;
  `;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const List = styled.ul`
      display: flex;
      gap: 20px;
      list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;

`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`;

const Navbar = () => {
  return (
   <Section>
      <Container>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About Me</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>

        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar