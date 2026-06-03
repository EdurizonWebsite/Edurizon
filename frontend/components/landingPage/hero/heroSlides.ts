export interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  bullets: string[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'mbbs-abroad',
    image: '/assets/Images/landingPage/hero-banner-1.jpeg',
    badge: 'Best in 2026',
    title: 'Study MBBS Abroad',
    titleHighlight: 'and in India',
    subtitle:
      'Planning for MBBS abroad? Get the right guidance with India’s trusted medical admission consultants.',
    bullets: [
      'Government Approved Medical Universities',
      'No Hidden Charges — Transparent Process',
      'Low Budget & Low NEET Score Options',
      "India's Most Trusted Govt. Registered Consultant",
    ],
  },
  {
    id: 'why-edurizon',
    image: '/assets/Images/landingPage/hero-banner-2.png',
    badge: 'Trusted Since 2006',
    title: 'Why Choose',
    titleHighlight: 'Edurizon?',
    subtitle:
      '19+ years of experience counselling students for top medical universities worldwide.',
    bullets: [
      '15,000+ Students Counselled Successfully',
      '6,000+ Doctors Placed Worldwide',
      'Govt. & Private Universities — End-to-End Support',
      'Admission in Top World Universities',
    ],
  },
];

export const AUTOPLAY_MS = 5000;
