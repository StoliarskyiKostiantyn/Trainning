import React from 'react';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';
import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
}) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: id =>
    dispatch(todosActions.toggleCompleted(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
