import styled from "styled-components";

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

export { Container, Button, TitleBox, TitleElement, Input, Row, Text, };