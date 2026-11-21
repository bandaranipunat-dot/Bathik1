import { useState } from 'react';
import { X } from 'lucide-react';
import { BatikProduct, getWhatsAppUrl } from '../data/batikCatalog';
import { BatikImage } from './BatikImage';

interface ConciergeModalProps {
  product: BatikProduct | null;
  onClose: () => void;
}

const FABRIC_OPTIONS = [
  'Pure Mulberry Silk',
  'Raw Silk / Tussar',
  'Hand-Spun Cotton Voile',
  '100% Organic Cotton',
];

const SIZE_OPTIONS = ['Standard Atelier Fit', 'XS / S', 'M / L', 'XL / XXL', 'Custom Tailored Measurements'];

export function ConciergeModal({ product, onClose }: ConciergeModalProps) {
  const [fabric, setFabric] = useState(FABRIC_OPTIONS[0]);
  const [sizing, setSizing] = useState(SIZE_OPTIONS[0]);
  const [paletteNote, setPaletteNote] = useState('');

  if (!product) return null;

  const message =
    `Hello CHAMATHKARA Bathik, I am interested in ${product.title}` +
    (product.lotCode ? ` (${product.lotCode})` : '') +
    `.\n• Preferred Fabric: ${fabric}\n• Sizing: ${sizing}` +
    (paletteNote.trim() ? `\n• Custom Color/Notes: ${paletteNote.trim()}` : '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="concierge-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-on-tertiary-fixed/95 backdrop-blur-xl border border-primary/40 shadow-[0_0_40px_rgba(196,154,82,0.2)] grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close bespoke concierge modal"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-surface/80 text-on-surface hover:text-primary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Preview Image */}
        <div className="md:col-span-5 aspect-[3/4] md:aspect-auto bg-surface-container-lowest relative overflow-hidden">
          <BatikImage
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-cover ${product.objectPosition === 'top' ? 'object-top' : 'object-center'}`}
            style={product.imageFilter ? { filter: product.imageFilter } : undefined}
            fallbackTitle={product.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="font-label-sm text-primary uppercase tracking-widest block">
              {product.lotCode || product.categoryLabel}
            </span>
            <span className="font-body-sm text-on-surface">{product.fabricBadge}</span>
          </div>
        </div>

        {/* Right Customizer & WhatsApp Launch */}
        <div className="md:col-span-7 p-6 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-label-sm text-primary uppercase tracking-widest">
                Direct Order Concierge
              </span>
              <h3 id="concierge-modal-title" className="font-headline-sm text-on-surface mt-1">
                {product.title}
              </h3>
              <p className="font-body-sm text-tertiary mt-1.5 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <label className="font-label-sm text-tertiary uppercase tracking-wider" htmlFor="modal-fabric">
                Fabric Base Preference
              </label>
              <select
                id="modal-fabric"
                value={fabric}
                onChange={(e) => setFabric(e.target.value)}
                className="w-full px-3 py-2 rounded bg-surface-container text-on-surface font-body-sm border border-primary/35 focus:outline-none focus:border-primary"
              >
                {FABRIC_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-tertiary uppercase tracking-wider" htmlFor="modal-size">
                Sizing / Blouse Fit
              </label>
              <select
                id="modal-size"
                value={sizing}
                onChange={(e) => setSizing(e.target.value)}
                className="w-full px-3 py-2 rounded bg-surface-container text-on-surface font-body-sm border border-primary/35 focus:outline-none focus:border-primary"
              >
                {SIZE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-tertiary uppercase tracking-wider" htmlFor="modal-notes">
                Custom Colorway or Occasion Notes
              </label>
              <input
                id="modal-notes"
                type="text"
                value={paletteNote}
                onChange={(e) => setPaletteNote(e.target.value)}
                placeholder="e.g. Emerald silk variation, matching groom sarong..."
                className="w-full px-3 py-2 rounded bg-surface-container text-on-surface font-body-sm placeholder:text-on-surface-variant/50 border border-primary/35 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href={getWhatsAppUrl(message)}
              rel="noopener noreferrer"
              target="_blank"
              className="w-full py-3 px-4 rounded bg-primary text-on-primary font-label-md uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors shadow-[0_0_20px_rgba(237,191,115,0.3)] whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Inquire via WhatsApp</span>
            </a>
            <span className="font-label-sm text-tertiary/80 text-center uppercase tracking-widest">
              +94 76 155 1740 • Artisan Response &lt; 30 Mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
