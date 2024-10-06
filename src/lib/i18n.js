import { Status, DEFAULT_LOCALE, MESSAGE_URL } from "./const"

export const i18n = {
    DEFAULT_LOCALE,
    currentLocale: "",
    messages: {},
    status: Status.LOADING,
    t,
    loadAndSetLocale,
}

export function t(key) {
    return i18n.messages[key] || key;
  }
  function loadAndSetLocale(newLocale) {
    if (i18n.currentLocale === newLocale) {
      return;
    }
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