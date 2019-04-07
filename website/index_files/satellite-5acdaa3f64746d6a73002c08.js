_satellite.pushBlockingScript(function(event, target, $variables){
  if (window.location.host.indexOf("find")>= 0) {

  digitalData = {
  "page" : {
    "pageInfo" : {
      "pageName": document.title,
      "pageUrl" : window.location.href,
      "brand": "BOQ",
      "generator":"AEM", 
      "domain":"BOQ Find"
    },
    "category" : {
      "primaryCategory": "",
      "subCategory1": "",
      "subCategory2": "",
      "subCategory3": "",
      "pageType" : ""
    },
    "productInfo" : {
      "productName" : "",
      "productCategory" : ""
    }
  },
  "user" : {
    "profileInfo" : {
      "userType" : "New Lead",
      "userID" : ""
    }
  },
  "version" : "1.0",
  "events" : []
}
  console.log("SATELLITE:Custom DTL for BOQ Find Created");
} 
});
