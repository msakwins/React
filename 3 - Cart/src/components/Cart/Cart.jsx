import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const Paper = styled.div`
float: right;
padding-top: 1vw;
padding-right: 1vw;
outline: none;
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Paper>
        <Modal />
      </Paper>
    );
  }
}

export default Cart;
