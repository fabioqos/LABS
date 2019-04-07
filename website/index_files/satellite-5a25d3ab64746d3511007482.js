_satellite.pushAsyncScript(function(event, target, $variables){
  BOQ.analytics.targetLinkByUrl({
  link: 'faq.html',
  params: {
    event: 'FAQs topic',
    category: 'FAQs',
    labels: {
      faqsMainTopicTitle: {
        parent: '.content',
        child: 'h2'
      },
      faqsSubTopicTitle: {
        parent: '.content',
        child: 'p.subheading'
      }
    }
  }
})


BOQ.analytics.target({
  selector: '.is-faq .accordion-item',
  params: {
    event: 'FAQs topic',
    category: 'FAQs',
    labels: {
      faqsMainTopicTitle: {
        parent: '.l-layout',
        child: '.breadcrumbs li.is-active'
      },
      faqsSubTopicTitle: {}
    }
  }
})
});
