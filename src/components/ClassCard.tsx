import React from 'react';
import { Container, Text } from '../styled-components/ClassCard.styled';

const ClassCard = (props: ClassData) => (
  <Container>
    <Text bold>Name</Text>
    <Text>{props.name}</Text>
    <Text bold>Students</Text>
    <Text>{props.students.join(', ')}</Text>
  </Container>
);

export default ClassCard;
