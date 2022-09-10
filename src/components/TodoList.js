import { useSelector } from 'react-redux';

function TodoList() {
  const todoItems = useSelector((state) => state.todos);
  const TodoList = todoItems.map((item) => {
    return (
      <div>
        <input type="checkbox" />
        {item.id}
        {item.name}
        {item.isCompleted}
      </div>
    );
  });
  return <div>{TodoList}</div>;
}

export default TodoList;
