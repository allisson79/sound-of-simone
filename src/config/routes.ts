const PREVIEW_PREFIX = '/preview';
const RESERVED_PUBLIC_PREFIXES = ['/admin'];
const ABOUT_SECTION_ID = 'om-simone';

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function splitHref(href: string): { pathname: string; suffix: string } {
  const match = href.match(/^([^?#]*)(.*)$/);
  return {
    pathname: match?.[1] ?? href,
    suffix: match?.[2] ?? '',
  };
}

function isExternalHref(href: string): boolean {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
}

function isReservedPublicPath(pathname: string): boolean {
  return RESERVED_PUBLIC_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export const PRELAUNCH_PREVIEW_ENABLED = true;
export const SITE_TREE_PREFIX = PREVIEW_PREFIX;

export function toSitePath(href: string): string {
  if (!PRELAUNCH_PREVIEW_ENABLED) return href;
  if (!href || href.startsWith('#') || isExternalHref(href)) return href;

  const { pathname, suffix } = splitHref(href);
  if (!pathname.startsWith('/')) return href;

  const normalizedPath = normalizePathname(pathname);
  if (isReservedPublicPath(normalizedPath)) {
    return `${normalizedPath}${suffix}`;
  }

  if (normalizedPath === PREVIEW_PREFIX || normalizedPath.startsWith(`${PREVIEW_PREFIX}/`)) {
    return `${normalizedPath}${suffix}`;
  }

  const previewPath = normalizedPath === '/' ? PREVIEW_PREFIX : `${PREVIEW_PREFIX}${normalizedPath}`;
  return `${previewPath}${suffix}`;
}

export function isPreviewPath(pathname: string): boolean {
  const normalizedPath = normalizePathname(pathname);
  return normalizedPath === PREVIEW_PREFIX || normalizedPath.startsWith(`${PREVIEW_PREFIX}/`);
}

export const SITE_HOME_HREF = toSitePath('/');
export const ABOUT_URL = `${SITE_HOME_HREF}#${ABOUT_SECTION_ID}`;
export const SERVICES_URL = toSitePath('/tjenester');
export const CONTACT_URL = toSitePath('/kontakt');
export const BOOKING_URL = toSitePath('/booking');
export const PHYSIO_URL = toSitePath('/tjenester/sound-of-physio');
export const WOMEN_URL = toSitePath('/tjenester/sound-of-women');
export const WAVES_URL = toSitePath('/tjenester/sound-of-waves');
