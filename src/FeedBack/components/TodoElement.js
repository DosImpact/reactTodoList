import React, { useEffect, useState } from "react";
import { Row, Text, Button, Input } from "../modules/StyledDiv";

const TodoElement = ({
  id,
  content,
  isComplete,
  createAt,
  updateTodo,
  deleteTodo,
  completeAt,
  totalTime
}) => {
  const [data, setData] = useState(content);
  const [_isComplete, _setisComplete] = useState(isComplete);
  const [_completeAt, _setCompleteAt] = useState(completeAt || Date.now());
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
    // console.log(timeinterval);
  }, [_isComplete]);

  const isfail = () =>
    _isComplete &&
    timeinterval.h - totalTime.h >= 0 &&
    timeinterval.m - totalTime.m >= 0 &&
    timeinterval.s - totalTime.s >= 0;

  const normalView = (
    <>
      <Button onClick={_handleisComplete}>
        <span role="img">⭕</span>
      </Button>
      <Text isComplete={_isComplete}>{data}</Text>
      <Text fail={isfail()} success={_isComplete}>
        예상시간 : {totalTime.h}H {totalTime.m}M {totalTime.s}S {"\n"}
        걸린시간 :{timeinterval.h}H {timeinterval.m}M{timeinterval.s}S
      </Text>
      <Button onClick={() => setIsEdit(true)}>
        <span role="img">🛠</span>
      </Button>
      <Button onClick={() => deleteTodo(id)}>
        <span role="img">❌</span>
      </Button>
    </>
  );

  const editedView = (
    <>
      <Input
        width="30vw"
        height="50px"
        value={data}
        onChange={_handleChange}
      />
      <Button onClick={() => _EditEnd()}>
        <span role="img">✅</span>
      </Button>
    </>
  );

  return (
    <Row>
      { isEdit ? editedView : normalView }
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
