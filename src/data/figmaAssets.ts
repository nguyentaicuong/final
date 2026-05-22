const publicAsset = (fileName: string) => `${import.meta.env.BASE_URL}figma/${fileName}`;

export const figmaAssets = {
  logo: publicAsset('logo.webp'),
  hero: {
    eyebrow: publicAsset('hero-eyebrow.webp'),
    title: publicAsset('hero-title.webp'),
    copy: publicAsset('hero-copy.webp'),
    cloud: publicAsset('cloud.webp'),
    graphic: publicAsset('hero-future-makers.webp')
  },
  decorations: {
    confetti: publicAsset('new-svg/confetti-wide.svg'),
    balloons: publicAsset('balloons.webp'),
    medalGold: publicAsset('new-svg/medal-gold.svg'),
    medalSilver: publicAsset('new-svg/medal-silver.svg'),
    medalBronze: publicAsset('new-svg/medal-bronze.svg'),
    trophy: publicAsset('trophy.webp'),
    palmTree: publicAsset('new-svg/palm-tree.svg'),
    flowerLeft: publicAsset('new-svg/flower-left.svg'),
    flowerRight: publicAsset('new-svg/flower-right.svg'),
    giftIcon: publicAsset('new-svg/gift-icon.svg')
  },
  journey: {
    dayOne: publicAsset('journey-day-1.webp'),
    dayTwo: publicAsset('journey-day-2.webp'),
    dayThree: publicAsset('journey-day-3.webp')
  },
  stages: {
    tug: publicAsset('stage-tug.webp'),
    team: publicAsset('stage-team.webp'),
    talent: publicAsset('stage-talent.webp')
  },
  experience: {
    pool: publicAsset('experience-pool.webp'),
    shore: publicAsset('experience-shore.webp'),
    night: publicAsset('experience-night.webp'),
    bar: publicAsset('experience-bar.webp'),
    gym: publicAsset('experience-gym.webp')
  },
  cta: {
    title: publicAsset('cta-title.webp'),
    footerTexture: publicAsset('footer-texture.webp')
  },
  rewardSvgs: {
    cardFirst: publicAsset('new-svg/reward-card-first.svg'),
    cardSecond: publicAsset('new-svg/reward-card-second.svg'),
    cardThird: publicAsset('new-svg/reward-card-third.svg'),
    cardEncourage: publicAsset('new-svg/reward-card-encourage.svg'),
    launchBenefitText: publicAsset('new-svg/launch-benefit-text.svg'),
    rankFirst: publicAsset('new-svg/reward-rank-first.svg'),
    rankSecond: publicAsset('new-svg/reward-rank-second.svg'),
    rankThird: publicAsset('new-svg/reward-rank-third.svg'),
    rankEncourage: publicAsset('new-svg/reward-rank-encourage.svg'),
    amountFirst: publicAsset('new-svg/reward-amount-first.svg'),
    amountSecond: publicAsset('new-svg/reward-amount-second.svg'),
    amountThird: publicAsset('new-svg/reward-amount-third.svg'),
    amountEncourage: publicAsset('new-svg/reward-amount-encourage.svg'),
    coCauGiaiThuong: publicAsset('new-svg/co-cau-giai-thuong.svg'),
    bangDiemChinh: publicAsset('new-svg/bang-diem-chinh.svg'),
    heThongDiemPhu: publicAsset('new-svg/he-thong-diem-phu.svg'),
    latNguocTheCo: publicAsset('new-svg/lat-nguoc-the-co.svg')
  }
};

export type FigmaAssets = typeof figmaAssets;
