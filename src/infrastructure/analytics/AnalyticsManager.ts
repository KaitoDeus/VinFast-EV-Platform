import { ITracker } from "./ITracker";
import { GoogleAnalyticsTracker } from "./trackers/GoogleAnalyticsTracker";
import { MetaPixelTracker } from "./trackers/MetaPixelTracker";

export class AnalyticsManager implements ITracker {
  private static instance: AnalyticsManager;
  private readonly trackers: ITracker[] = [];

  private constructor() {
    const gaMeasurementId =
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-VF2026EVPLAT";
    
    this.trackers.push(new GoogleAnalyticsTracker(gaMeasurementId));
    this.trackers.push(new MetaPixelTracker());
  }

  public static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  public trackPageview(url: string): void {
    this.trackers.forEach((t) => t.trackPageview(url));
  }

  public trackEvent(eventName: string, params?: Record<string, unknown>): void {
    this.trackers.forEach((t) => t.trackEvent(eventName, params));
  }

  public trackPreorderClick(source: string): void {
    this.trackers.forEach((t) => t.trackPreorderClick(source));
  }

  public trackContactSubmit(formData?: { name?: string; phone?: string; email?: string }): void {
    this.trackers.forEach((t) => t.trackContactSubmit(formData));
  }

  public trackPhoneCall(): void {
    this.trackers.forEach((t) => t.trackPhoneCall());
  }

  public trackSocialClick(platform: string): void {
    this.trackers.forEach((t) => t.trackSocialClick(platform));
  }
}
