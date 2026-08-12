import { ICalendarRepository } from "../repositories";
import { CalendarEventModel } from "../models";

export class CalendarService {
  constructor(private readonly repository: ICalendarRepository) {}

  public getAllEvents(): CalendarEventModel[] {
    return this.repository.findAll();
  }

  public getEventById(id: string): CalendarEventModel | undefined {
    return this.repository.findById(id);
  }

  public filterEventsByType(type: string): CalendarEventModel[] {
    return this.repository.findByType(type);
  }
}
