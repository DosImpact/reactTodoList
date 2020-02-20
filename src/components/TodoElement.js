import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  width: 80vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  ${props => (props.isComplete ? "text-decoration: line-through;" : null)}
  margin: 0px 10px;
  width: 30vw;
  height: 50px;
  border-radius: 50px;
  background: #c0c0c0;
  box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
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
const Input = styled.input`
  all: unset;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50px;
  background: #c0c0c0;
  box-shadow: inset 20px 20px 40px #a3a3a3, inset -20px -20px 40px #dddddd;
  margin: 20px;
`;

const TodoElement = ({
  id,
  content,
  isComplete,
  createAt,
  updateTodo,
  deleteTodo
}) => {
  const [data, setData] = useState(content);
  const [_isComplete, _setisComplete] = useState(isComplete);
  const [isEdit, setIsEdit] = useState(false);
  const _handleChange = e => {
    setData(e.target.value);
  };
  const _EditEnd = e => {
    setIsEdit(!isEdit);
    updateTodo({ id, content: data });
  };

  const _handleisComplete = e => {
    _setisComplete(!_isComplete);
  };

  useEffect(() => {
    console.log(_isComplete);
    updateTodo({ id, isComplete: _isComplete });
  }, [_isComplete]);

  return (
    <Row>
      {isEdit ? (
        <>
          <Input
            width="30vw"
            height="50px"
            value={data}
            onChange={_handleChange}
          ></Input>
          <Button onClick={() => _EditEnd()}>
            <span role="img">✅</span>
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => _handleisComplete()}>
            <span role="img">⭕</span>
          </Button>
          <Text isComplete={_isComplete}>{data}</Text>
          <Button onClick={() => setIsEdit(!isEdit)}>
            <span role="img">🛠</span>
          </Button>
          <Button onClick={() => deleteTodo(id)}>
            <span role="img">❌</span>
          </Button>
        </>
      )}
    </Row>
  );
};

export default TodoElement;
/**
 *
 * 완료버튼 => 보고
 * 수정버튼 => Input로 변환(content변수를 여기서 복사해 또 관리) -> 완료시 -> 보고
 * 삭제버튼 => 보고
 */
