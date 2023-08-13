
import { useRouter } from "next/navigation"
import {getLanguageDictionary} from "@/lang/lang";
import '@/css/globals.css'
import './style.css'
import Image from "next/image";

const PresentationPage = ({lang}: {lang:string}) => {
    
    //const {push} = useRouter()
    let dict = getLanguageDictionary(lang,"PresentationPage");

    return (
        <div>
            <div className="presentation_box fullpage">
                <div>
                    <div className="presentation_content">
                        <h1 id="main_title">{dict.main_title}</h1>
                        <ProfileImage/>
                        <h2 className="presentation">{dict.presentation}</h2>
                    </div>
                    <div className="black_waves"/>
                </div>
            </div>
        </div>
    )
}


const ProfileImage = () => {

    return(
    <div className="profile_image_container">
        <img className="profile_image" src="/public/presentation_photo.png" alt="Presentation photo"/>
        <div className="rotating_shadows">
            <div className="profile_shadow_1"/>
            <div className="profile_shadow_2"/>
        </div>
    </div>
    )
}

export default PresentationPage;