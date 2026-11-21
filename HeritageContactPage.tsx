import { useEffect, useState } from 'react';
import {
  BRAND_IMAGES,
  CategoryFilter,
  getWhatsAppUrl,
  PageRoute,
} from '../data/batikCatalog';
import { BatikImage } from '../components/BatikImage';

interface HeritageContactPageProps {
  sectionFocus: PageRoute;
  onNavigate: (page: PageRoute, category?: CategoryFilter) => void;
}

const SACRED_PILLARS = [
  {
    num: '01',
    icon: 'draw',
    colorClass: 'text-primary/40 group-hover:text-primary',
    accentClass: 'text-primary',
    title: 'Molten Wax Canting',
    desc: 'Liquid beeswax and damar resin are freehand poured across silk or mull cotton to seal sacred motifs from dye penetration.',
    metaLabel: 'Motifs Applied',
    metaValue: 'Mandala, Gajasinha & Lotus',
  },
  {
    num: '02',
    icon: 'science',
    colorClass: 'text-secondary/40 group-hover:text-secondary',
    accentClass: 'text-secondary',
    title: 'Immersion Dyeing',
    desc: 'The cloth plunges into cool botanical or fiber-reactive pigment baths. Each hue requires its own dedicated submersion cycle.',
    metaLabel: 'Color Depth',
    metaValue: 'Deep Maroon, Indigo & Ochre',
  },
  {
    num: '03',
    icon: 'broken_image',
    colorClass: 'text-primary-fixed/40 group-hover:text-primary-fixed',
    accentClass: 'text-primary-fixed',
    title: 'Vein Crackling',
    desc: 'Artisans gently flex the chilled wax membrane, allowing fine dark dye capillary lines to seep into microscopic fissures.',
    metaLabel: 'Signature Hallmark',
    metaValue: 'Unrepeatable Organic Lines',
  },
  {
    num: '04',
    icon: 'fireplace',
    colorClass: 'text-primary/40 group-hover:text-primary',
    accentClass: 'text-primary',
    title: 'Boil-Out & Setting',
    desc: 'Submerged in boiling rainwater, the melted wax floats away, unveiling radiant contrast before coastal sunlight locks the finish.',
    metaLabel: 'Final Touch',
    metaValue: 'Pure Rainwater Wash',
  },
];

const COUTURE_DIALOGUES: {
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  meta: string;
  image: string;
  category: Exclude<CategoryFilter, 'all'>;
}[] = [
  {
    badge: 'Ceremonial Osariya',
    badgeColor: 'text-primary',
    title: 'The Nivahana Silk Saree',
    desc: 'Pure georgette base with crimson botanical wax-resist motifs and hand-knotted fringe.',
    meta: 'Made to Measure',
    image: BRAND_IMAGES.coutureOsariya,
    category: 'sarees',
  },
  {
    badge: 'Contemporary Resort',
    badgeColor: 'text-secondary',
    title: 'The Ceylon Royal Sarong',
    desc: 'Loomed fine cotton treated with wax crackle veining for effortless tropical evening wear.',
    meta: 'Unisex Silhouette',
    image: BRAND_IMAGES.atelierGajasinha,
    category: 'sarongs',
  },
  {
    badge: 'Artisan Signature',
    badgeColor: 'text-primary-fixed',
    title: 'The Ruhunu Floral Drape',
    desc: 'Handcrafted in our Southern workshop using dual-stage green and saffron vegetable dyes.',
    meta: 'Single-Edition Archive',
    image: BRAND_IMAGES.coutureFloral,
    category: 'sarees',
  },
];

const FAQS = [
  {
    icon: 'flight_takeoff',
    iconColor: 'text-primary',
    q: 'Do you ship internationally?',
    a: 'Yes. We partner with DHL Express Worldwide for fully insured global delivery. Shipments to the UK, USA, Australia, UAE, and Singapore typically arrive within 4 to 7 business days from Atelier dispatch.',
  },
  {
    icon: 'dry_cleaning',
    iconColor: 'text-secondary',
    q: 'How do I care for 100% hand-waxed batik?',
    a: 'Dry cleaning is recommended for silk-base creations. For our pure cotton sarongs and frocks, gentle hand washing in cool water with mild silk-safe detergent preserves the natural vegetable and mineral dye intensity. Always dry in shade.',
  },
  {
    icon: 'straighten',
    iconColor: 'text-primary-fixed',
    q: 'Can I customize my measurements & drape?',
    a: 'Absolutely. Every bespoke order includes an interactive measurement guide sent over WhatsApp. Our master cutter tailors the blouse, fall, and pleat structures specifically to your posture and height.',
  },
  {
    icon: 'timer',
    iconColor: 'text-primary',
    q: 'What is the bespoke creation timeline?',
    a: 'Because our motifs are drawn freehand with molten wax and sun-cured, a customized saree or couture dress requires 10 to 18 artisan crafting days. Ready-to-wear archive pieces ship within 48 hours.',
  },
];

export function HeritageContactPage({ sectionFocus, onNavigate }: HeritageContactPageProps) {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [garmentType, setGarmentType] = useState('Batik Saree (Osariya / Traditional)');
  const [colorPalette, setColorPalette] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (sectionFocus === 'contact') {
      const el = document.getElementById('contact-atelier');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionFocus === 'bespoke-process') {
      const el = document.getElementById('bespoke-pillars');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [sectionFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const palette = colorPalette.trim() || 'Traditional Heritage Palette';
    const notes = clientMessage.trim() || 'None specified';
    const msg =
      `*New Atelier Inquiry - CHAMATHKARA Bathik*\n` +
      `• Name: ${clientName}\n` +
      `• Phone: ${clientPhone}\n` +
      `• Garment: ${garmentType}\n` +
      `• Palette: ${palette}\n` +
      `• Notes: ${notes}`;

    const url = getWhatsAppUrl(msg);
    setSubmittedUrl(url);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ==================== TOP EDITORIAL HEADER & MANDALA EMBLEM ==================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-14 lg:py-20">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Brand Legacy */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm text-primary">auto_awesome</span>
                <span>Atelier Archive &amp; Contact Concierge</span>
              </div>
              <h1 className="font-display-lg text-primary tracking-tight">
                Our Heritage &amp; Craft
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Preserving the sacred art of Sri Lankan wax-resist batik across generations. Every
                motif carries centuries of island lore, drawn by hand and imbued with the quiet
                luxury of slow couture.
              </p>

              {/* Micro Metas */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                <div className="p-3.5 bg-surface-container border border-outline-variant/25 rounded flex flex-col">
                  <span className="font-headline-sm text-primary">100%</span>
                  <span className="font-label-sm text-on-surface-variant uppercase mt-0.5">
                    Hand Waxed
                  </span>
                </div>
                <div className="p-3.5 bg-surface-container border border-outline-variant/25 rounded flex flex-col">
                  <span className="font-headline-sm text-secondary">30+</span>
                  <span className="font-label-sm text-on-surface-variant uppercase mt-0.5">
                    Artisan Guilds
                  </span>
                </div>
                <div className="p-3.5 bg-surface-container border border-outline-variant/25 rounded flex flex-col">
                  <span className="font-headline-sm text-primary-fixed">DHL</span>
                  <span className="font-label-sm text-on-surface-variant uppercase mt-0.5">
                    Worldwide Insured
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Mandala Graphic & Emblem */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-full p-4 bg-gradient-to-tr from-surface-container-high via-surface-container to-surface-variant/40 flex items-center justify-center shadow-xl">
                <svg
                  className="absolute inset-0 w-full h-full text-primary/20 animate-[spin_120s_linear_infinite]"
                  fill="none"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    stroke="currentColor"
                    strokeDasharray="6 6"
                    strokeWidth="1.5"
                  />
                  <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
                  <circle cx="200" cy="200" r="95" stroke="currentColor" strokeWidth="2" />
                  <g stroke="currentColor" strokeWidth="1.2">
                    <path d="M200 20 C215 90, 240 110, 200 150 C160 110, 185 90, 200 20 Z" />
                    <path d="M200 380 C215 310, 240 290, 200 250 C160 290, 185 310, 200 380 Z" />
                    <path d="M20 200 C90 215, 110 240, 150 200 C110 160, 90 185, 20 200 Z" />
                    <path d="M380 200 C310 215, 290 240, 250 200 C290 160, 310 185, 380 200 Z" />
                    <path d="M72 72 C135 110, 145 135, 165 165 C135 145, 110 135, 72 72 Z" />
                    <path d="M328 328 C265 290, 255 265, 235 235 C265 255, 290 265, 328 328 Z" />
                    <path d="M328 72 C290 135, 265 145, 235 165 C255 135, 265 110, 328 72 Z" />
                    <path d="M72 328 C110 265, 135 255, 165 235 C145 265, 135 290, 72 328 Z" />
                  </g>
                  <circle cx="200" cy="200" fill="currentColor" fillOpacity="0.08" r="50" />
                </svg>

                <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-2 border-primary/35">
                  <BatikImage
                    src={BRAND_IMAGES.heritageEmblem}
                    alt="CHAMATHKARA Batik Heritage Seal"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    fallbackTitle="Chamathkara Heritage Seal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LIVING PHILOSOPHY OF SRI LANKAN WAX-RESIST ==================== */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Editorial Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden bg-surface-container shadow-2xl border border-outline-variant/30 h-[440px]">
                <BatikImage
                  src={BRAND_IMAGES.heritageCraftsperson}
                  alt="Master Sri Lankan batik artist hand-drawing royal botanical motifs using a brass canting tool"
                  className="w-full h-full object-cover"
                  fallbackTitle="Master Craftsperson • Kandy Guild"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 sm:right-28 p-4 rounded bg-surface-container-high/92 backdrop-blur border border-primary/25">
                  <p className="font-label-sm text-primary uppercase tracking-widest">
                    Master Craftsperson • Kandy Guild
                  </p>
                  <p className="font-body-sm text-on-surface mt-1">
                    Drawing royal Hansa and sacred lotus motifs onto fine mull cotton with custom
                    beeswax balances.
                  </p>
                </div>
              </div>

              {/* Floating Seal */}
              <div className="hidden md:flex flex-col items-center justify-center absolute -bottom-5 -right-4 bg-secondary-container text-on-secondary-container p-4 rounded-lg shadow-xl w-36 text-center border border-primary/25">
                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                <span className="font-label-sm uppercase font-bold tracking-wider mt-1">
                  100% Genuine Wax Crackle
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 lg:pl-4">
              <div className="flex items-center gap-2 text-primary font-label-md uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">spa</span>
                <span>The Sri Lankan Distinction</span>
              </div>
              <h2 className="font-headline-lg text-on-surface">
                Not Printed. <span className="text-primary italic">Lovingly Born</span> of Fire,
                Wax &amp; Sun.
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                In an era of fleeting fast fashion, CHAMATHKARA Bathik honors the ancient island
                ethos where a single saree or frock requires days of patient, meditative devotion.
                Unlike commercial screen prints that coat only the surface, our artisans hand-apply
                molten beeswax and pine resin using fine-tipped brass canting pens.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                The cloth is repeatedly steeped in fiber-reactive dye vats, boiled in natural
                rainwater kettles to release the wax, and spread under the tropical sun to dry in
                the gentle coastal trade breezes. The exquisite fine fractures—known as batik
                veining or crackle—ensure that no two pieces can ever be identical. Each fold is a
                signature of island soul.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-surface-container border border-outline-variant/25 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0">
                    water_drop
                  </span>
                  <div>
                    <span className="font-label-lg text-on-surface block">
                      Immersion Saturation
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      Color strikes clean through to the reverse face of the textile.
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded bg-surface-container border border-outline-variant/25 flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl shrink-0">
                    wb_sunny
                  </span>
                  <div>
                    <span className="font-label-lg text-on-surface block">Solar Setting</span>
                    <span className="font-body-sm text-on-surface-variant">
                      Natural tropical UV rays permanently bind pigments to natural fibers.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4 PILLARS OF ARTISANAL PROCESS ==================== */}
      <section
        id="bespoke-pillars"
        className="w-full py-16 bg-surface-container-lowest border-y border-outline-variant/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-md text-primary uppercase tracking-widest block mb-1">
                Craftsmanship Codex
              </span>
              <h2 className="font-headline-lg text-on-surface">The 4 Sacred Pillars of Craft</h2>
            </div>
            <p className="font-body-sm text-on-surface-variant max-w-md">
              A timeless chronological alchemy unchanged for over three centuries in Southern and
              Central Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SACRED_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 bg-surface-container border border-outline-variant/30 rounded-lg flex flex-col justify-between shadow-md hover:bg-surface-container-high transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className={`font-headline-lg transition-colors ${pillar.colorClass}`}>
                      {pillar.num}
                    </span>
                    <span className={`material-symbols-outlined text-2xl ${pillar.accentClass}`}>
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-on-surface">{pillar.title}</h3>
                  <p className="font-body-sm text-on-surface-variant">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/20">
                  <span
                    className={`font-label-sm uppercase tracking-wider block ${pillar.accentClass}`}
                  >
                    {pillar.metaLabel}
                  </span>
                  <span className="font-body-sm text-on-surface-variant">{pillar.metaValue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COUTURE DIALOGUES SHOWCASE ==================== */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10">
            <div className="lg:col-span-8">
              <span className="font-label-md text-secondary uppercase tracking-widest block mb-1">
                Couture Dialogues
              </span>
              <h2 className="font-headline-lg text-on-surface">
                Modern Elegance Meets Island Heritage
              </h2>
              <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl">
                From ceremonial Osariya drapes worn at imperial Kandyan weddings to tailored unisex
                resort sarongs and modern evening frocks, batik transcends convention.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={getWhatsAppUrl(
                  'Hello CHAMATHKARA Bathik, I would like to request the full couture lookbook portfolio.'
                )}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-5 py-3 rounded font-label-md uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors whitespace-nowrap font-bold"
              >
                <span className="material-symbols-outlined text-lg leading-none">menu_book</span>
                <span>Request Full Lookbook</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COUTURE_DIALOGUES.map((piece) => (
              <div
                key={piece.title}
                onClick={() => onNavigate('collections', piece.category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('collections', piece.category);
                  }
                }}
                className="flex flex-col bg-surface-container border border-outline-variant/30 rounded-lg overflow-hidden group shadow-lg cursor-pointer hover:border-primary/45 transition-colors"
              >
                <div className="relative w-full h-96 overflow-hidden">
                  <BatikImage
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={piece.title}
                  />
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 bg-surface-container-high/92 backdrop-blur rounded font-label-sm uppercase ${piece.badgeColor}`}
                  >
                    {piece.badge}
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
                  <div>
                    <span className="font-headline-sm text-on-surface block">{piece.title}</span>
                    <span className="font-body-sm text-on-surface-variant mt-1 block">
                      {piece.desc}
                    </span>
                  </div>
                  <div className="pt-3 flex justify-between items-center text-primary font-label-sm uppercase tracking-wider">
                    <span>{piece.meta}</span>
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ATELIER CONTACT & BESPOKE INQUIRY HUB ==================== */}
      <section
        id="contact-atelier"
        className="w-full py-16 bg-surface-container-lowest border-y border-outline-variant/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Concierge Highlight & Direct WhatsApp */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <span className="font-label-md text-primary uppercase tracking-widest block mb-1">
                  Direct Artisan Access
                </span>
                <h2 className="font-headline-lg text-on-surface">
                  Order &amp; Connect Directly With Our Atelier
                </h2>
                <p className="font-body-md text-on-surface-variant mt-2">
                  Every garment is made-to-order or selected from limited batch releases. We bypass
                  automated carts to offer you personal, one-on-one consultation with our lead
                  textile designers.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-surface-container-high border border-primary/25 flex flex-col gap-4 shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary/10 blur-xl pointer-events-none" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">chat</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Official WhatsApp Concierge
                    </span>
                    <span className="font-headline-sm text-primary tracking-wide tabular-nums">
                      +94 76 155 1740
                    </span>
                  </div>
                </div>

                <p className="font-body-sm text-on-surface-variant">
                  Inquire about current fabric swatches, bespoke measurements, bridal party orders,
                  or islandwide/worldwide shipping updates.
                </p>

                <a
                  href={getWhatsAppUrl(
                    'Hello CHAMATHKARA Bathik, I would like to inquire about your batik creations.'
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full py-3.5 px-4 bg-primary text-on-primary font-label-md uppercase tracking-wider rounded text-center font-bold hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-lg leading-none">chat</span>
                  <span>Launch Instant WhatsApp Chat</span>
                </a>

                <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/25">
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                    <span className="material-symbols-outlined text-base text-primary">schedule</span>
                    <span>Mon – Sat: 9:00 AM – 7:00 PM IST (GMT+5:30)</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                    <span className="material-symbols-outlined text-base text-primary">
                      location_on
                    </span>
                    <span>Workshop &amp; Atelier: Chilaw, Madampe, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                    <span className="material-symbols-outlined text-base text-primary">mail</span>
                    <a
                      href="mailto:chamthkarabatik@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      chamthkarabatik@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-surface-container border border-outline-variant/25 flex items-center justify-between">
                <span className="font-label-md text-on-surface uppercase tracking-wider">
                  Follow The Atelier
                </span>
                <div className="flex items-center gap-2 text-primary">
                  <a
                    href={getWhatsAppUrl('Hello CHAMATHKARA Bathik, please share your Instagram gallery.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-surface hover:text-primary-fixed transition-colors"
                    title="Instagram"
                  >
                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('Hello CHAMATHKARA Bathik, please share your latest catalog.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-surface hover:text-primary-fixed transition-colors"
                    title="Lookbook"
                  >
                    <span className="material-symbols-outlined text-xl">collections_bookmark</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Bespoke Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col gap-5 shadow-xl">
                <div>
                  <span className="font-label-sm text-secondary uppercase tracking-widest block mb-1">
                    Tailored Commission
                  </span>
                  <h3 className="font-headline-md text-on-surface">Bespoke Inquiry Form</h3>
                  <p className="font-body-sm text-on-surface-variant mt-1">
                    Share your dream silhouette and color palette. Our textile master will respond
                    within 4 business hours via WhatsApp with tailored concepts.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="clientName"
                        className="font-label-sm text-on-surface-variant uppercase tracking-wider"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Ananya Senanayake"
                        className="w-full px-3.5 py-2.5 bg-surface-container-high border-b border-primary/40 rounded-t text-on-surface font-body-md placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="clientPhone"
                        className="font-label-sm text-on-surface-variant uppercase tracking-wider"
                      >
                        WhatsApp Number (with Country Code) *
                      </label>
                      <input
                        id="clientPhone"
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+94 7X XXX XXXX"
                        className="w-full px-3.5 py-2.5 bg-surface-container-high border-b border-primary/40 rounded-t text-on-surface font-body-md placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="garmentType"
                        className="font-label-sm text-on-surface-variant uppercase tracking-wider"
                      >
                        Garment Category *
                      </label>
                      <select
                        id="garmentType"
                        value={garmentType}
                        onChange={(e) => setGarmentType(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-surface-container-high border-b border-primary/40 rounded-t text-on-surface font-body-md focus:outline-none focus:border-primary"
                      >
                        <option value="Batik Saree (Osariya / Traditional)">
                          Batik Saree (Osariya / Traditional)
                        </option>
                        <option value="Batik Frock / Haute Dress">
                          Batik Frock / Haute Dress
                        </option>
                        <option value="Unisex / Men's Batik Sarong">
                          Unisex / Men&apos;s Batik Sarong
                        </option>
                        <option value="Handcrafted Silk Night Dress">
                          Handcrafted Silk Night Dress
                        </option>
                        <option value="Bridal Custom Ensemble">Bridal Custom Ensemble</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="colorPalette"
                        className="font-label-sm text-on-surface-variant uppercase tracking-wider"
                      >
                        Preferred Color Palette
                      </label>
                      <input
                        id="colorPalette"
                        type="text"
                        value={colorPalette}
                        onChange={(e) => setColorPalette(e.target.value)}
                        placeholder="e.g. Rich Maroon, Deep Indigo, Ochre"
                        className="w-full px-3.5 py-2.5 bg-surface-container-high border-b border-primary/40 rounded-t text-on-surface font-body-md placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="clientMessage"
                      className="font-label-sm text-on-surface-variant uppercase tracking-wider"
                    >
                      Notes &amp; Custom Sizing Requirements
                    </label>
                    <textarea
                      id="clientMessage"
                      rows={3}
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      placeholder="Describe your desired event, sizing preference, or reference motif..."
                      className="w-full px-3.5 py-2.5 bg-surface-container-high border-b border-primary/40 rounded-t text-on-surface font-body-md placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-base text-primary">lock</span>
                      <span>Direct WhatsApp concierge dispatch</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-primary text-on-primary font-label-md uppercase tracking-wider rounded font-bold hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-md whitespace-nowrap cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg leading-none">send</span>
                      <span>Transmit Inquiry</span>
                    </button>
                  </div>

                  {submittedUrl && (
                    <div className="p-4 rounded bg-secondary-container text-on-secondary-container font-body-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base shrink-0">
                          check_circle
                        </span>
                        <span>Your bespoke inquiry is ready for our master drapers.</span>
                      </div>
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded bg-primary text-on-primary font-label-sm uppercase tracking-wider font-bold whitespace-nowrap text-center hover:bg-primary-fixed transition-colors"
                      >
                        Send via WhatsApp
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CURATED FAQ SECTION ==================== */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="font-label-md text-primary uppercase tracking-widest block mb-1">
              Frequently Inquired
            </span>
            <h2 className="font-headline-lg text-on-surface">
              Boutique Care, Shipping &amp; Craft Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-lg bg-surface-container border border-outline-variant/25 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-xl ${faq.iconColor}`}>
                    {faq.icon}
                  </span>
                  <h3 className="font-headline-sm text-on-surface">{faq.q}</h3>
                </div>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
