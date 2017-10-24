import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { modalContentMapper, modalContentComponents} from "common/modalMapper.js";

function mapStateToProps(state) {
    const {modal = {}} = state; 
    return {
      show: modal.show,
      data: modal.data
    };
}

class GlobalModal extends React.Component {
  // render
  
  render() {
    const {show, data = {}} = this.props;
    const { content = null, msg = '', title = '', okButtonAction = false, okButtonText = 'Save'} = data
    const  ComponentToRender = modalContentComponents[content];
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {ComponentToRender ? <ComponentToRender/> :  msg}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>this.closeModal()}>Close</Button>
          {okButtonAction && <Button onClick={() => this.okAction()} bsStyle="primary">{okButtonText}</Button>}
        </Modal.Footer>
      </Modal>
    );
  }
  okAction() {
      let {okButtonAction} = this.props.data;
      okButtonAction();
      this.closeModal();
  }
  closeModal() {
      this.props.dispatch({
          type: 'HIDE_MODAL'
      })
  }
}

// prop checks
// GlobalModal.propTypes = {
//     show: PropTypes.bool.isRequired,
//     user: PropTypes.object.isRequired,
//     hideDelete: PropTypes.func.isRequired,
//     userDelete: PropTypes.func.isRequired,
//   }

  export default connect(mapStateToProps)(GlobalModal);