import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sidebar from './homepage';
import Projects from './projects';

function App() {
	return (
		<Container fluid={true}>
			<Row>
				<Sidebar />
				<Projects />
			</Row>
		</Container>
	);
}

export default App;
