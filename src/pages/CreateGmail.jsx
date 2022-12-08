import * as React from "react";
import GeneralLayout from "../components/GeneralLayout";

const data = [{src: "/assets/images/CardTwitter.png", text: "Texto Para escrever \n Linh2", key: 1},
                  {src: "/assets/images/CardTwitter.png", text: "Texto2 Para escrever \n Linh2", key: 2}   
                 ]
let actualIndex = 0;

const CreateGmail = () => { 

    
    function OnClickPlus (){
        actualIndex = actualIndex + 1;
        actualIndex = actualIndex >= data.length ? data.length-1 : actualIndex;

        console.log(actualIndex);
    }


  return (
    <div>
         
        <GeneralLayout data = {data[actualIndex]} text= {data[actualIndex].text} OnClickPlus = {OnClickPlus} index = {actualIndex} indexTotal = {data.length}/>
         
    </div>     
  );
};
export default CreateGmail;