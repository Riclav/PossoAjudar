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


const CreateInstagram = () => { 
    const title = "COMO CRIAR UMA CONTA NO INSTAGRAM";
    const data = [{src: "/assets/images/Instagram/Instagram_1.png", text: "Etapa 1: Acesse o site www.Instagram.com no seu navegador, preencha com seus dados e clique em Cadastrar-se.", key: 4},
                  {src: "/assets/images/Instagram/Instagram_2.png", text: "Etapa 2: Preencha com sua data de nascimento, e prossiga.", key: 4},  
                  {src: "/assets/images/Instagram/Instagram_3.png", text: "Etapa 3: Insira o código enviado ao seu email cadastrado anteriormente, e prossiga", key: 4},
                  {src: "/assets/images/Instagram/Instagram_4.png", text: "Etapa 4: Sua conta é criada, e já pode acessar seu perfil.", key: 4},
                  {src: "/assets/images/Instagram/Instagram_5.png", text: "Etapa 5: Finalizando, agora você pode configurá-la conforme seus gostos.", key: 4}                
                  
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
export default observer (CreateInstagram);