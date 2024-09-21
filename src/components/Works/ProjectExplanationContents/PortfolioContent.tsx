import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function PortfolioContent({lang}:{lang:string}) {
  const dict = getLanguageAllDictionary(lang).Works
  return (
    <div className="hide_scrollbarworks_grid" style={{ width: '100%', padding:'50px', color: 'white', overflowY: 'auto', height: 'auto', borderWidth: '4px', borderStyle: 'solid', borderColor: 'var(--main_color1) var(--main_color2) var(--main_color2) var(--main_color1)', borderRadius: '10px'}}>
      {dict.portfolio_project_content.content}
    </div>
  )
}

export default PortfolioContent