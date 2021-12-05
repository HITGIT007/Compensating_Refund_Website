import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar1';
import {ShipOptions} from "../data"
import CategoryItem from "./CategoryItem";
import Footer from '../components/Footer';

const Container = styled.div` 
    
    padding: 50px;
    justify-content: space-between;
    background-color: #656565;
`

function Ship() {
    return (
        <div>
        <Navbar/>
        
            {ShipOptions.map(item=>(
                <Container>
                    <CategoryItem item={item} key={item.id}/>
                </Container>
                
            ))}
        <Footer/>
        </div>
    )
}

export default Ship