import React from 'react';
import styled from 'styled-components';

const MenuTablet = styled.div`
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
	<MenuTablet>
		<WrapperLogoTablet menu>
			<ImageMenu src={menuHamburger} />
			<p>MENU</p>
		</WrapperLogoTablet>
		<WrapperLogoTablet>
			<Image logoTablet src={logoWhite} />
		</WrapperLogoTablet>
	</MenuTablet>
);

export default MenuTablet;
