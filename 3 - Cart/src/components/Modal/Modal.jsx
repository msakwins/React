import React from 'react';
import styled from 'styled-components';

const All = styled.div`
`;

const Button = styled.input`
outline: none;
`;

const Mod = styled.div`
float: right;
padding-top: 1vw;
padding-right: 1vw;
outline: none;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <All>
        <Button
          className="butt"
          data-toggle="modal"
          data-target="#exampleModal"
          type="image"
          width="50px"
          src="http://icon-park.com/imagefiles/paperbag_brown.png"
          alt="butt"
        />
        <Mod>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Hello</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Mod>
      </All>
    );
  }
}

export default Modal;
