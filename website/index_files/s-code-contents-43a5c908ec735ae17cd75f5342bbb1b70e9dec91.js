
// the dtmDataLayer variables get populated a bit later 
// this DTL is used only for non dtmDataLayer values
if (typeof dtmDataLayer != "undefined") {
digitalData = {
  "page" : {
    "pageInfo" : {
      "pageID": "", 
      "pageName": "",
      "pageUrl" : window.location.href,
      "publishedDate": "", 
      "updatedDate" : "",
      "brand": "BOQ",
      "generator":"iApply", 
      "domain":window.location.hostname, 
      "sysEnv": "Desktop"
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

  console.log("SATELLITE:Custom DTL Created");
};



window.visitor = Visitor.getInstance("A346210654E977110A4C98A7@AdobeOrg", {
  trackingServer:"bankofqueensland.sc.omtrdc.net",
  trackingServerSecure:"bankofqueensland.sc.omtrdc.net",
});
window.visitor.cookieDomain = "boq.com.au";

window.s_new = new AppMeasurement();
window.s_new.visitor = window.visitor;

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */

//the below function renames from s. to s_online
(function(s){

s.charSet="UTF-8";
s.cookieDomainPeriods=3;
/* Conversion Config */
s.currencyCode="AUD";
/* Link Tracking Config */
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkInternalFilters="javascript:,boq.com.au" + window.location.hostname;
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";

//s.server configuration

s.server = window.location.host;

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="bankofqueensland";
s.trackingServer="bankofqueensland.sc.omtrdc.net";
s.trackingServerSecure=s.trackingServer;

/* Plugins Config */
s.triggered = 0;
s.usePlugins=true;
function s_doPlugins(s)
{
/* Add calls to plugins here */

/* Set custom page view */
s.contextData["evt_customPageView"] = 1;

/* Set Adobe s.pageName*/
s.pageName=window.digitalData.page.pageInfo.pageName;
  
  /* Set Adobe s.channel view */
s.channel=window.digitalData.page.category.primaryCategory;
  
/* New/Repeat Visitor Tracking */
s.contextData["new_repeat"]=s.getNewRepeat(365);
  

/* Error Page Tracking */
if (s.pageType)
s.pageName="404:"+s.ws.location;

/* Campaign Tracking */
if (s.Util.getQueryParam('cid'))  s.contextData["ext_campaign"] = s.Util.getQueryParam('cid'); //external campaign code
if (s.Util.getQueryParam('icid')) s.contextData["int_campaign"] = s.Util.getQueryParam('icid'); //internal campaign code
  
/* get CID value for iApply Tracking */ 

if (s.Util.getQueryParam('cid')) {
  
document.cookie = "cidCookie="+";domain=.boq.com.au; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
  
var now = new Date();
now.setTime(now.getTime() + 1000*60*60*24*365);
document.cookie= "cidCookie=" + s.Util.getQueryParam('cid') + ";domain =.boq.com.au;path=/;expires=" + now.toGMTString();

};


/* getTimeParting set variables with different values */
s.contextData["t_hour"] = s.getTimeParting('h', '10');
s.contextData["t_day"] = s.getTimeParting('d', '10');


  /* Put page URL into contextData */
s.contextData["p_pi_url"] = "D=g";

/* Expose Marketing Cloud ID */
s.contextData["sc_mid"] = s.marketingCloudVisitorID;

/* Call Plugin */
s.contextData["sc_daysSinceLastVisit"] = s.getDaysSinceLastVisit("s_lv");

/* Call Plugin */
s.contextData["sc_visitNumber"] = s.getVisitNum(365);

/* Call Plugin */
s.contextData["sc_visitStart"] = s.getVisitStart("s_visit");

/* Call Plugin */
s.contextData["sc_loadTime"] = s_getLoadTime();
  


/*event placeholder*/

///////////////////////////////////
s.eventLoop();

  /* Loop to set contextData from data layer */
  if (typeof digitalData != "undefined") {
    s.getDataLayer(JSON.parse(JSON.stringify(digitalData)));
  }
 if(s.linkType=="e")
  {
   s.contextData={};
  }
}
s.doPlugins=s_doPlugins

  ///////////////////////////////////////////////////////

  /*Overwrite Data Layer placeholder */
if (window.digitalData.page.pageInfo.generator === "AEM") {
   if (window.digitalData.page.pageInfo.pageName === "Personal" && window.digitalData.page.pageInfo.pageID === "2824") {
    window.digitalData.page.pageInfo.pageName = "Homepage"
} else {
  console.log("SATELLITE: Not a homepage")
  }
};
/////////////////////////////////////////////////////////

/************************** PLUGINS SECTION *************************/

/*
 * Plugin: getQueryParam 2.4
 */
s.getQueryParam=new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u","h",""
+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return''");

//time parting configuration
//Australia
s._tpDST = {
2012:'4/1,10/7',
2013:'4/7,10/6',
2014:'4/6,10/5',
2015:'4/5,10/4',
2016:'4/3,10/2',
2017:'4/2,10/1',
2018:'4/1,10/7',
2019:'4/7,10/6'}

//US
s._tpDST = {
2012:'3/11,11/4',
2013:'3/10,11/3',
2014:'3/9,11/2',
2015:'3/8,11/1',
2016:'3/13,11/6',
2017:'3/12,11/5',
2018:'3/11,11/4',
2019:'3/10,11/3'}

//Europe
s._tpDST = {
2012:'3/25,10/28',
2013:'3/31,10/27',
2014:'3/30,10/26',
2015:'3/29,10/25',
2016:'3/27,10/30',
2017:'3/26,10/29',
2018:'3/25,10/28',
2019:'3/31,10/27'}

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;if(h =='h'){return(tm"
+");}else if(h == 'd'){return(D)}else if(h =='w'){Date.prototype.getWeek"
+"= function() {var onejan = new Date(this.getFullYear(),0,1);return Math"
+".ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);};return(de.getWeek())"
+"}}");
/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin: channelExtract : 1.0 - returns site section based on delimiter
 */
s.channelExtract=new Function("d","p","u","pv",""
+"var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f'"
+")u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substr"
+"ing(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=a"
+"l;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n+d;}return v}return "
+"'';")


/*
* Plug-in: crossVisitParticipation v1.7 - stacks values from
* specified variable in cookie and returns value
*/
s.crossVisitParticipation=new
Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");


/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

/*
* Plugin: getPreviousValue v1.0 - return previous value of designated
* variable (requires split utility)
*/
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*   https://marketing.adobe.com/resources/help/en_US/sc/implement/plugins_support.html UNTESTED PLUGIN
* Plugin: getAndPersistValue 0.3 - get a value on every page
*/
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);")


/*
* Plugin Utility: apl v1.1
*/
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

 /*
   * Plugin: getVisitNum - version 3.0
   */
   s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");

 /*
  * Plugin: s_getLoadTime - latest version dec 2017
 */
function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT};


/*
 * Plugin: getTimeToComplete 0.4 - return the time from start to stop
 */
s.getTimeToComplete=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
  
  
/*                                                                                       
 * Plugin: channelExtract : 1.0 - returns site section based on delimiter
 */
s.channelExtract=new Function("d","p","u","pv",""
+"var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f'"
+")u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substr"
+"ing(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=a"
+"l;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n+d;}return v}return "
+"'';")
  
  
  /********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getTimeToComplete 0.4 - return the time from start to stop
 */
s.getTimeToComplete=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");

/*
 * Plugin: getVisitStart v2.1 - return 1 on start of visit, else 0
 */
s.getVisitStart=new Function("c",""
+"var s=this,n,t=new Date;if(typeof s.callType=='function'&&s.callTyp"
+"e()=='+')return 0;if(!c)c='s_visit';t.setTime(t.getTime()+18e5);n=s"
+".c_r(c)?0:1;if(!s.c_w(c,1,t))s.c_w(c,1,0);if(!s.c_r(c))n=0;return n");

/*
 * Data layer plugins
 */

// run once during initial page load
s.eventLoop = function() {
    if (!s.triggered && typeof digitalData != "undefined") {
        s.triggered++;
        digitalData = digitalData || {};
        digitalData.events = digitalData.events || [];
        if (typeof digitalData != "undefined" && digitalData.events && digitalData.events.length != 0) {

            loadProcess = function(evt) {
                var sJSONBuff = '';
                if (typeof(evt) != 'object') {
                    sJSONBuff = '{"type": "analytics", "event": "' + evt + '"}';
                    evt = JSON.parse(sJSONBuff);
                }

                jQuery(function() {
                    jQuery(document).trigger(evt);
                });
            }

            jQuery.map(digitalData.events, function(evt) {
                loadProcess(evt);
            });
        }

        digitalData.events.o_push = digitalData.events.push;
        digitalData.events.push = function() {

            var args = Array.prototype.slice.call(arguments);

            jQuery.map(args, function(arg) {
              digitalData.events.o_push(arg);
              process(arg);
            });

            function process(evt) {
                var sJSONBuff = '';
                if (typeof(evt) != 'object') {
                    sJSONBuff = '{"type": "analytics", "event": "' + evt + '"}';
                    evt = JSON.parse(sJSONBuff);
                }

                jQuery(function() {
                    jQuery(document).trigger(evt);
                    s.clearVars();
                    s.customEventProcess(evt);
                });
            }
        }
    }
};

// run for each digitalData.events.push
s.customEventProcess = function(e) {
  	console.log('Push!')
    if (typeof e == "object") {
        var doNotFire = false;
        var sLinkTrackVarsBuffArr = [];
        for (var key in e) {
            if (typeof e[key] != "undefined") {
                if (key == "event") {
                    var eventNamesArr = e[key].split(",");
                    for (var x = 0; x < eventNamesArr.length; x++) {
                        var numOfTrue = 0;
                        var evt = eventNamesArr[x];
                        for (var i = 0; i < digitalData.events.length; i++) {
                            if (digitalData.events[i] === evt)
                                numOfTrue++;
                        }
                        if (numOfTrue > 200) {
                            doNotFire = true;
                            break;
                        } else {
                            s.contextData["evt_" + eventNamesArr[x]] = 1;
                            sLinkTrackVarsBuffArr.push("contextData.evt_" + eventNamesArr[x]);
                        }
                    }
                } else {
                    if (key != "type") {
                        s.contextData["evt_" + key] = e[key];
                        sLinkTrackVarsBuffArr.push("contextData.evt_" + key);
                    }
                }
            }
        }
        s.linkTrackVars = sLinkTrackVarsBuffArr.join(",");

        if (!doNotFire) {
          var eventCategory = s.contextData.evt_eventCategory;
            s.tl(true, "o", e.event, null, function() {
                console.log("SATELLITE: Event (Object) \"" + e.event + "\" fired");
            });

            // remove event from context data
            var currentLinks = sLinkTrackVarsBuffArr;
            for (var i=(currentLinks.length-1);i>=0;i--) {
                var currentLink = currentLinks[i];
                if (/^contextData.evt_/.test(currentLink)) {
                    var linkProperty = currentLink.substr("contextData.".length);
                    if (!!s.contextData && !!s.contextData.hasOwnProperty(linkProperty)) {
                        delete s.contextData[linkProperty];
                    }
                }
            }

            // remove event from data layer
            if (!!digitalData && !!digitalData.events) {
                for (var eventIndex = (digitalData.events.length-1); eventIndex >= 0; eventIndex--) {
                    if (!!digitalData.events[eventIndex].event && !!e.event) {
                        if (digitalData.events[eventIndex].event === e.event) {
                            digitalData.events.splice(eventIndex,1);
                        }
                    }
                }
            }
        }
    }
}

function rmwh(x){return x.replace(/-/g," ");}

/* Plugin: getDataLayer- Deloitte 0.4 */
s.getDataLayer = function(ob, obName) {
    var separator = "_";
    if (obName === undefined || obName == "") {
        obName = "",
            separator = "";
    }
    switch (obName) {
        case "page":
            obName = "p";
            break;
        case "p_category":
            obName = "p_cat";
            break;
        case "p_pageInfo":
            obName = "p_pi";
            break;
        case "user":
            obName = "u";
            break;
        case "u_profile":
            obName = "u_prfl";
            break;
        case "u_prfl_profileInfo":
            obName = "u_pr_pri";
            break;

        default:
            obName = obName;
            break;
    }
    for (var item in ob) {
        if (ob[item] != null && ob[item] != "") {
            if (item == "events") {
                var eventsObj = ob[item];

                /// catering for incorrect format of events.. nulls were found in DataLayer(instead of empty array)
                if (eventsObj == null || eventsObj == 'null' || eventsObj == 'undefined') {

                    eventsObj = '[]';
                }
                /// catering for some unexpected behaviour .. all arrays are wrapped in quotes (stringified?)
                if (typeof eventsObj == "string") {
                    //cast back to an array
                    eventsObj = JSON.parse(eventsObj);
                }
                for (var i = 0; i < eventsObj.length; i++) {
                    if (typeof eventsObj[i] == "object") {
                        var e = eventsObj[i];
                        for (var key in e) {
                            if (typeof e[key] != "undefined") {
                                if (key == "event") {
                                    var eventNamesArr = e[key].split(",");
                                    for (var x = 0; x < eventNamesArr.length; x++) {
                                        var evt = eventNamesArr[x];
                                        s.contextData["evt_" + eventNamesArr[x]] = 1;
                                    }
                                } else {
                                    if (key != "type") {
                                        s.contextData["evt_" + key] = e[key];
                                    }
                                }
                            }
                        }
                    } else {
                        s.contextData["evt_" + eventsObj[i]] = 1;
                    }
                }
            } else if (typeof ob[item] == 'object') {
                s.getDataLayer(ob[item], obName + separator + item);
            } else {
                s.contextData[(obName + separator + item)] = ob[item];
            }
        }
    }
}



})(window.s_new);

/*

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.0.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="2.0.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var n=h.AppMeasurement.Ob;n||(n=null);var p=h,l,r;try{for(l=p.parent,r=p.location;l&&l.location&&r&&""+l.location!=""+r&&p.location&&""+l.location!=""+p.location&&l.location.host==r.host;)p=l,l=p.parent}catch(s){}a.P=function(a){try{console.log(a)}catch(b){}};a.La=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.vb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.vb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ia=function(c,b,d){if(a.Ea)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ea=1;a[d.m].apply(a,d.a);a.Ea=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.na.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].Mb,f=a[e].Lb));k&&(k=","+k+","+a.G.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",k,m,h,t,l=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+k+","))){h=!1;if(l)for(m=0;m<l.length;m++)k.substring(0,l[m].length)==l[m]&&(h=!0);if(!h&&(""==g&&(g+="&"+c+"."),m=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)m=k.substring(0,h),h=(e?e:"")+m+".",l||(l=[]),l.push(h),g+=a.r(m,b,d,f,h);else if("boolean"==typeof m&&(m=m?"true":"false"),m){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),t=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k=
"v0";break;default:a.La(t)&&("prop"==h?k="c"+t:"eVar"==h?k="v"+t:"list"==h?k="l"+t:"hier"==h&&(k="h"+t,m=m.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(m)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.yb=function(){var c="",b,d,f,e,g,k,m,h,l="",p="",q=e="";if(a.lightProfileID)b=a.O,(l=a.lightTrackVars)&&(l=","+l+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)l=a.linkTrackVars,p=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(l=a[e].Mb,p=a[e].Lb));
l&&(l=","+l+","+a.G.join(",")+",");p&&(p=","+p+",",l&&(l+=",events,"));a.events2&&(q+=(""!=q?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=n;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,
4);k=e.substring(4);!g&&"events"==e&&q&&(g=q,q="");if(g&&(!l||0<=l.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),
g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":q&&(g+=(""!=g?",":"")+q);if(p)for(k=
g.split(","),g="",f=0;f<k.length;f++)m=k[f],h=m.indexOf("="),0<=h&&(m=m.substring(0,h)),h=m.indexOf(":"),0<=h&&(m=m.substring(0,h)),0<=p.indexOf(","+m+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],l,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],l,e));g="";break;default:a.La(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Rb||"undefined"!=""+a.Hb&&"HTML"!=(""+a.Hb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ha=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.D(c),d,f,e="",
g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ha(c),e)?{id:e.substring(0,100),type:g}:0};a.Pb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Gb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var m=d.onclick?""+d.onclick:"";if(0<=m.indexOf(".tl(")||0<=m.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&
(e=a.Ha(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var l=0,p=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(m=e.toLowerCase(),g=m.indexOf("?"),k=m.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(m=m.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(n=g[k])&&m.substring(m.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(m=e.toLowerCase(),a.Ka(m)&&(a.linkInternalFilters||(a.linkInternalFilters=
h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),l=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)n=g[k],0<=m.indexOf(n)&&(p=1);p?l&&(f="e"):l||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.zb=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,k,m,h,e=0;if(g)for(k=0;k<g.length;k++)m=g[k].split("="),f=a.unescape(m[0]).split(","),
m=a.unescape(m[1]),b[m]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.r("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(m in b)if(!Object.prototype[m])for(h=0;h<f.length;h++)for(e&&(g=b[m].join(","),g==a.account&&(a.e+=("&"!=m.charAt(0)?"&":"")+m,b[m]=[],d=1)),k=0;k<b[m].length;k++)g=b[m][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=m.charAt(0)?"&":"")+m+"&u=0"),b[m].splice(k,
1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(m in b)!Object.prototype[m]&&0<k&&0<b[m].length&&(e+=(e?"&":"")+a.escape(b[m].join(","))+"="+a.escape(m),k--);a.cookieWrite("s_sq",e)}}}return c};a.Ab=function(){if(!a.Kb){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",h="1.2",l=a.cookieWrite("s_cc","true",0)?"Y":"N",n="",q="";if(c.setUTCDate&&(h="1.3",(0).toPrecision&&(h="1.5",c=[],c.forEach))){h="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(h="1.7",
c.reduce&&(h="1.8",h.trim&&(h="1.8.1",Date.parse&&(h="1.8.2",Object.create&&(h="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),n=a.b.Qb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(u){}a.resolution=
d;a.colorDepth=f;a.javascriptVersion=h;a.javaEnabled=e;a.cookiesEnabled=l;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=n;a.Kb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.cb=function(){return d.hb};d.ib=function(b){if(d.hb=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.cb,set:d.ib}):d._olc=1}catch(f){d._olc=
1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};
a.R=function(c,b){var d,f,e,g,k,h;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||(k[h]=a[g][h]);a[g]=k}};a.Ua=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ub=function(a){var b,d,f,e,g,k=0,h,l="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,
"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?l+=(l?"&":"")+e:n+=(n?"&":"")+e;l&&n?h=l+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+
"?"+h}return a};a.$a=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.I=!1;a.kb=function(){a.I=!0;a.j()};a.ca=!1;a.V=!1;a.gb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.lb=function(c){a.visitorOptedOut=c;a.W=!0;
a.j()};a.Z=!1;a.S=!1;a.Wa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Ya=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Xa=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.Za=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.H=!1;a.xa=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.I||(a.$a(a.kb)?a.I=!0:a.ea=!0);if(a.ea&&!a.I)return!1;b&&
b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.gb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.lb]),a.visitorOptedOut!=n&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Wa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ya]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Xa]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.H||(a.Za(a.xa)?a.H=!0:
a.da=!0);a.da&&!a.H&&(c=!1);return c};a.o=n;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.pb=c;f.ob=b;f.mb=d;a.o==n&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.jb(),a.o!=n))for(;0<a.o.length;)c=a.o.shift(),c.ob.apply(c.pb,c.mb)};a.jb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.eb=function(c){var b,d,f=n,e=n;if(!a.isReadyToTrack()){b=[];if(c!=n)for(d in f={},c)f[d]=c[d];e={};a.Ua(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.wb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.eb(c)||(b&&a.R(b),c&&(d={},a.Ua(d,0),a.R(c)),a.Cb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.wb()),a.Gb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=h.location,a.pageURL||
(a.pageURL=f.href?f.href:f),a.referrer||a.Va||(a.referrer=p.document.referrer),a.Va=1,a.referrer=a.ub(a.referrer),a.p("_g")),a.zb()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.Ab(),g+=a.yb(),a.Fb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=
h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPreTrackCallback")};a.bb=function(c){a.wa(a.za,c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPostTrackCallback")};
a.ab=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.P(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=
a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Fb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,
f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Jb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.bb(d);
a.sb(d);a.ka()};a.Ta=/{(%?)(.*?)(%?)}/;a.Nb=RegExp(a.Ta.source,"g");a.tb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Nb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ta),l="";"%"==h[1]&&"timezone_offset"==h[2]?l=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(l=a.xb());d.c=d.c.replace(g,a.escape(l))}}};a.xb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));
return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.tb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);
else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.sb=function(c){a.i||a.Bb();a.i.push(c);a.ma=a.C();a.Ra()};a.Bb=function(){a.i=a.Db();a.i||(a.i=[])};a.Db=function(){var c,b;if(a.ra()){try{(b=h.localStorage.getItem(a.pa()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&
a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Ia=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.va(),a.q))return;a.Ja=n;if(a.qa)a.ma>a.N&&a.Pa(a.i),a.ua(500);else{var c=a.nb();if(0<c)a.ua(c);else if(c=a.Fa())a.q=1,a.Eb(c),a.Ib(c)}};a.ua=function(c){a.Ja||(c||(c=0),a.Ja=setTimeout(a.ka,c))};a.nb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Oa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.Fa=function(){if(0<a.i.length)return a.i.shift()};a.Eb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.P(b)}};a.fb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var q;try{q=JSON.parse('{"x":"y"}')}catch(u){q=null}q&&"y"==q.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.X=function(a){return h.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Ib=function(c){var b,
d,f;a.fb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Sa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?
f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=n}));b.Da=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.va=function(){a.ab(c);b.Da();a.rb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ga=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.qb);a.q=0;a.ma>a.N&&a.Pa(a.i);
a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ga())};a.Oa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ma)try{f.removeChild(a.Ma)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ma=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.va():(a.trackOffline&&
b.abort&&b.abort(),b.Ga()))},5E3);a.qb=c;a.B=h["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.rb=function(){if(a.ra()&&!(a.Na>a.N))try{h.localStorage.removeItem(a.pa()),a.Na=a.C()}catch(c){}};a.Pa=function(c){if(a.ra()){a.Ra();try{h.localStorage.setItem(a.pa(),h.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Ra=function(){if(a.trackOffline){if(!a.offlineLimit||
0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Fa()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ka=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Jb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==
d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,
cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:h.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(l=0;250>=l;l++)76>l&&(a.g.push("prop"+l),a.O.push("prop"+l)),a.g.push("eVar"+l),a.O.push("eVar"+l),6>l&&a.g.push("hier"+l),4>l&&a.g.push("list"+l);l="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(l);a.G=a.G.concat(l);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Oa=0;a.ma=0;a.N=0;a.Na=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;try{if(a.Sa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Sa=!0}}catch(w){}a.ga=function(){a.ha&&(h.clearTimeout(a.ha),a.ha=n);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Qa=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var k=a.M=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Ia();a.track();if(f<a.Ia()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ka(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(n){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(p){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
h.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Qa,30)};a.Qa();a.loadModule("ActivityMap")}
function s_gi(a){var h,n=window.s_c_il,p,l,r=a.split(","),s,q,u=0;if(n)for(p=0;!u&&p<n.length;){h=n[p];if("s_c"==h._c&&(h.account||h.oun))if(h.account&&h.account==a)u=1;else for(l=h.account?h.account:h.oun,l=h.allAccounts?h.allAccounts:l.split(","),s=0;s<r.length;s++)for(q=0;q<l.length;q++)r[s]==l[q]&&(u=1);p++}u||(h=new AppMeasurement);h.setAccount?h.setAccount(a):h.sa&&h.sa(a);return h}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,h=a.s_giq,n,p,l;if(h)for(n=0;n<h.length;n++)p=h[n],l=s_gi(p.oun),l.setAccount(p.un),l.setTagContainer(p.tagContainerName);a.s_giq=0}s_pgicq();
