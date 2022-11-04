// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,t=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,c){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===t.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((l="value"in c)&&(o.call(r,e)||u.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=c.value,r.__proto__=f):r[e]=c.value),s="get"in c,p="set"in c,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,e,c.get),p&&a&&a.call(r,e,c.set),r};function f(r,e,n){c(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r){return"number"==typeof r}function s(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function p(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+s(i):s(i)+r,t&&(r="-"+r)),r}var g=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!l(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===y.call(r.specifier)?y.call(n):g.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function d(r){return"string"==typeof r}var v=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,b=String.prototype.replace,A=/e\+(\d)$/,E=/e-(\d)$/,_=/^(\d+)$/,S=/^(\d+)e/,j=/\.0$/,U=/\.0*e/,x=/(\..*[^0])0*e/;function T(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":v(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=b.call(n,x,"$1e"),n=b.call(n,U,"e"),n=b.call(n,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=b.call(n,A,"e+0$1"),n=b.call(n,E,"e-0$1"),r.alternate&&(n=b.call(n,_,"$1."),n=b.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===m.call(r.specifier)?m.call(n):w.call(n)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function O(r,e,n){var t=e-r.length;return t<0?r:r=n?r+I(t):I(t)+r}var V=String.fromCharCode,F=isNaN,k=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,n,t,i,a,o,u,c,f;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(d(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,F(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,F(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!F(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=F(a)?String(t.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=T(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=O(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,n,t,i;for(n=[],i=0,t=$.exec(r);t;)(e=r.slice(i,$.lastIndex-t[0].length)).length&&n.push(e),n.push(G(t)),i=$.lastIndex,t=$.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function H(r){return"string"==typeof r}function W(r){var e,n,t;if(!H(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return P.apply(null,n)}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function q(r){return Z(r>0?r-1:r+1)}var B=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===B||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr,er=Object.prototype.toString,nr=Object.prototype.hasOwnProperty,tr="function"==typeof Symbol?Symbol.toStringTag:"",ir=Q()?function(r){var e,n,t,i,a;if(null==r)return er.call(r);n=r[tr],a=tr,e=null!=(i=r)&&nr.call(i,a);try{r[tr]=void 0}catch(e){return er.call(r)}return t=er.call(r),e?r[tr]=n:delete r[tr],t}:function(r){return er.call(r)},ar="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===ir(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr,fr=rr,lr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===ir(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var gr,yr=cr,hr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===ir(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,mr=gr,br="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===ir(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r,Sr={uint16:wr,uint8:mr};(_r=new Sr.uint16(1))[0]=4660;var jr,Ur,xr=52===new Sr.uint8(_r.buffer)[0];!0===xr?(jr=1,Ur=0):(jr=0,Ur=1);var Tr={HIGH:jr,LOW:Ur},Ir=new yr(1),Or=new fr(Ir.buffer),Vr=Tr.HIGH,Fr=Tr.LOW;function kr(r,e){return Ir[0]=e,r[0]=Or[Vr],r[1]=Or[Fr],r}function Nr(r,e){return 1===arguments.length?kr([0,0],r):kr(r,e)}var Pr=!0===xr?0:1,$r=new yr(1),Gr=new fr($r.buffer);function Rr(r,e){return $r[0]=r,Gr[Pr]=e>>>0,$r[0]}function Hr(r){return 0|r}var Wr,Cr,Lr=!0===xr?1:0,Mr=new yr(1),Zr=new fr(Mr.buffer);function qr(r){return Mr[0]=r,Zr[Lr]}!0===xr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Br={HIGH:Wr,LOW:Cr},Xr=new yr(1),Yr=new fr(Xr.buffer),zr=Br.HIGH,Dr=Br.LOW;function Jr(r,e){return Yr[zr]=r,Yr[Dr]=e,Xr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Nr(Kr,r),n=Kr[0],n&=2147483647,t=qr(e),Jr(n|=t&=2147483648,Kr[1])}var re=!0===xr?1:0,ee=new yr(1),ne=new fr(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}var ie=1023,ae=1048576,oe=[1,1.5],ue=[0,.5849624872207642],ce=[0,1.350039202129749e-8];function fe(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function le(r,e,n,t){return C(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&J(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}fe((function(r){return le(r,[0,0],1,0)}),"assign",le);var se=[0,0],pe=[0,0];function ge(r,e){var n,t;return 0===e||0===r||C(r)||z(r)?r:(le(r,se,1,0),e+=se[1],e+=function(r){var e=qr(r);return(e=(2146435072&e)>>>20)-ie|0}(r=se[0]),e<-1074?Qr(0,r):e>1023?r<0?Y:B:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Nr(pe,r),n=pe[0],n&=2148532223,t*Jr(n|=e+ie<<20,pe[1])))}var ye=2147483647,he=1048575,de=1048576,ve=2147483647,we=1083179008,me=1e300,be=1e-300,Ae=[0,0],Ee=[0,0];function _e(r,e){var n,t,i,a,o,u,c,f,l,s,p,g,y,h;if(C(r)||C(e))return NaN;if(Nr(Ae,e),o=Ae[0],0===Ae[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return D(r);if(-.5===e)return 1/D(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(e===B)?0:B}(r,e)}if(Nr(Ae,r),a=Ae[0],0===Ae[1]){if(0===a)return function(r,e){return e===Y?B:e===B?0:e>0?q(e)?r:0:q(e)?Qr(B,r):B}(r,e);if(1===r)return 1;if(-1===r&&q(e))return-1;if(z(r))return r===Y?_e(-0,-e):e<0?0:B}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=J(r),n=a&ve|0,t=o&ve|0,c=o>>>31|0,u=(u=a>>>31|0)&&q(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&qr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*me*me:u*be*be;if(n>1072693248)return 0===c?u*me*me:u*be*be;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Rr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ee,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,l,s,p,g,y,h,d,v,w,m,b,A,E,_;return b=0,n<ae&&(b-=53,n=qr(e*=9007199254740992)),b+=(n>>20)-ie|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,b+=1,n-=ae),o=Rr(i=(w=(e=te(e,n))-(f=oe[E]))*(m=1/(e+f)),0),t=524288+(n>>1|536870912),c=te(0,t+=E<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Rr(c=3+(a=o*o)+(v+=(u=m*(w-o*c-o*(e-(c-f))))*(o+i)),0),h=(g=-7.028461650952758e-9*(s=Rr(s=(w=o*c)+(m=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(m-(s-w))+ce[E])-((y=Rr(y=(p=.9617967009544373*s)+g+(l=ue[E])+(d=b),0))-d-l-p),r[0]=y,r[1]=h,r}(Ee,i,n);if(s=(e-(f=Rr(e,0)))*p[0]+e*p[1],l=f*p[0],Nr(Ae,g=s+l),y=Hr(Ae[0]),h=Hr(Ae[1]),y>=we){if(0!=(y-we|h))return u*me*me;if(s+8008566259537294e-32>g-l)return u*me*me}else if((y&ve)>=1083231232){if(0!=(y-3230714880|h))return u*be*be;if(s<=g-l)return u*be*be}return g=function(r,e,n){var t,i,a,o,u,c,f,l,s,p;return s=((l=r&ye|0)>>20)-ie|0,f=0,l>1071644672&&(i=te(0,((f=r+(de>>s+1)>>>0)&~(he>>(s=((f&ye)>>20)-ie|0)))>>>0),f=(f&he|de)>>20-s>>>0,r<0&&(f=-f),e-=i),r=Hr(r=qr(c=1-((c=(a=.6931471824645996*(i=Rr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?ge(c,f):te(c,r)}(y,l,s),u*g}function Se(r){return"number"==typeof r}var je=X.prototype.toString,Ue=Q();function xe(r){return"object"==typeof r&&(r instanceof X||(Ue?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function Te(r){return Se(r)||xe(r)}function Ie(r){return r<B&&r>Y&&M(r)}function Oe(r){return Se(r)&&Ie(r)}function Ve(r){return xe(r)&&Ie(r.valueOf())}function Fe(r){return Oe(r)||Ve(r)}function ke(r){return Oe(r)&&r>=0}function Ne(r){return Ve(r)&&r.valueOf()>=0}function Pe(r){return ke(r)||Ne(r)}function $e(r){return"string"==typeof r}fe(Te,"isPrimitive",Se),fe(Te,"isObject",xe),fe(Fe,"isPrimitive",Oe),fe(Fe,"isObject",Ve),fe(Pe,"isPrimitive",ke),fe(Pe,"isObject",Ne);var Ge=String.prototype.valueOf,Re=Q();function He(r){return"object"==typeof r&&(r instanceof String||(Re?function(r){try{return Ge.call(r),!0}catch(r){return!1}}(r):"[object String]"===ir(r)))}function We(r){return $e(r)||He(r)}fe(We,"isPrimitive",$e),fe(We,"isObject",He);var Ce=9007199254740991;function Le(r,e){var n,t;if(!$e(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ke(e))throw new TypeError(W("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>Ce)throw new RangeError(W("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n}var Me=Math.ceil,Ze={};return f(Ze,"fromBinaryStringUint16",(function(r){var e,n;if(16!==r.length)throw new Error(W("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=_e(2,16-n-1));return e})),f(Ze,"toBinaryStringUint16",(function(r){var e;return e=function(r){var e,n,t="";for(e=16;r>0&&e;)t=(n=r/2)===(r=L(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t,i;if(!$e(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ke(e))throw new TypeError(W("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!$e(i=n))throw new TypeError(W("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>Ce)throw new RangeError(W("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(t=(e-r.length)/i.length)<=0?r:Le(i,t=Me(t))+r}(e,16,"0"),e})),Ze},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=index.js.map
