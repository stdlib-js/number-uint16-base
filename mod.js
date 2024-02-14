// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,b,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,g,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function S(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+S(e):S(e)+r}var E=String.fromCharCode,_=isNaN,j=Array.isArray;function U(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,n,e,a,o,f,l,s,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=T.exec(r);e;)(t=r.slice(i,T.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=T.lastIndex,e=T.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function k(r){var t,n;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return O.apply(null,t)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||H.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,t,n.get),o&&$&&$.call(r,t,n.set),r};function W(r,t,n){R(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function B(r){return Z(r>0?r-1:r+1)}var q=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===q||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}function K(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Q(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var rr=Q();var tr=Object.prototype.toString;var nr=Object.prototype.hasOwnProperty;function er(r,t){return null!=r&&nr.call(r,t)}var ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"";var or=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return tr.call(r);n=r[ar],t=er(r,ar);try{r[ar]=void 0}catch(t){return tr.call(r)}return e=tr.call(r),t?r[ar]=n:delete r[ar],e}:function(r){return tr.call(r)},ur="function"==typeof Uint32Array;var cr="function"==typeof Uint32Array?Uint32Array:null;var fr,lr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===or(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr=fr,pr="function"==typeof Float64Array;var gr="function"==typeof Float64Array?Float64Array:null;var vr,yr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr=vr,hr="function"==typeof Uint8Array;var br="function"==typeof Uint8Array?Uint8Array:null;var wr,mr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===or(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Sr=wr,Ar="function"==typeof Uint16Array;var Er="function"==typeof Uint16Array?Uint16Array:null;var _r,jr="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,t,n;if("function"!=typeof Er)return!1;try{t=new Er(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===or(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Ur,Or={uint16:_r,uint8:Sr};(Ur=new Or.uint16(1))[0]=4660;var Tr,Ir,xr=52===new Or.uint8(Ur.buffer)[0];!0===xr?(Tr=1,Ir=0):(Tr=0,Ir=1);var Fr={HIGH:Tr,LOW:Ir},kr=new dr(1),Vr=new sr(kr.buffer),Nr=Fr.HIGH,Pr=Fr.LOW;function $r(r,t,n,e){return kr[0]=r,t[e]=Vr[Nr],t[e+n]=Vr[Pr],t}function Gr(r){return $r(r,[0,0],1,0)}K(Gr,"assign",$r);var Hr=!0===xr?0:1,Rr=new dr(1),Wr=new sr(Rr.buffer);function Cr(r,t){return Rr[0]=r,Wr[Hr]=t>>>0,Rr[0]}function Lr(r){return 0|r}var Mr,Zr,Br=!0===xr?1:0,qr=new dr(1),Xr=new sr(qr.buffer);function Yr(r){return qr[0]=r,Xr[Br]}!0===xr?(Mr=1,Zr=0):(Mr=0,Zr=1);var zr={HIGH:Mr,LOW:Zr},Dr=new dr(1),Jr=new sr(Dr.buffer),Kr=zr.HIGH,Qr=zr.LOW;function rt(r,t){return Jr[Kr]=r,Jr[Qr]=t,Dr[0]}var tt=[0,0];function nt(r,t){var n,e;return Gr.assign(r,tt,1,0),n=tt[0],n&=2147483647,e=Yr(t),rt(n|=e&=2147483648,tt[1])}var et=!0===xr?1:0,it=new dr(1),at=new sr(it.buffer);function ot(r,t){return it[0]=r,at[et]=t>>>0,it[0]}var ut=[1,1.5],ct=[0,.5849624872207642],ft=[0,1.350039202129749e-8];function lt(r,t,n,e){return C(r)||z(r)?(t[e]=r,t[e+n]=0,t):0!==r&&J(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}K((function(r){return lt(r,[0,0],1,0)}),"assign",lt);var st=[0,0],pt=[0,0];function gt(r,t){var n,e;return 0===t||0===r||C(r)||z(r)?r:(lt(r,st,1,0),t+=st[1],t+=function(r){var t=Yr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=st[0]),t<-1074?nt(0,r):t>1023?r<0?Y:q:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Gr.assign(r,pt,1,0),n=pt[0],n&=2148532223,e*rt(n|=t+1023<<20,pt[1])))}var vt=1e300,yt=1e-300,dt=[0,0],ht=[0,0];function bt(r,t){var n,e,i,a,o,u,c,f,l,s,p,g,v,y;if(C(r)||C(t))return NaN;if(Gr.assign(t,dt,1,0),o=dt[0],0===dt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return D(r);if(-.5===t)return 1/D(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(z(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(t===q)?0:q}(r,t)}if(Gr.assign(r,dt,1,0),a=dt[0],0===dt[1]){if(0===a)return function(r,t){return t===Y?q:t===q?0:t>0?B(t)?r:0:B(t)?nt(q,r):q}(r,t);if(1===r)return 1;if(-1===r&&B(t))return-1;if(z(r))return r===Y?bt(-0,-t):t<0?0:q}if(r<0&&!1===M(t))return(r-r)/(r-r);if(i=J(r),n=2147483647&a|0,e=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&B(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Yr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?u*vt*vt:u*yt*yt;if(n>1072693248)return 0===c?u*vt*vt:u*yt*yt;p=function(r,t){var n,e,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=n,r}(ht,i)}else p=function(r,t,n){var e,i,a,o,u,c,f,l,s,p,g,v,y,d,h,b,w,m,S,A,E;return m=0,n<1048576&&(m-=53,n=Yr(t*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(S=1048575&n|0),S<=235662?A=0:S<767610?A=1:(A=0,m+=1,n-=1048576),o=Cr(i=(b=(t=ot(t,n))-(f=ut[A]))*(w=1/(t+f)),0),e=524288+(n>>1|536870912),c=ot(0,e+=A<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Cr(c=3+(a=o*o)+(h+=(u=w*(b-o*c-o*(t-(c-f))))*(o+i)),0),y=(g=-7.028461650952758e-9*(s=Cr(s=(b=o*c)+(w=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(w-(s-b))+ft[A])-((v=Cr(v=(p=.9617967009544373*s)+g+(l=ct[A])+(d=m),0))-d-l-p),r[0]=v,r[1]=y,r}(ht,i,n);if(g=(s=(t-(f=Cr(t,0)))*p[0]+t*p[1])+(l=f*p[0]),Gr.assign(g,dt,1,0),v=Lr(dt[0]),y=Lr(dt[1]),v>=1083179008){if(0!=(v-1083179008|y))return u*vt*vt;if(s+8008566259537294e-32>g-l)return u*vt*vt}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|y))return u*yt*yt;if(s<=g-l)return u*yt*yt}return g=function(r,t,n){var e,i,a,o,u,c,f,l,s,p,g;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=a=ot(0,e)),r=Lr(r=Yr(f=1-((f=(o=.6931471824645996*(a=Cr(a=n+t,0)))+(u=.6931471805599453*(n-(a-t))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?gt(f,l):ot(f,r)}(v,l,s),u*g}function wt(r){var t,n;if(16!==r.length)throw new Error(k("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(t=0,n=0;n<r.length;n++)"1"===r[n]&&(t+=bt(2,16-n-1));return t}function mt(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function St(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function At(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Et(r){return"number"==typeof r}var _t=Q();function jt(){return _t&&"symbol"==typeof Symbol.toStringTag}var Ut=Object.prototype.toString;var Ot="function"==typeof Symbol?Symbol:void 0,Tt="function"==typeof Ot?Ot.toStringTag:"";var It=jt()?function(r){var t,n,e;if(null==r)return Ut.call(r);n=r[Tt],t=er(r,Tt);try{r[Tt]=void 0}catch(t){return Ut.call(r)}return e=Ut.call(r),t?r[Tt]=n:delete r[Tt],e}:function(r){return Ut.call(r)},xt=X.prototype.toString;var Ft=jt();function kt(r){return"object"==typeof r&&(r instanceof X||(Ft?function(r){try{return xt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===It(r)))}function Vt(r){return Et(r)||kt(r)}function Nt(r){return r<q&&r>Y&&M(r)}function Pt(r){return Et(r)&&Nt(r)}function $t(r){return kt(r)&&Nt(r.valueOf())}function Gt(r){return Pt(r)||$t(r)}function Ht(r){return Pt(r)&&r>=0}function Rt(r){return $t(r)&&r.valueOf()>=0}function Wt(r){return Ht(r)||Rt(r)}function Ct(r){return"string"==typeof r}At(Vt,"isPrimitive",Et),At(Vt,"isObject",kt),St(Gt,"isPrimitive",Pt),St(Gt,"isObject",$t),mt(Wt,"isPrimitive",Ht),mt(Wt,"isObject",Rt);var Lt=Q();function Mt(){return Lt&&"symbol"==typeof Symbol.toStringTag}var Zt=Object.prototype.toString;var Bt="function"==typeof Symbol?Symbol:void 0,qt="function"==typeof Bt?Bt.toStringTag:"";var Xt=Mt()?function(r){var t,n,e;if(null==r)return Zt.call(r);n=r[qt],t=er(r,qt);try{r[qt]=void 0}catch(t){return Zt.call(r)}return e=Zt.call(r),t?r[qt]=n:delete r[qt],e}:function(r){return Zt.call(r)},Yt=String.prototype.valueOf;var zt=Mt();function Dt(r){return"object"==typeof r&&(r instanceof String||(zt?function(r){try{return Yt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Xt(r)))}function Jt(r){return Ct(r)||Dt(r)}mt(Jt,"isPrimitive",Ct),mt(Jt,"isObject",Dt);var Kt=void 0!==String.prototype.repeat;var Qt=String.prototype.repeat;var rn=Kt?function(r,t){return Qt.call(r,t)}:function(r,t){var n,e;if(0===r.length||0===t)return"";for(n="",e=t;1==(1&e)&&(n+=r),0!=(e>>>=1);)r+=r;return n},tn=Math.ceil;function nn(r,t,n){var e=(t-r.length)/n.length;return e<=0?r:(e=tn(e),rn(n,e)+r)}var en=Math.floor;function an(r){var t;return t=function(r){var t,n,e="";for(t=16;r>0&&t;)e=(n=r/2)===(r=en(n))?"0"+e:"1"+e,t-=1;return e}(r),t=function(r,t,n){var e;if(!Ct(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ht(t))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Ct(e=n))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(t>9007199254740991)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return nn(r,t,e)}(t,16,"0"),t}var on={};W(on,"fromBinaryStringUint16",wt),W(on,"toBinaryStringUint16",an);export{on as default,wt as fromBinaryStringUint16,an as toBinaryStringUint16};
//# sourceMappingURL=mod.js.map
