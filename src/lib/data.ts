export const practice = {
  name: "AVEA",
  fullName: "AVEA Gesundheitszentrum",
  claim: "Moderne Medizin. Menschlich gedacht.",
  phone: "+49 89 555 0142",
  phoneHref: "tel:+498955501420",
  emergencyPhone: "+49 89 555 0199",
  email: "kontakt@avea-gesundheit.de",
  address: {
    street: "Wilhelm-Böckh-Straße 18",
    zipCity: "80331 München",
    full: "Wilhelm-Böckh-Straße 18, 80331 München",
  },
  coordinates: { lat: 48.1351, lng: 11.582 },
  hours: [
    { day: "Montag – Donnerstag", time: "08:00 – 18:00 Uhr" },
    { day: "Freitag", time: "08:00 – 15:00 Uhr" },
    { day: "Samstag", time: "09:00 – 12:00 Uhr (Termin)" },
    { day: "Sonntag", time: "Geschlossen" },
  ],
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
};

export const stats = [
  { value: "17+", label: "Jahre Erfahrung" },
  { value: "14.200+", label: "Behandelte Patient:innen" },
  { value: "4,9 / 5", label: "Patientenzufriedenheit" },
  { value: "6", label: "Fachbereiche unter einem Dach" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "allgemeinmedizin",
    title: "Allgemeinmedizin",
    short: "Ganzheitliche hausärztliche Betreuung für die ganze Familie.",
    description:
      "Von der Akutsprechstunde bis zur langfristigen Begleitung chronischer Erkrankungen – unser hausärztliches Team ist Ihr erster Ansprechpartner für alle Gesundheitsfragen und koordiniert bei Bedarf die Behandlung mit unseren Fachbereichen.",
    icon: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "innere-medizin",
    title: "Innere Medizin",
    short: "Diagnostik und Therapie von Herz, Kreislauf und Stoffwechsel.",
    description:
      "Mit moderner Ultraschall- und EKG-Diagnostik erkennen wir Risiken frühzeitig und entwickeln individuelle Therapiekonzepte bei Bluthochdruck, Diabetes, Schilddrüsen- und Herz-Kreislauf-Erkrankungen.",
    icon: "HeartPulse",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "vorsorge",
    title: "Vorsorge & Check-ups",
    short: "Umfassende Gesundheits-Check-ups und Krebsfrüherkennung.",
    description:
      "Unsere strukturierten Check-up-Programme kombinieren Laboranalytik, Bildgebung und ein persönliches Beratungsgespräch – damit Risiken erkannt werden, bevor Beschwerden entstehen.",
    icon: "ShieldCheck",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kinderheilkunde",
    title: "Kinderheilkunde",
    short: "Einfühlsame Betreuung von Säuglingen bis zum Jugendalter.",
    description:
      "Von der U-Untersuchung über Impfberatung bis zur Behandlung akuter Infekte – wir schaffen eine ruhige, kindgerechte Atmosphäre für kleine und große Patient:innen.",
    icon: "Baby",
    image:
      "https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "orthopaedie",
    title: "Orthopädie & Sportmedizin",
    short: "Diagnostik und Therapie von Gelenken, Wirbelsäule und Sport.",
    description:
      "Bewegungsanalyse, Ultraschall und individuelle Therapiepläne helfen bei Rücken-, Gelenk- und Sportverletzungen – konservativ, gezielt und mit klarem Fokus auf schnelle Genesung.",
    icon: "Bone",
    image:
      "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "telemedizin",
    title: "Video-Sprechstunde",
    short: "Ärztliche Beratung bequem von zu Hause aus.",
    description:
      "Für Folgetermine, Befundbesprechungen und einfache Anliegen bieten wir sichere Video-Sprechstunden an – flexibel buchbar über unser Patientenportal.",
    icon: "Video",
    image:
      "https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  focus: string[];
  bio: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    slug: "julia-berndt",
    name: "Dr. med. Julia Berndt",
    role: "Ärztliche Leitung · Allgemeinmedizin",
    focus: ["Hausärztliche Versorgung", "Vorsorge", "Chronische Erkrankungen"],
    bio: "Dr. Berndt gründete AVEA mit dem Ziel, hausärztliche Kompetenz und spezialisierte Diagnostik unter einem Dach zu vereinen. Sie legt besonderen Wert auf ausführliche Gespräche und individuelle Betreuung.",
    image:
      "https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "kwame-owusu",
    name: "Dr. med. Kwame Owusu",
    role: "Facharzt für Innere Medizin",
    focus: ["Kardiologie", "Diabetologie", "Ultraschalldiagnostik"],
    bio: "Kwame Owusu ist spezialisiert auf internistische Diagnostik und begleitet Patient:innen mit Herz-Kreislauf- und Stoffwechselerkrankungen langfristig und lösungsorientiert.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mei-lin-tran",
    name: "Dr. med. Mei-Lin Tran",
    role: "Fachärztin für Kinderheilkunde",
    focus: ["Kindervorsorge", "Impfberatung", "Allergologie"],
    bio: "Mit viel Geduld und Erfahrung betreut Dr. Tran unsere jüngsten Patient:innen – von der ersten Vorsorgeuntersuchung bis zu Jugendlichen mit speziellen Anliegen.",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "elias-vogt",
    name: "Dr. med. Elias Vogt",
    role: "Facharzt für Orthopädie",
    focus: ["Sportmedizin", "Wirbelsäule", "Gelenkdiagnostik"],
    bio: "Als ehemaliger Mannschaftsarzt bringt Dr. Vogt umfassende Erfahrung in der Sport- und Bewegungsmedizin mit und entwickelt maßgeschneiderte Therapiekonzepte.",
    image:
      "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?auto=format&fit=crop&w=800&q=80",
  },
];

export const testimonials = [
  {
    name: "Sabine H.",
    text: "Endlich eine Praxis, in der man sich Zeit für einen nimmt. Die Terminbuchung online ist unkompliziert und die Wartezeiten sind wirklich kurz.",
    rating: 5,
  },
  {
    name: "Markus T.",
    text: "Sehr moderne Ausstattung und ein herzliches Team. Die Video-Sprechstunde hat mir bei meinem vollen Terminkalender sehr geholfen.",
    rating: 5,
  },
  {
    name: "Familie Reinke",
    text: "Unsere Kinder gehen tatsächlich gerne zum Arzt – Dr. Tran nimmt sich Zeit und erklärt alles kindgerecht. Können wir nur empfehlen.",
    rating: 5,
  },
  {
    name: "Peter K.",
    text: "Der jährliche Check-up bei AVEA gibt mir ein gutes Gefühl. Klare Befunde, verständliche Erklärungen, keine Hektik.",
    rating: 5,
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Moderner Empfangsbereich der Praxis",
  },
  {
    src: "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=1200&q=80",
    alt: "Heller Behandlungsraum mit moderner Ausstattung",
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    alt: "Stethoskop im Behandlungsraum",
  },
  {
    src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    alt: "Zufriedene Patientin nach der Behandlung",
  },
];

export const heroVideoSrc =
  "https://videos.pexels.com/video-files/5453380/5453380-hd_1920_1080_25fps.mp4";

export const faq = [
  {
    q: "Wie bekomme ich einen Termin?",
    a: "Sie können online über unser Patientenportal, telefonisch oder per E-Mail einen Termin vereinbaren. Akute Anliegen behandeln wir in unserer täglichen Akutsprechstunde ohne Voranmeldung.",
  },
  {
    q: "Nehmen Sie neue Patient:innen auf?",
    a: "Ja, unsere Praxis nimmt derzeit neue Patient:innen aller Kassen auf. Für Privatversicherte und Selbstzahler bieten wir zusätzliche Individuelle Gesundheitsleistungen (IGeL) an.",
  },
  {
    q: "Bieten Sie Video-Sprechstunden an?",
    a: "Für geeignete Anliegen wie Befundbesprechungen oder Folgeverordnungen bieten wir sichere Video-Sprechstunden über unser zertifiziertes Patientenportal an.",
  },
  {
    q: "Wie ist die Praxis mit öffentlichen Verkehrsmitteln erreichbar?",
    a: "Die Praxis liegt fußläufig fünf Minuten von der Haltestelle Sendlinger Tor entfernt. Ein Parkhaus befindet sich direkt gegenüber dem Gebäude.",
  },
];
