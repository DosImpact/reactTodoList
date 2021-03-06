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
const Button = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #c0c0c0;
  box-shadow: inset 10px 10px 20px #a3a3a3, inset -10px -10px 20px #dddddd;
  margin: 0px 5px;
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
  const TodoInput = useInput(); //FB) 변수 소문자 시작해라.
  const hourInput = useInput(0); //FB) useInput에서 초기값 안받는데, 의미없는 인자 전달.....
  const minInput = useInput(0);
  const secInput = useInput(0);
  const [todoList, setTodoList] = useState({});

  const _submit = e => {
    e.preventDefault();

    const totalTime = {
      h: isNaN(parseInt(hourInput.value)) ? 0 : parseInt(hourInput.value),
      m: isNaN(parseInt(minInput.value)) ? 0 : parseInt(minInput.value),
      s: isNaN(parseInt(secInput.value)) ? 0 : parseInt(secInput.value)
    };
    console.log(totalTime);
    _createTodo({ content: TodoInput.value, totalTime });
    TodoInput.setValue("");
  };
  const _createTodo = ({ content, totalTime }) => {
    const ID = Date.now();
    const newTodo = {
      [ID]: {
        id: ID,
        content: content,
        isComplete: false,
        createAt: ID,
        completeAt: null,
        totalTime
      }
    };
    setTodoList({ ...todoList, ...newTodo }); // +)      setTodoList({ ...todoList, [ID]: newTodo }); 이런 방법도!
  };
  const _updateTodo = ({
    id,
    content = null,
    isComplete = null,
    completeAt = null
  }) => {
    let updatedTodo = todoList;
    if (content !== null) {
      updatedTodo[id].content = content;
    }
    if (isComplete !== null) {
      updatedTodo[id].isComplete = isComplete;
    }
    if (isComplete !== null) {
      updatedTodo[id].completeAt = completeAt;
    }
    setTodoList({ ...todoList, ...updatedTodo });
  };

  const _deleteTodo = id => {
    // const deletedtodoList = todoList;
    // delete deletedtodoList[id];
    // setTodoList({ ...deletedtodoList });

    //FB) 다음 처럼 바꾸면 얼마나 좋아.
    delete todoList[id];
    setTodoList({ ...todoList });
  };

  const loadTodoList = () => {
    const current = localStorage.getItem("TODOLIST");
    if (current !== null) {
      setTodoList(JSON.parse(current));
    }
  };

  useEffect(() => {
    loadTodoList();
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Container>
      <TitleBox width="50vw" height="20vh">
        {/**
        
         <TitleElement width="100px" height="100px">
          TO
        </TitleElement>
        <TitleElement width="100px" height="100px">
          Do
        </TitleElement>
        <TitleElement width="100px" height="100px">
          LIST
        </TitleElement>
      
          */}
        {["TO", "DO", "LIST"].map(e => (
          <TitleElement width="100px" height="100px">
            {e}
          </TitleElement>
        ))}
      </TitleBox>
      <form onSubmit={_submit}>
        <Input
          width="50vw"
          height="100px"
          value={TodoInput.value}
          onChange={TodoInput.onChange}
          placeholder="add to do"
        ></Input>
        <Input
          width="100px"
          height="100px"
          value={hourInput.value}
          onChange={hourInput.onChange}
          placeholder="hours"
        ></Input>
        <Input
          width="100px"
          height="100px"
          value={minInput.value}
          onChange={minInput.onChange}
          placeholder="Minute"
        ></Input>
        <Input
          width="100px"
          height="100px"
          value={secInput.value}
          onChange={secInput.onChange}
          placeholder="Second"
        ></Input>
        <Button>ADD</Button>
      </form>
      <div>
        {
          //FB) Object.values(todoList).map((e, idx) => .. todoList가 없는경우라면!! 물론 초기값을 {} 해서 애러는 안난다.
        }
        {todoList
          ? Object.values(todoList || {}).map((e, idx) => (
              <TodoElement
                key={idx}
                id={e.id}
                content={e.content}
                isComplete={e.isComplete}
                createAt={e.createAt}
                updateTodo={_updateTodo}
                deleteTodo={_deleteTodo}
                completeAt={e.completeAt}
                totalTime={e.totalTime}
              />
            ))
          : null}
      </div>
    </Container>
  );
};

export default ToDo;

const useInput = () => {
  const [value, setValue] = useState(""); //FB)useInput 훅 초기값 설정
  const onChange = e => {
    if (e.target.value !== null) {
      // FB) null이 들어올수있나 ?! 아니다... 생략
      setValue(e.target.value);
    }
  };
  return { value, onChange, setValue };
};
