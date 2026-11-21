import { BRAND_IMAGES, CategoryFilter, getWhatsAppUrl, PageRoute } from '../data/batikCatalog';
import { BatikImage } from './BatikImage';

interface FooterProps {
  onNavigate: (page: PageRoute, category?: CategoryFilter) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-lowest relative text-on-surface border-t border-outline-variant/25">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left cursor-pointer group w-fit"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/35 shrink-0">
              <BatikImage
                src={BRAND_IMAGES.avatar}
                alt="Chamathkara Bathik"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-primary text-lg tracking-widest uppercase leading-tight group-hover:text-primary-fixed transition-colors">
                Chamathkara Bathik
              </span>
              <span className="font-label-sm text-on-surface-variant tracking-wider uppercase">
                Authentic Sri Lankan Couture
              </span>
            </div>
          </button>

          <p className="font-body-md text-on-surface-variant max-w-sm">
            Preserving the timeless heritage of Sri Lankan wax-resist batik textiles through artisanal
            silhouettes, custom silk infusions, and bespoke handcrafted design.
          </p>

          <div>
            <a
              href={getWhatsAppUrl('Hello CHAMATHKARA Bathik, I would like concierge assistance.')}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 font-label-md text-primary hover:text-primary-fixed uppercase tracking-wider transition-colors"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              <span>Concierge: +94 76 155 1740</span>
            </a>
          </div>
        </div>

        {/* Column 2: Couture Collections */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <span className="font-label-lg uppercase tracking-widest text-primary font-bold">
            Couture Collections
          </span>
          <ul className="flex flex-col gap-2 font-body-md text-on-surface-variant">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('collections', 'sarees')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Batik Sarees
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('collections', 'frocks')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Batik Frocks
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('collections', 'sarongs')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Batik Sarongs
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('collections', 'nightwear')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Batik Night Dresses
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: The Atelier */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <span className="font-label-lg uppercase tracking-widest text-primary font-bold">
            The Atelier
          </span>
          <ul className="flex flex-col gap-2 font-body-md text-on-surface-variant">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('about-us')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('heritage-and-craft')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Heritage &amp; Craft
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('bespoke-process')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Bespoke Process
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hover:text-primary transition-colors cursor-pointer text-left"
              >
                Boutique Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: White-Glove Service */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <span className="font-label-lg uppercase tracking-widest text-primary font-bold">
            White-Glove Service
          </span>
          <p className="font-body-sm text-on-surface-variant">
            Worldwide shipping insured via DHL Express. Tailored consultations available through our
            direct WhatsApp artisan link.
          </p>
          <div className="p-4 rounded bg-surface-container border border-outline-variant/30 mt-1">
            <span className="font-label-sm uppercase tracking-wider text-secondary font-bold block mb-1">
              Atelier &amp; Custom Inquiries
            </span>
            <span className="font-body-sm text-on-surface block mb-1">
              Chilaw, Madampe, Sri Lanka
            </span>
            <span className="font-body-sm text-on-surface-variant block">
              Mon - Sat: 9:00 AM - 7:00 PM IST
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full bg-surface-container-low py-4 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span className="font-body-sm text-on-surface-variant">
            © 2024 CHAMATHKARA Bathik. Handcrafted in Chilaw, Madampe, Sri Lanka. All Rights Reserved.
          </span>
          <div className="flex items-center gap-5 font-label-sm text-on-surface-variant uppercase tracking-wider">
            <button
              type="button"
              onClick={() => onNavigate('heritage-and-craft')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Terms of Craft
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Islandwide Delivery
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
