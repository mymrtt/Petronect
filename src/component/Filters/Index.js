// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import SideBar from '../SideBar';
import Filters from './Filters';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%) 0% 0% no-repeat padding-box;

	@media (max-width: 768px) {
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

	@media(max-width: 768px) {
		width: 100%;
		height: 100%;
		align-items: center;
		flex-direction: column;
  }
`;

const ContainerSidebar = styled.span`
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}
`;

const Index = () => (
	<Container>
		<Content>
			<ContainerSidebar>
				<SideBar />
			</ContainerSidebar>
			<Filters />
		</Content>
	</Container>
);

export default Index;
