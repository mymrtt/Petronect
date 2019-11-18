// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { values } from 'lodash';

// Images
// import start from '../../assets/icon/estrela.svg';
import startHover from '../../assets/icon/estrela-cinza.svg';
// import shareIcon from '../../assets/icon/compartilhar.svg';
import attachIcon from '../../assets/icon/anexar.svg';
// import doubtIcon from '../../assets/icon/duvida.svg';
// import loadingIcon from '../../assets/icon/loading.svg';
import closeIcon from '../../assets/icon/close-blue.svg';

// Redux
const mapStateToProps = (state) => ({
	selectedOpportunity: state.opportunities.selectedOpportunity,
});

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #40404040;
`;

const Container = styled.div`
	position: relative;
	width: 42rem;
	max-height: 85vh;
	border: .5px solid #115680;
	border-radius: 8px;
	background: #fff;
	z-index: 2;
	margin: 0 0.625rem;
	padding: 0 0 0.5rem;

	&:-webkit-scrollbar {
  width: 5px;
	}
	&:-webkit-scrollbar-track {
		background: #fff; 
	}
	&:-webkit-scrollbar-thumb {
		border-radius: 4px;
		background: transparent linear-gradient(180deg,#115680 0%,#116EA0 100%); 
	}
	&:-webkit-scrollbar-thumb:hover {
		background: #000; 
	}
`;

const SubContainer = styled.div`
	width: 100%;
	max-height: calc(85vh - 0.25rem);
	padding-bottom: 0.25rem;
	overflow: hidden auto;
	::-webkit-scrollbar {
    width: 3px;
    background-color: #8c8c8c;
	}
	::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #115680;
	}
`;

const DatailsHeader = styled.div`
	position: relative;
	padding-top: 1.2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const WrapperRelevance = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Image = styled.img`
	width: ${(props) => (props.icon ? '25px' : '30px')};
	margin-left: ${(props) => (props.star && '.75rem')};
`;

const TextHeader = styled.p`
	margin-left: 1rem;
	color: #009D00;
	font-size: .8rem;
	font-weight: 600;
`;

const CloseContainer = styled.div`
	position: absolute;
	right: .65rem;
	top: -1rem;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid #E6E6E6;
	border-radius: 50%;
	background-color: #DBE9F1;
	z-index: 2;
	@media (max-width: 648px) {
		background-color: #FFF;
		border-color: #115680;
	}
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 1rem;
	color: #115680;
	border: none;
	background: transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;
`;

const CloseImage = styled.img`
	width: 13px;
`;

const DetailsOportuny = styled.div`
	max-width: 900px;
	padding: .75rem 3.5rem 0 3.5rem;
	display: flex;
	@media (max-width: 648px) {
		padding: 1.5rem 1.8rem 0 1rem;
	}
`;

const InfoContainer = styled.div`
	width: 68%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 648px) {
		width: 100%;
	}
`;

const CategoryContainer = styled.div`
	padding-bottom: .7rem;
	@media (max-width: 648px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
`;

const InfoWrap = styled.span`
	width: 95%;
	padding-bottom: .7rem;
`;

const Description = styled.p`
	font-size: 1.3rem;
	color: #2A7CA8;
	font-weight: 500;
`;

const Text = styled.p`
	padding: ${(props) => (props.padding ? props.padding : '0 0 0.25rem 0')};
	color: ${(props) => (props.title ? '#8C8C8C' : '#404040')};
	font-weight: ${(props) => (props.bold ? 500 : 400)};
	font-size: ${(props) => (props.fontSize ? '1rem' : '0.90rem')};
	margin-top: ${(props) => props.marginTop && '1rem'};
	@media	(max-width: 648px) {
		padding: ${(props) => (props.padding ? props.padding : '0 0 0 0')};
	}

	em {
		font-weight: 700;
		background-color: yellow;
		font-style: normal;
	}
	}
`;

const InfoContent = styled.div`
	width: 32%;
	@media (max-width: 648px) {
		display: none;
	}
`;

const IconWrap = styled.span`
	width: 100%;
	display: flex;
	justify-content: flex-start;
`;

const InfoContentMobile = styled.div`
	display: none;
	@media (max-width: 648px) {
		display: block;
		display: flex;
		justify-content: space-between;
	}
`;

const IconWrapMobile = styled.span`
	display: none;
	@media (max-width: 648px) {
		display: flex;
		justify-content: space-between;
	}
`;

const BtnIcon = styled.button`
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
	margin-right: 1.5rem;
	opacity: .5;
	@media (max-width: 648px) {
		margin-right: 0;
	}
`;

const BoxInfo = styled.div`
	padding-bottom: 2rem;
	@media	(max-width: 648px) {
		padding-bottom: 1rem;
	}
`;

const BoxButton = styled.div`
	width: 100%;
	height: 100%;
	padding: 0.8rem 0 1.5rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	@media	(max-width: 450px) {
		padding: 0 0 1rem 0;
	}
`;

const ButtonDetails = styled.button`
	width: 90%;
	height: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #116EA0;
	border: none;
	outline: none;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 4px;
	cursor: pointer;
`;

const TextButton = styled.p`
	text-align: center;
	font: Bold 16px/46px Eurostile;
	letter-spacing: 0;
	color: #FAFAFA;
`;

// const ImageLoading = styled.img` 
// 	margin-right: 1rem;
// 	animation-name: spin;
// 	animation-duration: 4000ms;
// 	animation-iteration-count: infinite;
// 	animation-timing-function: linear;
// }
// @keyframes spin {
//     from {
//         transform:rotate(0deg);
//     }
//     to {
//         transform:rotate(360deg);
//     }
// }
// `;

class DetailsOportunies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDatailsOpen: true,
			loadingTime: 5,
		};
	}

	componentDidMount() {
		this.timer = setInterval(
			() => {
				if (this.state.loadingTime === -3) {
					this.setState({ loadingTime: 5 });
				} else {
					this.setState({ loadingTime: this.state.loadingTime - 1 });
				}
			},
			1000,
		);
	}

	componentWillUmount() {
		clearInterval(this.timer);
	}

	checkOff = () => {
		this.setState((prevState) => ({
			isDatailsOpen: !prevState.isDatailsOpen,
		}));
	}


	handleStop = (event) => {
		event.stopPropagation();
	}

	loadingItemModal = () => (
		<>
			{/* <ImageLoading icono src={loadingIcon}/> */}
			<TextButton>Fechar</TextButton>
		</>
	)

	itemModal = () => (
		<>
			<TextButton>Enviar uma oferta</TextButton>
		</>
	)

	formatDate = (date) => {
		if (date) {
			return date
				.split('-')
				.reverse()
				.join('/');
		} return null;
	}
	
	showFiles = () => {
		const { selectedOpportunity } = this.props;
		if (selectedOpportunity.files) {
			return (
				<BtnIcon>
					<Image src={attachIcon} icon />
				</BtnIcon>
			);
		}
	}

	render() {
		const { selectedOpportunity } = this.props;
		const { isDatailsOpen } = this.state;

		return (
			<Overlay onClick={this.props.handleModalOportunities}>
				<Container onClick={this.handleStop}>
					<CloseContainer onClick={this.props.handleModalOportunities}>
						<CloseButton>
							<CloseImage src={closeIcon} />
						</CloseButton>
					</CloseContainer>
					<SubContainer>
						<DatailsHeader>
							<WrapperRelevance>
								<Image star src={startHover} />
								<TextHeader>{selectedOpportunity.fit}% Relevante</TextHeader>
							</WrapperRelevance>
						</DatailsHeader>
						<DetailsOportuny>
							<InfoContainer>
								<InfoWrap>
									<Text title fontSize>Título e descrição</Text>
									<Description>{selectedOpportunity.opportunityTitle}</Description>
								</InfoWrap>
								{/* <Text padding='.55rem 0 0 0'>Licitação, Lei 13.303, Art. 28, CAPUT</Text> */}
								<Text bold padding='1.44rem 0'>{selectedOpportunity.company}</Text>
								<InfoContentMobile>
									<BoxInfo>
										<Text title fontSize>Número</Text>
										<Text bold>{selectedOpportunity.opportunityId}</Text>
									</BoxInfo>
									<BoxInfo>
										<Text title fontSize>Prazo</Text>
										<Text bold>18/06/19 à 28/08/19</Text>
									</BoxInfo>
								</InfoContentMobile>
								<CategoryContainer>
									{/* <InfoWrap>
										<Text title fontSize>Categoria</Text>
										<Text bold>Remoção de material</Text>
									</InfoWrap> */}
									<IconWrapMobile>
										<BtnIcon>
											<Image src={attachIcon} icon />
										</BtnIcon>
										{/* <Image src={shareIcon} icon /> */}
										{/* <Image src={doubtIcon} icon /> */}
									</IconWrapMobile>
								</CategoryContainer>
								<Text title fontSize>Itens</Text>
								{selectedOpportunity.items && selectedOpportunity.items.map((item) => (
									<>
										<InfoWrap>
											<Text bold>{item.id}</Text>
											<Text bold>{item.title}</Text>
										</InfoWrap>

										<InfoWrap>
											<Text>Quantidade: {item.qty}</Text>
											<Text>Unidade de Fornecimento: {item.unit}</Text>
										</InfoWrap>
									</>
								))}
								<Text title fontSize marginTop>Termos encontrados</Text>
								{selectedOpportunity.highlight && values(selectedOpportunity.highlight).map((item) => (
									item.map((highlight, index) => (
										<InfoWrap key={index}>
											<Text dangerouslySetInnerHTML={{ __html: highlight }} />
										</InfoWrap>
									))
								))}
							</InfoContainer>
							<InfoContent>
								<BoxInfo>
									<Text title fontSize>Número</Text>
									<Text bold>{selectedOpportunity.opportunityId}</Text>
								</BoxInfo>
								<BoxInfo>
									<Text title fontSize>Prazo</Text>
									<Text bold>{this.formatDate(selectedOpportunity.deadLineInitial)} - {this.formatDate(selectedOpportunity.deadLineLastOne)}</Text>
								</BoxInfo>
								<IconWrap>
									{/* <BtnIcon>
										<Image src={shareIcon} icon />
									</BtnIcon> */}
									{this.showFiles()}
									{/* <BtnIcon>
										<Image src={doubtIcon} icon />
									</BtnIcon> */}
								</IconWrap>
							</InfoContent>
						</DetailsOportuny>
						<BoxButton>
							<ButtonDetails onClick={this.props.handleModalOportunities}>
								{ isDatailsOpen
									? this.loadingItemModal()
									: this.itemModal()
								}
							</ButtonDetails>
						</BoxButton>
					</SubContainer>
				</Container>
			</Overlay>
		);
	}
}

export default connect(mapStateToProps, null)(DetailsOportunies);
