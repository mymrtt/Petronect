// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateCard } from '../dataflow/modules/keywordsFilter-modules';

const mapStateToProps = (state) => ({
	keywords: state.oportunities.cardFilter.keywords,
	// cardFilter: state.card.cardFilter,
});

const mapDispatchToProps = (dispatch) => ({
	updateCard: (info) => {
		dispatch(updateCard(info));
	},
});

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
	@media (max-width: 768px) {
		z-index: 1;
	}
	@media (max-width: 648px) {
		padding: 0 1rem;
		width: 92%;
    height: 90vh;
	}
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
	@media (max-width: 640px) {
    top: .5rem;
    bottom: 0;
		left: 16.5rem;
    width: 35px;
    height: 35px;
	}
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
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
	// justify-content: ${(props) => props.alt && 'space-between'};
	width: 100%;
	margin-top: ${(props) => props.last && '.5rem'};
	@media (max-width: 768px) {
		width: 100%;
	}
	@media (max-width: 648px) {
		width: 100%;
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

const Title = styled.h2`
	color: ${(props) => (props.modalTitle ? '#115680' : '#fff')};
	font-size: ${(props) => (props.modalTitle ? '1rem' : '.80rem')};
`;

// const WrapperTexts = styled.div`
// 	display: ${(props) => props.suggestions && 'flex'};
// 	align-items: ${(props) => props.suggestions && 'center'};
// 	margin: ${(props) => props.suggestions && '.80rem .5rem'};
// 	@media (max-width: 648px) {
// 		flex-wrap: wrap;
// 		margin: ${(props) => props.suggestions && '1rem'};
// 	}
// `;

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
	@media(max-width: 648px) {
		padding-left: 1rem;
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

// const SuggestionsText = styled.p`
// 	margin-right: ${(props) => props.suggestionsTitle && '1rem'};
// 	font-size: ${(props) => (props.suggestionsTitle ? '.75rem' : '.80rem')};
// 	color: ${(props) => (props.suggestionsTitle ? '#8C8C8C' : '#404040')};
// `;

const ContainerTagsColor = styled.div`
	margin: .8rem 0;
	height: 4rem;
	display: flex;
	justify-content: space-between;
`;

// const SuggestionsTags = styled.span`
// 	margin-right: 1rem;
// 	margin-bottom: ${(props) => props.Tag && '.3rem'};
// 	padding: .2rem .4rem;
// 	border-radius: 10px;
// 	background-color: #aadf0040;
// `;

const TagColor = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${(props) => props.backgroundColor}
	cursor: pointer;
`;

const Wraptext = styled.ul`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: .5rem;
	padding-top: 0;
`;

const TagText = styled.p`
	font-size: .85rem;
	color: #8C8C8C;
	margin-right: 1rem;
`;

const KeywordText = styled.li`
	width: auto;
	height: 20px;
	margin: 0.5rem 0.35rem 0 0;
	padding: 0 .5rem;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: #01B0B7;
	${''}
	border-radius: 10px;
	list-style:none;
	font-size: .85rem;
	color: #404040;
`;

class ModalFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameValue: '',

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

	handleChangeName = (event) => {
		this.setState({ nameValue: event.target.value });
		console.log(event.target.value);
	}

	handleColorOption = (color) => {
		this.setState({ item: color });
		console.log(color);
	}


	handleCard = (event) => {
		event.stopPropagation();
		this.props.updateCard({
			cardName: this.state.nameValue,
			cardColor: this.state.item,
		});
	}

	renderColorOption = () => {
		const { colors } = this.state;

		return colors.map((color) => (
			<TagColor
				key={color}
				backgroundColor={color}
				onClick={() => this.handleColorOption(color)}
			/>
		));
	}

	renderKeywordsList = () => this.props.keywords.map((keyword) => (
		<Fragment
			key={keyword}
			className='btn'
		>
			<KeywordText>{keyword}</KeywordText>
		</Fragment>
	))

	render() {
		return (
			<Overlay>
				<FilterModal>
					<Header>
						<Title modalTitle>Adicionar Filtro</Title>
						<CloseContainer onClick={this.props.handleOpenModal}>
							<CloseButton>X</CloseButton>
						</CloseContainer>
					</Header>
					<InputBox>
						<Label>Escolha um nome</Label>
						<Input
							placeholder={'Digite seu texto aqui'}
							onChange={this.handleChangeName}
							value={this.state.nameValue}
						/>
					</InputBox>
					<InputBox last>
						{/* <Label>Digite as tags relacionadas</Label>
						<Input
							placeholder={'Digite seu texto aqui'}
						/> */}
						<Wraptext>
							<TagText>Tags:</TagText>
							{this.renderKeywordsList()}
						</Wraptext>
					</InputBox>
					{/* <WrapperTexts suggestions>
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
					</WrapperTexts> */}
					<WrapperTagsColor>
						<Label>Escolha uma cor</Label>
						<ContainerTagsColor>
							{ this.renderColorOption() }
						</ContainerTagsColor>
						<Button
							onClick={this.handleCard}
						>
							<Title>Adicionar Filtro</Title>
						</Button>
					</WrapperTagsColor>
				</FilterModal>
			</Overlay>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFilter);
