
import React from 'react'
import styled from 'styled-components'

import {BusOptions} from "../data"
import CategoryItem from "./CategoryItem";
import Navbar from '../components/Navbar1';
import Footer from '../components/Footer';
const Container = styled.div` 
    
    padding: 50px;
    justify-content: space-between;
    background-color: #656565;
`

function Bus() {
    return (
        <div>
            <Navbar/>
            {BusOptions.map(item=>(
                <Container>
                <CategoryItem item={item} key={item.id}/>
                </Container>
            ))}
            <Footer/>
        </div>
    )
}

export default Bus
