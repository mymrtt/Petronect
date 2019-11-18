// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Images
import deleteIcon from '../../assets/icon/delete.svg';
import searchIcon from '../../assets/icon/search.svg';
import closeIcon from '../../assets/icon/close-blue.svg';

// Components
import ButtoN from '../../component/Button';

// Redux
import { deleteKeywordThunk, getAllOpportunitiesThunk } from '../../dataflow/thunks/opportunities-thunk';
import { updateCard } from '../../dataflow/modules/opportunities-modules';

const mapDispatchToProps = (dispatch) => ({
	deleteKeywordThunk: (info) => {
		dispatch(deleteKeywordThunk(info));
	},
	updateCard: (info) => {
		dispatch(updateCard(info));
	},
	getAllOpportunitiesThunk: () => {
		dispatch(getAllOpportunitiesThunk());
	},
});

const Container = styled.div`
	margin-bottom: 1rem;
	width: 48%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 960px) {
		margin-bottom: 0;
		width: 100%;
		align-items: center;
		flex-direction: column;
	}
	@media (max-width: 648px) {
		min-height: 6.3rem;
    width: 100%;
	}
`;

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	border: .5px solid;
	border-color: ${(props) => props.border};
	border-radius: 4px;
	cursor: pointer;
	@media (max-width: 960px) {
		margin-bottom: 1rem;
		width: 83%;
	}
	@media (max-width: 648px) {
		margin-bottom: .5rem;
		width: 100%;
	}
`;

const WrapperCard = styled.div`
	padding: 0 1rem;
	height: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	background-color: ${(props) => props.background};
`;

const ContainerTags = styled.div`
	padding: 0.5rem 1rem;
	height: 3.7rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

const SuggestionsTags = styled.span`
	margin-right: 1rem;
	margin-bottom: ${(props) => props.tag && '.3rem'};
	padding: .2rem .4rem;
	border-radius: 10px;
	background-color: ${(props) => props.background};
`;

const SuggestionsText = styled.p`
	margin-right: ${(props) => props.suggestionsTitle && '1rem'};
	font-size: ${(props) => (props.suggestionsTitle ? '.75rem' : '.80rem')};
	color: ${(props) => (props.suggestionsTitle ? '#8C8C8C' : '#404040')};
`;

const Title = styled.p`
	color: ${(props) => (props.deleteTitle ? '#116EA0' : '#fff')};
	font-size: .90rem;
	font-weight: 600;
`;

const HeaderItemsText = styled.p`
	color: #fff;
	font-size: .90rem;
	font-weight: 600;
	
	@media(max-width: 648px) {
		display: none;
	}
`;

const Text = styled.p`
	font-size: .90rem;
	font-weight: 200;
	color: #959595;
	margin-bottom: ${(props) => (props.deleteText ? '2rem' : '0')};
`;

const Image = styled.img`
	margin-right: .2rem;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #40404040;
	z-index: 4;
`;

const ContainerDeleteModal = styled.div`
	padding: 0 3rem;
	width: 30rem;
	display: flex;
	flex-direction: column;
	border: #115680 .5px solid;
	border-radius: 8px;
	background-color: #fff;
	@media(max-width: 960px) {
		z-index: 1;
	}
	@media(max-width: 648px) {
		padding: 0 2rem;
		width: 95%;
	}
`;

const DeleteModalHeader = styled.div`
	position: relative;
	margin-bottom: 2rem;
	padding-top: 1.2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const CloseContainer = styled.div`
	position: absolute;
	left: 26rem;
	bottom: 1.5rem;
	width: 25px;
	height: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid #115680;
	border-radius: 50%;
	background-color: #fff;

	@media(max-width: 425px) {
		left: 21.5rem;
	}
	@media(max-width: 375px) {
		left: 18.5rem;
	}
	@media(max-width: 320px) {
		left: 15rem;
	}
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	color: #115680;
	border: none;
	background: transparent;
	cursor: pointer;
`;

const CloseImage = styled.img`
	width: 11px;
`;

const ContentDeleteModal = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ContainerDeleteButtons = styled.div`
	padding: 1rem 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const ContainerHeaderItems = styled.div`
	display: flex;
	align-items: center;
`;

const WrapperHeaderItems = styled.div`
	margin-left: .5rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class CardFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenDelete: false,
		};
	}

	handleOpenDeleteModal = (cardId) => {
		this.setState({ isOpenDelete: true, selectedCard: cardId });
	}

	handleCloseDeleteModal = () => {
		this.setState({ isOpenDelete: false });
	}

	handleRemoveNotification = () => {
		this.props.deleteKeywordThunk(this.state.selectedCard);
		this.handleCloseDeleteModal();
	};

	handleSearch = () => {
		this.props.updateCard({
			keywords: this.props.card.keywords,
		});
		this.props.history.replace('/match-relevancia');
		this.props.getAllOpportunitiesThunk();
	}

	renderDeleteModal = () => (
		<Overlay>
			<ContainerDeleteModal>
				<DeleteModalHeader>
					<Title deleteTitle>Deseja excluir a notificação {this.props.card.name}?</Title>
					<CloseContainer onClick={this.handleCloseDeleteModal}>
						<CloseButton>
							<CloseImage src={closeIcon} />
						</CloseButton>
					</CloseContainer>
				</DeleteModalHeader>
				<ContentDeleteModal>
					<Text deleteText>Ao confirmar esta ação a notificação "{this.props.card.name}" será excluído permanentemente do sistema.</Text>
					<ContainerDeleteButtons>
						<ButtoN
							width='10rem'
							height='3rem'
							color='#116EA0'
							backgroundColor='#fff'
							text='Cancelar'
							handleClick={this.handleCloseDeleteModal}
						/>
						<ButtoN
							width='10rem'
							height='3rem'
							color='#fff'
							backgroundColor='#116EA0'
							text='Confirmar'
							handleClick={this.handleRemoveNotification}
						/>
					</ContainerDeleteButtons>
				</ContentDeleteModal>
			</ContainerDeleteModal>
		</Overlay>
	)

	render() {
		const { card } = this.props;
		return (
			<Container>
				<Card
					background={card.color ? card.color : '#115680'}
					border={card.color ? card.color : '#115680'}
				>
					<WrapperCard
						background={card.color ? card.color : '#115680'}
					>
						<Title tagTitle>
							{card.name}
						</Title>
						<ContainerHeaderItems>
							<WrapperHeaderItems onClick={this.handleSearch}>
								<Image src={searchIcon} />
								<HeaderItemsText>Buscar</HeaderItemsText>
							</WrapperHeaderItems>
							<WrapperHeaderItems onClick={() => this.handleOpenDeleteModal(card.filterId)}>
								<Image src={deleteIcon} />
								<HeaderItemsText>Excluir</HeaderItemsText>
							</WrapperHeaderItems>
						</ContainerHeaderItems>
					</WrapperCard>
					<ContainerTags>
						{
							card.keywords.map((tag) => (
								<SuggestionsTags
									tag
									background={card.color ? `${card.color}30` : '#11568030'}
									key={tag.name}
								>
									<SuggestionsText suggestionsTags>{tag}</SuggestionsText>
								</SuggestionsTags>
							))
						}
					</ContainerTags>
				</Card>
				{ this.state.isOpenDelete && this.renderDeleteModal()}
			</Container>
		);
	}
}

export default connect(null, mapDispatchToProps)(CardFilter);
