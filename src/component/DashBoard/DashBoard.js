import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';


// Components
import SideBar from '../SideBar';
import RelevanceMatch from './RelevanceMatch';
import Filters from '../Filters/Filters';


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
`;

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentScreen: 'match',
			redirect: false,
		};
	}

	componentDidMount() {
		this.setState({
			currentScreen: this.props.location.pathname,
		});
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
			return <Filters history={this.props.history}/>;
		case '/match-relevancia':
		default:
			return <RelevanceMatch history={this.props.history}/>;
		}
	}

	redirect = () => (
		<Redirect
			to={'/'}
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

export default DashBoard;
