_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.target({
  selector: ".header-ribbon li a, .header-ribbon-mobile li a",
  params: {
  	event: 'Ribbon navigation bar',
    category: 'Navigation',
    labels: {
      ribbonNavigationBarValue: {}
    }
  }
})
});
