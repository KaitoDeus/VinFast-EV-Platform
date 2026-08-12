import { ServiceContainer } from "@/infrastructure/di";
import { CarModelSpec } from "@/types";

export class CarService {
  public static getAllModels(): CarModelSpec[] {
    return ServiceContainer.getInstance()
      .getCarService()
      .getAllModels()
      .map((m) => m.toJSON());
  }

  public static getModelById(id: string): CarModelSpec | undefined {
    return ServiceContainer.getInstance()
      .getCarService()
      .getModelById(id)
      ?.toJSON();
  }

  public static getDefaultModel(): CarModelSpec {
    return ServiceContainer.getInstance()
      .getCarService()
      .getDefaultModel()
      .toJSON();
  }
}
