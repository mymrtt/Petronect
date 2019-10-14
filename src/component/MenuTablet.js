// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import logoWhite from '../assets/img/logoBranca.svg';
import menuHamburger from '../assets/icon/menu_hamburguer.svg';

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
		width: ${(props) => (props.menu ? 'auto' : '85%')};
		height: 20vh;
		display: flex;
		justify-content: center;
		flex-direction: ${(props) => props.menu && 'column'};
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

const MenuTablet = () => (
	<Container>
		<WrapperLogoTablet menu>
			<ImageMenu src={menuHamburger} />
			<LogoDescription>MENU</LogoDescription>
		</WrapperLogoTablet>
		<WrapperLogoTablet>
			<Image logoTablet src={logoWhite} />
		</WrapperLogoTablet>
	</Container>
);

export default MenuTablet;
