import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { addItem, putFavorite } from '../dataflow/modules/Search-Modules';

import start from '../Assets/icon/estrela.svg';
import startHover from '../Assets/icon/estrela-cinza.svg';

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => {
		dispatch(addItem(payload));
	},
	putFavorite: (payload) => {
		dispatch(putFavorite(payload));
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

const apiOpportunities = {
	baseUrl: 'http://petronect-app-core-api-dev-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api/opportunities',
};

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
					favorites: <img src={this.favorite ? start : startHover} onClick = {this.handleFavorite}/>,
					fit: 'Test1',
					category: 'Test2',
					id: 'Test3',
					titleDescription: 'Test4',
					deadLine: 'Test5',
				},
			],
			hoverFavorites: false,
			favorite: false,
		};
		//  const searchItems = this.state.search.map((search) =>
		//   <TableHeader>{this.state.search}</TableHeader>
		// )
	}

	componentWillMount() {
		this.getData();
	}

	getData = () => { // fazer um get na API e buscar a palavra chave
		axios.get('')
			.then((responseData) => {
				// const opportunities = res.data;
				console.log('chegouuuu', responseData.data);
				this.setState({ data: responseData, searchString: responseData });
			})
			.catch((error) => this.setState({ error }));
	}

  hoverFavorites = (e) => {
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

  handleFavorite = (e) => {
  	this.setState({
  		favorite: !this.state.favorite,
  	});
  	this.props.putFavorite(this.state.favorite);
  	console.log('handleFavorite', this.state.favorite);
  }

  render() {
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
  					<TableRow>

  						{(this.state.selectItem || []).map((item) => (
  							<TableBody
  								key={item}
  							>
  								{item.favorites}
  							</TableBody>
  						))}

  						{(this.state.selectItem || []).map((item) => (
  							<TableBody
  								key={item}
  							>
  								{item.fit}
  							</TableBody>
  						))}

  						{(this.state.selectItem || []).map((item) => (
  							<TableBody
  								key={item}
  							>
  								{item.category}
  							</TableBody>
  						))}

  						{(this.state.selectItem || []).map((item) => (
  							<TableBody
  								key={item}
  							>
  								{item.id}
  							</TableBody>
  						))}

  						{(this.state.selectItem || []).map((item) => (
  							<TableBody
  								key={item}
  							>
  								{item.titleDescription}
  							</TableBody>
  						))}

  						{(this.state.selectItem || []).map((item) => (
  							<TableBody
  								key={item}
  							>
  								{item.deadline}
  							</TableBody>
  						))}
  					</TableRow>
  				</Table>
  			</WrapperTable>
  		</Container>
  	);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelevanceMatch);
