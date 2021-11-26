import React from "react";
import { Table, Button } from "react-bootstrap";
import CervejaForm from "../componentes/CervejaForm";

const Cervejas = () => {
	return (
		<>
			<div className="conteudo">
				<h4>Cervejas</h4>
				<hr />
				<CervejaForm />
				<br />
				<Button variant="outline-secondary">Adicionar Cerveja</Button> <br />
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
export default Cervejas;
