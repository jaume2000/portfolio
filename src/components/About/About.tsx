import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import '@/css/globals.css'
import ConsoleContainer from '@/components/utils/ConsoleContainer/ConsoleContainer'
import './style.css'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"About")

    return(
        <div className='about_container fullpage'>
            <h1 id='about'>
                {dict.title}
            </h1>
            <ConsoleContainer mode={"hacker_console"} style={{height:"60vh", width:'50%', margin:"auto", top:"50px"}}>
                <p>{"> Hola!"}</p>
                <p>{"> Hola!"}</p>
                <p>{"> Hola!"}</p>
            </ConsoleContainer>

        </div>
    )
}

export default About