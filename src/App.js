import CompletedList from './components/CompletedList';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>ToDoList</h1>
      </header>
      <body>
        <CompletedList />
        <TodoList />
        <AddTodo />
      </body>
    </div>
  );
}

export default App;
