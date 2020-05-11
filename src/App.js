import React, { useEffect } from 'react';
import './App.scss';
import ReactGa from 'react-ga';
import { useSpring, animated } from 'react-spring';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sidebar from './homepage';
import Projects from './projects';
import Footer from './footer';

function App() {

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  useEffect(() => {
    ReactGa.initialize('UA-166234954-1');
    ReactGa.pageview('/');
  }, []);
  return (
    <animated.div style={fade}>
      <Container fluid>
        <Row>
          <Sidebar />
          <Projects />
          <Footer />
        </Row>
      </Container>
    </animated.div>
  );
}

export default App;
