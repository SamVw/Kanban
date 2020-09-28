import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Icon } from 'semantic-ui-react';
import styles from './Home.module.css';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <div className={`page-width ${styles.pageContainer}`}>
            <Container className={styles.container}>
                <h2>Welcome to this kanban board application!</h2>
                <p>Developed by Sam Vanwelsenaere</p>
                <Link to="/board">
                    <Button primary>Continue to board<Icon name="arrow right"></Icon></Button>
                </Link>
            </Container>
        </div>
    );
}

export default Home;