export interface ITracker {
  trackPageview(url: string): void;
  trackEvent(eventName: string, params?: Record<string, unknown>): void;
  trackPreorderClick(source: string): void;
  trackContactSubmit(formData?: { name?: string; phone?: string; email?: string }): void;
  trackPhoneCall(): void;
  trackSocialClick(platform: string): void;
}
