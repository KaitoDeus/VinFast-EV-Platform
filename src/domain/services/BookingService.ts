import { IBookingRepository } from "../repositories";
import { BookingModel } from "../models";

export class BookingService {
  constructor(private readonly repository: IBookingRepository) {}

  public getAllBookings(): BookingModel[] {
    return this.repository.findAll();
  }

  public searchBookings(query: string): BookingModel[] {
    return this.repository.search(query);
  }

  public getDashboardMetrics() {
    return {
      totalRevenue: "$8,450",
      revenueGrowth: "+2.85%",
      newBookings: 386,
      bookingsGrowth: "+1.73%",
      rentedCars: "214 Unit",
      rentedGrowth: "-2.85%",
      availableCars: "89 Unit",
      availableGrowth: "+3.45%",
    };
  }

  public getRentStatusBreakdown() {
    return [
      { label: "Hired", percentage: 58, color: "#1e293b", trend: "↑" },
      { label: "Pending", percentage: 24, color: "#ef4444", trend: "↓" },
      { label: "Cancelled", percentage: 18, color: "#e2e8f0", trend: "↑" },
    ];
  }

  public getFleetDistribution() {
    return [
      { model: "VinFast VF 8", type: "SUV (D-Segment)", percentage: 30, count: 90, image: "/section/sec1.png" },
      { model: "VinFast VF 9", type: "Full-Size SUV", percentage: 25, count: 75, image: "/section/sec1.png" },
      { model: "VinFast VF 7", type: "Sport SUV", percentage: 20, count: 60, image: "/section/sec1.png" },
      { model: "VinFast VF 6", type: "Urban Crossover", percentage: 10, count: 30, image: "/section/sec1.png" },
      { model: "VinFast VF 5", type: "Compact SUV", percentage: 10, count: 30, image: "/section/sec1.png" },
      { model: "VinFast Klara", type: "Smart E-Scooter", percentage: 5, count: 18, image: "/section/sec1.png" },
    ];
  }
}
