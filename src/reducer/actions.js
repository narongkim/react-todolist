export const ADD = 'ADD_TODO';
export const DELETE = 'DELETE_TODO';

let id = 0;
export const addTodo = (todo) => {
  return {
    id: id++,
    name: todo.name,
    isCompleted: todo.isCompleted,
  };
};
