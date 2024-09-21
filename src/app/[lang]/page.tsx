import MainPage from "@/components/MainPage/MainPage";
import '@/globals.css';


const Home = ({params: {lang}}: {params: {lang:string}}) => {

    return (
        <MainPage lang={lang}/> 
    )
}

export default Home;