import { ITracker } from "../ITracker";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export class GoogleAnalyticsTracker implements ITracker {
  constructor(private readonly measurementId: string) {}

  public trackPageview(url: string): void {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", this.measurementId, {
        page_path: url,
      });
    }
  }

  public trackEvent(eventName: string, params?: Record<string, unknown>): void {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, params || {});
    }
  }

  public trackPreorderClick(source: string): void {
    this.trackEvent("click_preorder", {
      event_category: "Conversion",
      event_label: source,
    });
  }

  public trackContactSubmit(formData?: { name?: string; phone?: string; email?: string }): void {
    this.trackEvent("generate_lead", {
      event_category: "Lead",
      has_phone: Boolean(formData?.phone),
      has_email: Boolean(formData?.email),
    });
  }

  public trackPhoneCall(): void {
    this.trackEvent("click_phone_number", {
      event_category: "Contact",
      event_label: "Footer Tel",
    });
  }

  public trackSocialClick(platform: string): void {
    this.trackEvent("click_social_media", {
      event_category: "Engagement",
      platform: platform,
    });
  }
}
