import { useState } from "react";
import { styled } from "styled-components";
import uuid from "react-uuid";

const ListLayout = styled.div`
  padding: 20px;
`;

const TodoInput = styled.input`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  font-size: 15px;
  height: 30px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  width: 50px;
  height: 30px;

  cursor: pointer;
`;

const ListContainer = styled.div`
  border: 1px solid #e5e5e5;
  margin: 20px 0 20px 0;
  width: 70%;
`;

const TodoCard = styled.div`
  margin: 10px;

  display: flex;
  justify-content: space-between;
`;

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: uuid(), title: "리액트 공부하기", isLike: false },
    { id: uuid(), title: "아침 운동하기", isLike: false },
  ]);

  const addTodosHandler = () => {
    const newTodo = { title: input, isLike: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTOdoHandler = (id) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  return (
    <>
      <ListLayout>
        <h2>투두리스트</h2>
        <TodoInput
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            addTodosHandler();
            setInput("");
          }}
        >
          추가
        </Button>
        <ListContainer>
          {todos.map((todo) => {
            return (
              <TodoCard key={todo.id}>
                <span>{todo.title}</span>
                <div>
                  <Button
                    onClick={() => {
                      deleteTOdoHandler(todo.id);
                    }}
                  >
                    삭제
                  </Button>
                  <button>좋아요</button>
                  <span>1</span>
                </div>
              </TodoCard>
            );
          })}
        </ListContainer>
      </ListLayout>
    </>
  );
}

export default App;
