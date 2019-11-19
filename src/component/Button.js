// Libs
import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	margin-top: ${(props) => props.marginTop};
	padding: ${(props) => props.padding};
	width: ${(props) => props.width};
  height: ${(props) => props.height};
	border-radius: 4px;
	box-shadow: ${(props) => props.boxShadow};
	font: 600 1rem eurostile, sans serif;
	text-align: center;
	letter-spacing: 0;
	cursor: pointer;
	border: transparent;
	background-color: ${(props) => props.backgroundColor};
	@media(max-width: 960px) {
		${'' /* width: ${(props) => props.widthTablet}; */}
		width: ${(props) => props.widthMobile};
	}
	@media (max-width: 648px) {
		margin-top: ${(props) => props.marginTopMobile};
		width: ${(props) => props.widthMobile};
	}
`;

const Text = styled.p`
	color: ${(props) => props.color};
`;

const Button = (props) => (
	<Container
		marginTop={props.marginTop}
		marginTopMobile={props.marginTopMobile}
		padding={props.padding}
		width={props.width}
		widthMobile={props.widthMobile}
		height={props.height}
		backgroundColor={props.backgroundColor}
		boxShadow={props.boxShadow}
		onClick={props.handleClick}
	>
		<Text color={props.color}>{props.text}</Text>
	</Container>
);


export default Button;
