// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import logoWhite from '../assets/img/logoBranca.svg';
import menuHamburger from '../assets/icon/menu_hamburguer.svg';
import logoMobile from '../assets/img/LogoPNE.png';
// Components
import SideBar from './SideBar';

const Container = styled.div`
	display: none;
	@media (max-width: 768px) {
		padding-left: 2.5rem;
		width: 100%;
		display: flex;
	}
`;

const WrapperLogoTablet = styled.div`
	display: none;
	@media (max-width: 768px) {
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
	@media (max-width: 768px) {
		padding-bottom: .3rem;
		display: flex;
	}
`;

const Image = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '15px')};
	@media (max-width: 640px) {
		width: ${(props) => props.magnifying && '20px'};
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
		display: flex;
		width: 40%;
	}
`;

const ImageMenuMobile = styled.img`
	display: none;
	@media (max-width: 648px) {
		display: flex;
		width: 80%;
	}
`;

class MenuTablet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
		};
	}

	renderMenu = () => (
		<ContainerSidebar>
			<SideBar handleMenuOpen={this.handleMenuOpen} />
		</ContainerSidebar>
	)

	handleMenuOpen = () => {
		const { isMenuOpen } = this.state;

		this.setState({ isMenuOpen: !isMenuOpen });
	}

	render() {
		const { isMenuOpen } = this.state;
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
				</MenuMobile>
			</Container>
		);
	}
}

export default MenuTablet;
