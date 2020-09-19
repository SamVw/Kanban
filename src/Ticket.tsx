import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { JsxElement } from 'typescript';
import Avatar from './Avatar';
import Estimate from './Estimate'
import { User } from './models/user';

type TicketProps = {
    id: number,
    title: string,
    estimate: number,
    user: User
}

export default function Ticket({id, title, estimate, user}: TicketProps) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Ticket Id {id}</Card.Header>
                <Card.Description>{title}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Estimate estimate={estimate}></Estimate>
                <Avatar name={user.name} source={user.avatar}></Avatar>
            </Card.Content>
        </Card>
    );
}