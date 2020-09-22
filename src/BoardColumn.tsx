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

export default function BoardColumn({columnName, tickets}: BoardColumnProps) {
    return (
        <Container className={styles.container}>
            <BoardColumnHeader name={columnName}></BoardColumnHeader>
            {tickets.map(t => {
                return (
                    <Ticket key={t.id} id={t.id} title={t.description} estimate={t.estimate} user={t.user}></Ticket>
                )
            })}
        </Container>
    )
}