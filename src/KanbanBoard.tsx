import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import BoardColumn from './BoardColumn';
import BoardHeader from './BoardHeader';
import './KanbanBoard.css';

interface IProps {

}

interface IState {
    columns: Column[]
}

class KanbanBoard extends Component<IProps, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = ({
            columns: columns.sort((a: Column, b: Column) => a.order - b.order)
        })
    }

    render() {
        return (
            <div className="main">
                <BoardHeader></BoardHeader>
                <div className="column-container">
                    {this.state.columns.map(c => {
                        return (
                                <BoardColumn key={c.id} order={c.order} columnName={c.name}></BoardColumn>
                            )
                    })}
                </div>
            </div>
        );
    }
}

export default KanbanBoard;

export interface Column {
    id: number,
    name: string,
    order: number
}

const columns: Column[] = [
    {
        id: 1,
        name: 'To Do',
        order: 1
    },
    {
        id: 2,
        name: 'Plan',
        order: 2
    },
    {
        id: 3,
        name: 'Develop',
        order: 3
    },
    {
        id: 4,
        name: 'Test',
        order: 4
    },
    {
        id: 5,
        name: 'Deploy',
        order: 5,
    },
    {
        id: 6,
        name: 'Done',
        order: 6
    }
]