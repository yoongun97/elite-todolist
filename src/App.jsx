// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["리액트 공부하기", "아침 운동하기"]);

  const addTodosHandler = () => {
    const newTodo = [...todos, input];
    setTodos(newTodo);
  };

  const deleteTOdoHandler = (inIndex) => {
    const updateTodos = todos.filter((todo, index) => {
      return index !== inIndex;
    });
    setTodos(updateTodos);
  };

  return (
    <>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodosHandler();
          setInput("");
        }}
      >
        출력
      </button>
      <h4>투두리스트</h4>
      {todos.map((todo, index) => {
        return (
          <div>
            <span>{todo}</span>
            <button
              onClick={() => {
                deleteTOdoHandler(index);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
