import { redirect } from "next/navigation"
import { isLenguageAvailable } from "@/lang/lang"

const Home = ()=>{
    let language = navigator.language.split('-')[0]
    redirect((isLenguageAvailable(language) ? ('/'+language) : "/en"))
    return <></>
}

export default Home