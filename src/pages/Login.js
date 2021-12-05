import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://corlettexpress.com/wp-content/uploads/2020/09/AdobeStock_244807532-2048x1024.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #423B03;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Href = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Link to="/" style ={{textDecoration: "none", color: "white"}}>
          <Button>
            LOGIN
          </Button>
          </Link>
          <Href>FORGOT PASSWORD?</Href>
          <Link to="/register" style ={{textDecoration: "none"}}><Href>CREATE A NEW ACCOUNT</Href></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;