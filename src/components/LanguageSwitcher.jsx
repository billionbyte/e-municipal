import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2 text-sm">
      <button onClick={() => i18n.changeLanguage('hi')}>हिंदी</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  )
}
