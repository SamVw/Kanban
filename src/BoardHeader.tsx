import React, { Component } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import './BoardHeader.css';

export default function BoardHeader() {
    return (
        <div className="main">
            <Header size="huge">Kanban Board</Header>
            <Divider fitted></Divider>
        </div>
    )
}