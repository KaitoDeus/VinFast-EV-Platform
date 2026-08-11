import { Cpu, BatteryCharging, Bot, MapPin } from "lucide-react";
import { FeatureItem } from "@/types";

const FEATURES: FeatureItem[] = [
  {
    icon: BatteryCharging,
    title: "Pin CATL Thế Hệ Mới",
    desc: "Công nghệ pin LFP & NMC tiên tiến từ CATL cung cấp mật độ năng lượng cao, hỗ trợ sạc siêu nhanh từ 10% đến 80% chỉ trong 24 phút.",
  },
  {
    icon: Bot,
    title: "Trợ Lý Ảo AI VinFast",
    desc: "Hệ thống tương tác giọng nói Tiếng Việt đa vùng miền thông minh, tự động tùy chỉnh điều hòa, dẫn đường và giải trí cá nhân hóa.",
  },
  {
    icon: Cpu,
    title: "Trợ Lái Thông Minh ADAS",
    desc: "Tích hợp tính năng hỗ trợ lái nâng cao: Tự động giữ làn, ga tự động thích ứng, phanh khẩn cấp và đỗ xe thông minh rảnh tay.",
  },
  {
    icon: MapPin,
    title: "Mạng Lưới Trạm Sạc V-GREEN",
    desc: "Hệ thống trạm sạc điện phủ rộng khắp 63 tỉnh thành Việt Nam và đang mở rộng toàn cầu, đảm bảo hành trình thông suốt.",
  },
];

export class FeatureService {
  public static getAllFeatures(): FeatureItem[] {
    return FEATURES;
  }
}
