import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket';
import 'semantic-ui-css/semantic.min.css'
import KanbanBoard from './KanbanBoard';

function App() {
    return (
      <div className="App">
        <KanbanBoard></KanbanBoard>
      </div>
    );
}

export default App;

{/* <Ticket id={1} title="New feature..." estimate={1} user={{ name: 'Sam Vanwelsenaere', avatar:"https://react.semantic-ui.com/images/wireframe/square-image.png"}}></Ticket> */}