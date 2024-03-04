import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	color: red;
	font-size: 50px;
`;

function App() {
	return (
		<>
			<div>
				<Div>
					<i className="fa fa-camera-retro"></i>
				</Div>
				<Div>
					<i className="fa fa-calendar"></i>
				</Div>
			</div>
		</>
	);
}

export default App;
