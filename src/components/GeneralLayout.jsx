import { Row, Col, Image, Button} from "antd";
import React, { } from 'react';  
import styled from "@emotion/styled";
import { observer } from "mobx-react"
 
 
 
const GeneralLayout = (props) => {

    console.log("props.index");
    console.log(props);
// src= "/assets/images/CardTwitter.png"

// text= "/assets/images/CardTwitter.png"

// index= "/assets/images/CardTwitter.png"
// indexTotal= "/assets/images/CardTwitter.png"

// onClickPlus= 
// onClickMinus= 

console.log("props.data");
console.log(props.data);
    return (
        <div>
            <Row  justify="center" >
                <Col span={9}>
                    <Image src= {props.data.src} 
                            preview= {false}
                            width={"100%"}

                    >



                    </Image>
                </Col>
                
            </Row>
            <Row justify="center">
                {props.data.text}
            </Row>
            <Row justify="center">
                <Col pull={2}>
                <Button onClick={props.OnClickMinus}></Button> 
                </Col>
                <Col>
                <h1> {props.index + 1} de {props.indexTotal}</h1>
                </Col>
                <Col push={2}>
                <Button onClick={props.OnClickPlus}></Button>
                </Col>
            </Row>
        </div>
         

);
}
            

export default observer(GeneralLayout);
