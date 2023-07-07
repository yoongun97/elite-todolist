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

const BtnContainer = styled.div`
  display: flex;
`;

const LikeBtn = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  overflow: hidden;
  margin: 0 5px 0 5px;
  cursor: pointer;
`;

const LikeImg = styled.img`
  width: 30px;
  height: 30px;
`;

const LikeCount = styled.span`
  font-size: 20px;
`;

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: uuid(), title: "리액트 공부하기", isLike: false, likeCount: 0 },
    { id: uuid(), title: "아침 운동하기", isLike: false, likeCount: 0 },
  ]);

  const addTodosHandler = () => {
    const newTodo = { id: uuid(), title: input, isLike: false, likeCount: 0 };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodoHandler = (id) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  const likeBtnHandler = (id) => {
    const likeTodos = todos.map((todo) => {
      if (todo.id == id) {
        if (todo.isLike) {
          return {
            ...todo,
            isLike: !todo.isLike,
            likeCount: todo.likeCount - 1,
          };
        } else {
          return {
            ...todo,
            isLike: !todo.isLike,
            likeCount: todo.likeCount + 1,
          };
        }
      }
      return todo;
    });
    setTodos(likeTodos);
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
                <BtnContainer>
                  <Button
                    onClick={() => {
                      deleteTodoHandler(todo.id);
                    }}
                  >
                    삭제
                  </Button>
                  <LikeBtn
                    onClick={() => {
                      likeBtnHandler(todo.id);
                    }}
                  >
                    {todo.isLike ? (
                      <LikeImg
                        src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png"
                        alt="좋아요"
                      />
                    ) : (
                      <LikeImg
                        src="https://cdn-icons-png.flaticon.com/128/5926/5926215.png"
                        alt="좋아요"
                      />
                    )}
                  </LikeBtn>
                  <LikeCount>{todo.likeCount}</LikeCount>
                </BtnContainer>
              </TodoCard>
            );
          })}
        </ListContainer>
      </ListLayout>
    </>
  );
}

export default App;
