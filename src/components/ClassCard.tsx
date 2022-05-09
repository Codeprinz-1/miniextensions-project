import React from "react";

const ClassCard = (props: ClassData) => (
    <Container>
        <Text bold>Name</Text>
        <Text>{props.name}</Text>
        <Text bold>Students</Text>
        <Text>{props.students.join(',')}</Text>
    </Container>
)