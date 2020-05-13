import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import email from './assets/email.png';

function Footer() {
  return (
    <Col md="12" className="p-0">
      <footer className="sticky-top dark">
        <Container fluid>
          <Row>
            <Col md="4">
              <h2 className="white borderb">Credits</h2>
              <p className="white small">
                Created by: António Fernandes
              </p>
              <p className="white small">
                Iphone and macbook images by:
                smartmockups.com
              </p>
              <p className="white small">
                Inspired design by: Charlie Waite and Justin
                Chi
              </p>
            </Col>
            <Col md="4">
              <h2 className="white borderb">
                Publications
              </h2>
              <a
                className="white small"
                href="https://medium.com/@tofernandes67/save-time-using-sass-to-create-classes-with-variations-95aaf4101eb8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Save time using SASS to create classes with
                variations
              </a>
              <br />
              <a
                className="white small"
                href="https://medium.com/@tofernandes67/one-easy-way-to-scrap-a-website-with-rails-f59bc9350a4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                One (easy) way to scrap a website with rails
              </a>
            </Col>
            <Col md="4">
              <h2 className="white borderb">
                Get in Touch
              </h2>

              <a
                href="https://github.com/trox115"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github-link" />
              </a>

              <a
                href="https://www.linkedin.com/in/antoniofernandes07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin-link" />
              </a>

              <a
                href="https://twitter.com/rock_67"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter-link" />
              </a>
              <a
                href="mailto:tofernandes67@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={email} alt="email-link" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </Col>
  );
}

export default Footer;
