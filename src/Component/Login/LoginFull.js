import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ContainerLogin = styled.div`
	position: fixed;
	display: flex;
	justify-content: ${(props) => (props.isCreate ? 'flex-start' : 'center')};
	align-items: center;
	flex-direction: ${(props) => (props.isCreate ? 'row' : 'column')};
	width: 100%;
	height: 100%;
	margin: 0;
	padding: ${(props) => (props.isCreate ? '0' : '.5rem')};
	${'' /* background-image: url(${(props) => (props.forgot ? backgroundReset : backgroundLogin)}); */}
	background-repeat: no-repeat;
	background-size: cover;
	@media (max-width: 450px) {
		padding: ${(props) => (props.isCreate ? '0' : '1rem 0')};
		${'' /* background-image: url(${(props) => (props.forgot ? backgroundReset : backgroundMobileLogin)}); */}
		background-position: ${(props) => (props.forgot && 'right')};
	}
`;

const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: ${(props) => (props.isCreate ? 'flex-start' : 'center')};
	flex-direction: column;
	width: ${(props) => (props.isCreate ? '65%' : '500px')};
	height: ${(props) => (props.isCreate && '100%')};
	padding: 1rem;
	padding-bottom: ${(props) => (!props.isCreate && '2.5rem')};
	border-radius: 4px;
	background-color: var(--strytegy-third-details);
	box-shadow: 0px 1px 2px var(--strytegy-shadow);
	@media (max-width: 450px) {
		margin: 0;
		padding-bottom: ${(props) => (props.isCreate ? '0' : '1.5rem')};
		position: ${(props) => (props.isCreate && 'absolute')};
		/* top: ${(props) => props.isCreate && '5.5rem;'}; */
		left: ${(props) => props.isCreate && '0'};
		width: ${(props) => (props.isCreate ? '100%' : '95%')};
		min-height: ${(props) => props.hasHeight && '400px'};
		height: ${(props) => props.isCreate && '75%'};
		justify-content: center;
	}
	@media (max-width: 322px) {
		min-height: 0;
		max-height: ${(props) => props.hasHeight && '475px'};
	}
`;

// const ContainerCreate = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-direction: column;
// 	width: 500px;
// 	height: 460px;
// 	@media (max-width: 450px) {
// 		width: 100%;
// 		/* height: 100%; */
// 		height: 500px;
// 		display: flex;
// 		justify-content: space-evenly;
// 	}
// `;

// const CreateAccountTitle = styled.h1`
// 	width: 80%;
// 	margin: 1rem;
// 	padding-left: .8rem;
// 	font: 600 1.5rem 'Korolev', sans-serif;
// 	@media (max-width: 450px) {
// 		margin: 0;
// 		width: 95%;
// 		font-size: 1.2rem;
// 	}
// `;

const LoginWrapperHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: ${(props) => (props.createAccount ? 'flex-start' : 'center')};
	width: ${(props) => (props.createAccount ? '35%' : '100%')};
	height: ${(props) => (props.createAccount && '100vh')};
	margin: 1rem 0;
	box-sizing: border-box;
	@media (max-width: 450px) {
		align-items: center;
		width: 100%;
		height: auto;
		margin: ${(props) => (props.createAccount ? '0' : '.5rem 0')};
	}
`;

// const BackgroundCreate = styled(LoginWrapperHeader)`
// 	margin: 0;
// 	width: 100%;
// 	height: 100vh;
// 	background-image: url(${backgroundCreateAccount});
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	background-position: center;
// 	@media (max-width: 450px) {
// 		display: flex;
// 		align-items: flex-start;
// 	}
// `;

// const ContainerLoginFormIcon = styled.div`
// 	padding: 2rem 0;
// 	width: 80%;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// 	@media (max-width: 450px) {
// 		display: none;
// 	}
// `;

const LoginHeaderIcon = styled.img`
	width: 7.75rem;
`;

// const LoginHeaderIconMobile = styled.img`
// 	display: none;
// 	@media (max-width: 450px) {
// 		padding: 1.3rem 0;
// 		width: 8rem;
// 		display: flex;
// 	}
// 	@media (max-width: 376px) {
// 		padding: 1.5rem 0;
// 		width: 8rem;
// 	}
// `;

// const LoginTitle = styled.p`
// 	width: 80%;
// 	margin-bottom: 0;
// 	font: 600 1rem 'Korolev', sans-serif;
// 	color: var(--strytegy-principal);
// 	@media (max-width: 450px) {
// 		width: 95%;
// 	}
// `;

// const LoginTextConfirmCode = styled.p`
// 	width: 80%;
// 	margin-bottom: 0;
// 	font: 200 1rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// 	@media (max-width: 450px) {
// 		width: 95%;
// 		font-size: .9rem;
// 	}
// `;

const LoginForm = styled.form`
	width: 80%;
	margin: 1rem;
	padding: 0;
	box-sizing: border-box;
	@media (max-width: 450px) {
		margin-bottom: 0;
		width: 95%;
	}
`;

// const LoginFormLabel = styled.label`
// 	margin: .3rem;
// 	padding-left: .5rem;
// 	font: 400 .75rem 'Korolev', sans-serif;
// 	color: var(--strytegy-principal);
// `;

const ContainerInput = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 3.5rem;
	margin: 5px 0;
	border: solid 1px var(--strytegy-second-border);
	border-radius: 4px;
	background-color: var(--strytegy-hover);
`;

const LoginFormInput = styled.input`
	padding: 0 1rem;
	width: ${(props) => (props.password ? 'calc(100% - 2.25rem)' : '100%')};
	height: 99%;
	border: none;
	border-radius: 4px;
	background-color: var(--strytegy-hover);
	font: 200 1rem 'Korolev', sans-serif;
	outline: none;
`;

// const LoginFormText = styled.p`
// 	width: 100%;
// 	padding: 0 1rem;
// 	font: 200 .95rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// 	@media (max-width: 450px) {
// 		font-size: .95rem;
// 	}
// `;

// const LoginFormTextTerms = styled.span`
// 	display: inline-block;
// 	margin-right: 3px;
// `;

// const LoginFormTextTermsRight = styled(LoginFormTextTerms)`
// 	margin-left: 3px;
// `;

const ContainerOptionText = styled.div`
	width: ${(props) => (props.createOption ? '80%' : '100%')};
	display: flex;
	justify-content: center;
	align-items: center;
	::before {
		content: '';
		z-index: 1;
		width: 35%;
		border-bottom: solid .60px var(--strytegy-second-details);
	}
	::after {
		content: '';
		z-index: 1;
		width: 35%;
		border-bottom: solid .60px var(--strytegy-second-details);
	}
`;

const LoginFormTextOption = styled.p`
	padding: 0 1rem;
	z-index: 3;
	font: 200 .95rem 'Korolev', sans-serif;
	color: var(--strytegy-primary-text);
`;

const OptionButton = styled.button`
	width: ${(props) => (props.createOption ? '80%' : '100%')};
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
`;

const OptionImage = styled.img`
	width: 20px;
`;

const IconInputPassword = styled.img`
	position: ${(props) => props.loginScreen && 'absolute'};
	top: ${(props) => props.loginScreen && '37%'};
	right: ${(props) => props.loginScreen && '0'};
	width: 1.25rem;
	margin-right: 1rem;
	cursor: pointer;
`;

const LoginFormFooter = styled.div`
	display: flex;
	justify-content: ${(props) => (props.hasDisplay ? 'space-between' : 'center')};
	flex-direction: ${(props) => (props.hasDisplay ? 'row' : 'column')};
	align-items: center;
	width: 80%;
	padding: 0;
	box-sizing: border-box;
	@media (max-width: 450px) {
		width: 95%;
	}
`;

// const ContainerTextAccount = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	font: 200 .9rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// `;

// const TextAccountCreate = styled.p`
// 	margin: 0 .25rem;
// 	font: 200 .9rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// 	text-decoration: underline;
// 	cursor: pointer;
// `;

const LoginTextForgotPassword = styled.p`
	position: ${(props) => props.createAccount && 'absolute'};
	top: ${(props) => props.createAccount && '1rem'};
	left: ${(props) => props.createAccount && 'calc(35% + 4.9rem)'};
	margin: 10px 0;
	font: 200 1rem 'Korolev', sans-serif;
	color: var(--strytegy-primary-text);
	cursor: pointer;
	@media (max-width: 648px) {
		left: ${(props) => props.createAccount && '1rem'};
	}
`;

// const LoginTextHaveAccount = styled.p`
// 	position: ${(props) => props.createAccount && 'absolute'};
// 	top: ${(props) => props.createAccount && '1rem'};
// 	right: ${(props) => props.createAccount && '2rem'};
// 	font: 200 1rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// 	text-decoration: ${(props) => props.createAccount && 'underline'};
// 	cursor: pointer;
// 	@media (max-width: 450px) {
// 		display: ${(props) => props.createAccount && 'none'};
// 		font-size: .85rem;
// 	}
// `;

// const LoginTextHaveAccountMobile = styled.p`
// 	display: none;
// 	font: 200 1rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// 	text-decoration: underline;
// 	cursor: pointer;
// 	@media (max-width: 450px) {
// 		display: block;
// 	}
// `;

const LoginTextReceiveCode = styled.p`
	font: 200 1.1rem 'Korolev', sans-serif;
	color: var(--strytegy-primary-text);
	text-decoration: ${(props) => props.hasUnderline && 'underline'};
	cursor: pointer;
	@media (max-width: 450px) {
		font-size: .85rem;
	}
`;

// const LoginFormHeader = styled.div`
// 	width: 80%;
// 	@media (max-width: 450px) {
// 		width: 95%;
// 	}
// `;

const LoginMessageErro = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;

const LoginIconErro = styled.img`
	width: .75rem;
	margin-right: 0.25rem;
`;

const TextMessageErro = styled.p`
	margin: .5rem 0;
	padding: 0;
	font: 200 .9rem 'Korolev', sans-serif;
	color: var(--strytegy-error);
	@media (max-width: 450px) {
		font-size: .8rem;
	}
`;

// const ContainerConfirmEmail = styled.div`
// 	width: 80%;
// 	@media (max-width: 450px) {
// 		width: 95%;
// 	}
// `;

// const InviteText = styled.p`
// 	margin: 1rem 0;
// 	padding-left: .8rem;
// 	font: 400 1rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// `;

// const EmailUser = styled.span`
// 	color: var(--strytegy-principal);
// `;

// const ForwardEmail = styled.p`
// 	margin: 0;
// 	padding: 1.3rem 0;
// 	font: 400 1rem 'Korolev', sans-serif;
// 	color: var(--strytegy-primary-text);
// 	text-align: center;
// 	text-decoration: ${(props) => props.hasUnderline && 'underline'};
// 	cursor: ${(props) => props.hasUnderline && 'pointer'};
// `;

const ContainerButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 3rem;
	margin-top: 1.3rem;
	margin-bottom: ${(props) => (props.create ? '0' : '.5rem')};
	border-radius: 4px;
	border: none;
	background: var(--strytegy-principal);
	box-shadow: 0 2px 4px var(--strytegy-shadow);
`;

// const LoaderContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%;
// `;

const Loader = styled.img`
	width: 35px;
	height: 35px;
	margin-top: 1.25rem;
`;

const LoadingButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	font: 600 .85rem 'Korolev', sans-serif;
	color: var(--strytegy-third-details);
	border: none;
	background: transparent;
	cursor: ${(props) => props.hasCursor && 'pointer'};
	&:focus {
		outline: none;
	}
`;

// const LoadingMessage = styled.span`
// 	display: inline-block;
// 	margin: 0.25rem 0;
// 	margin-left: .4rem;
// 	color: var(--strytegy-third-details);
// 	font: 600 .85rem 'Korolev', sans-serif;
// `;

// const LoaderIcon = styled.img`
// 	width: 25px;
// 	height: 25px;
// `;

const ContainerFooter = styled.div`
	position: absolute;
	bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => (props.createAccount ? '35%' : '100%')};
	@media (max-width: 1025px) {
		${(props) => props.createAccount && (`
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 0 2rem;
		`)};
	}
	@media (max-width: 450px) {
		position: fixed;
		width: 100%;
		${(props) => props.createAccount && (`
			flex-direction: row;
			align-items: center;
		`)};
	}
`;

const LoginTextForgotPasswordEmail = styled.a`
	margin: .625rem .5rem;
	font: 200 1rem 'Korolev', sans-serif;
	color: var(--strytegy-primary-text);
	cursor: pointer;
	text-decoration: none;
	@media (max-width: 640px) {
		margin: 0 .5rem;
		font-size: 1rem;
	}
`;

// const LoginButtonForgotPasswordEmail = styled.button`
// 	margin: .625rem .5rem;
// 	padding: 0;
// 	color: var(--strytegy-primary-text);
// 	font: 200 1rem 'Korolev', sans-serif;
// 	border: none;
// 	background: transparent;
// 	cursor: pointer;
// 	outline: none;
// 	@media (max-width: 640px) {
// 		white-space: nowrap;
// 		font-size: .85rem;
// 	}
// `;

// const OverlayTerms = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;
// 	width: 100%;
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	z-index: 4;
// 	background-color: #00000020;
// `;

// const ContainerTerms = styled.div`
// 	position: relative;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	padding: 0 1rem;
// 	width: 425px;
// 	border-radius: 4px;
// 	box-shadow: 0 3px 6px var(--strytegy-shadow);
// 	background: var(--strytegy-third-details);
// `;

// const TermsText = styled.p`
// 	margin: ${props => props.bold && '0'};
// 	width: 95%;
// 	font: ${props => (props.bold ? '600' : '200')} .85rem 'Korolev',sans-serif;
// 	color: ${props => (props.purple ? '#4152C0' : '#505050')};
// `;

// const TermsTitle = styled(TermsText)`
// 	font-size: 1.5rem;
// 	margin: .60rem 0;
// 	padding: 0 .80rem;
// `;

// const TermsContent = styled.div`
// 	padding: 1rem;
// 	background: var(--strytegy-hover);
// `;

// const ContainerTermsButton = styled.div`
// 	padding: 1rem 0.70rem;
// 	width: 100%;
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// `;

// const TermsButton = styled.button`
// 	padding: .70rem;
// 	width: 120px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	color: var(--strytegy-third-details);
// 	font: 600 .90rem 'Korolev', sans-serif;
// 	border: none;
// 	border-radius: 4px;
// 	cursor: pointer;
// 	outline: none;
// 	background-color: var(--strytegy-principal);
// `;

// const Link = styled.a`
// 	border-bottom: 1px solid var(--strytegy-primary-text);
// 	cursor: pointer;
// 	text-decoration: none;
// `;

class LoginFull extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderSubmitButton = (i18n, clickHandler) => {
		const { isLoading } = this.state;

		return (
			<ContainerButton>
				<LoadingButton
					onClick={clickHandler}
					hasCursor={!isLoading}>
					{/* {I18n.get(i18n)} */}
				</LoadingButton>
			</ContainerButton>
		);
	}

	renderError = () => {
		if (this.state.error && !this.state.isLoading) {
			return (
				<LoginMessageErro>
					<LoginIconErro
						// src={loginErro}
					/>
					<TextMessageErro>
						{/* {I18n.get(this.state.error)} */}
					</TextMessageErro>
				</LoginMessageErro>
			);
		}

		return null;
	}

	renderLogin = () => (
		<Fragment>
			<LoginForm onSubmit={this.handleLogin} key={1}>
				{/* <LoginFormLabel>{I18n.get('login-email')}</LoginFormLabel> */}
				<ContainerInput>
					<LoginFormInput
						innerRef={(node) => { this.loginEmailRef = node; }}
						type="email"
						name="email"
						required
						// placeholder={I18n.get('login-email-placeholder')}
						data-testid="login-input"
					/>
				</ContainerInput>
				{/* <LoginFormLabel>{I18n.get('login-password')}</LoginFormLabel> */}
				<ContainerInput>
					<LoginFormInput
						innerRef={(node) => { this.loginPasswordRef = node; }}
						type={this.state.inputType}
						name="password"
						required
						// placeholder={I18n.get('login-password-placeholder')}
						data-testid="password-input"
					/>
					<IconInputPassword
						loginScreen
						// src={this.state.inputType === 'password' ? showPassword : hidePassword}
						onClick={this.showPassword}
					/>
				</ContainerInput>
				{this.renderError()}
				{this.renderSubmitButton('login-login')}
				<ContainerOptionText>
					<LoginFormTextOption>
						{/* {I18n.get('login-option-create-account')} */}
					</LoginFormTextOption>
				</ContainerOptionText>
				<OptionButton
					onClick={this.handleGoogleLogin}
				>
					<OptionImage
						// src={iconGoogle}
					/>
					<LoginFormTextOption>
						Log in with Google
					</LoginFormTextOption>
				</OptionButton>
			</LoginForm>
			<LoginFormFooter
				hasDisplay
			>
				<LoginTextForgotPassword
					onClick={this.openNewAccountScreen}
					data-testid='create-account-link'
				>
					{/* {I18n.get('login-new-account')} */}
				</LoginTextForgotPassword>
				<LoginTextForgotPassword
					onClick={this.openForgotPasswordScreen}
					data-testid="forgot-password-link"
				>
					{/* {I18n.get('login-forgot-password')} */}
				</LoginTextForgotPassword>
			</LoginFormFooter>
		</Fragment>
	);

	// handleShowTermsOfServices = () => {
	// 	this.setState({
	// 		showTerms: true,
	// 	});
	// }

	// handleCloseTermsOfServices = () => {
	// 	this.setState({
	// 		showTerms: false,
	// 	});
	// }

	// renderTermsOfServices = () => {
	// 	return (
	// 		<OverlayTerms>
	// 			<ContainerTerms>
	// 				<TermsTitle bold>Terms of Service</TermsTitle>
	// 				<TermsContent>
	// 					<TermsText bold>Strytegy</TermsText>
	// 					<TermsText purple>LAST UPDATED: August 13, 2019</TermsText>
	// 					<TermsText bold>1. Acceptance of Strytegy terms of service.</TermsText>
	// 					<TermsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac consectetur massa. Pellentesque at vestibulum justo. Donec sed nibh dignissim, vestibulum neque sed, ornare ex. In purus odio, sodales non nibh quis, interdum maximus neque. Proin et imperdiet elit. Aliquam erat volutpat. Etiam luctus libero id neque commodo placerat. Etiam vitae molestie eros. Etiam dui urna, pulvinar eget neque in, pharetra bibendum diam. Donec sit amet sem eu enim sollicitudin consectetur tristique ac nunc.</TermsText>
	// 					<TermsText> Quisque nec risus id nisi viverra gravida. Fusce sed lacus lorem. Ut sit amet luctus est. Donec facilisis justo mi, ut consequat urna blandit at. Quisque eleifend rutrum felis.</TermsText>
	// 				</TermsContent>
	// 				<ContainerTermsButton>
	// 					<TermsButton onClick={this.handleCloseTermsOfServices}>OK</TermsButton>
	// 				</ContainerTermsButton>
	// 			</ContainerTerms>
	// 		</OverlayTerms>
	// 	);
	// }

	// renderLink = () => (
	// 	<Link
	// 	// onClick={this.handleShowTermsOfServices}
	// 	>
	// 		{/* {I18n.get('login-terms-link')} */}
	// 	</Link>
	// )

	// renderTermsLink = () => (
	// 	<LoginFormText>
	// 		<LoginFormTextTerms>
	// 			{I18n.get('login-agree-terms').split(/ *\([^)]*\) */g)[0]}
	// 		</LoginFormTextTerms>
	// 		{this.renderLink()}
	// 		<LoginFormTextTermsRight>
	// 			{I18n.get('login-agree-terms').split(/ *\([^)]*\) */g)[1]}
	// 		</LoginFormTextTermsRight>
	// 	</LoginFormText>
	// )

	stopClick = (ev) => {
		ev.stopPropagation();
	}

	renderLoginTextReceiveCode = () => {
		if (!this.state.isSendingCode && !this.state.error) {
			return (
				<LoginTextReceiveCode
					onClick={!this.state.codeSent ? this.handleResendCode : null}
					hasUnderline={!this.state.codeSent}
					data-testid="resend-code-link"
				>
					{/* {I18n.get(this.state.codeSent ? 'login-received-code' : 'login-receive-code')} */}
				</LoginTextReceiveCode>
			);
		}

		if (this.state.isSendingCode) {
			return (
				<Loader
					// src={loader}
				/>
			);
		}

		return null;
	}

	// renderResetPassword = () => (
	// 	<Fragment>
	// 		<LoginFormHeader>
	// 		</LoginFormHeader>
	// 		{/* <LoginTitle>{I18n.get('login-title-reset-password')}</LoginTitle> */}
	// 		<LoginTextConfirmCode>
	// 			{this.getTranslatedResetPasswordMessage(this.state.email)}
	// 		</LoginTextConfirmCode>
	// 		<LoginForm onSubmit={this.handlePasswordConfirmation} key={6}>
	// 			<LoginFormLabel>
	// 				{/* {I18n.get('login-confirmation-code')} */}
	// 			</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.confirmationCode = node; }}
	// 					name="token"
	// 					type="number"
	// 					required
	// 					// placeholder={I18n.get('login-proceed-password-placeholder')}
	// 					data-testid="login-confirmation-code"
	// 				/>
	// 			</ContainerInput>
	// 			<LoginFormLabel>
	// 				{/* {I18n.get('login-new-password')} */}
	// 			</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.newPasswordRef = node; }}
	// 					name="resetPassword"
	// 					type={this.state.inputType}
	// 					required
	// 					// placeholder={I18n.get('login-password')}
	// 					data-testid="login-new-password"
	// 					password
	// 				/>
	// 				<IconInputPassword
	// 					// src={this.state.inputType === 'password' ? showPassword : hidePassword}
	// 					onClick={this.showPassword}
	// 				/>
	// 			</ContainerInput>
	// 			<LoginFormLabel>
	// 				{/* {I18n.get('login-new-password-confirmation')}/ */}
	// 			</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.newPasswordMatchRef = node; }}
	// 					name="passwordConfirmation"
	// 					type={this.state.inputType}
	// 					required
	// 					// placeholder={I18n.get('login-password')}
	// 					data-testid="login-new-password-match"
	// 					password
	// 				/>
	// 				<IconInputPassword
	// 					// src={this.state.inputType === 'password' ? showPassword : hidePassword}
	// 					onClick={this.showPassword}
	// 				/>
	// 			</ContainerInput>
	// 			{this.renderSubmitButton(
	// 				'login-forgot-password',
	// 			)
	// 			}
	// 		</LoginForm>
	// 		<LoginFormFooter>
	// 			{this.renderError()}
	// 			{this.renderLoginTextReceiveCode()}
	// 		</LoginFormFooter>
	// 	</Fragment>
	// );

	// renderConfirmEmailMessage = () => (
	// 	<Fragment>
	// 		<LoginTextForgotPassword
	// 			onClick={this.openNewAccountScreen}
	// 			createAccount
	// 		>
	// 			{/* {I18n.get('create-account-back')} */}
	// 		</LoginTextForgotPassword>
	// 		<LoginTextHaveAccount
	// 			onClick={this.openLoginScreen}
	// 			createAccount
	// 		>
	// 			{/* {I18n.get('login-already-account')} */}
	// 		</LoginTextHaveAccount>
	// 		<ContainerCreate>
	// 			<ContainerLoginFormIcon>
	// 				<LoginHeaderIcon
	// 					// src={iconStartupin}
	// 				/>
	// 			</ContainerLoginFormIcon>
	// 			<CreateAccountTitle>
	// 				{/* {I18n.get('login-create-account')} */}
	// 			</CreateAccountTitle>
	// 			<ContainerConfirmEmail>
	// 				<InviteText>
	// 					{/* {I18n.get('email-invite')} */}
	// 					<EmailUser>{this.state.email}</EmailUser>
	// 				</InviteText>
	// 				{!this.state.isSendingEmail
	// 					? <ForwardEmail
	// 						onClick={!this.state.emailSent ? this.handleResendEmail : null}
	// 						hasUnderline={!this.state.emailSent}
	// 					>
	// 						{/* {I18n.get(this.state.emailSent ? 'email-sent' : 'email-resend')} */}
	// 					</ForwardEmail>
	// 					: (
	// 						<LoaderContainer>
	// 							<Loader
	// 								// src={loader}
	// 							/>
	// 						</LoaderContainer>
	// 					)
	// 				}
	// 				{this.renderSubmitButton(
	// 					'user-confirmed-button',
	// 					this.handleReload,
	// 				)}
	// 				{this.renderError()}
	// 			</ContainerConfirmEmail>
	// 		</ContainerCreate>
	// 	</Fragment>
	// );

	renderSubmitButton = (i18n, clickHandler) => {
		const { isLoading } = this.state;

		return (
			<ContainerButton>
				<LoadingButton
					onClick={clickHandler}
					hasCursor={!isLoading}>
					{/* {I18n.get(i18n)} */}
				</LoadingButton>
			</ContainerButton>
		);
	}

	renderError = () => {
		if (this.state.error && !this.state.isLoading) {
			return (
				<LoginMessageErro>
					<LoginIconErro
						// src={loginErro}
					/>
					<TextMessageErro>
						{/* {I18n.get(this.state.error)} */}
					</TextMessageErro>
				</LoginMessageErro>
			);
		}

		return null;
	}

	renderLogin = () => (
		<Fragment>
			<LoginForm onSubmit={this.handleLogin} key={1}>
				{/* <LoginFormLabel>{I18n.get('login-email')}</LoginFormLabel> */}
				<ContainerInput>
					<LoginFormInput
						innerRef={(node) => { this.loginEmailRef = node; }}
						type="email"
						name="email"
						required
						// placeholder={I18n.get('login-email-placeholder')}
						data-testid="login-input"
					/>
				</ContainerInput>
				{/* <LoginFormLabel>{I18n.get('login-password')}</LoginFormLabel> */}
				<ContainerInput>
					<LoginFormInput
						innerRef={(node) => { this.loginPasswordRef = node; }}
						type={this.state.inputType}
						name="password"
						required
						// placeholder={I18n.get('login-password-placeholder')}
						data-testid="password-input"
					/>
					<IconInputPassword
						loginScreen
						// src={this.state.inputType === 'password' ? showPassword : hidePassword}
						onClick={this.showPassword}
					/>
				</ContainerInput>
				{this.renderError()}
				{this.renderSubmitButton('login-login')}
				<ContainerOptionText>
					<LoginFormTextOption>
						{/* {I18n.get('login-option-create-account')} */}
					</LoginFormTextOption>
				</ContainerOptionText>
				<OptionButton
					onClick={this.handleGoogleLogin}
				>
					<OptionImage
						// src={iconGoogle}
					/>
					<LoginFormTextOption>
						Log in with Google
					</LoginFormTextOption>
				</OptionButton>
			</LoginForm>
			<LoginFormFooter
				hasDisplay
			>
				<LoginTextForgotPassword
					onClick={this.openNewAccountScreen}
					data-testid='create-account-link'
				>
					{/* {I18n.get('login-new-account')} */}
				</LoginTextForgotPassword>
				<LoginTextForgotPassword
					onClick={this.openForgotPasswordScreen}
					data-testid="forgot-password-link"
				>
					{/* {I18n.get('login-forgot-password')} */}
				</LoginTextForgotPassword>
			</LoginFormFooter>
		</Fragment>
	);

	// handleShowTermsOfServices = () => {
	// 	this.setState({
	// 		showTerms: true,
	// 	});
	// }

	// handleCloseTermsOfServices = () => {
	// 	this.setState({
	// 		showTerms: false,
	// 	});
	// }

	// renderTermsOfServices = () => {
	// 	return (
	// 		<OverlayTerms>
	// 			<ContainerTerms>
	// 				<TermsTitle bold>Terms of Service</TermsTitle>
	// 				<TermsContent>
	// 					<TermsText bold>Strytegy</TermsText>
	// 					<TermsText purple>LAST UPDATED: August 13, 2019</TermsText>
	// 					<TermsText bold>1. Acceptance of Strytegy terms of service.</TermsText>
	// 					<TermsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac consectetur massa. Pellentesque at vestibulum justo. Donec sed nibh dignissim, vestibulum neque sed, ornare ex. In purus odio, sodales non nibh quis, interdum maximus neque. Proin et imperdiet elit. Aliquam erat volutpat. Etiam luctus libero id neque commodo placerat. Etiam vitae molestie eros. Etiam dui urna, pulvinar eget neque in, pharetra bibendum diam. Donec sit amet sem eu enim sollicitudin consectetur tristique ac nunc.</TermsText>
	// 					<TermsText> Quisque nec risus id nisi viverra gravida. Fusce sed lacus lorem. Ut sit amet luctus est. Donec facilisis justo mi, ut consequat urna blandit at. Quisque eleifend rutrum felis.</TermsText>
	// 				</TermsContent>
	// 				<ContainerTermsButton>
	// 					<TermsButton onClick={this.handleCloseTermsOfServices}>OK</TermsButton>
	// 				</ContainerTermsButton>
	// 			</ContainerTerms>
	// 		</OverlayTerms>
	// 	);
	// }

	// renderLink = () => (
	// 	<Link
	// 	// onClick={this.handleShowTermsOfServices}
	// 	>
	// {I18n.get('login-terms-link')}
	// 	</Link>
	// )

	// renderTermsLink = () => (
	// 	<LoginFormText>
	// 		<LoginFormTextTerms>
	//			{I18n.get('login-agree-terms').split(/ *\([^)]*\) */g)[0]}
	// 		</LoginFormTextTerms>
	// 		{this.renderLink()}
	// 		<LoginFormTextTermsRight>
	//		{I18n.get('login-agree-terms').split(/ *\([^)]*\) */g)[1]}
	// 		</LoginFormTextTermsRight>
	// 	</LoginFormText>
	// )

	stopClick = (ev) => {
		ev.stopPropagation();
	}

	// renderCreateAccount = () => (
	// 	<Fragment>
	// 		<LoginTextHaveAccount
	// 			onClick={this.openLoginScreen}
	// 			createAccount
	// 		>
	//			{I18n.get('login-already-account')}
	// 		</LoginTextHaveAccount>
	// 		<ContainerCreate>
	// 			<ContainerLoginFormIcon>
	// 				<LoginHeaderIcon src={iconStartupin} />
	// 			</ContainerLoginFormIcon>
	// 			<CreateAccountTitle>
	//				{I18n.get('login-create-account')}
	// 			</CreateAccountTitle>
	// 			<LoginForm onSubmit={this.handleCreateAccount} key={2}>
	//				{/* <LoginFormLabel>{I18n.get('login-name')}</LoginFormLabel>
	// 				<ContainerInput>
	// 					<LoginFormInput
	// 						innerRef={(node) => { this.createNameRef = node; }}
	// 						required={true}
	// 						type="name"
	// 						name="createName"
	// 						onChange={this.handleChangeNameCreate}
	// 						value={this.state.name}
	//						placeholder={I18n.get('login-name-placeholder')}
	// 					/>
	// 				</ContainerInput> */}
	//				<LoginFormLabel>{I18n.get('login-email')}</LoginFormLabel>
	// 				<ContainerInput>
	// 					<LoginFormInput
	// 						innerRef={(node) => { this.createEmailRef = node; }}
	// 						required={true}
	// 						type="email"
	// 						name="createEmail"
	// 						onChange={this.handleChangeEmailCreate}
	// 						value={this.state.email}
	//						placeholder={I18n.get('login-email-placeholder')}
	// 						data-testid="create-email-input"
	// 					/>
	// 				</ContainerInput>
	//				<LoginFormLabel>{I18n.get('login-password')}</LoginFormLabel>
	// 				<ContainerInput>
	// 					<LoginFormInput
	// 						required={true}
	// 						type={this.state.inputType}
	// 						name="createPassword"
	//						placeholder={I18n.get('login-password-placeholder')}
	// 						data-testid="create-password-input"
	// 					/>
	// 					<IconInputPassword
	// 						src={this.state.inputType === 'password' ? showPassword : hidePassword}
	// 						onClick={this.showPassword}
	// 						loginScreen
	// 					/>
	// 				</ContainerInput>
	// 				{this.renderTermsLink()}
	// 				{this.renderSubmitButton(
	// 					'login-create-account-button',
	// 				)}
	// 			</LoginForm>
	// 			<ContainerOptionText createOption>
	// 				<LoginFormTextOption>
	//					{I18n.get('login-option-create-account')}
	// 				</LoginFormTextOption>
	// 			</ContainerOptionText>
	// 			<OptionButton
	// 				createOption
	// 				onClick={this.stopClick}
	// 			>
	// 				<OptionImage src={iconGoogle} />
	// 				<LoginFormTextOption>
	// 					Log in with Google
	// 				</LoginFormTextOption>
	// 			</OptionButton>
	// 			<LoginFormFooter>
	// 				{this.renderError()}
	// 				{this.state.error && this.state.error === 'user-already-created' && (
	// 					<ContainerTextAccount>
	// 						<TextAccountCreate
	// 							onClick={this.openLoginScreen}
	// 						>
	//							{I18n.get('login-login-create')}
	// 						</TextAccountCreate>
	//						{I18n.get('login-or')}
	// 						<TextAccountCreate
	// 							onClick={this.openForgotPasswordScreen}
	// 						>
	//							{I18n.get('login-reset-password')}
	// 						</TextAccountCreate>
	// 					</ContainerTextAccount>
	// 				)}
	// 			</LoginFormFooter>
	// 			<LoginTextHaveAccountMobile
	// 				onClick={this.openLoginScreen}
	// 			>
	//				{I18n.get('login-already-account')}
	// 			</LoginTextHaveAccountMobile>
	// 		</ContainerCreate>
	// 	</Fragment>
	// );

	// renderForgotPassword = () => (
	// 	<Fragment>
	// 		<LoginTitle>
	//			{I18n.get('login-title-reset-password')}
	// 		</LoginTitle>
	// 		<LoginForm
	// 			onSubmit={this.handleResetPassword}
	// 			key={4}
	// 			data-testid="reset-password-container"
	// 		>
	//			<LoginFormLabel>{I18n.get('login-email')}</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.forgotEmailRef = node; }}
	// 					type="email"
	// 					name="forgotEmail"
	// 					required
	// 					onChange={this.handleChangeEmailForgot}
	// 					value={this.state.email}
	//					placeholder={I18n.get('login-email-placeholder')}
	// 					data-testid="forgot-email-input"
	// 				/>
	// 			</ContainerInput>
	// 			{this.renderSubmitButton('login-request-password')}
	// 		</LoginForm>
	// 		<LoginFormFooter>
	// 			{this.renderError()}
	// 		</LoginFormFooter>
	// 		<LoginTextHaveAccount onClick={this.openLoginScreen}>
	//			{I18n.get('login-back')}
	// 		</LoginTextHaveAccount>
	// 	</Fragment>
	// );

	// renderLoginTextReceiveCode = () => {
	// 	if (!this.state.isSendingCode && !this.state.error) {
	// 		return (
	// 			<LoginTextReceiveCode
	// 				onClick={!this.state.codeSent ? this.handleResendCode : null}
	// 				hasUnderline={!this.state.codeSent}
	// 				data-testid="resend-code-link"
	// 			>
	//				{I18n.get(this.state.codeSent ? 'login-received-code' : 'login-receive-code')}
	// 			</LoginTextReceiveCode>
	// 		);
	// 	}

	// 	if (this.state.isSendingCode) {
	// 		return (
	// 			<Loader src={loader} />
	// 		);
	// 	}

	// 	return null;
	// }

	// renderResetPassword = () => (
	// 	<Fragment>
	// 		<LoginFormHeader>
	// 		</LoginFormHeader>
	//		<LoginTitle>{I18n.get('login-title-reset-password')}</LoginTitle>
	// 		<LoginTextConfirmCode>
	// 			{this.getTranslatedResetPasswordMessage(this.state.email)}
	// 		</LoginTextConfirmCode>
	// 		<LoginForm onSubmit={this.handlePasswordConfirmation} key={6}>
	// 			<LoginFormLabel>
	//				{I18n.get('login-confirmation-code')}
	// 			</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.confirmationCode = node; }}
	// 					name="token"
	// 					type="number"
	// 					required
	//					placeholder={I18n.get('login-proceed-password-placeholder')}
	// 					data-testid="login-confirmation-code"
	// 				/>
	// 			</ContainerInput>
	// 			<LoginFormLabel>
	//				{I18n.get('login-new-password')}
	// 			</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.newPasswordRef = node; }}
	// 					name="resetPassword"
	// 					type={this.state.inputType}
	// 					required
	//					placeholder={I18n.get('login-password')}
	// 					data-testid="login-new-password"
	// 					password
	// 				/>
	// 				<IconInputPassword
	// 					src={this.state.inputType === 'password' ? showPassword : hidePassword}
	// 					onClick={this.showPassword}
	// 				/>
	// 			</ContainerInput>
	// 			<LoginFormLabel>
	//				{I18n.get('login-new-password-confirmation')}/
	// 			</LoginFormLabel>
	// 			<ContainerInput>
	// 				<LoginFormInput
	// 					innerRef={(node) => { this.newPasswordMatchRef = node; }}
	// 					name="passwordConfirmation"
	// 					type={this.state.inputType}
	// 					required
	//					placeholder={I18n.get('login-password')}
	// 					data-testid="login-new-password-match"
	// 					password
	// 				/>
	// 				<IconInputPassword
	// 					src={this.state.inputType === 'password' ? showPassword : hidePassword}
	// 					onClick={this.showPassword}
	// 				/>
	// 			</ContainerInput>
	// 			{this.renderSubmitButton(
	// 				'login-forgot-password',
	// 			)
	// 			}
	// 		</LoginForm>
	// 		<LoginFormFooter>
	// 			{this.renderError()}
	// 			{this.renderLoginTextReceiveCode()}
	// 		</LoginFormFooter>
	// 	</Fragment>
	// );

	// renderConfirmEmailMessage = () => (
	// 	<Fragment>
	// 		<LoginTextForgotPassword
	// 			onClick={this.openNewAccountScreen}
	// 			createAccount
	// 		>
	//			{I18n.get('create-account-back')}
	// 		</LoginTextForgotPassword>
	// 		<LoginTextHaveAccount
	// 			onClick={this.openLoginScreen}
	// 			createAccount
	// 		>
	//			{I18n.get('login-already-account')}
	// 		</LoginTextHaveAccount>
	// 		<ContainerCreate>
	// 			<ContainerLoginFormIcon>
	// 				<LoginHeaderIcon src={iconStartupin} />
	// 			</ContainerLoginFormIcon>
	// 			<CreateAccountTitle>
	//				{I18n.get('login-create-account')}
	// 			</CreateAccountTitle>
	// 			<ContainerConfirmEmail>
	// 				<InviteText>
	//					{I18n.get('email-invite')}
	// 					<EmailUser>{this.state.email}</EmailUser>
	// 				</InviteText>
	// 				{!this.state.isSendingEmail
	// 					? <ForwardEmail
	// 						onClick={!this.state.emailSent ? this.handleResendEmail : null}
	// 						hasUnderline={!this.state.emailSent}
	// 					>
	//						{I18n.get(this.state.emailSent ? 'email-sent' : 'email-resend')}
	// 					</ForwardEmail>
	// 					: (
	// 						<LoaderContainer>
	// 							<Loader
	// 								src={loader}
	// 							/>
	// 						</LoaderContainer>
	// 					)
	// 				}
	// 				{this.renderSubmitButton(
	// 					'user-confirmed-button',
	// 					this.handleReload,
	// 				)}
	// 				{this.renderError()}
	// 			</ContainerConfirmEmail>
	// 		</ContainerCreate>
	// 	</Fragment>
	// );

	renderCurrentScreen = () => {
		switch (this.state.currentScreen) {
		case 'login':
			return this.renderLogin();
		// case 'create':
		// 	return this.renderCreateAccount();
		// case 'forgot':
		// 	return this.renderForgotPassword();
		// case 'password':
		// 	return this.renderResetPassword();
		// case 'invite':
		// 	return this.renderConfirmEmailMessage();
		default:
			return null;
		}
	}

	render() {
		const { currentScreen } = this.state;

		return (
			<ContainerLogin
				isCreate={currentScreen === 'create' || currentScreen === 'invite'}
				forgot={currentScreen === 'forgot' || currentScreen === 'password'}
			>
				{/* {(
					currentScreen === 'forgot' || currentScreen === 'password'
				) && (
					<LoginWrapperHeader>
						<LoginHeaderIcon src={iconStartupinWhite} />
					</LoginWrapperHeader>
				)} */}
				{/* {(
					currentScreen === 'create' || currentScreen === 'invite'
				) && (
					<LoginWrapperHeader createAccount>
						<BackgroundCreate>
							<LoginHeaderIconMobile src={iconStartupin} />
						</BackgroundCreate>
					</LoginWrapperHeader>
				)} */}
				<LoginWrapper
					hasHeight={currentScreen === 'login' || currentScreen === 'create' || currentScreen === 'invite'}
					isCreate={currentScreen === 'create' || currentScreen === 'invite'}
				>
					{(
						currentScreen === 'login'
					) && (
						<LoginWrapperHeader>
							<LoginHeaderIcon
								// src={iconStartupin}
							/>
						</LoginWrapperHeader>
					)}
					{this.renderCurrentScreen()}
				</LoginWrapper>
				{(currentScreen === 'login' || currentScreen === 'create' || currentScreen === 'invite') && (
					<ContainerFooter createAccount={currentScreen === 'create' || currentScreen === 'invite'}>
						<LoginTextForgotPasswordEmail
							href={'mailto:hey@strytegy.com'}
						>
							{/* {I18n.get('login-need-help')} */}
						</LoginTextForgotPasswordEmail>
						<LoginTextForgotPasswordEmail
							target="_blank"
							href={'https://feedback.userreport.com/e885d154-7cb2-4dac-bb84-e1bc185ffb1e/#ideas/popular'}
						>
							Feedback
						</LoginTextForgotPasswordEmail>
						{/* <LoginButtonForgotPasswordEmail
							onClick={this.handleShowTermsOfServices}
						>
							{I18n.get('login-terms-of-service')}
						</LoginButtonForgotPasswordEmail> */}
						{/* <LoginTextForgotPasswordEmail
							target="_blank"
							href={''}
						>
							{I18n.get('login-privacy')}
						</LoginTextForgotPasswordEmail> */}
					</ContainerFooter>
				)}
				{/* { showTerms && this.renderTermsOfServices() } */}
			</ContainerLogin>
		);
	}
}

export default LoginFull;
