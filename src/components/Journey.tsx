import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Clock3 } from 'lucide-react';
import { useRef } from 'react';
import { figmaAssets } from '../data/figmaAssets';
import { journeyDays } from '../data/journey';
import { SectionTitle } from './SectionTitle';

const journeyImages = [figmaAssets.journey.dayOne, figmaAssets.journey.dayTwo, figmaAssets.journey.dayThree];

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);

  return (
    <section ref={sectionRef} id="journey" className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24 lg:py-32">
      <motion.div className="journey-bg" style={{ y: backgroundY }} aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,107,0,0.28),transparent_30%),linear-gradient(180deg,rgba(2,8,23,0.78),rgba(2,8,23,0.96))]" />

      <div className="container-x relative z-10">
        <SectionTitle label="HÀNH TRÌNH" title="3 NGÀY 2 ĐÊM" inverse />
        <motion.div
          className="mx-auto mt-6 max-w-4xl rounded-[1.5rem] border border-white/10 bg-white/[0.08] px-5 py-4 text-center text-sm font-bold leading-7 text-white/90 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur sm:text-base"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
        >
          <p>Thời gian: 20 - 22/6/2026</p>
          <p>Địa điểm: Dream Dragon Resort, Khu du lịch Quốc tế Đồi Rồng, Phường Đồ Sơn, Thành phố Hải Phòng</p>
        </motion.div>

        <div className="mt-14 space-y-10 lg:mt-20 lg:space-y-16">
          {journeyDays.map((day, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={day.day}
                className={[
                  'grid items-center gap-7 rounded-[2rem] border border-white/[0.12] bg-white/[0.06] p-4 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8',
                  reverse ? 'lg:[&_.journey-copy]:order-1 lg:[&_.journey-media]:order-2' : ''
                ].join(' ')}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="journey-media overflow-hidden rounded-[1.6rem] bg-slate-800">
                  <motion.img
                    src={journeyImages[index]}
                    alt={day.imageAlt}
                    className="h-full min-h-[300px] w-full object-cover sm:min-h-[380px]"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.55 }}
                  />
                </div>

                <div className="journey-copy text-fit-container p-1 sm:p-3">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="fit-pill rounded-full bg-brand-yellow px-4 py-2 text-xs font-black uppercase text-slate-950">
                      {day.day}
                    </span>
                    <span className="fit-pill rounded-full border border-white/[0.15] px-4 py-2 text-xs font-black uppercase text-orange-100">
                      {day.accent}
                    </span>
                  </div>
                  <h3 className="journey-heading font-black uppercase text-white">
                    {day.title}
                  </h3>

                  <motion.ul
                    className="mt-7 space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.24 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: shouldReduceMotion ? 0 : 0.055
                        }
                      }
                    }}
                  >
                    {day.timeline.map((item) => (
                      <motion.li
                        key={`${day.day}-${item.time}-${item.activity}`}
                        className="fit-copy grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.07] p-3 text-sm leading-6 text-white/[0.82]"
                        variants={{
                          hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                      >
                        <span className="mt-0.5 grid size-8 place-items-center rounded-full bg-orange-500/20 text-brand-yellow">
                          <Clock3 className="size-4" aria-hidden="true" />
                        </span>
                        <span>
                          <strong className="font-black text-white">{item.time}:</strong> {item.activity}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
