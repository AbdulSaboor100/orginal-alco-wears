import React, { useContext, useEffect } from "react";
import Carosel from "../components/carosel/carosel";
import Category from "../components/categories-page/category";
import DropDown from "../components/dropdown/dropdown";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MultipleItems from "../components/scroll-bar/scroll-bar";
import { db,getDoc,collection } from "../configs/firebase";
import { GlobalContext } from "../context/context";
import './home.css';

function Home(){
    let {state , dispatch} = useContext(GlobalContext);
    
    return(
        <div className="main-container">
            <Header />
            <DropDown />
            <Carosel />
            <MultipleItems />
            <Footer />  
        </div>
    )
}

export default Home;