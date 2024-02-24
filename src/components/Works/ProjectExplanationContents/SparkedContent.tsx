import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function SparkedContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works
  return (
    <div>{dict.sparked_project_content.content}</div>
  )
}

export default SparkedContent