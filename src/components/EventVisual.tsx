import { motion } from 'framer-motion';

type EventVisualProps = {
  variant:
    | 'departure'
    | 'beach'
    | 'city'
    | 'tug'
    | 'team'
    | 'talent'
    | 'pool'
    | 'shore'
    | 'night'
    | 'bar'
    | 'gym';
  alt: string;
  className?: string;
};

const labels: Record<EventVisualProps['variant'], string> = {
  departure: 'Hội quân',
  beach: 'Bãi biển',
  city: 'Trở về',
  tug: 'Kéo co',
  team: 'Teamwork',
  talent: 'Gala',
  pool: 'Pool',
  shore: 'Beach',
  night: 'Night',
  bar: 'Rooftop',
  gym: 'Gym'
};

export function EventVisual({ variant, alt, className = '' }: EventVisualProps) {
  return (
    <motion.figure
      className={['event-visual', `event-visual--${variant}`, className].join(' ')}
      role="img"
      aria-label={alt}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.35 }}
    >
      <div className="event-visual__sky" />
      <div className="event-visual__sun" />
      <div className="event-visual__mountain event-visual__mountain--back" />
      <div className="event-visual__mountain event-visual__mountain--front" />
      <div className="event-visual__water" />
      <div className="event-visual__track" />
      <div className="event-visual__stage" />
      <div className="event-visual__palm event-visual__palm--left" />
      <div className="event-visual__palm event-visual__palm--right" />
      <div className="event-visual__spark event-visual__spark--one" />
      <div className="event-visual__spark event-visual__spark--two" />
      <figcaption className="event-visual__label">{labels[variant]}</figcaption>
    </motion.figure>
  );
}
