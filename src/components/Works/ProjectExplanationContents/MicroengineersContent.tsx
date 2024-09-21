import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function MicroengineersContent({lang}:{lang:string}) {
  const dict = getLanguageAllDictionary(lang).Works
  return (
    <div className="hide_scrollbar" style={{ width: '100%', padding: '50px', color: 'white', overflowY: 'auto'}}>
      {dict.microengineers_project_content.content1}
      <br />

      <h2>{dict.microengineers_project_content.myRole_title}</h2>
      <div className='grid_2c_1r gtc_60_40'>
        <section style={{margin: 'auto'}}>{dict.microengineers_project_content.content2}</section>
        <img src="/public/Microengineers/photo2.png" alt="Baceria colony detection" />
      </div>

      {dict.microengineers_project_content.content3}
      <div style={{marginTop: '50px', display:'flex', justifyContent: 'center'}}>
        <img src="/public/Microengineers/photo1.jpeg" alt="Microengineers group photo" />
      </div>
    </div>
  )
}

export default MicroengineersContent