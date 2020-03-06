import React from 'react';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';

function todo(props) {
  return (
      <ListGroup.Item>{props.todo}
        <ButtonGroup className="float-right">
          <Button variant="success">done</Button> 
          <Button variant="primary" onClick={() => props.edit(props.todo, props.idx)}>edit</Button>
          <Button variant="danger" onClick={() => props.del(props.idx)}>delete</Button>
        </ButtonGroup>
      </ListGroup.Item>
  )
}

export default todo;

