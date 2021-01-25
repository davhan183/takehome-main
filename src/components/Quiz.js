import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Form, 
} from 'react-bootstrap';

import { getQuiz, getResult } from './QuizzesAPI.js';

import Questions from './Questions.js';
import { 
  TopSpacedHeader, 
  CustomSecondaryHeader, 
  CustomButton,
} from './Style.js';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Limited quiz data
      quiz: null,
      questionIDs: null,
      // Graded result data of attempt
      result: null,
      resultText: "",
    }
  }

  componentDidMount() {
    // Getting quiz data with quiz ID on mount
    const { id } = this.props;
    getQuiz(id).then(quiz => {
      // Getting all question IDs in quiz
      const questionIDs = quiz.questions.map(question => question.id );
      this.setState({ quiz, questionIDs });
    });
  }

  processAttempt(answers) {
    const { id } = this.props;
    // Getting and processing graded result data of attempt
    getResult(id, answers).then(result => {
      // Creating result text from the graded result data of attempt
      const { correct, incorrect } = result;
      const total = correct + incorrect;
      const resultText = `Your score is ${Math.round(correct/total*100)}% (${correct}/${total} correct)`
      this.setState({ result, resultText });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Creating answers from form value of each question ID
    const { questionIDs } = this.state;
    const answers = questionIDs.reduce((obj, id) => {
      obj[id] = event.target[id].value;
      return obj;
    }, {});
    this.processAttempt(answers);
  }

  render() {
    const { quiz, result, resultText } = this.state;
    return quiz && (
      <Container>
        <Row>
          <Col>
            <TopSpacedHeader>{quiz.title}</TopSpacedHeader>    
            <CustomSecondaryHeader>{resultText}</CustomSecondaryHeader>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Questions 
            questions={quiz.questions} 
            questionResults={result && result.questions} 
          />
          <CustomButton type="submit">
            Submit
          </CustomButton>
        </Form>
      </Container>
    );
  }
}

// React Hook Version
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function Quiz() {
//   const [quiz, setQuiz] = useState(null);
//   const [result, setResult] = useState(null);
//   const [resultText, setResultText] = useState("");

//   const { id } = useParams();
//   useEffect(() => {
//     // Get quiz data with id
//     getQuiz(id).then(quiz => {
//       setQuiz(quiz);
//     });
//   }, []);

//   return quiz && (
//   ); 
// }

export default Quiz;