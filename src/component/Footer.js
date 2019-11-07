// // Libs
// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// // Images
// import RelevanceImg from '../assets/icon/icon_menu-Relevancia.svg';
// import FilterImg from '../assets/icon/icon_menu.svg';

// const FooterMobile = styled.div`
// 	@media (max-width: 648px) {
// 		position: fixed;
// 		bottom: 0;
// 		width: 100%;
// 		height: 3rem;
// 		display: flex;
// 		align-items: center;
// 		z-index: 1;
// 		background-color: #fff;
// 		border: #0000001A solid 1px;
// 		z-index: 2;
// 	}
// `;

// const Image = styled.img`
// 	@media (max-width: 640px) {
// 		width: 15px;
// 	}
// `;

// const FooterMobileItem = styled(Link)`
// 	display: none;
// 	@media (max-width: 648px) {
// 		display: flex;
// 		width: 50%;
// 		height: 2.2rem;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		background-color: #116EA015;
// 		border-radius: 20px;
// 		cursor: pointer;
// 		white-space: nowrap;
// 		text-decoration: none;
// 	}
// `;

// const FooterMobileText = styled.p`
// 	@media (max-width: 648px) {
// 		margin-left: 0.4rem;
// 		font-size: .75rem;
// 		font-weight: 900;
// 		color: #116ea0;
// 		white-space: nowrap;
// 	}
// `;

// class Footer extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isBackgroundMath: true,
// 			isBackgroundNot: false,
// 		};
// 	}

// 	handleChangeColorMath = () => {
// 		this.setState({
// 			isBackgroundMath: true,
// 			isBackgroundNot: false,
// 		});
// 	}

// 	handleChangeColorNot = () => {
// 		this.setState({
// 			isBackgroundNot: true,
// 			isBackgroundMath: false,
// 		});
// 	}

// 	render() {
// 		return (
// 			<FooterMobile>
// 				<FooterMobileItem
// 					style={{ backgroundColor: this.state.isBackgroundMath ? '#116EA015' : '#fff' }}
// 					onClick={this.handleChangeColorMath}
// 					to="/match-relevancia"
// 				>
// 					<Image src={RelevanceImg} />
// 					<FooterMobileText>Match Relevância</FooterMobileText>
// 				</FooterMobileItem>
// 				<FooterMobileItem
// 					style={{ backgroundColor: this.state.isBackgroundNot ? '#116EA015' : '#fff' }}
// 					onClick={this.handleChangeColorNot}
// 					to="/notifications"
// 				>
// 					<Image src={FilterImg} />
// 					<FooterMobileText>Notificações</FooterMobileText>
// 				</FooterMobileItem>
// 				{/* </div> */}
// 			</FooterMobile>
// 		);
// 	}
// }
// export default Footer;
