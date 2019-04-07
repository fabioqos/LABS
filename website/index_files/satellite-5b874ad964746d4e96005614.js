_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
  //  var nTimer = setInterval(function() {
  if (window.jQuery) {
    $.urlParam = function(name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results == null) {
        return "None";
      } else {
        return decodeURI(results[1]) || 0;
      }
    }
    referrer = $.urlParam('utm_source');
    medium = $.urlParam('utm_medium');
    campaign = $.urlParam('utm_campaign');

    var origURL, finalURL;
    //if ( $.urlParam != "" ){ 
    $('a[href^="https://onlineapplications.boq.com.au"], a[href^="http://onlineapplications.boq.com.au"]').each(function() {
      origURL = finalURL = $(this).attr("href");
      
			// Clean up any type of ' - Enquiry Form' in the product name
      origURL = origURL.split(" -")[0];
      origURL = origURL.split("%20-")[0];
      
      var tmpURL = "onlineapplications.boq.com.au";
      if ($(this).attr("href") != "") {
        if (origURL.indexOf("onlineapplications.boq.com.au") > -1) {
          origURL = origURL.replace("onlineapplications.boq.com.au", tmpURL);
          //console.log("Original URL should be " + origURL);
          if (origURL.indexOf("&Product_name") > -1) {
            finalURL = origURL + "&Referrer=" + referrer + "&Medium=" + medium + "&Campaign=" + campaign;
            //console.log("Original has product name, final URL should be " + finalURL);
          } else if (origURL.indexOf("#/form/") > -1) {
            finalURL = "https://" + tmpURL + "/iSolutions.Forms.Service/ApplicationPrepopulationHandler.ashx?formId=" + origURL.substring(origURL.lastIndexOf('/') + 1) + "&Referrer=" + referrer + "&Medium=" + medium + "&Campaign=" + campaign;
            //console.log("No product name form link. Final URL should be " + finalURL);
          } else if (origURL.indexOf("ashx") > -1) {
            finalURL = "https://" + tmpURL + "/iSolutions.Forms.Service/ApplicationPrepopulationHandler.ashx?formId=" + origURL.substring(origURL.indexOf('=') + 1) + "&Referrer=" + referrer + "&Medium=" + medium + "&Campaign=" + campaign;
            //console.log("ashx link detected. Final URL should be " + finalURL);
          } else {
            console.log("no change");
          }
        }
        $(this).attr("href", finalURL);
        //console.log("Final URL should be " + finalURL);
      }
    });
    // }
    // clearInterval(nTimer);
  }
  //  }, 100);
})();

});
