// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Proceed = styled.div`
  width: 100%;
	position: relative;
	display: flex;
  justify-content: space-around;
	align-items: center;
	flex-direction: row;
	border-radius: 4px;	
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
	transition: opacity .2s;
	
	:hover {
		opacity: 1;
	}
	::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #115680;
		cursor: pointer;
	}
	::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #4CAF50;
		cursor: pointer;
	}
`;

const ContainerValues = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: .5rem;
`;

const Text = styled.p`
	font-size: .85rem;
	color: #8C8C8C;
	position: absolute;
	bottom: .3rem;
	right: 0;
`;

class NotificationsBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
	}

	renderValues = () => {
		const { value } = this.state;

		if (value > 0 && value < 51) {
			return <Text>Semanal</Text>;
		}
		if (value > 50) {
			return <Text>Diária</Text>;
		}
		return <Text>Nunca</Text>;
	}

	handleChangeValue = (event) => {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<Container>
				<ContainerValues>
					{this.renderValues()}
				</ContainerValues>
				<Proceed>
					<Slider
						type="range"
						min="0"
						max="100"
						value={this.state.value}
						onChange={this.handleChangeValue}
					/>
				</Proceed>
			</Container>
		);
	}
}

export default NotificationsBar;
