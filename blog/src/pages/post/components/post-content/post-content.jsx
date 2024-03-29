import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;
	return (
		<div className={className}>
			<div className="image-container">
				<img src={imageUrl} alt="картинка" width={400} height={220} />
			</div>
			<div className="content-container">
				<H2>{title}</H2>
				<div className="controls-container">
					<div className="icon-container">
						<Icon id="fa-calendar-o" size="24px" margin="0 0 0 0" />
						{publishedAt}
					</div>
					<div className="icon-container">
						<a onClick={() => {}}>
							<Icon id="fa-pencil-square-o" size="24px" margin="0 0 0 0" />
						</a>
						<a onClick={() => {}}>
							<Icon id="fa-trash-o" size="22px" margin="0 0 0 0" />
						</a>
					</div>
				</div>
				<p>{content}</p>
			</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	margin: 40px 0;
	padding: 0 80px;

	.image-container {
		float: left;
		margin-right: 30px;
	}
	.controls-container {
		display: flex;
		justify-content: space-between;
		font-size: 20px;
		margin-top: -20px;
	}
	.content-container {
		font-size: 18px;
	}

	.icon-container {
		display: flex;
		gap: 5px;
		align-items: center;
	}
`;
