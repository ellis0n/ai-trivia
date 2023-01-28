import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	a {
		text-decoration: unset;
		color: unset;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(32px + 3vmin);
	color: #ededf4f1;
	font-weight: 800;
	border-bottom: 2px solid #ededf482;
	background-color: #433c3855;
	margin-bottom: 1em;
`;

const Header = () => {
	return (
		<Wrapper>
			<a href="/">Quiz Me</a>
		</Wrapper>
	);
};

export default Header;
