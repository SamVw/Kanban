import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { JsxElement } from 'typescript';
import Avatar from './Avatar';
import Estimate from './Estimate'
import { User } from './models/User';
import styles from './Ticket.module.css';

type TicketProps = {
    id: number,
    title: string,
    estimate: number,
    user: User
}

export default function Ticket({id, title, estimate, user}: TicketProps) {
    return (
        <Card fluid>
            <Card.Content>
                <Avatar name={user.name} source={user.avatar}></Avatar>
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
    );
}