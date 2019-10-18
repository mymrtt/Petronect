// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { values } from 'lodash';

// Images
import edit from '../../assets/icon/editar.svg';

const Container = styled.div`
	width: 48%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 1rem;
	@media (max-width: 768px) {
		width: 100%;
		align-items: flex-start;
		flex-direction: column;
	}
	@media (max-width: 648px) {
		// margin-left: .5rem;
    width: 100%;
	}
`;

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	border: .5px solid #fff;
	border-color: ${(props) => props.background};
	border-radius: 4px;
	background-color: #fff;
	cursor: pointer;
	@media (max-width: 768px) {
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
	align-items: center;
	color: #fff;
	font-size: 1rem;
	background-color: ${(props) => props.background};
	justify-content: space-between;
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
	margin-bottom: ${(props) => props.Tag && '.3rem'};
	padding: .2rem .4rem;
	border-radius: 10px;
	background-color: ${(props) => props.background};
`;

const SuggestionsText = styled.p`
	margin-right: ${(props) => props.suggestionsTitle && '1rem'};
	font-size: ${(props) => (props.suggestionsTitle ? '.75rem' : '.80rem')};
	color: ${(props) => (props.suggestionsTitle ? '#8C8C8C' : '#404040')};
`;

const TagTitle = styled.p`
	margin-left: ${(props) => props.cardText && '.5rem'};
`;

const CardEdit = styled.div`
	display: flex;
`;

const Image = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '15px')};
	@media (max-width: 640px) {
		width: ${(props) => props.magnifying && '18px'};
	}
`;

class CardFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
		};
	}

	handleClose = () => {
		this.setState({ isOpen: false });
	}

	render() {
		const { card } = this.props;
		return (
			<Container>
				<Card
					background={this.props.item ? this.props.item : '#115680'}
				>
					<WrapperCard
						background={this.props.item ? this.props.item : '#115680'}
					>
						<TagTitle>{card.title}</TagTitle>
						<CardEdit onClick={this.handleClose}>
							<Image src={edit} />
							<TagTitle cardText>Edit</TagTitle>
						</CardEdit>
					</WrapperCard>
					<ContainerTags>
						{
							values(card.tags).map((tag) => (
								<SuggestionsTags
									Tag
									background={this.props.item ? `${this.props.item}30` : '#11568030'} 
									key={tag}>
									<SuggestionsText suggestionsTags>{tag}</SuggestionsText>
								</SuggestionsTags>
							))
						}
					</ContainerTags>
				</Card>
			</Container>
		);
	}
}


export default CardFilter;
