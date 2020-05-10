import React from 'react';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';
import { Title, Console, ConsoleHeader, TerminalText } from './layout';
import { useSpring, animated } from 'react-spring';
import xmark from './assets/xmark.png';
import maximize from './assets/maximize.png';
import minimize from './assets/minimize.png';

function SideBar({ ...props }) {
	function setVisible() {
		let element = document.getElementsByClassName('invisible');

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
			<Title className="sticky-top">
				<h2>Developer.</h2>
				<h2>Thinker.</h2>
				<h2>Animal Lover.</h2>
			</Title>
			<animated.div style={fade} className="sticky-top">
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
								<span>></span>Antonio.location
							</Typist>
						</p>

						<p className="response invisible">
							{' '}
							"Bragança, Portugal"
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
								<span>></span>Antonio.contact
							</Typist>
						</p>
						<p className="response invisible">
							["tofernandes67@gmail.com", "Linkedin", "GitHub"]
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
								<span>></span>Antonio.resume
							</Typist>
						</p>

						<p className="response invisible">
							"AntonioFernandes.pdf"
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
								<span>></span>Antonio.hobbies
							</Typist>
						</p>
						<p className="response invisible">
							['Developping','Soccer','Play With Dog']
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
								<span>></span>Antonio.skils
							</Typist>
						</p>

						<p className="response invisible">
							['Ruby','Javascript','React','React-Redux','HTML5',
							'CSS3']
						</p>
					</TerminalText>

					<TerminalText className="invisible">
						<p>
							<Typist startDelay={21000} avgTypingDelay={250}>
								<span>></span>
							</Typist>
						</p>
					</TerminalText>
				</Console>
			</animated.div>
		</Col>
	);
}

export default SideBar;
