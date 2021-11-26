import React from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";

const VinhoForm = () => {
  return (
    <>
      <div className="formulario">
        <Card body>
          <Form>        
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>Nome do Vinho</Form.Label>
              <Form.Control type="text" />
              <FloatingLabel controlId="floatingInput" className="mb-3" ></FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>Tipo da Uva</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione a Uva</option>
                <option value="Malbec">Malbec</option>
                <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                <option value="Syhra">Syhra</option>
                <option value="Tempranillo">Tempranillo</option>
                <option value="Carménère">Carménère</option>
                <option value="Pinot Noir">Pinot Noir</option>
                <option value="Tannat">Tannat</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>País/Região</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeVinho">
              <Form.Label>Ano</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button variant="primary" type="incluir"> Pesquisar </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default VinhoForm;
