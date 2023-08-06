import '@/css/globals.css'

const PlainText = ({text, custom_style=true}:{text:string, custom_style?:boolean}) => {

    
    return (custom_style ?
        <div className={"plain_console_content"}>{text.split('\n').map((x,i)=><p key={i}>{'\xA0\xA0'+x}</p>)}</div>
        :
        text.split('\n').map((x,i)=><p key={i}>{x}</p>)
        )

}

export default PlainText