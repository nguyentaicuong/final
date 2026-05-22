export type RaceStage = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  criteria?: string;
  visual: 'tug' | 'team' | 'talent';
};

export const raceStages: RaceStage[] = [
  {
    id: 1,
    title: 'CHẶNG 1: KÉO CO ĐỒNG ĐỘI',
    subtitle: 'Sức mạnh & Chiến thuật',
    description:
      'Kéo co căng như kéo deadline cuối tháng! Nơi sức mạnh cơ bắp hòa quyện cùng chiến thuật bọc lót đồng đội.',
    format:
      'Chia bảng thi đấu vòng tròn. Hai đội đứng đầu mỗi bảng sẽ bước vào trận Chung kết nảy lửa để tìm ra nhà vô địch.',
    visual: 'tug'
  },
  {
    id: 2,
    title: 'CHẶNG 2: TEAM BUILDING BÃI BIỂN',
    subtitle: 'Sự phối hợp',
    description:
      'Chạy sung hơn cả người yêu cũ ngoảnh mặt! Chuỗi trò chơi vận động bãi biển được thiết kế độc quyền nhằm kích hoạt tư duy gắn kết và phá vỡ mọi khoảng cách.',
    format: '6 đội thi đấu đồng thời theo kịch bản kịch tính từ BTC.',
    visual: 'team'
  },
  {
    id: 3,
    title: "CHẶNG 3: XUÂN CẦU'S GOT TALENT",
    subtitle: 'Sáng tạo & Nghệ thuật',
    description:
      "Sân khấu hoành tráng đêm Gala - Nơi những 'ca sĩ phòng tắm', 'diễn viên họp Zoom' và 'vũ công công sở' chính thức bước ra ánh sáng và tỏa sáng!",
    format: 'Mỗi đội trình diễn 01 tiết mục nghệ thuật tự chọn.',
    criteria: 'Nội dung 40%, Kỹ năng 30%, Trang phục 20%, Cổ động 10%.',
    visual: 'talent'
  }
];
