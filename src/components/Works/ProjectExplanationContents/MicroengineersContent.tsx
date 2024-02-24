import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function MicroengineersContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works
  return (
    <div>{dict.microengineers_project_content.content}</div>
  )
}

export default MicroengineersContent