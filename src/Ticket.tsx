import React, { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { JsxElement } from 'typescript';
import Avatar from './Avatar';
import ConfirmButton from './ConfirmButton';
import CreateEditTicketModal from './CreateEditTicketModal';
import Estimate from './Estimate'
import { ItemTypes } from './KanbanBoard';
import { Ticket as TicketModel } from './models/Ticket';
import { User } from './models/User';
import styles from './Ticket.module.css';

type TicketProps = {
    ticket: TicketModel
    position: number,
    onDelete: (id: number) => void,
    onUpdate: (ticket: TicketModel) => void
}

export default function Ticket({ticket, position, onDelete, onUpdate}: TicketProps) {
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.Ticket, ticket: ticket.id, ticketPosition: position},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div ref={drag} className={styles.ticketContainer} style={{cursor: isDragging ? 'move' : 'pointer'}}>
            <Card fluid>
                <Card.Content>
                    <Avatar name={ticket.assignee ? 'Assignee: ' + ticket.assignee.name : 'Unassigned'} source={ticket.assignee ? ticket.assignee.avatar : 'default-avatar.jpg'}></Avatar>
                    <Card.Header>Ticket Id {ticket.id}</Card.Header>
                    <Card.Description>{ticket.description}</Card.Description>
                </Card.Content>
                <Card.Content extra className={styles.bottomRow}>
                    <Estimate estimate={ticket.estimate}></Estimate>
                    <Card.Group className={styles.buttons}>
                        <ConfirmButton buttonLabel="" icon={<Icon color="red" name="trash"></Icon>} onConfirm={() => onDelete(ticket.id)}></ConfirmButton>
                        <CreateEditTicketModal ticket={ticket} trigger={<Button icon><Icon color="blue" name="edit"></Icon></Button>} onSubmit={onUpdate}></CreateEditTicketModal>
                    </Card.Group>
                </Card.Content>
            </Card>
        </div>
    );
}