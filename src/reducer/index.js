import * as Actions from './actions';

const initState = {
  todos: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.ADD:
      return {
        todos: [...state.todos, Actions.addTodo(action.data)],
      };

    default:
      return state;
  }
};
