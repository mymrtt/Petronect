// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { values } from 'lodash';
import * as Cookies from 'js-cookie';

// Images
import magnifying from '../../assets/icon/lupa.svg';

// Components
import NotificationsBar from './NotificationsBar';
import MenuResponsive from '../MenuResponsive';
import Footer from '../Footer';
import CardFilter from './CardFilter';
import ModalFilter from '../ModalFilter';

// Middlewares
import { getAllKeywordThunk } from '../../dataflow/thunks/opportunites-thunk';
// import { getAllKeywordMiddleware } from '../../dataflow/middlewares/opportunites-middlewares';

const mapDispatchToProps = (dispatch) => ({
	getAllKeywordThunk: (info) => {
		dispatch(getAllKeywordThunk(info));
	},
});

const Container = styled.div`
	width: 80%;
	@media (max-width: 960px) {
		width: 95%;
		height: 100vh;
		overflow-y: scroll;
	}
	@media (max-width: 648px) {
		width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
		background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%) 0% 0% no-repeat padding-box;
	}
`;

const Content = styled.div`
	padding-top: 1.3rem;
	padding-right: 1rem;
	height: 95vh;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
  border-radius: 0 4px 0 0;
	background-color: #fff;
	@media(max-width: 960px) {
		width: 95vw;
	}
	@media(max-width: 648px) {
		margin-top: 6rem;
		padding-top: .60rem;
		flex-direction: column;
		border-radius: 4px;
		overflow-y: scroll;
	}
`;

const AddFilterTitle = styled.p`
	margin: ${(props) => (props.searchTitle ? '0 0 0.6rem .90rem' : '.2rem')};
	color: ${(props) => (props.searchTitle ? '#116EA0' : '#fff')};
	font-size: ${(props) => (props.smallTitle ? '.85rem' : '1rem')};
	font-weight : ${(props) => (props.searchTitle ? '600' : '200')};
	@media(max-width: 648px) {
		margin: ${(props) => props.searchTitle && '0 0 0.6rem 1.38rem'};
	}
`;

const ContainerNotifications = styled.div`
	padding-left: 1rem;
	width: 25%;
	height: 70vh;
	display: flex;
	flex-direction: column;
	border-left: 1px solid #0000001A;
	@media(max-width: 960px) {
		width: 45%;
	}
	@media(max-width: 648px) {
		margin-bottom: 4rem;
		padding-top: 1rem;
		padding-left: .5rem;
		width: 100%;
		height: 100%;
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
	@media(max-width: 640px) {
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

	@media(max-width: 648px) {
		padding-bottom: .60rem;
		width: 100%;
	}
`;

const NotificationsItem = styled.div`
	margin-bottom: 1rem;
	padding: .45rem .80rem 1rem;
	display: flex;
	flex-direction: column;
	border: .5px solid #E6E6E6;
	border-radius: 8px;
	@media(max-width: 648px) {
		padding: .45rem .80rem 1.3rem;
	}
`;

const SearchInput = styled.input`
	padding-left: .2rem;
	width: 80%;
	height: 1rem;
	border: transparent;
	outline: none;
	@media(max-width: 648px) {
		width: 85%;
	}
`;

const Image = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '15px')};
	@media (max-width: 640px) {
		width: ${(props) => props.magnifying && '18px'};
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

const ContainerFilters = styled.div`
	width: 90%;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media(max-width: 960px) {
		padding: 0;
		align-items: flex-start;
		flex-direction: column;
		// min-height: 85%;
	}
	@media(max-width: 648px) {
		flex-wrap: nowrap;
		margin-left: .5rem;
		width: 100%;
	}
`;

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
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

	componentDidMount() {
		this.props.getAllKeywordThunk();
	}

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
			<AddFilterTitle searchTitle smallTitle>Pesquisar Notificação</AddFilterTitle>
			<ContainerSearchInput>
				<SearchInput
					placeholder={'Digite aqui para pesquisar'}
				/>
				<Image magnifying src={magnifying} />
			</ContainerSearchInput>
		</WrapperSearch>
	)

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
								<Label labelNotifications>E-mail</Label>
								<NotificationsBar />
							</NotificationsItem>
							<NotificationsItem style={{ backgroundColor: 'transparent', opacity: 0.3 }}>
								<Label labelNotifications>Push</Label>
								<NotificationsBar />
							</NotificationsItem>
							<NotificationsItem style={{ backgroundColor: 'transparent', opacity: 0.3 }}>
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


// export default Filters;
export default connect(null, mapDispatchToProps)(Filters);
