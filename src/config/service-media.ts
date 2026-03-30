export type ServiceMediaKey = 'physio' | 'women' | 'waves';

export interface ServiceMediaItem {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export const serviceMedia: Record<ServiceMediaKey, ServiceMediaItem> = {
  physio: {
    src: '/images/simone-service-core-floor.jpg',
    alt: 'Simone trener pa matte med liten ball i studio',
    caption: 'Behandling og bevegelse i tett samspill.',
  },
  women: {
    src: '/images/simone-about-portrait-book.jpg',
    alt: 'Simone star med bok i et lyst rom',
    caption: 'Et tydelig portrett av Simone som fagperson, formidler og forfatter.',
    objectPosition: 'center 14%',
  },
  waves: {
    src: '/images/simone-service-studio-standing.jpg',
    alt: 'Simone star i studio med treningsutstyr',
    caption: 'Et stillere portrett som peker videre mot Sound of Waves.',
    objectPosition: 'center 18%',
  },
};

export const serviceMeta = {
  physio: {
    eyebrow: 'Fysioterapi',
    subline: 'Fysioterapi for kvinnehelse',
    linkLabel: 'Les mer',
  },
  women: {
    eyebrow: 'Foredrag og fagformidling',
    subline: 'Foredrag og samarbeid',
    linkLabel: 'Les mer',
  },
  waves: {
    eyebrow: 'Under utvikling',
    subline: 'Et nytt tilbud i bevegelse',
    linkLabel: 'Se teaser',
  },
} as const;

export const bookingMedia = {
  src: '/images/simone-service-ballet-prep.jpg',
  alt: 'Simone gjor seg klar til trening i studio',
};
