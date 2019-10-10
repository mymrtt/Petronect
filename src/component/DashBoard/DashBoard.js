import React from 'react';
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
	background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%) 0% 0% no-repeat padding-box;
`;

const DashBoard = () => (
	<Container>
		<SideBar />
		<RelevanceMatch />
	</Container>
);


export default DashBoard;
