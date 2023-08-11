import { ReactElement } from 'react'
import './style.css'

const FolderContainer = ({className,content_list, selectedKey, setSelectedContent}:{className:string, content_list:{console:any, title:string}[], selectedKey: number, setSelectedContent: any})=> {

    return <div className={'folder_container ' + className}>
        <div>
        <p>{"root"}</p>
        {content_list.map((x,i)=>{
            return (<span key={i}>
                <p>{"\xA0\xA0|"}</p>
                <p>{"\xA0\xA0|---"}
                    <button className={selectedKey == i ? "selected_option" : undefined}
                    onClick={()=>setSelectedContent(i)}>{x.title}</button>
                    </p>
            </span>)
            }
        )}
    </div>
    </div>
}

export default FolderContainer