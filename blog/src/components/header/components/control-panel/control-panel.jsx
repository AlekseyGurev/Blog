import { Icon, ButtonLink } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../bff/constants';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logOut } from '../../../../actions';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 43px;
`;

const Login = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 25px;
	line-height: 25px;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<ButtonLink to="/login">Войти</ButtonLink>
				) : (
					<Login>
						<span>{login}</span>
						<a onClick={() => dispatch(logOut(session))}>
							<Icon id="fa-sign-out" size="24px" margin="0 0 0 0"></Icon>
						</a>
					</Login>
				)}
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
