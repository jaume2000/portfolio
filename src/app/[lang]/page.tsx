import PresentationPage from "@/components/PresentationPage/PresentationPage";
import MainPage from "@/components/MainPage/MainPage";
import { useState } from "react";


const Home = ({params: {lang}}: {params: {lang:string}}) => {

    return (
        <MainPage lang={lang}/>
    )
}

export default Home;