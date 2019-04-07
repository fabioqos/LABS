_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.target({
  selector: "#global-search form",
  event: "submit",
  params: {
  	event: 'Internal Search',
    category: 'Search',
    labels: {
      searchTerm: {
        selector: "#site-search",
        data: 'val'
      }
    }
  }
})
});
