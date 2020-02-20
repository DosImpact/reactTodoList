import React, { useEffect, useState } from "react";
import TodoElement from "./components/TodoElement";
import { Container, Button, TitleBox, TitleElement, Input } from "./modules/StyledDiv";

/**
 * input으로 todolist 만들수 있다,
 *
 */
const useInput = (v = '') => {
  const [value, setValue] = useState(v);
  return {
    value, setValue,
    onChange(event) {
      setValue(event.target.value); // event.target.value에 null이 들어올 수 있나요? if문 제외했습니다. 
    }
  }
};

const ToDo = () => {
  const todoInput = useInput();
  const hourInput = useInput();
  const minInput = useInput();
  const secInput = useInput();
  const [todoList, setTodoList] = useState({});

  const _submit = e => {
    e.preventDefault();

    const totalTime = {
      h: parseInt(hourInput.value),
      m: parseInt(minInput.value),
      s: parseInt(secInput.value),
    };
    
    const ID = Date.now();
    const newTodo = {
      id: ID,
      content: todoInput.value,
      isComplete: false,
      createAt: ID,
      completeAt: null,
      totalTime,
    };
    
    setTodoList({ ...todoList, [ID]: newTodo });
    todoInput.setValue("");
  };

  const _updateTodo = ({
    id,
    content = null,
    isComplete = null,
    completeAt = null
  }) => {
    let updatedTodo = todoList[id];
    if (content !== null) {
      updatedTodo.content = content;
    }
    if (isComplete !== null) {
      updatedTodo.isComplete = isComplete;
    }
    if (isComplete !== null) {
      updatedTodo.completeAt = completeAt;
    }
    setTodoList({ ...todoList, [id]: updatedTodo });
  };

  const _deleteTodo = id => {
    delete todoList[id];
    setTodoList({ ...todoList });
  };
  
  // initialize
  useEffect(() => {
    const current = localStorage.getItem("TODOLIST");
    if (current !== null) {
      setTodoList(JSON.parse(current));
    }
    // return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Container>
      <TitleBox width="50vw" height="20vh">
        {['TO', 'DO', 'LIST'].map(e => (
          <TitleElement width="100px" height="100px">
            {e}
          </TitleElement>
        ))}
      </TitleBox>
      <form onSubmit={_submit}>
        <Input
          width="50vw"
          height="100px"
          value={todoInput.value}
          onChange={todoInput.onChange}
          placeholder="add to do"
        />
        {[
          [hourInput, 'hours'],
          [minInput, 'minutes'],
          [secInput, 'seconds'],
        ].map(([input, placeholder]) => (
          <Input
            width="100px"
            height="100px"
            value={input.value}
            onChange={input.onChange}
            placeholder={placeholder}
          />
        ))}
        <Button>ADD</Button>
      </form>
      <div>
        {Object.values(todoList || {}).map(todo => (
          <TodoElement
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isComplete={todo.isComplete}
            createAt={todo.createAt}
            updateTodo={_updateTodo}
            deleteTodo={_deleteTodo}
            completeAt={todo.completeAt}
            totalTime={todo.totalTime}
          />
        ))}
      </div>
    </Container>
  );
};

export default ToDo;
