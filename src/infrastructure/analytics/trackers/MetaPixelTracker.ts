import { ITracker } from "../ITracker";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export class MetaPixelTracker implements ITracker {
  public trackPageview(url: string): void {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView", { page_path: url });
    }
  }

  public trackEvent(eventName: string, params?: Record<string, unknown>): void {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", eventName, params || {});
    }
  }

  public trackPreorderClick(source: string): void {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", { source });
    }
  }

  public trackContactSubmit(formData?: { name?: string; phone?: string; email?: string }): void {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "VinFast Pre-order Contact Form",
        has_phone: Boolean(formData?.phone),
      });
    }
  }

  public trackPhoneCall(): void {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", { method: "phone" });
    }
  }

  public trackSocialClick(platform: string): void {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "SocialClick", { platform });
    }
  }
}
