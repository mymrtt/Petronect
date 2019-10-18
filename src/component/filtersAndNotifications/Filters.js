// Libs
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { values } from 'lodash';

// Images
import filter from '../../assets/icon/filtrar.svg';
import magnifying from '../../assets/icon/lupa.svg';

// Components
import NotificationsBar from './NotificationsBar';
import MenuResponsive from '../MenuResponsive';
import Footer from '../Footer';
import CardFilter from './CardFilter';
import ModalFilter from '../ModalFilter';

const Container = styled.div`
	@media (max-width: 768px) {
		width: 95vw;
		overflow-y: scroll;
	}
	@media (max-width: 648px) {
		// padding: .30rem;
		padding-top: 2rem;
    // padding-bottom: .5rem;
		width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
		background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%) 0% 0% no-repeat padding-box;
	}
`;

const Content = styled.div`
	padding-top: 1.3rem;
	padding-right: 1rem;
  width: 75vw;
	height: 95vh;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
  border-radius: 0 4px 0 0;
	background-color: #fff;
	@media (max-width: 768px) {
		width: 95vw;
		overflow-y: scroll;
	}
	@media (max-width: 648px) {
		margin-bottom: 3rem;
		// margin: 3rem 0;
		padding-top: .5rem;
		height: 90vh;
		flex-direction: column;
	}
`;

// const AddFilter = styled.div`
// 	// margin-right: ${(props) => (props.containerCard ? '0' : '1rem')};
// 	margin-bottom: 1rem;
// 	padding: ${(props) => (props.containerCard ? '0' : '1rem')};
// 	width: 48%;
// 	display: flex;
// 	flex-direction: ${(props) => props.containerCard && 'column'};
// 	border: ${(props) => (props.containerCard ? '.5px solid #01B701' : '.5px solid #116EA0')};
// 	border-radius: 4px;
// 	background-color: ${(props) => (props.containerCard ? '#fff' : '#116EA0')};
// 	cursor: pointer;
// 	@media (max-width: 768px) {
// 		margin-right: 0;
// 		margin-bottom: 1rem;
// 		width: 80%;
// 	}
// 	@media (max-width: 648px) {
// 		margin-bottom: .5rem;
// 		width: 100%;
// 	}
// `;

// const AddFilterImage = styled.img`
// 	margin-right: 1rem;
// `;

const WrapperTexts = styled.div`
	display: ${(props) => props.suggestions && 'flex'};
	align-items: ${(props) => props.suggestions && 'center'};
	margin: ${(props) => props.suggestions && '.80rem .5rem'};
	@media (max-width: 648px) {
		flex-wrap: wrap;
		margin: ${(props) => props.suggestions && '1rem'};
	}
`;

const Title = styled.h2`
	color: ${(props) => (props.modalTitle ? '#115680' : '#fff')};
	font-size: ${(props) => (props.modalTitle ? '1rem' : '.80rem')};
`;

const SuggestionsTags = styled.span`
	margin-right: 1rem;
	margin-bottom: ${(props) => props.Tag && '.3rem'};
	padding: .2rem .4rem;
	border-radius: 10px;
	background-color: #aadf0040;
`;

const SuggestionsText = styled.p`
	margin-right: ${(props) => props.suggestionsTitle && '1rem'};
	font-size: ${(props) => (props.suggestionsTitle ? '.75rem' : '.80rem')};
	color: ${(props) => (props.suggestionsTitle ? '#8C8C8C' : '#404040')};
`;

const AddFilterTitle = styled.p`
	margin: ${(props) => (props.searchTitle ? '0 0 0.6rem .90rem' : '.2rem')};
	color: ${(props) => (props.searchTitle ? '#116EA0' : '#fff')};
	font-size: ${(props) => (props.smallTitle ? '.85rem' : '1rem')};
`;

const ContainerNotifications = styled.div`
	padding-left: 1rem;
	width: 25%;
	height: 70vh
	display: flex;
	flex-direction: column;
	border-left: 1px solid #0000001A;
	@media (max-width: 768px) {
		width: 45%;
	}
	@media (max-width: 648px) {
		padding-left: .5rem;
		width: 100%;
		border-left: 0;
	}
`;

const ContainerSearchInput = styled.div`
	width: 100%;
	height: 2rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border: .5px solid #116EA0;
	border-radius: 16px;
	@media (max-width: 640px) {
    margin-left: .5rem;
		height: 2.5rem;
    width: 100%;
	}
`;

const ContainerSearch = styled.div`
	display: flex;
	@media(max-width: 648px) {
		display: none;
	}
`;

const ContainerSearchMobile = styled.div`
	display: none;
	@media(max-width: 648px) {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;

const WrapperSearch = styled.div`
	padding-bottom: 2rem;
	width: 100%;

	@media (max-width: 648px) {
		padding-bottom: 1rem;
		width: 95%;
	}
`;

// const WrapperNotifications = styled.div`
// 	// padding-bottom: ${(props) => props.wrapperSearch && '2rem'};
// 	// @media (max-width: 648px) {
// 	// 	padding-bottom: ${(props) => props.wrapperSearch && '1rem'};
// 	// }
// `;

const NotificationsItem = styled.div`
	margin-bottom: 1rem;
	padding: .45rem .80rem .80rem;
	display: flex;
	flex-direction: column;
	border: .5px solid #E6E6E6;
	border-radius: 8px;
	@media(max-width: 648px) {
		padding: .45rem .80rem 1rem;
	}
`;

const SearchInput = styled.input`
	padding-left: .2rem;
	width: 80%;
	height: 1rem;
	border: transparent;
	outline: none;
	@media (max-width: 648px) {
		width: 90%;
		height: 2rem;
	}
`;

const Image = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '15px')};
	@media (max-width: 640px) {
		width: ${(props) => props.magnifying && '18px'};
	}
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #40404040;
`;

const FilterModal = styled.div`
	padding: 0 1.5rem;
	padding-bottom: 1.5rem;
	width: 35rem;
	border: .5px solid #115680;
	border-radius: 8px;
	background: #fff;
	@media (max-width: 768px) {
		z-index: 1;
	}
	@media (max-width: 648px) {
		padding: 0 1rem;
		width: 92%;
    height: 90vh;
	}
`;

const Header = styled.div`
	position: relative;
	margin: 0 0 .80rem .5rem;
	padding-top: 1.2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const CloseContainer = styled.div`
	position: absolute;
	// right: .65rem;
	left: 31.5rem;
	bottom: 1.5rem;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid #115680;
	border-radius: 50%;
	background-color: #fff;
	@media (max-width: 640px) {
    top: .5rem;
    bottom: 0;
		left: 16.5rem;
    width: 35px;
    height: 35px;
	}
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	color: #115680;
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
`;

const InputBox = styled.span`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.alt ? 'row' : 'column')};
	justify-content: ${(props) => props.alt && 'space-between'};
	width: 100%;
	margin-top: ${(props) => props.last && '.5rem'};
	@media (max-width: 768px) {
		width: 60%;
	}
	@media (max-width: 648px) {
		width: 100%;
	}
`;

const Label = styled.label`
	font: 500 Eurostile, sans-serif;
	font-size: ${(props) => (props.labelNotifications ? '.85rem' : '.75rem')};
	margin: 0 0 .25rem .5rem;
	letter-spacing: 0;
	color: ${(props) => (props.labelNotifications ? '#000' : '#7FBA4C')};
	@media(max-width: 648px) {
		margin: 0 0 .25rem 1rem;
	}
`;

const Input = styled.input`
	width: 100%;
	height: 3rem;
	padding: .5rem;
	font-size: 1rem;
	background: #FAFAFA 0% 0% no-repeat padding-box;
	border: 1px solid #7FBA4C;
	border-radius: 4px;
	outline: none;

	::placeholder {
		font: Light 16px Open Sans;
		letter-spacing: 0;
		color: #959595;
	}
	@media(max-width: 648px) {
		padding-left: 1rem;
	}
`;

const Button = styled.button`
	padding: 1rem;
	width: 100%;
	height: 3rem;
	color: #fff;
	border: none;
	border-radius: 4px;
	background-color: #116EA0;
	cursor: pointer;
`;

const WrapperTagsColor = styled.div`

`;

const ContainerTagsColor = styled.div`
	margin: .8rem 0;
	height: 4rem;
	display: flex;
	justify-content: space-between;
`;

const TagColor = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${(props) => props.backgroundColor}
	cursor: pointer;
`;

const ContainerFilters = styled.div`
	width: 90%;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 768px) {
    margin-left: 3rem;
		align-items: flex-start;
		flex-direction: column;
	}
	@media (max-width: 648px) {
		margin-left: .5rem;
    width: 100%;
	}
`;

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			// nameValue: '',
			// colors: [
			// 	'#DE8F33',
			// 	'#D65B85',
			// 	'#52BA44',
			// 	'#01B0B7',
			// 	'#8A5BD6',
			// 	'#D7E65D',
			// 	'#D53B40',
			// ],
			CardList: {
				card1: {
					title: 'Sistema de offshore',
					tags: [
						'instrumental',
						'montagem',
						'elétrica',
						'automoção',
					],
				},
				card2: {
					title: 'Serviço de montagem',
					tags: [
						'montagem',
						'automoção',
						'elétrica',
						'instrumental',
					],
				},
				card3: {
					title: 'Remoção de material',
					tags: [
						'montagem',
						'instrumental',
						'automoção',
						'elétrica',
					],
				},
				card4: {
					title: 'Manutenção em plataforma',
					tags: [
						'cromo-mobilidenio',
						'corrosão',
						'jateamento',
						'rapel',
					],
				},
			},
		};
	}

	// handleColorOption = (color) => {
	// 	this.setState({ item: color });
	// }

	// renderColorOption = () => {
	// 	const { colors } = this.state;

	// 	return colors.map((color) => (
	// 		<TagColor
	// 			key={color}
	// 			backgroundColor={color}
	// 			onClick={() => this.handleColorOption(color)}
	// 		/>
	// 	));
	// }

	renderCardsFilter = () => {
		const { CardList } = this.state;

		return (
			<ContainerFilters>
				{ values(CardList).map((card) => (
					<CardFilter
						key={card.title}
						item={this.state.item}
						card={card}
						handleOpenModal={this.handleOpenModal}
					/>
				))}
			</ContainerFilters>
		);
	}

	renderWrapperSearch = () => (
		<WrapperSearch>
			<AddFilterTitle searchTitle smallTitle>Pesquisar filtro</AddFilterTitle>
			<ContainerSearchInput>
				<SearchInput
					placeholder={'Digite aqui para pesquisar'}
				/>
				<Image magnifying src={magnifying} />
			</ContainerSearchInput>
		</WrapperSearch>
	)

	// handleChangeName = (event) => {
	// 	this.setState({ nameValue: event.target.value });
	// }

	handleOpenModal = () => {
		const { isModalOpen } = this.state;
		this.setState({ isModalOpen: !isModalOpen });
	}

	renderModalFilter = () => (
		<ModalFilter handleOpenModal={this.handleOpenModal}/>
	)

	render() {
		const { isModalOpen } = this.state;
		return (
			<Fragment>
				<MenuResponsive />
				<Container>
					<Content>
						<ContainerSearchMobile>
							{this.renderWrapperSearch()}
						</ContainerSearchMobile>
						{this.renderCardsFilter()}
						<ContainerNotifications>
							<ContainerSearch>
								{this.renderWrapperSearch()}
							</ContainerSearch>
							<AddFilterTitle searchTitle smallTitle>Notificações</AddFilterTitle>
							<NotificationsItem>
								<Label labelNotifications>Email</Label>
								<NotificationsBar />
							</NotificationsItem>
							<NotificationsItem>
								<Label labelNotifications>Push</Label>
								<NotificationsBar />
							</NotificationsItem>
							<NotificationsItem>
								<Label labelNotifications>SMS</Label>
								<NotificationsBar />
							</NotificationsItem>
						</ContainerNotifications>
						{ isModalOpen && this.renderModalFilter() }
					</Content>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}


export default Filters;
