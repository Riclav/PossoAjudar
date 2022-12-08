import React, { useState } from 'react';
import {HomeOutlined,  GoogleOutlined, AppstoreAddOutlined, FacebookOutlined, InstagramOutlined,SkypeOutlined, TwitterOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Row, Col } from 'antd';
import GeneralCard from '../components/Cards/GeneralCard';

import CreateGmail from '../pages/CreateGmail';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
 



const { Header, Content, Footer, Sider } = Layout;



const router = createBrowserRouter(
  [
    {path: "/", element: <GeneralCard/>, errorElement: "Erro Teste!"},
    {path: "/CreateGmail", element: <CreateGmail/>, errorElement: "Erro T!"}

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
  getItem('INÍCIO', '1', <HomeOutlined />),
  getItem('CRIAR GMAIL', '2', <GoogleOutlined />),
  getItem('BAIXAR APP', '3', <AppstoreAddOutlined />),
  getItem('FACEBOOK', '4', <FacebookOutlined /> ),
  getItem('INSTAGRAM', '5', <InstagramOutlined /> ),
  getItem('SKYPE', '6',    <SkypeOutlined />),
  getItem('TWITTER', '7', <TwitterOutlined /> ),
  getItem('YOUTUBE', '8',  <YoutubeOutlined />),
  getItem('WHATSAPP', '9', <WhatsAppOutlined /> ),


       
];

function onClickMenu(event)
{
  if(event.key == 1){window.open("/", "_self");}
  if(event.key == 2){window.open("/CreateGmail", "_self");}
}


const App = () => {


  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick = {onClickMenu}/>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
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