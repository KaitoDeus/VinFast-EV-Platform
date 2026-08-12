import { FaqItemEntity } from "../../models";
import { IFaqRepository } from "../IFaqRepository";
import { FaqItem as IFaqItem } from "@/types";

const RAW_FAQS: IFaqItem[] = [
  {
    question: "Chính sách thuê pin và mua đứt pin của VinFast như thế nào?",
    answer: "VinFast cung cấp 2 giải pháp linh hoạt: Thuê pin với chi phí hàng tháng tối ưu tiết kiệm rủi ro chai pin (VinFast chịu trách nhiệm thay thế khi dung lượng chai dưới 70%) hoặc Mua đứt pin sở hữu trọn đời với chính sách bảo hành pin từ 7 đến 10 năm không giới hạn km.",
  },
  {
    question: "Thời gian sạc pin xe VinFast mất bao lâu?",
    answer: "Với trạm sạc siêu nhanh V-GREEN (150kW - 360kW), bạn chỉ mất từ 20 đến 26 phút để sạc từ 10% lên 80%. Nếu sạc tại nhà bằng bộ sạc AC (7.4kW - 11kW), thời gian sạc đầy qua đêm mất từ 6 đến 8 tiếng.",
  },
  {
    question: "Hệ thống trạm sạc V-GREEN có phổ biến không?",
    answer: "Hiện tại hệ thống trạm sạc V-GREEN đã phủ sóng 63/63 tỉnh thành Việt Nam trên các tuyến đường quốc lộ, cao tốc, trung tâm thương mại Vinhomes/Vincom, chung cư và bãi đỗ xe công cộng với hơn 150.000 cổng sạc.",
  },
  {
    question: "Chính sách bảo hành và cứu hộ của VinFast ra sao?",
    answer: "Tất cả các dòng xe ô tô điện VinFast được bảo hành chính hãng từ 7 đến 10 năm (hoặc 160.000 - 200.000 km). VinFast miễn phí cứu hộ 24/7 trong suốt thời gian bảo hành và hỗ trợ xe sạc pin lưu động Mobile Charging.",
  },
  {
    question: "Quy trình đặt cọc và nhận xe như thế nào?",
    answer: "Khách hàng có thể đặt cọc trực tuyến chỉ với 10.000.000 VNĐ thông qua website. Đội ngũ tư vấn bán hàng của VinFast sẽ liên hệ xác nhận, chọn màu xe, cấu hình và hẹn ngày bàn giao xe tại Showroom gần nhất.",
  },
];

export class InMemoryFaqRepository implements IFaqRepository {
  private readonly faqs: FaqItemEntity[];

  constructor() {
    this.faqs = RAW_FAQS.map((item) => new FaqItemEntity(item));
  }

  public findAll(): FaqItemEntity[] {
    return [...this.faqs];
  }

  public search(query: string): FaqItemEntity[] {
    return this.faqs.filter((faq) => faq.matchesQuery(query));
  }
}
