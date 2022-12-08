import { Row, Col, Image, Button} from "antd";
import React, { } from 'react';  
import styled from "@emotion/styled";
 
 
 
const GeneralLayout = ( props) => {

    console.log("props.index");
    console.log(props.index);
// src= "/assets/images/CardTwitter.png"

// text= "/assets/images/CardTwitter.png"

// index= "/assets/images/CardTwitter.png"
// indexTotal= "/assets/images/CardTwitter.png"

// onClickPlus= 
// onClickMinus= 

console.log(props.data);
    return (
        <div>
            <Row  justify="center" >
                <Col>
                    <Image src= {props.data.src}></Image>
                </Col>
                
            </Row>
            <Row justify="center">
                {props.data.text}
            </Row>
            <Row justify="center">
                <Col>
                <Button onClick={props.OnClickPlus}></Button>
                
                </Col>
                <Col>
                <h1> {props.index + 1} de {props.indexTotal}</h1>
                </Col>
                <Col>
                <h1> botao 2</h1>
                </Col>
            </Row>
        </div>
         

);
}
            

export default GeneralLayout;
