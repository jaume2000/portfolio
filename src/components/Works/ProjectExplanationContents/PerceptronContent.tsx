import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function PerceptronContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works
  return (
    <div>{dict.visual_perceptron_project_content.content}</div>
  )
}

export default PerceptronContent