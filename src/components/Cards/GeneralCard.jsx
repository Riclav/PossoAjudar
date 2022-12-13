import { Card, Avatar,  Typography} from "antd";
import React, { } from 'react';  
import styled from "@emotion/styled";
 
const { Meta } = Card;
const { Title } = Typography;
 
 
function GeneralCard(props) {


    const cards = [
        {
          id: 1,
          title: "CRIAR UM EMAIL",
          image: "/assets/images/Cards/CardGmail.png",
          url: "/CreateGmail",
          
           
        },
        {
          id: 2,
          title: "BAIXAR UM APP",
          image: "/assets/images/Cards/CardApp.png",
          url: "/DownloadApp",
           
        },
        {
          id: 3,
          title: "FACEBOOK",
          image: "/assets/images/Cards/CardFacebook.png",
          url: "/CreateFacebook",
           
        },
        {
          id: 4,
          title: "INSTAGRAM",
          image: "/assets/images/Cards/CardInstagram.png",
          url: "/CreateInstagram",
           
        },
        {
            id: 5,
            title: "SKYPE",
            image: "/assets/images/Cards/CardSkype.png",
            url: "/CreateSkype",
             
          },
          {
            id: 6,
            title: "TWITTER",
            image: "/assets/images/Cards/CardTwitter.png",
            url: "/CreateTwitter",
             
          },
          {
            id: 7,
            title: "YOUTUBE",
            image: "/assets/images/Cards/CardYoutube.png",
            url: "/CreateYoutube",
             
          },
          {
            id: 8,
            title: "WHATSAPP",
            image: "/assets/images/Cards/CardWhatsapp.png",
            url: "/CreateWhatsapp",
            
          },
      ];
 
    
   
    
    return (
        <div>
            <Container>
           
            {cards.map(({ title, image, url, id }) => {return (
              <Card hidden = {id>4}
                hoverable
                key={id}
                style={{ width: 300, borderRadius: "30px" }}
                bodyStyle={{ paddingTop: "0px" }}
                onClick={() => {
                  if (url !== "") window.open(url, "_self");
                }}
                title= {<Title level={4} style={{ textAlign: "center"}} >{title}</Title>}
              >
                <Meta style={{justifyContent: "center", marginLeft: "16px"}}
                  avatar={
                    <Avatar
                      shape="square"
                      size={198}
                      style={{ marginTop: "2rem"}}
                      src={image}
                      // layout= "fill"
                    />
                   
                  }
                  
                  
                                  
                />
      
              </Card>           
            )})}
        
          </Container>
          <br/>
          <br/>
          <Container> 
                
            {cards.map(({ title, image, url, id }) => {return (
              <Card hidden = {id<5}
                hoverable
                key={id}
                style={{ width: 300, borderRadius: "30px" }}
                bodyStyle={{ paddingTop: "0rem" }}
                onClick={() => {
                  if (url !== "") window.open(url, "_self");
                }}
                title= {<Title level={4} style={{ textAlign: "center"}} >{title}</Title>}
              >
                <Meta style={{justifyContent: "center", marginLeft: "16px"}}

                  avatar={
                    <Avatar
                        
                      shape="square"
                      size={198}
                      
                      style={{ marginTop: "2rem"}}
                      src={image}
                      //layout="fill"
                    />                    
                  }                                 
                />
              </Card>           
            )})}
        
          </Container>  
          
          
        </div>
      );
    }
 
export const Container = styled.div`
// max-width: 100%;
// min-width: 0%;
margin: 20 auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-column-gap: 10px;
grid-row-gap: 30px;
size-adjust: auto;
width: 100%;
border: 100%;
,
`;


export default GeneralCard;