import styled from 'styled-components';

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	display: flex;
	font-size: ${({ size = '20px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	cursor: pointer;
	color: ${({ disabled }) => (disabled ? '#cccccc' : '#000000')};
`;
