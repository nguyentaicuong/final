import { motion, useReducedMotion } from 'framer-motion';
import { figmaAssets } from '../data/figmaAssets';

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-4 py-16 sm:py-20">
      <motion.div
        className="cta-pattern relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-orange px-6 py-14 text-center text-white shadow-orange sm:px-10 lg:px-16 lg:py-20"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={figmaAssets.cta.footerTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-soft-light" />
        <div className="text-fit-container relative z-10 mx-auto max-w-4xl">
          <h2 className="sr-only">
            Sẵn sàng chưa các chiến binh?
            Chiếc cúp vô địch đang tìm kiếm chủ nhân xứng đáng!
          </h2>
          <img
            src={figmaAssets.cta.title}
            alt="Sẵn sàng chưa các chiến binh? Chiếc cúp vô địch đang tìm kiếm chủ nhân xứng đáng!"
            className="mx-auto h-auto w-full max-w-4xl drop-shadow-[0_12px_0_rgba(124,45,18,0.12)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
