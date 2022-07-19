var digitalData = {};
digitalData = {
  event:{
    eventContext:{
      ctaText:"",
      ctaTitle:"",
    },
    eventName:"all-cta-interaction",
  },
}
function allctaInteraction(ctaTitle, ctaText) {
  try {
    (digitalData.event.eventContext = digitalData.event.eventContext || {}),
      (digitalData.consumer = digitalData.consumer || {});
    (digitalData.event.eventContext.ctaTitle = ctaTitle || "formSubmit"),
      (digitalData.event.eventContext.ctaText = ctaText || "Submit"),
      (digitalData.event.eventName = "all-cta-interaction"),
    // (digitalData.ctaText = ctaText),
    // (digitalData.ctaTitle = ctaTitle),
    callSatellite("all-cta-interaction");
    console.log(JSON.stringify(digitalData));
  } catch (err) {}
}
