import { siteSettings } from './site-settings';
export {
  ABOUT_URL,
  BOOKING_URL,
  CONTACT_URL,
  PHYSIO_URL,
  PRELAUNCH_PREVIEW_ENABLED,
  SERVICES_URL,
  SITE_HOME_HREF,
  SITE_TREE_PREFIX,
  toSitePath,
  WAVES_URL,
  WOMEN_URL,
} from './routes';

export const BRAND_COLOR = siteSettings.theme.tokens.brandColor;
export const DEV_MODE = import.meta.env.DEV;
export const LOGO_HOME_HREF = siteSettings.navigation.logoHomeHref;
export const WAVE_CONTACT_TARGET = siteSettings.navigation.waveContactTarget;
export const WAVE_EMBED_SRC = siteSettings.navigation.waveEmbedSrc;
export const WAVE_EMBED_ANIMATED = siteSettings.navigation.waveEmbedAnimated;
export const WAVE_EMBED_STATIC = siteSettings.navigation.waveEmbedStatic;
