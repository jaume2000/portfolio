import '@/globals.css'
import PlainText from './PlainText'
import './css/CVDownload.css'
import { getLanguageAllDictionary } from '@/lang/lang'
import ReactMarkdown from 'react-markdown';

const ContactMe = ({lang}:{lang:string}) => {
    let dict = getLanguageAllDictionary(lang).About.conctactme

    return (
        <div>
            <ReactMarkdown>{dict.content}</ReactMarkdown>
        </div>
    )

}

export default ContactMe