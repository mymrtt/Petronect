// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import filter from '../../assets/icon/filtrar.svg';

const Container = styled.div`
	padding: 2rem;
  width: 75vw;
  height: 95vh;
  border-radius: 0 4px 0 0;
  background: #fff;
`;

const AddFilter = styled.div`
	padding: 1rem;
	width: 35%;
	display: flex;
	border-color: #116EA0;
	border-radius: 4px;
	background-color: #116EA0;
	cursor: pointer;
`;

const AddFilterImage = styled.img`
	margin-right: 1rem;
`;

const WrapperTexts = styled.div`
	display: ${(props) => props.suggestions && 'flex'};
	align-items: ${(props) => props.suggestions && 'center'};
	margin: ${(props) => props.suggestions && '.80rem .5rem;'};
`;

const Title = styled.h2`
	color: ${(props) => (props.modalTitle ? '#115680' : '#000')};
	font-size: 1rem;
`;

const SuggestionsTags = styled.span`
	margin-right: 1rem;
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
	margin: .2rem;
	color: #fff;
	font-size: ${(props) => (props.subAddTitle ? '.85rem' : '1rem')};
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
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 1rem;
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
	@media (max-width: 450px) {
		width: 90%;
	}
`;

const Label = styled.label`
	font: 500 12px Eurostile, sans-serif;
	margin: 0 0 .25rem .5rem;
	letter-spacing: 0;
	color: #7FBA4C;
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
`;

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			colors: [
				'#DE8F33',
				'#D65B85',
				'#52BA44',
				'#01B0B7',
				'#8A5BD6',
				'#D7E65D',
				'#D53B40',
			],
		};
	}

	renderColorOption = () => {
		const { colors } = this.state;

		return colors.map((color) => (
			<TagColor
				key={color}
				backgroundColor={color}
			/>
		));
	}

	handleFilterModal = () => {
		this.setState({ isModalOpen: true });
	}

	handleClose = () => {
		this.setState({ isModalOpen: false });
	}

	renderFilterModal = () => (
		<Overlay>
			<FilterModal>
				<Header>
					<Title modalTitle>Adicionar Filtro</Title>
					<CloseContainer onClick={this.handleClose}>
						<CloseButton>X</CloseButton>
					</CloseContainer>
				</Header>
				<InputBox>
					<Label>Escolha um nome</Label>
					<Input
						placeholder={'Digite seu texto aqui'}
					/>
				</InputBox>
				<InputBox last>
					<Label>Digite as tags relacionadas</Label>
					<Input
						placeholder={'Digite seu texto aqui'}
					/>
				</InputBox>
				<WrapperTexts suggestions>
					<SuggestionsText suggestionsTitle>Sugestões:</SuggestionsText>
					<SuggestionsTags>
						<SuggestionsText suggestionsTags>montagem</SuggestionsText>
					</SuggestionsTags>
					<SuggestionsTags>
						<SuggestionsText suggestionsTags>Instrumental</SuggestionsText>
					</SuggestionsTags>
					<SuggestionsTags>
						<SuggestionsText suggestionsTags>elétrica</SuggestionsText>
					</SuggestionsTags>
				</WrapperTexts>
				<WrapperTagsColor>
					<Label>Escolha uma cor</Label>
					<ContainerTagsColor>
						{ this.renderColorOption() }
					</ContainerTagsColor>
					<Button>Adicionar Filtro</Button>
				</WrapperTagsColor>
			</FilterModal>
		</Overlay>
	)

	// eslint-disable-next-line class-methods-use-this
	render() {
		const { isModalOpen } = this.state;
		return (
			<Container>
				<AddFilter onClick={this.handleFilterModal}>
					<AddFilterImage src={filter} />
					<WrapperTexts>
						<AddFilterTitle>Adicionar filtro</AddFilterTitle>
						<AddFilterTitle subAddTitle>Selecione palavras chave para apurar contratos relevantes</AddFilterTitle>
					</WrapperTexts>
				</AddFilter>
				{ isModalOpen && this.renderFilterModal() }
			</Container>
		);
	}
}


export default Filters;
