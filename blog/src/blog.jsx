import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
	font-size: 25px;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Фуутер</div>;

function Blog() {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент Страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Вход</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
}

export default Blog;
