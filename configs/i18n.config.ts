// eslint-disable-next-line no-unused-vars
import { NuxtVueI18n } from 'nuxt-i18n';
// eslint-disable-next-line no-unused-vars
import AllOptionsInterface = NuxtVueI18n.Options.AllOptionsInterface;
import getLanguages from '../lang';

const i18n: () => Promise<AllOptionsInterface> = async (): Promise<
  AllOptionsInterface
> => {
  const data = await getLanguages();

  return {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: data.languages,
    seo: false,
    vueI18n: {
      fallbackLocale: 'en',
      messages: data.messages,
    },
    lazy: true,
  };
};

export default i18n;
