import '@/globals.css'

const PlainText = ({text, custom_style=true, double_next_line=false}:{text:string, custom_style?:boolean, double_next_line?:boolean}) => {


    if(!custom_style){
        return text.split('\n').map((x,i)=><p key={i}>{x}</p>)
    }

    if(double_next_line){

        return (
            <div>
                {
                text.split('\n').map((x,i)=>{
                    if(x==''){
                        return <br key={i}/>
                    }
                    return <p key={i}>{'\xA0\xA0'+x}</p>
                })
                }
            </div>
        )
    }
    else {
    
        return (custom_style ?
            <div>
                {
                text.split('\n').map((x,i)=>{return <p className={"plain_console_content"} key={i}>{'\xA0\xA0'+x}</p>})
                }
            </div>
            :
            text.split('\n').map((x,i)=><p key={i}>{x}</p>)
            )
    }

}

export default PlainText