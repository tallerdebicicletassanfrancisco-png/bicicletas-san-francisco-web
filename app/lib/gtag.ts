export const GA_MEASUREMENT_ID = "G-SHY8FHP9RT";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label: string
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};