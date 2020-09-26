import React, { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { JsxElement } from 'typescript';
import Avatar from './Avatar';
import Estimate from './Estimate'
import { ItemTypes } from './KanbanBoard';
import { User } from './models/User';
import styles from './Ticket.module.css';

type TicketProps = {
    id: number,
    title: string,
    estimate: number,
    user: User,
    position: number
}

export default function Ticket({id, title, estimate, user, position}: TicketProps) {
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.Ticket, ticket: id, ticketPosition: position},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const [, drop] = useDrop({
        accept: ItemTypes.Ticket,
        drop: () => {},
    })

    return (
        <div ref={drag} className={styles.ticketContainer} style={{cursor: isDragging ? 'move' : 'pointer'}}>
            <div ref={drop}>
                <Card fluid>
                    <Card.Content>
                        <Avatar name={'Assignee: ' + user.name} source={user.avatar}></Avatar>
                        <Card.Header>Ticket Id {id}</Card.Header>
                        <Card.Description>{title}</Card.Description>
                    </Card.Content>
                    <Card.Content extra className={styles.bottomRow}>
                        <Estimate estimate={estimate}></Estimate>
                        <Card.Group className={styles.buttons}>
                            <Button icon><Icon color="red" name="trash"></Icon></Button>
                            <Button icon><Icon color="blue" name="edit"></Icon></Button>
                        </Card.Group>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}