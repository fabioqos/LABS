_satellite.pushAsyncScript(function(event, target, $variables){
  
BOQ.analytics.beforeFire({
  isProduct: true,
  params: {
  	event: 'Product views',
  	category: 'Product'
  }
})
});
