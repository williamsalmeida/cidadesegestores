import React, { Component } from "react";
import Modal from "react-responsive-modal";

class ModalPopup extends Component {
  render() {
    const { open, toggleModal } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: "unset",
            padding: "unset"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "transparent"
          }
        }}
        center
      >
        <div className="modal-popup">        
          <img src="https://ama-al.com.br/wp-content/uploads/2022/01/adiamento.jpg" alt="" />
        </div> 
      
      </Modal>
    );
  }
}

export default ModalPopup;