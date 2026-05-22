import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, UsersRound } from 'lucide-react';
import { figmaAssets } from '../data/figmaAssets';
import { DecorationLayer } from './DecorationLayer';

type HeroProps = {
  onViewTeams: () => void;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Hero({ onViewTeams }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.11
      }
    }
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.68, ease: smoothEase }
    }
  };

  return (
    <section className="hero-gradient relative min-h-[100svh] overflow-hidden pt-[4.4rem] text-white">
      <DecorationLayer variant="hero" density="rich" />
      <div className="figma-hero-container relative z-10 grid min-h-[calc(100svh-4.4rem)] items-center gap-10 pb-14 lg:grid-cols-[0.86fr_1.14fr] lg:pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={itemVariants} className="mb-5 max-w-[min(405px,100%)]">
            <img src={figmaAssets.hero.eyebrow} alt="Xin chào những" className="h-auto w-full" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-main-title max-w-[min(640px,100%)] text-[clamp(2.9rem,7.15vw,6.35rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white drop-shadow-[0_14px_0_rgba(180,69,0,0.10)]">
            Nhà Kiến tạo
            <span className="block">tương lai</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-7 max-w-[608px]">
            <img
              src={figmaAssets.hero.copy}
              alt='Tương lai của Xuân Cầu không được quyết định bởi một vài cá nhân, mà được "kiến tạo" bởi chính những con người đang có mặt ở đây. Mỗi phòng ban, mỗi cá nhân là một bánh răng quan trọng.'
              className="hidden h-auto w-full sm:block"
            />
            <p className="text-base font-medium leading-8 text-slate-950/80 sm:hidden">
              Tương lai của Xuân Cầu không được quyết định bởi một vài cá nhân, mà được "kiến tạo" bởi chính những con
              người đang có mặt ở đây. Mỗi phòng ban, mỗi cá nhân là một bánh răng quan trọng trong cỗ máy tiến về phía
              trước.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-5 sm:flex-row">
            <motion.button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-800 shadow-orange transition hover:bg-yellow-100 focus:outline-none focus:ring-4 focus:ring-white/[0.35]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              onClick={onViewTeams}
            >
              <UsersRound className="size-4 text-brand-orange" aria-hidden="true" />
              Xem đội của bạn
              <ArrowRight className="size-4 text-brand-orange" aria-hidden="true" />
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap gap-3 text-xs font-black uppercase text-white"
          >
            {['6 đội tranh tài', '3 chặng bứt phá', '1 cúp vô địch'].map((item) => (
              <span key={item} className="challenge-chip">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-graphic-shell hero-graphic-shell--energized relative mx-auto w-full max-w-[900px] pb-6 lg:pb-0"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.86, rotate: -3 }}
          animate={shouldReduceMotion ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 1, scale: [1, 1.025, 1], rotate: [0, 0.8, 0] }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-future-glow"
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { opacity: [0.42, 0.78, 0.42], scale: [0.96, 1.06, 0.96] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={figmaAssets.hero.graphic}
            alt=""
            className="hero-original-graphic hero-original-graphic--sharp h-auto w-full"
            animate={shouldReduceMotion ? undefined : { y: [0, -16, 0], rotate: [-0.6, 1.2, -0.6] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
