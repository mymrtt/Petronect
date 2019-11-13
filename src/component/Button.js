import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.button`
	width: 2rem;
  height: 4rem;
`;


class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<Container>
        <p>a</p>
			</Container>
		);
	}
}

export default Button;
