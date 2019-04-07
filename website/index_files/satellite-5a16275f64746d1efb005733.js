_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.targetByText({
  text: "Discover more",
  isProduct: true,
  params: {
  	event: 'Discover more',
    category: 'Call to action',
    labels: {
      relatedProductName: {
        parent: '.cm-product-tile',
        child: 'h2'
      }
    }
  }
})
});
