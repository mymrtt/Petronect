// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Cookies from 'js-cookie';

// Images
import logo from '../../assets/img/LogoPNE.png';
import logoW from '../../assets/img/logoBranca.svg';
import showPassword from '../../assets/icon/login-show-password.svg';
import hidePassword from '../../assets/icon/login-hide-password.svg';
import imagemPrincpal from '../../assets/img/Grupo-8105.svg';

// Components
import ButtoN from '../../component/Button';

// Redux
import { loginUserThunk, createAccountThunk, sendRecoverPassword } from '../../dataflow/thunks/login-thunk';

import {
	updateError,
	updateCreateSuccess,
	updateRecoverSuccess,
	verifyEmailExisting,
} from '../../dataflow/modules/login-module';

const mapStateToProps = (state) => ({
	error: state.login.error,
	createSuccess: state.login.createSuccess,
	recoverSuccess: state.login.recoverSuccess,
	isEmailExisting: state.login.verifyEmailExisting,
});

const mapDispatchToProps = (dispatch) => ({
	loginUserThunk: (info) => {
		dispatch(loginUserThunk(info));
	},
	updateError: (info) => {
		dispatch(updateError(info));
	},
	createAccountThunk: (info) => {
		dispatch(createAccountThunk(info));
	},
	updateCreateSuccess: (info) => {
		dispatch(updateCreateSuccess(info));
	},
	sendRecoverPassword: (info) => {
		dispatch(sendRecoverPassword(info));
	},
	updateRecoverSuccess: (info) => {
		dispatch(updateRecoverSuccess(info));
	},
	verifyEmailExisting: (info) => {
		dispatch(verifyEmailExisting(info));
	},
});

// Styled
const Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	background: transparent linear-gradient(180deg,#115680 0%,#116EA0 100%) 0% 0% no-repeat padding-box;
	padding: 0 4rem;
	@media (max-width: 960px) {
		flex-direction: ${(props) => !(props.screen === 'create') && 'column-reverse'};
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 650px) {
		padding: 0 2rem;
	}

	@media (max-width: 648px) {
		padding: 1rem;
	}
`;

const LoginInputBox = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 55%;
height: 90%;
background: #FFF;
border-radius: 0 0 6px 6px;
@media (max-width: 960px) {
	margin: 1rem 0;
	padding: 2rem;
	width: 85%;
	height: min-content;
	border-radius: 6px;
}
@media (max-width: 648px) {
	margin: 0;
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: space-evenly;
	border-radius: 6px;
}
`;

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Logo = styled.img`
	width: 35%;
	margin: 1rem 0;
	@media (max-width: 648px) {
		width: 55%;
		min-width: 180px;
	}
`;

const LogoCreate = styled.img`
	width: 20%;
	min-width: 220px;
	@media(max-width: 960px) {
		padding: 2rem;
		width: 45%;
	}
`;

const InputBox = styled.span`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.alt ? 'row' : 'column')};
	justify-content: ${(props) => props.alt && 'space-between'};
	width: ${(props) => props.width};
	margin-top: ${(props) => props.last && '.5rem'};
	
	@media (max-width: 960px) {
		width: 100%;
	}
	@media (max-width: 478px) {
		flex-direction: ${(props) => (props.lastResponsiveResponsive ? '0rem' : '.5rem')};
	}
`;

const Label = styled.label`
	font: 500 0.75rem Eurostile;
	margin: 0 0 .25rem 1rem;
	letter-spacing: 0;
	color: #7FBA4C;
`;

const Input = styled.input`
	width: 100%;
	height: 3rem;
	padding: 1rem;
	padding-left: calc(1rem - 2px);
	font-size: 1rem;
	background: #FAFAFA 0% 0% no-repeat padding-box;
	border: 1px solid ${(props) => (props.error ? '#D53B40' : '#7FBA4C')};
	border-radius: 4px;
	::placeholder {
		font: 300 1rem Eurostile;
		letter-spacing: 0;
		color: #959595;
	}
`;

const IconInputPassword = styled.img`
	position: absolute;
	bottom: 25%;
	right: 0;
	width: 1.25rem;
	margin-right: 1rem;
	cursor: pointer;
`;

const AltBox = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 64%;
	margin-top: 3rem;
	@media (max-width: 960px) {
		margin-top: 0;
		margin: 1.5rem 0;
		width: 94%;
	}
	@media (max-width: 648px) {
		width: 90%;
	}
`;

const Link = styled.p`
	font: 400 1rem Eurostile, sans serif;
	letter-spacing: 0;
	color: ${(props) => props.color || '#505050'} ;
	text-decoration: ${(props) => (props.color ? 'underline' : 'none')};
	cursor: pointer;
	:last lastResponsive-child {
		text-align: right;
	}
`;

const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 90vh;
	border-radius: 0 0 6px 6px;
	@media (max-width: 960px) {
		width: 95%;
		height: 40vh;
		justify-content: space-evenly;
		flex-direction: row-reverse;
	}
	@media (max-width: 648px) {
		display: none;
	}
`;

const Img = styled.img`
	width: 60%;
	@media (max-width: 960px) {
		width: 50%;
	}
`;

const TextBox = styled.span`
	width: 60%;
	@media (max-width: 960px) {
		width: 35%;
	}
`;

const Text = styled.p`
	margin: 1rem 0;
	font: 700 1.125rem eurostile, sans serif;
	letter-spacing: 0.18px;
	line-height: 2rem;
	color: #FFFFFF;
	@media (max-width: 960px) {
		margin: 0;
	}
`;

const LoginMessageError = styled.span`
	position: absolute;
	right: 0;
	bottom: -1.5rem;
`;

const TextError = styled.p`
	font: 500 .80rem eurostile, sans serif;
	color: #D53B40;
	@media (max-width: 960px) {
		margin: .1rem 0;
	}
`;

const CreateContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
`;

const CreateBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30%;
	padding: 2.5rem 3rem;
	background: #FFF;
	box-shadow: 0px 1px 2px #0000001A;
	border-radius: 4px;
	transition: width 1s; 
	@media(max-width: 1440px) {
		width: 50%;
	}
	@media(max-width: 960px) {
		margin: 1rem 0;
		width: 90%;
	}
	@media(max-width: 648px) {
		padding: 2rem;
		width: 100%;
	}
`;

const TermsText = styled.p`
	${''}
	margin: 1.5rem 0 -1rem;
	font: 400 0.875rem Eurostile;
	letter-spacing: 0;
	color: #505050;
	strong {
		text-decoration: underline;
	}
	@media(max-width: 960px) {
		width: 100%;
	}
	@media(max-width: 648px) {
		margin-bottom: 1rem;
	}
`;

const ButtonTerms = styled.span`
	margin: .2rem;
	cursor: pointer;
`;

// const OverlayTerms = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100vw;
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background: #40404040;
// `;

// const ContainerTerms = styled.div`
// 	position: relative;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	padding: 1rem;
// 	width: 440px;
// 	border-radius: 4px;
// 	background-color: #fff;
// `;

// const TitleTerms = styled.h2`
// 	margin-left: 1rem;
// 	padding: .5rem 0 1rem;
// 	font-size: 1.5rem;
// 	font-weight: 600;
// 	color: #116EA0;
// `;

// const WrapperTerms = styled.div`
// 	margin-bottom: 1rem;
// 	padding: 1rem;
// 	background-color: #F7F7F7;
// `;

// const TextTerms = styled.p`
// 	margin-bottom: 1rem;
// 	color: ${(props) => (props.lastAtt ? '#4152C0' : '#505050')};
// 	font-size: .95rem;
// 	font-weight: ${(props) => (props.bold ? '600' : '100')};
// `;

// const ContainerButtonClose = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: flex-end;
// `;

// const ButtonCloseTerms = styled.button`
// 	width: 7.5rem;
// 	height: 2.3rem;
// 	color: #fff;
// 	font-size: .95rem;
// 	font-weight: 600;
// 	cursor: pointer;
// 	border: none;
// 	border-radius: 4px;
// 	text-transform: uppercase;
// 	background-color: #116EA0;
// `;

const CreateTitle = styled.h1`
	align-self: flex-start;
	margin: 0 1rem 1rem;
	font: 700 1.5rem Eurostile;
	letter-spacing: 0;
	color: #116EA0;
	@media(max-width: 960px) {
		font-size: 1.3rem;
	};
`;

const CreatedText = styled.div`
	width: 92.5%;
	margin: 0 0 -1rem;
	font: 400 1.125rem Eurostile;
	letter-spacing: 0;
	color: #505050;
`;

const BackText = styled.div`
	align-self: flex-end;
	margin-top: 2rem;
	cursor: pointer;
	font: 600 1.25rem Eurostile;
	color: #116EA0;
`;

const ButtonsBox = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 648px) {
		flex-wrap: column;
		margin-top: 2.5rem;
	}
`;

const Form = styled.form`
	width: 95%;
	@media (max-width: 648px) {
		width: 100%;
		flex-wrap: column;
		margin-top: 2.5rem;
	}
`;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentScreen: 'login',
			isCreated: false,
			showPassword: true,
			error: undefined,
			// isTermsOpen: false,
		};
	}

	componentDidMount() {
		this.getToken();
	}

	getToken = () => {
		try {
			const response = Cookies.get('petronect_creds');

			if (!(JSON.parse(response))) {
				return null;
			}
			this.props.history.replace('/match-relevancia');
		} catch (err) {
			return null;
		}
	}


	showPassword = () => {
		this.setState((prevState) => ({
			showPassword: !prevState.showPassword,
		}));
	}

	loginSubmit = (ev) => {
		ev.preventDefault();
		this.props.loginUserThunk({
			email: this.loginEmailRef.value.toLowerCase(),
			password: this.loginPasswordRef.value,
			history: this.props.history,
		});
	}

	handleError = () => {
		if (this.props.error) {
			this.props.updateError(false);
		}

		if (this.props.createSuccess === false) {
			this.props.updateCreateSuccess(null);
		}

		if (this.props.isEmailExisting === false) {
			this.props.verifyEmailExisting(true);
		}

		if (this.state.error) {
			this.setState({
				error: undefined,
			});
		}

		return null;
	}

	handleCreate = () => {
		if (this.state.currentScreen !== 'create') {
			this.setState({
				currentScreen: 'create',
				error: undefined,
			});
			this.props.updateError(false);
		}
	}

	handleRecoverPassword = () => {
		if (this.state.currentScreen !== 'recoverPassword') {
			this.setState({
				currentScreen: 'recoverPassword',
			});
		}
	}

	handleBackLogin = () => {
		if (this.state.currentScreen !== 'login') {
			this.props.updateRecoverSuccess(false);
			this.setState({
				currentScreen: 'login',
				isCreated: false,
				error: '',
			});
		}
	}

	createSubmit = (ev) => {
		ev.preventDefault();

		if (this.createPasswordRef.value.trim().length > 5) {
			this.props.createAccountThunk({
				name: this.createNameRef.value,
				email: this.createEmailRef.value,
				password: this.createPasswordRef.value.trim(),
			});
			this.setState({
				isCreated: true,
			});
		} else {
			this.setState({
				error: 'passwordLength',
			});
		}
	}

	handleBackLoginRecover = () => {
		this.props.updateRecoverSuccess(false);
		this.props.verifyEmailExisting(true);

		this.setState({
			currentScreen: 'login',
			isCreated: false,
		});
	}

	handleSubmitRecover = (ev) => {
		ev.preventDefault();
		this.props.sendRecoverPassword(this.inputRecover.value);
		// this.props.recoverSuccess

		// this.props.verifyEmailExistingThunk(this.inputRecover.value);
	}

	// handleOpenTerms = () => {
	// 	this.setState({ isTermsOpen: true });
	// }

	// handleCloseTerms = () => {
	// 	this.setState({ isTermsOpen: false });
	// }

	// renderOpenTerms = () => (
	// 	<OverlayTerms>
	// 		<ContainerTerms>
	// 			<TitleTerms>Termos de serviço</TitleTerms>
	// 			<WrapperTerms>
	// 				<TextTerms bold>Petronect</TextTerms>
	// 				<TextTerms lastAtt>Ultima atualização: 13 de outubro de 2019</TextTerms>
	// 				<TextTerms bold>1. Aceitação dos termos de serviço Petronect.</TextTerms>
	// 				<TextTerms>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac consectetur massa. Pellentesque at vestibulum justo. Donec sed nibh dignissim, vestibulum neque sed, ornare ex. In purus odio, sodales non nibh quis, interdum maximus neque. Proin et imperdiet elit. Aliquam erat volutpat. Etiam luctus libero id neque commodo placerat. Etiam vitae molestie eros. Etiam dui urna, pulvinar eget neque in, pharetra bibendum diam. Donec sit amet sem eu enim sollicitudin consectetur tristique ac nunc. </TextTerms>
	// 				<TextTerms>Quisque nec risus id nisi viverra gravida. Fusce sed lacus lorem. Ut sit amet luctus est. Donec facilisis justo mi, ut consequat urna blandit at. Quisque eleifend rutrum felis.</TextTerms>
	// 			</WrapperTerms>
	// 			<ContainerButtonClose onClick={this.handleCloseTerms}>
	// 				<ButtonCloseTerms>ok</ButtonCloseTerms>
	// 			</ContainerButtonClose>
	// 		</ContainerTerms>
	// 	</OverlayTerms>
	// )

	renderError = () => {
		if (this.props.error) {
			return (
				<LoginMessageError>
					<TextError>
						Endereço de e-mail e/ou senha incorretos
					</TextError>
				</LoginMessageError>
			);
		}

		if (this.props.createSuccess === false) {
			return (
				<LoginMessageError>
					<TextError>
						Usuário já cadastrado
					</TextError>
				</LoginMessageError>
			);
		}

		if (this.state.error === 'passwordLength') {
			return (
				<LoginMessageError>
					<TextError>
						A senha deve conter no mínimo 6 caracteres
					</TextError>
				</LoginMessageError>
			);
		}

		if (!this.props.isEmailExisting) {
			return (
				<LoginMessageError>
					<TextError>
						Por favor, digite um e-mail valido!
					</TextError>
				</LoginMessageError>
			);
		}

		return null;
	}

	renderLogin = () => <>
		<LoginInputBox>
			<InputContainer onSubmit={this.loginSubmit}>
				<Logo src={logo} />
				<InputBox width='65%'>
					<Label >E-mail</Label>
					<Input
						ref={(node) => { this.loginEmailRef = node; }}
						required
						autoFocus
						type='email'
						placeholder={'Digite seu e-mail'}
						error={this.props.error}
						onChange={this.handleError}
					/>
				</InputBox>
				<InputBox last lastResponsive width='65%'>
					<Label>Senha</Label>
					<Input
						ref={(node) => { this.loginPasswordRef = node; }}
						type={this.state.showPassword ? 'password' : 'text'}
						required
						placeholder={'Digite sua senha'}
						error={this.props.error}
						onChange={this.handleError}
					/>
					<IconInputPassword
						loginScreen
						src={this.state.showPassword ? showPassword : hidePassword}
						onClick={this.showPassword}
					/>
					{this.renderError()}
				</InputBox>
				<ButtoN
					marginTop='1.5rem'
					width='65%'
					widthMobile='100%'
					height='4rem'
					color='#fff'
					backgroundColor='#115680'
					text='Entrar'
				/>
				<AltBox>
					<Link onClick={this.handleCreate}>Criar nova conta</Link>
					<Link onClick={this.handleRecoverPassword}>Recuperar Senha</Link>
				</AltBox>
			</InputContainer>
		</LoginInputBox>
		<LoginBox>
			<Img src={imagemPrincpal} />
			<TextBox>
				<Text>
					Defina suas notificações, receba contratos selecionados e esqueça as listas de mil itens.
				</Text>
				<Link onClick={this.handleCreate} color={'#AADF00'}>Criar nova conta</Link>
			</TextBox>
		</LoginBox>
	</>

	renderCreateAccount = () => (
		<CreateContainer>
			<LogoCreate src={logoW} />
			<CreateBox>
				{this.state.isCreated && this.props.createSuccess
					// Quando deu sucesso em criar conta
					? (<>
						<CreateTitle>
							Sucesso! Verifique seu caixa de e-mail.
						</CreateTitle>
						<CreatedText>
							{/* eslint-disable-next-line max-len */}
							Sua conta foi criada com secesso! Por favor, verifique sua caixa de e-mail, para confirmar a criação da conta.
						</CreatedText>
						<BackText onClick={this.handleBackLogin}>
							Voltar para o Login
						</BackText>
					</>)
					// Quando vai criar conta
					: (<form onSubmit={this.createSubmit}>
						<CreateTitle>
							Criar Conta
						</CreateTitle>
						<InputBox width='100%'>
							<Label>Nome</Label>
							<Input
								ref={(node) => { this.createNameRef = node; }}
								required
								autoFocus
								placeholder={'Nome'}
								error={this.props.error}
								onChange={this.handleError}
							/>
						</InputBox>
						<InputBox last width='100%'>
							<Label>E-mail</Label>
							<Input
								ref={(node) => { this.createEmailRef = node; }}
								type={'email'}
								required
								placeholder={'nome@email.com'}
								error={this.props.error}
								onChange={this.handleError}
							/>
						</InputBox>
						<InputBox last width='100%'>
							<Label>Senha</Label>
							<Input
								ref={(node) => { this.createPasswordRef = node; }}
								type={this.state.showPassword ? 'password' : 'text'}
								required
								placeholder={'Digite sua senha'}
								error={this.props.error || this.state.error}
								onChange={this.handleError}
							/>
							<IconInputPassword
								loginScreen
								src={this.state.showPassword ? showPassword : hidePassword}
								onClick={this.showPassword}
							/>
							{this.renderError()}
						</InputBox>
						<TermsText>
							Clique abaixo para concordar com nossos
							<ButtonTerms onClick={this.handleOpenTerms}>
								<strong>Termos de Serviço</strong>
							</ButtonTerms>
							e se inscrever.
						</TermsText>
						<ButtoN
							marginTop='2.5rem'
							width='100%'
							height='4rem'
							color='#fff'
							backgroundColor='#115680'
							text='Concordar e criar conta'
						/>
						<ButtoN
							marginTop='1rem'
							marginTopMobile='.5rem'
							width='100%'
							height='3rem'
							color='#115680'
							backgroundColor='#fff'
							text='Voltar para o login'
							handleClick={this.handleBackLogin}
						/>
					</form>)
				}
			</CreateBox>
			{ this.state.isTermsOpen && this.renderOpenTerms() }
		</CreateContainer>
	)

	renderRecoverPassword = () => (
		// this.state.isCreated && this.props.createSuccess
		<CreateContainer>
			<LogoCreate src={logoW} />
			<CreateBox>
				{this.props.recoverSuccess
					? (<>
						<CreateTitle>
							Sucesso! Verifique seu caixa de email.
						</CreateTitle>
						<CreatedText>
							{/* eslint-disable-next-line max-len */}
							Foi enviado para seu e-mail o link para a troca de senha. Por favor, verifique sua caixa de e-mail, para efetuar a troca de senha!
						</CreatedText>
						<BackText onClick={this.handleBackLoginRecover}>
							Voltar para o Login
						</BackText>
					</>)
					: (<Form onSubmit={this.handleSubmitRecover}>
						<CreateTitle>
							Recuperar Senha
						</CreateTitle>
						<InputBox last width='100%'>
							<Label>E-mail</Label>
							<Input
								type='email'
								required
								error={!this.props.isEmailExisting}
								ref={(node) => { this.inputRecover = node; }}
								placeholder={'nome@email.com'}
								onChange={this.handleError}
							/>
							{this.renderError()}
						</InputBox>
						{/* <InputBox last width='100%'>
							<Label>Confirmar email</Label>
							<Input
								type={'email'}
								placeholder={'nome@email.com'}
							/>
						</InputBox> */}
						<ButtonsBox>
							<ButtoN
								marginTop='2.5rem'
								marginTopMobile='.5rem'
								width='45%'
								height='3rem'
								color='#115680'
								backgroundColor='#fff'
								text='Voltar'
								handleClick={this.handleBackLoginRecover}
							/>
							<ButtoN
								marginTop='2.5rem'
								marginTopMobile='.5rem'
								width='45%'
								height='3rem'
								color='#fff'
								backgroundColor='#115680'
								text='Enviar'
							/>
						</ButtonsBox>
					</Form>)
				}
			</CreateBox>
		</CreateContainer>
	)

	renderCurrentScreen = () => {
		switch (this.state.currentScreen) {
		case 'login':
			return this.renderLogin();
		case 'create':
			return this.renderCreateAccount();
		case 'recoverPassword':
			return this.renderRecoverPassword();
		case 'forgot':
			return this.renderForgotPassword();
		case 'password':
			return this.renderResetPassword();
		case 'invite':
			return this.renderConfirmEmailMessage();
		default:
			return this.renderLogin();
		}
	}

	render() {
		return (
			<Container screen={this.state.screen}>
				{this.renderCurrentScreen()}
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
