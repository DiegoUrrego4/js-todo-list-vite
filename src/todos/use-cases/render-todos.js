import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

let element;

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!elementId) throw new Error('Element ID MUST be provided');

  if (!element) element = document.querySelector(elementId);

  element.innerHTML = '';

  todos.forEach(todo => {
    element.append(createTodoHTML(todo));
  });
};
