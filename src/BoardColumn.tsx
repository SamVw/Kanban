import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import BoardColumnHeader from './BoardColumnHeader';
import styles from './BoardColumn.module.css';
import {Ticket as TicketEntity } from './models/Ticket';
import Ticket from './Ticket';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './KanbanBoard';

interface BoardColumnProps {
    columnName: string,
    tickets: TicketEntity[],
    position: number,
    onDrop: (position: number, ticketId: number) => void,
    onDelete: (id: number) => void,
    onUpdate: (ticket: TicketEntity) => void
}

export default function BoardColumn({columnName, tickets, position, onDrop, onDelete, onUpdate}: BoardColumnProps) {
    const [{canDrop, isOver}, drop] = useDrop({
        accept: ItemTypes.Ticket,
        canDrop: (item: { type: string; ticket: number; ticketPosition: number }) => position - item.ticketPosition === 1 || position - item.ticketPosition === -1,
        drop: (item: { type: string; ticket: number; }) => onDrop(position, item.ticket),
        collect: monitor => ({
            canDrop: monitor.canDrop(),
            isOver: monitor.isOver()
        })
    });

    return (
        <Container className={`${styles.container}`}>
            <BoardColumnHeader name={columnName}></BoardColumnHeader>
            <div ref={drop} className={`${styles.boardColumnBody} ${!canDrop && isOver ? styles.dropForbidden : styles.none} ${canDrop && isOver ? styles.dropAllowed : styles.none}` }>
                {tickets.map(t => {
                    return (
                        <Ticket key={t.id} ticket={t} position={t.status} onDelete={onDelete} onUpdate={onUpdate}></Ticket>
                    )
                })}
            </div>
        </Container>
    )
}