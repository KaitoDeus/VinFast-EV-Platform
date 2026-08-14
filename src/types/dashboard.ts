export type TrackingStatus = "On Trip" | "Returned";

export interface TrackingItem {
  id: string;
  clientName: string;
  clientAvatar: string;
  carModel: string;
  carImage: string;
  carType: string;
  carNumber: string;
  driverName: string;
  startDate: string;
  endDate: string;
  tripTime: string;
  totalDistance: string;
  status: TrackingStatus;
}

export interface ChatMessage {
  id: string;
  sender: "client" | "user";
  text?: string;
  imageUrl?: string;
  timestamp: string;
  status?: "sent" | "delivered" | "read";
}

export interface ConversationThread {
  id: string;
  clientName: string;
  avatar: string;
  timeGroup: "Today" | "Yesterday";
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isOnline: boolean;
  messages: ChatMessage[];
}

export interface PaymentItem {
  id: string;
  clientName: string;
  carModel: string;
  ratePerDay: number;
  rentalPeriodDays: number;
  amount: number;
  dueDate: string;
  status: "Completed" | "Awaiting" | "Overdue";
  selected?: boolean;
}

export interface ExpenseItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  amount: number;
  date: string;
  status: "Completed" | "Pending";
}

export interface DriverItem {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  licenseNumber: string;
  experienceYears: number;
  assignedCar: string;
  status: "Active" | "On Trip" | "Off Duty" | "On Leave";
  rating: number;
  totalTrips: number;
  joinedDate: string;
}

export interface ClientItem {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  totalBookings: number;
  spentAmount: number;
  status: "Active" | "VIP" | "Inactive";
}

export interface UnitItem {
  id: string;
  name: string;
  model: string;
  year: number;
  licensePlate: string;
  batteryCapacity: string;
  rangeKm: number;
  dailyRate: number;
  status: "Available" | "Rented" | "Maintenance" | "Charging";
  image: string;
  location: string;
}

export interface BookingItem {
  id: string;
  bookingRef: string;
  clientName: string;
  carModel: string;
  startDate: string;
  endDate: string;
  amount: number;
  status: "Confirmed" | "Active" | "Completed" | "Cancelled";
}
