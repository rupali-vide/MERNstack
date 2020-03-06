import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

import TodoComp from '../components/todo';
import Modal from '../components/modal';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.addTodoModal = React.createRef();
    this.state = {
      toDos: [ 'mobile', 'laptop', 'pendrive' ],
      showModal: false,
      currentValue: undefined,
      currentIndex: -1,
    };
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal,
      currentValue: undefined,
      currentIndex: -1,
    });
  }

  handleSave = () => {
    const { toDos } = this.state;
    const val = this.addTodoModal.current.value;
    if (val.length > 0) {
      if (this.state.currentIndex !== -1) {
        toDos.splice(this.state.currentIndex, 1, val);
      }
      else toDos.push(val);
    }
    this.setState({ ...this.state, toDos });
    this.toggleModal();
  }

  handleDelete = index => {
    const { toDos } = this.state;
    toDos.splice(index, 1);
    this.setState({...this.state, toDos });
  }

  handleEdit = (value, index) => {
    this.setState({
      ...this.state,
      showModal: true,
      currentValue: value,
      currentIndex: index
    });
  }

  changeHandler = () => {
    const currentValue = this.addTodoModal.current.value;
    this.setState({...this.state, currentValue });
  }

  render() {
    const { toDos, showModal, currentValue } = this.state;
    return (
      <div className="container">
        <ListGroup variant="flush">{toDos.map((todo, idx) => <TodoComp key={idx} edit={this.handleEdit} del={this.handleDelete} todo={todo} idx={idx}/>)}</ListGroup>
        <Button variant="info" block className="fixed-bottom container" onClick={this.toggleModal}>+</Button>
        <Modal
          showModal={showModal}
          toggleModal={this.toggleModal}
          handleSave={this.handleSave}
          addTodoModal={this.addTodoModal}
          changeHandler={this.changeHandler}
          value={currentValue}
          placeholder="What do you want to do ?" />
      </div>
    )
  }
}

export default Todo;