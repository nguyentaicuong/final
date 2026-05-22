import { motion, useReducedMotion } from 'framer-motion';
import { figmaAssets } from '../data/figmaAssets';

type DecorationLayerProps = {
  variant?: 'hero' | 'light' | 'dark' | 'ocean';
  density?: 'normal' | 'rich';
};

function floatingTransition(duration: number, delay = 0) {
  return {
    duration,
    delay,
    repeat: Infinity,
    ease: 'easeInOut' as const
  };
}

const confettiSpots = [
  'left-[6%] top-[10%] w-[min(520px,50vw)] rotate-[-8deg] opacity-55',
  'right-[4%] top-[22%] w-[min(560px,54vw)] rotate-[11deg] opacity-50',
  'left-[34%] top-[2%] w-[min(680px,62vw)] rotate-[2deg] opacity-45',
  'right-[18%] bottom-[10%] w-[min(460px,48vw)] rotate-[-12deg] opacity-40'
];

export function DecorationLayer({ variant = 'light', density = 'normal' }: DecorationLayerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === 'hero') {
    return null;
  }

  const isDark = variant === 'dark';
  const rich = density === 'rich';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {confettiSpots.slice(0, rich ? 4 : 2).map((spot, index) => (
        <motion.img
          key={spot}
          src={figmaAssets.decorations.confetti}
          alt=""
          className={['asset-decoration object-contain', spot, isDark ? 'opacity-20' : ''].join(' ')}
          animate={shouldReduceMotion ? undefined : { y: [0, index % 2 ? 10 : -12, 0], x: [0, index % 2 ? -8 : 8, 0] }}
          transition={floatingTransition(7 + index, index * 0.25)}
        />
      ))}
      <motion.img
        src={figmaAssets.hero.cloud}
        alt=""
        className={['asset-decoration left-[4%] top-[12%] w-[min(250px,32vw)] object-contain', isDark ? 'opacity-15' : 'opacity-45'].join(' ')}
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], x: [0, 8, 0] }}
        transition={floatingTransition(7)}
      />
      <motion.img
        src={figmaAssets.hero.cloud}
        alt=""
        className={['asset-decoration right-[4%] top-[18%] w-[min(300px,36vw)] object-contain', isDark ? 'opacity-10' : 'opacity-35'].join(' ')}
        animate={shouldReduceMotion ? undefined : { y: [0, 12, 0], x: [0, -10, 0] }}
        transition={floatingTransition(8, 0.4)}
      />
      {variant === 'ocean' ? <span className="ocean-glow left-[18%] top-[28%]" /> : null}
    </div>
  );
}
