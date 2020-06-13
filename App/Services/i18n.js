import i18n from 'i18n-js'

import en from 'App/Assets/Locales/en.json'
import pl from 'App/Assets/Locales/pl.json'

i18n.defaultLocale = 'en'
i18n.locale = 'pl'
i18n.fallbacks = true
i18n.translations = { en, pl }

export default i18n
