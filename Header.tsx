import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_IMAGES, CategoryFilter, getWhatsAppUrl, PageRoute } from '../data/batikCatalog';
import { BatikImage } from './BatikImage';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, category?: CategoryFilter) => void;
}

const NAV_ITEMS: { label: string; route: PageRoute }[] = [
  { label: 'Home', route: 'home' },
  { label: 'Collections', route: 'collections' },
  { label: 'About Us', route: 'about-us' },
  { label: 'Heritage & Craft', route: 'heritage-and-craft' },
  { label: 'Contact', route: 'contact' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(route, route === 'collections' ? 'all' : undefined);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-outline-variant/25">
      {/* Slim Top Announcement Strip */}
      <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 text-center font-label-sm tracking-widest uppercase flex items-center justify-center gap-2 sm:gap-3 overflow-hidden">
        <span className="opacity-90 truncate">Artisan Hand-Dyed Sri Lankan Batik</span>
        <span className="hidden sm:inline text-primary opacity-60">•</span>
        <span className="hidden sm:inline opacity-90 whitespace-nowrap">
          Islandwide &amp; Worldwide Delivery
        </span>
        <span className="hidden md:inline text-primary opacity-60">•</span>
        <span className="hidden md:inline text-primary font-bold whitespace-nowrap">
          Bespoke Orders via WhatsApp
        </span>
      </div>

      {/* Main Navigation Row */}
      <div className="h-18 sm:h-20 bg-surface/92 backdrop-blur-xl transition-all">
        <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left shrink-0 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/35 shrink-0 bg-surface-container">
              <BatikImage
                src={BRAND_IMAGES.avatar}
                alt="Chamathkara Bathik Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-primary text-base sm:text-lg tracking-widest uppercase leading-tight group-hover:text-primary-fixed transition-colors whitespace-nowrap">
                Chamathkara Bathik
              </span>
              <span className="font-label-sm text-on-surface-variant tracking-widest uppercase opacity-75 whitespace-nowrap hidden sm:block">
                Traditional Art • Modern Elegance
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPage === item.route ||
                (currentPage === 'bespoke-process' && item.route === 'heritage-and-craft');

              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-label-lg uppercase tracking-wider transition-colors py-2 px-3.5 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl('Hello CHAMATHKARA Bathik, I would like to place a bespoke order.')}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-md uppercase px-3.5 sm:px-4 py-2.5 rounded hover:bg-primary transition-all shadow-[0_0_15px_rgba(196,154,82,0.18)] whitespace-nowrap shrink-0 font-semibold"
            >
              <span className="material-symbols-outlined text-lg leading-none">chat</span>
              <span className="hidden sm:inline">Order via WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low border-t border-outline-variant/30 px-4 py-4 shadow-2xl">
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-label-lg uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
