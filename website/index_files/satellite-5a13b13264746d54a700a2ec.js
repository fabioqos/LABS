_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.target({
  selector: ".cm-contact-bar li a",
  params: {
    event: 'Contact method',
    category: 'Contact',
    labels: {
      contactMethodTitle: {
        child: 'span.title'   
      },
      contactMethodLink: {
        child: 'span.link'
      }
    }
  }
})

BOQ.analytics.target({
  selector: ".campaign-contacts-content",
  params: {
    event: 'Contact method',
    category: 'Contact',
    labels: {
      contactMethodTitle: {
        child: 'a'
      }
    }
  }
})
});
