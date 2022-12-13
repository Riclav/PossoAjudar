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


const CreateSkype = () => { 
    const title = "Skype";
    const data = [{src: "/assets/images/Skype/Skype_1.png", text: "Etapa 1: Acesse o site www.skype.com no seu navegador, escolha se quer abri-lo no navegador ou baixá-lo para seu computador.", key: 5},
                  {src: "/assets/images/Skype/Skype_2.png", text: "Etapa 2: Clique em criar conta, e prossiga.", key: 5},  
                  {src: "/assets/images/Skype/Skype_3.png", text: "Etapa 3: Insira um email, e prossiga", key: 5},
                  {src: "/assets/images/Skype/Skype_4.png", text: "Etapa 4: Informe seus dados, e prossiga.", key: 5},
                  {src: "/assets/images/Skype/Skype_5.png", text: "Etapa 5: Informe sua data de nascimento, e prossiga.", key: 5},                  
                  {src: "/assets/images/Skype/Skype_6.png", text: "Etapa 6: Insira o código enviado ao seu email cadastrado anteriormente, e prossiga.", key: 5},
                  {src: "/assets/images/Skype/Skype_7.png", text: "Etapa 7: Adione informações de segurança informando seu numero de telefone, insira o código enviado ao mesmo e prossiga", key: 5},
                  {src: "/assets/images/Skype/Skype_8.png", text: "Etapa 8: Finalizando,configure conforme seus gostos e usufrua.", key: 5}

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
export default observer (CreateSkype);