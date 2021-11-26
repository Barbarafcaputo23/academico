import React from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

const DestiladoForm = () => {
  return (
    <>
      <div className="formulario">
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeDestilado">
              <Form.Label>Nome do Destilado</Form.Label>
              <Form.Control type="text" />
              <FloatingLabel
                controlId="floatingInput"
                className="mb-3"
              ></FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeDestilado">
              <Form.Label>Tipo do Destilado</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione um Destilado</option>
                <option value="Cachaça">Cachaça</option>
                <option value="Tequila">Tequila</option>
                <option value="Conhaque">Conhaque</option>
                <option value="Cachaça">Cachaça</option>
                <option value="Licor">Licor</option>
                <option value="Vodka">Vodka</option>
                <option value="Rum">Rum</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="incluir">
              {" "}
              Pesquisar{" "}
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default DestiladoForm;
