import i18next from 'i18next'
import {useTranslation, Trans} from 'react-i18next'

function App(): JSX.Element {
  const {t} = useTranslation()
  return (
    <div>
      <h1>{t('title', {userName: 'username'})+'!'}</h1>
      <p>{t('description', {lng: 'en'})}</p>
      <Trans i18nKey='complicated-text'>
        hello <b>friend</b>
      </Trans>
      <button 
        onClick={() => i18next.changeLanguage('es')}
      >
        Espanol
      </button>
      <button
        onClick={() => i18next.changeLanguage('en')}
      >
        English
      </button>
    </div>
  )
}

export default App
