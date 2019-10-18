/* eslint-disable no-mixed-spaces-and-tabs */

// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { values } from 'lodash';

// Modules
import { addItem, removeItem, putFavorite } from '../../dataflow/modules/oportunities-modules';
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

const mapStateToProps = (state) => ({
	keyword: state.oportunities.keyword,
	oportunities: state.oportunities.oportunities,
	oportunitiesList: state.oportunities.oportunitiesList,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (info) => {
		dispatch(addItem(info));
	},
	removeItem: (payload) => {
		dispatch(removeItem(payload))
	},
	putFavorite: (info) => {
		dispatch(putFavorite(info));
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
  width: 50%;
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
	position: relative;
  display: flex;
	justify-content: space-between;
	@media (max-width: 648px) {
		padding-right: 1rem;
		justify-content: flex-end;
	}
`;

const BoxInput = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 648px) {
		// width: 35px;
		width: 20%;
	}
`;

const TitleInput = styled.p`
  color: #116EA0;
  font-size: 0.875rem;
  font-weight: bold;

	@media(max-width: 768px) {
		display: none;
	}
`;

const LabelBox = styled.label`
  height: 32px;
  width: 225px;
  padding-left: 1rem;
  border-radius: 16px 16px 0 0 ;
  border: solid #116EA0 .5px;
  display: flex;
  align-items: center;

	${'' /* @media(max-width: 768px) {
		width: 172px;
		height: 32px;
	} */}
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
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	background: #FFFFFF;
	border: 0.5px solid #116EA0;

	display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0 0 16px 16px;
}
`;

const KeiwordBox = styled.div`
	width: auto;
	height: 20px;
	margin-right: .5rem;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: #AADF00;
	border-radius: 10px;
	opacity: 0.2;
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

const KeiwordText = styled.p`
	padding: 0 .5rem;
	font-size: .85rem;
	color: #404040;
`;

const ClosedKeyword = styled.button`
	width: 20px;
	height: 20px;
	background: #FFFFFF;
	border: 0.5px solid #115680;
	border-radius: 19px;
`;

const ImgShare = styled.img`
	padding-left: .85rem;
	cursor: pointer;
	@media (max-width: 648px) {
		padding: 0;
    position: absolute;
	}
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

const Table = styled.table`
  background: #fff;
  width: 100%;
  border-radius: 5px;
  >:nth-child(odd) {
    background: #F7F7F7; 
  }
`;

const HeaderRow = styled.tr`
  width: 90%;
  height: 32px; 
  border-radius: 4px;
  color: #8C8C8C;
`;

const TableRow = styled.tr`
  width: 90%;
  height: 32px; 
  border-radius: 4px;
  color: #8C8C8C;
	cursor: pointer;
  &:hover {
    transition: all .2s ease; 
    color: #404040;
  }
`;

const TableHeader = styled.th`
  width: ${(props) => (props.boxWidth ? '50px' : 'auto')};
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

const TableBody = styled.td`
	// width: ;
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

class RelevanceMatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: '',
			data: [],
			searchString: [],
			hoverFavorites: false,
			isOportunitesModal: false,
			isShowFavorites: false,
			inputShare: false,
		};
	}

	componentDidMount() {
		this.props.getAllOpportunitiesThunk(this.state.opportunities);
	}

	hoverFavorites = () => {
		this.setState({
			hoverFavorites: !this.state.hoverFavorites,
		});
		console.log('hoverFavorites', this.state.hoverFavorites);
	}

	handleInputChange = (event) => {
		event.preventDefault();
		this.setState({
			keyword: event.target.value,
		});
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.props.addItem(this.state.keyword);
			console.log('enter press here!', this.state.keyword);
		}
	}

	removeItem = (event) => {
		this.props.removeItem(this.state.list);
	}

	handleClick = (event) => {
		event.preventDefault();

		this.props.addList();
	}

	renderList = () => {
		return this.props.keyword.map((keyword) => {

			const handleClick = () => {
				this.props.removeItem(keyword.oportunityId);
			};

			return 	(
				<KeiwordBox
					key={keyword.oportunityId}
					className='btn'
				>
					<KeiwordText>{keyword}{keyword.dane}</KeiwordText>
					<ClosedKeyword onClick={handleClick}>X</ClosedKeyword>
				</KeiwordBox>
			);
		});
	}

	handleInputShare = () => {
		const { inputShare } = this.state;
		this.setState({ inputShare: !inputShare });
	}

	handleInputFalse = () => (
		<>
			<InputHead placeholder="Digite aqui para pesquisar"
				onFocus={this.handleInputShare}
			></InputHead>
		</>
	)

	handleInput = () => (
		<>
			<div>
				<LabelBox>
					<InputHead placeholder="Digite aqui para pesquisar"
						onChange={this.handleInputChange}
						onKeyPress={this.handleKeyPress}
					></InputHead>
					{/* <ImgShare src={shareIcon}/> */}
					<p>+</p>
				</LabelBox>
				<WrapperKeyword>
					{this.props.keyword.length > 0 ? this.renderList() : null}
					<BtnCreateFilter>
					<img src={FilterImg}/>
					Salvar Filtro</BtnCreateFilter>
				</WrapperKeyword>
			</div>
		</>
	)

	handleFavorite = (event, oportunityId) => {
		event.stopPropagation();
		this.props.putFavorite(oportunityId);
		console.log('handleFavorite', oportunityId);
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

	renderShowFavorites = () => {
		const { isShowFavorites } = this.state;

		this.setState({ isShowFavorites: !isShowFavorites });
	}

	renderOportunity = () => {
		const {	oportunitiesList } = this.props;

		const list = oportunitiesList.hits;

		// values(list).filter((item) => item.favorite === true).map((item) => (
		// 	<TableRow key={item} onClick={this.handleModalOportunities}>
		// 		<TableBody>
		// 			<img src={start}/>
		// 		</TableBody>
		// 		<TableBody>{item.fit}</TableBody>
		// 		<TableBody>{item.category}</TableBody>
		// 		<TableBody>{item.oportunityId}</TableBody>
		// 		<TableBody>{item.titleDescription}</TableBody>
		// 		<TableBody>
		// 			{item.deadLineInitial}
		// 			{item.deadLineLastOne}
		// 		</TableBody>
		// 	</TableRow>
		// ));
		console.log('testets',list)
	}

	render() {
		const { isOportunitesModal, isShowFavorites, inputShare } = this.state;
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
										{this.handleInput()}
										{/* <------AQUI ENTRA O INPUTTTTT-------> */}
										{/* {inputShare ? this.handleInputFalse : this.handleInput} */}
										{/* <------AQUI ENTRA O INPUTTTTT-------> */}
									</BoxInput>
									<Button
										type="button"
										value="1"
										onClick = {this.showFavorites ? this.renderOportunity : this.renderOportunity }
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
										onClick={this.showFavorites}
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
									{this.props.keyword.length > 0 ? this.renderList() : null}
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
								{this.renderOportunity()}
							</Fragment>


							{values(this.props.oportunities).map((item) => (
								<TableRow key={item} onClick={this.handleModalOportunities}>
									<TableBody onClick={(event) => { this.handleFavorite(event, item.oportunityId); }}>
										<img src={item.favorite ? start : startHover}/>
									</TableBody>
									<TableBody>{item.fit}</TableBody>
									<TableBody>{item.category}</TableBody>
									<TableBody>{item.oportunityId}</TableBody>
									<TableBody>{item.titleDescription}</TableBody>
									<TableBody>
										{item.deadLineInitial}
										{item.deadLineLastOne}
									</TableBody>
								</TableRow>
							))}
						</Table>
						{/* {isShowFavorites && this.showFavorites()} */}
					</WrapperTable>
					<Fragment>
						{ isOportunitesModal && this.renderModalOportunities() }
					</Fragment>
				</Container>
				<Footer />
			</Fragment>
  	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RelevanceMatch);
