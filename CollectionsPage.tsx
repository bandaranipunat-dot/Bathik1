import { useRef } from 'react';
import {
  BatikProduct,
  BRAND_IMAGES,
  CATALOG_PRODUCTS,
  CategoryFilter,
  getWhatsAppUrl,
  PageRoute,
} from '../data/batikCatalog';
import { BatikImage } from '../components/BatikImage';

interface CollectionsPageProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  onNavigate: (page: PageRoute, category?: CategoryFilter) => void;
  onSelectProduct: (product: BatikProduct) => void;
}

const FEATURE_MOSAIC: {
  category: Exclude<CategoryFilter, 'all'>;
  title: string;
  badge: string;
  description: string;
  cta: string;
  image: string;
}[] = [
  {
    category: 'sarees',
    title: 'Batik Sarees',
    badge: 'Curated Archive (8)',
    description:
      'Traditional Kandyan Osariyas & modern drapes crafted with wax-resist storytelling on pure silk & voile.',
    cta: 'View Sarees',
    image: BRAND_IMAGES.catSaree,
  },
  {
    category: 'frocks',
    title: 'Batik Frocks',
    badge: 'Modern Silhouette (11)',
    description:
      'Contemporary silhouettes, flared maxi dresses, and bespoke artisan frocks hand-dyed in Chilaw, Madampe, Sri Lanka.',
    cta: 'View Frocks',
    image: BRAND_IMAGES.catFrock,
  },
  {
    category: 'sarongs',
    title: 'Batik Sarongs',
    badge: 'Heritage Menswear (7)',
    description:
      "Refined formal & casual men's and unisex sarongs featuring traditional heraldic emblems and lion crests.",
    cta: 'View Sarongs',
    image: BRAND_IMAGES.catSarong,
  },
  {
    category: 'nightwear',
    title: 'Batik Night Dresses',
    badge: 'Lounge & Slumber (3)',
    description:
      'Ultra-breathable organic cotton loungewear, tiered ruffle gowns, and relaxed evening resort sleepwear.',
    cta: 'View Night Dresses',
    image: BRAND_IMAGES.catNightDressMosaic,
  },
];

const FILTER_TABS: { id: CategoryFilter; label: string; count: number }[] = [
  { id: 'all', label: 'All Collections', count: CATALOG_PRODUCTS.length },
  {
    id: 'sarees',
    label: 'Batik Sarees',
    count: CATALOG_PRODUCTS.filter((p) => p.category === 'sarees').length,
  },
  {
    id: 'frocks',
    label: 'Batik Frocks',
    count: CATALOG_PRODUCTS.filter((p) => p.category === 'frocks').length,
  },
  {
    id: 'sarongs',
    label: 'Batik Sarongs',
    count: CATALOG_PRODUCTS.filter((p) => p.category === 'sarongs').length,
  },
  {
    id: 'nightwear',
    label: 'Batik Night Dresses',
    count: CATALOG_PRODUCTS.filter((p) => p.category === 'nightwear').length,
  },
];

export function CollectionsPage({
  activeCategory,
  onSelectCategory,
  onNavigate,
  onSelectProduct,
}: CollectionsPageProps) {
  const catalogRef = useRef<HTMLElement>(null);

  const filteredProducts =
    activeCategory === 'all'
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter((item) => item.category === activeCategory);

  const handleMosaicSelect = (category: CategoryFilter) => {
    onSelectCategory(category);
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* ==================== CATALOG HEADER & EDITORIAL INTRO ==================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-12 lg:py-16">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-on-surface-variant font-label-sm uppercase tracking-widest mb-5"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-primary/60">/</span>
            <span className="text-primary">Collections</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 font-label-md text-primary tracking-widest uppercase mb-2">
                <span className="w-8 h-[1px] bg-primary" />
                <span>Artisan Haute Couture Catalog</span>
              </div>
              <h1 className="font-display-lg text-primary tracking-tight">
                Authentic Hand-Drawn Sri Lankan Batik
              </h1>
              <p className="font-body-lg text-on-surface-variant mt-4 leading-relaxed">
                Each drape, silhouette, and fold reflects weeks of wax-resist meditation by Master
                Artisans in Sri Lanka. From historic Kandyan Osariyas to modern resort dresses,
                discover rare one-of-one wearable fine art.
              </p>
            </div>

            {/* Quick Concierge WhatsApp Tag */}
            <a
              href={getWhatsAppUrl('Hello CHAMATHKARA Bathik, I would like concierge assistance.')}
              rel="noopener noreferrer"
              target="_blank"
              className="bg-surface-container border border-outline-variant/35 hover:border-primary/50 p-4 rounded-xl flex items-center gap-4 self-start lg:self-end transition-colors shrink-0"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-secondary uppercase tracking-widest">
                  Atelier WhatsApp
                </span>
                <span className="font-headline-sm text-primary tabular-nums">+94 76 155 1740</span>
                <span className="font-label-sm text-on-surface-variant opacity-80">
                  White-glove custom inquiries
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORY FEATURE MOSAIC ==================== */}
      <section className="w-full bg-surface-container-low py-12 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 gap-4">
            <div>
              <span className="font-label-sm uppercase tracking-widest text-primary block mb-1">
                Curated Disciplines
              </span>
              <h2 className="font-headline-md text-on-surface">
                Explore by Garment Architecture
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 font-label-md text-on-surface-variant">
              <span>Tap to filter catalog below</span>
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_MOSAIC.map((cat) => {
              const isSelected = activeCategory === cat.category;
              return (
                <div
                  key={cat.category}
                  onClick={() => handleMosaicSelect(cat.category)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMosaicSelect(cat.category);
                    }
                  }}
                  className={`cursor-pointer group relative overflow-hidden rounded-xl bg-surface-container p-4 transition-all duration-300 hover:bg-surface-container-high shadow-lg border ${
                    isSelected
                      ? 'border-primary ring-1 ring-primary/40'
                      : 'border-outline-variant/30 hover:border-primary/40'
                  }`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-surface-dim">
                    <BatikImage
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackTitle={cat.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 font-label-sm bg-secondary-container/95 text-on-secondary-container px-2.5 py-1 rounded">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-primary group-hover:text-primary-fixed transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 font-label-sm text-primary uppercase tracking-wider">
                    <span>{cat.cta}</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FILTER TAB INTERFACE ==================== */}
      <section
        id="catalog-section"
        ref={catalogRef}
        className="w-full bg-surface/95 py-4 sticky top-[104px] sm:top-[112px] z-30 shadow-md backdrop-blur-md border-y border-outline-variant/25"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg font-label-sm uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-bold shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>
          <div className="hidden sm:flex items-center gap-2 font-label-sm text-on-surface-variant bg-surface-container-low px-3.5 py-1.5 rounded border border-outline-variant/25 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>WhatsApp Concierge Ready</span>
          </div>
        </div>
      </section>

      {/* ==================== HIGH-FIDELITY PRODUCT GRID ==================== */}
      <section className="w-full bg-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Artisanal Bespoke Protocol Banner */}
          <div className="mb-10 bg-surface-container-low border border-outline-variant/30 p-5 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                verified
              </span>
              <div>
                <h3 className="font-headline-sm text-primary">Artisanal Bespoke Protocol</h3>
                <p className="font-body-sm text-on-surface-variant mt-0.5">
                  Each piece is individually batiked upon selection. Colors, pallu motifs, and
                  tailored measurements are finalized directly with our design master.
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppUrl(
                'Hello CHAMATHKARA Bathik, I would like to consult on a custom fabric order.'
              )}
              rel="noopener noreferrer"
              target="_blank"
              className="whitespace-nowrap px-4 py-2.5 rounded bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-all shrink-0 font-bold"
            >
              Direct Inquiry
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col rounded-xl bg-surface-container border border-outline-variant/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/45"
              >
                <div
                  onClick={() => onSelectProduct(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(item);
                    }
                  }}
                  className="relative w-full aspect-[3/4] bg-surface-dim overflow-hidden cursor-pointer"
                >
                  <BatikImage
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      item.objectPosition === 'top' ? 'object-top' : 'object-center'
                    }`}
                    style={item.imageFilter ? { filter: item.imageFilter } : undefined}
                    fallbackTitle={item.title}
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
                    <span className="bg-secondary-container/95 text-on-secondary-container px-2.5 py-0.5 rounded font-label-sm tracking-wider uppercase truncate max-w-[68%]">
                      {item.fabricBadge}
                    </span>
                    <span className="bg-surface/85 backdrop-blur-sm text-primary px-2 py-0.5 rounded font-label-sm uppercase whitespace-nowrap shrink-0">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-surface/90 backdrop-blur text-primary font-label-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Customize
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <span className="font-label-sm text-primary tracking-widest uppercase">
                      {item.kicker}
                    </span>
                    <h3 className="font-headline-sm text-on-surface text-lg font-bold group-hover:text-primary transition-colors mt-0.5">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="font-label-sm text-primary/90 font-medium mt-1">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="font-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <span className="font-label-sm text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-primary">brush</span>
                      <span>{item.technique}</span>
                    </span>
                    <a
                      href={getWhatsAppUrl(
                        `Hello CHAMATHKARA Bathik! I am interested in ${item.title}. Could you please provide more details?`
                      )}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="w-full py-2.5 px-4 rounded bg-primary-container text-on-primary font-label-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md font-bold whitespace-nowrap"
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

      {/* ==================== BESPOKE SIZING & TAILORED DYE PALETTE SECTION ==================== */}
      <section className="w-full bg-surface-container-low py-16 relative overflow-hidden border-t border-outline-variant/20">
        <div
          className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-96 h-96 bg-contain bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: `url('${BRAND_IMAGES.catSaree}')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-surface-container border border-outline-variant/35 rounded-2xl p-6 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center gap-10">
            {/* Left Editorial Explanation */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary font-label-md tracking-widest uppercase">
                <span className="w-6 h-[1px] bg-primary" />
                <span>Atelier Made-to-Order Protocol</span>
              </div>
              <h2 className="font-headline-lg text-primary leading-tight">
                Bespoke Sizing &amp; Tailored Dye Palettes
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Every woman and gentleman deserves a drape aligned with their personal aura. We
                welcome bespoke requests: whether you desire the &ldquo;Nilambari Butterfly&rdquo;
                rendered in royal emerald silk instead of cobalt, or need custom blouse sleeves
                tailored to Kandyan Osariya measurements, our artisans cater to every specification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="bg-surface p-4 rounded-lg border border-outline-variant/25 flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-primary text-2xl">palette</span>
                  <span className="font-label-md text-on-surface font-bold">Custom Dyes</span>
                  <span className="font-body-sm text-on-surface-variant">
                    Request specific PANTONE or traditional mineral shades.
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-outline-variant/25 flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-primary text-2xl">straighten</span>
                  <span className="font-label-md text-on-surface font-bold">Blouse Sizing</span>
                  <span className="font-body-sm text-on-surface-variant">
                    Send shoulder, bust, and fall lengths directly to the master tailor.
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-outline-variant/25 flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    flight_takeoff
                  </span>
                  <span className="font-label-md text-on-surface font-bold">Insured Shipping</span>
                  <span className="font-body-sm text-on-surface-variant">
                    Worldwide direct doorstep dispatch via DHL Express courier.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="w-full lg:w-2/5 bg-secondary-container/40 border border-secondary/20 p-7 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-4 shadow-lg">
                <span className="material-symbols-outlined text-3xl">mark_chat_read</span>
              </div>
              <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">
                Instant Artisan Direct Link
              </span>
              <h3 className="font-headline-sm text-primary mt-1">Consult with Chamathkara</h3>
              <p className="font-body-sm text-on-surface-variant mt-2 max-w-xs">
                Share screenshots of the motifs you love and specify your occasion timeline. Our
                senior design concierge will reply within 30 minutes.
              </p>
              <div className="w-full mt-6 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl(
                    'Hello CHAMATHKARA Bathik, I would like to consult about a bespoke color palette and sizing.'
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full py-3 px-6 rounded bg-primary-container text-on-primary font-label-md uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md font-bold whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-lg leading-none">chat</span>
                  <span>Open Atelier WhatsApp</span>
                </a>
                <span className="font-label-sm text-on-surface-variant opacity-80 mt-1">
                  +94 76 155 1740 • Mon - Sat 9AM - 7PM IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
