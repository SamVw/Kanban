import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import BoardColumnHeader from './BoardColumnHeader';
import Ticket from './Ticket';
import styles from './BoardColumn.module.css';

interface BoardColumnProps {
    columnName: string,
    order: number
}

export default function BoardColumn({columnName}: BoardColumnProps) {
    return (
        <Container className={styles.container}>
            <BoardColumnHeader name={columnName}></BoardColumnHeader>
            <Ticket id={1} title="New feature..." estimate={1} user={{ name: 'Sam Vanwelsenaere', avatar:"https://react.semantic-ui.com/images/wireframe/square-image.png"}}></Ticket>
        </Container>
    )
}