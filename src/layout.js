import styled from 'styled-components';

export const Title = styled.div`
	height: 30vh;
	margin-top: 30px;
	margin-bottom: auto;
	h2 {
		color: #2e3436ff;
		font-size: 2.5rem;
	}
`;

export const Console = styled.div`
	width: 90%;
	background-color: #282a36;
	height: 320px;
	border-radius: 10px 10px 0 0;
	margin-bottom: 30px;
	margin-top: 30px;
`;

export const ConsoleHeader = styled.div`
	width: 100%;
	background-color: #888a85ff;
	height: 20px;
	display: flex;
	text-align: right;
	line-height: 20px;
	justify-content: flex-end;
	align-items: center;
	border-radius: 10px 10px 0 0;
	img {
		max-height: 15px;
		margin-right: 3px;
	}
`;

export const TerminalText = styled.div`
	margin-top: 5px;
	margin-left: 10px;
	p {
		margin-top: -5px;
		color: #ff5555;
		font-family: 'Source Code Pro', monospace;
		font-size: 13px;
	}
	span {
		color: #f1fa8c;
	}

	.response {
		margin-top: -20px;
		color: #50fa7b;
		font-family: 'Fira Code', monospace;
		font-size: 13px;
		a {
			color: #8be9fd;
		}
		.invisible {
			visibility: none;
		}
	}
`;
const color = ({ currentColor }) => currentColor;
export const ProjectHolder = styled.div`
	 {
		min-height: 100vh;
		background-color: ${color};
		display: flex;
		align-items: center;
		padding-bottom: 30px;
	}
`;

export const ProjectTitle = styled.div`
	width: 100%;
	text-align: center;
	h2 {
		font-family: 'Balsamiq Sans', cursive;

		color: #2e3436ff;
		font-size: 2.5rem;
	}
`;

export const ProjectImage = styled.figure`
	width: 100%;
	text-align: center;
	img {
		max-width: 70%;
	}
`;

export const TextBox = styled.div`
	width: 95%;
	text-align: center;
	margin-top: -10px;
	p {
		text-align: justify;
		margin-left: 3%;
		font-family: 'Montserrat', sans-serif;
	}
	span {
		margin-right: 5px;
	}
	a {
		text-align: justify;
		margin-left: 3%;
		font-family: 'Montserrat', sans-serif;
	}
`;
export const TextBox2 = styled.div`
	 {
		width: 100%;

		text-align: center;
		margin-top: -10px;
		p {
			text-align: justify;
			margin-left: 3%;
			font-family: 'Montserrat', sans-serif;
		}
		span {
			margin-right: 5px;
		}
		a {
			text-align: center;
			margin-left: 3%;
			font-family: 'Montserrat', sans-serif;
		}
	}
`;

export const Publications = styled.div`
	display: block;
	text-align: center;
	a {
		min-width: 100%;
		border-bottom: 1px solid gray;
		font-family: 'Balsamiq Sans', cursive;

		color: #2e3436ff;
		font-size: 1.5rem;
	}
`;
