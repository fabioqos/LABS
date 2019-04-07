_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.targetMainbanner({
  selector: ".hero-carousel .cta",
  params: {
    event: 'Main banner click',
    category: 'Call to action',
    labels: {
      bannerHeader: {
        parent: '.hero-carousel',
        child: 'h1'
      },
      bannerSubHeader: {
        parent: '.hero-carousel',
        child: 'h2'
      },
    }
  }
})
});
