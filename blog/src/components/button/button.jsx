import styled from 'styled-components';

const ButtonContainer = ({ className, ...props }) => {
	return (
		<button className={className} {...props}>
			{props.children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	padding: 10px 0px;
	border: 1px solid #000000;
	border-radius: 4px;
`;
