// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Redux
import { getNotificationUserThunk, postNotificationUserThunk } from '../../dataflow/thunks/notification-thunk';

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
	background: repeating-linear-gradient(90deg, #116EA0, #E6E6E6 ${(props) => props.value}%, #d3d3d3 ${(props) => props.value + 0.2}%, #d3d3d3 100%);
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

const mapStateToProps = (state) => ({
	// allNotification: state.opportunities.allNotification,
});

const mapDispatchToProps = (dispatch) => ({
	getNotificationUserThunk: () => {
		dispatch(getNotificationUserThunk())
			.then((result) => {
				if (result && result.status === 200 && result.data.email) {
					window.helloComponent.notificationResponse(result.data.email);
				} else {
					window.helloComponent.notificationResponse('NEVER');
				}
			}).catch((error) => {
				console.log('error', error);
			});
	},

	postNotificationUserThunk: (info) => {
		dispatch(postNotificationUserThunk(info));
	},

});

class NotificationsBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};

		window.helloComponent = this;
		this.getNotificationsData();
	}

	getNotificationsData() {
		this.props.getNotificationUserThunk();
	}


	notificationResponse = (value) => {
		console.log(value);
		switch (value) {
		case 'NEVER':
			return this.setState({ value: 0 });
		case 'DAILY':
			return this.setState({ value: 100 });
		case 'WEEKLY':
			return this.setState({ value: 200 });
		case 'MONTHLY':
			return this.setState({ value: 300 });
		default:
			return this.setState({ value: 0 });
		}
	}

	notificationSend = (value) => {
		const info = {
			email: '',
			sms: 'NEVER',
			push: 'NEVER',
		};

		if (value == 0) {
			info.email = 'NEVER';
			console.log(info);
			this.props.postNotificationUserThunk(info);
		}

		if (value == 100) {
			info.email = 'DAILY';
			console.log(info);
			this.props.postNotificationUserThunk(info);
		}

		if (value == 200) {
			info.email = 'WEEKLY';
			console.log(info);
			this.props.postNotificationUserThunk(info);
		}

		if (value == 300) {
				info.email = 'MONTHLY';
				console.log(info);
				this.props.postNotificationUserThunk(info);
			}
		}
	}

	renderValues = () => {
		console.log('estado', this.state);
		const { value } = this.state;

		switch (value) {
		case 0:
			return <Text>Nunca</Text>;
		case 100:
			return <Text>Diária</Text>;
		case 200:
			return <Text>Semanal</Text>;
		case 300:
			return <Text>Mensal</Text>;
		default:
			return <Text>Nunca</Text>;
		}
	}

	handleChangeValue = (event) => {
		console.log('teste');
		const { value } = event.target;
		console.log(value);
		if (value == 0) {
			this.setState({ value: 0 });
			this.notificationSend(value);
		} else if (value == 100) {
			this.setState({ value: 100 });
			this.notificationSend(value);
		} else if (value == 200) {
			this.setState({ value: 200 });
			this.notificationSend(value);
		} else if (value == 300) {
			this.setState({ value: 300 });
			this.notificationSend(value);
		} return null;
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
						min={this.props.min}
						max={this.props.max}
						defaultValue={0}
						step={100}
						value={this.state.value}
						onChange={this.handleChangeValue}
					/>
				</Proceed>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsBar);
