import React from 'react';
import styled from 'styled-components';
import Clock from '../Clock';
import Cart from '../Cart';

const All = styled.header`
  margin-bottom: 5vw;
`;

const WhiteHeader = styled.div`
background-color: white;
`;

const Sign = styled.div`
  display:inline;
  margin: 1vw;
`;

const Clocki = styled.div`
  color: #c0d190;
  font-size: 16px;
  float: right;
  display: inline;
  padding-right: 1vw;
`;

const GreenHeader = styled.div`
  background-color: #c0d190;
`;

const Name = styled.div`
  font-size: 60px;
  padding-left: 1.5vw;
  font-family: "Pacifico";
  color: white;
  display: inline;
`;

const Paper = styled.div`
  font-size: 10px;
  float: right;
`;

function Header() {
  return (
    <All>
      <WhiteHeader>
        <Sign>
          Sign in
        </Sign>
        <Clocki>
          <Clock />
        </Clocki>
      </WhiteHeader>
      <GreenHeader>
        <Name>
          Natural
        </Name>
        <Paper>
          <Cart />
        </Paper>
      </GreenHeader>
    </All>
  );
}

export default Header;
