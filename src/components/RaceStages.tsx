import { BadgeCheck, Dumbbell, Mic2, Waves } from 'lucide-react';
import { figmaAssets } from '../data/figmaAssets';
import { raceStages } from '../data/stages';
import { DecorationLayer } from './DecorationLayer';
import { SectionTitle } from './SectionTitle';

const stageIcons = {
  tug: Dumbbell,
  team: Waves,
  talent: Mic2
};

const stageImages = {
  tug: figmaAssets.stages.tug,
  team: figmaAssets.stages.team,
  talent: figmaAssets.stages.talent
};

export function RaceStages() {
  return (
    <section id="stages" className="stages-section relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <DecorationLayer variant="light" density="rich" />
      <div className="container-x relative z-10">
        <SectionTitle title="03 CHẶNG ĐUA" className="stage-title-no-box" />

        <div className="stage-sequence mt-12 space-y-8 pl-0 sm:mt-14 sm:space-y-9 lg:space-y-10">
          {raceStages.map((stage, index) => {
            const Icon = stageIcons[stage.visual];
            const reverse = index % 2 === 1;

            return (
              <article
                key={stage.title}
                className="stage-card stage-card-static grid overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fffaf3] shadow-soft lg:grid-cols-2"
              >
                <div className={['stage-visual-panel min-h-[300px] overflow-hidden', reverse ? 'lg:order-2' : ''].join(' ')}>
                  <img
                    src={stageImages[stage.visual]}
                    alt={`Minh họa ${stage.title}`}
                    className="stage-visual-image relative z-10 h-full min-h-[300px] w-full object-contain p-5 sm:p-7 lg:p-8"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="stage-copy-panel text-fit-container flex flex-col justify-center p-6 sm:p-8 lg:p-9 xl:p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-orange-100 text-brand-deep">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="fit-pill rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase text-amber-700">
                      {stage.subtitle}
                    </span>
                  </div>
                  <h3 className="stage-heading font-black uppercase text-brand-orange">
                    {stage.title}
                  </h3>
                  <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
                    {[stage.description, `Thể thức: ${stage.format}`, stage.criteria ? `Tiêu chí chấm điểm: ${stage.criteria}` : '']
                      .filter(Boolean)
                      .map((copy) => (
                        <p
                          key={copy}
                          className="fit-copy flex gap-3 text-[clamp(0.95rem,1.25vw,1.08rem)] font-semibold leading-7 text-slate-600 sm:leading-8"
                        >
                          <BadgeCheck className="mt-1 size-5 shrink-0 text-brand-deep" aria-hidden="true" />
                          <span>{copy}</span>
                        </p>
                      ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
