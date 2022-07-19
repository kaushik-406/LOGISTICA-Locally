function allctaInteraction(ctaTitle, ctaText) {
  try {
    (digitalData.event.eventContext = digitalData.event.eventContext || {}),
      (digitalData.consumer = digitalData.consumer || {});
    (digitalData.event.eventContext.ctaTitle = ctaTitle || ""),
      (digitalData.event.eventContext.ctaText = ctaText || ""),
      (digitalData.event.eventName = "all-cta-interaction"),
      callSatellite("all-cta-interaction");
  } catch (err) {}
}
