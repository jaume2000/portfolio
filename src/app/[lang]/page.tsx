import PresentationPage from "@/components/Presentation/PresentationPage";


const Home = ({params: {lang}}: {params: {lang:string}}) => {

    return (
        <PresentationPage lang={lang}/>
    )
}

export default Home;