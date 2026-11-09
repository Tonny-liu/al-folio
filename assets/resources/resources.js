var gT=Object.create;var zp=Object.defineProperty;var vT=Object.getOwnPropertyDescriptor;var _T=Object.getOwnPropertyNames;var yT=Object.getPrototypeOf,xT=Object.prototype.hasOwnProperty;var ST=(e,t,n)=>t in e?zp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var sa=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var MT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of _T(t))!xT.call(e,a)&&a!==n&&zp(e,a,{get:()=>t[a],enumerable:!(i=vT(t,a))||i.enumerable});return e};var ra=(e,t,n)=>(n=e!=null?gT(yT(e)):{},MT(t||!e||!e.__esModule?zp(n,"default",{value:e,enumerable:!0}):n,e));var U_=(e,t,n)=>ST(e,typeof t!="symbol"?t+"":t,n);var W_=sa(Kt=>{"use strict";var Vp=Symbol.for("react.transitional.element"),bT=Symbol.for("react.portal"),ET=Symbol.for("react.fragment"),TT=Symbol.for("react.strict_mode"),AT=Symbol.for("react.profiler"),wT=Symbol.for("react.consumer"),CT=Symbol.for("react.context"),RT=Symbol.for("react.forward_ref"),NT=Symbol.for("react.suspense"),DT=Symbol.for("react.memo"),B_=Symbol.for("react.lazy"),UT=Symbol.for("react.activity"),LT=Symbol.for("react.view_transition"),L_=Symbol.iterator;function IT(e){return e===null||typeof e!="object"?null:(e=L_&&e[L_]||e["@@iterator"],typeof e=="function"?e:null)}var z_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,H_={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=H_,this.updater=n||z_}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function V_(){}V_.prototype=Jr.prototype;function Gp(e,t,n){this.props=e,this.context=t,this.refs=H_,this.updater=n||z_}var kp=Gp.prototype=new V_;kp.constructor=Gp;F_(kp,Jr.prototype);kp.isPureReactComponent=!0;var I_=Array.isArray;function Hp(){}var Pe={H:null,A:null,T:null,S:null},G_=Object.prototype.hasOwnProperty;function Xp(e,t,n){var i=n.ref;return{$$typeof:Vp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function OT(e,t){return Xp(e.type,t,e.props)}function Wp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vp}function PT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O_=/\/+/g;function Fp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?PT(""+e.key):t.toString(36)}function BT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Hp,Hp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Zr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Vp:case bT:r=!0;break;case B_:return r=e._init,Zr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Fp(e,0):i,I_(a)?(n="",r!=null&&(n=r.replace(O_,"$&/")+"/"),Zr(a,t,n,"",function(c){return c})):a!=null&&(Wp(a)&&(a=OT(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(O_,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(I_(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Fp(i,l),r+=Zr(i,t,n,s,a);else if(l=IT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Fp(i,l++),r+=Zr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Zr(BT(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Gu(e,t,n){if(e==null)return e;var i=[],a=0;return Zr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function zT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var P_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function k_(e){var t=Pe.T,n={};n.types=t!==null?t.types:null,Pe.T=n;try{var i=e(),a=Pe.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Hp,P_)}catch(s){P_(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Pe.T=t}}function X_(e){var t=Pe.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else k_(X_.bind(null,e))}var FT={map:Gu,forEach:function(e,t,n){Gu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gu(e,function(){t++}),t},toArray:function(e){return Gu(e,function(t){return t})||[]},only:function(e){if(!Wp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Kt.Activity=UT;Kt.Children=FT;Kt.Component=Jr;Kt.Fragment=ET;Kt.Profiler=AT;Kt.PureComponent=Gp;Kt.StrictMode=TT;Kt.Suspense=NT;Kt.ViewTransition=LT;Kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pe;Kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Pe.H.useMemoCache(e)}};Kt.addTransitionType=X_;Kt.cache=function(e){return function(){return e.apply(null,arguments)}};Kt.cacheSignal=function(){return null};Kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=F_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!G_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Xp(e.type,a,i)};Kt.createContext=function(e){return e={$$typeof:CT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:wT,_context:e},e};Kt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)G_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Xp(e,s,a)};Kt.createRef=function(){return{current:null}};Kt.forwardRef=function(e){return{$$typeof:RT,render:e}};Kt.isValidElement=Wp;Kt.lazy=function(e){return{$$typeof:B_,_payload:{_status:-1,_result:e},_init:zT}};Kt.memo=function(e,t){return{$$typeof:DT,type:e,compare:t===void 0?null:t}};Kt.startTransition=k_;Kt.unstable_useCacheRefresh=function(){return Pe.H.useCacheRefresh()};Kt.use=function(e){return Pe.H.use(e)};Kt.useActionState=function(e,t,n){return Pe.H.useActionState(e,t,n)};Kt.useCallback=function(e,t){return Pe.H.useCallback(e,t)};Kt.useContext=function(e){return Pe.H.useContext(e)};Kt.useDebugValue=function(){};Kt.useDeferredValue=function(e,t){return Pe.H.useDeferredValue(e,t)};Kt.useEffect=function(e,t){return Pe.H.useEffect(e,t)};Kt.useEffectEvent=function(e){return Pe.H.useEffectEvent(e)};Kt.useId=function(){return Pe.H.useId()};Kt.useImperativeHandle=function(e,t,n){return Pe.H.useImperativeHandle(e,t,n)};Kt.useInsertionEffect=function(e,t){return Pe.H.useInsertionEffect(e,t)};Kt.useLayoutEffect=function(e,t){return Pe.H.useLayoutEffect(e,t)};Kt.useMemo=function(e,t){return Pe.H.useMemo(e,t)};Kt.useOptimistic=function(e,t){return Pe.H.useOptimistic(e,t)};Kt.useReducer=function(e,t,n){return Pe.H.useReducer(e,t,n)};Kt.useRef=function(e){return Pe.H.useRef(e)};Kt.useState=function(e){return Pe.H.useState(e)};Kt.useSyncExternalStore=function(e,t,n){return Pe.H.useSyncExternalStore(e,t,n)};Kt.useTransition=function(){return Pe.H.useTransition()};Kt.version="19.3.1"});var Kr=sa((ML,q_)=>{"use strict";q_.exports=W_()});var ny=sa(ke=>{"use strict";function Jp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<ku(a,t))e[i]=t,e[n]=a,n=i;else break t}}function oa(e){return e.length===0?null:e[0]}function Wu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>ku(o,n))l<a&&0>ku(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>ku(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function ku(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}ke.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Y_=performance,ke.unstable_now=function(){return Y_.now()}):(qp=Date,Z_=qp.now(),ke.unstable_now=function(){return qp.now()-Z_});var Y_,qp,Z_,La=[],ls=[],HT=1,Ti=null,Nn=3,Kp=!1,Xl=!1,Wl=!1,Qp=!1,Q_=typeof setTimeout=="function"?setTimeout:null,j_=typeof clearTimeout=="function"?clearTimeout:null,J_=typeof setImmediate<"u"?setImmediate:null;function Xu(e){for(var t=oa(ls);t!==null;){if(t.callback===null)Wu(ls);else if(t.startTime<=e)Wu(ls),t.sortIndex=t.expirationTime,Jp(La,t);else break;t=oa(ls)}}function jp(e){if(Wl=!1,Xu(e),!Xl)if(oa(La)!==null)Xl=!0,jr||(jr=!0,Qr());else{var t=oa(ls);t!==null&&$p(jp,t.startTime-e)}}var jr=!1,ql=-1,$_=5,ty=-1;function ey(){return Qp?!0:!(ke.unstable_now()-ty<$_)}function Yp(){if(Qp=!1,jr){var e=ke.unstable_now();ty=e;var t=!0;try{t:{Xl=!1,Wl&&(Wl=!1,j_(ql),ql=-1),Kp=!0;var n=Nn;try{e:{for(Xu(e),Ti=oa(La);Ti!==null&&!(Ti.expirationTime>e&&ey());){var i=Ti.callback;if(typeof i=="function"){Ti.callback=null,Nn=Ti.priorityLevel;var a=i(Ti.expirationTime<=e);if(e=ke.unstable_now(),typeof a=="function"){Ti.callback=a,Xu(e),t=!0;break e}Ti===oa(La)&&Wu(La),Xu(e)}else Wu(La);Ti=oa(La)}if(Ti!==null)t=!0;else{var s=oa(ls);s!==null&&$p(jp,s.startTime-e),t=!1}}break t}finally{Ti=null,Nn=n,Kp=!1}t=void 0}}finally{t?Qr():jr=!1}}}var Qr;typeof J_=="function"?Qr=function(){J_(Yp)}:typeof MessageChannel<"u"?(Zp=new MessageChannel,K_=Zp.port2,Zp.port1.onmessage=Yp,Qr=function(){K_.postMessage(null)}):Qr=function(){Q_(Yp,0)};var Zp,K_;function $p(e,t){ql=Q_(function(){e(ke.unstable_now())},t)}ke.unstable_IdlePriority=5;ke.unstable_ImmediatePriority=1;ke.unstable_LowPriority=4;ke.unstable_NormalPriority=3;ke.unstable_Profiling=null;ke.unstable_UserBlockingPriority=2;ke.unstable_cancelCallback=function(e){e.callback=null};ke.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$_=0<e?Math.floor(1e3/e):5};ke.unstable_getCurrentPriorityLevel=function(){return Nn};ke.unstable_next=function(e){switch(Nn){case 1:case 2:case 3:var t=3;break;default:t=Nn}var n=Nn;Nn=t;try{return e()}finally{Nn=n}};ke.unstable_requestPaint=function(){Qp=!0};ke.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Nn;Nn=e;try{return t()}finally{Nn=n}};ke.unstable_scheduleCallback=function(e,t,n){var i=ke.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:HT++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Jp(ls,e),oa(La)===null&&e===oa(ls)&&(Wl?(j_(ql),ql=-1):Wl=!0,$p(jp,n-i))):(e.sortIndex=a,Jp(La,e),Xl||Kp||(Xl=!0,jr||(jr=!0,Qr()))),e};ke.unstable_shouldYield=ey;ke.unstable_wrapCallback=function(e){var t=Nn;return function(){var n=Nn;Nn=t;try{return e.apply(this,arguments)}finally{Nn=n}}}});var ay=sa((EL,iy)=>{"use strict";iy.exports=ny()});var oy=sa(Dn=>{"use strict";var VT=Kr();function ry(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cs(){}var Fn={d:{f:cs,r:function(){throw Error(ry(522))},D:cs,C:cs,L:cs,m:cs,X:cs,S:cs,M:cs},p:0,findDOMNode:null},GT=Symbol.for("react.portal"),kT=Symbol.for("react.recoverable"),sy=Symbol.for("react.optimistic_key");function XT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:GT,key:i==null?null:i===sy?sy:""+i,children:e,containerInfo:t,implementation:n}}var Yl=VT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function qu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Fn;Dn.browser=function(e){return{$$typeof:kT,_reason:e}};Dn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ry(299));return XT(e,t,null,n)};Dn.flushSync=function(e){var t=Yl.T,n=Fn.p;try{if(Yl.T=null,Fn.p=2,e)return e()}finally{Yl.T=t,Fn.p=n,Fn.d.f()}};Dn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Fn.d.C(e,t))};Dn.prefetchDNS=function(e){typeof e=="string"&&Fn.d.D(e)};Dn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=qu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Fn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Fn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Dn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=qu(t.as,t.crossOrigin);Fn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Fn.d.M(e)};Dn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=qu(n,t.crossOrigin);Fn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Dn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=qu(t.as,t.crossOrigin);Fn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Fn.d.m(e)};Dn.requestFormReset=function(e){Fn.d.r(e)};Dn.unstable_batchedUpdates=function(e,t){return e(t)};Dn.useFormState=function(e,t,n){return Yl.H.useFormState(e,t,n)};Dn.useFormStatus=function(){return Yl.H.useHostTransitionStatus()};Dn.version="19.3.1"});var uy=sa((AL,cy)=>{"use strict";function ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ly)}catch(e){console.error(e)}}ly(),cy.exports=oy()});var Kb=sa(Cf=>{"use strict";var cn=ay(),Jx=Kr(),WT=uy();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Kx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ic(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Qx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hy(e){if(Ic(e)!==e)throw Error(et(188))}function qT(e){var t=e.alternate;if(!t){if(t=Ic(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return hy(a),e;if(s===i)return hy(a),t;s=s.sibling}throw Error(et(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function $x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=$x(e),t!==null)return t;e=e.sibling}return null}function ei(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ei(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function Er(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function fy(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function tS(e){var t=[null,null],n=Er(e);return n===null||eS(t,e,n.child,{foundSelf:!1}),t}function eS(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&eS(e,t,n.child,i))return!0;n=n.sibling}return!1}function ln(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(et(559))}}var so=null,Dm=null;function YT(e,t,n){return e===n?!0:e===t?(so=e,!0):!1}function ZT(e,t,n){return e===n?(Dm=e,!1):e===t?(Dm!==null&&(so=e),!0):!1}function dy(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Um(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ie=Object.assign,JT=Symbol.for("react.element"),Yu=Symbol.for("react.transitional.element"),tc=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),nS=Symbol.for("react.strict_mode"),Lm=Symbol.for("react.profiler"),iS=Symbol.for("react.consumer"),da=Symbol.for("react.context"),Gg=Symbol.for("react.forward_ref"),Im=Symbol.for("react.suspense"),Om=Symbol.for("react.suspense_list"),kg=Symbol.for("react.memo"),ds=Symbol.for("react.lazy");Symbol.for("react.scope");var Pm=Symbol.for("react.activity"),KT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var QT=Symbol.for("react.memo_cache_sentinel"),Bm=Symbol.for("react.view_transition"),jT=Symbol.for("react.recoverable"),py=Symbol.iterator;function Zl(e){return e===null||typeof e!="object"?null:(e=py&&e[py]||e["@@iterator"],typeof e=="function"?e:null)}var $T=Symbol.for("react.client.reference");function zm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$T?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ro:return"Fragment";case Lm:return"Profiler";case nS:return"StrictMode";case Im:return"Suspense";case Om:return"SuspenseList";case Pm:return"Activity";case Bm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case tc:return"Portal";case da:return e.displayName||"Context";case iS:return(e._context.displayName||"Context")+".Consumer";case Gg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kg:return t=e.displayName||null,t!==null?t:zm(e.type)||"Memo";case ds:t=e._payload,e=e._init;try{return zm(e(t))}catch{}}return null}var ec=Array.isArray,Zt=Jx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be=WT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hr={pending:!1,data:null,method:null,action:null},Fm=[],oo=-1;function xa(e){return{current:e}}function En(e){0>oo||(e.current=Fm[oo],Fm[oo]=null,oo--)}function Fe(e,t){oo++,Fm[oo]=e.current,e.current=t}var va=xa(null),_c=xa(null),Ms=xa(null),Lh=xa(null);function Ih(e,t){switch(Fe(Ms,t),Fe(_c,e),Fe(va,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cx(t),e=Tb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}En(va),Fe(va,e)}function Co(){En(va),En(_c),En(Ms)}function Hm(e){var t=e.memoizedState;t!==null&&(zo._currentValue=t.memoizedState,Fe(Lh,e)),t=va.current;var n=Tb(t,e.type);t!==n&&(Fe(_c,e),Fe(va,n))}function Oh(e){_c.current===e&&(En(va),En(_c)),Lh.current===e&&(En(Lh),zo._currentValue=hr)}var tm,my;function hs(e){if(tm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tm=t&&t[1]||"",my=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tm+e+my}var em=!1;function nm(e,t){if(!e||em)return"";em=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var f=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(f!==void 0?Object.defineProperty(e.prototype,"props",f):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{em=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?hs(n):""}function tA(e,t){switch(e.tag){case 26:case 27:case 5:return hs(e.type);case 16:return hs("Lazy");case 13:return e.child!==t&&t!==null?hs("Suspense Fallback"):hs("Suspense");case 19:return hs("SuspenseList");case 0:case 15:return nm(e.type,!1);case 11:return nm(e.type.render,!1);case 1:return nm(e.type,!0);case 31:return hs("Activity");case 30:return hs("ViewTransition");default:return""}}function gy(e){try{var t="",n=null;do t+=tA(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Vm=Object.prototype.hasOwnProperty,Xg=cn.unstable_scheduleCallback,im=cn.unstable_cancelCallback,eA=cn.unstable_shouldYield,nA=cn.unstable_requestPaint,di=cn.unstable_now,iA=cn.unstable_getCurrentPriorityLevel,aS=cn.unstable_ImmediatePriority,sS=cn.unstable_UserBlockingPriority,Ph=cn.unstable_NormalPriority,aA=cn.unstable_LowPriority,rS=cn.unstable_IdlePriority,sA=cn.log,rA=cn.unstable_setDisableYieldValue,Oc=null,pi=null;function gs(e){if(typeof sA=="function"&&rA(e),pi&&typeof pi.setStrictMode=="function")try{pi.setStrictMode(Oc,e)}catch{}}var mi=Math.clz32?Math.clz32:cA,oA=Math.log,lA=Math.LN2;function cA(e){return e>>>=0,e===0?32:31-(oA(e)/lA|0)|0}var Zu=256,Ju=262144,Ku=4194304;function rr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=rr(i):(r&=o,r!==0?a=rr(r):n||(n=o&~e,n!==0&&(a=rr(n))))):(o=i&~s,o!==0?a=rr(o):r!==0?a=rr(r):n||(n=i&~e,n!==0&&(a=rr(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Pc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function oS(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-mi(n),a=1<<i;t|=e[i],n&=~a}return t}function uA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lS(){var e=Ku;return Ku<<=1,(Ku&62914560)===0&&(Ku=4194304),e}function am(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hA(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-mi(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var f=u[h];f!==null&&(f.lane&=-536870913)}n&=~p}i!==0&&cS(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function cS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-mi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function uS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-mi(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function hS(e,t){var n=t&-t;return n=(n&42)!==0?1:Wg(n),(n&(e.suspendedLanes|t))!==0?0:n}function Wg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fS(){var e=be.p;return e!==0?e:(e=window.event,e===void 0?32:Yb(e.type))}function vy(e,t){var n=be.p;try{return be.p=e,t()}finally{be.p=n}}var qa=Math.random().toString(36).slice(2),Mn="__reactFiber$"+qa,ni="__reactProps$"+qa,Vo="__reactContainer$"+qa,_y="__reactEvents$"+qa,fA="__reactListeners$"+qa,dA="__reactHandles$"+qa,yy="__reactResources$"+qa,zc="__reactMarker$"+qa,Bh="__reactLoad$"+qa;function uf(e){delete e[Mn],delete e[ni],delete e[fA],delete e[dA]}function cr(e){var t;if(t=e[Mn])return t;for(var n=e.parentNode;n;){if(t=n[Vo]||n[Mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Px(e);e!==null;){if(n=e[Mn])return n;e=Px(e)}return t}e=n,n=e.parentNode}return null}function Go(e){if(e=e[Mn]||e[Vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function _o(e){var t=e[yy];return t||(t=e[yy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gn(e){e[zc]=!0}function dS(e){e[Bh]=void 0}var pS=new Set,mS={};function Tr(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(mS[e]=t,e=0;e<t.length;e++)pS.add(t[e])}var pA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xy={},Sy={};function mA(e){return Vm.call(Sy,e)?!0:Vm.call(xy,e)?!1:pA.test(e)?Sy[e]=!0:(xy[e]=!0,!1)}var xe=!1;function My(){var e=xe;return xe=!1,e}function ph(e,t,n){if(mA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Qu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ia(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ci(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gm(e){if(!e._valueTracker){var t=gS(e)?"checked":"value";e._valueTracker=gA(e,t,""+e[t])}}function vS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=gS(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var vA=/[\n"\\]/g;function Ni(e){return e.replace(vA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function km(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ci(t)):e.value!==""+ci(t)&&(e.value=""+ci(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?sm(e,ci(e.value)):sm(e,ci(t)):n!=null?sm(e,ci(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ci(o):e.removeAttribute("name")}function _S(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Gm(e);return}n=n!=null?""+ci(n):"",t=t!=null?""+ci(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Gm(e)}function sm(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function yo(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ci(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function yS(e,t,n){if(t!=null&&(t=""+ci(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ci(n):""}function xS(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(ec(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ci(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Gm(e)}function No(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _A=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function by(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||_A.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function SS(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",xe=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(by(e,a,i),xe=!0)}else for(var s in t)t.hasOwnProperty(s)&&by(e,s,t[s])}function Yg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mh(e){return xA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var Xm=null;function Zg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,xo=null;function Ey(e){var t=Go(e);if(t&&(e=t.stateNode)){var n=e[ni]||null;t:switch(e=t.stateNode,t.type){case"input":if(km(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ni(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[ni]||null;if(!a)throw Error(et(90));km(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vS(i)}break t;case"textarea":yS(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yo(e,!!n.multiple,t,!1)}}}var rm=!1;function MS(e,t,n){if(rm)return e(t,n);rm=!0;try{var i=e(t);return i}finally{if(rm=!1,(lo!==null||xo!==null)&&(Ef(),lo&&(t=lo,e=xo,xo=lo=null,Ey(t),e)))for(t=0;t<e.length;t++)Ey(e[t])}}function yc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ni]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var Ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wm=!1;if(Ha)try{$r={},Object.defineProperty($r,"passive",{get:function(){Wm=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Wm=!1}var $r,vs=null,Jg=null,gh=null;function bS(){if(gh)return gh;var e,t=Jg,n=t.length,i,a="value"in vs?vs.value:vs.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return gh=a.slice(e,1<i?1-i:void 0)}function vh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ju(){return!0}function Ty(){return!1}function kn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ju:Ty,this.isPropagationStopped=Ty,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),t}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=kn(Bs),Fc=Ie({},Bs,{view:0,detail:0}),SA=kn(Fc),om,lm,Jl,ff=Ie({},Fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jl&&(Jl&&e.type==="mousemove"?(om=e.screenX-Jl.screenX,lm=e.screenY-Jl.screenY):lm=om=0,Jl=e),om)},movementY:function(e){return"movementY"in e?e.movementY:lm}}),Ay=kn(ff),MA=Ie({},ff,{dataTransfer:0}),bA=kn(MA),EA=Ie({},Fc,{relatedTarget:0}),cm=kn(EA),TA=Ie({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),AA=kn(TA),wA=Ie({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),CA=kn(wA),RA=Ie({},Bs,{data:0}),wy=kn(RA),NA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UA[e])?!!t[e]:!1}function Kg(){return LA}var IA=Ie({},Fc,{key:function(e){if(e.key){var t=NA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?DA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kg,charCode:function(e){return e.type==="keypress"?vh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),OA=kn(IA),PA=Ie({},ff,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=kn(PA),BA=Ie({},Bs,{submitter:0}),zA=kn(BA),FA=Ie({},Fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kg}),HA=kn(FA),VA=Ie({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),GA=kn(VA),kA=Ie({},ff,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),XA=kn(kA),WA=Ie({},Bs,{newState:0,oldState:0,source:0}),qA=kn(WA),YA=[9,13,27,32],Qg=Ha&&"CompositionEvent"in window,sc=null;Ha&&"documentMode"in document&&(sc=document.documentMode);var ZA=Ha&&"TextEvent"in window&&!sc,ES=Ha&&(!Qg||sc&&8<sc&&11>=sc),Ry=" ",Ny=!1;function TS(e,t){switch(e){case"keyup":return YA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function AS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function JA(e,t){switch(e){case"compositionend":return AS(t);case"keypress":return t.which!==32?null:(Ny=!0,Ry);case"textInput":return e=t.data,e===Ry&&Ny?null:e;default:return null}}function KA(e,t){if(co)return e==="compositionend"||!Qg&&TS(e,t)?(e=bS(),gh=Jg=vs=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ES&&t.locale!=="ko"?null:t.data;default:return null}}var QA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!QA[e.type]:t==="textarea"}function wS(e,t,n,i){lo?xo?xo.push(i):xo=[i]:lo=i,t=rf(t,"onChange"),0<t.length&&(n=new hf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var rc=null,xc=null;function jA(e){Mb(e,0)}function df(e){var t=nc(e);if(vS(t))return e}function Uy(e,t){if(e==="change")return t}var CS=!1;Ha&&(Ha?(th="oninput"in document,th||(um=document.createElement("div"),um.setAttribute("oninput","return;"),th=typeof um.oninput=="function"),$u=th):$u=!1,CS=$u&&(!document.documentMode||9<document.documentMode));var $u,th,um;function Ly(){rc&&(rc.detachEvent("onpropertychange",RS),xc=rc=null)}function RS(e){if(e.propertyName==="value"&&df(xc)){var t=[];wS(t,xc,e,Zg(e)),MS(jA,t)}}function $A(e,t,n){e==="focusin"?(Ly(),rc=t,xc=n,rc.attachEvent("onpropertychange",RS)):e==="focusout"&&Ly()}function tw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return df(xc)}function ew(e,t){if(e==="click")return df(t)}function nw(e,t){if(e==="input"||e==="change")return df(t)}function iw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vi=typeof Object.is=="function"?Object.is:iw;function Sc(e,t){if(vi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Vm.call(t,a)||!vi(e[a],t[a]))return!1}return!0}function qm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Iy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oy(e,t){var n=Iy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Iy(n)}}function NS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?NS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function DS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qm(e.document)}return t}function jg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var aw=Ha&&"documentMode"in document&&11>=document.documentMode,uo=null,Ym=null,oc=null,Zm=!1;function Py(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zm||uo==null||uo!==qm(i)||(i=uo,"selectionStart"in i&&jg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oc&&Sc(oc,i)||(oc=i,i=rf(Ym,"onSelect"),0<i.length&&(t=new hf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=uo)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ho={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},hm={},US={};Ha&&(US=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Ar(e){if(hm[e])return hm[e];if(!ho[e])return e;var t=ho[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in US)return hm[e]=t[n];return e}var LS=Ar("animationend"),IS=Ar("animationiteration"),OS=Ar("animationstart"),sw=Ar("transitionrun"),rw=Ar("transitionstart"),ow=Ar("transitioncancel"),PS=Ar("transitionend"),BS=new Map,Jm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jm.push("scrollEnd");function qi(e,t){BS.set(e,t),Tr(t,[e])}var lw=0;function Va(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Wi.identifierPrefix;var n=lw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function By(e){if(e==null||typeof e=="string")return e;var t=null,n=wo;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Ya(e,t){return e=By(e),t=By(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var zh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wi=[],fo=0,$g=0;function pf(){for(var e=fo,t=$g=fo=0;t<e;){var n=wi[t];wi[t++]=null;var i=wi[t];wi[t++]=null;var a=wi[t];wi[t++]=null;var s=wi[t];if(wi[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&zS(n,a,s)}}function mf(e,t,n,i){wi[fo++]=e,wi[fo++]=t,wi[fo++]=n,wi[fo++]=i,$g|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function t0(e,t,n,i){return mf(e,t,n,i),Fh(e)}function wr(e,t){return mf(e,null,null,t),Fh(e)}function zS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-mi(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Fh(e){if(50<vc)throw vc=0,wh=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var po={};function cw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,t,n,i){return new cw(e,t,n,i)}function e0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function za(e,t){var n=e.alternate;return n===null?(n=$n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function FS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _h(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")e0(i)&&(r=1);else if(typeof i=="string")r=OC(e,n,va.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Pm:return e=$n(31,n,t,a),e.elementType=Pm,e.lanes=s,e;case ro:return fr(n.children,a,s,t);case nS:r=8,a|=24;break;case Lm:return e=$n(12,n,t,a|2),e.elementType=Lm,e.lanes=s,e;case Im:return e=$n(13,n,t,a),e.elementType=Im,e.lanes=s,e;case Om:return e=$n(19,n,t,a),e.elementType=Om,e.lanes=s,e;case KT:case Bm:return e=a|32,e=$n(30,n,t,e),e.elementType=Bm,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case da:r=10;break t;case iS:r=9;break t;case Gg:r=11;break t;case kg:r=14;break t;case ds:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=$n(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function fr(e,t,n,i){return e=$n(7,e,i,t),e.lanes=n,e}function fm(e,t,n){return e=$n(6,e,null,t),e.lanes=n,e}function HS(e){var t=$n(18,null,null,0);return t.stateNode=e,t}function dm(e,t,n){return t=$n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zy=new WeakMap;function Di(e,t){if(typeof e=="object"&&e!==null){var n=zy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:gy(t)},zy.set(e,t),t)}return{value:e,source:t,stack:gy(t)}}var mo=[],go=0,Hh=null,Mc=0,Ci=[],Ri=0,Us=null,ma=1,ga="";function Pa(e,t){mo[go++]=Mc,mo[go++]=Hh,Hh=e,Mc=t}function VS(e,t,n){Ci[Ri++]=ma,Ci[Ri++]=ga,Ci[Ri++]=Us,Us=e;var i=ma;e=ga;var a=32-mi(i)-1;i&=~(1<<a),n+=1;var s=32-mi(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,ma=1<<32-mi(t)+a|n<<a|i,ga=s+e}else ma=1<<s|n<<a|i,ga=e}function gf(e){e.return!==null&&(Pa(e,1),VS(e,1,0))}function n0(e){for(;e===Hh;)Hh=mo[--go],mo[go]=null,Mc=mo[--go],mo[go]=null;for(;e===Us;)Us=Ci[--Ri],Ci[Ri]=null,ga=Ci[--Ri],Ci[Ri]=null,ma=Ci[--Ri],Ci[Ri]=null}function GS(e,t){Ci[Ri++]=ma,Ci[Ri++]=ga,Ci[Ri++]=Us,ma=t.id,ga=t.overflow,Us=e}var vn=null,ze=null,ce=!1,bs=null,Ui=!1,Km=Error(et(519));function Ls(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bc(Di(t,e)),Km}function Fy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Mn]=e,t[ni]=i,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<wc.length;n++)de(wc[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),_S(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),xS(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Eb(t.textContent,n)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=pa),t=!0):t=!1,t||Ls(e,!0)}function Vh(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:vn=vn.return}}function to(e){if(e!==vn)return!1;if(!ce)return Vh(e),ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ig(e.type,e.memoizedProps)),n=!n),n&&ze&&Ls(e),Vh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));ze=Ox(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));ze=Ox(e)}else t===27?(t=ze,zs(e.type)?(e=zg,zg=null,ze=e):ze=t):ze=vn?Li(e.stateNode.nextSibling):null;return!0}function gr(){ze=vn=null,ce=!1}function pm(){var e=bs;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),bs=null),e}function bc(e){bs===null?bs=[e]:bs.push(e)}var Qm=xa(null),Cr=null,Ba=null;function _s(e,t,n){Fe(Qm,t._currentValue),t._currentValue=n}function Fa(e){e._currentValue=Qm.current,En(Qm)}function yh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function jm(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),yh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(et(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),yh(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),yh(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function vr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=a.type;vi(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Lh.current){if(r=a.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}a=a.return}return e!==null&&jm(t,e,n,i),t.flags|=262144,e!==null}function Gh(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _r(e){Cr=e,Ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return kS(Cr,e)}function eh(e,t){return Cr===null&&_r(e),kS(e,t)}function kS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ba===null){if(e===null)throw Error(et(308));Ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ba=Ba.next=t;return n}var uw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},hw=cn.unstable_scheduleCallback,fw=cn.unstable_NormalPriority,nn={$$typeof:da,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function i0(){return{controller:new uw,data:new Map,refCount:0}}function Hc(e){e.refCount--,e.refCount===0&&hw(fw,function(){e.controller.abort()})}function Hy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var ic=null;function dw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var lc=null,$m=0,yr=0,So=null;function pw(e,t){if(lc===null){var n=lc=[];$m=0,yr=D0(),So={status:"pending",value:void 0,then:function(i){n.push(i)}}}return $m++,t.then(Vy,Vy),t}function Vy(){if(--$m===0&&(ic=null,lc!==null)){So!==null&&(So.status="fulfilled");var e=lc;lc=null,yr=0,So=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function mw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Gy=Zt.S;Zt.S=function(e,t){if(ob=di(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pw(e,t),ic!==null)for(var n=Oo;n!==null;)Hy(n,ic),n=n.next;if(n=e.types,n!==null){for(var i=Oo;i!==null;)Hy(i,n),i=i.next;if(yr!==0){i=ic,i===null&&(i=ic=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}Gy!==null&&Gy(e,t)};var dr=xa(null);function a0(){var e=dr.current;return e!==null?e:Le.pooledCache}function xh(e,t){t===null?Fe(dr,dr.current):Fe(dr,t.pool)}function XS(){var e=a0();return e===null?null:{parent:nn._currentValue,pool:e}}var ko=Error(et(460)),s0=Error(et(474)),vf=Error(et(542)),kh={then:function(){}};function ky(e){return e=e.status,e==="fulfilled"||e==="rejected"}function WS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pa,pa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wy(e),e===void 0&&!("reason"in t)?Error(et(600)):e;default:if(typeof t.status=="string")t.then(pa,pa);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wy(e),e}throw pr=t,ko}}function or(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(pr=n,ko):n}}var pr=null;function Xy(){if(pr===null)throw Error(et(459));var e=pr;return pr=null,e}function Wy(e){if(e===ko||e===vf)throw Error(et(483))}var Mo=null,Ec=0;function nh(e){var t=Ec;return Ec+=1,Mo===null&&(Mo=[]),WS(Mo,e,t)}function us(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ih(e,t){throw t.$$typeof===JT?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qS(e){function t(d,m){if(e){var S=d.deletions;S===null?(d.deletions=[m],d.flags|=16):S.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function i(d){for(var m=new Map;d!==null;)d.key===null?m.set(d.index,d):m.set(d.key,d),d=d.sibling;return m}function a(d,m){return d=za(d,m),d.index=0,d.sibling=null,d}function s(d,m,S){return d.index=S,e?(S=d.alternate,S!==null?(S=S.index,S<m?(d.flags|=2,m):S):(d.flags|=134217730,m)):(d.flags|=1048576,m)}function r(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function o(d,m,S,_){return m===null||m.tag!==6?(m=fm(S,d.mode,_),m.return=d,m):(m=a(m,S),m.return=d,m)}function l(d,m,S,_){var E=S.type;return E===ro?(d=h(d,m,S.props.children,_,S.key),us(d,S),d):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ds&&or(E)===m.type)?(m=a(m,S.props),us(m,S),m.return=d,m):(m=_h(S.type,S.key,S.props,null,d.mode,_),us(m,S),m.return=d,m)}function c(d,m,S,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=dm(S,d.mode,_),m.return=d,m):(m=a(m,S.children||[]),m.return=d,m)}function h(d,m,S,_,E){return m===null||m.tag!==7?(m=fr(S,d.mode,_,E),m.return=d,m):(m=a(m,S),m.return=d,m)}function p(d,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=fm(""+m,d.mode,S),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yu:return S=_h(m.type,m.key,m.props,null,d.mode,S),us(S,m),S.return=d,S;case tc:return m=dm(m,d.mode,S),m.return=d,m;case ds:return m=or(m),p(d,m,S)}if(ec(m)||Zl(m))return m=fr(m,d.mode,S,null),m.return=d,m;if(typeof m.then=="function")return p(d,nh(m),S);if(m.$$typeof===da)return p(d,eh(d,m),S);ih(d,m)}return null}function u(d,m,S,_){var E=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(d,m,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yu:return S.key===E?l(d,m,S,_):null;case tc:return S.key===E?c(d,m,S,_):null;case ds:return S=or(S),u(d,m,S,_)}if(ec(S)||Zl(S))return E!==null?null:h(d,m,S,_,null);if(typeof S.then=="function")return u(d,m,nh(S),_);if(S.$$typeof===da)return u(d,m,eh(d,S),_);ih(d,S)}return null}function f(d,m,S,_,E){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return d=d.get(S)||null,o(m,d,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yu:return d=d.get(_.key===null?S:_.key)||null,l(m,d,_,E);case tc:return d=d.get(_.key===null?S:_.key)||null,c(m,d,_,E);case ds:return _=or(_),f(d,m,S,_,E)}if(ec(_)||Zl(_))return d=d.get(S)||null,h(m,d,_,E,null);if(typeof _.then=="function")return f(d,m,S,nh(_),E);if(_.$$typeof===da)return f(d,m,S,eh(m,_),E);ih(m,_)}return null}function v(d,m,S,_){for(var E=null,T=null,C=m,x=m=0,w=null;C!==null&&x<S.length;x++){C.index>x?(w=C,C=null):w=C.sibling;var R=u(d,C,S[x],_);if(R===null){C===null&&(C=w);break}e&&C&&R.alternate===null&&t(d,C),m=s(R,m,x),T===null?E=R:T.sibling=R,T=R,C=w}if(x===S.length)return n(d,C),ce&&Pa(d,x),E;if(C===null){for(;x<S.length;x++)C=p(d,S[x],_),C!==null&&(m=s(C,m,x),T===null?E=C:T.sibling=C,T=C);return ce&&Pa(d,x),E}for(C=i(C);x<S.length;x++)w=f(C,d,x,S[x],_),w!==null&&(e&&(R=w.alternate,R!==null&&C.delete(R.key===null?x:R.key)),m=s(w,m,x),T===null?E=w:T.sibling=w,T=w);return e&&C.forEach(function(N){return t(d,N)}),ce&&Pa(d,x),E}function M(d,m,S,_){if(S==null)throw Error(et(151));for(var E=null,T=null,C=m,x=m=0,w=null,R=S.next();C!==null&&!R.done;x++,R=S.next()){C.index>x?(w=C,C=null):w=C.sibling;var N=u(d,C,R.value,_);if(N===null){C===null&&(C=w);break}e&&C&&N.alternate===null&&t(d,C),m=s(N,m,x),T===null?E=N:T.sibling=N,T=N,C=w}if(R.done)return n(d,C),ce&&Pa(d,x),E;if(C===null){for(;!R.done;x++,R=S.next())R=p(d,R.value,_),R!==null&&(m=s(R,m,x),T===null?E=R:T.sibling=R,T=R);return ce&&Pa(d,x),E}for(C=i(C);!R.done;x++,R=S.next())R=f(C,d,x,R.value,_),R!==null&&(e&&(w=R.alternate,w!==null&&C.delete(w.key===null?x:w.key)),m=s(R,m,x),T===null?E=R:T.sibling=R,T=R);return e&&C.forEach(function(V){return t(d,V)}),ce&&Pa(d,x),E}function g(d,m,S,_){if(typeof S=="object"&&S!==null&&S.type===ro&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Yu:t:{for(var E=S.key;m!==null;){if(m.key===E){if(E=S.type,E===ro){if(m.tag===7){n(d,m.sibling),_=a(m,S.props.children),us(_,S),_.return=d,d=_;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ds&&or(E)===m.type){n(d,m.sibling),_=a(m,S.props),us(_,S),_.return=d,d=_;break t}n(d,m);break}else t(d,m);m=m.sibling}S.type===ro?(_=fr(S.props.children,d.mode,_,S.key),us(_,S),_.return=d,d=_):(_=_h(S.type,S.key,S.props,null,d.mode,_),us(_,S),_.return=d,d=_)}return r(d);case tc:t:{for(E=S.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(d,m.sibling),_=a(m,S.children||[]),_.return=d,d=_;break t}else{n(d,m);break}else t(d,m);m=m.sibling}_=dm(S,d.mode,_),_.return=d,d=_}return r(d);case ds:return S=or(S),g(d,m,S,_)}if(ec(S))return v(d,m,S,_);if(Zl(S)){if(E=Zl(S),typeof E!="function")throw Error(et(150));return S=E.call(S),M(d,m,S,_)}if(typeof S.then=="function")return g(d,m,nh(S),_);if(S.$$typeof===da)return g(d,m,eh(d,S),_);ih(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(d,m.sibling),_=a(m,S),_.return=d,d=_):(n(d,m),_=fm(S,d.mode,_),_.return=d,d=_),r(d)):n(d,m)}return function(d,m,S,_){try{Ec=0;var E=g(d,m,S,_);return Mo=null,E}catch(C){if(C===ko||C===vf)throw C;var T=$n(29,C,null,d.mode);return T.lanes=_,T.return=d,T}finally{}}}var xr=qS(!0),YS=qS(!1),ps=!1;function r0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Es(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ts(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Me&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Fh(e),zS(e,null,n),t}return mf(e,i,t,n),Fh(e)}function cc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,uS(e,n)}}function mm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eg=!1;function uc(){if(eg){var e=So;if(e!==null)throw e}}function hc(e,t,n,i){eg=!1;var a=e.updateQueue;ps=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,f=u!==o.lane;if(f?(ge&u)===u:(i&u)===u){u!==0&&u===yr&&(eg=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=Ie({},p,u);break t;case 2:ps=!0}}u=o.callback,u!==null&&(e.flags|=64,f&&(e.flags|=8192),f=a.callbacks,f===null?a.callbacks=[u]:f.push(u))}else f={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=f,l=p):h=h.next=f,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;f=o,o=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Ps|=r,e.lanes=r,e.memoizedState=p}}function ZS(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function JS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ZS(n[e],t)}var Is=xa(null),Xh=xa(0);function qy(e,t){e=Wa,Fe(Xh,e),Fe(Is,t),Wa=e|t.baseLanes}function ng(){Fe(Xh,Wa),Fe(Is,Is.current)}function o0(){Wa=Xh.current,En(Is),En(Xh)}var wn=xa(null),Un=null;function As(e){var t=e.alternate;Fe(Tn,Tn.current&1),Fe(wn,e),Un===null&&(t===null||Is.current!==null||t.memoizedState!==null)&&(Un=e)}function ig(e){Fe(Tn,Tn.current),Fe(wn,e),Un===null&&(Un=e)}function KS(e){e.tag===22?(Fe(Tn,Tn.current),Fe(wn,e),Un===null&&(Un=e)):ws()}function ws(){Fe(Tn,Tn.current),Fe(wn,wn.current)}function ui(e){En(wn),Un===e&&(Un=null),En(Tn)}var Tn=xa(0);function Tc(e,t){Fe(wn,wn.current),Fe(Tn,t)}function l0(e){En(Tn),En(wn),Un===e&&(Un=null)}function Wh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bg(n)||O0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=0,ie=null,Ue=null,en=null,qh=!1,bo=!1,Sr=!1,Yh=0,Ac=0,Eo=null,gw=0;function Ze(){throw Error(et(321))}function c0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vi(e[n],t[n]))return!1;return!0}function u0(e,t,n,i,a,s){return Ga=s,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zt.H=e===null||e.memoizedState===null?wM:CM,Sr=!1,s=n(i,a),Sr=!1,bo&&(s=jS(t,n,i,a)),QS(e),s}function QS(e){Zt.H=Zh;var t=Ue!==null&&Ue.next!==null;if(Ga=0,en=Ue=ie=null,qh=!1,Ac=0,Eo=null,t)throw Error(et(300));e===null||an||(e=e.dependencies,e!==null&&Gh(e)&&(an=!0))}function jS(e,t,n,i){ie=e;var a=0;do{if(bo&&(Eo=null),Ac=0,bo=!1,25<=a)throw Error(et(301));if(a+=1,en=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Zt.H=Ew,s=t(n,i)}while(bo);return s}function vw(){var e=Zt.H,t=e.useState()[0];return t=typeof t.then=="function"?Vc(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ie.flags|=1024),t}function h0(){var e=Yh!==0;return Yh=0,e}function f0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function d0(e){if(qh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qh=!1}Ga=0,en=Ue=ie=null,bo=!1,Ac=Yh=0,Eo=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ie.memoizedState=en=e:en=en.next=e,en}function Qe(){if(Ue===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=en===null?ie.memoizedState:en.next;if(t!==null)en=t,Ue=e;else{if(e===null)throw ie.alternate===null?Error(et(467)):Error(et(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},en===null?ie.memoizedState=en=e:en=en.next=e}return en}function _f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vc(e){var t=Ac;return Ac+=1,Eo===null&&(Eo=[]),e=WS(Eo,e,t),t=ie,(en===null?t.memoizedState:en.next)===null&&(t=t.alternate,Zt.H=t===null||t.memoizedState===null?wM:CM),e}function yf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vc(e);if(e.$$typeof===jT)return;if(e.$$typeof===da)return bn(e)}throw Error(et(438,String(e)))}function p0(e){var t=null,n=ie.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ie.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=_f(),ie.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=QT;return t.index++,n}function ka(e,t){return typeof t=="function"?t(e):t}function Sh(e){var t=Qe();return m0(t,Ue,e)}function m0(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ge&p)===p:(Ga&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===yr&&(h=!0);else if((Ga&u)===u){c=c.next,u===yr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,ie.lanes|=u,Ps|=u;p=c.action,Sr&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,ie.lanes|=p,Ps|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!vi(s,e.memoizedState)&&(an=!0,h&&(n=So,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function gm(e){var t=Qe(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);vi(s,t.memoizedState)||(an=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function $S(e,t,n){var i=ie,a=Qe(),s=ce;if(s){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!vi((Ue||a).memoizedState,n);if(r&&(a.memoizedState=n,an=!0),a=a.queue,g0(nM.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||en!==null&&(en.memoizedState.tag&1)!==0,Do(e?9:8,{destroy:void 0},eM.bind(null,i,a,n,t),null),e){if(i.flags|=2048,Le===null)throw Error(et(349));s||(Ga&127)!==0||tM(i,t,n)}return n}function tM(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t=_f(),ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eM(e,t,n,i){t.value=n,t.getSnapshot=i,iM(t)&&aM(e)}function nM(e,t,n){return n(function(){iM(t)&&aM(e)})}function iM(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vi(e,n)}catch{return!0}}function aM(e){var t=wr(e,2);t!==null&&ti(t,e,2)}function ag(e){var t=Gn();if(typeof e=="function"){var n=e;if(e=n(),Sr){gs(!0);try{n()}finally{gs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:e},t}function sM(e,t,n,i){return e.baseState=n,m0(e,Ue,typeof i=="function"?i:ka)}function _w(e,t,n,i,a){if(Sf(e))throw Error(et(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Zt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,rM(t,s)):(s.next=n.next,t.pending=n.next=s)}}function rM(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Zt.T,r={};r.types=s!==null?s.types:null,Zt.T=r;try{var o=n(a,i),l=Zt.S;l!==null&&l(r,o),Yy(e,t,o)}catch(c){sg(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Zt.T=s}}else try{s=n(a,i),Yy(e,t,s)}catch(c){sg(e,t,c)}}function Yy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Zy(e,t,i)},function(i){return sg(e,t,i)}):Zy(e,t,n)}function Zy(e,t,n){t.status="fulfilled",t.value=n,oM(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,rM(e,n)))}function sg(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,oM(t),t=t.next;while(t!==i)}e.action=null}function oM(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lM(e,t){return t}function Jy(e,t){if(ce){var n=Le.formState;if(n!==null){t:{var i=ie;if(ce){if(ze){e:{for(var a=ze,s=Ui;a.nodeType!==8;){if(!s){a=null;break e}if(a=Li(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){ze=Li(a.nextSibling),i=a.data==="F!";break t}}Ls(i)}i=!1}i&&(t=n[0])}}return n=Gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lM,lastRenderedState:t},n.queue=i,n=EM.bind(null,ie,i),i.dispatch=n,i=ag(!1),s=x0.bind(null,ie,!1,i.queue),i=Gn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=_w.bind(null,ie,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ky(e){var t=Qe();return cM(t,Ue,e)}function cM(e,t,n){if(t=m0(e,t,lM)[0],e=Sh(ka)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Vc(t)}catch(r){throw r===ko?vf:r}else i=t;t=Qe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(ie.flags|=2048,Do(9,{destroy:void 0},yw.bind(null,a,n),null)),[i,s,e]}function yw(e,t){e.action=t}function Qy(e){var t=Qe(),n=Ue;if(n!==null)return cM(t,n,e);Qe(),t=t.memoizedState,n=Qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Do(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ie.updateQueue,t===null&&(t=_f(),ie.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function uM(){return Qe().memoizedState}function Mh(e,t,n,i){var a=Gn();ie.flags|=e,a.memoizedState=Do(1|t,{destroy:void 0},n,i===void 0?null:i)}function xf(e,t,n,i){var a=Qe();i=i===void 0?null:i;var s=a.memoizedState.inst;Ue!==null&&i!==null&&c0(i,Ue.memoizedState.deps)?a.memoizedState=Do(t,s,n,i):(ie.flags|=e,a.memoizedState=Do(1|t,s,n,i))}function jy(e,t){Mh(8390656,8,e,t)}function g0(e,t){xf(2048,8,e,t)}function xw(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=_f(),ie.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hM(e){var t=Qe().memoizedState;return xw({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function fM(e,t){return xf(4,2,e,t)}function dM(e,t){return xf(4,4,e,t)}function pM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mM(e,t,n){n=n!=null?n.concat([e]):null,xf(4,4,pM.bind(null,t,e),n)}function v0(){}function gM(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&c0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function vM(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&c0(t,i[1]))return i[0];if(i=e(),Sr){gs(!0);try{e()}finally{gs(!1)}}return n.memoizedState=[i,t],i}function _0(e,t,n){return n===void 0||(Ga&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=cb(),ie.lanes|=e,Ps|=e,n)}function _M(e,t,n,i){return vi(n,t)?n:Is.current!==null?(e=_0(e,n,i),vi(e,t)||(an=!0),e):(Ga&106)===0||(Ga&1073741824)!==0&&(ge&261930)===0?(an=!0,e.memoizedState=n):(e=cb(),ie.lanes|=e,Ps|=e,t)}function yM(e,t,n,i,a){var s=be.p;be.p=s!==0&&8>s?s:8;var r=Zt.T,o={};o.types=r!==null?r.types:null,Zt.T=o,x0(e,!1,t,n);try{var l=a(),c=Zt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=mw(l,i);fc(e,t,h,gi(e))}else fc(e,t,i,gi(e))}catch(p){fc(e,t,{then:function(){},status:"rejected",reason:p},gi())}finally{be.p=s,r!==null&&o.types!==null&&(r.types=o.types),Zt.T=r}}function Sw(){}function rg(e,t,n,i){if(e.tag!==5)throw Error(et(476));var a=xM(e).queue;yM(e,a,t,hr,n===null?Sw:function(){return SM(e),n(i)})}function xM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:hr,baseState:hr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:hr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function SM(e){var t=xM(e);t.next===null&&(t=e.alternate.memoizedState),fc(e,t.next.queue,{},gi())}function y0(){return bn(zo)}function MM(){return Qe().memoizedState}function bM(){return Qe().memoizedState}function Mw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gi();e=Es(n);var i=Ts(t,e,n);i!==null&&(ti(i,t,n),cc(i,t,n)),t={cache:i0()},e.payload=t;return}t=t.return}}function bw(e,t,n){var i=gi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sf(e)?TM(t,n):(n=t0(e,t,n,i),n!==null&&(ti(n,e,i),AM(n,t,i)))}function EM(e,t,n){var i=gi();fc(e,t,n,i)}function fc(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sf(e))TM(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,vi(o,r))return mf(e,t,a,0),Le===null&&pf(),!1}catch{}finally{}if(n=t0(e,t,a,i),n!==null)return ti(n,e,i),AM(n,t,i),!0}return!1}function x0(e,t,n,i){if(i={lane:2,revertLane:D0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sf(e)){if(t)throw Error(et(479))}else t=t0(e,n,i,2),t!==null&&ti(t,e,2)}function Sf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function TM(e,t){bo=qh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function AM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,uS(e,n)}}var Zh={readContext:bn,use:yf,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze,useEffectEvent:Ze},wM={readContext:bn,use:yf,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:bn,useEffect:jy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Mh(4194308,4,pM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mh(4194308,4,e,t)},useInsertionEffect:function(e,t){Mh(4,2,e,t)},useMemo:function(e,t){var n=Gn();t=t===void 0?null:t;var i=e();if(Sr){gs(!0);try{e()}finally{gs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Gn();if(n!==void 0){var a=n(t);if(Sr){gs(!0);try{n(t)}finally{gs(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=bw.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:function(e){e=ag(e);var t=e.queue,n=EM.bind(null,ie,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:v0,useDeferredValue:function(e,t){var n=Gn();return _0(n,e,t)},useTransition:function(){var e=ag(!1);return e=yM.bind(null,ie,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ie,a=Gn();if(ce){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),Le===null)throw Error(et(349));(ge&127)!==0||tM(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,jy(nM.bind(null,i,s,e),[e]),i.flags|=2048,Do(9,{destroy:void 0},eM.bind(null,i,s,n,t),null),n},useId:function(){var e=Gn(),t=Le.identifierPrefix;if(ce){var n=ga,i=ma;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Yh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=gw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:y0,useFormState:Jy,useActionState:Jy,useOptimistic:function(e){var t=Gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=x0.bind(null,ie,!0,n),n.dispatch=t,[e,t]},useMemoCache:p0,useCacheRefresh:function(){return Gn().memoizedState=Mw.bind(null,ie)},useEffectEvent:function(e){var t=Gn(),n={impl:e};return t.memoizedState=n,function(){if((Me&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},CM={readContext:bn,use:yf,useCallback:gM,useContext:bn,useEffect:g0,useImperativeHandle:mM,useInsertionEffect:fM,useLayoutEffect:dM,useMemo:vM,useReducer:Sh,useRef:uM,useState:function(){return Sh(ka)},useDebugValue:v0,useDeferredValue:function(e,t){var n=Qe();return _M(n,Ue.memoizedState,e,t)},useTransition:function(){var e=Sh(ka)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Vc(e),t]},useSyncExternalStore:$S,useId:MM,useHostTransitionStatus:y0,useFormState:Ky,useActionState:Ky,useOptimistic:function(e,t){var n=Qe();return sM(n,Ue,e,t)},useMemoCache:p0,useCacheRefresh:bM,useEffectEvent:hM},Ew={readContext:bn,use:yf,useCallback:gM,useContext:bn,useEffect:g0,useImperativeHandle:mM,useInsertionEffect:fM,useLayoutEffect:dM,useMemo:vM,useReducer:gm,useRef:uM,useState:function(){return gm(ka)},useDebugValue:v0,useDeferredValue:function(e,t){var n=Qe();return Ue===null?_0(n,e,t):_M(n,Ue.memoizedState,e,t)},useTransition:function(){var e=gm(ka)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Vc(e),t]},useSyncExternalStore:$S,useId:MM,useHostTransitionStatus:y0,useFormState:Qy,useActionState:Qy,useOptimistic:function(e,t){var n=Qe();return Ue!==null?sM(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:p0,useCacheRefresh:bM,useEffectEvent:hM};function vm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var og={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=gi(),a=Es(i);a.payload=t,n!=null&&(a.callback=n),t=Ts(e,a,i),t!==null&&(ti(t,e,i),cc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=gi(),a=Es(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ts(e,a,i),t!==null&&(ti(t,e,i),cc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gi(),i=Es(n);i.tag=2,t!=null&&(i.callback=t),t=Ts(e,i,n),t!==null&&(ti(t,e,n),cc(t,e,n))}};function $y(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Sc(n,i)||!Sc(a,s):!0}function tx(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&og.enqueueReplaceState(t,t.state,null)}function Mr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ie({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function RM(e){zh(e)}function NM(e){console.error(e)}function DM(e){zh(e)}function Jh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ex(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function lg(e,t,n){return n=Es(n),n.tag=3,n.payload={element:null},n.callback=function(){Jh(e,t)},n}function UM(e){return e=Es(e),e.tag=3,e}function LM(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){ex(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ex(t,n,i),typeof a!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Tw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&vr(t,n,a,!0),n=wn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Un===null?af():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===kh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Em(e,i,a)),!1;case 22:return n.flags|=65536,i===kh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Em(e,i,a)),!1}throw Error(et(435,n.tag))}return Em(e,i,a),af(),!1}if(ce)return t=wn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Km&&(e=Error(et(422),{cause:i}),bc(Di(e,n)))):(i!==Km&&(t=Error(et(423),{cause:i}),bc(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Di(i,n),a=lg(e.stateNode,i,a),mm(e,a),Je!==4&&(Je=2)),!1;var s=Error(et(520),{cause:i});if(s=Di(s,n),gc===null?gc=[s]:gc.push(s),Je!==4&&(Je=2),t===null)return!0;i=Di(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=lg(n.stateNode,i,e),mm(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Cs===null||!Cs.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=UM(a),LM(a,e,n,i),mm(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var S0=Error(et(461)),an=!1;function on(e,t,n,i){t.child=e===null?YS(t,null,n,i):xr(t,e.child,n,i)}function nx(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return _r(t),i=u0(e,t,n,r,s,a),o=h0(),e!==null&&!an?(f0(e,t,a),Xa(e,t,a)):(ce&&o&&gf(t),t.flags|=1,on(e,t,i,a),t.child)}function ix(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!e0(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,IM(e,t,s,i,a)):(e=_h(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!b0(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sc,n(r,i)&&e.ref===t.ref)return Xa(e,t,a)}return t.flags|=1,e=za(s,i),e.ref=t.ref,e.return=t,t.child=e}function IM(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Sc(s,i)&&e.ref===t.ref)if(an=!1,t.pendingProps=i=s,b0(e,a))(e.flags&131072)!==0&&(an=!0);else return t.lanes=e.lanes,Xa(e,t,a)}return cg(e,t,n,i,a)}function OM(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return ax(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xh(t,s!==null?s.cachePool:null),s!==null?qy(t,s):ng(),KS(t);else return i=t.lanes=536870912,ax(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(xh(t,s.cachePool),qy(t,s),ws(),t.memoizedState=null):(e!==null&&xh(t,null),ng(),ws());return on(e,t,a,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ax(e,t,n,i,a){var s=a0();return s=s===null?null:{parent:nn._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&xh(t,null),ng(),KS(t),e!==null&&vr(e,t,i,!0),t.childLanes=a,null}function bh(e,t){return t=Mf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sx(e,t,n){return xr(t,e.child,null,n),e=bh(t,t.pendingProps),e.flags|=2,ui(t),t.memoizedState=null,e}function Aw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(i.mode==="hidden")return e=bh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},dc(null,e);if(ig(t),(e=ze)?(e=Ob(e,Ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Us!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},n=HS(e),n.return=t,t.child=n,vn=t,ze=null)):e=null,e===null)throw Ls(t);return t.lanes=536870912,null}return bh(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(ig(t),a)if(t.flags&256)t.flags&=-257,t=sx(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(an||vr(e,t,n,!1),a=(n&e.childLanes)!==0,an||a){if(Is.current===null){if(i=Le,i!==null&&(r=hS(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,wr(e,r),ti(i,e,r),S0;af()}t=sx(e,t,n)}else e=s.treeContext,ze=Li(r.nextSibling),vn=t,ce=!0,bs=null,Ui=!1,e!==null&&GS(t,e),t=bh(t,i),t.flags|=134221824;return t}return e=za(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function no(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function cg(e,t,n,i,a){return _r(t),n=u0(e,t,n,i,void 0,a),i=h0(),e!==null&&!an?(f0(e,t,a),Xa(e,t,a)):(ce&&i&&gf(t),t.flags|=1,on(e,t,n,a),t.child)}function rx(e,t,n,i,a,s){return _r(t),t.updateQueue=null,n=jS(t,i,n,a),QS(e),i=h0(),e!==null&&!an?(f0(e,t,s),Xa(e,t,s)):(ce&&i&&gf(t),t.flags|=1,on(e,t,n,s),t.child)}function ox(e,t,n,i,a){if(_r(t),t.stateNode===null){var s=po,r=n.contextType;typeof r=="object"&&r!==null&&(s=bn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=og,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},r0(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?bn(r):po,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(vm(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&og.enqueueReplaceState(s,s.state,null),hc(t,i,s,a),uc(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Mr(n,o);s.props=l;var c=s.context,h=n.contextType;r=po,typeof h=="object"&&h!==null&&(r=bn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&tx(t,s,i,r),ps=!1;var u=t.memoizedState;s.state=u,hc(t,i,s,a),uc(),c=t.memoizedState,o||u!==c||ps?(typeof p=="function"&&(vm(t,n,p,i),c=t.memoizedState),(l=ps||$y(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,tg(e,t),r=t.memoizedProps,h=Mr(n,r),s.props=h,p=t.pendingProps,u=s.context,c=n.contextType,l=po,typeof c=="object"&&c!==null&&(l=bn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&tx(t,s,i,l),ps=!1,u=t.memoizedState,s.state=u,hc(t,i,s,a),uc();var f=t.memoizedState;r!==p||u!==f||ps||e!==null&&e.dependencies!==null&&Gh(e.dependencies)?(typeof o=="function"&&(vm(t,n,o,i),f=t.memoizedState),(h=ps||$y(t,n,h,i,u,f,l)||e!==null&&e.dependencies!==null&&Gh(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,f,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,f,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),s.props=i,s.state=f,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,no(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=xr(t,e.child,null,a),t.child=xr(t,null,n,a)):on(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Xa(e,t,a),e}function lx(e,t,n,i){return gr(),t.flags|=256,on(e,t,n,i),t.child}var ug={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hg(e){return{baseLanes:e,cachePool:XS()}}function fg(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=fi),e}function PM(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(a?As(t):ws(),(e=ze)?(e=Ob(e,Ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Us!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},n=HS(e),n.return=t,t.child=n,vn=t,ze=null)):e=null,e===null)throw Ls(t);return O0(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(ws(),a=t.mode,s=Mf({mode:"hidden",children:s},a),i=fr(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=hg(n),i.childLanes=fg(e,r,n),t.memoizedState=ug,dc(null,i)):(As(t),M0(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return ww(e,t,s,r,i,l,o,n)}return a?(ws(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=za(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=za(l,a):(a=fr(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,dc(null,i),i=t.child,a=e.child.memoizedState,a===null?a=hg(n):(s=a.cachePool,s!==null?(o=nn._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=XS(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=fg(e,r,n),t.memoizedState=ug,dc(e.child,i)):(As(t),n=e.child,e=n.sibling,n=za(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function M0(e,t){return t=Mf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mf(e,t){return e=$n(22,e,null,t),e.lanes=0,e}function ah(e,t,n){return xr(t,e.child,null,n),e=M0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ww(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(As(t),t.flags&=-257,ah(e,t,o)):t.memoizedState!==null?(ws(),t.child=e.child,t.flags|=128,null):(ws(),s=a.fallback,r=t.mode,a=Mf({mode:"visible",children:a.children},r),s=fr(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,xr(t,e.child,null,o),a=t.child,a.memoizedState=hg(o),a.childLanes=fg(e,i,o),t.memoizedState=ug,dc(null,a));if(As(t),O0(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(et(419)),a.stack="",a.digest=i,bc({value:a,source:null,stack:null})),ah(e,t,o)}if(an||vr(e,t,o,!1),i=(o&e.childLanes)!==0,an||i){if(Is.current!==null)return ah(e,t,o);if(i=Le,i!==null&&(a=hS(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,wr(e,a),ti(i,e,a),S0;return Bg(s)||af(),ah(e,t,o)}return Bg(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ze=Li(s.nextSibling),vn=t,ce=!0,bs=null,Ui=!1,e!==null&&GS(t,e),t=M0(t,a.children),t.flags|=134221824,t)}function cx(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),yh(e.return,t,n)}function ux(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Wh(n)===null&&(t=e),e=e.sibling}return t}function sh(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function _m(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function dg(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Tn.current;if(t.flags&128)return Tc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Tc(t,r),a==="backwards"&&e!==null?(_m(e),on(e,t,i,n),_m(e)):on(e,t,i,n),i=ce?Mc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cx(e,n,t);else if(e.tag===19)cx(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=ux(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,_m(t)),sh(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wh(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}sh(t,!0,n,null,s,i);break;case"together":sh(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ux(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),sh(t,!1,a,n,s,i)}return t.child}function hx(e,t,n){var i=t.pendingProps;return _s(t,t.type,i.value),on(e,t,i.children,n),t.child}function Xa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ps|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(vr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=za(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=za(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gh(e)))}function Cw(e,t,n){switch(t.tag){case 3:Ih(t,t.stateNode.containerInfo),_s(t,nn,e.memoizedState.cache),gr();break;case 27:case 5:Hm(t);break;case 4:Ih(t,t.stateNode.containerInfo);break;case 10:_s(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ig(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return As(t),t.flags|=128,null;i=vr(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?PM(e,t,n):(As(t),e=Xa(e,t,n),e!==null?e.sibling:null)}As(t);break;case 19:if(t.flags&128)return dg(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(vr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return dg(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Tc(t,Tn.current),i)break;return null;case 22:return t.lanes=0,OM(e,t,n,t.pendingProps);case 24:_s(t,nn,e.memoizedState.cache)}return Xa(e,t,n)}function BM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)an=!0;else{if(!b0(e,n)&&(t.flags&128)===0)return an=!1,Cw(e,t,n);an=(e.flags&131072)!==0}else an=!1,ce&&(t.flags&1048576)!==0&&VS(t,Mc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=or(t.elementType),t.type=e,typeof e=="function")e0(e)?(i=Mr(e,i),t.tag=1,t=ox(null,t,e,i,n)):(t.tag=0,t=cg(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Gg){t.tag=11,t=nx(null,t,e,i,n);break t}else if(a===kg){t.tag=14,t=ix(null,t,e,i,n);break t}else if(a===da){t.tag=10,t.type=e,t=hx(null,t,n);break t}}throw t=zm(e)||e,Error(et(306,t,""))}}return t;case 0:return cg(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Mr(i,t.pendingProps),ox(e,t,i,a,n);case 3:t:{if(Ih(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,tg(e,t),hc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,_s(t,nn,i),i!==s.cache&&jm(t,[nn],n,!0),uc(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=lx(e,t,i,n);break t}else if(i!==a){a=Di(Error(et(424)),t),bc(a),t=lx(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Li(e.firstChild),vn=t,ce=!0,bs=null,Ui=!0,n=YS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(gr(),i===a){t=Xa(e,t,n);break t}on(e,t,i,n)}t=t.child}return t;case 26:return no(e,t),e===null?(n=zx(t.type,null,t.pendingProps,null))?t.memoizedState=n:ce||(t.stateNode=Ab(t.type,t.pendingProps,Ms.current,t)):t.memoizedState=zx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Hm(t),e===null&&ce&&(i=t.stateNode=Pb(t.type,t.pendingProps,Ms.current),vn=t,Ui=!0,a=ze,zs(t.type)?(zg=a,ze=Li(i.firstChild)):ze=a),on(e,t,t.pendingProps.children,n),no(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((a=i=ze)&&(i=xC(i,t.type,t.pendingProps,Ui),i!==null?(t.stateNode=i,vn=t,ze=Li(i.firstChild),Ui=!1,a=!0):a=!1),a||Ls(t)),Hm(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Ig(a,s)?i=null:r!==null&&Ig(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=u0(e,t,vw,null,null,n),zo._currentValue=a),no(e,t),on(e,t,i,n),t.child;case 6:return e===null&&ce&&((e=n=ze)&&(n=SC(n,t.pendingProps,Ui),n!==null?(t.stateNode=n,vn=t,ze=null,e=!0):e=!1),e||Ls(t)),null;case 13:return PM(e,t,n);case 4:return Ih(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xr(t,null,i,n):on(e,t,i,n),t.child;case 11:return nx(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,no(e,t),on(e,t,i,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return hx(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,_r(t),a=bn(a),i=i(a),t.flags|=1,on(e,t,i,n),t.child;case 14:return ix(e,t,t.type,t.pendingProps,n);case 15:return IM(e,t,t.type,t.pendingProps,n);case 19:return dg(e,t,n);case 31:return Aw(e,t,n);case 22:return OM(e,t,n,t.pendingProps);case 24:return _r(t),i=bn(nn),e===null?(a=a0(),a===null&&(a=Le,s=i0(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},r0(t),_s(t,nn,a)):((e.lanes&n)!==0&&(tg(e,t),hc(t,null,null,n),uc()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),_s(t,nn,i)):(i=s.cache,_s(t,nn,i),i!==a.cache&&jm(t,[nn],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ce&&gf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:no(e,t),on(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function Oa(e){e.flags|=4}function ym(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?Vx(t,i):Vx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(fb())e.flags|=8192;else throw pr=kh,s0}else e.flags&=-16777217}function fx(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hb(t))if(fb())e.flags|=8192;else throw pr=kh,s0}function rh(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lS():536870912,e.lanes|=t,Uo|=t)}function Kl(e,t){if(!ce)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Rw(e,t,n){var i=t.pendingProps;switch(n0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Fa(nn),Co(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(to(t)?Oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pm())),Be(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Oa(t),s!==null?(Be(t),fx(t,s)):(Be(t),ym(t,a,null,i,n))):s?s!==e.memoizedState?(Oa(t),Be(t),fx(t,s)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Oa(t),Be(t),ym(t,a,e,i,n)),null;case 27:if(Oh(t),n=Ms.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oa(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Be(t),t.subtreeFlags&=-33554433,null}e=va.current,to(t)?Fy(t,e):(e=Pb(a,i,n),t.stateNode=e,Oa(t))}return Be(t),t.subtreeFlags&=-33554433,null;case 5:if(Oh(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oa(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Be(t),t.subtreeFlags&=-33554433,null}if(s=va.current,to(t))Fy(t,s);else{var r=Rc(Ms.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[Mn]=t,s[ni]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(An(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Oa(t)}}return Be(t),t.subtreeFlags&=-33554433,ym(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Oa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=Ms.current,to(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=vn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Mn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Eb(e.nodeValue,n)),e||Ls(t,!0)}else e=Rc(e).createTextNode(i),e[Mn]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=to(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[Mn]=t}else gr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=pm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ui(t),t):(ui(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=to(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(et(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(et(317));a[Mn]=t}else gr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),a=!1}else a=pm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ui(t),t):(ui(t),null)}return ui(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),rh(t,t.updateQueue),Be(t),null);case 4:return Co(),e===null&&U0(t.stateNode.containerInfo),t.flags|=67108864,Be(t),null;case 10:return Fa(t.type),Be(t),null;case 19:if(l0(t),i=t.memoizedState,i===null)return Be(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Kl(i,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Wh(e),s!==null){for(t.flags|=128,Kl(i,!1),e=s.updateQueue,t.updateQueue=e,rh(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)FS(n,e),n=n.sibling;return Tc(t,Tn.current&1|2),ce&&Pa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&di()>ef&&(t.flags|=128,a=!0,Kl(i,!1),t.lanes=4194304)}else{if(!a)if(e=Wh(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,rh(t,e),Kl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!ce)return Be(t),null}else 2*di()-i.renderingStartTime>ef&&n!==536870912&&(t.flags|=128,a=!0,Kl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=di(),e.sibling=null,s=Tn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ce?Tc(t,s):(n=s,Fe(wn,t),Fe(Tn,n),Un===null&&(Un=t)),ce&&Pa(t,i.treeForkCount),e}return Be(t),null;case 22:case 23:return ui(t),o0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&rh(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&En(dr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Fa(nn),Be(t),null;case 25:return null;case 30:return t.flags|=33554432,Be(t),null}throw Error(et(156,t.tag))}function Nw(e,t){switch(n0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fa(nn),Co(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oh(t),null;case 31:if(t.memoizedState!==null){if(ui(t),t.alternate===null)throw Error(et(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ui(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return l0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Co(),null;case 10:return Fa(t.type),null;case 22:case 23:return ui(t),o0(),e!==null&&En(dr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Fa(nn),null;case 25:return null;default:return null}}function zM(e,t){switch(n0(t),t.tag){case 3:Fa(nn),Co();break;case 26:case 27:case 5:Oh(t);break;case 4:Co();break;case 31:t.memoizedState!==null&&ui(t);break;case 13:ui(t);break;case 19:l0(t);break;case 10:Fa(t.type);break;case 22:case 23:ui(t),o0(),e!==null&&En(dr);break;case 24:Fa(nn)}}function Gc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){Ne(t,t.return,o)}}function Os(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){Ne(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){Ne(t,t.return,h)}}function FM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{JS(t,n)}catch(i){Ne(e,e.return,i)}}}function HM(e,t,n){n.props=Mr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ne(e,t,i)}}function ha(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=Va(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=Nb(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new _i(e);ei(e.child,!1,_C,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ne(e,t,o)}}function Sn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Ne(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ne(e,t,a)}else n.current=null}function Kh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Ib(e.stateNode,t[n])}function dx(e){for(var t=e.return;t!==null&&(T0(t)&&Ib(e.stateNode,t.stateNode),!E0(t));)t=t.return}function pc(e){for(var t=e.return;t!==null&&(T0(t)&&yC(e.stateNode,t.stateNode),!E0(t));)t=t.return}function E0(e){return e.tag===5||e.tag===3||e.tag===27}function T0(e){return e&&e.tag===7&&e.stateNode!==null}function pg(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Ne(e,e.return,a)}}function xm(e,t,n){try{var i=e.stateNode;tC(i,e.type,n,t),i[ni]=t}catch(a){Ne(e,e.return,a)}}function VM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zs(e.type)||e.tag===4}function Sm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||VM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mg(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa)),Kh(e,i),xe=!0;else if(a!==4&&(a===27&&(Kh(e,i),i=null,zs(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(mg(e,t,n,i),e=e.sibling;e!==null;)mg(e,t,n,i),e=e.sibling}function Qh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Kh(e,i),xe=!0;else if(a!==4&&(a===27&&(Kh(e,i),i=null,zs(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Qh(e,t,n,i),e=e.sibling;e!==null;)Qh(e,t,n,i),e=e.sibling}function GM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);An(t,i,n),t[Mn]=e,t[ni]=n}catch(s){Ne(e,e.return,s)}}var jh=!1,hi=null;function px(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(jh=!0)}var fa=null;function mx(){var e=fa;return fa=null,e}var jn=0;function Xo(e,t,n,i,a){return jn=0,kM(e.child,t,n,i,a)}function kM(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Og(r);i.push(o),o.view&&(s=!0)}else s||Og(r).view&&(s=!0);jh=!0,wb(r,jn===0?t:t+"_"+jn,n),jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||kM(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function ya(e,t){for(;e!==null;)e.tag===5?Cb(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ya(e.child,t)),e=e.sibling}function Eh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Eh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(et(544));var n=t.name;t=Ya(t.default,t.share),t!=="none"&&(Xo(e,n,t,null,!1)||ya(e.child,!1))}e=e.sibling}}function gg(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Va(i,n),s=Ya(i.default,n.paired?i.share:i.enter);s!=="none"?Xo(e,a,s,null,!1)?(Eh(e),n.paired||t||Lo(e,i.onEnter)):ya(e.child,!1):Eh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gg(e,t),e=e.sibling;else Eh(e)}function vg(e){if(hi!==null&&hi.size!==0){var t=hi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=Ya(n.default,n.share);if(s!=="none"&&(Xo(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,Lo(e,n.onShare)):ya(e.child,!1)),t.delete(i),t.size===0)break}}}vg(e)}e=e.sibling}}}function _g(e){if(e.tag===30){var t=e.memoizedProps,n=Va(t,e.stateNode),i=hi!==null?hi.get(n):void 0,a=Ya(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Xo(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,hi.delete(n),Lo(e,t.onShare)):Lo(e,t.onExit):ya(e.child,!1)),hi!==null&&vg(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_g(e),e=e.sibling;else hi!==null&&vg(e)}function XM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Va(t,e.stateNode);t=Ya(t.default,t.update),e.flags&=-5,t!=="none"&&Xo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&XM(e);e=e.sibling}}function yg(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ya(e.child,!1))}yg(e)}e=e.sibling}}function Th(e){if(e.tag===30)e.stateNode.paired=null,ya(e.child,!1),yg(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Th(e),e=e.sibling;else yg(e)}function WM(e){for(e=e.child;e!==null;)e.tag===30?ya(e.child,!1):(e.subtreeFlags&33554432)!==0&&WM(e),e=e.sibling}function A0(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&jn<s.length){var c=s[jn],h=Og(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&wb(l,jn===0?n:n+"_"+jn,a),o&&(e.flags&4)!==0||(fa===null&&(fa=[]),fa.push(l,jn===0?i:i+"_"+jn,t.memoizedProps)),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:A0(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function qM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Va(n,i),s=Ya(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(rC)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;jn=0,a=A0(i,o,a,a,s,r,!1),(e.flags&4)!==0&&a&&(t||Lo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&qM(e,t);e=e.sibling}}var pn=!1,Te=!1,la=!1,Mm=!1,gx=typeof WeakSet=="function"?WeakSet:Set,mn=null,ca=!1,ac=!1,$h=!1,xg=!1;function Dw(e,t,n){if(e=e.containerInfo,Ug=Fo,e=DS(e),jg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,f=null;e:for(;;){for(var v;u!==i||s!==0&&u.nodeType!==3||(l=o+s),u!==r||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)f=u,u=v;for(;;){if(u===e)break e;if(f===i&&++h===s&&(l=o),f===r&&++p===a&&(c=o),(v=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Lg={focusedElem:e,selectionRange:i},Fo=!1,n=(n&335544064)===n,mn=t,t=n?9270:1024;mn!==null;){if(e=mn,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&_g(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&px(e),oh(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&_g(i),oh(n);continue}else if(i!==null&&i.memoizedState!==null){n&&px(e),oh(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,mn=i):(n&&XM(e),oh(n))}}hi=null}function oh(e){for(;mn!==null;){var t=mn,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=Mr(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ne(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Pg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Pg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Va(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Ya(a.default,a.update),a!=="none"&&Xo(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(et(163))}if(i=t.sibling,i!==null){i.return=t.return,mn=i;break}mn=t.return}}function YM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ua(e,n),i&4&&Gc(5,n);break;case 1:if(ua(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ne(n,n.return,r)}else{var a=Mr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ne(n,n.return,r)}}i&64&&FM(n),i&512&&ha(n,n.return);break;case 3:if(ua(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{JS(e,t)}catch(r){Ne(n,n.return,r)}}break;case 27:t===null&&i&4&&GM(n);case 26:case 5:ua(e,n),t===null&&i&4&&pg(n),i&512&&ha(n,n.return);break;case 12:ua(e,n);break;case 31:ua(e,n),i&4&&QM(e,n);break;case 13:ua(e,n),i&4&&jM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kw.bind(null,n),MC(e,n))));break;case 22:if(i=n.memoizedState!==null||pn,!i){var s=t!==null&&t.memoizedState!==null||Te;t=pn,a=Te,pn=i,(Te=s)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Gi(e,n,i)):ua(e,n),pn=t,Te=a}break;case 30:ua(e,n),i&512&&ha(n,n.return);break;case 7:i&512&&ha(n,n.return);default:ua(e,n)}}function Sg(e,t){for(e=e.child;e!==null;)ZM(e,t),e=e.sibling}function ZM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ne(e,e.return,l)}Mg(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,xe=!0}catch(l){Ne(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Ux(o,!0):Ux(e.stateNode,!1)}catch(l){Ne(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Sg(e,t);break;default:Sg(e,t)}}function Mg(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:ZM(n,i);break t;case 22:n.memoizedState===null&&Mg(n,i);break t;default:Mg(n,i)}}e=e.sibling}}function JM(e){var t=e.alternate;t!==null&&(e.alternate=null,JM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Kn=!1;function Vi(e,t,n){for(n=n.child;n!==null;)KM(e,t,n),n=n.sibling}function KM(e,t,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Oc,n)}catch{}switch(n.tag){case 26:Te||Sn(n,t),Vi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Te&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Te||Sn(n,t),pc(n);var i=Xe,a=Kn;zs(n.type)&&(Xe=n.stateNode,Kn=!1),Vi(e,t,n),Bb(n.stateNode,n.type,n.memoizedProps),Xe=i,Kn=a;break;case 5:Te||Sn(n,t),pc(n);case 6:if(n.tag===6&&pc(n),i=Xe,a=Kn,Xe=null,Vi(e,t,n),Xe=i,Kn=a,Xe!==null)if(Kn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(n.stateNode),xe=!0}catch(s){Ne(n,t,s)}else try{Xe.removeChild(n.stateNode),xe=!0}catch(s){Ne(n,t,s)}break;case 18:Xe!==null&&(Kn?(e=Xe,Dx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ho(e)):Dx(Xe,n.stateNode));break;case 4:i=Xe,a=Kn,Xe=n.stateNode.containerInfo,Kn=!0,Vi(e,t,n),Xe=i,Kn=a;break;case 0:case 11:case 14:case 15:Os(2,n,t),Te||Os(4,n,t),Vi(e,t,n);break;case 1:Te||(Sn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&HM(n,t,i)),Vi(e,t,n);break;case 21:Vi(e,t,n);break;case 22:Te=(i=Te)||n.memoizedState!==null,Vi(e,t,n),Te=i;break;case 30:Sn(n,t),Vi(e,t,n);break;case 7:Te||Sn(n,t),Vi(e,t,n);break;default:Vi(e,t,n)}}function QM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ho(e)}catch(n){Ne(t,t.return,n)}}}function jM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ho(e)}catch(n){Ne(t,t.return,n)}}function Uw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gx),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gx),t;default:throw Error(et(435,e.tag))}}function lh(e,t){var n=Uw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Xw.bind(null,e,i);i.then(a,a)}})}function Hn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(zs(l.type)){Xe=l.stateNode,Kn=!1;break t}break;case 5:Xe=l.stateNode,Kn=!1;break t;case 3:case 4:Xe=l.stateNode.containerInfo,Kn=!0;break t}l=l.return}if(Xe===null)throw Error(et(160));KM(r,o,s),Xe=null,Kn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$M(t,e,n),t=t.sibling}var ki=null;function $M(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Hn(t,e,n),Vn(e),a&4&&(Os(3,e,e.return),Gc(3,e),Os(5,e,e.return));break;case 1:Hn(t,e,n),Vn(e),a&512&&(Te||i===null||Sn(i,i.return)),a&64&&pn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=ki,Hn(t,e,n),Vn(e),a&512&&(Te||i===null||Sn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(pn)e.stateNode=Ab(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[zc]||i[Mn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),An(i,t,n),i[Mn]=e,gn(i),t=i;break t;case"link":if(s=Hx("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),An(i,t,n),a.head.appendChild(i);break;case"meta":if(s=Hx("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),An(i,t,n),a.head.appendChild(i);break;default:throw Error(et(468,t))}i[Mn]=e,gn(i),t=i}e.stateNode=t}else pn||Fg(s,e.type,e.stateNode);else e.stateNode=Fx(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||Te||t.parentNode.removeChild(t)):a.count--,n===null?pn||Fg(s,e.type,e.stateNode):Fx(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&xm(e,e.memoizedProps,i.memoizedProps);break;case 27:Hn(t,e,n),Vn(e),a&512&&(Te||i===null||Sn(i,i.return)),i!==null&&a&4&&xm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=la,la=!1,Hn(t,e,n),la=s,Vn(e),a&512&&(Te||i===null||Sn(i,i.return)),e.flags&32){t=e.stateNode;try{No(t,""),xe=!0}catch(h){Ne(e,e.return,h)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,xm(e,t,i!==null?i.memoizedProps:t)),a&1024&&(Mm=!0);break;case 6:if(Hn(t,e,n),Vn(e),a&4){if(e.stateNode===null)throw Error(et(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,xe=!0}catch(h){Ne(e,e.return,h)}}break;case 3:if(xe=!1,Rh=null,s=ki,ki=Nc(t.containerInfo),Hn(t,e,n),ki=s,Vn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(h){Ne(e,e.return,h)}Mm&&(Mm=!1,tb(e)),xe=!1;break;case 4:a=la,la=pn,i=My(),s=ki,ki=Nc(e.stateNode.containerInfo),Hn(t,e,n),Vn(e),ki=s,xe&&ac&&($h=!0),xe=i,la=a;break;case 12:Hn(t,e,n),Vn(e);break;case 31:Hn(t,e,n),Vn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,lh(e,t)));break;case 13:Hn(t,e,n),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(bf=di()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,lh(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=pn,l=Te,c=la;pn=o||s,la=c||s,Te=l||r,Hn(t,e,n),Te=l,la=c,pn=o,Vn(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||pn||Te||(t=r||Te,n=pn,i=Te,pn=s||pn,Te=t,fs(e,2),pn=n,Te=i),!s&&la||Sg(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,lh(e,n))));break;case 19:Hn(t,e,n),Vn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,lh(e,t)));break;case 30:a&512&&(Te||i===null||Sn(i,i.return)),a=My(),s=ac,r=(n&335544064)===n,o=e.memoizedProps,ac=r&&Ya(o.default,o.update)!=="none",Hn(t,e,n),Vn(e),r&&i!==null&&xe&&(e.flags|=4),ac=s,xe=a;break;case 21:break;case 7:a&512&&(Te||i===null||Sn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Hn(t,e,n),Vn(e)}}function Vn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(VM(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(T0(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(E0(a))break;a=a.return}var r=i;if(n==null)throw Error(et(160));switch(n.tag){case 27:var o=n.stateNode,l=Sm(e);Qh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(No(c,""),n.flags&=-33);var h=Sm(e);Qh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Sm(e);mg(e,u,p,r);break;default:throw Error(et(161))}}catch(f){Ne(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;tb(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Fo=!0,t.reset(),Fo=!1),e=e.sibling}}function eo(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)eb(t,e),t=t.sibling;else qM(t,!1)}function eb(e,t){var n=e.alternate;if(n===null)gg(e,!1);else switch(e.tag){case 3:if(xg=ca=!1,mx(),eo(t,e),!ca&&!$h){if(e=fa,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];Cb(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),xg=!0}fa=null;break;case 5:eo(t,e);break;case 4:i=ca,ca=!1,eo(t,e),ca&&($h=!0),ca=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?gg(e,!1):eo(t,e));break;case 30:i=ca,a=mx(),ca=!1,eo(t,e),ca&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=Va(s,r),r=Va(n.memoizedProps,r);var o=Ya(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,jn=0,t=A0(e,n,t,r,o,s,!0),jn!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Lo(e,e.memoizedProps.onUpdate),fa=a):a!==null&&(a.push.apply(a,fa),fa=a),ca=(e.flags&32)!==0?!0:i;break;default:eo(t,e)}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)YM(e,t.alternate,t),t=t.sibling}function fs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Os(4,n,n.return),fs(n,i);break;case 1:Sn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&HM(n,n.return,a),fs(n,i);break;case 27:(i&2)!==0&&Bb(n.stateNode,n.type,n.memoizedProps);case 5:Sn(n,n.return),n.tag!==5&&n.tag!==27||pc(n),fs(n,i);break;case 6:pc(n);break;case 26:Sn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Te||a.parentNode.removeChild(a),fs(n,i);break;case 22:n.memoizedState===null&&fs(n,i);break;case 30:Sn(n,n.return),fs(n,i);break;case 7:Sn(n,n.return);default:fs(n,i)}e=e.sibling}}function Gi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Gi(a,s,n),Gc(4,s);break;case 1:if(Gi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){Ne(i,i.return,h)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)ZS(c[a],l)}catch(h){Ne(i,i.return,h)}}o&&r&64&&FM(s),ha(s,s.return);break;case 27:(n&2)!==0&&GM(s);case 5:s.tag!==5&&s.tag!==27||dx(s),Gi(a,s,n),o&&i===null&&r&4&&pg(s),ha(s,s.return);break;case 6:dx(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||pn||Fg(Nc(l.ownerDocument),s.type,l),Gi(a,s,n),o&&i===null&&r&4&&pg(s),ha(s,s.return);break;case 12:Gi(a,s,n);break;case 31:Gi(a,s,n),o&&r&4&&QM(a,s);break;case 13:Gi(a,s,n),o&&r&4&&jM(a,s);break;case 22:s.memoizedState===null&&Gi(a,s,n),ha(s,s.return);break;case 30:Gi(a,s,n),ha(s,s.return);break;case 7:ha(s,s.return);default:Gi(a,s,n)}t=t.sibling}}function w0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Hc(n))}function C0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hc(e))}function Ai(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)nb(e,t,n,i),t=t.sibling;else a&&WM(t)}function nb(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Th(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ai(e,t,n,i),s&2048&&Gc(9,t);break;case 1:Ai(e,t,n,i);break;case 3:Ai(e,t,n,i),a&&xg&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&Hc(s)));break;case 12:if(s&2048){Ai(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){Ne(t,t.return,c)}}else Ai(e,t,n,i);break;case 31:Ai(e,t,n,i);break;case 13:Ai(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&Th(o),r._visibility&2?Ai(e,t,n,i):mc(e,t)):(a&&o!==null&&o.memoizedState!==null&&Th(t),r._visibility&2?Ai(e,t,n,i):(r._visibility|=2,io(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&w0(o,t);break;case 24:Ai(e,t,n,i),s&2048&&C0(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(ya(s.child,!0),ya(t.child,!0))),Ai(e,t,n,i);break;default:Ai(e,t,n,i)}}function io(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:io(s,r,o,l,a),Gc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?io(s,r,o,l,a):mc(s,r):(h._visibility|=2,io(s,r,o,l,a)),a&&c&2048&&w0(r.alternate,r);break;case 24:io(s,r,o,l,a),a&&c&2048&&C0(r.alternate,r);break;default:io(s,r,o,l,a)}t=t.sibling}}function mc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:mc(n,i),a&2048&&w0(i.alternate,i);break;case 24:mc(n,i),a&2048&&C0(i.alternate,i);break;default:mc(n,i)}t=t.sibling}}var lr=8192;function sr(e,t,n){if(e.subtreeFlags&lr)for(e=e.child;e!==null;)ib(e,t,n),e=e.sibling}function ib(e,t,n){switch(e.tag){case 26:sr(e,t,n),e.flags&lr&&(e.memoizedState!==null?PC(n,ki,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Gx(n,e)));break;case 5:sr(e,t,n),e.flags&lr&&(e=e.stateNode,(t&335544128)===t&&Gx(n,e));break;case 3:case 4:var i=ki;ki=Nc(e.stateNode.containerInfo),sr(e,t,n),ki=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=lr,lr=16777216,sr(e,t,n),lr=i):sr(e,t,n));break;case 30:if((e.flags&lr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,hi===null&&(hi=new Map),hi.set(i,a)}sr(e,t,n);break;default:sr(e,t,n)}}function ab(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];mn=i,rb(i,e)}ab(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sb(e),e=e.sibling}function sb(e){switch(e.tag){case 0:case 11:case 15:Ql(e),e.flags&2048&&Os(9,e,e.return);break;case 3:Ql(e);break;case 12:Ql(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ah(e)):Ql(e);break;default:Ql(e)}}function Ah(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];mn=i,rb(i,e)}ab(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Os(8,t,t.return),Ah(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ah(t));break;default:Ah(t)}e=e.sibling}}function rb(e,t){for(;mn!==null;){var n=mn;switch(n.tag){case 0:case 11:case 15:Os(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,mn=i;else t:for(n=e;mn!==null;){i=mn;var a=i.sibling,s=i.return;if(JM(i),i===n){mn=null;break t}if(a!==null){a.return=s,mn=a;break t}mn=s}}}var Lw={getCacheForType:function(e){var t=bn(nn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return bn(nn).controller.signal}},Iw=typeof WeakMap=="function"?WeakMap:Map,Me=0,Le=null,pe=null,ge=0,Ce=0,li=null,ys=!1,Wo=!1,R0=!1,Wa=0,Je=0,Ps=0,mr=0,tf=0,fi=0,Uo=0,gc=null,Qn=null,bg=!1,bf=0,ob=0,ef=1/0,nf=null,Cs=null,qe=0,Wi=null,br=null,_a=0,Eg=0,Tg=null,lb=null,To=null,Ao=null,wo=null,vc=0,wh=null;function gi(){return(Me&2)!==0&&ge!==0?ge&-ge:Zt.T!==null?D0():fS()}function cb(){if(fi===0)if((ge&536870912)===0||ce){var e=Ju;Ju<<=1,(Ju&3932160)===0&&(Ju=262144),fi=e}else fi=536870912;return e=wn.current,e!==null&&(e.flags|=32),fi}function Lo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=Nb(Va(e.memoizedProps,n))),Ao===null&&(Ao=[]),Ao.push(t.bind(null,i))}}function ti(e,t,n){(e===Le&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(Io(e,0),xs(e,ge,fi,!1)),Bc(e,n),((Me&2)===0||e!==Le)&&(e===Le&&((Me&2)===0&&(mr|=n),Je===4&&xs(e,ge,fi,!1)),Sa(e))}function ub(e,t,n){if((Me&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Pc(e,t),a=i?Bw(e,t):bm(e,t,!0),s=i;do{if(a===0){Wo&&!i&&xs(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Ow(n)){a=bm(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=gc;var l=o.current.memoizedState.isDehydrated;if(l&&(Io(o,r).flags|=256),r=bm(o,r,!1),r!==2&&r!==6){if(R0&&!l){o.errorRecoveryDisabledLanes|=s,mr|=s,a=4;break t}s=Qn,Qn=a,s!==null&&(Qn===null?Qn=s:Qn.push.apply(Qn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Io(e,0),xs(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:xs(i,t,fi,!ys);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(a=bf+300-di(),10<a)){if(xs(i,t,fi,!ys),cf(i,0,!0)!==0)break t;_a=t,i.timeoutHandle=L0(vx.bind(null,i,n,Qn,nf,bg,t,fi,mr,Uo,ys,s,"Throttled",-0,0),a);break t}vx(i,n,Qn,nf,bg,t,fi,mr,Uo,ys,s,null,-0,0)}}break}while(!0);Sa(e)}function vx(e,t,n,i,a,s,r,o,l,c,h,p,u,f){e.timeoutHandle=-1;var v=t.subtreeFlags,M=(s&335544064)===s;if(p=null,(M||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},hi=null,ib(t,s,p),M&&(v=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(v.count++,v.waitingForViewTransition=!0,v=Dc.bind(v),M.finished.then(v,v))),v=(s&62914560)===s?bf-di():(s&4194048)===s?ob-di():0,v=BC(p,v),v!==null)){_a=s,e.cancelPendingCommit=v(yx.bind(null,e,t,s,n,i,a,r,o,l,c,h,p,null,u,f)),xs(e,s,r,!c);return}yx(e,t,s,n,i,a,r,o,l,c,h,p)}function Ow(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!vi(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xs(e,t,n,i){t=oS(e,t),t&=~tf,t&=~mr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-mi(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&cS(e,n,t)}function Ef(){return(Me&6)===0?(kc(0,!1),!1):!0}function N0(){if(pe!==null){if(Ce===0)var e=pe.return;else e=pe,Ba=Cr=null,d0(e),Mo=null,Ec=0,e=pe;for(;e!==null;)zM(e.alternate,e),e=e.return;pe=null}}function Io(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,iC(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_a=0,N0(),Le=e,pe=n=za(e.current,null),ge=t,Ce=0,li=null,ys=!1,Wo=Pc(e,t),R0=!1,Uo=fi=tf=mr=Ps=Je=0,Qn=gc=null,bg=!1,Wa=oS(e,t),pf(),n}function hb(e,t){ie=null,Zt.H=Zh,t===ko||t===vf?(t=Xy(),Ce=3):t===s0?(t=Xy(),Ce=4):Ce=t===S0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,li=t,pe===null&&(Je=1,Jh(e,Di(t,e.current)))}function fb(){var e=wn.current;return e===null?!0:(ge&4194048)===ge?Un===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Un:!1}function db(){var e=Zt.H;return Zt.H=Zh,e===null?Zh:e}function pb(){var e=Zt.A;return Zt.A=Lw,e}function af(){Je=4,ys||(ge&4194048)!==ge&&wn.current!==null||(Wo=!0),(Ps&134217727)===0&&(mr&134217727)===0||Le===null||xs(Le,ge,fi,!1)}function bm(e,t,n){var i=Me;Me|=2;var a=db(),s=pb();(Le!==e||ge!==t)&&(nf=null,Io(e,t)),t=!1;var r=Je;t:do try{if(Ce!==0&&pe!==null){var o=pe,l=li;switch(Ce){case 8:N0(),r=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(t=!0);var c=Ce;if(Ce=0,li=null,vo(e,o,l,c),n&&Wo){r=0;break t}break;default:c=Ce,Ce=0,li=null,vo(e,o,l,c)}}Pw(),r=Je;break}catch(h){hb(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ba=Cr=null,Me=i,Zt.H=a,Zt.A=s,pe===null&&(Le=null,ge=0,pf()),r}function Pw(){for(;pe!==null;)mb(pe)}function Bw(e,t){var n=Me;Me|=2;var i=db(),a=pb();Le!==e||ge!==t?(nf=null,ef=di()+500,Io(e,t)):Wo=Pc(e,t);t:do try{if(Ce!==0&&pe!==null){t=pe;var s=li;e:switch(Ce){case 1:Ce=0,li=null,vo(e,t,s,1);break;case 2:case 9:if(ky(s)){Ce=0,li=null,_x(t);break}t=function(){Ce!==2&&Ce!==9||Le!==e||(Ce=7),Sa(e)},s.then(t,t);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:ky(s)?(Ce=0,li=null,_x(t)):(Ce=0,li=null,vo(e,t,s,7));break;case 5:var r=null;switch(pe.tag){case 26:r=pe.memoizedState;case 5:case 27:var o=pe;if(r?Hb(r):o.stateNode.complete){Ce=0,li=null;var l=o.sibling;if(l!==null)pe=l;else{var c=o.return;c!==null?(pe=c,Tf(c)):pe=null}break e}}Ce=0,li=null,vo(e,t,s,5);break;case 6:Ce=0,li=null,vo(e,t,s,6);break;case 8:N0(),Je=6;break t;default:throw Error(et(462))}}zw();break}catch(h){hb(e,h)}while(!0);return Ba=Cr=null,Zt.H=i,Zt.A=a,Me=n,pe!==null?0:(Le=null,ge=0,pf(),Je)}function zw(){for(;pe!==null&&!eA();)mb(pe)}function mb(e){var t=BM(e.alternate,e,Wa);e.memoizedProps=e.pendingProps,t===null?Tf(e):pe=t}function _x(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rx(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=rx(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:d0(t);var i=t;i===vn&&(ce?(Vh(i),i.tag===5&&i.stateNode!=null&&(ze=i.stateNode)):(Vh(i),ce=!0));default:zM(n,t),t=pe=FS(t,Wa),t=BM(n,t,Wa)}e.memoizedProps=e.pendingProps,t===null?Tf(e):pe=t}function vo(e,t,n,i){Ba=Cr=null,d0(t),Mo=null,Ec=0;var a=t.return;try{if(Tw(e,a,t,n,ge)){Je=1,Jh(e,Di(n,e.current)),pe=null;return}}catch(s){if(a!==null)throw pe=a,s;Je=1,Jh(e,Di(n,e.current)),pe=null;return}t.flags&32768?(ce||i===1?e=!0:Wo||(ge&536870912)!==0?e=!1:(ys=e=!0,(i===2||i===9||i===3||i===6)&&(i=wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),gb(t,e)):Tf(t)}function Tf(e){var t=e;do{if((t.flags&32768)!==0){gb(t,ys);return}e=t.return;var n=Rw(t.alternate,t,Wa);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Je===0&&(Je=5)}function gb(e,t){do{var n=Nw(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);Je=6,pe=null}function yx(e,t,n,i,a,s,r,o,l,c,h,p){e.cancelPendingCommit=null;do Af();while(qe!==0);if((Me&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));e===Le&&(pe=Le=null,ge=0),br=t,Wi=e,_a=n,Tg=a,lb=i,Fw(e,t,n,r,o,l,p)}}function Fw(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(Eg=o,o|=$g,hA(e,n,o,i,a,s),Ao=null,(n&335544064)===n?(wo=dw(e),i=10262):(wo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,Ww(Ph,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),jh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Zt.T,Zt.T=null,a=be.p,be.p=2,s=Me,Me|=4;try{Dw(e,t,n)}finally{Me=s,be.p=a,Zt.T=i}}qe=1,jh?To=cC(r,e.containerInfo,wo,Ag,wg,Vw,Cg,Rg,Hw,null,null):(Ag(),wg(),Cg())}function Hw(e){if(qe!==0){var t=Wi.onRecoverableError;t(e,{componentStack:null})}}function Vw(){qe===3&&(qe=0,eb(br,Wi),qe=4)}function Ag(){if(qe===1){qe=0;var e=Wi,t=br,n=_a,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Zt.T,Zt.T=null;var a=be.p;be.p=2;var s=Me;Me|=4;try{ac=$h=!1,$M(t,e,n),n=Lg;var r=DS(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&NS(o.ownerDocument.documentElement,o)){if(l!==null&&jg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var f=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!f.extend&&M>g&&(r=g,g=M,M=r);var d=Oy(o,M),m=Oy(o,g);if(d&&m&&(f.rangeCount!==1||f.anchorNode!==d.node||f.anchorOffset!==d.offset||f.focusNode!==m.node||f.focusOffset!==m.offset)){var S=p.createRange();S.setStart(d.node,d.offset),f.removeAllRanges(),M>g?(f.addRange(S),f.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),f.addRange(S))}}}}for(p=[],f=o;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Fo=!!Ug,Lg=Ug=null}finally{Me=s,be.p=a,Zt.T=i}}e.current=t,qe=2}}function wg(){if(qe===2){qe=0;var e=Wi,t=br,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Zt.T,Zt.T=null;var i=be.p;be.p=2;var a=Me;Me|=4;try{YM(e,t.alternate,t)}finally{Me=a,be.p=i,Zt.T=n}}qe=3}}function Cg(){if(qe===4||qe===3){qe=0;var e=To;To=null,nA();var t=Wi,n=br,i=_a,a=lb,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?qe=5:(qe=0,br=Wi=null,vb(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(Cs=null),qg(i),n=n.stateNode,pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Oc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Zt.T,s=be.p,be.p=2,Zt.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{Zt.T=n,be.p=s}}if(a=Ao,r=wo,wo=null,a!==null&&(Ao=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);(_a&3)!==0&&Af(),Sa(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===wh?vc++:(vc=0,wh=t):(vc=0,wh=null),kc(0,!1)}}function vb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hc(t)))}function Af(){return To!==null&&(To.skipTransition(),To=null),Ag(),wg(),Cg(),Rg()}function Rg(){if(qe!==5)return!1;var e=Wi,t=Eg;Eg=0;var n=qg(_a),i=Zt.T,a=be.p;try{be.p=32>n?32:n,Zt.T=null,n=Tg,Tg=null;var s=Wi,r=_a;if(qe=0,br=Wi=null,_a=0,(Me&6)!==0)throw Error(et(331));var o=Me;if(Me|=4,sb(s.current),nb(s,s.current,r,n),Me=o,kc(0,!1),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Oc,s)}catch{}return!0}finally{be.p=a,Zt.T=i,vb(e,t)}}function xx(e,t,n){t=Di(n,t),t=lg(e.stateNode,t,2),e=Ts(e,t,2),e!==null&&(Bc(e,2),Sa(e))}function Ne(e,t,n){if(e.tag===3)xx(e,e,n);else for(;t!==null;){if(t.tag===3){xx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){e=Di(n,e),n=UM(2),i=Ts(t,n,2),i!==null&&(LM(n,i,t,e),Bc(i,2),Sa(i));break}}t=t.return}}function Em(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Iw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(R0=!0,a.add(n),e=Gw.bind(null,e,t,n),t.then(e,e))}function Gw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(ge&n)===n&&((Je===4||Je===3&&(ge&62914560)===ge&&300>di()-bf)&&(Me&2)===0?Io(e,0):tf|=n,Uo===ge&&(Uo=0)),Sa(e)}function _b(e,t){t===0&&(t=lS()),e=wr(e,t),e!==null&&(Bc(e,t),Sa(e))}function kw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_b(e,n)}function Xw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),_b(e,n)}function Ww(e,t){return Xg(e,t)}var Oo=null,ao=null,Ng=!1,sf=!1,Tm=!1,Ss=0;function Sa(e){e!==ao&&e.next===null&&(ao===null?Oo=ao=e:ao=ao.next=e),sf=!0,Ng||(Ng=!0,Yw())}function kc(e,t){if(!Tm&&sf){Tm=!0;do for(var n=!1,i=Oo;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-mi(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Sx(i,s))}else s=ge,s=cf(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Pc(i,s)||(n=!0,Sx(i,s));i=i.next}while(n);Tm=!1}}function qw(){yb()}function yb(){sf=Ng=!1;var e=0;Ss!==0&&nC()&&(e=Ss);for(var t=di(),n=null,i=Oo;i!==null;){var a=i.next,s=xb(i,t);s===0?(i.next=null,n===null?Oo=a:n.next=a,a===null&&(ao=n)):(n=i,(e!==0||(s&3)!==0)&&(sf=!0)),i=a}qe!==0&&qe!==5||kc(e,!1),Ss!==0&&(Ss=0)}function xb(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-mi(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=uA(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Le,n=ge,n=cf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&im(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&im(i),qg(n)){case 2:case 8:n=sS;break;case 32:n=Ph;break;case 268435456:n=rS;break;default:n=Ph}return i=Sb.bind(null,e),n=Xg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&im(i),e.callbackPriority=2,e.callbackNode=null,2}function Sb(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Af()&&e.callbackNode!==n)return null;var i=ge;return i=cf(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ub(e,i,t),xb(e,di()),e.callbackNode!=null&&e.callbackNode===n?Sb.bind(null,e):null)}function Sx(e,t){if(Af())return null;ub(e,t,!0)}function Yw(){aC(function(){(Me&6)!==0?Xg(aS,qw):yb()})}function D0(){if(Ss===0){var e=yr;e===0&&(e=Zu,Zu<<=1,(Zu&261888)===0&&(Zu=256)),Ss=e}return Ss}function Mx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mh(e)}function Zw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Mx((a[ni]||null).action),r=i.submitter;r&&(t=(t=r[ni]||null)?Mx(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new hf("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ss!==0){var l=new FormData(a,r);rg(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),rg(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(ch=0;ch<Jm.length;ch++)uh=Jm[ch],bx=uh.toLowerCase(),Ex=uh[0].toUpperCase()+uh.slice(1),qi(bx,"on"+Ex);var uh,bx,Ex,ch;qi(LS,"onAnimationEnd");qi(IS,"onAnimationIteration");qi(OS,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(sw,"onTransitionRun");qi(rw,"onTransitionStart");qi(ow,"onTransitionCancel");qi(PS,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wc));function Mb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){zh(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){zh(h)}a.currentTarget=null,s=l}}}}function de(e,t){var n=t[_y];n===void 0&&(n=t[_y]=new Set);var i=e+"__bubble";n.has(i)||(bb(t,e,2,!1),n.add(i))}function Am(e,t,n){var i=0;t&&(i|=4),bb(n,e,i,t)}var hh="_reactListening"+Math.random().toString(36).slice(2);function U0(e){if(!e[hh]){e[hh]=!0,pS.forEach(function(n){n!=="selectionchange"&&(Jw.has(n)||Am(n,!1,e),Am(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hh]||(t[hh]=!0,Am("selectionchange",!1,t))}}function bb(e,t,n,i){switch(Yb(t)){case 2:var a=VC;break;case 8:a=GC;break;default:a=F0}n=a.bind(null,t,n,e),a=void 0,!Wm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wm(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=cr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}MS(function(){var c=s,h=Zg(n),p=[];t:{var u=BS.get(e);if(u!==void 0){var f=hf,v=e;switch(e){case"keypress":if(vh(n)===0)break t;case"keydown":case"keyup":f=OA;break;case"focusin":v="focus",f=cm;break;case"focusout":v="blur",f=cm;break;case"beforeblur":case"afterblur":f=cm;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=bA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=HA;break;case LS:case IS:case OS:f=AA;break;case PS:f=GA;break;case"scroll":case"scrollend":f=SA;break;case"wheel":f=XA;break;case"copy":case"cut":case"paste":f=CA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Cy;break;case"submit":f=zA;break;case"toggle":case"beforetoggle":f=qA}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),d=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,S;m!==null;){var _=m;if(S=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||S===null||d===null||(_=yc(m,d),_!=null&&M.push(Cc(m,_,S))),g)break;m=m.return}0<M.length&&(u=new f(u,v,null,n,h),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",f&&n!==Xm&&(v=n.relatedTarget||n.fromElement)&&(cr(v)||v[Vo]))break t;(u||f)&&(v=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,u?(f=n.relatedTarget||n.toElement,u=c,f=f?cr(f):null,f!==null&&(g=Ic(f),M=f.tag,f!==g||M!==5&&M!==27&&M!==6)&&(f=null)):(u=null,f=c),u!==f&&(M=Ay,_="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=Cy,_="onPointerLeave",d="onPointerEnter",m="pointer"),g=u==null?v:nc(u),S=f==null?v:nc(f),v=new M(_,m+"leave",u,n,h),v.target=g,v.relatedTarget=S,_=null,cr(h)===c&&(M=new M(d,m+"enter",f,n,h),M.target=S,M.relatedTarget=g,_=M),g=_,M=u&&f?Um(u,f,Kw):null,u!==null&&Tx(p,v,u,M,!1),f!==null&&g!==null&&Tx(p,g,f,M,!0)))}t:{if(u=c?nc(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var E=Uy;else if(Dy(u))if(CS)E=nw;else{E=tw;var T=$A}else f=u.nodeName,!f||f.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Yg(c.elementType)&&(E=Uy):E=ew;if(E&&(E=E(e,c))){wS(p,E,n,h);break t}T&&T(e,u,c)}switch(T=c?nc(c):window,e){case"focusin":(Dy(T)||T.contentEditable==="true")&&(uo=T,Ym=c,oc=null);break;case"focusout":oc=Ym=uo=null;break;case"mousedown":Zm=!0;break;case"contextmenu":case"mouseup":case"dragend":Zm=!1,Py(p,n,h);break;case"selectionchange":if(aw)break;case"keydown":case"keyup":Py(p,n,h)}var C;if(Qg)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else co?TS(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ES&&n.locale!=="ko"&&(co||x!=="onCompositionStart"?x==="onCompositionEnd"&&co&&(C=bS()):(vs=h,Jg="value"in vs?vs.value:vs.textContent,co=!0)),T=rf(c,x),0<T.length&&(x=new wy(x,e,null,n,h),p.push({event:x,listeners:T}),C?x.data=C:(C=AS(n),C!==null&&(x.data=C)))),(C=ZA?JA(e,n):KA(e,n))&&(x=rf(c,"onBeforeInput"),0<x.length&&(T=new wy("onBeforeInput","beforeinput",null,n,h),p.push({event:T,listeners:x}),T.data=C)),Zw(p,e,c,n,h)}Mb(p,t)})}function Cc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rf(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=yc(e,n),a!=null&&i.unshift(Cc(e,a,s)),a=yc(e,t),a!=null&&i.push(Cc(e,a,s))),e.tag===3)return i;e=e.return}return[]}function Kw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tx(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=yc(n,s),c!=null&&r.unshift(Cc(n,c,l))):a||(c=yc(n,s),c!=null&&r.push(Cc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Qw=/\r\n?/g,jw=/\u0000|\uFFFD/g;function Ax(e){return(typeof e=="string"?e:""+e).replace(Qw,`
`).replace(jw,"")}function Eb(e,t){return t=Ax(t),Ax(e)===t}function Re(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||No(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&No(e,""+i);else return;break;case"className":Qu(e,"class",i);break;case"tabIndex":Qu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qu(e,n,i);break;case"style":SS(e,i,s);return;case"data":if(t!=="object"){Qu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",a.name,a,null),Re(e,t,"formEncType",a.formEncType,a,null),Re(e,t,"formMethod",a.formMethod,a,null),Re(e,t,"formTarget",a.formTarget,a,null)):(Re(e,t,"encType",a.encType,a,null),Re(e,t,"method",a.method,a,null),Re(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=pa);return;case"onScroll":i!=null&&de("scroll",e);return;case"onScrollEnd":i!=null&&de("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=mh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":de("beforetoggle",e),de("toggle",e),ph(e,"popover",i);break;case"xlinkActuate":Ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ia(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ia(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ia(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ia(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ph(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=yA.get(n)||n,ph(e,n,i);else return}xe=!0}function Dg(e,t,n,i,a,s){switch(n){case"style":SS(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")No(e,i);else if(typeof i=="number"||typeof i=="bigint")No(e,""+i);else return;break;case"onScroll":i!=null&&de("scroll",e);return;case"onScrollEnd":i!=null&&de("scrollend",e);return;case"onClick":i!=null&&(e.onclick=pa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!mS.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[ni]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}xe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ph(e,n,i)}return}xe=!0}function An(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:Re(e,t,s,r,n,null)}}a&&Re(e,t,"srcSet",n.srcSet,n,null),i&&Re(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(et(137,t));break;default:Re(e,t,i,h,n,null)}}_S(e,s,o,l,c,r,a,!1);return;case"select":de("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Re(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?yo(e,!!i,t,!1):n!=null&&yo(e,!!i,n,!0);return;case"textarea":de("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:Re(e,t,r,o,n,null)}xS(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Re(e,t,l,i,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<wc.length;i++)de(wc[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:Re(e,t,c,i,n,null)}return;default:if(Yg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Dg(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Re(e,t,o,i,n,null))}var $w={};function tC(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(f)||Re(e,t,f,null,i,p)}}for(var u in i){var f=i[u];if(p=n[u],i.hasOwnProperty(u)&&(f!=null||p!=null))switch(u){case"type":f!==p&&(xe=!0),s=f;break;case"name":f!==p&&(xe=!0),a=f;break;case"checked":f!==p&&(xe=!0),c=f;break;case"defaultChecked":f!==p&&(xe=!0),h=f;break;case"value":f!==p&&(xe=!0),r=f;break;case"defaultValue":f!==p&&(xe=!0),o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(et(137,t));break;default:f!==p&&Re(e,t,u,f,i,p)}}km(e,r,o,l,c,h,s,a);return;case"select":f=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(s)||Re(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(xe=!0),u=s;break;case"defaultValue":s!==l&&(xe=!0),o=s;break;case"multiple":s!==l&&(xe=!0),r=s;default:s!==l&&Re(e,t,a,s,i,l)}t=o,n=r,i=f,u!=null?yo(e,!!n,u,!1):!!i!=!!n&&(t!=null?yo(e,!!n,t,!0):yo(e,!!n,n?[]:"",!1));return;case"textarea":f=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Re(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(xe=!0),u=a;break;case"defaultValue":a!==s&&(xe=!0),f=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(et(91));break;default:a!==s&&Re(e,t,r,a,i,s)}yS(e,u,f);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:Re(e,t,v,null,i,u)}for(l in i)if(u=i[l],f=n[l],i.hasOwnProperty(l)&&u!==f&&(u!=null||f!=null))switch(l){case"selected":u!==f&&(xe=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Re(e,t,l,u,i,f)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&Re(e,t,M,null,i,u);for(c in i)if(u=i[c],f=n[c],i.hasOwnProperty(c)&&u!==f&&(u!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:Re(e,t,c,u,i,f)}return;default:if(Yg(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Dg(e,t,g,void 0,i,u);for(h in i)u=i[h],f=n[h],!i.hasOwnProperty(h)||u===f||u===void 0&&f===void 0||Dg(e,t,h,u,i,f);return}}for(var d in n)u=n[d],n.hasOwnProperty(d)&&u!=null&&!i.hasOwnProperty(d)&&Re(e,t,d,null,i,u);for(p in i)u=i[p],f=n[p],!i.hasOwnProperty(p)||u===f||u==null&&f==null||Re(e,t,p,u,i,f)}function wx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&wx(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&wx(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ug=null,Lg=null;function Rc(e){return e.nodeType===9?e:e.ownerDocument}function Cx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ab(e,t,n,i){return n=Rc(n).createElement(e),n[Mn]=i,n[ni]=t,An(n,e,t),gn(n),n}function Ig(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cm=null;function nC(){var e=window.event;return e&&e.type==="popstate"?e===Cm?!1:(Cm=e,!0):(Cm=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,iC=typeof clearTimeout=="function"?clearTimeout:void 0,Rx=typeof Promise=="function"?Promise:void 0,Nx=typeof requestAnimationFrame=="function"?requestAnimationFrame:L0,aC=typeof queueMicrotask=="function"?queueMicrotask:typeof Rx<"u"?function(e){return Rx.resolve(null).then(e).catch(sC)}:L0;function sC(e){setTimeout(function(){throw e})}function zs(e){return e==="head"}function Dx(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ho(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Nm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Nm(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[zc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Nm(e.ownerDocument.body);n=a}while(n);Ho(t)}function Ux(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function wb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Cb(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Rb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Og(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Rb(t,n,e)}function rC(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Rb(t,n,e)}function oC(e){return e.documentElement.clientHeight}function lC(e){this.addEventListener("load",e),this.addEventListener("error",e)}function cC(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,f=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var M=[];if(v==="loaded"&&(oC(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),v=M.length,e!==null)for(var g=e.suspenseyImages,d=0,m=0;m<g.length;m++){var S=g[m];if(!S.complete){var _=S.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<u.innerHeight&&_.left<u.innerWidth){if(d+=Vb(S),d>Nh){M.length=v;break}S=new Promise(lC.bind(S)),M.push(S)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(E){return setTimeout(E,500)})]).then(a,a),(f?Promise.allSettled([f.finished,u]):u).then(s,s);if(a(),f)return f.finished.then(s,s);s()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),f=0;f<u.length;f++){var v=u[f],M=v.effect,g=M.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(v),v=M.getKeyframes();for(var d=g=void 0,m=!0,S=0;S<v.length;S++){var _=v[S],E=_.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=_.height,d===void 0)d=E;else if(d!==E){m=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}m&&g!==void 0&&d!==void 0&&(M.setKeyframes(v),m=getComputedStyle(M.target,M.pseudoElement),m.width!==g||m.height!==d)&&(m=v[0],m.width=g,m.height=d,m=v[v.length-1],m.width=g,m.height=d,M.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),a(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),a(),r(),null}}function ur(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ur.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ie({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};ur.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Nb(e){return{name:e,group:new ur("group",e),imagePair:new ur("image-pair",e),old:new ur("old",e),new:new ur("new",e)}}function _i(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}_i.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(Db(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Po(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),ei(this._fragmentFiber.child,!1,uC,e,o,i)}this._eventListeners=s}};function uC(e,t,n,i){return ln(e).addEventListener(t,n,i),!1}_i.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=Db(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=Po(a.optionsOrUseCapture),ei(this._fragmentFiber.child,!1,hC,e,n,a),i.splice(t,1),s!==null&&s()}};function hC(e,t,n,i){return ln(e).removeEventListener(t,n,i),!1}function Po(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Lx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Db(e,t,n,i){if(e.length===0)return-1;i=Lx(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&Lx(s.optionsOrUseCapture)===i)return a}return-1}_i.prototype.dispatchEvent=function(e){var t=Er(this._fragmentFiber);if(t===null)return!0;t=ln(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,Po(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,Po(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};_i.prototype.focus=function(e){ei(this._fragmentFiber.child,!0,Ub,e,void 0,void 0)};function Ub(e,t){return e.tag===6?!1:(e=ln(e),bC(e,t))}_i.prototype.focusLast=function(e){var t=[];ei(this._fragmentFiber.child,!0,I0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Ub(t[n],e);n--);};function I0(e,t){return t.push(e),!1}_i.prototype.blur=function(){var e=Er(this._fragmentFiber);e!==null&&(e=ln(e),e=Rc(e).activeElement,e!==null&&ei(this._fragmentFiber.child,!1,fC,e,void 0,void 0))};function fC(e,t){return e.tag===6?!1:(e=ln(e),e===t||e.contains(t)?(t.blur(),!0):!1)}_i.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ei(this._fragmentFiber.child,!1,dC,e,void 0,void 0)};function dC(e,t){return e.tag===6||(e=ln(e),t.observe(e)),!1}_i.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ei(this._fragmentFiber.child,!1,pC,e,void 0,void 0);for(var n=t=0;n<Xi.length;n++){var i=Xi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Xi[t++]=i}Xi.length=t}};function pC(e,t){return e.tag===6||(e=ln(e),t.unobserve(e)),!1}var Xi=[],Rm=!1;function mC(e,t,n){Xi.push({fragmentInstance:e,observer:t,instance:n}),Rm||(Rm=!0,EC(function(){Rm=!1;var i=Xi;Xi=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}_i.prototype.getClientRects=function(){var e=[];return ei(this._fragmentFiber.child,!1,gC,e,void 0,void 0),e};function gC(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ln(e),t.push.apply(t,e.getClientRects());return!1}_i.prototype.getRootNode=function(e){var t=Er(this._fragmentFiber);return t===null?this:ln(t).getRootNode(e)};_i.prototype.compareDocumentPosition=function(e){var t=Er(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ei(this._fragmentFiber.child,!1,I0,n,void 0,void 0);var i=ln(t);if(n.length===0){if(n=i,fy(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=tS(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=ln(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ln(n[0]),a=ln(n[n.length-1]);var s=fy(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vC(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vC(e,t,n,i,a){var s=cr(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=Er(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=Um(n,s,dy),t===null?t=!1:(ei(t,!0,YT,s,n),s=so,so=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=Um(i,s,dy),t===null?t=!1:(ei(t,!0,ZT,s,i),s=so,Dm=so=null,t=s!==null)),t):!1}function Ix(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}_i.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(et(566));var t=[];ei(this._fragmentFiber.child,!1,I0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=tS(this._fragmentFiber);if(i=n?i[1]||i[0]||Er(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=ln(i),Ix(e,n);return}if(i=ln(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=ln(a),Ix(a,n)):ln(a).scrollIntoView(e),i+=n?-1:1}};function _C(e,t){return e=ln(e),Lb(e,t),!1}function Lb(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Ib(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,Po(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<Xi.length;o++){var l=Xi[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(Xi[r++]=l)}Xi.length=r,s.observe(e)}),Lb(e,t))}function yC(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,Po(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?mC(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Pg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pg(n),uf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xC(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[zc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Li(e.nextSibling),e===null)break}return null}function SC(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Li(e.nextSibling),e===null))return null;return e}function Ob(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Li(e.nextSibling),e===null))return null;return e}function Bg(e){return e.data==="$?"||e.data==="$~"}function O0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MC(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zg=null;function Ox(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Li(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Px(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function bC(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function EC(e){Nx(function(){Nx(function(t){return e(t)})})}function Pb(e,t,n){switch(t=Rc(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function Bb(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Re(e,t,i,null,$w,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===pa&&(e.onclick=null),uf(e)}function Nm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uf(e)}var Ii=new Map,Bx=new Set;function Nc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Za=be.d;be.d={f:TC,r:AC,D:wC,C:CC,L:RC,m:NC,X:UC,S:DC,M:LC};function TC(){var e=Za.f(),t=Ef();return e||t}function AC(e){var t=Go(e);t!==null&&t.tag===5&&t.type==="form"?SM(t):Za.r(e)}var qo=typeof document>"u"?null:document;function zb(e,t,n){var i=qo;if(i&&typeof t=="string"&&t){var a=Ni(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Bx.has(a)||(Bx.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),An(t,"link",e),gn(t),i.head.appendChild(t)))}}function wC(e){Za.D(e),zb("dns-prefetch",e,null)}function CC(e,t){Za.C(e,t),zb("preconnect",e,t)}function RC(e,t,n){Za.L(e,t,n);var i=qo;if(i&&e&&t){var a='link[rel="preload"][as="'+Ni(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ni(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ni(n.imageSizes)+'"]')):a+='[href="'+Ni(e)+'"]';var s=a;switch(t){case"style":s=Bo(e);break;case"script":s=Yo(e)}if(!(Ii.has(s)||(e=Ie({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ii.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Xc(s))||t==="script"&&i.querySelector(Wc(s))))){var r=i.createElement("link");An(r,"link",e),t==="style"&&(r[Bh]=!0,r.onload=r.onerror=function(){dS(r)}),gn(r),i.head.appendChild(r)}}}function NC(e,t){Za.m(e,t);var n=qo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ni(i)+'"][href="'+Ni(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Yo(e)}if(!Ii.has(s)&&(e=Ie({rel:"modulepreload",href:e},t),Ii.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wc(s)))return}i=n.createElement("link"),An(i,"link",e),gn(i),n.head.appendChild(i)}}}function DC(e,t,n){Za.S(e,t,n);var i=qo;if(i&&e){var a=_o(i).hoistableStyles,s=Bo(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Xc(s)))o.loading=5;else{e=Ie({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ii.get(s))&&P0(e,n);var l=r=i.createElement("link");gn(l),An(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ch(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function UC(e,t){Za.X(e,t);var n=qo;if(n&&e){var i=_o(n).hoistableScripts,a=Yo(e),s=i.get(a);s||(s=n.querySelector(Wc(a)),s||(e=Ie({src:e,async:!0},t),(t=Ii.get(a))&&B0(e,t),s=n.createElement("script"),gn(s),An(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function LC(e,t){Za.M(e,t);var n=qo;if(n&&e){var i=_o(n).hoistableScripts,a=Yo(e),s=i.get(a);s||(s=n.querySelector(Wc(a)),s||(e=Ie({src:e,async:!0,type:"module"},t),(t=Ii.get(a))&&B0(e,t),s=n.createElement("script"),gn(s),An(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function zx(e,t,n,i){var a=(a=Ms.current)?Nc(a):null;if(!a)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Bo(n.href),t=_o(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Bo(n.href);var s=_o(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Xc(e)))?s._p||(r.instance=s,r.state.loading=5):(s=Ii.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ii.set(e,s)),IC(a,e,s,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Yo(n),t=_o(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function Bo(e){return'href="'+Ni(e)+'"'}function Xc(e){return'link[rel="stylesheet"]['+e+"]"}function Fb(e){return Ie({},e,{"data-precedence":e.precedence,precedence:null})}function IC(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Bh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Bh]=!0,t.onload=t.onerror=dS.bind(null,t),An(t,"link",n),gn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Yo(e){return'[src="'+Ni(e)+'"]'}function Wc(e){return"script[async]"+e}function Fx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ni(n.href)+'"]');if(i)return t.instance=i,gn(i),i;var a=Ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),gn(i),An(i,"style",a),Ch(i,n.precedence,e),t.instance=i;case"stylesheet":a=Bo(n.href);var s=e.querySelector(Xc(a));if(s)return t.state.loading|=4,t.instance=s,gn(s),s;i=Fb(n),(a=Ii.get(a))&&P0(i,a),s=(e.ownerDocument||e).createElement("link"),gn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(s,"link",i),t.state.loading|=4,Ch(s,n.precedence,e),t.instance=s;case"script":return s=Yo(n.src),(a=e.querySelector(Wc(s)))?(t.instance=a,gn(a),a):(i=n,(a=Ii.get(s))&&(i=Ie({},n),B0(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),gn(a),An(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ch(i,n.precedence,e));return t.instance}function Ch(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function P0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function B0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rh=null;function Hx(e,t,n){if(Rh===null){var i=new Map,a=Rh=new Map;a.set(n,i)}else a=Rh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[zc]||s[Mn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Fg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function OC(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Hb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vb(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Gx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Vb(t),e.suspenseyImages.push(t)),e=zC.bind(e),t.decode().then(e,e))}function PC(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Bo(i.href),s=t.querySelector(Xc(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Dc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,gn(s);return}s=t.ownerDocument||t,i=Fb(i),(a=Ii.get(a))&&P0(i,a),s=s.createElement("link"),gn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Dc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Nh=0;function BC(e,t){return e.stylesheets&&e.count===0&&Dh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Dh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Nh===0&&(Nh=62500*eC());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dh(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Nh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Gb(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Dh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Dc(){this.count--,Gb(this)}function zC(){this.imgCount--,Gb(this)}var of=null;function Dh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,of=new Map,t.forEach(FC,e),of=null,Dc.call(e))}function FC(e,t){if(!(t.state.loading&4)){var n=of.get(e);if(n)var i=n.get(null);else{n=new Map,of.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Dc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var zo={$$typeof:da,Provider:null,Consumer:null,_currentValue:hr,_currentValue2:hr,_threadCount:0};function HC(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=am(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=am(0),this.hiddenUpdates=am(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function kb(e,t,n,i,a,s,r,o,l,c,h,p){return e=new HC(e,t,n,r,l,c,h,p,o),t=1,s===!0&&(t|=24),s=$n(3,null,null,t),e.current=s,s.stateNode=e,t=i0(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},r0(s),e}function Xb(e){return e?(e=po,e):po}function Wb(e,t,n,i,a,s){a=Xb(a),i.context===null?i.context=a:i.pendingContext=a,i=Es(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ts(e,i,t),n!==null&&(ti(n,e,t),cc(n,e,t))}function kx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function z0(e,t){kx(e,t),(e=e.alternate)&&kx(e,t)}function qb(e){if(e.tag===13||e.tag===31){var t=wr(e,67108864);t!==null&&ti(t,e,67108864),z0(e,67108864)}}function Xx(e){if(e.tag===13||e.tag===31){var t=gi();t=Wg(t);var n=wr(e,t);n!==null&&ti(n,e,t),z0(e,t)}}var Fo=!0;function VC(e,t,n,i){var a=Zt.T;Zt.T=null;var s=be.p;try{be.p=2,F0(e,t,n,i)}finally{be.p=s,Zt.T=a}}function GC(e,t,n,i){var a=Zt.T;Zt.T=null;var s=be.p;try{be.p=8,F0(e,t,n,i)}finally{be.p=s,Zt.T=a}}function F0(e,t,n,i){if(Fo){var a=Hg(i);if(a===null)wm(e,t,i,lf,n),Wx(e,i);else if(XC(a,e,t,n,i))i.stopPropagation();else if(Wx(e,i),t&4&&-1<kC.indexOf(e)){for(;a!==null;){var s=Go(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=rr(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-mi(r);o.entanglements[1]|=l,r&=~l}Sa(s),(Me&6)===0&&(ef=di()+500,kc(0,!1))}}break;case 31:case 13:o=wr(s,2),o!==null&&ti(o,s,2),Ef(),z0(s,2)}if(s=Hg(i),s===null&&wm(e,t,i,lf,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else wm(e,t,i,null,n)}}function Hg(e){return e=Zg(e),H0(e)}var lf=null;function H0(e){if(lf=null,e=cr(e),e!==null){var t=Ic(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Qx(t),e!==null)return e;e=null}else if(n===31){if(e=jx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lf=e,null}function Yb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(iA()){case aS:return 2;case sS:return 8;case Ph:case aA:return 32;case rS:return 268435456;default:return 32}default:return 32}}var Vg=!1,Rs=null,Ns=null,Ds=null,Uc=new Map,Lc=new Map,ms=[],kC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wx(e,t){switch(e){case"focusin":case"focusout":Rs=null;break;case"dragenter":case"dragleave":Ns=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":Uc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lc.delete(t.pointerId)}}function jl(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Go(t),t!==null&&qb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function XC(e,t,n,i,a){switch(t){case"focusin":return Rs=jl(Rs,e,t,n,i,a),!0;case"dragenter":return Ns=jl(Ns,e,t,n,i,a),!0;case"mouseover":return Ds=jl(Ds,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Uc.set(s,jl(Uc.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Lc.set(s,jl(Lc.get(s)||null,e,t,n,i,a)),!0}return!1}function Zb(e){var t=cr(e.target);if(t!==null){var n=Ic(t);if(n!==null){if(t=n.tag,t===13){if(t=Qx(n),t!==null){e.blockedOn=t,vy(e.priority,function(){Xx(n)});return}}else if(t===31){if(t=jx(n),t!==null){e.blockedOn=t,vy(e.priority,function(){Xx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xm=i,n.target.dispatchEvent(i),Xm=null}else return t=Go(n),t!==null&&qb(t),e.blockedOn=n,!1;t.shift()}return!0}function qx(e,t,n){Uh(e)&&n.delete(t)}function WC(){Vg=!1,Rs!==null&&Uh(Rs)&&(Rs=null),Ns!==null&&Uh(Ns)&&(Ns=null),Ds!==null&&Uh(Ds)&&(Ds=null),Uc.forEach(qx),Lc.forEach(qx)}function fh(e,t){e.blockedOn===t&&(e.blockedOn=null,Vg||(Vg=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,WC)))}var dh=null;function Yx(e){dh!==e&&(dh=e,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,function(){dh===e&&(dh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(H0(i||n)===null)continue;break}var s=Go(n);s!==null&&(e.splice(t,3),t-=3,rg(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ho(e){function t(l){return fh(l,e)}Rs!==null&&fh(Rs,e),Ns!==null&&fh(Ns,e),Ds!==null&&fh(Ds,e),Uc.forEach(t),Lc.forEach(t);for(var n=0;n<ms.length;n++){var i=ms[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ms.length&&(n=ms[0],n.blockedOn===null);)Zb(n),n.blockedOn===null&&ms.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[ni]||null;if(typeof s=="function")r||Yx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[ni]||null)o=r.formAction;else if(H0(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Yx(n)}}}function Jb(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function V0(e){this._internalRoot=e}wf.prototype.render=V0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=gi();Wb(n,i,e,t,null,null)};wf.prototype.unmount=V0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wb(e.current,2,null,e,null,null),Ef(),t[Vo]=null}};function wf(e){this._internalRoot=e}wf.prototype.unstable_scheduleHydration=function(e){if(e){var t=fS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ms.length&&t!==0&&t<ms[n].priority;n++);ms.splice(n,0,e),n===0&&Zb(e)}};var Zx=Jx.version;if(Zx!=="19.3.1")throw Error(et(527,Zx,"19.3.1"));be.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=qT(t),e=e!==null?$x(e):null,e=e===null?null:e.stateNode,e};var qC={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Zt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($l=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$l.isDisabled&&$l.supportsFiber))try{Oc=$l.inject(qC),pi=$l}catch{}var $l;Cf.createRoot=function(e,t){if(!Kx(e))throw Error(et(299));var n=!1,i="",a=RM,s=NM,r=DM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=kb(e,1,!1,null,null,n,i,null,a,s,r,Jb),e[Vo]=t.current,U0(e),new V0(t)};Cf.hydrateRoot=function(e,t,n){if(!Kx(e))throw Error(et(299));var i=!1,a="",s=RM,r=NM,o=DM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=kb(e,1,!0,t,n??null,i,a,l,s,r,o,Jb),t.context=Xb(null),n=t.current,i=gi(),i=Wg(i),a=Es(i),a.callback=null,Ts(n,a,i),n=i,t.current.lanes=n,Bc(t,n),Sa(t),e[Vo]=t.current,U0(e),new wf(t)};Cf.version="19.3.1"});var $b=sa((CL,jb)=>{"use strict";function Qb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qb)}catch(e){console.error(e)}}Qb(),jb.exports=Kb()});var KE=sa(Cp=>{"use strict";var qU=Symbol.for("react.transitional.element"),YU=Symbol.for("react.fragment");function JE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:qU,type:e,key:i,ref:t!==void 0?t:null,props:n}}Cp.Fragment=YU;Cp.jsx=JE;Cp.jsxs=JE});var Gr=sa((jP,QE)=>{"use strict";QE.exports=KE()});var Da=ra(Kr()),pT=ra($b());var ri=ra(Kr());var kr=ra(Kr());var R1=0,Av=1,N1=2;var Su=1,D1=2,wl=3,tr=0,Zn=1,Ei=2,Ca=0,Cl=1,wv=2,Cv=3,Rv=4,U1=5;var zr=100,L1=101,I1=102,O1=103,P1=104,B1=200,z1=201,F1=202,H1=203,Nv=204,Dv=205,V1=206,G1=207,k1=208,X1=209,W1=210,q1=211,Y1=212,Z1=213,J1=214,jf=0,$f=1,td=2,ll=3,ed=4,nd=5,id=6,ad=7,Uv=0,K1=1,Q1=2,ji=0,Lv=1,Iv=2,Ov=3,Pv=4,Bv=5,zv=6,Mu=7;var Fv=300,er=301,Fr=302,Od=303,Pd=304,bu=306,Ta=1e3,Pi=1001,sd=1002,yn=1003,j1=1004;var Eu=1005;var un=1006,Rl=1007;var $i=1008;var si=1009,Hv=1010,Vv=1011,Nl=1012,Bd=1013,ta=1014,ea=1015,na=1016,zd=1017,Fd=1018,Dl=1020,Gv=35902,kv=35899,Xv=1021,Wv=1022,Bi=1023,Aa=1026,nr=1027,qv=1028,Hd=1029,ir=1030,Vd=1031;var Gd=1033,Tu=33776,Au=33777,wu=33778,Cu=33779,kd=35840,Xd=35841,Wd=35842,qd=35843,Yd=36196,Zd=37492,Jd=37496,Kd=37488,Qd=37489,Ru=37490,jd=37491,$d=37808,tp=37809,ep=37810,np=37811,ip=37812,ap=37813,sp=37814,rp=37815,op=37816,lp=37817,cp=37818,up=37819,hp=37820,fp=37821,dp=36492,pp=36494,mp=36495,gp=36283,vp=36284,Nu=36285,_p=36286;var tu=2300,rd=2301,Kf=2302,pv=2303,mv=2400,gv=2401,vv=2402;var $1=3200;var yp=0,tE=1,ns="",Cn="srgb",eu="srgb-linear",nu="linear",Ae="srgb";var Qf=7680;var eE=519,nE=512,iE=513,aE=514,xp=515,sE=516,rE=517,Sp=518,oE=519,lE=35044;var Yv="300 es",Qi=2e3,cl=2001;function YC(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ZC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function iu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function cE(){let e=iu("canvas");return e.style.display="block",e}var t1={},ul=null;function Zv(...e){let t="THREE."+e.shift();ul?ul("log",t,...e):console.log(t,...e)}function uE(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function qt(...e){e=uE(e);let t="THREE."+e.shift();if(ul)ul("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Wt(...e){e=uE(e);let t="THREE."+e.shift();if(ul)ul("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Lr(...e){let t=e.join(" ");t in t1||(t1[t]=!0,qt(...e))}function hE(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var fE={[jf]:$f,[td]:id,[ed]:ad,[ll]:nd,[$f]:jf,[id]:td,[ad]:ed,[nd]:ll},wa=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var G0=Math.PI/180,od=180/Math.PI;function Ul(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[e&255]+Ln[e>>8&255]+Ln[e>>16&255]+Ln[e>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function he(e,t,n){return Math.max(t,Math.min(n,e))}function JC(e,t){return(e%t+t)%t}function k0(e,t,n){return(1-n)*e+n*t}function qc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var t_=class t_{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};t_.prototype.isVector2=!0;var mt=t_,Xn=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=s[r+0],f=s[r+1],v=s[r+2],M=s[r+3];if(p!==M||l!==u||c!==f||h!==v){let g=l*u+c*f+h*v+p*M;g<0&&(u=-u,f=-f,v=-v,M=-M,g=-g);let d=1-o;if(g<.9995){let m=Math.acos(g),S=Math.sin(m);d=Math.sin(d*m)/S,o=Math.sin(o*m)/S,l=l*d+u*o,c=c*d+f*o,h=h*d+v*o,p=p*d+M*o}else{l=l*d+u*o,c=c*d+f*o,h=h*d+v*o,p=p*d+M*o;let m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=s[r],u=s[r+1],f=s[r+2],v=s[r+3];return t[n]=o*v+h*p+l*f-c*u,t[n+1]=l*v+h*u+c*p-o*f,t[n+2]=c*v+h*f+o*u-l*p,t[n+3]=h*v-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),u=l(i/2),f=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*h*p+c*f*v,this._y=c*f*p-u*h*v,this._z=c*h*v+u*f*p,this._w=c*h*p-u*f*v;break;case"YXZ":this._x=u*h*p+c*f*v,this._y=c*f*p-u*h*v,this._z=c*h*v-u*f*p,this._w=c*h*p+u*f*v;break;case"ZXY":this._x=u*h*p-c*f*v,this._y=c*f*p+u*h*v,this._z=c*h*v+u*f*p,this._w=c*h*p-u*f*v;break;case"ZYX":this._x=u*h*p-c*f*v,this._y=c*f*p+u*h*v,this._z=c*h*v-u*f*p,this._w=c*h*p+u*f*v;break;case"YZX":this._x=u*h*p+c*f*v,this._y=c*f*p+u*h*v,this._z=c*h*v-u*f*p,this._w=c*h*p-u*f*v;break;case"XZY":this._x=u*h*p-c*f*v,this._y=c*f*p-u*h*v,this._z=c*h*v+u*f*p,this._w=c*h*p+u*f*v;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-a)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(a+r)/f,this._z=(s+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(s-c)/f,this._x=(a+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(r-a)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},e_=class e_{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(e1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(e1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-s*p,this.z=a+l*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return X0.copy(this).projectOnVector(t),this.sub(X0)}reflect(t){return this.sub(X0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};e_.prototype.isVector3=!0;var U=e_,X0=new U,e1=new Xn,n_=class n_{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],v=i[8],M=a[0],g=a[3],d=a[6],m=a[1],S=a[4],_=a[7],E=a[2],T=a[5],C=a[8];return s[0]=r*M+o*m+l*E,s[3]=r*g+o*S+l*T,s[6]=r*d+o*_+l*C,s[1]=c*M+h*m+p*E,s[4]=c*g+h*S+p*T,s[7]=c*d+h*_+p*C,s[2]=u*M+f*m+v*E,s[5]=u*g+f*S+v*T,s[8]=u*d+f*_+v*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*s,f=c*s-r*l,v=n*p+i*u+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(h*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=f*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(W0.makeScale(t,n)),this}rotate(t){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(W0.makeRotation(-t)),this}translate(t,n){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(W0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};n_.prototype.isMatrix3=!0;var Qt=n_,W0=new Qt,n1=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i1=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KC(){let e={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Ae&&(a.r=ts(a.r),a.g=ts(a.g),a.b=ts(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ae&&(a.r=ol(a.r),a.g=ol(a.g),a.b=ol(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ns?nu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[eu]:{primaries:t,whitePoint:i,transfer:nu,toXYZ:n1,fromXYZ:i1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:n1,fromXYZ:i1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),e}var ve=KC();function ts(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ol(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Zo,ld=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zo===void 0&&(Zo=iu("canvas")),Zo.width=t.width,Zo.height=t.height;let a=Zo.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Zo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=iu("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ts(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},QC=0,hl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=Ul(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(q0(a[r].image)):s.push(q0(a[r]))}else s=q0(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function q0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ld.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var jC=0,Y0=new U,Wn=class e extends wa{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Pi,a=Pi,s=un,r=$i,o=Bi,l=si,c=e.DEFAULT_ANISOTROPY,h=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=Ul(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Y0).x}get height(){return this.source.getSize(Y0).y}get depth(){return this.source.getSize(Y0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){qt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){qt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Fv;Wn.DEFAULT_ANISOTROPY=1;var i_=class i_{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],v=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,_=(f+1)/2,E=(d+1)/2,T=(h+u)/4,C=(p+M)/4,x=(v+g)/4;return S>_&&S>E?S<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(S),a=T/i,s=C/i):_>E?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=T/a,s=x/a):E<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(E),i=C/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-M)/m,this.z=(u-h)/m,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this.w=he(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this.w=he(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};i_.prototype.isVector4=!0;var We=i_,cd=class extends wa{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new We(0,0,t,n),this.scissorTest=!1,this.viewport=new We(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},s=new Wn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new hl(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends cd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},au=class extends Wn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ud=class extends Wn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Id=class Id{constructor(t,n,i,a,s,r,o,l,c,h,p,u,f,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,p,u,f,v,M,g)}set(t,n,i,a,s,r,o,l,c,h,p,u,f,v,M,g){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=a,d[1]=s,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=v,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Id().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/Jo.setFromMatrixColumn(t,0).length(),s=1/Jo.setFromMatrixColumn(t,1).length(),r=1/Jo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let u=r*h,f=r*p,v=o*h,M=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=f+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+f*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*p,v=c*h,M=c*p;n[0]=u+M*o,n[4]=v*o-f,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=f*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*p,v=c*h,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=v+f*o,n[1]=f+v*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*p,v=o*h,M=o*p;n[0]=l*h,n[4]=v*c-f,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=f*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,v=o*l,M=o*c;n[0]=l*h,n[4]=M-u*p,n[8]=v*p+f,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=f*p+v,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,f=r*c,v=o*l,M=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+M,n[5]=r*h,n[9]=f*p-v,n[2]=v*p-f,n[6]=o*h,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose($C,t,tR)}lookAt(t,n,i){let a=this.elements;return yi.subVectors(t,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Fs.crossVectors(i,yi),Fs.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Fs.crossVectors(i,yi)),Fs.normalize(),Rf.crossVectors(yi,Fs),a[0]=Fs.x,a[4]=Rf.x,a[8]=yi.x,a[1]=Fs.y,a[5]=Rf.y,a[9]=yi.y,a[2]=Fs.z,a[6]=Rf.z,a[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],v=i[2],M=i[6],g=i[10],d=i[14],m=i[3],S=i[7],_=i[11],E=i[15],T=a[0],C=a[4],x=a[8],w=a[12],R=a[1],N=a[5],V=a[9],F=a[13],I=a[2],P=a[6],K=a[10],Y=a[14],st=a[3],q=a[7],nt=a[11],at=a[15];return s[0]=r*T+o*R+l*I+c*st,s[4]=r*C+o*N+l*P+c*q,s[8]=r*x+o*V+l*K+c*nt,s[12]=r*w+o*F+l*Y+c*at,s[1]=h*T+p*R+u*I+f*st,s[5]=h*C+p*N+u*P+f*q,s[9]=h*x+p*V+u*K+f*nt,s[13]=h*w+p*F+u*Y+f*at,s[2]=v*T+M*R+g*I+d*st,s[6]=v*C+M*N+g*P+d*q,s[10]=v*x+M*V+g*K+d*nt,s[14]=v*w+M*F+g*Y+d*at,s[3]=m*T+S*R+_*I+E*st,s[7]=m*C+S*N+_*P+E*q,s[11]=m*x+S*V+_*K+E*nt,s[15]=m*w+S*F+_*Y+E*at,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],v=t[3],M=t[7],g=t[11],d=t[15],m=l*f-c*u,S=o*f-c*p,_=o*u-l*p,E=r*f-c*h,T=r*u-l*h,C=r*p-o*h;return n*(M*m-g*S+d*_)-i*(v*m-g*E+d*T)+a*(v*S-M*E+d*C)-s*(v*_-M*T+g*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(s*h-o*l)+a*(s*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],v=t[12],M=t[13],g=t[14],d=t[15],m=n*o-i*r,S=n*l-a*r,_=n*c-s*r,E=i*l-a*o,T=i*c-s*o,C=a*c-s*l,x=h*M-p*v,w=h*g-u*v,R=h*d-f*v,N=p*g-u*M,V=p*d-f*M,F=u*d-f*g,I=m*F-S*V+_*N+E*R-T*w+C*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/I;return t[0]=(o*F-l*V+c*N)*P,t[1]=(a*V-i*F-s*N)*P,t[2]=(M*C-g*T+d*E)*P,t[3]=(u*T-p*C-f*E)*P,t[4]=(l*R-r*F-c*w)*P,t[5]=(n*F-a*R+s*w)*P,t[6]=(g*_-v*C-d*S)*P,t[7]=(h*C-u*_+f*S)*P,t[8]=(r*V-o*R+c*x)*P,t[9]=(i*R-n*V-s*x)*P,t[10]=(v*T-M*_+d*m)*P,t[11]=(p*_-h*T-f*m)*P,t[12]=(o*w-r*N-l*x)*P,t[13]=(n*N-i*w+a*x)*P,t[14]=(M*S-v*E-g*m)*P,t[15]=(h*E-p*S+u*m)*P,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,p=o+o,u=s*c,f=s*h,v=s*p,M=r*h,g=r*p,d=o*p,m=l*c,S=l*h,_=l*p,E=i.x,T=i.y,C=i.z;return a[0]=(1-(M+d))*E,a[1]=(f+_)*E,a[2]=(v-S)*E,a[3]=0,a[4]=(f-_)*T,a[5]=(1-(u+d))*T,a[6]=(g+m)*T,a[7]=0,a[8]=(v+S)*C,a[9]=(g-m)*C,a[10]=(1-(u+M))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Jo.set(a[0],a[1],a[2]).length(),o=Jo.set(a[4],a[5],a[6]).length(),l=Jo.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Yi.copy(this);let c=1/r,h=1/o,p=1/l;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=h,Yi.elements[5]*=h,Yi.elements[6]*=h,Yi.elements[8]*=p,Yi.elements[9]*=p,Yi.elements[10]*=p,n.setFromRotationMatrix(Yi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Qi,l=!1){let c=this.elements,h=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),f=(i+a)/(i-a),v,M;if(l)v=s/(r-s),M=r*s/(r-s);else if(o===Qi)v=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===cl)v=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Qi,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),f=-(i+a)/(i-a),v,M;if(l)v=1/(r-s),M=r/(r-s);else if(o===Qi)v=-2/(r-s),M=-(r+s)/(r-s);else if(o===cl)v=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Id.prototype.isMatrix4=!0;var Oe=Id,Jo=new U,Yi=new Oe,$C=new U(0,0,0),tR=new U(1,1,1),Fs=new U,Rf=new U,yi=new U,a1=new Oe,s1=new Xn,es=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],f=a[10];switch(n){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-he(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return a1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return s1.setFromEuler(this),this.setFromQuaternion(s1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};es.DEFAULT_ORDER="XYZ";var fl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eR=0,r1=new U,Ko=new Xn,Ja=new Oe,Nf=new U,Yc=new U,nR=new U,iR=new Xn,o1=new U(1,0,0),l1=new U(0,1,0),c1=new U(0,0,1),u1={type:"added"},aR={type:"removed"},Qo={type:"childadded",child:null},Z0={type:"childremoved",child:null},qn=class e extends wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new es,i=new Xn,a=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Qt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ko.setFromAxisAngle(t,n),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(t,n){return Ko.setFromAxisAngle(t,n),this.quaternion.premultiply(Ko),this}rotateX(t){return this.rotateOnAxis(o1,t)}rotateY(t){return this.rotateOnAxis(l1,t)}rotateZ(t){return this.rotateOnAxis(c1,t)}translateOnAxis(t,n){return r1.copy(t).applyQuaternion(this.quaternion),this.position.add(r1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(o1,t)}translateY(t){return this.translateOnAxis(l1,t)}translateZ(t){return this.translateOnAxis(c1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ja.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Nf.copy(t):Nf.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Yc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ja.lookAt(Yc,Nf,this.up):Ja.lookAt(Nf,Yc,this.up),this.quaternion.setFromRotationMatrix(Ja),a&&(Ja.extractRotation(a.matrixWorld),Ko.setFromRotationMatrix(Ja),this.quaternion.premultiply(Ko.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u1),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(aR),Z0.child=t,this.dispatchEvent(Z0),Z0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ja.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ja.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ja),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u1),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yc,t,nR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yc,iR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),f=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qn.DEFAULT_UP=new U(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ba=class extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sR={type:"move"},dl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,v=.005;c.inputState.pinching&&u>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sR)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},dE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},Df={h:0,s:0,l:0};function J0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var te=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ve.workingColorSpace){return this.r=t,this.g=n,this.b=i,ve.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ve.workingColorSpace){if(t=JC(t,1),n=he(n,0,1),i=he(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=J0(r,s,t+1/3),this.g=J0(r,s,t),this.b=J0(r,s,t-1/3)}return ve.colorSpaceToWorking(this,a),this}setStyle(t,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:qt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Cn){let i=dE[t.toLowerCase()];return i!==void 0?this.setHex(i,n):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=ol(t.r),this.g=ol(t.g),this.b=ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ve.workingToColorSpace(In.copy(this),t),Math.round(he(In.r*255,0,255))*65536+Math.round(he(In.g*255,0,255))*256+Math.round(he(In.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ve.workingColorSpace){ve.workingToColorSpace(In.copy(this),n);let i=In.r,a=In.g,s=In.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ve.workingColorSpace){return ve.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Cn){ve.workingToColorSpace(In.copy(this),t);let n=In.r,i=In.g,a=In.b;return t!==Cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Hs),this.setHSL(Hs.h+t,Hs.s+n,Hs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Hs),t.getHSL(Df);let i=k0(Hs.h,Df.h,n),a=k0(Hs.s,Df.s,n),s=k0(Hs.l,Df.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new te;te.NAMES=dE;var pl=class extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Zi=new U,Ka=new U,K0=new U,Qa=new U,jo=new U,$o=new U,h1=new U,Q0=new U,j0=new U,$0=new U,tv=new We,ev=new We,nv=new We,Xs=class e{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Zi.subVectors(t,n),a.cross(Zi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){Zi.subVectors(a,n),Ka.subVectors(i,n),K0.subVectors(t,n);let r=Zi.dot(Zi),o=Zi.dot(Ka),l=Zi.dot(K0),c=Ka.dot(Ka),h=Ka.dot(K0),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;let u=1/p,f=(c*l-o*h)*u,v=(r*h-o*l)*u;return s.set(1-f-v,v,f)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Qa)===null?!1:Qa.x>=0&&Qa.y>=0&&Qa.x+Qa.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Qa)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qa.x),l.addScaledVector(r,Qa.y),l.addScaledVector(o,Qa.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return tv.setScalar(0),ev.setScalar(0),nv.setScalar(0),tv.fromBufferAttribute(t,n),ev.fromBufferAttribute(t,i),nv.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(tv,s.x),r.addScaledVector(ev,s.y),r.addScaledVector(nv,s.z),r}static isFrontFacing(t,n,i,a){return Zi.subVectors(i,n),Ka.subVectors(t,n),Zi.cross(Ka).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ka.subVectors(this.a,this.b),Zi.cross(Ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;jo.subVectors(a,i),$o.subVectors(s,i),Q0.subVectors(t,i);let l=jo.dot(Q0),c=$o.dot(Q0);if(l<=0&&c<=0)return n.copy(i);j0.subVectors(t,a);let h=jo.dot(j0),p=$o.dot(j0);if(h>=0&&p<=h)return n.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(jo,r);$0.subVectors(t,s);let f=jo.dot($0),v=$o.dot($0);if(v>=0&&f<=v)return n.copy(s);let M=f*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector($o,o);let g=h*v-f*p;if(g<=0&&p-h>=0&&f-v>=0)return h1.subVectors(s,a),o=(p-h)/(p-h+(f-v)),n.copy(a).addScaledVector(h1,o);let d=1/(g+M+u);return r=M*d,o=u*d,n.copy(i).addScaledVector(jo,r).addScaledVector($o,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ws=class{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ji.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ji.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ji.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ji):Ji.fromBufferAttribute(s,r),Ji.applyMatrix4(t.matrixWorld),this.expandByPoint(Ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uf.copy(i.boundingBox)),Uf.applyMatrix4(t.matrixWorld),this.union(Uf)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zc),Lf.subVectors(this.max,Zc),tl.subVectors(t.a,Zc),el.subVectors(t.b,Zc),nl.subVectors(t.c,Zc),Vs.subVectors(el,tl),Gs.subVectors(nl,el),Rr.subVectors(tl,nl);let n=[0,-Vs.z,Vs.y,0,-Gs.z,Gs.y,0,-Rr.z,Rr.y,Vs.z,0,-Vs.x,Gs.z,0,-Gs.x,Rr.z,0,-Rr.x,-Vs.y,Vs.x,0,-Gs.y,Gs.x,0,-Rr.y,Rr.x,0];return!iv(n,tl,el,nl,Lf)||(n=[1,0,0,0,1,0,0,0,1],!iv(n,tl,el,nl,Lf))?!1:(If.crossVectors(Vs,Gs),n=[If.x,If.y,If.z],iv(n,tl,el,nl,Lf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ja),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ja=[new U,new U,new U,new U,new U,new U,new U,new U],Ji=new U,Uf=new Ws,tl=new U,el=new U,nl=new U,Vs=new U,Gs=new U,Rr=new U,Zc=new U,Lf=new U,If=new U,Nr=new U;function iv(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Nr.fromArray(e,s);let o=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),l=t.dot(Nr),c=n.dot(Nr),h=i.dot(Nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sn=new U,Of=new mt,rR=0,Pn=class extends wa{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=lE,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Of.fromBufferAttribute(this,n),Of.applyMatrix3(t),this.setXY(n,Of.x,Of.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=qc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=qc(n,this.array)),n}setX(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=qc(n,this.array)),n}setY(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=qc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=qc(n,this.array)),n}setW(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),i=ii(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),i=ii(i,this.array),a=ii(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),i=ii(i,this.array),a=ii(a,this.array),s=ii(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var su=class extends Pn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var ru=class extends Pn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var rn=class extends Pn{constructor(t,n,i){super(new Float32Array(t),n,i)}},oR=new Ws,Jc=new U,av=new U,ml=class{constructor(t=new U,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):oR.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jc.subVectors(t,this.center);let n=Jc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Jc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(av.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jc.copy(t.center).add(av)),this.expandByPoint(Jc.copy(t.center).sub(av))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lR=0,Oi=new Oe,sv=new qn,il=new U,xi=new Ws,Kc=new Ws,_n=new U,Yn=class e extends wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(YC(t)?ru:su)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,n,i){return Oi.makeTranslation(t,n,i),this.applyMatrix4(Oi),this}scale(t,n,i){return Oi.makeScale(t,n,i),this.applyMatrix4(Oi),this}lookAt(t){return sv.lookAt(t),sv.updateMatrix(),this.applyMatrix4(sv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(il).negate(),this.translate(il.x,il.y,il.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new rn(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Kc.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(xi.min,Kc.min),xi.expandByPoint(_n),_n.addVectors(xi.max,Kc.max),xi.expandByPoint(_n)):(xi.expandByPoint(Kc.min),xi.expandByPoint(Kc.max))}xi.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)_n.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(_n));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(il.fromBufferAttribute(t,c),_n.add(il)),a=Math.max(a,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new U,l[x]=new U;let c=new U,h=new U,p=new U,u=new mt,f=new mt,v=new mt,M=new U,g=new U;function d(x,w,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),h.sub(c),p.sub(c),f.sub(u),v.sub(u);let N=1/(f.x*v.y-v.x*f.y);isFinite(N)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-f.y).multiplyScalar(N),g.copy(p).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(N),o[x].add(M),o[w].add(M),o[R].add(M),l[x].add(g),l[w].add(g),l[R].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,w=m.length;x<w;++x){let R=m[x],N=R.start,V=R.count;for(let F=N,I=N+V;F<I;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new U,_=new U,E=new U,T=new U;function C(x){E.fromBufferAttribute(a,x),T.copy(E);let w=o[x];S.copy(w),S.sub(E.multiplyScalar(E.dot(w))).normalize(),_.crossVectors(T,w);let N=_.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,N)}for(let x=0,w=m.length;x<w;++x){let R=m[x],N=R.start,V=R.count;for(let F=N,I=N+V;F<I;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let a=new U,s=new U,r=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),f=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let d=0;d<h;d++)u[v++]=c[f++]}return new Pn(u,h,p)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=t(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let s=t.morphAttributes;for(let c in s){let h=[],p=s[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rv=new U,cR=new U,uR=new Qt,Ki=class{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=rv.subVectors(i,n).cross(cR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(rv),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||uR.getNormalMatrix(t),a=this.coplanarPoint(rv).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hR=0,qs=class extends wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=Cl,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nv,this.blendDst=Dv,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qf,this.stencilZFail=Qf,this.stencilZPass=Qf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){qt(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){qt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ki().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $a=new U,ov=new U,Pf=new U,Bf=new U,ou=class{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$a)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=$a.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):($a.copy(this.origin).addScaledVector(this.direction,n),$a.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){ov.copy(t).add(n).multiplyScalar(.5),Pf.copy(n).sub(t).normalize(),Bf.copy(this.origin).sub(ov);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Pf),o=Bf.dot(this.direction),l=-Bf.dot(Pf),c=Bf.lengthSq(),h=Math.abs(1-r*r),p,u,f,v;if(h>0)if(p=r*l-o,u=r*o-l,v=s*h,p>=0)if(u>=-v)if(u<=v){let M=1/h;p*=M,u*=M,f=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(ov).addScaledVector(Pf,u),f}intersectSphere(t,n){if(t.radius<0)return null;$a.subVectors(t.center,this.origin);let i=$a.dot(this.direction),a=$a.dot($a)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,$a)!==null}intersectTriangle(t,n,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,f=t.z-r.z,v=n.x-r.x,M=n.y-r.y,g=n.z-r.z,d=i.x-r.x,m=i.y-r.y,S=i.z-r.z,_=Math.abs(l),E=Math.abs(c),T=Math.abs(h),C,x,w,R,N,V,F,I,P,K,Y,st;if(_>=E&&_>=T?(w=l,V=p,P=v,st=d,l>=0?(C=c,x=h,R=u,N=f,F=M,I=g,K=m,Y=S):(C=h,x=c,R=f,N=u,F=g,I=M,K=S,Y=m)):E>=T?(w=c,V=u,P=M,st=m,c>=0?(C=h,x=l,R=f,N=p,F=g,I=v,K=S,Y=d):(C=l,x=h,R=p,N=f,F=v,I=g,K=d,Y=S)):(w=h,V=f,P=g,st=S,h>=0?(C=l,x=c,R=p,N=u,F=v,I=M,K=d,Y=m):(C=c,x=l,R=u,N=p,F=M,I=v,K=m,Y=d)),w===0)return null;let q=C/w,nt=x/w,at=1/w,Lt=R-q*V,St=N-nt*V,ue=F-q*P,ee=I-nt*P,me=K-q*st,Z=Y-nt*st,tt=me*ee-Z*ue,_t=Lt*Z-St*me,kt=ue*St-ee*Lt;if(a){if(tt<0||_t<0||kt<0)return null}else if((tt<0||_t<0||kt<0)&&(tt>0||_t>0||kt>0))return null;let At=tt+_t+kt;if(At===0)return null;let Ht=at*(tt*V+_t*P+kt*st);return(At>0?Ht<0:Ht>0)?null:this.at(Ht/At,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ys=class extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},f1=new Oe,Dr=new ou,zf=new ml,d1=new U,Ff=new U,Hf=new U,Vf=new U,lv=new U,Gf=new U,p1=new U,kf=new U,je=class extends qn{constructor(t=new Yn,n=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){Gf.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],p=s[l];h!==0&&(lv.fromBufferAttribute(p,t),r?Gf.addScaledVector(lv,h):Gf.addScaledVector(lv.sub(n),h))}n.add(Gf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zf.copy(i.boundingSphere),zf.applyMatrix4(s),Dr.copy(t.ray).recast(t.near),!(zf.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(zf,d1)===null||Dr.origin.distanceToSquared(d1)>(t.far-t.near)**2))&&(f1.copy(s).invert(),Dr.copy(t.ray).applyMatrix4(f1),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Dr)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],d=r[g.materialIndex],m=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=m,E=S;_<E;_+=3){let T=o.getX(_),C=o.getX(_+1),x=o.getX(_+2);a=Xf(this,d,t,i,c,h,p,T,C,x),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let v=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=v,d=M;g<d;g+=3){let m=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);a=Xf(this,r,t,i,c,h,p,m,S,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],d=r[g.materialIndex],m=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=m,E=S;_<E;_+=3){let T=_,C=_+1,x=_+2;a=Xf(this,d,t,i,c,h,p,T,C,x),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let v=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let g=v,d=M;g<d;g+=3){let m=g,S=g+1,_=g+2;a=Xf(this,r,t,i,c,h,p,m,S,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}};function fR(e,t,n,i,a,s,r,o){let l;if(t.side===Zn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===tr,o),l===null)return null;kf.copy(o),kf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(kf);return c<n.near||c>n.far?null:{distance:c,point:kf.clone(),object:e}}function Xf(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Ff),e.getVertexPosition(l,Hf),e.getVertexPosition(c,Vf);let h=fR(e,t,n,i,Ff,Hf,Vf,p1);if(h){let p=new U;Xs.getBarycoord(p1,Ff,Hf,Vf,p),a&&(h.uv=Xs.getInterpolatedAttribute(a,o,l,c,p,new mt)),s&&(h.uv1=Xs.getInterpolatedAttribute(s,o,l,c,p,new mt)),r&&(h.normal=Xs.getInterpolatedAttribute(r,o,l,c,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Xs.getNormal(Ff,Hf,Vf,u.normal),h.face=u,h.barycoord=p}return h}var gl=class extends Wn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=yn,h=yn,p,u){super(null,r,o,l,c,h,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=new ml,dR=new mt(.5,.5),Wf=new U,vl=class{constructor(t=new Ki,n=new Ki,i=new Ki,a=new Ki,s=new Ki,r=new Ki){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Qi,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],f=s[7],v=s[8],M=s[9],g=s[10],d=s[11],m=s[12],S=s[13],_=s[14],E=s[15];if(a[0].setComponents(c-r,f-h,d-v,E-m).normalize(),a[1].setComponents(c+r,f+h,d+v,E+m).normalize(),a[2].setComponents(c+o,f+p,d+M,E+S).normalize(),a[3].setComponents(c-o,f-p,d-M,E-S).normalize(),i)a[4].setComponents(l,u,g,_).normalize(),a[5].setComponents(c-l,f-u,d-g,E-_).normalize();else if(a[4].setComponents(c-l,f-u,d-g,E-_).normalize(),n===Qi)a[5].setComponents(c+l,f+u,d+g,E+_).normalize();else if(n===cl)a[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);let n=dR.distanceTo(t.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Wf.x=a.normal.x>0?t.max.x:t.min.x,Wf.y=a.normal.y>0?t.max.y:t.min.y,Wf.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Wf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lu=class extends Wn{constructor(t=[],n=er,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ir=class extends Wn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zs=class extends Wn{constructor(t,n,i=ta,a,s,r,o=yn,l=yn,c,h=Aa,p=1){if(h!==Aa&&h!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},hd=class extends Zs{constructor(t,n=ta,i=er,a,s,r=yn,o=yn,l,c=Aa){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},cu=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_l=class e extends Yn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,f=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(p,2));function v(M,g,d,m,S,_,E,T,C,x,w){let R=_/C,N=E/x,V=_/2,F=E/2,I=T/2,P=C+1,K=x+1,Y=0,st=0,q=new U;for(let nt=0;nt<K;nt++){let at=nt*N-F;for(let Lt=0;Lt<P;Lt++){let St=Lt*R-V;q[M]=St*m,q[g]=at*S,q[d]=I,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[d]=T>0?1:-1,h.push(q.x,q.y,q.z),p.push(Lt/C),p.push(1-nt/x),Y+=1}}for(let nt=0;nt<x;nt++)for(let at=0;at<C;at++){let Lt=u+at+P*nt,St=u+at+P*(nt+1),ue=u+(at+1)+P*(nt+1),ee=u+(at+1)+P*nt;l.push(Lt,St,ee),l.push(St,ue,ee),st+=6}o.addGroup(f,st,w),f+=st,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,a=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(a),n.push(s),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),a=0,s=i.length,r;n?r=n:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);let h=i[a],u=i[a+1]-h,f=(r-h)/u;return(a+f)/(s-1)}getTangent(t,n){let a=t-1e-4,s=t+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),o=this.getPoint(s),l=n||(r.isVector2?new mt:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new U,a=[],s=[],r=[],o=new U,l=new Oe;for(let f=0;f<=t;f++){let v=f/t;a[f]=this.getTangentAt(v,new U)}s[0]=new U,r[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(a[0].x),p=Math.abs(a[0].y),u=Math.abs(a[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(a[f-1],a[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(he(a[f-1].dot(a[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,v))}r[f].crossVectors(a[f],s[f])}if(n===!0){let f=Math.acos(he(s[0].dot(s[t]),-1,1));f/=t,a[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let v=1;v<=t;v++)s[v].applyMatrix4(l.makeRotationAxis(a[v],f*v)),r[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yl=class extends Si{constructor(t=0,n=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new mt){let i=n,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fd=class extends yl{constructor(t,n,i,a,s,r){super(t,n,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Jv(){let e=0,t=0,n=0,i=0;function a(s,r,o,l){e=s,t=o,n=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,p){let u=(r-s)/c-(o-s)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+p)+(l-o)/p;u*=h,f*=h,a(r,o,u,f)},calc:function(s){let r=s*s,o=r*s;return e+t*s+n*r+i*o}}}var m1=new U,g1=new U,cv=new Jv,uv=new Jv,hv=new Jv,xl=class extends Si{constructor(t=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=a}getPoint(t,n=new U){let i=n,a=this.points,s=a.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=a[(o-1)%s]:(g1.subVectors(a[0],a[1]).add(a[0]),c=g1);let p=a[o%s],u=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(m1.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=m1),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(p),f),M=Math.pow(p.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),cv.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,v,M,g),uv.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,v,M,g),hv.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,v,M,g)}else this.curveType==="catmullrom"&&(cv.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),uv.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),hv.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(cv.calc(l),uv.calc(l),hv.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new U().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function v1(e,t,n,i,a){let s=(i-t)*.5,r=(a-n)*.5,o=e*e,l=e*o;return(2*n-2*i+s+r)*l+(-3*n+3*i-2*s-r)*o+s*e+n}function pR(e,t){let n=1-e;return n*n*t}function mR(e,t){return 2*(1-e)*e*t}function gR(e,t){return e*e*t}function jc(e,t,n,i){return pR(e,t)+mR(e,n)+gR(e,i)}function vR(e,t){let n=1-e;return n*n*n*t}function _R(e,t){let n=1-e;return 3*n*n*e*t}function yR(e,t){return 3*(1-e)*e*e*t}function xR(e,t){return e*e*e*t}function $c(e,t,n,i,a){return vR(e,t)+_R(e,n)+yR(e,i)+xR(e,a)}var uu=class extends Si{constructor(t=new mt,n=new mt,i=new mt,a=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new mt){let i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set($c(t,a.x,s.x,r.x,o.x),$c(t,a.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dd=class extends Si{constructor(t=new U,n=new U,i=new U,a=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new U){let i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set($c(t,a.x,s.x,r.x,o.x),$c(t,a.y,s.y,r.y,o.y),$c(t,a.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hu=class extends Si{constructor(t=new mt,n=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new mt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new mt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pd=class extends Si{constructor(t=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new U){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fu=class extends Si{constructor(t=new mt,n=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new mt){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(jc(t,a.x,s.x,r.x),jc(t,a.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},md=class extends Si{constructor(t=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new U){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(jc(t,a.x,s.x,r.x),jc(t,a.y,s.y,r.y),jc(t,a.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},du=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new mt){let i=n,a=this.points,s=(a.length-1)*t,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],h=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(v1(o,l.x,c.x,h.x,p.x),v1(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new mt().fromArray(a))}return this}},_v=Object.freeze({__proto__:null,ArcCurve:fd,CatmullRomCurve3:xl,CubicBezierCurve:uu,CubicBezierCurve3:dd,EllipseCurve:yl,LineCurve:hu,LineCurve3:pd,QuadraticBezierCurve:fu,QuadraticBezierCurve3:md,SplineCurve:du}),gd=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _v[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=i){let r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,a=this.curves.length;i<a;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let a=0,s=this.curves;a<s.length;a++){let r=s[a],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let a=this.curves[n];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(new _v[a.type]().fromJSON(a))}return this}},Or=class extends gd{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new hu(this.currentPoint.clone(),new mt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,a){let s=new fu(this.currentPoint.clone(),new mt(t,n),new mt(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(t,n,i,a,s,r){let o=new uu(this.currentPoint.clone(),new mt(t,n),new mt(i,a),new mt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new du(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,a,s,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,a,s,r),this}absarc(t,n,i,a,s,r){return this.absellipse(t,n,i,i,a,s,r),this}ellipse(t,n,i,a,s,r,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,n+h,i,a,s,r,o,l),this}absellipse(t,n,i,a,s,r,o,l){let c=new yl(t,n,i,a,s,r,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Js=class extends Or{constructor(t){super(t),this.uuid=Ul(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,a=this.holes.length;i<a;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let a=this.holes[n];t.holes.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(new Or().fromJSON(a))}return this}};function SR(e,t,n=2){let i=t&&t.length,a=i?t[0]*n:e.length,s=pE(e,0,a,n,!0),r=[];if(!s||s.next===s.prev)return r;let o,l,c;if(i&&(s=AR(e,t,s,n)),e.length>80*n){o=e[0],l=e[1];let h=o,p=l;for(let u=n;u<a;u+=n){let f=e[u],v=e[u+1];f<o&&(o=f),v<l&&(l=v),f>h&&(h=f),v>p&&(p=v)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return pu(s,r,n,o,l,c,0),r}function pE(e,t,n,i,a){let s;if(a===BR(e,t,n,i)>0)for(let r=t;r<n;r+=i)s=_1(r/i|0,e[r],e[r+1],s);else for(let r=n-i;r>=t;r-=i)s=_1(r/i|0,e[r],e[r+1],s);return s&&Sl(s,s.next)&&(gu(s),s=s.next),s}function Pr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Sl(n,n.next)||Ye(n.prev,n,n.next)===0)){if(gu(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function pu(e,t,n,i,a,s,r){if(!e)return;!r&&s&&DR(e,i,a,s);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(s?bR(e,i,a,s):MR(e)){t.push(l.i,e.i,c.i),gu(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=ER(Pr(e),t),pu(e,t,n,i,a,s,2)):r===2&&TR(e,t,n,i,a,s):pu(Pr(e),t,n,i,a,s,1);break}}}function MR(e){let t=e.prev,n=e,i=e.next;if(Ye(t,n,i)>=0)return!1;let a=t.x,s=n.x,r=i.x,o=t.y,l=n.y,c=i.y,h=Math.min(a,s,r),p=Math.min(o,l,c),u=Math.max(a,s,r),f=Math.max(o,l,c),v=i.next;for(;v!==t;){if(v.x>=h&&v.x<=u&&v.y>=p&&v.y<=f&&Qc(a,o,s,l,r,c,v.x,v.y)&&Ye(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function bR(e,t,n,i){let a=e.prev,s=e,r=e.next;if(Ye(a,s,r)>=0)return!1;let o=a.x,l=s.x,c=r.x,h=a.y,p=s.y,u=r.y,f=Math.min(o,l,c),v=Math.min(h,p,u),M=Math.max(o,l,c),g=Math.max(h,p,u),d=yv(f,v,t,n,i),m=yv(M,g,t,n,i),S=e.prevZ,_=e.nextZ;for(;S&&S.z>=d&&_&&_.z<=m;){if(S.x>=f&&S.x<=M&&S.y>=v&&S.y<=g&&S!==a&&S!==r&&Qc(o,h,l,p,c,u,S.x,S.y)&&Ye(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=M&&_.y>=v&&_.y<=g&&_!==a&&_!==r&&Qc(o,h,l,p,c,u,_.x,_.y)&&Ye(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=d;){if(S.x>=f&&S.x<=M&&S.y>=v&&S.y<=g&&S!==a&&S!==r&&Qc(o,h,l,p,c,u,S.x,S.y)&&Ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=m;){if(_.x>=f&&_.x<=M&&_.y>=v&&_.y<=g&&_!==a&&_!==r&&Qc(o,h,l,p,c,u,_.x,_.y)&&Ye(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ER(e,t){let n=e;do{let i=n.prev,a=n.next.next;!Sl(i,a)&&gE(i,n,n.next,a)&&mu(i,a)&&mu(a,i)&&(t.push(i.i,n.i,a.i),gu(n),gu(n.next),n=e=a),n=n.next}while(n!==e);return Pr(n)}function TR(e,t,n,i,a,s){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&IR(r,o)){let l=vE(r,o);r=Pr(r,r.next),l=Pr(l,l.next),pu(r,t,n,i,a,s,0),pu(l,t,n,i,a,s,0);return}o=o.next}r=r.next}while(r!==e)}function AR(e,t,n,i){let a=[];for(let s=0,r=t.length;s<r;s++){let o=t[s]*i,l=s<r-1?t[s+1]*i:e.length,c=pE(e,o,l,i,!1);c===c.next&&(c.steiner=!0),a.push(LR(c))}a.sort(wR);for(let s=0;s<a.length;s++)n=CR(a[s],n);return n}function wR(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);n=i-a}return n}function CR(e,t){let n=RR(e,t);if(!n)return t;let i=vE(n,e);return Pr(i,i.next),Pr(n,n.next)}function RR(e,t){let n=t,i=e.x,a=e.y,s=-1/0,r;if(Sl(e,n))return n;do{if(Sl(e,n.next))return n.next;if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){let p=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>s&&(s=p,r=n.x<n.next.x?n:n.next,p===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&mE(a<c?i:s,a,l,c,a<c?s:i,a,n.x,n.y)){let p=Math.abs(a-n.y)/(i-n.x);mu(n,e)&&(p<h||p===h&&(n.x>r.x||n.x===r.x&&NR(r,n)))&&(r=n,h=p)}n=n.next}while(n!==o);return r}function NR(e,t){return Ye(e.prev,e,t.prev)<0&&Ye(t.next,e,e.next)<0}function DR(e,t,n,i){let a=e;do a.z===0&&(a.z=yv(a.x,a.y,t,n,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,UR(a)}function UR(e){let t,n=1;do{let i=e,a;e=null;let s=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,n*=2}while(t>1);return e}function yv(e,t,n,i,a){return e=(e-n)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function LR(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function mE(e,t,n,i,a,s,r,o){return(a-r)*(t-o)>=(e-r)*(s-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(s-o)>=(a-r)*(i-o)}function Qc(e,t,n,i,a,s,r,o){return!(e===r&&t===o)&&mE(e,t,n,i,a,s,r,o)}function IR(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!OR(e,t)&&(mu(e,t)&&mu(t,e)&&PR(e,t)&&(Ye(e.prev,e,t.prev)||Ye(e,t.prev,t))||Sl(e,t)&&Ye(e.prev,e,e.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Sl(e,t){return e.x===t.x&&e.y===t.y}function gE(e,t,n,i){let a=Yf(Ye(e,t,n)),s=Yf(Ye(e,t,i)),r=Yf(Ye(n,i,e)),o=Yf(Ye(n,i,t));return!!(a!==s&&r!==o||a===0&&qf(e,n,t)||s===0&&qf(e,i,t)||r===0&&qf(n,e,i)||o===0&&qf(n,t,i))}function qf(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Yf(e){return e>0?1:e<0?-1:0}function OR(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&gE(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function mu(e,t){return Ye(e.prev,e,e.next)<0?Ye(e,t,e.next)>=0&&Ye(e,e.prev,t)>=0:Ye(e,t,e.prev)<0||Ye(e,e.next,t)<0}function PR(e,t){let n=e,i=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&a<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function vE(e,t){let n=xv(e.i,e.x,e.y),i=xv(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function _1(e,t,n,i){let a=xv(e,t,n);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function gu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function xv(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function BR(e,t,n,i){let a=0;for(let s=t,r=n-i;s<n;s+=i)a+=(e[r]-e[s])*(e[s+1]+e[r+1]),r=s;return a}var Sv=class{static triangulate(t,n,i=2){return SR(t,n,i)}},Ea=class e{static area(t){let n=t.length,i=0;for(let a=n-1,s=0;s<n;a=s++)i+=t[a].x*t[s].y-t[s].x*t[a].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],a=[],s=[];y1(t),x1(i,t);let r=t.length;n.forEach(y1);for(let l=0;l<n.length;l++)a.push(r),r+=n[l].length,x1(i,n[l]);let o=Sv.triangulate(i,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function y1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function x1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ml=class e extends Yn{constructor(t=new Js([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new rn(a,3)),this.setAttribute("uv",new rn(s,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:f-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:zR,S,_=!1,E,T,C,x;if(d){S=d.getSpacedPoints(h),_=!0,u=!1;let j=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(h,j),T=new U,C=new U,x=new U}u||(g=0,f=0,v=0,M=0);let w=o.extractPoints(c),R=w.shape,N=w.holes;if(!Ea.isClockWise(R)){R=R.reverse();for(let j=0,rt=N.length;j<rt;j++){let lt=N[j];Ea.isClockWise(lt)&&(N[j]=lt.reverse())}}function F(j){let lt=10000000000000001e-36,ot=j[0];for(let ut=1;ut<=j.length;ut++){let Vt=ut%j.length,Bt=j[Vt],Gt=Bt.x-ot.x,Xt=Bt.y-ot.y,D=Gt*Gt+Xt*Xt,_e=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ot.x),Math.abs(ot.y)),ne=lt*_e*_e;if(D<=ne){j.splice(Vt,1),ut--;continue}ot=Bt}}F(R),N.forEach(F);let I=N.length,P=R;for(let j=0;j<I;j++){let rt=N[j];R=R.concat(rt)}function K(j,rt,lt){return rt||Wt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,lt)}let Y=R.length;function st(j,rt,lt){let ot,ut,Vt,Bt=j.x-rt.x,Gt=j.y-rt.y,Xt=lt.x-j.x,D=lt.y-j.y,_e=Bt*Bt+Gt*Gt,ne=Bt*D-Gt*Xt;if(Math.abs(ne)>Number.EPSILON){let A=Math.sqrt(_e),y=Math.sqrt(Xt*Xt+D*D),z=rt.x-Gt/A,k=rt.y+Bt/A,B=lt.x-D/y,ct=lt.y+Xt/y,dt=((B-z)*D-(ct-k)*Xt)/(Bt*D-Gt*Xt);ot=z+Bt*dt-j.x,ut=k+Gt*dt-j.y;let J=ot*ot+ut*ut;if(J<=2)return new mt(ot,ut);Vt=Math.sqrt(J/2)}else{let A=!1;Bt>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Bt<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Gt)===Math.sign(D)&&(A=!0),A?(ot=-Gt,ut=Bt,Vt=Math.sqrt(_e)):(ot=Bt,ut=Gt,Vt=Math.sqrt(_e/2))}return new mt(ot/Vt,ut/Vt)}let q=[];for(let j=0,rt=P.length,lt=rt-1,ot=j+1;j<rt;j++,lt++,ot++)lt===rt&&(lt=0),ot===rt&&(ot=0),q[j]=st(P[j],P[lt],P[ot]);let nt=[],at,Lt=q.concat();for(let j=0,rt=I;j<rt;j++){let lt=N[j];at=[];for(let ot=0,ut=lt.length,Vt=ut-1,Bt=ot+1;ot<ut;ot++,Vt++,Bt++)Vt===ut&&(Vt=0),Bt===ut&&(Bt=0),at[ot]=st(lt[ot],lt[Vt],lt[Bt]);nt.push(at),Lt=Lt.concat(at)}let St;if(g===0)St=Ea.triangulateShape(P,N);else{let j=[],rt=[];for(let lt=0;lt<g;lt++){let ot=lt/g,ut=f*Math.cos(ot*Math.PI/2),Vt=v*Math.sin(ot*Math.PI/2)+M;for(let Bt=0,Gt=P.length;Bt<Gt;Bt++){let Xt=K(P[Bt],q[Bt],Vt);_t(Xt.x,Xt.y,-ut),ot===0&&j.push(Xt)}for(let Bt=0,Gt=I;Bt<Gt;Bt++){let Xt=N[Bt];at=nt[Bt];let D=[];for(let _e=0,ne=Xt.length;_e<ne;_e++){let A=K(Xt[_e],at[_e],Vt);_t(A.x,A.y,-ut),ot===0&&D.push(A)}ot===0&&rt.push(D)}}St=Ea.triangulateShape(j,rt)}let ue=St.length,ee=v+M;for(let j=0;j<Y;j++){let rt=u?K(R[j],Lt[j],ee):R[j];_?(C.copy(E.normals[0]).multiplyScalar(rt.x),T.copy(E.binormals[0]).multiplyScalar(rt.y),x.copy(S[0]).add(C).add(T),_t(x.x,x.y,x.z)):_t(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<Y;rt++){let lt=u?K(R[rt],Lt[rt],ee):R[rt];_?(C.copy(E.normals[j]).multiplyScalar(lt.x),T.copy(E.binormals[j]).multiplyScalar(lt.y),x.copy(S[j]).add(C).add(T),_t(x.x,x.y,x.z)):_t(lt.x,lt.y,p/h*j)}for(let j=g-1;j>=0;j--){let rt=j/g,lt=f*Math.cos(rt*Math.PI/2),ot=v*Math.sin(rt*Math.PI/2)+M;for(let ut=0,Vt=P.length;ut<Vt;ut++){let Bt=K(P[ut],q[ut],ot);_t(Bt.x,Bt.y,p+lt)}for(let ut=0,Vt=N.length;ut<Vt;ut++){let Bt=N[ut];at=nt[ut];for(let Gt=0,Xt=Bt.length;Gt<Xt;Gt++){let D=K(Bt[Gt],at[Gt],ot);_?_t(D.x,D.y+S[h-1].y,S[h-1].x+lt):_t(D.x,D.y,p+lt)}}}me(),Z();function me(){let j=a.length/3;if(u){let rt=0,lt=Y*rt;for(let ot=0;ot<ue;ot++){let ut=St[ot];kt(ut[2]+lt,ut[1]+lt,ut[0]+lt)}rt=h+g*2,lt=Y*rt;for(let ot=0;ot<ue;ot++){let ut=St[ot];kt(ut[0]+lt,ut[1]+lt,ut[2]+lt)}}else{for(let rt=0;rt<ue;rt++){let lt=St[rt];kt(lt[2],lt[1],lt[0])}for(let rt=0;rt<ue;rt++){let lt=St[rt];kt(lt[0]+Y*h,lt[1]+Y*h,lt[2]+Y*h)}}i.addGroup(j,a.length/3-j,0)}function Z(){let j=a.length/3,rt=0;tt(P,rt),rt+=P.length;for(let lt=0,ot=N.length;lt<ot;lt++){let ut=N[lt];tt(ut,rt),rt+=ut.length}i.addGroup(j,a.length/3-j,1)}function tt(j,rt){let lt=j.length;for(;--lt>=0;){let ot=lt,ut=lt-1;ut<0&&(ut=j.length-1);for(let Vt=0,Bt=h+g*2;Vt<Bt;Vt++){let Gt=Y*Vt,Xt=Y*(Vt+1),D=rt+ot+Gt,_e=rt+ut+Gt,ne=rt+ut+Xt,A=rt+ot+Xt;At(D,_e,ne,A)}}}function _t(j,rt,lt){l.push(j),l.push(rt),l.push(lt)}function kt(j,rt,lt){Ht(j),Ht(rt),Ht(lt);let ot=a.length/3,ut=m.generateTopUV(i,a,ot-3,ot-2,ot-1);ye(ut[0]),ye(ut[1]),ye(ut[2])}function At(j,rt,lt,ot){Ht(j),Ht(rt),Ht(ot),Ht(rt),Ht(lt),Ht(ot);let ut=a.length/3,Vt=m.generateSideWallUV(i,a,ut-6,ut-3,ut-2,ut-1);ye(Vt[0]),ye(Vt[1]),ye(Vt[3]),ye(Vt[1]),ye(Vt[2]),ye(Vt[3])}function Ht(j){a.push(l[j*3+0]),a.push(l[j*3+1]),a.push(l[j*3+2])}function ye(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return FR(n,i,t)}static fromJSON(t,n){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=n[t.shapes[s]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new _v[a.type]().fromJSON(a)),new e(i,t.options)}},zR={generateTopUV:function(e,t,n,i,a){let s=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[a*3],h=t[a*3+1];return[new mt(s,r),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(e,t,n,i,a,s){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],h=t[i*3+1],p=t[i*3+2],u=t[a*3],f=t[a*3+1],v=t[a*3+2],M=t[s*3],g=t[s*3+1],d=t[s*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new mt(r,1-l),new mt(c,1-p),new mt(u,1-v),new mt(M,1-d)]:[new mt(o,1-l),new mt(h,1-p),new mt(f,1-v),new mt(g,1-d)]}};function FR(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Br=class e extends Yn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,f=[],v=[],M=[],g=[];for(let d=0;d<h;d++){let m=d*u-r;for(let S=0;S<c;S++){let _=S*p-s;v.push(_,-m,0),M.push(0,0,1),g.push(S/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let S=m+c*d,_=m+c*(d+1),E=m+1+c*(d+1),T=m+1+c*d;f.push(S,_,T),f.push(_,E,T)}this.setIndex(f),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(M,3)),this.setAttribute("uv",new rn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var vu=class e extends Yn{constructor(t=new Js([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],a=[],s=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new rn(a,3)),this.setAttribute("normal",new rn(s,3)),this.setAttribute("uv",new rn(r,2));function c(h){let p=a.length/3,u=h.extractPoints(n),f=u.shape,v=u.holes;Ea.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,d=v.length;g<d;g++){let m=v[g];Ea.isClockWise(m)===!0&&(v[g]=m.reverse())}let M=Ea.triangulateShape(f,v);for(let g=0,d=v.length;g<d;g++){let m=v[g];f=f.concat(m)}for(let g=0,d=f.length;g<d;g++){let m=f[g];a.push(m.x,m.y,0),s.push(0,0,1),r.push(m.x,m.y)}for(let g=0,d=M.length;g<d;g++){let m=M[g],S=m[0]+p,_=m[1]+p,E=m[2]+p;i.push(S,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return HR(n,t)}static fromJSON(t,n){let i=[];for(let a=0,s=t.shapes.length;a<s;a++){let r=n[t.shapes[a]];i.push(r)}return new e(i,t.curveSegments)}};function HR(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let a=e[n];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var bl=class e extends Yn{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=new U,f=new U,v=new U;for(let M=0;M<=i;M++){let g=r+M/i*o;for(let d=0;d<=a;d++){let m=d/a*s;f.x=(t+n*Math.cos(g))*Math.cos(m),f.y=(t+n*Math.cos(g))*Math.sin(m),f.z=n*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),v.subVectors(f,u).normalize(),h.push(v.x,v.y,v.z),p.push(d/a),p.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=a;g++){let d=(a+1)*M+g-1,m=(a+1)*(M-1)+g-1,S=(a+1)*(M-1)+g,_=(a+1)*M+g;l.push(d,m,_),l.push(m,S,_)}this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Hr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(S1(a))a.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(S1(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Bn(e){let t={};for(let n=0;n<e.length;n++){let i=Hr(e[n]);for(let a in i)t[a]=i[a]}return t}function S1(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function VR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Kv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var _E={clone:Hr,merge:Bn},GR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GR,this.fragmentShader=kR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hr(t.uniforms),this.uniformsGroups=VR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new te().setHex(a.value);break;case"v2":this.uniforms[i].value=new mt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new U().fromArray(a.value);break;case"v4":this.uniforms[i].value=new We().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Qt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vd=class extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},El=class extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ks=class extends El{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var _d=class extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yd=class extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function al(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function fv(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Qs=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xd=class extends Qs{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mv,endingEnd:mv}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case gv:s=t,o=2*n-i;break;case vv:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gv:r=t,l=2*i-n;break;case vv:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,v=(i-n)/(a-n),M=v*v,g=M*v,d=-u*g+2*u*M-u*v,m=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*v+1,S=(-1-f)*g+(1.5+f)*M+.5*v,_=f*g-f*M;for(let E=0;E!==o;++E)s[E]=d*r[h+E]+m*r[c+E]+S*r[l+E]+_*r[p+E];return s}},Sd=class extends Qs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),p=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*p+r[l+u]*h;return s}},Md=class extends Qs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},bd=class extends Qs{interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let v=(i-n)/(a-n),M=1-v;for(let g=0;g!==o;++g)s[g]=r[c+g]*M+r[l+g]*v;return s}let u=o*2,f=t-1;for(let v=0;v!==o;++v){let M=r[c+v],g=r[l+v],d=f*u+v*2,m=p[d],S=p[d+1],_=t*u+v*2,E=h[_],T=h[_+1],C=WR(i,n,m,E,a);s[v]=yE(C,M,S,T,g)}return s}};function yE(e,t,n,i,a){let s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*a}function XR(e,t,n,i,a){let s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(a-i)}function WR(e,t,n,i,a){let s=(e-t)/(a-t);for(let r=0;r<8;r++){let o=yE(s,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=XR(s,t,n,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var bi=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=al(n,this.TimeBufferType),this.values=al(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:al(t.times,Array),values:al(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),fv(t.settings)&&(i.settings={inTangents:al(t.settings.inTangents,Array),outTangents:al(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new bd(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case tu:n=this.InterpolantFactoryMethodDiscrete;break;case rd:n=this.InterpolantFactoryMethodLinear;break;case Kf:n=this.InterpolantFactoryMethodSmooth;break;case pv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tu;case this.InterpolantFactoryMethodLinear:return rd;case this.InterpolantFactoryMethodSmooth:return Kf;case this.InterpolantFactoryMethodBezier:return pv}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;fv(this.settings)&&(M1(this.settings.inTangents,t),M1(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&ZC(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Kf,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let v=0;v!==i;++v){let M=n[p+v];if(M!==n[u+v]||M!==n[f+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let f=0;f!==i;++f)n[u+f]=n[p+f]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,fv(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function M1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=rd;var js=class extends bi{constructor(t,n,i){super(t,n,i)}};js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=tu;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ed=class extends bi{constructor(t,n,i,a){super(t,n,i,a)}};Ed.prototype.ValueTypeName="color";var Td=class extends bi{constructor(t,n,i,a){super(t,n,i,a)}};Td.prototype.ValueTypeName="number";var Ad=class extends Qs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)Xn.slerpFlat(s,0,r,c-o,r,c,l);return s}},_u=class extends bi{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Ad(this.times,this.values,this.getValueSize(),t)}};_u.prototype.ValueTypeName="quaternion";_u.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends bi{constructor(t,n,i){super(t,n,i)}};$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=tu;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var wd=class extends bi{constructor(t,n,i,a){super(t,n,i,a)}};wd.prototype.ValueTypeName="vector";var Cd=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],v=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xE=new Cd,Rd=class{constructor(t){this.manager=t!==void 0?t:xE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Rd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nd=class extends qn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var dv=new Oe,b1=new U,E1=new U,Dd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;b1.setFromMatrixPosition(t.matrixWorld),n.position.copy(b1),E1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(E1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,a){dv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(dv,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;t.coordinateSystem===cl||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(dv)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zf=new U,Jf=new Xn,Ma=new U,yu=class extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zf,Jf,Ma),Ma.x===1&&Ma.y===1&&Ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zf,Jf,Ma.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Zf,Jf,Ma),Ma.x===1&&Ma.y===1&&Ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zf,Jf,Ma.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ks=new U,T1=new mt,A1=new mt,On=class extends yu{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(G0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return od*2*Math.atan(Math.tan(G0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ks.x,ks.y).multiplyScalar(-t/ks.z),ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ks.x,ks.y).multiplyScalar(-t/ks.z)}getViewSize(t,n){return this.getViewBounds(t,T1,A1),n.subVectors(A1,T1)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(G0*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Tl=class extends yu{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Mv=class extends Dd{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Al=class extends Nd{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new Mv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var sl=-90,rl=1,Ud=class extends qn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new On(sl,rl,t,n);a.layers=this.layers,this.add(a);let s=new On(sl,rl,t,n);s.layers=this.layers,this.add(s);let r=new On(sl,rl,t,n);r.layers=this.layers,this.add(r);let o=new On(sl,rl,t,n);o.layers=this.layers,this.add(o);let l=new On(sl,rl,t,n);l.layers=this.layers,this.add(l);let c=new On(sl,rl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,f),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Ld=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qv="\\[\\]\\.:\\/",qR=new RegExp("["+Qv+"]","g"),jv="[^"+Qv+"]",YR="[^"+Qv.replace("\\.","")+"]",ZR=/((?:WC+[\/:])*)/.source.replace("WC",jv),JR=/(WCOD+)?/.source.replace("WCOD",YR),KR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jv),QR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jv),jR=new RegExp("^"+ZR+JR+KR+QR+"$"),$R=["material","materials","bones","map"],bv=class{constructor(t,n,i){let a=i||Ge.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ge=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qR,"")}static parseTrackName(t){let n=jR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);$R.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=bv;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RL=new Float32Array(1);var w1=new Oe,xu=class{constructor(t,n,i=0,a=1/0){this.ray=new ou(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Wt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return w1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w1),this}intersectObject(t,n=!0,i=[]){return Ev(t,this,i,n),i.sort(C1),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Ev(t[a],this,i,n);return i.sort(C1),i}};function C1(e,t){return e.distance-t.distance}function Ev(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){let s=e.children;for(let r=0,o=s.length;r<o;r++)Ev(s[r],t,n,!0)}}var a_=class a_{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};a_.prototype.isMatrix2=!0;var Tv=a_;function $v(e,t,n,i){let a=t3(i);switch(n){case Xv:return e*t;case qv:return e*t/a.components*a.byteLength;case Hd:return e*t/a.components*a.byteLength;case ir:return e*t*2/a.components*a.byteLength;case Vd:return e*t*2/a.components*a.byteLength;case Wv:return e*t*3/a.components*a.byteLength;case Bi:return e*t*4/a.components*a.byteLength;case Gd:return e*t*4/a.components*a.byteLength;case Tu:case Au:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wu:case Cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xd:case qd:return Math.max(e,16)*Math.max(t,8)/4;case kd:case Wd:return Math.max(e,8)*Math.max(t,8)/2;case Yd:case Zd:case Kd:case Qd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Jd:case Ru:case jd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ep:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case np:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ip:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ap:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case sp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case rp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case op:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case lp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case cp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case up:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case hp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case fp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case dp:case pp:case mp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case gp:case vp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Nu:case _p:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function t3(e){switch(e){case si:case Hv:return{byteLength:1,components:1};case Nl:case Vv:case na:return{byteLength:2,components:1};case zd:case Fd:return{byteLength:2,components:4};case ta:case Bd:case ea:return{byteLength:4,components:1};case Gv:case kv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function GE(){let e=null,t=!1,n=null,i=null;function a(s,r){i=e.requestAnimationFrame(a),n(s,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function n3(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<p.length;f++){let v=p[u],M=p[f];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let f=0,v=p.length;f<v;f++){let M=p[f];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var i3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,f3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,b3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,A3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,R3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L3="gl_FragColor = linearToOutputTexel( gl_FragColor );",I3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,P3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,J3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,K3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,L2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,H2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_N=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ON=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:i3,alphahash_pars_fragment:a3,alphamap_fragment:s3,alphamap_pars_fragment:r3,alphatest_fragment:o3,alphatest_pars_fragment:l3,aomap_fragment:c3,aomap_pars_fragment:u3,batching_pars_vertex:h3,batching_vertex:f3,begin_vertex:d3,beginnormal_vertex:p3,bsdfs:m3,iridescence_fragment:g3,bumpmap_pars_fragment:v3,clipping_planes_fragment:_3,clipping_planes_pars_fragment:y3,clipping_planes_pars_vertex:x3,clipping_planes_vertex:S3,color_fragment:M3,color_pars_fragment:b3,color_pars_vertex:E3,color_vertex:T3,common:A3,cube_uv_reflection_fragment:w3,defaultnormal_vertex:C3,displacementmap_pars_vertex:R3,displacementmap_vertex:N3,emissivemap_fragment:D3,emissivemap_pars_fragment:U3,colorspace_fragment:L3,colorspace_pars_fragment:I3,envmap_fragment:O3,envmap_common_pars_fragment:P3,envmap_pars_fragment:B3,envmap_pars_vertex:z3,envmap_physical_pars_fragment:J3,envmap_vertex:F3,fog_vertex:H3,fog_pars_vertex:V3,fog_fragment:G3,fog_pars_fragment:k3,gradientmap_pars_fragment:X3,lightmap_pars_fragment:W3,lights_lambert_fragment:q3,lights_lambert_pars_fragment:Y3,lights_pars_begin:Z3,lights_toon_fragment:K3,lights_toon_pars_fragment:Q3,lights_phong_fragment:j3,lights_phong_pars_fragment:$3,lights_physical_fragment:t2,lights_physical_pars_fragment:e2,lights_fragment_begin:n2,lights_fragment_maps:i2,lights_fragment_end:a2,lightprobes_pars_fragment:s2,logdepthbuf_fragment:r2,logdepthbuf_pars_fragment:o2,logdepthbuf_pars_vertex:l2,logdepthbuf_vertex:c2,map_fragment:u2,map_pars_fragment:h2,map_particle_fragment:f2,map_particle_pars_fragment:d2,metalnessmap_fragment:p2,metalnessmap_pars_fragment:m2,morphinstance_vertex:g2,morphcolor_vertex:v2,morphnormal_vertex:_2,morphtarget_pars_vertex:y2,morphtarget_vertex:x2,normal_fragment_begin:S2,normal_fragment_maps:M2,normal_pars_fragment:b2,normal_pars_vertex:E2,normal_vertex:T2,normalmap_pars_fragment:A2,clearcoat_normal_fragment_begin:w2,clearcoat_normal_fragment_maps:C2,clearcoat_pars_fragment:R2,iridescence_pars_fragment:N2,opaque_fragment:D2,packing:U2,premultiplied_alpha_fragment:L2,project_vertex:I2,dithering_fragment:O2,dithering_pars_fragment:P2,roughnessmap_fragment:B2,roughnessmap_pars_fragment:z2,shadowmap_pars_fragment:F2,shadowmap_pars_vertex:H2,shadowmap_vertex:V2,shadowmask_pars_fragment:G2,skinbase_vertex:k2,skinning_pars_vertex:X2,skinning_vertex:W2,skinnormal_vertex:q2,specularmap_fragment:Y2,specularmap_pars_fragment:Z2,tonemapping_fragment:J2,tonemapping_pars_fragment:K2,transmission_fragment:Q2,transmission_pars_fragment:j2,uv_pars_fragment:$2,uv_pars_vertex:tN,uv_vertex:eN,worldpos_vertex:nN,background_vert:iN,background_frag:aN,backgroundCube_vert:sN,backgroundCube_frag:rN,cube_vert:oN,cube_frag:lN,depth_vert:cN,depth_frag:uN,distance_vert:hN,distance_frag:fN,equirect_vert:dN,equirect_frag:pN,linedashed_vert:mN,linedashed_frag:gN,meshbasic_vert:vN,meshbasic_frag:_N,meshlambert_vert:yN,meshlambert_frag:xN,meshmatcap_vert:SN,meshmatcap_frag:MN,meshnormal_vert:bN,meshnormal_frag:EN,meshphong_vert:TN,meshphong_frag:AN,meshphysical_vert:wN,meshphysical_frag:CN,meshtoon_vert:RN,meshtoon_frag:NN,points_vert:DN,points_frag:UN,shadow_vert:LN,shadow_frag:IN,sprite_vert:ON,sprite_frag:PN},Tt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Na={basic:{uniforms:Bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Bn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Bn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Bn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Bn([Tt.points,Tt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Bn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Bn([Tt.common,Tt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Bn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Bn([Tt.sprite,Tt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:Bn([Tt.common,Tt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:Bn([Tt.lights,Tt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Na.physical={uniforms:Bn([Na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Mp={r:0,b:0,g:0},BN=new Oe,kE=new Qt;kE.set(-1,0,0,0,1,0,0,0,1);function zN(e,t,n,i,a,s){let r=new te(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function f(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let _=m.backgroundBlurriness>0;S=t.get(S,_)}return S}function v(m){let S=!1,_=f(m);_===null?g(r,o):_&&_.isColor&&(g(_,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===bu)?(c===void 0&&(c=new je(new _l(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Hr(Na.backgroundCube.uniforms),vertexShader:Na.backgroundCube.vertexShader,fragmentShader:Na.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BN.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kE),c.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ae,(h!==_||p!==_.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new je(new Br(2,2),new Mi({name:"BackgroundMaterial",uniforms:Hr(Na.background.uniforms),vertexShader:Na.background.vertexShader,fragmentShader:Na.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,S){m.getRGB(Mp,Kv(e)),n.buffers.color.setClear(Mp.r,Mp.g,Mp.b,S,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:M,dispose:d}}function FN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),s=a,r=!1;function o(N,V,F,I,P){let K=!1,Y=p(N,I,F,V);s!==Y&&(s=Y,c(s.object)),K=f(N,I,F,P),K&&v(N,I,F,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,_(N,V,F,I),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function h(N){return e.deleteVertexArray(N)}function p(N,V,F,I){let P=I.wireframe===!0,K=i[V.id];K===void 0&&(K={},i[V.id]=K);let Y=N.isInstancedMesh===!0?N.id:0,st=K[Y];st===void 0&&(st={},K[Y]=st);let q=st[F.id];q===void 0&&(q={},st[F.id]=q);let nt=q[P];return nt===void 0&&(nt=u(l()),q[P]=nt),nt}function u(N){let V=[],F=[],I=[];for(let P=0;P<n;P++)V[P]=0,F[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,V,F,I){let P=s.attributes,K=V.attributes,Y=0,st=F.getAttributes();for(let q in st)if(st[q].location>=0){let at=P[q],Lt=K[q];if(Lt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Lt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Lt=N.instanceColor)),at===void 0||at.attribute!==Lt||Lt&&at.data!==Lt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==I}function v(N,V,F,I){let P={},K=V.attributes,Y=0,st=F.getAttributes();for(let q in st)if(st[q].location>=0){let at=K[q];at===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(at=N.instanceColor));let Lt={};Lt.attribute=at,at&&at.data&&(Lt.data=at.data),P[q]=Lt,Y++}s.attributes=P,s.attributesNum=Y,s.index=I}function M(){let N=s.newAttributes;for(let V=0,F=N.length;V<F;V++)N[V]=0}function g(N){d(N,0)}function d(N,V){let F=s.newAttributes,I=s.enabledAttributes,P=s.attributeDivisors;F[N]=1,I[N]===0&&(e.enableVertexAttribArray(N),I[N]=1),P[N]!==V&&(e.vertexAttribDivisor(N,V),P[N]=V)}function m(){let N=s.newAttributes,V=s.enabledAttributes;for(let F=0,I=V.length;F<I;F++)V[F]!==N[F]&&(e.disableVertexAttribArray(F),V[F]=0)}function S(N,V,F,I,P,K,Y){Y===!0?e.vertexAttribIPointer(N,V,F,P,K):e.vertexAttribPointer(N,V,F,I,P,K)}function _(N,V,F,I){M();let P=I.attributes,K=F.getAttributes(),Y=V.defaultAttributeValues;for(let st in K){let q=K[st];if(q.location>=0){let nt=P[st];if(nt===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),nt!==void 0){let at=nt.normalized,Lt=nt.itemSize,St=t.get(nt);if(St===void 0)continue;let ue=St.buffer,ee=St.type,me=St.bytesPerElement,Z=ee===e.INT||ee===e.UNSIGNED_INT||nt.gpuType===Bd;if(nt.isInterleavedBufferAttribute){let tt=nt.data,_t=tt.stride,kt=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let At=0;At<q.locationSize;At++)d(q.location+At,tt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let At=0;At<q.locationSize;At++)g(q.location+At);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let At=0;At<q.locationSize;At++)S(q.location+At,Lt/q.locationSize,ee,at,_t*me,(kt+Lt/q.locationSize*At)*me,Z)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)d(q.location+tt,nt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<q.locationSize;tt++)g(q.location+tt);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let tt=0;tt<q.locationSize;tt++)S(q.location+tt,Lt/q.locationSize,ee,at,Lt*me,Lt/q.locationSize*tt*me,Z)}}else if(Y!==void 0){let at=Y[st];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(q.location,at);break;case 3:e.vertexAttrib3fv(q.location,at);break;case 4:e.vertexAttrib4fv(q.location,at);break;default:e.vertexAttrib1fv(q.location,at)}}}}m()}function E(){w();for(let N in i){let V=i[N];for(let F in V){let I=V[F];for(let P in I){let K=I[P];for(let Y in K)h(K[Y].object),delete K[Y];delete I[P]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let V=i[N.id];for(let F in V){let I=V[F];for(let P in I){let K=I[P];for(let Y in K)h(K[Y].object),delete K[Y];delete I[P]}}delete i[N.id]}function C(N){for(let V in i){let F=i[V];for(let I in F){let P=F[I];if(P[N.id]===void 0)continue;let K=P[N.id];for(let Y in K)h(K[Y].object),delete K[Y];delete P[N.id]}}}function x(N){for(let V in i){let F=i[V],I=N.isInstancedMesh===!0?N.id:0,P=F[I];if(P!==void 0){for(let K in P){let Y=P[K];for(let st in Y)h(Y[st].object),delete Y[st];delete P[K]}delete F[I],Object.keys(F).length===0&&delete i[V]}}}function w(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function HN(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function VN(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==Bi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==si&&C!==ea&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:_,maxSamples:E,samples:T}}function GN(e){let t=this,n=null,i=0,a=!1,s=!1,r=new Ki,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||a;return a=u,i=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,f){let v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,d=e.get(p);if(!a||v===null||v.length===0||s&&!g)s?h(null):c();else{let m=s?0:i,S=m*4,_=d.clippingState||null;l.value=_,_=h(v,u,S,f);for(let E=0;E!==S;++E)_[E]=n[E];d.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,f,v){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let d=f+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let S=0,_=f;S!==M;++S,_+=4)r.copy(p[S]).applyMatrix4(m,o),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Il=4,kN=6,XN=20,WN=256,Du=new Tl,SE=new te,s_=null,r_=0,o_=0,l_=!1,qN=new U,Vr=new U,Pl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=qN}=s;s_=this._renderer.getRenderTarget(),r_=this._renderer.getActiveCubeFace(),o_=this._renderer.getActiveMipmapLevel(),l_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=EE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(s_,r_,o_),this._renderer.xr.enabled=l_,t.scissorTest=!1,Ll(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===er||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),s_=this._renderer.getRenderTarget(),r_=this._renderer.getActiveCubeFace(),o_=this._renderer.getActiveMipmapLevel(),l_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:na,format:Bi,colorSpace:eu,depthBuffer:!1},a=ME(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ME(t,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=YN(s)),this._blurMaterial=JN(s,t,n),this._ggxMaterial=ZN(s,t,n)}return a}_compileMaterial(t){let n=new je(new Yn,t);this._renderer.compile(n,Du)}_sceneToCubeUV(t,n,i,a,s){let l=new On(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(SE),p.toneMapping=ji,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new _l,new Ys({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,d=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,d=!0):(g.color.copy(SE),d=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let E=this._cubeSize;Ll(a,_*E,S>2?E:0,E,E),p.setRenderTarget(a),d&&p.render(M,l),p.render(t,l)}p.toneMapping=f,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===er||t.mapping===Fr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=EE()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bE());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Du)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,f=p*u,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-Il?i-v+Il:0),d=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=v-n,Ll(s,g,d,3*M,2*M),a.setRenderTarget(s),a.render(o,Du),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ll(t,g,d,3*M,2*M),a.setRenderTarget(t),a.render(o,Du)}_blur(t,n,i,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,s,n,i,r),this._blurPass(s,t,i,i,r)}_blurPass(t,n,i,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[a],p=3*h*(a>this._lodMax-Il?a-this._lodMax+Il:0),u=4*(this._cubeSize-h);Ll(n,p,u,3*h,2*h),r.setRenderTarget(n),r.render(l,Du)}};function YN(e){let t=[],n=[],i=e,a=e-Il+1+kN;for(let s=0;s<a;s++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,v=new Float32Array(f*u*p),M=new Float32Array(f*u*p);for(let d=0;d<p;d++){let m=d%3*2/3-1,S=d>2?0:-1,_=[m,S,0,m+2/3,S,0,m+2/3,S+1,0,m,S,0,m+2/3,S+1,0,m,S+1,0];v.set(_,f*u*d);for(let E=0;E<u;E++){let T=h[E*2]*2-1,C=h[E*2+1]*2-1;d===0?Vr.set(1,C,T):d===1?Vr.set(-T,1,-C):d===2?Vr.set(-T,C,1):d===3?Vr.set(-1,C,-T):d===4?Vr.set(-T,-1,C):Vr.set(T,C,-1),Vr.toArray(M,(d*u+E)*f)}}let g=new Yn;g.setAttribute("position",new Pn(v,f)),g.setAttribute("outputDirection",new Pn(M,f)),n.push(new je(g,null)),i>Il&&i--}return{lodMeshes:n,sizeLods:t}}function ME(e,t,n){let i=new ai(e,t,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ll(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function ZN(e,t,n){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ap(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function JN(e,t,n){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:XN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ap(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function bE(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function EE(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Ap(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ep=class extends ai{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new lu(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new _l(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Ca});s.uniforms.tEquirect.value=n;let r=new je(a,s),o=n.minFilter;return n.minFilter===$i&&(n.minFilter=un),new Ud(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}};function KN(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,f=!1){return u==null?null:f?r(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Od||f===Pd)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new Ep(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,v=f===Od||f===Pd,M=f===er||f===Fr;if(v||M){let g=n.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Pl(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Pl(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Od?u.mapping=er:f===Pd&&(u.mapping=Fr),u}function l(u){let f=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&f++;return f===v}function c(u){let f=u.target;f.removeEventListener("dispose",c);let v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let v=n.get(f);v!==void 0&&(n.delete(f),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function QN(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Lr("WebGLRenderer: "+i+" extension not supported."),a}}}function jN(e,t,n,i){let a={},s=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,v=p.attributes.position,M=0;if(v===void 0)return;if(f!==null){let m=f.array;M=f.version;for(let S=0,_=m.length;S<_;S+=3){let E=m[S+0],T=m[S+1],C=m[S+2];u.push(E,T,T,C,C,E)}}else{let m=v.array;M=v.version;for(let S=0,_=m.length/3-1;S<_;S+=3){let E=S+0,T=S+1,C=S+2;u.push(E,T,T,C,C,E)}}let g=new(v.count>=65535?ru:su)(u,1);g.version=M;let d=s.get(p);d&&t.remove(d),s.set(p,g)}function h(p){let u=s.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function $N(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,f){f!==0&&(e.drawElementsInstanced(i,u,s,p*r,f),n.update(u,i,f))}function h(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,f);let M=0;for(let g=0;g<f;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function tD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Wt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function eD(e,t,n){let i=new WeakMap,a=new We;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;f===!0&&(S=1),v===!0&&(S=2),M===!0&&(S=3);let _=o.attributes.position.count*S,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*E*4*p),C=new au(T,_,E,p);C.type=ea,C.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let N=g[R],V=d[R],F=m[R],I=_*E*4*R;for(let P=0;P<N.count;P++){let K=P*x;f===!0&&(a.fromBufferAttribute(N,P),T[I+K+0]=a.x,T[I+K+1]=a.y,T[I+K+2]=a.z,T[I+K+3]=0),v===!0&&(a.fromBufferAttribute(V,P),T[I+K+4]=a.x,T[I+K+5]=a.y,T[I+K+6]=a.z,T[I+K+7]=0),M===!0&&(a.fromBufferAttribute(F,P),T[I+K+8]=a.x,T[I+K+9]=a.y,T[I+K+10]=a.z,T[I+K+11]=F.itemSize===4?a.w:1)}}u={count:p,texture:C,size:new mt(_,E)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function nD(e,t,n,i,a){let s=new WeakMap;function r(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var iD={[Lv]:"LINEAR_TONE_MAPPING",[Iv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[Pv]:"ACES_FILMIC_TONE_MAPPING",[zv]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[Bv]:"CUSTOM_TONE_MAPPING"};function aD(e,t,n,i,a,s){let r=new ai(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Yn;c.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rn([0,2,0,0,2,0],2));let h=new vd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new je(c,h),u=new Tl(-1,1,1,-1,0,1),f=null,v=null,M=!1,g,d=null,m=[],S=!1;this.setSize=function(_,E){r.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let T=0;T<m.length;T++){let C=m[T];C.setSize&&C.setSize(_,E)}},this.setEffects=function(_){m=_,S=m.length>0&&m[0].isRenderPass===!0;let E=r.width,T=r.height;m.length>0&&o===null&&(o=new ai(E,T,{type:na,depthBuffer:!1,stencilBuffer:!1}),l=new ai(E,T,{type:na,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<m.length;C++){let x=m[C];x.setSize&&x.setSize(E,T)}},this.begin=function(_,E){if(M||_.toneMapping===ji&&m.length===0)return!1;if(d=E,E!==null){let T=E.width,C=E.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return S===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(_,E){_.toneMapping=g,M=!0;let T=r,C=o;for(let x=0;x<m.length;x++){let w=m[x];w.enabled!==!1&&(w.render(_,C,T,E),w.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(f!==_.outputColorSpace||v!==_.toneMapping){f=_.outputColorSpace,v=_.toneMapping,h.defines={},ve.getTransfer(f)===Ae&&(h.defines.SRGB_TRANSFER="");let x=iD[v];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(d),_.render(p,u),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var XE=new Wn,h_=new Zs(1,1),WE=new au,qE=new ud,YE=new lu,TE=[],AE=[],wE=new Float32Array(16),CE=new Float32Array(9),RE=new Float32Array(4);function Bl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=TE[a];if(s===void 0&&(s=new Float32Array(a),TE[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function hn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function wp(e,t){let n=AE[t];n===void 0&&(n=new Int32Array(t),AE[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function sD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function rD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function oD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function lD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function cD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;RE.set(i),e.uniformMatrix2fv(this.addr,!1,RE),fn(n,i)}}function uD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;CE.set(i),e.uniformMatrix3fv(this.addr,!1,CE),fn(n,i)}}function hD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;wE.set(i),e.uniformMatrix4fv(this.addr,!1,wE),fn(n,i)}}function fD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function dD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function pD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function mD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function gD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function _D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function xD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(h_.compareFunction=n.isReversedDepthBuffer()?Sp:xp,s=h_):s=XE,n.setTexture2D(t||s,a)}function SD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||qE,a)}function MD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||YE,a)}function bD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||WE,a)}function ED(e){switch(e){case 5126:return sD;case 35664:return rD;case 35665:return oD;case 35666:return lD;case 35674:return cD;case 35675:return uD;case 35676:return hD;case 5124:case 35670:return fD;case 35667:case 35671:return dD;case 35668:case 35672:return pD;case 35669:case 35673:return mD;case 5125:return gD;case 36294:return vD;case 36295:return _D;case 36296:return yD;case 35678:case 36198:case 36298:case 36306:case 35682:return xD;case 35679:case 36299:case 36307:return SD;case 35680:case 36300:case 36308:case 36293:return MD;case 36289:case 36303:case 36311:case 36292:return bD}}function TD(e,t){e.uniform1fv(this.addr,t)}function AD(e,t){let n=Bl(t,this.size,2);e.uniform2fv(this.addr,n)}function wD(e,t){let n=Bl(t,this.size,3);e.uniform3fv(this.addr,n)}function CD(e,t){let n=Bl(t,this.size,4);e.uniform4fv(this.addr,n)}function RD(e,t){let n=Bl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ND(e,t){let n=Bl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function DD(e,t){let n=Bl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function UD(e,t){e.uniform1iv(this.addr,t)}function LD(e,t){e.uniform2iv(this.addr,t)}function ID(e,t){e.uniform3iv(this.addr,t)}function OD(e,t){e.uniform4iv(this.addr,t)}function PD(e,t){e.uniform1uiv(this.addr,t)}function BD(e,t){e.uniform2uiv(this.addr,t)}function zD(e,t){e.uniform3uiv(this.addr,t)}function FD(e,t){e.uniform4uiv(this.addr,t)}function HD(e,t,n){let i=this.cache,a=t.length,s=wp(n,a);hn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=h_:r=XE;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function VD(e,t,n){let i=this.cache,a=t.length,s=wp(n,a);hn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||qE,s[r])}function GD(e,t,n){let i=this.cache,a=t.length,s=wp(n,a);hn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||YE,s[r])}function kD(e,t,n){let i=this.cache,a=t.length,s=wp(n,a);hn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||WE,s[r])}function XD(e){switch(e){case 5126:return TD;case 35664:return AD;case 35665:return wD;case 35666:return CD;case 35674:return RD;case 35675:return ND;case 35676:return DD;case 5124:case 35670:return UD;case 35667:case 35671:return LD;case 35668:case 35672:return ID;case 35669:case 35673:return OD;case 5125:return PD;case 36294:return BD;case 36295:return zD;case 36296:return FD;case 35678:case 36198:case 36298:case 36306:case 35682:return HD;case 35679:case 36299:case 36307:return VD;case 35680:case 36300:case 36308:case 36293:return GD;case 36289:case 36303:case 36311:case 36292:return kD}}var f_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ED(n.type)}},d_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XD(n.type)}},p_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},c_=/(\w+)(\])?(\[|\.)?/g;function NE(e,t){e.seq.push(t),e.map[t.id]=t}function WD(e,t,n){let i=e.name,a=i.length;for(c_.lastIndex=0;;){let s=c_.exec(i),r=c_.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){NE(n,c===void 0?new f_(o,e,t):new d_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new p_(o),NE(n,p)),n=p}}}var Ol=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);WD(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function DE(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var qD=37297,YD=0;function ZD(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var UE=new Qt;function JD(e){ve._getMatrix(UE,ve.workingColorSpace,e);let t=`mat3( ${UE.elements.map(n=>n.toFixed(4))} )`;switch(ve.getTransfer(e)){case nu:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function LE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+ZD(e.getShaderSource(t),o)}else return s}function KD(e,t){let n=JD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var QD={[Lv]:"Linear",[Iv]:"Reinhard",[Ov]:"Cineon",[Pv]:"ACESFilmic",[zv]:"AgX",[Mu]:"Neutral",[Bv]:"Custom"};function jD(e,t){let n=QD[t];return n===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var bp=new U;function $D(){ve.getLuminanceCoefficients(bp);let e=bp.x.toFixed(4),t=bp.y.toFixed(4),n=bp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tU(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lu).join(`
`)}function eU(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function nU(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Lu(e){return e!==""}function IE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function OE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iU=/^[ \t]*#include +<([\w\d./]+)>/gm;function m_(e){return e.replace(iU,sU)}var aU=new Map;function sU(e,t){let n=re[t];if(n===void 0){let i=aU.get(t);if(i!==void 0)n=re[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return m_(n)}var rU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function PE(e){return e.replace(rU,oU)}function oU(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function BE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lU={[Su]:"SHADOWMAP_TYPE_PCF",[wl]:"SHADOWMAP_TYPE_VSM"};function cU(e){return lU[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uU={[er]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function hU(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":uU[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var fU={[Fr]:"ENVMAP_MODE_REFRACTION"};function dU(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":fU[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pU={[Uv]:"ENVMAP_BLENDING_MULTIPLY",[K1]:"ENVMAP_BLENDING_MIX",[Q1]:"ENVMAP_BLENDING_ADD"};function mU(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":pU[e.combine]||"ENVMAP_BLENDING_NONE"}function gU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function vU(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=cU(n),c=hU(n),h=dU(n),p=mU(n),u=gU(n),f=tU(n),v=eU(s),M=a.createProgram(),g,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Lu).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Lu).join(`
`),d.length>0&&(d+=`
`)):(g=[BE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lu).join(`
`),d=[BE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?re.tonemapping_pars_fragment:"",n.toneMapping!==ji?jD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,KD("linearToOutputTexel",n.outputColorSpace),$D(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lu).join(`
`)),r=m_(r),r=IE(r,n),r=OE(r,n),o=m_(o),o=IE(o,n),o=OE(o,n),r=PE(r),o=PE(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=m+g+r,_=m+d+o,E=DE(a,a.VERTEX_SHADER,S),T=DE(a,a.FRAGMENT_SHADER,_);a.attachShader(M,E),a.attachShader(M,T),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function C(N){if(e.debug.checkShaderErrors){let V=a.getProgramInfoLog(M)||"",F=a.getShaderInfoLog(E)||"",I=a.getShaderInfoLog(T)||"",P=V.trim(),K=F.trim(),Y=I.trim(),st=!0,q=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(st=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,E,T);else{let nt=LE(a,E,"vertex"),at=LE(a,T,"fragment");Wt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+nt+`
`+at)}else P!==""?qt("WebGLProgram: Program Info Log:",P):(K===""||Y==="")&&(q=!1);q&&(N.diagnostics={runnable:st,programLog:P,vertexShader:{log:K,prefix:g},fragmentShader:{log:Y,prefix:d}})}a.deleteShader(E),a.deleteShader(T),x=new Ol(a,M),w=nU(a,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,qD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YD++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}var _U=0,g_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new v_(t),n.set(t,i)),i}},v_=class{constructor(t){this.id=_U++,this.code=t,this.usedTimes=0}};function yU(e){return e===ir||e===Ru||e===Nu}function xU(e,t,n,i,a,s){let r=new fl,o=new g_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,R,N,V,F){let I=N.fog,P=V.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||K,Y),q=st&&st.mapping===bu?st.image.height:null,nt=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&qt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let at=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Lt=at!==void 0?at.length:0,St=0;P.morphAttributes.position!==void 0&&(St=1),P.morphAttributes.normal!==void 0&&(St=2),P.morphAttributes.color!==void 0&&(St=3);let ue,ee,me,Z;if(nt){let Se=Na[nt];ue=Se.vertexShader,ee=Se.fragmentShader}else{ue=x.vertexShader,ee=x.fragmentShader;let Se=o.getVertexShaderStage(x),fe=o.getFragmentShaderStage(x);o.update(x,Se,fe),me=Se.id,Z=fe.id}let tt=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),kt=V.isInstancedMesh===!0,At=V.isBatchedMesh===!0,Ht=!!x.map,ye=!!x.matcap,j=!!st,rt=!!x.aoMap,lt=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,Vt=!!x.displacementMap,Bt=!!x.emissiveMap,Gt=!!x.metalnessMap,Xt=!!x.roughnessMap,D=x.anisotropy>0,_e=x.clearcoat>0,ne=x.dispersion>0,A=x.retroreflectivity>0,y=x.iridescence>0,z=x.sheen>0,k=x.transmission>0,B=D&&!!x.anisotropyMap,ct=_e&&!!x.clearcoatMap,dt=_e&&!!x.clearcoatNormalMap,J=_e&&!!x.clearcoatRoughnessMap,$=y&&!!x.iridescenceMap,ht=y&&!!x.iridescenceThicknessMap,Mt=z&&!!x.sheenColorMap,ft=z&&!!x.sheenRoughnessMap,gt=!!x.specularMap,Ot=!!x.specularColorMap,Ft=!!x.specularIntensityMap,Jt=k&&!!x.transmissionMap,O=k&&!!x.thicknessMap,vt=!!x.gradientMap,Q=!!x.alphaMap,xt=x.alphaTest>0,Et=!!x.alphaHash,it=!!x.extensions,Pt=ji;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Pt=e.toneMapping);let Rt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:ee,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:At,batchingColor:At&&V._colorsTexture!==null,instancing:kt,instancingColor:kt&&V.instanceColor!==null,instancingMorph:kt&&V.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:ye,envMap:j,envMapMode:j&&st.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:lt,bumpMap:ot,normalMap:ut,displacementMap:Vt,emissiveMap:Bt,normalMapObjectSpace:ut&&x.normalMapType===tE,normalMapTangentSpace:ut&&x.normalMapType===yp,packedNormalMap:ut&&x.normalMapType===yp&&yU(x.normalMap.format),metalnessMap:Gt,roughnessMap:Xt,anisotropy:D,anisotropyMap:B,clearcoat:_e,clearcoatMap:ct,clearcoatNormalMap:dt,clearcoatRoughnessMap:J,dispersion:ne,retroreflection:A,iridescence:y,iridescenceMap:$,iridescenceThicknessMap:ht,sheen:z,sheenColorMap:Mt,sheenRoughnessMap:ft,specularMap:gt,specularColorMap:Ot,specularIntensityMap:Ft,transmission:k,transmissionMap:Jt,thicknessMap:O,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Cl&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:Et,combine:x.combine,mapUv:Ht&&v(x.map.channel),aoMapUv:rt&&v(x.aoMap.channel),lightMapUv:lt&&v(x.lightMap.channel),bumpMapUv:ot&&v(x.bumpMap.channel),normalMapUv:ut&&v(x.normalMap.channel),displacementMapUv:Vt&&v(x.displacementMap.channel),emissiveMapUv:Bt&&v(x.emissiveMap.channel),metalnessMapUv:Gt&&v(x.metalnessMap.channel),roughnessMapUv:Xt&&v(x.roughnessMap.channel),anisotropyMapUv:B&&v(x.anisotropyMap.channel),clearcoatMapUv:ct&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(x.sheenRoughnessMap.channel),specularMapUv:gt&&v(x.specularMap.channel),specularColorMapUv:Ot&&v(x.specularColorMap.channel),specularIntensityMapUv:Ft&&v(x.specularIntensityMap.channel),transmissionMapUv:Jt&&v(x.transmissionMap.channel),thicknessMapUv:O&&v(x.thicknessMap.channel),alphaMapUv:Q&&v(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ut||D),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!P.attributes.uv&&(Ht||Q),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_t,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:St,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Ae,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ei,flipSided:x.side===Zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(w,x),m(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let w=f[x.type],R;if(w){let N=Na[w];R=_E.clone(N.uniforms)}else R=x.uniforms;return R}function _(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new vU(e,w,x,a),c.push(R),h.set(w,R)),R}function E(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function SU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function MU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function zE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function FE(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,v,M,g,d){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:d},e[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=v,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=d),t++,m}function l(u,f,v,M,g,d,m){m.reversedDepth===!0&&(g=-g);let S=o(u,f,v,M,g,d);v.transmission>0?i.push(S):v.transparent===!0?a.push(S):n.push(S)}function c(u,f,v,M,g,d){let m=o(u,f,v,M,g,d);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,f){n.length>1&&n.sort(u||MU),i.length>1&&i.sort(f||zE),a.length>1&&a.sort(f||zE)}function p(){for(let u=t,f=e.length;u<f;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:h}}function bU(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new FE,e.set(i,[r])):a>=s.length?(r=new FE,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function EU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new U,color:new te};break;case"SpotLight":n={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function TU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var AU=0;function wU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function CU(e){let t=new EU,n=TU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let a=new U,s=new Oe,r=new Oe;function o(c){let h=0,p=0,u=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,v=0,M=0,g=0,d=0,m=0,S=0,_=0,E=0,T=0,C=0,x=0,w=0,R=0;c.sort(wU);for(let V=0,F=c.length;V<F;V++){let I=c[V],P=I.color,K=I.intensity,Y=I.distance,st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ir?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*K,p+=P.g*K,u+=P.b*K;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],K);R++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,at=n.get(I);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[v]=at,i.sunShadowMap[v]=st;let Lt=nt.getViewportCount();for(let St=0;St<Lt;St++)i.sunShadowMatrix[M+St]=nt.getMatrix(St),i.sunShadowCascade[M+St]=nt._cascadeData[St];M+=Lt,v++}i.sun[f]=q,f++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,at=n.get(I);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,i.directionalShadow[g]=at,i.directionalShadowMap[g]=st,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=q,g++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(P).multiplyScalar(K),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[m]=q;let nt=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,nt.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[m]=nt.matrix,I.castShadow){let at=n.get(I);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,i.spotShadow[m]=at,i.spotShadowMap[m]=st,C++}m++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(P).multiplyScalar(K),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=q,S++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let nt=I.shadow,at=n.get(I);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,at.shadowCameraNear=nt.camera.near,at.shadowCameraFar=nt.camera.far,i.pointShadow[d]=at,i.pointShadowMap[d]=st,i.pointShadowMatrix[d]=I.shadow.matrix,T++}i.point[d]=q,d++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(K),q.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[_]=q,_++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==d||N.spotLength!==m||N.rectAreaLength!==S||N.hemiLength!==_||N.numSunShadows!==v||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==C||N.numSpotMaps!==x||N.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=m,i.rectArea.length=S,i.point.length=d,i.hemi.length=_,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,N.sunLength=f,N.directionalLength=g,N.pointLength=d,N.spotLength=m,N.rectAreaLength=S,N.hemiLength=_,N.numSunShadows=v,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=C,N.numSpotMaps=x,N.numLightProbes=R,i.version=AU++)}function l(c,h){let p=0,u=0,f=0,v=0,M=0,g=0,d=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let _=c[m];if(_.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),p++}else if(_.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),u++}else if(_.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),v++}else if(_.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),r.identity(),s.copy(_.matrixWorld),s.premultiply(d),r.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(_.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),f++}else if(_.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function HE(e){let t=new CU(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function RU(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new HE(e),t.set(a,[o])):s>=r.length?(o=new HE(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var NU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UU=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],LU=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],VE=new Oe,Uu=new U,u_=new U;function IU(e,t,n){let i=new vl,a=new mt,s=new mt,r=new We,o=new _d,l=new yd,c={},h=n.maxTextureSize,p={[tr]:Zn,[Zn]:tr,[Ei]:Ei},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:NU,fragmentShader:DU}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let v=new Yn;v.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new je(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let d=this.type;this.render=function(T,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===D1&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Su);let w=e.getRenderTarget(),R=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Ca),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let F=d!==this.type;F&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(P=>P.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,P=T.length;I<P;I++){let K=T[I],Y=K.shadow;if(Y===void 0){qt("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);let st=Y.getFrameExtents();a.multiply(st),s.copy(Y.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/st.x),a.x=s.x*st.x,Y.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/st.y),a.y=s.y*st.y,Y.mapSize.y=s.y));let q=e.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||F===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===wl){if(K.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new ai(a.x,a.y,{format:ir,type:na,minFilter:un,magFilter:un,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new Zs(a.x,a.y,ea),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=Aa,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn}else K.isPointLight?(Y.map=new Ep(a.x),Y.map.depthTexture=new hd(a.x,ta)):(Y.map=new ai(a.x,a.y),Y.map.depthTexture=new Zs(a.x,a.y,ta)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=Aa,this.type===Su?(Y.map.depthTexture.compareFunction=q?Sp:xp,Y.map.depthTexture.minFilter=un,Y.map.depthTexture.magFilter=un):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=yn,Y.map.depthTexture.magFilter=yn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==a.x||Y.map.height!==a.y)&&Y.map.setSize(a.x,a.y);let nt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();K.isPointLight!==!0&&Y.updateMatrices(K,x);for(let at=0;at<nt;at++){let Lt=Y.getCamera(at);if(K.isPointLight){let St=Y.camera,ue=Y.matrix,ee=K.distance||St.far;ee!==St.far&&(St.far=ee,St.updateProjectionMatrix()),Uu.setFromMatrixPosition(K.matrixWorld),St.position.copy(Uu),u_.copy(St.position),u_.add(UU[at]),St.up.copy(LU[at]),St.lookAt(u_),St.updateMatrixWorld(),ue.makeTranslation(-Uu.x,-Uu.y,-Uu.z),VE.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(VE,St.coordinateSystem,St.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)e.setRenderTarget(Y.map,at),e.clear();else{at===0&&(e.setRenderTarget(Y.map),e.clear());let St=Y.getViewport(at);r.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),V.viewport(r)}i=Y.getFrustum(at),_(C,x,Lt,K,this.type)}Y.isPointLightShadow!==!0&&this.type===wl&&m(Y,x),Y.needsUpdate=!1}d=this.type,g.needsUpdate=!1,e.setRenderTarget(w,R,N)};function m(T,C){let x=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ai(a.x,a.y,{format:ir,type:na}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(C,null,x,f,M,null)}function S(T,C,x,w){let R=null,N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let V=R.uuid,F=C.uuid,I=c[V];I===void 0&&(I={},c[V]=I);let P=I[F];P===void 0&&(P=R.clone(),I[F]=P,C.addEventListener("dispose",E)),R=P}if(R.visible=C.visible,R.wireframe=C.wireframe,w===wl?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let V=e.properties.get(R);V.light=x}return R}function _(T,C,x,w,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===wl)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let F=t.update(T),I=T.material;if(Array.isArray(I)){let P=F.groups;for(let K=0,Y=P.length;K<Y;K++){let st=P[K],q=I[st.materialIndex];if(q&&q.visible){let nt=S(T,q,w,R);T.onBeforeShadow(e,T,C,x,F,nt,st),e.renderBufferDirect(x,null,F,nt,T,st),T.onAfterShadow(e,T,C,x,F,nt,st)}}}else if(I.visible){let P=S(T,I,w,R);T.onBeforeShadow(e,T,C,x,F,P,null),e.renderBufferDirect(x,null,F,P,T,null),T.onAfterShadow(e,T,C,x,F,P,null)}}let V=T.children;for(let F=0,I=V.length;F<I;F++)_(V[F],C,x,w,R)}function E(T){T.target.removeEventListener("dispose",E);for(let x in c){let w=c[x],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function OU(e,t){function n(){let O=!1,vt=new We,Q=null,xt=new We(0,0,0,0);return{setMask:function(Et){Q!==Et&&!O&&(e.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){O=Et},setClear:function(Et,it,Pt,Rt,Se){Se===!0&&(Et*=Rt,it*=Rt,Pt*=Rt),vt.set(Et,it,Pt,Rt),xt.equals(vt)===!1&&(e.clearColor(Et,it,Pt,Rt),xt.copy(vt))},reset:function(){O=!1,Q=null,xt.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,Q=null,xt=null,Et=null;return{setReversed:function(it){if(vt!==it){let Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),vt=it;let Rt=Et;Et=null,this.setClear(Rt)}},getReversed:function(){return vt},setTest:function(it){it?tt(e.DEPTH_TEST):_t(e.DEPTH_TEST)},setMask:function(it){Q!==it&&!O&&(e.depthMask(it),Q=it)},setFunc:function(it){if(vt&&(it=fE[it]),xt!==it){switch(it){case jf:e.depthFunc(e.NEVER);break;case $f:e.depthFunc(e.ALWAYS);break;case td:e.depthFunc(e.LESS);break;case ll:e.depthFunc(e.LEQUAL);break;case ed:e.depthFunc(e.EQUAL);break;case nd:e.depthFunc(e.GEQUAL);break;case id:e.depthFunc(e.GREATER);break;case ad:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}xt=it}},setLocked:function(it){O=it},setClear:function(it){Et!==it&&(Et=it,vt&&(it=1-it),e.clearDepth(it))},reset:function(){O=!1,Q=null,xt=null,Et=null,vt=!1}}}function a(){let O=!1,vt=null,Q=null,xt=null,Et=null,it=null,Pt=null,Rt=null,Se=null;return{setTest:function(fe){O||(fe?tt(e.STENCIL_TEST):_t(e.STENCIL_TEST))},setMask:function(fe){vt!==fe&&!O&&(e.stencilMask(fe),vt=fe)},setFunc:function(fe,zn,dn){(Q!==fe||xt!==zn||Et!==dn)&&(e.stencilFunc(fe,zn,dn),Q=fe,xt=zn,Et=dn)},setOp:function(fe,zn,dn){(it!==fe||Pt!==zn||Rt!==dn)&&(e.stencilOp(fe,zn,dn),it=fe,Pt=zn,Rt=dn)},setLocked:function(fe){O=fe},setClear:function(fe){Se!==fe&&(e.clearStencil(fe),Se=fe)},reset:function(){O=!1,vt=null,Q=null,xt=null,Et=null,it=null,Pt=null,Rt=null,Se=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,h={},p={},u={},f=new WeakMap,v=[],M=null,g=!1,d=null,m=null,S=null,_=null,E=null,T=null,C=null,x=new te(0,0,0),w=0,R=!1,N=null,V=null,F=null,I=null,P=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,st=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=st>=2);let nt=null,at={},Lt=e.getParameter(e.SCISSOR_BOX),St=e.getParameter(e.VIEWPORT),ue=new We().fromArray(Lt),ee=new We().fromArray(St);function me(O,vt,Q,xt){let Et=new Uint8Array(4),it=e.createTexture();e.bindTexture(O,it),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pt=0;Pt<Q;Pt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(vt,0,e.RGBA,1,1,xt,0,e.RGBA,e.UNSIGNED_BYTE,Et):e.texImage2D(vt+Pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Et);return it}let Z={};Z[e.TEXTURE_2D]=me(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(ll),ot(!1),ut(Av),tt(e.CULL_FACE),rt(Ca);function tt(O){h[O]!==!0&&(e.enable(O),h[O]=!0)}function _t(O){h[O]!==!1&&(e.disable(O),h[O]=!1)}function kt(O,vt){return u[O]!==vt?(e.bindFramebuffer(O,vt),u[O]=vt,O===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=vt),O===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=vt),!0):!1}function At(O,vt){let Q=v,xt=!1;if(O){Q=f.get(vt),Q===void 0&&(Q=[],f.set(vt,Q));let Et=O.textures;if(Q.length!==Et.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let it=0,Pt=Et.length;it<Pt;it++)Q[it]=e.COLOR_ATTACHMENT0+it;Q.length=Et.length,xt=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,xt=!0);xt&&e.drawBuffers(Q)}function Ht(O){return M!==O?(e.useProgram(O),M=O,!0):!1}let ye={[zr]:e.FUNC_ADD,[L1]:e.FUNC_SUBTRACT,[I1]:e.FUNC_REVERSE_SUBTRACT};ye[O1]=e.MIN,ye[P1]=e.MAX;let j={[B1]:e.ZERO,[z1]:e.ONE,[F1]:e.SRC_COLOR,[Nv]:e.SRC_ALPHA,[W1]:e.SRC_ALPHA_SATURATE,[k1]:e.DST_COLOR,[V1]:e.DST_ALPHA,[H1]:e.ONE_MINUS_SRC_COLOR,[Dv]:e.ONE_MINUS_SRC_ALPHA,[X1]:e.ONE_MINUS_DST_COLOR,[G1]:e.ONE_MINUS_DST_ALPHA,[q1]:e.CONSTANT_COLOR,[Y1]:e.ONE_MINUS_CONSTANT_COLOR,[Z1]:e.CONSTANT_ALPHA,[J1]:e.ONE_MINUS_CONSTANT_ALPHA};function rt(O,vt,Q,xt,Et,it,Pt,Rt,Se,fe){if(O===Ca){g===!0&&(_t(e.BLEND),g=!1);return}if(g===!1&&(tt(e.BLEND),g=!0),O!==U1){if(O!==d||fe!==R){if((m!==zr||E!==zr)&&(e.blendEquation(e.FUNC_ADD),m=zr,E=zr),fe)switch(O){case Cl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wv:e.blendFunc(e.ONE,e.ONE);break;case Cv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Rv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Wt("WebGLState: Invalid blending: ",O);break}else switch(O){case Cl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Cv:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rv:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",O);break}S=null,_=null,T=null,C=null,x.set(0,0,0),w=0,d=O,R=fe}return}Et=Et||vt,it=it||Q,Pt=Pt||xt,(vt!==m||Et!==E)&&(e.blendEquationSeparate(ye[vt],ye[Et]),m=vt,E=Et),(Q!==S||xt!==_||it!==T||Pt!==C)&&(e.blendFuncSeparate(j[Q],j[xt],j[it],j[Pt]),S=Q,_=xt,T=it,C=Pt),(Rt.equals(x)===!1||Se!==w)&&(e.blendColor(Rt.r,Rt.g,Rt.b,Se),x.copy(Rt),w=Se),d=O,R=!1}function lt(O,vt){O.side===Ei?_t(e.CULL_FACE):tt(e.CULL_FACE);let Q=O.side===Zn;vt&&(Q=!Q),ot(Q),O.blending===Cl&&O.transparent===!1?rt(Ca):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);let xt=O.stencilWrite;o.setTest(xt),xt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):_t(e.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){N!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),N=O)}function ut(O){O!==R1?(tt(e.CULL_FACE),O!==V&&(O===Av?e.cullFace(e.BACK):O===N1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_t(e.CULL_FACE),V=O}function Vt(O){O!==F&&(Y&&e.lineWidth(O),F=O)}function Bt(O,vt,Q){O?(tt(e.POLYGON_OFFSET_FILL),(I!==vt||P!==Q)&&(I=vt,P=Q,r.getReversed()&&(vt=-vt),e.polygonOffset(vt,Q))):_t(e.POLYGON_OFFSET_FILL)}function Gt(O){O?tt(e.SCISSOR_TEST):_t(e.SCISSOR_TEST)}function Xt(O){O===void 0&&(O=e.TEXTURE0+K-1),nt!==O&&(e.activeTexture(O),nt=O)}function D(O,vt,Q){Q===void 0&&(nt===null?Q=e.TEXTURE0+K-1:Q=nt);let xt=at[Q];xt===void 0&&(xt={type:void 0,texture:void 0},at[Q]=xt),(xt.type!==O||xt.texture!==vt)&&(nt!==Q&&(e.activeTexture(Q),nt=Q),e.bindTexture(O,vt||Z[O]),xt.type=O,xt.texture=vt)}function _e(){let O=at[nt];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{e.compressedTexImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function y(){try{e.texSubImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function z(){try{e.texSubImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function B(){try{e.compressedTexSubImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function ct(){try{e.texStorage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function dt(){try{e.texStorage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function J(){try{e.texImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function $(){try{e.texImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function ht(O){return p[O]!==void 0?p[O]:e.getParameter(O)}function Mt(O,vt){p[O]!==vt&&(e.pixelStorei(O,vt),p[O]=vt)}function ft(O){ue.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),ue.copy(O))}function gt(O){ee.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Ot(O,vt){let Q=c.get(vt);Q===void 0&&(Q=new WeakMap,c.set(vt,Q));let xt=Q.get(O);xt===void 0&&(xt=e.getUniformBlockIndex(vt,O.name),Q.set(O,xt))}function Ft(O,vt){let xt=c.get(vt).get(O);l.get(vt)!==xt&&(e.uniformBlockBinding(vt,xt,O.__bindingPointIndex),l.set(vt,xt))}function Jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},nt=null,at={},u={},f=new WeakMap,v=[],M=null,g=!1,d=null,m=null,S=null,_=null,E=null,T=null,C=null,x=new te(0,0,0),w=0,R=!1,N=null,V=null,F=null,I=null,P=null,ue.set(0,0,e.canvas.width,e.canvas.height),ee.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:tt,disable:_t,bindFramebuffer:kt,drawBuffers:At,useProgram:Ht,setBlending:rt,setMaterial:lt,setFlipSided:ot,setCullFace:ut,setLineWidth:Vt,setPolygonOffset:Bt,setScissorTest:Gt,activeTexture:Xt,bindTexture:D,unbindTexture:_e,compressedTexImage2D:ne,compressedTexImage3D:A,texImage2D:J,texImage3D:$,pixelStorei:Mt,getParameter:ht,updateUBOMapping:Ot,uniformBlockBinding:Ft,texStorage2D:ct,texStorage3D:dt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:k,compressedTexSubImage3D:B,scissor:ft,viewport:gt,reset:Jt}}function PU(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,p=new Set,u,f=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,y){return v?new OffscreenCanvas(A,y):iu("canvas")}function g(A,y,z){let k=1,B=ne(A);if((B.width>z||B.height>z)&&(k=z/Math.max(B.width,B.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(k*B.width),dt=Math.floor(k*B.height);u===void 0&&(u=M(ct,dt));let J=y?M(ct,dt):u;return J.width=ct,J.height=dt,J.getContext("2d").drawImage(A,0,0,ct,dt),qt("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+ct+"x"+dt+")."),J}else return"data"in A&&qt("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),A;return A}function d(A){return A.generateMipmaps}function m(A){e.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,y,z,k,B,ct=!1){if(A!==null){if(e[A]!==void 0)return e[A];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;k&&(dt=t.get("EXT_texture_norm16"),dt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===e.RED&&(z===e.FLOAT&&(J=e.R32F),z===e.HALF_FLOAT&&(J=e.R16F),z===e.UNSIGNED_BYTE&&(J=e.R8),z===e.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),z===e.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(J=e.R8UI),z===e.UNSIGNED_SHORT&&(J=e.R16UI),z===e.UNSIGNED_INT&&(J=e.R32UI),z===e.BYTE&&(J=e.R8I),z===e.SHORT&&(J=e.R16I),z===e.INT&&(J=e.R32I)),y===e.RG&&(z===e.FLOAT&&(J=e.RG32F),z===e.HALF_FLOAT&&(J=e.RG16F),z===e.UNSIGNED_BYTE&&(J=e.RG8),z===e.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),z===e.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(J=e.RG8UI),z===e.UNSIGNED_SHORT&&(J=e.RG16UI),z===e.UNSIGNED_INT&&(J=e.RG32UI),z===e.BYTE&&(J=e.RG8I),z===e.SHORT&&(J=e.RG16I),z===e.INT&&(J=e.RG32I)),y===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(J=e.RGB8UI),z===e.UNSIGNED_SHORT&&(J=e.RGB16UI),z===e.UNSIGNED_INT&&(J=e.RGB32UI),z===e.BYTE&&(J=e.RGB8I),z===e.SHORT&&(J=e.RGB16I),z===e.INT&&(J=e.RGB32I)),y===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),z===e.UNSIGNED_INT&&(J=e.RGBA32UI),z===e.BYTE&&(J=e.RGBA8I),z===e.SHORT&&(J=e.RGBA16I),z===e.INT&&(J=e.RGBA32I)),y===e.RGB&&(z===e.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),z===e.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),y===e.RGBA){let $=ct?nu:ve.getTransfer(B);z===e.FLOAT&&(J=e.RGBA32F),z===e.HALF_FLOAT&&(J=e.RGBA16F),z===e.UNSIGNED_BYTE&&(J=$===Ae?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),z===e.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(A,y){let z;return A?y===null||y===ta||y===Dl?z=e.DEPTH24_STENCIL8:y===ea?z=e.DEPTH32F_STENCIL8:y===Nl&&(z=e.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ta||y===Dl?z=e.DEPTH_COMPONENT24:y===ea?z=e.DEPTH_COMPONENT32F:y===Nl&&(z=e.DEPTH_COMPONENT16),z}function T(A,y){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==yn&&A.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){let y=A.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function x(A){let y=A.target;y.removeEventListener("dispose",x),N(y)}function w(A){let y=i.get(A);if(y.__webglInit===void 0)return;let z=A.source,k=f.get(z);if(k){let B=k[y.__cacheKey];B.usedTimes--,B.usedTimes===0&&R(A),Object.keys(k).length===0&&f.delete(z)}i.remove(A)}function R(A){let y=i.get(A);e.deleteTexture(y.__webglTexture);let z=A.source,k=f.get(z);delete k[y.__cacheKey],r.memory.textures--}function N(A){let y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let B=0;B<y.__webglFramebuffer[k].length;B++)e.deleteFramebuffer(y.__webglFramebuffer[k][B]);else e.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)e.deleteFramebuffer(y.__webglFramebuffer[k]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=A.textures;for(let k=0,B=z.length;k<B;k++){let ct=i.get(z[k]);ct.__webglTexture&&(e.deleteTexture(ct.__webglTexture),r.memory.textures--),i.remove(z[k])}i.remove(A)}let V=0;function F(){V=0}function I(){return V}function P(A){V=A}function K(){let A=V;return A>=a.maxTextures&&qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,A}function Y(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function st(A,y){let z=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let k=A.image;if(k===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+y)}function q(A,y){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_t(z,A,y);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+y)}function nt(A,y){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_t(z,A,y);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+y)}function at(A,y){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){kt(z,A,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+y)}let Lt={[Ta]:e.REPEAT,[Pi]:e.CLAMP_TO_EDGE,[sd]:e.MIRRORED_REPEAT},St={[yn]:e.NEAREST,[j1]:e.NEAREST_MIPMAP_NEAREST,[Eu]:e.NEAREST_MIPMAP_LINEAR,[un]:e.LINEAR,[Rl]:e.LINEAR_MIPMAP_NEAREST,[$i]:e.LINEAR_MIPMAP_LINEAR},ue={[nE]:e.NEVER,[oE]:e.ALWAYS,[iE]:e.LESS,[xp]:e.LEQUAL,[aE]:e.EQUAL,[Sp]:e.GEQUAL,[sE]:e.GREATER,[rE]:e.NOTEQUAL};function ee(A,y){if(y.type===ea&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===Rl||y.magFilter===Eu||y.magFilter===$i||y.minFilter===un||y.minFilter===Rl||y.minFilter===Eu||y.minFilter===$i)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Lt[y.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Lt[y.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Lt[y.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,St[y.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,St[y.minFilter]),y.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==Eu&&y.minFilter!==$i||y.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function me(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));let k=y.source,B=f.get(k);B===void 0&&(B={},f.set(k,B));let ct=Y(y);if(ct!==A.__cacheKey){B[ct]===void 0&&(B[ct]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),B[ct].usedTimes++;let dt=B[A.__cacheKey];dt!==void 0&&(B[A.__cacheKey].usedTimes--,dt.usedTimes===0&&R(y)),A.__cacheKey=ct,A.__webglTexture=B[ct].texture}return z}function Z(A,y,z){return Math.floor(Math.floor(A/z)/y)}function tt(A,y,z,k){let ct=A.updateRanges;if(ct.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,z,k,y.data);else{ct.sort((Mt,ft)=>Mt.start-ft.start);let dt=0;for(let Mt=1;Mt<ct.length;Mt++){let ft=ct[dt],gt=ct[Mt],Ot=ft.start+ft.count,Ft=Z(gt.start,y.width,4),Jt=Z(ft.start,y.width,4);gt.start<=Ot+1&&Ft===Jt&&Z(gt.start+gt.count-1,y.width,4)===Ft?ft.count=Math.max(ft.count,gt.start+gt.count-ft.start):(++dt,ct[dt]=gt)}ct.length=dt+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),ht=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Mt=0,ft=ct.length;Mt<ft;Mt++){let gt=ct[Mt],Ot=Math.floor(gt.start/4),Ft=Math.ceil(gt.count/4),Jt=Ot%y.width,O=Math.floor(Ot/y.width),vt=Ft,Q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Jt),n.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Jt,O,vt,Q,z,k,y.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function _t(A,y,z){let k=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=e.TEXTURE_3D);let B=me(A,y),ct=y.source;n.bindTexture(k,A.__webglTexture,e.TEXTURE0+z);let dt=i.get(ct);if(ct.version!==dt.__version||B===!0){if(n.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Q=ve.getPrimaries(ve.workingColorSpace),xt=y.colorSpace===ns?null:ve.getPrimaries(y.colorSpace),Et=y.colorSpace===ns||Q===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let $=g(y.image,!1,a.maxTextureSize);$=_e(y,$);let ht=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type),ft=_(y.internalFormat,ht,Mt,y.normalized,y.colorSpace,y.isVideoTexture);ee(k,y);let gt,Ot=y.mipmaps,Ft=y.isVideoTexture!==!0,Jt=dt.__version===void 0||B===!0,O=ct.dataReady,vt=T(y,$);if(y.isDepthTexture)ft=E(y.format===nr,y.type),Jt&&(Ft?n.texStorage2D(e.TEXTURE_2D,1,ft,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,ft,$.width,$.height,0,ht,Mt,null));else if(y.isDataTexture)if(Ot.length>0){Ft&&Jt&&n.texStorage2D(e.TEXTURE_2D,vt,ft,Ot[0].width,Ot[0].height);for(let Q=0,xt=Ot.length;Q<xt;Q++)gt=Ot[Q],Ft?O&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,gt.width,gt.height,ht,Mt,gt.data):n.texImage2D(e.TEXTURE_2D,Q,ft,gt.width,gt.height,0,ht,Mt,gt.data);y.generateMipmaps=!1}else Ft?(Jt&&n.texStorage2D(e.TEXTURE_2D,vt,ft,$.width,$.height),O&&tt(y,$,ht,Mt)):n.texImage2D(e.TEXTURE_2D,0,ft,$.width,$.height,0,ht,Mt,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&Jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,vt,ft,Ot[0].width,Ot[0].height,$.depth);for(let Q=0,xt=Ot.length;Q<xt;Q++)if(gt=Ot[Q],y.format!==Bi)if(ht!==null)if(Ft){if(O)if(y.layerUpdates.size>0){let Et=$v(gt.width,gt.height,y.format,y.type);for(let it of y.layerUpdates){let Pt=gt.data.subarray(it*Et/gt.data.BYTES_PER_ELEMENT,(it+1)*Et/gt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,it,gt.width,gt.height,1,ht,Pt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,$.depth,ht,gt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,ft,gt.width,gt.height,$.depth,0,gt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,$.depth,ht,Mt,gt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,ft,gt.width,gt.height,$.depth,0,ht,Mt,gt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ft&&Jt&&n.texStorage2D(e.TEXTURE_2D,vt,ft,Ot[0].width,Ot[0].height);for(let Q=0,xt=Ot.length;Q<xt;Q++)gt=Ot[Q],y.format!==Bi?ht!==null?Ft?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,gt.width,gt.height,ht,gt.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,ft,gt.width,gt.height,0,gt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?O&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,gt.width,gt.height,ht,Mt,gt.data):n.texImage2D(e.TEXTURE_2D,Q,ft,gt.width,gt.height,0,ht,Mt,gt.data)}else if(y.isDataArrayTexture)if(Ft){if(Jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,vt,ft,$.width,$.height,$.depth),O)if(y.layerUpdates.size>0){let Q=$v($.width,$.height,y.format,y.type);for(let xt of y.layerUpdates){let Et=$.data.subarray(xt*Q/$.data.BYTES_PER_ELEMENT,(xt+1)*Q/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,xt,$.width,$.height,1,ht,Mt,Et)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ht,Mt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ft,$.width,$.height,$.depth,0,ht,Mt,$.data);else if(y.isData3DTexture)Ft?(Jt&&n.texStorage3D(e.TEXTURE_3D,vt,ft,$.width,$.height,$.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ht,Mt,$.data)):n.texImage3D(e.TEXTURE_3D,0,ft,$.width,$.height,$.depth,0,ht,Mt,$.data);else if(y.isFramebufferTexture){if(Jt)if(Ft)n.texStorage2D(e.TEXTURE_2D,vt,ft,$.width,$.height);else{let Q=$.width,xt=$.height;for(let Et=0;Et<vt;Et++)n.texImage2D(e.TEXTURE_2D,Et,ft,Q,xt,0,ht,Mt,null),Q>>=1,xt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),p.add(y),Q.onpaint=xt=>{let Et=xt.changedElements;for(let it of p)Et.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{let Et=e.RGBA,it=e.RGBA,Pt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Et,it,Pt,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ft&&Jt){let Q=ne(Ot[0]);n.texStorage2D(e.TEXTURE_2D,vt,ft,Q.width,Q.height)}for(let Q=0,xt=Ot.length;Q<xt;Q++)gt=Ot[Q],Ft?O&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ht,Mt,gt):n.texImage2D(e.TEXTURE_2D,Q,ft,ht,Mt,gt);y.generateMipmaps=!1}else if(Ft){if(Jt){let Q=ne($);n.texStorage2D(e.TEXTURE_2D,vt,ft,Q.width,Q.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,Mt,$)}else n.texImage2D(e.TEXTURE_2D,0,ft,ht,Mt,$);d(y)&&m(k),dt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function kt(A,y,z){if(y.image.length!==6)return;let k=me(A,y),B=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+z);let ct=i.get(B);if(B.version!==ct.__version||k===!0){n.activeTexture(e.TEXTURE0+z);let dt=ve.getPrimaries(ve.workingColorSpace),J=y.colorSpace===ns?null:ve.getPrimaries(y.colorSpace),$=y.colorSpace===ns||dt===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ht=y.isCompressedTexture||y.image[0].isCompressedTexture,Mt=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let it=0;it<6;it++)!ht&&!Mt?ft[it]=g(y.image[it],!0,a.maxCubemapSize):ft[it]=Mt?y.image[it].image:y.image[it],ft[it]=_e(y,ft[it]);let gt=ft[0],Ot=s.convert(y.format,y.colorSpace),Ft=s.convert(y.type),Jt=_(y.internalFormat,Ot,Ft,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,vt=ct.__version===void 0||k===!0,Q=B.dataReady,xt=T(y,gt);ee(e.TEXTURE_CUBE_MAP,y);let Et;if(ht){O&&vt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,Jt,gt.width,gt.height);for(let it=0;it<6;it++){Et=ft[it].mipmaps;for(let Pt=0;Pt<Et.length;Pt++){let Rt=Et[Pt];y.format!==Bi?Ot!==null?O?Q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Rt.width,Rt.height,Ot,Rt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Jt,Rt.width,Rt.height,0,Rt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Rt.width,Rt.height,Ot,Ft,Rt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Jt,Rt.width,Rt.height,0,Ot,Ft,Rt.data)}}}else{if(Et=y.mipmaps,O&&vt){Et.length>0&&xt++;let it=ne(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(Mt){O?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft[it].width,ft[it].height,Ot,Ft,ft[it].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,ft[it].width,ft[it].height,0,Ot,Ft,ft[it].data);for(let Pt=0;Pt<Et.length;Pt++){let Se=Et[Pt].image[it].image;O?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Se.width,Se.height,Ot,Ft,Se.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Jt,Se.width,Se.height,0,Ot,Ft,Se.data)}}else{O?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Ft,ft[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ot,Ft,ft[it]);for(let Pt=0;Pt<Et.length;Pt++){let Rt=Et[Pt];O?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Ot,Ft,Rt.image[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Jt,Ot,Ft,Rt.image[it])}}}d(y)&&m(e.TEXTURE_CUBE_MAP),ct.__version=B.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function At(A,y,z,k,B,ct){let dt=s.convert(z.format,z.colorSpace),J=s.convert(z.type),$=_(z.internalFormat,dt,J,z.normalized,z.colorSpace),ht=i.get(y),Mt=i.get(z);if(Mt.__renderTarget=y,!ht.__hasExternalTextures){let ft=Math.max(1,y.width>>ct),gt=Math.max(1,y.height>>ct);B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?n.texImage3D(B,ct,$,ft,gt,y.depth,0,dt,J,null):n.texImage2D(B,ct,$,ft,gt,0,dt,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Xt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,B,Mt.__webglTexture,0,Gt(y)):(B===e.TEXTURE_2D||B>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,B,Mt.__webglTexture,ct),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(A,y,z){if(e.bindRenderbuffer(e.RENDERBUFFER,A),y.depthBuffer){let k=y.depthTexture,B=k&&k.isDepthTexture?k.type:null,ct=E(y.stencilBuffer,B),dt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Xt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Gt(y),ct,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Gt(y),ct,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ct,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,A)}else{let k=y.textures;for(let B=0;B<k.length;B++){let ct=k[B],dt=s.convert(ct.format,ct.colorSpace),J=s.convert(ct.type),$=_(ct.internalFormat,dt,J,ct.normalized,ct.colorSpace);Xt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Gt(y),$,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Gt(y),$,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,$,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(A,y,z){let k=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=i.get(y.depthTexture);if(B.__renderTarget=y,(!B.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k){if(B.__webglInit===void 0&&(B.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),B.__webglTexture===void 0){B.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture),ee(e.TEXTURE_CUBE_MAP,y.depthTexture);let ht=s.convert(y.depthTexture.format),Mt=s.convert(y.depthTexture.type),ft;y.depthTexture.format===Aa?ft=e.DEPTH_COMPONENT24:y.depthTexture.format===nr&&(ft=e.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ft,y.width,y.height,0,ht,Mt,null)}}else st(y.depthTexture,0);let ct=B.__webglTexture,dt=Gt(y),J=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,$=y.depthTexture.format===nr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Aa)Xt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,ct,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,$,J,ct,0);else if(y.depthTexture.format===nr)Xt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,ct,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,$,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(A){let y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){let B=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",B)};k.addEventListener("dispose",B),y.__depthDisposeCallback=B}y.__boundDepthTexture=k}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let k=0;k<6;k++)ye(y.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?ye(y.__webglFramebuffer[0],A,0):ye(y.__webglFramebuffer,A,0)}else if(z){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=e.createRenderbuffer(),Ht(y.__webglDepthbuffer[k],A,!1);else{let B=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,ct),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,ct)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Ht(y.__webglDepthbuffer,A,!1);else{let B=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ct),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,ct)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function rt(A,y,z){let k=i.get(A);y!==void 0&&At(k.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&j(A)}function lt(A){let y=A.texture,z=i.get(A),k=i.get(y);A.addEventListener("dispose",x);let B=A.textures,ct=A.isWebGLCubeRenderTarget===!0,dt=B.length>1;if(dt||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=y.version,r.memory.textures++),ct){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[J][$]=e.createFramebuffer()}else z.__webglFramebuffer[J]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(dt)for(let J=0,$=B.length;J<$;J++){let ht=i.get(B[J]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&Xt(A)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<B.length;J++){let $=B[J];z.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let ht=s.convert($.format,$.colorSpace),Mt=s.convert($.type),ft=_($.internalFormat,ht,Mt,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),gt=Gt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,gt,ft,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,z.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Ht(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ct){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),ee(e.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)At(z.__webglFramebuffer[J][$],A,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else At(z.__webglFramebuffer[J],A,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let J=0,$=B.length;J<$;J++){let ht=B[J],Mt=i.get(ht),ft=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,Mt.__webglTexture),ee(ft,ht),At(z.__webglFramebuffer,A,ht,e.COLOR_ATTACHMENT0+J,ft,0),d(ht)&&m(ft)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,k.__webglTexture),ee(J,y),y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)At(z.__webglFramebuffer[$],A,y,e.COLOR_ATTACHMENT0,J,$);else At(z.__webglFramebuffer,A,y,e.COLOR_ATTACHMENT0,J,0);d(y)&&m(J),n.unbindTexture()}A.depthBuffer&&j(A)}function ot(A){let y=A.textures;for(let z=0,k=y.length;z<k;z++){let B=y[z];if(d(B)){let ct=S(A),dt=i.get(B).__webglTexture;n.bindTexture(ct,dt),m(ct),n.unbindTexture()}}}let ut=[],Vt=[];function Bt(A){if(A.samples>0){if(Xt(A)===!1){let y=A.textures,z=A.width,k=A.height,B=e.COLOR_BUFFER_BIT,ct=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(A),J=y.length>1;if(J)for(let ht=0;ht<y.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let $=A.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(B|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(B|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);let Mt=i.get(y[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Mt,0)}e.blitFramebuffer(0,0,z,k,0,0,z,k,B,e.NEAREST),l===!0&&(ut.length=0,Vt.length=0,ut.push(e.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Vt.push(ct),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Vt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ht=0;ht<y.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);let Mt=i.get(y[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Mt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Gt(A){return Math.min(a.maxSamples,A.samples)}function Xt(A){let y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(A){let y=r.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function _e(A,y){let z=A.colorSpace,k=A.format,B=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==eu&&z!==ns&&(ve.getTransfer(z)===Ae?(k!==Bi||B!==si)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",z)),y}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=P,this.setTexture2D=st,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=at,this.rebindTextures=rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function BU(e,t){function n(i,a=ns){let s,r=ve.getTransfer(a);if(i===si)return e.UNSIGNED_BYTE;if(i===zd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Fd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Gv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===kv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hv)return e.BYTE;if(i===Vv)return e.SHORT;if(i===Nl)return e.UNSIGNED_SHORT;if(i===Bd)return e.INT;if(i===ta)return e.UNSIGNED_INT;if(i===ea)return e.FLOAT;if(i===na)return e.HALF_FLOAT;if(i===Xv)return e.ALPHA;if(i===Wv)return e.RGB;if(i===Bi)return e.RGBA;if(i===Aa)return e.DEPTH_COMPONENT;if(i===nr)return e.DEPTH_STENCIL;if(i===qv)return e.RED;if(i===Hd)return e.RED_INTEGER;if(i===ir)return e.RG;if(i===Vd)return e.RG_INTEGER;if(i===Gd)return e.RGBA_INTEGER;if(i===Tu||i===Au||i===wu||i===Cu)if(r===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Au)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Xd||i===Wd||i===qd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===Zd||i===Jd||i===Kd||i===Qd||i===Ru||i===jd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===Zd)return r===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jd)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kd)return s.COMPRESSED_R11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ru)return s.COMPRESSED_RG11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===sp||i===rp||i===op||i===lp||i===cp||i===up||i===hp||i===fp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$d)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ep)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===np)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ip)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ap)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===op)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===up)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fp)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dp||i===pp||i===mp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===dp)return r===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gp||i===vp||i===Nu||i===_p)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===gp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_p)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var zU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,__=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new cu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Mi({vertexShader:zU,fragmentShader:FU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},y_=class extends wa{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,v=null,M=typeof XRWebGLBinding<"u",g=new __,d={},m=n.getContextAttributes(),S=null,_=null,E=[],T=[],C=new mt,x=null,w=null,R=new On;R.viewport=new We;let N=new On;N.viewport=new We;let V=[R,N],F=new Ld,I=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=E[Z];return tt===void 0&&(tt=new dl,E[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=E[Z];return tt===void 0&&(tt=new dl,E[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=E[Z];return tt===void 0&&(tt=new dl,E[Z]=tt),tt.getHandSpace()};function K(Z){let tt=T.indexOf(Z.inputSource);if(tt===-1)return;let _t=E[tt];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||r),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",st);for(let Z=0;Z<E.length;Z++){let tt=T[Z];tt!==null&&(T[Z]=null,E[Z].disconnect(tt))}I=null,P=null,g.reset();for(let Z in d)delete d[Z];if(t.setRenderTarget(S),f=null,u=null,p=null,a=null,_=null,me.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(S=t.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,kt=null,At=null;m.depth&&(At=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=m.stencil?nr:Aa,kt=m.stencil?Dl:ta);let Ht={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ht),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ai(u.textureWidth,u.textureHeight,{format:Bi,type:si,depthTexture:new Zs(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,n,_t),a.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ai(f.framebufferWidth,f.framebufferHeight,{format:Bi,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),me.setContext(a),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(Z){for(let tt=0;tt<Z.removed.length;tt++){let _t=Z.removed[tt],kt=T.indexOf(_t);kt>=0&&(T[kt]=null,E[kt].disconnect(_t))}for(let tt=0;tt<Z.added.length;tt++){let _t=Z.added[tt],kt=T.indexOf(_t);if(kt===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=T.length){T.push(_t),kt=Ht;break}else if(T[Ht]===null){T[Ht]=_t,kt=Ht;break}if(kt===-1)break}let At=E[kt];At&&At.connect(_t)}}let q=new U,nt=new U;function at(Z,tt,_t){q.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(_t.matrixWorld);let kt=q.distanceTo(nt),At=tt.projectionMatrix.elements,Ht=_t.projectionMatrix.elements,ye=At[14]/(At[10]-1),j=At[14]/(At[10]+1),rt=(At[9]+1)/At[5],lt=(At[9]-1)/At[5],ot=(At[8]-1)/At[0],ut=(Ht[8]+1)/Ht[0],Vt=ye*ot,Bt=ye*ut,Gt=kt/(-ot+ut),Xt=Gt*-ot;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xt),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let D=ye+Gt,_e=j+Gt,ne=Vt-Xt,A=Bt+(kt-Xt),y=rt*j/_e*D,z=lt*j/_e*D;Z.projectionMatrix.makePerspective(ne,A,y,z,D,_e),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Lt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let tt=Z.near,_t=Z.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),F.near=N.near=R.near=tt,F.far=N.far=R.far=_t,(I!==F.near||P!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,P=F.far),F.layers.mask=Z.layers.mask|6,R.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;let kt=Z.parent,At=F.cameras;Lt(F,kt);for(let Ht=0;Ht<At.length;Ht++)Lt(At[Ht],kt);At.length===2?at(F,R,N):F.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),St(Z,F,kt)};function St(Z,tt,_t){_t===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=od*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Z){return d[Z]};let ue=null;function ee(Z,tt){if(h=tt.getViewerPose(c||r),v=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let kt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,kt=!0);for(let j=0;j<_t.length;j++){let rt=_t[j],lt=null;if(f!==null)lt=f.getViewport(rt);else{let ut=p.getViewSubImage(u,rt);lt=ut.viewport,j===0&&(t.setRenderTargetTextures(_,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(_))}let ot=V[j];ot===void 0&&(ot=new On,ot.layers.enable(j),ot.viewport=new We,V[j]=ot),ot.matrix.fromArray(rt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(rt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(lt.x,lt.y,lt.width,lt.height),j===0&&(F.matrix.copy(ot.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),kt===!0&&F.cameras.push(ot)}let At=a.enabledFeatures;if(At&&At.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let j=p.getDepthInformation(_t[0]);j&&j.isValid&&j.texture&&g.init(j,a.renderState)}if(At&&At.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let j=0;j<_t.length;j++){let rt=_t[j].camera;if(rt){let lt=d[rt];lt||(lt=new cu,d[rt]=lt);let ot=p.getCameraImage(rt);lt.sourceTexture=ot}}}}for(let _t=0;_t<E.length;_t++){let kt=T[_t],At=E[_t];kt!==null&&At!==void 0&&At.update(kt,tt,c||r)}ue&&ue(Z,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let me=new GE;me.setAnimationLoop(ee),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}},HU=new Oe,ZE=new Qt;ZE.set(-1,0,0,0,1,0,0,0,1);function VU(e,t){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Kv(e)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function a(g,d,m,S,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&f(g,d,_)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,S):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Zn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Zn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=t.get(d),S=m.envMap,_=m.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(HU.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ZE),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,S){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=S*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){let m=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function GU(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let T=E.program;i.uniformBlockBinding(_,T)}function c(_,E){let T=a[_.id];T===void 0&&(g(_),T=h(_),a[_.id]=T,_.addEventListener("dispose",m));let C=E.program;i.updateUBOMapping(_,C);let x=t.render.frame;s[_.id]!==x&&(u(_),s[_.id]=x)}function h(_){let E=p();_.__bindingPointIndex=E;let T=e.createBuffer(),C=_.__size,x=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function p(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let E=a[_.id],T=_.uniforms,C=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,w=T.length;x<w;x++){let R=T[x];if(Array.isArray(R))for(let N=0,V=R.length;N<V;N++)f(R[N],x,N,C);else f(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(_,E,T,C){if(M(_,E,T,C)===!0){let x=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let V=w[N],F=d(V);v(V,_.__data,R),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,_.__data)}}function v(_,E,T){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,T)}function M(_,E,T,C){let x=_.value,w=E+"_"+T;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let R=C[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(_){let E=_.uniforms,T=0,C=16;for(let w=0,R=E.length;w<R;w++){let N=Array.isArray(E[w])?E[w]:[E[w]];for(let V=0,F=N.length;V<F;V++){let I=N[V],P=Array.isArray(I.value)?I.value:[I.value];for(let K=0,Y=P.length;K<Y;K++){let st=P[K],q=d(st),nt=T%C,at=nt%q.boundary,Lt=nt+at;T+=at,Lt!==0&&C-Lt<q.storage&&(T+=C-Lt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=q.storage}}}let x=T%C;return x>0&&(T+=C-x),_.__size=T,_.__cache={},this}function d(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",_),E}function m(_){let E=_.target;E.removeEventListener("dispose",m);let T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(a[E.id]),delete a[E.id],delete s[E.id]}function S(){for(let _ in a)e.deleteBuffer(a[_]);r=[],a={},s={}}return{bind:l,update:c,dispose:S}}var kU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ra=null;function XU(){return Ra===null&&(Ra=new gl(kU,16,16,ir,na),Ra.name="DFG_LUT",Ra.minFilter=un,Ra.magFilter=un,Ra.wrapS=Pi,Ra.wrapT=Pi,Ra.generateMipmaps=!1,Ra.needsUpdate=!0),Ra}var Tp=class{constructor(t={}){let{canvas:n=cE(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=si}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let M=f,g=new Set([Gd,Vd,Hd]),d=new Set([si,ta,Nl,Dl,zd,Fd]),m=new Uint32Array(4),S=new Int32Array(4),_=new U,E=null,T=null,C=[],x=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,V=null,F=null,I=null,P=null;this._outputColorSpace=Cn;let K=0,Y=0,st=null,q=-1,nt=null,at=new We,Lt=new We,St=null,ue=new te(0),ee=0,me=n.width,Z=n.height,tt=1,_t=null,kt=null,At=new We(0,0,me,Z),Ht=new We(0,0,me,Z),ye=!1,j=new vl,rt=!1,lt=!1,ot=new Oe,ut=new U,Vt=new We,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Xt(){return st===null?tt:1}let D=i;function _e(b,L){return n.getContext(b,L)}let ne,A,y,z,k,B,ct,dt,J,$,ht,Mt,ft,gt,Ot,Ft,Jt,O,vt,Q,xt,Et,it;try{let b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",zn,!1),D===null){let L="webgl2";if(D=_e(L,b),D===null)throw _e(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(b){throw n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",zn,!1),Wt("WebGLRenderer: "+b.message),b}function Pt(){ne=new QN(D),ne.init(),xt=new BU(D,ne),A=new VN(D,ne,t,xt),y=new OU(D,ne),A.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),F=D.createFramebuffer(),I=D.createFramebuffer(),P=D.createFramebuffer(),z=new tD(D),k=new SU,B=new PU(D,ne,y,k,A,xt,z),ct=new KN(R),dt=new n3(D),Et=new FN(D,dt),J=new jN(D,dt,z,Et),$=new nD(D,J,dt,Et,z),O=new eD(D,A,B),Ot=new GN(k),ht=new xU(R,ct,ne,A,Et,Ot),Mt=new VU(R,k),ft=new bU,gt=new RU(ne),Jt=new zN(R,ct,y,$,v,l),Ft=new IU(R,$,A),it=new GU(D,z,A,y),vt=new HN(D,ne,z),Q=new $N(D,ne,z),z.programs=ht.programs,R.capabilities=A,R.extensions=ne,R.properties=k,R.renderLists=ft,R.shadowMap=Ft,R.state=y,R.info=z}M!==si&&(w=new aD(M,n.width,n.height,o,a,s));let Rt=new y_(R,D);this.xr=Rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(me,Z,!1))},this.getSize=function(b){return b.set(me,Z)},this.setSize=function(b,L,X=!0){if(Rt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=b,Z=L,n.width=Math.floor(b*tt),n.height=Math.floor(L*tt),X===!0&&(n.style.width=b+"px",n.style.height=L+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(me*tt,Z*tt).floor()},this.setDrawingBufferSize=function(b,L,X){me=b,Z=L,tt=X,n.width=Math.floor(b*X),n.height=Math.floor(L*X),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(M===si){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(at)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,L,X,H){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,L,X,H),y.viewport(at.copy(At).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,L,X,H){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,L,X,H),y.scissor(Lt.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){y.setScissorTest(ye=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,X=!0){let H=0;if(b){let G=!1;if(st!==null){let bt=st.texture.format;G=g.has(bt)}if(G){let bt=st.texture.type,wt=d.has(bt),yt=Jt.getClearColor(),Nt=Jt.getClearAlpha(),It=yt.r,$t=yt.g,ae=yt.b;wt?(m[0]=It,m[1]=$t,m[2]=ae,m[3]=Nt,D.clearBufferuiv(D.COLOR,0,m)):(S[0]=It,S[1]=$t,S[2]=ae,S[3]=Nt,D.clearBufferiv(D.COLOR,0,S))}else H|=D.COLOR_BUFFER_BIT}L&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),V=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",zn,!1),Jt.dispose(),ft.dispose(),gt.dispose(),k.dispose(),ct.dispose(),$.dispose(),Et.dispose(),it.dispose(),ht.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Fl),Rt.removeEventListener("sessionend",ss),zi.stop()};function Se(b){b.preventDefault(),Zv("WebGLRenderer: Context Lost."),N=!0}function fe(){Zv("WebGLRenderer: Context Restored."),N=!1;let b=z.autoReset,L=Ft.enabled,X=Ft.autoUpdate,H=Ft.needsUpdate,G=Ft.type;Pt(),z.autoReset=b,Ft.enabled=L,Ft.autoUpdate=X,Ft.needsUpdate=H,Ft.type=G}function zn(b){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dn(b){let L=b.target;L.removeEventListener("dispose",dn),Bu(L)}function Bu(b){Ua(b),k.remove(b)}function Ua(b){let L=k.get(b).programs;L!==void 0&&(L.forEach(function(X){ht.releaseProgram(X)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,X,H,G,bt){L===null&&(L=Bt);let wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=Hu(b,L,X,H,G);y.setMaterial(H,wt);let Nt=X.index,It=1;if(H.wireframe===!0){if(Nt=J.getWireframeAttribute(X),Nt===void 0)return;It=2}let $t=X.drawRange,ae=X.attributes.position,Dt=$t.start*It,W=($t.start+$t.count)*It;bt!==null&&(Dt=Math.max(Dt,bt.start*It),W=Math.min(W,(bt.start+bt.count)*It)),Nt!==null?(Dt=Math.max(Dt,0),W=Math.min(W,Nt.count)):ae!=null&&(Dt=Math.max(Dt,0),W=Math.min(W,ae.count));let Ut=W-Dt;if(Ut<0||Ut===1/0)return;Et.setup(G,H,yt,X,Nt);let zt,Ct=vt;if(Nt!==null&&(zt=dt.get(Nt),Ct=Q,Ct.setIndex(zt)),G.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*Xt()),Ct.setMode(D.LINES)):Ct.setMode(D.TRIANGLES);else if(G.isLine){let oe=H.linewidth;oe===void 0&&(oe=1),y.setLineWidth(oe*Xt()),G.isLineSegments?Ct.setMode(D.LINES):G.isLineLoop?Ct.setMode(D.LINE_LOOP):Ct.setMode(D.LINE_STRIP)}else G.isPoints?Ct.setMode(D.POINTS):G.isSprite&&Ct.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let oe=G._multiDrawStarts,pt=G._multiDrawCounts,He=G._multiDrawCount,se=Nt?dt.get(Nt).bytesPerElement:1,tn=k.get(H).currentProgram.getUniforms();for(let Rn=0;Rn<He;Rn++)tn.setValue(D,"_gl_DrawID",Rn),Ct.render(oe[Rn]/se,pt[Rn])}else if(G.isInstancedMesh)Ct.renderInstances(Dt,Ut,G.count);else if(X.isInstancedBufferGeometry){let oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pt=Math.min(X.instanceCount,oe);Ct.renderInstances(Dt,Ut,pt)}else Ct.render(Dt,Ut)};function Xr(b,L,X,H){V!==null&&b.isNodeMaterial&&V.setObject(H,b),rt===!0&&Ot.setState(b,X,!1),b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Zn,b.needsUpdate=!0,qr(b,L,H),b.side=tr,b.needsUpdate=!0,qr(b,L,H),b.side=Ei):qr(b,L,H)}this.compile=function(b,L,X=null){X===null&&(X=b),V!==null&&V.renderStart(b,L,X),T=gt.get(X),T.init(L),x.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),lt=this.localClippingEnabled,rt=Ot.init(this.clippingPlanes,lt),rt===!0&&Ot.setGlobalState(this.clippingPlanes,L),V!==null&&Ft.render(T.state.shadowsArray,X,L);let H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let wt=0;wt<bt.length;wt++){let yt=bt[wt];Xr(yt,X,L,G),H.add(yt)}else Xr(bt,X,L,G),H.add(bt)}),T=x.pop(),V!==null&&V.renderEnd(),H},this.compileAsync=function(b,L,X=null){let H=this.compile(b,L,X);return new Promise(G=>{function bt(){if(H.forEach(function(wt){let Nt=k.get(wt).currentProgram;(Nt===void 0||Nt.isReady())&&H.delete(wt)}),H.size===0){G(b);return}setTimeout(bt,10)}ne.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Wr=null;function Up(b){Wr&&Wr(b)}function Fl(){zi.stop()}function ss(){zi.start()}let zi=new GE;zi.setAnimationLoop(Up),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(b){Wr=b,Rt.setAnimationLoop(b),b===null?zi.stop():zi.start()},Rt.addEventListener("sessionstart",Fl),Rt.addEventListener("sessionend",ss),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;V!==null&&V.renderStart(b,L);let X=Rt.enabled===!0&&Rt.isPresenting===!0,H=w!==null&&(st===null||X)&&w.begin(R,st);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(L),L=Rt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,L,st),T=gt.get(b,x.length),T.init(L),T.state.textureUnits=B.getTextureUnits(),x.push(T),ot.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(ot,Qi,L.reversedDepth),lt=this.localClippingEnabled,rt=Ot.init(this.clippingPlanes,lt),E=ft.get(b,C.length),E.init(),C.push(E),Rt.enabled===!0&&Rt.isPresenting===!0){let wt=R.xr.getDepthSensingMesh();wt!==null&&Hl(wt,L,-1/0,R.sortObjects)}Hl(b,L,0,R.sortObjects),E.finish(),V!==null&&V.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(_t,kt),Gt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Gt&&Jt.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ot.beginShadows();let G=T.state.shadowsArray;if(Ft.render(G,b,L),rt===!0&&Ot.endShadows(),(H&&w.hasRenderPass())===!1){let wt=E.opaque,yt=E.transmissive;if(T.setupLights(),L.isArrayCamera){let Nt=L.cameras;if(yt.length>0)for(let It=0,$t=Nt.length;It<$t;It++){let ae=Nt[It];zu(wt,yt,b,ae)}Gt&&Jt.render(b);for(let It=0,$t=Nt.length;It<$t;It++){let ae=Nt[It];ia(E,b,ae,ae.viewport)}}else yt.length>0&&zu(wt,yt,b,L),Gt&&Jt.render(b),ia(E,b,L)}st!==null&&Y===0&&(B.updateMultisampleRenderTarget(st),B.updateRenderTargetMipmap(st)),H&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,L),Et.resetDefaultState(),q=-1,nt=null,x.pop(),x.length>0?(T=x[x.length-1],B.setTextureUnits(T.state.textureUnits),rt===!0&&Ot.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,V!==null&&V.renderEnd()};function Hl(b,L,X,H){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(j)){H&&Vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);let wt=$.update(b),yt=b.material;yt.visible&&E.push(b,wt,yt,X,Vt.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(j))){let wt=$.update(b),yt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Vt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Vt.copy(wt.boundingSphere.center)),Vt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(yt)){let Nt=wt.groups;for(let It=0,$t=Nt.length;It<$t;It++){let ae=Nt[It],Dt=yt[ae.materialIndex];Dt&&Dt.visible&&E.push(b,wt,Dt,X,Vt.z,ae,L)}}else yt.visible&&E.push(b,wt,yt,X,Vt.z,null,L)}}let bt=b.children;for(let wt=0,yt=bt.length;wt<yt;wt++)Hl(bt[wt],L,X,H)}function ia(b,L,X,H){let{opaque:G,transmissive:bt,transparent:wt}=b;T.setupLightsView(X),rt===!0&&Ot.setGlobalState(R.clippingPlanes,X),H&&y.viewport(at.copy(H)),G.length>0&&rs(G,L,X),bt.length>0&&rs(bt,L,X),wt.length>0&&rs(wt,L,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function zu(b,L,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Dt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:Dt?na:si,minFilter:$i,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let bt=T.state.transmissionRenderTarget[H.id],wt=H.viewport||at;bt.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),Nt=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ue),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),Gt&&Jt.render(X);let $t=R.toneMapping;R.toneMapping=ji;let ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),rt===!0&&Ot.setGlobalState(R.clippingPlanes,H),rs(b,X,H),B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let W=0,Ut=L.length;W<Ut;W++){let zt=L[W],{object:Ct,geometry:oe,material:pt,group:He}=zt;if(pt.side===Ei&&Ct.layers.test(H.layers)){let se=pt.side;pt.side=Zn,pt.needsUpdate=!0,os(Ct,X,H,oe,pt,He),pt.side=se,pt.needsUpdate=!0,Dt=!0}}Dt===!0&&(B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt))}R.setRenderTarget(yt,Nt,It),R.setClearColor(ue,ee),ae!==void 0&&(H.viewport=ae),R.toneMapping=$t}function rs(b,L,X){let H=L.isScene===!0?L.overrideMaterial:null;for(let G=0,bt=b.length;G<bt;G++){let wt=b[G],{object:yt,geometry:Nt,group:It}=wt,$t=wt.material;$t.allowOverride===!0&&H!==null&&($t=H),yt.layers.test(X.layers)&&os(yt,L,X,Nt,$t,It)}}function os(b,L,X,H,G,bt){V!==null&&G.isNodeMaterial&&V.setObject(b,G),b.onBeforeRender(R,L,X,H,G,bt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(R,L,X,H,b,bt),G.transparent===!0&&G.side===Ei&&G.forceSinglePass===!1?(G.side=Zn,G.needsUpdate=!0,R.renderBufferDirect(X,L,H,G,b,bt),G.side=tr,G.needsUpdate=!0,R.renderBufferDirect(X,L,H,G,b,bt),G.side=Ei):R.renderBufferDirect(X,L,H,G,b,bt),b.onAfterRender(R,L,X,H,G,bt)}function qr(b,L,X){L.isScene!==!0&&(L=Bt);let H=k.get(b),G=T.state.lights,bt=T.state.shadowsArray,wt=G.state.version,yt=ht.getParameters(b,G.state,bt,L,X,T.state.lightProbeGridArray),Nt=ht.getProgramCacheKey(yt),It=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;let $t=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=ct.get(b.envMap||H.environment,$t),H.envMapRotation=H.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",dn),It=new Map,H.programs=It);let ae=It.get(Nt);if(ae!==void 0){if(H.currentProgram===ae&&H.lightsStateVersion===wt)return Vl(b,yt),ae}else yt.uniforms=ht.getUniforms(b),V!==null&&b.isNodeMaterial&&V.build(b,X,yt),b.onBeforeCompile(yt,R),ae=ht.acquireProgram(yt,Nt),It.set(Nt,ae),H.uniforms=yt.uniforms;let Dt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),Vl(b,yt),H.needsLights=Gl(b),H.lightsStateVersion=wt,H.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.sunLights.value=G.state.sun,Dt.sunLightShadows.value=G.state.sunShadow,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.sunShadowMatrix.value=G.state.sunShadowMatrix,Dt.sunShadowCascade.value=G.state.sunShadowCascade,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=ae,H.uniformsList=null,ae}function Fu(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=Ol.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Vl(b,L){let X=k.get(b);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function oi(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(L.matrixWorld);for(let X=0,H=b.length;X<H;X++){let G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function Hu(b,L,X,H,G){L.isScene!==!0&&(L=Bt),B.resetTextureUnits();let bt=L.fog,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,yt=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ve.workingColorSpace,Nt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=ct.get(H.envMap||wt,Nt),$t=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ae=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!X.morphAttributes.position,W=!!X.morphAttributes.normal,Ut=!!X.morphAttributes.color,zt=ji;H.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(zt=R.toneMapping);let Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Ct!==void 0?Ct.length:0,pt=k.get(H),He=T.state.lights;if(rt===!0&&(lt===!0||b!==nt)){let le=b===nt&&H.id===q;Ot.setState(H,b,le)}let se=!1;H.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==He.state.version||pt.outputColorSpace!==yt||G.isBatchedMesh&&pt.batching===!1||!G.isBatchedMesh&&pt.batching===!0||G.isBatchedMesh&&pt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&pt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&pt.instancing===!1||!G.isInstancedMesh&&pt.instancing===!0||G.isSkinnedMesh&&pt.skinning===!1||!G.isSkinnedMesh&&pt.skinning===!0||G.isInstancedMesh&&pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&pt.instancingMorph===!1&&G.morphTexture!==null||pt.envMap!==It||H.fog===!0&&pt.fog!==bt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Ot.numPlanes||pt.numIntersection!==Ot.numIntersection)||pt.vertexAlphas!==$t||pt.vertexTangents!==ae||pt.morphTargets!==Dt||pt.morphNormals!==W||pt.morphColors!==Ut||pt.toneMapping!==zt||pt.morphTargetsCount!==oe||!!pt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,pt.__version=H.version);let tn=pt.currentProgram;se===!0&&(tn=qr(H,L,G),V&&H.isNodeMaterial&&V.onUpdateProgram(H,tn,pt));let Rn=!1,Ve=!1,Fi=!1,jt=tn.getUniforms(),we=pt.uniforms;if(y.useProgram(tn.program)&&(Rn=!0,Ve=!0,Fi=!0),H.id!==q&&(q=H.id,Ve=!0),pt.needsLights){let le=oi(T.state.lightProbeGridArray,G);pt.lightProbeGrid!==le&&(pt.lightProbeGrid=le,Ve=!0)}if(Rn||nt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),jt.setValue(D,"projectionMatrix",b.projectionMatrix),jt.setValue(D,"viewMatrix",b.matrixWorldInverse);let xn=jt.map.cameraPosition;xn!==void 0&&xn.setValue(D,ut.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&jt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&jt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),nt!==b&&(nt=b,Ve=!0,Fi=!0)}if(pt.needsLights&&(He.state.sunShadowMap.length>0&&jt.setValue(D,"sunShadowMap",He.state.sunShadowMap,B),He.state.directionalShadowMap.length>0&&jt.setValue(D,"directionalShadowMap",He.state.directionalShadowMap,B),He.state.spotShadowMap.length>0&&jt.setValue(D,"spotShadowMap",He.state.spotShadowMap,B),He.state.pointShadowMap.length>0&&jt.setValue(D,"pointShadowMap",He.state.pointShadowMap,B)),G.isSkinnedMesh){jt.setOptional(D,G,"bindMatrix"),jt.setOptional(D,G,"bindMatrixInverse");let le=G.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),jt.setValue(D,"boneTexture",le.boneTexture,B))}G.isBatchedMesh&&(jt.setOptional(D,G,"batchingTexture"),jt.setValue(D,"batchingTexture",G._matricesTexture,B),jt.setOptional(D,G,"batchingIdTexture"),jt.setValue(D,"batchingIdTexture",G._indirectTexture,B),jt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&jt.setValue(D,"batchingColorTexture",G._colorsTexture,B));let Hi=X.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&O.update(G,X,tn),(Ve||pt.receiveShadow!==G.receiveShadow)&&(pt.receiveShadow=G.receiveShadow,jt.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(we.envMapIntensity.value=L.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=XU()),Ve){if(jt.setValue(D,"toneMappingExposure",R.toneMappingExposure),pt.needsLights&&Vu(we,Fi),bt&&H.fog===!0&&Mt.refreshFogUniforms(we,bt),Mt.refreshMaterialUniforms(we,H,tt,Z,T.state.transmissionRenderTarget[b.id]),pt.needsLights&&pt.lightProbeGrid){let le=pt.lightProbeGrid;we.probesSH.value=le.texture,we.probesMin.value.copy(le.boundingBox.min),we.probesMax.value.copy(le.boundingBox.max),we.probesResolution.value.copy(le.resolution)}Ol.upload(D,Fu(pt),we,B)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ol.upload(D,Fu(pt),we,B),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&jt.setValue(D,"center",G.center),jt.setValue(D,"modelViewMatrix",G.modelViewMatrix),jt.setValue(D,"normalMatrix",G.normalMatrix),jt.setValue(D,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let le=H.uniformsGroups;for(let xn=0,Ee=le.length;xn<Ee;xn++){let aa=le[xn];it.update(aa,tn),it.bind(aa,tn)}}return tn}function Vu(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Gl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(b,L,X){let H=k.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=L,k.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let X=k.get(b);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,X=0){st=b,K=L,Y=X;let H=null,G=!1,bt=!1;if(b){let yt=k.get(b);if(yt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,yt.__webglFramebuffer),at.copy(b.viewport),Lt.copy(b.scissor),St=b.scissorTest,y.viewport(at),y.scissor(Lt),y.setScissorTest(St),q=-1;return}else if(yt.__webglFramebuffer===void 0)B.setupRenderTarget(b);else if(yt.__hasExternalTextures)B.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let $t=b.depthTexture;if(yt.__boundDepthTexture!==$t){if($t!==null&&k.has($t)&&(b.width!==$t.image.width||b.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(b)}}let Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(bt=!0);let It=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[L])?H=It[L][X]:H=It[L],G=!0):b.samples>0&&B.useMultisampledRTT(b)===!1?H=k.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[X]:H=It,at.copy(b.viewport),Lt.copy(b.scissor),St=b.scissorTest}else at.copy(At).multiplyScalar(tt).floor(),Lt.copy(Ht).multiplyScalar(tt).floor(),St=ye;if(X!==0&&(H=F),y.bindFramebuffer(D.FRAMEBUFFER,H)&&y.drawBuffers(b,H),y.viewport(at),y.scissor(Lt),y.setScissorTest(St),G){let yt=k.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,yt.__webglTexture,X)}else if(bt){let yt=L;for(let Nt=0;Nt<b.textures.length;Nt++){let It=k.get(b.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,It.__webglTexture,X,yt)}}else if(b!==null&&X!==0){let yt=k.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,X)}q=-1};function kl(b){let L=k.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=A.textureFormatReadable(b.format),L.__typeReadable=A.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,X,H,G,bt,wt,yt=0){if(!(b&&b.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){y.bindFramebuffer(D.FRAMEBUFFER,Nt);try{let It=b.textures[yt],$t=It.format,ae=It.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt);let Dt=kl(It);if(Dt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-H&&X>=0&&X<=b.height-G&&D.readPixels(L,X,H,G,xt.convert($t),xt.convert(ae),bt)}finally{let It=st!==null?k.get(st).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,L,X,H,G,bt,wt,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt)if(L>=0&&L<=b.width-H&&X>=0&&X<=b.height-G){y.bindFramebuffer(D.FRAMEBUFFER,Nt);let It=b.textures[yt],$t=It.format,ae=It.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt);let Dt=kl(It);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let W=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,W),D.bufferData(D.PIXEL_PACK_BUFFER,bt.byteLength,D.STREAM_READ),D.readPixels(L,X,H,G,xt.convert($t),xt.convert(ae),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ut=st!==null?k.get(st).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Ut);let zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hE(D,zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,W),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,bt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(W),D.deleteSync(zt),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,X=0){let H=Math.pow(2,-X),G=Math.floor(b.image.width*H),bt=Math.floor(b.image.height*H),wt=L!==null?L.x:0,yt=L!==null?L.y:0;B.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,wt,yt,G,bt),y.unbindTexture()},this.copyTextureToTexture=function(b,L,X=null,H=null,G=0,bt=0){let wt,yt,Nt,It,$t,ae,Dt,W,Ut,zt=b.isCompressedTexture?b.mipmaps[bt]:b.image;if(X!==null)wt=X.max.x-X.min.x,yt=X.max.y-X.min.y,Nt=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,$t=X.min.y,ae=X.isBox3?X.min.z:0;else{let we=Math.pow(2,-G);wt=Math.floor(zt.width*we),yt=Math.floor(zt.height*we),b.isDataArrayTexture?Nt=zt.depth:b.isData3DTexture?Nt=Math.floor(zt.depth*we):Nt=1,It=0,$t=0,ae=0}H!==null?(Dt=H.x,W=H.y,Ut=H.z):(Dt=0,W=0,Ut=0);let Ct=xt.convert(L.format),oe=xt.convert(L.type),pt;L.isData3DTexture?(B.setTexture3D(L,0),pt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(B.setTexture2DArray(L,0),pt=D.TEXTURE_2D_ARRAY):(B.setTexture2D(L,0),pt=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let He=y.getParameter(D.UNPACK_ROW_LENGTH),se=y.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=y.getParameter(D.UNPACK_SKIP_PIXELS),Rn=y.getParameter(D.UNPACK_SKIP_ROWS),Ve=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,zt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,It),y.pixelStorei(D.UNPACK_SKIP_ROWS,$t),y.pixelStorei(D.UNPACK_SKIP_IMAGES,ae);let Fi=b.isDataArrayTexture||b.isData3DTexture,jt=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let we=k.get(b),Hi=k.get(L),le=k.get(we.__renderTarget),xn=k.get(Hi.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,le.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Ee=0;Ee<Nt;Ee++)Fi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(b).__webglTexture,G,ae+Ee),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(L).__webglTexture,bt,Ut+Ee)),D.blitFramebuffer(It,$t,wt,yt,Dt,W,wt,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||k.has(b)){let we=k.get(b),Hi=k.get(L);y.bindFramebuffer(D.READ_FRAMEBUFFER,I),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,P);for(let le=0;le<Nt;le++)Fi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,G,ae+le):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,G),jt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hi.__webglTexture,bt,Ut+le):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hi.__webglTexture,bt),G!==0?D.blitFramebuffer(It,$t,wt,yt,Dt,W,wt,yt,D.COLOR_BUFFER_BIT,D.NEAREST):jt?D.copyTexSubImage3D(pt,bt,Dt,W,Ut+le,It,$t,wt,yt):D.copyTexSubImage2D(pt,bt,Dt,W,It,$t,wt,yt);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else jt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(pt,bt,Dt,W,Ut,wt,yt,Nt,Ct,oe,zt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,bt,Dt,W,Ut,wt,yt,Nt,Ct,zt.data):D.texSubImage3D(pt,bt,Dt,W,Ut,wt,yt,Nt,Ct,oe,zt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,bt,Dt,W,wt,yt,Ct,oe,zt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,bt,Dt,W,zt.width,zt.height,Ct,zt.data):D.texSubImage2D(D.TEXTURE_2D,bt,Dt,W,wt,yt,Ct,oe,zt);y.pixelStorei(D.UNPACK_ROW_LENGTH,He),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se),y.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),y.pixelStorei(D.UNPACK_SKIP_ROWS,Rn),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),bt===0&&L.generateMipmaps&&D.generateMipmap(pt),y.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&B.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?B.setTextureCube(b,0):b.isData3DTexture?B.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?B.setTexture2DArray(b,0):B.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){K=0,Y=0,st=null,y.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),n.unpackColorSpace=ve._getUnpackColorSpace()}};var fT=ra(Gr());var jE={portrait:[1.6,2.25],landscape:[2.25,1.6]},ZU={left:.27,center:.5,right:.73},Pu=.018,Jn=.007,Ke=4,$E=1/.05,JU=1/960,KU=2,is=72,tT=24,x_=.36,rT=.095,QU=.0135,Rp=.036,Ou=.15,S_=1296,eT={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Np=[0,.07,.93,1],jU=[-.95,-.28,.28,.95],$U=9,tL=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,eL=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,nL=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,iL=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,nT={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},as=(e,t,n)=>Math.min(n,Math.max(t,e)),Iu=(e,t,n)=>e+(t-e)*n,M_=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let s=parseInt(i.slice(1),16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}let a=i.match(/[\d.]+/g);return!a||a.length<3?t:[Number(a[0])/255,Number(a[1])/255,Number(a[2])/255]}catch{return t}},aL=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Dp=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,oT=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},T_=(e,t,n,i,a,s)=>{let r=Math.max(0,Math.min(s,i/2,a/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+a-r),e.bezierCurveTo(t+i,n+a-o,t+i-o,n+a,t+i-r,n+a),e.lineTo(t+r,n+a),e.bezierCurveTo(t+o,n+a,t,n+a-o,t,n+a-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},b_=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(a=>{let s=new Image;s.crossOrigin="anonymous",s.decoding="async",s.onload=()=>a(s),s.onerror=()=>a(null),s.src=t});return e.set(t,i),i},iT=(e,t)=>{let[n,i]=jE[e]||jE.portrait,a=Iu(.03,Math.min(n,i)*.2,as(t,0,1)),s={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:a,slot:s,ringY:r,hangY:r+rT}},sL=e=>{let{width:t,height:n,radius:i,slot:a}=e,s=new Js;T_(s,-t/2+Jn,-n/2+Jn,t-Jn*2,n-Jn*2,Math.max(i-Jn,.005));let r=new Or;T_(r,-a.width/2-Jn,a.y-a.height/2-Jn,a.width+Jn*2,a.height+Jn*2,a.height/2+Jn),s.holes.push(r);let o=new Ml(s,{depth:Pu,bevelEnabled:!0,bevelThickness:Jn,bevelSize:Jn,bevelSegments:5,curveSegments:24});o.translate(0,0,-Pu/2);let l=new vu(s,24),c=l.getAttribute("position"),h=l.getAttribute("uv");for(let p=0;p<c.count;p++)h.setXY(p,(c.getX(p)+t/2)/t,(c.getY(p)+n/2)/n);return h.needsUpdate=!0,{body:o,face:l}},aT=e=>{let t=new Js,n=e*1.16;T_(t,-n/2+.014,-Ou/2+.014,n-.028,Ou-.028,.024);let i=new Ml(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},rL=e=>{let t=Np.length,n=new Yn;n.setAttribute("position",new Pn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new Pn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new Pn(new Float32Array(e*t*2),2));let i=[];for(let a=0;a<e-1;a++)for(let s=0;s<t-1;s++){let r=a*t+s;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},oL=e=>{let t=new pl;t.background=new te(.035,.035,.04);let n=new Br(1,1),i=[],a=(o,l,c,h=0)=>{let p=new Ys({color:new te(o,o,o),side:Ei});i.push(p);let u=new je(n,p);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(h),t.add(u)};a(2.6,[0,4.5,8],[9,4]),a(6,[-5.5,.5,7],[.9,14]),a(4,[5,-.5,8],[.6,14]),a(3.5,[0,-1,9],[24,.35],Math.PI/3),a(2.5,[1,2.5,9],[24,.2],Math.PI/3),a(1.4,[0,6,-6],[12,4]),a(.5,[0,-7,1],[16,6]),a(.9,[8,0,-2],[4,10]);let s=new Pl(e),r=s.fromScene(t,.035);return s.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},E_=(e,t)=>{let n=new Ir(e);return n.colorSpace=Cn,n.anisotropy=t,n},lL=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new Ir(t);let i=oT(7),a=Float32Array.from({length:16384},()=>i()),s=(l,c)=>{let h=0;for(let p=-1;p<=1;p++)for(let u=-1;u<=1;u++)h+=a[(c+p+128)%128*128+(l+u+128)%128];return h/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=s((c-1+128)%128,l)-s((c+1)%128,l),p=s(c,(l-1+128)%128)-s(c,(l+1)%128),u=Math.hypot(h,p,1),f=(l*128+c)*4;r.data[f]=(h/u*.5+.5)*255,r.data[f+1]=(p/u*.5+.5)*255,r.data[f+2]=(1/u*.5+.5)*255,r.data[f+3]=255}n.putImageData(r,0,0);let o=new Ir(t);return o.wrapS=Ta,o.wrapT=Ta,o.repeat.set(5,7),o},cL=()=>{let n=oT(19),i=Float32Array.from({length:16384},()=>n()),a=l=>Math.sqrt(Math.max(0,1-4*l*l)),s=(l,c)=>{let h=(l%128+128)%128,p=(c%128+128)%128,u=h/128*8,f=p/128*8,v=Math.floor(u),M=Math.floor(f),g=u-v-.5,d=f-M-.5,m=(v+M)%2===0,S=a(g)*(.55+.45*Math.cos(d*Math.PI*(m?1:.6))),_=a(d)*(.55+.45*Math.cos(g*Math.PI*(m?.6:1)));return(m?Math.max(S,_*.7):Math.max(_,S*.7))+i[p*128+h]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=(s(c-1,l)-s(c+1,l))*1.6,p=(s(c,l-1)-s(c,l+1))*1.6,u=Math.hypot(h,p,1),f=(l*128+c)*4;r[f]=(h/u*.5+.5)*255,r[f+1]=(p/u*.5+.5)*255,r[f+2]=(1/u*.5+.5)*255,r[f+3]=255}let o=new gl(r,128,128);return o.wrapS=Ta,o.wrapT=Ta,o.magFilter=un,o.minFilter=$i,o.generateMipmaps=!0,o.needsUpdate=!0,o},uL=(e,t,n,i,a)=>{let s=(a==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*s,o=t.height*s;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},sT=(e,t,n,i)=>{let a=e.getContext("2d");a&&(a.fillStyle=Dp(n),a.fillRect(0,0,e.width,e.height),t&&uL(a,t,e.width,e.height,i))},hL=(e,t,n)=>{let a=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=a;let s=e.getContext("2d");if(!s)return a/192;if(s.fillStyle=Dp(n),s.fillRect(0,0,192,a),t)return s.save(),s.translate(192,0),s.rotate(Math.PI/2),s.drawImage(t,0,0,a,192),s.restore(),a/192;let r=aL(n)>.5?[0,0,0]:[1,1,1];s.fillStyle=Dp(r,.05);for(let o=0;o<a;o+=4)s.fillRect(0,o,192,1);s.fillStyle=Dp(r,.2);for(let o=0;o<a;o+=14)s.fillRect(192*.075,o,2,8),s.fillRect(192*.925-2,o,2,8);return a/192},fL=()=>{let e=()=>Array.from({length:Ke+1},()=>new U);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(Ke),impulses:new Float64Array(Ke),rest:1,anchor:new U,body:{position:new U,previous:new U,velocity:new U,quaternion:new Xn,previousQuaternion:new Xn,angular:new U,mass:1,inverseInertia:new U(1,1,1),hang:new U},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},De={a:new U,b:new U,c:new U,d:new U,e:new U,f:new U,g:new U,pin:new U,q:new Xn,r:new Xn},A_=(e,t,n)=>(De.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(De.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),lT=(e,t)=>{let{x:n,y:i,z:a,w:s}=e;e.x+=.5*(t.x*s+t.y*a-t.z*i),e.y+=.5*(t.y*s+t.z*n-t.x*a),e.z+=.5*(t.z*s+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*a),e.normalize()},cT=(e,t,n)=>{let i=De.c.crossVectors(t,n);return 1/e.mass+i.dot(A_(e,i,De.d))},uT=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),lT(e.quaternion,A_(e,De.e.crossVectors(t,n),De.f))},dL=(e,t,n,i)=>{let{nodes:a,body:s}=e,r=a[t],o=t===0?0:$E,l=t===Ke-1,c=De.g,h=a[t+1];l&&(c.copy(s.hang).applyQuaternion(s.quaternion),h=De.b.copy(s.position).add(c));let p=De.a.subVectors(h,r),u=p.length(),f=u-e.rest;if(f<=0||u<1e-9)return;let v=p.divideScalar(u),M=l?cT(s,c,v):$E,g=(u-e.lengths[t])/n,m=(i.hold*Math.tanh(i.stiffness*f/i.hold)+i.spring*f+i.bandDamping*Math.max(0,g))*n*n-e.impulses[t];if(m<=0)return;let S=Math.min(f/(o+M),m);e.impulses[t]+=S,o&&r.addScaledVector(v,S*o),l?uT(s,c,v.multiplyScalar(-S)):h.addScaledVector(v,-S*M)},pL=(e,t,n)=>{let i=De.g.copy(t.local).applyQuaternion(e.quaternion),a=De.a.copy(n).sub(e.position).sub(i),s=a.length();if(s<1e-9)return;let r=a.divideScalar(s),o=s/cT(e,i,r);uT(e,i,r.multiplyScalar(o))},zl=(e,t,n)=>{let{nodes:i,previous:a,velocities:s,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=Ke;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new U(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=De.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[Ke]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=Ke;c++)a[c].copy(i[c]),s[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},mL=(e,t,n)=>{e.rest=n/Ke;let{width:i,height:a}=t,s=e.body,r=Pu+Jn*2;s.mass=1,s.inverseInertia.set(12/(a*a+r*r),12/(i*i+r*r),12/(i*i+a*a)),s.hang.set(0,t.hangY,0)},gL=(e,t,n,i)=>{let a=Math.max(1,Math.ceil(t/JU-1e-6)),s=t/a,{nodes:r,previous:o,velocities:l,body:c}=e,h=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,p=n.breeze*Math.sin(i*.37+.6)*2,u=e.grab,f=De.pin,v=Math.exp(-n.nodeDrag*s),M=Math.exp(-n.linearDrag*s),g=Math.exp(-n.angularDrag*s);for(let m=0;m<a;m++){for(let R=1;R<Ke;R++){let N=l[R];N.y-=n.gravity*s,N.x+=(h+n.gravityX)*s,N.z+=p*s,o[R].copy(r[R]),r[R].addScaledVector(N,s)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let S=c.quaternion;if(u){let R=De.q.copy(u.rotation).multiply(De.r.copy(S).invert());R.w<0&&R.set(-R.x,-R.y,-R.z,-R.w);let N=De.a.set(R.x,R.y,R.z).multiplyScalar(2*n.grip);N.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(A_(c,N,De.b),s)}let _=De.a.set(0,1,0).applyQuaternion(S),E=De.b.set(-_.x*_.z,-_.y*_.z,1-_.z*_.z);if(E.lengthSq()>.001){let R=De.d.set(0,0,1).applyQuaternion(S),N=Math.atan2(De.e.crossVectors(E,R).dot(_),E.dot(R)),V=N-e.twistRaw;V>Math.PI?V-=Math.PI*2:V<-Math.PI&&(V+=Math.PI*2),e.twist+=V,e.twistRaw=N}if(!u){let R=c.angular.dot(_);c.angular.addScaledVector(_,(n.twist*(e.turn-e.twist)-n.twistDamping*R)*s)}c.velocity.y-=n.gravity*s,c.velocity.x+=(h*.35+n.gravityX)*s,c.velocity.z+=p*.35*s,c.position.addScaledVector(c.velocity,s),lT(c.quaternion,De.f.copy(c.angular).multiplyScalar(s)),e.impulses.fill(0),u&&f.lerpVectors(u.from,u.target,(m+1)/a);for(let R=0;R<KU;R++){for(let N=0;N<Ke;N++)dL(e,N,s,n);u&&pL(c,u,f)}for(let R=1;R<Ke;R++){let N=l[R].subVectors(r[R],o[R]).divideScalar(s).multiplyScalar(v);N.multiplyScalar(1/(1+n.nodeAir*N.length()*s))}c.velocity.subVectors(c.position,c.previous).divideScalar(s);let T=De.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(T.x,T.y,T.z).multiplyScalar(2/s*(T.w<0?-1:1));let C=De.a.set(0,0,1).applyQuaternion(c.quaternion),x=c.velocity.dot(C),w=De.b.copy(c.velocity).addScaledVector(C,-x);w.multiplyScalar(1/(1+n.air*w.length()*s)),c.velocity.copy(w).addScaledVector(C,x/(1+n.broadside*Math.abs(x)*s)).multiplyScalar(M),c.angular.multiplyScalar(g/(1+n.spinAir*c.angular.length()*s)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[Ke].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let R=0;R<Ke;R++)e.lengths[R]=r[R].distanceTo(r[R+1])}u&&u.from.copy(u.target);let d=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let m=1;m<Ke;m++)d+=l[m].lengthSq()*.05;e.calm=d<2e-4?e.calm+t:0},vL=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",orientation:a="portrait",finish:s="glossy",crispFront:r=!1,cornerRadius:o=.3,size:l=.6,anchor:c="center",strapLength:h=.5,strapImage:p,strapColor:u="#111111",strapWidth:f=.65,metal:v="silver",gravity:M=1,damping:g=.5,elasticity:d=.5,breeze:m=.5,interactive:S=!0,intro:_=!0,apiRef:E,onLoadState:T,onFaceChange:C,className:x="",style:w})=>{let R=(0,kr.useRef)(null),N=(0,kr.useRef)(null),V=(0,kr.useRef)(null);return N.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:a==="landscape"?"landscape":"portrait",finish:s,crispFront:r,cornerRadius:o,size:l,anchor:c,strapLength:h,strapImage:p,strapColor:u,strapWidth:f,metal:v,gravity:M,damping:g,elasticity:d,breeze:m,interactive:S,intro:_,onLoadState:T,onFaceChange:C},(0,kr.useEffect)(()=>{V.current?.()}),(0,kr.useEffect)(()=>{let F=R.current;if(!F)return;let I;try{I=new Tp({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{N.current.onLoadState?.("unavailable",N.current.frontImage);return}I.setClearColor(0,0),I.outputColorSpace=Cn,I.toneMapping=Mu,I.toneMappingExposure=1;let P=I.domElement;P.className="rp-lanyard-canvas",P.setAttribute("aria-hidden","true"),F.appendChild(P);let K=Math.min(8,I.capabilities.getMaxAnisotropy()),Y=new pl,st=oL(I);Y.environment=st.texture;let q=new On(tT,1,.1,200),nt=new Al(16777215,1.6);nt.position.set(-2.5,4,6);let at=new Al(16777215,.35);at.position.set(3,-1,4),Y.add(nt,at);let Lt=new Map,St={front:null,back:null,strap:null},ue=document.createElement("canvas"),ee=document.createElement("canvas"),me=document.createElement("canvas"),Z=E_(ue,K),tt=E_(ee,K),_t=E_(me,K);_t.wrapS=Pi,_t.wrapT=Ta;let kt=lL(),At=cL(),Ht={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new U},foilFill:{value:new U},foilTop:{value:new U}},ye=W=>{Object.assign(W.uniforms,Ht),W.vertexShader=W.vertexShader.replace("#include <common>",`#include <common>
${tL}`).replace("#include <project_vertex>",`#include <project_vertex>
${eL}`),W.fragmentShader=W.fragmentShader.replace("#include <common>",`#include <common>
${nL}`).replace("#include <opaque_fragment>",`${iL}
#include <opaque_fragment>`)},j=new Ks({map:Z,normalMap:kt,normalScale:new mt(.015,.015)}),rt=new Ys({map:Z,toneMapped:!1}),lt=new Ks({map:tt,normalMap:kt,normalScale:new mt(.06,.06)});j.onBeforeCompile=ye,lt.onBeforeCompile=ye;let ot=new Ks,ut=new El({metalness:1}),Vt=new Ks({map:_t,normalMap:At,normalScale:new mt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new te(.32,.32,.34),side:Ei}),Bt=new ba,Gt=new je(void 0,ot),Xt=new je(void 0,N.current.crispFront?rt:j),D=new je(void 0,lt),_e=new je(new bl(rT,QU,18,72),ut);_e.rotation.y=Math.PI/2-.7,Bt.add(Gt,Xt,D,_e),Y.add(Bt);let ne=rL(is),A=new je(ne,Vt);A.frustumCulled=!1,Y.add(A);let y=new ba,z=new je(aT(x_),ut);z.position.y=Rp+Ou/2-.004;let k=new je(new bl(Rp,.0105,14,40),ut);y.add(z,k),Y.add(y);let B=fL(),ct=[],dt=new U,J=new U,$=new xl(ct,!1,"centripetal"),ht={width:1,height:1},Mt=iT("portrait",.3),ft={},gt=x_,Ot=2,Ft=0,Jt=performance.now(),O=0,vt=!0,Q=!0,xt=!1,Et=!1,it=null,Pt=!1,Rt=!1,Se=0,fe=null,zn=!1,dn=!1,Bu=()=>{};F.dataset.entryState="idle",F.dataset.dropCount="0";let Ua=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Xr=()=>{let W=N.current,Ut=M_(W.cardColor,[1,1,1]),zt=W.crispFront&&St.front,Ct=zt?Math.min(2048,St.front.naturalWidth||S_):S_,oe=Math.round(zt?Ct*St.front.naturalHeight/St.front.naturalWidth:S_*Mt.height/Mt.width);(ue.width!==Ct||ue.height!==oe)&&(ue.width=Ct,ue.height=oe,ee.width=Ct,ee.height=oe,Z.dispose(),tt.dispose()),sT(ue,St.front,Ut,W.imageFit),sT(ee,St.back,Ut,W.imageFit),Z.needsUpdate=!0,tt.needsUpdate=!0,oi()},Wr=()=>{let W=N.current;Ot=hL(me,St.strap,M_(W.strapColor,[.07,.07,.07])),At.repeat.set(2,2*Ot),_t.dispose(),_t.needsUpdate=!0,oi()},Up=()=>{let W=N.current,Ut=ht.width/ht.height,zt=Mt.height/as(W.size,.15,.9),Ct=Mt.width/.72;zt*Ut<Ct&&(zt=Ct/Ut);let oe=zt*Ut;q.aspect=Ut,q.position.set(0,0,zt/2/Math.tan(tT*Math.PI/360)),q.lookAt(0,0,0),q.updateProjectionMatrix(),q.updateMatrixWorld(),Ht.foilKey.value.set(-2.5,4,6).normalize().transformDirection(q.matrixWorldInverse),Ht.foilFill.value.set(3,-1,4).normalize().transformDirection(q.matrixWorldInverse),Ht.foilTop.value.set(.5,4.5,8).normalize().transformDirection(q.matrixWorldInverse);let pt=((ZU[W.anchor]??.5)-.5)*oe,He=zt/2+.2,tn=zt/2-zt*Iu(.12,.42,as(W.strapLength,0,1))+(Mt.hangY-Mt.height/2);B.anchor.set(pt,He,0),mL(B,Mt,He-tn),B.nodes[0].copy(B.anchor),B.previous[0].copy(B.anchor)},Fl=()=>{let W=N.current,Ut=`${W.orientation}|${W.cornerRadius}`;if(Ut!==ft.layoutKey){Mt=iT(W.orientation,W.cornerRadius);let Ve=sL(Mt);Gt.geometry.dispose(),Xt.geometry.dispose(),D.geometry.dispose(),Gt.geometry=Ve.body,Xt.geometry=Ve.face,D.geometry=Ve.face.clone(),Xt.position.z=Pu/2+Jn+6e-4,D.rotation.y=Math.PI,D.position.z=-(Pu/2+Jn+6e-4),_e.position.set(0,Mt.ringY,0),ft.framingKey=""}let zt=`${Ut}|${W.size}|${W.anchor}|${W.strapLength}|${ht.width}|${ht.height}`;zt!==ft.framingKey&&(Up(),xt?Ut!==ft.layoutKey&&zl(B,Mt,!1):(zl(B,Mt,W.intro&&!Ua),xt=!0));let Ct=`${W.frontImage}|${W.backImage}|${W.strapImage}`;if(Ct!==ft.imageKey){let Ve=++Se;ft.imageKey&&(zl(B,Mt,!1),dn=!1,F.dataset.entryState==="falling"&&(F.dataset.entryState="settled")),St.front=null,St.back=null,fe=null,F.dataset.face="front",F.dataset.frontReady="loading",W.onFaceChange?.(!1),W.onLoadState?.("loading",W.frontImage);let Fi=()=>(F.dataset.backReady="loading",b_(Lt,W.backImage).then(jt=>{!Q||Ve!==Se||(St.back=jt,F.dataset.backReady=jt?"true":"error",jt||Lt.delete(W.backImage),Xr(),fe&&(P.dispatchEvent(new CustomEvent("badge-back-status",{bubbles:!0,detail:jt?"ready":"error"})),jt&&H(fe),fe=null))}));Bu=Fi,b_(Lt,W.frontImage).then(jt=>{!Q||Ve!==Se||(St.front=jt,jt&&document.documentElement.classList.contains("crew-role-switching")&&W.intro&&!Ua&&(zl(B,Mt,!0),Rt=!1,Pt=!1),Xr(),jt&&rs(),F.dataset.frontReady=jt?"true":"error",N.current.onLoadState?.(jt?"ready":"error",W.frontImage),Fi())}),b_(Lt,W.strapImage).then(jt=>{!Q||Ve!==Se||(St.strap=jt,Wr())})}let oe=`${Ut}|${W.cardColor}|${W.imageFit}|${W.crispFront}`;oe!==ft.faceKey&&Xr(),W.strapColor!==ft.strapColor&&Wr();let pt=eT[W.finish]||eT.glossy,He=M_(W.cardColor,[1,1,1]);[j,lt].forEach(Ve=>{Ve.roughness=pt.roughness,Ve.metalness=pt.metalness,Ve.clearcoat=pt.clearcoat,Ve.clearcoatRoughness=pt.clearcoatRoughness,Ve.anisotropy=pt.anisotropy}),Xt.material=W.crispFront?rt:j;let se=W.crispFront?Rl:$i,tn=W.crispFront?Math.min(16,I.capabilities.getMaxAnisotropy()):K;(Z.minFilter!==se||Z.anisotropy!==tn)&&(Z.minFilter=se,Z.anisotropy=tn,Z.needsUpdate=!0),Ht.foilStrength.value=pt.foil,Ht.foilAspect.value=Mt.height/Mt.width,ot.color.setRGB(He[0]*.92,He[1]*.92,He[2]*.92,Cn),ot.roughness=Math.min(pt.roughness,.35),ot.metalness=pt.metalness,ot.clearcoat=1,ot.clearcoatRoughness=.08;let Rn=nT[W.metal]||nT.silver;ut.color.set(Rn.color),ut.roughness=Rn.roughness,gt=x_*as(W.strapWidth,.4,2),gt!==ft.strapScale&&(z.geometry.dispose(),z.geometry=aT(gt)),P.style.touchAction=W.interactive?"pan-y":"auto",ft={layoutKey:Ut,framingKey:zt,imageKey:Ct,faceKey:oe,strapColor:W.strapColor,strapScale:gt},oi()},ss=Array.from({length:is},()=>new U),zi=Array.from({length:is},()=>new U),Hl=jU.map(W=>[Math.cos(W),Math.sin(W)]),ia={tangent:new U,toCamera:new U,basis:new Oe,up:new U,across:new U,facing:new U,end:new U},zu=()=>{let W=B.nodes[Ke],Ut=Rp+Ou+.05,zt=Ke-1;for(;zt>0&&B.nodes[zt].distanceTo(W)<Ut*1.1;)zt--;let Ct=ia.up.subVectors(B.nodes[zt],W);Ct.lengthSq()<1e-8&&Ct.set(0,1,0).applyQuaternion(B.body.quaternion),Ct.normalize(),dt.copy(W).addScaledVector(Ct,Ut),J.copy(W).addScaledVector(Ct,Rp+Ou*.35),ct.length=0;for(let Ee=0;Ee<=zt;Ee++)ct.push(B.nodes[Ee]);ct.push(dt,J),$.updateArcLengths();for(let Ee=0;Ee<is;Ee++)$.getPointAt(Ee/(is-1),ss[Ee]);let oe=$.getLength(),pt=1-dt.distanceTo(J)/Math.max(oe,.001),He=ne.getAttribute("position"),se=ne.getAttribute("normal"),tn=ne.getAttribute("uv"),Rn=Np.length,Ve=B.rest*Ke,Fi=Ve/(gt*Ot),jt=gt/Math.pow(Math.max(1,oe/Math.max(Ve,.001)),.35),{tangent:we,toCamera:Hi,across:le,facing:xn}=ia;for(let Ee=0;Ee<is;Ee++){we.subVectors(ss[Math.min(is-1,Ee+1)],ss[Math.max(0,Ee-1)]),we.lengthSq()<1e-12&&we.set(0,-1,0),we.normalize(),Hi.subVectors(q.position,ss[Ee]).normalize();let aa=zi[Ee].crossVectors(Hi,we);aa.lengthSq()<1e-10&&aa.copy(Ee>0?zi[Ee-1]:De.a.set(1,0,0)),aa.normalize(),Ee>0&&aa.dot(zi[Ee-1])<0&&aa.negate();let D_=-B.twist*Math.pow(Math.min(1,Ee/(is-1)/pt),1.3);xn.crossVectors(we,aa),le.copy(aa).multiplyScalar(Math.cos(D_)).addScaledVector(xn,Math.sin(D_)),xn.crossVectors(we,le);let Lp=ss[Ee],mT=(1-Ee/(is-1))*Fi;for(let Yr=0;Yr<Rn;Yr++){let Ip=Ee*Rn+Yr,Op=(Np[Yr]-.5)*jt,[Pp,Bp]=Hl[Yr];He.setXYZ(Ip,Lp.x+le.x*Op,Lp.y+le.y*Op,Lp.z+le.z*Op),se.setXYZ(Ip,xn.x*Pp+le.x*Bp,xn.y*Pp+le.y*Bp,xn.z*Pp+le.z*Bp),tn.setXY(Ip,Np[Yr],mT)}}ia.end.copy(le),He.needsUpdate=!0,se.needsUpdate=!0,tn.needsUpdate=!0,le.copy(ia.end).addScaledVector(Ct,-ia.end.dot(Ct)).normalize(),xn.crossVectors(le,Ct).normalize(),ia.basis.makeBasis(le,Ct,xn),y.quaternion.setFromRotationMatrix(ia.basis),y.position.copy(W)},rs=()=>{Bt.position.copy(B.body.position),Bt.quaternion.copy(B.body.quaternion),zu(),I.render(Y,q)},os=0,qr=()=>{let W=N.current,Ut=40*as(W.gravity,0,3),zt=Math.max(Ut,20),Ct=as(W.elasticity,0,1),oe=as(W.damping,0,1);return{gravity:Ut,gravityX:Ut*os,hold:zt*Iu(2.2,5.5,Ct),stiffness:zt*10*Ke,spring:zt*Iu(.1,.4,Ct)*Ke,bandDamping:zt*Iu(.3,.08,Ct)*Ke,linearDrag:.25*Math.pow(16,oe),angularDrag:.5*Math.pow(12,oe),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Ua?0:as(W.breeze,0,1)}},Fu=()=>{!zn||B.grab||!St.front||F.dataset.frontReady!=="true"||(zn=!1,fe=null,it=null,dn=!Ua,zl(B,Mt,dn),Rt=!1,Pt=!1,F.dataset.face="front",F.dataset.entryState=dn?"falling":"settled",F.dataset.dropCount=String(Number(F.dataset.dropCount)+1),N.current.onFaceChange?.(!1))},Vl=W=>{if(Ft=0,!Q)return;Fu();let Ut=Math.min(1/30,Math.max(1/240,(W-Jt)/1e3));Jt=W,O+=Ut;let zt=qr();gL(B,Ut,zt,O);let Ct=B.body;Number.isFinite(Ct.position.x+Ct.position.y+Ct.position.z+Ct.quaternion.w)||(B.grab=null,zl(B,Mt,!1)),rs();let oe=(B.anchor.y-B.nodes[Ke].y)/(B.rest*Ke);oe>.7&&Ct.velocity.y<-.5&&(Rt=!0),!Pt&&F.dataset.frontReady==="true"&&!B.grab&&(Ua||!N.current.intro&&!dn||Rt&&oe>.9&&Ct.velocity.y>=-.15)&&(Pt=!0,dn&&(dn=!1,F.dataset.entryState="settled"),P.dispatchEvent(new CustomEvent("badge-arrive",{bubbles:!0,detail:{extension:oe,velocity:Ct.velocity.y}})));let pt=B.calm>1.2&&!B.grab&&zt.breeze===0;vt&&!pt&&(Ft=requestAnimationFrame(Vl))},oi=()=>{Ft||!vt||!Q||(B.calm=0,Jt=performance.now(),Ft=requestAnimationFrame(Vl))},Hu=W=>{if(Ua||!vt||document.hidden||!Number.isFinite(W.gamma)||!Number.isFinite(W.beta))return;let Ut=(screen.orientation?.angle??window.orientation??0)*Math.PI/180,zt=Math.sin(W.gamma*Math.PI/180)*Math.cos(Ut)+Math.sin(W.beta*Math.PI/180)*Math.sin(Ut),Ct=as(zt*.55,-.42,.42),oe=Math.abs(Ct)<.025?0:Ct,pt=os+(oe-os)*.18;Math.abs(pt-os)<.002||(os=pt,oi())},Vu=window.isSecureContext&&window.matchMedia("(pointer: coarse)").matches&&!Ua&&"DeviceOrientationEvent"in window;Vu&&window.addEventListener("deviceorientation",Hu);let Gl=new xu,kl=new mt,b=W=>{let Ut=P.getBoundingClientRect();kl.set((W.clientX-Ut.left)/Ut.width*2-1,-((W.clientY-Ut.top)/Ut.height)*2+1),Gl.setFromCamera(kl,q)},L=()=>(Bt.updateMatrixWorld(),Gl.intersectObjects([Gt,Xt,D],!1)[0]||null),X=W=>{P.style.cursor!==W&&(P.style.cursor=W)},H=W=>{if(!St.back){fe=W.clone(),P.dispatchEvent(new CustomEvent("badge-back-status",{bubbles:!0,detail:"loading"})),F.dataset.backReady==="error"&&Bu();return}let Ut=B.body,zt=De.a.set(0,1,0).applyQuaternion(Ut.quaternion),Ct=B.turn>0?-1:1;if(B.turn===0){let oe=De.c.subVectors(W,q.position).normalize();Ct=De.b.subVectors(W,Ut.position).cross(oe).dot(zt)<0?-1:1}B.turn=B.turn===0?Math.PI*Ct:0,Ut.angular.addScaledVector(zt,$U*Ct),F.dataset.face=B.turn===0?"front":"back",N.current.onFaceChange?.(B.turn!==0),P.dispatchEvent(new CustomEvent("badge-sound",{bubbles:!0,detail:"flip"}))};E&&(E.current={drop:()=>Q?(zn=!0,oi(),!0):!1,flip:()=>{let W=new U(Mt.width*.3,0,0).applyQuaternion(B.body.quaternion).add(B.body.position);H(W),oi()}});let G=W=>{W.preventDefault(),N.current.onLoadState?.("unavailable",N.current.frontImage)};P.addEventListener("webglcontextlost",G);let bt=W=>{if(!N.current.interactive||W.button>0)return;b(W);let Ut=L();Ut&&(B.grab={local:Ut.point.clone().sub(B.body.position).applyQuaternion(B.body.quaternion.clone().invert()),rotation:B.body.quaternion.clone(),reach:Ut.distance,from:Ut.point.clone(),target:Ut.point.clone()},it={x:W.clientX,y:W.clientY,time:performance.now(),point:Ut.point.clone()},P.setPointerCapture?.(W.pointerId),X("grabbing"),W.preventDefault(),oi())},wt=W=>{if(N.current.interactive){if(b(W),B.grab){it&&Math.hypot(W.clientX-it.x,W.clientY-it.y)>6&&(it=null),Gl.ray.at(B.grab.reach,B.grab.target),oi();return}W.pointerType!=="touch"&&(Et=!!L(),X(Et?"grab":""))}},yt=W=>{if(!B.grab)return;let Ut=!it;B.grab=null,it&&W.type==="pointerup"&&performance.now()-it.time<450&&H(it.point),Ut&&W.type==="pointerup"&&P.dispatchEvent(new CustomEvent("badge-sound",{bubbles:!0,detail:"release"})),it=null,P.releasePointerCapture?.(W.pointerId),X(Et&&W.pointerType!=="touch"?"grab":""),oi()},Nt=W=>{!N.current.interactive||W.touches.length!==1||(b(W.touches[0]),L()&&W.preventDefault())};P.addEventListener("pointerdown",bt),P.addEventListener("pointermove",wt),P.addEventListener("pointerup",yt),P.addEventListener("pointercancel",yt),P.addEventListener("lostpointercapture",yt),P.addEventListener("touchstart",Nt,{passive:!1});let It=()=>{ht.width=Math.max(1,F.clientWidth),ht.height=Math.max(1,F.clientHeight),I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.setSize(ht.width,ht.height,!1),Fl(),rs()},$t=new ResizeObserver(It);$t.observe(F);let ae=new IntersectionObserver(([W])=>{vt=W.isIntersecting,vt&&oi()});ae.observe(F);let Dt=()=>{document.hidden||oi()};return document.addEventListener("visibilitychange",Dt),V.current=Fl,It(),()=>{Q=!1,cancelAnimationFrame(Ft),V.current=null,E&&(E.current=null),$t.disconnect(),ae.disconnect(),document.removeEventListener("visibilitychange",Dt),Vu&&window.removeEventListener("deviceorientation",Hu),P.removeEventListener("pointerdown",bt),P.removeEventListener("pointermove",wt),P.removeEventListener("pointerup",yt),P.removeEventListener("pointercancel",yt),P.removeEventListener("lostpointercapture",yt),P.removeEventListener("touchstart",Nt),P.removeEventListener("webglcontextlost",G),[Gt,Xt,D,_e,z,k,A].forEach(W=>W.geometry?.dispose()),[j,rt,lt,ot,ut,Vt].forEach(W=>W.dispose()),[Z,tt,_t,kt,At].forEach(W=>W.dispose()),st.dispose(),I.dispose(),P.parentNode&&P.parentNode.removeChild(P)}},[]),(0,fT.jsx)("div",{ref:R,className:`rp-lanyard ${x}`.trim(),style:w})},hT=vL;var $e=ra(Gr()),w_=class extends ri.Component{constructor(){super(...arguments);U_(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(){this.props.onError()}render(){return this.state.failed?null:this.props.children}};function C_({resource:e,assetBase:t,firstSelectionRequested:n=!1}){let i=(0,ri.useRef)(null),a=(0,ri.useRef)(!1),[s,r]=(0,ri.useState)(!1),[o,l]=(0,ri.useState)(""),[c,h]=(0,ri.useState)(""),[p,u]=(0,ri.useState)(!1),[f,v]=(0,ri.useState)(!1),g=`${t.replace(/\/$/,"")}/faces/${e.id}`,d=`${g}-front.svg`,m=!s&&o===d,S=c===d;(0,ri.useEffect)(()=>{u(!1),v(!1)},[e.id]),(0,ri.useEffect)(()=>{n&&m&&!a.current&&i.current?.drop()&&(a.current=!0)},[n,m,d]);let _=(T,C)=>{T==="unavailable"&&r(!0),T==="ready"&&(l(C),h("")),T==="error"&&h(C)},E=()=>{m&&i.current?i.current.flip():u(T=>!T)};return(0,$e.jsxs)("div",{className:"rp-badge-preview","data-resource":e.id,"data-ready":m,children:[(0,$e.jsxs)("div",{className:"rp-badge-stage",role:"group","aria-label":`${e.name} resource pass`,children:[(0,$e.jsx)("div",{className:"rp-badge-aura","aria-hidden":"true"}),!s&&(0,$e.jsx)(w_,{onError:()=>r(!0),children:(0,$e.jsx)(hT,{apiRef:i,onLoadState:_,onFaceChange:u,frontImage:d,backImage:`${g}-back.svg`,strapImage:`${g}-strap.svg`,strapColor:"#8e44ad",cardColor:"#faf8fc",crispFront:!0,finish:"glossy",size:.69,strapLength:.32,strapWidth:.7,damping:.66,elasticity:.3,breeze:0,intro:!1,className:m?"rp-badge-model rp-badge-model--ready":"rp-badge-model"})}),!m&&(0,$e.jsxs)("div",{className:"rp-badge-static","data-fallback":s||S,children:[(0,$e.jsx)("span",{className:"rp-badge-static-strap","aria-hidden":"true"}),(0,$e.jsx)("span",{className:"rp-badge-static-clip","aria-hidden":"true"}),f?(0,$e.jsxs)("div",{className:"rp-badge-text-fallback",children:[(0,$e.jsx)("span",{children:"RESEARCH TOOLKIT"}),(0,$e.jsx)("strong",{children:e.name}),(0,$e.jsx)("p",{children:p?e.note:e.description})]}):(0,$e.jsx)("img",{src:`${g}-${p?"back":"front"}.svg`,alt:`${e.name} pass, ${p?"back":"front"}`,onError:()=>v(!0)})]})]}),(0,$e.jsxs)("div",{className:"rp-badge-caption",children:[(0,$e.jsx)("p",{className:"rp-sr-only","aria-live":"polite",children:p?`Back of ${e.name} pass. ${e.note}`:`Front of ${e.name} pass. ${e.description}`}),(0,$e.jsx)("p",{"aria-live":"polite",className:"rp-badge-hint",children:s||S?"Static preview \xB7 All links remain available":m?"Drag to swing \xB7 Click to flip":"Preparing your pass\u2026"}),(0,$e.jsxs)("button",{className:"rp-flip-button",type:"button",onClick:E,"aria-label":`Show ${p?"front":"back"} of ${e.name} pass`,"aria-pressed":p,children:[(0,$e.jsx)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:(0,$e.jsx)("path",{d:"M15 6a6 6 0 1 0 1 7M15 2v4h-4"})}),p?"Front of pass":"Flip pass"]})]})]})}var Yt=ra(Gr()),_L=["All","Research","Data","Tools"];function R_({external:e=!0}){return(0,Yt.jsx)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e?(0,Yt.jsxs)(Yt.Fragment,{children:[(0,Yt.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,Yt.jsx)("path",{d:"M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5"})]}):(0,Yt.jsx)("path",{d:"m8 5 7 7-7 7"})})}function yL({resources:e,assetBase:t}){let[n,i]=(0,Da.useState)(e[0].id),[a,s]=(0,Da.useState)("All"),[r,o]=(0,Da.useState)(""),[l,c]=(0,Da.useState)(!1),[h,p]=(0,Da.useState)(!1),u=e.find(m=>m.id===n)||e[0],f=(0,Da.useMemo)(()=>{let m=r.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);return e.filter(S=>(a==="All"||S.category===a)&&m.every(_=>`${S.name} ${S.description} ${S.category} ${S.note} ${S.url}`.toLocaleLowerCase().includes(_)))},[e,a,r]),M=l||a!=="All"||r.trim().length>0?f:f.slice(0,6),g=f.length-M.length;(0,Da.useEffect)(()=>{try{let m=decodeURIComponent(window.location.hash.slice(1));e.some(S=>S.id===m)&&i(m)}catch{}},[e]);function d(m){p(!0),i(m.id),window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${m.id}`)}return(0,Yt.jsx)("div",{className:"rp-app",children:(0,Yt.jsxs)("div",{className:"rp-workspace",children:[(0,Yt.jsxs)("section",{className:"rp-preview","aria-label":"Selected website pass",children:[(0,Yt.jsx)(C_,{resource:u,assetBase:t,firstSelectionRequested:h}),(0,Yt.jsx)("div",{className:"rp-visit-wrap",children:(0,Yt.jsxs)("a",{className:"rp-visit",href:u.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${u.name} (opens in a new tab)`,children:["Visit website ",(0,Yt.jsx)(R_,{})]})}),(0,Yt.jsxs)("p",{className:"rp-sr-only",role:"status","aria-live":"polite",children:["Selected website: ",u.name,". ",u.description]})]}),(0,Yt.jsxs)("section",{className:"rp-directory","aria-labelledby":"rp-directory-title",children:[(0,Yt.jsxs)("div",{className:"rp-directory-heading",children:[(0,Yt.jsx)("h2",{id:"rp-directory-title",children:"My bookmarks"}),(0,Yt.jsxs)("span",{className:"rp-count","aria-live":"polite",children:[f.length," ",f.length===1?"website":"websites"]})]}),(0,Yt.jsxs)("div",{className:"rp-search",children:[(0,Yt.jsxs)("svg",{viewBox:"0 0 24 24",width:"21",height:"21",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:[(0,Yt.jsx)("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),(0,Yt.jsx)("path",{d:"m15.5 15.5 5 5"})]}),(0,Yt.jsx)("label",{className:"rp-sr-only",htmlFor:"rp-search-input",children:"Find a website"}),(0,Yt.jsx)("input",{id:"rp-search-input",type:"search",placeholder:"Find a website\u2026",value:r,onChange:m=>o(m.target.value),autoComplete:"off",spellCheck:"false"})]}),(0,Yt.jsx)("div",{className:"rp-categories",role:"group","aria-label":"Filter websites by category",children:_L.map(m=>(0,Yt.jsx)("button",{type:"button",className:`rp-category${a===m?" is-active":""}`,"aria-pressed":a===m,onClick:()=>{s(m),c(!1)},children:m},m))}),(0,Yt.jsx)("div",{className:"rp-grid",children:M.map(m=>(0,Yt.jsxs)("article",{className:`rp-bookmark${u.id===m.id?" is-selected":""}`,children:[(0,Yt.jsxs)("button",{type:"button",className:"rp-select","aria-pressed":u.id===m.id,onClick:()=>d(m),"aria-label":`Preview ${m.name} pass`,children:[(0,Yt.jsx)("img",{className:"rp-icon",src:`${t}/icons/${m.id}.svg`,alt:"",width:"38",height:"38",loading:"lazy"}),(0,Yt.jsxs)("span",{className:"rp-bookmark-text",children:[(0,Yt.jsx)("span",{className:"rp-name",children:m.name}),(0,Yt.jsx)("span",{className:"rp-description",children:m.description}),(0,Yt.jsx)("span",{className:"rp-tag",children:m.category})]})]}),(0,Yt.jsx)("a",{className:"rp-external",href:m.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Open ${m.name} in a new tab`,title:`Open ${m.name}`,children:(0,Yt.jsx)(R_,{})})]},m.id))}),f.length===0&&(0,Yt.jsxs)("div",{className:"rp-empty",role:"status",children:[(0,Yt.jsx)("p",{children:"No websites found."}),(0,Yt.jsx)("span",{children:"Try another name or category."}),(0,Yt.jsx)("button",{type:"button",onClick:()=>{o(""),s("All")},children:"Clear filters"})]}),g>0&&(0,Yt.jsxs)("button",{type:"button",className:"rp-show-all",onClick:()=>c(!0),children:["Explore all ",e.length," websites ",(0,Yt.jsx)(R_,{external:!1})]}),l&&a==="All"&&!r&&(0,Yt.jsx)("button",{type:"button",className:"rp-show-all",onClick:()=>c(!1),children:"Show featured websites"}),(0,Yt.jsxs)("p",{className:"rp-directory-hint",children:["Select a website to explore its pass. ",(0,Yt.jsx)("span",{children:"Use \u2197 to open it directly."})]})]})]})})}var N_=document.getElementById("resources-app"),dT=document.getElementById("resources-data");if(N_&&dT)try{let e=JSON.parse(dT.textContent);e.length&&(0,pT.createRoot)(N_).render((0,Yt.jsx)(yL,{resources:e,assetBase:N_.dataset.assets}))}catch(e){console.error("The interactive resource directory could not be loaded.",e)}
/*! For license information please see resources.js.LEGAL.txt */
