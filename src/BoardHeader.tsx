import React, { Component } from 'react';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';
import styles from './BoardHeader.module.css';

export default function BoardHeader() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Header as="h1" size="huge">Kanban Board</Header>
                <Button primary><Icon name="add"></Icon>New Ticket</Button>
            </div>
            <Divider fitted></Divider>
        </div>
    )
}