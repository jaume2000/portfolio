import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function MicroengineersContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works
  return (
    <div className="hide_scrollbar" style={{ width: '100%', padding: '50px', color: 'white', overflowY: 'auto'}}>
      {dict.microengineers_project_content.content}
    </div>
  )
}

export default MicroengineersContent