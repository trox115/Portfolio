import React from 'react';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';
import { useSpring, animated } from 'react-spring';
import {
  Title,
  Console,
  ConsoleHeader,
  TerminalText,
} from './layout';
import xmark from './assets/xmark.png';
import maximize from './assets/maximize.png';
import minimize from './assets/minimize.png';
import cv from './assets/CV.pdf';

function SideBar({ ...props }) {
  function setVisible() {
    const element = document.getElementsByClassName(
      'invisible',
    );

    element[0].classList.remove('invisible');
    element[0].classList.remove('invisible');
  }
  const fade = useSpring({
    from: {
      opacity: 0,
      marginLeft: -1000,
    },
    to: {
      opacity: 1,
      marginLeft: 0,
    },
  });

  return (
    <Col md="5">
      <div className="sticky-top dark">
        <Title>
          <h2>Developer.</h2>
          <h2>Thinker.</h2>
          <h2>Animal Lover.</h2>
        </Title>
        <animated.div style={fade}>
          <Console>
            <ConsoleHeader>
              <img src={minimize} alt="teminalMinimize" />
              <img src={maximize} alt="teminalMaximize" />
              <img src={xmark} alt="teminalX" />
            </ConsoleHeader>
            <TerminalText>
              <p>
                <Typist
                  avgTypingDelay={250}
                  cursor={{
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1,
                  }}
                  onTypingDone={setVisible}
                >
                  <span>&gt;</span>
                  Antonio.location
                </Typist>
              </p>

              <p className="response invisible">
                {' '}
                &quot;Bragança, Portugal&quot;
              </p>
            </TerminalText>
            <TerminalText className="invisible">
              <p>
                <Typist
                  startDelay={5000}
                  avgTypingDelay={250}
                  cursor={{
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1,
                  }}
                  onTypingDone={setVisible}
                >
                  <span>&gt;</span>
                  Antonio.contact
                </Typist>
              </p>
              <p className="response invisible">
                [&quot;
                <a
                  href="mailto:tofernandes67@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tofernandes67@gmail.com&quot;
                </a>
                , &quot;
                <a
                  href="https://www.linkedin.com/in/antoniofernandes07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                &quot;, &quot;
                <a
                  href="https://github.com/trox115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                &quot; , &quot;
                <a
                  href="https://angel.co/u/antonio-fernandes-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AngeList
                </a>
                &quot; , &quot;
                <a
                  href="https://twitter.com/Rock_67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                &quot;]
              </p>
            </TerminalText>
            <TerminalText className="invisible">
              <p>
                <Typist
                  startDelay={10000}
                  avgTypingDelay={250}
                  cursor={{
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1,
                  }}
                  onTypingDone={setVisible}
                >
                  <span>&gt;</span>
                  Antonio.resume
                </Typist>
              </p>

              <p className="response invisible">
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &quot;AntonioFernandes.pdf&quot;
                </a>
              </p>
            </TerminalText>
            <TerminalText className="invisible">
              <p>
                <Typist
                  startDelay={15000}
                  avgTypingDelay={250}
                  cursor={{
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1,
                  }}
                  onTypingDone={setVisible}
                >
                  <span>&gt;</span>
                  Antonio.hobbies
                </Typist>
              </p>
              <p className="response invisible">
                [&quot;Developing&quot;,&quot;Soccer&quot;,&quot;Play
                With Dog&quot;]
              </p>
            </TerminalText>
            <TerminalText className="invisible">
              <p>
                <Typist
                  startDelay={20000}
                  avgTypingDelay={250}
                  onTypingDone={setVisible}
                  cursor={{
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1,
                  }}
                >
                  <span>&gt;</span>
                  Antonio.skills
                </Typist>
              </p>

              <p className="response invisible">
                [&quot;Ruby&quot;,&quot;Javascript&quot;
                ,&quot;React&quot;,&quot;React-Redux&quot;
                ,&quot;HTML5&quot;, &quot;CSS3&quot;]
              </p>
            </TerminalText>

            <TerminalText className="invisible">
              <p>
                <Typist
                  startDelay={21000}
                  avgTypingDelay={250}
                >
                  <span>&gt;</span>
                </Typist>
              </p>
            </TerminalText>
          </Console>
        </animated.div>
      </div>
    </Col>
  );
}

export default SideBar;
