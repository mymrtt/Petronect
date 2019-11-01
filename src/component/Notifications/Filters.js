// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { values } from 'lodash';
import ReactScrollbar from 'react-scrollbar';


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
		width: auto;
		height: auto;
	}
	@media(max-width: 648px) {
		padding-top: .2rem;
    padding-right: .5rem;
    padding-left: .5rem;
		padding-bottom: .8rem;
		width: 95%;
		max-height: 82vh;
		height: 82vh;
		border-radius: 4px;
		display: flex;
    flex-direction: column;
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
		width: 100%;
    padding-top: 1rem;
		padding-left: 0;
		display: none;
	}
`;

const WrapperNotifications = styled.div`
	display: none;
	
	@media(max-width: 648px) {
		padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
		position: fixed;
		bottom: 3rem;
		left: 0;
		width: 100%;
		display: flex;
		border-top: .2px solid #116696;
		background-color: #fff;
		z-index: 3;
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
		min-height: 2rem;
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
		padding-top: 1.5rem;
		padding-bottom: 1rem;
		width: 100%;
		min-height: 10vh;
		display: flex;
	}
`;

const WrapperSearch = styled.div`
	padding-bottom: 2rem;
	width: 100%;

	@media(max-width: 648px) {
		padding-bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
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
		padding: .45rem 2rem 1.3rem;
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

const ContainerScrollBar = styled.div`
	position: relative;
	width: 85%;
	max-height: calc(95vh - 1.3rem);
	display: flex;
	flex-direction: column;

	@media(max-width: 648px) {
		padding-bottom: 2rem;
		width: 100%;
		max-height: 67vh;
	}

	.scrollarea {
    ${({ full }) => full && css`
      max-height: 100%;
      width: 100%;
    `}
		width: 100%;
  }
  .scrollarea .scrollbar-container {
		opacity: 0.12;
	}
	.scrollarea:hover .scrollbar-container {
		opacity: 0.22;
	}
	.scrollarea .scrollbar-container.active, 
	.scrollarea .scrollbar-container:hover {
    opacity: .4 !important;
	}
  .scrollarea .scrollbar-container.vertical {
    width: 8px;
    height: 100%;
    right: 2px;
    top: 0;
    border-radius: 6px;
    z-index: 2;
  }
  .scrollarea .scrollbar-container.vertical .scrollbar {
    width: 8px;
    height: 20px;
    background: #116696;
    margin-left: 0;
    border-radius: 6px;
  }
`;

const ContainerFilters = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	overflow: hidden;

	@media(max-width: 960px) {
		padding: 0;
		align-items: flex-start;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	@media(max-width: 648px) {
		width: 100%;
		height: 100%;
		justify-content: flex-start;
		align-items: center;
	}
`;

const FrequenciasDesktop = styled.div`
	padding-top: 1.5rem;
	display: flex;
	flex-direction: column;
	@media(max-width: 648px) {
		display: none;
	}
`;

const ContainerNotificationsItem = styled.div`
	display: none;
	 
	@media(max-width: 648px) {
		position: fixed;
		bottom: 5rem;
		right: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		z-index: 3;
		background-color: #fff;
	}
`;

const NotificationText = styled.p`
	margin: 0 0 0.6rem .90rem;
	color: #116EA0;
	font-size: .85rem;
	font-weight : 600;

	@media(max-width: 648px) {
		margin: 0;
		margin-left: ${(props) => props.notificationItem && '.5rem'};
		display: flex;
		align-items: center;
	}
`;

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			searchText: '',
			searchCard: false,
			isFrequencyOpen: false,
			isFrequencyClose: false,
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
			<ContainerScrollBar>
				<ReactScrollbar
					speed={0.8}
					horizontal={false}
					smoothScrolling
					stopScrollPropagation
				>
					<ContainerFilters>
						{values(allNotification).filter((card) => card.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0).map((card) => <CardFilter
							key={card.keywordFilterId}
							card={card}
							history={this.props.history}
							handleOpenModal={this.handleOpenModal}
						/>)}
					</ContainerFilters>
				</ReactScrollbar>
			</ContainerScrollBar>
		);
	}

	renderCardsFilter = () => {
		const { allNotification } = this.props;

		return (
			<ContainerScrollBar>
				<ReactScrollbar
					speed={0.8}
					horizontal={false}
					smoothScrolling
					stopScrollPropagation
				>
					<ContainerFilters>
						{values(allNotification).map((card) => <CardFilter
							key={card.keywordFilterId}
							card={card}
							history={this.props.history}
							handleOpenModal={this.handleOpenModal}
						/>)}
					</ContainerFilters>
				</ReactScrollbar>
			</ContainerScrollBar>
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
			<FrequenciasDesktop>
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
			</FrequenciasDesktop>
		</WrapperSearch>
	)

	handleOpenModal = () => {
		const { isModalOpen } = this.state;
		this.setState({ isModalOpen: !isModalOpen });
	}

	handleOpenFrequency = () => {
		const { isFrequencyOpen, isFrequencyClose } = this.state;

		this.setState({
			isFrequencyOpen: !isFrequencyOpen,
			isFrequencyClose: !isFrequencyClose,
		});
	}

	renderModalFilter = () => (
		<ModalFilter handleOpenModal={this.handleOpenModal}/>
	)

	renderFrequencias = () => (
		<ContainerNotificationsItem>
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
		</ContainerNotificationsItem>
	)

	render() {
		const {
			isModalOpen, searchCard, isFrequencyOpen, isFrequencyClose,
		} = this.state;
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
						</ContainerNotifications>
						<Fragment>
							<WrapperNotifications onClick={this.handleOpenFrequency}>
								{
									isFrequencyClose ? (
										<Fragment>
											<NotificationText>Frequência de Avisos</NotificationText>
											<NotificationText notificationItem>-</NotificationText>
										</Fragment>
									) : (
										<Fragment>
											<NotificationText>Frequência de Avisos</NotificationText>
											<NotificationText notificationItem>+</NotificationText>
										</Fragment>
									)
								}
							</WrapperNotifications>
							{isFrequencyOpen && this.renderFrequencias()}
						</Fragment>
						{ isModalOpen && this.renderModalFilter() }
					</Content>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
