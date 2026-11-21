import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConciergeModal } from './components/ConciergeModal';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { HeritageContactPage } from './pages/HeritageContactPage';
import { BatikProduct, CategoryFilter, PageRoute } from './data/batikCatalog';

const VALID_PAGES: PageRoute[] = [
  'home',
  'collections',
  'about-us',
  'heritage-and-craft',
  'bespoke-process',
  'contact',
];

function getInitialRoute(): { page: PageRoute; category: CategoryFilter } {
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('collections/')) {
    const cat = hash.split('/')[1] as CategoryFilter;
    if (['sarees', 'frocks', 'sarongs', 'nightwear'].includes(cat)) {
      return { page: 'collections', category: cat };
    }
    return { page: 'collections', category: 'all' };
  }
  if (VALID_PAGES.includes(hash as PageRoute)) {
    return { page: hash as PageRoute, category: 'all' };
  }
  return { page: 'home', category: 'all' };
}

export default function App() {
  const initial = getInitialRoute();
  const [currentPage, setCurrentPage] = useState<PageRoute>(initial.page);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(initial.category);
  const [selectedProduct, setSelectedProduct] = useState<BatikProduct | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const next = getInitialRoute();
      setCurrentPage(next.page);
      if (next.page === 'collections') {
        setActiveCategory(next.category);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, category?: CategoryFilter) => {
    setCurrentPage(page);
    if (category) {
      setActiveCategory(category);
    }

    const nextHash =
      page === 'collections' && category && category !== 'all'
        ? `#collections/${category}`
        : `#${page}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }

    if (page !== 'contact' && page !== 'bespoke-process') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: CategoryFilter) => {
    setActiveCategory(category);
    const nextHash = category === 'all' ? '#collections' : `#collections/${category}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="w-full pt-[104px] sm:pt-[112px] bg-surface flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onSelectProduct={setSelectedProduct} />
        )}

        {currentPage === 'collections' && (
          <CollectionsPage
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
          />
        )}

        {(currentPage === 'about-us' ||
          currentPage === 'heritage-and-craft' ||
          currentPage === 'bespoke-process' ||
          currentPage === 'contact') && (
          <HeritageContactPage sectionFocus={currentPage} onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <ConciergeModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
