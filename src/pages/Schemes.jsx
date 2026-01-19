import { useTranslation } from 'react-i18next'
import MainLayout from '../layout/MainLayout'

export default function Schemes() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6 text-primary">
        {t('schemesTitle')}
      </h2>

      {/* Intro */}
      <p className="mb-8 text-sm leading-relaxed">{t('schemesIntro')}</p>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <SchemeCard title={t('scheme1Title')} desc={t('scheme1Desc')} />

        <SchemeCard title={t('scheme2Title')} desc={t('scheme2Desc')} />

        <SchemeCard title={t('scheme3Title')} desc={t('scheme3Desc')} />

        <SchemeCard title={t('scheme4Title')} desc={t('scheme4Desc')} />
      </div>
    </MainLayout>
  )
}

/* Reusable Card */
function SchemeCard({ title, desc }) {
  return (
    <div className="border bg-white p-4">
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
