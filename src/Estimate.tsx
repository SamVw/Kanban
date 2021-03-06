import React from 'react';
import { Popup } from 'semantic-ui-react';
import styles from './Estimate.module.css';

type EstimateProps = {
    estimate: number
}

export default function Estimate({estimate}: EstimateProps) {
    return (
        <Popup
            content="Estimate for this ticket"
            trigger={
                <div className={styles.container}>
                <p>{estimate}</p>
                </div>}></Popup>
    )
}