import { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { ColorOptionEntity } from "@/domain/models";

export function useColorSelector() {
  const colorService = ServiceContainer.getInstance().getColorService();
  const colors = colorService.getAllColors();
  const [selectedColor, setSelectedColor] = useState<ColorOptionEntity>(
    colorService.getDefaultColor()
  );

  const selectColor = (color: ColorOptionEntity) => {
    setSelectedColor(color);
  };

  return {
    colors,
    selectedColor,
    selectColor,
  };
}
