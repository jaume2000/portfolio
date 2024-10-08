
import {getLanguageAllDictionary} from '@/lang/lang'
import PlainText from './PlainText'
import '@/globals.css'

const SkillsCode = ({lang}:{lang:string}) => {
    const dict = getLanguageAllDictionary(lang).About

    const TAB = '\xA0\xA0\xA0'

    return <div className='no_p_padding no_p_tb_margin'>
        <C color='rgba(150,150,150)'>
        <PlainText custom_style={false} text={dict.skills_code.general_info_comment}/>
        </C>
        <p>let {dict.skills_code.name_variable} = {'"'}<C>{'Jaume Ivars Grimalt'}</C>{'"'}</p>
        {/*<p>{"let brith = new Date("}<C>{'05'}</C>, {'"'}<C>{dict.birth_month}</C>{'"'}, <C>{'2001'}</C>{")"}</p>*/}
        <p>{"let "}{dict.soft_skills.variable}{" = ["}</p>
        <p className="tab_1">
            {'"'}<C>{dict.soft_skills.self_taught}</C>{'", '} 
            {'"'}<C>{dict.soft_skills.likes_challenges}</C>{'", '}
            {'"'}<C>{dict.soft_skills.entrepreneur}</C>{'", '} 
            {'"'}<C>{dict.soft_skills.leadership}</C>{'", '}
            {'"'}<C>{dict.soft_skills.fast_learner}</C>{'", '}
            {'"'}<C>{dict.soft_skills.creative}</C>{'", '}
            <G>{'"'}<C>{dict.soft_skills.startup_culture}</C>{'"'}</G>
        </p>
        <p>{' ]'}</p>
        <br/>
        <p>{"function "}{dict.skills_code.getProgrammingLanguages_function}{"() {"}</p>
        <p className='tab_1'>{"return { "}</p>
        <p className='tab_2'>
            <G><C /*color="#3299CC"*/>{'C'}</C>{": "}<C>{'6.5'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#FFAA00"*/>{"C++"}</C>{": "}<C>{'7'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#A160A4"*/>{"C#"}</C>{": "}<C>{'9'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#CCCCCC"*/>{'Unity3D'}</C>{": "}<C> {'8'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#FFFF66"*/>{'Python'}</C>{": "}<C>  {'9'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#FFFF66"*/>{'JavaScript'}</C>{": "}<C>{'8'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#44BBBB"*/>{'TypeScript'}</C>{": "}<C>{'7'}</C>{','}</G>{TAB+' '}

            <G><C /*color="#44BB44"*/>{'MongoDB'}</C>{": "}<C>{'7'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#4444BB"*/>{'MySQL'}</C>{": "}<C>{'7'}</C>{','}</G>{TAB+' '}
            <G><C /*color="#FFAA00"*/>{'AWS'}</C>{": "}<C>{'6.5'}</C>{','}</G>{TAB+' '}
            <G>
                {/*<C color='#4444BB'>{'G'}</C>
                <C color='#BB4444'>{'o'}</C>
                <C color='#BBBB44'>{'o'}</C>
                <C color='#4444BB'>{'g'}</C>
                <C color='#44BB44'>{'l'}</C>
                <C color='#BB4444'>{'e'}</C>
            <C color="#AAAAAA">{' Cloud'}</C>{": "}<C>{'7'}</C></G>{TAB+' '*/
            }
                <C>{'Google Cloud'}</C>{": "}<C>{'7'}</C>
            </G>{TAB+' '}
        </p>
        <p className='tab_1'>{"}"}</p>
        <p>{"}"}</p>
        <br/>
        <p>{"function "}{dict.skills_code.getNaturalLanguages_function}{'() {'}</p>
        <p className='tab_1'>{"let "}<C>{dict.skills_code.english_language}</C>{" = "}<C>{'"B2"'}</C></p>
        <p className='tab_1'>{"let "}<C>{dict.skills_code.spanish_language}</C>{" = "}<C>{'"'}{dict.skills_code.native_value}{'"'}</C></p>
        <p className='tab_1'>{"let "}<C>{dict.skills_code.catalan_language}</C>{" = "}<C>{'"'}{dict.skills_code.native_value}{'"'}</C></p>
        <br/>
        <p className='tab_1'>{'return { '}
        {dict.skills_code.english_language}{', '}{dict.skills_code.spanish_language}{', '}{dict.skills_code.catalan_language}{' }'}
        </p>
        <p>{"}"}</p>
    </div>

}

//Just to color text. Default color is white.
const C = ({color='white', children}:{color?:string, children?:React.ReactNode}) => {
    return <span style={{color: color}}>{children}</span>
}

//Group text as an un-wrapable text. Like a solid block. white-space: nowrap in css.
const G = ({children}:{children:React.ReactNode}) => <span className='no_wrap'>{children}</span>

export default SkillsCode