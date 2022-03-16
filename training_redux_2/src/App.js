import React, { Component } from 'react';
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/TodoFilter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import Stats from './components/Stats';
import { ReactComponent as AddIcon } from './icons/add.svg';

class App extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     console.log('Обновилось поле todos, записываю todos в хранилище');
  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }

  //   if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //     this.toggleModal();
  //   }
  // }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <IconButton
          onClick={this.toggleModal}
          aria-label="Добавить todo"
        >
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
        <Stats />
        <Filter />
        <TodoList />
      </Container>
    );
  }
}

export default App;
