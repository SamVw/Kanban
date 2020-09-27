import React, { Component, useState } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

interface ConfirmButtonProps {
    buttonLabel: string,
    icon: JSX.Element,
    onConfirm: () => void
}

export default function ConfirmButton({buttonLabel, icon, onConfirm}: ConfirmButtonProps) {
    const [open, setOpen] = useState(false);

    let button: JSX.Element = (<Button></Button>);
    if (icon && !buttonLabel) {
        button = (<Button icon onClick={() => setOpen(true)}>{icon}</Button>)
    } else if (buttonLabel && !icon) {
        button = <Button onClick={() => setOpen(true)}>{buttonLabel}</Button>
    } else if (icon && buttonLabel) {
    button = <Button onClick={() => setOpen(true)}>{icon}{buttonLabel}</Button>
    }

    function handleConfirm() {
        onConfirm();
        setOpen(false);
    }

    return (
        <>
        {button}
        <Confirm
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={handleConfirm}
        />
        </>
    )
}