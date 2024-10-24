import{r as ot,J as It}from"./index-CmD5a2bH.js";var rt={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */rt.exports;(function(t,r){(function(e){var o=r&&!r.nodeType&&r,a=t&&!t.nodeType&&t,f=typeof ot=="object"&&ot;(f.global===f||f.window===f||f.self===f)&&(e=f);var p,n=2147483647,c=36,m=1,w=26,_=38,y=700,l=72,O=128,z="-",U=/^xn--/,H=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=c-m,d=Math.floor,j=String.fromCharCode,J;function A(s){throw new RangeError(g[s])}function T(s,i){for(var u=s.length,v=[];u--;)v[u]=i(s[u]);return v}function k(s,i){var u=s.split("@"),v="";u.length>1&&(v=u[0]+"@",s=u[1]),s=s.replace(h,".");var b=s.split("."),I=T(b,i).join(".");return v+I}function V(s){for(var i=[],u=0,v=s.length,b,I;u<v;)b=s.charCodeAt(u++),b>=55296&&b<=56319&&u<v?(I=s.charCodeAt(u++),(I&64512)==56320?i.push(((b&1023)<<10)+(I&1023)+65536):(i.push(b),u--)):i.push(b);return i}function tt(s){return T(s,function(i){var u="";return i>65535&&(i-=65536,u+=j(i>>>10&1023|55296),i=56320|i&1023),u+=j(i),u}).join("")}function K(s){return s-48<10?s-22:s-65<26?s-65:s-97<26?s-97:c}function Y(s,i){return s+22+75*(s<26)-((i!=0)<<5)}function Q(s,i,u){var v=0;for(s=u?d(s/y):s>>1,s+=d(s/i);s>C*w>>1;v+=c)s=d(s/C);return d(v+(C+1)*s/(s+_))}function B(s){var i=[],u=s.length,v,b=0,I=O,R=l,q,E,F,$,x,S,P,Z,M;for(q=s.lastIndexOf(z),q<0&&(q=0),E=0;E<q;++E)s.charCodeAt(E)>=128&&A("not-basic"),i.push(s.charCodeAt(E));for(F=q>0?q+1:0;F<u;){for($=b,x=1,S=c;F>=u&&A("invalid-input"),P=K(s.charCodeAt(F++)),(P>=c||P>d((n-b)/x))&&A("overflow"),b+=P*x,Z=S<=R?m:S>=R+w?w:S-R,!(P<Z);S+=c)M=c-Z,x>d(n/M)&&A("overflow"),x*=M;v=i.length+1,R=Q(b-$,v,$==0),d(b/v)>n-I&&A("overflow"),I+=d(b/v),b%=v,i.splice(b++,0,I)}return tt(i)}function et(s){var i,u,v,b,I,R,q,E,F,$,x,S=[],P,Z,M,nt;for(s=V(s),P=s.length,i=O,u=0,I=l,R=0;R<P;++R)x=s[R],x<128&&S.push(j(x));for(v=b=S.length,b&&S.push(z);v<P;){for(q=n,R=0;R<P;++R)x=s[R],x>=i&&x<q&&(q=x);for(Z=v+1,q-i>d((n-u)/Z)&&A("overflow"),u+=(q-i)*Z,i=q,R=0;R<P;++R)if(x=s[R],x<i&&++u>n&&A("overflow"),x==i){for(E=u,F=c;$=F<=I?m:F>=I+w?w:F-I,!(E<$);F+=c)nt=E-$,M=c-$,S.push(j(Y($+nt%M,0))),E=d(nt/M);S.push(j(Y(E,0))),I=Q(u,Z,v==b),u=0,++v}++u,++i}return S.join("")}function At(s){return k(s,function(i){return U.test(i)?B(i.slice(4).toLowerCase()):i})}function xt(s){return k(s,function(i){return H.test(i)?"xn--"+et(i):i})}if(p={version:"1.4.1",ucs2:{decode:V,encode:tt},decode:B,encode:et,toASCII:xt,toUnicode:At},o&&a)if(t.exports==o)a.exports=p;else for(J in p)p.hasOwnProperty(J)&&(o[J]=p[J]);else e.punycode=p})(ot)})(rt,rt.exports);var Ct=rt.exports;const Tt=It(Ct);function qt(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var St=function(t,r,e,o){r=r||"&",e=e||"=";var a={};if(typeof t!="string"||t.length===0)return a;var f=/\+/g;t=t.split(r);var p=1e3;o&&typeof o.maxKeys=="number"&&(p=o.maxKeys);var n=t.length;p>0&&n>p&&(n=p);for(var c=0;c<n;++c){var m=t[c].replace(f,"%20"),w=m.indexOf(e),_,y,l,O;w>=0?(_=m.substr(0,w),y=m.substr(w+1)):(_=m,y=""),l=decodeURIComponent(_),O=decodeURIComponent(y),qt(a,l)?Lt(a[l])?a[l].push(O):a[l]=[a[l],O]:a[l]=O}return a},Lt=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"},X=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},_t=function(t,r,e,o){return r=r||"&",e=e||"=",t===null&&(t=void 0),typeof t=="object"?it(Pt(t),function(a){var f=encodeURIComponent(X(a))+e;return Et(t[a])?it(t[a],function(p){return f+encodeURIComponent(X(p))}).join(r):f+encodeURIComponent(X(t[a]))}).join(r):o?encodeURIComponent(X(o))+e+encodeURIComponent(X(t)):""},Et=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function it(t,r){if(t.map)return t.map(r);for(var e=[],o=0;o<t.length;o++)e.push(r(t[o],o));return e}var Pt=Object.keys||function(t){var r=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r},pt,ft,Ft=ft=St,Nt=pt=_t;function kt(t){return encodeURIComponent(t)}function $t(t){return decodeURIComponent(t)}var zt={decode:Ft,encode:Nt,parse:ft,stringify:pt,escape:kt,unescape:$t},Jt={isString:function(t){return typeof t=="string"},isObject:function(t){return typeof t=="object"&&t!==null},isNull:function(t){return t===null},isNullOrUndefined:function(t){return t==null}},Zt=Tt,N=Jt,Dt=G,Ht=re,mt=ne,Kt=ee,Bt=L;function L(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Mt=/^([a-z0-9.+-]+:)/i,Vt=/:[0-9]*$/,Yt=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Qt=["<",">",'"',"`"," ","\r",`
`,"	"],Wt=["{","}","|","\\","^","`"].concat(Qt),st=["'"].concat(Wt),ut=["%","/","?",";","#"].concat(st),lt=["/","?","#"],Xt=255,ct=/^[+a-z0-9A-Z_-]{0,63}$/,Gt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,te={javascript:!0,"javascript:":!0},ht={javascript:!0,"javascript:":!0},W={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},at=zt;function G(t,r,e){if(t&&N.isObject(t)&&t instanceof L)return t;var o=new L;return o.parse(t,r,e),o}L.prototype.parse=function(t,r,e){if(!N.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var o=t.indexOf("?"),a=o!==-1&&o<t.indexOf("#")?"?":"#",f=t.split(a),p=/\\/g;f[0]=f[0].replace(p,"/"),t=f.join(a);var n=t;if(n=n.trim(),!e&&t.split("#").length===1){var c=Yt.exec(n);if(c)return this.path=n,this.href=n,this.pathname=c[1],c[2]?(this.search=c[2],r?this.query=at.parse(this.search.substr(1)):this.query=this.search.substr(1)):r&&(this.search="",this.query={}),this}var m=Mt.exec(n);if(m){m=m[0];var w=m.toLowerCase();this.protocol=w,n=n.substr(m.length)}if(e||m||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var _=n.substr(0,2)==="//";_&&!(m&&ht[m])&&(n=n.substr(2),this.slashes=!0)}if(!ht[m]&&(_||m&&!W[m])){for(var y=-1,l=0;l<lt.length;l++){var O=n.indexOf(lt[l]);O!==-1&&(y===-1||O<y)&&(y=O)}var z,U;y===-1?U=n.lastIndexOf("@"):U=n.lastIndexOf("@",y),U!==-1&&(z=n.slice(0,U),n=n.slice(U+1),this.auth=decodeURIComponent(z)),y=-1;for(var l=0;l<ut.length;l++){var O=n.indexOf(ut[l]);O!==-1&&(y===-1||O<y)&&(y=O)}y===-1&&(y=n.length),this.host=n.slice(0,y),n=n.slice(y),this.parseHost(),this.hostname=this.hostname||"";var H=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!H)for(var h=this.hostname.split(/\./),l=0,g=h.length;l<g;l++){var C=h[l];if(C&&!C.match(ct)){for(var d="",j=0,J=C.length;j<J;j++)C.charCodeAt(j)>127?d+="x":d+=C[j];if(!d.match(ct)){var A=h.slice(0,l),T=h.slice(l+1),k=C.match(Gt);k&&(A.push(k[1]),T.unshift(k[2])),T.length&&(n="/"+T.join(".")+n),this.hostname=A.join(".");break}}}this.hostname.length>Xt?this.hostname="":this.hostname=this.hostname.toLowerCase(),H||(this.hostname=Zt.toASCII(this.hostname));var V=this.port?":"+this.port:"",tt=this.hostname||"";this.host=tt+V,this.href+=this.host,H&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),n[0]!=="/"&&(n="/"+n))}if(!te[w])for(var l=0,g=st.length;l<g;l++){var K=st[l];if(n.indexOf(K)!==-1){var Y=encodeURIComponent(K);Y===K&&(Y=escape(K)),n=n.split(K).join(Y)}}var Q=n.indexOf("#");Q!==-1&&(this.hash=n.substr(Q),n=n.slice(0,Q));var B=n.indexOf("?");if(B!==-1?(this.search=n.substr(B),this.query=n.substr(B+1),r&&(this.query=at.parse(this.query)),n=n.slice(0,B)):r&&(this.search="",this.query={}),n&&(this.pathname=n),W[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var V=this.pathname||"",et=this.search||"";this.path=V+et}return this.href=this.format(),this};function ee(t){return N.isString(t)&&(t=G(t)),t instanceof L?t.format():L.prototype.format.call(t)}L.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var r=this.protocol||"",e=this.pathname||"",o=this.hash||"",a=!1,f="";this.host?a=t+this.host:this.hostname&&(a=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&N.isObject(this.query)&&Object.keys(this.query).length&&(f=at.stringify(this.query));var p=this.search||f&&"?"+f||"";return r&&r.substr(-1)!==":"&&(r+=":"),this.slashes||(!r||W[r])&&a!==!1?(a="//"+(a||""),e&&e.charAt(0)!=="/"&&(e="/"+e)):a||(a=""),o&&o.charAt(0)!=="#"&&(o="#"+o),p&&p.charAt(0)!=="?"&&(p="?"+p),e=e.replace(/[?#]/g,function(n){return encodeURIComponent(n)}),p=p.replace("#","%23"),r+a+e+p+o};function re(t,r){return G(t,!1,!0).resolve(r)}L.prototype.resolve=function(t){return this.resolveObject(G(t,!1,!0)).format()};function ne(t,r){return t?G(t,!1,!0).resolveObject(r):r}L.prototype.resolveObject=function(t){if(N.isString(t)){var r=new L;r.parse(t,!1,!0),t=r}for(var e=new L,o=Object.keys(this),a=0;a<o.length;a++){var f=o[a];e[f]=this[f]}if(e.hash=t.hash,t.href==="")return e.href=e.format(),e;if(t.slashes&&!t.protocol){for(var p=Object.keys(t),n=0;n<p.length;n++){var c=p[n];c!=="protocol"&&(e[c]=t[c])}return W[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(t.protocol&&t.protocol!==e.protocol){if(!W[t.protocol]){for(var m=Object.keys(t),w=0;w<m.length;w++){var _=m[w];e[_]=t[_]}return e.href=e.format(),e}if(e.protocol=t.protocol,!t.host&&!ht[t.protocol]){for(var g=(t.pathname||"").split("/");g.length&&!(t.host=g.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),g[0]!==""&&g.unshift(""),g.length<2&&g.unshift(""),e.pathname=g.join("/")}else e.pathname=t.pathname;if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var y=e.pathname||"",l=e.search||"";e.path=y+l}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var O=e.pathname&&e.pathname.charAt(0)==="/",z=t.host||t.pathname&&t.pathname.charAt(0)==="/",U=z||O||e.host&&t.pathname,H=U,h=e.pathname&&e.pathname.split("/")||[],g=t.pathname&&t.pathname.split("/")||[],C=e.protocol&&!W[e.protocol];if(C&&(e.hostname="",e.port=null,e.host&&(h[0]===""?h[0]=e.host:h.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(g[0]===""?g[0]=t.host:g.unshift(t.host)),t.host=null),U=U&&(g[0]===""||h[0]==="")),z)e.host=t.host||t.host===""?t.host:e.host,e.hostname=t.hostname||t.hostname===""?t.hostname:e.hostname,e.search=t.search,e.query=t.query,h=g;else if(g.length)h||(h=[]),h.pop(),h=h.concat(g),e.search=t.search,e.query=t.query;else if(!N.isNullOrUndefined(t.search)){if(C){e.hostname=e.host=h.shift();var d=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;d&&(e.auth=d.shift(),e.host=e.hostname=d.shift())}return e.search=t.search,e.query=t.query,(!N.isNull(e.pathname)||!N.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!h.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var j=h.slice(-1)[0],J=(e.host||t.host||h.length>1)&&(j==="."||j==="..")||j==="",A=0,T=h.length;T>=0;T--)j=h[T],j==="."?h.splice(T,1):j===".."?(h.splice(T,1),A++):A&&(h.splice(T,1),A--);if(!U&&!H)for(;A--;A)h.unshift("..");U&&h[0]!==""&&(!h[0]||h[0].charAt(0)!=="/")&&h.unshift(""),J&&h.join("/").substr(-1)!=="/"&&h.push("");var k=h[0]===""||h[0]&&h[0].charAt(0)==="/";if(C){e.hostname=e.host=k?"":h.length?h.shift():"";var d=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;d&&(e.auth=d.shift(),e.host=e.hostname=d.shift())}return U=U||e.host&&h.length,U&&!k&&h.unshift(""),h.length?e.pathname=h.join("/"):(e.pathname=null,e.path=null),(!N.isNull(e.pathname)||!N.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e};L.prototype.parseHost=function(){var t=this.host,r=Vt.exec(t);r&&(r=r[0],r!==":"&&(this.port=r.substr(1)),t=t.substr(0,t.length-r.length)),t&&(this.hostname=t)};function oe(t,r){for(var e=0,o=t.length-1;o>=0;o--){var a=t[o];a==="."?t.splice(o,1):a===".."?(t.splice(o,1),e++):e&&(t.splice(o,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}function se(){for(var t="",r=!1,e=arguments.length-1;e>=-1&&!r;e--){var o=e>=0?arguments[e]:"/";if(typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r=o.charAt(0)==="/")}return t=oe(he(t.split("/"),function(a){return!!a}),!r).join("/"),(r?"/":"")+t||"."}function he(t,r){if(t.filter)return t.filter(r);for(var e=[],o=0;o<t.length;o++)r(t[o],o,t)&&e.push(t[o]);return e}var vt=function(t){function r(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return r();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object),ae=Kt,dt=Dt,yt=Ht,gt=Bt,D=vt.URL,bt=vt.URLSearchParams,ie=/%/g,ue=/\\/g,le=/\n/g,ce=/\r/g,pe=/\t/g,fe=47;function me(t){var r=t??null;return!!(r!==null&&r!=null&&r.href&&r!=null&&r.origin)}function ve(t){if(t.hostname!=="")throw new TypeError('File URL host must be "localhost" or empty on browser');for(var r=t.pathname,e=0;e<r.length;e++)if(r[e]==="%"){var o=r.codePointAt(e+2)|32;if(r[e+1]==="2"&&o===102)throw new TypeError("File URL path must not include encoded / characters")}return decodeURIComponent(r)}function de(t){return t.includes("%")&&(t=t.replace(ie,"%25")),t.includes("\\")&&(t=t.replace(ue,"%5C")),t.includes(`
`)&&(t=t.replace(le,"%0A")),t.includes("\r")&&(t=t.replace(ce,"%0D")),t.includes("	")&&(t=t.replace(pe,"%09")),t}var wt=function(t){if(typeof t>"u")throw new TypeError('The "domain" argument must be specified');return new D("http://"+t).hostname},Ot=function(t){if(typeof t>"u")throw new TypeError('The "domain" argument must be specified');return new D("http://"+t).hostname},jt=function(t){var r=new D("file://"),e=se(t),o=t.charCodeAt(t.length-1);return o===fe&&e[e.length-1]!=="/"&&(e+="/"),r.pathname=de(e),r},Rt=function(t){if(!me(t)&&typeof t!="string")throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type '+typeof t+" ("+t+")");var r=new D(t);if(r.protocol!=="file:")throw new TypeError("The URL must be of scheme file");return ve(r)},Ut=function(t,r){var e,o,a;if(r===void 0&&(r={}),!(t instanceof D))return ae(t);if(typeof r!="object"||r===null)throw new TypeError('The "options" argument must be of type object.');var f=(e=r.auth)!=null?e:!0,p=(o=r.fragment)!=null?o:!0,n=(a=r.search)!=null?a:!0,c=new D(t.toString());return f||(c.username="",c.password=""),p||(c.hash=""),n||(c.search=""),c.toString()},ye={format:Ut,parse:dt,resolve:yt,resolveObject:mt,Url:gt,URL:D,URLSearchParams:bt,domainToASCII:wt,domainToUnicode:Ot,pathToFileURL:jt,fileURLToPath:Rt};const be=Object.freeze(Object.defineProperty({__proto__:null,URL:D,URLSearchParams:bt,Url:gt,default:ye,domainToASCII:wt,domainToUnicode:Ot,fileURLToPath:Rt,format:Ut,parse:dt,pathToFileURL:jt,resolve:yt,resolveObject:mt},Symbol.toStringTag,{value:"Module"}));export{be as u};
