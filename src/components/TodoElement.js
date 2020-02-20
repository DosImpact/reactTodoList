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
  ${props =>
    props.success
      ? `
      border-radius: 50px;
  background: #b3ceb6;
  box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;
          `
      : null}
  ${props =>
    props.fail
      ? `
      border-radius: 50px;
  background: #c8b3ce;
  box-shadow: 10px 10px 20px #a3a3a3, -10px -10px 20px #dddddd;
          `
      : null}
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

const TodoElement = props => {
  const { id, createAt, updateTodo, deleteTodo, totalTime } = props;

  const [data, setData] = useState(props.content);
  const [_isComplete, _setisComplete] = useState(props.isComplete);
  const [_completeAt, _setCompleteAt] = useState(
    props.completeAt || Date.now()
  );
  const [isEdit, setIsEdit] = useState(false);
  const [timeinterval, setTimeinterval] = useState({ h: 0, m: 0, s: 0 });

  const _handleChange = e => {
    setData(e.target.value);
  };
  const _EditEnd = e => {
    setIsEdit(!isEdit);
    updateTodo({ id, content: data });
  };

  const _handleisComplete = e => {
    _setCompleteAt(Date.now());
    _setisComplete(!_isComplete);
  };

  useEffect(() => {
    updateTodo({ id, isComplete: _isComplete, completeAt: _completeAt });

    let interval = (_completeAt - createAt) / 1000;
    const s = interval % 60;
    interval = interval / 60;
    const m = interval % 60;
    interval = interval / 60;
    const h = interval % 60;
    setTimeinterval({
      h: Math.floor(h),
      m: Math.floor(m),
      s: Math.floor(s)
    });
  }, [_isComplete]);

  const isfail =
    _isComplete &&
    timeinterval.h - totalTime.h >= 0 &&
    timeinterval.m - totalTime.m >= 0 &&
    timeinterval.s - totalTime.s >= 0;

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
          {_isComplete ? (
            isfail ? (
              <Text fail success>
                예상시간 : {totalTime.h}H {totalTime.m}M {totalTime.s}S {"\n"}
                걸린시간 :{timeinterval.h}H {timeinterval.m}M {timeinterval.s}S
              </Text>
            ) : (
              <Text success>
                예상시간 : {totalTime.h}H {totalTime.m}M {totalTime.s}S {"\n"}
                걸린시간 :{timeinterval.h}H {timeinterval.m}M {timeinterval.s}S
              </Text>
            )
          ) : (
            <Text>
              예상시간 : {totalTime.h}H {totalTime.m}M {totalTime.s}S {"\n"}
            </Text>
          )}
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
