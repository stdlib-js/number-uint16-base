// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function E(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var S=String.fromCharCode,_=isNaN,j=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,n,t,a,o,f,s,l,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,_(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(O(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){return"string"==typeof r}function k(r){var e,n,t;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return I.apply(null,n)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=V,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,n.get),o&&$&&$.call(r,e,n.set),r};function W(r,e,n){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function q(r){return Z(r>0?r-1:r+1)}var B=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===B||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}function K(r,e,n){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var er,nr=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=rr()?function(r){var e,n,t,i,a;if(null==r)return nr.call(r);n=r[ar],a=ar,e=null!=(i=r)&&tr.call(i,a);try{r[ar]=void 0}catch(e){return nr.call(r)}return t=nr.call(r),e?r[ar]=n:delete r[ar],t}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===or(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=er,pr="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,NaN]),n=e,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,vr=sr,hr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,br="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,256,257]),n=e,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===or(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar=dr,Er="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,n;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Er&&n instanceof Uint16Array||"[object Uint16Array]"===or(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var jr,Ur={uint16:mr,uint8:Ar};(jr=new Ur.uint16(1))[0]=4660;var Ir,xr,Or=52===new Ur.uint8(jr.buffer)[0];!0===Or?(Ir=1,xr=0):(Ir=0,xr=1);var Tr={HIGH:Ir,LOW:xr},Fr=new vr(1),kr=new lr(Fr.buffer),Vr=Tr.HIGH,Nr=Tr.LOW;function Pr(r,e,n,t){return Fr[0]=r,e[t]=kr[Vr],e[t+n]=kr[Nr],e}function $r(r){return Pr(r,[0,0],1,0)}K($r,"assign",Pr);var Gr=!0===Or?0:1,Hr=new vr(1),Rr=new lr(Hr.buffer);function Wr(r,e){return Hr[0]=r,Rr[Gr]=e>>>0,Hr[0]}function Cr(r){return 0|r}var Lr,Mr,Zr=2147483647,qr=!0===Or?1:0,Br=new vr(1),Xr=new lr(Br.buffer);function Yr(r){return Br[0]=r,Xr[qr]}!0===Or?(Lr=1,Mr=0):(Lr=0,Mr=1);var zr={HIGH:Lr,LOW:Mr},Dr=new vr(1),Jr=new lr(Dr.buffer),Kr=zr.HIGH,Qr=zr.LOW;function re(r,e){return Jr[Kr]=r,Jr[Qr]=e,Dr[0]}var ee=[0,0];function ne(r,e){var n,t;return $r.assign(r,ee,1,0),n=ee[0],n&=Zr,t=Yr(e),re(n|=t&=2147483648,ee[1])}var te=!0===Or?1:0,ie=new vr(1),ae=new lr(ie.buffer);function oe(r,e){return ie[0]=r,ae[te]=e>>>0,ie[0]}var ue=1023,ce=1048576,fe=[1,1.5],se=[0,.5849624872207642],le=[0,1.350039202129749e-8];function pe(r,e,n,t){return C(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&J(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}K((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ge=[0,0],ye=[0,0];function de(r,e){var n,t;return 0===e||0===r||C(r)||z(r)?r:(pe(r,ge,1,0),e+=ge[1],e+=function(r){var e=Yr(r);return(e=(2146435072&e)>>>20)-ue|0}(r=ge[0]),e<-1074?ne(0,r):e>1023?r<0?Y:B:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,$r.assign(r,ye,1,0),n=ye[0],n&=2148532223,t*re(n|=e+ue<<20,ye[1])))}var ve=1048575,he=1048576,we=1083179008,be=1e300,me=1e-300,Ae=[0,0],Ee=[0,0];function Se(r,e){var n,t,i,a,o,u,c,f,s,l,p,g,y,d;if(C(r)||C(e))return NaN;if($r.assign(e,Ae,1,0),o=Ae[0],0===Ae[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return D(r);if(-.5===e)return 1/D(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(e===B)?0:B}(r,e)}if($r.assign(r,Ae,1,0),a=Ae[0],0===Ae[1]){if(0===a)return function(r,e){return e===Y?B:e===B?0:e>0?q(e)?r:0:q(e)?ne(B,r):B}(r,e);if(1===r)return 1;if(-1===r&&q(e))return-1;if(z(r))return r===Y?Se(-0,-e):e<0?0:B}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=J(r),n=a&Zr|0,t=o&Zr|0,c=o>>>31|0,u=(u=a>>>31|0)&&q(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Yr(r)&Zr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*be*be:u*me*me;if(n>1072693248)return 0===c?u*be*be:u*me*me;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Wr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ee,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,d,v,h,w,b,m,A,E,S;return m=0,n<ce&&(m-=53,n=Yr(e*=9007199254740992)),m+=(n>>20)-ue|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=ce),o=Wr(i=(w=(e=oe(e,n))-(f=fe[E]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=oe(0,t+=E<<18),h=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=Wr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(g=-7.028461650952758e-9*(l=Wr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+le[E])-((y=Wr(y=(p=.9617967009544373*l)+g+(s=se[E])+(v=m),0))-v-s-p),r[0]=y,r[1]=d,r}(Ee,i,n);if(g=(l=(e-(f=Wr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),$r.assign(g,Ae,1,0),y=Cr(Ae[0]),d=Cr(Ae[1]),y>=we){if(0!=(y-we|d))return u*be*be;if(l+8008566259537294e-32>g-s)return u*be*be}else if((y&Zr)>=1083231232){if(0!=(y-3230714880|d))return u*me*me;if(l<=g-s)return u*me*me}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Zr|0)>>20)-ue|0,f=0,s>1071644672&&(i=oe(0,((f=r+(he>>l+1)>>>0)&~(ve>>(l=((f&Zr)>>20)-ue|0)))>>>0),f=(f&ve|he)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Cr(r=Yr(c=1-((c=(a=.6931471824645996*(i=Wr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?de(c,f):oe(c,r)}(y,s,l),u*g}function _e(r){return"number"==typeof r}var je=X.prototype.toString,Ue=rr();function Ie(r){return"object"==typeof r&&(r instanceof X||(Ue?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function xe(r){return _e(r)||Ie(r)}function Oe(r){return r<B&&r>Y&&M(r)}function Te(r){return _e(r)&&Oe(r)}function Fe(r){return Ie(r)&&Oe(r.valueOf())}function ke(r){return Te(r)||Fe(r)}function Ve(r){return Te(r)&&r>=0}function Ne(r){return Fe(r)&&r.valueOf()>=0}function Pe(r){return Ve(r)||Ne(r)}function $e(r){return"string"==typeof r}K(xe,"isPrimitive",_e),K(xe,"isObject",Ie),K(ke,"isPrimitive",Te),K(ke,"isObject",Fe),K(Pe,"isPrimitive",Ve),K(Pe,"isObject",Ne);var Ge=String.prototype.valueOf,He=rr();function Re(r){return"object"==typeof r&&(r instanceof String||(He?function(r){try{return Ge.call(r),!0}catch(r){return!1}}(r):"[object String]"===or(r)))}function We(r){return $e(r)||Re(r)}K(We,"isPrimitive",$e),K(We,"isObject",Re);var Ce=9007199254740991,Le=void 0!==String.prototype.repeat,Me=String.prototype.repeat,Ze=Le?function(r,e){return Me.call(r,e)}:function(r,e){var n,t;if(0===r.length||0===e)return"";for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n},qe=Math.ceil;function Be(r,e,n){var t=(e-r.length)/n.length;return t<=0?r:(t=qe(t),Ze(n,t)+r)}var Xe={};return W(Xe,"fromBinaryStringUint16",(function(r){var e,n;if(16!==r.length)throw new Error(k("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=Se(2,16-n-1));return e})),W(Xe,"toBinaryStringUint16",(function(r){var e;return e=function(r){var e,n,t="";for(e=16;r>0&&e;)t=(n=r/2)===(r=L(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t;if(!$e(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ve(e))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!$e(t=n))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",t));if(0===t.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else t=" ";if(e>Ce)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Be(r,e,t)}(e,16,"0"),e})),Xe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=browser.js.map
