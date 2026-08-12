import { ServiceContainer } from "@/infrastructure/di";
import { FeatureItem } from "@/types";

export class FeatureService {
  public static getAllFeatures(): FeatureItem[] {
    return ServiceContainer.getInstance()
      .getFeatureService()
      .getAllFeatures()
      .map((f) => f.toJSON());
  }
}
