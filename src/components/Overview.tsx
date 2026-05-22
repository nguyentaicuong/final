import { motion, useReducedMotion } from 'framer-motion';
import { MapPinned, Network, Trophy, UsersRound } from 'lucide-react';
import { DecorationLayer } from './DecorationLayer';
import { SectionTitle } from './SectionTitle';

const overviewItems = [
  {
    Icon: UsersRound,
    label: 'Đối tượng',
    content: 'Toàn bộ CBNV Xuân Cầu làm việc tại VCCI và Lạch Huyện.'
  },
  {
    Icon: Network,
    label: 'Quy mô',
    content: 'Chia thành 6 đội đua tinh nhuệ. Mỗi đội có 01 đội trưởng điều phối chung.'
  },
  {
    Icon: Trophy,
    label: 'Mục tiêu tối thượng',
    content:
      'Tích lũy điểm số qua 3 chặng đua chính và hệ thống thử thách phụ để chạm tay vào chiếc cúp danh giá "FUTURE MAKERS 26 CHAMPION".'
  },
  {
    Icon: MapPinned,
    label: 'Tọa độ bùng nổ',
    content:
      'Dragon Ocean Đồ Sơn - Nơi nắng có thể làm cháy da nhưng không thể làm cháy tinh thần chiến đấu của người Xuân Cầu!'
  }
];

export function Overview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="overview" className="relative overflow-hidden bg-brand-cream py-20 sm:py-24 lg:py-28">
      <DecorationLayer variant="light" density="normal" />
      <div className="container-x relative z-10">
        <SectionTitle label="TỔNG QUAN" title="ĐƯỜNG ĐUA" className="design-section-title" />

        <motion.div
          className="connected-card-grid mt-12 grid gap-5 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12
              }
            }
          }}
        >
          {overviewItems.map((item) => {
            const Icon = item.Icon;
            return (
              <motion.article
                key={item.label}
                className="connected-card text-fit-container group flex min-h-[270px] flex-col rounded-[1.75rem] border border-white/70 bg-white/[0.88] p-6 pb-8 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-white"
                variants={{
                  hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-orange-100 text-brand-deep shadow-[0_12px_26px_rgba(249,115,22,0.14)] ring-1 ring-orange-200/80 transition group-hover:scale-105 group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="size-8 stroke-[2.75]" aria-hidden="true" />
                </div>
                <h3 className="card-heading font-black uppercase text-brand-deep">
                  {item.label}
                </h3>
                <p className="fit-copy mt-3 text-sm font-semibold leading-7 text-slate-600">{item.content}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
