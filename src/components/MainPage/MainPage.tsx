//"use client"

import PresentationPage from "@/components/PresentationPage/PresentationPage";
import About from '@/components/About/About'
import Works from '@/components/Works/Works'
import MenuBar from '@/components/NavBar/NavBar'
import Contact from '@/components/Contact/Contact'
import { useState, useEffect } from "react";
import LoadingScreen from '@/components/utils/LoginScreen/LoginScreen'


const MainPage = ({lang}:{lang:string}) => {

    /*
    const [scrollPosition,setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = document.documentElement.scrollTop;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    //console.log(scrollPosition/(document.documentElement.scrollHeight-windowDimensions.height) * 100, "%")
*/

    

    return (
        <div>
            <MenuBar lang={lang}/>
            <PresentationPage lang={lang}/>
            <About lang={lang}/>
            <Works lang={lang}/>
            <Contact lang={lang}/>
            <LoadingScreen/>
        </div>
    )
}

export default MainPage;