import { ReactElement } from 'react'
import './style.css'

const FolderContainer = ({content_list, selectedKey, setSelectedContent}:{content_list:{console:any, title:string}[], selectedKey: number, setSelectedContent: any})=> {

    return <div className='folder_container'>
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
}

export default FolderContainer