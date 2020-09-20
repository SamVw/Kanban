import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import styles from './BoardColumnHeader.module.css';

interface BoardColumnHeaderProps {
    name: string;
}

export default function BoardColumnHeader({name}: BoardColumnHeaderProps) {
    return (
        <div className={styles.main}>
            <Header as="h3">{name}</Header>
        </div>
    );
}