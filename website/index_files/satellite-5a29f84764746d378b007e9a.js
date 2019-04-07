_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.targetLinkByUrl({
  link: 'https://onlineapplications.boq.com.au/#/login',
  isProduct: true,
  params: {
    event: 'Application retrieved',
    category: 'New lead / customer'
  }
})
});
