import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";

import styled from "styled-components";

  
  const Container = styled.div`
    display: flex;
    background-color: #D8D3D3;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    width: 50%;
    margin: 20px 0px;
    margin-left: 200px;
    justify-content: right;
    align-items: right;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  `;
  
  
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    justify-content: center;
    align-items: center;
    
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 30%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>ReCompen.</Logo>
          <Desc>
            ReCompen. is a ticket compensating and refunding service.
            It acts as a assurer and contract keeper between customer and 
            transportation service providing company. 
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Mahandi Vihar, Cuttak
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@prateek.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;