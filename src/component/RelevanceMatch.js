/* eslint-disable no-mixed-spaces-and-tabs */

// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

// Modules
import { addItem, putFavorite } from '../dataflow/modules/Search-Modules';
import { getAllOpportunitiesThunk } from '../dataflow/thunks/opportunites-thunk.js';

import start from '../assets/icon/estrela.svg';
import startHover from '../assets/icon/estrela-cinza.svg';

// Components
import DetailsOportunities from './DetailsOportunities';

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => {
		dispatch(addItem(payload));
	},
	putFavorite: (payload) => {
		dispatch(putFavorite(payload));
	},
	getAllOpportunitiesThunk: (info) => {
		dispatch(getAllOpportunitiesThunk(info));
	},
});

const mapStateToProps = (state) => ({
	search: state.search,
});


const Container = styled.div`
  width: 75vw;
  height: 95vh;
  border-radius: 0 4px 0 0 ;
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperHead = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxHeader = styled.span`
  display: flex;
  align-items: center;
`;

const HeaderText = styled.p`
  width: 251px;
  font-size: 1rem;
  font-weight: bold;
  color: #116EA0; 
`;

const WrapperForm = styled.div`
  width: auto;
  max-width: 60%;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #116EA0;
  font-size: 0.875rem;
  font-weight: bold;
  padding-right: 2rem;
`;

const InputHead = styled.input`
  width: 251px;
  height: 32px;
  margin-left: .5rem;
  padding-left: 1rem;
  border-radius: 16px;
  border: solid #116EA0 .5px;
`;

const Button = styled.button`
  width: 103px;
  height: 32px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid #E6E6E6;
  border-radius: 16px;
  color: {this.state.favorites ? "red" : "blue"};
  font-size: .875rem;
`;

const WrapperTable = styled.div`
  width: 100%;
  height: 90%; 
  display: flex;
  justify-content: center;
  background: #fff;
`;

const Table = styled.table`
  background: #fff;
  width: 97%;
  border-radius: 5px;
  >:nth-child(odd) {
    background: #F7F7F7; 
  }
`;

const HeaderRow = styled.tr`
  width: 90vw;
  height: 32px; 
  border-radius: 4px;
  color: #8C8C8C;
`;

const TableRow = styled.tr`
  width: 90vw;
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
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  color: #8C8C8C;
  font-weight: 500;
`;

// const apiOpportunities = {
// 	baseUrl: 'http://petronect-app-core-api-dev-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api/opportunities',
// };

class RelevanceMatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			data: [],
			searchString: [],
			opportunities: [],
			selectItem: [
				{
					favorites: <img src={this.favorite ? start : startHover} onClick={this.handleFavorite} />,
					fit: 'Test1',
					category: 'Test2',
					id: 'Test3',
					titleDescription: 'Test4',
					deadLineInitial: '18/06/19 - ',
					deadLineLastOne: '28/08/19',
				},
			],
			hoverFavorites: false,
			favorite: false,
			isOportunitesModal: false,
		};
	}

	componentDidMount() {
		this.props.getAllOpportunitiesThunk(this.state.opportunities);
		console.log('oioioi');
	}


	getData = () => { // fazer um get na API e buscar a palavra chave
		axios.get('')
			.then((responseData) => {
				// const opportunities = res.data;
				// console.log('chegouuuu', responseData.data);
				this.setState({ data: responseData, searchString: responseData });
			})
			.catch((error) => this.setState({ error }));
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
			search: event.target.value,
		});
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.props.addItem(this.state.search);
			console.log('enter press here! ');
		}
	}

	handleFavorite = () => {
		this.setState({
			favorite: !this.state.favorite,
		});
		this.props.putFavorite(this.state.favorite);
		console.log('handleFavorite', this.state.favorite);
	}

	handleModalOportunities = () => {
		const { isOportunitesModal } = this.state;
		this.setState({ isOportunitesModal: !isOportunitesModal });
	}

	renderModalOportunities = () => (
		<DetailsOportunities handleModalOportunities={this.handleModalOportunities} />
	)

	render() {
		const { isOportunitesModal } = this.state;
  	return (
  		<Container>
  			<Content>
  				<WrapperHead>
  					<BoxHeader>
  						<HeaderText>Oportunidades selecionadas</HeaderText>
  					</BoxHeader>
  					<WrapperForm>
  						<Form onSubmit={this.handleKeyPress}>
  							<Label>
                Pesquisar
  								<InputHead placeholder="Digite aqui para pesquisar"
  									onChange={this.handleInputChange}
  									onKeyPress={this.handleKeyPress}
  								></InputHead>
  							</Label>
  							<Button
  								type="button"
  								value="1"
  								onClick = {this.hoverFavorites}
  								style={{
  									backgroundColor: this.state.hoverFavorites ? '#F9BE38' : '#F7F7F7',
  									color: this.state.hoverFavorites ? '#fff' : '#404040',
  								}
  								}
  							>
  								<img src={this.state.hoverFavorites ? startHover : start}/>
                Favoritos</Button>
  						</Form>
  					</WrapperForm>
  				</WrapperHead>
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

  					{(this.state.selectItem || []).map((item) => (
  						<TableRow key={item} onClick={this.handleModalOportunities}>
  							<TableBody>{item.favorites}</TableBody>
  							<TableBody>{item.fit}</TableBody>
  							<TableBody>{item.category}</TableBody>
  							<TableBody>{item.id}</TableBody>
  							<TableBody>{item.titleDescription}</TableBody>
  							<TableBody>
  								{item.deadLineInitial}
  								{item.deadLineLastOne}
  							</TableBody>
  						</TableRow>
  					))}
  				</Table>
  			</WrapperTable>
				<Fragment>
					{ isOportunitesModal && this.renderModalOportunities() }
				</Fragment>
  		</Container>
  	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RelevanceMatch);
