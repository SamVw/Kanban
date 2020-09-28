import React from 'react';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';
import styles from './BoardHeader.module.css';
import CreateEditTicketModal from './CreateEditTicketModal';
import { Ticket } from './models/Ticket';

interface BoardHeaderProps {
    onSubmitTicket: (ticket: Ticket) => void
}

export default function BoardHeader({onSubmitTicket}:  BoardHeaderProps) {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Header as="h1" size="huge">Kanban Board</Header>
                <CreateEditTicketModal trigger={<Button primary><Icon name="add"></Icon>New Ticket</Button>} onSubmit={onSubmitTicket}></CreateEditTicketModal>
            </div>
            <Divider fitted></Divider>
        </div>
    )
}