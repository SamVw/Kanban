import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
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
            columns: columns.sort((a: Column, b: Column) => a.order - b.order),
            tickets: tickets,
            loggedInUser: {
                id: 2,
                avatar: '',
                name: 'logged in dude'
            }
        })

        this.handleNewTicket = this.handleNewTicket.bind(this);
    }

    handleNewTicket(ticket: Ticket) {
        const tickets = this.state.tickets.slice();

        const biggestId = tickets.sort((a, b) => a.id - b.id)[tickets.length - 1].id;

        ticket.id = biggestId + 1;
        ticket.user = this.state.loggedInUser;

        tickets.push(ticket);

        this.setState({
            tickets: tickets
        })
    }

    render() {
        return (
            <div className="main">
                <BoardHeader onSubmitTicket={this.handleNewTicket}></BoardHeader>
                <div className="column-container">
                    {this.state.columns.map(c => {
                        return (
                            <BoardColumn key={c.id} tickets={this.state.tickets.filter(t => t.status === c.status)} columnName={c.name}></BoardColumn>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default KanbanBoard;

const tickets: Ticket[] = [
    {
        id: 1,
        description: 'awesome new feature...',
        estimate: 2,
        status: KanbanStatus.Test,
        user: {
            id: 1,
            name: 'Sam Vanwelsenaere',
            avatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png'
        }
    }
];

const columns: Column[] = [
    {
        id: 1,
        name: 'To Do',
        order: 1,
        status: KanbanStatus.ToDo
    },
    {
        id: 2,
        name: 'Plan',
        order: 2,
        status: KanbanStatus.Plan
    },
    {
        id: 3,
        name: 'Develop',
        order: 3,
        status: KanbanStatus.Develop
    },
    {
        id: 4,
        name: 'Test',
        order: 4,
        status: KanbanStatus.Test
    },
    {
        id: 5,
        name: 'Deploy',
        order: 5,
        status: KanbanStatus.Deploy
    },
    {
        id: 6,
        name: 'Done',
        order: 6,
        status: KanbanStatus.Done
    }
]