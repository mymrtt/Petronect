import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 75vw;
  height: 95vh;
  border-radius: 0 4px 0 0 ;
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;   

const WrapperHead = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`; 

const HeadText = styled.p`
  color: #116EA0; 
  font-size: 1rem;
  width: 251px;
height: 32px;
`;

const WrapperForm = styled.div`
  width: 50%;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #116EA0;
  font-size: 0.875rem;
`;

const InputHead = styled.input`
  width: 251px;
  height: 32px;
  margin-left: .5rem;
  padding-left: 1rem;
  border-radius: 16px;
  border: solid #116EA0 .5px;
`;

const Button = styled.button`
  width: 6.4375rem;
  height: 2rem;
  background: #F7F7F7;
  border: 0.5px solid #E6E6E6;
  border-radius: 16px;
  color: #404040;
  font-size: .875rem;
`;

const WrapperTable = styled.div`
  width: 100%;
  height: 90%; 
  display: flex;
  justify-content: center;
  background: #fff;
`;

const  Table  = styled.table`
  background: #fff;
  width: 97%;
  height: 100%; 
  >:nth-child(2n+1) {
    background: #F7F7F7;
  }
`;

const  TableRow  = styled.tr`
  width: 90vw;
  height: 5%; 
  border-radius: 4px;
  color: #8C8C8C;
  &:hover {
    transition: all .2s ease;
    color: #404040;
  }
`;

const  TableHeader  = styled.th`
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

const  TableBody  = styled.td`
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  color: #8C8C8C;
  font-weight: 500;
`;

class RelevanceMatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [
        'Match Relevância',       
        'Fit',       
        'Categoria',       
        'Id',
        'Título e descrição',
        'Prazo',
      ]
    }
    //  const listItems = this.state.list.map((list) =>
    //   <TableHeader>{this.state.list}</TableHeader>
    // )
  }

  render() {
    return (
      <Container>
        <Content>
          <WrapperHead>
            <span>
              <HeadText>Oportunidades selecionadas</HeadText>
            </span>
            <WrapperForm>
              <Form>
                <Label>
                Pesquisar
                  <InputHead placeholder="Digite aqui para pesquisar"></InputHead>
                </Label>
                <Button>Favoritos</Button>
              </Form>
            </WrapperForm>
          </WrapperHead>
        </Content>
        <WrapperTable>
          <Table>
            <TableRow>
              <TableHeader>Fit</TableHeader>
              <TableHeader>Fit</TableHeader>
              <TableHeader>Categoria</TableHeader>
              <TableHeader>Id</TableHeader>
              <TableHeader>Título e descrição</TableHeader>
              <TableHeader>Prazo</TableHeader>
            </TableRow>
            <TableRow>
              <TableBody>6</TableBody>
              <TableBody>6</TableBody>
              <TableBody>7</TableBody>
              <TableBody>8</TableBody>
              <TableBody>9</TableBody>
              <TableBody>10</TableBody>
            </TableRow>
            <TableRow>
              <TableBody>6</TableBody>
              <TableBody>6</TableBody>
              <TableBody>7</TableBody>
              <TableBody>8</TableBody>
              <TableBody>9</TableBody>
              <TableBody>10</TableBody>
            </TableRow>
            <TableRow>
              <TableBody>6</TableBody>
              <TableBody>6</TableBody>
              <TableBody>7</TableBody>
              <TableBody>8</TableBody>
              <TableBody>9</TableBody>
              <TableBody>10</TableBody>
            </TableRow>
            <TableRow>
              <TableBody>6</TableBody>
              <TableBody>6</TableBody>
              <TableBody>7</TableBody>
              <TableBody>8</TableBody>
              <TableBody>9</TableBody>
              <TableBody>10</TableBody>
            </TableRow>
            <TableRow>
              <TableBody>6</TableBody>
              <TableBody>6</TableBody>
              <TableBody>7</TableBody>
              <TableBody>8</TableBody>
              <TableBody>9</TableBody>
              <TableBody>10</TableBody>
            </TableRow>
            <TableRow>
              <TableBody>6</TableBody>
              <TableBody>6</TableBody>
              <TableBody>7</TableBody>
              <TableBody>8</TableBody>
              <TableBody>9</TableBody>
              <TableBody>10</TableBody>
            </TableRow>
          </Table>
        </WrapperTable>
      </Container>
    );
  }
}

export default RelevanceMatch;
