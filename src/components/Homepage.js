import React from 'react';
import { 
  Container, 
  Row, 
  Col,
} from 'react-bootstrap';

import { CustomLink, SpacedHeader } from './Style.js';

function Homepage(props) {
  const { quizHeaders } = props;
  return (
    <Container>
      <Row>
        <Col>
          <SpacedHeader>Quizzes</SpacedHeader>
        </Col>
      </Row>
      {/* Created Link for each quiz title to its respective quiz ID */}
      {quizHeaders.map(quizHeader => {
        return (
          <Row>
            <Col>
              <CustomLink to={/quizzes/ + quizHeader.id}>
                {quizHeader.title}
              </CustomLink>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default Homepage;