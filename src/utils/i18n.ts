export const SUPPORTED_LANGS = ['en', 'ru', 'cn', 'jp'] as const;

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

type RouteKind =
  | { type: 'home' }
  | { type: 'devlog-list' }
  | { type: 'devlog-post'; slug: string }
  | { type: 'other' };

const isSupportedLang = (value: string): value is SupportedLang =>
  SUPPORTED_LANGS.includes(value as SupportedLang);

export const getLocaleFromPathname = (pathname: string): SupportedLang => {
  const first = pathname.split('/').filter(Boolean)[0];
  return first && isSupportedLang(first) ? first : 'en';
};

const parseRoute = (pathname: string): RouteKind => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) {
    return { type: 'home' };
  }

  const [lang, section, slug] = parts;
  if (!isSupportedLang(lang)) {
    return { type: 'other' };
  }

  if (!section) {
    return { type: 'home' };
  }

  if (section === 'devlog' && !slug) {
    return { type: 'devlog-list' };
  }

  if (section === 'devlog' && slug) {
    return { type: 'devlog-post', slug };
  }

  return { type: 'other' };
};

const localPath = (lang: SupportedLang, route: RouteKind): string => {
  if (route.type === 'home') {
    return `/${lang}/`;
  }

  if (route.type === 'devlog-list') {
    return `/${lang}/devlog/`;
  }

  if (route.type === 'devlog-post') {
    return `/${lang}/devlog/${route.slug}/`;
  }

  return `/${lang}/`;
};

export const getLanguageLinks = (pathname: string): Record<SupportedLang, string> => {
  const route = parseRoute(pathname);
  return {
    en: localPath('en', route),
    ru: localPath('ru', route),
    cn: localPath('cn', route),
    jp: localPath('jp', route),
  };
};

export const toBcp47 = (lang: SupportedLang): string => {
  if (lang === 'cn') {
    return 'zh-CN';
  }

  if (lang === 'jp') {
    return 'ja-JP';
  }

  if (lang === 'ru') {
    return 'ru-RU';
  }

  return 'en-US';
};
