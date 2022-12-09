import { Row, Col, Image, Button, Typography} from "antd";
import React, { } from 'react';  
import { observer } from "mobx-react"

import { LeftOutlined, RightOutlined} from '@ant-design/icons';

const { Title } = Typography;
 
const GeneralLayout = (props) => {

    return ( 
        <>
            <div>
            <Row align={"middle"}   justify="center" style={{height: "40px", alignContent:"center" }}>
                <Title level={2} style={{ textAlign: "center"}} >{props.title}</Title>
                     
                </Row>
                <Row style={{height: "600px", alignContent:"center", justifyContent:"center" }}>
                    <Col span={10}>
                        <Image src= {props.data.src} 
                                preview= {false}
                                width={"100%"}
                        >
                        </Image>
                    </Col>                
                </Row>
                <Row   style={{maxHeight: "80px", alignContent:"center" }}>
                    <Col span={8} offset={0} >
                <Title level={5} style={{ textAlign: "center"}} >{props.data.text}</Title>
                    </Col>
                </Row>
            
                <Row align={"middle"} justify="center" style={{height: "40px", alignContent:"baseline" }} >
                    <Col pull={2}>
                    <Button icon= {< LeftOutlined/>} size={"large"} onClick={props.OnClickMinus}></Button> 
                    </Col>
                    <Col>
                    <h1> {props.index + 1} de {props.indexTotal}</h1>
                    </Col>
                    <Col push={2}>
                    <Button icon= {< RightOutlined/>} size={"large"} onClick={props.OnClickPlus}></Button>
                    </Col>
                </Row>
            </div>
        </>
      
         

);
}
            

export default observer(GeneralLayout);
