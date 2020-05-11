import React from 'react';
import './App.scss';
import { useSpring, animated } from 'react-spring';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sidebar from './homepage';
import Projects from './projects';

function App() {
	const fade = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	});
	return (
		<animated.div style={fade}>
			<Container fluid={true}>
				<Row>
					<Sidebar />
					<Projects />
				</Row>
			</Container>
		</animated.div>
	);
}

export default App;