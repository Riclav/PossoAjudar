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


const CreateWhatsapp = () => { 
    const title = "COMO UTILIZAR O WHATSAPP WEB?";
    const data = [{src: "/assets/images/Whatsapp/Whatsapp_1.png", text: "Etapa 1: Acesse o site www.whatsapp.com no seu navegador, temos a opção de abrir no navegador ou baixar para o computador. Clique em WhatsApp web e prossiga.", key: 8},
                  {src: "/assets/images/Whatsapp/Whatsapp_2.png", text: "Etapa 2: Abra o aplicativo WhatsApp no seu celular e siga as informações da imagem.", key: 8},  
                  {src: "/assets/images/Whatsapp/Whatsapp_3.png", text: "Etapa 3: Se optar pode assistir o video explicativo, assim que seu celular capturar o código QR a tela do aplicativo estará disponível para utilização.", key: 8}
                 
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
export default observer (CreateWhatsapp);