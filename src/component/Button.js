import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.button`
	margin-top: ${(props) => props.marginTop};
	width: ${(props) => props.width};
  height: ${(props) => props.height};
	border-radius: 4px;
	font: 600 1rem eurostile, sans serif;
	text-align: center;
	letter-spacing: 0;
	cursor: pointer;
	background-color: ${(props) => props.backgroundColor};
	@media (max-width: 648px) {
		width: ${(props) => props.widthMobile};
		margin-top: ${(props) => props.marginTopMobile}
	}
`;

const Text = styled.p`
	color: #fff;
`;


class Button extends Component {
	render() {
		return (
			<Container
				width={this.props.width}
				widthMobile={this.props.widthMobile}
				height={this.props.height}
				backgroundColor={this.props.backgroundColor}
				marginTop={this.props.marginTop}
				marginTopMobile={this.props.marginTopMobile}
			>
				<Text>{this.props.text}</Text>
			</Container>
		);
	}
}

export default Button;
