import { Status, DEFAULT_LOCALE, SupportedLang, MESSAGE_URL } from "./const"

export const i18n = {
    DEFAULT_LOCALE,
    currentLocale: "",
    navigatorLanguage: "",
    messages: {},
    status: Status.LOADING,
    t,
    loadAndSetLocale,
}

export function t(key) {
  return i18n.messages[key] || key;
}

// TODO test Edge Case !!
export function td(date) {
  if (typeof date === "string") {
    date = new Date(date)
  }
  if (!date instanceof Date) return ""
  const formattedDate = new Intl.DateTimeFormat(i18n.navigatorLanguage).format(date)
  return formattedDate
}

function loadAndSetLocale(newLocale) {
  if (!SupportedLang.includes(newLocale)) {
    newLocale = DEFAULT_LOCALE
  }
  if (i18n.currentLocale === newLocale) {
    return;
  }
  i18n.navigatorLanguage = newLocale
  i18n.status = Status.LOADING;
  fetchMessages(newLocale, (messages) => {
    i18n.messages = messages;
    i18n.currentLocale = newLocale;
    i18n.status = Status.IDLE;
  });
}

function fetchMessages(locale, onComplete) {
  m.request(MESSAGE_URL.replace("{locale}", locale)).then(
    onComplete,
  );
}