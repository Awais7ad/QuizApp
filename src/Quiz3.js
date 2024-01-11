import React, { useState } from 'react';
import Quiz4 from './Quiz4';
import styled from 'styled-components';
const Quiz3 = ({ marks, setMarks, user }) => {
    const [showquiz4, setShowquiz4] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleRadioChange = (event) => {
        setSelectedLanguage(event.target.value);
    };
    console.log(selectedLanguage)
    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedLanguage) {
            if (selectedLanguage === 'HTML') {
                setMarks(prevMarks => prevMarks + 2);
            }
            setShowquiz4(true);
        } else {
            alert('Please select one option .');
        }
    };
    console.log(marks)
    return (
        <>
            {showquiz4 ? (
                <Quiz4 marks={marks} setMarks={setMarks} user={user} />
            ) : (
                <Wrapper1>
                    <Wrapper onSubmit={handleSubmit}>
                        <Question>Q4. Choose your favorite Web language:</Question>
                        <Wrapper2>

                            <RadioInput
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                                onChange={handleRadioChange}
                            />
                            <RadioLabel htmlFor="html">HTML</RadioLabel>
                        </Wrapper2>
                        <Wrapper2>

                            <RadioInput
                                type="radio"
                                id="css"
                                name="fav_language"
                                value="CSS"
                                onChange={handleRadioChange}
                            />
                            <RadioLabel htmlFor="css">CSS</RadioLabel>
                        </Wrapper2>
                        <Wrapper2>

                            <RadioInput
                                type="radio"
                                id="javascript"
                                name="fav_language"
                                value="JavaScript"
                                onChange={handleRadioChange}
                            />
                            <RadioLabel htmlFor="javascript">JavaScript</RadioLabel>
                        </Wrapper2>

                        <Wrapper3>
                            <SubmitButton type="submit" value="Submit" />
                        </Wrapper3>
                    </Wrapper>

                </Wrapper1>
            )}
        </>
    );
};
const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const Wrapper3 = styled.div`
width:100%;
height:100px;
display:flex;
justify-content:center;
align-items:center;

`



const Wrapper = styled.form`
  width: 400px;
  height: 400px;
  border: 1px solid #3498db; /* Blue border color */
  background-color: #ecf0f1; /* Light gray background color */
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Wrapper2 = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid #3498db; /* Blue border color */
  margin: 10px;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    background-color: #3498db; /* Blue hover color */
    color: white;
  }
`;

const Question = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  margin: 30px 10px;
  // border: 2px solid #3498db; /* Blue border color */
  &:hover {
    background-color: #3498db; /* Blue hover color */
    color: white;
  }
`;

const RadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 5px;
  margin-top: 7px;
  background-clip: content-box;
  border: 2px solid #3498db; /* Blue border color */
  background-color: #ecf0f1; /* Light gray background color */
  border-radius: 50%;
  box-shadow: 0 0 0 1px #3498db; /* Blue box shadow */

  &:checked {
    background-color: #e74c3c; /* Red color for checked state */
  }
`;

const RadioLabel = styled.label`
  font-size: 20px;
  cursor: pointer;
`;

const SubmitButton = styled.input`
  width: 300px;
  padding: 8px 20px;
  background-color: #2ecc71; /* Green color for submit button */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #27ae60; /* Darker green hover color */
  }
`;

export default Quiz3;