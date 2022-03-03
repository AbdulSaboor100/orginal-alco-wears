import React, { useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Accessories from "../components/accessories/accessories";
import Apparel from "../components/apparel/apparel";
import Boxing from "../components/boxing/boxing";
import Category from "../components/categories-page/category";
import Judo from "../components/judo/judo";
import Karate from "../components/karate/karate";
import LoadingScreen from "../components/loading-screen/loading-screen";
import JiuJitsu from "../components/martial-arts/jiu-jitsu";
import SportsGloves from "../components/sports-gloves/sports-gloves";
import Taekwondo from "../components/taekwondo/taekwondo";
import { GlobalContext } from "../context/context";
import Home from "../screens/home";
import MyAdmin from "../screens/my-admin/my-admin";

import { collection,getDocs,db} from "./firebase";

function Routes(){
    let {state , dispatch} = useContext(GlobalContext)
    // useEffect(async function(){
    //     let dataRef = collection(db, "jiu-jitsu-bags")
    //     let data = await getDocs(dataRef);
    //     data.forEach(function(doc){
    //         dispatch({type : "JIU_JITSU_BAGS" , payload: doc})
    //     })
    // },[])
      
    // useEffect(async function(){
    //     let dataRef = collection(db, "jiu-jitsu-uniforms")
    //     let data = await getDocs(dataRef);
    //     data.forEach(function(doc){
    //         dispatch({type : "JIU_JITSU_UNIFORMS" , payload: doc})
    //     })
    // },[])
    return(
        <>
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/category' >
                    <Category />
                </Route>
                <Route path='/jiu-jitsu/:id' >
                    <JiuJitsu />
                </Route>
                <Route path='/judo/:id' >
                    <Judo />
                </Route>
                <Route path='/karate/:id' >
                    <Karate />
                </Route>
                <Route path='/apparel/:id' >
                    <Apparel />
                </Route>
                <Route path='/taekwondo/:id' >
                    <Taekwondo />
                </Route>
                <Route path='/boxing/:id' >
                    <Boxing />
                </Route>
                <Route path='/sports-gloves/:id' >
                    <SportsGloves />
                </Route>
                <Route path='/accessories/:id' >
                    <Accessories />
                </Route>
                {/* <Route path='/loading' >
                    <LoadingScreen />
                </Route> */}
                <Route path='/my-admin' >
                    <MyAdmin />
                </Route>
                {/* <Route path='/myadmin' exact>
                    <MyAdmin />
                </Route> */}
                {/* <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route> */}

            </Switch>
        </Router>
        </>
    )
}

export default Routes;