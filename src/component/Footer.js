// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Images
import RelevanceImg from '../assets/icon/icon_menu-Relevancia.svg';
import FilterImg from '../assets/icon/icon_menu.svg';

const FooterMobile = styled.div`
	@media (max-width: 648px) {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 3rem;
		display: flex;
		align-items: center;
		z-index: 1;
		background-color: #fff;
		border: #0000001A solid 1px;
	}
`;

const Image = styled.img`
	@media (max-width: 640px) {
		width: 15px;
	}
`;

const FooterMobileItem = styled.div`
	display: none;
	@media (max-width: 648px) {
		// margin: 0 .60rem;
		display: flex;
		width: 50%;
		height: 2.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #116EA015;
		border-radius: 20px;
		cursor: pointer;
	}
`;

const FooterMobileText = styled(Link)`
	@media (max-width: 648px) {
		margin-left: 0.4rem;
		font-size: .75rem;
		font-weight: 900;
		color: #116ea0;
		white-space: nowrap;
	}
`;

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBackgroundMath: false,
			isBackgroundNot: false,
		};
	}

	handleChangeColorMath = () => {
		// const { isBackgroundMath } = this.state;
		this.setState({ isBackgroundMath: true });
		console.log(this.setState({
			isBackgroundMath: true,
		}), 'math');
	}

	handleChangeColorNot = () => {
		// const { isBackgroundNot } = this.state;
		this.setState({ isBackgroundNot: true });
		console.log(this.setState({
			isBackgroundNot: true,
		}), 'not');
	}

	render() {
		return (
			<FooterMobile>
				<FooterMobileItem
					style={{ backgroundColor: this.state.isBackgroundMath ? '#116EA015' : '#fff' }}
					onClick={this.handleChangeColorMath}
				>
					<Image src={RelevanceImg} />
					<FooterMobileText to="/match-relevancia">Match Relevância</FooterMobileText>
				</FooterMobileItem>
				<FooterMobileItem
					style={{ backgroundColor: this.state.isBackgroundNot ? '#116EA015' : '#fff' }}
					onClick={this.handleChangeColorNot}
				>
					<Image src={FilterImg} />
					<FooterMobileText to="/notifications">Notificações</FooterMobileText>
				</FooterMobileItem>
			</FooterMobile>
		);
	}
}
export default Footer;
