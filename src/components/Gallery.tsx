import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Gallery({ onOpen }:{ onOpen:(src:string)=>void }){
  const { t } = useTranslation()
  const images = ['/sample1.svg']
  return (
    <div className="gallery">
      <h2>{t('gallery.title')}</h2>
      <div className="thumbs">
        {images.map((s,i)=> (
          <button key={i} className="thumb" onClick={()=>onOpen(s)}>
            <img src={s} alt={t('gallery.sampleAlt', {n: i+1})} />
          </button>
        ))}
      </div>
    </div>
  )
}
