import { motion, useReducedMotion } from 'framer-motion';
import duongDuaTitle from '../assets/headings/duong-dua.svg';
import baNgayHaiDemTitle from '../assets/headings/ba-ngay-hai-dem.svg';
import baChangDuaTitle from '../assets/headings/ba-chang-dua.svg';
import dangTraiNghiemTitle from '../assets/headings/dang-trai-nghiem.svg';
import khungTitle from '../assets/headings/khung.svg';
import hanhTrinhLabel from '../assets/headings/hanh-trinh-label.svg';

const labelAssets: Record<string, { src: string; maxWidth: string }> = {
  'HÀNH TRÌNH': { src: hanhTrinhLabel, maxWidth: '266px' }
};

const headingAssets: Record<string, { src: string; maxWidth: string }> = {
  'ĐƯỜNG ĐUA': { src: duongDuaTitle, maxWidth: '654px' },
  '3 NGÀY 2 ĐÊM': { src: baNgayHaiDemTitle, maxWidth: '760px' },
  '03 CHẶNG ĐUA': { src: baChangDuaTitle, maxWidth: '799px' },
  'ĐÁNG TRẢI NGHIỆM': { src: dangTraiNghiemTitle, maxWidth: '878px' },
  'KHỦNG': { src: khungTitle, maxWidth: '480px' }
};

type SectionTitleProps = {
  label?: string;
  title: string;
  align?: 'left' | 'center';
  inverse?: boolean;
  className?: string;
};

export function SectionTitle({
  label,
  title,
  align = 'center',
  inverse = false,
  className = ''
}: SectionTitleProps) {
  const shouldReduceMotion = useReducedMotion();
  const headingAsset = headingAssets[title];
  const labelAsset = label ? labelAssets[label] : undefined;

  return (
    <div
      className={[
        'section-title-box text-fit-container relative z-10',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      ].join(' ')}
    >
      {label ? (
        labelAsset ? (
          <motion.img
            src={labelAsset.src}
            alt={label}
            className={['section-kicker-svg mb-4 h-auto w-full', align === 'center' ? 'mx-auto' : ''].join(' ')}
            style={{ maxWidth: labelAsset.maxWidth }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.42 }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <motion.p
            className={[
              'section-kicker mb-4 inline-flex items-center rounded-full border px-4 py-2 font-black uppercase',
              inverse ? 'border-white/20 bg-white/10 text-yellow-100' : 'border-orange-200 bg-white/75 text-brand-deep'
            ].join(' ')}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.42 }}
          >
            {label}
          </motion.p>
        )
      ) : null}
      {headingAsset ? (
        <motion.img
          src={headingAsset.src}
          alt={title}
          className={[
            'section-heading-svg',
            align === 'center' ? 'mx-auto' : ''
          ].join(' ')}
          style={{ maxWidth: headingAsset.maxWidth }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <motion.h2
          className={[
            'section-heading font-black uppercase',
            inverse ? 'text-yellow-100' : 'text-brand-deep',
            align === 'center' ? 'mx-auto' : ''
          ].join(' ')}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
      )}
    </div>
  );
}
