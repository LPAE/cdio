import { createI18n } from 'vue-i18n'
import messages from '@/lang/en.json'


const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})