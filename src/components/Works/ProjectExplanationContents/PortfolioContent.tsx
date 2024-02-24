import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function PortfolioContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works
  return (
    <div>{dict.portfolio_project_content.content}</div>
  )
}

export default PortfolioContent