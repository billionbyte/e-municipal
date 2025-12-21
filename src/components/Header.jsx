import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../assets/logo.png'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="w-full bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Site Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Municipal Logo" className="h-12 w-auto" />
          <h1 className="text-lg font-semibold leading-tight">
            {t('siteName')}
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:underline">
            {t('home')}
          </Link>
          <Link to="/about" className="hover:underline">
            {t('about')}
          </Link>
          <Link to="/services" className="hover:underline">
            {t('services')}
          </Link>
          <Link to="/contact" className="hover:underline">
            {t('contact')}
          </Link>
        </nav>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  )
}
