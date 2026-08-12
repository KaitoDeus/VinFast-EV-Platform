import { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { CarModelEntity } from "@/domain/models";

export function useCarSelector() {
  const carService = ServiceContainer.getInstance().getCarService();
  const models = carService.getAllModels();
  const [selectedModel, setSelectedModel] = useState<CarModelEntity>(
    carService.getDefaultModel()
  );

  const selectModel = (model: CarModelEntity) => {
    setSelectedModel(model);
  };

  const selectModelById = (id: string) => {
    const found = carService.getModelById(id);
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
