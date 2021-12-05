import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const Home = () => {
    return (

    <div>
        <Navbar/>
        <Categories/>
        <Footer/>
    </div>
        
    )
}

export default Home
