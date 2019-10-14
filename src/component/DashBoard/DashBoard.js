import React from 'react';
import styled from 'styled-components';

// Components
import SideBar from './SideBar';
import RelevanceMatch from './RelevanceMatch';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%);

	@media(max-width: 768px) {
		align-items: center;
		justify-center: center;
	}
`;

const Content = styled.div`
	width: 90%;
	height: 90%;
	display:flex;
	

	@media(max-width: 768px) {
		width: 100%;
 		height: 100%;
		align-items: flex-end;
		justify-content: center;
  }
`;

const DashBoard = () => (
	<Container>
		<Content>
			<SideBar />
			<RelevanceMatch />
		</Content>
	</Container>
);


export default DashBoard;
