export type Experience = {
  title: string;
  description: string;
  visual: 'pool' | 'shore' | 'night' | 'bar' | 'gym';
  featured?: boolean;
  alt: string;
};

export const experiences: Experience[] = [
  {
    title: 'Hệ thống bể bơi',
    description: 'Hệ thống bể bơi ngoài trời & bể bơi trong nhà cực chill.',
    visual: 'pool',
    featured: true,
    alt: 'Minh họa hệ thống bể bơi tại Dragon Dream Resort'
  },
  {
    title: 'Bờ biển nhân tạo',
    description: 'Không gian check-in sang chảnh bên bờ biển nhân tạo.',
    visual: 'shore',
    alt: 'Minh họa bờ biển nhân tạo tại Dragon Ocean Đồ Sơn'
  },
  {
    title: 'Toàn cảnh',
    description: 'Toàn cảnh Dragon Dream Resort rực rỡ về đêm.',
    visual: 'night',
    alt: 'Minh họa toàn cảnh Dragon Dream Resort về đêm'
  },
  {
    title: 'Milky Way Bar',
    description: 'Trải nghiệm Milky Way Bar trên tầng thượng ngắm trọn vẹn đại ngàn Đồ Sơn.',
    visual: 'bar',
    featured: true,
    alt: 'Minh họa Milky Way Bar trên tầng thượng'
  },
  {
    title: 'Khu Gym',
    description: 'Khu Gym hiện đại phục vụ các chiến binh giữ dáng.',
    visual: 'gym',
    alt: 'Minh họa khu gym hiện đại tại resort'
  }
];
