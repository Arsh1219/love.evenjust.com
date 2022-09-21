import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { logout } from "../components/cookies";

export class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false
    };

    this.setModalVisibility = this.setModalVisibility.bind(this);
  }

  setModalVisibility(state) {
    this.setState({ modalShow: state });
  }

  render() {
    if (!this.state.modalShow) {
      return (
        <span
          className="mr-2 text-lg"
          onClick={() => this.setModalVisibility(true)}
        >
          Logout
        </span>
      );
    }
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.modalShow}
        onHide={() => this.setModalVisibility(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <p>Are you sure you want to logout? This will delete all data.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={logout} className="px-4">
            Yes
          </Button>
          <Button
            onClick={() => this.setModalVisibility(false)}
            className="bg-danger ml-4 px-4"
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
