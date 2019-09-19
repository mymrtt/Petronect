import React, { Component } from 'react';
import styled from 'styled-components';

// IMG
import Logo from '../Assets/img/LogoPNE.png';
import Icon from '../Assets/img/iconTest.png';


const Container = styled.div`
  width: 20vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-right: rgba(0, 0, 0, 0.1) solid 1px; 
  border-radius: 4px 0 0 0;
  box-shadow: 2px 0 4px;
`;

const NavBar = styled.div`
  width: 100%;
  height: 90%;
`;

const BoxLogo = styled.figure`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 145px;
`; 

const BoxMenu = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-end;;
`;

const MenuList = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const MenuItem = styled.li`
  height: 36px;
  display: flex;
  align-items: center;
  list-style: none;
  font-size: .875rem;
  color: #116ea0;
  font-weight: 900;
  padding-left: 1rem;
  &:hover {
    background-color: #116EA015;
    color: #116ea0;
    border-radius: 18px 0 0 18px;
  }
`;

const BoxFilter = styled.div`
  height: 10%;
  width: 80%;
  display: flex;
  align-items: center;
`;

const FilterText = styled.p`
  color: #404040;
  font-size: .875rem;
`;

const WrapperInfo = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-centent: center;
  border-top: solid #000 1px;
`;

const Contentinfo = styled.div`
 width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BoxInfo = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItem = styled.p`
  color: #000;
  font-size: .875rem;
  font-weight: 900;
`;

const Representative = styled.p`
  color: #000;
  font-size: .875rem;
  font-weight: 100;
`;

const Button = styled.button`
  width: 58px;
  height: 20px;
  background: #dbe9f1;
  border-radius: 10px;
  border-style: none; 
`;

class SideBar extends Component { 
  constructor(props){
    super(props);
    this.state = {
      // list : [
      //   { 
      //     icon: {Icon},
      //     text: 'Match Relevância',
      //   },
      //   {
      //     icon: {Icon},
      //     text: 'Match Relevância',
      //   },
      //   {
      //     icon: {Icon},
      //     text: 'Match Relevância',
      //   },
      //   {
      //     icon: {Icon},
      //     text: 'Match Relevância',
      //   },
      //   {
      //     icon: {Icon},
      //     text: 'Match Relevância',
      //   },
      // ]
    // };
 
    list : [
      'Match Relevância',
      'Análise Potencial', 
      'Histórico de oportunidade', 
      'Gestão interna',
      'Geração de documentos',
      'justificativa de impostos',
      'Histórico de esclarecimentos',
      'Notificação de Resultados',
    ]
  }



  // renderMenu = () => { 
  //   const { list } = this.state;

  //   return (<div> 
  //   list.map((item, i) => {
  //     <li key={i}>
  //       {item.icon}
  //       {item.text}
  //     </li>
  //   });     
  //   </div>) 
  // }
  }
  render() {
    return (
      <Container>
        <NavBar>
          <BoxLogo>
            <ImgLogo src={Logo} alt="Logo" />
          </BoxLogo>
          <BoxMenu>
            <MenuList>
            {(this.state.list || []).map(item => (
            <MenuItem key={item}>{item}</MenuItem>
             ))}
            </MenuList>
          </BoxMenu>
        </NavBar> 
        <BoxFilter>
          <FilterText>Filtros e notificações</FilterText>
        </BoxFilter>         
        <WrapperInfo>
          <Contentinfo>
            <BoxInfo>
              <InfoItem>Snowball Solutions</InfoItem>
              <Representative>Pedro Gualandi</Representative>
            </BoxInfo>
            <span>
              <Button>Sair</Button>
            </span>
          </Contentinfo>
        </WrapperInfo>
      </Container>
   )}
  }


export default SideBar;
