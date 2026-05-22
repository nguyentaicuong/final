export type RewardTone = 'gold' | 'silver' | 'bronze';

export type Reward = {
  rank: string;
  title: string;
  amount: number;
  suffix: string;
  tone: RewardTone;
  medal: RewardTone;
};

export const rewards: Reward[] = [
  {
    rank: '01 Giải Nhất',
    title: 'Nhà vô địch đường đua',
    amount: 25,
    suffix: 'Tr VND',
    tone: 'gold',
    medal: 'gold'
  },
  {
    rank: '01 Giải Nhì',
    title: 'Á quân bứt phá',
    amount: 20,
    suffix: 'Tr VND',
    tone: 'silver',
    medal: 'silver'
  },
  {
    rank: '01 Giải Ba',
    title: 'Bản lĩnh đường đua',
    amount: 15,
    suffix: 'Tr VND',
    tone: 'bronze',
    medal: 'bronze'
  }
];
