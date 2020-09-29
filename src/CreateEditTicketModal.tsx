import React, { useState } from 'react';
import { Button, Form, InputOnChangeData, Modal } from 'semantic-ui-react';
import { KanbanStatus } from './models/KanbanStatus';
import { Ticket } from './models/Ticket';

interface CreateEditTicketModalProps {
    trigger: JSX.Element,
    ticket?: Ticket,
    onSubmit: (ticket: Ticket) => void
}

interface Form {
    description: string,
    estimate: number
}

export default function CreateEditTicketModal({ trigger, ticket = undefined, onSubmit }: CreateEditTicketModalProps) {
    const [ticketState, setTicket] = useState(ticket ? ticket : initialState());
    const [open, setOpen] = useState(false);

    function handleSubmit() {
        onSubmit(ticketState);
        setOpen(false);
    }

    function handleFormChange(e: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) {
        const t = { ...ticketState } as any;
        t[e.target.name] = data.value;
        setTicket(t);
    }

    function initialState() {
        return {
            estimate: 1,
            description: '',
            status: KanbanStatus.ToDo,
            id: 0,
            assignee: null,
            creator: {}
        } as Ticket;
    }

    return (
        <Modal
            onUnmount={() => setTicket(initialState())}
            size="tiny"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}>
            <Modal.Header>{ticket ? 'Edit' : 'Create'} New Ticket</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Description</label>
                        <Form.Input placeholder="Description" name='description' value={ticketState.description} onChange={handleFormChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Estimate</label>
                        <Form.Input type="number" name="estimate" min="1" value={ticketState.estimate} onChange={handleFormChange} />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>Cancel</Button>
                <Button color="green" onClick={handleSubmit}>Submit</Button>
            </Modal.Actions>
        </Modal>
    );
}