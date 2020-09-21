import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import BoardColumnHeader from './BoardColumnHeader';
import styles from './BoardColumn.module.css';
import { Ticket as TicketEntity } from './models/Ticket';
import Ticket from './Ticket';

interface BoardColumnProps {
    columnName: string,
    tickets: TicketEntity[]
}

export default function BoardColumn({columnName}: BoardColumnProps) {
    return (
        <Container className={styles.container}>
            <BoardColumnHeader name={columnName}></BoardColumnHeader>
            <Ticket id={1} title="New feature..." estimate={1} user={{ id: 1, name: 'Sam Vanwelsenaere', avatar:"https://react.semantic-ui.com/images/wireframe/square-image.png"}}></Ticket>
        </Container>
    )
}