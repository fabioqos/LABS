_satellite.pushAsyncScript(function(event, target, $variables){
  /*$(".nav-footer-social li a").on('click',function(){

		var linkLabel = $(this).attr("title").split(" ").pop();

		BOQANALYTICS.analytics.pushDigitalData({
			event: 'Social media clicks',
			category: 'Social media',
			labels: {
				socialMediaPlatform: linkLabel
			}
		})

})*/

BOQ.analytics.target({
  selector: ".nav-footer-social li a",
  params: {
  	event: 'Social media clicks',
    category: 'Social media',
    labels: {
  		socialMediaPlatform: {
  			data: "pop",
  			attr: 'attr("title").split(" ")'
			}
    }
	}
})
});
