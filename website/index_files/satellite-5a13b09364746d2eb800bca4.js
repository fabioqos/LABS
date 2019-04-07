_satellite.pushAsyncScript(function(event, target, $variables){
  $(".tabs-container.tabs-container-promo").on('tabChanged.ddTabs expanded.ddExpandCollapse',function(e,mi,ma,mo){

		var tabLabel = ma ? ma.find('.tab-ec-title').text() : $(this).find('.is-expanded.tab-ec-title').text()

		BOQ.analytics.pushDigitalData({
			event: 'Middle navigation bar',
			category: 'Navigation',
			labels: {
				middleNavigationBarValue: tabLabel
			}
		})

	})
});
