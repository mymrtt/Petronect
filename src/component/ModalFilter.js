// Libs
import React, { Component, div } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Images
import closeIcon from '../assets/icon/close-blue.svg';

// Modules
import { postKeywordThunk } from '../dataflow/thunks/opportunities-thunk';

const mapStateToProps = (state) => ({
	keywords: state.opportunities.cardFilter.keywords,
	// cardFilter: state.card.cardFilter,
});

const mapDispatchToProps = (dispatch) => ({
	postKeywordThunk: (info) => {
		dispatch(postKeywordThunk(info));
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
	z-index: 2;
`;

const FilterModal = styled.div`
	padding: 1rem;
	width: 35rem;
	border: .5px solid #115680;
	border-radius: 8px;
	background: #fff;
	@media (max-width: 960px) {
		z-index: 2;
	}

	@media (max-width: 960px) {
		padding: 1rem;
	}

	@media (max-width: 648px) {
		width: 90%;
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
	right: -1.25rem;
	top: -2rem;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid #115680;
	border-radius: 50%;
	background-color: #fff;

	@media(max-width: 960px) {
		top: -2rem;
		${'' /* left: 32rem; */}
	}
	@media (max-width: 648px) {
		top: 0;
		right: 0;
	}
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	font-size: 1.2rem;
	color: #115680;
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
`;

const CloseImage = styled.img`
	width: 13px;
`;

const InputBox = styled.span`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.alt ? 'row' : 'column')};
	width: 100%;
	margin-top: ${(props) => props.last && '.5rem'};
	@media (max-width: 960px) {
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

const TextErrorBox = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const TextError = styled.p`
	font: 500 .80rem eurostile, sans serif;
	color: #D53B40;
	@media (max-width: 960px) {
		margin: .1rem 0;
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
	margin: .5rem;
	height: 4rem;
	display: flex;
	justify-content: space-between;

	${'' /* @media(max-width: 768px) {
		height: auto;
		flex-wrap: wrap;
		justify-content: space-evenly;
	} */}

	@media(max-width: 520px) {
    height: auto
    flex-wrap: wrap;
    justify-content: space-evenly;
	}
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
	background-color: ${(props) => props.backgroundColor};
	cursor: pointer;
	${props => props.selectedColor && `
		border: solid 4px #116EA0;
	`}

	@media(max-width: 520px) {
		margin: .5rem;
	}
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
	margin: 0.5rem 0.5rem 0 0;
`;

const KeywordText = styled.li`
	width: auto;
	height: 20px;
	margin: 0.5rem 0.35rem 0 0;
	padding: 0.5rem .5rem;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: ${props => props.color}30;
	border-radius: 10px;
	list-style:none;
	font-size: .85rem;
	color: #40404090;
`;

class ModalFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedColor: '#DE8F33',
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
	}

	handleColorOption = (color) => {
		this.setState({ selectedColor: color });
	}

	handleselectedColor = () => {
		this.setState({ selectedColor: true });
	}

	handleCard = (event) => {
		event.stopPropagation();

		if (!this.state.nameValue) {
			this.setState({ emptyName: true });
		} else {
			this.props.postKeywordThunk({
				name: this.state.nameValue.trim(),
				color: this.state.selectedColor,
				keywords: this.handleKeywordsObject(),
			});

			this.props.handleOpenModal();
		}
	}

	handleKeywordsObject = () => {
		let keywordsObject = this.props.keywords.map((item) => {
			return { name: item };
		});

		return keywordsObject;
	}

	renderColorOption = () => {
		const { colors, selectedColor } = this.state;

		return colors.map((color) => (
			<TagColor
				key={color}
				backgroundColor={color}
				selectedColor={selectedColor === color}
				onClick={() => this.handleColorOption(color)}
			/>
		));
	}

	renderKeywordsList = () => this.props.keywords.map((keyword) => (
		<KeywordText color={this.state.selectedColor}>{keyword}</KeywordText>
	))

	render() {
		return (
			<Overlay>
				<FilterModal>
					<Header>
						<Title modalTitle>Adicionar Notificação</Title>
						<CloseContainer onClick={this.props.handleOpenModal}>
							<CloseButton>
								<CloseImage src={closeIcon} />
							</CloseButton>
						</CloseContainer>
					</Header>
					<InputBox>
						<Label>Escolha um nome</Label>
						<Input
							placeholder={'Digite seu texto aqui'}
							onChange={this.handleChangeName}
							value={this.state.nameValue}
						/>
						<TextErrorBox>
							{this.state.emptyName && <TextError>Por favor digite um nome</TextError>}
						</TextErrorBox>
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
					<WrapperTagsColor>
						<Label>Escolha uma cor</Label>
						<ContainerTagsColor>
							{ this.renderColorOption() }
						</ContainerTagsColor>
						<Button
							onClick={this.handleCard}
						>
							<Title>Adicionar Notificação</Title>
						</Button>
					</WrapperTagsColor>
				</FilterModal>
			</Overlay>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFilter);
