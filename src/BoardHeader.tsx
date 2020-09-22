import React, { Component } from 'react';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';
import styles from './BoardHeader.module.css';
import CreateTicketModal from './CreateTicketModal';
import { Ticket } from './models/Ticket';
import { User } from './models/User';

interface BoardHeaderProps {
    onSubmitTicket: (ticket: Ticket) => void
}

export default function BoardHeader({onSubmitTicket}:  BoardHeaderProps) {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Header as="h1" size="huge">Kanban Board</Header>
                <CreateTicketModal trigger={<Button primary><Icon name="add"></Icon>New Ticket</Button>} onSubmit={onSubmitTicket}></CreateTicketModal>
            </div>
            <Divider fitted></Divider>
        </div>
    )
}