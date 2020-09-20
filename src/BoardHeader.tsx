import React, { Component } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import styles from './BoardHeader.module.css';

export default function BoardHeader() {
    return (
        <div className={styles.main}>
            <Header size="huge">Kanban Board</Header>
            <Divider fitted></Divider>
        </div>
    )
}