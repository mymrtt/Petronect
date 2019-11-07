// Libs
import React from 'react';
import styled from 'styled-components';

// Components
// import SideBar from '../SideBar';
import Notifications from './Notifications';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%) 0% 0% no-repeat padding-box;

	@media (max-width: 960px) {
		display: flex;
		align-items: center;
    flex-direction: column;
	}
	@media (max-width: 648px) {
		background: #fff;
	}
`;

const Content = styled.div`
	width: 95%;
	height: 95%;
	display: flex;

	@media(max-width: 960px) {
		width: 100%;
		height: 100%;
		align-items: center;
		flex-direction: column;
  }
`;

const ContainerSidebar = styled.span`
	display: flex;
	width: 20%;
	@media (max-width: 960px) {
		display: none;
	}
	@media (max-width: 648px) {
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		z-index: 1;
	}
`;

const Index = () => (
	<Container>
		<Content>
			<ContainerSidebar>
				<SideBar />
			</ContainerSidebar>
			<Notifications />
		</Content>
	</Container>
);

export default Index;
