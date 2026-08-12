import { BatteryCharging, Bot, Cpu, MapPin } from "lucide-react";
import { FeatureItemEntity } from "../../models";
import { IFeatureRepository } from "../IFeatureRepository";
import { FeatureItem as IFeatureItem } from "@/types";

const RAW_FEATURES: IFeatureItem[] = [
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

export class InMemoryFeatureRepository implements IFeatureRepository {
  private readonly features: FeatureItemEntity[];

  constructor() {
    this.features = RAW_FEATURES.map((item) => new FeatureItemEntity(item));
  }

  public findAll(): FeatureItemEntity[] {
    return [...this.features];
  }
}
