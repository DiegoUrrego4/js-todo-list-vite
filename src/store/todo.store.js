import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [
    new Todo('Comprar pan'),
    new Todo('Sacar a Nala'),
    new Todo('Hacer ele almuerzo'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('initStore 🥑');
};

export default {
  initStore,
};
