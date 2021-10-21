import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Polonnaruwa SLT Network-Map</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#" onClick={() => handleShow()}>Administator</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <iframe src="https://www.google.com/maps/d/embed?mid=18ZUMdmSLrSvO11T4ays8QK3_Z26GjHgs" width="100%" height="400"></iframe>
      </div>
      <h1 style={{textAlign:'center'}}>Details Table</h1>
      <Container>
        <Row>
          <Col>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>

        </Row>
      </Container>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th style={{ width: 100 }}>Core No</th>
            <th>Dist</th>
            <th>Loss</th>
            <th>Status</th>
            <th style={{ width: 500 }}>Remarks</th>
            <th>Status</th>
            <th>Loss</th>
            <th>Dist</th>
            <th style={{ width: 100 }}>Core No</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Administator: Signed in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Signin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;