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


const CreateGmail = () => { 
      
    const data = [{src: "/assets/images/CardTwitter.png", text: "Texto Para escrever \n Linh2", key: 1},
                  {src: "/assets/images/CardApp.png", text: "Texto2 Para escrever \n Linh2", key: 2}   
                ]


    function OnClickPlus (){
        store.setIndex(store.index + 1);
        store.setIndex(store.index >= data.length ? data.length-1 : store.index);
        
    }

    function OnClickMinus (){
      
      store.setIndex(store.index - 1);
      store.setIndex(store.index < 0 ? 0 : store.index);
      
  }
  console.log("actualIndex");
  console.log(store.index);

  return (
    <div>
         
        <GeneralLayout data = {data[store.index]}  OnClickPlus = {OnClickPlus} OnClickMinus = {OnClickMinus} index = {store.index} indexTotal = {data.length}/>
         
    </div>     
  );
};
export default observer (CreateGmail);