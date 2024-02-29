import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function AutoencoderContent({lang}:{lang:string}) {
    let dict = getLanguageAllDictionary(lang).Works
  return (
    <div className="hide_scrollbar" style={{ width: '100%', padding:'50px', color: 'white', overflowY: 'auto'}}>

        {dict.autoencoder_project_content.explanation_1}
        <div style={{display:'flex', justifyContent: 'center'}}>
            <img width={400}  src="/public/autoencoder_latent_space.png" alt="Espacio latente del autoencoder"/>
        </div>

        {dict.autoencoder_project_content.explanation_2}
        <div style={{display:'flex', justifyContent: 'center'}}>
                <video width={400} autoPlay loop muted playsInline>
                    <source src="/public/autoencoder_video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>
    </div>
)
}

export default AutoencoderContent