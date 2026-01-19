import { useTranslation } from 'react-i18next'
import MainLayout from '../layout/MainLayout'

export default function Services() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6 text-primary">
        {t('servicesTitle')}
      </h2>

      {/* Intro */}
      <p className="mb-8 text-sm leading-relaxed">{t('servicesIntro')}</p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title={t('service1Title')}
          desc={t('service1Desc')}
          action={t('applyNow')}
        />

        <ServiceCard
          title={t('service2Title')}
          desc={t('service2Desc')}
          action={t('applyNow')}
        />

        <ServiceCard
          title={t('service3Title')}
          desc={t('service3Desc')}
          action={t('applyNow')}
        />

        <ServiceCard
          title={t('service4Title')}
          desc={t('service4Desc')}
          action={t('payNow')}
        />

        <ServiceCard
          title={t('service5Title')}
          desc={t('service5Desc')}
          action={t('payNow')}
        />

        <ServiceCard
          title={t('service6Title')}
          desc={t('service6Desc')}
          action={t('viewDetails')}
        />
      </div>

      {/* Citizen Help */}
      <section className="border p-4 bg-white mt-5">
        <h3 className="text-xl font-semibold mb-2 text-primary">
          {t('citizenHelp')}
        </h3>
        <p className="text-sm leading-relaxed mb-3">{t('citizenHelpDesc')}</p>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>{t('citizenHelpPoint1')}</li>
          <li>{t('citizenHelpPoint2')}</li>
          <li>{t('citizenHelpPoint3')}</li>
          <li>{t('citizenHelpPoint4')}</li>
        </ul>
      </section>
    </MainLayout>
  )
}

/* Reusable Card */
function ServiceCard({ title, desc, action }) {
  return (
    <div className="border bg-white p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-sm leading-relaxed mb-4">{desc}</p>
      </div>

      <button className="self-start bg-primary hover:bg-secondary transition text-white px-4 py-2 text-sm rounded">
        {action}
      </button>
    </div>
  )
}
