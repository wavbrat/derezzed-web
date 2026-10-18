import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Editor({ src, onClose }:{ src:string, onClose:()=>void }){
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(()=>{
    const img = new Image()
    img.onload = ()=>{
      const c = canvasRef.current
n      if(!c) return
      const ctx = c.getContext('2d')!
      c.width = Math.min(img.width, 2048)
      c.height = Math.min(img.height, 2048)
      ctx.drawImage(img,0,0,c.width,c.height)
    }
    img.src = src
  }, [src])

  const exportPNG = ()=>{
    const c = canvasRef.current
    if(!c) return
    const url = c.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = 'derezzed-export.png'
    a.click()
  }

  return (
    <div className="editor-screen">
      <div className="editor-top">
        <button onClick={onClose}>{t('editor.close')}</button>
        <div className="editor-actions">
          <button>{t('editor.layers')}</button>
          <button>{t('editor.adjust')}</button>
          <button onClick={exportPNG}>{t('editor.export')}</button>
        </div>
      </div>
      <div className="editor-canvas">
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
