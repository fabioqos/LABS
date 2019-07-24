//Debounce function so we can slow down the autocomplete              
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
    
    
 //
// Funnelback auto suggestions
//
(function($){
    
  //
  // default values
  //
  var cuafb = [];
  cuafb.search = {};
  cuafb.collection = $('.search-header__form input[name="collection"]').attr('value');
  cuafb.searchURL = $('.search-header__form form').attr('action');
  cuafb.autocompleteURL = $('#headerSearch').attr('data-autocomplete-url');
  theRequest = '';
  var fb_completion = {
    'enabled'           : 'true',
    'program'           : cuafb.autocompleteURL,
    'parentSelector'    : 'form',
    'alpha'             : '.5',
    'show'              : 10,
    'sort'              : '0',
    'length'            : '3',
    'delay'             : 150,
    'searchSelector'    : 'query', /* The selector for the search input field */
    'suggestionSelector': '.autocomplete' /* The selector for the suggestion box. Expects an ID or class name */
  };
  
  $(document).ready(function(){
    // initialise auto suggestion
    $('input[name="' + fb_completion.searchSelector + '"]').each(function(key, value){
        var $this = $(this);
        // make sure auto suggestion is enabled
        if(fb_completion.enabled === 'true'){
          // store the selector specified for the suggestion box
          // removing the first . or # character
            var suggestionClassName = fb_completion.suggestionSelector.substr(1);
          // insert the suggestion box to the end of the parent container
          var parentItem = $this.parents(fb_completion.parentSelector);
          var categoriesHTML = 
          '<li class="section hidden"><h5>Products</h5><ul class="list-chevron-links list-chevron-links--cta autocompleteProducts" ></ul></li>' +
          '<li class="section hidden"><h5>Tools & Services</h5><ul class="list-chevron-links list-chevron-links--cta autocompleteToolsServices"></ul></li>' +
          '<li class="section hidden"><h5>About Us</h5><ul class="list-chevron-links list-chevron-links--cta autocompleteAboutUs"></ul></li>' +
          '<li class="section hidden"><h5>Suggestions</h5><ul class="list-chevron-links list-chevron-links--cta autocompleteSuggestions"></ul></li>'; 
          $('<div class="' + suggestionClassName + ' hide"><ul>' + categoriesHTML + '</ul></div>').appendTo(parentItem);
        }
    });
           
    //Define a debounce function to slow this down
    var debouncedAutocomplete = debounce(function(event){
    	 cuafb.search.loadSuggestions(event);
    }, fb_completion.delay);
    
                  
    //
    // init various event functions
    //
    // on key up or focus - run some checks before querying search
    $('input[name="' + fb_completion.searchSelector + '"]').on('keyup focus', debouncedAutocomplete);
    // user has clicked on a text only suggestion
    $(fb_completion.suggestionSelector).on('click','.fb-text', cuafb.search.suggestionTextClick);
    // close suggestion box if user clicks elsewhere
    $('html').bind("click touchstart", function(ele){
      if($(ele.target).parents(fb_completion.parentSelector).length > 0){
      //  ele.stopPropagation();
      } else {
        cuafb.search.closeSuggestions();
      }
    });
  });








  // this function does a quick check over how may characters are present
  // in the search query.
  cuafb.search.loadSuggestions = function(event){
    
    var searchVal = event.currentTarget.value;
    
    // if the search query is greater than x characters, start the search
    if(searchVal.length >= fb_completion.length){
      cuafb.search.searchSuggestions(searchVal, event.currentTarget);
    } else { // if it's less than x then close the suggestion box
      cuafb.search.closeSuggestions();
    }
    
  }
  // the main function to load the search results
  // this function is expecting the search field text value to be passed
  cuafb.search.searchSuggestions = function(searchVal,element){
    // store the search term
    var theRequest = searchVal;
    var $this = $(element);
    // combine the URL params to a variable
    var theURL = fb_completion.program;/* + theRequest.replace(/ /g, '+');*/
    var formData = $this.parents('form').serialize();
    formData = formData.replace('query', 'partial_query');
    var xhr = $.ajax({
      type: 'GET',
      url: theURL + '&' + formData,
      success: function(data) {
        //var $data = JSON.parse(data);
        var $results = data;
        var $uniqueResults = [];
        
        // clear out duplicates
        $.each($results, function(i, el){
            if($.inArray(el, $uniqueResults) === -1) $uniqueResults.push(el);
        });
        
        //
        if($uniqueResults.length > 0){
            
            //Split results into categories
            var categories = [];
            $uniqueResults.forEach(function(key, value){
              categories.push(key.cat);
            });
            
            var $uniqueCat=categories.filter(function(itm,i,a){
                return i==categories.indexOf(itm);
            });
            
            var $wrapper = $this.parents('form').find($(fb_completion.suggestionSelector));
            var $suggestionslist = $wrapper.children('ul');
            $suggestionslist.find('.section ul').html('');
            
            $wrapper.find('.section.footer').remove();
            var footer = '<li class="section footer"><ul class="list-chevron-links list-chevron-links--cta"><li><a href="' + cuafb.searchURL + '?query=' + theRequest + '&collection=' + cuafb.collection + '">View all search results for <strong>' + theRequest + '</strong></a></li></ul></li>';
            
        /*    $uniqueCat.forEach(function(key,value){
              var catID = key.replace(/ /g, '').replace(/&amp;/g, '');
              if (catID.length === 0){
                catID = 'Suggestions';
                key = 'Suggestions'
              };
              var catContainer = '<li class="section"><h5>' + key + '</h5>' + '<ul class="list-chevron-links list-chevron-links--cta" id="' + catID + '"></ul></li>';
              $suggestionslist.append(catContainer);
            });*/
            
            $suggestionslist.append(footer);
            
            for(var i = 0; i < $uniqueResults.length; i++){
                if(i < fb_completion.show){
                  
                  //Resets
                  var destination= '';
                 
                  //Find category
                  var catID = $uniqueResults[i].cat.replace(/ /g, '').replace(/&amp;/g, '');
                  
                  //Find title
                  var title = $uniqueResults[i].disp;
                  
                  //Find search term
                  var term = theRequest;
                  
                  //Boldersize search term
                  if (title.toLowerCase().indexOf(term) >= 0){
                    var regEx = new RegExp(term, "ig");
                    var replacement = '<strong>$&</strong>';
                    var title = title.replace(regEx, replacement);
                  }
                  
                  //Replace blank category with 'Suggestions'
                  if (catID.length === 0){
                    catID = 'Suggestions';
                  };
                  
                  //Find destination
                  if ($uniqueResults[i].action.length > 0) {
                      destination = $uniqueResults[i].action
                  } else {
                      destination = cuafb.searchURL + '?query=' + $uniqueResults[i].key + '&collection=' + cuafb.collection;
                  }
                 
                  $('<li><a href="' + destination + '">' + title +'</a></li>').appendTo('.autocomplete' + catID);
                }
            }
          // now add the compiled suggestions into the page and show if hidden
          if ($suggestionslist.length > 0){
              var $suggestionsections = $suggestionslist.parents('.autocomplete__this').find('.section ul');
              
              // Any category that does have suggestions, unhide
              $suggestionsections.has('li').parents('.section.hidden').removeClass('hidden');
              
              // Any category that does not have suggestions, hide
              $suggestionsections.not(':has(li)').parents('.section').addClass('hidden'); 
              
              // Unhide the whole list
              $suggestionslist.parents('.autocomplete__this').find('.autocomplete').removeClass('hide');
          }
        } else {
          $this.parents('.autocomplete__this').find($(fb_completion.suggestionSelector)).addClass('hide');
        }
        
      }
    });
  } // end searchSuggestions() function
  // when a user clicks on a text suggestion
  cuafb.search.suggestionTextClick = function (){
    // replace the search field value with the clicked text
    $(this).parents('.autocomplete__this').find('input[name="' + fb_completion.searchSelector + '"]').val($.trim($(this).text()));
    $(this).parents('.autocomplete__this').find('input[name="' + fb_completion.searchSelector + '"]').focus();
    // now hide the suggestion box
    cuafb.search.closeSuggestions();
    /*return false;*/
  }
  // function to close the suggestion box
  cuafb.search.closeSuggestions = function(){
    // hide only if visible and clear the html
    $(fb_completion.suggestionSelector).filter(':visible').addClass('hide').find('.section ul').html('');
  }

})(jQuery);
if($('.health_quote_about_you').length > 0){
    $('.dob_member .ctrls input').each(function(){
        
        $(this).change(function(){
            var length = $(this).val();
            if(length.length > 0){
                //if value of field is not empty
                //delay until the script.js has run to update classes
                setTimeout(function() {
                    //check if placeholder is still active
                    if($('.health-insurance-summary-quote-placeholder').hasClass('active') == true){
                        //if it is active do nothing
                    }else{  
                        //if it isn't active check if the quote value is active
                        if($('.health-insurance-summary-quote').hasClass('active') == true){
                        //if it is active push ga event
                        dataLayer.push({'event': 'HealthQuote'});
                        }
                    }
                }, 1000);
                
            }else{
                //if value of field is still empty, then do nothing
            }    
        
        });
        
    });
    
}
//check for resize or scrolling
$(document).scroll(function() {
  //checkWindowSize();
});

$(window).resize(function(){
  //checkWindowSize();
});

//check what the window size is and how far the user has scrolled and manipulate the page accordingly
function checkWindowSize(){
  if($(window).width() >= 640 &&  $(window).width() < 1024){
    $attach_pos = ($('.breadcrumbs-box ').offset().top)-($('.login-select').offset().top)-20;
  } else if($(window).width() < 640){
    $attach_pos = ($('.breadcrumbs-box ').offset().top)-($('.login-dd').offset().top)-4;

  } else {
    $attach_pos = ($('.breadcrumbs-box ').offset().top)-($('.login-dd').offset().top);

  }
  if($attach_pos < 50){
    $(".cta-persistent-float-above").css("z-index","400");

  } else {
    $(".cta-persistent-float-above").css("z-index","3");

  }

  if($attach_pos > 0){

    $(".util-links .cta-persistent-container").append($(".cta-persistent-enquire"));
    if($(document).scrollTop() > 40){
      $(".login-dd").show();
    } else {
      $(".login-dd").hide();
    }
    $(".logo-call").show();
    $(".login-select").show();

  } else if( $attach_pos < 0) {
    window.setTimeout(function(){
      if($(window).width() >= 640 &&  $(window).width() < 1024){
        $(".header-blade").append($(".cta-persistent-enquire"));
        $(".login-select").hide();
      } else if($(window).width() < 640){
        $(".header-blade").after($(".cta-persistent-enquire"));
        $(".logo-call").hide();
      } else {
        $("#cua-dropdown-2").append($(".cta-persistent-enquire"));
        $(".login-dd").hide();
      }

    },50);

  } else {
    $(".util-links .cta-persistent-container").append($(".cta-persistent-enquire"));
    if($(window).width() < 1024){
      $(".login-dd").show();
    } else {
      $(".login-dd").hide();
    }
    $(".login-select").show();
  }
}


/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
