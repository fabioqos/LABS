(function(){var k=(function(){var i=document,m=window,r=encodeURIComponent,o=decodeURIComponent;var t=true;function z(a){return!!a&&(a instanceof Function||(typeof a=="object"&&!(a instanceof Object)))?true:false}function s(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false);return true}if(a.attachEvent){return a.attachEvent("on"+b,c)}return false}function v(a,b,c){if(a.removeEventListener){a.removeEventListener(b,c,false);return true}if(a.detachEvent){return a.detachEvent("on"+b,c)}return false}function q(a){var b=/(https?:\/\/[^\/]*)/;var c=a.match(b);return c===null?null:c[0]}function H(a,b){var c=q(a);var d=q(b);return c!==null&&c==d}function p(a){return Object.prototype.toString.call(a)==='[object Array]'}function x(a){return a!==null&&Object.prototype.toString.call(a)==='[object Object]'}function I(a){return a!==null&&Object.prototype.toString.call(a)==='[object String]'}function w(a,b){for(var c=0,d=a.length;c<d;c++){if(a[c]===b){return c}}return-1}function J(a,b){var c;if(i.createEvent){c=i.createEvent("HTMLEvents");c.initEvent(b,true,true);return!a.dispatchEvent(c)}if(i.createEventObject){c=i.createEventObject();return a.fireEvent("on"+b,c)}return false}function C(a,b){var c=i.createElement(a);for(var d in b){c[d]=b[d]}return c}function u(a,b){var c=i.getElementsByTagName('script'),d=null,f=null,g=0,h=new RegExp("(.+)/"+a,"i");for(var j=0,n=c.length;j<n;j++){f=c[j].src.match(h);if(f!==null&&f.length==2){d=f[1];g++}}if(g==1){return d}if(g===0){f=window.location.href.match(h);if(f!==null&&f.length==2){return f[1]}if(b){return b}}return false}function G(a){if(typeof(a)=="string"){return a}var b=[];for(var c in a){b.push(c+"="+r(a[c]))}return b.join("&")}function K(a){var b={},c,d,a=a||"",f=a.indexOf("?");if(f!=-1){a=a.substr(f+1)}c=a.split("&");for(var g=0,h=c.length;g<h;g++){d=c[g].split("=");if(d.length==2){b[d[0]]=o(d[1])}}return b}function N(a){var b='abcdefghiklmnopqrstuvwxyz_'.split(''),c=b.length,d=Math.random,f=Math.floor,g=new Array(a);for(var h=0;h<a;h++){g.push(b[f(d()*c)])}return g.join("")}function L(a,b){for(var c=0,d=a.length;c<d;c++){if(a[c][b]!==undefined){return true}}return false}function P(a){var b;do{b=N(8)}while(L(a,b));return b}function Q(a,b,c){a=a.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var d="[\\?&]"+a+"=([^&#]*)",f=new RegExp(d),g=f.exec(b);return(g==null)?c:g[1]}function R(a){var b=i.getElementsByTagName('script'),c=null,d=null,f=0,g=new RegExp("(.+)/"+a+"(.+)","i");for(var h=0,j=b.length;h<j;h++){d=b[h].src.match(g);if(d!==null&&d.length==3){c=d[2];f++}}if(f==1){return c}if(f===0){d=window.location.href.match(g);if(d!==null&&d.length==3){return d[2]}}return""}function E(a){var b=a.lastIndexOf("/"),c=b>-1?a.substr(1,b-1):a,d=b>-1?a.substring(b+1):"";return new RegExp(c,d)}function S(a){if(a.charAt(0)=='/'){return"/"}else{a=a.match(/^https?:\/\/[^\/]*\//)[0];return a}}function T(a,b,c){if(c==(b.length-1)){return a[b[c]]}return!!a[b[c]]&&T(a[b[c]],b,c+1)}function O(a,b,c){return T(a,b,c)}function X(a,b){var c;for(var d=0,f=b.length;d<f;d++){c=E(b[d]);if(c.test(a)){return true}}return false}function D(a){var b=[];for(var c in a){b.push(c)}return b}function Y(a,b){var c=[a,Math.random()].join("#");if(!bd()){window.name=b!==undefined?G(b):"#"}setTimeout(function(){window.location.replace(c)},50)}function bd(){if(window['postMessage']&&typeof(window['postMessage'])=='function'&&t){var a=window['postMessage'].toString();if(typeof(a)=='string'&&a.match(/\[native code\]/)){return true}}return false}function bb(){try{return m.self!==m.top}catch(e){return true}}function bc(a,b){var c=a.split("/");if(c.length<3){return a}c[2]=b;return c.join("/")}function U(a){var b=a.split("/");if(b.length<3){return undefined}return b[2]}function V(a,b){var c;b=y._2(Z._a(b));for(var d in b){c=E(d);if(c.test(a)){return b[d]}}}return{_1:z,_b:s,_h:v,_13:J,_14:C,_i:u,_0:G,_c:K,_j:N,_d:Q,_z:E,_15:S,_k:p,_8:x,_l:w,_16:T,_m:O,_A:X,_17:D,_18:Y,_19:P,_1a:H,_4:bd,_B:I,_n:bb,_C:bc,_o:U,_1b:V,_D:R}})();var y={};y._2=function(a){if(!(typeof(a)=="string")){return null}try{return(new Function("return "+a))()}catch(e){return null}};y._E=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;y._F={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};y._G=function(c){if(typeof(c)=="string"){var d=y._E,f=y._F;d.lastIndex=0;return d.test(c)?'"'+c.replace(d,function(a){var b=f[a];return typeof b==='string'?b:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+c+'"'}else{return String(c).replace(/\"/g,'\\"')}};y._3=function(a,b){var c=typeof(a)==="object",d=a instanceof Array,f=[];if(typeof(b)=="undefined"){b=-1}if(d){if(b==0){return"[]"}for(var g=0,h=a.length;g<h;g++){if(typeof(a[g])==="function"||typeof(a[g])==="undefined"){continue}f.push(y._3(a[g],(b==-1?b:b-1)))}return"["+f.join(",")+"]"}if(c&&a!==null){if(b==0){return"{}"}for(var j in a){if(typeof(a[j])==="function"||typeof(a[j])==="undefined"){continue}f.push('"'+j+'":'+y._3(a[j],(b==-1?b:b-1)))}return"{"+f.join(",")+"}"}return y._G(a)};var W=(function(){var s=document,v=window,q=v.location,H=encodeURIComponent,p=decodeURIComponent,x={},I="bankofamerica.com",w="/",J=false,C=null,u=null,G=null,K=null,N=null,L=null;function P(a,b){return K&&a===N&&b===L}function Q(b,c,d,f,g){if(k._n()||(!C&&!P(d,f))){return}d=d||u;f=f||G;var h=M._H,j=q.protocol+"//"+d,n=[k._C(h,d),f].join("/"),i=q.protocol+"//"+q.host,m={bu:h,c:{},cb:!!c};function r(a){if(c){c.apply(this,[y._2(Z._a(a.c))])}}for(var o=0;o<b.length;o++){m.c[b[o]]=R(b[o])||null}if(k._4()&&!g&&x.id&&x.icid&&!m.cb){var t=s.getElementById(x.id).contentWindow;M._p(m,j,t,bh._I._q,x.icid)}else{if(!k._4()){m.c=Z._5(y._3(m.c))}var z=bh._J(n,{e:i,es:be._6()},r,m);if(!g){x=z}}}function R(a){try{var b=s.cookie}catch(e){return}var c=new RegExp(a+'=(.[^;]+)','i'),d=null;if(s.cookie.length>0){d=s.cookie.match(c);if(d&&d.length==2){return p(d[1])}}}function E(a,b,c,d,f,g,h){try{var j=s.cookie}catch(e){return}s.cookie=a+'='+H(b)+(c?";expires="+c.toUTCString():"")+(d?(";domain="+d):"")+(f?(";path="+f):"")+(g?";secure":"");if(!h){W._r([a])}}function S(a){return E(a,"deleted",new Date("Thu, 01 Jan 1970 00:00:00 GMT"))}return{_K:{_s:I,_L:w,_M:J},_N:C,_6:R,_1c:S,_7:E,_r:Q}})();var be=(function(){var d=window,f=document,g="/",h=false,j="bankofamerica.com",n=[],i="LSESSIONID",m=decodeURIComponent,r=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;function o(a){return d&&k._A(d.location.pathname,n)}function t(a){if(!r.test(a)){return false}return a}function z(a){regex=new RegExp("[?&]"+a+"=([^&]*)");match=regex.exec(d.location.href);return match?m(match[1]):null}function s(){return d["LSESSIONID"]}function v(a,b){var c=false;if(d["LSESSIONID"]){b();return}c=z("LSESSIONID");if(c){q(c,true);b();return}if(o(d.location.pathname)){q(d["SSESSIONID"],true);b();return}q(d["PSESSIONID"],true);b()}function q(a,b){a=t(a);d["LSESSIONID"]=a;W._7(i,a,null,j,g,h,b)}return{_7:q,_6:s,_e:v,_s:j}})();var Z=(function(){var m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");function r(a,b){for(var c=0,d=a.length;c<d;c++){if(a[c]===b){return c}}return-1}function o(a){var b=[],c,d,f,g,h,j,n,i=0;while(i<a.length){c=a.charCodeAt(i++);d=a.charCodeAt(i++);f=a.charCodeAt(i++);g=c>>2;h=((c&3)<<4)|(d>>4);j=((d&15)<<2)|(f>>6);n=f&63;if(isNaN(d)){j=n=64}else if(isNaN(f)){n=64}b.push(m[g],m[h],m[j],m[n])}return b.join('')}function t(a){var b=[],c=0,d,f,g,h,j,n,i;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(c<a.length){h=r(m,a.charAt(c++));j=r(m,a.charAt(c++));n=r(m,a.charAt(c++));i=r(m,a.charAt(c++));d=(h<<2)|(j>>4);f=((j&15)<<4)|(n>>2);g=((n&3)<<6)|i;b.push(String.fromCharCode(d));if(n!=64){b.push(String.fromCharCode(f))}if(i!=64){b.push(String.fromCharCode(g))}}return b.join('')}return{_5:o,_a:t}})();var bs=(function(){var g=Math.pow(2,32);function h(a){var b=0,c;for(var d=0,f=a.length;d<f;d++){c=a.charCodeAt(d);c=b+c+((b+c)<<10);b=c^(c>>6)}b=b+(b<<3);b=b^(b>>11);return((b+(b<<15))>>>0)%g}return{_t:h}})();var bD=(function(){function n(a,b){var c=[],d=[],f,g,h,j;for(f=0;f<256;f++){c[f]=f}for(g=0,f=0;f<256;f++){g=(g+c[f]+b.charCodeAt(f%b.length))%256;h=c[f];c[f]=c[g];c[g]=h}for(f=0,g=0,j=0,l=a.length;j<l;j++){f=(f+1)%256;g=(g+c[f])%256;h=c[f];c[f]=c[g];c[g]=h;d.push(String.fromCharCode(a.charCodeAt(j)^c[(c[f]+c[g])%256]))}return Z._5(d.join(''))}return{_O:n,_1d:n}})();var bE=(function(){var i=/(^|@)\S+\:\d+/;var m=/^\s*at .*(\S+\:\d+|\(native\))/m;var r=/^(eval@)?(\[native code\])?$/;function o(a){if(typeof a.stacktrace!=='undefined'||typeof a['opera#sourceloc']!=='undefined'){return s(a)}else if(a.stack&&a.stack.match(m)){return z(a,'a')}else if(a.stack){return z(a,'b')}else{return a}}function t(a,b){var c=[];for(var d=0;d<b.length;d++){if(a(b[d])){c.push(b[d])}}return c}function z(b,c){var d=t(function(a){if(c=='a'){return!!a.match(m)}else if(c=='b'){return!a.match(m)}},b.stack.split('\n'));return{name:b.name,message:b.message,trace:d[0]||b.stack}}function s(b){var c;var d=[];if(!b.stacktrace||(b.message.indexOf('\n')>-1&&b.message.split('\n').length>b.stacktrace.split('\n').length)){var f=/Line (\d+).*script (?:in )?(\S+)/i;var g=b.message.split('\n');for(var h=2,j=g.length;h<j;h+=2){var n=f.exec(g[h]);if(n){d.push(n)}}}else if(!b.stack){var f=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;var g=b.stacktrace.split('\n');for(var h=0,j=g.length;h<j;h+=2){var n=f.exec(g[h]);if(n){d.push(n)}}}else{d=t(function(a){return!!a.match(i)&&!a.match(/^Error created at/)},b.stack.split('\n'))}return{name:b.name,message:b.message,trace:d[0]||b.stack||b.stacktrace||b.message}}return{parse:o}})();var bF=(function(){var I=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2],w=0xffffffff;function J(a){var b=[],c,d,f,g=a.length,h;for(d=0;d<g;d++){h=a[d];for(f=7;f>-1;f--){c=(h>>>(f*4))&0xf;b.push(c.toString(16))}}return b.join("")}function C(a){var b,c,d=Array(16);for(b=0;b<16;b++){d[b]=0}for(b=0,c=a.length;b<c*8;b+=8){d[b>>5]|=(a.charCodeAt(b/8)&w)<<(24-b%32)}return d}function u(a,b){return(a>>>b)|(a<<(32-b))}function G(a){var b,c,d,f;a+=String.fromCharCode(0x80);d=(a.length/4)+2;c=Math.ceil(d/16);b=new Array(c);for(f=0;f<c;f++){b[f]=C(a.substring(f*64,(f*64)+64))}b[c-1][14]=Math.floor(((a.length-1)*8)/Math.pow(2,32));b[c-1][15]=((a.length-1)*8);return b}function K(a){var b=new Array(64),c,d,f,g,h,j,n,i,m,r,o,t,z,s,v,q,H,p=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],x=G(a);for(d=0,f=x.length;d<f;d++){b=x[d];for(c=16;c<64;c++){t=u(b[c-15],7)^u(b[c-15],18)^(b[c-15]>>>3);z=u(b[c-2],17)^u(b[c-2],19)^(b[c-2]>>>10);b[c]=b[c-16]+t+b[c-7]+z}g=p[0];h=p[1];j=p[2];n=p[3];i=p[4];m=p[5];r=p[6];o=p[7];for(c=0;c<64;c++){t=u(g,2)^u(g,13)^u(g,22);q=(g&h)^(g&j)^(h&j);v=(t+q)&w;z=u(i,6)^u(i,11)^u(i,25);H=(i&m)^(~i&r);s=(o+z+H+I[c]+b[c])&w;o=r;r=m;m=i;i=(n+s);n=j;j=h;h=g;g=(s+v)}p[0]=(p[0]+g);p[1]=(p[1]+h);p[2]=(p[2]+j);p[3]=(p[3]+n);p[4]=(p[4]+i);p[5]=(p[5]+m);p[6]=(p[6]+r);p[7]=(p[7]+o)}return J(p)}return{_P:K}})();var bh=(function(){var i=document,m=window,r={},o=k._i("I3n.js"),t=[o,"OGI4.html"].join("/"),z="0",s={},v={_u:1,_Q:2,_q:3},q=null;function H(a,b){var c=i.createElement('iframe');c.id="iframe"+Math.round((Math.random()*999));c.style.width="0";c.style.height="0";c.style.border="none";c.frameBorder="0";c.style.display="none";c.src="javascript: false;";c.title=k._j(6);i.getElementsByTagName('body')[0].appendChild(c);if(!k._4()){c.contentWindow.name=k._0(b)}setTimeout(function(){c.contentWindow.location.replace(a)},25);return c.id}function p(a,b){if(!a){a={}}for(var c in b){if(typeof(a)=="string"){a=[a,c+"="+encodeURIComponent(b[c])].join("&")}else{a[c]=b[c]}}return a}function x(){var a=window.location.href.indexOf("?"),b=a>-1?k._c(window.location.href.substring(a+1)):{};return b.eu?b.eu:window.location.href}function I(a){var b=x();if(!b||!a){return}a.setRequestHeader("X-Embedding-Uri",b)}function w(a){var b=x();if(!b||!a){return}return p(a,{eu:b})}function J(a,b){var c=i.getElementById(a),d=null;try{d=c.contentWindow.location;if(c&&c.contentWindow&&d!="about:blank"&&d.hash.indexOf("#")==0&&c.contentWindow.name&&d.protocol!="javascript:"){m.clearInterval(r[a]);if(k._1(b)){b.apply(this,[k._c(c.contentWindow.name)])}}}catch(e){}}function C(a,b,c,d){var f=[new Date().getTime(),Math.floor((Math.random()*100000))].join(""),g={"icid":f};b=w(b);b=p(b,g);d=w(d);var h=[a,k._0(b)].join("?"),j=H(h,d);if(k._4()){s[g.icid]={callback:c,data:d}}else{r[j]=m.setInterval(function(){J(j,c)},200)}return{id:j,icid:f}}function u(a,b,c,d){var f=i.createElement("iframe");f.style.display="none";f.src="javascript: false;";f.width=0;f.height=0;f.style.border="none";b=w(b);d=w(d);i.body.appendChild(f);f.contentWindow.name=k._0(d);if(k._1(c)){k._b(f,"load",function(){try{c(f.contentWindow.document.documentElement.innerHTML)}catch(e){}})}f.contentWindow.location.replace([a,k._0(b)].join("?"))}function G(){try{return new XMLHttpRequest()}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null}function K(a,b,c,d){var f,g,h=G(),j="GET",n={};if(d){j="POST";n["Content-Type"]="application/x-www-form-urlencoded"}b=w(b);f=[a,b].join("?");h.open(j,f,true);for(g in n){h.setRequestHeader(g,n[g])}d=w(d);if(k._1(c)){h.onreadystatechange=function(){if(h.readyState==4&&h.status==200){c(h.responseText)}}}h.send(k._0(d))}function N(a){if(!k._1(a)){return""}jsonpCallback=k._j(16);m[jsonpCallback]=a;return"&c="+jsonpCallback}function L(a,b,c){var d=i.createElement('script');d.type="text/javascript";d.async=true;b+=N(c);b=w(b);d.src=[a,b].join("?");i.getElementsByTagName('head')[0].appendChild(d)}function P(b,c,d){var f,g,h="XMLHttpRequest";if(m[h]&&(g=new m[h]()).withCredentials!==undefined){var j=k._0(c);j=w(j);j+=N(d);f=[b,j].join("?");g.open("GET",f,true);g.withCredentials=true;g.onreadystatechange=function(a){if(g.readyState==4&&g.status==200){try{new Function(g.responseText)()}catch(a){}}else if(g.readyState==4&&g.status==0){L(b,c,d)}};g.send()}else{setTimeout(function(){L(b,c,d)},0)}}function Q(b,c,d,f){var g={qp:k._0(c),pd:k._0(f),u:b};var h={e:k._c(c).e};if(q._9()){h[q._v()]=q._9()}C(t,h,function(a){if(d){d(y._2(a.r))}},g)}function R(b,c,d){var f=new Image();if(k._1(d)){k._b(f,"load",function(a){d()})}c=w(c);f.src=[b,c].join("?");f.style.display="none";f.alt="";f.width=0;f.height=0;f.style.border="none";i.body.appendChild(f)}function E(a){var b=be._6();if(a.indexOf("LSESSIONID")==-1){a+="&LSESSIONID="+encodeURIComponent(b)}return a}function S(a){if(!s[a.data.icid]){return}if(a.data.s==v._u){q._p(s[a.data.icid].data,a.origin,a.source,v._q,a.data.icid)}else if(a.data.s==v._Q){if(k._1(s[a.data.icid].callback)){s[a.data.icid].callback.apply(this,[a.data.d]);delete s[a.data.icid]}}}function T(a,b,c,d,f,g){if(!a){return}c.t=a;c=E(k._0(c));if(q._9()){c+="&"+q._v()+"="+q._9()}if(g&&g.qs&&g.qs!=""){c+="&"+g.qs}switch(a){case"image":{R(b,c,d);break}case"iframe":{u(b,c,d,f);break}case"xframe":{C(b,c,d,f);break}case"jsonp":{L(b,c,d);break}case"ajax":{K(b,c,d,f);break}case"xpost":{Q(b,c,d,f);break}case"jsonpi":{P(b,c,d);break}default:{break}}}function O(a){q=a;if(k._4()){q._w(q._f._x,S)}}return{_1e:u,_J:C,_1f:L,_1g:R,_1h:K,_R:T,_I:v,_1i:s,_S:O}})();var B=(function(){var X={};var D="___so30306";if(!window[D]){window[D]=(function(){var i={},m={},r={},o={},t=true,z="bankofamerica.com",s="/",v=false,q="___so30306",H=0;function p(){var a=W._6(q),b=null;if(a){b=y._2(Z._a(a))}i=b!==null?b:i}function x(a){return m[a]||i[a]}function I(a,b){W._7(q,a,null,z,s,v,b)}function w(){return Z._5(y._3(i))}function J(a){if(H==0){return true}var b=3,c=q.length,d=(a+b+c);if(d<=H){return true}return false}function C(a,b){var c="",d=null,f=false;if(typeof i[a]!=='undefined'){d=i[a];f=true}i[a]=b;c=w();if(J(c.length)){I(c);return true}if(!f){delete i[a]}else{i[a]=d}return false}function u(a){var b=x(a);if(r[a]){for(var c=0;c<r[a].length;c++){r[a][c].apply(this,[b])}r[a]=[]}}function G(a){var b=x(a),c;if(o[a]){var d=[];for(var f=0,g=o[a].length;f<g;f++){d.push(o[a][f])}for(var f=0,g=d.length;f<g;f++){if(k._l(o[a],d[f])>-1){c=d[f].callback;c.apply(this,[b])}}}}function K(a,b,c){c=typeof c!=='undefined'?c:t;if(!(c&&C(a,b))){m[a]=b}else{delete m[a]}G(a);u(a)}function N(a,b,c){c=typeof c!=='undefined'?c:t;if(!k._k(m[a])){m[a]=[]}m[a].push(b);var d=P(a);if(c){C(a,d)}G(a);u(a)}function L(a,b,c){var d=x(a);if(d){b.apply(this,[d])}else{if(c===true){b(null)}else{if(!r[a]){r[a]=[]}r[a].push(b)}}}function P(a,b){return x(a)||b}function Q(a,b,c){var d=x(a);if(!o[a]){o[a]=[]}o[a].push({callback:b,reference:c});if(m[a]){b.apply(this,[d])}}function R(a){for(var b in o){for(var c=o[b].length-1;c>=0;c--){if(o[b][c].reference==a){o[b].splice(c,1)}}}}function E(b,c,d,f){L(b,function(a){c[b]=a;d.apply(this,[c])},f)}function S(c,d,f){var g=[],h={};g.push(d);for(var j=0,n=c.length;j<n;j++){(function(){var b=j;g.push(function(a){E(c[b],a,g[b],f)})})()}g[c.length].apply(this,[h])}function T(){var a;m={};i={};a=w();I(a)}function O(){if(t){p()}var a=P("lsh",""),b=bs._t(window["LSESSIONID"]);if(b!==a){T();K("lsh",b,true)}}return{cN:q,uC:I,get:L,set:K,push:N,poll:Q,clearPoll:R,getAll:S,syncGet:P,init:O}})()}return{_T:window[D].cN,_U:window[D].uC,get:window[D].get,set:window[D].set,push:window[D].push,poll:function(a,b){window[D].poll(a,b,X)},clearPoll:function(){window[D].clearPoll(X)},getAll:window[D].getAll,syncGet:window[D].syncGet,init:window[D].init}})();var cw=(function(){var c=0,d=1,f=2,g=3,h=4;function j(a){return Math.floor(Math.random()*a)}function n(a){return a}function i(a){var b=["t","jpkxctlifbe","ewvdt","e","d"];return b[a]}return{_5:n}})();var bG=(function(){function g(a){var b=/^https?:\/\/([\w\-\.]+)(\:\d+)?(\/|$)/i,c;if(a){c=a.match(b);if(c&&c.length>2){return'.'+c[1]}}return null}function h(a,b){var c=a.length-b.length;return(c>=0&&a.indexOf(b,c)===c)}function j(a,b){var c=g(a);if(c){for(var d=0,f=b.length;d<f;d++){if(h(c,b[d])){return true}}}return false}return{_V:j}})();var M=(function(){var i=window,m=document,r=i.location.href,o={},t=(i.location.protocol=='https:'?'https:':'http:'),z=i.location.host,s=null,v=[],q=0,H="jsonp",p="jsonp",x="si",I="e",w="e",J="sd",C="sdc",u=0,G=null,K=k._d(x,r,"0"),N=decodeURIComponent(k._d(w,i.name)||"")||(t+"//"+z),L=null,P=k._D("I3n.js"),Q=k._i("I3n.js",L),R="g8C",E=false,S=false,T=[".bankofamerica.com"],O=null,X=null,D="",Y="smsn",bd=Math.random(),bb=[],bc=[],U=[],V={_y:1,_W:2,_g:3,_1j:4,_1k:5,_x:6},bk={},ba="__tp",bH="29",bt=false,bu=false,bv=[],bl="__gt",F=["___tk30306","LSESSIONID",B._T,null,null],bm=true;F[4]="__gdic";bk[V._g]=bI;if(!window["PSESSIONID"]){window["PSESSIONID"]="jLd1p6QU4IcudiaGKx0p3zoDof2SpHnYVE6yEXavFtPX08UvNcNz48I="}if(!window["SSESSIONID"]){window["SSESSIONID"]="jLd1oKMf5YcldiiEKx8v0D4Jqf2SpHnYVE6yEXavFtPX08UvNcNz48I="}function bf(a,b){if(bv.indexOf(b)==-1){var c=bE.parse(a);c["hash_id"]=bF._P(c.trace);bi(bH,c,true);bv.push(b)}}function bJ(a,b,c){var d,f,g,h=o[a]||[];for(var j=0,n=h.length;j<n;j++){try{d=h[j].cb;g=h[j].localOnly;if(g&&!c){continue}f=h[j].ctx;if(typeof(b)!="object"){b=[]}d.apply(f,b)}catch(e){bf(e,d)}}}function bg(a,b,c){setTimeout(function(){bJ(a,b,c)},0)}function bw(a){if(a){var b=Array.prototype.slice.call(arguments,1);bg(a,b,true);B.set(I,{n:a,a:b,rid:bd})}}function bK(){B.poll(I,function(a){if(a.rid!=bd){bg(a.n,a.a,false)}})}function bn(a,b,c){o[a]=o[a]||[];o[a].push({cb:b,ctx:this,localOnly:c===true})}function bL(a,b){for(var c=o[a].length-1;c>=0;c--){if(o[a][c].cb===b){o[a].splice(c,1)}}}function bM(a,b,c,d){var f={};if(!bk[a]){bn(a,b,c)}else{bn(a,function(){bk[a](arguments,this,b,d,f)},c)}}function bI(a,b,c,d,f){if(!f["d"]){f["d"]=[]}if(!d){d=[]}var g=a[0];if(typeof(g)=="string"){g=y._2(g)}for(var h=0;h<d.length;h++){if(typeof(g[d[h]])!="undefined"){if(k._l(f["d"],d[h])<0){f["d"].push(d[h])}break}}if(f["d"].length==d.length){c.apply(b,a)}}function bx(a){var b=encodeURIComponent(y._3(a));if(G){return bD._O(b,G)}return Z._5(b)}function by(a,b,c){a.push({id:b,data:c})}function bN(a){var b=[];for(var c=0;c<a.length;c++){b.push(a[c].id)}return b.join(",")}function bO(){v=[];B.set(J,null);B.set(C,null)}function bP(){return v&&v.length>0}function bQ(){if(u){bz(function(){bi(null,null,true)},u)}}function bR(a,b){bw(V._g,a,b)}function bo(b){var c=b;return function(a){bR(a,c)}}function bA(a){return[a||Q,R].join("/")}function bB(a,b,c,d){bO();var f=bA(c);if(a.length>1000&&!bu){var g=i.location.protocol+"//"+i.location.host;var h=f.indexOf(g)==0?"ajax":"xpost";bj(h,f,{cid:b},d,{d:a})}else{bj(H,f,{d:a,cid:b},d,{})}}function bS(){var a=B.syncGet(J);if(a){var b=B.syncGet(C,"");bB(a,b,null,bo(null))}}function bi(a,b,c,d){if(b&&a){by(v,a,b)}if(bP()){var f=bx(v);B.set(J,f);var g=bN(v);B.set(C,g);if(c||f.length>=q){bB(f,g,d,bo(a))}}}function bT(a,b,c,d){var f=bA(d);var g=[];by(g,b,c);var h=bx(g);bj(a,f,{d:h,cid:b},bo(b),{})}function bU(){return{si:K,e:N,LSESSIONID:s}}function bj(a,b,c,d,f,g){c=c||{};var h=bU();if(typeof(c)=="string"){for(var j in h){if(k._d(j,c)==undefined){c+="&"+j+"="+h[j]}}}else{for(var j in h){c[j]=(typeof c[j]!=='undefined')?c[j]:h[j]}}bh._R(a,b,c,d,f,g)}function bz(a,b){var c,d=function(){try{if(typeof a==="function"){a()}else{throw new Error("Not a callback function");}}catch(error){bf(error,a)}};c=setInterval(d,b);bc.push(c);return c}function bV(a,b){var c,d=function(){try{if(typeof a==="function"){a()}else{throw new Error("Not a callback function");}}catch(error){bf(error,a)}};c=setTimeout(d,b);bb.push(c);return c}function bW(a,b,c){k._h(a,b,c);return true}function bp(b,c,d){var f=function(a){try{if(typeof d==="function"){d(a)}else{throw new Error("Not a callback function");}}catch(error){bf(error,d)}};if(k._b(b,c,f)){U.push({obj:b,type:c,func:f});return true}return false}function bX(a){if(!E){return false}var b=B.syncGet(Y);return k._8(b)&&a&&b[a]}function bY(a,b){if(!E||!a){return false}var c=B.syncGet(Y);c[a]=b;B.set(Y,c);return true}function bq(a){if(!i){return}if(m.readyState=='complete'){a();return}bp(i,"load",a)}function bZ(){for(var a=0,b=U.length;a<b;a++){k._h(U[a].obj,U[a].type,U[a].func)}U=[]}function ca(){for(var a=0;a<bc.length;a++){clearInterval(bc[a])}bc=[];for(var a=0;a<bb.length;a++){clearTimeout(bb[a])}bb=[]}function cb(){bt=true}function cc(){bu=true}function cd(a){if(bt){return}bi(null,null,true);ca();B.clearPoll();bZ()}function ce(a){N=a}function cf(a,b,c,d,f){var g=y._3({d:a,s:d,icid:f});c.postMessage(g,b)}function cg(a){if(S||bG._V(a.origin,T)){var b=y._2(a.data);if(b){bg(V._x,[{data:b,source:a.source,origin:a.origin}],true)}}}function ch(a){var b=m.createElement("script");b.type="text/javascript";b.async=true;b.src=a;m.getElementsByTagName("head")[0].appendChild(b)}function ci(){var a,b=i.location.pathname,c=[];try{if(k._k(O)){c=O}else{if(k._8(O)){for(var d in O){a=k._z(d);if(a.test(b)){c=O[d];break}}}}for(var f=0,g=c.length;f<g;f++){ch(c[f])}}catch(e){}}function cj(){return(typeof(i[ba])=='string'?i[ba]:null)}function ck(a){i[ba]=a}function cl(){return ba}function cm(){return(typeof(i[bl])=='number'?i[bl]:null)}function cn(a){i[bl]=a}function co(){var c=function(){var a=X.split("."),b=k._m(i,a,0);if(k._1(b)){return b()}return null};try{return c()}catch(e){bf(e)}}function cp(){var a=co();if(a&&k._8(a)){if(k._B(a["t"])&&D){i[D]={t:a["t"]}}}}function cq(){i[ba]=(typeof(i[ba])=='string'?i[ba]:null);if(X){cp()}}function bC(d,f){W._r(F,function(a){if(a[F[0]]){var b=W._K;W._7(F[0],a[F[0]],null,b._s,b._L,b._M,true)}if(a[F[1]]){be._7(a[F[1]],true)}if(a[F[2]]){B._U(a[F[2]],true)}if(bm&&d){for(var c=0;c<F.length;c++){d[F[c]]=true}}f()})}function cr(a,b){var c=[];for(var d=0;d<a.length;d++){if(!(a[d]in b)){c.push(a[d])}}return c}function cs(c){var d,f="__gc30306";if(!bm||!i[f]){if(bm){var g={};for(var h=0;h<F.length;h++){g[F[h]]=false}i[f]=g}bC(i[f],c)}else{var j=cr(F,i[f]);if(j.length>0){for(var h=0;h<j.length;h++){i[f][j[h]]=false}bC(i[f],c)}else{d=i.setInterval(function(){var a=true;for(var b in i[f]){if(i[f][b]===false){a=false;break}}if(a){i.clearInterval(d);c()}},50)}}}function ct(){bg(V._y);bK();bQ();B.poll("rs",cd)}function cu(){bh._S(M);bp(window,"message",cg);if(W._N&&!k._n()&&(!m.referrer||k._o(m.referrer)!==k._o(r))){cs(br)}else{br()}}function br(){cq();s=be._6();B.init();ct();cn(new Date().getTime());bq(function(){bS();bg(V._W)});if(O){bq(ci)}if(E){var a=M._X.syncGet(Y);if(!k._8(a)){B.set(Y,{})}}}function cv(){be._e(Q,cu)}return{_1l:F,_1m:cb,_1n:cc,_w:bn,_1o:bL,_1p:bM,_Y:bw,_1q:bj,_Z:bi,_1r:bT,_f:V,_X:B,_1s:s,_u:br,_e:cv,_H:Q,_1t:bz,_1u:bV,_1v:bp,_1w:bW,_1x:bq,_10:E,_11:bX,_12:bY,_1y:ce,_p:cf,_1z:ck,_9:cj,_v:cl,_1A:cm,_1B:P}})();var cx=(function(){var d="4",f=window,g="get_SessionIdString";function h(){var a=g.split("."),b=k._m(f,a,0);if(b&&k._1(b)){var c=b();if(c){return c}}return false}function j(){var a={};a[d]=true;M._Y(M._f._g,a,d)}function n(){var a={},b=h();if(b){a["s"]=b;M._Z(d,a,true)}else{j()}}function i(){if(M._10){var a=M._11(d);var b=h();if(b){var c=bs._t(b);if(c!=a){n();M._12(d,c)}}}else{n()}}M._w(M._f._y,i);return{_1C:d}})();M._e()})();