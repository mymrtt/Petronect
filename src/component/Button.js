import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.button`
	margin-top: ${(props) => props.marginTop};
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


class Button extends Component {
	render() {
		return (
			<Container
				marginTop={this.props.marginTop}
				marginTopMobile={this.props.marginTopMobile}
				width={this.props.width}
				widthMobile={this.props.widthMobile}
				height={this.props.height}
				backgroundColor={this.props.backgroundColor}
				boxShadow={this.props.boxShadow}
			>
				<Text color={this.props.color}>{this.props.text}</Text>
			</Container>
		);
	}
}

export default Button;
