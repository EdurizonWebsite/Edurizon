export const SITE_URL = 'https://www.edurizon.in';

export const toCanonicalUrl = (path = '/') => {
  const normalizedPath = path.split('#')[0]?.split('?')[0] || '/';
  return `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
};

export const normalizeToWww = (url: string) =>
  url.replace(/^https?:\/\/edurizon\.in/i, SITE_URL);
