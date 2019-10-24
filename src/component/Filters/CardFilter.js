// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { values } from 'lodash';

// Images
import deleteIcon from '../../assets/icon/delete.svg';
import searchIcon from '../../assets/icon/lupa-white.svg';


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
		height: 6.3rem;
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
	align-items: center;
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
	color: #fff;
	font-size: 1rem;
`;

const CardEdit = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '18px')};
	@media (max-width: 640px) {
		width: ${(props) => props.magnifying && '18px'};
	}
`;

const ImageSeach = styled.img`
	width: ${(props) => (props.logoTablet ? '25%' : '15px')};
	margin-left: .5rem;
	@media (max-width: 640px) {
		width: ${(props) => props.magnifying && '18px'};
	}
`;

class CardFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleDeleteCard = () => {
		console.log('chegou');
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
						<TagTitle>{card.title}
							<ImageSeach src={searchIcon} />
						</TagTitle>
						<CardEdit onClick={this.handleDeleteCard}>
							<Image src={deleteIcon} />
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
