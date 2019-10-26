// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Images
import logoWhite from '../assets/img/logoBranca.svg';
import menuHamburger from '../assets/icon/menu_hamburguer.svg';
import logoMobile from '../assets/img/LogoPNE.png';
import dropdown from '../assets/icon/dropdown.svg';

// Components
import SideBar from './SideBar';

import { logoutThunk } from '../dataflow/thunks/login-thunk';

const mapDispatchToProps = (dispatch) => ({
	logoutThunk: (info) => {
		dispatch(logoutThunk(info));
	},
});

const Container = styled.div`
	display: none;
	@media(max-width: 960px) {
		padding-left: 2.5rem;
		width: 100%;
		display: flex;
	}
	@media(max-width: 648px) {
		position: fixed;
		padding: 0 1.3rem;
		height: 3rem;
    background-color: #fff;
	}
`;

const WrapperLogoTablet = styled.div`
	display: none;
	@media (max-width: 960px) {
		position: relative;
		width: ${(props) => (props.menu ? 'auto' : '85%')};
		height: 20vh;
		display: flex;
		justify-content: center;
		flex-direction: ${(props) => props.menu && 'column'};
	}
	@media (max-width: 648px) {
		display: none;
	}
`;

const LogoDescription = styled.p`
	color: #fff;
	font-size: .85rem;
`;

const ImageMenu = styled.img`
	display: none;
	@media(max-width: 960px) {
		padding-bottom: .3rem;
		display: flex;	
	}
`;

const Image = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '15px')};
	@media (max-width: 640px) {
		margin-left: ${(props) => props.dropdown && '.5rem'};
		width: ${(props) => props.dropdown && '10px'};
	}
`;

const ContainerSidebar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
`;

const MenuMobile = styled.div`
	display: none;
	@media (max-width: 648px) {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`;

const ImageMenuMobile = styled.img`
	display: none;
	@media (max-width: 648px) {
		width: 120px;
		display: flex;
	}
`;

const ContainerUser = styled.div`
	width: 40%;
	display: flex;
	display: flex;
	justify-content: center;
	align-items: center;
	@media(max-width: 648px) {
		width: 38%;
	}
`;

const Text = styled.p`
	color: #404040;
	font-size: .85rem;
	white-space: nowrap;
`;

const ContainerDropdown = styled.div`
	padding: 2rem;
	position: absolute;
	top: 3rem;
	left: 0;
	width: 100%;
	height: 12rem;
	background-color: #fff;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
	z-index: 2;
`;

const DropboxText = styled.p`
	padding-bottom: 1rem;
	font-size: 1.3rem;
	font-weight: ${(props) => (props.textOrg ? '600' : '200')};
`;

const DropboxButton = styled.button`
	margin-top: 1rem;
	width: 5rem;
	height: 2.5rem;
	color: #116EA0;
	font-size: 1.2rem;
	font-weight: 400;
	border-radius: 21px;
	border: transparent;
	background-color: #DBE9F1;
`;

class MenuResponsive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
			isOpenDropdown: false,
		};
	}

	renderMenu = () => (
		<ContainerSidebar>
			<SideBar handleMenuOpen={this.handleMenuOpen} history={this.props.history}/>
		</ContainerSidebar>
	)

	handleMenuOpen = () => {
		const { isMenuOpen } = this.state;

		this.setState({ isMenuOpen: !isMenuOpen });
	}

	handleOpenDropdown = () => {
		const { isOpenDropdown } = this.state;
		this.setState({ isOpenDropdown: !isOpenDropdown });
	}

	handleLogout = () => {
		this.props.logoutThunk({history: this.props.history});
	}

	renderDropdown = () => {
		return (
			<ContainerDropdown>
				<DropboxText textOrg>Snowball Solutions</DropboxText>
				<DropboxText>Pedro Gualandi</DropboxText>
				<DropboxButton onClick={this.handleLogout}>Sair</DropboxButton>
			</ContainerDropdown>
		);
	}

	render() {
		const { isMenuOpen, isOpenDropdown } = this.state;
		return (
			<Container>
				<WrapperLogoTablet menu>
					<ImageMenu src={menuHamburger} onClick={this.handleMenuOpen} />
					<LogoDescription>MENU</LogoDescription>
				</WrapperLogoTablet>
				<WrapperLogoTablet>
					<Image logoTablet src={logoWhite} />
				</WrapperLogoTablet>
				{ isMenuOpen && this.renderMenu() }
				<MenuMobile>
					<ImageMenuMobile src={logoMobile} />
					<ContainerUser onClick={this.handleOpenDropdown}>
						<Text>Pedro Gualandi</Text>
						<Image dropdown src={dropdown} onClick={this.handleOpenDropdown} />
					</ContainerUser>
				</MenuMobile>
				{ isOpenDropdown && this.renderDropdown()}
			</Container>
		);
	}
}

export default connect(null, mapDispatchToProps)(MenuResponsive);
