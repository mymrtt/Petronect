import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import * as Cookies from 'js-cookie';


// Components
import SideBar from '../SideBar';
import RelevanceMatch from './RelevanceMatch';
import Notifications from '../Notifications/Notifications';

import {
	getNameUser,
} from '../../dataflow/modules/login-module';

const mapDispatchToProps = (dispatch) => ({
	getNameUser: (info) => {
		dispatch(getNameUser(info));
	},
});

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%);

	@media(max-width: 960px) {
		flex-direction: column;
		align-items: flex-start;
		justify-center: center;
	}

	@media(max-width: 360px) {	
	}
`;

const Content = styled.div`
	width: 95%;
	height: 95%;
	display:flex;
	
	@media(max-width: 960px) {
		width: 100%;
 		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
  }
`;

const ContainerSidebar = styled.span`
	display: flex;
	// width: 25vw;
	width: 22vw;
	@media (max-width: 960px) {
		display: none;
	}
	@media (max-width: 648px) {
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		z-index: 3;
	}
`;

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentScreen: 'match-relevancia',
			redirect: false,
		};
	}

	componentDidMount() {
		this.setState({
			currentScreen: this.props.location.pathname,
		});

		this.handleNameUser();
	}

	handleNameUser = () => {
		const { name } = JSON.parse(Cookies.get('petronect_creds'));
		this.props.getNameUser(name);
	}

	componentDidUpdate(oldProps) {
		if (oldProps.location.pathname !== this.props.location.pathname
			&& this.props.location.pathname !== this.state.currentScreen) {
			this.setState({
				currentScreen: this.props.location.pathname,
			});
		}
	}

	renderCurrentScreen = () => {
		switch (this.state.currentScreen) {
		case '/notifications':
			return <Notifications history={this.props.history} currentScreen={this.state.currentScreen}/>;
		case '/match-relevancia':
		default:
			return <RelevanceMatch history={this.props.history} currentScreen={this.state.currentScreen}/>;
		}
	}

	redirect = () => (
		<Redirect
			to={'/login'}
		/>
	)

	render() {
		return (
			<Container>
				<Content>
					<ContainerSidebar>
						<SideBar
							currentScreen={this.state.currentScreen}
							history={this.props.history}/>
					</ContainerSidebar>
					{this.renderCurrentScreen()}
				</Content>
				{this.state.redirect && this.redirect()}
			</Container>
		);
	}
}

export default connect(null, mapDispatchToProps)(Index);
