import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1400,
  className = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);

  const formatter = useMemo(() => new Intl.NumberFormat('vi-VN'), []);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter.format(displayValue)}
      {suffix}
    </span>
  );
}
