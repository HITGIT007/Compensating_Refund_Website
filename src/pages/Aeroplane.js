import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar1';
import {AeroplaneOptions} from "../data"
import CategoryItem from "./CategoryItem";
import Footer from '../components/Footer';

const Container = styled.div` 
    
    padding: 20px;
    justify-content: space-between;
    background-color: #656565;
`

function Aeroplane() {
    return (
        <div>
            <Navbar/>
            {AeroplaneOptions.map(item=>(
                <Container>
                <CategoryItem item={item} key={item.id}/>
                </Container>
            ))}
            <Footer/>
        </div>
            
        
    )
}

export default Aeroplane