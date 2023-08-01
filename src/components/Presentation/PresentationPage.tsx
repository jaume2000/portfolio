
import { useRouter } from "next/navigation"
import getLanguageDictionary from "@/lang/lang";
import '@/css/globals.css'

const PresentationPage = ({lang}: {lang:string}) => {
    
    //const {push} = useRouter()
    let dict = getLanguageDictionary(lang,"PresentationPage");

    return (
        <div>
            <div className="presentation_box">
                <div className="space"></div>
                <h1 className="main_title">{dict.main_title}</h1>
                <h2 className="presentation">{dict.presentation}</h2>
            </div>
            <div>{"Other content"}</div>
        </div>
    )
}

export default PresentationPage;