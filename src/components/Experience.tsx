import { motion, useReducedMotion } from 'framer-motion';
import { figmaAssets } from '../data/figmaAssets';
import { experiences } from '../data/experiences';
import { DecorationLayer } from './DecorationLayer';
import { SectionTitle } from './SectionTitle';

const experienceImages = {
  pool: figmaAssets.experience.pool,
  shore: figmaAssets.experience.shore,
  night: figmaAssets.experience.night,
  bar: figmaAssets.experience.bar,
  gym: figmaAssets.experience.gym
};

const layoutClasses = [
  'experience-card--small experience-card--left-top',
  'experience-card--small experience-card--left-bottom',
  'experience-card--featured',
  'experience-card--small experience-card--right-top',
  'experience-card--small experience-card--right-bottom'
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden bg-[#dff7f3] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(14,165,233,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(223,247,243,0.88))]" />
      <DecorationLayer variant="ocean" density="normal" />

      <div className="container-x relative z-10">
        <SectionTitle label="ĐIỂM ĐẾN" title="ĐÁNG TRẢI NGHIỆM" className="design-section-title experience-section-title" />
        <motion.p
          className="fit-copy mx-auto mt-6 max-w-3xl text-center text-lg font-semibold leading-8 text-slate-700"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
        >
          Khám phá "đại bản doanh" của những Future Makers tại Dragon Dream Resort với các tiện ích miễn phí hoàn
          toàn.
        </motion.p>

        <motion.div
          className="experience-collage mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.16 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.08
              }
            }
          }}
        >
          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              className={['experience-card group relative overflow-hidden rounded-[1.45rem] bg-white shadow-soft ring-1 ring-white/80', layoutClasses[index] || ''].join(' ')}
              variants={{
                hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              title={item.title}
            >
              <img
                src={experienceImages[item.visual]}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                loading="lazy"
                decoding="async"
              />
              <div className="experience-card-overlay absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                <div className="experience-caption rounded-[1rem] bg-slate-950/72 px-3 py-2 text-white shadow-[0_12px_28px_rgba(15,23,42,0.22)] backdrop-blur-[3px] sm:px-4 sm:py-3">
                  <h3 className="experience-caption-title text-sm font-semibold leading-tight sm:text-base">{item.title}</h3>
                  <p className="experience-caption-copy mt-1 text-[0.72rem] font-medium leading-snug text-white/86 sm:text-[0.82rem]">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
