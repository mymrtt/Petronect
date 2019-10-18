// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import start from '../../assets/icon/estrela.svg';
import shareIcon from '../../assets/icon/compartilhar.svg';
import attachIcon from '../../assets/icon/anexar.svg';
import doubtIcon from '../../assets/icon/duvida.svg';
import loadingIcon from '../../assets/icon/loading.svg';


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

const Container = styled.div`
	width: 42rem;
	border: .5px solid #115680;
	border-radius: 8px;
	background: #fff;
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
`;

const CloseContainer = styled.div`
	position: absolute;
	right: .65rem;
	bottom: 1.5rem;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid #E6E6E6;
	border-radius: 50%;
	background-color: #DBE9F1;
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

const DetailsOportuny = styled.div`
	max-width: 900px;
	padding: 1.5rem 3.5rem 0 3.5rem;
	display: flex;

`;

const InfoContainer = styled.div`
	width: 70%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const InfoWrap = styled.span`
	padding-bottom: .90rem;
`;

const Description = styled.p`
	font-size: 1.3rem;
	color: #2A7CA8;
	font-weight: 500;
`;

const Text = styled.p`
	padding-bottom: .5rem;
	color: ${(props) => (props.title ? '#8C8C8C' : '#404040')};
	font-weight: ${(props) => (props.bold ? 600 : 400)};
	font-size: ${(props) => (props.fontSize ? '1rem' : '0.90rem')}
`;

const InfoContent = styled.div`
	width: 30%;
`;

const IconWrap = styled.span`
	width: 100%;
	display: flex;
	justify-content: flex-start;
`;

const BtnIcon = styled.button`
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
	margin-right: 1.5rem;
`;

const BoxInfo = styled.div`
	padding-bottom: 2rem;
`;

const BoxButton = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
`;

const ButtonDetails = styled.button`
	width: 505px;
	height: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #116EA0;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 4px;
`;

const TextButton = styled.p`
	text-align: center;
	font: Bold 16px/46px Eurostile;
	letter-spacing: 0;
	color: #FAFAFA;
`;

const ImageLoading = styled.img` 
	margin-right: 1rem;
	animation-name: spin;
	animation-duration: 4000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`;

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
			<ImageLoading icono src={loadingIcon}/>
			<TextButton>carregando</TextButton>
		</>
	)

	itemModal = () => (
		<>
			<TextButton>Enviar uma oferta</TextButton>
		</>
	)

	render() {
		const { isDatailsOpen } = this.state;

		return (
			<Overlay onClick={this.props.handleModalOportunities}>
				<Container onClick={this.handleStop}>
					<DatailsHeader>
						<WrapperRelevance>
							<Image star src={start} />
							<TextHeader>85% Relevante</TextHeader>
						</WrapperRelevance>
						<CloseContainer onClick={this.props.handleModalOportunities}>
							<CloseButton>X</CloseButton>
						</CloseContainer>
					</DatailsHeader>
					<DetailsOportuny>
						<InfoContainer>
							<InfoWrap>
								<Text title fontSize>Título e descrição</Text>
								<Description>Contrato global - manilhas de carga</Description>
							</InfoWrap>

							<Text>Licitação, Lei 13.303, Art. 28, CAPUT</Text>
							<Text bold>Petróleo Brasileiro S. A.</Text>

							<InfoWrap>
								<Text title fontSize>Categoria</Text>
								<Text bold>Remoção de material</Text>
							</InfoWrap>

							<InfoWrap>
								<Text title fontSize>Itens</Text>
								<Text bold>0001</Text>
								<Text bold>MANIFOLD PARA INSTRUMENTAÇÃO - EPP E ME</Text>
							</InfoWrap>

							<InfoWrap>
								<Text>Quantidade: 1</Text>
								<Text>Unidade de Fornecimento:</Text>
							</InfoWrap>

							<InfoWrap>
								<Text bold>0002</Text>
								<Text bold>MANIFOLD PARA INSTRUMENTAÇÃO - DEMAIS</Text>
							</InfoWrap>

							<InfoWrap>
								<Text>Quantidade: 1</Text>
								<Text>Unidade de Fornecimento:</Text>
							</InfoWrap>
						</InfoContainer>
						<InfoContent>

							<BoxInfo>
								<Text title fontSize>Id</Text>
								<Text bold>8916909924</Text>
							</BoxInfo>

							<BoxInfo>
								<Text title fontSize>Prazo</Text>
								<Text bold>18/06/19 - 28/08/19</Text>
							</BoxInfo>

							<IconWrap>
								<BtnIcon>
									<Image src={shareIcon} icon />
								</BtnIcon>
								<BtnIcon>
									<Image src={attachIcon} icon />
								</BtnIcon>
								<BtnIcon>
									<Image src={doubtIcon} icon />
								</BtnIcon>
							</IconWrap>
						</InfoContent>
					</DetailsOportuny>
					<BoxButton>
						<ButtonDetails>
							{ isDatailsOpen
								? this.loadingItemModal()
								: this.itemModal()
							}
						</ButtonDetails>
					</BoxButton>
				</Container>
			</Overlay>
		);
	}
}

export default DetailsOportunies;
