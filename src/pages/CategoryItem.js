import React from 'react'
import styled from 'styled-components'
//import {Link} from 'react-router-dom';


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 90vh;
  position: relative;
`

const Image = styled.img`
  width: 85%;
  height: 100%;
  object-fit: cover;
  
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: bottom;
  justify-content: bottom;
  padding-left: 20px;
`

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color:rgba(252, 242, 163 , 0.5);
`

const Button = styled.button`
    border:20px;
    margin: 5px;
    border-color: black;
    padding: 10px;
    background-color: #FCF2A3;
    cursor: pointer;
    font-weight: 600;
`; 

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
            <Title>{item.title}</Title>
            </Info>
            <Button>
                  COMPENSATE
            </Button>
            <Button>
                  REFUND
            </Button>
        </Container>
    )
}

export default CategoryItem
