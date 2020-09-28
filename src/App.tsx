import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import KanbanBoard from './KanbanBoard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/board">
            <KanbanBoard></KanbanBoard>
          </Route>
        </Router>
      </DndProvider>
    </div>
  );
}

export default App;