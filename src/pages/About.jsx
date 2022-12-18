import * as React from "react";
import GeneralLayout from "../components/GeneralLayout";
import { observer } from "mobx-react";
import{observable, action, makeAutoObservable} from "mobx";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Typography } from 'antd';

 
const { Title } = Typography;

class Store {
  index = 0;
  constructor(){   // CRIA OS CONSTRUTORES E OBSERVÁVEIS

    makeAutoObservable(this)
  }

  setIndex = (v) => {
    console.log(v);
    this.index = v;
  } 
}

const store = new Store();


const About = () => { 
    

  return (
    <div>
        <Row style={{  alignContent:"center", justifyContent:"center" }} >
          <Col span={15}>
            <Title level={3} style={{textAlign:"center" }}  >{"SOBRE O SITE"}</Title>
                                                                
          </Col> 
        </Row>
        <Row style={{  alignContent:"center", justifyContent:"center" }} >
          <Col span={15}>
            <Title level={4} style={{textAlign:"justify" }}  >{"Com o avanço da tecnologia nos dias atuais, a vida cotidiana digitaliza-se dia\n\
                                                                após dia, forçando a população na busca constante de informações, podendo assim,\n\
                                                                estarem “ou não”, conectados ao mundo."}</Title>
                                                                
          </Col> 
        </Row>
        <Row style={{  alignContent:"center", justifyContent:"center" }} >
          <Col span={15}>
            <Title level={4} style={{textAlign:"justify" }}  >{"A revolucionária invenção da internet fez com que o nascimento dos “smartphones”\n\
                                                                tornassem realidade, e com eles surgiram inúmeros aplicativos para as mais diversas\n\
                                                                utilidades. Muitos desses aplicativos não necessitam de conhecimento específico para\n\
                                                                sua utilização, mas muitas pessoas possuem dificuldades para dar os primeiros passos,\n\
                                                                como baixa-lo, criar sua conta, criar um e-mail, etc."}
                                                              </Title>
          </Col> 
        </Row>
        <Row style={{  alignContent:"center", justifyContent:"center" }} >
          <Col span={15}>
            <Title level={4} style={{textAlign:"justify" }}  >{"Com o intuito de facilitar a inserção digital na sociedade, esse trabalho visa a\n\
                                                                criação de tutoriais voltados para criação e utilização de alguns aplicativos,\n\
                                                                onde é de grande ajuda para uma parte da população que possuem limitações, por\n\
                                                                falta de conhecimentos da nova era digital."}
                                                              </Title>
          </Col> 
        </Row>
        
         
    </div>     
  );
};
export default observer (About);