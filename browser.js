// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,i=Object.prototype,u=i.toString,o=i.__defineGetter__,f=i.__defineSetter__,a=i.__lookupGetter__,c=i.__lookupSetter__,l=e,y=function(n,t,r){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(n,t)||c.call(n,t)?(e=n.__proto__,n.__proto__=i,delete n[t],n[t]=r.value,n.__proto__=e):n[t]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(n,t,r.get),p&&f&&f.call(n,t,r.set),n},p=r()?l:y,m=p,s=function(n,t,r){m(n,t,{configurable:!1,enumerable:!0,writable:!1,value:r})},g=function(n){return n!=n},v=Math.floor,b=v,w=function(n){return b(n)===n},h=w,d=function(n){return h(n/2)},A=function(n){return d(n>0?n-1:n+1)},_=Number.POSITIVE_INFINITY,j=Number,O=j.NEGATIVE_INFINITY,U=_,S=O,E=function(n){return n===U||n===S},T=Math.sqrt,P=function(n){return Math.abs(n)},I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),F=function(){return I&&"symbol"==typeof Symbol.toStringTag},N=Object.prototype.toString,V=N,H=function(n){return V.call(n)},x=Object.prototype.hasOwnProperty,G=function(n,t){return null!=n&&x.call(n,t)},L="function"==typeof Symbol?Symbol.toStringTag:"",M=G,W=L,R=N,k=H,q=function(n){var t,r,e;if(null==n)return R.call(n);r=n[W],t=M(n,W);try{n[W]=void 0}catch(t){return R.call(n)}return e=R.call(n),t?n[W]=r:delete n[W],e},B=F()?q:k,Y=B,C="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,D=function(n){return C&&n instanceof Uint32Array||"[object Uint32Array]"===Y(n)},J=z,K=function(){var n,t;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),n=D(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint32Array?Uint32Array:void 0,X=function(){throw new Error("not implemented")},Z=K()?Q:X,$=B,nn="function"==typeof Float64Array,tn="function"==typeof Float64Array?Float64Array:null,rn=function(n){return nn&&n instanceof Float64Array||"[object Float64Array]"===$(n)},en=tn,un=function(){var n,t;if("function"!=typeof en)return!1;try{t=new en([1,3.14,-3.14,NaN]),n=rn(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},on="function"==typeof Float64Array?Float64Array:void 0,fn=function(){throw new Error("not implemented")},an=un()?on:fn,cn=B,ln="function"==typeof Uint8Array,yn="function"==typeof Uint8Array?Uint8Array:null,pn=function(n){return ln&&n instanceof Uint8Array||"[object Uint8Array]"===cn(n)},mn=yn,sn=function(){var n,t;if("function"!=typeof mn)return!1;try{t=new mn(t=[1,3.14,-3.14,256,257]),n=pn(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},gn="function"==typeof Uint8Array?Uint8Array:void 0,vn=function(){throw new Error("not implemented")},bn=sn()?gn:vn,wn=B,hn="function"==typeof Uint16Array,dn="function"==typeof Uint16Array?Uint16Array:null,An=function(n){return hn&&n instanceof Uint16Array||"[object Uint16Array]"===wn(n)},_n=dn,jn=function(){var n,t;if("function"!=typeof _n)return!1;try{t=new _n(t=[1,3.14,-3.14,65536,65537]),n=An(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},On="function"==typeof Uint16Array?Uint16Array:void 0,Un=function(){throw new Error("not implemented")},Sn={uint16:jn()?On:Un,uint8:bn};(n=new Sn.uint16(1))[0]=4660;var En,Tn,Pn=52===new Sn.uint8(n.buffer)[0];!0===Pn?(En=1,Tn=0):(En=0,Tn=1);var In,Fn,Nn=Z,Vn={HIGH:En,LOW:Tn},Hn=new an(1),xn=new Nn(Hn.buffer),Gn=Vn.HIGH,Ln=Vn.LOW,Mn=function(n,t){return Hn[0]=t,n[0]=xn[Gn],n[1]=xn[Ln],n},Wn=function(n,t){return 1===arguments.length?Mn([0,0],n):Mn(n,t)},Rn=Wn,kn=Z,qn=!0===Pn?0:1,Bn=new an(1),Yn=new kn(Bn.buffer),Cn=function(n,t){return Bn[0]=n,Yn[qn]=t>>>0,Bn[0]},zn=Cn,Dn=function(n){return 0|n},Jn=Z,Kn=!0===Pn?1:0,Qn=new an(1),Xn=new Jn(Qn.buffer),Zn=function(n){return Qn[0]=n,Xn[Kn]};!0===Pn?(In=1,Fn=0):(In=0,Fn=1);var $n=Z,nt={HIGH:In,LOW:Fn},tt=new an(1),rt=new $n(tt.buffer),et=nt.HIGH,it=nt.LOW,ut=function(n,t){return rt[et]=n,rt[it]=t,tt[0]},ot=ut,ft=Rn,at=Zn,ct=ot,lt=[0,0],yt=function(n,t){var r,e;return ft(lt,n),r=lt[0],r&=2147483647,e=at(t),ct(r|=e&=2147483648,lt[1])},pt=A,mt=yt,st=O,gt=_,vt=function(n,t){return t===st?gt:t===gt?0:t>0?pt(t)?n:0:pt(t)?mt(gt,n):gt},bt=Zn,wt=function(n,t){return(2147483647&bt(n))<=1072693247?t<0?1/0:0:t>0?1/0:0},ht=P,dt=_,At=function(n,t){return-1===n?(n-n)/(n-n):1===n?1:ht(n)<1==(t===dt)?0:dt},_t=Z,jt=!0===Pn?1:0,Ot=new an(1),Ut=new _t(Ot.buffer),St=function(n,t){return Ot[0]=n,Ut[jt]=t>>>0,Ot[0]},Et=Zn,Tt=zn,Pt=St,It=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},Ft=1048576,Nt=[1,1.5],Vt=[0,.5849624872207642],Ht=[0,1.350039202129749e-8],xt=zn,Gt=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},Lt=E,Mt=g,Wt=P,Rt=function(n,t){return Mt(t)||Lt(t)?(n[0]=t,n[1]=0,n):0!==t&&Wt(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)},kt=function(n,t){return 1===arguments.length?Rt([0,0],n):Rt(n,t)},qt=Zn,Bt=function(n){var t=qt(n);return(t=(2146435072&t)>>>20)-1023|0},Yt=_,Ct=O,zt=g,Dt=E,Jt=yt,Kt=kt,Qt=Bt,Xt=Rn,Zt=ot,$t=[0,0],nr=[0,0],tr=function(n,t){var r,e;return 0===t||0===n||zt(n)||Dt(n)?n:(Kt($t,n),t+=$t[1],(t+=Qt(n=$t[0]))<-1074?Jt(0,n):t>1023?n<0?Ct:Yt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Xt(nr,n),r=nr[0],r&=2148532223,e*Zt(r|=t+1023<<20,nr[1])))},rr=Zn,er=St,ir=zn,ur=Dn,or=tr,fr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},ar=2147483647,cr=1048575,lr=1048576,yr=g,pr=A,mr=E,sr=w,gr=T,vr=P,br=Rn,wr=zn,hr=Dn,dr=O,Ar=_,_r=vt,jr=wt,Or=At,Ur=function(n,t,r){var e,i,u,o,f,a,c,l,y,p,m,s,g,v,b,w,h,d,A,_;return d=0,r<Ft&&(d-=53,r=Et(t*=9007199254740992)),d+=(r>>20)-1023|0,r=1072693248|(A=1048575&r|0),A<=235662?_=0:A<767610?_=1:(_=0,d+=1,r-=Ft),e=524288+(r>>1|536870912),f=(h=1/((t=Pt(t,r))+(c=Nt[_])))*((w=t-c)-(o=Tt(i=w*h,0))*(a=Pt(0,e+=_<<18))-o*(t-(a-c))),b=(u=i*i)*u*It(u),a=Tt(a=3+(u=o*o)+(b+=f*(o+i)),0),g=(m=-7.028461650952758e-9*(y=Tt(y=(w=o*a)+(h=f*a+(b-(a-3-u))*i),0))+.9617966939259756*(h-(y-w))+Ht[_])-((s=Tt(s=(p=.9617967009544373*y)+m+(l=Vt[_])+(v=d),0))-v-l-p),n[0]=s,n[1]=g,n},Sr=function(n,t){var r,e,i,u,o;return r=(o=1.9259629911266175e-8*(i=t-1)-i*i*Gt(i)*1.4426950408889634)-((e=xt(e=(u=1.4426950216293335*i)+o,0))-u),n[0]=e,n[1]=r,n},Er=function(n,t,r){var e,i,u,o,f,a,c,l,y;return y=((l=n&ar|0)>>20)-1023|0,c=0,l>1071644672&&(i=er(0,((c=n+(lr>>y+1)>>>0)&~(cr>>(y=((c&ar)>>20)-1023|0)))>>>0),c=(c&cr|lr)>>20-y>>>0,n<0&&(c=-c),t-=i),f=(o=.6931471805599453*(r-((i=ir(i=r+t,0))-t))+-1.904654299957768e-9*i)-((a=(u=.6931471824645996*i)+o)-u),e=a-(i=a*a)*fr(i),n=rr(a=1-(a*e/(e-2)-(f+a*f)-a)),n=ur(n),a=(n+=c<<20>>>0)>>20<=0?or(a,c):er(a,n)},Tr=2147483647,Pr=1083179008,Ir=1e300,Fr=1e-300,Nr=[0,0],Vr=[0,0],Hr=function n(t,r){var e,i,u,o,f,a,c,l,y,p,m,s,g,v;if(yr(t)||yr(r))return NaN;if(br(Nr,r),f=Nr[0],0===Nr[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return gr(t);if(-.5===r)return 1/gr(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(mr(r))return Or(t,r)}if(br(Nr,t),o=Nr[0],0===Nr[1]){if(0===o)return _r(t,r);if(1===t)return 1;if(-1===t&&pr(r))return-1;if(mr(t))return t===dr?n(-0,-r):r<0?0:Ar}if(t<0&&!1===sr(r))return(t-t)/(t-t);if(u=vr(t),e=o&Tr|0,i=f&Tr|0,c=f>>>31|0,a=(a=o>>>31|0)&&pr(r)?-1:1,i>1105199104){if(i>1139802112)return jr(t,r);if(e<1072693247)return 1===c?a*Ir*Ir:a*Fr*Fr;if(e>1072693248)return 0===c?a*Ir*Ir:a*Fr*Fr;m=Sr(Vr,u)}else m=Ur(Vr,u,e);if(p=(r-(l=wr(r,0)))*m[0]+r*m[1],y=l*m[0],br(Nr,s=p+y),g=hr(Nr[0]),v=hr(Nr[1]),g>=Pr){if(0!=(g-Pr|v))return a*Ir*Ir;if(p+8008566259537294e-32>s-y)return a*Ir*Ir}else if((g&Tr)>=1083231232){if(0!=(g-3230714880|v))return a*Fr*Fr;if(p<=s-y)return a*Fr*Fr}return a*(s=Er(g,y,p))},xr=Hr,Gr=function(n){var t,r;if(16!==n.length)throw new Error("invalid argument. Input string must have a length equal to 16. Value: `"+n+"`.");for(t=0,r=0;r<n.length;r++)"1"===n[r]&&(t+=xr(2,16-r-1));return t},Lr=p,Mr=function(n,t,r){Lr(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},Wr=function(n){return"number"==typeof n},Rr=j.prototype.toString,kr=B,qr=j,Br=function(n){try{return Rr.call(n),!0}catch(n){return!1}},Yr=F(),Cr=function(n){return"object"==typeof n&&(n instanceof qr||(Yr?Br(n):"[object Number]"===kr(n)))},zr=Wr,Dr=Cr,Jr=Mr,Kr=function(n){return zr(n)||Dr(n)},Qr=Cr;Jr(Kr,"isPrimitive",Wr),Jr(Kr,"isObject",Qr);var Xr=_,Zr=O,$r=w,ne=function(n){return n<Xr&&n>Zr&&$r(n)},te=Kr.isPrimitive,re=ne,ee=function(n){return te(n)&&re(n)},ie=Kr.isObject,ue=ne,oe=function(n){return ie(n)&&ue(n.valueOf())},fe=ee,ae=oe,ce=Mr,le=function(n){return fe(n)||ae(n)},ye=oe;ce(le,"isPrimitive",ee),ce(le,"isObject",ye);var pe=le.isPrimitive,me=function(n){return pe(n)&&n>=0},se=le.isObject,ge=function(n){return se(n)&&n.valueOf()>=0},ve=me,be=ge,we=Mr,he=function(n){return ve(n)||be(n)},de=ge;we(he,"isPrimitive",me),we(he,"isObject",de);var Ae=he,_e=function(n){return"string"==typeof n},je=String.prototype.valueOf,Oe=B,Ue=function(n){try{return je.call(n),!0}catch(n){return!1}},Se=F(),Ee=function(n){return"object"==typeof n&&(n instanceof String||(Se?Ue(n):"[object String]"===Oe(n)))},Te=_e,Pe=Ee,Ie=Mr,Fe=function(n){return Te(n)||Pe(n)},Ne=Ee;Ie(Fe,"isPrimitive",_e),Ie(Fe,"isObject",Ne);var Ve=Fe,He=9007199254740991,xe=Ae.isPrimitive,Ge=Ve.isPrimitive,Le=function(n,t){var r,e;if(!Ge(n))throw new TypeError("invalid argument. First argument must be a string. Value: `"+n+"`.");if(!xe(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===n.length||0===t)return"";if(n.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(r="",e=t;1==(1&e)&&(r+=n),0!=(e>>>=1);)n+=n;return r},Me=Math.ceil,We=Ae.isPrimitive,Re=Ve.isPrimitive,ke=Le,qe=Me,Be=He,Ye=function(n,t,r){var e,i;if(!Re(n))throw new TypeError("invalid argument. First argument must be a string. Value: `"+n+"`.");if(!We(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!Re(i=r))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(t>Be)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(e=(t-n.length)/i.length)<=0?n:(e=qe(e),ke(i,e)+n)},Ce=v,ze=Ye,De=function(n){var t,r,e="";for(t=16;n>0&&t;)e=(r=n/2)===(n=Ce(r))?"0"+e:"1"+e,t-=1;return e},Je=function(n){var t;return t=De(n),t=ze(t,16,"0")},Ke={};return s(Ke,"fromBinaryStringUint16",Gr),s(Ke,"toBinaryStringUint16",Je),Ke},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ns=t();
//# sourceMappingURL=browser.js.map
