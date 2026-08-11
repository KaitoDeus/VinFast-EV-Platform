import { useState } from "react";
import { ColorOption } from "@/types";
import { ColorService } from "@/services";

export function useColorSelector() {
  const colors = ColorService.getAllColors();
  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    ColorService.getDefaultColor()
  );

  const selectColor = (color: ColorOption) => {
    setSelectedColor(color);
  };

  return {
    colors,
    selectedColor,
    selectColor,
  };
}
