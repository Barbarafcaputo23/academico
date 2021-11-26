import React from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

const CervejaForm = () => {
  return (
    <>
      <div className="formulario">
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form.Label>Nome da Cerveja</Form.Label>
              <Form.Control type="text" />
              <FloatingLabel
                controlId="floatingInput"
                className="mb-3"
              ></FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form>
                <Form.Label>Origem da Cerveja</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Germânica`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Belga`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Americana`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Brasileira`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label className="label-descricao">
                        {" "}
                        {`Britânica`}{" "}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formNomeCerveja">
              <Form.Label>Tipo da Cerveja</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione o tipo da cerveja</option>
                <option value="Pilsen">Pilsen</option>
                <option value="Lager">Lager</option>
                <option value="Pale Ale">Pale Ale</option>
                <option value="Bock">Bock</option>
                <option value="Weissbier">Weissbier</option>
                <option value="Stout">Stout</option>
                <option value="Tannat">Tannat</option>
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

export default CervejaForm;
