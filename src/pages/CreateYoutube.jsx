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


const CreateYoutube = () => { 
    const title = "COMO LOGAR NO YOUTUBE?";
    const data = [{src: "/assets/images/Youtube/Youtube_1.png", text: "Etapa 1: Acesse o site www.youtube.com no seu navegador, e clique em Fazer login.", key: 8},
                  {src: "/assets/images/Youtube/Youtube_2.png", text: "Etapa 2: Insira um email google,e prossiga.", key: 8},  
                  {src: "/assets/images/Youtube/Youtube_3.png", text: "Etapa 3: Digite sua senha, e prossiga", key: 8},
                  {src: "/assets/images/Youtube/Youtube_4.png", text: "Etapa 4: Finalizando, já esstara logado, e pronto para utilização.", key: 8}     
                 
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
export default observer (CreateYoutube);