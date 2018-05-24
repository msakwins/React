import React from 'react';
import styled from 'styled-components';
import Clock from '../Clock';

const H1 = styled.div`
  background-color: #c0d190;
  font-size: 60px;
  padding-left: 1.5vw;
  font-family: "Pacifico";
  color: white;
`;

const Clocki = styled.div`
  color: #c0d190;
  font-size: 16px;
  float: right;
  display: inline;
  padding-right: 1vw;
`;

const Paper = styled.div`
  float: right;
  padding-top: 1vw;
  padding-right: 1vw;
`;

const Head = styled.div`
  height: 8vw;
  font-size: 60px;
`;

const BigHeader = styled.header`
  height: 8vw;
  margin-bottom: 5vw;

  #signin {
    display: inline;
  }
`;

function Header() {
  return (
    <BigHeader>
      <div id="signin">Sign in</div>
      <Clocki><Clock /></Clocki>
      <Head>
        <Paper><img width="50px" src="http://icon-park.com/imagefiles/paperbag_brown.png" alt="cart" /></Paper>
        <H1>Natural</H1>
      </Head>
    </BigHeader>
  );
}

export default Header;
