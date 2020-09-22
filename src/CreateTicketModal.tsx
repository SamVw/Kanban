import { render } from '@testing-library/react';
import React, { Component, useReducer, useState } from 'react';
import { Button, Form, Icon, Input, InputOnChangeData, Modal } from 'semantic-ui-react';
import styles from './CreateTicketModal.module.css';
import { KanbanStatus } from './models/KanbanStatus';
import { Ticket } from './models/Ticket';
import { User } from './models/User';

interface CreateTicketModalState {
    open: boolean,
    description: string,
    estimate: number
}

interface CreateTicketModalProps {
    trigger: JSX.Element,
    onSubmit: (ticket: Ticket) => void
}

export default class CreateTicketModal extends React.Component<CreateTicketModalProps, CreateTicketModalState> {
    constructor(props: CreateTicketModalProps) {
        super(props);
        this.state = {
            open: false,
            description: '',
            estimate: 0
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const ticket: Ticket = {
            id: 0,
            description: this.state.description,
            estimate: this.state.estimate,
            status: KanbanStatus.ToDo,
            user: { id: 0, name: '', avatar: ''}
        }
        this.props.onSubmit(ticket);

        this.setState({
            open: false
        });
    }

    handleFormChange(e: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) {
        this.setState({
            [e.target.name]: data.value
        } as Pick<CreateTicketModalState,any>)
    }

    render() {
        return (
            <Modal
                size="tiny"
                onClose={() => this.setState({open: false})}
                onOpen={() => this.setState({open: true})}
                open={this.state.open}
                trigger={this.props.trigger}>
                    <Modal.Header>Create New Ticket</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Description</label>
                                <Form.Input placeholder="Description" name='description' value={this.state.description} onChange={this.handleFormChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Estimate</label>
                                <Form.Input type="number" name="estimate" value={this.state.estimate} onChange={this.handleFormChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="black" onClick={() => this.setState({open: false})}>Cancel</Button>
                        <Button color="green" onClick={this.handleSubmit}>Submit</Button>
                    </Modal.Actions>
            </Modal>
        );
    }
    
}