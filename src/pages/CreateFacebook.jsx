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


const CreateFacebook = () => { 
    const title = "Facebook";
    const data = [{src: "/assets/images/Facebook/Facebook_1.png", text: "Etapa 1: Acesse o site www.facebook.com no seu navegador, preencha com seus dados e clique em Cadastrar-se.", key: 3},
                  {src: "/assets/images/Facebook/Facebook_2.png", text: "Etapa 2: Insira o código enviado ao seu email cadastrado anteriormente, e prossiga.", key: 3},  
                  {src: "/assets/images/Facebook/Facebook_3.png", text: "Etapa 3: Sua conta é confirmada, clique OK e prossiga.", key: 3},
                  {src: "/assets/images/Facebook/Facebook_4.png", text: "Etapa 4: Sua conta foi criada. Finalizando, agora você pode configurá-la conforme seus gostos.", key: 3}
                  

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
export default observer (CreateFacebook);