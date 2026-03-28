import rawSiteSettingsData from '../data/site-settings.json';
import { toSitePath } from './routes';

export interface NavItem {
  label: string;
  href: string;
}

export interface QuickNavItem extends NavItem {
  kind: 'link' | 'menu';
}

export interface MenuGroup {
  title: string;
  items: NavItem[];
}

export interface SiteSettings {
  brand: {
    name: string;
    tagline: string;
    logoAriaLabel: string;
    homeLinkAriaLabel: string;
  };
  seo: {
    defaultTitle: string;
    titleSuffix: string;
    description: string;
  };
  localization: {
    mode: 'single' | 'bilingual';
    defaultLocale: string;
    locales: string[];
  };
  theme: {
    preset: string;
    tokens: {
      brandColor: string;
    };
  };
  navigation: {
    logoHomeHref: string;
    bookingUrl: string;
    waveContactTarget: string;
    waveEmbedSrc: string;
    waveEmbedAnimated: string;
    waveEmbedStatic: string;
    bottomQuickNav: QuickNavItem[];
    menuGroups: MenuGroup[];
    servicesMenuLinks: NavItem[];
  };
  contact: {
    email: string;
    phoneDisplay: string;
    phoneLink: string;
    address?: string;
  };
  booking: {
    title: string;
    lead: string;
    statusLabel: string;
    ctaLabel: string;
  };
  footer: {
    legalText: string;
  };
}

const siteSettingsData = rawSiteSettingsData as SiteSettings;

export const siteSettings: SiteSettings = {
  ...siteSettingsData,
  navigation: {
    ...siteSettingsData.navigation,
    logoHomeHref: toSitePath(siteSettingsData.navigation.logoHomeHref),
    bookingUrl: toSitePath(siteSettingsData.navigation.bookingUrl),
    waveContactTarget: toSitePath(siteSettingsData.navigation.waveContactTarget),
    bottomQuickNav: siteSettingsData.navigation.bottomQuickNav.map((item) => ({
      ...item,
      href: toSitePath(item.href),
    })),
    menuGroups: siteSettingsData.navigation.menuGroups.map((group) => ({
      ...group,
      items: group.items.map((item) => ({
        ...item,
        href: toSitePath(item.href),
      })),
    })),
    servicesMenuLinks: siteSettingsData.navigation.servicesMenuLinks.map((item) => ({
      ...item,
      href: toSitePath(item.href),
    })),
  },
};
