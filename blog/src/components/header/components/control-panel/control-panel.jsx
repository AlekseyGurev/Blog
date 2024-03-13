import { Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	border: 1px solid #000000;
	width: 100px;
	height: 32px;
	color: #000000;
	text-decoration: none;
	background-color: #eeeeee;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
				{/* <button></button> */}
			</RightAligned>
			<RightAligned>
				<a onClick={() => navigate(-1)}>
					<Icon id="fa-backward" size="24px" margin="10px 0 0 0"></Icon>
				</a>

				<Link to="/post">
					<Icon id="fa-file-text-o" size="24px" margin="10px 0 0 15px"></Icon>
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="24px" margin="10px 0 0 15px"></Icon>
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	margin: auto 40px;
`;
