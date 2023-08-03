import PresentationPage from "@/components/PresentationPage/PresentationPage";
import About from '@/components/About/About'
import Works from '@/components/Works/Works'
import Contact from '@/components/Contact/Contact'
import './basic_behaviour'


const Home = ({params: {lang}}: {params: {lang:string}}) => {

    return (
        <div>
            <PresentationPage lang={lang}/>
            <Works lang={lang}/>
            <About lang={lang}/>
            <Contact lang={lang}/>
        </div>
    )
}

export default Home;