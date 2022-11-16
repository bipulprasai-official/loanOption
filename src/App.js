import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Container, Row } from "react-bootstrap";
import DataTable from "./components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { LoadAllUnis } from "./redux/actions/UniActions";

function App() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const AllUnis = useSelector((state) => state.universities);

  // fetch data from api into dispatch
  useEffect(() => {
    dispatch(LoadAllUnis());
  }, [dispatch]);

  // show/hide data when Load button is clicked
  const fetchTableonClick = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Row>
        {show ? (
          // Buttons  LOAD || ADD || REMOVE

          <div className="mt-3 d-flex justify-content-around">
            <Button variant="secondary" onClick={fetchTableonClick}>
              Hide
            </Button>
            <Button variant="primary">ADD</Button>
            <Button variant="danger">Remove</Button>
          </div>
        ) : (
          <div className="mt-4 d-flex justify-content-around align-item-center">
            <Button variant="secondary" onClick={fetchTableonClick}>
              Load
            </Button>
          </div>
        )}

        {show ? (

          // DATA TABLE components
          <DataTable universities={AllUnis} />
        ) : (
          <div className="mt-4 d-flex justify-content-around align-item-center">
            <h1>Please click Load button to view Data table.</h1>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default App;
