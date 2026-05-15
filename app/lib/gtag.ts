export const GA_MEASUREMENT_ID = "G-SHY8FHP9RT";

export const trackEvent = (
  action: string,
  category: string,
  label: string
) => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
    });

    console.log("Evento enviado:", action);
  }
};