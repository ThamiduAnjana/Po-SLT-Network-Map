import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Po-SLT-Network-Map</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#" onClick={handleShow}>Administator</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <iframe src="https://www.google.com/maps/d/embed?mid=18ZUMdmSLrSvO11T4ays8QK3_Z26GjHgs" width="100%" height="300"></iframe>
      </div>
      <br />
      <h1 style={{ textAlign: 'center' }}>Details Table</h1>
      <Container>
        <Row>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Location</Form.Label>
            <Form.Select aria-label="Default select example" style={{ width: 290 }}>
              <option>Select</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Row>
              <Col>
                <Form.Label>Cable Size</Form.Label>
                <Form.Control type="text" style={{ width: 100 }} disabled></Form.Control>
              </Col>
              <Col>
                <Form.Label>Core No</Form.Label>
                <Form.Control type="number" style={{ width: 100 }} max="256" min="1"></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col>
            <Form.Label>Cable Color Code
              <Table>
                <tr>
                  <td><Form.Check type="radio" name="color" value="#3498DB" /></td>
                  <td><Form.Check type="radio" name="color" value="#E67E22" /></td>
                  <td><Form.Check type="radio" name="color" value="#2ECC71" /></td>
                  <td><Form.Check type="radio" name="color" value="#A04000" /></td>
                  <td><Form.Check type="radio" name="color" value="#85929E" /></td>
                  <td><Form.Check type="radio" name="color" value="#FDFEFE" /></td>
                  <td><Form.Check type="radio" name="color" value="#E74C3C" /></td>
                  <td><Form.Check type="radio" name="color" value="#17202A" /></td>
                </tr>
                <tbody>
                  <tr>
                    <td><div className="color-box" style={{ backgroundColor: "#3498DB" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#E67E22" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#2ECC71" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#A04000" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#85929E" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#FDFEFE" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#E74C3C" }}></div></td>
                    <td><div className="color-box" style={{ backgroundColor: "#17202A" }}></div></td>
                  </tr>
                </tbody>
              </Table>
            </Form.Label>
          </Col>
        </Row>
      </Container>
      <div className="overflow-auto" style={{ margin: 15 }}>
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
      </div>
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
          <Button variant="primary">
            Signin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;