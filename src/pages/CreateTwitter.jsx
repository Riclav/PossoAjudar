import * as React from "react";
import GeneralLayout from "../components/GeneralLayout";

import { observer } from "mobx-react";
import{observable, action, makeAutoObservable} from "mobx";

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


const CreateTwitter = () => { 
    const title = "Twitter";
    const data = [{src: "/assets/images/Twitter/Twitter_1.png", text: "Etapa 1: Acesse o site www.twitter.com no seu navegador, e clique em inscreva-se, caso tenha conta Google, pode ser utilizada também.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_2.png", text: "Etapa 2: Clique em Usar o email, e preencha os campos solicitados , e prossiga.", key: 6},  
                  {src: "/assets/images/Twitter/Twitter_3.png", text: "Etapa 3: Preencha conforme deseje, e prossiga", key: 6},
                  {src: "/assets/images/Twitter/Twitter_4.png", text: "Etapa 4: Leia os termos e clique em Inscrever-se.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_5.png", text: "Etapa 5: Informe o código que recebeu no email cadastrado e prossiga.", key: 6},                  
                  {src: "/assets/images/Twitter/Twitter_6.png", text: "Etapa 6: Crie uma senha com 8 dígitos,e prossiga.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_7.png", text: "Etapa 7: Escolha uma foto de perfil ou clique em ignorar.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_8.png", text: "Etapa 8: Faça sua descrição ou clique em ignorar.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_9.png", text: "Etapa 9: Informe o nome que gostaria de ser utilizado no seu perfil, ou clique em pular.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_10.png", text: "Etapa 10: Clique para permitir notificações ou ignore.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_11.png", text: "Etapa 11: Selecione os idiomas que você fala, e prossiga", key: 6},
                  {src: "/assets/images/Twitter/Twitter_12.png", text: "Etapa 12: Selecione o que conteudos de seu interesse, e prossiga.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_13.png", text: "Etapa 13: Selecione para seguir alguém, ou somente prossiga.", key: 6},
                  {src: "/assets/images/Twitter/Twitter_14.png", text: "Etapa 14: Finalizando, a conta é criada.", key: 6}


                ]


    function OnClickPlus (){
        store.setIndex(store.index + 1);
        store.setIndex(store.index >= data.length ? data.length-1 : store.index);
        
    }

    function OnClickMinus (){
      
      store.setIndex(store.index - 1);
      store.setIndex(store.index < 0 ? 0 : store.index);
      
  }

  return (
    <div>
         
        <GeneralLayout title = {title} data = {data[store.index]}  OnClickPlus = {OnClickPlus} OnClickMinus = {OnClickMinus} index = {store.index} indexTotal = {data.length}/>
         
    </div>     
  );
};
export default observer (CreateTwitter);