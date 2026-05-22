import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { figmaAssets } from '../data/figmaAssets';
import diemSoChienThuatTitle from '../assets/headings/diem-so-chien-thuat.svg';
import khungTitle from '../assets/headings/khung.svg';
import { AnimatedCounter } from './AnimatedCounter';
import { DecorationLayer } from './DecorationLayer';
import { Reveal } from './Reveal';

const scoreRanks = ['Giải nhất', 'Giải nhì', 'Giải ba', 'Khuyến khích'];

const scoreRows = [
  {
    label: 'Kéo co',
    subtitle: 'Sức mạnh & chiến thuật',
    tone: 'text-brand-orange',
    scores: ['100đ', '70đ', '50đ', '30đ']
  },
  {
    label: 'Team building',
    subtitle: 'Phối hợp đồng đội',
    tone: 'text-sky-500',
    scores: ['100đ', '70đ', '50đ', '30đ']
  },
  {
    label: 'Got Talent',
    subtitle: 'Sáng tạo & nghệ thuật',
    tone: 'text-purple-700',
    scores: ['100đ', '70đ', '50đ', '30đ']
  }
];

const bonusItems = [
  {
    score: '+30đ',
    title: 'Điểm truyền thông',
    copy: 'Đội trưởng có hình ảnh ra quân trên Xuân Cầu Family đạt tương tác nổi bật.'
  },
  {
    score: '+20đ',
    title: 'Điểm kỷ luật',
    copy: 'Cộng thẳng cho đội tập trung đầy đủ quân số và đúng giờ quy định.'
  },
  {
    score: '+30đ',
    title: 'Nhận diện đội đua',
    copy: 'Phụ kiện độc lạ, bảng cổ vũ hoặc slogan chào sân chất nhất.'
  },
  {
    score: '+40đ',
    title: 'Hoa khôi check-in',
    copy: 'Ảnh tập thể tại Photobooth Gala được vote trực tiếp qua màn LED.'
  }
];

const rewardSideCards = [
  {
    icon: figmaAssets.decorations.medalSilver,
    label: '01 Giải Nhì',
    value: 20,
    suffix: ' Triệu đồng',
    alt: '01 Giải Nhì - 20 Triệu đồng'
  },
  {
    icon: figmaAssets.decorations.medalBronze,
    label: '01 Giải Ba',
    value: 15,
    suffix: ' Triệu đồng',
    alt: '01 Giải Ba - 15 Triệu đồng'
  },
  {
    icon: figmaAssets.decorations.medalGold,
    label: '03 Giải Khuyến khích',
    value: 10,
    suffix: ' Triệu đồng/Giải',
    alt: '03 Giải Khuyến khích - 10 Triệu đồng/Giải',
    medalTone: 'green'
  }
];

const cupSparkAngles = [
  -168, -148, -128, -110, -94, -78, -62, -46, -30, -14, 0, 14, 30, 46, 62, 78,
  94, 110, 128, 148, 168, 190, 210, 232, 252, 272, 292, 312, 332
];
const cupRayAngles = [-160, -128, -96, -64, -32, 0, 32, 64, 96, 128, 160, 196, 232, 268, 304];
const cupPetalDrops = [
  { x: '-86px', y: '128px', r: '-42deg' },
  { x: '-54px', y: '154px', r: '38deg' },
  { x: '-18px', y: '132px', r: '-18deg' },
  { x: '26px', y: '158px', r: '54deg' },
  { x: '62px', y: '136px', r: '-62deg' },
  { x: '92px', y: '168px', r: '24deg' }
];

function ScoreArena() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal className="score-arena mb-16 overflow-hidden rounded-[2.25rem] bg-brand-orange text-white shadow-soft sm:mb-20 lg:mb-24">
      <div className="relative isolate px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.32),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(250,204,21,0.34),transparent_26%),linear-gradient(135deg,#f97316_0%,#ff9f1c_48%,#fff176_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(circle_at_52%_100%,rgba(124,45,18,0.24),transparent_48%)]" />

        <div className="score-stack grid gap-7 md:gap-9">
          <motion.div
            className="score-wide-box score-wide-box--strategy overflow-hidden rounded-[2rem] bg-white/[0.97] p-4 text-slate-950 shadow-[0_24px_70px_rgba(124,45,18,0.22)] ring-1 ring-white/70 sm:p-6 lg:p-8"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="score-heading-row mx-auto max-w-5xl text-center">
              <img src={diemSoChienThuatTitle} alt="Điểm số chiến thuật" className="score-title-svg mx-auto h-auto w-full max-w-[720px]" loading="lazy" decoding="async" />
              <p className="mx-auto mt-4 max-w-3xl text-sm font-bold leading-6 text-slate-600 sm:text-base">
                Mỗi chặng là một cú bứt tốc. Đội dẫn đầu cần giữ nhịp, đội phía sau vẫn có đủ đường để lật ngược thế cờ.
              </p>
            </div>

            <div className="score-table-panel mt-7 rounded-[1.6rem] bg-orange-50/80 p-2.5 text-slate-950 shadow-[inset_0_0_0_1px_rgba(249,115,22,0.12)] sm:p-4 lg:mt-8">
              <div className="score-table-scroll overflow-x-auto">
                <div className="score-table-grid">
                  <div className="score-row grid grid-cols-[1.12fr_repeat(4,minmax(0,1fr))] gap-1.5 sm:gap-2.5 lg:gap-3">
                    <div className="score-cell score-cell--header">Hạng</div>
                    {scoreRanks.map((rank) => (
                      <div key={rank} className="score-cell score-cell--header">{rank}</div>
                    ))}
                  </div>
                  <div className="mt-1.5 space-y-1.5 sm:mt-2.5 sm:space-y-2.5 lg:mt-3 lg:space-y-3">
                    {scoreRows.map((row) => (
                      <div key={row.label} className="score-row grid grid-cols-[1.12fr_repeat(4,minmax(0,1fr))] gap-1.5 sm:gap-2.5 lg:gap-3">
                        <div className="score-cell score-cell--label">
                          <span className={["score-row-title font-black uppercase leading-tight", row.tone].join(' ')}>{row.label}</span>
                          <span className="mt-1 block text-[0.68rem] font-bold uppercase leading-tight text-slate-500 sm:text-xs">{row.subtitle}</span>
                        </div>
                        {row.scores.map((score, index) => (
                          <div key={`${row.label}-${score}-${index}`} className="score-cell score-cell--value">
                            <span className={row.tone}>{score}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="score-wide-box comeback-panel rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.25)] ring-1 ring-white/10 sm:p-6 lg:p-7"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="comeback-layout grid gap-5 xl:grid-cols-[0.34fr_0.66fr] xl:items-stretch">
              <div className="comeback-title-box flex h-full flex-col justify-center p-3 sm:p-4">
                <div className="comeback-clean-heading">
                  <p className="bonus-system-text">Hệ thống điểm phụ</p>
                  <img src={figmaAssets.rewardSvgs.latNguocTheCo} alt="Lật ngược thế cờ" className="comeback-title-svg-main h-auto w-full" loading="lazy" decoding="async" />
                </div>
                <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-extrabold leading-6 text-slate-900">
                  Tổng điểm = Chặng 1 + Chặng 2 + Chặng 3 + Tổng điểm phụ. Nếu bằng điểm, ưu tiên Got Talent, điểm phụ, rồi kết quả đối đầu tại Kéo co.
                </p>
              </div>
              <div className="bonus-grid grid h-full gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {bonusItems.map((item) => (
                  <div key={item.title} className="bonus-card flex min-h-[148px] min-w-0 flex-col justify-start rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur xl:min-h-[156px]">
                    <div>
                      <p className="bonus-score text-[clamp(1rem,1.35vw,1.28rem)] font-black leading-tight text-brand-yellow">{item.score}</p>
                      <h4 className="bonus-title mt-2 text-sm font-black uppercase leading-tight text-white">{item.title}</h4>
                    </div>
                    <p className="bonus-copy mt-4 text-sm font-semibold leading-6 text-white/[0.74]">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
}

export function Rewards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="rewards" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <DecorationLayer variant="light" density="rich" />
      <img src={figmaAssets.decorations.flowerLeft} alt="" className="pointer-events-none absolute bottom-[18%] right-[4%] z-0 w-28 opacity-70 blur-[0.2px] sm:w-40" loading="lazy" decoding="async" />
      <div className="container-x relative z-10">
        <ScoreArena />

        <Reveal className="reward-title-exact reward-fireworks mx-auto text-center">
          <img src={figmaAssets.rewardSvgs.coCauGiaiThuong} alt="Cơ cấu giải thưởng" className="mx-auto h-auto w-full max-w-[455px]" loading="lazy" decoding="async" />
          <img src={khungTitle} alt="Khủng" className="section-heading-svg mx-auto mt-3 h-auto w-full max-w-[320px]" loading="lazy" decoding="async" />
        </Reveal>

        <div className="reward-layout mt-10 grid gap-5 lg:grid-cols-[1fr_0.92fr] lg:items-stretch xl:gap-6">
          <motion.article
            className="reward-classic-card reward-classic-card--first reward-first-final-card relative overflow-hidden rounded-[1.8rem] bg-[#fff6d9] p-6 shadow-soft ring-1 ring-orange-100 sm:p-7 lg:p-8"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          >
            <div className="reward-first-final-glow" aria-hidden="true" />
            <h3 className="reward-rank-text reward-rank-text--first reward-first-final-title">01 Giải Nhất</h3>
            <div className="reward-first-final-body">
              <div className="reward-count-main reward-first-final-copy">
                <p className="reward-money-first">25 Triệu đồng</p>
                <p className="reward-cup-text">+ CÚP<br />VÔ ĐỊCH</p>
              </div>
              <div className="reward-first-final-trophy-wrap">
                <div className="trophy-gold-glow" aria-hidden="true" />
                <div className="cup-fireworks" aria-hidden="true">
                  <span className="cup-fireworks__ring cup-fireworks__ring--one" />
                  <span className="cup-fireworks__ring cup-fireworks__ring--two" />
                  {cupRayAngles.map((angle, index) => (
                    <span
                      key={`ray-${angle}-${index}`}
                      className="cup-fireworks__ray"
                      style={{
                        '--ray-angle': `${angle}deg`,
                        '--ray-delay': `${index * 0.045}s`
                      } as CSSProperties}
                    />
                  ))}
                  {cupSparkAngles.map((angle, index) => (
                    <span
                      key={`spark-${angle}-${index}`}
                      className="cup-fireworks__spark"
                      style={{
                        '--spark-angle': `${angle}deg`,
                        '--spark-distance': `${96 + (index % 7) * 14}px`,
                        '--spark-delay': `${index * 0.045}s`
                      } as CSSProperties}
                    />
                  ))}
                  {cupPetalDrops.map((petal, index) => (
                    <span
                      key={`petal-${petal.x}-${index}`}
                      className="cup-fireworks__petal"
                      style={{
                        '--petal-x': petal.x,
                        '--petal-y': petal.y,
                        '--petal-rotate': petal.r,
                        '--petal-delay': `${0.18 + index * 0.13}s`
                      } as CSSProperties}
                    />
                  ))}
                </div>
                <img
                  src={figmaAssets.decorations.trophy}
                  alt="Cúp vô địch Future Makers"
                  className="champion-trophy-new reward-first-final-trophy"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:gap-5">
            {rewardSideCards.map((card, index) => (
              <motion.article
                key={card.alt}
                className="reward-classic-card reward-side-card relative flex min-h-[142px] items-center gap-4 overflow-hidden rounded-[1.65rem] bg-[#fff6d9] p-4 shadow-soft ring-1 ring-orange-100 sm:min-h-[160px] sm:gap-5 sm:p-5 lg:min-h-[132px] xl:min-h-[145px]"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : index * 0.06 }}
              >
                <img src={card.icon} alt="" className={['reward-medal-icon relative z-10 shrink-0 object-contain drop-shadow-lg', card.medalTone === 'green' ? 'reward-medal-icon--green' : ''].join(' ')} loading="lazy" decoding="async" />
                <div className="relative z-10 min-w-0 flex-1">
                  <h3 className="reward-rank-text reward-rank-text--side">{card.label}</h3>
                  <p className="reward-count-side mt-2 text-brand-deep">
                    <AnimatedCounter value={card.value} suffix={card.suffix} duration={1100 + index * 120} />
                  </p>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.78),transparent_30%),linear-gradient(100deg,rgba(255,255,255,0.36),rgba(250,204,21,0.16))]" />
              </motion.article>
            ))}
          </div>
        </div>

        <Reveal className="launch-benefit mt-6 rounded-[1.4rem] bg-white/[0.92] p-4 shadow-soft backdrop-blur sm:p-5">
          <div className="launch-benefit-row flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-2xl shadow-[0_12px_28px_rgba(249,115,22,0.12)] ring-1 ring-orange-100" aria-hidden="true">🎁</div>
            <p className="launch-benefit-copy text-sm font-semibold leading-6 text-slate-900 sm:text-base">
              <span className="text-brand-orange">Đặc quyền bệ phóng:</span> 5 triệu đồng làm kinh phí ban đầu cho tiết mục Xuân Cầu's Got Talent
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
