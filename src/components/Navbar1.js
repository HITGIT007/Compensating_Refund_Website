import React from 'react'
import {Link} from 'react-router-dom';

//First install styled components using npm add styled-components
import styled from 'styled-components'


//Styled Component
const Container = styled.div`
    height: 60px;
    background-color: #000000;
   
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    color: white;
    
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.div`
    font-weight: bold;
    
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`//End of flex Box





const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>  
                    <Language>EN</Language>
                </Left>
                <Center><Logo><Link to="/" style ={{textDecoration: "none", color: "white"}}>ReCompen.</Link> </Logo></Center>
                <Right>
                     
                </Right>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
