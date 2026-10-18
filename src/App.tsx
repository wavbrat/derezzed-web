import React, { useState } from 'react'
import Editor from './components/Editor'
import Gallery from './components/Gallery'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'

export default function App(){
  const { t } = useTranslation()
  const [image, setImage] = useState<string | null>(null)
  const [lang, setLang] = useState('es')

  const changeLang = (l:string) => {
    i18n.changeLanguage(l)
    setLang(l)
  }

  return (
    <div className="app">
      <header className="app-header">
        <img src="/logo.svg" alt="Derezzed" className="logo" />
        <h1>{t('app.title')}</h1>
        <div className="lang-select">
          <button onClick={()=>changeLang('es')} aria-label="es">ES</button>
          <button onClick={()=>changeLang('en')} aria-label="en">EN</button>
          <button onClick={()=>changeLang('fr')} aria-label="fr">FR</button>
          <button onClick={()=>changeLang('ru')} aria-label="ru">RU</button>
        </div>
      </header>

      {!image ? (
        <Gallery onOpen={(src)=>setImage(src)} />
      ) : (
        <Editor src={image} onClose={()=>setImage(null)} />
      )}

      <footer className="app-footer">
        <small>{t('app.footer')}</small>
      </footer>
    </div>
  )
}
