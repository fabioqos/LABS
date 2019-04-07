_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.target({
  selector: ".sl.homepage-promo .blue-links a",
  params: {
  	event: 'Middle Navigation Panel',
    category: 'Navigation',
    labels: {
      label: {},
      middleNavigationBarValue: {
        parent: ".tab",
        child: '.tab-ec-title'
      },
      activePanel: 'Left panel'
    }
  }
})

BOQ.analytics.target({
  selector: ".sl.homepage-promo .has-2-items .sl-item .sl-item:nth-child(1) a",
  params: {
  	event: 'Middle Navigation Panel',
    category: 'Navigation',
    labels: {
      label: {
        child: 'h2'
      },
      middleNavigationBarValue: {
        parent: ".tab",
        child: '.tab-ec-title'
      },
      activePanel: 'Middle panel'
    }
  }
})

BOQ.analytics.target({
  selector: ".sl.homepage-promo  .has-2-items  .sl-item .sl-item:nth-child(n + 2) a",
  params: {
  	event: 'Middle Navigation Panel',
    category: 'Navigation',
    labels: {
      label: {
        child: 'h2'
      },
      middleNavigationBarValue: {
        parent: ".tab",
        child: '.tab-ec-title'
      },
      activePanel: 'Right panel'
    }
  }
})

});
