import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function StableDiffussionContent({lang}:{lang:string}) {
    let dict = getLanguageAllDictionary(lang).Works
    return (
        <div>{dict.stablediffusion_project_content.content}</div>
      )
}

export default StableDiffussionContent