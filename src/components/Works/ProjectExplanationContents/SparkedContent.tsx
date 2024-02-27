import { getLanguageAllDictionary } from '@/lang/lang'
import React from 'react'

function SparkedContent({lang}:{lang:string}) {
  let dict = getLanguageAllDictionary(lang).Works.sparked_project_content
  return (
    <div className="hide_scrollbar" style={{ width: '100%', padding: '50px', color: 'white', overflowY: 'auto'}}>
      {dict.intro}
      <br />
      <hr />
      <section>
        <h2>{dict.whatIsSparked_title}</h2>
        <div className='grid_2c_1r gtc_40_60'>
          <img style={{width: '75%', boxShadow: '0px 0px 50px rgba(255,255,255,0.2)', borderRadius: '7.5%', margin: 'auto'}} src='public/SparkED/round_sparked_logo.png'/>
          <section>{dict.whatIsSparked}</section>
        </div>
      </section>

      <br />
      <hr />

      <section>
        <h2>{dict.myRole_title}</h2>
        {dict.myRole}
      </section>

      <br />
      <hr />

      <section>
          <h2>{dict.myRoadmap_title}</h2>
          <div className='grid_2c_1r gtc_60_40'>
            <section style={{margin: 'auto'}}>
              {dict.myRoadmap1}
            </section>
            <img src="/public/SparkED/photo1.jpeg" style={{ width: '80%'}}/>
          </div>
          <div className='grid_2c_1r gtc_40_60'>
            <img src="/public/SparkED/photo2.jpg" style={{ width: '80%'}}/>
            <section style={{margin: 'auto'}}>
              {dict.myRoadmap2}
            </section>
          </div>
          {dict.myRoadmap3}
      </section>

      <br />
      <hr />

      <section>
        <h2>{dict.acknowledgements_title}</h2>
        {dict.acknowledgements}
      </section>

      <br />
      <hr />
      <section>
        <h2>{dict.gallery_title}</h2>
        <section className='grid_gallery'>
          <img src="/public/SparkED/photo3.jpg" alt=""/>
          <img src="/public/SparkED/photo4.jpg" alt=""/>
          <img src="/public/SparkED/photo5.jpg" alt=""/>
          <img src="/public/SparkED/photo6.jpg" alt=""/>
          <img src="/public/SparkED/photo7.jpg" alt=""/>
          <img src="/public/SparkED/photo8.jpg" alt=""/>
        </section>
      </section>
    </div>
  )
}

export default SparkedContent