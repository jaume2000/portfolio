
import {getLanguageDictionary} from '@/lang/lang'

const GeneralInformation = ({lang}:{lang:string}) => {
    let dict = getLanguageDictionary(lang,"About")

    

    //return <div>{transformText(dict.generalInformation)}</div>

    return <div>
        <p className='console_line'>let {dict.name_variable} = <C>{'"Jaume Ivars Grimalt"'}</C></p>
        <p className='console_line'>{"let brith = new Date("}<C>{'05'}</C>, <C>{'"'}{dict.birth_month}{'"'}</C>, <C>{'2001'}</C>{")"}</p>
        <br/>
        <p className='console_line'>{"function "}{dict.getHabilities_function}{"() {"}</p>
        <p className='console_line'>{"\xA0\xA0\xA0\xA0return { "}</p>
        <p className='console_line'>
            <C color="#3299CC">{"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0C"}</C>{": "}<C>     {"6"}</C>{',\xA0\xA0\xA0\xA0'}
            <C color="#FFAA00">{"C++"}</C>{": "}<C>    {"7"}</C>{',\xA0\xA0\xA0\xA0'}
            <C color="#A160A4">{"C#"}</C>{": "}<C>     {"9"}</C>{',\xA0\xA0\xA0\xA0'}
            <C color="#AAAAAA">{"Unity3D"}</C>{": "}<C> {"8"}</C>{','}
        </p>
        <p className='console_line'>
            <C>{"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Python"}</C>{": "}<C>  {"8"}</C>{',\xA0\xA0\xA0\xA0'}
            <C color="#FFFF00">{"JavaScript"}</C>{": "}<C>              {"8"}</C>{',\xA0\xA0\xA0\xA0'}
            <C color="#3299CC">{"TypeScript"}</C>{": "}<C>              {"7"}</C>
        </p>
        <p className='console_line'>{"\xA0\xA0\xA0\xA0}"}</p>
        <p className='console_line'>{"}"}</p>
        <br/>

    </div>

}

const C = ({color="white", children}:{color?:string, children?:React.ReactNode}) => {
    return <span style={{color: color}}>{children}</span>
}

export default GeneralInformation