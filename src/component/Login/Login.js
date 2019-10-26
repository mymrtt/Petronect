import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Images
import logo from '../../assets/img/LogoPNE.png';
import logoW from '../../assets/img/logoBranca.svg';
import showPassword from '../../assets/icon/login-show-password.svg';
import hidePassword from '../../assets/icon/login-hide-password.svg';
import imagemPrincpal from '../../assets/img/Grupo-8105.svg';

// Redux
import { loginUserThunk, createAccountThunk } from '../../dataflow/thunks/login-thunk';

import { updateError, updateCreateSuccess } from '../../dataflow/modules/login-module';

const mapStateToProps = (state) => ({
	error: state.login.error,
	createSuccess: state.login.createSuccess,
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
});

// Styled
const Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	background: transparent linear-gradient(180deg,#115680 0%,#116EA0 100%) 0% 0% no-repeat padding-box;
	padding: 0 4rem;
	@media (max-width: 768px) {
		flex-direction: ${(props) => !(props.screen === 'create') && 'column-reverse'};
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 450px) {
		padding: 1rem;
	}
`;

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 55%;
	height: 90vh;
	background: #FFF;
	border-radius: 0 0 6px 6px;
	@media (max-width: 960px) {
		padding: 2rem;
		width: 85%;
		height: min-content;
		border-radius: 6px;
	}
	@media (max-width: 450px) {
		width: 100%;
		height: 80vh;
		display: flex;
    justify-content: space-evenly;
		border-radius: 6px;
	}
`;

const Logo = styled.img`
	width: 35%;
	margin: 1rem 0;
	@media (max-width: 450px) {
		width: 55%;
		min-width: 180px;
	}
`;

const LogoCreate = styled.img`
	${'' /* position: absolute;
	top: 10%; */}
	width: 20%;
	min-width: 275px;
	@media(max-width: 768px) {
		padding: 2rem;
    width: 30%;
	}
`;

const InputBox = styled.span`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.alt ? 'row' : 'column')};
	justify-content: ${(props) => props.alt && 'space-between'};
	width: ${(props) => props.width};
	margin-top: ${(props) => props.last && '.5rem'};
	
	@media (max-width: 768px) {
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
	outline: none;
	::placeholder {
		font: 300 1rem Open Sans, sans serif;
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

const Button = styled.button`
	width: ${(props) => props.width};
	${'' /* width: ${(props) => (props.backMargin ? '100%' : props.width)}; */}
	height: 3rem;
	${'' /* margin-top: 2.5rem; */}
	margin-top: ${(props) => (props.backMargin ? '1.5rem' : '2.5rem')};
	background: ${(props) => (props.back ? '#FFF' : '#115680')};
	color: ${(props) => (props.back ? 'none' : '0px 3px 6px #00000029')};
	border: none;
	border-radius: 4px;
	outline: none;
	text-align: center;
	font: 600 1rem eurostile, sans serif;
	text-align: ${(props) => (props.backLeft ? 'left' : 'center')};
	letter-spacing: 0;
	color: ${(props) => (props.back ? '#115680' : '#FAFAFA')};
	cursor: pointer;
    ${'' /* text-align: center; */}
	@media (max-width: 960px) {
		width: ${(props) => (props.widthResponsive ? '45%' : '100%')};
	}
	@media (max-width: 450px) {
		margin-top: .5rem;
	}
`;

const AltBox = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 52.5%;
	margin-top: 3rem;
	@media (max-width: 960px) {
		margin-top: 1rem;
		width: 94%;
	}
	@media (max-width: 450px) {
		margin-top: 0;
		width: 90%;
	}
`;

const Link = styled.p`
	font: 400 1rem Eurostile, sans serif;
	letter-spacing: 0;
	color: ${(props) => props.color || '#505050'} ;
	text-decoration: ${(props) => (props.color ? 'underline' : 'none')} ;
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
	@media (max-width: 450px) {
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
	@media	(max-width: 960px) {
		width: 55%;
	}
	@media (max-width: 450px) {
		width: 85%;
	}
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
	padding: 3rem 4rem;
	background: #FFF;
	box-shadow: 0px 1px 2px #0000001A;
	border-radius: 4px;
	transition: width 1s; 
	@media(max-width: 1440px) {
		width: 50%;
	}
	@media(max-width: 960px) {
		width: 90%;
	}
	@media(max-width: 648px) {

		padding: 2rem;
	}
	@media(max-width: 450px) {
		width: 100%;
	}
`;

const TermsText = styled.p`
	width: 90%;
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
	@media(max-width: 450px) {
		margin-bottom: 1rem;
	}
`;

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
	@media (max-width: 450px) {
		flex-wrap: column;
		margin-top: 2.5rem;
	}
`;

const Form = styled.form`
	width: 95%;
	@media (max-width: 450px) {
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
		};
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

		if (this.state.error) {
			this.setState({
				error: undefined,
			});
		}
		
		return null;
	}

	renderError = () => {
		if (this.props.error) {
			return (
				<LoginMessageError>
					<TextError>
						Endereço de email e/ou senha incorretos
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
					 	A senha deve conter no minimo 6 caracteres
					</TextError>
				</LoginMessageError>
			);
		}

		return null;
	}

	
	handleCreate = () => {
		if (this.state.currentScreen !== 'create') {
			this.setState({
				currentScreen: 'create',
			});
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
			this.setState({
				currentScreen: 'login',
			});
		}
	}
	
	createSubmit = (ev) => {
		ev.preventDefault();

		console.log(this.createPasswordRef.value.trim().length > 5);

		if (this.createPasswordRef.value.trim().length > 5) {
			// this.props.createAccountThunk({
			// 	name: this.createNameRef.value,
			// 	email: this.createEmailRef.value,
			// 	password: this.createPasswordRef.value,
			// });
			this.setState({
				isCreated: true,
			});
		} else {
			this.setState({
				error: 'passwordLength'
			});
		}

	}

	handleBackLogin = () => {
		this.setState({
			currentScreen: 'login',
			isCreated: false,
		});
	}

	renderLogin = () => <>
		<InputContainer onSubmit={this.loginSubmit}>
			<Logo src={logo} />
			<InputBox width='55%'>
				<Label>E-mail</Label>
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
			<InputBox last lastResponsive width='55%'>
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
			<Button width='55%' widthLogin>
				Entrar
			</Button>
			<AltBox>
				<Link onClick={this.handleCreate} >Criar nova conta</Link>
				<Link onClick={this.handleRecoverPassword}>Recuperar Senha</Link>
			</AltBox>
		</InputContainer>
		<LoginBox>
			<Img src={imagemPrincpal} />
			<TextBox>
				<Text>
					Defina seus filtros, receba contratos selecionados e esqueça como listas de mil itens.
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
							Sucesso! Verifique seu caixa de email.
						</CreateTitle>
						<CreatedText>
							Sua conta foi criado com secesso. Por favor, verifique sua caixa de email, para efetuar confirmar a criação da conta!
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
							<Label>Email</Label>
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
							Clique abaixo para concordar com nossos <strong>Termos de Serviço</strong> e se inscrever.
						</TermsText>
						<Button width='100%'>
							Concordar e criar conta
						</Button>
					</form>)
				}
				<Button back backMargin width='100%' onClick={this.handleBackLogin}>
			  	Voltar para o login
				</Button>
			</CreateBox>
		</CreateContainer>
	)

	renderRecoverPassword = () => (
		<CreateContainer>
			<LogoCreate src={logoW} />
			<CreateBox>
				<Form>
					<CreateTitle>
						Recuperar Senha
					</CreateTitle>
					<InputBox last width='100%'>
						<Label>Email</Label>
						<Input
							type={'email'}
							placeholder={'nome@email.com'}
						/>
					</InputBox>
					<InputBox last width='100%'>
						<Label>Confirmar email</Label>
						<Input
							type={'email'}
							placeholder={'nome@email.com'}
						/>
					</InputBox>
					<ButtonsBox>
						<Button back  width='45%' backLeft widthResponsive onClick={this.handleBackLogin}>
							Voltar
						</Button>
						<Button width='45%' widthResponsive>
							Enviar
						</Button>
					</ButtonsBox>
				</Form>
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
