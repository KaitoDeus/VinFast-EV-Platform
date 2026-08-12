import { ServiceContainer } from "@/infrastructure/di";
import { ColorOption } from "@/types";

export class ColorService {
  public static getAllColors(): ColorOption[] {
    return ServiceContainer.getInstance()
      .getColorService()
      .getAllColors()
      .map((c) => c.toJSON());
  }

  public static getColorById(id: string): ColorOption | undefined {
    return ServiceContainer.getInstance()
      .getColorService()
      .getColorById(id)
      ?.toJSON();
  }

  public static getDefaultColor(): ColorOption {
    return ServiceContainer.getInstance()
      .getColorService()
      .getDefaultColor()
      .toJSON();
  }
}
