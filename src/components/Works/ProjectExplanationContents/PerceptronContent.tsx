import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function PerceptronContent({lang}:{lang:string}) {
  const dict = getLanguageAllDictionary(lang).Works
  return (
    <div className="hide_scrollbar" style={{ width: '100%', padding: '50px', color: 'white', overflowY: 'auto'}}>
      {dict.visual_perceptron_project_content.content}
    </div>
  )
}

export default PerceptronContent