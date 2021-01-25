import React from 'react';
import { 
  Row, 
  Col,
  Form,
} from 'react-bootstrap';

import { 
  QuestionContainer,
  OptionsCol,
  CorrectSpan,
  IncorrectSpan,
} from './Style.js';

function Questions(props) {
  const { questions, questionResults } = props;
  return questions.map((question, i) => {
    const options = question.options;
    const id = question.id;
    return (
      <QuestionContainer> 
        {/* Created horizontal line above every question except the first question */}
        {i !== 0 && <hr />}
        <Row>
          <Col>
            <p>
              {`${i + 1}. ${question.text} `}
              {questionResults && ( 
                questionResults[id] 
                  ? <CorrectSpan>Correct</CorrectSpan>
                  : <IncorrectSpan>Incorrect</IncorrectSpan>
                )
              }
            </p>
          </Col>
        </Row>
        <Row>
          <OptionsCol>
            {options && options.map((option, j) => {
              return (
                <Form.Check 
                  type="radio"
                  label={option}
                  value={option}
                  name={id}
                  key={`${i}_${j}`}
                />
              );
            } )}
          </OptionsCol>
        </Row>
      </QuestionContainer>
    );
  });
};


export default Questions;