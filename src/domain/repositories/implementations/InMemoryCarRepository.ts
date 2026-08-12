import { CarModelEntity } from "../../models";
import { ICarRepository } from "../ICarRepository";
import { CarModelSpec } from "@/types";

const RAW_CAR_MODELS: CarModelSpec[] = [
  {
    id: "vf5",
    name: "VinFast VF 5 Plus",
    segment: "A-SUV Đô Thị",
    power: "100 kW (134 hp)",
    torque: "135 Nm",
    range: "326.4 km (NEDC)",
    chargeTime: "30 phút (10-70%)",
    seats: "5 Chỗ",
    price: "Từ 458.000.000 VNĐ",
    highlights: ["Thiết kế thời trang", "Tối ưu di chuyển đô thị", "Chi phí vận hành tiết kiệm"],
  },
  {
    id: "vf6",
    name: "VinFast VF 6",
    segment: "B-SUV Năng Động",
    power: "150 kW (201 hp)",
    torque: "310 Nm",
    range: "399 km (WLTP)",
    chargeTime: "25 phút (10-80%)",
    seats: "5 Chỗ",
    price: "Từ 675.000.000 VNĐ",
    highlights: ["Trợ lý ảo AI Tiếng Việt", "Hệ thống treo đa điểm", "Nội thất cao cấp"],
  },
  {
    id: "vf7",
    name: "VinFast VF 7",
    segment: "C-SUV Thể Thao",
    power: "260 kW (349 hp)",
    torque: "500 Nm",
    range: "431 km (WLTP)",
    chargeTime: "24 phút (10-80%)",
    seats: "5 Chỗ",
    price: "Từ 850.000.000 VNĐ",
    highlights: ["Thiết kế phi thuyền Vũ Trụ", "Tăng tốc 0-100 km/h trong 5.8s", "Dẫn động 2 cầu AWD"],
  },
  {
    id: "vf8",
    name: "VinFast VF 8",
    segment: "D-SUV Đang Đẳng Cấp",
    power: "300 kW (402 hp)",
    torque: "620 Nm",
    range: "471 km (WLTP)",
    chargeTime: "24 phút (10-80%)",
    seats: "5 Chỗ",
    price: "Từ 1.090.000.000 VNĐ",
    highlights: ["ADAS Cấp độ 2+", "Màn hình HUD kính lái", "Ghế thông gió & sưởi"],
  },
  {
    id: "vf9",
    name: "VinFast VF 9",
    segment: "E-SUV Hạng Sang Full-Size",
    power: "300 kW (402 hp)",
    torque: "620 Nm",
    range: "602 km (WLTP)",
    chargeTime: "26 phút (10-80%)",
    seats: "6 - 7 Chỗ",
    price: "Từ 1.980.000.000 VNĐ",
    highlights: ["Ghế cơ trưởng massage 8 điểm", "Trần kính toàn cảnh Panoramic", "Chủ bài flagship cao cấp nhất"],
  },
];

export class InMemoryCarRepository implements ICarRepository {
  private readonly models: CarModelEntity[];

  constructor() {
    this.models = RAW_CAR_MODELS.map((item) => new CarModelEntity(item));
  }

  public findAll(): CarModelEntity[] {
    return [...this.models];
  }

  public findById(id: string): CarModelEntity | undefined {
    return this.models.find((model) => model.id === id);
  }

  public findBySegment(segment: string): CarModelEntity[] {
    return this.models.filter((model) =>
      model.segment.toLowerCase().includes(segment.toLowerCase())
    );
  }

  public getDefaultModel(): CarModelEntity {
    return this.models[3]; // Default VF 8
  }
}
