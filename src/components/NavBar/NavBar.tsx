import '@/lang/lang'
import Image from "next/image"
import {getLanguageDictionary, getLanguageEmoji} from '@/lang/lang'
import '@/css/globals.css'
import Dropdown from '@/components/utils/Dropdown/Dropdown'
import Element from '@/components/utils/Element/Element'
import './style.css'

const NavBar = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"MenuBar")

    return(
        <nav>
            <div className='menu_container'>
                <a href='#main_title' className="menu_left_zone">
                    <Image width={100} height={40} className={"ji_logo  nav_hover_animation"} src={"/JaumeIvars_icon.png"} alt={"Jaume Ivars Grimalt logo"}/>
                </a>
                <div className='menu_option_list'>
                    <div className='menu_option'>
                        <a className=" nav_hover_animation" href='#about'>{dict.about}</a>
                    </div>
                    <div className='menu_option'>
                        <a className=" nav_hover_animation" href='#works'>{dict.works}</a>
                    </div>
                    <div className='menu_option'>
                        <a className=" nav_hover_animation" href='#contact'>{dict.contact}</a>
                    </div>
                </div>
                <div className="menu_right_zone" id='language_selector'>
                    <div className='dark_light_mode'>

                    </div>
                    <div className='language_selection'>
                        <a className="nav_hover_animation lang_icon" href="/en">{"🇬🇧"}</a>
                        <a className="nav_hover_animation lang_icon" href="/es">{"🇪🇸"}</a>
                        <a className="nav_hover_animation lang_icon" href="/fr">{"🇫🇷"}</a>
                        {/*
                        <Dropdown>
                            <Element href="/en" text={"🇬🇧"}/>
                            <Element href="/es" text={"🇪🇸"}/>
                            <Element href="/fr" text={"🇫🇷"}/>
                            <Element href="/ca" text={"ca"}/>

                        </Dropdown>
                        */
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar