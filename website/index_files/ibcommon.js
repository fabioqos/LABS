/*---------- defining constants START------------*/
var COOKIE_SUPPORTED_COOKIE_NAME = 'bqlcookieson';
var UNSUPPORTED_BROWSER_COOKIE_NAME = 'UnSportedBrw';
var CORRECT = 'correct';
var INCORRECT = 'incorrect';
/*---------- defining constants END------------*/

// get the ib page urls from the config
var IB2_URL = ib_config.ib_url;
var IB_MOBILE_URL = ib_config.ib_mobile_url;
var FRAUD_JUMP_PAGE_URL = ib_config.fraud_jump_page_url;
var NO_COOKIE_URL = ib_config.no_cookie_url;
var UNSUPPORTED_BROWSER_URL = ib_config.unsupported_browser_url;

var loadFullScreen = function(url) {
	var resize = '';
	var titlebar = '';
	var wvalue = screen.width - 7;
	var hvalue = screen.height - 75;
	window.open(url,'', 'top=0,left=0,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=' + wvalue + ',height=' + hvalue + resize + titlebar + ',hotkeys=0');
};

function getCookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}
	
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+"="+escape( value ) +
		( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + // expires.toGMTString()
		( ( path ) ? ";path=" + path : "" ) +
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}
	
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function getJumpKey() {
	var jk = document.getElementsByName("jump_key");
	if (jk == null) return 0;
	if (jk[0] == null) return 0;
	return jk[0].getAttribute("content");
}

function getQueryString(name) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var nameval = vars[i].split("=");
    if (nameval[0] == name) {
      return nameval[1];
    }
  } 
}

function startIB(IBtype, popup) {
	
	var ua = navigator.userAgent.toLowerCase();
	this.android = ua.indexOf('android') > 0;
	this.ios  = ua.indexOf('ipad') > 0 || ua.indexOf('iphone') > 0;
	
	var url;
	if(android || ios){
		url = IB_MOBILE_URL;
	} else {
		url = IB2_URL;
	}
	
	if (popup) {
		loadFullScreen( url );
	} else {
	    if(IBtype == 'LEIB') {
			ga('send', 'event', 'IB Login', 'Left Nav Menu');
            location.href = url;
	    } else {
             location.href = url;
	    }
	}
}


function launchJP(IBtype) {
	loadFullScreen(FRAUD_JUMP_PAGE_URL+"?IBtype=" + IBtype)
}

// Get the fraud jump page continue button
var fraudJumpBtn = $("#fraud-jump");

/*
 * On click of fraud jump page button continue button,
 * check if 'Do Not Show' checkbox is checked
 * If yes, set the 'jpid' cookie and redirect user to desktop IB login page
 * Else redirect to desktop IB login page
 * 
 */
fraudJumpBtn.on('click', function() {
	
	// get the value of fraud jump page checkbox
	var dontShowMsg = $('#fraud-jump-checkbox').prop('checked');
	if (dontShowMsg) {
		var jpid = getJumpKey();
		setCookie("jpid", jpid, "365","/");
	}
	var IBtype = getQueryString("IBtype");

	startIB(IBtype);
	
	return false;
});

/*
 * This is the first function called when user click on login button
 */
function launchIB(IBtype) {
	
	// set the cookie to test whether the browser supports cookies
	setCookie( COOKIE_SUPPORTED_COOKIE_NAME, COOKIE_SUPPORTED_COOKIE_NAME, 0.01, false, false, false);
	
	/*
	 * Check the value of 'boqcookieson' cookie
	 * if the cookie is not set, then redirect the user to IB no cookies page
	 * if the cookie set, then perform:
	 * 		1. browser detection
	 * 		2. read the jump key value							
	 */
	if (getCookie(COOKIE_SUPPORTED_COOKIE_NAME) != null) {
		deleteCookie(COOKIE_SUPPORTED_COOKIE_NAME, false, false) ;
		
		// read the jump key value from meta tag
		var jpid = getJumpKey();
		
		// perform browser detection
		var brw= detectBrowser();
		
		/*
		 * If browser detection returns 'Incorrect'
		 * Check whether 'UnSportedBrw' cookie exists
		 * If the cookie exists and it's value is false, open browser unsupported html page
		 */
		if(brw == INCORRECT) {
			 var Uspbid = getCookie(UNSUPPORTED_BROWSER_COOKIE_NAME);
			 if (Uspbid != "True") {
				 launchUB(IBtype);
				 return
			 }
		}
		
		/*
		 * Read the value of Jump Key from meta tag
		 * If the value doesn't exists, then launch desktop version of IB site
		 * If the value exists, then get the jpid cookie
		 * Compare jpid cookie with Jump Key value
		 * If the values are equal, then launch desktop version of IB login
		 * If the values are not equal, redirect user to fraud jump page
		 */
		if ( (jpid == 0) || (jpid == null)) {
			startIB(IBtype, true);
		} else {
			var cid = getCookie("jpid");
			if ( (cid != null) && (cid == jpid) ) {
				startIB(IBtype, true);	
			} else {
				launchJP(IBtype);
			}
		}
	} else {
	    location.href = NO_COOKIE_URL;
	}
}

function its() {
	var n = navigator;
	// string comparisons are much easier if we lowercase everything now.
	// to make indexOf() tests more compact/readable, we prepend a space
	// to the userAgent string (to get around '-1' indexOf() comparison)
	var ua = ' ' + n.userAgent.toLowerCase();
	
	// support for windows 7, 8.1 and 10
	this.win = ua.indexOf('windows nt 6.1') > 0 || ua.indexOf('windows nt 6.3') > 0 || ua.indexOf('windows nt 10.0') > 0;
	this.android = ua.indexOf('android') > 0;
	this.androidVersion = parseFloat(getAndroidVersion(ua));
	this.ios  = ua.indexOf('ipad') > 0 || ua.indexOf('iphone') > 0;
	this.mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
	
	return this;
}

function getAndroidVersion(ua) {
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
}

function iOSversion() {
	  if (/iP(hone|od|ad)/.test(navigator.platform)) {
	    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
	    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	  }
}

/*
 * get the user's browser name and version
 */
function getBrowser() {
	
	var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1] || '')};
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return {name:M[0],version: Number(M[1])};
 }

function detectBrowser() {
    var thing = new its();
    var browser = INCORRECT;
	
    if (thing.mac) {
    	browser = testBrowserSuppMac(thing);
	} else if (thing.win) {
		browser = testBrowserSuppWin(thing);
	} else if (thing.android && Number(thing.androidVersion) >= 4.4) {
		browser = testBrowserSuppAndroid(thing);
	} else if(thing.ios && Number(iOSversion()[0]) >= 9){
		browser = testBrowserSuppIOS(thing);
	}

    return browser;
}

function testBrowserSuppIOS(thing){
	
	var isCorrect = INCORRECT;
	
	var browser=getBrowser();
	var browserName = browser.name.toLowerCase();
	var browserVersion = browser.version;
	
	if('chrome' === browserName && browserVersion >= 55){
		isCorrect = CORRECT;
	} else if('safari' === browserName && browserVersion >= 10){
		isCorrect = CORRECT;
	} 
	
	return isCorrect;
}

function testBrowserSuppAndroid(thing){
	
	var isCorrect = INCORRECT;
	
	var browser=getBrowser();
	var browserName = browser.name.toLowerCase();
	var browserVersion = browser.version;
	
	if('chrome' === browserName && browserVersion >= 55){
		isCorrect = CORRECT;
	}  
	
	return isCorrect;
}

function testBrowserSuppMac(thing){
	
	var isCorrect = INCORRECT;
	
	var browser=getBrowser();
	var browserName = browser.name.toLowerCase();
	var browserVersion = browser.version;
	
	if('chrome' === browserName && browserVersion >= 55){
		isCorrect = CORRECT;
	} else if('safari' === browserName && browserVersion >= 10){
		isCorrect = CORRECT;
	} else if('firefox' === browserName && browserVersion >= 50){
		isCorrect = CORRECT;
	} 
	
	return isCorrect;
}

function testBrowserSuppWin(thing){
	
	var isCorrect = INCORRECT;
	
	var browser=getBrowser();
	var browserName = browser.name.toLowerCase();
	var browserVersion = browser.version;
	
	if('chrome' === browserName && browserVersion >= 55){
		isCorrect = CORRECT;
	} else if('ie' === browserName && +browserVersion === 11){
		isCorrect = CORRECT;
	} else if('firefox' === browserName && browserVersion >= 50){
		isCorrect = CORRECT;
	} else if('edge' === browserName && browserVersion >= 14){
		isCorrect = CORRECT;
	} else if('safari' === browserName && browserVersion === 5.1){
		isCorrect = CORRECT;
	} 
	
	return isCorrect;
}

function launchUB(IBtype) {
   loadFullScreen( UNSUPPORTED_BROWSER_URL+"?IBtype="+IBtype );
}

// Get the unsupported browser continue button
var unsupportedBrowserBtn = $("#unsupported-browser");

/*
 * On click of supported browser button continue button,
 * check if 'Do Not Show' checkbox is checked
 * If yes, set the 'UnSportedBrw' cookie and redirect user to desktop IB login page
 * Else redirect to desktop IB login page
 * 
 */
unsupportedBrowserBtn.on('click', function() {
	
	// get the value of unsupported browser checkbox
	var dontShowMsg = $('#unsupported-browser-checkbox').prop('checked');
	
	// If it is checked then set the cookie for unsupported browser
	if (dontShowMsg) {
		// set the content id in Cookie
		setCookie(UNSUPPORTED_BROWSER_COOKIE_NAME, "True", "365","/");
	}
	
	// get the Ib type
	var IBtype = getQueryString("IBtype");      
	
	// start the internet banking
	init(IBtype);
	
	return false;
});

function init(IBtype) {
		
	var jpid = getJumpKey();
		
	if ( (jpid == 0) || (jpid == null)) {
		startIB(IBtype, true);
	} else {
		var cid = getCookie("jpid");
		if ( (cid != null) && (cid == jpid) ){
			startIB(IBtype, true);	
		} else {
			location.href = FRAUD_JUMP_PAGE_URL+'?IBtype='+ IBtype;
		}
	}
}