import * as React from "react";
import { observer } from "mobx-react";
import{observable, action, makeAutoObservable} from "mobx";
import {Button, Form, Input, InputNumber, Breadcrumb, Layout, Menu, theme, Row, Col, Typography } from 'antd';
import { useState} from 'react';
import emailjs from '@emailjs/browser';

 

const { TextArea } = Input;

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


 
 


function Contact () { 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function sendEmail(e){
    
      e.preventDefault();

    if(name === '' || email === ''|| message === '' ){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email

    }
  
    emailjs.send("service_8mg1wr5", "template_6y4v53q",templateParams,"GOszko7-mrkBSlqzP")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {
      console.log("ERRO:, err")
    })

    
  }
    

  return (
    <>    
    <div className="container">
      <Row>
        <Col span={12} offset={11}>
          <h1 className="title" style={{height:"40px", fontSize:"35px"}}>Contato</h1>
        </Col>
      </Row>
      <Form className="form" onSubmit={sendEmail}>
      

      <Row>
        <Col span={6} offset={9}>
          <Input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            size="large"
            />
          </Col>
      </Row>
      <br/>
      <Row>
        <Col span={6} offset={9}>
          <Input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            size="large"
            />
          </Col>
      </Row>
      <br/>
      <Row>
        <Col span={6} offset={9}>
          <TextArea
            className="textarea" 
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            size="large"
            /> 
        </Col> 
      </Row>
      <br/>
      <Row  justify="center">
        <Col span={1}>
          <Button  onClick={sendEmail} size="large">Enviar</Button>
          </Col>
      </Row>
      </Form>
    </div>
    </>
  );
};
export default observer (Contact);