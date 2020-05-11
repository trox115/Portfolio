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
      <div className="sticky-top">
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
                  <span>&gt;</span>Antonio.location
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
                  <span>&gt;</span>Antonio.contact
                </Typist>
              </p>
              <p className="response invisible">
                [&quot;
                <a href="mailto:tofernandes67@gmail.com">
                  tofernandes67@gmail.com&quot;
                </a>
                , &quot;
                <a href="https://www.linkedin.com/in/ant%C3%B3nio-fernandes-ba5961143/">
                  Linkedin
                </a>
                &quot;, &quot;
                <a href="https://github.com/trox115">
                  GitHub
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
                  <span>&gt;</span>Antonio.resume
                </Typist>
              </p>

              <p className="response invisible">
                &quot;AntonioFernandes.pdf&quot;
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
                  <span>&gt;</span>Antonio.hobbies
                </Typist>
              </p>
              <p className="response invisible">
                [&quot;Developping&quot;,&quot;Soccer&quot;,&quot;Play
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
                  <span>&gt;</span>Antonio.skils
                </Typist>
              </p>

              <p className="response invisible">
                ['Ruby','Javascript','React','React-Redux','HTML5',
                'CSS3']
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
