import { useState } from "react";
import { CarModelSpec } from "@/types";
import { CarService } from "@/services";

export function useCarSelector() {
  const models = CarService.getAllModels();
  const [selectedModel, setSelectedModel] = useState<CarModelSpec>(
    CarService.getDefaultModel()
  );

  const selectModel = (model: CarModelSpec) => {
    setSelectedModel(model);
  };

  const selectModelById = (id: string) => {
    const found = CarService.getModelById(id);
    if (found) {
      setSelectedModel(found);
    }
  };

  return {
    models,
    selectedModel,
    selectModel,
    selectModelById,
  };
}
