
import { useRouter } from "next/navigation"
import {getLanguageDictionary} from "@/lang/lang";
import '@/css/globals.css'
import './style.css'

const PresentationPage = ({lang}: {lang:string}) => {
    
    //const {push} = useRouter()
    let dict = getLanguageDictionary(lang,"PresentationPage");

    return (
        <div>
            <div className="presentation_box fullpage">
                <h1 id="main_title">{dict.main_title}</h1>
                <h2 className="presentation">{dict.presentation}</h2>
                <p className="unfinished_message">{"My portfolio is not finished yet! Currently is at its 55%"}</p>
                <div className="black_waves"/>
            </div>
        </div>
    )
}

export default PresentationPage;