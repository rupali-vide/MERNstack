import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function modal(props) {
  return (
    <Modal show={props.showModal} onHide={props.toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            as="textarea"
            ref={props.addTodoModal}
            value={props.value}
            onChange={props.changeHandler}
            placeholder={props.placeholder} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.toggleModal}>Close</Button>
        <Button variant="primary" onClick={props.handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>)
}

export default modal;