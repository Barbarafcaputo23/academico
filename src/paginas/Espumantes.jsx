import React from "react";
import { Table, Button } from "react-bootstrap";
import EspumanteForm from "../componentes/EspumanteForm";

const Espumantes = () => {
  return (
    <>
      <div className="conteudo">
        <h4>Espumantes</h4>
        <hr />
        <EspumanteForm />
        <br />
        <Button variant="outline-secondary">Adicionar Espumante </Button> <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Espumantes;
