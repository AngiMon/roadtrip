import React from 'react';
import useScript from 'hooks/useScript';
import Header from 'components/Home/Header';
import Main from 'components/Home/Main';
import SideMenu from 'components/Home/SideMenu'
import SideBar from 'components/Home/SideBar';
import 'assets/css/index.css'

function HomeComponent (){
    return(
        <div id="wrapper">
            <Header/>
            <SideMenu/>
            <Main/>
            <SideBar/>
        </div>
    )
}

function Home(){
    //external files loading
    useScript('/lib/jquery.min.js');
    useScript('/lib/browser.min.js');
    useScript('/lib/breakpoints.min.js');
    useScript('/lib/util.js');
    useScript('/lib/main.js');

    return <HomeComponent />
}

export default Home;