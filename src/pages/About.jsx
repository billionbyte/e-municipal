import { useTranslation } from 'react-i18next'
import MainLayout from '../layout/MainLayout'
import EOProfile from '../components/EOProfile'

export default function About() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      {/* Page Heading */}
      <h2 className="text-2xl font-semibold mb-6 text-primary">
        {t('aboutTitle')}
      </h2>

      {/* Intro */}
      <p className="mb-6 text-sm leading-relaxed">{t('aboutIntro')}</p>

      {/* About Municipality */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-primary">
          {t('aboutMunicipality')}
        </h3>
        <p className="text-sm leading-relaxed">{t('aboutMunicipalityDesc')}</p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 bg-white">
          <h3 className="text-lg font-semibold mb-2 text-primary">
            {t('vision')}
          </h3>
          <p className="text-sm leading-relaxed">{t('visionDesc')}</p>
        </div>

        <div className="border p-4 bg-white">
          <h3 className="text-lg font-semibold mb-2 text-primary">
            {t('mission')}
          </h3>
          <p className="text-sm leading-relaxed">{t('missionDesc')}</p>
        </div>
      </section>

      {/* Functions */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-primary">
          {t('functions')}
        </h3>

        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>{t('function1')}</li>
          <li>{t('function2')}</li>
          <li>{t('function3')}</li>
          <li>{t('function4')}</li>
          <li>{t('function5')}</li>
        </ul>
      </section>

      {/* Mayor Message & EO Profile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mayor Message */}
        <section className="border p-4 bg-background">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {t('mayorMessageTitle')}
          </h3>
          <p className="text-sm leading-relaxed">{t('mayorMessage')}</p>
        </section>

        {/* EO Profile */}
        <EOProfile />
      </div>
    </MainLayout>
  )
}
