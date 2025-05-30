i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}.json'
    }
  }, function(err, t) {
    updateContent();
  });

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
function changeLanguage(lang) {
  i18next.changeLanguage(lang, () => {
    updateContent();
  });
}
backend: {
  loadPath: '/locales/{{lng}}.json'
}