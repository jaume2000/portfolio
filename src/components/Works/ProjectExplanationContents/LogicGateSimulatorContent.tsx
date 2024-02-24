import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function LogicGateSimulatorContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works
  return (
    <div>{dict.hardware_project_content.content}</div>
  )
}

export default LogicGateSimulatorContent