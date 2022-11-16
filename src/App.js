import React, { useEffect } from "react";
import "./App.css";
import { Button, Container, Row } from "react-bootstrap";
import DataTable from "./components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { LoadAllUnis } from "./redux/actions/UniActions";

function App() {
  const dispatch = useDispatch();
  const AllUnis = useSelector((state) => state.universities);

  // fetch data from api into dispatch
  useEffect(() => {
    dispatch(LoadAllUnis());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <div className="mt-3 d-flex justify-content-around">
          <Button variant="secondary">Load</Button>
          <Button variant="primary">ADD</Button>
          <Button variant="danger">Remove</Button>
        </div>

        <DataTable universities={AllUnis} />
      </Row>
    </Container>
  );
}

export default App;
