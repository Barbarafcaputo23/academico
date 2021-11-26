import React from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

const WhiskyForm = () => {
  return (
    <>
      <div className="formulario">
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeWhisky">
              <Form.Label>Nome do Whisky</Form.Label>
              <Form.Control type="text" />
              <FloatingLabel
                controlId="floatingInput"
                className="mb-3"
              ></FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeWhisky">
              <Form>
                <Form.Label>Origem do Whisky</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Irlandês`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeWhisky">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Escocês`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeWhisky">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Japonês`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeWhisky">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Americano`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formNomeWhisky"
            ></Form.Group>
            <br />

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

export default WhiskyForm;
