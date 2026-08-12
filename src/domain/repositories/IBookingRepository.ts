import { BookingModel } from "../models";

export interface IBookingRepository {
  findAll(): BookingModel[];
  findById(id: string): BookingModel | undefined;
  search(query: string): BookingModel[];
  findByStatus(status: string): BookingModel[];
}
