import React, { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import {
  ProjectHolder,
  ProjectTitle,
  ProjectImage,
  TextBox,
} from './layout';
import jornalapp from './assets/jornalapp.png';
import barber from './assets/berber.png';
import topoleo from './assets/topoleo.png';
import bookstore from './assets/bookstore.png';

function Projects() {
  const parallax = useRef('parallax');
  return (
    <Col md="7" className="p-0">
      <ProjectHolder
        currentColor="#8be9fd"
        className="sticky-top"
      >
        <div>
          <ProjectTitle>
            <h2>JornalApp</h2>
          </ProjectTitle>
          <ProjectImage>
            <img src={jornalapp} alt="JornalApp Project" />
          </ProjectImage>
          <TextBox>
            <span className="badge badge-light">Ruby</span>
            <span className="badge badge-light">
              Ruby on Rails
            </span>
            <span className="badge badge-light">HTML</span>
            <span className="badge badge-light">CSS</span>
            <span className="badge badge-light">Rspec</span>

            <p>
              This project, shows to news reporters all
              occurences that are happening in their city or
              area of interest.Real-time push notifications
              are possible too
            </p>
            <p>
              This project is currently being used by
              reporters of the biggest news stations: TVI,
              CMTV and SIC.
            </p>
            <a
              href="https://serene-island-45222.herokuapp.com/"
              className="btn btn-outline-dark"
            >
              Check Live Demo
            </a>
          </TextBox>
        </div>
      </ProjectHolder>

      <ProjectHolder
        currentColor="#ff5555"
        className="sticky-top"
      >
        <div>
          <ProjectTitle>
            <h2>Barber Booking</h2>
          </ProjectTitle>

          <ProjectImage>
            <img src={barber} alt="Barber Project" />
          </ProjectImage>
          <TextBox>
            <span className="badge badge-light">React</span>
            <span className="badge badge-light">
              Javascript
            </span>
            <span className="badge badge-light">
              React-Redux
            </span>
            <span className="badge badge-light">CSS</span>
            <span className="badge badge-light">Rails</span>
            <span className="badge badge-light">Rspec</span>
            <p>
              This PWA (Progressive Web App), let's users
              book a time and a date with a barber.
            </p>
            <p>
              This project Back-end is Ruby and the frontend
              is React
            </p>
            <a
              href="https://antoniobarberapi.herokuapp.com/"
              className="btn btn-outline-dark"
            >
              Check Live Demo
            </a>
            <a
              href="https://antoniobarberapi.herokuapp.com/"
              className="btn btn-outline-dark"
            >
              Check it on github
            </a>
          </TextBox>
        </div>
      </ProjectHolder>

      <ProjectHolder
        currentColor="#8be9fd"
        className="sticky-top"
      >
        <div>
          <ProjectTitle>
            <h2>Topoleo Simple Website</h2>
          </ProjectTitle>

          <ProjectImage>
            <img src={topoleo} alt="Barber Project" />
          </ProjectImage>
          <TextBox>
            <span className="badge badge-light">React</span>
            <span className="badge badge-light">
              Javascript
            </span>
            <span className="badge badge-light">CSS</span>
            <span className="badge badge-light">HTML</span>
            <p>
              This is a company PWA Website. The design was
              based in a previous wordpress website that
              they wish to mantain.
            </p>

            <a
              href="https://topoleo.com/"
              className="btn btn-outline-dark"
            >
              Check Live Demo
            </a>
            <a
              href="https://github.com/trox115/Topoleo"
              className="btn btn-outline-dark"
            >
              Check it on github
            </a>
          </TextBox>
        </div>
      </ProjectHolder>

      <ProjectHolder
        currentColor="#ff5555"
        className="sticky-top"
      >
        <div>
          <ProjectTitle>
            <h2>BookStore CMS</h2>
          </ProjectTitle>

          <ProjectImage>
            <img src={bookstore} alt="Bookstore Project" />
          </ProjectImage>
          <TextBox>
            <span className="badge badge-light">React</span>
            <span className="badge badge-light">
              React-Redux
            </span>
            <span className="badge badge-light">
              Javascript
            </span>
            <span className="badge badge-light">Ruby</span>
            <span className="badge badge-light">Rails</span>
            <span className="badge badge-light">Rspec</span>
            <p>
              This project is a bookstore CMS, user can add,
              edit or update reading progress of the books.
            </p>
            <p>
              This project Back-end is Ruby and the frontend
              is React.
            </p>
            <a
              href="https://antonioreact-bookstore.herokuapp.com/"
              className="btn btn-outline-dark"
            >
              Check Live Demo
            </a>
            <a
              href="https://github.com/trox115/bookstore"
              className="btn btn-outline-dark"
            >
              Check it on github
            </a>
          </TextBox>
        </div>
      </ProjectHolder>
    </Col>
  );
}

export default Projects;
