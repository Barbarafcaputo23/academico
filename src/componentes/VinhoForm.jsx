import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const VinhoForm = () => {
  return (
    <>
      <div className='formulario'>
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>Nome do Vinho</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>Nome do Vinho</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>Nome do Vinho</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default VinhoForm;
