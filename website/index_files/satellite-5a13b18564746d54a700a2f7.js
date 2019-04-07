_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.target({
  selector: ".sticky_nav a.cta",
  isProduct: true,
  params: {
    event: 'Apply online',
    category: 'Applications'
  }
})

BOQ.analytics.targetByText({
  text: "Apply online now",
  isProduct: true,
  params: {
    event: 'Apply online',
    category: 'Applications'
  }
})
});
