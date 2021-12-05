import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar1';
import { TrainOptions } from "../data"
import CategoryItem from "./CategoryItem";
import Footer from '../components/Footer';

const Container = styled.div` 
    
    padding: 20px;
    justify-content: space-between;
    background-color: #656565;
`

function Train() {
    return (
        <div>
            <Navbar/>
            {TrainOptions.map(item=>(
                <Container>
                <CategoryItem item={item} key={item.id}/>
                </Container>
            ))}
        <Footer/>
        </div>
        
    )
}

export default Train