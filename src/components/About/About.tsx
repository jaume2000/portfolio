import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import Text from 'react/'
import '@/css/globals.css'
import ConsoleContainer from '@/components/utils/ConsoleContainer/ConsoleContainer'
import './style.css'
import GeneralInformation from './GeneralInformation'
import Tab from '@/components/utils/Tab/Tab'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"About")

    return(
        <div className='about_container fullpage'>
            <h1 id='about'>
                {dict.title}
            </h1>
            <ConsoleContainer mode={"hacker_console"} style={{height:"60vh", width:'50%', margin:"auto", top:"50px"}}>
                <GeneralInformation lang={lang}/>
            </ConsoleContainer>

        </div>
    )
}

export default About