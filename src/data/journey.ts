export type TimelineItem = {
  time: string;
  activity: string;
};

export type JourneyDay = {
  day: string;
  title: string;
  accent: string;
  visual: 'departure' | 'beach' | 'city';
  imageAlt: string;
  timeline: TimelineItem[];
};

export const journeyDays: JourneyDay[] = [
  {
    day: 'Day 1',
    title: 'HỘI QUÂN & KHỞI ĐỘNG ĐƯỜNG ĐUA',
    accent: 'Khởi động',
    visual: 'departure',
    imageAlt: 'Minh họa đoàn Future Makers hội quân và di chuyển đến Dragon Dream Resort',
    timeline: [
      { time: '09:30 - 10:00', activity: 'Tập trung tại VCCI Tower.' },
      { time: '10:00 - 12:00', activity: 'Di chuyển đến Hải Phòng.' },
      { time: '12:00 - 13:30', activity: 'Nạp năng lượng - Ăn trưa tại nhà hàng Con Sò.' },
      { time: '13:30 - 14:00', activity: 'Di chuyển từ nhà hàng Con Sò về Dragon Dream Resort.' },
      { time: '14:00 - 15:30', activity: 'Check-in nhận phòng & nghỉ ngơi.' },
      { time: '15:30 - 16:30', activity: 'Di chuyển đến Lạch Huyện.' },
      {
        time: '16:30 - 18:00',
        activity: 'CHẶNG 1 BÙNG NỔ: Giới thiệu dự án LHF & Thi Kéo co đồng đội.'
      },
      { time: '18:00 - 19:00', activity: 'Di chuyển từ LHF về lại resort.' },
      { time: '19:00 - 21:00', activity: 'Ăn tối thân mật.' }
    ]
  },
  {
    day: 'Day 2',
    title: 'TĂNG TỐC BỨT PHÁ & ĐÊM GALA TOÀN NĂNG',
    accent: 'Bứt phá',
    visual: 'beach',
    imageAlt: 'Minh họa teambuilding bãi biển và gala dinner của đội Future Makers',
    timeline: [
      { time: '07:00 - 08:00', activity: 'Ăn sáng năng lượng tại resort.' },
      { time: '08:00 - 10:00', activity: 'Giao lưu Pickleball thời thượng.' },
      { time: '12:00 - 13:30', activity: 'Nạp năng lượng - Ăn trưa tại nhà hàng Con Sò.' },
      { time: '15:30 - 17:00', activity: 'CHẶNG 2 BÙNG NỔ: Chơi Teambuilding bãi biển.' },
      { time: '17:30 - 18:30', activity: 'Giao lưu bóng đá sân cỏ.' },
      {
        time: '19:30 - 22:00',
        activity: "CHẶNG 3 QUYẾT ĐỊNH: Đại tiệc Gala Dinner & Cuộc thi Xuân Cầu's Got Talent."
      }
    ]
  },
  {
    day: 'Day 3',
    title: 'TẬN HƯỞNG & TRỞ VỀ',
    accent: 'Tận hưởng',
    visual: 'city',
    imageAlt: 'Minh họa ngày tự do trải nghiệm tiện ích và trở về Hà Nội',
    timeline: [
      { time: '07:00 - 09:00', activity: 'Ăn sáng & tự do trải nghiệm tiện ích.' },
      { time: '09:00 - 10:00', activity: 'Thủ tục Check-out.' },
      { time: '10:00 - 11:00', activity: 'Di chuyển về Trung tâm Thành phố Hải Phòng.' },
      { time: '12:00 - 13:30', activity: 'Ăn trưa thưởng thức Ẩm thực tại TP Hải Phòng.' },
      { time: '13:30 - 15:30', activity: 'Di chuyển về Hà Nội.' },
      { time: '16:00', activity: 'Về đến VCCI Tower - Kết thúc hành trình ý nghĩa.' }
    ]
  }
];
