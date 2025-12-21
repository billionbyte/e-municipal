import { useTranslation } from 'react-i18next'
import MainLayout from '../layout/MainLayout'
import HomeCarousel from '../components/HomeCarousel'

export default function Home() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <HomeCarousel />

      <h2 className="text-2xl font-semibold mb-6">{t('welcome')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Announcements />
        <News />
        <HouseTax />
        <UsefulLinks />
      </div>
    </MainLayout>
  )
}

function Announcements() {
  const { t } = useTranslation()

  return (
    <section className="border p-4 bg-white">
      <h3 className="text-xl font-semibold mb-3 text-primary">
        {t('announcements')}
      </h3>

      <div className="marquee-container h-40 overflow-hidden">
        <ul className="marquee-up space-y-3 text-sm list-disc list-inside">
          <li>{t('announce1')}</li>
          <li>{t('announce2')}</li>
          <li>{t('announce3')}</li>
          <li>{t('announce4')}</li>
        </ul>
      </div>
    </section>
  )
}

function News() {
  const { t } = useTranslation()

  return (
    <section className="border p-4 bg-white">
      <h3 className="text-xl font-semibold mb-3 text-primary">{t('news')}</h3>

      <div className="marquee-container h-40 overflow-hidden">
        <ul className="marquee-up space-y-3 text-sm">
          <li>📰 {t('news1')}</li>
          <li>📰 {t('news2')}</li>
          <li>📰 {t('news3')}</li>
        </ul>
      </div>
    </section>
  )
}

function HouseTax() {
  const { t } = useTranslation()

  return (
    <section className="border p-4 bg-background">
      <h3 className="text-xl font-semibold mb-2 text-primary">
        {t('houseTax')}
      </h3>

      <p className="text-sm mb-3">{t('houseTaxDesc')}</p>

      <button className="bg-primary hover:bg-secondary transition text-white px-4 py-2 text-sm rounded">
        {t('payNow')}
      </button>
    </section>
  )
}

function UsefulLinks() {
  const { t } = useTranslation()

  return (
    <section className="border p-4 bg-white">
      <h3 className="text-xl font-semibold mb-3 text-primary">
        {t('usefulLinks')}
      </h3>

      <ul className="space-y-2 text-sm list-disc list-inside">
        <li>{t('link1')}</li>
        <li>{t('link2')}</li>
        <li>{t('link3')}</li>
        <li>{t('link4')}</li>
      </ul>
    </section>
  )
}
