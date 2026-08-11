import { ColorOption } from "@/types";

const COLOR_OPTIONS: ColorOption[] = [
  { id: "blue", name: "Future Blue", hex: "#1464F4", desc: "Xanh Tương Lai - Biểu tượng xe điện thông minh" },
  { id: "white", name: "Brahminy White", hex: "#F1F5F9", desc: "Trắng Tinh Khôi - Tinh tế và sang trọng" },
  { id: "red", name: "Crimson Red", hex: "#E53935", desc: "Đỏ Quyến Rũ - Năng động và cá tính" },
  { id: "orange", name: "Sunset Orange", hex: "#F97316", desc: "Cam Bình Minh - Thể thao bứt phá" },
  { id: "ocean", name: "Deep Ocean", hex: "#0F766E", desc: "Xanh Rêu Đậm - Hiện đại và đẳng cấp" },
  { id: "grey", name: "Neptune Grey", hex: "#64748B", desc: "Ghi Bạc Metallic - Đẳng cấp bền vững" },
];

export class ColorService {
  public static getAllColors(): ColorOption[] {
    return COLOR_OPTIONS;
  }

  public static getColorById(id: string): ColorOption | undefined {
    return COLOR_OPTIONS.find((color) => color.id === id);
  }

  public static getDefaultColor(): ColorOption {
    return COLOR_OPTIONS[0];
  }
}
