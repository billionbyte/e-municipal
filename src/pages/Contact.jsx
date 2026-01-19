import { useTranslation } from 'react-i18next'
import MainLayout from '../layout/MainLayout'
import EOProfile from '../components/EOProfile'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6 text-primary">
        {t('contactTitle')}
      </h2>

      {/* Intro */}
      <p className="mb-6 text-sm leading-relaxed">{t('contactIntro')}</p>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Office Address */}
        <section className="border p-4 bg-white">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {t('officeAddress')}
          </h3>
          <p className="text-sm leading-relaxed">
            {t('addressLine1')} <br />
            {t('addressLine2')}
          </p>
        </section>

        {/* Contact Details */}
        <section className="border p-4 bg-white">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {t('contactDetails')}
          </h3>

          <ul className="text-sm space-y-2">
            <li>
              <strong>{t('phone')}:</strong> {t('phoneNumber')}
            </li>
            <li>
              <strong>{t('email')}:</strong> {t('emailId')}
            </li>
            <li>
              <strong>{t('helpline')}:</strong> {t('helplineNumber')}
            </li>
          </ul>
        </section>
      </div>

      {/* Office Timings */}
      <section className="border p-4 bg-background mb-8">
        <h3 className="text-xl font-semibold mb-2 text-primary">
          {t('officeTimings')}
        </h3>
        <p className="text-sm">
          {t('officeDays')} <br />
          {t('officeHours')}
        </p>
      </section>

      {/* Citizen Help & EO Profile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Citizen Help */}
        <section className="border p-4 bg-white">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {t('citizenHelp')}
          </h3>
          <p className="text-sm leading-relaxed">{t('citizenHelpDesc')}</p>
          <p className="text-sm leading-relaxed">{t('citizenHelpDesc')}</p>
          <p className="text-sm leading-relaxed">{t('citizenHelpDesc')}</p>
          <p className="text-sm leading-relaxed">{t('citizenHelpDesc')}</p>
        </section>

        {/* EO Profile */}
        <EOProfile />
      </div>
    </MainLayout>
  )
}
