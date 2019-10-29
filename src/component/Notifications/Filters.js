// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { values } from 'lodash';

// Images
import magnifying from '../../assets/icon/lupa.svg';

// Components
import NotificationsBar from './NotificationsBar';
import MenuResponsive from '../MenuResponsive';
import Footer from '../Footer';
import CardFilter from './CardFilter';
import ModalFilter from '../ModalFilter';

// Redux
import { getAllKeywordThunk } from '../../dataflow/thunks/opportunities-thunk';
import { removeAllNotification } from '../../dataflow/modules/opportunities-modules';

const mapStateToProps = (state) => ({
	allNotification: state.opportunities.allNotification,
});

const mapDispatchToProps = (dispatch) => ({
	getAllKeywordThunk: (info) => {
		dispatch(getAllKeywordThunk(info));
	},
	removeAllNotification: (info) => {
		dispatch(removeAllNotification(info));
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
		position: fixed;
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
		::-webkit-scrollbar {
		width: 5px;
		}
		::-webkit-scrollbar-track {
			background: #fff; 
		}
		::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background: transparent linear-gradient(180deg,#115680 0%,#116EA0 100%); 
		}
		::-webkit-scrollbar-thumb:hover {
			background: #000; 
		}
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
		// padding-top: 6rem;
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
	cursor: ${(props) => props.magnifying && 'pointer'};
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
	}
	@media(max-width: 648px) {
		margin-left: .5rem;
		padding-bottom: 1rem;
		width: 100%;
		height: 100%;
		flex-wrap: nowrap;
	}
`;

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			searchText: '',
			searchCard: false,
		};
	}

	componentDidMount() {
		this.props.getAllKeywordThunk();
	}

	componentWillUnmount() {
		this.props.removeAllNotification();
	}

	handleSearchInput = (event) => {
		this.setState({ searchText: event.target.value });
	}

	handleSearchCard = () => {
		this.setState({ searchCard: true });
	}

	renderNewCardsFilter = () => {
		const { allNotification } = this.props;

		return (
			<ContainerFilters>
				{values(allNotification).filter((card) => card.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0).map((card) => {
					return 	<CardFilter
						key={card.keywordFilterId}
						card={card}
						history={this.props.history}
						handleOpenModal={this.handleOpenModal}
					/>;
				})}
			</ContainerFilters>
		);
	}

	renderCardsFilter = () => {
		const { allNotification } = this.props;

		return (
			<ContainerFilters>
				{values(allNotification).map((card) => {
					return 	<CardFilter
						key={card.keywordFilterId}
						card={card}
						history={this.props.history}
						handleOpenModal={this.handleOpenModal}
					/>;
				})}
			</ContainerFilters>
		);
	}

	renderWrapperSearch = () => (
		<WrapperSearch>
			<AddFilterTitle searchTitle smallTitle>Pesquisar Notificação</AddFilterTitle>
			<ContainerSearchInput>
				<SearchInput
					placeholder={'Digite aqui para pesquisar'}
					value={this.state.searchText}
					onChange={this.handleSearchInput}
				/>
				<Image magnifying src={magnifying} onClick={this.handleSearchCard} />
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
		const { isModalOpen, searchCard } = this.state;
		console.log(this.props.currentScreen);
		return (
			<Fragment>
				<MenuResponsive history={this.props.history} currentScreen={this.props.currentScreen}/>
				<Container>
					<Content>
						<ContainerSearchMobile>
							{this.renderWrapperSearch()}
						</ContainerSearchMobile>
						<Fragment>
							{searchCard ? this.renderNewCardsFilter() : this.renderCardsFilter()}
						</Fragment>
						<ContainerNotifications>
							<ContainerSearch>
								{this.renderWrapperSearch()}
							</ContainerSearch>
							<AddFilterTitle searchTitle smallTitle>Frequência de Avisos</AddFilterTitle>
							<NotificationsItem>
								<Label labelNotifications>E-mail</Label>
								<NotificationsBar min={0} max={100} />
							</NotificationsItem>
							<NotificationsItem style={{ backgroundColor: 'transparent', opacity: 0.3 }}>
								<Label labelNotifications>Push</Label>
								<NotificationsBar min={0} max={0} />
							</NotificationsItem>
							<NotificationsItem style={{ backgroundColor: 'transparent', opacity: 0.3 }}>
								<Label labelNotifications>SMS</Label>
								<NotificationsBar min={0} max={0} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
