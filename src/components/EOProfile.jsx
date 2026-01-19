import { useTranslation } from 'react-i18next'
import eoImage from '../assets/eo/ajay-kumar-eo-gopalganj.png'

export default function EOProfile() {
  const { t } = useTranslation()

  return (
    <section className="border p-4 bg-white">
      <h3 className="text-xl font-semibold mb-4 text-primary text-center">
        {t('eoTitle')}
      </h3>

      <div className="flex flex-col items-center">
        <div className="w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-secondary">
          <img
            src={eoImage}
            alt={t('eoName')}
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-lg font-semibold text-primary">{t('eoName')}</h4>

        <p className="text-sm text-gray-600">{t('eoDesignation')}</p>
      </div>
    </section>
  )
}
