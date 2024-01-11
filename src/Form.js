import React, { useState } from 'react';
import styled from 'styled-components';
import Quiz from './Quiz';

const Form = () => {
  const [user, setUser] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== '') {
      setShowQuiz(true);
    }
  };
  console.log(user)

  return (
    <>
      {showQuiz ? (
        <Quiz user={user} />
      ) : (
        <Wrapper>
          <Quizform onSubmit={handleSubmit}>
            <Inputs

              type="text"
              placeholder="username"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Inputs type="submit" value="Submit" />
          </Quizform>
        </Wrapper>
      )}
    </>
  );
};
const Wrapper = styled.div`
background-image:url('./pic4.jpg');
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content: center;
align-items:center;
width:100%;
height:100vh;
// border:2px solid red;

`

const Quizform = styled.form`

display: flex;
justify-content: center;
align-items:center;
flex-direction:column;
 gap:30px;
`;

const Inputs = styled.input`
width:400px;
height:45px;
color: white;
font-size: 25px;
background-color:rgba(0,0,0,.075);
border:none;
`;

export default Form;