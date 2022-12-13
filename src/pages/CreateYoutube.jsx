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
    const title = "Youtube";
    const data = [{src: "/assets/images/Youtube/Youtube_1.png", text: "Etapa 1: Acesse o site www.gmail.com no seu navegador, e clique em Criar conta, como exemplo vamos criar uma conta pessoal.", key: 8},
                  {src: "/assets/images/Youtube/Youtube_2.png", text: "Etapa 2: Preencha os campos solicitados , e prossiga.", key: 8},  
                  {src: "/assets/images/Youtube/Youtube_3.png", text: "Etapa 3: Preencha seus dados, e prossiga", key: 8},
                  {src: "/assets/images/Youtube/Youtube_4.png", text: "Etapa 4: Informe seu número de celular para validar sua identidade, e prossiga.", key: 8},
                  {src: "/assets/images/Youtube/Youtube_5.png", text: "Etapa 5: Informe o código que recebeu no celular cadastrado e prossiga.", key: 8}             
                 
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