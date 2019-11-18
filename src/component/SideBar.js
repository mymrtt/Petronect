// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Images
import LogoImg from '../assets/img/LogoPNE.png';
import RelevanceImg from '../assets/icon/icon_menu-Relevancia.svg';
import FilterImg from '../assets/icon/icon_menu.svg';
import PotentialImg from '../assets/icon/icon_menu-analise.svg';
import HistoricImg from '../assets/icon/icon_menu-historico.svg';
import ManagementImg from '../assets/icon/icon_menu-gestão.svg';
import DocumentsImg from '../assets/icon/icon_menu-geracaoDoc.svg';
import TaxImg from '../assets/icon/icon_menu-justificativa.svg';
import ClarificationImg from '../assets/icon/icon_menu-hitorico.svg';
import NotificationImg from '../assets/icon/icon_menu-notificação.svg';
import menuHamburger from '../assets/icon/menu_hamburger_blue.svg';

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
	width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  border-right: rgba(0, 0, 0, 0.1) solid 1px; 
  border-radius: 4px 0 0 0;
	@media(max-width: 960px) {
		border-radius: 0;
	}
`;

const NavBar = styled.div`
  width: 100%;
  height: 90%;

	@media(max-width: 375px) {
		width: 100%;
		height: 100%;
	}
`;

const BoxLogo = styled.figure`
  width: 100%;
	height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

	@media (max-width: 960px) {
		display: none;
	}
`;

const ImgLogo = styled.img`
  width: 145px;
`;

const WrapperTablet = styled.div`
	display: none;
	@media (max-width: 960px) {
		padding-left: 1.8rem
		width: auto;
		height: 20vh;
		display: flex;
		justify-content: center;
    align-items: flex-start;
		flex-direction: column;
	}
	@media (max-width: 648px) {
		display: none;
	}
`;

const ImageMenuTablet = styled.img`
	display: none;
	@media (max-width: 960px) {
		padding-bottom: .3rem;
		width: 20%;
		display: flex;
	}
`;

const MenuTabletText = styled.p`
	margin-left: 0.1rem;
	font-size: .85rem;
	color: #115680;
	text-transform: uppercase;
`;

const BoxMenu = styled.div`
  width: 100%;
	// height: 40%;
	height: 300px;
  display: flex;
	justify-content: flex-end;
	
	@media (max-width: 1024px) {
		height: 65%;
	}
	@media (max-width: 648px) {
		position: fixed;
    bottom: 0;
    height: 3rem;
		background-color: #fff;
		box-shadow: 0px -1px 2px #0000001A;
	}
`;

const MenuList = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

	@media (max-width: 1024px) {
		width: 95%;
	}
	@media(max-width: 648px) {
		width: 100%;
		flex-direction: row;
		align-items: center;
	}
`;

const IconSideBar = styled.img`
  padding-right: 1rem;
`;

const MenuItem = styled(Link)`
  height: 55px;
  display: flex;
  align-items: center;
	text-decoration: none;
  font-size: .875rem;
  color: #116EA0;
  font-weight: 900;
  padding-left: 1rem;
  background-color: ${(props) => (props.selected ? '#116EA015' : 'transparent')};
  border-radius: 18px 0 0 18px;
  cursor: ${(props) => (props.disable ? 'default' : 'pointer')};
	opacity: ${(props) => (props.disable ? '0.3' : '1')};
	@media (max-width: 1024px) {
		height: 40px;
	}
	@media (max-width: 648px) {
		width: 45%;
		height: 2.2rem;
		padding: .5rem 0;
		display: ${(props) => (props.disable ? 'none' : 'flex')};
		Justify-content: center;
		border-radius: 18px;
		
	}
`;

const WrapperInfo = styled.div`
  width: 80%;
	height: 18%;
  display: flex;
  align-items: center;
  justify-centent: center;
  border-top: solid #EBEBEB 1px;

	@media(max-width: 648px) {
		display: none;
  }
`;

const Contentinfo = styled.div`
 width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxInfo = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItem = styled.p`
	display: none;
	${'' /* padding: 1rem 0;
  color: #000;
  font-size: .875rem;
  font-weight: 900; */}
`;

const Representative = styled.p`
	font: 500 Eurostile, sans-serif;
  color: #116EA0;
  font-size: .875rem;
  font-weight: 800;
`;

const Button = styled.button`
	width: 75px;
	height: 25px;
  background: #dbe9f1;
  border-radius: 10px;
  border-style: none; 
	color: #116EA0;
  cursor: pointer;
	font-weight: 600;
`;

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: 'Match Relevância',
			sidebarList: [
				{
					disable: false,
					iconSelected: RelevanceImg,
					text: 'Match Relevância',
					route: '/match-relevancia',
				},
				{
					disable: false,
					iconSelected: FilterImg,
					text: 'Notificações',
					route: '/notifications',
				},
				{
					disable: true,
					iconSelected: PotentialImg,
					text: 'Análise de Potencial',
					route: '/potential-analysis',
				},
				{
					disable: true,
					iconSelected: HistoricImg,
					text: 'Histórico de oportunidades',
					route: '/historical-opportunities',
				},
				{
					disable: true,
					iconSelected: ManagementImg,
					text: 'Gestão interna',
					route: '/internal-management',
				},
				{
					disable: true,
					iconSelected: DocumentsImg,
					text: 'Geração de documentos',
					route: '/document-generation',
				},
				{
					disable: true,
					iconSelected: TaxImg,
					text: 'Justificativa de impostos',
					route: '/tax-justification',
				},
				{
					disable: true,
					iconSelected: ClarificationImg,
					text: 'Histórico de esclarecimentos',
					route: '/clarification-history',
				},
				{
					disable: true,
					iconSelected: NotificationImg,
					text: 'Notificação de resultados',
					route: '/notification-of-results',
				},
			],
		};
	}

	handleLogout = () => {
		this.props.logoutThunk({ history: this.props.history });
	}

	render() {
		const { nameUser } = this.props;
		return (
			<Container>
				<NavBar>
					<BoxLogo>
						<ImgLogo src={LogoImg} alt="Logo" />
					</BoxLogo>
					<WrapperTablet>
						<ImageMenuTablet src={menuHamburger} onClick={this.props.handleMenuOpen} />
						<MenuTabletText>menu</MenuTabletText>
					</WrapperTablet>
					<BoxMenu>
						<MenuList>
							{this.state.sidebarList.map((item) => (
								<MenuItem
									key={item.text}
									disable={item.disable}
									selected={item.route === this.props.currentScreen}
									to={item.route}
								>
									<IconSideBar src={item.iconSelected} />
									{item.text}
								</MenuItem>
							))}
						</MenuList>
					</BoxMenu>
				</NavBar>
				<WrapperInfo>
					<Contentinfo>
						<BoxInfo>
							<InfoItem>Snowball Solutions</InfoItem>
							<Representative>{nameUser}</Representative>
						</BoxInfo>
						<span>
							<Button onClick={this.handleLogout}>Sair</Button>
						</span>
					</Contentinfo>
				</WrapperInfo>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
