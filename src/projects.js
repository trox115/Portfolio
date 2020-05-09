import React from 'react';
import Col from 'react-bootstrap/Col';
import { ProjectHolder, ProjectTitle, ProjectImage, TextBox } from './layout';
import jornalapp from './assets/jornalapp.png';
function Projects({ ...props }) {
	return (
		<Col md="7" className="p-0">
			<ProjectHolder>
				<div>
					<ProjectTitle>
						<h2>JornalApp</h2>
					</ProjectTitle>
					<ProjectImage>
						<img src={jornalapp} alt="JornalApp Project" />
					</ProjectImage>
					<TextBox>
						<span class="badge badge-light">Ruby</span>
						<span class="badge badge-light">Ruby on Rails</span>
						<span class="badge badge-light">HTML</span>
						<span class="badge badge-light">CSS</span>
						<span class="badge badge-light">Rspec</span>
						<p>
							This project, shows to news reporters all occurences
							that are happening in their city or area of
							interest.Real-time push notifications are possible
							too
						</p>
						<p>
							This project is currently being used by reporters of
							the biggest news stations: TVI, CMTV and SIC.
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
			<ProjectHolder>
				<div>
					<ProjectTitle>
						<h2>JornalApp</h2>
					</ProjectTitle>
					<ProjectImage>
						<img src={jornalapp} alt="JornalApp Project" />
					</ProjectImage>
					<TextBox>
						<span class="badge badge-light">Ruby</span>
						<span class="badge badge-light">Ruby on Rails</span>
						<span class="badge badge-light">HTML</span>
						<span class="badge badge-light">CSS</span>
						<span class="badge badge-light">Rspec</span>
						<p>
							This project, shows to news reporters all occurences
							that are happening in their city or area of
							interest.Real-time push notifications are possible
							too
						</p>
						<p>
							This project is currently being used by reporters of
							the biggest news stations: TVI, CMTV and SIC.
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
		</Col>
	);
}

export default Projects;
