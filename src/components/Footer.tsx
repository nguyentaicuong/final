import { Mail, PhoneCall } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-x flex flex-col gap-3 py-5 text-sm font-semibold md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a className="inline-flex items-center gap-2 transition hover:text-yellow-300" href="tel:0336786895">
            <PhoneCall className="size-4 text-yellow-300" aria-hidden="true" />
            <span className="font-black uppercase text-yellow-300">Hotline BTC:</span> 0336786895 (Mr Khoa)
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-yellow-300" href="mailto:marketing@xuancau.com.vn">
            <Mail className="size-4 text-yellow-300" aria-hidden="true" />
            marketing@xuancau.com.vn
          </a>
        </div>
        <p className="text-white/80">© 2026 Xuan Cau Holdings - Internal Communications Team.</p>
      </div>
      <div className="h-[6px] bg-brand-orange" />
    </footer>
  );
}
