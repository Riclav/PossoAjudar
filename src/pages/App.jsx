import React, { useState } from 'react';
import {HomeOutlined,  GoogleOutlined, AppstoreAddOutlined, FacebookOutlined, InstagramOutlined,SkypeOutlined, TwitterOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Typography } from 'antd';
import GeneralCard from '../components/Cards/GeneralCard';
import DownloadApp from './DownloadApp';
import CreateGmail from '../pages/CreateGmail';
import CreateFacebook from '../pages/CreateFacebook';
import CreateInstagram from '../pages/CreateInstagram';
import CreateSkype from '../pages/CreateSkype';
import CreateTwitter from '../pages/CreateTwitter';
import CreateYoutube from '../pages/CreateYoutube';
import CreateWhatsapp from '../pages/CreateWhatsapp';





import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
 
const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

let menuIndex = 0;

const router = createBrowserRouter(
  [
    {path: "/", element: <GeneralCard/>, errorElement: "Erro Teste!"},
    {path: "/CreateGmail", element: <CreateGmail/>, errorElement: "Erro T!"},
    {path: "/DownloadApp", element: <DownloadApp/>, errorElement: "Erro T!"},
    {path: "/CreateFacebook", element: <CreateFacebook/>, errorElement: "Erro T!"},
    {path: "/CreateInstagram", element: <CreateInstagram/>, errorElement: "Erro T!"},
    {path: "/CreateSkype", element: <CreateSkype/>, errorElement: "Erro T!"},
    {path: "/CreateTwitter", element: <CreateTwitter/>, errorElement: "Erro T!"},
    {path: "/CreateYoutube", element: <CreateYoutube/>, errorElement: "Erro T!"},
    {path: "/CreateWhatsapp", element: <CreateWhatsapp/>, errorElement: "Erro T!"}

  ]


  

);


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('INÍCIO', '0', <HomeOutlined />),
  getItem('CRIAR GMAIL', '1', <GoogleOutlined />),
  getItem('BAIXAR APP', '2', <AppstoreAddOutlined />),
  getItem('FACEBOOK', '3', <FacebookOutlined /> ),
  getItem('INSTAGRAM', '4', <InstagramOutlined /> ),
  getItem('SKYPE', '5',    <SkypeOutlined />),
  getItem('TWITTER', '6', <TwitterOutlined /> ),
  getItem('YOUTUBE', '7',  <YoutubeOutlined />),
  getItem('WHATSAPP', '8', <WhatsAppOutlined /> ),


       
];



const App = () => {


  function onClickMenu(event)
  {
  
    if(event.key == 0){window.open("/", "_self");}
    if(event.key == 1){window.open("/CreateGmail", "_self");}
    if(event.key == 2){window.open("/DownloadApp", "_self");}
    if(event.key == 3){window.open("/CreateFacebook", "_self");}
    if(event.key == 4){window.open("/CreateInstagram", "_self");}
    if(event.key == 5){window.open("/CreateSkype", "_self");}
    if(event.key == 6){window.open("/CreateTwitter", "_self");}
    if(event.key == 7){window.open("/CreateYoutube", "_self");}
    if(event.key == 8){window.open("/CreateWhatsapp", "_self");}
    menuIndex = event.key;
  
  }

  const {
    token: { colorBgSpotlight },
  } = theme.useToken();




  return (
    <Layout
      style={{ 
        minHeight: '100vh',
        background:"green"
      }}
    > 
      <Sider style={{background:"blue"}} >
        <div
          style={{
            height: 30,
            margin: 10,
            background:"pink"
          }}
        />   
        <Menu style={{background:"red"}} theme="dark"  mode="inline" items={items} onClick = {onClickMenu} />   
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background:"whitej",
          }}
        >
        <Title level={2} style={{ textAlign: "center", textAlignLast:"auto"}} >{"POSSO AJUDAR?"}</Title>
</Header>

        
        <Content
          style={{
            margin: '0 16px'
        
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
              background:"blue"
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div >
            <RouterProvider router={router} />
                
              
            
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Posso Ajudar? ©2022 Created by Riclav Stolf
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;