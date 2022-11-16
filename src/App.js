import React from 'react';
import './App.css';
import { Button, Container, Row } from 'react-bootstrap';
import DataTable from './components/DataTable';


function App() {
  return (
    <Container>
    <Row>
    <div className="mt-3 d-flex justify-content-around">
    <Button variant="secondary">Load</Button>
    <Button variant="primary">ADD</Button>
    <Button variant="danger">Remove</Button>
    </div>

    <DataTable/>
    </Row>
    </Container>
  );
}

export default App;
