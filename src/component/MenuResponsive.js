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

// Redux
import { logoutThunk } from '../dataflow/thunks/login-thunk';

const mapStateToProps = (state) => ({
	nameUser: state.login.nameUser,
});

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
		z-index: 3;
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
		margin-left: ${(props) => (props.dropdown ? '.5rem' : '0')};
		width: ${(props) => props.dropdown && '10px'};
	}
`;

const ContainerSidebar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index:3;
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
	justify-content: center;
	align-items: center;
	@media(max-width: 648px) {
		width: 20%;
	}
`;

const Text = styled.p`
	color: #116EA0;
	font-weight: 800;
	font-size: .85rem;
	white-space: nowrap;
`;

const ContainerDropdown = styled.div`
	padding: 2rem;
	position: absolute;
	top: 3rem;
	left: 0;
	width: 100%;
	height: 10rem;
	background-color: #fff;
	border-radius: 0px 0px 8px 8px;
	z-index: 2;
	@media(max-width: 648px) {
		border: #707070 solid .5px;
		box-shadow: 0px 3px 6px #00000029
	}
`;

const OverlayDropdown = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`;

const DropboxText = styled.p`
	display: ${(props) => (props.displayNone ? 'none' : 'block')};
	padding-bottom: 1rem;
	font: 500 Eurostile, sans-serif;
	font-size: 1.3rem;
	color: #116EA0;
	font-weight: ${(props) => (props.textOrg ? '800' : '200')};
`;

const DropboxButton = styled.button`
	margin-top: 1rem;
	width: 5rem;
	height: 2.5rem;
	color: #116EA0;
	font-size: 1.2rem;
	font-weight: 600;
	border-radius: 21px;
	border: transparent;
	background-color: #DBE9F1;
	cursor: pointer;
`;

const Overlay = styled.div` 
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`;

class MenuResponsive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
			isMenuClosed: false,
			isOpenDropdown: false,
		};
	}

	renderMenu = () => (
		<ContainerSidebar>
			<SideBar
				handleMenuOpen={this.handleMenuOpen}
				history={this.props.history}
				currentScreen={this.props.currentScreen}/>
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
		this.props.logoutThunk({ history: this.props.history });
	}

	renderDropdown = () => (
		<OverlayDropdown onClick={this.handleOpenDropdown}>
			<ContainerDropdown>
				{/* <DropboxText textOrg>Snowball Solutions</DropboxText> */}
				<DropboxText textOrg>{this.props.nameUser}</DropboxText>
				<DropboxButton onClick={this.handleLogout}>Sair</DropboxButton>
			</ContainerDropdown>
		</OverlayDropdown>
	)

	render() {
		const { isMenuOpen, isOpenDropdown } = this.state;
		const { nameUser } = this.props;

		return (
			<Container>
				<WrapperLogoTablet menu>
					<ImageMenu src={menuHamburger} onClick={this.handleMenuOpen} />
					<LogoDescription>MENU</LogoDescription>
				</WrapperLogoTablet>
				<WrapperLogoTablet>
					<Image logoTablet src={logoWhite} />
				</WrapperLogoTablet>
				{ isMenuOpen && (
					<>
						<Overlay onClick={this.handleMenuOpen}/>
						{this.renderMenu()}
					</>
				)}
				<MenuMobile>
					<ImageMenuMobile src={logoMobile} />
					<ContainerUser onClick={this.handleOpenDropdown}>
						<Text>{nameUser}</Text>
						<Image dropdown src={dropdown} onClick={this.handleOpenDropdown} />
					</ContainerUser>
				</MenuMobile>
				{ isOpenDropdown && this.renderDropdown()}
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuResponsive);
