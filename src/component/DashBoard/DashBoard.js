import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import SideBar from '../SideBar';
import RelevanceMatch from './RelevanceMatch';

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
	width: 20%;
	@media (max-width: 960px) {
		display: none;
	}
`;

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<Content>
					<ContainerSidebar>
						<SideBar />
					</ContainerSidebar>
					<RelevanceMatch history={this.props.history}/>
				</Content>
			</Container>
		);
	}
}

export default DashBoard;
