import {
  ICarRepository,
  IColorRepository,
  IFaqRepository,
  IFeatureRepository,
  IBookingRepository,
  IUnitRepository,
  ICalendarRepository,
  IClientRepository,
  IDriverRepository,
  IPaymentRepository,
  IExpenseRepository,
  ITrackingRepository,
  IMessageRepository,
  InMemoryCarRepository,
  InMemoryColorRepository,
  InMemoryFaqRepository,
  InMemoryFeatureRepository,
  InMemoryBookingRepository,
  InMemoryUnitRepository,
  InMemoryCalendarRepository,
  InMemoryClientRepository,
  InMemoryDriverRepository,
  InMemoryPaymentRepository,
  InMemoryExpenseRepository,
  InMemoryTrackingRepository,
  InMemoryMessageRepository,
} from "@/domain/repositories";
import {
  CarService,
  ColorService,
  FaqService,
  FeatureService,
  BookingService,
  UnitService,
  CalendarService,
  ClientService,
  DriverService,
  PaymentService,
  ExpenseService,
  TrackingService,
  MessageService,
} from "@/domain/services";

export class ServiceContainer {
  private static instance: ServiceContainer;

  private readonly carRepository: ICarRepository;
  private readonly colorRepository: IColorRepository;
  private readonly faqRepository: IFaqRepository;
  private readonly featureRepository: IFeatureRepository;
  private readonly bookingRepository: IBookingRepository;
  private readonly unitRepository: IUnitRepository;
  private readonly calendarRepository: ICalendarRepository;
  private readonly clientRepository: IClientRepository;
  private readonly driverRepository: IDriverRepository;
  private readonly paymentRepository: IPaymentRepository;
  private readonly expenseRepository: IExpenseRepository;
  private readonly trackingRepository: ITrackingRepository;
  private readonly messageRepository: IMessageRepository;

  private readonly carService: CarService;
  private readonly colorService: ColorService;
  private readonly faqService: FaqService;
  private readonly featureService: FeatureService;
  private readonly bookingService: BookingService;
  private readonly unitService: UnitService;
  private readonly calendarService: CalendarService;
  private readonly clientService: ClientService;
  private readonly driverService: DriverService;
  private readonly paymentService: PaymentService;
  private readonly expenseService: ExpenseService;
  private readonly trackingService: TrackingService;
  private readonly messageService: MessageService;

  private constructor() {
    // Instantiate Repositories
    this.carRepository = new InMemoryCarRepository();
    this.colorRepository = new InMemoryColorRepository();
    this.faqRepository = new InMemoryFaqRepository();
    this.featureRepository = new InMemoryFeatureRepository();
    this.bookingRepository = new InMemoryBookingRepository();
    this.unitRepository = new InMemoryUnitRepository();
    this.calendarRepository = new InMemoryCalendarRepository();
    this.clientRepository = new InMemoryClientRepository();
    this.driverRepository = new InMemoryDriverRepository();
    this.paymentRepository = new InMemoryPaymentRepository();
    this.expenseRepository = new InMemoryExpenseRepository();
    this.trackingRepository = new InMemoryTrackingRepository();
    this.messageRepository = new InMemoryMessageRepository();

    // Inject Repositories into Services
    this.carService = new CarService(this.carRepository);
    this.colorService = new ColorService(this.colorRepository);
    this.faqService = new FaqService(this.faqRepository);
    this.featureService = new FeatureService(this.featureRepository);
    this.bookingService = new BookingService(this.bookingRepository);
    this.unitService = new UnitService(this.unitRepository);
    this.calendarService = new CalendarService(this.calendarRepository);
    this.clientService = new ClientService(this.clientRepository);
    this.driverService = new DriverService(this.driverRepository);
    this.paymentService = new PaymentService(this.paymentRepository);
    this.expenseService = new ExpenseService(this.expenseRepository);
    this.trackingService = new TrackingService(this.trackingRepository);
    this.messageService = new MessageService(this.messageRepository);
  }

  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  public getCarService(): CarService {
    return this.carService;
  }

  public getColorService(): ColorService {
    return this.colorService;
  }

  public getFaqService(): FaqService {
    return this.faqService;
  }

  public getFeatureService(): FeatureService {
    return this.featureService;
  }

  public getBookingService(): BookingService {
    return this.bookingService;
  }

  public getUnitService(): UnitService {
    return this.unitService;
  }

  public getCalendarService(): CalendarService {
    return this.calendarService;
  }

  public getClientService(): ClientService {
    return this.clientService;
  }

  public getDriverService(): DriverService {
    return this.driverService;
  }

  public getPaymentService(): PaymentService {
    return this.paymentService;
  }

  public getExpenseService(): ExpenseService {
    return this.expenseService;
  }

  public getTrackingService(): TrackingService {
    return this.trackingService;
  }

  public getMessageService(): MessageService {
    return this.messageService;
  }
}
