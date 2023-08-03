import '@/lang/lang'
import getLanguageDictionary from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const MenuBar = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"MenuBar")

    return(
        <menu>
            <div className='menu_option_list'>
                <div className='menu_option'>
                    <a href='#works'>{dict.works}</a>
                </div>
                <div className='menu_option'>
                    <a href='#about'>{dict.about}</a>
                </div>
                <div className='menu_option'>
                <a href='#contact'>{dict.contact}</a>
                </div>
            </div>
        </menu>
    )
}

export default MenuBar