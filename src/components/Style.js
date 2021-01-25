
import { Link } from 'react-router-dom';
import { Button, Container, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';

export const TopSpacedHeader = styled.h2`
  margin-top: 60px;
`;

export const SpacedHeader = styled(TopSpacedHeader)`
  margin-bottom: 60px;
`;

export const CustomSecondaryHeader = styled.h5`
  color: #9b9b9b;
  height: 50px;
`;

export const CustomLink = styled(Link)`
  color: #5f55ff;
  text-decoration: none;
`;

export const CustomButton = styled(Button)`
  background-color: #5f55ff;
  margin-top: 50px;
  padding-left: 35px;
  padding-right: 35px;
`;

export const QuestionContainer = styled(Container)`
  text-align:left;
`;

export const OptionsCol = styled(Col)`
  margin-top: -10px;
  margin-left: 15px;
`;

export const CorrectSpan = styled.span`
  color: #36c8bd;
`;

export const IncorrectSpan = styled.span`
  color: #ff3f3a;
`;