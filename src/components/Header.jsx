import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../assets/logo.png'

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Site Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Municipal Logo" className="h-12 w-auto" />
          <h1 className="text-lg font-semibold leading-tight">
            {t('siteName')}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <NavLinks t={t} />

          {/* Official Login Button */}
          <a
            href="http://gopalganjapp.municipalbihar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-white hover:text-secondary text-white px-4 py-2 rounded transition-colors duration-200"
          >
            {t('officialLogin')}
          </a>
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-64 bg-primary z-50 p-6 flex flex-col transition-transform duration-300">
            {/* Close button */}
            <button
              className="self-end mb-6 text-white text-xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <NavLinks t={t} onClick={() => setOpen(false)} />

              {/* Official Login Button */}
              <a
                href="http://gopalganjapp.municipalbihar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-white hover:text-secondary text-white px-4 py-2 rounded text-center transition-colors duration-200"
              >
                {t('officialLogin')}
              </a>
            </nav>

            {/* Language Switcher */}
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </header>
  )
}

/* Reusable Nav Links */
function NavLinks({ t, onClick }) {
  return (
    <>
      <Link to="/" onClick={onClick} className="hover:underline">
        {t('home')}
      </Link>
      <Link to="/about" onClick={onClick} className="hover:underline">
        {t('about')}
      </Link>
      <Link to="/services" onClick={onClick} className="hover:underline">
        {t('services')}
      </Link>
      <Link to="/contact" onClick={onClick} className="hover:underline">
        {t('contact')}
      </Link>
    </>
  )
}
