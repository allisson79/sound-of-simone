import homeModulesData from '../data/page-modules/home.json';
import homeCopyData from '../data/editor/home-copy.json';
import servicesCopyData from '../data/editor/services-copy.json';
import bookingCopyData from '../data/editor/booking-copy.json';
import contactCopyData from '../data/editor/contact-copy.json';
import { toSitePath } from './routes';
import { siteSettings } from './site-settings';

export type ModuleVariant = 'compact' | 'standard' | 'expanded';

interface BaseModule {
  id: string;
  enabled: boolean;
  variant: ModuleVariant;
  order: number;
}

export interface HomepageNavItem {
  label: string;
  href: string;
}

export interface HomepageQuickNavItem extends HomepageNavItem {
  kind: 'link' | 'menu';
}

export interface HomepageMenuGroup {
  title: string;
  items: HomepageNavItem[];
}

export interface HomepageServiceWomenBlock {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  ctaPending: boolean;
}

export interface HomepageProofItem {
  id: string;
  label: string;
  value: string;
  verified: boolean;
  sourceNote: string;
}

export interface HeroModule extends BaseModule {
  type: 'hero';
  kicker?: string;
  title: string;
  lead: string;
  image: {
    src: string;
    webpSrc: string;
    alt: string;
  };
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface ProofStripModule extends BaseModule {
  type: 'proof_strip';
  items: HomepageProofItem[];
}

export interface ServiceCard {
  id: string;
  title: string;
  lead: string;
  moreTopics?: string[];
  blocks?: HomepageServiceWomenBlock[];
  launchLabel?: string;
}

export interface ServiceCardsModule extends BaseModule {
  type: 'service_cards';
  cards: ServiceCard[];
}

export interface RichTextModule extends BaseModule {
  type: 'rich_text';
  title: string;
  name: string;
  ingress: string;
  primaryCtaLabel: string;
  roles: string[];
  journey: string[];
  education: string[];
  courses: string[];
}

export interface GalleryModule extends BaseModule {
  type: 'gallery';
  items: {
    src: string;
    alt: string;
    caption: string;
    kind: 'photo' | 'book';
  }[];
}

export interface CtaBandModule extends BaseModule {
  type: 'cta_band';
  title: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface ContactBlockModule extends BaseModule {
  type: 'contact_block';
  title: string;
  lead: string;
  email: string;
  phoneDisplay: string;
  phoneLink: string;
  address?: string;
}

export interface SocialFeedModule extends BaseModule {
  type: 'social_feed';
  provider: 'taggbox';
  widgetId: string;
  profileSources?: Array<string | { source: string }>;
  refreshCadence?: string;
  title?: string;
  lead?: string;
}

export type HomepageModule =
  | HeroModule
  | ProofStripModule
  | ServiceCardsModule
  | RichTextModule
  | GalleryModule
  | CtaBandModule
  | ContactBlockModule
  | SocialFeedModule;

interface HomeModulesData {
  modules: HomepageModule[];
}

interface HomeCopyData {
  hero: {
    kicker?: string;
    title: string;
    lead: string;
    primaryCtaLabel: string;
  };
  proofItems: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  aboutSimone: {
    title: string;
    name: string;
    ingress: string;
    roles: string[];
    journey: string[];
    education: string[];
    courses: string[];
  };
  ctaBand: {
    title: string;
    primaryLabel: string;
  };
}

interface ServicesCopyData {
  overview: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryActionLabel: string;
  };
  physio: {
    title: string;
    lead: string;
    moreTopics: string[];
    detailLead: string;
    detailTitle: string;
    supportEyebrow: string;
    supportBody: string;
    primaryActionLabel: string;
  };
  women: {
    title: string;
    lead: string;
    blocks: Array<{
      title: string;
      body: string;
      ctaLabel: string;
    }>;
    detailLead: string;
    detailTitle: string;
    supportEyebrow: string;
    supportBody: string;
    primaryActionLabel: string;
  };
  waves: {
    title: string;
    lead: string;
    launchLabel: string;
    detailLead: string;
    detailTitle: string;
    supportEyebrow: string;
    supportBody: string;
    primaryActionLabel: string;
  };
}

interface BookingCopyData {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryActionLabel: string;
  };
  content: {
    sectionTitle: string;
    lead: string;
    statusLabel: string;
    nextStepEyebrow: string;
    nextStepBody: string;
  };
}

interface ContactCopyData {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryActionLabel: string;
  };
  content: {
    directTitle: string;
    supportEyebrow: string;
    supportBody: string;
  };
}

export interface HomepageContent {
  bottomQuickNav: HomepageQuickNavItem[];
  menuGroups: HomepageMenuGroup[];
  hero: {
    kicker?: string;
    title: string;
    lead: string;
    image: {
      src: string;
      webpSrc: string;
      alt: string;
    };
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  proofItems: HomepageProofItem[];
  booking: {
    title: string;
    lead: string;
    statusLabel: string;
    ctaLabel: string;
  };
  contact: {
    title: string;
    lead: string;
    email: string;
    phoneDisplay: string;
    phoneLink: string;
    address?: string;
  };
  aboutSimone: {
    title: string;
    name: string;
    ingress: string;
    roles: string[];
    primaryCtaLabel: string;
    contact: {
      email: string;
      phoneDisplay: string;
      phoneLink: string;
    };
    journey: string[];
    education: string[];
    courses: string[];
    gallery: {
      src: string;
      alt: string;
      caption: string;
      kind: 'photo' | 'book';
    }[];
  };
  services: {
    physio: {
      title: string;
      lead: string;
      moreTopics: string[];
    };
    women: {
      title: string;
      lead: string;
      blocks: HomepageServiceWomenBlock[];
    };
    waves: {
      title: string;
      lead: string;
      launchLabel: string;
    };
  };
  servicesOverview: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryActionLabel: string;
  };
  servicePages: {
    physio: {
      detailLead: string;
      detailTitle: string;
      supportEyebrow: string;
      supportBody: string;
      primaryActionLabel: string;
    };
    women: {
      detailLead: string;
      detailTitle: string;
      supportEyebrow: string;
      supportBody: string;
      primaryActionLabel: string;
    };
    waves: {
      detailLead: string;
      detailTitle: string;
      supportEyebrow: string;
      supportBody: string;
      primaryActionLabel: string;
    };
  };
  bookingPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroPrimaryActionLabel: string;
    sectionTitle: string;
    lead: string;
    statusLabel: string;
    nextStepEyebrow: string;
    nextStepBody: string;
  };
  contactPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroPrimaryActionLabel: string;
    directTitle: string;
    supportEyebrow: string;
    supportBody: string;
  };
  ctaBand: {
    title: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  socialFeed: {
    enabled: boolean;
    provider: 'taggbox';
    widgetId: string;
    profileSources: string[];
    refreshCadence: string;
    title: string;
    lead: string;
  };
}

const moduleSource = ((homeModulesData as HomeModulesData).modules ?? [])
  .filter((module) => module.enabled)
  .sort((left, right) => left.order - right.order);

function getModule<TType extends HomepageModule['type']>(type: TType): Extract<HomepageModule, { type: TType }> | undefined {
  return moduleSource.find((module) => module.type === type) as Extract<HomepageModule, { type: TType }> | undefined;
}

function getServiceCard(cards: ServiceCard[], cardId: string): ServiceCard | undefined {
  return cards.find((card) => card.id === cardId);
}

const heroModule = getModule('hero');
const proofModule = getModule('proof_strip');
const serviceModule = getModule('service_cards');
const richTextModule = getModule('rich_text');
const galleryModule = getModule('gallery');
const ctaBandModule = getModule('cta_band');
const contactModule = getModule('contact_block');
const socialFeedModule = getModule('social_feed');

const serviceCards = serviceModule?.cards ?? [];
const physio = getServiceCard(serviceCards, 'physio') ?? serviceCards[0];
const women = getServiceCard(serviceCards, 'women') ?? serviceCards[1];
const waves = getServiceCard(serviceCards, 'waves') ?? serviceCards[2];
const homeCopy = homeCopyData as HomeCopyData;
const servicesCopy = servicesCopyData as ServicesCopyData;
const bookingCopy = bookingCopyData as BookingCopyData;
const contactCopy = contactCopyData as ContactCopyData;
const resolvedContactEmail = contactModule?.email ?? siteSettings.contact.email;
const resolvedContactPhoneDisplay = contactModule?.phoneDisplay ?? siteSettings.contact.phoneDisplay;
const resolvedContactPhoneLink = contactModule?.phoneLink ?? siteSettings.contact.phoneLink;
const resolvedContactAddress = contactModule?.address || siteSettings.contact.address;
const isTaggboxWidgetIdValid =
  typeof socialFeedModule?.widgetId === 'string' &&
  /^[A-Za-z0-9_-]{5,120}$/.test(socialFeedModule.widgetId);

export const homepageModules: HomepageModule[] = moduleSource;

export const homepageContent: HomepageContent = {
  bottomQuickNav: siteSettings.navigation.bottomQuickNav,
  menuGroups: siteSettings.navigation.menuGroups,
  hero: {
    kicker: homeCopy.hero.kicker ?? heroModule?.kicker,
    title: homeCopy.hero.title || heroModule?.title || siteSettings.brand.name,
    lead: homeCopy.hero.lead || heroModule?.lead || siteSettings.seo.description,
    image: {
      src: heroModule?.image.src ?? '/images/simone-hero-portrait.jpg',
      webpSrc: heroModule?.image.webpSrc ?? '/images/simone-hero-portrait.webp',
      alt: heroModule?.image.alt ?? siteSettings.brand.name,
    },
    primaryCtaLabel: homeCopy.hero.primaryCtaLabel || heroModule?.primaryCtaLabel || siteSettings.booking.ctaLabel,
    secondaryCtaLabel: heroModule?.secondaryCtaLabel ?? 'Kontakt',
  },
  proofItems: (proofModule?.items ?? []).map((item, index) => {
    const copyItem = homeCopy.proofItems[index];
    return {
      ...item,
      label: copyItem?.label || item.label,
      value: copyItem?.value || item.value,
    };
  }),
  booking: siteSettings.booking,
  contact: {
    title: contactModule?.title ?? `Kontakt ${siteSettings.brand.name}`,
    lead: contactModule?.lead ?? 'Ta kontakt for foresporsel, vurdering eller booking.',
    email: resolvedContactEmail,
    phoneDisplay: resolvedContactPhoneDisplay,
    phoneLink: resolvedContactPhoneLink,
    address: resolvedContactAddress,
  },
  aboutSimone: {
    title: homeCopy.aboutSimone.title || richTextModule?.title || 'Om oss',
    name: homeCopy.aboutSimone.name || richTextModule?.name || siteSettings.brand.name,
    ingress: homeCopy.aboutSimone.ingress || richTextModule?.ingress || siteSettings.seo.description,
    roles: homeCopy.aboutSimone.roles?.length ? homeCopy.aboutSimone.roles : richTextModule?.roles ?? [],
    primaryCtaLabel: richTextModule?.primaryCtaLabel ?? siteSettings.booking.ctaLabel,
    contact: {
      email: resolvedContactEmail,
      phoneDisplay: resolvedContactPhoneDisplay,
      phoneLink: resolvedContactPhoneLink,
    },
    journey: homeCopy.aboutSimone.journey?.length ? homeCopy.aboutSimone.journey : richTextModule?.journey ?? [],
    education: homeCopy.aboutSimone.education?.length ? homeCopy.aboutSimone.education : richTextModule?.education ?? [],
    courses: homeCopy.aboutSimone.courses?.length ? homeCopy.aboutSimone.courses : richTextModule?.courses ?? [],
    gallery: galleryModule?.items ?? [],
  },
  services: {
    physio: {
      title: servicesCopy.physio.title || physio?.title || 'Service 1',
      lead: servicesCopy.physio.lead || physio?.lead || '',
      moreTopics: servicesCopy.physio.moreTopics?.length ? servicesCopy.physio.moreTopics : physio?.moreTopics ?? [],
    },
    women: {
      title: servicesCopy.women.title || women?.title || 'Service 2',
      lead: servicesCopy.women.lead || women?.lead || '',
      blocks: (women?.blocks ?? []).map((block, index) => ({
        ...block,
        title: servicesCopy.women.blocks?.[index]?.title || block.title,
        body: servicesCopy.women.blocks?.[index]?.body || block.body,
        ctaLabel: servicesCopy.women.blocks?.[index]?.ctaLabel || block.ctaLabel,
        ctaHref: toSitePath(block.ctaHref),
      })),
    },
    waves: {
      title: servicesCopy.waves.title || waves?.title || 'Service 3',
      lead: servicesCopy.waves.lead || waves?.lead || '',
      launchLabel: servicesCopy.waves.launchLabel || waves?.launchLabel || '',
    },
  },
  servicesOverview: {
    eyebrow: servicesCopy.overview.eyebrow || 'Tjenester',
    title: servicesCopy.overview.title || 'Tjenester',
    lead: servicesCopy.overview.lead || '',
    primaryActionLabel: servicesCopy.overview.primaryActionLabel || siteSettings.booking.ctaLabel,
  },
  servicePages: {
    physio: {
      detailLead: servicesCopy.physio.detailLead || '',
      detailTitle: servicesCopy.physio.detailTitle || 'Hva jeg hjelper deg med',
      supportEyebrow: servicesCopy.physio.supportEyebrow || 'Neste steg',
      supportBody: servicesCopy.physio.supportBody || '',
      primaryActionLabel: servicesCopy.physio.primaryActionLabel || siteSettings.booking.ctaLabel,
    },
    women: {
      detailLead: servicesCopy.women.detailLead || '',
      detailTitle: servicesCopy.women.detailTitle || 'Hvordan jeg kan bidra',
      supportEyebrow: servicesCopy.women.supportEyebrow || 'Kontakt',
      supportBody: servicesCopy.women.supportBody || '',
      primaryActionLabel: servicesCopy.women.primaryActionLabel || 'Ta kontakt',
    },
    waves: {
      detailLead: servicesCopy.waves.detailLead || '',
      detailTitle: servicesCopy.waves.detailTitle || 'Et nytt spor i utvikling',
      supportEyebrow: servicesCopy.waves.supportEyebrow || 'Folg med',
      supportBody: servicesCopy.waves.supportBody || '',
      primaryActionLabel: servicesCopy.waves.primaryActionLabel || 'Ta kontakt',
    },
  },
  bookingPage: {
    heroEyebrow: bookingCopy.hero.eyebrow || 'Bestill time',
    heroTitle: bookingCopy.hero.title || siteSettings.booking.title,
    heroLead: bookingCopy.hero.lead || siteSettings.booking.lead,
    heroPrimaryActionLabel: bookingCopy.hero.primaryActionLabel || siteSettings.booking.ctaLabel,
    sectionTitle: bookingCopy.content.sectionTitle || 'Slik fungerer booking akkurat na',
    lead: bookingCopy.content.lead || siteSettings.booking.lead,
    statusLabel: bookingCopy.content.statusLabel || siteSettings.booking.statusLabel,
    nextStepEyebrow: bookingCopy.content.nextStepEyebrow || 'Neste steg',
    nextStepBody: bookingCopy.content.nextStepBody || '',
  },
  contactPage: {
    heroEyebrow: contactCopy.hero.eyebrow || 'Kontakt',
    heroTitle: contactCopy.hero.title || `Kontakt ${siteSettings.brand.name}`,
    heroLead: contactCopy.hero.lead || 'Ta kontakt for foresporsel, vurdering eller booking.',
    heroPrimaryActionLabel: contactCopy.hero.primaryActionLabel || 'Send e-post',
    directTitle: contactCopy.content.directTitle || 'Direkte kontakt',
    supportEyebrow: contactCopy.content.supportEyebrow || 'Henvendelser',
    supportBody: contactCopy.content.supportBody || '',
  },
  ctaBand: {
    title: homeCopy.ctaBand.title || ctaBandModule?.title || 'Klar for neste steg?',
    primaryLabel: homeCopy.ctaBand.primaryLabel || ctaBandModule?.primaryLabel || siteSettings.booking.ctaLabel,
    secondaryLabel: ctaBandModule?.secondaryLabel ?? 'Kontakt',
  },
  socialFeed: {
    enabled:
      socialFeedModule?.provider === 'taggbox' &&
      isTaggboxWidgetIdValid &&
      socialFeedModule.enabled === true,
    provider: 'taggbox',
    widgetId: isTaggboxWidgetIdValid ? socialFeedModule.widgetId : '',
    profileSources: Array.isArray(socialFeedModule?.profileSources)
      ? socialFeedModule.profileSources
          .map((source) => {
            if (typeof source === 'string') return source;
            if (source && typeof source === 'object' && 'source' in source && typeof source.source === 'string') {
              return source.source;
            }
            return '';
          })
          .filter((source) => source.trim().length > 0)
      : [],
    refreshCadence:
      typeof socialFeedModule?.refreshCadence === 'string' && socialFeedModule.refreshCadence.trim().length > 0
        ? socialFeedModule.refreshCadence
        : 'daily',
    title:
      typeof socialFeedModule?.title === 'string' && socialFeedModule.title.trim().length > 0
        ? socialFeedModule.title
        : 'Folg oss i sosiale medier',
    lead:
      typeof socialFeedModule?.lead === 'string' && socialFeedModule.lead.trim().length > 0
        ? socialFeedModule.lead
        : 'Oppdatert feed fra sosiale plattformer.',
  },
};
