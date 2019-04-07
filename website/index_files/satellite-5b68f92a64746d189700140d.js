_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.targetByClasses({
  selector: "a, span, img",
  delay: 600,
  classes: "cta,cta-is-small,cta is-secondary,cta is-secondary is-small,cta is-alternate is-small,cta primary_id, cm cm-image-block-link, cm-image-block-link, img, ctaEnquire, js-ec-link accordion-item, cf, contact-block-link",
 params: {
    category: 'Call to action',
    labels: {
    }
  }
})
});
