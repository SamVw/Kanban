import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import BoardHeader from './BoardHeader';
import './KanbanBoard.css';
import { Column } from './models/Column';
import { KanbanStatus } from './models/KanbanStatus';
import { Ticket } from './models/Ticket';
import { User } from './models/User';

interface IProps {

}

interface IState {
    columns: Column[],
    tickets: Ticket[],
    loggedInUser: User
}

class KanbanBoard extends Component<IProps, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = ({
            columns: columns.sort((a: Column, b: Column) => a.position - b.position),
            tickets: tickets,
            loggedInUser: sam
        })

        this.handleNewTicket = this.handleNewTicket.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleNewTicket(ticket: Ticket) {
        const tickets = this.state.tickets.slice();

        const biggestId = tickets.sort((a, b) => a.id - b.id)[tickets.length - 1].id;

        ticket.id = biggestId + 1;
        ticket.creator = this.state.loggedInUser;

        tickets.push(ticket);

        this.setState({
            tickets: tickets
        })
    }

    handleDrop(position: number, ticketId: number) {
        const tickets = this.state.tickets.slice();
        const ticket = tickets.find(t => t.id === ticketId) as Ticket;

        if (ticket.status - position > 1 || ticket.status - position < -1) {
            return;
        }

        ticket.status = position;
        this.setState({
            tickets: tickets
        });
    }

    render() {
        return (
                <div className="main">
                    <BoardHeader onSubmitTicket={this.handleNewTicket}></BoardHeader>
                    <div className="column-container">
                        {this.state.columns.map(c => {
                            return (
                                <BoardColumn key={c.id} position={c.position} tickets={this.state.tickets.filter(t => t.status === c.status)} columnName={c.name} onDrop={this.handleDrop}></BoardColumn>
                            )
                        })}
                    </div>
                </div>
        );
    }
}

export default KanbanBoard;

export const ItemTypes = {
    Ticket: 'ticket'
}

const sam: User = {
    id: 1,
    name: 'Sam Vanwelsenaere',
    avatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png'
};

const jos: User = {
    id: 2,
    name: 'Jos Jerre',
    avatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png'
}

const tickets: Ticket[] = [
    {
        id: 1,
        description: 'awesome new feature...',
        estimate: 2,
        status: KanbanStatus.Test,
        assignee: sam,
        creator: jos
    },
    {
        id: 2,
        description: 'new one',
        estimate: 3,
        status: KanbanStatus.Plan,
        assignee: jos,
        creator: sam
    },
    {
        id: 3,
        description: 'bug',
        estimate: 1,
        status: KanbanStatus.Test,
        assignee: jos,
        creator: sam
    }
];

const columns: Column[] = [
    {
        id: 1,
        name: 'To Do',
        position: 1,
        status: KanbanStatus.ToDo
    },
    {
        id: 2,
        name: 'Plan',
        position: 2,
        status: KanbanStatus.Plan
    },
    {
        id: 3,
        name: 'Develop',
        position: 3,
        status: KanbanStatus.Develop
    },
    {
        id: 4,
        name: 'Test',
        position: 4,
        status: KanbanStatus.Test
    },
    {
        id: 5,
        name: 'Deploy',
        position: 5,
        status: KanbanStatus.Deploy
    },
    {
        id: 6,
        name: 'Done',
        position: 6,
        status: KanbanStatus.Done
    }
]