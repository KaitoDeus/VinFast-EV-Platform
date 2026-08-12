import { CalendarEventModel } from "../models";

export interface ICalendarRepository {
  findAll(): CalendarEventModel[];
  findById(id: string): CalendarEventModel | undefined;
  findByType(type: string): CalendarEventModel[];
}
