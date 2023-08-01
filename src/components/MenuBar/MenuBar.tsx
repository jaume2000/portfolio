import '@/lang/lang'
import getLanguageDictionary from '@/lang/lang'
import '@/css/globals.css'

const MenuBar = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"MenuBar")

    return(
        <menu>
            {lang}
        </menu>
    )
    //xd
}

export default MenuBar