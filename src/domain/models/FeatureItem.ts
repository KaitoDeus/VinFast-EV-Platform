import { LucideIcon } from "lucide-react";
import { FeatureItem as IFeatureItem } from "@/types";

export class FeatureItemEntity implements IFeatureItem {
  public readonly icon: LucideIcon;
  public readonly title: string;
  public readonly desc: string;

  constructor(data: IFeatureItem) {
    this.icon = data.icon;
    this.title = data.title;
    this.desc = data.desc;
  }

  public toJSON(): IFeatureItem {
    return {
      icon: this.icon,
      title: this.title,
      desc: this.desc,
    };
  }
}
