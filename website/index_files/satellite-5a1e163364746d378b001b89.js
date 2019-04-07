_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.targetLinkByUrl({
  link: '.pdf',
  params: {
    event: 'Resource downloads',
    category: 'Downloads',
    labels: {
      resourceName: {
        child: 'strong'
      }
    }
  }
})
});
