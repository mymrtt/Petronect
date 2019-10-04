import React, { Component } from 'react';
import styled from 'styled-components';

// IMG
import LogoImg from '../assets/img/LogoPNE.png';
import RelevanceImg from '../assets/icon/icon_menu-Relevancia.svg';
import PotentialImg from '../assets/icon/icon_menu-analise.svg';
import HistoricImg from '../assets/icon/icon_menu-historico.svg';
import ManagementImg from '../assets/icon/icon_menu-gestão.svg';
import DocumentsImg from '../assets/icon/icon_menu-geracaoDoc.svg';
import TaxImg from '../assets/icon/icon_menu-justificativa.svg';
import ClarificationImg from '../assets/icon/icon_menu-hitorico.svg';
import NotificationImg from '../assets/icon/icon_menu-notificação.svg';
import FilterImg from '../assets/icon/icon_menu.svg';

const Container = styled.div`
  width: 20vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-right: rgba(0, 0, 0, 0.1) solid 1px; 
  border-radius: 4px 0 0 0;
  box-shadow: 2px 0 4px;
`;

const NavBar = styled.div`
  width: 100%;
  height: 90%;
`;

const BoxLogo = styled.figure`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 145px;
`;

const BoxMenu = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-end;;
`;

const MenuList = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const IconSideBar = styled.img`
  padding-right: 1rem;
`;

const MenuItem = styled.li`
  height: 36px;
  display: flex;
  align-items: center;
  list-style: none;
  font-size: .875rem;
  color: #116EA0;
  font-weight: 900;
  padding-left: 1rem;
  background-color: #116EA015;
  color: #116ea0;
  border-radius: 18px 0 0 18px;
  cursor: pointer;
`;

const MenuItemHidden = styled(MenuItem)`
  color: #404040;
  opacity: 0.25;
  cursor: default;
`;

const BoxFilter = styled.div`
  height: 10%;
  width: 80%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FilterText = styled.p`
  color: #404040;
  font-size: .875rem;
`;

const WrapperInfo = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-centent: center;
  border-top: solid #000 1px;
`;

const Contentinfo = styled.div`
 width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BoxInfo = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoImg = styled.img`
  padding-right: .5rem;
`;

const InfoItem = styled.p`
  color: #000;
  font-size: .875rem;
  font-weight: 900;
`;

const Representative = styled.p`
  color: #000;
  font-size: .875rem;
  font-weight: 100;
`;

const Button = styled.button`
  width: 58px;
  height: 20px;
  background: #dbe9f1;
  border-radius: 10px;
  border-style: none; 
  cursor: pointer;
`;

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectItem: [
				{
					iconSelected: <IconSideBar src={RelevanceImg}/>,
					textSelected: 'Match Relevância',
				},
			],
			hiddenItem: [
				{
					iconHidden: <IconSideBar src={PotentialImg}/>,
					textHidden: 'Análise de Potencial',
				},
				{
					iconHidden: <IconSideBar src={HistoricImg}/>,
					textHidden: 'Histórico de oportunidades',
				},
				{
					iconHidden: <IconSideBar src={ManagementImg}/>,
					textHidden: 'Gestão interna',
				},
				{
					iconHidden: <IconSideBar src={DocumentsImg}/>,
					textHidden: 'Geração de documentos',
				},
				{
					iconHidden: <IconSideBar src={TaxImg}/>,
					textHidden: 'Justificativa de impostos',
				},
				{
					iconHidden: <IconSideBar src={ClarificationImg}/>,
					textHidden: 'Histórico de esclarecimentos',
				},
				{
					iconHidden: <IconSideBar src={NotificationImg}/>,
					textHidden: 'Notificação de resultados',
				},
			],

			// list : [
			//   'Match Relevância',
			//   'Análise Potencial',
			//   'Histórico de oportunidade',
			//   'Gestão interna',
			//   'Geração de documentos',
			//   'justificativa de impostos',
			//   'Histórico de esclarecimentos',
			//   'Notificação de Resultados',
			// ]
		};


		// renderMenu = () => {
		//   const { list } = this.state;

		//   return (<div>
		//   list.map((item, i) => {
		//     <li key={i}>
		//       {item.icon}
		//       {item.text}
		//     </li>
		//   });
		//   </div>)
		// }
	}

	render() {
		return (
			<Container>
				<NavBar>
					<BoxLogo>
						<ImgLogo src={LogoImg} alt="Logo" />
					</BoxLogo>
					<BoxMenu>
						<MenuList>

							{(this.state.selectItem || []).map((item) => (
								<MenuItem
									key={item}
								>
									{item.iconSelected}{item.textSelected}
								</MenuItem>
							))}

							{(this.state.hiddenItem || []).map((item) => (
								<MenuItemHidden
									key={item}
								>
									{item.iconHidden}{item.textHidden }
								</MenuItemHidden>
							))}

						</MenuList>
					</BoxMenu>
				</NavBar>
				<BoxFilter>
					<InfoImg src={FilterImg}/>
					<FilterText>Filtros e notificações</FilterText>
				</BoxFilter>
				<WrapperInfo>
					<Contentinfo>
						<BoxInfo>
							<InfoItem>Snowball Solutions</InfoItem>
							<Representative>Pedro Gualandi</Representative>
						</BoxInfo>
						<span>
							<Button>Sair</Button>
						</span>
					</Contentinfo>
				</WrapperInfo>
			</Container>
		);
	}
}


export default SideBar;
