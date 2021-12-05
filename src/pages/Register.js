import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://energy.mit.edu/wp-content/uploads/2020/06/MSC_awards.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #ECE6A4;
  border-radius: 10px;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  height: 10%;
  border: none;
  padding: 15px 20px;
  background-color: #423B03;
  color: white;
  cursor: pointer;
`;
const Button1 = styled.button`
  width: 100%;
  background-color: #423B03;
  color: white;
  cursor: pointer;
`;



const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>
          <Link to="/" style ={{textDecoration: "none", color: "white"}}>
            <Button1>
            CREATE
            </Button1>
          </Link>
          </Button>
          
          
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;