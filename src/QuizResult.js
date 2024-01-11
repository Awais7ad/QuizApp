import React from 'react'
import styled from 'styled-components';
const QuizResult = ({marks,user}) => {
    return (
        <Wrapper1>  
            <Wrapper>
              <Question >QuizResult</Question>
            <Question>UserName:{user}</Question>
            <Question>TotalMarks:{marks}/10</Question>
            </Wrapper>
        </Wrapper1>

    )
}
const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #3498db; /* Blue border color */
  background-color: #ecf0f1; /* Light gray background color */
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.h1`
  margin-bottom: 16px;
  font-size: 30px;
  font-weight: bold;
  margin: 30px 10px;
  text-align:center;
  padding:30px;
  color:#17a2b8;
//   border: 2px solid #3498db; /* Blue border color */
//   &:hover {
//     background-color: #3498db; /* Blue hover color */
//     color: white;
//   }
`;


export default QuizResult;