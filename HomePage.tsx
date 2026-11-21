import {
  BatikProduct,
  BRAND_IMAGES,
  CategoryFilter,
  getWhatsAppUrl,
  PageRoute,
  SEASONAL_HIGHLIGHTS,
} from '../data/batikCatalog';
import { BatikImage } from '../components/BatikImage';

interface HomePageProps {
  onNavigate: (page: PageRoute, category?: CategoryFilter) => void;
  onSelectProduct: (product: BatikProduct) => void;
}

const SIGNATURE_CATEGORIES: {
  portfolio: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  category: Exclude<CategoryFilter, 'all'>;
}[] = [
  {
    portfolio: 'Portfolio 01',
    title: 'Batik Sarees',
    badge: 'Silk & Georgette',
    description:
      'Kandyan Osariya and modern Indian drapes with cascading hand-waxed mandalas.',
    image: BRAND_IMAGES.catSaree,
    category: 'sarees',
  },
  {
    portfolio: 'Portfolio 02',
    title: 'Batik Frocks',
    badge: 'Cocktail & Evening',
    description:
      'Contemporary resort silhouettes, evening tea frocks, and structured modern dresses.',
    image: BRAND_IMAGES.catFrock,
    category: 'frocks',
  },
  {
    portfolio: 'Portfolio 03',
    title: 'Batik Sarongs',
    badge: "Gentlemen's Royal",
    description:
      'Prestige masculine wear adorned with ancestral sun rays, elephants, and Gajasinha emblems.',
    image: BRAND_IMAGES.catSarong,
    category: 'sarongs',
  },
  {
    portfolio: 'Portfolio 04',
    title: 'Batik Night Dresses',
    badge: 'Lounge & Resort',
    description:
      'Airy, featherlight pure cotton slips and lounging caftans with hand-dipped ombre botanicals.',
    image: BRAND_IMAGES.catNightDress,
    category: 'nightwear',
  },
];

const CRAFT_STEPS = [
  {
    num: '01',
    icon: 'draw',
    title: 'Canting Freehand',
    desc: 'Intricate lines sketched with boiling wax onto 100% natural fibers.',
  },
  {
    num: '02',
    icon: 'palette',
    title: 'Multi-Bath Dyeing',
    desc: 'Graduated cold immersion baths creating singular depth and tone.',
  },
  {
    num: '03',
    icon: 'grain',
    title: 'Wax Fracturing',
    desc: 'Intentional cracking under pressure yielding iconic batik crackle veining.',
  },
  {
    num: '04',
    icon: 'water_drop',
    title: 'Boiling & Release',
    desc: 'Dewaxed in fresh boiling water, unmasking clean silk beneath.',
  },
];

export function HomePage({ onNavigate, onSelectProduct }: HomePageProps) {
  return (
    <div className="flex flex-col w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div
          className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('${BRAND_IMAGES.mandalaBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-transparent z-10" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20 lg:pt-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-primary/20 w-fit shadow-md">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-label-sm uppercase tracking-widest text-primary">
                100% Handcrafted Artisanal Batik • Sri Lanka
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-label-md uppercase tracking-widest text-secondary font-semibold">
                Haute Couture &amp; Bespoke Textiles
              </span>
              <h1 className="font-display-lg text-primary tracking-tight">
                The Art of Sri Lankan Batik
              </h1>
              <p className="font-headline-sm italic text-on-surface-variant max-w-xl font-normal">
                Where Traditional Craftsmanship Meets Modern Elegance.
              </p>
            </div>

            <p className="font-body-lg text-on-surface-variant/90 max-w-xl leading-relaxed">
              Each saree, frock, and sarong is an unrepeatable masterpiece—individually conceived,
              hand-waxed with brass canting tools, and steeped in botanical pigments beneath the
              tropical sun.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('collections', 'all')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary-container text-on-primary font-label-lg uppercase tracking-wider hover:bg-primary transition-all shadow-[0_0_20px_rgba(196,154,82,0.25)] whitespace-nowrap cursor-pointer font-bold"
              >
                <span>Explore Collection</span>
                <span className="material-symbols-outlined text-lg leading-none">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about-us')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container-high border border-primary/30 text-on-surface hover:text-primary hover:bg-surface-variant transition-all font-label-lg uppercase tracking-wider shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Discover Our Story</span>
              </button>
            </div>

            {/* Trust Mini-Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-outline-variant/25 mt-2">
              <div className="flex flex-col">
                <span className="font-headline-sm text-primary">100%</span>
                <span className="font-label-sm uppercase tracking-wider text-on-surface-variant mt-0.5">
                  Pure Mulberry &amp; Cotton
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-primary">Zero</span>
                <span className="font-label-sm uppercase tracking-wider text-on-surface-variant mt-0.5">
                  Mass Production
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-primary">Bespoke</span>
                <span className="font-label-sm uppercase tracking-wider text-on-surface-variant mt-0.5">
                  Made to Measure
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Hero Frame */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-surface-container-high border border-primary/20 aspect-[3/4]">
                <BatikImage
                  src={BRAND_IMAGES.heroMain}
                  alt="Sri Lankan Batik Osariya in vibrant magenta"
                  className="w-full h-full object-cover"
                  fallbackTitle="Signature Kandyan Osariya"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:left-16 p-3.5 rounded-lg bg-surface/90 backdrop-blur-md border border-primary/25">
                  <span className="font-label-sm uppercase tracking-widest text-primary block">
                    Signature Kandyan Osariya
                  </span>
                  <span className="font-body-sm text-on-surface">
                    Artisan hand-waxed flora on pure raw silk drape
                  </span>
                </div>
              </div>

              {/* Overlapping Bridal Preview */}
              <div className="absolute -bottom-6 -left-6 w-40 rounded-lg overflow-hidden shadow-2xl bg-surface-container-highest border border-primary/30 z-20 hidden sm:block">
                <div className="h-48 overflow-hidden">
                  <BatikImage
                    src={BRAND_IMAGES.heroSecondary}
                    alt="Ivory and royal crimson batik osariya"
                    className="w-full h-full object-cover"
                    fallbackTitle="Bridal Atelier"
                  />
                </div>
                <div className="p-2 bg-secondary-container text-on-secondary-container text-center">
                  <span className="font-label-sm uppercase tracking-wider block font-bold">
                    Bridal Atelier
                  </span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BRAND INTRODUCTION SECTION ==================== */}
      <section className="relative w-full py-16 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-surface-container border border-primary/30 flex items-center justify-center text-primary mb-4 shadow-md">
            <span className="material-symbols-outlined text-2xl">all_inclusive</span>
          </div>
          <span className="font-label-md uppercase tracking-widest text-secondary font-semibold">
            Living Sri Lankan Heritage
          </span>
          <h2 className="font-headline-lg text-primary tracking-tight mt-2 max-w-2xl">
            A Tapestry of Heritage &amp; Contemporary Silhouette
          </h2>
          <div className="w-24 h-0.5 bg-primary/40 my-6" />
          <blockquote className="font-headline-sm italic text-on-surface max-w-3xl leading-relaxed font-normal">
            “We do not merely apply dye to cloth. With boiling beeswax, hand-forged canting pens,
            and generational instinct, we craft wearable heirloom poetry honoring the resplendent
            soul of Sri Lanka.”
          </blockquote>
          <p className="font-body-md text-on-surface-variant max-w-2xl mt-5 leading-relaxed">
            Handcrafted with devotion in Chilaw, Madampe, Sri Lanka, Chamathkara Bathik transforms
            centuries of island textile traditions into couture gowns, classic drapes, and
            distinguished evening wear. Every crackle in the wax tells a story of human touch and
            natural elements.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <div className="flex items-center gap-1.5 text-primary font-label-md uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">spa</span>
              <span>Slow Hand-Crafted Fashion</span>
            </div>
            <span className="text-outline-variant opacity-50 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-primary font-label-md uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span>Bespoke Concierge Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOUR SIGNATURE CATEGORIES ==================== */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col">
              <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
                Curated Portfolios
              </span>
              <h2 className="font-headline-lg text-primary mt-1">Signature Collections</h2>
            </div>
            <p className="font-body-sm text-on-surface-variant max-w-md">
              Hand-drawn motifs transformed across traditional silhouettes and modern statements.
              Select a category to begin your bespoke consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNATURE_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                onClick={() => onNavigate('collections', cat.category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('collections', cat.category);
                  }
                }}
                className="group relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/30 shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-high">
                  <BatikImage
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackTitle={cat.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/25 to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider font-bold">
                    {cat.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between bg-surface-container">
                  <div>
                    <span className="font-label-sm text-primary tracking-widest uppercase">
                      {cat.portfolio}
                    </span>
                    <h3 className="font-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant mt-1.5">{cat.description}</p>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 font-label-md uppercase tracking-wider text-primary group-hover:text-primary-fixed">
                    <span>View Category</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CURATED SEASONAL HIGHLIGHTS ==================== */}
      <section className="w-full py-16 bg-surface-container-low relative border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
                  Direct Atelier Releases
                </span>
              </div>
              <h2 className="font-headline-lg text-primary mt-1">Curated Seasonal Highlights</h2>
            </div>
            <p className="font-body-sm text-on-surface-variant max-w-sm">
              Handcrafted one by one. Inquire through our direct artisan link to customize
              dimensions, colorway, and silk weight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONAL_HIGHLIGHTS.map((piece) => (
              <article
                key={piece.id}
                className="group rounded-xl overflow-hidden bg-surface-container-high border border-outline-variant/30 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
              >
                <div
                  onClick={() => onSelectProduct(piece)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(piece);
                    }
                  }}
                  className="relative w-full aspect-[3/4] overflow-hidden bg-surface cursor-pointer"
                >
                  <BatikImage
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackTitle={piece.title}
                  />
                  {piece.lotCode && (
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-surface-dim/90 backdrop-blur text-primary font-label-sm uppercase border border-primary/25">
                      {piece.lotCode}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-surface/85 backdrop-blur text-on-surface font-label-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Customize
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between bg-surface-container-high">
                  <div>
                    <span className="font-label-sm text-on-surface-variant tracking-wider uppercase">
                      {piece.kicker}
                    </span>
                    <h3 className="font-headline-sm text-primary mt-1">{piece.title}</h3>
                    <p className="font-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                      {piece.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2">
                    <a
                      href={getWhatsAppUrl(
                        `Hello CHAMATHKARA Bathik, I am interested in ${piece.title} (${piece.lotCode})`
                      )}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-primary transition-colors whitespace-nowrap font-bold"
                    >
                      <span className="material-symbols-outlined text-base leading-none">chat</span>
                      <span>Order via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SRI LANKAN CRAFTSMANSHIP & LIVING HERITAGE ==================== */}
      <section className="relative w-full py-16 bg-surface-container-lowest overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-10 mix-blend-screen pointer-events-none rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${BRAND_IMAGES.mandalaBg}')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">history_edu</span>
                <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
                  Unbroken Artisanal Lineage
                </span>
              </div>
              <h2 className="font-headline-lg text-primary tracking-tight">
                The Intricate Alchemy of Wax, Fire &amp; Natural Water
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Unlike machine-printed textiles, every square inch of Chamathkara Batik bears
                witness to an intensive multi-week ritual. The master artisan applies molten
                paraffin and bees&apos; wax freehand using copper spouts, reserving untouched
                threads before immersion into color vats.
              </p>

              {/* Step Progression Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {CRAFT_STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-lg bg-surface-container border border-outline-variant/25 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-primary">{step.num}</span>
                      <span className="material-symbols-outlined text-on-surface-variant">
                        {step.icon}
                      </span>
                    </div>
                    <span className="font-label-md uppercase tracking-wider text-on-surface font-semibold">
                      {step.title}
                    </span>
                    <p className="font-body-sm text-on-surface-variant">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('heritage-and-craft')}
                  className="inline-flex items-center gap-2 font-label-md text-primary hover:text-primary-fixed uppercase tracking-wider cursor-pointer"
                >
                  <span>Read The Full Heritage Monograph</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Visual Atelier Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container aspect-[3/4]">
                    <BatikImage
                      src={BRAND_IMAGES.atelierProcess}
                      alt="Batik textile dyeing process and drape"
                      className="w-full h-full object-cover"
                      fallbackTitle="Atelier Dye Process"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl bg-secondary-container p-5 flex flex-col justify-center">
                    <span className="font-label-sm uppercase tracking-widest text-on-secondary-container font-bold">
                      Island Authenticity
                    </span>
                    <p className="font-headline-sm text-primary mt-1">100% Sri Lankan Artisans</p>
                    <p className="font-body-sm text-on-secondary-container mt-1">
                      Preserving rural dye-house livelihoods in Chilaw, Madampe, Sri Lanka.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-8">
                  <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container aspect-[3/4]">
                    <BatikImage
                      src={BRAND_IMAGES.atelierGajasinha}
                      alt="Gajasinha lion emblem royal sarong"
                      className="w-full h-full object-cover"
                      fallbackTitle="Gajasinha Emblem"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container-high aspect-square">
                    <BatikImage
                      src={BRAND_IMAGES.atelierMossFrock}
                      alt="Moss green modern frock with monochrome shawl"
                      className="w-full h-full object-cover"
                      fallbackTitle="Moss Green Frock"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISUAL EDITORIAL LOOKBOOK ==================== */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
              Visual Anthology
            </span>
            <h2 className="font-headline-lg text-primary mt-1">Atelier Editorial Lookbook</h2>
            <div className="w-16 h-0.5 bg-primary/30 my-3" />
            <p className="font-body-md text-on-surface-variant max-w-xl">
              Captured on location across Sri Lanka&apos;s colonial manors, verandas, and ocean
              courtyards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Main Tall Feature */}
            <div className="md:col-span-5 rounded-xl overflow-hidden bg-surface-container shadow-xl relative aspect-[3/4] md:aspect-auto md:min-h-[540px]">
              <BatikImage
                src={BRAND_IMAGES.lookbook1}
                alt="Fuchsia pink floral drape batik osariya"
                className="w-full h-full object-cover"
                fallbackTitle="The Southern Rose Kandyan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-sm uppercase tracking-widest text-primary font-bold">
                  Lookbook 01
                </span>
                <h3 className="font-headline-sm text-on-surface mt-1">
                  The Southern Rose Kandyan
                </h3>
                <p className="font-body-sm text-on-surface-variant mt-1">
                  Cerise and chalk-white flora draped over cascading ruffle sleeve silken choli.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col gap-5">
              {/* Wide Horizontal Editorial */}
              <div className="rounded-xl overflow-hidden bg-surface-container shadow-xl relative aspect-[16/9]">
                <BatikImage
                  src={BRAND_IMAGES.lookbook2}
                  alt="Mint and emerald floral ensemble"
                  className="w-full h-full object-cover"
                  fallbackTitle="Emerald Garden Reverie"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <span className="font-label-sm uppercase tracking-widest text-primary font-bold">
                      Lookbook 02
                    </span>
                    <h3 className="font-headline-sm text-on-surface">Emerald Garden Reverie</h3>
                  </div>
                  <span className="font-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-dim/85 px-2.5 py-1 rounded whitespace-nowrap">
                    Resort Capsule
                  </span>
                </div>
              </div>

              {/* Bottom Split Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                <button
                  type="button"
                  onClick={() => onNavigate('collections', 'frocks')}
                  className="group rounded-xl overflow-hidden bg-surface-container shadow-xl relative aspect-[3/4] sm:aspect-auto sm:min-h-[300px] text-left cursor-pointer"
                >
                  <BatikImage
                    src={BRAND_IMAGES.lookbook3}
                    alt="Earthy peacock motif tea frock"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackTitle="Mayura Peacock Tea Frock"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="font-label-sm uppercase tracking-widest text-primary font-bold">
                        Lookbook 03
                      </span>
                      <p className="font-headline-sm text-on-surface mt-0.5 text-base group-hover:text-primary transition-colors">
                        Mayura Peacock Tea Frock
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-sm">
                      arrow_forward
                    </span>
                  </div>
                </button>

                <div className="p-6 rounded-xl bg-surface-container-high border border-outline-variant/30 shadow-xl flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary text-3xl">
                      auto_stories
                    </span>
                    <h3 className="font-headline-sm text-primary mt-2">
                      Private Showroom Appointments
                    </h3>
                    <p className="font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Experiencing Chamathkara Batik in person reveals the unmistakable texture of
                      pure hand-waxed silk. Schedule a bespoke draper consultation.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      'Hello CHAMATHKARA Bathik, I would like to schedule a private atelier consultation.'
                    )}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mt-5 inline-flex items-center gap-1.5 font-label-md uppercase tracking-wider text-secondary hover:text-secondary-fixed"
                  >
                    <span>Book Fitting via WhatsApp</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP CONCIERGE VIP BANNER ==================== */}
      <section className="w-full py-16 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden bg-on-tertiary-fixed border border-primary/30 shadow-2xl p-7 md:p-12">
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 opacity-15 mix-blend-screen pointer-events-none rounded-full bg-cover"
              style={{ backgroundImage: `url('${BRAND_IMAGES.mandalaBg}')` }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <div className="inline-flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-label-sm uppercase tracking-widest text-primary font-bold">
                    White-Glove VIP Concierge
                  </span>
                </div>
                <h2 className="font-headline-lg text-primary tracking-tight">
                  Custom Tailored to Your Measurements
                </h2>
                <p className="font-body-md text-tertiary max-w-xl leading-relaxed">
                  Speak directly with our master drapers. Every piece is made individually with zero
                  mass production. We cater to bespoke color alterations, matching groom sarongs,
                  and bridesmaid ensembles.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-tertiary font-label-sm uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">
                      local_shipping
                    </span>
                    Worldwide Insured Delivery
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">straighten</span>
                    Custom Blouse Stitching
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">verified</span>
                    Authentic Certificate
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 shrink-0 w-full md:w-auto">
                <a
                  href={getWhatsAppUrl(
                    'Hello CHAMATHKARA Bathik, I would like to place a bespoke order.'
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-primary text-on-primary font-label-lg uppercase tracking-wider hover:bg-primary-fixed transition-all shadow-[0_0_25px_rgba(237,191,115,0.35)] font-bold whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-xl leading-none">chat</span>
                  <span>Consult via WhatsApp</span>
                </a>
                <span className="font-label-sm text-tertiary/85 uppercase tracking-widest text-center">
                  +94 76 155 1740 • Active Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
