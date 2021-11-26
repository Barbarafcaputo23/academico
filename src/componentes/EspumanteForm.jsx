import React from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

const EspumanteForm = () => {
  return (
    <>
      <div className="formulario">
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeEspumante">
              <Form.Label>Nome do Espumante</Form.Label>
              <Form.Control type="text" />
              <FloatingLabel
                controlId="floatingInput"
                className="mb-3"
              ></FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeEspumante">
              <Form.Label>Tipo de Espumante</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione o Espumante</option>
                <option value="Espumante Nature">Espumante Nature</option>
                <option value="Espumante Exta-brut">Espumante Exta-brut</option>
                <option value="Espumante Brut">Espumante Brut</option>
                <option value="Espumante Sec">Espumante Sec</option>
                <option value="Espumante Demi-sec">Espumante Demi-sec</option>
                <option value="Espumante Doce">Espumante Doce</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeEspumante">
              <Form.Label>País/Região</Form.Label>
              <Form.Control type="text" />
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

export default EspumanteForm;
