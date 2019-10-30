// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled, {css} from 'styled-components';
import { values } from 'lodash';
import ReactScrollbar from 'react-scrollbar';

// Modules
import {
	addItem,
	removeItem,
	putFavorite,
	removeFavorite,
} from '../../dataflow/modules/opportunities-modules';
import { getAllOpportunitiesThunk, getOpportunityByIdThunk } from '../../dataflow/thunks/opportunities-thunk';

// Images
import searchIcon from '../../assets/icon/lupa.svg';
import start from '../../assets/icon/estrela.svg';
import startHover from '../../assets/icon/estrela-cinza.svg';
import FilterImg from '../../assets/icon/icon_menu_input.svg';
import DeletTag from '../../assets/icon/delete.svg';

// Components
import DetailsOportunities from './DetailsOportunities';
import MenuResponsive from '../MenuResponsive';
import Footer from '../Footer';
import ModalFilter from '../ModalFilter';

const mapStateToProps = (state) => ({
	keywords: state.opportunities.cardFilter.keywords,
	opportunities: state.opportunities.opportunities,
	oportunitiesList: state.opportunities.oportunitiesList,
	favoriteList: state.opportunities.favoriteList,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (info) => {
		dispatch(addItem(info));
	},
	removeItem: (info) => {
		dispatch(removeItem(info));
	},
	putFavorite: (info) => {
		dispatch(putFavorite(info));
	},
	removeFavorite: (info) => {
		dispatch(removeFavorite(info));
	},
	getAllOpportunitiesThunk: (info) => {
		dispatch(getAllOpportunitiesThunk(info));
	},
	getOpportunityByIdThunk: (info) => {
		dispatch(getOpportunityByIdThunk(info));
	},
});

const Container = styled.div`
	width: 80%;
  border-radius: 0 4px 0 0;
  background: #fff;

	@media(max-width: 960px) {
		border-radius: 4px 4px 0 0;
		width: 95%;
		max-height: 100vh;
		height: 100%;
		margin-top: 3.5rem;
	}
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperHead = styled.div`
  width: 100%;
  height: 12%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.25rem 0;
	@media (max-width: 648px) {
		display: none;
	}
`;

const WrapperHeadMobile = styled.div`
	display: none;
	@media (max-width: 648px) {
		width: 100%;
		padding: 1rem 0;
		display: flex;
		justify-content: space-between;
	}
`;

const BoxHeader = styled.span`
	width: 60%;
  display: flex;	
	align-items: center;
	@media(max-width: 1024px) {
		width: 45%;
	}
	@media(max-width: 648px) {
		width: auto;
	}
`;

const HeaderText = styled.p`
  padding: 0 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
	color: #116EA0;
	@media(max-width: 1024px) {
		padding: 0 1rem;
	}
`;

const WrapperForm = styled.div`
  width: 60%;
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
	flwx-wrap: wrap;
	@media (max-width: 648px) {
		width: 100%;
	}
`;

const Form = styled.div`
  width: 100%;
  display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 648px) {
		padding-right: 1rem;;
	}
`;

const BoxInput = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 648px) {
		width: 75%;
		position: relative;
		justify-content: flex-end;
	}
`;

const FormHead = styled.form`
	
`;

const TitleInput = styled.p`
	margin-right: .75rem;
  color: #116EA0;
  font-size: 0.875rem;
  font-weight: bold;

	@media(max-width: 960px) {
		display: none;
	}
`;

const LabelBox = styled.label`
  height: 2rem;
  width: 225px;
  padding-left: 1rem;
	border-radius: ${(props) => props.borderRadius};
  border: solid #116EA0 .5px;
  display: flex;
  align-items: center;

	@media(max-width: 648px) {
		width: 100%;
	}
`;

const InputHead = styled.input`
	width: 85%;
	height: 95%;
  border:none;
	font-size: 0.875rem;
	outline: none;
	
	@media(max-width: 960px) {
		font-size: 0.75rem;
	}
`;

const WrapperKeyword = styled.div`
	width: 225px;
	height: auto;
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	background: #fff;
	border: solid #116EA0;
	border-width: 0 1px 1px 1px;
	align-items: flex-end;
	border-radius: 0 0 16px 16px;
	z-index: 2;

	@media(max-width: 648px) {
		width: 100%;
		position: absolute;
	}
`;

const WrapInput = styled.div`
	z-index: 2;

	@media(max-width: 648px) {
		width: 100%;
		${'' /* display: flex;
		justify-content: flex-end; */}
	}
`;

const ListKeyword = styled.div`
	position: relative;
	margin: .35rem
`;

const KeywordText = styled.li`
	width: auto;
	margin: 0.5rem 0.35rem 0 0;
	padding: .25rem .25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #01B0B730;
	border-radius: 10px;
	list-style:none;
	font-size: .85rem;
	color: #40404090;
	word-break: break-all;
`;

const ContainerText = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextNull = styled.p`
	padding-bottom: 1rem;
	font-size: .85rem;
	color: #115680;
`;

const ClosedKeyword = styled.button`
	position: absolute;
	top: -.125rem;
	right: 0;
	border: none;
	border-radius: 50%;
	cursor: pointer;
`;

const Overlay = styled.div` 
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -2;
`;

const BtnCreateFilter = styled.button`
	width: 251px;
	height: 33px;
	background: #116EA0;
	border-radius: 0px 0px 15px 15px;
	opacity: 1;
	font: Regular 14px/46px Eurostile;
	color: #FFFFFF;
	border: none;
	cursor: pointer;

	@media(max-width: 648px) {
		width: 100%;
	}
`;

const ImgSearch = styled.img`
	display: none;

	@media (max-width: 648px) {
		padding: 0;
		padding: 0 .85rem;
		cursor: pointer;
	}
`;

const AddKeyword = styled.button`
	width: 25%;
	height: 100%;
	background: none;
	color: #116EA0;
	font-size: 1.35rem;
	border: none;
	cursor: pointer;
`;

const ImgFilter = styled.img`
	padding-right: 1rem;
`;

const Wraptext = styled.ul`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	background: #fff;
`;

const Button = styled.button`
  width: 103px;
  height: 32px;
	margin-left: 1rem;
	padding: 0 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid #E6E6E6;
  border-radius: 16px;
  color: {this.state.favorites ? "red" : "blue"};
  font-size: .875rem;
	cursor: pointer;

	@media(max-width: 960px) {
		width: 85px;
		font-size: .75rem;		
	}
	@media(max-width: 648px) {
		width: 15%;
	}
`;

const FavoriteImage = styled.img`
	margin-right: .4rem;
`;

const ContainerMessageOpportunity = styled.div`
	max-height: 80vh;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
`;

const TextMessageOpportunity = styled.p`
	font-size: 1.3rem;
	color: #115680;
	text-align: center;
	@media(max-width: 640px) {
		font-size: 1rem;
	}
	@media(max-width: 425px) {
		font-size: .75rem;
	}
`;

const WrapperTable = styled.div`
	position: relative;
  width: 100%;
	height: 75vh;
	max-height: 75vh;
	padding: 0 1rem;
  display: flex;
	flex-direction: column;
	align-items: center;
	background: #fff;
	@media(max-width: 648px) {
		padding: 0 1rem 1rem 1rem;
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

const HeaderRow = styled.th`
  width: 100%;
  height: 32px; 
	display: flex;
	align-items: center;
  border-radius: 4px;
  color: #8C8C8C;
	
	@media(max-width: 960px) {
		display: none;
	}
`;

const TableRow = styled.div`
  width: 100%;
	padding: 1rem 0;
	display: flex;
	align-items: center;
  border-radius: 4px;
  color: #8C8C8C;
	cursor: pointer;
  &:hover {
    transition: all .2s ease; 
    color: #404040;
  }

	@media(max-width: 960px) {
		flex-wrap: wrap;
	}

	@media(max-width: 420px) {
		flex-wrap: wrap;
		align-items: flex-end;
		padding: .5rem 0;
	}
`;

const Table = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;

  >:nth-child(odd) {
    background: #F7F7F7; 
  }
`;

// const BoxTableBody = styled.div`
// 		display: flex;
// 		width: auto;

// 	@media(max-width: 420px) {
// 		height: 100%;
// 		flex-direction: column-reverse;
// 		justify-content: space-between;
// 	}

// 	@media(min-width: 768px) {
// 	}
// `;

const TableHeader = styled.div`
  width: ${(props) => (props.boxWidth ? '100px' : '100%')};
  padding-left: 1rem;
	margin-right: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

const TableBody = styled.p`
	width: ${(props) => (props.spanWidth ? '65px' : '80%')};
  padding-left: 1rem;
	margin-right: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;

	@media(max-width: 960px) {
		width: auto;
		display: ${(props) => (props.displayNone ? 'none' : 'static')}
	}

	@media(max-width: 648px) {
		display: ${(props) => (props.displayNone ? 'none' : 'static')}
		width: auto;
		margin:.25rem;
	}
`;

const ResultText = styled.p`
	padding-left: 1.5rem;
	margin-bottom: .25rem;
	align-self: flex-start;
	font: 300 0.75rem Eurostile;
`;


class RelevanceMatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: '',
			data: [],
			searchString: [],
			hoverFavorites: false,
			isOportunitesModal: false,
			isShowFavorites: false,
			inputSearch: false,
			inputSearchMobile: false,
			isModalOpen: false,
		};
	}

	hoverFavorites = () => {
		this.setState({
			hoverFavorites: !this.state.hoverFavorites,
		});
		console.log('hover:', this.hoverFavorites)
	}

	handleKeyPress = (event) => {
		event.preventDefault();
		const keyword = this.inputSearch.value.trim();
		const alreadyExisting = this.props.keywords.filter((item) => item === keyword).length > 0;
		if (keyword.length > 0 && !alreadyExisting) {
			event.preventDefault();
			this.props.addItem(keyword);
			this.props.getAllOpportunitiesThunk();
		}
		this.inputSearch.value = '';
		this.setState({
			textNull: false,
		});
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.addList();
	}

	handleOpenModal = () => {
		const { isModalOpen } = this.state;
		if (this.props.keywords.length === 0) {
			this.setState({ textNull: true });
		} else {
			this.resetInput();
			this.setState({
				isModalOpen: !isModalOpen,
				textNull: false,
			});
		}
	}

	renderModalFilter = () => (
		<ModalFilter handleOpenModal={this.handleOpenModal} />
	)

	handleClick = (event) => {
		event.preventDefault();

		this.props.addList();
	}

	renderList = () => this.props.keywords.map((keyword) => {
		const handleClick = () => {
			this.props.removeItem(keyword);
			this.props.getAllOpportunitiesThunk();
		};

		return (
			<ListKeyword
				key={keyword}
			>
				<KeywordText>{keyword}</KeywordText>
				<ClosedKeyword onClick={handleClick}><img src={DeletTag} /></ClosedKeyword>
			</ListKeyword>
		);
	});

	handleInputSearch = () => {
		this.setState({ inputSearch: true });
	}

	resetInput = () => {
		this.setState({ inputSearch: false });
	}

	handleSearchMobile = () => {
		this.setState({ inputSearchMobile: true });
	}

	handleFavorite = (event, opportunityId) => {
		event.stopPropagation();
		this.props.putFavorite(opportunityId);
	}

	handleDesfavor = (event, opportunityId) => {
		event.stopPropagation();
		this.props.removeFavorite(opportunityId);
	}

	handleModalOportunities = (opportunity) => {
		this.setState((prevState) => ({
			isOportunitesModal: !prevState.isOportunitesModal,
		}));
		this.props.getOpportunityByIdThunk(opportunity);
	}

	renderModalOportunities = () => (
		<DetailsOportunities handleModalOportunities={this.handleModalOportunities} />
	)

	handleOpotunity = () => {
		this.setState((prevState) => ({
			isShowFavorites: !prevState.isShowFavorites,
		}));	
		this.setState({
			hoverFavorites: !this.state.hoverFavorites,
		});
	}

	renderSearchInput = () => (
		<>
			<FormHead onSubmit={this.handleKeyPress}>
				<LabelBox
					borderRadius={this.state.inputSearch ? '16px 16px 0 0' : '1rem'}
				>
					<InputHead
						ref={(node) => { this.inputSearch = node; }}
						onFocus={this.handleInputSearch}
						placeholder="Digite aqui para pesquisar"
					/>
					<AddKeyword
					>+</AddKeyword>
				</LabelBox>
			</FormHead>
			{this.state.inputSearch}
			{this.state.inputSearch && (
				<WrapperKeyword>
					<Wraptext>
						{this.props.keywords.length > 0 && this.renderList()}
					</Wraptext>
					<ContainerText>
						{this.state.textNull && <TextNull> Por favor, insira uma palavra-chave.</TextNull>}
					</ContainerText>
					<BtnCreateFilter onClick={this.handleOpenModal}>
						<ImgFilter src={FilterImg} />
						Salvar Notificação
					</BtnCreateFilter>
				</WrapperKeyword>
			)}
		</>
	)

	renderHeader = (list) => (
		<Fragment>
			<ResultText>
				{list.length} Resultado{list.length > 1 && 's'}
			</ResultText>
			<Table>
				<HeaderRow>
					<TableHeader boxWidth><img src={start} /></TableHeader>
					<TableHeader boxWidth>Relevância</TableHeader>
					<TableHeader>Empresa</TableHeader>
					<TableHeader>Número</TableHeader>
					<TableHeader>Título e Descrição</TableHeader>
					<TableHeader>Data Inicio</TableHeader>
					<TableHeader>Data Final</TableHeader>
				</HeaderRow>
			</Table>
		</Fragment>
	);

	renderOpportunityList = () => {
		let list = [];

		if (this.state.isShowFavorites) {
			list = this.props.favoriteList.map((item) => this.props.opportunities[item]);
		} else {
			list = values(this.props.opportunities);
		}

		return !(values(this.props.opportunities).length > 0 && this.props.keywords.length > 0)
			? (
				<ContainerMessageOpportunity>
					<TextMessageOpportunity>
						Pesquise por uma palavra-chave para visualizar oportunidades.
					</TextMessageOpportunity>
				</ContainerMessageOpportunity>
			)
			: (
				<Fragment>
					<WrapperTable>
						<ReactScrollbar
							speed={0.8}
							horizontal={false}
							smoothScrolling
							stopScrollPropagation
						>
							{this.renderHeader(list)}
							{list.map((item) => {
								const isFavorite = !(this.props.favoriteList.filter((i) => i === item.opportunityId).length === 0);

								const handleFavorite = (event) => {
									if (isFavorite) {
										this.handleDesfavor(event, item.opportunityId);
									} else {
										this.handleFavorite(event, item.opportunityId);
									}
								};

								return (
									<TableRow key={item} onClick={() => this.handleModalOportunities(item)}>
										<TableBody
											spanWidth
											onClick={handleFavorite}
										>
											<img src={isFavorite ? start : startHover} />
										</TableBody>
										<TableBody spanWidth>{item.fit}%</TableBody>
										<TableBody >{item.company}</TableBody>
										<TableBody displayNone>{item.opportunityId}</TableBody>
										<TableBody >{item.titleDescription}</TableBody>
										<TableBody>
											{item.deadLineInitial}
										</TableBody>
										<TableBody>
											{item.deadLineLastOne}
										</TableBody>
									</TableRow>
								);
							})}
						</ReactScrollbar>
					</WrapperTable>
				</Fragment>
			);
	};


	render() {
		const { isOportunitesModal, isModalOpen, inputSearchMobile } = this.state;
		return (
			<Fragment>
				<MenuResponsive
					closedMenu={this.resetInput}
					currentScreen={this.props.currentScreen}
					closeInput={this.resetInput}
					history={this.props.history} />
				<Container>
					<Content>
						<WrapperHead>
							<BoxHeader>
								<HeaderText>Oportunidades</HeaderText>
							</BoxHeader>
							<WrapperForm>
								<Form onSubmit={this.handleKeyPress}>
									<BoxInput>
										<TitleInput>Pesquisar</TitleInput>
										<WrapInput>
											{this.renderSearchInput()}
											{this.state.inputSearch
												&& <Overlay
													onClick={this.resetInput}
												></Overlay>
											}
										</WrapInput>
									</BoxInput>
									<Button
										type="button"
										value="1"
										onClick={this.handleOpotunity}
										disabled
										style={{
											backgroundColor: this.state.hoverFavorites ? '#F9BE38' : '#F7F7F7',
											color: this.state.hoverFavorites ? '#fff' : '#404040',
										}}
									>
										<FavoriteImage src={this.state.hoverFavorites ? startHover : start} />
										Favoritos
									</Button>
								</Form>
							</WrapperForm>
						</WrapperHead>
						{this.renderOpportunity}
						<WrapperHeadMobile>
							<BoxHeader>
								<HeaderText
									style={{ display: inputSearchMobile ? 'none' : 'flex' }}
								>Oportunidades</HeaderText>
							</BoxHeader>
							<WrapperForm>
								<Form onSubmit={this.handleKeyPress}>
									<BoxInput>
										<TitleInput>Pesquisar</TitleInput>
										{/* {this.state.inputSearchMobile && this.renderSearchInput()} */}
										<WrapInput>
											{this.state.inputSearchMobile && this.renderSearchInput()}
											{this.state.inputSearch
												&& <Overlay
													onClick={this.resetInput}
												></Overlay>
											}
										</WrapInput>
										<ImgSearch src={searchIcon}
											style={{ display: inputSearchMobile ? 'none' : 'flex' }}
											onClick={this.handleSearchMobile} />
									</BoxInput>
									<Button
										type="button"
										value="1"
										onClick={this.handleOpotunity}
										disabled
										style={{
											backgroundColor: this.state.hoverFavorites ? '#F9BE38' : '#F7F7F7',
											color: this.state.hoverFavorites ? '#fff' : '#404040',
										}
										}
									>
										<img src={this.state.hoverFavorites ? startHover : start} />
									</Button>
								</Form>
							</WrapperForm>
						</WrapperHeadMobile>
					</Content>
					{this.renderOpportunityList()}
					<Fragment>
						{isOportunitesModal && this.renderModalOportunities()}
						{isModalOpen && this.renderModalFilter()}
					</Fragment>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RelevanceMatch);
