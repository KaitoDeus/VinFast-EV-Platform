import {
  ICarRepository,
  IColorRepository,
  IFaqRepository,
  IFeatureRepository,
  InMemoryCarRepository,
  InMemoryColorRepository,
  InMemoryFaqRepository,
  InMemoryFeatureRepository,
} from "@/domain/repositories";
import {
  CarService,
  ColorService,
  FaqService,
  FeatureService,
} from "@/domain/services";

export class ServiceContainer {
  private static instance: ServiceContainer;

  private readonly carRepository: ICarRepository;
  private readonly colorRepository: IColorRepository;
  private readonly faqRepository: IFaqRepository;
  private readonly featureRepository: IFeatureRepository;

  private readonly carService: CarService;
  private readonly colorService: ColorService;
  private readonly faqService: FaqService;
  private readonly featureService: FeatureService;

  private constructor() {
    // Instantiate Repositories
    this.carRepository = new InMemoryCarRepository();
    this.colorRepository = new InMemoryColorRepository();
    this.faqRepository = new InMemoryFaqRepository();
    this.featureRepository = new InMemoryFeatureRepository();

    // Inject Repositories into Services
    this.carService = new CarService(this.carRepository);
    this.colorService = new ColorService(this.colorRepository);
    this.faqService = new FaqService(this.faqRepository);
    this.featureService = new FeatureService(this.featureRepository);
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
}
