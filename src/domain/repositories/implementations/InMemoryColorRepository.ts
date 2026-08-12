import { ColorOptionEntity } from "../../models";
import { IColorRepository } from "../IColorRepository";
import { ColorOption as IColorOption } from "@/types";

const RAW_COLOR_OPTIONS: IColorOption[] = [
  { id: "blue", name: "Future Blue", hex: "#1464F4", desc: "Xanh Tương Lai - Biểu tượng xe điện thông minh" },
  { id: "white", name: "Brahminy White", hex: "#F1F5F9", desc: "Trắng Tinh Khôi - Tinh tế và sang trọng" },
  { id: "red", name: "Crimson Red", hex: "#E53935", desc: "Đỏ Quyến Rũ - Năng động và cá tính" },
  { id: "orange", name: "Sunset Orange", hex: "#F97316", desc: "Cam Bình Minh - Thể thao bứt phá" },
  { id: "ocean", name: "Deep Ocean", hex: "#0F766E", desc: "Xanh Rêu Đậm - Hiện đại và đẳng cấp" },
  { id: "grey", name: "Neptune Grey", hex: "#64748B", desc: "Ghi Bạc Metallic - Đẳng cấp bền vững" },
];

export class InMemoryColorRepository implements IColorRepository {
  private readonly colors: ColorOptionEntity[];

  constructor() {
    this.colors = RAW_COLOR_OPTIONS.map((item) => new ColorOptionEntity(item));
  }

  public findAll(): ColorOptionEntity[] {
    return [...this.colors];
  }

  public findById(id: string): ColorOptionEntity | undefined {
    return this.colors.find((color) => color.id === id);
  }

  public getDefaultColor(): ColorOptionEntity {
    return this.colors[0];
  }
}
