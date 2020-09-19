import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import './KanbanBoard.css';

class KanbanBoard extends Component {
    render() {
        return (
            <div className="main">
                <BoardHeader></BoardHeader>
            </div>
        );
    }
}

export default KanbanBoard;