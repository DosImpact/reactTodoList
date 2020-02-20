import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoElement from "./components/TodoElement";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #c0c0c0;
  align-items: center;
  padding: 30px;
`;

const TitleBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50px;
  background: #c0c0c0;
  box-shadow: inset 31px 31px 63px #a3a3a3, inset -31px -31px 63px #dddddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TitleElement = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  background: linear-gradient(145deg, #cdcdcd, #adadad);
  box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 300;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 0.6;
    border-radius: 50px;
    background: linear-gradient(145deg, #adadad, #cdcdcd);
    box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;
  }
`;

const Input = styled.input`
  all: unset;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50px;
  background: #c0c0c0;
  box-shadow: inset 20px 20px 40px #a3a3a3, inset -20px -20px 40px #dddddd;
  margin: 20px;
`;

const ToDo = () => {
  const TodoInput = useInput();
  const [todoList, setTodoList] = useState({});
  const _submit = e => {
    e.preventDefault();
    _createTodo(TodoInput.value);
    TodoInput.setValue("");
  };
  const _createTodo = content => {
    const ID = Date.now();
    const newTodo = {
      [ID]: { id: ID, content: content, isComplete: false, createAt: ID }
    };
    setTodoList({ ...todoList, ...newTodo });
  };
  const _updateTodo = ({ id, content = null, isComplete = null }) => {
    let updatedTodo = todoList;
    if (content !== null) {
      updatedTodo[id].content = content;
    }
    if (isComplete !== null) {
      updatedTodo[id].isComplete = isComplete;
    }
    setTodoList({ ...todoList, ...updatedTodo });
  };

  const _deleteTodo = id => {
    const deletedtodoList = todoList;
    delete deletedtodoList[id];
    setTodoList({ ...deletedtodoList });
  };

  const loadTodoList = () => {
    const current = localStorage.getItem("TODOLIST");
    if (current !== null) {
      setTodoList(JSON.parse(current));
    }
  };

  const init = () => {
    loadTodoList();
  };

  useEffect(() => {
    init();
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Container>
      <TitleBox width="50vw" height="20vh">
        <TitleElement width="100px" height="100px">
          TO
        </TitleElement>
        <TitleElement width="100px" height="100px">
          Do
        </TitleElement>
        <TitleElement width="100px" height="100px">
          LIST
        </TitleElement>
      </TitleBox>
      <form onSubmit={_submit}>
        <Input
          width="80vw"
          height="100px"
          value={TodoInput.value}
          onChange={TodoInput.onChange}
          placeholder="add to do"
        ></Input>
      </form>
      <div>
        {todoList
          ? Object.values(todoList).map((e, idx) => (
              <TodoElement
                key={idx}
                id={e.id}
                content={e.content}
                isComplete={e.isComplete}
                createAt={e.createAt}
                updateTodo={_updateTodo}
                deleteTodo={_deleteTodo}
              />
            ))
          : null}
      </div>
    </Container>
  );
};

export default ToDo;
/**
 * input으로 todolist 만들수 있다,
 *
 */

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = e => {
    if (e.target.value !== null) {
      setValue(e.target.value);
    }
  };
  return { value, onChange, setValue };
};
