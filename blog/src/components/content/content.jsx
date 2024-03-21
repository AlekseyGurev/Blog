import styled from 'styled-components';
import { H2 } from '../h2/h2';

const ContentContainer = ({ children, className, error }) => {
	return error ? (
		<div className={className}>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</div>
	) : (
		children
	);
};

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
