/* eslint-disable no-mixed-spaces-and-tabs */

// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { values } from 'lodash';
// import { Link } from 'react-router-dom';

// Modules
import {
	addItem,
	removeItem,
	putFavorite,
	removeFavorite,
} from '../../dataflow/modules/oportunities-modules';
import { getAllOpportunitiesThunk } from '../../dataflow/thunks/opportunites-thunk';

// Images
import shareIcon from '../../assets/icon/lupa.svg';
import start from '../../assets/icon/estrela.svg';
import startHover from '../../assets/icon/estrela-cinza.svg';
import FilterImg from '../../assets/icon/icon_menu_input.svg';


// Components
import DetailsOportunities from './DetailsOportunities';
import MenuResponsive from '../MenuResponsive';
import Footer from '../Footer';
import ModalFilter from '../ModalFilter';

const mapStateToProps = (state) => ({
	keywords: state.oportunities.cardFilter.keywords,
	oportunities: state.oportunities.oportunities,
	oportunitiesList: state.oportunities.oportunitiesList,
	favoriteList: state.oportunities.favoriteList,
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
});

const Container = styled.div`
  width: 75vw;
  border-radius: 0 4px 0 0 ;
  background: #fff;

	@media(max-width: 768px) {
		width: 95%;
		height: 100%;
		overflow-y: scroll;
	}

	@media(max-width: 375px) {
		width: 98%;
		height: 98%;
	}
`;

const Content = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperHead = styled.div`
  width: 100%;
  height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 648px) {
		display: none;
	}
`;

const WrapperHeadMobile = styled.div`
	display: none;
	@media (max-width: 648px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`;

const BoxHeader = styled.span`
	width: 60%;
  display: flex;
	align-items: center;
	@media(max-width: 1024px) {
		width: 40%;
	}
	@media(max-width: 768px) {
		width: 52%;
	}
`;

const HeaderText = styled.p`
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: bold;
	color: #116EA0;
	@media(max-width: 1024px) {
		padding: 0 1rem;
	}
`;

const WrapperForm = styled.div`
  max-width: 60%;
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
	flwx-wrap: wrap;
	@media (max-width: 648px) {
		width: 55%;
	}
`;

const Form = styled.div`
  width: 100%;
  display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 648px) {
		padding-right: 1rem;
		justify-content: flex-end;
	}
`;

const BoxInput = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	@media (max-width: 648px) {
		width: 20%;
	}
`;

const FormHead = styled.form`

`;

const TitleInput = styled.p`
	margin-right: .75rem;
  color: #116EA0;
  font-size: 0.875rem;
  font-weight: bold;

	@media(max-width: 768px) {
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
	z-index: 5;
	@media (max-width: 648px) {
    margin: 0;
    padding: 0;
		position: relative;
    justify-content: center;
	}
`;

const InputHead = styled.input`
	width: 85%;
	height: 95%;
  border:none;
	outline: none;
	font-size: 0.875rem;
	
	@media(max-width: 768px) {
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
	border: 0.5px solid #116EA0;
	align-items: flex-end;
	border-radius: 0 0 16px 16px;
	z-index: 2;
}
`;

const WrapInput = styled.div`
	z-index: 2;
`;

const ListKeyword = styled.div`
	position: relative;
`;

const KeywordText = styled.li`
	width: auto;
	height: 20px;
	margin: 0.5rem 0.35rem 0 0;
	padding: 0 .5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #01B0B7;
	border-radius: 10px;
	list-style:none;
	font-size: .85rem;
	color: #404040;
`;

const ClosedKeyword = styled.button`
	width: 15px;
	height: 15px;
	position: absolute;
	top: -.125rem;
	right: 0;
	background: #FFFFFF;
	opacity: 0.3;
	border: 0.5px solid #115680;
	border-radius: 19px;
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
	border-radius: 0px 0px 16px 16px;
	opacity: 1;
	font: Regular 14px/46px Eurostile;
	color: #FFFFFF;
	outline: none;
	border: none;
	cursor: pointer;
`;

const ImgShare = styled.img`
	padding: 0 .85rem;
	cursor: pointer;
	@media (max-width: 648px) {
		padding: 0;
    position: absolute;
	}
`;

const AddKeyword = styled.button`
	width: 25%;
	height: 100%;
	background: none;
	color: #116EA0;
	font-size: 1.35rem;
	border: none;
	outline: none;
`;

const ImgFilter = styled.img`
	padding-right: 1rem;
`;

const Wraptext = styled.ul`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	padding: .5rem;
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
	outline: none;

	@media(max-width: 768px) {
		width: 85px;
		font-size: .75rem;		
	}
	@media(max-width: 648px) {
		width: 15%;
	}
`;

const WrapperTable = styled.div`
  width: 100%;
	padding: 0 1rem;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fff;
	@media(max-width: 648px) {
		overflow: scroll;
	}
`;

const Table = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 5px;
  >:nth-child(odd) {
    background: #F7F7F7; 
  }
`;

const HeaderRow = styled.div`
  width: 100%;
  height: 32px; 
	display: flex;
	align-items: center;
  border-radius: 4px;
  color: #8C8C8C;
`;

const TableRow = styled.div`
  width: 100%;
  height: 32px; 
	display: flex;
	align-items: center;
  border-radius: 4px;
  color: #8C8C8C;
	cursor: pointer;
  &:hover {
    transition: all .2s ease; 
    color: #404040;
  }
`;

const TableHeader = styled.span`
  width: ${(props) => (props.boxWidth ? '100	px' : '100%')};
  padding-left: 1rem;
	margin-right: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

const TableBody = styled.span`
	width: ${(props) => (props.spanWidth ? '65px' : '80%')};;
  padding-left: 1rem;
	margin-right: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
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
			isModalOpen: false,
		};
	}

	componentDidMount() {
		this.props.getAllOpportunitiesThunk(this.state.opportunities);
	}

	hoverFavorites = () => {
		this.setState({
			hoverFavorites: !this.state.hoverFavorites,
		});
	}

	handleKeyPress = (event) => {
		event.preventDefault();
		const keyword = this.inputSearch.value.replace(' ', '').trim();
		const alreadyExisting = this.props.keywords.filter(item => item === keyword).length > 0;
		if (keyword.length > 0 && !alreadyExisting) {
			event.preventDefault();
			this.props.addItem(keyword);
		}
		this.inputSearch.value = '';
	}	

	handleKeyClick = (event) => {
		if (event) {
			event.preventDefault();
			this.props.addItem(this.state.keywords);
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.addList();
	}

	handleOpenModal = () => {
		this.resetInput()
		const { isModalOpen } = this.state;
		this.setState({ isModalOpen: !isModalOpen });
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
		};

		return (
			<ListKeyword
				key={keyword}
			>
				<KeywordText>{keyword}</KeywordText>
				<ClosedKeyword onClick={handleClick}>X</ClosedKeyword> 
			</ListKeyword>
		)
	});

	handleInputSearch = () => {
		this.setState({ inputSearch: true });
	}

	resetInput = () => {
		this.setState({ inputSearch: false });
	}

	handleSearchInput = () => (
		<>
		<FormHead onSubmit= {this.handleKeyPress}>
			<LabelBox 
				borderRadius= {this.state.inputSearch ? '16px 16px 0 0' : '1rem'}
			>
				<InputHead
					ref={(node) => { this.inputSearch = node; }}
					onFocus= {this.handleInputSearch}
					placeholder= "Digite aqui para pesquisar"
				/>
				<AddKeyword
				>+</AddKeyword>
			</LabelBox>
		</FormHead>
		{this.state.inputSearch && (			
			<WrapperKeyword>
				<Wraptext>
					{this.props.keywords.length > 0 && this.renderList() }
				</Wraptext>
				<BtnCreateFilter onClick={this.handleOpenModal}>
					<ImgFilter src={FilterImg}/>
					Salvar Filtro
				</BtnCreateFilter>
			</WrapperKeyword>
		)}
		</>
	)

	handleFavorite = (event, oportunityId) => {
		event.stopPropagation();
		this.props.putFavorite(oportunityId);
	}

	handleDesfavor  = (event, oportunityId) => {
		event.stopPropagation();
		this.props.removeFavorite(oportunityId);
	}

	handleModalOportunities = () => {
		const { isOportunitesModal } = this.state;
		this.setState({ isOportunitesModal: !isOportunitesModal });
	}

	renderModalOportunities = () => (
		<DetailsOportunities handleModalOportunities={this.handleModalOportunities} />
	)

	showFavorites = () => {
		const { oportunities } = this.props;

		const filterFaves = values(oportunities).filter((item) => item.favorite);

		this.setState({ filterFaves });
		console.log('oioio', filterFaves);
	}

	handleOpotunity = () => {
		const { isShowFavorites } = this.state;

		this.setState({ isShowFavorites: !isShowFavorites });
		console.log('favorito', this.state.isShowFavorites);
	}

	render() {
		const {
			isOportunitesModal, isShowFavorites, inputShare, isModalOpen,
		} = this.state;
  	return (
			<Fragment>
				<MenuResponsive />
				<Container>
					<Content>
						<WrapperHead>
							<BoxHeader>
								<HeaderText>Oportunidades selecionadas</HeaderText>
							</BoxHeader>
							<WrapperForm>
								<Form onSubmit={this.handleKeyPress}>
									<BoxInput>
										<TitleInput>Pesquisar</TitleInput>
										<WrapInput>
											{this.handleSearchInput()}
											{this.state.inputSearch &&
												<Overlay
													onClick={this.resetInput}
												></Overlay>
											}
										</WrapInput>
									</BoxInput>
									<Button
										type="button"
										value="1"
										onClick = {this.handleOpotunity}
										style={{
											backgroundColor: this.state.hoverFavorites ? '#F9BE38' : '#F7F7F7',
											color: this.state.hoverFavorites ? '#fff' : '#404040',
										}
										}
									>
										<img src={this.state.hoverFavorites ? startHover : start}/>
									Favoritos
									</Button>
								</Form>
							</WrapperForm>
						</WrapperHead>
						{this.renderOportunity}
						<WrapperHeadMobile>
							<BoxHeader>
								<HeaderText>Oportunidades</HeaderText>
							</BoxHeader>
							<WrapperForm>
								<Form onSubmit={this.handleKeyPress}>
									<BoxInput>
										<TitleInput>Pesquisar</TitleInput>
										<LabelBox mobile>
											<ImgShare src={shareIcon}/>
										</LabelBox>
									</BoxInput>
									<Button
										type="button"
										value="1"
										onClick={this.renderOportunity}
										style={{
											backgroundColor: this.state.hoverFavorites ? '#F9BE38' : '#F7F7F7',
											color: this.state.hoverFavorites ? '#fff' : '#404040',
										}
										}
									>
										<img src={this.state.hoverFavorites ? startHover : start}/>
									</Button>
								</Form>
								<WrapperKeyword>
									{this.props.keywords.length > 0 ? this.renderList() : null}
								</WrapperKeyword>
							</WrapperForm>
						</WrapperHeadMobile>

					</Content>
					<WrapperTable>
						<Table>
							<HeaderRow>
								<TableHeader boxWidth><img src={start}/></TableHeader>
								<TableHeader boxWidth>Fit</TableHeader>
								<TableHeader>Categoria</TableHeader>
								<TableHeader>Id</TableHeader>
								<TableHeader>Título e descrição</TableHeader>
								<TableHeader>Prazo</TableHeader>
							</HeaderRow>

							<Fragment>
								{isShowFavorites ? this.renderOportunity() : null}
							</Fragment>


							{values(this.props.oportunities).map((item) => {
								const isFavorite = !(this.props.favoriteList.filter((i) => i === item.oportunityId).length === 0)

								const handleFavorite = (event) => {
									if (isFavorite) {
										console.log('passei corredp', event)
										{/* this.handleFavorite(event, item.oportunityId); */}
									} else {
										console.log('to parado', event)
										this.handleDesfavor(event, item.oportunityId);
									}
								}
								return (
								<TableRow key={item} onClick={this.handleModalOportunities}>
									<TableBody
										spanWidth
										onClick={handleFavorite}
									>
										<img src={isFavorite ? start : startHover}/>
									</TableBody>
									<TableBody spanWidth>{item.fit}</TableBody>
									<TableBody>{item.category}</TableBody>
									<TableBody>{item.oportunityId}</TableBody>
									<TableBody>{item.titleDescription}</TableBody>
									<TableBody>
										{item.deadLineInitial}
										{item.deadLineLastOne}
									</TableBody>
								</TableRow>
							)})}
						</Table>
						{/* {isShowFavorites && this.showFavorites()} */}
					</WrapperTable>
					<Fragment>
						{ isOportunitesModal && this.renderModalOportunities() }
						{ isModalOpen && this.renderModalFilter() }
					</Fragment>
				</Container>
				<Footer />
			</Fragment>
  	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RelevanceMatch);
