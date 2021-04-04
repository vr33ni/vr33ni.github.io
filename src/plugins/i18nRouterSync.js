import router from '../router';
import i18n from './i18n';

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  const language = to.params.lang;

  // ignore any redirect for the oidc callback
  if (!to.meta.isOidcCallback && !['en', 'de'].includes(language)) {
    // default to 'en' if not set
    return next('en');
  }

  // set the current language for vuex-i18n. note that translation data
  // for the language might need to be loaded first
  if (i18n.locale !== language) {
    i18n.locale = language;
  }

  return next();
});
