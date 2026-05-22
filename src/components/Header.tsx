import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, X } from 'lucide-react';
import { figmaAssets } from '../data/figmaAssets';

const navItems = [
  { label: 'Tổng quan', href: '#overview' },
  { label: 'Thể lệ cuộc thi', href: '#stages' },
  { label: 'Điểm trải nghiệm', href: '#experience' },
  { label: 'Liên hệ', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 18);

      const cursor = window.scrollY + 120;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.offsetTop <= cursor) {
          return item.href;
        }
        return active;
      }, '');

      setActiveSection(current);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) {
      return undefined;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileOpen]);

  const handleNavigation = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileOpen(false);
  };

  const headerClass = isScrolled
    ? 'bg-white/94 shadow-[0_10px_32px_rgba(124,45,18,0.12)] backdrop-blur-xl'
    : 'bg-white/14 backdrop-blur-md';
  const navTextClass = isScrolled ? 'text-slate-800 hover:text-brand-orange' : 'text-white hover:text-yellow-100';
  const iconTextClass = isScrolled ? 'text-slate-800' : 'text-white';

  return (
    <header className={['fixed left-0 right-0 top-0 z-50 transition-all duration-300', headerClass].join(' ')}>
      <div className="figma-header-container flex h-[4.4rem] items-center justify-between lg:h-[4.75rem]">
        <button
          type="button"
          className="group flex shrink-0 items-center text-left"
          aria-label="Về đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={figmaAssets.logo}
            alt="Xuan Cau Holdings"
            className="h-[58px] w-[74px] shrink-0 object-contain drop-shadow-[0_7px_14px_rgba(124,45,18,0.14)] transition group-hover:-translate-y-0.5 lg:h-[64px] lg:w-[82px]"
          />
        </button>

        <div className="flex items-center gap-4 lg:gap-6">
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.href}
                  type="button"
                  className={['relative px-0 py-1.5 text-[13px] font-extrabold uppercase transition xl:text-[14px]', navTextClass].join(' ')}
                  onClick={() => handleNavigation(item.href)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      className={[
                        'absolute -bottom-1 left-0 h-0.5 w-full rounded-full',
                        isScrolled ? 'bg-brand-orange' : 'bg-white'
                      ].join(' ')}
                      layoutId="active-nav-line"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className={['flex items-center gap-3 lg:gap-4', iconTextClass].join(' ')}>
            <button
              type="button"
              className="hidden size-8 place-items-center rounded-full transition hover:bg-black/5 lg:grid"
              aria-label="Tìm kiếm"
            >
              <Search className="size-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-full transition hover:bg-black/5"
              aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMobileOpen}
              onClick={(event) => {
                event.stopPropagation();
                setIsMobileOpen((value) => !value);
              }}
            >
              {isMobileOpen ? <X className="size-[18px]" aria-hidden="true" /> : <Menu className="size-[18px]" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            ref={drawerRef}
            className="figma-header-container pb-2.5 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <nav className="overflow-hidden rounded-[1.25rem] border border-orange-100 bg-white p-2 shadow-soft">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <button
                    key={item.href}
                    type="button"
                    className={[
                      'flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-black transition',
                      isActive ? 'bg-orange-50 text-brand-deep' : 'text-slate-700 hover:bg-slate-50'
                    ].join(' ')}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                    {isActive ? <span className="size-2 rounded-full bg-brand-orange" /> : null}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
