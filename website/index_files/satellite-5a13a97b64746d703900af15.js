_satellite.pushAsyncScript(function(event, target, $variables){
  /*$(".nav-onscreen a.nav-item-title, .offscreen-content a.subnav-item-title.nav-lvl1").on('click',function(){ 
		BOQ.analytics.pushDigitalData({
			event: 'Top navigation bar',
			category: 'Navigation',
			labels: {
				topNavigationBarValue: $(this).text()
			}
		})
	})*/

BOQ.analytics.target({
  selector: ".nav-onscreen a.nav-item-title, .offscreen-content a.subnav-item-title.nav-lvl1",
  params: {
    event: 'Top navigation bar',
    category: 'Navigation',
    labels: {
      topNavigationBarValue: {}
    }
  }
})
});
