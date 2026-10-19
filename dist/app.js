(()=>{var Ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nf=0,bu=1,Uf=2;var Ko=1,Gl=2,kr=3,bs=0,dn=1,Ne=2,rn=0,ws=1,Xs=2,wu=3,Tu=4,Wl=5;var ii=100,Ff=101,Of=102,Bf=103,Hf=104,qs=200,zf=201,kf=202,Vf=203,Ru=204,Au=205,jo=206,Gf=207,Jo=208,Wf=209,Xf=210,qf=211,Yf=212,Zf=213,$f=214,ul=0,dl=1,fl=2,br=3,pl=4,ml=5,gl=6,xl=7,Cu=0,Kf=1,jf=2,vi=0,Qo=1,ta=2,ea=3,Ys=4,na=5,ia=6,sa=7;var Pu=300,Ts=301,Zs=302,Xl=303,ql=304,ra=306,nn=1e3,Ri=1001,_l=1002,sn=1003,Jf=1004;var oa=1005;var Rn=1006,Yl=1007;var Rs=1008;var Dn=1009,Iu=1010,Lu=1011,Vr=1012,Zl=1013,yi=1014,si=1015,Qe=1016,$l=1017,Kl=1018,As=1020,Du=35902,Nu=35899,Uu=1021,Fu=1022,Vn=1023,Pi=1026,Di=1027,jl=1028,Jl=1029,Cs=1030,Ql=1031;var tc=1033,aa=33776,la=33777,ca=33778,ha=33779,ec=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37488,cc=37489,ua=37490,hc=37491,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,_c=37815,vc=37816,yc=37817,Mc=37818,Sc=37819,Ec=37820,bc=37821,wc=36492,Tc=36494,Rc=36495,Ac=36283,Cc=36284,da=36285,Pc=36286;var _o=2300,vl=2301,cl=2302,uu=2303,du=2400,fu=2401,pu=2402;var Qf=3200;var fa=0,tp=1,es="",Oe="srgb",vo="srgb-linear",yo="linear",Se="srgb";var hl=7680;var ep=519,np=512,ip=513,sp=514,Ic=515,rp=516,op=517,Lc=518,ap=519,Ou=35044,Dc=35048;var Bu="300 es",pi=2e3,wr=2001;function c0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=Mo("canvas");return i.style.display="block",i}var jd={},Tr=null;function So(...i){let t="THREE."+i.shift();Tr?Tr("log",t,...i):console.log(t,...i)}function cp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=cp(i);let t="THREE."+i.shift();if(Tr)Tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=cp(i);let t="THREE."+i.shift();if(Tr)Tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zs(...i){let t=i.join(" ");t in jd||(jd[t]=!0,ee(...i))}function hp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var up={[ul]:dl,[fl]:gl,[pl]:xl,[br]:ml,[dl]:ul,[gl]:fl,[xl]:pl,[ml]:br},mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=1234567,po=Math.PI/180,Rr=180/Math.PI;function Ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Hu(i,t){return(i%t+t)%t}function u0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function d0(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function f0(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function p0(i,t=1){return t-Math.abs(Hu(i,t*2)-t)}function m0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function g0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function x0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _0(i,t){return i+Math.random()*(t-i)}function v0(i){return i*(.5-Math.random())}function y0(i){i!==void 0&&(Jd=i);let t=Jd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function M0(i){return i*po}function S0(i){return i*Rr}function E0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function b0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function w0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function T0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fn={DEG2RAD:po,RAD2DEG:Rr,generateUUID:Ci,clamp:ce,euclideanModulo:Hu,mapLinear:u0,inverseLerp:d0,lerp:mo,damp:f0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:x0,randFloat:_0,randFloatSpread:v0,seededRandom:y0,degToRad:M0,radToDeg:S0,isPowerOfTwo:E0,ceilPowerOfTwo:b0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:T0,normalize:Ae,denormalize:fi},$=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(p!==v||l!==f||c!==u||h!==g){let m=l*f+c*u+h*g+p*v;m<0&&(f=-f,u=-u,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);d=Math.sin(d*_)/y,a=Math.sin(a*_)/y,l=l*d+f*a,c=c*d+u*a,h=h*d+g*a,p=p*d+v*a}else{l=l*d+f*a,c=c*d+u*a,h=h*d+g*a,p=p*d+v*a;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*u-c*f,t[e+1]=l*g+h*f+c*p-a*u,t[e+2]=c*g+h*u+a*f-l*p,t[e+3]=h*g-a*p-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*p+c*u*g,this._y=c*u*p-f*h*g,this._z=c*h*g+f*u*p,this._w=c*h*p-f*u*g;break;case"YXZ":this._x=f*h*p+c*u*g,this._y=c*u*p-f*h*g,this._z=c*h*g-f*u*p,this._w=c*h*p+f*u*g;break;case"ZXY":this._x=f*h*p-c*u*g,this._y=c*u*p+f*h*g,this._z=c*h*g+f*u*p,this._w=c*h*p-f*u*g;break;case"ZYX":this._x=f*h*p-c*u*g,this._y=c*u*p+f*h*g,this._z=c*h*g-f*u*p,this._w=c*h*p+f*u*g;break;case"YZX":this._x=f*h*p+c*u*g,this._y=c*u*p+f*h*g,this._z=c*h*g-f*u*p,this._w=c*h*p-f*u*g;break;case"XZY":this._x=f*h*p-c*u*g,this._y=c*u*p-f*h*g,this._z=c*h*g+f*u*p,this._w=c*h*p+f*u*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=n+a+p;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>p){let u=2*Math.sqrt(1+n-a-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>p){let u=2*Math.sqrt(1+a-n-p);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zh=new A,Qd=new qe,oe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],f=n[2],u=n[5],g=n[8],v=s[0],m=s[3],d=s[6],_=s[1],y=s[4],x=s[7],S=s[2],E=s[5],b=s[8];return r[0]=o*v+a*_+l*S,r[3]=o*m+a*y+l*E,r[6]=o*d+a*x+l*b,r[1]=c*v+h*_+p*S,r[4]=c*m+h*y+p*E,r[7]=c*d+h*x+p*b,r[2]=f*v+u*_+g*S,r[5]=f*m+u*y+g*E,r[8]=f*d+u*x+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*p+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=p*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kh.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kh.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kh=new oe,tf=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){let i={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vo]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:tf,fromXYZ:ef,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:tf,fromXYZ:ef,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var pe=R0();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,yl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=Mo("canvas")),rr.width=t.width,rr.height=t.height;let s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},A0=0,Ar=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vh(s[o].image)):r.push(Vh(s[o]))}else r=Vh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var C0=0,Gh=new A,Bn=class i extends mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ri,s=Ri,r=Rn,o=Rs,a=Vn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ci(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nn:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nn:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Pu;Bn.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(u+1)/2,S=(d+1)/2,E=(h+f)/4,b=(p+v)/4,M=(g+m)/4;return y>x&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=b/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=b/r,s=M/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Bn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Eo=class extends Bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends Bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Mt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,p,f,u,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,f,u,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,p,f,u,g,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=u,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/or.setFromMatrixColumn(t,0).length(),r=1/or.setFromMatrixColumn(t,1).length(),o=1/or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*p,g=a*h,v=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*p,g=c*h,v=c*p;e[0]=f+v*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*p,g=c*h,v=c*p;e[0]=f-v*a,e[4]=-o*p,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*p,g=a*h,v=a*p;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+v,e[1]=l*p,e[5]=v*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*p,e[8]=g*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*p+g,e[10]=f-v*p}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+v,e[5]=o*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=a*h,e[10]=v*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(P0,t,I0)}lookAt(t,e,n){let s=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),us.crossVectors(n,Yn),us.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),us.crossVectors(n,Yn)),us.normalize(),Fa.crossVectors(Yn,us),s[0]=us.x,s[4]=Fa.x,s[8]=Yn.x,s[1]=us.y,s[5]=Fa.y,s[9]=Yn.y,s[2]=us.z,s[6]=Fa.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],d=n[14],_=n[3],y=n[7],x=n[11],S=n[15],E=s[0],b=s[4],M=s[8],w=s[12],T=s[1],P=s[5],I=s[9],N=s[13],D=s[2],F=s[6],V=s[10],B=s[14],Q=s[3],W=s[7],nt=s[11],et=s[15];return r[0]=o*E+a*T+l*D+c*Q,r[4]=o*b+a*P+l*F+c*W,r[8]=o*M+a*I+l*V+c*nt,r[12]=o*w+a*N+l*B+c*et,r[1]=h*E+p*T+f*D+u*Q,r[5]=h*b+p*P+f*F+u*W,r[9]=h*M+p*I+f*V+u*nt,r[13]=h*w+p*N+f*B+u*et,r[2]=g*E+v*T+m*D+d*Q,r[6]=g*b+v*P+m*F+d*W,r[10]=g*M+v*I+m*V+d*nt,r[14]=g*w+v*N+m*B+d*et,r[3]=_*E+y*T+x*D+S*Q,r[7]=_*b+y*P+x*F+S*W,r[11]=_*M+y*I+x*V+S*nt,r[15]=_*w+y*N+x*B+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],d=t[15],_=l*u-c*f,y=a*u-c*p,x=a*f-l*p,S=o*u-c*h,E=o*f-l*h,b=o*p-a*h;return e*(v*_-m*y+d*x)-n*(g*_-m*S+d*E)+s*(g*y-v*S+d*b)-r*(g*x-v*E+m*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],d=t[15],_=e*a-n*o,y=e*l-s*o,x=e*c-r*o,S=n*l-s*a,E=n*c-r*a,b=s*c-r*l,M=h*v-p*g,w=h*m-f*g,T=h*d-u*g,P=p*m-f*v,I=p*d-u*v,N=f*d-u*m,D=_*N-y*I+x*P+S*T-E*w+b*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=(a*N-l*I+c*P)*F,t[1]=(s*I-n*N-r*P)*F,t[2]=(v*b-m*E+d*S)*F,t[3]=(f*E-p*b-u*S)*F,t[4]=(l*T-o*N-c*w)*F,t[5]=(e*N-s*T+r*w)*F,t[6]=(m*x-g*b-d*y)*F,t[7]=(h*b-f*x+u*y)*F,t[8]=(o*I-a*T+c*M)*F,t[9]=(n*T-e*I-r*M)*F,t[10]=(g*E-v*x+d*_)*F,t[11]=(p*x-h*E-u*_)*F,t[12]=(a*w-o*P-l*M)*F,t[13]=(e*P-n*w+s*M)*F,t[14]=(v*y-g*S-m*_)*F,t[15]=(h*S-p*y+f*_)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,f=r*c,u=r*h,g=r*p,v=o*h,m=o*p,d=a*p,_=l*c,y=l*h,x=l*p,S=n.x,E=n.y,b=n.z;return s[0]=(1-(v+d))*S,s[1]=(u+x)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(u-x)*E,s[5]=(1-(f+d))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+y)*b,s[9]=(m-_)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=or.set(s[0],s[1],s[2]).length(),a=or.set(s[4],s[5],s[6]).length(),l=or.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hi.copy(this);let c=1/o,h=1/a,p=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=p,hi.elements[9]*=p,hi.elements[10]*=p,e.setFromRotationMatrix(hi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=pi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===pi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===wr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===pi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===wr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},or=new A,hi=new Mt,P0=new A(0,0,0),I0=new A(1,1,1),us=new A,Fa=new A,Yn=new A,nf=new Mt,sf=new qe,Ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sf.setFromEuler(this),this.setFromQuaternion(sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},L0=0,rf=new A,ar=new qe,Gi=new Mt,Oa=new A,io=new A,D0=new A,N0=new qe,of=new A(1,0,0),af=new A(0,1,0),lf=new A(0,0,1),cf={type:"added"},U0={type:"removed"},lr={type:"childadded",child:null},Wh={type:"childremoved",child:null},cn=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Ki,n=new qe,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new oe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(of,t)}rotateY(t){return this.rotateOnAxis(af,t)}rotateZ(t){return this.rotateOnAxis(lf,t)}translateOnAxis(t,e){return rf.copy(t).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(of,t)}translateY(t){return this.translateOnAxis(af,t)}translateZ(t){return this.translateOnAxis(lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(io,Oa,this.up):Gi.lookAt(Oa,io,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Gi),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cf),lr.child=t,this.dispatchEvent(lr),lr.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U0),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cf),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,D0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,N0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new A(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Xh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Hu(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xh(o,r,t+1/3),this.g=Xh(o,r,t),this.b=Xh(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=dp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return pe.workingToColorSpace(Ln.copy(this),t),Math.round(ce(Ln.r*255,0,255))*65536+Math.round(ce(Ln.g*255,0,255))*256+Math.round(ce(Ln.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Oe){pe.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+e,ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ds),t.getHSL(Ba);let n=mo(ds.h,Ba.h,e),s=mo(ds.s,Ba.s,e),r=mo(ds.l,Ba.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Qt;Qt.NAMES=dp;var bo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ks=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new A,Wi=new A,qh=new A,Xi=new A,cr=new A,hr=new A,hf=new A,Yh=new A,Zh=new A,$h=new A,Kh=new Ye,jh=new Ye,Jh=new Ye,Zi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ui.subVectors(s,e),Wi.subVectors(n,e),qh.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Wi),l=ui.dot(qh),c=Wi.dot(Wi),h=Wi.dot(qh),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kh.setScalar(0),jh.setScalar(0),Jh.setScalar(0),Kh.fromBufferAttribute(t,e),jh.fromBufferAttribute(t,n),Jh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kh,r.x),o.addScaledVector(jh,r.y),o.addScaledVector(Jh,r.z),o}static isFrontFacing(t,e,n,s){return ui.subVectors(n,e),Wi.subVectors(t,e),ui.cross(Wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ui.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cr.subVectors(s,n),hr.subVectors(r,n),Yh.subVectors(t,n);let l=cr.dot(Yh),c=hr.dot(Yh);if(l<=0&&c<=0)return e.copy(n);Zh.subVectors(t,s);let h=cr.dot(Zh),p=hr.dot(Zh);if(h>=0&&p<=h)return e.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cr,o);$h.subVectors(t,r);let u=cr.dot($h),g=hr.dot($h);if(g>=0&&u<=g)return e.copy(r);let v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(hr,a);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return hf.subVectors(r,s),a=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(hf,a);let d=1/(m+v+f);return o=v*d,a=f*d,e.copy(n).addScaledVector(cr,o).addScaledVector(hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ha.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(t.matrixWorld),this.union(Ha)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),za.subVectors(this.max,so),ur.subVectors(t.a,so),dr.subVectors(t.b,so),fr.subVectors(t.c,so),fs.subVectors(dr,ur),ps.subVectors(fr,dr),Fs.subVectors(ur,fr);let e=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Fs.z,Fs.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Fs.z,0,-Fs.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Fs.y,Fs.x,0];return!Qh(e,ur,dr,fr,za)||(e=[1,0,0,0,1,0,0,0,1],!Qh(e,ur,dr,fr,za))?!1:(ka.crossVectors(fs,ps),e=[ka.x,ka.y,ka.z],Qh(e,ur,dr,fr,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qi=[new A,new A,new A,new A,new A,new A,new A,new A],di=new A,Ha=new Hn,ur=new A,dr=new A,fr=new A,fs=new A,ps=new A,Fs=new A,so=new A,za=new A,ka=new A,Os=new A;function Qh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Os.fromArray(i,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=t.dot(Os),c=e.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ln=new A,Va=new $,O0=0,ye=class extends mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ou,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wo=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var To=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},B0=new Hn,ro=new A,tu=new A,gi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):B0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(tu)),this.expandByPoint(ro.copy(t.center).sub(tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},H0=0,ni=new Mt,eu=new cn,pr=new A,Zn=new Hn,oo=new Hn,En=new A,ue=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?To:wo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,n){return ni.makeTranslation(t,e,n),this.applyMatrix4(ni),this}scale(t,e,n){return ni.makeScale(t,e,n),this.applyMatrix4(ni),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(Zn.min,oo.min),Zn.expandByPoint(En),En.addVectors(Zn.max,oo.max),Zn.expandByPoint(En)):(Zn.expandByPoint(oo.min),Zn.expandByPoint(oo.max))}Zn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)En.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(En));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)En.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(t,c),En.add(pr)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new A,l[M]=new A;let c=new A,h=new A,p=new A,f=new $,u=new $,g=new $,v=new A,m=new A;function d(M,w,T){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,T),f.fromBufferAttribute(r,M),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),h.sub(c),p.sub(c),u.sub(f),g.sub(f);let P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(P),m.copy(p).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(P),a[M].add(v),a[w].add(v),a[T].add(v),l[M].add(m),l[w].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let M=0,w=_.length;M<w;++M){let T=_[M],P=T.start,I=T.count;for(let N=P,D=P+I;N<D;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new A,x=new A,S=new A,E=new A;function b(M){S.fromBufferAttribute(s,M),E.copy(S);let w=a[M];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(E,w);let P=x.dot(l[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,P)}for(let M=0,w=_.length;M<w;++M){let T=_[M],P=T.start,I=T.count;for(let N=P,D=P+I;N<D;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,p=new A;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)En.fromBufferAttribute(t,e),En.normalize(),t.setXYZ(e,En.x,En.y,En.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[u++]}return new ye(f,h,p)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,u=p.length;f<u;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ou,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},On=new A,Ir=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nu=new A,z0=new A,k0=new oe,$n=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nu.subVectors(n,e).cross(z0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||k0.getNormalMatrix(t),s=this.coplanarPoint(nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},V0=0,xi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ws,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Au,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hl,this.stencilZFail=hl,this.stencilZPass=hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Lr=class extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mr,ao=new A,gr=new A,xr=new A,_r=new $,lo=new $,fp=new Mt,Ga=new A,co=new A,Wa=new A,uf=new $,iu=new $,df=new $,Ao=class extends cn{constructor(t=new Lr){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ro(e,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Ir(n,3,0,!1)),mr.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=mr,this.material=t,this.center=new $(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-xr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Xa(Ga.set(-.5,-.5,0),xr,o,gr,s,r),Xa(co.set(.5,-.5,0),xr,o,gr,s,r),Xa(Wa.set(.5,.5,0),xr,o,gr,s,r),uf.set(0,0),iu.set(1,0),df.set(1,1);let a=t.ray.intersectTriangle(Ga,co,Wa,!1,ao);if(a===null&&(Xa(co.set(-.5,.5,0),xr,o,gr,s,r),iu.set(0,1),a=t.ray.intersectTriangle(Ga,Wa,co,!1,ao),a===null))return;let l=t.ray.origin.distanceTo(ao);l<t.near||l>t.far||e.push({distance:l,point:ao.clone(),uv:Zi.getInterpolation(ao,Ga,co,Wa,uf,iu,df,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xa(i,t,e,n,s,r){_r.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lo.x=r*_r.x-s*_r.y,lo.y=s*_r.x+r*_r.y):lo.copy(_r),i.copy(t),i.x+=lo.x,i.y+=lo.y,i.applyMatrix4(fp)}var Yi=new A,su=new A,qa=new A,Ya=new A,gs=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){su.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Ya.copy(this.origin).sub(su);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qa),a=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-o*o),p,f,u,g;if(h>0)if(p=o*l-a,f=o*a-l,g=r*h,p>=0)if(f>=-g)if(f<=g){let v=1/h;p*=v,f*=v,u=p*(p+o*f+2*a)+f*(o*p+f+2*l)+c}else f=r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+f*(f+2*l)+c);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(su).addScaledVector(qa,f),u}intersectSphere(t,e){if(t.radius<0)return null;Yi.subVectors(t.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=t.x-o.x,f=t.y-o.y,u=t.z-o.z,g=e.x-o.x,v=e.y-o.y,m=e.z-o.z,d=n.x-o.x,_=n.y-o.y,y=n.z-o.z,x=Math.abs(l),S=Math.abs(c),E=Math.abs(h),b,M,w,T,P,I,N,D,F,V,B,Q;if(x>=S&&x>=E?(w=l,I=p,F=g,Q=d,l>=0?(b=c,M=h,T=f,P=u,N=v,D=m,V=_,B=y):(b=h,M=c,T=u,P=f,N=m,D=v,V=y,B=_)):S>=E?(w=c,I=f,F=v,Q=_,c>=0?(b=h,M=l,T=u,P=p,N=m,D=g,V=y,B=d):(b=l,M=h,T=p,P=u,N=g,D=m,V=d,B=y)):(w=h,I=u,F=m,Q=y,h>=0?(b=l,M=c,T=p,P=f,N=g,D=v,V=d,B=_):(b=c,M=l,T=f,P=p,N=v,D=g,V=_,B=d)),w===0)return null;let W=b/w,nt=M/w,et=1/w,bt=T-W*I,Rt=P-nt*I,jt=N-W*F,Nt=D-nt*F,Ht=V-W*Q,U=B-nt*Q,k=Ht*Nt-U*jt,J=bt*U-Rt*Ht,ut=jt*Rt-Nt*bt;if(s){if(k<0||J<0||ut<0)return null}else if((k<0||J<0||ut<0)&&(k>0||J>0||ut>0))return null;let lt=k+J+ut;if(lt===0)return null;let mt=et*(k*I+J*F+ut*Q);return(lt>0?mt<0:mt>0)?null:this.at(mt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ji=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ff=new Mt,Bs=new gs,Za=new gi,pf=new A,$a=new A,Ka=new A,ja=new A,ru=new A,Ja=new A,mf=new A,Qa=new A,X=class extends cn{constructor(t=new ue,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(ru.fromBufferAttribute(p,t),o?Ja.addScaledVector(ru,h):Ja.addScaledVector(ru.sub(e),h))}e.add(Ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(Za.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Za,pf)===null||Bs.origin.distanceToSquared(pf)>(t.far-t.near)**2))&&(ff.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(ff),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],_=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let x=_,S=y;x<S;x+=3){let E=a.getX(x),b=a.getX(x+1),M=a.getX(x+2);s=tl(this,d,t,n,c,h,p,E,b,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,d=v;m<d;m+=3){let _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=tl(this,o,t,n,c,h,p,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],_=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let x=_,S=y;x<S;x+=3){let E=x,b=x+1,M=x+2;s=tl(this,d,t,n,c,h,p,E,b,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,d=v;m<d;m+=3){let _=m,y=m+1,x=m+2;s=tl(this,o,t,n,c,h,p,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function G0(i,t,e,n,s,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bs,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qa);return c<e.near||c>e.far?null:{distance:c,point:Qa.clone(),object:i}}function tl(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$a),i.getVertexPosition(l,Ka),i.getVertexPosition(c,ja);let h=G0(i,t,e,n,$a,Ka,ja,mf);if(h){let p=new A;Zi.getBarycoord(mf,$a,Ka,ja,p),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,l,c,p,new $)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,l,c,p,new $)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,l,c,p,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Zi.getNormal($a,Ka,ja,f.normal),h.face=f,h.barycoord=p}return h}var Ji=class extends Bn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=sn,h=sn,p,f){super(null,o,a,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vr=new Mt,gf=new Mt,el=[],xf=new Hn,W0=new Mt,ho=new X,uo=new gi,hn=class extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),xf.copy(t.boundingBox).applyMatrix4(vr),this.boundingBox.union(xf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),uo.copy(t.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),gf.multiplyMatrices(n,vr),ho.matrixWorld=gf,ho.raycast(t,el);for(let o=0,a=el.length;o<a;o++){let l=el[o];l.instanceId=r,l.object=this,e.push(l)}el.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ji(new Float32Array(s*this.count),s,this.count,jl,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hs=new gi,X0=new $(.5,.5),nl=new A,Dr=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],f=r[6],u=r[7],g=r[8],v=r[9],m=r[10],d=r[11],_=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,u-h,d-g,S-_).normalize(),s[1].setComponents(c+o,u+h,d+g,S+_).normalize(),s[2].setComponents(c+a,u+p,d+v,S+y).normalize(),s[3].setComponents(c-a,u-p,d-v,S-y).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,u-f,d-m,S-x).normalize();else if(s[4].setComponents(c-l,u-f,d-m,S-x).normalize(),e===pi)s[5].setComponents(c+l,u+f,d+m,S+x).normalize();else if(e===wr)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){Hs.center.set(0,0,0);let e=X0.distanceTo(t.center);return Hs.radius=.7071067811865476+e,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nl.x=s.normal.x>0?t.max.x:t.min.x,nl.y=s.normal.y>0?t.max.y:t.min.y,nl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Nr=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_f=new Mt,mu=new gs,il=new gi,sl=new A,Co=class extends cn{constructor(t=new ue,e=new Nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),il.radius+=r,t.ray.intersectsSphere(il)===!1)return;_f.copy(s).invert(),mu.copy(t.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=f,v=u;g<v;g++){let m=c.getX(g);sl.fromBufferAttribute(p,m),vf(sl,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let g=f,v=u;g<v;g++)sl.fromBufferAttribute(p,g),vf(sl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vf(i,t,e,n,s,r,o){let a=mu.distanceSqToPoint(i);if(a<e){let l=new A;mu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Po=class extends Bn{constructor(t=[],e=Ts,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},un=class extends Bn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends Bn{constructor(t,e,n=yi,s,r,o,a=sn,l=sn,c,h=Pi,p=1){if(h!==Pi&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},El=class extends Ii{constructor(t,e=yi,n=Ts,s,r,o=sn,a=sn,l,c=Pi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Io=class extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function g(v,m,d,_,y,x,S,E,b,M,w){let T=x/b,P=S/M,I=x/2,N=S/2,D=E/2,F=b+1,V=M+1,B=0,Q=0,W=new A;for(let nt=0;nt<V;nt++){let et=nt*P-N;for(let bt=0;bt<F;bt++){let Rt=bt*T-I;W[v]=Rt*_,W[m]=et*y,W[d]=D,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[d]=E>0?1:-1,h.push(W.x,W.y,W.z),p.push(bt/b),p.push(1-nt/M),B+=1}}for(let nt=0;nt<M;nt++)for(let et=0;et<b;et++){let bt=f+et+F*nt,Rt=f+et+F*(nt+1),jt=f+(et+1)+F*(nt+1),Nt=f+(et+1)+F*nt;l.push(bt,Rt,Nt),l.push(Rt,jt,Nt),Q+=6}a.addGroup(u,Q,w),u+=Q,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Be=class i extends ue{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,p=Math.PI/2*t,f=e,u=2*p+f,g=n*2+r,v=s+1,m=new A,d=new A;for(let _=0;_<=g;_++){let y=0,x=0,S=0,E=0;if(_<=n){let w=_/n,T=w*Math.PI/2;x=-h-t*Math.cos(T),S=t*Math.sin(T),E=-t*Math.cos(T),y=w*p}else if(_<=n+r){let w=(_-n)/r;x=-h+w*e,S=t,E=0,y=p+w*f}else{let w=(_-n-r)/n,T=w*Math.PI/2;x=h+t*Math.sin(T),S=t*Math.cos(T),E=t*Math.sin(T),y=p+f+w*p}let b=Math.max(0,Math.min(1,y/u)),M=0;_===0?M=.5/s:_===g&&(M=-.5/s);for(let w=0;w<=s;w++){let T=w/s,P=T*Math.PI*2,I=Math.sin(P),N=Math.cos(P);d.x=-S*N,d.y=x,d.z=S*I,a.push(d.x,d.y,d.z),m.set(-S*N,E,S*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+M,b)}if(_>0){let w=(_-1)*v;for(let T=0;T<s;T++){let P=w+T,I=w+T+1,N=_*v+T,D=_*v+T+1;o.push(P,I,N),o.push(I,D,N)}}}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Vs=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){let u=n+p/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jt=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],u=[],g=0,v=[],m=n/2,d=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(u,2));function _(){let x=new A,S=new A,E=0,b=(e-t)/n;for(let M=0;M<=r;M++){let w=[],T=M/r,P=T*(e-t)+t;for(let I=0;I<=s;I++){let N=I/s,D=N*l+a,F=Math.sin(D),V=Math.cos(D);S.x=P*F,S.y=-T*n+m,S.z=P*V,p.push(S.x,S.y,S.z),x.set(F,b,V).normalize(),f.push(x.x,x.y,x.z),u.push(N,1-T),w.push(g++)}v.push(w)}for(let M=0;M<s;M++)for(let w=0;w<r;w++){let T=v[w][M],P=v[w+1][M],I=v[w+1][M+1],N=v[w][M+1];(t>0||w!==0)&&(h.push(T,P,N),E+=3),(e>0||w!==r-1)&&(h.push(P,I,N),E+=3)}c.addGroup(d,E,0),d+=E}function y(x){let S=g,E=new $,b=new A,M=0,w=x===!0?t:e,T=x===!0?1:-1;for(let I=1;I<=s;I++)p.push(0,m*T,0),f.push(0,T,0),u.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let D=I/s*l+a,F=Math.cos(D),V=Math.sin(D);b.x=w*V,b.y=m*T,b.z=w*F,p.push(b.x,b.y,b.z),f.push(0,T,0),E.x=F*.5+.5,E.y=V*.5*T+.5,u.push(E.x,E.y),g++}for(let I=0;I<s;I++){let N=S+I,D=P+I;x===!0?h.push(D,D+1,N):h.push(D+1,D,N),M+=3}c.addGroup(d,M,x===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xs=class i extends Jt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new $:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,s=[],r=[],o=[],a=new A,l=new Mt;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ur=class extends Kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new $){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*p+this.aX,c=f*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Ur{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+p)+(l-a)/p;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var yf=new A,Mf=new A,ou=new zu,au=new zu,lu=new zu,_n=class extends Kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mf.subVectors(s[0],s[1]).add(s[0]),c=Mf);let p=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yf),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),u),v=Math.pow(p.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ou.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,g,v,m),au.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,g,v,m),lu.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ou.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),au.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),lu.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return n.set(ou.calc(l),au.calc(l),lu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function q0(i,t){let e=1-i;return e*e*t}function Y0(i,t){return 2*(1-i)*i*t}function Z0(i,t){return i*i*t}function go(i,t,e,n){return q0(i,t)+Y0(i,e)+Z0(i,n)}function $0(i,t){let e=1-i;return e*e*e*t}function K0(i,t){let e=1-i;return 3*e*e*i*t}function j0(i,t){return 3*(1-i)*i*i*t}function J0(i,t){return i*i*i*t}function xo(i,t,e,n,s){return $0(i,t)+K0(i,e)+j0(i,n)+J0(i,s)}var Lo=class extends Kn{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wl=class extends Kn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y),xo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends Kn{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tl=class extends Kn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Kn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_s=class extends Kn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Sf(a,l.x,c.x,h.x,p.x),Sf(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this}},Rl=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:_n,CubicBezierCurve:Lo,CubicBezierCurve3:wl,EllipseCurve:Ur,LineCurve:Do,LineCurve3:Tl,QuadraticBezierCurve:No,QuadraticBezierCurve3:_s,SplineCurve:Uo}),Al=class extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Rl[s.type]().fromJSON(s))}return this}},ts=class extends Al{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Do(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new No(this.currentPoint.clone(),new $(t,e),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Lo(this.currentPoint.clone(),new $(t,e),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ur(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Je=class extends ts{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ts().fromJSON(s))}return this}};function Q0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=pp(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sg(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,p=l;for(let f=e;f<s;f+=e){let u=i[f],g=i[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return Fo(r,o,e,a,l,c,0),o}function pp(i,t,e,n,s){let r;if(s===mg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ef(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ef(o/n|0,i[o],i[o+1],r);return r&&Fr(r,r.next)&&(Bo(r),r=r.next),r}function Gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fr(e,e.next)||$e(e.prev,e,e.next)===0)){if(Bo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?eg(i,n,s,r):tg(i)){t.push(l.i,i.i,c.i),Bo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ng(Gs(i),t),Fo(i,t,e,n,s,r,2)):o===2&&ig(i,t,e,n,s,r):Fo(Gs(i),t,e,n,s,r,1);break}}}function tg(i){let t=i.prev,e=i,n=i.next;if($e(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),p=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=p&&g.y<=u&&fo(s,a,r,l,o,c,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eg(i,t,e,n){let s=i.prev,r=i,o=i.next;if($e(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,p,f),v=Math.max(a,l,c),m=Math.max(h,p,f),d=gu(u,g,t,e,n),_=gu(v,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=d&&x&&x.z<=_;){if(y.x>=u&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&fo(a,h,l,p,c,f,y.x,y.y)&&$e(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=u&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fo(a,h,l,p,c,f,x.x,x.y)&&$e(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=u&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&fo(a,h,l,p,c,f,y.x,y.y)&&$e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=u&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fo(a,h,l,p,c,f,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ng(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Fr(n,s)&&gp(n,e,e.next,s)&&Oo(n,s)&&Oo(s,n)&&(t.push(n.i,e.i,s.i),Bo(e),Bo(e.next),e=i=s),e=e.next}while(e!==i);return Gs(e)}function ig(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dg(o,a)){let l=xp(o,a);o=Gs(o,o.next),l=Gs(l,l.next),Fo(o,t,e,n,s,r,0),Fo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=pp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ug(c))}s.sort(rg);for(let r=0;r<s.length;r++)e=og(s[r],e);return e}function rg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function og(i,t){let e=ag(i,t);if(!e)return t;let n=xp(e,i);return Gs(n,n.next),Gs(e,e.next)}function ag(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Fr(i,e))return e;do{if(Fr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&mp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Oo(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&lg(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function lg(i,t){return $e(i.prev,i,t.prev)<0&&$e(t.next,i,i.next)<0}function cg(i,t,e,n){let s=i;do s.z===0&&(s.z=gu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hg(s)}function hg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function gu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ug(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mp(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&mp(i,t,e,n,s,r,o,a)}function dg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fg(i,t)&&(Oo(i,t)&&Oo(t,i)&&pg(i,t)&&($e(i.prev,i,t.prev)||$e(i,t.prev,t))||Fr(i,t)&&$e(i.prev,i,i.next)>0&&$e(t.prev,t,t.next)>0)}function $e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fr(i,t){return i.x===t.x&&i.y===t.y}function gp(i,t,e,n){let s=ol($e(i,t,e)),r=ol($e(i,t,n)),o=ol($e(e,n,i)),a=ol($e(e,n,t));return!!(s!==r&&o!==a||s===0&&rl(i,e,t)||r===0&&rl(i,n,t)||o===0&&rl(e,i,n)||a===0&&rl(e,t,n))}function rl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ol(i){return i>0?1:i<0?-1:0}function fg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Oo(i,t){return $e(i.prev,i,i.next)<0?$e(i,t,i.next)>=0&&$e(i,i.prev,t)>=0:$e(i,t,i.prev)<0||$e(i,i.next,t)<0}function pg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xp(i,t){let e=xu(i.i,i.x,i.y),n=xu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ef(i,t,e,n){let s=xu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var _u=class{static triangulate(t,e,n=2){return Q0(t,e,n)}},Ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bf(t),wf(n,t);let o=t.length;e.forEach(bf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wf(n,e[l]);let a=_u.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var An=class i extends ue{constructor(t=new Je([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:gg,y,x=!1,S,E,b,M;if(d){y=d.getSpacedPoints(h),x=!0,f=!1;let K=d.isCatmullRomCurve3?d.closed:!1;S=d.computeFrenetFrames(h,K),E=new A,b=new A,M=new A}f||(m=0,u=0,g=0,v=0);let w=a.extractPoints(c),T=w.shape,P=w.holes;if(!Ai.isClockWise(T)){T=T.reverse();for(let K=0,st=P.length;K<st;K++){let rt=P[K];Ai.isClockWise(rt)&&(P[K]=rt.reverse())}}function N(K){let rt=10000000000000001e-36,ct=K[0];for(let dt=1;dt<=K.length;dt++){let Bt=dt%K.length,Dt=K[Bt],kt=Dt.x-ct.x,te=Dt.y-ct.y,O=kt*kt+te*te,_e=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(ct.x),Math.abs(ct.y)),le=rt*_e*_e;if(O<=le){K.splice(Bt,1),dt--;continue}ct=Dt}}N(T),P.forEach(N);let D=P.length,F=T;for(let K=0;K<D;K++){let st=P[K];T=T.concat(st)}function V(K,st,rt){return st||ne("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,rt)}let B=T.length;function Q(K,st,rt){let ct,dt,Bt,Dt=K.x-st.x,kt=K.y-st.y,te=rt.x-K.x,O=rt.y-K.y,_e=Dt*Dt+kt*kt,le=Dt*O-kt*te;if(Math.abs(le)>Number.EPSILON){let L=Math.sqrt(_e),R=Math.sqrt(te*te+O*O),G=st.x-kt/L,q=st.y+Dt/L,tt=rt.x-O/R,ft=rt.y+te/R,xt=((tt-G)*O-(ft-q)*te)/(Dt*O-kt*te);ct=G+Dt*xt-K.x,dt=q+kt*xt-K.y;let it=ct*ct+dt*dt;if(it<=2)return new $(ct,dt);Bt=Math.sqrt(it/2)}else{let L=!1;Dt>Number.EPSILON?te>Number.EPSILON&&(L=!0):Dt<-Number.EPSILON?te<-Number.EPSILON&&(L=!0):Math.sign(kt)===Math.sign(O)&&(L=!0),L?(ct=-kt,dt=Dt,Bt=Math.sqrt(_e)):(ct=Dt,dt=kt,Bt=Math.sqrt(_e/2))}return new $(ct/Bt,dt/Bt)}let W=[];for(let K=0,st=F.length,rt=st-1,ct=K+1;K<st;K++,rt++,ct++)rt===st&&(rt=0),ct===st&&(ct=0),W[K]=Q(F[K],F[rt],F[ct]);let nt=[],et,bt=W.concat();for(let K=0,st=D;K<st;K++){let rt=P[K];et=[];for(let ct=0,dt=rt.length,Bt=dt-1,Dt=ct+1;ct<dt;ct++,Bt++,Dt++)Bt===dt&&(Bt=0),Dt===dt&&(Dt=0),et[ct]=Q(rt[ct],rt[Bt],rt[Dt]);nt.push(et),bt=bt.concat(et)}let Rt;if(m===0)Rt=Ai.triangulateShape(F,P);else{let K=[],st=[];for(let rt=0;rt<m;rt++){let ct=rt/m,dt=u*Math.cos(ct*Math.PI/2),Bt=g*Math.sin(ct*Math.PI/2)+v;for(let Dt=0,kt=F.length;Dt<kt;Dt++){let te=V(F[Dt],W[Dt],Bt);J(te.x,te.y,-dt),ct===0&&K.push(te)}for(let Dt=0,kt=D;Dt<kt;Dt++){let te=P[Dt];et=nt[Dt];let O=[];for(let _e=0,le=te.length;_e<le;_e++){let L=V(te[_e],et[_e],Bt);J(L.x,L.y,-dt),ct===0&&O.push(L)}ct===0&&st.push(O)}}Rt=Ai.triangulateShape(K,st)}let jt=Rt.length,Nt=g+v;for(let K=0;K<B;K++){let st=f?V(T[K],bt[K],Nt):T[K];x?(b.copy(S.normals[0]).multiplyScalar(st.x),E.copy(S.binormals[0]).multiplyScalar(st.y),M.copy(y[0]).add(b).add(E),J(M.x,M.y,M.z)):J(st.x,st.y,0)}for(let K=1;K<=h;K++)for(let st=0;st<B;st++){let rt=f?V(T[st],bt[st],Nt):T[st];x?(b.copy(S.normals[K]).multiplyScalar(rt.x),E.copy(S.binormals[K]).multiplyScalar(rt.y),M.copy(y[K]).add(b).add(E),J(M.x,M.y,M.z)):J(rt.x,rt.y,p/h*K)}for(let K=m-1;K>=0;K--){let st=K/m,rt=u*Math.cos(st*Math.PI/2),ct=g*Math.sin(st*Math.PI/2)+v;for(let dt=0,Bt=F.length;dt<Bt;dt++){let Dt=V(F[dt],W[dt],ct);J(Dt.x,Dt.y,p+rt)}for(let dt=0,Bt=P.length;dt<Bt;dt++){let Dt=P[dt];et=nt[dt];for(let kt=0,te=Dt.length;kt<te;kt++){let O=V(Dt[kt],et[kt],ct);x?J(O.x,O.y+y[h-1].y,y[h-1].x+rt):J(O.x,O.y,p+rt)}}}Ht(),U();function Ht(){let K=s.length/3;if(f){let st=0,rt=B*st;for(let ct=0;ct<jt;ct++){let dt=Rt[ct];ut(dt[2]+rt,dt[1]+rt,dt[0]+rt)}st=h+m*2,rt=B*st;for(let ct=0;ct<jt;ct++){let dt=Rt[ct];ut(dt[0]+rt,dt[1]+rt,dt[2]+rt)}}else{for(let st=0;st<jt;st++){let rt=Rt[st];ut(rt[2],rt[1],rt[0])}for(let st=0;st<jt;st++){let rt=Rt[st];ut(rt[0]+B*h,rt[1]+B*h,rt[2]+B*h)}}n.addGroup(K,s.length/3-K,0)}function U(){let K=s.length/3,st=0;k(F,st),st+=F.length;for(let rt=0,ct=P.length;rt<ct;rt++){let dt=P[rt];k(dt,st),st+=dt.length}n.addGroup(K,s.length/3-K,1)}function k(K,st){let rt=K.length;for(;--rt>=0;){let ct=rt,dt=rt-1;dt<0&&(dt=K.length-1);for(let Bt=0,Dt=h+m*2;Bt<Dt;Bt++){let kt=B*Bt,te=B*(Bt+1),O=st+ct+kt,_e=st+dt+kt,le=st+dt+te,L=st+ct+te;lt(O,_e,le,L)}}}function J(K,st,rt){l.push(K),l.push(st),l.push(rt)}function ut(K,st,rt){mt(K),mt(st),mt(rt);let ct=s.length/3,dt=_.generateTopUV(n,s,ct-3,ct-2,ct-1);zt(dt[0]),zt(dt[1]),zt(dt[2])}function lt(K,st,rt,ct){mt(K),mt(st),mt(ct),mt(st),mt(rt),mt(ct);let dt=s.length/3,Bt=_.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);zt(Bt[0]),zt(Bt[1]),zt(Bt[3]),zt(Bt[1]),zt(Bt[2]),zt(Bt[3])}function mt(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function zt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rl[s.type]().fromJSON(s)),new i(n,t.options)}},gg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-p),new $(f,1-g),new $(v,1-d)]:[new $(a,1-l),new $(h,1-p),new $(u,1-g),new $(m,1-d)]}};function xg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bn=class i extends ue{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new A,f=new $,u=new A,g=new A,v=new A,m=0,d=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,u.x=d*1,u.y=-m,u.z=d*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,u.x=d*1,u.y=-m,u.z=d*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*s,x=Math.sin(y),S=Math.cos(y);for(let E=0;E<=t.length-1;E++){p.x=t[E].x*x,p.y=t[E].y,p.z=t[E].x*S,o.push(p.x,p.y,p.z),f.x=_/e,f.y=E/(t.length-1),a.push(f.x,f.y);let b=l[3*E+0]*x,M=l[3*E+1],w=l[3*E+0]*S;c.push(b,M,w)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let x=y+_*t.length,S=x,E=x+t.length,b=x+t.length+1,M=x+1;r.push(S,E,M),r.push(b,M,E)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var _i=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,f=e/l,u=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let _=d*f-o;for(let y=0;y<c;y++){let x=y*p-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){let y=_+c*d,x=_+c*(d+1),S=_+1+c*(d+1),E=_+1+c*d;u.push(y,x,E),u.push(x,S,E)}this.setIndex(u),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Or=class i extends ue{constructor(t=new Je([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function c(h){let p=s.length/3,f=h.extractPoints(e),u=f.shape,g=f.holes;Ai.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,d=g.length;m<d;m++){let _=g[m];Ai.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=Ai.triangulateShape(u,g);for(let m=0,d=g.length;m<d;m++){let _=g[m];u=u.concat(_)}for(let m=0,d=u.length;m<d;m++){let _=u[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,d=v.length;m<d;m++){let _=v[m],y=_[0]+p,x=_[1]+p,S=_[2]+p;n.push(y,x,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _g(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function _g(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var me=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new A,f=new A,u=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let _=[],y=d/n,x=o+y*a,S=t*Math.cos(x),E=Math.sqrt(t*t-S*S),b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let M=0;M<=e;M++){let w=M/e,T=s+w*r;p.x=-E*Math.cos(T),p.y=S,p.z=E*Math.sin(T),g.push(p.x,p.y,p.z),f.copy(p).normalize(),v.push(f.x,f.y,f.z),m.push(w+b,1-y),_.push(c++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let y=h[d][_+1],x=h[d][_],S=h[d+1][_],E=h[d+1][_+1];(d!==0||o>0)&&u.push(y,x,E),(d!==n-1||l<Math.PI)&&u.push(x,S,E)}this.setIndex(u),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var be=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],f=new A,u=new A,g=new A;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let d=0;d<=s;d++){let _=d/s*r;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),p.push(d/s),p.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let d=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,y=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(d,_,x),l.push(_,y,x)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var vn=class i extends ue{constructor(t=new _s(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new $,h=new A,p=[],f=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(u,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),d()}function m(y){h=t.getPointAt(y/e,h);let x=o.normals[y],S=o.binormals[y];for(let E=0;E<=s;E++){let b=E/s*Math.PI*2,M=Math.sin(b),w=-Math.cos(b);l.x=w*x.x+M*S.x,l.y=w*x.y+M*S.y,l.z=w*x.z+M*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let S=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),b=(s+1)*y+x,M=(s+1)*(y-1)+x;g.push(S,E,M),g.push(E,b,M)}}function _(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Rl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function $s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tf(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Nn(i){let t={};for(let e=0;e<i.length;e++){let n=$s(i[e]);for(let s in n)t[s]=n[s]}return t}function Tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ku(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var pn={clone:$s,merge:Nn},yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=vg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new $().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Br=class extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ho=class extends xi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Cl=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Il=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fu:r=t,a=2*e-n;break;case pu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:o=t,l=2*n-e;break;case pu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,_=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-u)*m+(1.5+u)*v+.5*g,x=u*m-u*v;for(let S=0;S!==a;++S)r[S]=d*o[h+S]+_*o[c+S]+y*o[l+S]+x*o[p+S];return r}},Ll=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*p+o[l+f]*h;return r}},Dl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nl=class extends vs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*g;return r}let f=a*2,u=t-1;for(let g=0;g!==a;++g){let v=o[c+g],m=o[l+g],d=u*f+g*2,_=p[d],y=p[d+1],x=t*f+g*2,S=h[x],E=h[x+1],b=Eg(n,e,_,S,s);r[g]=_p(b,v,y,E,m)}return r}};function _p(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Sg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Eg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=_p(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Sg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),cu(t.settings)&&(n.settings={inTangents:yr(t.settings.inTangents,Array),outTangents:yr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case cl:e=this.InterpolantFactoryMethodSmooth;break;case uu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return cl;case this.InterpolantFactoryMethodBezier:return uu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;cu(this.settings)&&(Rf(this.settings.inTangents,t),Rf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&h0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,f=p-n,u=p+n;for(let g=0;g!==n;++g){let v=e[p+g];if(v!==e[f+g]||v!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[p+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,cu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=vl;var ys=class extends jn{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=_o;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};Ul.prototype.ValueTypeName="color";var Fl=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};Fl.prototype.ValueTypeName="number";var Ol=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends jn{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=_o;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};Bl.prototype.ValueTypeName="vector";var Hl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Hl,zl=class{constructor(t){this.manager=t!==void 0?t:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ko=class extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hu=new Mt,Af=new A,Cf=new A,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Af.setFromMatrixPosition(t.matrixWorld),e.position.copy(Af),Cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===wr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(hu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},al=new A,ll=new qe,Ti=new A,Go=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(al,ll,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(al,ll,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new A,Pf=new $,If=new $,Tn=class extends Go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,e){return this.getViewBounds(t,Pf,If),e.subVectors(If,Pf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vu=class extends Vo{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}},Ws=class extends Hr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Li=class extends Go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yu=class extends Vo{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wo=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new yu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xo=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Mr=-90,Sr=1,kl=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Mr,Sr,t,e);s.layers=this.layers,this.add(s);let r=new Tn(Mr,Sr,t,e);r.layers=this.layers,this.add(r);let o=new Tn(Mr,Sr,t,e);o.layers=this.layers,this.add(o);let a=new Tn(Mr,Sr,t,e);a.layers=this.layers,this.add(a);let l=new Tn(Mr,Sr,t,e);l.layers=this.layers,this.add(l);let c=new Tn(Mr,Sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vl=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},qo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=bg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function bg(){this._document.hidden===!1&&this.reset()}var Vu="\\[\\]\\.:\\/",wg=new RegExp("["+Vu+"]","g"),Gu="[^"+Vu+"]",Tg="[^"+Vu.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Gu),Ag=/(WCOD+)?/.source.replace("WCOD",Tg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gu),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gu),Ig=new RegExp("^"+Rg+Ag+Cg+Pg+"$"),Lg=["material","materials","bones","map"],Mu=class{constructor(t,e,n){let s=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(t){let e=Ig.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Mu;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tS=new Float32Array(1);var Lf=new Mt,Yo=class{constructor(t,e,n=0,s=1/0){this.ray=new gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(t,e=!0,n=[]){return Su(t,this,n,e),n.sort(Df),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Su(t[s],this,n,e);return n.sort(Df),n}};function Df(i,t){return i.distance-t.distance}function Su(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Su(r[o],t,e,!0)}}var Zo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},zr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Eu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var $o=class extends mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Wu(i,t,e,n){let s=Dg(n);switch(e){case Uu:return i*t;case jl:return i*t/s.components*s.byteLength;case Jl:return i*t/s.components*s.byteLength;case Cs:return i*t*2/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case tc:return i*t*4/s.components*s.byteLength;case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:case sc:return Math.max(i,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(i,8)*Math.max(t,8)/2;case rc:case oc:case lc:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ac:case ua:case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wc:case Tc:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ac:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case da:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case Dn:case Iu:return{byteLength:1,components:1};case Vr:case Lu:case Qe:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case yi:case Zl:case si:return{byteLength:4,components:1};case Du:case Nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<p.length;u++){let g=p[f],v=p[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,p[f]=v)}p.length=f+1;for(let u=0,g=p.length;u<g;u++){let v=p[u];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Ox=`uniform sampler2D dfgLUT;
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
}`,Bx=`
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$x=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
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
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b_=`float getShadowMask() {
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
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
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
}`,q_=`#if DEPTH_PACKING == 3200
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
}`,Y_=`#define DISTANCE
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
}`,Z_=`#define DISTANCE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
}`,J_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,tv=`uniform vec3 diffuse;
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
}`,ev=`#define LAMBERT
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define MATCAP
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
}`,sv=`#define MATCAP
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
}`,rv=`#define NORMAL
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
}`,ov=`#define NORMAL
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
}`,av=`#define PHONG
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
}`,lv=`#define PHONG
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
}`,cv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,dv=`#define TOON
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
}`,fv=`uniform float size;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,_v=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Hg,alphahash_pars_fragment:zg,alphamap_fragment:kg,alphamap_pars_fragment:Vg,alphatest_fragment:Gg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:Yg,batching_vertex:Zg,begin_vertex:$g,beginnormal_vertex:Kg,bsdfs:jg,iridescence_fragment:Jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:tx,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ox,color_vertex:ax,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:hx,displacementmap_pars_vertex:ux,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:xx,envmap_common_pars_fragment:_x,envmap_pars_fragment:vx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Ix,envmap_vertex:Mx,fog_vertex:Sx,fog_pars_vertex:Ex,fog_fragment:bx,fog_pars_fragment:wx,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:Rx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:Hx,lights_fragment_end:zx,lightprobes_pars_fragment:kx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:Yx,map_particle_fragment:Zx,map_particle_pars_fragment:$x,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:t_,morphtarget_pars_vertex:e_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:o_,normal_vertex:a_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:d_,opaque_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:x_,dithering_pars_fragment:__,roughnessmap_fragment:v_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:S_,shadowmap_vertex:E_,shadowmask_pars_fragment:b_,skinbase_vertex:w_,skinning_pars_vertex:T_,skinning_vertex:R_,skinnormal_vertex:A_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:I_,tonemapping_pars_fragment:L_,transmission_fragment:D_,transmission_pars_fragment:N_,uv_pars_fragment:U_,uv_pars_vertex:F_,uv_vertex:O_,worldpos_vertex:B_,background_vert:H_,background_frag:z_,backgroundCube_vert:k_,backgroundCube_frag:V_,cube_vert:G_,cube_frag:W_,depth_vert:X_,depth_frag:q_,distance_vert:Y_,distance_frag:Z_,equirect_vert:$_,equirect_frag:K_,linedashed_vert:j_,linedashed_frag:J_,meshbasic_vert:Q_,meshbasic_frag:tv,meshlambert_vert:ev,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:av,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:hv,meshtoon_vert:uv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:xv,sprite_frag:_v},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ui={basic:{uniforms:Nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Nn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Nn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Nn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Nn([St.points,St.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Nn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Nn([St.common,St.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Nn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Nn([St.sprite,St.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Nn([St.common,St.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Nn([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ui.physical={uniforms:Nn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Nc={r:0,b:0,g:0},vv=new Mt,Vp=new oe;Vp.set(-1,0,0,0,1,0,0,0,1);function yv(i,t,e,n,s,r){let o=new Qt(0),a=s===!0?0:1,l,c,h=null,p=0,f=null;function u(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let x=_.backgroundBlurriness>0;y=t.get(y,x)}return y}function g(_){let y=!1,x=u(_);x===null?m(o,a):x&&x.isColor&&(m(x,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,y){let x=u(y);x&&(x.isCubeTexture||x.mapping===ra)?(c===void 0&&(c=new X(new Gt(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:$s(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vp),c.material.toneMapped=pe.getTransfer(x.colorSpace)!==Se,(h!==x||p!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new X(new _i(2,2),new Ee({name:"BackgroundMaterial",uniforms:$s(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=pe.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(Nc,ku(i)),e.buffers.color.setClear(Nc.r,Nc.g,Nc.b,y,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:v,dispose:d}}function Mv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,I,N,D,F){let V=!1,B=p(P,D,N,I);r!==B&&(r=B,c(r.object)),V=u(P,D,N,F),V&&g(P,D,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(P,I,N,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function p(P,I,N,D){let F=D.wireframe===!0,V=n[I.id];V===void 0&&(V={},n[I.id]=V);let B=P.isInstancedMesh===!0?P.id:0,Q=V[B];Q===void 0&&(Q={},V[B]=Q);let W=Q[N.id];W===void 0&&(W={},Q[N.id]=W);let nt=W[F];return nt===void 0&&(nt=f(l()),W[F]=nt),nt}function f(P){let I=[],N=[],D=[];for(let F=0;F<e;F++)I[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:D,object:P,attributes:{},index:null}}function u(P,I,N,D){let F=r.attributes,V=I.attributes,B=0,Q=N.getAttributes();for(let W in Q)if(Q[W].location>=0){let et=F[W],bt=V[W];if(bt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(bt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(bt=P.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function g(P,I,N,D){let F={},V=I.attributes,B=0,Q=N.getAttributes();for(let W in Q)if(Q[W].location>=0){let et=V[W];et===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),F[W]=bt,B++}r.attributes=F,r.attributesNum=B,r.index=D}function v(){let P=r.newAttributes;for(let I=0,N=P.length;I<N;I++)P[I]=0}function m(P){d(P,0)}function d(P,I){let N=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;N[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),F[P]!==I&&(i.vertexAttribDivisor(P,I),F[P]=I)}function _(){let P=r.newAttributes,I=r.enabledAttributes;for(let N=0,D=I.length;N<D;N++)I[N]!==P[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function y(P,I,N,D,F,V,B){B===!0?i.vertexAttribIPointer(P,I,N,F,V):i.vertexAttribPointer(P,I,N,D,F,V)}function x(P,I,N,D){v();let F=D.attributes,V=N.getAttributes(),B=I.defaultAttributeValues;for(let Q in V){let W=V[Q];if(W.location>=0){let nt=F[Q];if(nt===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){let et=nt.normalized,bt=nt.itemSize,Rt=t.get(nt);if(Rt===void 0)continue;let jt=Rt.buffer,Nt=Rt.type,Ht=Rt.bytesPerElement,U=Nt===i.INT||Nt===i.UNSIGNED_INT||nt.gpuType===Zl;if(nt.isInterleavedBufferAttribute){let k=nt.data,J=k.stride,ut=nt.offset;if(k.isInstancedInterleavedBuffer){for(let lt=0;lt<W.locationSize;lt++)d(W.location+lt,k.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let lt=0;lt<W.locationSize;lt++)y(W.location+lt,bt/W.locationSize,Nt,et,J*Ht,(ut+bt/W.locationSize*lt)*Ht,U)}else{if(nt.isInstancedBufferAttribute){for(let k=0;k<W.locationSize;k++)d(W.location+k,nt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let k=0;k<W.locationSize;k++)m(W.location+k);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let k=0;k<W.locationSize;k++)y(W.location+k,bt/W.locationSize,Nt,et,bt*Ht,bt/W.locationSize*k*Ht,U)}}else if(B!==void 0){let et=B[Q];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}_()}function S(){w();for(let P in n){let I=n[P];for(let N in I){let D=I[N];for(let F in D){let V=D[F];for(let B in V)h(V[B].object),delete V[B];delete D[F]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let N in I){let D=I[N];for(let F in D){let V=D[F];for(let B in V)h(V[B].object),delete V[B];delete D[F]}}delete n[P.id]}function b(P){for(let I in n){let N=n[I];for(let D in N){let F=N[D];if(F[P.id]===void 0)continue;let V=F[P.id];for(let B in V)h(V[B].object),delete V[B];delete F[P.id]}}}function M(P){for(let I in n){let N=n[I],D=P.isInstancedMesh===!0?P.id:0,F=N[D];if(F!==void 0){for(let V in F){let B=F[V];for(let Q in B)h(B[Q].object),delete B[Q];delete F[V]}delete N[D],Object.keys(N).length===0&&delete n[I]}}}function w(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Sv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ev(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Vn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let M=b===Qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Dn&&b!==si&&!M&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:E}}function bv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $n,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let u=p.length!==0||f||n!==0||s;return s=f,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,u){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,x=d.clippingState||null;l.value=x,x=h(g,f,y,u);for(let S=0;S!==y;++S)x[S]=e[S];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,u,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=u+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=u;y!==v;++y,x+=4)o.copy(p[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Wr=4,wv=6,Tv=20,Rv=256,pa=new Li,yp=new Qt,Xu=null,qu=0,Yu=0,Zu=!1,Av=new A,Ks=new A,qr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Av}=r;Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Qe,format:Vn,colorSpace:vo,depthBuffer:!1},s=Mp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cv(r)),this._blurMaterial=Iv(r,t,e),this._ggxMaterial=Pv(r,t,e)}return s}_compileMaterial(t){let e=new X(new ue,t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s,r){let l=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,u=p.toneMapping;p.getClearColor(yp),p.toneMapping=vi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new Gt,new ji({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,d=!0):(m.color.copy(yp),d=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Gr(s,x*S,y>2?S:0,S,S),p.setRenderTarget(s),d&&p.render(v,l),p.render(t,l)}p.toneMapping=u,p.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=c*1.25,u=p*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Wr?n-g+Wr:0),d=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-e,Gr(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,pa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Gr(t,m,d,3*v,2*v),s.setRenderTarget(t),s.render(a,pa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Wr?s-this._lodMax+Wr:0),f=4*(this._cubeSize-h);Gr(e,p,f,3*h,2*h),o.setRenderTarget(e),o.render(l,pa)}};function Cv(i){let t=[],e=[],n=i,s=i-Wr+1+wv;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,f=6,u=3,g=new Float32Array(u*f*p),v=new Float32Array(u*f*p);for(let d=0;d<p;d++){let _=d%3*2/3-1,y=d>2?0:-1,x=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];g.set(x,u*f*d);for(let S=0;S<f;S++){let E=h[S*2]*2-1,b=h[S*2+1]*2-1;d===0?Ks.set(1,b,E):d===1?Ks.set(-E,1,-b):d===2?Ks.set(-E,b,1):d===3?Ks.set(-1,b,-E):d===4?Ks.set(-E,-1,b):Ks.set(E,b,-1),Ks.toArray(v,(d*f+S)*u)}}let m=new ue;m.setAttribute("position",new ye(g,u)),m.setAttribute("outputDirection",new ye(v,u)),e.push(new X(m,null)),n>Wr&&n--}return{lodMeshes:e,sizeLods:t}}function Mp(i,t,e){let n=new Ge(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pv(i,t,e){return new Ee({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Iv(i,t,e){return new Ee({name:"SphericalGaussianBlur",defines:{SAMPLES:Tv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Sp(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Ep(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:rn});r.uniforms.tEquirect.value=e;let o=new X(s,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=Rn),new kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Lv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Xl||u===ql)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new Fc(g.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,g=u===Xl||u===ql,v=u===Ts||u===Zs;if(g||v){let m=e.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new qr(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new qr(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Xl?f.mapping=Ts:u===ql&&(f.mapping=Zs),f}function l(f){let u=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&u++;return u===g}function c(f){let u=f.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Dv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function Nv(i,t,e,n){let s={},r=new WeakMap;function o(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(p){let f=p.attributes;for(let u in f)t.update(f[u],i.ARRAY_BUFFER)}function c(p){let f=[],u=p.index,g=p.attributes.position,v=0;if(g===void 0)return;if(u!==null){let _=u.array;v=u.version;for(let y=0,x=_.length;y<x;y+=3){let S=_[y+0],E=_[y+1],b=_[y+2];f.push(S,E,E,b,b,S)}}else{let _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){let S=y+0,E=y+1,b=y+2;f.push(S,E,E,b,b,S)}}let m=new(g.count>=65535?To:wo)(f,1);m.version=v;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function h(p){let f=r.get(p);if(f){let u=p.index;u!==null&&f.version<u.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Uv(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function c(p,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,p*o,u),e.update(f,n,u))}function h(p,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ov(i,t,e){let n=new WeakMap,s=new Ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let w=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;u===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*S*4*p),b=new Eo(E,x,S,p);b.type=si,b.needsUpdate=!0;let M=y*4;for(let T=0;T<p;T++){let P=m[T],I=d[T],N=_[T],D=x*S*4*T;for(let F=0;F<P.count;F++){let V=F*M;u===!0&&(s.fromBufferAttribute(P,F),E[D+V+0]=s.x,E[D+V+1]=s.y,E[D+V+2]=s.z,E[D+V+3]=0),g===!0&&(s.fromBufferAttribute(I,F),E[D+V+4]=s.x,E[D+V+5]=s.y,E[D+V+6]=s.z,E[D+V+7]=0),v===!0&&(s.fromBufferAttribute(N,F),E[D+V+8]=s.x,E[D+V+9]=s.y,E[D+V+10]=s.z,E[D+V+11]=N.itemSize===4?s.w:1)}}f={count:p,texture:b,size:new $(x,S)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bv(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,p=c.geometry,f=t.get(c,p);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Hv={[Qo]:"LINEAR_TONE_MAPPING",[ta]:"REINHARD_TONE_MAPPING",[ea]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[ia]:"AGX_TONE_MAPPING",[sa]:"NEUTRAL_TONE_MAPPING",[na]:"CUSTOM_TONE_MAPPING"};function zv(i,t,e,n,s,r){let o=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ue;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let h=new Br({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new X(c,h),f=new Li(-1,1,1,-1,0,1),u=null,g=null,v=!1,m,d=null,_=[],y=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let E=0;E<_.length;E++){let b=_[E];b.setSize&&b.setSize(x,S)}},this.setEffects=function(x){_=x,y=_.length>0&&_[0].isRenderPass===!0;let S=o.width,E=o.height;_.length>0&&a===null&&(a=new Ge(S,E,{type:Qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(S,E,{type:Qe,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<_.length;b++){let M=_[b];M.setSize&&M.setSize(S,E)}},this.begin=function(x,S){if(v||x.toneMapping===vi&&_.length===0)return!1;if(d=S,S!==null){let E=S.width,b=S.height;(o.width!==E||o.height!==b)&&this.setSize(E,b)}return y===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=vi,!0},this.hasRenderPass=function(){return y},this.end=function(x,S){x.toneMapping=m,v=!0;let E=o,b=a;for(let M=0;M<_.length;M++){let w=_[M];w.enabled!==!1&&(w.render(x,b,E,S),w.needsSwap!==!1&&(E=b,b=b===a?l:a))}if(u!==x.outputColorSpace||g!==x.toneMapping){u=x.outputColorSpace,g=x.toneMapping,h.defines={},pe.getTransfer(u)===Se&&(h.defines.SRGB_TRANSFER="");let M=Hv[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(d),x.render(p,f),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gp=new Bn,ju=new Ii(1,1),Wp=new Eo,Xp=new Sl,qp=new Po,bp=[],wp=[],Tp=new Float32Array(16),Rp=new Float32Array(9),Ap=new Float32Array(4);function Yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function yn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hc(i,t){let e=wp[t];e===void 0&&(e=new Int32Array(t),wp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;i.uniform2fv(this.addr,t),Mn(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(yn(e,t))return;i.uniform3fv(this.addr,t),Mn(e,t)}}function Wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;i.uniform4fv(this.addr,t),Mn(e,t)}}function Xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(yn(e,n))return;Ap.set(n),i.uniformMatrix2fv(this.addr,!1,Ap),Mn(e,n)}}function qv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(yn(e,n))return;Rp.set(n),i.uniformMatrix3fv(this.addr,!1,Rp),Mn(e,n)}}function Yv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(yn(e,n))return;Tp.set(n),i.uniformMatrix4fv(this.addr,!1,Tp),Mn(e,n)}}function Zv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;i.uniform2iv(this.addr,t),Mn(e,t)}}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yn(e,t))return;i.uniform3iv(this.addr,t),Mn(e,t)}}function jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;i.uniform4iv(this.addr,t),Mn(e,t)}}function Jv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;i.uniform2uiv(this.addr,t),Mn(e,t)}}function ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yn(e,t))return;i.uniform3uiv(this.addr,t),Mn(e,t)}}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;i.uniform4uiv(this.addr,t),Mn(e,t)}}function ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ju.compareFunction=e.isReversedDepthBuffer()?Lc:Ic,r=ju):r=Gp,e.setTexture2D(t||r,s)}function iy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xp,s)}function sy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qp,s)}function ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wp,s)}function oy(i){switch(i){case 5126:return kv;case 35664:return Vv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Zv;case 35667:case 35671:return $v;case 35668:case 35672:return Kv;case 35669:case 35673:return jv;case 5125:return Jv;case 36294:return Qv;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(i,t){i.uniform1fv(this.addr,t)}function ly(i,t){let e=Yr(t,this.size,2);i.uniform2fv(this.addr,e)}function cy(i,t){let e=Yr(t,this.size,3);i.uniform3fv(this.addr,e)}function hy(i,t){let e=Yr(t,this.size,4);i.uniform4fv(this.addr,e)}function uy(i,t){let e=Yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dy(i,t){let e=Yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fy(i,t){let e=Yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function py(i,t){i.uniform1iv(this.addr,t)}function my(i,t){i.uniform2iv(this.addr,t)}function gy(i,t){i.uniform3iv(this.addr,t)}function xy(i,t){i.uniform4iv(this.addr,t)}function _y(i,t){i.uniform1uiv(this.addr,t)}function vy(i,t){i.uniform2uiv(this.addr,t)}function yy(i,t){i.uniform3uiv(this.addr,t)}function My(i,t){i.uniform4uiv(this.addr,t)}function Sy(i,t,e){let n=this.cache,s=t.length,r=Hc(e,s);yn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ju:o=Gp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ey(i,t,e){let n=this.cache,s=t.length,r=Hc(e,s);yn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xp,r[o])}function by(i,t,e){let n=this.cache,s=t.length,r=Hc(e,s);yn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qp,r[o])}function wy(i,t,e){let n=this.cache,s=t.length,r=Hc(e,s);yn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wp,r[o])}function Ty(i){switch(i){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return xy;case 5125:return _y;case 36294:return vy;case 36295:return yy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return wy}}var Ju=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=oy(e.type)}},Qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ty(e.type)}},td=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function Cp(i,t){i.seq.push(t),i.map[t.id]=t}function Ry(i,t,e){let n=i.name,s=n.length;for($u.lastIndex=0;;){let r=$u.exec(n),o=$u.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cp(e,c===void 0?new Ju(a,i,t):new Qu(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new td(a),Cp(e,p)),e=p}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ry(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Pp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ay=37297,Cy=0;function Py(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ip=new oe;function Iy(i){pe._getMatrix(Ip,pe.workingColorSpace,i);let t=`mat3( ${Ip.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Py(i.getShaderSource(t),a)}else return r}function Ly(i,t){let e=Iy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Dy={[Qo]:"Linear",[ta]:"Reinhard",[ea]:"Cineon",[Ys]:"ACESFilmic",[ia]:"AgX",[sa]:"Neutral",[na]:"Custom"};function Ny(i,t){let e=Dy[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uc=new A;function Uy(){pe.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),t=Uc.y.toFixed(4),e=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function Oy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function By(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ga(i){return i!==""}function Dp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Np(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(i){return i.replace(Hy,ky)}var zy=new Map;function ky(i,t){let e=de[t];if(e===void 0){let n=zy.get(t);if(n!==void 0)e=de[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ed(e)}var Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(i){return i.replace(Vy,Gy)}function Gy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Wy={[Ko]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Xy(i){return Wy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qy={[Ts]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function Yy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zy={[Zs]:"ENVMAP_MODE_REFRACTION"};function $y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ky={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[jf]:"ENVMAP_BLENDING_ADD"};function jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ky[i.combine]||"ENVMAP_BLENDING_NONE"}function Jy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Xy(e),c=Yy(e),h=$y(e),p=jy(e),f=Jy(e),u=Fy(e),g=Oy(r),v=s.createProgram(),m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ga).join(`
`),d.length>0&&(d+=`
`)):(m=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),d=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?de.tonemapping_pars_fragment:"",e.toneMapping!==vi?Ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Ly("linearToOutputTexel",e.outputColorSpace),Uy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),o=ed(o),o=Dp(o,e),o=Np(o,e),a=ed(a),a=Dp(a,e),a=Np(a,e),o=Up(o),a=Up(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=_+m+o,x=_+d+a,S=Pp(s,s.VERTEX_SHADER,y),E=Pp(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(E)||"",F=I.trim(),V=N.trim(),B=D.trim(),Q=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{let nt=Lp(s,S,"vertex"),et=Lp(s,E,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+nt+`
`+et)}else F!==""?ee("WebGLProgram: Program Info Log:",F):(V===""||B==="")&&(W=!1);W&&(P.diagnostics={runnable:Q,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(S),s.deleteShader(E),M=new Xr(s,v),w=By(s,v)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,Ay)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}var t1=0,nd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new id(t),e.set(t,n)),n}},id=class{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}};function e1(i){return i===Cs||i===ua||i===da}function n1(i,t,e,n,s,r){let o=new Cr,a=new nd,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,w,T,P,I,N){let D=P.fog,F=I.geometry,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Q=t.get(M.envMap||V,B),W=Q&&Q.mapping===ra?Q.image.height:null,nt=u[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&ee("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,bt=et!==void 0?et.length:0,Rt=0;F.morphAttributes.position!==void 0&&(Rt=1),F.morphAttributes.normal!==void 0&&(Rt=2),F.morphAttributes.color!==void 0&&(Rt=3);let jt,Nt,Ht,U;if(nt){let Ue=Ui[nt];jt=Ue.vertexShader,Nt=Ue.fragmentShader}else{jt=M.vertexShader,Nt=M.fragmentShader;let Ue=a.getVertexShaderStage(M),Te=a.getFragmentShaderStage(M);a.update(M,Ue,Te),Ht=Ue.id,U=Te.id}let k=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,lt=I.isBatchedMesh===!0,mt=!!M.map,zt=!!M.matcap,K=!!Q,st=!!M.aoMap,rt=!!M.lightMap,ct=!!M.bumpMap&&M.wireframe===!1,dt=!!M.normalMap,Bt=!!M.displacementMap,Dt=!!M.emissiveMap,kt=!!M.metalnessMap,te=!!M.roughnessMap,O=M.anisotropy>0,_e=M.clearcoat>0,le=M.dispersion>0,L=M.retroreflectivity>0,R=M.iridescence>0,G=M.sheen>0,q=M.transmission>0,tt=O&&!!M.anisotropyMap,ft=_e&&!!M.clearcoatMap,xt=_e&&!!M.clearcoatNormalMap,it=_e&&!!M.clearcoatRoughnessMap,at=R&&!!M.iridescenceMap,yt=R&&!!M.iridescenceThicknessMap,Wt=G&&!!M.sheenColorMap,vt=G&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Ut=!!M.specularColorMap,Zt=!!M.specularIntensityMap,re=q&&!!M.transmissionMap,z=q&&!!M.thicknessMap,wt=!!M.gradientMap,ot=!!M.alphaMap,Tt=M.alphaTest>0,Pt=!!M.alphaHash,ht=!!M.extensions,$t=vi;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&($t=i.toneMapping);let Vt={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:Nt,defines:M.defines,customVertexShaderID:Ht,customFragmentShaderID:U,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:lt,batchingColor:lt&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:mt,matcap:zt,envMap:K,envMapMode:K&&Q.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:rt,bumpMap:ct,normalMap:dt,displacementMap:Bt,emissiveMap:Dt,normalMapObjectSpace:dt&&M.normalMapType===tp,normalMapTangentSpace:dt&&M.normalMapType===fa,packedNormalMap:dt&&M.normalMapType===fa&&e1(M.normalMap.format),metalnessMap:kt,roughnessMap:te,anisotropy:O,anisotropyMap:tt,clearcoat:_e,clearcoatMap:ft,clearcoatNormalMap:xt,clearcoatRoughnessMap:it,dispersion:le,retroreflection:L,iridescence:R,iridescenceMap:at,iridescenceThicknessMap:yt,sheen:G,sheenColorMap:Wt,sheenRoughnessMap:vt,specularMap:_t,specularColorMap:Ut,specularIntensityMap:Zt,transmission:q,transmissionMap:re,thicknessMap:z,gradientMap:wt,opaque:M.transparent===!1&&M.blending===ws&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:Tt,alphaHash:Pt,combine:M.combine,mapUv:mt&&g(M.map.channel),aoMapUv:st&&g(M.aoMap.channel),lightMapUv:rt&&g(M.lightMap.channel),bumpMapUv:ct&&g(M.bumpMap.channel),normalMapUv:dt&&g(M.normalMap.channel),displacementMapUv:Bt&&g(M.displacementMap.channel),emissiveMapUv:Dt&&g(M.emissiveMap.channel),metalnessMapUv:kt&&g(M.metalnessMap.channel),roughnessMapUv:te&&g(M.roughnessMap.channel),anisotropyMapUv:tt&&g(M.anisotropyMap.channel),clearcoatMapUv:ft&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(M.sheenRoughnessMap.channel),specularMapUv:_t&&g(M.specularMap.channel),specularColorMapUv:Ut&&g(M.specularColorMap.channel),specularIntensityMapUv:Zt&&g(M.specularIntensityMap.channel),transmissionMapUv:re&&g(M.transmissionMap.channel),thicknessMapUv:z&&g(M.thicknessMap.channel),alphaMapUv:ot&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(dt||O),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(mt||ot),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&dt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:J,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:mt&&M.map.isVideoTexture===!0&&pe.getTransfer(M.map.colorSpace)===Se,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&pe.getTransfer(M.emissiveMap.colorSpace)===Se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ne,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ht&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&M.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)w.push(T),w.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(d(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function d(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){let w=u[M.type],T;if(w){let P=Ui[w];T=pn.clone(P.uniforms)}else T=M.uniforms;return T}function x(M,w){let T=h.get(w);return T!==void 0?++T.usedTimes:(T=new Qy(i,w,M,s),c.push(T),h.set(w,T)),T}function S(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function b(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:b}}function i1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,v,m,d){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},i[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=g,_.materialVariant=o(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=m,_.group=d),t++,_}function l(f,u,g,v,m,d,_){_.reversedDepth===!0&&(m=-m);let y=a(f,u,g,v,m,d);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(f,u,g,v,m,d){let _=a(f,u,g,v,m,d);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,u){e.length>1&&e.sort(f||s1),n.length>1&&n.sort(u||Op),s.length>1&&s.sort(u||Op)}function p(){for(let f=t,u=i.length;f<u;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function r1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bp,i.set(n,[o])):s>=r.length?(o=new Bp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Qt};break;case"SpotLight":e={position:new A,direction:new A,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function a1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l1=0;function c1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h1(i){let t=new o1,e=a1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Mt,o=new Mt;function a(c){let h=0,p=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,g=0,v=0,m=0,d=0,_=0,y=0,x=0,S=0,E=0,b=0,M=0,w=0,T=0;c.sort(c1);for(let I=0,N=c.length;I<N;I++){let D=c[I],F=D.color,V=D.intensity,B=D.distance,Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Cs?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=F.r*V,p+=F.g*V,f+=F.b*V;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],V);T++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=Q;let bt=nt.getViewportCount();for(let Rt=0;Rt<bt;Rt++)n.sunShadowMatrix[v+Rt]=nt.getMatrix(Rt),n.sunShadowCascade[v+Rt]=nt._cascadeData[Rt];v+=bt,g++}n.sun[u]=W,u++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(V),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;let nt=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,nt.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=nt.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=Q,b++}_++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=W,y++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let nt=D.shadow,et=e.get(D);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,et.shadowCameraNear=nt.camera.near,et.shadowCameraFar=nt.camera.far,n.pointShadow[d]=et,n.pointShadowMap[d]=Q,n.pointShadowMatrix[d]=D.shadow.matrix,E++}n.point[d]=W,d++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(V),W.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[x]=W,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let P=n.hash;(P.sunLength!==u||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==M||P.numLightProbes!==T)&&(n.sun.length=u,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=d,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,P.sunLength=u,P.directionalLength=m,P.pointLength=d,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=M,P.numLightProbes=T,n.version=l1++)}function l(c,h){let p=0,f=0,u=0,g=0,v=0,m=0,d=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let x=c[_];if(x.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),p++}else if(x.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),u++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:n}}function Hp(i){let t=new h1(i),e=[],n=[],s=[];function r(f){p.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function u1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hp(i),t.set(s,[a])):r>=o.length?(a=new Hp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
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
}`,p1=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],m1=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],zp=new Mt,ma=new A,Ku=new A;function g1(i,t,e){let n=new Dr,s=new $,r=new $,o=new Ye,a=new Cl,l=new Pl,c={},h=e.maxTextureSize,p={[bs]:dn,[dn]:bs,[Ne]:Ne},f=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:d1,fragmentShader:f1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new X(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let d=this.type;this.render=function(E,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Gl&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ko);let w=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(rn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=d!==this.type;N&&b.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=E.length;D<F;D++){let V=E[D],B=V.shadow;if(B===void 0){ee("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Q=B.getFrameExtents();s.multiply(Q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===kr){if(V.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ge(s.x,s.y,{format:Cs,type:Qe,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Ii(s.x,s.y,si),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Pi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn}else V.isPointLight?(B.map=new Fc(s.x),B.map.depthTexture=new El(s.x,yi)):(B.map=new Ge(s.x,s.y),B.map.depthTexture=new Ii(s.x,s.y,yi)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Pi,this.type===Ko?(B.map.depthTexture.compareFunction=W?Lc:Ic,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let nt=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,M);for(let et=0;et<nt;et++){let bt=B.getCamera(et);if(V.isPointLight){let Rt=B.camera,jt=B.matrix,Nt=V.distance||Rt.far;Nt!==Rt.far&&(Rt.far=Nt,Rt.updateProjectionMatrix()),ma.setFromMatrixPosition(V.matrixWorld),Rt.position.copy(ma),Ku.copy(Rt.position),Ku.add(p1[et]),Rt.up.copy(m1[et]),Rt.lookAt(Ku),Rt.updateMatrixWorld(),jt.makeTranslation(-ma.x,-ma.y,-ma.z),zp.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(zp,Rt.coordinateSystem,Rt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,et),i.clear();else{et===0&&(i.setRenderTarget(B.map),i.clear());let Rt=B.getViewport(et);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),I.viewport(o)}n=B.getFrustum(et),x(b,M,bt,V,this.type)}B.isPointLightShadow!==!0&&this.type===kr&&_(B,M),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,P)};function _(E,b){let M=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ge(s.x,s.y,{format:Cs,type:Qe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,M,f,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,M,u,v,null)}function y(E,b,M,w){let T=null,P=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=M.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let I=T.uuid,N=b.uuid,D=c[I];D===void 0&&(D={},c[I]=D);let F=D[N];F===void 0&&(F=T.clone(),D[N]=F,b.addEventListener("dispose",S)),T=F}if(T.visible=b.visible,T.wireframe=b.wireframe,w===kr?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:p[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let I=i.properties.get(T);I.light=M}return T}function x(E,b,M,w,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===kr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let N=t.update(E),D=E.material;if(Array.isArray(D)){let F=N.groups;for(let V=0,B=F.length;V<B;V++){let Q=F[V],W=D[Q.materialIndex];if(W&&W.visible){let nt=y(E,W,w,T);E.onBeforeShadow(i,E,b,M,N,nt,Q),i.renderBufferDirect(M,null,N,nt,E,Q),E.onAfterShadow(i,E,b,M,N,nt,Q)}}}else if(D.visible){let F=y(E,D,w,T);E.onBeforeShadow(i,E,b,M,N,F,null),i.renderBufferDirect(M,null,N,F,E,null),E.onAfterShadow(i,E,b,M,N,F,null)}}let I=E.children;for(let N=0,D=I.length;N<D;N++)x(I[N],b,M,w,T)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let w=c[M],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function x1(i,t){function e(){let z=!1,wt=new Ye,ot=null,Tt=new Ye(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!z&&(i.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){z=Pt},setClear:function(Pt,ht,$t,Vt,Ue){Ue===!0&&(Pt*=Vt,ht*=Vt,$t*=Vt),wt.set(Pt,ht,$t,Vt),Tt.equals(wt)===!1&&(i.clearColor(Pt,ht,$t,Vt),Tt.copy(wt))},reset:function(){z=!1,ot=null,Tt.set(-1,0,0,0)}}}function n(){let z=!1,wt=!1,ot=null,Tt=null,Pt=null;return{setReversed:function(ht){if(wt!==ht){let $t=t.get("EXT_clip_control");ht?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),wt=ht;let Vt=Pt;Pt=null,this.setClear(Vt)}},getReversed:function(){return wt},setTest:function(ht){ht?k(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!z&&(i.depthMask(ht),ot=ht)},setFunc:function(ht){if(wt&&(ht=up[ht]),Tt!==ht){switch(ht){case ul:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ht}},setLocked:function(ht){z=ht},setClear:function(ht){Pt!==ht&&(Pt=ht,wt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){z=!1,ot=null,Tt=null,Pt=null,wt=!1}}}function s(){let z=!1,wt=null,ot=null,Tt=null,Pt=null,ht=null,$t=null,Vt=null,Ue=null;return{setTest:function(Te){z||(Te?k(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!z&&(i.stencilMask(Te),wt=Te)},setFunc:function(Te,ci,bi){(ot!==Te||Tt!==ci||Pt!==bi)&&(i.stencilFunc(Te,ci,bi),ot=Te,Tt=ci,Pt=bi)},setOp:function(Te,ci,bi){(ht!==Te||$t!==ci||Vt!==bi)&&(i.stencilOp(Te,ci,bi),ht=Te,$t=ci,Vt=bi)},setLocked:function(Te){z=Te},setClear:function(Te){Ue!==Te&&(i.clearStencil(Te),Ue=Te)},reset:function(){z=!1,wt=null,ot=null,Tt=null,Pt=null,ht=null,$t=null,Vt=null,Ue=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},f={},u=new WeakMap,g=[],v=null,m=!1,d=null,_=null,y=null,x=null,S=null,E=null,b=null,M=new Qt(0,0,0),w=0,T=!1,P=null,I=null,N=null,D=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Q=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Q>=2);let nt=null,et={},bt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),jt=new Ye().fromArray(bt),Nt=new Ye().fromArray(Rt);function Ht(z,wt,ot,Tt){let Pt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(z,ht),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ot;$t++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(wt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ht}let U={};U[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(br),ct(!1),dt(bu),k(i.CULL_FACE),st(rn);function k(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function J(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ut(z,wt){return f[z]!==wt?(i.bindFramebuffer(z,wt),f[z]=wt,z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function lt(z,wt){let ot=g,Tt=!1;if(z){ot=u.get(wt),ot===void 0&&(ot=[],u.set(wt,ot));let Pt=z.textures;if(ot.length!==Pt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,$t=Pt.length;ht<$t;ht++)ot[ht]=i.COLOR_ATTACHMENT0+ht;ot.length=Pt.length,Tt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ot)}function mt(z){return v!==z?(i.useProgram(z),v=z,!0):!1}let zt={[ii]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};zt[Bf]=i.MIN,zt[Hf]=i.MAX;let K={[qs]:i.ZERO,[zf]:i.ONE,[kf]:i.SRC_COLOR,[Ru]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Jo]:i.DST_COLOR,[jo]:i.DST_ALPHA,[Vf]:i.ONE_MINUS_SRC_COLOR,[Au]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[qf]:i.CONSTANT_COLOR,[Yf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function st(z,wt,ot,Tt,Pt,ht,$t,Vt,Ue,Te){if(z===rn){m===!0&&(J(i.BLEND),m=!1);return}if(m===!1&&(k(i.BLEND),m=!0),z!==Wl){if(z!==d||Te!==T){if((_!==ii||S!==ii)&&(i.blendEquation(i.FUNC_ADD),_=ii,S=ii),Te)switch(z){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xs:i.blendFunc(i.ONE,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",z);break}else switch(z){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wu:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",z);break}y=null,x=null,E=null,b=null,M.set(0,0,0),w=0,d=z,T=Te}return}Pt=Pt||wt,ht=ht||ot,$t=$t||Tt,(wt!==_||Pt!==S)&&(i.blendEquationSeparate(zt[wt],zt[Pt]),_=wt,S=Pt),(ot!==y||Tt!==x||ht!==E||$t!==b)&&(i.blendFuncSeparate(K[ot],K[Tt],K[ht],K[$t]),y=ot,x=Tt,E=ht,b=$t),(Vt.equals(M)===!1||Ue!==w)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ue),M.copy(Vt),w=Ue),d=z,T=!1}function rt(z,wt){z.side===Ne?J(i.CULL_FACE):k(i.CULL_FACE);let ot=z.side===dn;wt&&(ot=!ot),ct(ot),z.blending===ws&&z.transparent===!1?st(rn):st(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Tt=z.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Dt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function dt(z){z!==Nf?(k(i.CULL_FACE),z!==I&&(z===bu?i.cullFace(i.BACK):z===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),I=z}function Bt(z){z!==N&&(B&&i.lineWidth(z),N=z)}function Dt(z,wt,ot){z?(k(i.POLYGON_OFFSET_FILL),(D!==wt||F!==ot)&&(D=wt,F=ot,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,ot))):J(i.POLYGON_OFFSET_FILL)}function kt(z){z?k(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function te(z){z===void 0&&(z=i.TEXTURE0+V-1),nt!==z&&(i.activeTexture(z),nt=z)}function O(z,wt,ot){ot===void 0&&(nt===null?ot=i.TEXTURE0+V-1:ot=nt);let Tt=et[ot];Tt===void 0&&(Tt={type:void 0,texture:void 0},et[ot]=Tt),(Tt.type!==z||Tt.texture!==wt)&&(nt!==ot&&(i.activeTexture(ot),nt=ot),i.bindTexture(z,wt||U[z]),Tt.type=z,Tt.texture=wt)}function _e(){let z=et[nt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function R(){try{i.texSubImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function G(){try{i.texSubImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function ft(){try{i.texStorage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function xt(){try{i.texStorage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function it(){try{i.texImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function at(){try{i.texImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function yt(z){return p[z]!==void 0?p[z]:i.getParameter(z)}function Wt(z,wt){p[z]!==wt&&(i.pixelStorei(z,wt),p[z]=wt)}function vt(z){jt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),jt.copy(z))}function _t(z){Nt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Nt.copy(z))}function Ut(z,wt){let ot=c.get(wt);ot===void 0&&(ot=new WeakMap,c.set(wt,ot));let Tt=ot.get(z);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,z.name),ot.set(z,Tt))}function Zt(z,wt){let Tt=c.get(wt).get(z);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,z.__bindingPointIndex),l.set(wt,Tt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},nt=null,et={},f={},u=new WeakMap,g=[],v=null,m=!1,d=null,_=null,y=null,x=null,S=null,E=null,b=null,M=new Qt(0,0,0),w=0,T=!1,P=null,I=null,N=null,D=null,F=null,jt.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:J,bindFramebuffer:ut,drawBuffers:lt,useProgram:mt,setBlending:st,setMaterial:rt,setFlipSided:ct,setCullFace:dt,setLineWidth:Bt,setPolygonOffset:Dt,setScissorTest:kt,activeTexture:te,bindTexture:O,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:L,texImage2D:it,texImage3D:at,pixelStorei:Wt,getParameter:yt,updateUBOMapping:Ut,uniformBlockBinding:Zt,texStorage2D:ft,texStorage3D:xt,texSubImage2D:R,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:tt,scissor:vt,viewport:_t,reset:re}}function _1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap,p=new Set,f,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,R){return g?new OffscreenCanvas(L,R):Mo("canvas")}function m(L,R,G){let q=1,tt=le(L);if((tt.width>G||tt.height>G)&&(q=G/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ft=Math.floor(q*tt.width),xt=Math.floor(q*tt.height);f===void 0&&(f=v(ft,xt));let it=R?v(ft,xt):f;return it.width=ft,it.height=xt,it.getContext("2d").drawImage(L,0,0,ft,xt),ee("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ft+"x"+xt+")."),it}else return"data"in L&&ee("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),L;return L}function d(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,R,G,q,tt,ft=!1){if(L!==null){if(i[L]!==void 0)return i[L];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt;q&&(xt=t.get("EXT_texture_norm16"),xt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=R;if(R===i.RED&&(G===i.FLOAT&&(it=i.R32F),G===i.HALF_FLOAT&&(it=i.R16F),G===i.UNSIGNED_BYTE&&(it=i.R8),G===i.UNSIGNED_SHORT&&xt&&(it=xt.R16_EXT),G===i.SHORT&&xt&&(it=xt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.R8UI),G===i.UNSIGNED_SHORT&&(it=i.R16UI),G===i.UNSIGNED_INT&&(it=i.R32UI),G===i.BYTE&&(it=i.R8I),G===i.SHORT&&(it=i.R16I),G===i.INT&&(it=i.R32I)),R===i.RG&&(G===i.FLOAT&&(it=i.RG32F),G===i.HALF_FLOAT&&(it=i.RG16F),G===i.UNSIGNED_BYTE&&(it=i.RG8),G===i.UNSIGNED_SHORT&&xt&&(it=xt.RG16_EXT),G===i.SHORT&&xt&&(it=xt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RG8UI),G===i.UNSIGNED_SHORT&&(it=i.RG16UI),G===i.UNSIGNED_INT&&(it=i.RG32UI),G===i.BYTE&&(it=i.RG8I),G===i.SHORT&&(it=i.RG16I),G===i.INT&&(it=i.RG32I)),R===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RGB8UI),G===i.UNSIGNED_SHORT&&(it=i.RGB16UI),G===i.UNSIGNED_INT&&(it=i.RGB32UI),G===i.BYTE&&(it=i.RGB8I),G===i.SHORT&&(it=i.RGB16I),G===i.INT&&(it=i.RGB32I)),R===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),G===i.UNSIGNED_INT&&(it=i.RGBA32UI),G===i.BYTE&&(it=i.RGBA8I),G===i.SHORT&&(it=i.RGBA16I),G===i.INT&&(it=i.RGBA32I)),R===i.RGB&&(G===i.UNSIGNED_SHORT&&xt&&(it=xt.RGB16_EXT),G===i.SHORT&&xt&&(it=xt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),R===i.RGBA){let at=ft?yo:pe.getTransfer(tt);G===i.FLOAT&&(it=i.RGBA32F),G===i.HALF_FLOAT&&(it=i.RGBA16F),G===i.UNSIGNED_BYTE&&(it=at===Se?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&xt&&(it=xt.RGBA16_EXT),G===i.SHORT&&xt&&(it=xt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(L,R){let G;return L?R===null||R===yi||R===As?G=i.DEPTH24_STENCIL8:R===si?G=i.DEPTH32F_STENCIL8:R===Vr&&(G=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===yi||R===As?G=i.DEPTH_COMPONENT24:R===si?G=i.DEPTH_COMPONENT32F:R===Vr&&(G=i.DEPTH_COMPONENT16),G}function E(L,R){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==Rn?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function b(L){let R=L.target;R.removeEventListener("dispose",b),w(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&p.delete(R)}function M(L){let R=L.target;R.removeEventListener("dispose",M),P(R)}function w(L){let R=n.get(L);if(R.__webglInit===void 0)return;let G=L.source,q=u.get(G);if(q){let tt=q[R.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(L),Object.keys(q).length===0&&u.delete(G)}n.remove(L)}function T(L){let R=n.get(L);i.deleteTexture(R.__webglTexture);let G=L.source,q=u.get(G);delete q[R.__cacheKey],o.memory.textures--}function P(L){let R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(R.__webglFramebuffer[q]))for(let tt=0;tt<R.__webglFramebuffer[q].length;tt++)i.deleteFramebuffer(R.__webglFramebuffer[q][tt]);else i.deleteFramebuffer(R.__webglFramebuffer[q]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[q])}else{if(Array.isArray(R.__webglFramebuffer))for(let q=0;q<R.__webglFramebuffer.length;q++)i.deleteFramebuffer(R.__webglFramebuffer[q]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let q=0;q<R.__webglColorRenderbuffer.length;q++)R.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[q]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let G=L.textures;for(let q=0,tt=G.length;q<tt;q++){let ft=n.get(G[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(G[q])}n.remove(L)}let I=0;function N(){I=0}function D(){return I}function F(L){I=L}function V(){let L=I;return L>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function B(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function Q(L,R){let G=n.get(L);if(L.isVideoTexture&&O(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){let q=L.image;if(q===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,L,R);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+R)}function W(L,R){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){J(G,L,R);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+R)}function nt(L,R){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){J(G,L,R);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+R)}function et(L,R){let G=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){ut(G,L,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+R)}let bt={[nn]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},Rt={[sn]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},jt={[np]:i.NEVER,[ap]:i.ALWAYS,[ip]:i.LESS,[Ic]:i.LEQUAL,[sp]:i.EQUAL,[Lc]:i.GEQUAL,[rp]:i.GREATER,[op]:i.NOTEQUAL};function Nt(L,R){if(R.type===si&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Rn||R.magFilter===Yl||R.magFilter===oa||R.magFilter===Rs||R.minFilter===Rn||R.minFilter===Yl||R.minFilter===oa||R.minFilter===Rs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,bt[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,bt[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,bt[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Rt[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Rt[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,jt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===sn||R.minFilter!==oa&&R.minFilter!==Rs||R.type===si&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ht(L,R){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",b));let q=R.source,tt=u.get(q);tt===void 0&&(tt={},u.set(q,tt));let ft=B(R);if(ft!==L.__cacheKey){tt[ft]===void 0&&(tt[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[ft].usedTimes++;let xt=tt[L.__cacheKey];xt!==void 0&&(tt[L.__cacheKey].usedTimes--,xt.usedTimes===0&&T(R)),L.__cacheKey=ft,L.__webglTexture=tt[ft].texture}return G}function U(L,R,G){return Math.floor(Math.floor(L/G)/R)}function k(L,R,G,q){let ft=L.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,G,q,R.data);else{ft.sort((Wt,vt)=>Wt.start-vt.start);let xt=0;for(let Wt=1;Wt<ft.length;Wt++){let vt=ft[xt],_t=ft[Wt],Ut=vt.start+vt.count,Zt=U(_t.start,R.width,4),re=U(vt.start,R.width,4);_t.start<=Ut+1&&Zt===re&&U(_t.start+_t.count-1,R.width,4)===Zt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++xt,ft[xt]=_t)}ft.length=xt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Wt=0,vt=ft.length;Wt<vt;Wt++){let _t=ft[Wt],Ut=Math.floor(_t.start/4),Zt=Math.ceil(_t.count/4),re=Ut%R.width,z=Math.floor(Ut/R.width),wt=Zt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,re,z,wt,ot,G,q,R.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function J(L,R,G){let q=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(q=i.TEXTURE_3D);let tt=Ht(L,R),ft=R.source;e.bindTexture(q,L.__webglTexture,i.TEXTURE0+G);let xt=n.get(ft);if(ft.version!==xt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ot=pe.getPrimaries(pe.workingColorSpace),Tt=R.colorSpace===es?null:pe.getPrimaries(R.colorSpace),Pt=R.colorSpace===es||ot===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let at=m(R.image,!1,s.maxTextureSize);at=_e(R,at);let yt=r.convert(R.format,R.colorSpace),Wt=r.convert(R.type),vt=x(R.internalFormat,yt,Wt,R.normalized,R.colorSpace,R.isVideoTexture);Nt(q,R);let _t,Ut=R.mipmaps,Zt=R.isVideoTexture!==!0,re=xt.__version===void 0||tt===!0,z=ft.dataReady,wt=E(R,at);if(R.isDepthTexture)vt=S(R.format===Di,R.type),re&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,vt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,yt,Wt,null));else if(R.isDataTexture)if(Ut.length>0){Zt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,vt,Ut[0].width,Ut[0].height);for(let ot=0,Tt=Ut.length;ot<Tt;ot++)_t=Ut[ot],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,yt,Wt,_t.data):e.texImage2D(i.TEXTURE_2D,ot,vt,_t.width,_t.height,0,yt,Wt,_t.data);R.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(i.TEXTURE_2D,wt,vt,at.width,at.height),z&&k(R,at,yt,Wt)):e.texImage2D(i.TEXTURE_2D,0,vt,at.width,at.height,0,yt,Wt,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Zt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,vt,Ut[0].width,Ut[0].height,at.depth);for(let ot=0,Tt=Ut.length;ot<Tt;ot++)if(_t=Ut[ot],R.format!==Vn)if(yt!==null)if(Zt){if(z)if(R.layerUpdates.size>0){let Pt=Wu(_t.width,_t.height,R.format,R.type);for(let ht of R.layerUpdates){let $t=_t.data.subarray(ht*Pt/_t.data.BYTES_PER_ELEMENT,(ht+1)*Pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ht,_t.width,_t.height,1,yt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,at.depth,yt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,vt,_t.width,_t.height,at.depth,0,_t.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,at.depth,yt,Wt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,vt,_t.width,_t.height,at.depth,0,yt,Wt,_t.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Zt&&re&&e.texStorage2D(i.TEXTURE_2D,wt,vt,Ut[0].width,Ut[0].height);for(let ot=0,Tt=Ut.length;ot<Tt;ot++)_t=Ut[ot],R.format!==Vn?yt!==null?Zt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,vt,_t.width,_t.height,0,_t.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,yt,Wt,_t.data):e.texImage2D(i.TEXTURE_2D,ot,vt,_t.width,_t.height,0,yt,Wt,_t.data)}else if(R.isDataArrayTexture)if(Zt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,vt,at.width,at.height,at.depth),z)if(R.layerUpdates.size>0){let ot=Wu(at.width,at.height,R.format,R.type);for(let Tt of R.layerUpdates){let Pt=at.data.subarray(Tt*ot/at.data.BYTES_PER_ELEMENT,(Tt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,at.width,at.height,1,yt,Wt,Pt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Wt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,at.width,at.height,at.depth,0,yt,Wt,at.data);else if(R.isData3DTexture)Zt?(re&&e.texStorage3D(i.TEXTURE_3D,wt,vt,at.width,at.height,at.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Wt,at.data)):e.texImage3D(i.TEXTURE_3D,0,vt,at.width,at.height,at.depth,0,yt,Wt,at.data);else if(R.isFramebufferTexture){if(re)if(Zt)e.texStorage2D(i.TEXTURE_2D,wt,vt,at.width,at.height);else{let ot=at.width,Tt=at.height;for(let Pt=0;Pt<wt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,vt,ot,Tt,0,yt,Wt,null),ot>>=1,Tt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),p.add(R),ot.onpaint=Tt=>{let Pt=Tt.changedElements;for(let ht of p)Pt.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Pt=i.RGBA,ht=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,ht,$t,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Zt&&re){let ot=le(Ut[0]);e.texStorage2D(i.TEXTURE_2D,wt,vt,ot.width,ot.height)}for(let ot=0,Tt=Ut.length;ot<Tt;ot++)_t=Ut[ot],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,yt,Wt,_t):e.texImage2D(i.TEXTURE_2D,ot,vt,yt,Wt,_t);R.generateMipmaps=!1}else if(Zt){if(re){let ot=le(at);e.texStorage2D(i.TEXTURE_2D,wt,vt,ot.width,ot.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Wt,at)}else e.texImage2D(i.TEXTURE_2D,0,vt,yt,Wt,at);d(R)&&_(q),xt.__version=ft.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ut(L,R,G){if(R.image.length!==6)return;let q=Ht(L,R),tt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);let ft=n.get(tt);if(tt.version!==ft.__version||q===!0){e.activeTexture(i.TEXTURE0+G);let xt=pe.getPrimaries(pe.workingColorSpace),it=R.colorSpace===es?null:pe.getPrimaries(R.colorSpace),at=R.colorSpace===es||xt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let yt=R.isCompressedTexture||R.image[0].isCompressedTexture,Wt=R.image[0]&&R.image[0].isDataTexture,vt=[];for(let ht=0;ht<6;ht++)!yt&&!Wt?vt[ht]=m(R.image[ht],!0,s.maxCubemapSize):vt[ht]=Wt?R.image[ht].image:R.image[ht],vt[ht]=_e(R,vt[ht]);let _t=vt[0],Ut=r.convert(R.format,R.colorSpace),Zt=r.convert(R.type),re=x(R.internalFormat,Ut,Zt,R.normalized,R.colorSpace),z=R.isVideoTexture!==!0,wt=ft.__version===void 0||q===!0,ot=tt.dataReady,Tt=E(R,_t);Nt(i.TEXTURE_CUBE_MAP,R);let Pt;if(yt){z&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,re,_t.width,_t.height);for(let ht=0;ht<6;ht++){Pt=vt[ht].mipmaps;for(let $t=0;$t<Pt.length;$t++){let Vt=Pt[$t];R.format!==Vn?Ut!==null?z?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,0,0,Vt.width,Vt.height,Ut,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,re,Vt.width,Vt.height,0,Vt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,0,0,Vt.width,Vt.height,Ut,Zt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,re,Vt.width,Vt.height,0,Ut,Zt,Vt.data)}}}else{if(Pt=R.mipmaps,z&&wt){Pt.length>0&&Tt++;let ht=le(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,re,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Wt){z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,vt[ht].width,vt[ht].height,Ut,Zt,vt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,vt[ht].width,vt[ht].height,0,Ut,Zt,vt[ht].data);for(let $t=0;$t<Pt.length;$t++){let Ue=Pt[$t].image[ht].image;z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,0,0,Ue.width,Ue.height,Ut,Zt,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,re,Ue.width,Ue.height,0,Ut,Zt,Ue.data)}}else{z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut,Zt,vt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Ut,Zt,vt[ht]);for(let $t=0;$t<Pt.length;$t++){let Vt=Pt[$t];z?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,0,0,Ut,Zt,Vt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,re,Ut,Zt,Vt.image[ht])}}}d(R)&&_(i.TEXTURE_CUBE_MAP),ft.__version=tt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function lt(L,R,G,q,tt,ft){let xt=r.convert(G.format,G.colorSpace),it=r.convert(G.type),at=x(G.internalFormat,xt,it,G.normalized,G.colorSpace),yt=n.get(R),Wt=n.get(G);if(Wt.__renderTarget=R,!yt.__hasExternalTextures){let vt=Math.max(1,R.width>>ft),_t=Math.max(1,R.height>>ft);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ft,at,vt,_t,R.depth,0,xt,it,null):e.texImage2D(tt,ft,at,vt,_t,0,xt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,tt,Wt.__webglTexture,0,kt(R)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,tt,Wt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(L,R,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){let q=R.depthTexture,tt=q&&q.isDepthTexture?q.type:null,ft=S(R.stencilBuffer,tt),xt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(R),ft,R.width,R.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(R),ft,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,L)}else{let q=R.textures;for(let tt=0;tt<q.length;tt++){let ft=q[tt],xt=r.convert(ft.format,ft.colorSpace),it=r.convert(ft.type),at=x(ft.internalFormat,xt,it,ft.normalized,ft.colorSpace);te(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(R),at,R.width,R.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(R),at,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,at,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(L,R,G){let q=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(R.depthTexture);if(tt.__renderTarget=R,(!tt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),q){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,R.depthTexture.addEventListener("dispose",b)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,R.depthTexture);let yt=r.convert(R.depthTexture.format),Wt=r.convert(R.depthTexture.type),vt;R.depthTexture.format===Pi?vt=i.DEPTH_COMPONENT24:R.depthTexture.format===Di&&(vt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,R.width,R.height,0,yt,Wt,null)}}else Q(R.depthTexture,0);let ft=tt.__webglTexture,xt=kt(R),it=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,at=R.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===Pi)te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,ft,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,ft,0);else if(R.depthTexture.format===Di)te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,ft,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(L){let R=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),q){let tt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),R.__depthDisposeCallback=tt}R.__boundDepthTexture=q}if(L.depthTexture&&!R.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)zt(R.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?zt(R.__webglFramebuffer[0],L,0):zt(R.__webglFramebuffer,L,0)}else if(G){R.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[q]),R.__webglDepthbuffer[q]===void 0)R.__webglDepthbuffer[q]=i.createRenderbuffer(),mt(R.__webglDepthbuffer[q],L,!1);else{let tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ft)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),mt(R.__webglDepthbuffer,L,!1);else{let tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(L,R,G){let q=n.get(L);R!==void 0&&lt(q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&K(L)}function rt(L){let R=L.texture,G=n.get(L),q=n.get(R);L.addEventListener("dispose",M);let tt=L.textures,ft=L.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=R.version,o.memory.textures++),ft){G.__webglFramebuffer=[];for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0){G.__webglFramebuffer[it]=[];for(let at=0;at<R.mipmaps.length;at++)G.__webglFramebuffer[it][at]=i.createFramebuffer()}else G.__webglFramebuffer[it]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){G.__webglFramebuffer=[];for(let it=0;it<R.mipmaps.length;it++)G.__webglFramebuffer[it]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(xt)for(let it=0,at=tt.length;it<at;it++){let yt=n.get(tt[it]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&te(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let it=0;it<tt.length;it++){let at=tt[it];G.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[it]);let yt=r.convert(at.format,at.colorSpace),Wt=r.convert(at.type),vt=x(at.internalFormat,yt,Wt,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),_t=kt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,G.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,R);for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)lt(G.__webglFramebuffer[it][at],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else lt(G.__webglFramebuffer[it],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);d(R)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let it=0,at=tt.length;it<at;it++){let yt=tt[it],Wt=n.get(yt),vt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Wt.__webglTexture),Nt(vt,yt),lt(G.__webglFramebuffer,L,yt,i.COLOR_ATTACHMENT0+it,vt,0),d(yt)&&_(vt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(it=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Nt(it,R),R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)lt(G.__webglFramebuffer[at],L,R,i.COLOR_ATTACHMENT0,it,at);else lt(G.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,it,0);d(R)&&_(it),e.unbindTexture()}L.depthBuffer&&K(L)}function ct(L){let R=L.textures;for(let G=0,q=R.length;G<q;G++){let tt=R[G];if(d(tt)){let ft=y(L),xt=n.get(tt).__webglTexture;e.bindTexture(ft,xt),_(ft),e.unbindTexture()}}}let dt=[],Bt=[];function Dt(L){if(L.samples>0){if(te(L)===!1){let R=L.textures,G=L.width,q=L.height,tt=i.COLOR_BUFFER_BIT,ft=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(L),it=R.length>1;if(it)for(let yt=0;yt<R.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<R.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Wt=n.get(R[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,tt,i.NEAREST),l===!0&&(dt.length=0,Bt.length=0,dt.push(i.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(dt.push(ft),Bt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let yt=0;yt<R.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Wt=n.get(R[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function kt(L){return Math.min(s.maxSamples,L.samples)}function te(L){let R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function O(L){let R=o.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function _e(L,R){let G=L.colorSpace,q=L.format,tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==vo&&G!==es&&(pe.getTransfer(G)===Se?(q!==Vn||tt!==Dn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",G)),R}function le(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=et,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function v1(i,t){function e(n,s=es){let r,o=pe.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===Lu)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Qe)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===Vn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===Jl)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ha)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac||n===lc||n===cc||n===ua||n===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===Ec||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Tc||n===Rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Cc||n===da||n===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`,sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ee({vertexShader:y1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rd=class extends mi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,f=null,u=null,g=null,v=typeof XRWebGLBinding<"u",m=new sd,d={},_=e.getContextAttributes(),y=null,x=null,S=[],E=[],b=new $,M=null,w=null,T=new Tn;T.viewport=new Ye;let P=new Tn;P.viewport=new Ye;let I=[T,P],N=new Vl,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=S[U];return k===void 0&&(k=new Pr,S[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=S[U];return k===void 0&&(k=new Pr,S[U]=k),k.getGripSpace()},this.getHand=function(U){let k=S[U];return k===void 0&&(k=new Pr,S[U]=k),k.getHandSpace()};function V(U){let k=E.indexOf(U.inputSource);if(k===-1)return;let J=S[k];J!==void 0&&(J.update(U.inputSource,U.frame,c||o),J.dispatchEvent({type:U.type,data:U.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Q);for(let U=0;U<S.length;U++){let k=E[U];k!==null&&(E[U]=null,S[U].disconnect(k))}D=null,F=null,m.reset();for(let U in d)delete d[U];if(t.setRenderTarget(y),u=null,f=null,p=null,s=null,x=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(b.width,b.height,!1),w!==null){let U=w.camera;U.fov=w.fov,U.zoom=w.zoom,U.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ut=null,lt=null;_.depth&&(lt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?Di:Pi,ut=_.stencil?As:yi);let mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ge(f.textureWidth,f.textureHeight,{format:Vn,type:Dn,depthTexture:new Ii(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let J={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Ge(u.framebufferWidth,u.framebufferHeight,{format:Vn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(U){for(let k=0;k<U.removed.length;k++){let J=U.removed[k],ut=E.indexOf(J);ut>=0&&(E[ut]=null,S[ut].disconnect(J))}for(let k=0;k<U.added.length;k++){let J=U.added[k],ut=E.indexOf(J);if(ut===-1){for(let mt=0;mt<S.length;mt++)if(mt>=E.length){E.push(J),ut=mt;break}else if(E[mt]===null){E[mt]=J,ut=mt;break}if(ut===-1)break}let lt=S[ut];lt&&lt.connect(J)}}let W=new A,nt=new A;function et(U,k,J){W.setFromMatrixPosition(k.matrixWorld),nt.setFromMatrixPosition(J.matrixWorld);let ut=W.distanceTo(nt),lt=k.projectionMatrix.elements,mt=J.projectionMatrix.elements,zt=lt[14]/(lt[10]-1),K=lt[14]/(lt[10]+1),st=(lt[9]+1)/lt[5],rt=(lt[9]-1)/lt[5],ct=(lt[8]-1)/lt[0],dt=(mt[8]+1)/mt[0],Bt=zt*ct,Dt=zt*dt,kt=ut/(-ct+dt),te=kt*-ct;if(k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(te),U.translateZ(kt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),lt[10]===-1)U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let O=zt+kt,_e=K+kt,le=Bt-te,L=Dt+(ut-te),R=st*K/_e*O,G=rt*K/_e*O;U.projectionMatrix.makePerspective(le,L,R,G,O,_e),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function bt(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let k=U.near,J=U.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(J=m.depthFar)),N.near=P.near=T.near=k,N.far=P.far=T.far=J,(D!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,F=N.far),N.layers.mask=U.layers.mask|6,T.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let ut=U.parent,lt=N.cameras;bt(N,ut);for(let mt=0;mt<lt.length;mt++)bt(lt[mt],ut);lt.length===2?et(N,T,P):N.projectionMatrix.copy(T.projectionMatrix),w===null&&U.isPerspectiveCamera&&(w={camera:U,fov:U.fov,zoom:U.zoom}),Rt(U,N,ut)};function Rt(U,k,J){J===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(J.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Rr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(U){return d[U]};let jt=null;function Nt(U,k){if(h=k.getViewerPose(c||o),g=k,h!==null){let J=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let ut=!1;J.length!==N.cameras.length&&(N.cameras.length=0,ut=!0);for(let K=0;K<J.length;K++){let st=J[K],rt=null;if(u!==null)rt=u.getViewport(st);else{let dt=p.getViewSubImage(f,st);rt=dt.viewport,K===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let ct=I[K];ct===void 0&&(ct=new Tn,ct.layers.enable(K),ct.viewport=new Ye,I[K]=ct),ct.matrix.fromArray(st.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(st.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(rt.x,rt.y,rt.width,rt.height),K===0&&(N.matrix.copy(ct.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ut===!0&&N.cameras.push(ct)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let K=p.getDepthInformation(J[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(lt&&lt.includes("camera-access")&&v){t.state.unbindTexture(),p=n.getBinding();for(let K=0;K<J.length;K++){let st=J[K].camera;if(st){let rt=d[st];rt||(rt=new Io,d[st]=rt);let ct=p.getCameraImage(st);rt.sourceTexture=ct}}}}for(let J=0;J<S.length;J++){let ut=E[J],lt=S[J];ut!==null&&lt!==void 0&&lt.update(ut,k,c||o)}jt&&jt(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let Ht=new kp;Ht.setAnimationLoop(Nt),this.setAnimationLoop=function(U){jt=U},this.dispose=function(){}}},S1=new Mt,Yp=new oe;Yp.set(-1,0,0,0,1,0,0,0,1);function E1(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ku(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,y,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&u(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yp),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let E=S.program;n.uniformBlockBinding(x,E)}function c(x,S){let E=s[x.id];E===void 0&&(m(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",_));let b=S.program;n.updateUBOMapping(x,b);let M=t.render.frame;r[x.id]!==M&&(f(x),r[x.id]=M)}function h(x){let S=p();x.__bindingPointIndex=S;let E=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let S=s[x.id],E=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,w=E.length;M<w;M++){let T=E[M];if(Array.isArray(T))for(let P=0,I=T.length;P<I;P++)u(T[P],M,P,b);else u(T,M,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,S,E,b){if(v(x,S,E,b)===!0){let M=x.__offset,w=x.value;if(Array.isArray(w)){let T=0;for(let P=0;P<w.length;P++){let I=w[P],N=d(I);g(I,x.__data,T),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function g(x,S,E){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,E)}function v(x,S,E,b){let M=x.value,w=S+"_"+E;if(b[w]===void 0)return typeof M=="number"||typeof M=="boolean"?b[w]=M:ArrayBuffer.isView(M)?b[w]=M.slice():b[w]=M.clone(),!0;{let T=b[w];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return b[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function m(x){let S=x.uniforms,E=0,b=16;for(let w=0,T=S.length;w<T;w++){let P=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,N=P.length;I<N;I++){let D=P[I],F=Array.isArray(D.value)?D.value:[D.value];for(let V=0,B=F.length;V<B;V++){let Q=F[V],W=d(Q),nt=E%b,et=nt%W.boundary,bt=nt+et;E+=et,bt!==0&&b-bt<W.storage&&(E+=b-bt),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=W.storage}}}let M=E%b;return M>0&&(E+=b-M),x.__size=E,x.__cache={},this}function d(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),S}function _(x){let S=x.target;S.removeEventListener("dispose",_);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function y(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var w1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function T1(){return Ni===null&&(Ni=new Ji(w1,16,16,Cs,Qe),Ni.name="DFG_LUT",Ni.minFilter=Rn,Ni.magFilter=Rn,Ni.wrapS=Ri,Ni.wrapT=Ri,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Oc=class{constructor(t={}){let{canvas:e=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=u,m=new Set([tc,Ql,Jl]),d=new Set([Dn,yi,Vr,As,$l,Kl]),_=new Uint32Array(4),y=new Int32Array(4),x=new A,S=null,E=null,b=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,I=null,N=null,D=null,F=null;this._outputColorSpace=Oe;let V=0,B=0,Q=null,W=-1,nt=null,et=new Ye,bt=new Ye,Rt=null,jt=new Qt(0),Nt=0,Ht=e.width,U=e.height,k=1,J=null,ut=null,lt=new Ye(0,0,Ht,U),mt=new Ye(0,0,Ht,U),zt=!1,K=new Dr,st=!1,rt=!1,ct=new Mt,dt=new A,Bt=new Ye,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function te(){return Q===null?k:1}let O=n;function _e(C,H){return e.getContext(C,H)}let le,L,R,G,q,tt,ft,xt,it,at,yt,Wt,vt,_t,Ut,Zt,re,z,wt,ot,Tt,Pt,ht;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",ci,!1),O===null){let H="webgl2";if(O=_e(H,C),O===null)throw _e(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(C){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ci,!1),ne("WebGLRenderer: "+C.message),C}function $t(){le=new Dv(O),le.init(),Tt=new v1(O,le),L=new Ev(O,le,t,Tt),R=new x1(O,le),L.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),N=O.createFramebuffer(),D=O.createFramebuffer(),F=O.createFramebuffer(),G=new Fv(O),q=new i1,tt=new _1(O,le,R,q,L,Tt,G),ft=new Lv(T),xt=new Bg(O),Pt=new Mv(O,xt),it=new Nv(O,xt,G,Pt),at=new Bv(O,it,xt,Pt,G),z=new Ov(O,L,tt),Ut=new bv(q),yt=new n1(T,ft,le,L,Pt,Ut),Wt=new E1(T,q),vt=new r1,_t=new u1(le),re=new yv(T,ft,R,at,g,l),Zt=new g1(T,at,L),ht=new b1(O,G,L,R),wt=new Sv(O,le,G),ot=new Uv(O,le,G),G.programs=yt.programs,T.capabilities=L,T.extensions=le,T.properties=q,T.renderLists=vt,T.shadowMap=Zt,T.state=R,T.info=G}v!==Dn&&(w=new zv(v,e.width,e.height,a,s,r));let Vt=new rd(T,O);this.xr=Vt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(Ht,U,!1))},this.getSize=function(C){return C.set(Ht,U)},this.setSize=function(C,H,j=!0){if(Vt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=C,U=H,e.width=Math.floor(C*k),e.height=Math.floor(H*k),j===!0&&(e.style.width=C+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(Ht*k,U*k).floor()},this.setDrawingBufferSize=function(C,H,j){Ht=C,U=H,k=j,e.width=Math.floor(C*j),e.height=Math.floor(H*j),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(v===Dn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(et)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,H,j,Y){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,H,j,Y),R.viewport(et.copy(lt).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(mt)},this.setScissor=function(C,H,j,Y){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,H,j,Y),R.scissor(bt.copy(mt).multiplyScalar(k).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(C){R.setScissorTest(zt=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,j=!0){let Y=0;if(C){let Z=!1;if(Q!==null){let Ct=Q.texture.format;Z=m.has(Ct)}if(Z){let Ct=Q.texture.type,Lt=d.has(Ct),At=re.getClearColor(),Ft=re.getClearAlpha(),Xt=At.r,he=At.g,xe=At.b;Lt?(_[0]=Xt,_[1]=he,_[2]=xe,_[3]=Ft,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Xt,y[1]=he,y[2]=xe,y[3]=Ft,O.clearBufferiv(O.COLOR,0,y))}else Y|=O.COLOR_BUFFER_BIT}H&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ci,!1),re.dispose(),vt.dispose(),_t.dispose(),q.dispose(),ft.dispose(),at.dispose(),Pt.dispose(),ht.dispose(),yt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Vd),Vt.removeEventListener("sessionend",Gd),Us.stop()};function Ue(C){C.preventDefault(),So("WebGLRenderer: Context Lost."),P=!0}function Te(){So("WebGLRenderer: Context Restored."),P=!1;let C=G.autoReset,H=Zt.enabled,j=Zt.autoUpdate,Y=Zt.needsUpdate,Z=Zt.type;$t(),G.autoReset=C,Zt.enabled=H,Zt.autoUpdate=j,Zt.needsUpdate=Y,Zt.type=Z}function ci(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bi(C){let H=C.target;H.removeEventListener("dispose",bi),n0(H)}function n0(C){i0(C),q.remove(C)}function i0(C){let H=q.get(C).programs;H!==void 0&&(H.forEach(function(j){yt.releaseProgram(j)}),C.isShaderMaterial&&yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,j,Y,Z,Ct){H===null&&(H=Dt);let Lt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,At=o0(C,H,j,Y,Z);R.setMaterial(Y,Lt);let Ft=j.index,Xt=1;if(Y.wireframe===!0){if(Ft=it.getWireframeAttribute(j),Ft===void 0)return;Xt=2}let he=j.drawRange,xe=j.attributes.position,Ot=he.start*Xt,Re=(he.start+he.count)*Xt;Ct!==null&&(Ot=Math.max(Ot,Ct.start*Xt),Re=Math.min(Re,(Ct.start+Ct.count)*Xt)),Ft!==null?(Ot=Math.max(Ot,0),Re=Math.min(Re,Ft.count)):xe!=null&&(Ot=Math.max(Ot,0),Re=Math.min(Re,xe.count));let an=Re-Ot;if(an<0||an===1/0)return;Pt.setup(Z,Y,At,j,Ft);let ke,De=wt;if(Ft!==null&&(ke=xt.get(Ft),De=ot,De.setIndex(ke)),Z.isMesh)Y.wireframe===!0?(R.setLineWidth(Y.wireframeLinewidth*te()),De.setMode(O.LINES)):De.setMode(O.TRIANGLES);else if(Z.isLine){let Pn=Y.linewidth;Pn===void 0&&(Pn=1),R.setLineWidth(Pn*te()),Z.isLineSegments?De.setMode(O.LINES):Z.isLineLoop?De.setMode(O.LINE_LOOP):De.setMode(O.LINE_STRIP)}else Z.isPoints?De.setMode(O.POINTS):Z.isSprite&&De.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(le.get("WEBGL_multi_draw"))De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Pn=Z._multiDrawStarts,It=Z._multiDrawCounts,Fn=Z._multiDrawCount,ve=Ft?xt.get(Ft).bytesPerElement:1,ei=q.get(Y).currentProgram.getUniforms();for(let wi=0;wi<Fn;wi++)ei.setValue(O,"_gl_DrawID",wi),De.render(Pn[wi]/ve,It[wi])}else if(Z.isInstancedMesh)De.renderInstances(Ot,an,Z.count);else if(j.isInstancedBufferGeometry){let Pn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,It=Math.min(j.instanceCount,Pn);De.renderInstances(Ot,an,It)}else De.render(Ot,an)};function kd(C,H,j,Y){I!==null&&C.isNodeMaterial&&I.setObject(Y,C),st===!0&&Ut.setState(C,j,!1),C.transparent===!0&&C.side===Ne&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,Ua(C,H,Y),C.side=bs,C.needsUpdate=!0,Ua(C,H,Y),C.side=Ne):Ua(C,H,Y)}this.compile=function(C,H,j=null){j===null&&(j=C),I!==null&&I.renderStart(C,H,j),E=_t.get(j),E.init(H),M.push(E),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),C!==j&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),rt=this.localClippingEnabled,st=Ut.init(this.clippingPlanes,rt),st===!0&&Ut.setGlobalState(this.clippingPlanes,H),I!==null&&Zt.render(E.state.shadowsArray,j,H);let Y=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Lt=0;Lt<Ct.length;Lt++){let At=Ct[Lt];kd(At,j,H,Z),Y.add(At)}else kd(Ct,j,H,Z),Y.add(Ct)}),E=M.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(C,H,j=null){let Y=this.compile(C,H,j);return new Promise(Z=>{function Ct(){if(Y.forEach(function(Lt){let Ft=q.get(Lt).currentProgram;(Ft===void 0||Ft.isReady())&&Y.delete(Lt)}),Y.size===0){Z(C);return}setTimeout(Ct,10)}le.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Bh=null;function s0(C){Bh&&Bh(C)}function Vd(){Us.stop()}function Gd(){Us.start()}let Us=new kp;Us.setAnimationLoop(s0),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(C){Bh=C,Vt.setAnimationLoop(C),C===null?Us.stop():Us.start()},Vt.addEventListener("sessionstart",Vd),Vt.addEventListener("sessionend",Gd),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,H);let j=Vt.enabled===!0&&Vt.isPresenting===!0,Y=w!==null&&(Q===null||j)&&w.begin(T,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(H),H=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,H,Q),E=_t.get(C,M.length),E.init(H),E.state.textureUnits=tt.getTextureUnits(),M.push(E),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(ct,pi,H.reversedDepth),rt=this.localClippingEnabled,st=Ut.init(this.clippingPlanes,rt),S=vt.get(C,b.length),S.init(),b.push(S),Vt.enabled===!0&&Vt.isPresenting===!0){let Lt=T.xr.getDepthSensingMesh();Lt!==null&&Hh(Lt,H,-1/0,T.sortObjects)}Hh(C,H,0,T.sortObjects),S.finish(),I!==null&&I.updateLights(E.state.lightsArray),T.sortObjects===!0&&S.sort(J,ut),kt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,kt&&re.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ut.beginShadows();let Z=E.state.shadowsArray;if(Zt.render(Z,C,H),st===!0&&Ut.endShadows(),(Y&&w.hasRenderPass())===!1){let Lt=S.opaque,At=S.transmissive;if(E.setupLights(),H.isArrayCamera){let Ft=H.cameras;if(At.length>0)for(let Xt=0,he=Ft.length;Xt<he;Xt++){let xe=Ft[Xt];Xd(Lt,At,C,xe)}kt&&re.render(C);for(let Xt=0,he=Ft.length;Xt<he;Xt++){let xe=Ft[Xt];Wd(S,C,xe,xe.viewport)}}else At.length>0&&Xd(Lt,At,C,H),kt&&re.render(C),Wd(S,C,H)}Q!==null&&B===0&&(tt.updateMultisampleRenderTarget(Q),tt.updateRenderTargetMipmap(Q)),Y&&w.end(T),C.isScene===!0&&C.onAfterRender(T,C,H),Pt.resetDefaultState(),W=-1,nt=null,M.pop(),M.length>0?(E=M[M.length-1],tt.setTextureUnits(E.state.textureUnits),st===!0&&Ut.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,I!==null&&I.renderEnd()};function Hh(C,H,j,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(K)){Y&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let Lt=at.update(C),At=C.material;At.visible&&S.push(C,Lt,At,j,Bt.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(K))){let Lt=at.update(C),At=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Bt.copy(Lt.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(At)){let Ft=Lt.groups;for(let Xt=0,he=Ft.length;Xt<he;Xt++){let xe=Ft[Xt],Ot=At[xe.materialIndex];Ot&&Ot.visible&&S.push(C,Lt,Ot,j,Bt.z,xe,H)}}else At.visible&&S.push(C,Lt,At,j,Bt.z,null,H)}}let Ct=C.children;for(let Lt=0,At=Ct.length;Lt<At;Lt++)Hh(Ct[Lt],H,j,Y)}function Wd(C,H,j,Y){let{opaque:Z,transmissive:Ct,transparent:Lt}=C;E.setupLightsView(j),st===!0&&Ut.setGlobalState(T.clippingPlanes,j),Y&&R.viewport(et.copy(Y)),Z.length>0&&Na(Z,H,j),Ct.length>0&&Na(Ct,H,j),Lt.length>0&&Na(Lt,H,j),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Xd(C,H,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let Ot=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new Ge(1,1,{generateMipmaps:!0,type:Ot?Qe:Dn,minFilter:Rs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Ct=E.state.transmissionRenderTarget[Y.id],Lt=Y.viewport||et;Ct.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);let At=T.getRenderTarget(),Ft=T.getActiveCubeFace(),Xt=T.getActiveMipmapLevel();T.setRenderTarget(Ct),T.getClearColor(jt),Nt=T.getClearAlpha(),Nt<1&&T.setClearColor(16777215,.5),T.clear(),kt&&re.render(j);let he=T.toneMapping;T.toneMapping=vi;let xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),st===!0&&Ut.setGlobalState(T.clippingPlanes,Y),Na(C,j,Y),tt.updateMultisampleRenderTarget(Ct),tt.updateRenderTargetMipmap(Ct),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Re=0,an=H.length;Re<an;Re++){let ke=H[Re],{object:De,geometry:Pn,material:It,group:Fn}=ke;if(It.side===Ne&&De.layers.test(Y.layers)){let ve=It.side;It.side=dn,It.needsUpdate=!0,qd(De,j,Y,Pn,It,Fn),It.side=ve,It.needsUpdate=!0,Ot=!0}}Ot===!0&&(tt.updateMultisampleRenderTarget(Ct),tt.updateRenderTargetMipmap(Ct))}T.setRenderTarget(At,Ft,Xt),T.setClearColor(jt,Nt),xe!==void 0&&(Y.viewport=xe),T.toneMapping=he}function Na(C,H,j){let Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ct=C.length;Z<Ct;Z++){let Lt=C[Z],{object:At,geometry:Ft,group:Xt}=Lt,he=Lt.material;he.allowOverride===!0&&Y!==null&&(he=Y),At.layers.test(j.layers)&&qd(At,H,j,Ft,he,Xt)}}function qd(C,H,j,Y,Z,Ct){I!==null&&Z.isNodeMaterial&&I.setObject(C,Z),C.onBeforeRender(T,H,j,Y,Z,Ct),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(T,H,j,Y,C,Ct),Z.transparent===!0&&Z.side===Ne&&Z.forceSinglePass===!1?(Z.side=dn,Z.needsUpdate=!0,T.renderBufferDirect(j,H,Y,Z,C,Ct),Z.side=bs,Z.needsUpdate=!0,T.renderBufferDirect(j,H,Y,Z,C,Ct),Z.side=Ne):T.renderBufferDirect(j,H,Y,Z,C,Ct),C.onAfterRender(T,H,j,Y,Z,Ct)}function Ua(C,H,j){H.isScene!==!0&&(H=Dt);let Y=q.get(C),Z=E.state.lights,Ct=E.state.shadowsArray,Lt=Z.state.version,At=yt.getParameters(C,Z.state,Ct,H,j,E.state.lightProbeGridArray),Ft=yt.getProgramCacheKey(At),Xt=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let he=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=ft.get(C.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Xt===void 0&&(C.addEventListener("dispose",bi),Xt=new Map,Y.programs=Xt);let xe=Xt.get(Ft);if(xe!==void 0){if(Y.currentProgram===xe&&Y.lightsStateVersion===Lt)return Zd(C,At),xe}else At.uniforms=yt.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,j,At),C.onBeforeCompile(At,T),xe=yt.acquireProgram(At,Ft),Xt.set(Ft,xe),Y.uniforms=At.uniforms;let Ot=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ot.clippingPlanes=Ut.uniform),Zd(C,At),Y.needsLights=l0(C),Y.lightsStateVersion=Lt,Y.needsLights&&(Ot.ambientLightColor.value=Z.state.ambient,Ot.lightProbe.value=Z.state.probe,Ot.sunLights.value=Z.state.sun,Ot.sunLightShadows.value=Z.state.sunShadow,Ot.directionalLights.value=Z.state.directional,Ot.directionalLightShadows.value=Z.state.directionalShadow,Ot.spotLights.value=Z.state.spot,Ot.spotLightShadows.value=Z.state.spotShadow,Ot.rectAreaLights.value=Z.state.rectArea,Ot.ltc_1.value=Z.state.rectAreaLTC1,Ot.ltc_2.value=Z.state.rectAreaLTC2,Ot.pointLights.value=Z.state.point,Ot.pointLightShadows.value=Z.state.pointShadow,Ot.hemisphereLights.value=Z.state.hemi,Ot.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ot.sunShadowCascade.value=Z.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Z.state.spotLightMatrix,Ot.spotLightMap.value=Z.state.spotLightMap,Ot.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=xe,Y.uniformsList=null,xe}function Yd(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=Xr.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Zd(C,H){let j=q.get(C);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function r0(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(H.matrixWorld);for(let j=0,Y=C.length;j<Y;j++){let Z=C[j];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function o0(C,H,j,Y,Z){H.isScene!==!0&&(H=Dt),tt.resetTextureUnits();let Ct=H.fog,Lt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,At=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pe.workingColorSpace,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Xt=ft.get(Y.envMap||Lt,Ft),he=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,xe=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!j.morphAttributes.position,Re=!!j.morphAttributes.normal,an=!!j.morphAttributes.color,ke=vi;Y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=T.toneMapping);let De=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pn=De!==void 0?De.length:0,It=q.get(Y),Fn=E.state.lights;if(st===!0&&(rt===!0||C!==nt)){let Fe=C===nt&&Y.id===W;Ut.setState(Y,C,Fe)}let ve=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Fn.state.version||It.outputColorSpace!==At||Z.isBatchedMesh&&It.batching===!1||!Z.isBatchedMesh&&It.batching===!0||Z.isBatchedMesh&&It.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&It.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&It.instancing===!1||!Z.isInstancedMesh&&It.instancing===!0||Z.isSkinnedMesh&&It.skinning===!1||!Z.isSkinnedMesh&&It.skinning===!0||Z.isInstancedMesh&&It.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&It.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&It.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&It.instancingMorph===!1&&Z.morphTexture!==null||It.envMap!==Xt||Y.fog===!0&&It.fog!==Ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Ut.numPlanes||It.numIntersection!==Ut.numIntersection)||It.vertexAlphas!==he||It.vertexTangents!==xe||It.morphTargets!==Ot||It.morphNormals!==Re||It.morphColors!==an||It.toneMapping!==ke||It.morphTargetsCount!==Pn||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,It.__version=Y.version);let ei=It.currentProgram;ve===!0&&(ei=Ua(Y,H,Z),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,ei,It));let wi=!1,ls=!1,ir=!1,Pe=ei.getUniforms(),en=It.uniforms;if(R.useProgram(ei.program)&&(wi=!0,ls=!0,ir=!0),Y.id!==W&&(W=Y.id,ls=!0),It.needsLights){let Fe=r0(E.state.lightProbeGridArray,Z);It.lightProbeGrid!==Fe&&(It.lightProbeGrid=Fe,ls=!0)}if(wi||nt!==C){R.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(O,"projectionMatrix",C.projectionMatrix),Pe.setValue(O,"viewMatrix",C.matrixWorldInverse);let hs=Pe.map.cameraPosition;hs!==void 0&&hs.setValue(O,dt.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&Pe.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pe.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),nt!==C&&(nt=C,ls=!0,ir=!0)}if(It.needsLights&&(Fn.state.sunShadowMap.length>0&&Pe.setValue(O,"sunShadowMap",Fn.state.sunShadowMap,tt),Fn.state.directionalShadowMap.length>0&&Pe.setValue(O,"directionalShadowMap",Fn.state.directionalShadowMap,tt),Fn.state.spotShadowMap.length>0&&Pe.setValue(O,"spotShadowMap",Fn.state.spotShadowMap,tt),Fn.state.pointShadowMap.length>0&&Pe.setValue(O,"pointShadowMap",Fn.state.pointShadowMap,tt)),Z.isSkinnedMesh){Pe.setOptional(O,Z,"bindMatrix"),Pe.setOptional(O,Z,"bindMatrixInverse");let Fe=Z.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Pe.setValue(O,"boneTexture",Fe.boneTexture,tt))}Z.isBatchedMesh&&(Pe.setOptional(O,Z,"batchingTexture"),Pe.setValue(O,"batchingTexture",Z._matricesTexture,tt),Pe.setOptional(O,Z,"batchingIdTexture"),Pe.setValue(O,"batchingIdTexture",Z._indirectTexture,tt),Pe.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(O,"batchingColorTexture",Z._colorsTexture,tt));let cs=j.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&z.update(Z,j,ei),(ls||It.receiveShadow!==Z.receiveShadow)&&(It.receiveShadow=Z.receiveShadow,Pe.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=T1()),ls){if(Pe.setValue(O,"toneMappingExposure",T.toneMappingExposure),It.needsLights&&a0(en,ir),Ct&&Y.fog===!0&&Wt.refreshFogUniforms(en,Ct),Wt.refreshMaterialUniforms(en,Y,k,U,E.state.transmissionRenderTarget[C.id]),It.needsLights&&It.lightProbeGrid){let Fe=It.lightProbeGrid;en.probesSH.value=Fe.texture,en.probesMin.value.copy(Fe.boundingBox.min),en.probesMax.value.copy(Fe.boundingBox.max),en.probesResolution.value.copy(Fe.resolution)}Xr.upload(O,Yd(It),en,tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xr.upload(O,Yd(It),en,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pe.setValue(O,"center",Z.center),Pe.setValue(O,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(O,"normalMatrix",Z.normalMatrix),Pe.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Fe=Y.uniformsGroups;for(let hs=0,sr=Fe.length;hs<sr;hs++){let Kd=Fe[hs];ht.update(Kd,ei),ht.bind(Kd,ei)}}return ei}function a0(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function l0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,H,j){let Y=q.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(C.texture).__webglTexture=H,q.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let j=q.get(C);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,j=0){Q=C,V=H,B=j;let Y=null,Z=!1,Ct=!1;if(C){let At=q.get(C);if(At.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(O.FRAMEBUFFER,At.__webglFramebuffer),et.copy(C.viewport),bt.copy(C.scissor),Rt=C.scissorTest,R.viewport(et),R.scissor(bt),R.setScissorTest(Rt),W=-1;return}else if(At.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(At.__hasExternalTextures)tt.rebindTextures(C,q.get(C.texture).__webglTexture,q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let he=C.depthTexture;if(At.__boundDepthTexture!==he){if(he!==null&&q.has(he)&&(C.width!==he.image.width||C.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}let Ft=C.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Ct=!0);let Xt=q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?Y=Xt[H][j]:Y=Xt[H],Z=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?Y=q.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[j]:Y=Xt,et.copy(C.viewport),bt.copy(C.scissor),Rt=C.scissorTest}else et.copy(lt).multiplyScalar(k).floor(),bt.copy(mt).multiplyScalar(k).floor(),Rt=zt;if(j!==0&&(Y=N),R.bindFramebuffer(O.FRAMEBUFFER,Y)&&R.drawBuffers(C,Y),R.viewport(et),R.scissor(bt),R.setScissorTest(Rt),Z){let At=q.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,j)}else if(Ct){let At=H;for(let Ft=0;Ft<C.textures.length;Ft++){let Xt=q.get(C.textures[Ft]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ft,Xt.__webglTexture,j,At)}}else if(C!==null&&j!==0){let At=q.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,j)}W=-1};function $d(C){let H=q.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=L.textureFormatReadable(C.format),H.__typeReadable=L.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,j,Y,Z,Ct,Lt,At=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){R.bindFramebuffer(O.FRAMEBUFFER,Ft);try{let Xt=C.textures[At],he=Xt.format,xe=Xt.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+At);let Ot=$d(Xt);if(Ot.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&j>=0&&j<=C.height-Z&&O.readPixels(H,j,Y,Z,Tt.convert(he),Tt.convert(xe),Ct)}finally{let Xt=Q!==null?q.get(Q).__webglFramebuffer:null;R.bindFramebuffer(O.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,H,j,Y,Z,Ct,Lt,At=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft)if(H>=0&&H<=C.width-Y&&j>=0&&j<=C.height-Z){R.bindFramebuffer(O.FRAMEBUFFER,Ft);let Xt=C.textures[At],he=Xt.format,xe=Xt.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+At);let Ot=$d(Xt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,Ct.byteLength,O.STREAM_READ),O.readPixels(H,j,Y,Z,Tt.convert(he),Tt.convert(xe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let an=Q!==null?q.get(Q).__webglFramebuffer:null;R.bindFramebuffer(O.FRAMEBUFFER,an);let ke=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hp(O,ke,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ct),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Re),O.deleteSync(ke),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,j=0){let Y=Math.pow(2,-j),Z=Math.floor(C.image.width*Y),Ct=Math.floor(C.image.height*Y),Lt=H!==null?H.x:0,At=H!==null?H.y:0;tt.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,Lt,At,Z,Ct),R.unbindTexture()},this.copyTextureToTexture=function(C,H,j=null,Y=null,Z=0,Ct=0){let Lt,At,Ft,Xt,he,xe,Ot,Re,an,ke=C.isCompressedTexture?C.mipmaps[Ct]:C.image;if(j!==null)Lt=j.max.x-j.min.x,At=j.max.y-j.min.y,Ft=j.isBox3?j.max.z-j.min.z:1,Xt=j.min.x,he=j.min.y,xe=j.isBox3?j.min.z:0;else{let en=Math.pow(2,-Z);Lt=Math.floor(ke.width*en),At=Math.floor(ke.height*en),C.isDataArrayTexture?Ft=ke.depth:C.isData3DTexture?Ft=Math.floor(ke.depth*en):Ft=1,Xt=0,he=0,xe=0}Y!==null?(Ot=Y.x,Re=Y.y,an=Y.z):(Ot=0,Re=0,an=0);let De=Tt.convert(H.format),Pn=Tt.convert(H.type),It;H.isData3DTexture?(tt.setTexture3D(H,0),It=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(tt.setTexture2DArray(H,0),It=O.TEXTURE_2D_ARRAY):(tt.setTexture2D(H,0),It=O.TEXTURE_2D),R.activeTexture(O.TEXTURE0),R.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Fn=R.getParameter(O.UNPACK_ROW_LENGTH),ve=R.getParameter(O.UNPACK_IMAGE_HEIGHT),ei=R.getParameter(O.UNPACK_SKIP_PIXELS),wi=R.getParameter(O.UNPACK_SKIP_ROWS),ls=R.getParameter(O.UNPACK_SKIP_IMAGES);R.pixelStorei(O.UNPACK_ROW_LENGTH,ke.width),R.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke.height),R.pixelStorei(O.UNPACK_SKIP_PIXELS,Xt),R.pixelStorei(O.UNPACK_SKIP_ROWS,he),R.pixelStorei(O.UNPACK_SKIP_IMAGES,xe);let ir=C.isDataArrayTexture||C.isData3DTexture,Pe=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let en=q.get(C),cs=q.get(H),Fe=q.get(en.__renderTarget),hs=q.get(cs.__renderTarget);R.bindFramebuffer(O.READ_FRAMEBUFFER,Fe.__webglFramebuffer),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let sr=0;sr<Ft;sr++)ir&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(C).__webglTexture,Z,xe+sr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Ct,an+sr)),O.blitFramebuffer(Xt,he,Lt,At,Ot,Re,Lt,At,O.DEPTH_BUFFER_BIT,O.NEAREST);R.bindFramebuffer(O.READ_FRAMEBUFFER,null),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||q.has(C)){let en=q.get(C),cs=q.get(H);R.bindFramebuffer(O.READ_FRAMEBUFFER,D),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let Fe=0;Fe<Ft;Fe++)ir?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,Z,xe+Fe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,Z),Pe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cs.__webglTexture,Ct,an+Fe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cs.__webglTexture,Ct),Z!==0?O.blitFramebuffer(Xt,he,Lt,At,Ot,Re,Lt,At,O.COLOR_BUFFER_BIT,O.NEAREST):Pe?O.copyTexSubImage3D(It,Ct,Ot,Re,an+Fe,Xt,he,Lt,At):O.copyTexSubImage2D(It,Ct,Ot,Re,Xt,he,Lt,At);R.bindFramebuffer(O.READ_FRAMEBUFFER,null),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pe?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(It,Ct,Ot,Re,an,Lt,At,Ft,De,Pn,ke.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(It,Ct,Ot,Re,an,Lt,At,Ft,De,ke.data):O.texSubImage3D(It,Ct,Ot,Re,an,Lt,At,Ft,De,Pn,ke):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ct,Ot,Re,Lt,At,De,Pn,ke.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ct,Ot,Re,ke.width,ke.height,De,ke.data):O.texSubImage2D(O.TEXTURE_2D,Ct,Ot,Re,Lt,At,De,Pn,ke);R.pixelStorei(O.UNPACK_ROW_LENGTH,Fn),R.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve),R.pixelStorei(O.UNPACK_SKIP_PIXELS,ei),R.pixelStorei(O.UNPACK_SKIP_ROWS,wi),R.pixelStorei(O.UNPACK_SKIP_IMAGES,ls),Ct===0&&H.generateMipmaps&&O.generateMipmap(It),R.unbindTexture()},this.initRenderTarget=function(C){q.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),R.unbindTexture()},this.resetState=function(){V=0,B=0,Q=null,R.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Zp={type:"change"},ad={type:"start"},Kp={type:"end"},zc=new gs,$p=new $n,R1=Math.cos(70*fn.DEG2RAD),Sn=new A,Gn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6,kc=class extends $o{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new qe,this._lastTargetPosition=new A,this._quat=new qe().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zr,this._sphericalDelta=new zr,this._scale=1,this._panOffset=new A,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new A,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C1.bind(this),this._onPointerDown=A1.bind(this),this._onPointerUp=P1.bind(this),this._onContextMenu=O1.bind(this),this._onMouseWheel=D1.bind(this),this._onKeyDown=N1.bind(this),this._onTouchStart=U1.bind(this),this._onTouchMove=F1.bind(this),this._onMouseDown=I1.bind(this),this._onMouseMove=L1.bind(this),this._interceptControlDown=B1.bind(this),this._interceptControlUp=H1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zp),this.update(),this.state=Ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Sn.copy(e).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Sn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zc.origin.copy(this.object.position),zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zc.direction))<R1?this.object.lookAt(this.target):($p.setFromNormalAndCoplanarPoint(this.object.up,this.target),zc.intersectPlane($p,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(Zp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Sn.setFromMatrixColumn(e,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,e){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(e,1):(Sn.setFromMatrixColumn(e,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Sn.copy(s).sub(this.target);let r=Sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function A1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function C1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function P1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kp),this.state=Ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function I1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case Ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case Ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(ad)}function L1(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function D1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(ad),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kp))}function N1(i){this.enabled!==!1&&this._handleKeyDown(i)}function U1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(ad)}function F1(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function O1(i){this.enabled!==!1&&i.preventDefault()}function B1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Zr=class i extends X{constructor(){let t=i.SkyShader,e=new Ee({name:t.name,uniforms:pn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:dn,depthWrite:!1});super(new Gt(1,1,1),e),this.isSky=!0}};Zr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new A},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var xa=i=>Math.min(1,Math.max(0,i)),fe=(i,t,e)=>i+(t-i)*e,ns=(i,t,e)=>{let n=xa((e-i)/(t-i));return n*n*(3-2*n)};var qt={hold:-5.75,orlop:-1.15,lower:1,middle:3.1,upper:5.2,qd:7.25,poop:9.15},gn=1.2,je=15.6,Ke=-13.4;function xn(i){let t=(i-2)/28;return .85*t*t}function pt(i,t){return qt[i]+xn(t)}function Ie(i){let t=8.65+xn(i);return t+=1.9*ns(Ke+1,Ke-1,i),t+=.9*ns(-25,-29.5,i),t}function He(i){if(i<2){let t=xa((i- -7.4)/9.4);return 24.75+4.3*(1-(1-t)*(1-t))}return 29.05+.06*(i-2)}var js=1.6;function Me(i){if(i<js){let t=xa((i- -7.4)/(js- -7.4));return fe(-25.75,-27.65,t)}return-27.65-1.1*ns(js,4.5,i)-.11*Math.max(0,i-4.5)}function $r(i){if(i<=-7.4)return 0;if(i<1.6){let e=(1.6-i)/9;return 7.9*Math.pow(1-Math.pow(e,2.4),1/2.4)}let t=(i-1.6)/(13-1.6);return 7.9*(1-.17*Math.pow(t,1.6))}function _a(i){return .8*ns(-2.4,2.4,i)}function ld(i,t){let e=ns(-6.5,1.5,t),n=fe(.58,.73,e);if(i>n){let r=xa((i-n)/(1-n)),o=fe(1.7,2.2,e),a=fe(1.05,.46,e);return Math.pow(Math.max(0,1-Math.pow(r,o)),a)}let s=fe(.44,.24,e);if(i<s){let r=xa((s-i)/s),o=fe(1.6,2,e),a=fe(1.15,.65,e),l=_a(t);return l+(1-l)*Math.pow(Math.max(0,1-Math.pow(r,o)),a)}return 1}function Et(i,t){let e=Me(t),n=He(t);return i<e||i>n?0:$r(t)*ld((i-e)/(n-e),t)}var mn=-31,ri=31,Fi=-10,Mi=14,cd=i=>(i-mn)/(ri-mn),hd=(i,t)=>(t-xn(i)-Fi)/(Mi-Fi),Kr=[{name:"lower",deck:"lower",count:15,x0:-20.4,dx:3,cy:.82,w:1.05,h:.95,lid:!0,bore:.165,len:3},{name:"middle",deck:"middle",count:14,x0:-21,dx:3.05,cy:.78,w:.95,h:.86,lid:!0,bore:.15,len:2.9},{name:"upper",deck:"upper",count:15,x0:-21,dx:3.05,cy:.74,w:.85,h:.8,lid:!0,bore:.12,len:2.6},{name:"qd",deck:"qd",count:6,x0:-20.4,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"fc",deck:"qd",count:1,x0:18.6,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"carronade",deck:"qd",count:1,x0:21.4,dx:3,cy:.66,w:.85,h:.75,lid:!1,bore:.2,len:1.6,carronade:!0}];function Oi(){let i=[];for(let t of Kr)for(let e=0;e<t.count;e++){let n=t.x0+e*t.dx;i.push({tier:t,x:n,y:qt[t.deck]+t.cy+xn(n)})}return i}var Un=[{name:"after hatch",x:-8.4,w:2.2,d:2},{name:"main hatch",x:1.8,w:2.6,d:2.4},{name:"main ladderway",x:6,w:2.4,d:2.4,ladder:!0},{name:"fore ladderway",x:10.2,w:3,d:2.6,ladder:!0},{name:"fore hatch",x:13.6,w:1.8,d:1.8},{name:"forward hatch",x:18.2,w:2.2,d:2},{name:"after ladderway",x:-12.2,w:2,d:1.6,ladder:!0}];function Vc(i,t=1){return{x:i.x,zFoot:t*(i.d/2+1),zTop:t*(i.d/2-.05),side:t}}var Gc=-5.3;function Wc(){let i=Un.find(t=>t.name==="main hatch");return{x:i.x,zFoot:-(i.d/2+1.75),zTop:-(i.d/2-.05),side:-1,hatch:i}}var Xc=[{from:"upper",to:"qd",x:gn+2.2,run:-2,z:2.6},{from:"upper",to:"qd",x:je-2.2,run:2,z:2.6},{from:"qd",to:"poop",x:Ke+2.3,run:-2,z:3.4}],jp=2.5,Jp=Kr.slice(0,3).map(i=>{let t=qt[i.deck]+i.cy;return[t-i.h/2-.2,t+i.h/2+.2]}),jr=.45,Bi={fore:{x:22.75,scale:.9,rake:0},main:{x:-2.45,scale:1,rake:.035},mizzen:{x:-19.15,scale:.72,rake:.052}},Qp={main:{course:31.19,topsail:22.25,topgallant:14.86,royal:10.97},fore:{course:27.15,topsail:19.66,topgallant:13.11,royal:9.75},mizzen:{course:19.66,topsail:14.94,topgallant:9.98,royal:7.32}},tm=-.0068;var em={day:{elev:28,az:215,color:"#fff1dc",intensity:3.2,hemi:["#cfe0f0","#30404a",.5],exposure:.55,fog:"#b9c8d2",env:.7,sky:[2.2,2.2,.003,.82],night:0,light:1},dusk:{elev:2.5,az:255,color:"#ffb27a",intensity:1.9,hemi:["#e0b8a0","#302830",.32],exposure:.62,fog:"#b98f7a",env:.55,sky:[6,2.8,.006,.9],night:.5,light:.6},night:{elev:-14,az:255,moon:{elev:34,az:140},color:"#b4c6ff",intensity:1,hemi:["#3a4c78","#06080e",.7],exposure:1.25,fog:"#0d1526",env:.45,sky:[1.2,.4,.002,.8],night:1,light:.16}};function z1(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,64);e.addColorStop(0,"rgba(255,250,235,1)"),e.addColorStop(.5,"rgba(255,250,235,1)"),e.addColorStop(.56,"rgba(200,210,255,0.35)"),e.addColorStop(1,"rgba(200,210,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="rgba(160,160,150,0.35)";for(let[s,r,o]of[[52,50,8],[74,60,6],[60,78,9],[80,44,4]])t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill();let n=new un(i);return n.colorSpace=Oe,n}var qc=class{constructor(t,e){this.renderer=t,this.scene=e,this.sky=new Zr,this.sky.scale.setScalar(8e3),this.sky.userData.noAO=!0,e.add(this.sky),this.pmrem=new qr(t),this.envScene=new ks,this.envSky=new Zr,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.sun=new Wo("#fff1dc",3.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096);let n=this.sun.shadow.camera;n.left=-60,n.right=60,n.top=60,n.bottom=-60,n.near=10,n.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun,this.sun.target),this.hemi=new ko("#cfe0f0","#30404a",.5),e.add(this.hemi),e.fog=new bo("#b9c8d2",400,3800);let s=1800,r=new Float32Array(s*3);for(let a=0;a<s;a++){let l=Math.random(),c=Math.random()*.95+.05,h=l*Math.PI*2,p=Math.acos(1-c);r[a*3]=Math.sin(p)*Math.cos(h)*3e3,r[a*3+1]=Math.cos(p)*3e3,r[a*3+2]=Math.sin(p)*Math.sin(h)*3e3}let o=new ue;o.setAttribute("position",new ye(r,3)),this.stars=new Co(o,new Nr({color:"#dfe6ff",size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1})),this.stars.renderOrder=-1,e.add(this.stars),this.moon=new Ao(new Lr({map:z1(),fog:!1,depthWrite:!1})),this.moon.scale.setScalar(150),this.moon.userData.noAO=!0,e.add(this.moon),this.nightMaterials=[],this.name=null}dir(t,e){return new A().setFromSphericalCoords(1,fn.degToRad(90-t),fn.degToRad(e))}setTime(t,e){let n=em[t]||em.day;this.name=t,this.night=n.night;let s=this.dir(n.elev,n.az);for(let o of[this.sky,this.envSky]){let a=o.material.uniforms;[a.turbidity.value,a.rayleigh.value,a.mieCoefficient.value,a.mieDirectionalG.value]=n.sky,a.sunPosition.value.copy(s)}let r=n.moon?this.dir(n.moon.elev,n.moon.az):s;this.sun.position.copy(r).multiplyScalar(150),this.sun.color.set(n.color),this.sun.intensity=n.intensity,this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.renderer.toneMappingExposure=n.exposure,this.scene.fog.color.set(n.fog),this.stars.visible=this.moon.visible=!!n.moon,n.moon&&this.moon.position.copy(r).multiplyScalar(2900),this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,.1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=n.env,e&&(e.mesh.material.envMap=this.envRT.texture,e.mesh.material.envMapIntensity=n.moon?.07:.4,e.mesh.material.roughness=n.moon?.32:.14);for(let[o,a,l]of this.nightMaterials)o.emissiveIntensity=a+(l-a)*n.night;return this.light=n.light,n}},Yc=class{constructor(t,e,n=8){this.ship=t,this.lanterns=e,this.lights=[];for(let s=0;s<n;s++){let r=new Ws("#ffb35c",0,14,1.4);t.body.add(r),this.lights.push(r)}this.timer=0}update(t,e,n,s=1/0){if(this.timer-=t,this.timer<=0){this.timer=.3;let o=this.lanterns.filter(a=>a.p.y<s+xn(a.p.x)+.3).map(a=>({l:a,d:a.p.distanceToSquared(e)})).sort((a,l)=>a.d-l.d);this.lights.forEach((a,l)=>{let c=o[l];c&&a.position.copy(c.l.p).add(new A(0,-.3,0)),a.userData.on=!!c})}let r=16*n;for(let o of this.lights)o.intensity=o.userData.on?r:0}};function wn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Jn(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Cn(i,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let s=new un(i);return t&&(s.colorSpace=Oe),e&&(s.wrapS=s.wrapT=nn),s.anisotropy=n,s.needsUpdate=!0,s}var Ze={black:"#2a2d30",ochre:"#cfa65a",red:"#a88a52",deck:"#b49c76",canvas:"#e8dfc8",copper:"#a8603a",gold:"#d4a640"};function im(i,t=2.5){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=wn(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=(c,h)=>s[(Math.min(n-1,Math.max(0,h))*e+Math.min(e-1,Math.max(0,c)))*4]/255;for(let c=0;c<n;c++)for(let h=0;h<e;h++){let p=(l(h+1,c)-l(h-1,c))*t,f=(l(h,c+1)-l(h,c-1))*t,u=Math.hypot(p,f,1),g=(c*e+h)*4;a.data[g]=(-p/u*.5+.5)*255,a.data[g+1]=(f/u*.5+.5)*255,a.data[g+2]=(1/u*.5+.5)*255,a.data[g+3]=255}return o.putImageData(a,0,0),r}function sm(){let e=wn(4096,1024),n=e.getContext("2d"),s=wn(4096/2,1024/2),r=s.getContext("2d"),o=wn(1024,256),a=o.getContext("2d"),l=4096/(ri-mn),c=1024/(Mi-Fi),h=m=>(m-mn)*l,p=m=>(Mi-m)*c,f=Jn(7);n.fillStyle=Ze.black,n.fillRect(0,0,4096,1024),r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,4096/2,1024/2),n.fillStyle=Ze.ochre;for(let[m,d]of Jp)n.fillRect(0,p(d),4096,p(m)-p(d));n.fillRect(0,p(qt.qd+1.02),4096,.09*c);for(let m=Fi;m<Mi;m+=.22){let d=[],_=mn-f()*6;for(;_<ri;)d.push(_),_+=5.5+f()*2;n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(0,p(m),4096,1.2),n.fillStyle="rgba(0,0,0,0.22)";for(let y of d)n.fillRect(h(y),p(m+.22),1.2,.22*c);r.fillStyle="rgb(70,70,70)",r.fillRect(0,p(m)/2-.5,4096/2,1.6);for(let y of d)r.fillRect(h(y)/2-.5,p(m+.22)/2,1.4,.22*c/2);r.fillStyle="rgba(100,100,100,0.8)";for(let y=mn;y<ri;y+=.75)r.fillRect(h(y)/2,p(m+.08)/2,1.2,1.2),r.fillRect(h(y)/2,p(m+.16)/2,1.2,1.2)}for(let m=0;m<9e3;m++){let d=110+f()*40;r.fillStyle=`rgba(${d|0},${d|0},${d|0},0.35)`,r.fillRect(f()*4096/2,f()*1024/2,4+f()*30,1)}for(let m=0;m<26e3;m++){let d=f()*.07;n.fillStyle=f()<.5?`rgba(0,0,0,${d})`:`rgba(255,240,210,${d*.6})`,n.fillRect(f()*4096,f()*1024,1+f()*5,1+f()*2)}for(let m of Oi()){let d=m.tier,_=m.y-xn(m.x),y=h(m.x-d.w/2),x=p(_+d.h/2),S=d.w*l,E=d.h*c;for(let M=0;M<5;M++){let w=y+f()*S,T=(.4+f()*1.2)*c,P=n.createLinearGradient(0,x+E,0,x+E+T);P.addColorStop(0,`rgba(20,14,8,${.12+f()*.12})`),P.addColorStop(1,"rgba(20,14,8,0)"),n.fillStyle=P,n.fillRect(w,x+E,2+f()*5,T)}n.fillStyle=Ze.red,n.fillRect(y,x,S,E);let b=.09;n.fillStyle="#0c0705",n.fillRect(y+b*l,x+b*c,S-2*b*l,E-2*b*c),r.fillStyle="rgb(40,40,40)",r.fillRect((y+b*l)/2,(x+b*c)/2,(S-2*b*l)/2,(E-2*b*c)/2)}for(let m of["lower","middle","upper"])for(let d=-24;d<24;d+=4.6){let _=qt[m]-.05,y=h(d+(m==="middle"?1.5:0)),x=p(_),S=n.createLinearGradient(0,x,0,x+1.1*c);S.addColorStop(0,"rgba(70,45,25,0.35)"),S.addColorStop(1,"rgba(70,45,25,0)"),n.fillStyle=S,n.fillRect(y-4,x,8,1.1*c),n.fillStyle="#3e4042",n.fillRect(y-5,x-4,10,8),n.fillStyle="#0a0806",n.beginPath(),n.ellipse(y,x,2.6,2.2,0,0,Math.PI*2),n.fill(),r.fillStyle="rgb(150,150,150)",r.fillRect(y/2-3.5,x/2-3,7,6),r.fillStyle="rgb(30,30,30)",r.fillRect(y/2-1.5,x/2-1.5,3,3)}for(let m=0;m<256;m++){let d=mn+m/256*(ri-mn),_=mn+(m+1)/256*(ri-mn),y=p(jr+.45-xn(d)),x=p(jr-xn(d)),S=n.createLinearGradient(0,y,0,x);S.addColorStop(0,"rgba(45,55,35,0)"),S.addColorStop(1,"rgba(45,55,35,0.55)"),n.fillStyle=S,n.fillRect(h(d),y,h(_)-h(d)+1,x-y)}let u=m=>{m.beginPath(),m.moveTo(0,1024);for(let d=0;d<=256;d++){let _=mn+d/256*(ri-mn);m.lineTo(h(_),p(jr-xn(_)))}m.lineTo(4096,1024),m.closePath()};n.save(),u(n),n.clip(),r.save(),r.scale(.5,.5),u(r),r.clip(),n.fillStyle=Ze.copper,n.fillRect(0,0,4096,1024),r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,4096,1024);let g=1.22,v=.36;for(let m=0,d=Fi;d<3;d+=v,m++)for(let _=mn-m%2*g*.5;_<ri;_+=g){let y=f(),x=150+y*40,S=82+y*30+f()*25,E=48+y*22;n.fillStyle=`rgb(${x|0},${S|0},${E|0})`,n.fillRect(h(_)+1,p(d+v)+1,g*l-2,v*c-2),f()<.35&&(n.fillStyle=`rgba(70,140,110,${.15+f()*.25})`,n.fillRect(h(_)+1,p(d+v)+1,g*l-2,v*c-2)),r.fillStyle="rgb(165,165,165)",r.fillRect(h(_),p(d+v),3,v*c),r.fillRect(h(_),p(d+v),g*l,3),r.fillStyle="rgb(105,105,105)";for(let b=0;b<12;b++)r.fillRect(h(_)+6+b*(g*l-12)/11,p(d+v)+6,2,2)}n.restore(),r.restore(),a.fillStyle="rgb(0,165,0)",a.fillRect(0,0,1024,256),a.beginPath(),a.moveTo(0,256);for(let m=0;m<=128;m++){let d=mn+m/128*(ri-mn);a.lineTo((d-mn)/(ri-mn)*1024,(Mi-(jr-xn(d)))/(Mi-Fi)*256)}return a.lineTo(1024,256),a.closePath(),a.fillStyle="rgb(0,105,190)",a.fill(),{map:Cn(e,{aniso:16}),metalRough:Cn(o,{srgb:!1}),normal:Cn(im(s),{srgb:!1,aniso:16})}}function rm(){let e=wn(4096,1024),n=e.getContext("2d"),s=4096/(ri-mn),r=1024/(Mi-Fi),o=h=>(h-mn)*s,a=h=>(Mi-h)*r,l=Jn(13),c=(h,p,f)=>{n.fillStyle=f,n.fillRect(0,a(p),4096,a(h)-a(p))};c(Fi,qt.orlop,"#7a6549"),c(qt.orlop,qt.lower,"#d8d0bd"),c(qt.lower,Mi,"#c9a965");for(let h=Fi;h<Mi;h+=.24)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(0,a(h),4096,1.2);for(let h=0;h<2e4;h++)n.fillStyle=`rgba(0,0,0,${l()*.06})`,n.fillRect(l()*4096,l()*1024,1+l()*6,1+l()*2);for(let h of["orlop","lower","middle","upper","qd"])n.fillStyle="rgba(60,40,20,0.55)",n.fillRect(0,a(qt[h]+.3),4096,.3*r),n.fillRect(0,a(qt[h]-.25),4096,.25*r);for(let h of Oi()){let p=h.tier,f=h.y-xn(h.x),u=o(h.x-p.w/2),g=a(f+p.h/2);n.fillStyle="#9c7f48",n.fillRect(u,g,p.w*s,p.h*r),n.fillStyle="#120b06",n.fillRect(u+.08*s,g+.08*r,(p.w-.16)*s,(p.h-.16)*r)}return Cn(e,{aniso:16})}function om(){let t=wn(256,256),e=t.getContext("2d"),n=Jn(29);e.fillStyle="#6d6a62",e.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=70+n()*90;e.fillStyle=`rgb(${r|0},${r*.97|0},${r*.9|0})`,e.beginPath(),e.ellipse(n()*256,n()*256,1+n()*4,1+n()*3,n()*3,0,Math.PI*2),e.fill()}return Cn(t,{repeat:!0})}function am(){let t=wn(1024,1024),e=t.getContext("2d"),n=Jn(3),s=1024/8*.28;for(let o=0,a=0;o<1024;o+=s,a++){let l=-n()*1024*.5;for(;l<1024;){let c=128*(5+n()*3),h=n();e.fillStyle=`rgb(${168+h*26|0},${146+h*22|0},${108+h*18|0})`,e.fillRect(l,o,c,s);for(let p=0;p<14;p++)e.fillStyle=`rgba(90,60,30,${n()*.08})`,e.fillRect(l,o+n()*s,c,1);e.fillStyle="rgba(40,25,10,0.7)",e.fillRect(l,o,2,s),e.fillStyle="rgba(60,40,20,0.55)",e.fillRect(l+6,o+s*.3,3,3),e.fillRect(l+6,o+s*.65,3,3),l+=c}e.fillStyle="rgba(25,18,10,0.85)",e.fillRect(0,o,1024,2)}return Cn(t,{repeat:!0,aniso:16})}var Kc=-2.4,Zc=13.6;function lm(i){let n=wn(2048,2048),s=n.getContext("2d"),r=wn(512,512),o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,512);let a=u=>(Zc-u)/(Zc-Kc)*2048,l=xn(-28.5);s.fillStyle=Ze.black,s.fillRect(0,0,2048,2048),s.fillStyle=Ze.copper,s.fillRect(0,a(jr),2048,2048);let c=u=>qt[u]+l;s.fillStyle=Ze.ochre,s.fillRect(0,a(c("middle")-.1),2048,.25/16*2048),s.font=`bold ${.55/16*2048}px Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=Ze.gold,s.fillText("V I C T O R Y",2048/2,a(c("middle")-.75));let h=[[c("middle")+.45,c("middle")+1.75],[c("upper")+.45,c("upper")+1.75],[c("qd")+.4,c("qd")+1.6]];for(let[u,g]of h){let v=i((u+g)/2),m=v*2,d=x=>(x/m+.5)*2048;s.fillStyle=Ze.ochre,s.fillRect(0,a(u),2048,a(u-.45)-a(u)),s.fillStyle="rgba(0,0,0,0.5)";for(let x=-v;x<v;x+=.22)s.fillRect(d(x),a(u-.08),3,a(u-.38)-a(u-.08));let _=9,y=(m-.5)/_;for(let x=0;x<_;x++){let S=-v+.25+x*y;s.fillStyle=Ze.ochre,s.fillRect(d(S),a(g+.15),.18/m*2048,a(u)-a(g+.15));let E=d(S+.22),b=d(S+y-.05);s.fillStyle="#e7dcc0",s.fillRect(E,a(g),b-E,a(u)-a(g));let M=3,w=4,T=(b-E)/M,P=(a(u)-a(g))/w;for(let I=0;I<M;I++)for(let N=0;N<w;N++){let D=30+(I*7+N*13+x*5)%9*6;s.fillStyle=`rgb(${D*.6|0},${D*.8|0},${D|0})`,s.fillRect(E+I*T+3,a(g)+N*P+3,T-6,P-6),o.fillStyle=`rgb(255,${190+(I+N+x)%3*15},${110+(I*N+x)%4*12})`,o.fillRect((E+I*T+3)/4,(a(g)+N*P+3)/4,(T-6)/4,(P-6)/4)}}s.fillStyle=Ze.ochre,s.fillRect(0,a(g+.4),2048,a(g)-a(g+.4))}let p=c("poop")+.3;s.fillStyle=Ze.ochre,s.fillRect(0,0,2048,a(p));let f=Cn(n,{aniso:16});return f.userData.glow=Cn(r),f}function cm(){let i=wn(512,256),t=i.getContext("2d");t.fillStyle=Ze.ochre,t.fillRect(0,0,512,256);for(let e=0;e<4;e++){let n=16+e*128;t.fillStyle="#e7dcc0",t.fillRect(n,40,96,176);for(let s=0;s<2;s++)for(let r=0;r<3;r++)t.fillStyle="#26323e",t.fillRect(n+6+s*45,46+r*57,39,51)}return Cn(i,{repeat:!0})}function $c(){let e=wn(256,512),n=e.getContext("2d"),s=Jn(11);n.fillStyle=Ze.canvas,n.fillRect(0,0,256,512);for(let r=0;r<4e3;r++)n.fillStyle=`rgba(120,100,70,${s()*.05})`,n.fillRect(s()*256,s()*512,1+s()*3,1);for(let r=0;r<14;r++){let o=s()*256,a=s()*512,l=20+s()*60,c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(120,105,75,${.04+s()*.06})`),c.addColorStop(1,"rgba(120,105,75,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,2*l,2*l)}for(let r=0;r<900;r++)n.fillStyle=`rgba(70,75,60,${s()*.1})`,n.fillRect(s()*256,s()*512,1+s()*2,1+s()*2);{let r=Math.floor(s()*3)*85.33333333333333,o=s()*392;n.fillStyle="rgba(255,252,240,0.35)",n.fillRect(r+3,o,256/3-3,90+s()*50)}for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgba(110,90,60,0.35)",n.fillRect(o,0,3,512),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(o+3,0,2,512)}return Cn(e,{repeat:!0})}function hm(){let e=wn(256,512),n=e.getContext("2d"),s=Jn(12);n.fillStyle="rgb(128,128,128)",n.fillRect(0,0,256,512);for(let r=0;r<260;r++){let o=105+s()*46;n.fillStyle=`rgba(${o|0},${o|0},${o|0},0.5)`,n.fillRect(s()*256,s()*512,2+s()*6,20+s()*90)}for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgb(185,185,185)",n.fillRect(o,0,5,512),n.fillStyle="rgb(90,90,90)",n.fillRect(o+5,0,1.5,512),n.fillRect(o-1.5,0,1.5,512)}return Cn(im(e,3),{srgb:!1,repeat:!0})}function um(){let e=wn(256,1024),n=e.getContext("2d");n.drawImage($c().image,0,0,256,512),n.drawImage($c().image,0,512,256,512);for(let s of[.12,.24,.36]){let r=s*1024;n.fillStyle="rgba(150,130,95,0.55)",n.fillRect(0,r-7,256,14),n.fillStyle="rgba(110,90,60,0.6)",n.fillRect(0,r-8,256,2),n.fillRect(0,r+6,256,2);for(let o=10;o<256;o+=21)n.fillStyle="rgba(70,55,35,0.85)",n.fillRect(o,r-3,3,22)}return Cn(e,{repeat:!0})}function nm(i,t,e,n,s){i.fillStyle="#1f2f6b",i.fillRect(t,e,n,s);let r=(o,a)=>{i.strokeStyle=a,i.lineWidth=o,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+s),i.moveTo(t+n,e),i.lineTo(t,e+s),i.stroke()};i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),r(s*.2,"#fff"),r(s*.07,"#c8202f"),i.restore(),i.fillStyle="#fff",i.fillRect(t+n/2-s*.17,e,s*.34,s),i.fillRect(t,e+s/2-s*.17,n,s*.34),i.fillStyle="#c8202f",i.fillRect(t+n/2-s*.1,e,s*.2,s),i.fillRect(t,e+s/2-s*.1,n,s*.2)}function dm(i){let n=wn(512,256),s=n.getContext("2d");return i==="union"?nm(s,0,0,512,256):i==="pennant"?(s.fillStyle="#fff",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(0,0,40,256),s.fillRect(0,256/2-18,40,36)):(s.fillStyle="#f4f2ec",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(512/2-20,0,40,256),s.fillRect(0,256/2-20,512,40),i==="ensign"&&nm(s,0,0,512/2-20,256/2-20)),Cn(n)}function fm(){let i=wn(256,64),t=i.getContext("2d");t.fillStyle="#d9cfb4",t.fillRect(0,0,256,64);let e=Jn(5);for(let n=0;n<40;n++)t.fillStyle=`rgba(150,130,95,${.2+e()*.3})`,t.fillRect(n*6.4,0,4+e()*2,64);t.strokeStyle="rgba(40,30,20,0.6)",t.lineWidth=1.5;for(let n=-64;n<256;n+=12)t.beginPath(),t.moveTo(n,0),t.lineTo(n+64,64),t.stroke(),t.beginPath(),t.moveTo(n+64,0),t.lineTo(n,64),t.stroke();return Cn(i,{repeat:!0})}function ud(){let t=wn(128,128),e=t.getContext("2d"),n=Jn(17);for(let s=0;s<18;s++){let r=64+(n()-.5)*128*.35,o=128/2+(n()-.5)*128*.35,a=128*(.18+n()*.2),l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}return Cn(t)}function pm(){let t=new Float32Array(65536),e=Jn(23),n=[];for(let l=0;l<40;l++){let c=Math.round((e()-.5)*24),h=Math.round((e()-.5)*24);!c&&!h||n.push([c,h,e()*Math.PI*2,1/Math.hypot(c,h)])}for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0;for(let[p,f,u,g]of n)h+=g*Math.sin((p*c+f*l)/256*Math.PI*2+u);t[l*256+c]=h}let s=wn(256,256),r=s.getContext("2d"),o=r.createImageData(256,256),a=2.2;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=t[l*256+(c+1)%256]-t[l*256+(c-1+256)%256],p=t[(l+1)%256*256+c]-t[(l-1+256)%256*256+c],f=-h*a,u=-p*a,g=1,v=Math.hypot(f,u,g);f/=v,u/=v,g/=v;let m=(l*256+c)*4;o.data[m]=(f*.5+.5)*255,o.data[m+1]=(u*.5+.5)*255,o.data[m+2]=(g*.5+.5)*255,o.data[m+3]=255}return r.putImageData(o,0,0),Cn(s,{srgb:!1,repeat:!0})}function dd(i="#9a7448"){let t=wn(64,512),e=t.getContext("2d"),n=Jn(31);e.fillStyle=i,e.fillRect(0,0,64,512);for(let s=0;s<90;s++)e.fillStyle=`rgba(60,35,15,${n()*.18})`,e.fillRect(n()*64,0,1+n()*2,512);return Cn(t,{repeat:!0})}var k1=9.81,mm=[[1,.35,64,.55,.5],[.75,-.65,37,.32,.55],[.25,1,19,.16,.6],[-.55,.8,11,.08,.6],[.9,-.2,7,.045,.5]],va=mm.map(([i,t,e,n,s])=>{let r=Math.hypot(i,t),o=2*Math.PI/e;return{dx:i/r,dz:t/r,k:o,A:n,Q:s/(o*n*mm.length),c:Math.sqrt(k1/o)}}),Js=64,Jc=-30,gm=30,jc=[-1.2,0,1.2],fd=jc.map(i=>Array.from({length:Js},(t,e)=>Et(Jc+e/(Js-1)*(gm-Jc),i))),pd=`
uniform mat4 uShipInv; uniform float uHB0[${Js}], uHB1[${Js}], uHB2[${Js}];
bool insideHull(vec3 world) {
  vec3 lp = (uShipInv * vec4(world, 1.0)).xyz;
  float fx = (lp.x - (${Jc.toFixed(1)})) / ${(gm-Jc).toFixed(1)} * ${(Js-1).toFixed(1)};
  if (fx <= 0.0 || fx >= ${(Js-1).toFixed(1)}) return false;
  int i = int(floor(fx)); float f = fract(fx);
  float a = mix(uHB0[i], uHB0[i + 1], f), b = mix(uHB1[i], uHB1[i + 1], f), c = mix(uHB2[i], uHB2[i + 1], f);
  float t = clamp((lp.y - (${jc[0].toFixed(1)})) / ${(jc[2]-jc[0]).toFixed(1)}, 0.0, 1.0);
  float hb = t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, t * 2.0 - 1.0);
  return abs(lp.z) < hb - 0.04;
}`;function V1(){return{uShipInv:{value:new Mt},uHB0:{value:fd[0]},uHB1:{value:fd[1]},uHB2:{value:fd[2]}}}var xm=`
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
vec2 seaRot(vec2 d) { return vec2(uWaveRot.x * d.x - uWaveRot.y * d.y, uWaveRot.y * d.x + uWaveRot.x * d.y); }
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${va.map(i=>`  y += ${i.A.toFixed(5)} * sin(${i.k.toFixed(5)} * (dot(seaRot(vec2(${i.dx.toFixed(5)}, ${i.dz.toFixed(5)})), p) - ${i.c.toFixed(5)} * uTime));`).join(`
`)}
  return y * uWaveScale;
}`;function G1(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256);let n=5,s=()=>(n=n*16807%2147483647,n/2147483647);for(let o=0;o<700;o++){let a=s()*256,l=s()*256,c=2+s()*14,h=.15+s()*.35;for(let[p,f]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]]){let u=e.createRadialGradient(a+p,l+f,0,a+p,l+f,c);u.addColorStop(0,`rgba(255,255,255,${h})`),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.fillRect(a+p-c,l+f-c,c*2,c*2)}}let r=new un(t);return r.wrapS=r.wrapT=nn,r}var Qc=class{constructor(t){this.time=0,this.offset=new $,this.scale=1;let e=420,n=4e3,s=new Float32Array(e*e*3),r=new Float32Array(e*e*2),o=g=>Math.sign(g)*Math.pow(Math.abs(g),2.6)*n;for(let g=0;g<e;g++)for(let v=0;v<e;v++){let m=g*e+v,d=o(v/(e-1)*2-1),_=o(g/(e-1)*2-1);s[m*3]=d,s[m*3+1]=0,s[m*3+2]=_,r[m*2]=d/70,r[m*2+1]=_/70}let a=new Uint32Array((e-1)*(e-1)*6),l=0;for(let g=0;g<e-1;g++)for(let v=0;v<e-1;v++){let m=g*e+v,d=m+1,_=m+e,y=_+1;a[l++]=m,a[l++]=_,a[l++]=d,a[l++]=d,a[l++]=_,a[l++]=y}let c=new ue;c.setAttribute("position",new ye(s,3)),c.setAttribute("uv",new ye(r,2)),c.setAttribute("normal",new ye(new Float32Array(e*e*3).fill(0).map((g,v)=>v%3===1?1:0),3)),c.setIndex(new ye(a,1)),c.boundingSphere=new gi(new A,n*1.5);let h=pm(),p=new ae({color:"#062a3a",roughness:.14,metalness:0,envMap:t,envMapIntensity:.4,normalMap:h,normalScale:new $(.09,.09)});this.uniforms={uTime:{value:0},uOffset:{value:this.offset},uWaveScale:{value:1},uWaveRot:{value:new $(1,0)},uCaps:{value:0},uFoamTex:{value:G1()},uLight:{value:1},...V1()};let f=this.uniforms,u=va.map(g=>`wave(p, vec2(${g.dx.toFixed(5)}, ${g.dz.toFixed(5)}), ${g.k.toFixed(5)}, ${g.A.toFixed(5)} * uWaveScale, ${g.Q.toFixed(5)}, ${g.c.toFixed(5)}, disp, tx, tz);`).join(`
`);p.onBeforeCompile=g=>{Object.assign(g.uniforms,f),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
varying float vCrest; varying vec3 vSeaWorld; varying float vSteep;
void wave(vec2 p, vec2 d0, float k, float A, float Q, float c, inout vec3 disp, inout vec3 tx, inout vec3 tz) {
  vec2 d = vec2(uWaveRot.x * d0.x - uWaveRot.y * d0.y, uWaveRot.y * d0.x + uWaveRot.x * d0.y);
  float f = k * (dot(d, p) - c * uTime);
  float s = sin(f), co = cos(f);
  disp += vec3(Q * A * d.x * co, A * s, Q * A * d.y * co);
  tx += vec3(-Q * d.x * d.x * k * A * s, d.x * k * A * co, -Q * d.x * d.y * k * A * s);
  tz += vec3(-Q * d.x * d.y * k * A * s, d.y * k * A * co, -Q * d.y * d.y * k * A * s);
}`).replace("#include <beginnormal_vertex>",`
vec2 p = position.xz + uOffset;
vec3 disp = vec3(0.0); vec3 tx = vec3(1.0, 0.0, 0.0); vec3 tz = vec3(0.0, 0.0, 1.0);
float fade = 1.0 - smoothstep(600.0, 2500.0, length(position.xz));
${u}
disp *= fade;
vec3 objectNormal = normalize(mix(vec3(0.0, 1.0, 0.0), cross(tz, tx), fade));
vCrest = disp.y;
// How sharply the Gerstner waves pinch at this point (the Jacobian of the horizontal motion).
vSteep = 1.0 - (tx.x * tz.z - tx.z * tz.x);
#ifdef USE_TANGENT
vec3 objectTangent = vec3(tangent.xyz);
#endif`).replace("#include <begin_vertex>",`vec3 transformed = position + disp;
vSeaWorld = transformed;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying float vCrest; varying vec3 vSeaWorld; varying float vSteep;
uniform float uCaps, uTime, uLight; uniform vec2 uOffset; uniform sampler2D uFoamTex;
${pd}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (insideHull(vSeaWorld)) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
float crest = smoothstep(0.95, 1.6, vCrest);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.2, 0.24), smoothstep(-0.8, 1.4, vCrest) * 0.22);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.8, 0.8), crest * 0.18);
// Whitecaps: broken foam on the steepest crests, breaking up as it drifts.
vec2 fp = (vSeaWorld.xz + uOffset) / 9.0;
float n = texture2D(uFoamTex, fp).r * 0.6 + texture2D(uFoamTex, fp * 2.7 + uTime * 0.02).r * 0.4;
// The pinch of the waves only reaches about 0.45, so caps start well below that in a strong wind.
float capMask = smoothstep(0.55 - 0.5 * uCaps, 0.75 - 0.45 * uCaps, vSteep + vCrest * 0.2);
float cap = capMask * smoothstep(0.3, 0.6, n) * (0.4 + 0.6 * uCaps) * step(0.01, uCaps);
cap *= 1.0 - smoothstep(500.0, 1500.0, length(vSeaWorld.xz));
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92) * uLight, clamp(cap * 1.4, 0.0, 0.9));`)},this.normalMap=h,this.mesh=new X(c,p),this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.name="sea",this.mesh.userData.noAO=!0}update(t,e){this.time=t,this.uniforms.uTime.value=t,this.offset.set(e,0),this.normalMap.offset.set((e/70+t*.004)%1,t*.003%1)}setScale(t){this.scale=t,this.uniforms.uWaveScale.value=t}setCaps(t){this.uniforms.uCaps.value=Math.max(0,Math.min(1,(t-.35)/.6))}setDirection(t){let e=Math.atan2(va[0].dz,va[0].dx);this.rot=t-e,this.uniforms.uWaveRot.value.set(Math.cos(this.rot),Math.sin(this.rot))}heightAt(t,e){let n=t+this.offset.x,s=e+this.offset.y,r=this.time,o=Math.cos(this.rot||0),a=Math.sin(this.rot||0),l=0;for(let c of va){let h=o*c.dx-a*c.dz,p=a*c.dx+o*c.dz;l+=c.A*this.scale*Math.sin(c.k*(h*n+p*s-c.c*r))}return l}};function Ps(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<i.length;++h){let p=i[h],f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,p=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let g=0;g<u.count;++g)p.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(p)}for(let h in r){let p=_m(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<p;++f){let u=[];for(let v=0;v<o[h].length;++v)u.push(o[h][v][f]);let g=_m(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function _m(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){let v=h.getComponent(f,g);a.setComponent(f+p,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Wn(i,t,e,n,s=!1){let r=new Float32Array(i*t*3),o=new Float32Array(i*t*2);for(let c=0;c<t;c++)for(let h=0;h<i;h++){let p=c*i+h,f=e(h,c);r[p*3]=f[0],r[p*3+1]=f[1],r[p*3+2]=f[2];let u=n?n(h,c,f):[h/(i-1),c/(t-1)];o[p*2]=u[0],o[p*2+1]=u[1]}let a=[];for(let c=0;c<t-1;c++)for(let h=0;h<i-1;h++){let p=c*i+h,f=p+1,u=p+i,g=u+1;s?a.push(p,g,f,p,u,g):a.push(p,f,g,p,g,u)}let l=new ue;return l.setAttribute("position",new ye(r,3)),l.setAttribute("uv",new ye(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function ya(i,t,e,n,s=!1){let r=Wn(i,t,e,n,s),o=Wn(i,t,(a,l)=>{let c=e(a,l);return[c[0],c[1],-c[2]]},n,!s);return Ps([r,o])}var vm=new A(0,1,0);function tn(i,t,e,n,s=vm){let r=new A().subVectors(t,i),o=r.length(),a=new Gt(o,n,e),l=r.clone().normalize(),c=new A().crossVectors(l,s);c.lengthSq()<1e-6&&c.set(0,0,1),c.normalize();let h=new A().crossVectors(c,l),p=new Mt().makeBasis(l,h,c);return p.setPosition(i.clone().add(t).multiplyScalar(.5)),a.applyMatrix4(p),a}function we(i,t,e,n=e,s=10){let r=new A().subVectors(t,i),o=r.length(),a=new Jt(n,e,o,s,1),l=new qe().setFromUnitVectors(vm,r.clone().normalize());return a.applyQuaternion(l),a.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),a}function md(i,t,e,n=.28,s=.14){let r=[],o=c=>c.clone().add(new A(0,e,0));r.push(tn(o(i),o(t),s,.09));let a=i.distanceTo(t),l=Math.max(1,Math.round(a/n));for(let c=0;c<=l;c++){let h=i.clone().lerp(t,c/l),p=new Jt(.035,.05,e,6);p.translate(h.x,h.y+e/2,h.z),r.push(p)}return Ps(r.map(c=>c.index?c.toNonIndexed():c))}function gt(i){let t=i.map(e=>e.index?e.toNonIndexed():e);for(let e of t)e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals();return Ps(t)}var th=null,Ma={uSunView:{value:new A(0,1,0)},uSunCol:{value:new Qt(1,.95,.85)}};function ym(i){return i.onBeforeCompile=t=>{t.uniforms.uSunView=Ma.uSunView,t.uniforms.uSunCol=Ma.uSunCol,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView; uniform vec3 uSunCol;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
{ float back = max(0.0, -dot(normal, uSunView));
  reflectedLight.directDiffuse += diffuseColor.rgb * uSunCol * back * back * 0.22; }`)},i.customProgramCacheKey=()=>"sail-translucent",i}function ge(){if(th)return th;let i=(r,o=.7,a=0,l={})=>new ae({color:r,roughness:o,metalness:a,...l}),t=am(),e=dd("#b08a58"),n=dd("#5a4630"),s=hm();return th={black:i(Ze.black,.6),ochre:i(Ze.ochre,.6),red:i(Ze.red,.75),inside:i("#c9a965",.75),carriage:i("#8a6e44",.8),gold:i(Ze.gold,.35,.8),iron:i("#26282a",.55,.6),brass:i("#b58d3e",.3,.9),copper:i(Ze.copper,.45,.8),deck:i("#ffffff",.85,0,{map:t}),mast:i("#ffffff",.7,0,{map:e}),spar:i("#24211d",.78),darkWood:i("#ffffff",.75,0,{map:n}),rope:i("#3b2f22",.9),ropeLight:i("#8a7556",.9),canvas:ym(i("#f4efe4",.92,0,{map:$c(),normalMap:s,normalScale:new $(.5,.5),side:Ne})),canvasReef:ym(i("#f4efe4",.92,0,{map:um(),normalMap:s,normalScale:new $(.5,.5),side:Ne})),furl:i("#c4b99c",.95),hammock:i("#ffffff",.95,0,{map:fm()}),glass:i("#2b3a48",.15,.4,{emissive:"#000000"}),lantern:i("#ffd27a",.3,0,{emissive:"#ffb347",emissiveIntensity:0}),white:i("#eeeeee",.6)},th}var W1=()=>new ae({color:"#c99573",roughness:.6});function Sa(i,t,e,n=.3,s=1.6,r=.045,o=0){let a=[];for(let g=0;g<=40;g++){let v=g/40,m=v*s*Math.PI*2,d=n*(1-.82*v);a.push(i.clone().addScaledVector(t,Math.cos(m)*d-o*(1-v)**3).addScaledVector(e,Math.sin(m)*d))}let c=new vn(new _n(a),60,r,6,!1),h=c.attributes.position,p=h.count,f=7,u=new _n(a);for(let g=0;g<p;g++){let v=Math.floor(g/f)/60,m=u.getPoint(Math.min(1,v)),d=1-.6*v;h.setXYZ(g,m.x+(h.getX(g)-m.x)*d,m.y+(h.getY(g)-m.y)*d,m.z+(h.getZ(g)-m.z)*d)}return c.computeVertexNormals(),c}function X1(i=.5,t=.16){let e=new Je;e.moveTo(0,0),e.quadraticCurveTo(t,i*.4,0,i),e.quadraticCurveTo(-t,i*.4,0,0);let n=new An(e,{depth:.03,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:1}),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getY(r);s.setZ(r,s.getZ(r)+.25*(o/i)**2)}return n.computeVertexNormals(),n}function Mm(i){let t=ge(),e=W1(),n=new Yt,s=(a,l,c,h,p,f=0,u=0,g=0)=>{let v=new X(a,l);return v.position.set(c,h,p*i),v.rotation.set(f*i,u*i,g),n.add(v),v};s(new me(.19,14,12).scale(.9,1.2,1),e,0,.1,0),s(new me(.17,12,10).scale(1,.85,1.05),e,.03,-.12,0),s(new me(.17,14,12),e,.04,.5,.02);for(let a=0;a<9;a++){let l=a/9*Math.PI*2;s(new me(.055,8,6),t.gold,.04-.1*Math.cos(l)*.8,.6+.06*Math.sin(l*2),.02+.13*Math.sin(l))}s(new me(.03,6,6),e,.2,.48,.06),s(new Be(.045,.32,4,8),e,.1,.3,-.22,-1.2,0,.3),s(new me(.055,8,6),e,.18,.47,-.42),s(new Be(.045,.28,4,8),e,.12,.05,.22,.5,0,-.6),s(new Be(.06,.3,4,8),e,.08,-.38,-.1,.2,0,.5),s(new Be(.06,.28,4,8),e,.15,-.36,.12,-.3,0,-.8);for(let a=0;a<3;a++)for(let l=0;l<5;l++){let c=new me(1,8,6).scale(.04,.32-a*.07,.08);s(c,t.gold,-.2-a*.02,.32+l*.03-a*.05,.12+a*.06,0,0,0).rotation.set(i*(.35+l*.22+a*.1),0,-.25)}let r=[];for(let a=0;a<=12;a++){let l=a/12;r.push(new A(.12+.1*Math.sin(l*6),-.05-l*.5,i*(.24+.18*l+.06*Math.cos(l*7))))}let o=new X(new vn(new _n(r),30,.045,6),new ae({color:"#2a4a9a",roughness:.6}));return o.scale.set(1,1,1),n.add(o),n.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),n}function Sm(){let i=ge(),t=new Yt,e=new X(new be(.82,.075,8,40).scale(1,1.18,1),new ae({color:"#203a8a",roughness:.45}));e.rotation.y=Math.PI/2;let n=new X(new be(.9,.03,6,40).scale(1,1.17,1),i.gold);n.rotation.y=Math.PI/2;let s=new X(new Gt(.06,.16,.2),i.gold);s.position.set(.06,-.96,.18),t.add(e,n,s);let r=[];for(let a=0;a<18;a++){let l=a/18*Math.PI*2,c=X1(.36,.13);c.rotateZ(-Math.PI/2).rotateY(Math.PI/2),c.rotateX(l+Math.PI/2),c.translate(-.05,Math.sin(l)*1.12,Math.cos(l)*.96),r.push(c)}let o=new X(gt(r),i.gold);return t.add(o),t.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t}function Em(i,t){let e=[];for(let s of[1,-1]){let r=s*.33,o=new A(1,0,0),a=new A(0,1,0),l=[[i-1.15,t-1.15,.22],[i-1.85,t-1.85,.25],[i-2.55,t-2.45,.24],[i-3.2,t-2.9,.2]];l.forEach(([h,p,f],u)=>e.push(Sa(new A(h,p,r),u%2?o.clone().negate():o,a,f,1.5,.035,.3)));let c=new _n(l.map(([h,p])=>new A(h+.15,p+.25,r)));e.push(new vn(c,30,.03,5))}let n=new X(gt(e),ge().gold);return n.castShadow=!0,n}function bm(i){let t=i.map(([n,s])=>Sa(n,new A(-1,0,0),new A(0,1,0).add(new A(0,0,s*.3)).normalize(),.16,1.3,.05)),e=new X(gt(t),ge().gold);return e.castShadow=!0,e}var Qs=i=>$r(i)*_a(i);function Hi(i,t){let e=Qs(t);return Me(t)-.45*ns(1,3,t)*(1-(e>0?(i/e)**2:1))}function eh(i,t,e,n=.02){let r=(Hi(t+.05,e)-Hi(t-.05,e))/.1,o=(Hi(t,e+.05)-Hi(t,e-.05))/(2*.05),a=new A(-1,o,r).normalize(),l=new Mt().lookAt(a,new A,new A(0,1,0));return i.applyMatrix4(l),i.translate(Hi(t,e)+a.x*n,e+a.y*n,t+a.z*n),i}function wm(i,t=null){let e=ge(),n=xn(-28.5),s=S=>qt[S]+n,r=[[s("middle")+.45,s("middle")+1.75],[s("upper")+.45,s("upper")+1.75],[s("qd")+.4,s("qd")+1.6]],o=[],a=[],l=new bn([[.05,0],[.05,.04],[.035,.06],[.06,.15],[.045,.24],[.028,.28],[.045,.3],[.045,.34]].map(([S,E])=>new $(S,E)),8),c=[];for(let[S,E]of r){let b=(S+E)/2,M=Qs(b),w=M*2,T=9,P=(w-.5)/T;for(let N=0;N<=T;N++){let F=(-M+.25+N*P+(N===T?-.1:.09))/w,V=Q=>F*2*Qs(Q),B=E+.15-S;o.push(eh(new Gt(.16,B,.07).translate(0,0,.035),V(S+B/2),S+B/2)),a.push(eh(new Gt(.24,.1,.1).translate(0,0,.05),V(E+.12),E+.12)),a.push(eh(new Gt(.22,.08,.09).translate(0,0,.045),V(S+.04),S+.04)),a.push(eh(Sa(new A(0,0,.08),new A(1,0,0),new A(0,1,0),.06,1.4,.018),V(E+.05),E+.05))}for(let N of[S-.06,S-.42]){let D=[];for(let F=0;F<=24;F++){let V=fe(-Qs(N)+.15,Qs(N)-.15,F/24);D.push(new A(Hi(V,N)-.07,N,V))}a.push(new vn(new _n(D),48,.04,6))}let I=S-.4;for(let N=-Qs(I)+.3;N<Qs(I)-.3;N+=.22){let D=new Mt().makeTranslation(Hi(N,I)-.07,I,N);c.push(D)}}let h=new Yt,p=s("poop")+.45,f=Hi(0,p+.9);h.position.set(f-.12,p,0);let u=S=>Hi(S,p+.5)-Hi(0,p+.5),g=new Je;g.moveTo(-.45,.55),g.lineTo(.45,.55),g.lineTo(.45,-.05),g.quadraticCurveTo(.45,-.5,0,-.68),g.quadraticCurveTo(-.45,-.5,-.45,-.05),g.closePath();let v=new An(g,{depth:.12,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});{let S=v.attributes.uv,E=v.attributes.position;for(let b=0;b<S.count;b++)S.setXY(b,(E.getX(b)+.49)/.98,(E.getY(b)+.72)/1.31)}v.rotateY(-Math.PI/2).translate(0,.85,0);let m=[new Jt(.3,.26,.22,14).translate(0,1.6,0),new me(.09,8,6).translate(0,1.95,0)];for(let S of[0,Math.PI/2])m.push(new be(.26,.035,5,14,Math.PI).rotateY(S).translate(0,1.66,0));let d=(S,E)=>{let b=[],M=w=>S*w;if(b.push(new Be(.15,.42,4,10).rotateX(M(-.55)).translate(0,.72,M(.9))),b.push(new Be(.07,.3,3,8).rotateX(M(-.2)).translate(0,.28,M(1))),b.push(new Be(.07,.28,3,8).rotateX(M(.25)).translate(0,.28,M(.8))),b.push(new Be(.055,.34,3,8).rotateX(M(1.1)).translate(0,1,M(.58))),b.push(new Be(.055,.3,3,8).rotateX(M(.7)).translate(0,.82,M(.6))),b.push(new Be(.035,.35,3,6).rotateX(M(.4)).translate(0,1.12,M(.84))),E){b.push(new Be(.075,.2,4,8).rotateX(M(1.3)).translate(0,1.3,M(.72))),b.push(new xs(.025,.34,6).rotateX(M(1)).translate(0,1.42,M(.55)));for(let w=0;w<5;w++)b.push(new me(.035,6,4).translate(0,1.18-w*.07,M(.98+w*.02)))}else{b.push(new me(.13,10,8).translate(0,1.3,M(.78))),b.push(new Gt(.1,.08,.1).translate(0,1.27,M(.65)));for(let w=0;w<8;w++){let T=w/8*Math.PI*2;b.push(new me(.06,6,4).translate(0,1.3+Math.sin(T)*.15,M(.82+Math.cos(T)*.12)))}b.push(new Jt(.09,.08,.08,8).translate(0,1.46,M(.78)))}return b.push(Sa(new A(0,.5,M(1.18)),new A(0,0,S),new A(0,1,0),.13,1.3,.025)),b},_=[...m,...d(1,!0),...d(-1,!1)];for(let S of[1,-1])for(let E=0;E<3;E++){let b=S*(1.5+E*1.1);_.push(Sa(new A(u(b),.6,b),new A(0,0,S),new A(0,1,0),.32-E*.06,1.6,.05,.35))}h.add(new X(gt(_),e.gold)),h.add(new X(v,t?[t,e.gold]:e.gold)),h.rotation.z=.1;let y=new Yt;y.name="sternCarvings",y.add(new X(gt(o),e.ochre),new X(gt(a),e.gold),h);let x=new hn(l,e.gold,c.length);return c.forEach((S,E)=>x.setMatrixAt(E,S)),y.add(x),y.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),y}function Tm(i){let t=ge(),e=new bn([[.001,-.9],[.06,-.8],[.04,-.62],[.12,-.5],[.08,-.32],[.16,-.2],[.18,0],[.001,.02]].map(([o,a])=>new $(o,a)),12),n=new bn([[.2,0],[.22,.06],[.1,.2],[.14,.32],[.05,.5],[.08,.6],[.001,.75]].map(([o,a])=>new $(o,a)),12),s=[];for(let{p:o,kind:a}of i)s.push((a==="drop"?e:n).clone().translate(o.x,o.y,o.z));let r=new X(gt(s),t.gold);return r.castShadow=!0,r}var Ea=220,Jr=120,oi=.32;function q1(i){return .45*i+.55*(.5-.5*Math.cos(Math.PI*i))}function Y1(i,t){let e=q1(i),n=-7.4,s=0;for(let r=0;r<5;r++)s=Me(n)+e*(He(n)-Me(n)),n=-7.4+t*(Ie(s)- -7.4);return[s,n,$r(n)*ld(e,n)]}function Z1(i){return i<Ke?pt("poop",i):pt("qd",i)}function $1(i){return i>gn+.2&&i<je-.2?pt("upper",i):Z1(i)}function Rm(){let i=ge(),t=new Yt;t.name="hull";let e=sm(),n=new ae({map:e.map,roughnessMap:e.metalRough,metalnessMap:e.metalRough,normalMap:e.normal,normalScale:new $(.8,.8),roughness:1,metalness:1}),s=[];for(let U=0;U<Jr;U++)for(let k=0;k<Ea;k++)s.push(Y1(k/(Ea-1),U/(Jr-1)));let r=(U,k)=>s[k*Ea+U],o=ya(Ea,Jr,r,(U,k,J)=>[cd(J[0]),hd(J[0],J[1])]),a=new X(o,n);a.castShadow=a.receiveShadow=!0,a.name="planking",t.add(a);let l=[],c=(U,k,J,ut=.02)=>{let lt=[[U,0],[U+ut,J],[k-ut,J],[k,0]],mt=(U+k)/2,zt=Me(mt+xn(-27))+.05,K=He(mt)-.2,st=160;l.push(ya(st,lt.length,(rt,ct)=>{let dt=fe(zt,K,rt/(st-1)),[Bt,Dt]=lt[ct],kt=Bt+xn(dt),te=Et(dt,kt);return[dt,kt,te>.05?te+Dt*Math.min(1,te/1.5):0]},(rt,ct,dt)=>[cd(dt[0]),hd(dt[0],dt[1])]))};c(.6,1.1,.09),c(2.53,3.22,.08),c(4.54,5.31,.07),c(qt.qd+1.03,qt.qd+1.1,.04,.01);let h=new X(gt(l),n);h.castShadow=h.receiveShadow=!0,h.name="wales",t.add(h);{let U=[],k=[],ut=pt("middle",2)+.1;for(let zt of[1,-1]){for(let K=.75;K<ut;K+=.32){let st=Et(2,K)+.14,rt=new Gt(.55,.1,.16);rt.translate(2,K,zt*st),U.push(rt)}for(let K of[-.42,.42]){let st=[];for(let rt=.55;rt<=ut+.6;rt+=.25)st.push(new A(2+K,rt,zt*(Et(2+K,rt)+.11)));k.push(new vn(new _n(st),24,.09,6))}}let lt=new X(gt(U),i.darkWood),mt=new X(gt(k),i.black);lt.castShadow=mt.castShadow=!0,t.add(lt,mt)}let p=new X(o,new ae({map:rm(),roughness:.85,side:dn}));p.name="innerPlanking",p.receiveShadow=!0,t.add(p);let f=[];for(let U=0;U<Jr;U++){let k=r(0,U);(k[2]>.01||U+1<Jr&&r(0,U+1)[2]>.01)&&f.push(k)}let u=48,v=lm(U=>$r(U)*_a(U)),m=new ae({map:v,roughness:.6,emissiveMap:v.userData.glow,emissive:"#ffffff",emissiveIntensity:0});t.userData.glow=[m];let d=Wn(u,f.length,(U,k)=>{let[J,ut,lt]=f[k],mt=fe(-lt,lt,U/(u-1)),zt=.45*ns(1,3,ut)*(1-(lt>0?(mt/lt)**2:1));return[J-zt,ut,mt]},(U,k)=>[U/(u-1),(f[k][1]-Kc)/(Zc-Kc)]),_=new X(d,m);_.castShadow=_.receiveShadow=!0,_.name="stern",t.add(_),t.add(wm(f[f.length-1][1],new ae({map:Am(),roughness:.45,metalness:.2})));let y=new X(d,new ae({map:m.map,roughness:.7,side:dn,color:"#d8cdb4"}));y.name="innerPlanking",t.add(y);let x=[];for(let U=0;U<Ea;U++){let k=r(U,Jr-1);k[2]-oi>.06&&x.push(k)}let S=10,E=ya(x.length,S,(U,k)=>{let J=x[U][0],ut=x[U][1],lt=fe($1(J)-.05,ut,k/(S-1));return[J,lt,Math.max(.05,Et(J,lt)-oi)]},(U,k)=>[x[U][0]/4,k/(S-1)],!0),b=new X(E,i.inside.clone());b.name="bulwark",b.receiveShadow=!0,t.add(b);let M=ya(x.length,2,(U,k)=>{let[J,ut,lt]=x[U];return k===0?[J,ut+.01,lt+.04]:[J,ut+.01,Math.max(.05,Et(J,ut)-oi-.03)]});t.add(new X(M,i.black));let w=x[0][0],T=pt("poop",w),P=x[0][1],I=Wn(12,4,(U,k)=>{let J=fe(T,P,k/3),ut=Math.max(.1,Et(w+.4,J)-oi);return[Me(J)+.35,J,fe(-ut,ut,U/11)]},null,!0);t.add(new X(I,i.inside));let N=[],D=(U,k,J,ut,lt=.12)=>{let mt=Math.max(4,Math.round((J-k)/.8)),zt=10;N.push(Wn(mt,zt,(K,st)=>{let rt=fe(k,J,K/(mt-1)),ct=pt(U,rt),dt=Math.max(.05,Et(rt,ct+.4)-oi),[Bt,Dt]=ut(dt),kt=fe(Bt,Dt,st/(zt-1));return[rt,ct+lt*(1-(kt/dt)**2),kt]},(K,st,rt)=>[rt[0]/8,rt[2]/8],!0))},F=U=>[-U,U],V=2.5;D("qd",Me(qt.qd)+.4,gn,F),D("qd",je,He(qt.qd)-.4,F),D("qd",gn,je,U=>[U-V,U],0),D("qd",gn,je,U=>[-U,-U+V],0),D("poop",Me(qt.poop)+.4,Ke,F);let B=new X(gt(N),i.deck);i.deck.side=Ne,B.receiveShadow=!0,B.castShadow=!0,B.name="weatherDecks",t.add(B);let Q=[],W=(U,k,J,ut=0)=>{let lt=Et(U,J)-oi-ut;Q.push(Wn(2,2,(mt,zt)=>[U,zt?J:k,mt?lt:-lt]))};W(gn,pt("upper",gn),pt("qd",gn)+.12),W(je,pt("upper",je),pt("qd",je)+.12);for(let U of[1,-1])Q.push(Wn(16,2,(J,ut)=>{let lt=fe(gn,je,J/15),mt=pt("qd",lt),zt=Et(lt,mt+.4)-oi-V;return[lt,ut?mt+.02:mt-.35,U*zt]},null,U<0));let nt=gt(Q),et=i.inside.clone();et.side=Ne,t.add(new X(nt,et));{let U=Ke-4.2,k=pt("qd",U),J=pt("poop",U)-.3,ut=Et(U,J)-oi,lt=cm();lt.repeat.set((ut-.5)/3.2,1);let mt=new ae({map:lt,roughness:.6,side:Ne});for(let[K,st]of[[ut,.5],[-.5,-ut]])t.add(new X(Wn(2,2,(rt,ct)=>[U,ct?J:k,rt?st:K],(rt,ct)=>[rt,ct]),mt));let zt=tn(new A(U,k+1.95,-.5),new A(U,k+1.95,.5),.1,.1);t.add(new X(zt,i.darkWood))}let bt=[],Rt=(U,k,J,ut,lt=1)=>{let mt=pt(k,U)+.1,zt=Et(U,mt)-oi-.1-J,K=[-zt,-ut-.45,-ut+.45,ut-.45,ut+.45,zt];for(let st=0;st<K.length;st+=2)bt.push(md(new A(U,mt,K[st]),new A(U,mt,K[st+1]),lt))};Rt(gn-.1,"qd",V,2.6),Rt(je+.1,"qd",V,2.6),Rt(Ke-.1,"poop",0,3.4);for(let U of[1,-1]){let k=[];for(let J=0;J<=6;J++){let ut=fe(gn,je,J/6),lt=pt("qd",ut);k.push(new A(ut,lt,U*(Et(ut,lt+.4)-oi-V+.08)))}for(let J=0;J<6;J++)bt.push(md(k[J],k[J+1],.95,.5,.1))}let jt=new X(gt(bt),i.darkWood);jt.castShadow=!0,t.add(jt);let Nt=[];for(let U of[3.6,7,10.4,13.8]){let k=pt("qd",U)+.2,J=Et(U,k)-oi-V+.2;Nt.push(tn(new A(U,k,-J),new A(U,k,J),.28,.3))}let Ht=new X(gt(Nt),i.darkWood);Ht.castShadow=!0,t.add(Ht);{let ut=i.hammock;for(let lt of[1,-1]){let mt=[[-.24,0],[-.26,.42],[-.18,.56],[.18,.56],[.26,.42],[.24,0]],zt=Wn(140,mt.length,(st,rt)=>{let ct=fe(-25.2,25,st/139),dt=Ie(ct)+.02,Bt=Et(ct,dt)-oi/2,[Dt,kt]=mt[rt];return[ct,dt+kt,lt*(Bt+Dt)]},(st,rt)=>[fe(-25.2,25,st/139)/2.5,rt/(mt.length-1)],lt>0),K=new X(zt,ut);K.castShadow=!0,t.add(K)}}{let U=[];for(let zt=0;zt<=24;zt++){let K=fe(-7.4,Ie(28.5)-.3,zt/24);U.push(new A(He(K)+.08,K,0))}let k=new vn(new _n(U),48,.26,6,!1);t.add(new X(k,i.black));let J=new Je,ut=js+.6;J.moveTo(Me(-7.4),-7.4),J.lineTo(Me(ut)+.3,ut),J.lineTo(Me(ut)-.6,ut),J.lineTo(Me(js)-1,js-.6),J.lineTo(Me(-7.4)-1.7,-7.4+.3),J.closePath();let lt=new An(J,{depth:.36,bevelEnabled:!1});lt.translate(0,0,-.18);let mt=new X(lt,i.black);mt.castShadow=!0,t.add(mt)}return t.add(K1()),t.add(J1()),t}function K1(){let i=ge(),t=new Yt;t.name="head";let e=33.35,n=pt("upper",30)+2.3,s=new Je,r=-2.2,o=n-.2;s.moveTo(He(r),r);for(let d=1;d<=10;d++){let _=fe(r,o,d/10);s.lineTo(He(_)-.05,_)}s.lineTo(e-.4,n+.1),s.quadraticCurveTo(e+.2,n-1.6,e-1,n-3.6),s.quadraticCurveTo(29.8,-.2,He(r)+.4,r),s.closePath();let a=new An(s,{depth:.5,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});a.translate(0,0,-.25);let l=new X(a,i.black);l.castShadow=!0,t.add(l);let c=new Je;c.moveTo(He(n-2.5)+.2,n-2.5),c.quadraticCurveTo(e-1.3,n-1,e-.6,n-.3),c.lineTo(e-.9,n-.9),c.quadraticCurveTo(e-2.2,n-2.3,He(n-3.2)+.3,n-3.2),c.closePath();let h=new An(c,{depth:.62,bevelEnabled:!1});h.translate(0,0,-.31),t.add(new X(h,i.ochre)),t.add(Em(e,n));let p=[],f=[],u=pt("upper",27);for(let d of[1,-1]){let _=[];for(let y=0;y<3;y++){let x=-y*.55,S=[new A(26,u+2.2+x,d*(Et(26,u+2.2+x)+.05)),new A(28.4,u+1.75+x*.9,d*2.5),new A(30.6,u+1.55+x*.75,d*1.25),new A(e-.55,n-.35+x*.55,d*.32)],E=new _n(S,!1,"centripetal");_.push(E),p.push(new vn(E,32,y===0?.1:.075,6,!1))}for(let y of[.25,.45,.65]){let x=_[0].getPoint(y),S=_[2].getPoint(y);f.push(we(x,S.clone().add(new A(0,-.5,0)),.07,.07,6))}}let g=new X(gt(p),i.ochre);g.castShadow=!0,t.add(g);let v=[];for(let d of[1,-1])for(let _=0;_<3;_++)v.push([new A(e-.62,n-.42-_*.3,d*.36),d]);t.add(bm(v)),t.add(new X(gt(f),i.black));let m=Wn(6,6,(d,_)=>{let y=fe(28.9,31.6,d/5),x=fe(2.2,.7,d/5);return[y,u+.5+d/5*.5,fe(-x,x,_/5)]},null,!0);t.add(new X(m,i.darkWood)),t.add(j1(e,n));for(let d of[1,-1]){let y=pt("qd",25.6)+.55,x=Et(25.6,y)-.4,S=new A(25.6-.6,y,d*(x-.6)),E=new A(25.6+1.4,y+.25,d*(x+1.9)),b=new X(tn(S,E,.42,.42),i.black);b.castShadow=!0,t.add(b);let M=new X(new Jt(.2,.2,.05,12),i.gold);M.position.copy(E),M.lookAt(E.clone().add(E.clone().sub(S))),M.rotateX(Math.PI/2),t.add(M)}for(let d of[1,-1])for(let _ of[0,.75]){let y=26.9+_,x=pt("middle",y)+.9,S=Et(y,x),E=new X(new Jt(.24,.24,.1,14),i.iron),b=new X(new Vs(.17,14),new ji({color:"#050403"})),M=new A(Et(y-.2,x)-Et(y+.2,x),0,d*.4).normalize();E.position.set(y,x,d*S),E.quaternion.setFromUnitVectors(new A(0,1,0),M),b.position.set(y,x,d*(S+.06)).addScaledVector(M,.02),b.lookAt(b.position.clone().add(M)),t.add(E,b)}return t}function Am(){let i=document.createElement("canvas");i.width=512,i.height=600;let t=i.getContext("2d"),e="#e2b33c",n="#b8202a",s="#1f3c8c",r=(c,h,p,f,u)=>{t.save(),t.translate(c,h),t.scale(p,p),f&&t.rotate(-.9),t.fillStyle=u,t.beginPath(),t.ellipse(0,0,.42,.17,0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(-.45,-.12,.15,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(-.6,-.12),t.lineTo(-.72,-.05),t.lineTo(-.58,-.02),t.fill(),t.lineWidth=.07,t.strokeStyle=u,t.lineCap="round";for(let[g,v]of[[-.28,-.4],[-.15,-.05],[.2,.12],[.32,.45]])t.beginPath(),t.moveTo(g,.08),t.lineTo(v,f?.42:.38),t.stroke();t.beginPath(),t.moveTo(.4,-.05),t.quadraticCurveTo(.75,-.2,.62,-.5),t.stroke(),t.beginPath(),t.arc(.6,-.52,.06,0,Math.PI*2),t.fill(),t.restore()},o=256,a=300;for(let[c,h]of[[0,0],[o,a]]){t.fillStyle=n,t.fillRect(c,h,o,a);for(let p=0;p<3;p++)r(c+o/2,h+60+p*85,120,!1,e)}t.fillStyle=e,t.fillRect(o,0,o,a),t.strokeStyle=n,t.lineWidth=5,t.strokeRect(o+18,18,o-36,a-36),t.strokeRect(o+30,30,o-60,a-60),r(o+o/2,a/2+10,170,!0,n),t.fillStyle=s,t.fillRect(0,a,o,a),t.strokeStyle=e,t.lineWidth=12,t.lineCap="round",t.beginPath(),t.moveTo(80,a+240),t.lineTo(80,a+70),t.quadraticCurveTo(150,a+40,190,a+90),t.lineTo(80,a+240),t.stroke(),t.lineWidth=3;for(let c=1;c<6;c++)t.beginPath(),t.moveTo(80+c*17,a+70+c*5),t.lineTo(80+c*17,a+240-c*25),t.stroke();t.fillStyle=n,t.beginPath(),t.moveTo(206,250),t.lineTo(306,250),t.lineTo(306,320),t.quadraticCurveTo(256,370,206,320),t.closePath(),t.fill(),t.fillStyle="#f0ece0",t.beginPath(),t.ellipse(256,300,26,12,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(234,282,8,14,.5,0,Math.PI*2),t.fill(),t.fillStyle=e,t.fillRect(226,232,60,14),t.strokeStyle="#d4a640",t.lineWidth=24,t.strokeRect(0,0,512,600);let l=new un(i);return l.colorSpace=Oe,l.anisotropy=8,l}function j1(i,t){let e=ge(),n=new Yt;n.name="figurehead",n.position.set(i-.2,t,0),n.rotation.z=-.28;let s=1.45,r=new Je;r.moveTo(-.6,.75),r.lineTo(.6,.75),r.lineTo(.6,-.1),r.quadraticCurveTo(.6,-.7,0,-.95),r.quadraticCurveTo(-.6,-.7,-.6,-.1),r.closePath();let o=new An(r,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2}),a=o.attributes.uv,l=o.attributes.position;for(let d=0;d<a.count;d++)a.setXY(d,(l.getX(d)+.66)/1.32,(l.getY(d)+1)/1.8);o.rotateY(Math.PI/2);let c=new X(o,[new ae({map:Am(),roughness:.45,metalness:.2}),e.gold]);c.scale.setScalar(s),c.position.set(.25,.9,0),n.add(c);let h=Sm();h.scale.setScalar(s),h.position.set(.15,.95,0),n.add(h);let p=new Yt;p.add(new X(new Jt(.42,.36,.3,16),e.gold));for(let d=0;d<2;d++){let _=new X(new be(.36,.05,6,16,Math.PI),e.gold);_.rotation.y=d*Math.PI/2,_.position.y=.15,p.add(_)}let f=new X(new me(.11,10,8),e.gold);f.position.y=.6,p.add(f);let u=new X(new Gt(.05,.22,.16),e.gold);u.position.y=.78,p.add(u);let g=new X(new me(.33,12,8,0,Math.PI*2,0,Math.PI/2),new ae({color:"#7a1b20",roughness:.6}));g.position.y=.12,p.add(g),p.scale.setScalar(s),p.position.set(.2,2.15,0),n.add(p);let v=new ae({color:"#e8c7a4",roughness:.55});for(let d of[1,-1]){let _=Mm(d);_.scale.setScalar(s*1.1),_.position.set(0,1.05,d*1.55),n.add(_)}for(let d of[]){let _=new Yt,y=new X(new Be(.24,.42,4,12),v);y.rotation.x=d*.25,_.add(y);let x=new X(new me(.2,14,10),v);x.position.set(.05,.55,d*.06),_.add(x);let S=new X(new me(.21,12,8,0,Math.PI*2,0,Math.PI/2.2),e.gold);S.position.copy(x.position).add(new A(-.02,.03,0)),_.add(S);for(let M of[0,1]){let w=new X(new me(.3,10,8),e.gold);w.scale.set(.12,.75,.42),w.position.set(-.28,.25+M*.12,d*(.12+M*.12)),w.rotation.x=d*(.5+M*.3),_.add(w)}let E=new X(new Be(.07,.4,4,8),v);E.position.set(.12,.25,-d*.24),E.rotation.x=-d*1.1,_.add(E);let b=new X(new be(.26,.07,6,14,Math.PI*1.3),new ae({color:"#2a4a9a",roughness:.6}));b.rotation.set(Math.PI/2,0,.4),b.position.y=-.08,_.add(b),_.scale.setScalar(s),_.position.set(.05,1,d*1.25),n.add(_)}let m=new X(new be(.35,.12,8,18,Math.PI*1.5),e.gold);return m.rotation.set(0,Math.PI/2,0),m.position.set(0,-.2,0),n.add(m),n.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),n}function J1(){let i=ge(),t=new Yt;t.name="quarterGalleries";let e=-27.3,n=-22.4,s=xn(-25),r=qt.middle+s+.15,o=qt.qd+s-.1,a=r-2.6,l=o+.9,c=.85,h=document.createElement("canvas");h.width=512,h.height=512;let p=h.getContext("2d"),f=w=>(l-w)/(l-a)*512;p.fillStyle=Ze.ochre,p.fillRect(0,0,512,512),p.fillStyle=Ze.black,p.fillRect(0,f(r-.3),512,f(a)-f(r-.3));for(let[w,T]of[[qt.middle+s+.45,qt.middle+s+1.6],[qt.upper+s+.45,qt.upper+s+1.6]])for(let P=0;P<5;P++){let I=20+P*98;p.fillStyle="#e7dcc0",p.fillRect(I,f(T),78,f(w)-f(T)),p.fillStyle="#26323e";for(let N=0;N<3;N++)for(let D=0;D<2;D++)p.fillRect(I+5+D*36,f(T)+5+N*(f(w)-f(T)-10)/3,32,(f(w)-f(T)-10)/3-5)}p.strokeStyle=Ze.gold,p.lineWidth=4;for(let w=0;w<6;w++)p.beginPath(),p.arc(256,f(a+.6)-w*20,40+w*18,0,Math.PI,!0),p.stroke();let u=new un(h);u.colorSpace=Oe;let g=document.createElement("canvas");g.width=g.height=512;let v=g.getContext("2d");v.fillStyle="#000",v.fillRect(0,0,512,512);for(let[w,T]of[[qt.middle+s+.45,qt.middle+s+1.6],[qt.upper+s+.45,qt.upper+s+1.6]])for(let P=0;P<5;P++)v.fillStyle="#ffc883",v.fillRect(25+P*98,f(T)+5,68,f(w)-f(T)-10);let m=new un(g);m.colorSpace=Oe;let d=new ae({map:u,roughness:.6,emissiveMap:m,emissive:"#ffffff",emissiveIntensity:0});t.userData.glow=[d];let _=w=>{if(w<r){let T=(w-a)/(r-a);return Math.sin(T*Math.PI/2)**1.3}if(w>o){let T=(l-w)/(l-o);return Math.sqrt(Math.max(0,T))}return 1},y=24,x=40;for(let w of[1,-1]){let T=Wn(y,x,(I,N)=>{let D=fe(a,l,N/(x-1)),F=_(D),V=I/(y-1),B=(e+n)/2,Q=(n-e)/2*(.25+.75*Math.min(1,F*1.4)),W=B+(V*2-1)*Q,nt=Math.sin(V*Math.PI)**.45,et=Et(W,D)+c*F*nt;return[W,D,w*et]},(I,N)=>[I/(y-1),N/(x-1)],w<0),P=new X(T,d);P.castShadow=!0,t.add(P)}let S=(w,T,P)=>{let I=_(T),N=(e+n)/2,D=(n-e)/2*(.25+.75*Math.min(1,I*1.4)),F=N+(w*2-1)*D;return[F,Et(F,T)+c*I*Math.sin(w*Math.PI)**.45+P]},E=[],b=[];for(let w of[1,-1]){for(let P of[r-.05,qt.upper+s+.3,o+.02]){let I=[];for(let N=0;N<=20;N++){let[D,F]=S(.03+.94*N/20,P,.04);I.push(new A(D,P,w*F))}E.push(new vn(new _n(I),30,.05,6))}let T=(e+n)/2;b.push({p:new A(T,a+.25,w*(Et(T,a+.25)+.08)),kind:"drop"}),b.push({p:new A(T,l-.05,w*(Et(T,l)+.12)),kind:"top"})}let M=new X(gt(E),i.gold);return M.castShadow=!0,t.add(M,Tm(b)),t}var Q1=.06,gd=(i,t)=>Math.max(0,Et(i,t+.25)-Q1);function tM(i,t,e,n=[],s=.1){let r=f=>pt(i,f),o=Math.max(8,Math.round((e-t)/.6)),a=new Je,l=[];for(let f=0;f<=o;f++){let u=fe(t,e,f/o);l.push([u,gd(u,r(u))])}a.moveTo(l[0][0],-l[0][1]);for(let[f,u]of l)a.lineTo(f,u);for(let f=l.length-1;f>=0;f--)a.lineTo(l[f][0],-l[f][1]);a.closePath();for(let f of n){let u=new ts;u.moveTo(f.x-f.w/2,-f.d/2),u.lineTo(f.x-f.w/2,f.d/2),u.lineTo(f.x+f.w/2,f.d/2),u.lineTo(f.x+f.w/2,-f.d/2),u.closePath(),a.holes.push(u)}let c=new Or(a,1),h=c.attributes.position,p=c.attributes.uv;for(let f=0;f<h.count;f++){let u=h.getX(f),g=h.getY(f),v=Math.max(.5,gd(u,r(u)));h.setXYZ(f,u,r(u)+s*(1-Math.min(1,(g/v)**2)),g),p.setXY(f,u/8,g/8)}return c.computeVertexNormals(),c}function eM(i){return Un.filter(t=>i==="upper"?!0:i==="orlop"?t.x>-14&&t.x<15:!0)}function Cm(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(tn(new A(i+l*r/2,e,t),new A(i+l*r/2,s,n),.07,.22,new A(1,0,0)));let a=Math.round((s-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new Gt(r,.05,.22);h.translate(i,fe(e,s,c),fe(t,n,c)),o.push(h)}return o}function nM(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(tn(new A(i,e,t+l*r/2),new A(i+s,n,t+l*r/2),.07,.22));let a=Math.round((n-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new Gt(.22,.05,r);h.translate(i+s*c,fe(e,n,c),t),o.push(h)}return o}function Pm(){let i=ge(),t=new Yt;t.name="interior";let e=[],n=[],s=[],r=[["orlop",Me(qt.orlop)+.35,He(qt.orlop)-.5],["lower",Me(qt.lower)+.25,He(qt.lower)-.35],["middle",Me(qt.middle)+.25,He(qt.middle)-.35],["upper",Me(qt.upper)+.6,He(qt.upper)-.6]];for(let[d,_,y]of r){let x=eM(d);e.push(tM(d,_,y,x));for(let S of x){let E=pt(d,S.x)+.1,b=S.w/2+.1,M=S.d/2+.1,w=(T,P)=>new A(S.x+T,E+.12,P);n.push(tn(w(-b,-M),w(b,-M),.2,.3),tn(w(-b,M),w(b,M),.2,.3)),n.push(tn(w(-b,-M),w(-b,M),.2,.3,new A(0,1,0)),tn(w(b,-M),w(b,M),.2,.3,new A(0,1,0)))}}let o=["orlop","lower","middle","upper"];for(let d=0;d<o.length-1;d++)for(let _ of Un.filter(y=>y.ladder)){if(o[d]==="orlop"&&!(_.x>-14&&_.x<15))continue;let y=Vc(_,d%2?-1:1);s.push(...Cm(y.x,y.zFoot,pt(o[d],_.x)+.05,y.zTop,pt(o[d+1],_.x)))}{let d=Wc();s.push(...Cm(d.x,d.zFoot,Gc,d.zTop,pt("orlop",d.x)))}for(let d of Xc)for(let _ of[1,-1])s.push(...nM(d.x,_*d.z,pt(d.from,d.x),pt(d.to,d.x+d.run),d.run,.7));let a=new X(gt(e),i.deck);a.receiveShadow=!0,a.name="decks",t.add(a);let l=new X(gt(n),i.darkWood);l.receiveShadow=l.castShadow=!0,t.add(l);let c=new X(gt(s),i.darkWood);c.castShadow=!0,t.add(c);let h=[],p=[["orlop",-26.2,26.8],["lower",-26.5,27.5],["middle",-26.8,27.6],["upper",-27,27.6],["qd",-27.5,gn],["qd",je,27.8],["poop",-28.2,Ke]];for(let[d,_,y]of p)for(let x=_+.4;x<y;x+=1.25){if(Un.some(b=>Math.abs(x-b.x)<b.w/2+.05))continue;let S=pt(d,x)-.17,E=gd(x,S-.2);E<.6||h.push([x,S,E])}let f=new hn(new Gt(.3,.3,1),i.darkWood,h.length),u=new Mt;h.forEach(([d,_,y],x)=>{u.makeScale(1,1,2*y).setPosition(d,_-.15,0),f.setMatrixAt(x,u)}),f.castShadow=f.receiveShadow=!0,f.name="beams",t.add(f);let g=[],v=[["orlop","lower"],["lower","middle"],["middle","upper"]];for(let[d,_]of v)for(let y=-20;y<20;y+=2.5)Un.some(x=>Math.abs(y-x.x)<x.w/2+.3)||d==="orlop"&&(y<-14||y>15)||g.push(we(new A(y,pt(d,y),0),new A(y,pt(_,y)-.45,0),.11,.11,8));let m=new X(gt(g),i.darkWood);m.castShadow=!0,t.add(m);{let _=new Je,y=[];for(let M=-21;M<=20;M+=.8)y.push(M);_.moveTo(y[0],-Et(y[0],-5.3));for(let M of y)_.lineTo(M,Math.max(.2,Et(M,-5.3)-.05));for(let M=y.length-1;M>=0;M--)_.lineTo(y[M],-Math.max(.2,Et(y[M],-5.3)-.05));let x=new Or(_);x.rotateX(Math.PI/2),x.translate(0,-5.3,0);let S=x.attributes.uv,E=x.attributes.position;for(let M=0;M<E.count;M++)S.setXY(M,E.getX(M)/4,E.getZ(M)/4);let b=new X(x,new ae({map:om(),roughness:1,side:Ne}));b.receiveShadow=!0,b.name="ballast",t.add(b)}return t}function on(i,t){let e=i.index?i.toNonIndexed():i,n=new Qt(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new ye(r,3)),e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(s*2),2)),e}var ie=(i,t,e,n,s,r,o)=>on(new Gt(i,t,e).translate(n,s,r),o),Si=(i,t,e,n,s,r,o,a=10)=>on(new Jt(t,i,e,a).translate(n,s,r),o),iM="#8a6a44",is="#5a4330",nh="#a0805a",tr="#2c2e30",sM="#a89a7c",xd="#a8643c";function ih(i,t,e=tr,n=iM){let s=[];for(let a=0;a<=10;a++){let l=a/10;s.push(new $(t*(.82+.18*Math.sin(Math.PI*l)),(l-.5)*i))}let o=[on(new bn(s,14).rotateZ(Math.PI/2).translate(0,t,0),n)];for(let a of[.12,.3,.7,.88]){let l=t*(.82+.18*Math.sin(Math.PI*a))+.01;o.push(on(new Jt(l,l,.035,14,1,!0).rotateZ(Math.PI/2).translate((a-.5)*i,t,0),e))}for(let a of[1,-1])o.push(on(new Vs(t*.82,14).rotateY(a*Math.PI/2).translate(a*i/2,t,0),is));return gt(o)}function rM(i,t,e,n){return ih(i,t,e,n).rotateZ(Math.PI/2).translate(t,i/2-t,0)}var oM={leaguer:()=>ih(1.6,.52),butt:()=>ih(1.3,.42),hogshead:()=>ih(1,.36),powder:()=>rM(.6,.22,xd,nh),chest:()=>gt([ie(.9,.42,.45,0,.21,0,"#6b4a2e"),ie(.92,.05,.47,0,.44,0,"#4a3220"),ie(.12,.08,.02,0,.36,.235,tr)]),sack:()=>on(new me(.32,10,8).scale(1.2,.8,.8).translate(0,.25,0),"#b8a57e"),bench:()=>gt([ie(1.9,.06,.28,0,.45,0,nh),ie(.06,.42,.24,-.8,.21,0,is),ie(.06,.42,.24,.8,.21,0,is)]),messTable:()=>gt([ie(.75,.06,1.9,0,.78,.95,nh),ie(.06,.75,.06,0,.38,1.85,is),on(new Jt(.012,.012,1).translate(0,1.3,1.85),"#6b5a40")]),table:()=>gt([ie(1.6,.06,.9,0,.76,0,"#7a5232"),...[[-.7,-.38],[.7,-.38],[-.7,.38],[.7,.38]].map(([i,t])=>ie(.06,.74,.06,i,.37,t,"#5a3c22"))]),chair:()=>gt([ie(.42,.05,.42,0,.46,0,"#6b4528"),ie(.42,.5,.05,0,.72,-.19,"#6b4528"),...[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]].map(([i,t])=>ie(.04,.46,.04,i,.23,t,"#4a3018"))]),desk:()=>gt([ie(1.1,.75,.6,0,.375,0,"#6b4528"),ie(1.12,.06,.64,0,.78,0,"#4a3018"),ie(.9,.3,.15,0,.95,-.2,"#5a3a20")]),settee:()=>gt([ie(2.2,.42,.6,0,.21,0,"#5a3a20"),ie(2.2,.12,.6,0,.48,0,"#2a4a6a"),ie(2.2,.5,.1,0,.75,-.26,"#2a4a6a")]),hammock:()=>gt([on(new me(.5,12,6).scale(1.8,.32,.36).translate(0,-.45,0),sM),on(new Jt(.01,.01,.5).rotateZ(.9).translate(-1.05,-.2,0),"#8a7556"),on(new Jt(.01,.01,.5).rotateZ(-.9).translate(1.05,-.2,0),"#8a7556")]),cot:()=>gt([ie(1.9,.35,.7,0,-.75,0,"#cfc3a4"),ie(1.95,.05,.75,0,-.56,0,"#6b4a2e"),...[[-.9,-.3],[.9,-.3],[-.9,.3],[.9,.3]].map(([i,t])=>on(new Jt(.01,.01,.6).translate(i,-.28,t),"#8a7556"))]),coil:()=>gt([0,1,2,3].map(i=>on(new be(.95-i*.1,.12,6,24).rotateX(Math.PI/2).translate(0,.13+i*.24,0),"#6b5a40"))),ropeCoil:()=>gt([0,1,2].map(i=>on(new be(.4,.07,5,16).rotateX(Math.PI/2).translate(0,.07+i*.13,0),"#8a7556"))),sailBundle:()=>on(new Be(.3,2.4,4,8).rotateZ(Math.PI/2).translate(0,.3,0),"#d0c5a8"),shotPile:()=>{let i=[];for(let t=0;t<3;t++)for(let e=0;e<4-t;e++)for(let n=0;n<4-t;n++)i.push(on(new me(.08,8,6).translate((e-(3-t)/2)*.16,.08+t*.13,(n-(3-t)/2)*.16),tr));return gt(i)},garland:()=>gt([ie(1.4,.12,.22,0,.06,0,is),...[0,1,2,3,4,5,6,7].map(i=>on(new me(.08,8,6).translate(-.6+i*.17,.16,0),tr))]),bucket:()=>Si(.16,.2,.32,0,.16,0,"#5a4330"),coop:()=>gt([ie(1.2,.6,.6,0,.3,0,"#7a6040"),...[0,1,2,3,4,5].map(i=>ie(.03,.5,.62,-.5+i*.2,.32,0,"#3a2a18"))]),shelf:()=>gt([ie(.4,1.6,1.8,0,.8,0,"#6b4a2e"),...[.4,.8,1.2].map(i=>ie(.38,.04,1.76,.02,i,0,"#5a3c22"))]),bin:()=>gt([ie(1.4,.9,1,0,.45,0,"#7a5a38"),ie(1.42,.05,1.02,0,.9,0,"#5a3c22")]),workbench:()=>gt([ie(2.2,.1,.7,0,.85,0,nh),ie(.1,.8,.6,-1,.4,0,is),ie(.1,.8,.6,1,.4,0,is),ie(1.6,.18,.18,.2,.09,.15,"#9a7a50")]),stove:()=>gt([ie(2.1,1.25,1.5,0,.62,0,"#1e1f21"),ie(2.2,.08,1.6,0,1.28,0,"#2c2e30"),ie(.5,.45,.04,-.5,.55,.77,"#3a3c3e"),ie(.5,.45,.04,.3,.55,.77,"#3a3c3e"),ie(.6,.25,.04,.3,1,.77,"#7a2a10"),Si(.32,.32,.55,-.5,1.6,-.2,xd,14),Si(.28,.28,.5,.35,1.58,-.25,xd,14),ie(.45,1.2,.45,.6,2,.35,"#1e1f21"),ie(2.6,.12,2,0,.06,0,"#8a8478")]),pumpCase:()=>gt([Si(.22,.22,1.1,0,.55,0,"#5a4330",12),Si(.26,.26,.12,0,1.1,0,tr,12)]),pumpWinch:()=>gt([Si(.05,.05,4.6,0,1.15,0,tr).rotateX(Math.PI/2),ie(.12,1.2,.12,0,.6,-2.2,is),ie(.12,1.2,.12,0,.6,2.2,is),ie(.06,.06,1.2,.45,1.15,-1,"#8a6a44"),ie(.06,.06,1.2,-.45,1.15,1,"#8a6a44")]),bitts:()=>gt([ie(.5,2,.5,0,1,-1.1,"#6b4a2e"),ie(.5,2,.5,0,1,1.1,"#6b4a2e"),ie(.45,.45,2.8,.05,1.2,0,"#5a3c22")]),lantern:()=>gt([Si(.12,.1,.32,0,-.35,0,"#ffd890",8),Si(.14,.08,.1,0,-.14,0,"#3a2a18",8),on(new Jt(.01,.01,.12).translate(0,-.05,0),"#3a2a18")]),cartridgeRack:()=>gt([ie(.35,1.4,1.6,0,.7,0,"#6b4a2e"),...[.35,.75,1.15].flatMap(i=>[0,1,2,3,4,5].map(t=>on(new Jt(.07,.07,.3,8).rotateZ(Math.PI/2).translate(.05,i+.08,-.6+t*.24),"#e8dcc0")))]),timber:()=>gt([ie(3,.25,.25,0,.13,-.3,"#9a7a50"),ie(3,.25,.25,0,.13,0,"#8a6a44"),ie(2.6,.25,.25,0,.38,-.15,"#9a7a50")]),block:()=>gt([ie(.3,.42,.18,0,.21,0,"#6b4a2e"),Si(.04,.04,.2,0,.21,0,tr).rotateX(Math.PI/2)]),tub:()=>Si(.3,.34,.35,0,.18,0,"#6b4a2e",12),plate:()=>on(new Jt(.11,.1,.02,10).translate(0,.01,0),"#9a9a90"),globe:()=>gt([on(new me(.22,14,10).translate(0,1,0),"#c8b88a"),Si(.04,.12,.8,0,.4,0,"#5a3a20")])},aM=new Set(["messTable","bench","plate","chest","tub","table","chair","desk","settee","globe","cot","hammock","bucket"]),lM=new Set(["lower","middle","upper","qd"]),cM={middle:"lower",upper:"middle",qd:"upper",poop:"qd",lower:"orlop"},_d=class{constructor(){this.items={},this.deck=null,this._q=new qe}add(t,e,n,s,r=0,o=1){let a=new Mt().compose(new A(e,n,s),this._q.setFromAxisAngle(new A(0,1,0),r).clone(),new A(o,o,o));a.clearable=aM.has(t)&&lM.has(this.deck),(this.items[t]||=[]).push(a)}},Im=(i,t)=>Et(i,t+.6)-.15;function ss(i,t,e){if(i==="hold")return-5.3;let n=pt(i,t),s=Math.max(.5,Et(t,n+.25)-.06);return n+.1*(1-Math.min(1,(e/s)**2))}var hM=(i,t)=>pt(i,t)-.47,Lm=(i,t=.6)=>Un.some(e=>Math.abs(i-e.x)<e.w/2+t),uM=(i,t=1.2)=>Object.values(Bi).some(e=>Math.abs(i-e.x)<t);function Dm(i){let t=new _d,e=(_,y,x,S,E=0,b=0)=>{t.deck=y,t.add(_,x,ss(y,x,S)+b,S,E)},n=(_,y,x,S,E=0)=>{t.deck=cM[y],t.add(_,x,hM(y,x),S,E)},s=Oi(),r=_=>Kr.find(y=>y.name===_);for(let[_,y,x,S,E]of[["lower","lower","middle",-22.6,18],["middle","middle","upper",-15,15.5],["upper","upper","qd",-13.8,20.5]]){let b=r(_),M=s.filter(w=>w.tier===b).map(w=>w.x);for(let w=0;w<M.length-1;w++){let T=(M[w]+M[w+1])/2;if(!(T<S||T>E||Lm(T,.2)))for(let P of[1,-1]){let I=P*(Im(T,pt(y,T))-.05);t.deck=y,t.add("messTable",T,ss(y,T,I),I,P>0?Math.PI:0),e("bench",y,T-.6,I-P*1,Math.PI/2),e("bench",y,T+.6,I-P*1,Math.PI/2),e("plate",y,T-.15,I-P*.6,0,.81),e("plate",y,T+.15,I-P*1.3,0,.81),(w+(P>0?0:1))%2===0&&e("chest",y,T-.95,I-P*.35,Math.PI/2),w%3===0&&e("tub",y,T+.95,I-P*1.9),t.deck=null,t.add("garland",M[w]+1.5,ss(y,T,I)+.02,I-P*.12,0)}}}let o=(_,y)=>Un.some(x=>Math.abs(_-x.x)<x.w/2+1&&Math.abs(y)<x.d/2+.3);for(let _=7.4;_<20;_+=2.05){if(uM(_,1.3))continue;let y=pt("lower",_),x=Im(_,y)-.9;for(let S=-x;S<=x;S+=.36)Math.abs(S)<.35||o(_,S)||n("hammock","middle",_,S)}for(let[_,y,x,S]of[["lower","middle",-22,22],["middle","upper",-14,18],["upper","qd",-12,20],["orlop","lower",-24,24]])for(let E=x;E<=S;E+=4.5)Lm(E,.3)||n("lantern",y,E+.6,.9);let a=Bi.main.x;for(let _ of[1,-1])e("pumpCase","lower",a+1.2,_*1.5),e("pumpCase","lower",a-1.2,_*1.5),e("pumpWinch","lower",a,_*1.5,Math.PI/2);e("bitts","lower",20.6,0),e("table","lower",-25.4,0,Math.PI/2);for(let _ of[-.9,.9])for(let y of[-.5,.5])e("chair","lower",-25.4+y,_,_>0?Math.PI:0);e("chest","lower",-24.2,4.6),e("chest","lower",-24.2,-4.6),e("stove","middle",20.2,0,Math.PI),e("shelf","middle",17,-1.3,Math.PI/2),e("shelf","middle",17,1.3,-Math.PI/2),e("coop","middle",23.6,-2.2),e("coop","middle",23.6,2.2),e("tub","middle",18.8,-1.9),e("bucket","middle",18.8,2);for(let _ of[-27,-25.4,-23.8,-22.2]){e("table","middle",_,0,0);for(let y of[-.75,.75])e("chair","middle",_,y,y>0?Math.PI:0)}for(let[_,y]of[[-24.4,5.6],[-21.2,5.6],[-24.9,-5.6],[-22.4,-5.6],[-19.6,-5.6],[-17.1,-5.6]])n("cot","upper",_,y,0),e("chest","middle",_+.8,y*.8,0);e("desk","middle",-24.4,4.1,Math.PI),e("shelf","middle",-17.6,6.4,0),e("table","upper",-26,0,Math.PI/2);for(let _ of[-.9,.9])for(let y of[-.45,.45])e("chair","upper",-26+y,_,_>0?Math.PI:0);e("desk","upper",-27.6,3.2,Math.PI/2),e("settee","upper",-28.1,-2.5,Math.PI/2),e("globe","upper",-24.4,4.4);for(let _ of[-21.6,-20]){e("table","upper",_,0,0);for(let y of[-.8,.8])for(let x of[-.4,.4])e("chair","upper",_+x,y,y>0?Math.PI:0)}n("cot","qd",-16.9,4.4,0),e("desk","upper",-16,-3.5,-Math.PI/2),e("chest","upper",-17.6,-5,0);for(let[_,y]of[[22.6,2],[22.6,3.2],[24.4,2],[24.4,3.2],[26,2.2]])n("cot","qd",_,y,0);e("table","upper",23.5,4.8,0),e("table","qd",-26,0,Math.PI/2);for(let _ of[-.9,.9])e("chair","qd",-26,_,_>0?Math.PI:0);e("desk","qd",-27.8,2.8,Math.PI/2),e("table","qd",-21,-4,0);for(let _ of[-.5,.5])for(let y of[-4.8,-3.2])e("chair","qd",-21+_,y,y>-4?Math.PI:0);n("cot","poop",-21.4,3.8,0),e("desk","qd",-15.6,-4.6,0),e("chest","qd",-16.8,-5.6,0),e("desk","qd",-15.6,4.6,Math.PI),e("chest","qd",-16.8,5.6,0);for(let _ of[-.46,.46])e("chest","orlop",-14.6+_,0,Math.PI/2);e("tub","orlop",-13.3,.8),e("bucket","orlop",-15.9,-.8),e("bucket","orlop",-13.2,-.9),e("table","orlop",-14,-4,0);for(let _ of[-15.6,-12.4])e("chest","orlop",_,-5.4,0);n("lantern","lower",-13,-3.6);for(let _ of[-26.4,-25.2])for(let y of[-3.5,-1.2,1.2,3.5])e("bin","orlop",_,y,0);for(let[_,y]of[[-22.8,-4],[-21.6,-4.6],[-22,-2.6],[-21,-3.2]])e("sack","orlop",_,y,_);e("hogshead","orlop",-22.4,-5.6,0),e("hogshead","orlop",-21,-5.8,0);for(let[_,y]of[[-19.6,-4],[-18.8,-4.6],[-19.4,-2.4]])e("chest","orlop",_,y,0);e("shelf","orlop",-22.4,6,0),e("chest","orlop",-21.8,3,0),n("cot","lower",-19.7,4.6,0),e("chest","orlop",-19.7,2.6,0);for(let _=0;_<6;_++)e("powder","orlop",-22.9+_%3*.48,-.5+Math.floor(_/3)*1);for(let _ of[2.4,6,9.6])for(let y of[1,-1])e("coil","orlop",_,y*4.6,_);for(let[_,y]of[[14.8,3.2],[16.4,4.2],[15.4,5]])e("ropeCoil","orlop",_,y,0);for(let[_,y]of[[16.8,2.6],[17,3],[16.6,3.4]])e("block","orlop",_,y,_);e("workbench","orlop",15.8,-3.6,0),e("timber","orlop",15.6,-5.2,0);for(let _=0;_<4;_++)e("sailBundle","orlop",19,1.2+_*.65,0);for(let[_,y]of[[18.4,-2.6],[19.8,-3.4],[18.8,-4.2]])e("ropeCoil","orlop",_,y,0);for(let[_,y]of[[20,-1.4],[19.4,-1.2]])e("block","orlop",_,y,0);for(let _ of[21.1,21.6])for(let y of[-1.3,1.3])e("powder","orlop",_,y);let l=(_,y,x)=>Math.abs(y)<1.05+x||Math.abs(_-a)<3.2&&Math.abs(y)<3+x||_>-.2&&_<3.8&&y<.2&&y>-5.4,c=(_,y,x,S,E)=>{for(let b=_;b<=y;b+=S+.05){if(Math.abs(b-a)<2.6)continue;let M=Et(b,-5.3+E)-.25;for(let T=-M+E;T<=M-E;T+=2*E+.02)l(b,T,E)||e(x,"hold",b,T,0);let w=Et(b,-5.3+3*E)-.3;for(let T=-w+2*E;T<=w-2*E;T+=2*E+.02)l(b,T,E)||e(x,"hold",b,T,0,2*E*.9)}};c(.6,14.2,"leaguer",1.6,.52),c(-19.2,-5.2,"butt",1.3,.42);for(let _ of[a-1.6,a+1.6])for(let y of[-.6,.6])e("shotPile","hold",_,y,0);for(let _=18.4;_<22.6;_+=.5){let y=Math.min(2.6,Et(_,-5)-.5);for(let x=-y;x<=y;x+=.48)Math.abs(x)>.7&&e("powder","hold",_,x,0)}e("cartridgeRack","hold",16,-1.6,0),e("cartridgeRack","hold",16,1.6,Math.PI);let h=new Yt;h.name="furnishing";let p=new ae({vertexColors:!0,roughness:.8}),f=new ae({vertexColors:!0,roughness:.5,emissive:"#ffb347",emissiveIntensity:.9}),u=new Mt().makeScale(0,0,0),g=[];for(let[_,y]of Object.entries(t.items)){let x=oM[_](),S=new hn(x,_==="lantern"?f:p,y.length);y.forEach((E,b)=>S.setMatrixAt(b,E)),g.push([S,y]),S.castShadow=_!=="lantern"&&_!=="plate",S.receiveShadow=!0,S.name=_,S.frustumCulled=!1,h.add(S)}let v=-27.6,m=pt("middle",-24)-.75,d=new X(on(new Gt(8.2,.32,.32).translate(v+4.1,m,0),"#5a4330"),p);return d.castShadow=!0,h.add(d),h.userData.glow=f,h.userData.lanterns=(t.items.lantern||[]).map(_=>new A().setFromMatrixPosition(_)),h.userData.setCleared=_=>{for(let[y,x]of g)x.some(S=>S.clearable)&&(x.forEach((S,E)=>y.setMatrixAt(E,_&&S.clearable?u:S)),y.instanceMatrix.needsUpdate=!0)},h}var sh=.32;function dM(i,t,e){let n=[];for(let s=0;s<e;s++)n.push(new be(i-s*t*1.6,t,5,18).rotateX(Math.PI/2).translate(0,t+s*.01,0));return gt(n)}function fM(){let i=[];for(let t=0;t<4;t++)i.push(new be(.2-t*.012,.022,4,16).scale(.85,1.25,1).translate(.01*t,-.27,.02*t));return gt(i)}function Nm(){let i=ge(),t=new Yt;t.name="deckGear";let e={rail:[],pin:[],hang:[],coil:[],ring:[],bucket:[],grating:[]},n=(y,x,S,E=0,b=1,M=1,w=1)=>new Mt().compose(new A(y,x,S),new qe().setFromAxisAngle(new A(0,1,0),E),new A(b,M,w)),s=y=>y<Ke?pt("poop",y):pt("qd",y),r=(y,x,S)=>{let E=Math.max(2,Math.round((x-y)/.3)),b=[];for(let M=0;M<=E;M++){let w=y+(x-y)*M/E,T=s(w)+.95;b.push(new A(w,T,S*(Et(w,T)-sh-.1)))}for(let M=0;M<E;M++){let w=b[M],T=b[M+1],P=w.distanceTo(T),I=Math.atan2(-(T.z-w.z),T.x-w.x);e.rail.push(n((w.x+T.x)/2,w.y,(w.z+T.z)/2,I,P,1,1))}b.forEach((M,w)=>{w===0||w===E||(e.pin.push(n(M.x,M.y,M.z)),w%3===1&&e.hang.push(n(M.x,M.y,M.z+S*.04,S>0?Math.PI/2:-Math.PI/2)))});for(let M=y+.6;M<x-.3;M+=2.8){let w=s(M);e.coil.push(n(M,w+.01,S*(Et(M,w+.4)-sh-.55),M))}},o=Oi().filter(y=>y.tier.deck==="qd").map(y=>y.x).sort((y,x)=>y-x),a=[];for(let y=0;y<o.length-1;y++){let x=o[y]+.6,S=o[y+1]-.6;S-x>.8&&x>Ke+.3&&S<He(8)-2.5&&a.push([x,S])}a.push([gn+.4,je-.4]),a.push([o[o.length-1]+.6,He(8)-3.2]);for(let[y,x]of a)for(let S of[1,-1])r(y,x,S);for(let y of[1,-1])r(Me(10)+3,Ke-.6,y);let l=[],c=(y,x)=>{let S=pt(x,y)+.1,E=.95,b=.85;for(let[M,w]of[[-E,-E],[-E,E],[E,-E],[E,E],[-E,0],[E,0],[0,-E],[0,E]])l.push(we(new A(y+M,S,w),new A(y+M,S+b,w),.055,.055,8));for(let[M,w]of[[[-E,-E],[E,-E]],[[-E,E],[E,E]],[[-E,-E],[-E,E]],[[E,-E],[E,E]]]){let T=new Gt(Math.abs(w[0]-M[0])+.16,.1,Math.abs(w[1]-M[1])+.16);T.translate(y+(M[0]+w[0])/2,S+b,(M[1]+w[1])/2),l.push(T)}for(let M=0;M<16;M++){let w=M/16*4,T=Math.floor(w),P=w-T,I=[[-E,-E],[E,-E],[E,E],[-E,E]],N=I[T],D=I[(T+1)%4],F=y+N[0]+(D[0]-N[0])*P,V=N[1]+(D[1]-N[1])*P;P<.12||P>.88||(e.pin.push(n(F,S+b,V)),M%3===0&&e.hang.push(n(F,S+b,V,Math.atan2(V,F-y)-Math.PI/2)))}for(let[M,w]of[[-1.6,.9],[1.5,-1],[-1.4,-1.2]])e.coil.push(n(y+M,S-.09,w,M))};c(Bi.main.x,"qd"),c(Bi.fore.x,"qd");let h=new X(gt(l),i.darkWood);h.castShadow=h.receiveShadow=!0,t.add(h);for(let y of Oi()){let x=y.tier;for(let S of[1,-1]){let E=pt(x.deck,y.x),b=S*(Et(y.x,E+.5)-(x.deck==="qd"?sh:0)-.35);for(let M of[-x.w/2-.25,x.w/2+.25])e.ring.push(n(y.x+M,E+.11,b));e.ring.push(n(y.x,E+.11,b-S*(x.len+.6)))}}for(let y of[1,-1])for(let x=-22.9;x<Ke-2;x+=.42){let S=pt("poop",x)+.6;e.bucket.push(n(x,S,y*(Et(x,S+.3)-sh-.12)))}for(let[y,x,S]of[[-11.6,1.6,2.2],[-5.4,1.8,2.4]])e.grating.push(n(y,pt("qd",y)+.09,0,0,x,1,S));let p=gt([new Jt(.022,.03,.2,6).translate(0,.12,0),new me(.035,6,4).translate(0,.24,0),new Jt(.018,.018,.18,6).translate(0,-.05,0)]),f=gt([new be(.07,.014,4,12).rotateX(Math.PI/2),new Jt(.03,.03,.02,6)]),u=gt([new Jt(.13,.11,.3,10),new be(.13,.012,4,12).rotateX(Math.PI/2).translate(0,.15,0),new be(.15,.01,4,12).rotateY(Math.PI/2).translate(0,.2,0)]),g=(()=>{let y=[new Gt(1.1,.16,1.1)];for(let x=-4;x<=4;x++)y.push(new Gt(.035,.03,1).translate(x*.11,.09,0)),y.push(new Gt(1,.03,.035).translate(0,.09,x*.11));return gt(y)})(),v=new ae({color:"#2a1d14",roughness:.6}),m=new ae({color:"#6b5a42",roughness:.95}),d=new ae({color:"#7a6040",roughness:.85}),_=[["rail",new Gt(1,.11,.16),i.darkWood],["pin",p,i.darkWood],["hang",fM(),m],["coil",dM(.34,.04,6),m],["ring",f,i.iron],["bucket",u,v],["grating",g,d]];for(let[y,x,S]of _){let E=e[y];if(!E.length)continue;let b=new hn(x,S,E.length);E.forEach((M,w)=>b.setMatrixAt(w,M)),b.castShadow=y!=="ring",b.receiveShadow=!0,b.name=y==="grating"||y==="coil"?y:`gear-${y}`,b.frustumCulled=!1,t.add(b)}return t}var zn={lowerHead:34,topY:30.6,topLen:5.3,topW:7.1,rLower:[.5,.4],topmastHeel:29.6,topmastHead:50.4,crossY:47,crossW:4.6,rTop:[.33,.22],tgHeel:46.4,tgHead:58.4,poleHead:63.4,rTg:[.19,.08],yards:[{name:"course",L:31.5,ySet:29.2,yLow:29.2,r:.33,head:"lowerHead"},{name:"topsail",L:23.2,ySet:46.2,yLow:35,r:.25,head:"topmastHead"},{name:"topgallant",L:14.6,ySet:57.5,yLow:50.9,r:.16,head:"tgHead"},{name:"royal",L:9.6,ySet:62.5,yLow:58.9,r:.11,head:"poleHead"}]},rh=class{constructor(){let t=ge();this.group=new Yt,this.group.name="rig",this.masts={};for(let[e,n]of Object.entries(Bi))this.masts[e]=this.buildMast(e,n,t);this.buildBowsprit(t),this.buildSpankerSpars(t)}buildMast(t,e,n){let s=pt("upper",e.x),r=e.scale,o=B=>s+(B-5.76)*r,a={name:t,x:e.x,scale:r,group:new Yt,yards:{}},l=a.group;l.position.set(e.x,0,0),l.rotation.z=e.rake,this.group.add(l);let c={lowerHead:o(zn.lowerHead),topY:o(zn.topY),topmastHeel:o(zn.topmastHeel),topmastHead:o(zn.topmastHead),crossY:o(zn.crossY),tgHeel:o(zn.tgHeel),tgHead:o(zn.tgHead),poleHead:o(zn.poleHead),topLen:zn.topLen*r,topW:zn.topW*r,crossW:zn.crossW*r};a.h=c;let h=(B,Q,W=0)=>new A(B,Q,W),p=B=>B.map(Q=>Q*(.75+.25*r)),[f,u]=p(zn.rLower),[g,v]=p(zn.rTop),[m,d]=p(zn.rTg);a.r={lower:u,top:v,tg:d};let _=[],y=[],x=[];_.push(we(h(0,0),h(0,c.topY),f,u*1.05,16)),y.push(we(h(0,c.topY),h(0,c.lowerHead),u*.92,u*.88,12));for(let B=s+1.2;B<c.topY-1;B+=1.15)x.push(we(h(0,B),h(0,B+.12),f*1.06,f*1.06,16));let S=u+g+.05;_.push(we(h(S,c.topmastHeel),h(S,c.crossY),g,v*1.05,12)),y.push(we(h(S,c.crossY),h(S,c.topmastHead),v,v*.9,10));let E=S+v+m+.03;_.push(we(h(E,c.tgHeel),h(E,c.tgHead),m,d*1.3,10)),_.push(we(h(E,c.tgHead),h(E,c.poleHead),d*1.3,d*.7,8)),a.dTop=S,a.dTg=E,y.push(we(h(E,c.poleHead),h(E,c.poleHead+.25),.22*r,.22*r,10)),y.push(tn(h(-u-.2,c.lowerHead+.15),h(S+g+.25,c.lowerHead+.15),1*r,.45));let b=new Je,M=c.topLen,w=c.topW/2;b.moveTo(-M*.45,-w),b.lineTo(-M*.45,w),b.lineTo(M*.25,w),b.quadraticCurveTo(M*.55,w,M*.55,0),b.quadraticCurveTo(M*.55,-w,M*.25,-w),b.closePath();let T=new ts,P=u+.15,I=Math.min(M*.45,P+.9*r),N=Math.min(w*.55,1.1*r);T.moveTo(-M*.3,-N),T.lineTo(I,-N),T.lineTo(I,N),T.lineTo(-M*.3,N),T.closePath(),b.holes.push(T);let D=new An(b,{depth:.22,bevelEnabled:!1});D.rotateX(Math.PI/2),D.translate(0,c.topY+.22,0),y.push(D);for(let B=-3;B<=3;B++){let Q=B/3.5*w;y.push(new Gt(M*.95,.05,.08).translate(M*.05,c.topY+.25,Q))}for(let B=0;B<=6;B++){let Q=-w+2*w*B/6;y.push(we(h(-M*.43,c.topY+.22,Q),h(-M*.43,c.topY+1.15,Q),.035,.035,5))}y.push(we(h(-M*.43,c.topY+1.15,-w),h(-M*.43,c.topY+1.15,w),.05,.05,6)),y.push(tn(h(S,c.crossY,-c.crossW/2),h(S,c.crossY,c.crossW/2),.25,.22)),y.push(tn(h(S-1.2*r,c.crossY+.2),h(S+1*r,c.crossY+.2),c.crossW*.45,.18)),y.push(tn(h(S-v-.15,c.topmastHead+.1),h(E+m+.18,c.topmastHead+.1),.6*r,.3));let F=new X(gt(_),n.mast),V=new X(gt([...y,...x]),n.spar);F.castShadow=V.castShadow=!0,l.add(F,V),a.local={lowerHead:h(0,c.lowerHead-.2),shroudHead:h(0,c.topY-.4),stayLower:h(0,c.topY+.4),topEdge:B=>h(-M*.1,c.topY+.15,B*w*.98),topBack:h(-M*.4,c.topY+.2),topFront:h(M*.5,c.topY+.2),topmastShroudHead:h(S,c.crossY-.3),topmastHead:h(S,c.topmastHead-.2),crossEnd:B=>h(S,c.crossY+.1,B*c.crossW/2),tgHead:h(E,c.tgHead-.2),poleHead:h(E,c.poleHead-.1),futtock:h(0,c.topY-3.2*r)};for(let B of zn.yards){let Q=this.buildYard(a,B,o,n);a.yards[B.name]=Q}return a}buildYard(t,e,n,s){let r=t.scale,o=Qp[t.name][e.name],a=e.r*(.75+.25*r),l=new Yt,c=n(e.ySet),h=n(e.yLow),p=e.name==="course"?t.r.lower+a+.1:e.name==="topsail"?t.dTop+t.r.top+a+.05:t.dTg+a+.18;l.position.set(p,c,0);let f=[],u=12;for(let x=0;x<=u;x++){let S=x/u;f.push(new $(a*(1-.55*S**1.6),S*o/2))}let g=new bn(f,10),v=g.clone().scale(1,-1,1),m=gt([g,v]);m.rotateX(Math.PI/2);let d=new X(m,s.spar);d.castShadow=!0,l.add(d);let _=[];for(let x=0;x<=16;x++){let S=x/16*2-1;_.push(new A(-.15,-a-.9*(1-S*S)-.15,S*o*.47))}let y=[new vn(new _n(_),32,.03,4)];for(let x=2.2;x<o*.45;x+=2.4)for(let S of[1,-1]){let E=S*x/(o*.47),b=-a-.9*(1-E*E)-.15;y.push(we(new A(-.1,-a*.6,S*x),new A(-.15,b,S*x),.02,.02,4))}if(l.add(new X(gt(y),s.rope)),t.name!=="mizzen"&&(e.name==="course"||e.name==="topsail")){let x=[],S=.09*r*(e.name==="course"?1.2:1);for(let b of[1,-1]){x.push(we(new A(a*.8,a*.75,b*o*.2),new A(a*.8,a*.75,b*(o*.5+2.6*r)),S,S*.8,8));for(let M of[o*.22,o*.48])x.push(new be(S+.04,.025,4,10).rotateY(Math.PI/2).translate(a*.8,a*.75,b*M))}let E=new X(gt(x),s.spar);E.castShadow=!0,l.add(E)}return t.group.add(l),{name:e.name,group:l,L:o,r:a,ySet:c,yLow:h,mast:t,headKey:e.head,hoist:1,brace:0}}buildBowsprit(t){let e=new A(21.2,pt("qd",21.2)+.2,0),n=fn.degToRad(30),s=new A(Math.cos(n),Math.sin(n),0),r=(m,d=0)=>e.clone().addScaledVector(s,m).add(new A(-Math.sin(n)*d,Math.cos(n)*d,0)),o=[],a=[];o.push(we(r(0),r(22.6),.47,.33,16)),o.push(we(r(16.4,.6),r(32.5,.6),.2,.12,12)),o.push(we(r(29.8,.9),r(38.8,.9),.11,.06,10)),a.push(tn(r(22.1,.1),r(22.1,.95),.7,.42,new A(0,0,1))),a.push(tn(r(32,.6),r(32,.95),.36,.28,new A(0,0,1))),a.push(we(r(22.3,-.2),r(22.3,-2.8),.08,.06,6));let l=new X(gt(o),t.mast),c=new X(gt(a),t.spar);l.castShadow=c.castShadow=!0,this.group.add(l,c),this.bowsprit={P:r,heel:e,dir:s,steeve:n,stemPoint:r(9),fore:r(10.5,.4),cap:r(21.9,.4),jib:r(28,.8),jibEnd:r(32.2,.8),flyEnd:r(38.6,1),striker:r(22.3,-2.8)};let h=new Yt;h.position.copy(r(18,-.7));let p=19.66,f=.2,u=[];for(let m=0;m<=10;m++)u.push(new $(f*(1-.5*(m/10)**1.6),m/10*p/2));let g=gt([new bn(u,8),new bn(u,8).scale(1,-1,1)]);g.rotateX(Math.PI/2);let v=new X(g,t.spar);v.castShadow=!0,h.add(v),this.group.add(h),this.spritYard={name:"sprit",group:h,L:p,r:f,hoist:1,brace:0,ySet:h.position.y,yLow:h.position.y,mast:null}}buildSpankerSpars(t){let e=this.masts.mizzen,n=e.h,s=new Yt;s.position.set(-e.r.lower-.1,n.topY-2.4,0);let r=fn.degToRad(38);s.rotation.z=Math.PI-r;let o=13.9;s.add(new X(we(new A(0,0,0),new A(o,0,0),.2,.12,10),t.spar)),e.group.add(s);let a=new Yt,l=pt("poop",-17.4)+2.3;a.position.set(-e.r.lower-.1,l,0),a.rotation.z=Math.PI-.04;let c=22.25;a.add(new X(we(new A(0,0,0),new A(c,0,0),.24,.16,10),t.spar)),e.group.add(a);for(let h of[s,a])h.children[0].castShadow=!0;this.gaff={group:s,L:o},this.boom={group:a,L:c}}allYards(){let t=[];for(let e of Object.values(this.masts))t.push(...Object.values(e.yards));return t}applyYards(t){for(let e of Object.values(this.masts))for(let n of Object.values(e.yards)){let s=n.name==="course"?1:t.hoist[n.name]??1;n.group.position.y=n.yLow+(n.ySet-n.yLow)*s,n.group.rotation.y=t.brace*(n.name==="course"?.55:1)*(e.name==="mizzen"?1.15:1)}this.boom.group.rotation.y=t.boomSwing,this.gaff.group.rotation.y=t.boomSwing*1.2}};var pM=new Mt,mM=new Mt,gM=new A;function Xe(i,t,e,n=new A){return n.copy(i),t.localToWorld(n),e.worldToLocal(n)}function ah(i,t){let e=new ue;e.setAttribute("position",new ye(new Float32Array(i*t*3),3)),e.setAttribute("uv",new ye(new Float32Array(i*t*2),2));let n=[];for(let s=0;s<t-1;s++)for(let r=0;r<i-1;r++){let o=s*i+r,a=o+1,l=o+i,c=l+1;n.push(o,a,c,o,c,l)}return e.setIndex(n),e}var Um=i=>i*i*(3-2*i);function xM(i,t){let e=ge(),n=[],s=60,r=1.35;for(let c=0;c<=s;c++){let h=-i/2+c/s*i,p=2*h/i,f=.5+.5*Math.pow(Math.max(0,1-p*p),.7),u=.9+.1*Math.abs(Math.sin(Math.PI*h/r)),g=Math.sqrt(Math.max(0,1-Math.pow(Math.abs(p),8)));n.push(new $(Math.max(.001,t*f*u*g),h))}let o=new Yt,a=new X(new bn(n,12),e.furl);a.castShadow=!0,o.add(a);let l=[];for(let c=r*Math.ceil(-i/2/r+.3);c<i/2-.3;c+=r){let h=2*c/i,p=t*(.5+.5*Math.pow(Math.max(0,1-h*h),.7))*.9;l.push(new be(p,.022,4,14).rotateX(Math.PI/2).translate(0,c,0))}return l.length&&o.add(new X(Ps(l),e.rope)),o}var oh=class{constructor(t,e,n,s){let r=ge();this.name=t,this.yard=e,this.foot=n,this.fullness=s,this.roach=n.yard?.13:.03,this.NU=15,this.NV=13,this.geo=ah(this.NU,this.NV),this.mesh=new X(this.geo,r.canvas),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh);let o=e.L*.86,a=Math.min(.38,.12+e.L*.009);this.furl=xM(o,a*1.15),this.furl.rotation.x=Math.PI/2,this.furl.position.set(.12,e.r+a*.7,0),e.group.add(this.furl),this.set=-1}update(t,e,n,s=0){let r=this.NU,o=this.NV,a=this.yard;this.setNow=t;let l=t>.015;this.mesh.visible=l;let c=1-Um(Math.min(1,t/.35));if(this.furl.visible=c>.02,this.furl.scale.set(Math.max(.05,c),1,Math.max(.05,c)),!l)return;let h=a.L*.465,p=new A(0,-a.r,-h),f=new A(0,-a.r,h),u,g;if(this.foot.yard){let x=this.foot.yard,S=x.L*.465;u=Xe(new A(0,x.r,-S),x.group,a.group),g=Xe(new A(0,x.r,S),x.group,a.group)}else{let x=this.foot.drop();u=new A(.6,-x,-h*.74),g=new A(.6,-x,h*.74)}let v=(u.y+g.y)/2*-1;this.height=Math.max(1,v);let m=this.fullness*e*t,d=this.geo.attributes.position.array,_=this.geo.attributes.uv.array,y=Math.sin(n*2.1+a.L)*.04*e;for(let x=0;x<o;x++){let S=x/(o-1);for(let E=0;E<r;E++){let b=E/(r-1),M=x*r+E,w=p.x+(f.x-p.x)*b,T=p.y+(f.y-p.y)*b,P=p.z+(f.z-p.z)*b,I=Math.sin(Math.PI*b)*this.roach*v,N=u.x+(g.x-u.x)*b,D=u.y+(g.y-u.y)*b+I,F=u.z+(g.z-u.z)*b,V=S*t,B=w+(N-w)*V,Q=T+(D-T)*V,W=P+(F-P)*V,nt=Math.sin(Math.PI*b)**.9*Math.sin(Math.PI*(.06+.82*S));B+=m*nt*(1+y*Math.sin(b*9+n*3)),B+=(1-t)*.25*Math.sin(b*Math.PI*14)*S;for(let et of[0,1]){let bt=Math.hypot(b-et,(S-1)*.7);bt<.35&&(B+=m*.06*Math.sin(bt*45+Math.atan2(S-1,b-et)*6)*(1-bt/.35))}s>0&&(B+=s*.3*(.5+.5*Math.sin(n*9+b*7+S*4))*Math.sin(Math.PI*b)*S),d[M*3]=B,d[M*3+1]=Q,d[M*3+2]=W,_[M*2]=W/2,_[M*2+1]=this.reef?1-S:Q/4}}(this.colliders?.length||this.stays?.length)&&this.drape(d),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}drape(t){let e=pM.copy(this.space.matrixWorld).invert().multiply(this.yard.group.matrixWorld),n=mM.copy(e).invert(),s=gM,r=.35,o=2;for(let a=0;a<t.length;a+=3){s.set(t[a],t[a+1],t[a+2]).applyMatrix4(e);let l=-1/0;for(let[h,p]of this.colliders){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y)||Math.sign(s.z)!==Math.sign(h.z))continue;let f=(s.y-h.y)/(p.y-h.y),u=h.x+(p.x-h.x)*f,g=Math.abs(h.z+(p.z-h.z)*f),v=Math.min(1,Math.max(0,(Math.abs(s.z)-(g-o))/o));if(v<=0)continue;let m=u+r;s.x<m&&(l=Math.max(l,s.x+(m-s.x)*v*v*(3-2*v)))}let c=!1;l>s.x&&(s.x=l,c=!0);for(let[h,p]of this.stays||[]){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y))continue;let f=(s.y-h.y)/(p.y-h.y),u=h.x+(p.x-h.x)*f,g=h.z+(p.z-h.z)*f,v=1-Math.min(1,Math.abs(s.z-g)/2.2),m=u-.3;v>0&&s.x>m&&(s.x-=(s.x-m)*v*v*(3-2*v),c=!0)}c&&(s.applyMatrix4(n),t[a]=s.x,t[a+1]=s.y,t[a+2]=s.z)}}},vd=class{constructor(t,e,n,s,r,o){this.name=t,this.tack=n,this.head=s,this.clew=r,this.fullness=o,this.NU=12,this.NV=9,this.geo=ah(this.NU,this.NV),this.mesh=new X(this.geo,ge().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh)}update(t,e,n,s=1){if(this.mesh.visible=t>.015,!this.mesh.visible)return;let r=this.tack,o=r.clone().lerp(this.head,t),a=this.clew.clone();a.z=Math.abs(a.z)*s;let l=r.clone().lerp(a,.15+.85*t);this.side=s;let c=new A().subVectors(o,r).cross(new A().subVectors(l,r)).normalize();c.z*s<0&&c.negate();let h=o.distanceTo(r),p=this.fullness*e*t*h*.06,f=this.geo.attributes.position.array,u=this.geo.attributes.uv.array,g=this.NU,v=this.NV,m=new A,d=new A;for(let _=0;_<v;_++){let y=_/(v-1);for(let x=0;x<g;x++){let S=x/(g-1);d.copy(r).lerp(l,S),m.copy(d).lerp(o,y);let E=Math.sin(Math.PI*S)*Math.sin(Math.PI*Math.min(1,y*.9+.08))*(1-y*.4);m.addScaledVector(c,p*E*(1+.03*Math.sin(n*3+S*8)));let b=_*g+x;f[b*3]=m.x,f[b*3+1]=m.y,f[b*3+2]=m.z,u[b*2]=S*r.distanceTo(this.clew)/2,u[b*2+1]=y*h/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},yd=class{constructor(t,e,n){this.name="spanker",this.mast=t,this.gaff=e,this.boom=n,this.NU=12,this.NV=12,this.geo=ah(this.NU,this.NV),this.mesh=new X(this.geo,ge().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,t.group.add(this.mesh);let s=ge();this.brail=new X(new Be(.35,1,4,8),s.furl),this.brail.castShadow=!0,t.group.add(this.brail)}update(t,e,n,s=1){let r=this.mast.group,o=Xe(new A(.3,-.15,0),this.gaff.group,r),a=Xe(new A(this.gaff.L-.3,-.15,0),this.gaff.group,r),l=Xe(new A(.3,.2,0),this.boom.group,r),c=Xe(new A(this.boom.L-2,.2,0),this.boom.group,r),h=1-Um(Math.min(1,t/.4));this.brail.visible=h>.02;let p=o.clone().lerp(l,.5).add(new A(-.5,0,0));if(this.brail.position.copy(p),this.brail.scale.set(h,(o.y-l.y-.7)/1.7,h),this.mesh.visible=t>.015,!this.mesh.visible)return;let f=new A(0,0,s),u=this.geo.attributes.position.array,g=this.geo.attributes.uv.array,v=this.NU,m=this.NV,d=new A,_=new A,y=new A,x=1.3*e*t;for(let S=0;S<m;S++){let E=S/(m-1);for(let b=0;b<v;b++){let M=b/(v-1)*t;d.copy(l).lerp(c,M),_.copy(o).lerp(a,M),y.copy(d).lerp(_,E);let w=Math.sin(Math.PI*Math.min(1,M/Math.max(t,.01)))*Math.sin(Math.PI*(.08+.84*E));y.addScaledVector(f,x*w+(1-t)*.2*Math.sin(M*30));let T=S*v+b;u[T*3]=y.x,u[T*3+1]=y.y,u[T*3+2]=y.z,g[T*2]=y.x/2,g[T*2+1]=y.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},ba=class{constructor(t,e,n,s,r=null){this.name=t,this.yard=e,this.footYard=n,this.side=s,this.lower=r,this.NU=8,this.NV=10,this.geo=ah(this.NU,this.NV),this.mesh=new X(this.geo,ge().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh),r&&(this.boom=new X(new Jt(.11,.08,1,8).translate(0,.5,0).rotateZ(-Math.PI/2),ge().spar),this.boom.castShadow=!0,r.parent.add(this.boom))}update(t,e,n){let s=t>.02;if(this.mesh.visible=s,this.boom&&(this.boom.visible=s),!s)return;let r=this.yard,o=this.side,a=r.L,l=a*.465,c=a/2+2.4*r.mast.scale,h=Math.min(c-l+.6,a*.32),p=new A(.25,-r.r,o*l),f=new A(.25,-r.r,o*(l+h*t)),u,g;if(this.footYard){let E=this.footYard,b=E.L/2+2.4*E.mast.scale;u=Xe(new A(.25,E.r,o*E.L*.465),E.group,r.group),g=Xe(new A(.25,E.r,o*(E.L*.465+(b-E.L*.465)*t)),E.group,r.group)}else{let{root:E,dropTo:b,reach:M}=this.lower,w=l*.78+.6;u=new A(.6,-b(),o*w),g=new A(.6,-b(),o*(w+M*t));let T=Xe(E.clone(),this.lower.parent,this.lower.parent),P=Xe(g.clone(),r.group,this.lower.parent);this.boom.position.copy(T),this.boom.scale.set(T.distanceTo(P),1,1),this.boom.quaternion.setFromUnitVectors(new A(1,0,0),P.clone().sub(T).normalize())}let v=this.geo.attributes.position.array,m=this.geo.attributes.uv.array,d=this.NU,_=this.NV,y=new A,x=new A,S=new A;for(let E=0;E<_;E++){let b=E/(_-1);for(let M=0;M<d;M++){let w=M/(d-1);x.copy(p).lerp(f,w),S.copy(u).lerp(g,w),y.copy(x).lerp(S,b),y.x+=1.1*e*t*Math.sin(Math.PI*w)*Math.sin(Math.PI*(.06+.82*b));let T=E*d+M;v[T*3]=y.x,v[T*3+1]=y.y,v[T*3+2]=y.z,m[T*2]=y.z/2,m[T*2+1]=y.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}};function Fm(i,t){let e={square:[],stay:[],spanker:null},n={course:1.7,topsail:2,topgallant:1.3,royal:.8};for(let d of Object.values(i.masts)){let _=d.yards,y=(x,S)=>{if(!_[x]||!S&&x!=="course")return;let E=S?{yard:S}:{drop:()=>_.course.group.position.y-(Ie(d.x)+2.2)},b=new oh(`${d.name}-${x}`,_[x],E,n[x]*d.scale);b.mastName=d.name,b.kind=x,x==="topsail"&&(b.reef=!0,b.mesh.material=ge().canvasReef),e.square.push(b)};d.name!=="mizzen"&&y("course"),y("topsail",_.course),y("topgallant",_.topsail),y("royal",_.topgallant)}{let d=i.spritYard,_=new oh("spritsail",d,{drop:()=>3},.8);_.kind="sprit",e.square.push(_)}let s=i.bowsprit,r=i.masts.fore,o=i.masts.main,a=i.masts.mizzen;i.group.updateMatrixWorld(!0);let l=(d,_)=>Xe(d.local[_].clone(),d.group,i.group),c=(d,_,y,x,S)=>{let E=new vd(d,i.group,_,y,x,S);E.kind=d,e.stay.push(E)},h=(d,_,y)=>d.clone().lerp(_,y),p=l(r,"topmastShroudHead"),f=l(r,"tgHead");c("foreTopmastStaysail",h(s.cap,p,.04),h(s.cap,p,.82),new A(r.x+4.5,pt("qd",24)+5,1.8),1),c("jib",h(s.jibEnd,p,.05),h(s.jibEnd,p,.78),new A(r.x+7,pt("qd",24)+8,4),1),c("flyingJib",h(s.flyEnd,f,.04),h(s.flyEnd,f,.62),new A(r.x+10.5,pt("qd",24)+13,6),.9);let u=l(o,"topmastShroudHead"),g=l(r,"lowerHead");c("mainTopmastStaysail",h(g,u,.14),h(g,u,.85),new A(o.x+4.5,o.h.topY+1.5,.6),.9);let v=l(a,"topmastShroudHead"),m=l(o,"topBack");c("mizzenStaysail",h(m,v,.14),h(m,v,.8),new A(a.x+3,a.h.topY+.5,.6),.8),e.spanker=new yd(a,i.gaff,i.boom),e.stun=[];for(let d of[r,o]){let _=d.yards;for(let y of[1,-1]){let x=(S,E)=>{E.kind=S,E.mastName=d.name,e.stun.push(E)};if(x("stunTop",new ba(`${d.name}-topmast-stunsail`,_.topsail,_.course,y)),x("stunTg",new ba(`${d.name}-topgallant-stunsail`,_.topgallant,_.topsail,y)),d===r){let S=pt("upper",d.x)+1.95;x("stunLower",new ba("fore-lower-stunsail",_.course,null,y,{parent:i.group,root:new A(d.x+.5,S+.4,y*(Et(d.x+.5,S)+.9)),dropTo:()=>_.course.group.position.y-(Ie(d.x)+1.4),reach:7.5}))}}}return e}var Om=new A(0,1,0),rs=class{constructor(t,e,n){let s=new Jt(1,1,1,6,1,!0);s.translate(0,.5,0),this.mesh=new hn(s,e,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=n,this._m=new Mt,this._q=new qe,this._s=new A,this._d=new A}begin(){this.n=0,this.segs=[],this.tag=""}add(t,e,n){if(this.n>=this.capacity)return;this.segs.push([t.clone(),e.clone(),this.tag]);let s=this._d.subVectors(e,t),r=s.length();r<1e-4||(this._q.setFromUnitVectors(Om,s.multiplyScalar(1/r)),this._s.set(n,r,n),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.n++,this._m))}addSag(t,e,n,s=.02,r=4){let o=t.distanceTo(e),a=t.clone();for(let l=1;l<=r;l++){let c=l/r,h=t.clone().lerp(e,c);h.y-=s*o*4*c*(1-c),this.add(a,h,n),a=h}}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Md=class{constructor(t,e){let n=ge(),s=new me(1,8,6).scale(.11,.17,.075),r=new be(.085,.018,4,10).scale(1,1.6,1),o=Ps([s,r.translate(0,0,0)].map(a=>a.toNonIndexed()));this.mesh=new hn(o,n.darkWood,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=e,this._m=new Mt,this._q=new qe}begin(){this.n=0}add(t,e,n=.35,s=1){if(this.n>=this.capacity)return;let r=new A().subVectors(e,t),o=r.length();if(o<.001)return;r.multiplyScalar(1/o);let a=t.clone().addScaledVector(r,Math.min(n,o*.5));this._q.setFromUnitVectors(Om,r),this._m.compose(a,this._q,new A(s,s,s)),this.mesh.setMatrixAt(this.n++,this._m)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},lh=class{constructor(t){let e=ge();this.rig=t,this.space=t.group,this.standing=new rs(this.space,e.rope,9e3),this.running=new rs(this.space,e.ropeLight,600),this.sailLines=new rs(this.space,e.ropeLight,7e3),this.blocks=new Md(this.space,400),this.sailLines.mesh.castShadow=!1,this.fittings=new Yt,this.space.add(this.fittings),t.group.updateMatrixWorld(!0),this.colliders={},this.buildStanding(e)}P(t,e,...n){let s=t.local[e],r=typeof s=="function"?s(...n):s.clone();return Xe(r,t.group,this.space)}L(t,e){return Xe(e,t.group,this.space)}buildStanding(t){let e=this.standing;e.begin();let n=this.rig,s=[],r=[],o=[],a=(x,S,E)=>new A(x,S,E),l=(x,S,E,b,M,w)=>{for(let T=0;T<x.length-1;T++){let[P,I]=x[T],[N,D]=x[T+1];for(let F=E;F<b;F+=M){let V=(F-P.y)/(I.y-P.y),B=(F-N.y)/(D.y-N.y);V<0||V>1||B<0||B>1||e.add(P.clone().lerp(I,V),N.clone().lerp(D,B),w)}}};for(let x of Object.values(n.masts)){let S=x.scale,E=this.colliders[x.name]={lower:[],futtock:[],topmast:[],tg:[],backstay:[]},b=x.name==="main"?9:x.name==="fore"?8:6,M=x.x+.4*S,w=Math.max(x.x-7.8*S,x.name==="mizzen"?-21.9:-99),T=pt("upper",x.x)+1.95;for(let P of[1,-1]){let I=Et(M,T),N=Et(w,T);s.push(tn(a(M,T,P*(I+.5)),a(w,T,P*(N+.5)),1.2,.2));let D=[],F=this.P(x,"shroudHead");for(let jt=0;jt<b;jt++){let Nt=M-.3-jt*(M-w-.6)/(b-1),Ht=Et(Nt,T)+1.05,U=a(Nt,T+.2,P*Ht),k=a(Nt,T+1.25,P*(Ht-.03));r.push(U,k),e.tag=`${x.name} lanyard`,e.add(U,k,.025);let J=Kr[2],ut=Math.round((Nt-J.x0)/J.dx-.5),lt=J.x0+(ut+.5)*J.dx,mt=lt+Math.max(-.7,Math.min(.7,Nt-lt)),zt=Et(mt,T-2.6)+.12;o.push([U.clone().add(a(0,-.15,0)),a(mt,T-2.6,P*zt)]);let K=F.clone().add(a(0,0,P*(x.r.lower+.12)));e.tag=`${x.name} lower shroud`,e.add(k,K,.06*(.8+.2*S)),E.lower.push([k,K]),D.push([k,K])}e.tag=`${x.name} lower ratline`,l(D,null,T+1.8,F.y-1.2,.42,.016);let V=[],B=x.h;for(let jt=0;jt<4;jt++){let Nt=-B.topLen*.36+jt*B.topLen*.16,Ht=this.L(x,a(Nt,B.topY+.2,P*B.topW*.48));r.push(Ht);let U=this.L(x,a(Nt*.3,B.topY-3.2*S,P*.65));e.tag=`${x.name} futtock shroud`,e.add(Ht,U,.035),E.futtock.push([U,Ht]),e.tag=`${x.name} topmast shroud`;let k=this.L(x,a(x.dTop,B.crossY-.3,P*.3));e.add(Ht.clone().add(a(0,.9,0)),k,.045),E.topmast.push([Ht.clone().add(a(0,.9,0)),k]),e.add(Ht,Ht.clone().add(a(0,.9,0)),.02),V.push([Ht.clone().add(a(0,.9,0)),k])}e.tag=`${x.name} topmast ratline`,l(V,null,B.topY+1.6,B.crossY-1.2,.4,.013),e.tag=`${x.name} topgallant shroud`;let Q=this.P(x,"crossEnd",P),W=this.L(x,a(x.dTg,B.tgHead-.4,P*.14));e.add(Q.clone().add(a(-.1,0,0)),W,.03),e.add(Q.clone().add(a(-.8,0,0)),W,.03),E.tg.push([Q.clone().add(a(-.1,0,0)),W],[Q.clone().add(a(-.8,0,0)),W]),e.tag=`${x.name} backstay`;let nt=T+.15,et=jt=>{if(x.name==="mizzen"){let Ht=-22.6-jt*.7,U=Ie(Ht)-.3;return a(Ht,U,P*(Et(Ht,U)+.6))}let Nt=w-.9-jt*1.1;return a(Nt,nt,P*(Et(Nt,nt)+.9))};for(let jt=0;jt<2;jt++){let Nt=et(jt);r.push(Nt),s.push(tn(Nt.clone().add(a(.4,-.1,-P*.6)),Nt.clone().add(a(-.4,-.1,-P*.6)),1.2,.2));let Ht=this.L(x,a(x.dTop,B.topmastHead-.6,P*.25));e.add(Nt,Ht,.05),E.backstay.push([Nt,Ht])}let bt=this.L(x,a(x.dTg,B.tgHead-.3,P*.12)),Rt=this.L(x,a(x.dTg,B.poleHead-.2,P*.1));e.add(et(2),bt,.035),e.add(et(2),Rt,.025),E.backstay.push([et(2),bt],[et(2),Rt])}}let c=n.bowsprit,h=n.masts.fore,p=n.masts.main,f=n.masts.mizzen,u=[["fore stay",this.P(h,"stayLower"),c.fore,.13],["fore preventer stay",this.P(h,"stayLower").add(a(0,-.3,0)),c.P(12.5,.4),.1],["fore topmast stay",this.P(h,"topmastShroudHead"),c.cap,.08],["jib stay",this.P(h,"topmastShroudHead"),c.jibEnd,.06],["fore topgallant stay",this.P(h,"tgHead"),c.flyEnd,.045],["fore royal stay",this.P(h,"poleHead"),c.flyEnd,.03],["main stay",this.P(p,"stayLower"),a(h.x+2.2,pt("qd",h.x+2.2)+.6,0),.14],["main preventer stay",this.P(p,"stayLower").add(a(0,-.3,0)),a(h.x+3,pt("qd",h.x+3)+.6,0),.1],["main topmast stay",this.P(p,"topmastShroudHead"),this.P(h,"lowerHead"),.08],["main topgallant stay",this.P(p,"tgHead"),this.P(h,"topmastShroudHead"),.045],["main royal stay",this.P(p,"poleHead"),this.P(h,"tgHead"),.03],["mizzen stay",this.P(f,"stayLower"),this.L(p,a(0,pt("qd",p.x)+3.5,0)),.1],["mizzen topmast stay",this.P(f,"topmastShroudHead"),this.P(p,"topBack"),.06],["mizzen topgallant stay",this.P(f,"tgHead"),this.P(p,"lowerHead"),.035]];this.stayLines={};for(let[x,S,E,b]of u)e.tag=x,e.add(S,E,b),this.stayLines[x]=[S,E];e.tag="bowsprit rigging";let g=x=>a(31+(x-2)*.35,x,0);e.tag="bobstay",e.add(c.P(10.5,-.3),g(1.6),.08),e.add(c.P(13.5,-.3),g(3.4),.08);for(let x of[1,-1])e.tag="bowsprit shroud",e.add(c.P(12,0),a(28.2,4.5,x*2),.06),e.add(c.P(16,0),a(28.4,5,x*2.1),.06),e.tag="martingale back rope",e.add(c.striker,a(27.5,pt("qd",27)-.6,x*2.2),.04);e.tag="martingale stay",e.add(c.jibEnd,c.striker,.04),e.add(c.flyEnd,c.striker,.035),e.end();let v=new rs(this.space,t.iron,o.length);v.begin();for(let[x,S]of o)v.add(x,S,.04);v.end();let m=new X(gt(s),t.black);m.castShadow=!0,this.fittings.add(m);let d=new Jt(.17,.17,.12,10);d.rotateX(Math.PI/2);let _=new hn(d,t.darkWood,r.length),y=new Mt;r.forEach((x,S)=>{y.makeTranslation(x.x,x.y,x.z),_.setMatrixAt(S,y)}),this.fittings.add(_)}updateRunning(t,e,n){let s=this.running,r=this.rig,o=(m,d,_)=>new A(m,d,_);s.begin();let a=this.blocks;a.begin();let l=r.masts.main,c=r.masts.mizzen,h=(m,d,_)=>{let y=_;return m.name==="fore"?d.name==="course"?o(l.x+3.5,Ie(l.x+3.5)+.3,y*7.2):d.name==="topsail"?this.P(l,"crossEnd",y):d.name==="topgallant"?this.P(l,"tgHead"):this.P(l,"poleHead"):m.name==="main"?d.name==="course"?o(-21.5,Ie(-21.5)+.3,y*(Et(-21.5,9)+.1)):d.name==="topsail"?o(c.x+1,Ie(c.x+1)+.6,y*(Et(c.x+1,9)+.4)):this.P(c,"poleHead").add(o(0,.2,0)):d.name==="course"?this.L(l,o(-1.5,pt("qd",l.x)+6,y*3)):d.name==="topsail"?this.P(l,"topEdge",y):this.P(l,"crossEnd",y)},p={course:"lowerHead",topsail:"topmastHead",topgallant:"tgHead",royal:"poleHead"};for(let m of Object.values(r.masts))for(let d of Object.values(m.yards)){let _=this.P(m,p[d.name]);for(let y of[1,-1]){let x=Xe(o(0,0,y*d.L*.48),d.group,this.space);s.tag=`${m.name} ${d.name} lift`;let S=_.clone().add(o(0,0,y*.3));s.add(x,S,.025),a.add(S,x,.25,.8+.2*m.scale),a.add(x,S,.3,.7+.2*m.scale),s.tag=`${m.name} ${d.name} brace`;let E=h(m,d,y);s.addSag(x,E,.022,.012,3),a.add(x,E,.9,.8+.2*m.scale),a.add(E,x,.3,.8)}if(s.tag=`${m.name} ${d.name} tie`,s.add(Xe(o(0,d.r,0),d.group,this.space),_,.04),d.name!=="course"){s.tag=`${m.name} ${d.name} halyard`;let y=d.name==="topgallant"?-1:1,x=o(m.x-1.3,pt("upper",m.x)+(m.x>1&&m.x<15?.6:2.6),y*.9);s.add(_.clone().add(o(-.35,-.3,y*.2)),x,.03)}}for(let m of t.square){if(m.kind!=="course"||!m.mesh.visible)continue;let d=m.geo.attributes.position,_=[d.count-m.NU,d.count-1];s.tag=`${m.mastName} course sheet/tack`,_.forEach((y,x)=>{let S=Xe(o(d.getX(y),d.getY(y),d.getZ(y)),m.yard.group,this.space),E=Math.sign(S.z)||(x===0?-1:1),b=m.mastName==="fore"?9:-12;s.addSag(S,o(b,Ie(b)+.3,E*(Et(b,9)+.1)),.03,.01,3),s.add(S,o(S.x+6,Ie(S.x+6)+.2,E*(Et(S.x+6,9)-.1)),.03)})}for(let m of t.stay){if(!m.mesh.visible)continue;let d=m.geo.attributes.position,_=o(d.getX(m.NU-1),d.getY(m.NU-1),d.getZ(m.NU-1)),x=m.kind==="mainTopmastStaysail"||m.kind==="mizzenStaysail"?_.x+3:Math.min(23,_.x-4);s.tag=`${m.name} sheet`,s.addSag(_,o(x,Ie(x)+.3,Math.sign(_.z)*(Et(x,9)-.2)),.025,.02,3)}let f=Xe(o(r.boom.L-.3,0,0),r.boom.group,this.space),u=Xe(o(r.gaff.L-.2,0,0),r.gaff.group,this.space);s.tag="boom topping lift";let g=1.3*n.belly*e["set.spanker"];for(let m of[1,-1]){let d=Xe(o(r.boom.L-.3,0,m*.45),r.boom.group,this.space),_=this.P(c,"lowerHead").add(o(0,0,m*.9)),y=m===n.lee?g+.35:0,x=d;for(let S=1;S<=8;S++){let E=S/8,b=d.clone().lerp(_,E);b.z+=m*y*Math.sin(Math.PI*Math.min(1,E*1.25)),s.add(x,b,.03),x=b}}s.tag="spanker sheet",s.addSag(f,o(-29,Ie(-29)+.3,0),.04,.01,2),s.tag="gaff vang",s.addSag(u,Xe(o(r.boom.L-.4,.15,0),r.boom.group,this.space),.02,.02,3),s.addSag(u,o(-28.5,Ie(-28.5)+.2,-n.lee*(Et(-28.5,Ie(-28.5))-.1)),.02,.02,3),s.tag="peak halyard",s.add(u,this.P(c,"topmastShroudHead"),.03);let v=r.spritYard;s.tag="spritsail yard rigging";for(let m of[1,-1]){let d=Xe(o(0,0,m*v.L*.48),v.group,this.space);s.add(d,r.bowsprit.cap,.022),s.addSag(d,o(26.5,Ie(26.5)+.3,m*3.5),.02,.02,3)}s.end(),a.end(),this.updateSailLines(t)}updateSailLines(t){let e=this.sailLines;e.begin();let n=new Mt().copy(this.space.matrixWorld).invert(),s=new Mt,r=new A,o=new A,a=new A,l=(v,m,d,_,y)=>{let x=v.geo.attributes.position,S=v.geo.attributes.normal,E=d*v.NU+m;return r.fromBufferAttribute(x,E),a.fromBufferAttribute(S,E),a.dot(y)<0&&a.negate(),r.clone().addScaledVector(a,_).applyMatrix4(s)},c=(v,m,d,_,y,x)=>{let S=null;for(let E=v.NV-1;E>=0;E--){let b=l(v,m,E,d,_);S&&e.add(S,b,y),S=b}x&&e.add(S,x.clone().applyMatrix4(s),y)},h=new A(1,0,0),p=(v,m,d,_,y)=>{let x=m*(v.NU-1),S=d*(v.NV-1),E=Math.min(v.NU-2,Math.floor(x)),b=Math.min(v.NV-2,Math.floor(S)),M=x-E,w=S-b,T=l(v,E,b,_,y),P=l(v,E+1,b,_,y),I=l(v,E,b+1,_,y),N=l(v,E+1,b+1,_,y);return M>=w?T.addScaledVector(P.clone().sub(T),M).addScaledVector(N.clone().sub(P),w):T.addScaledVector(I.clone().sub(T),w).addScaledVector(N.clone().sub(I),M)},f=(v,m,d,_=.022)=>{for(let y of m)for(let x=0;x<v.NV-1;x++)e.add(l(v,y,x,0,h),l(v,y,x+1,0,h),_);if(d!=null)for(let y=0;y<v.NU-1;y++)e.add(l(v,y,d,0,h),l(v,y+1,d,0,h),_)},u={course:[.2,.4,.6,.8],topsail:[.28,.5,.72],topgallant:[.35,.65]};for(let v of t.square){if(!v.mesh.visible||!u[v.kind])continue;s.multiplyMatrices(n,v.yard.group.matrixWorld);let m=v.yard.L*.465;e.tag=`${v.name} buntline`;for(let d of u[v.kind]){let _=Math.round(d*(v.NU-1)),y=-m+2*m*_/(v.NU-1);c(v,_,.06,h,.018,new A(v.yard.r+.05,v.yard.r*.6,y))}if(e.tag=`${v.name} bolt rope`,f(v,[0,v.NU-1],v.NV-1),v.reef&&v.mesh.visible){e.tag=`${v.name} reef points`;let d=v.yard.L*.93,_=Math.round(d/.6);for(let y of[.12,.24,.36])if(!(y>v.setNow-.02))for(let x=1;x<_;x++)for(let S of[.05,-.05]){let E=y/Math.max(.05,v.setNow),b=.26/Math.max(1,v.height||10),M=S*1.6,w=p(v,x/_,E,M,h),T=p(v,x/_,Math.min(1,E+b),M,h);e.add(w,T,.008)}}if(v.kind==="course"){e.tag=`${v.name} leechline`;for(let d of[.1,.9])c(v,Math.round(d*(v.NU-1)),-.06,h,.016,null)}e.tag=`${v.name} clewline`;for(let d of[0,v.NU-1]){let _=l(v,d,v.NV-1,-.05,h),y=d===0?-1:1;e.add(_,new A(-.25,-v.yard.r,y*m*.55).applyMatrix4(s),.018)}}for(let v of t.stay)if(v.mesh.visible){s.multiplyMatrices(n,v.mesh.matrixWorld),e.tag=`${v.name} bolt rope`;for(let m=0;m<v.NV-1;m++)e.add(l(v,v.NU-1,m,0,h),l(v,v.NU-1,m+1,0,h),.02);for(let m=0;m<v.NU-1;m++)e.add(l(v,m,0,0,h),l(v,m+1,0,0,h),.02)}let g=t.spanker;if(g.mesh.visible){s.multiplyMatrices(n,g.mast.group.matrixWorld),e.tag="spanker bolt rope";for(let m=0;m<g.NV-1;m++)e.add(l(g,g.NU-1,m,0,h),l(g,g.NU-1,m+1,0,h),.02);e.tag="spanker brail";let v=new A(0,0,1);for(let m of[.3,.55,.8]){let d=Math.round(m*(g.NV-1));for(let _ of[.06,-.06]){let y=null;for(let x=g.NU-1;x>=0;x--){let S=l(g,x,d,_,v);y&&e.add(y,S,.016),y=S}}}}e.end()}};function _M(i,t,e){let s=Et(i,t),r=(Et(i+.05,t)-Et(i-.05,t))/(2*.05),o=(Et(i,t+.05)-Et(i,t-.05))/(2*.05),a=new A(-r,-o,e).normalize(),l=new A().crossVectors(new A(0,1,0),a).normalize(),c=new A().crossVectors(a,l).normalize();return{p:new A(i,t,e*s),n:a,a:l,up:c}}function vM(i,t){let e=t*2.1,n=[[0,-.32*i/3],[e*.35,-.3*i/3],[e*.4,-.22*i/3],[e*.2,-.16*i/3],[e*.95,-.1*i/3],[e,0],[e*1.06,.02*i],[e*.98,.04*i],[e*.92,.38*i],[e*.98,.4*i],[e*.86,.42*i],[e*.72,.9*i],[e*.82,.95*i],[e*.78,i],[t,i],[t,i*.7]].map(([o,a])=>new $(o,a)),s=new bn(n,14);s.rotateX(Math.PI/2);let r=new Jt(e*.3,e*.3,e*2.8,8);return r.rotateZ(Math.PI/2),r.translate(0,0,.42*i),gt([s,r])}function yM(i,t){let e=t*1.65,n=[[0,-.1],[e*.5,-.09],[e*.75,-.04],[e*.95,.05],[e,.25*i],[e*.92,.6*i],[e*.86,.82*i],[e*1.05,.9*i],[e*1.08,i],[t,i],[t,i*.55]].map(([o,a])=>new $(o,a)),s=new bn(n,16);s.rotateX(Math.PI/2);let r=new Gt(e*.5,e*.9,e*.9);return r.translate(0,-e*1.05,.45*i),gt([s,r])}function MM(i,t){let e=[],n=new Gt(t*3.2,t*1,i*1.5);n.translate(0,t*2.4,i*.75),e.push(n);let s=new Gt(t*3.6,t*1.6,i*1.3);s.translate(0,t*.95,i*.7),e.push(s);for(let r of[1,-1]){let o=new Jt(t*.9,t*.9,t*.6,10);o.rotateZ(Math.PI/2),o.translate(r*t*2,t*.9,i*.15),e.push(o)}return gt(e)}function SM(i,t){let e=t*6.2,n=i*.5,s=[];for(let o of[1,-1]){let a=new Je;a.moveTo(0,0),a.lineTo(n,0),a.lineTo(n,t*5.2),a.lineTo(n*.62,t*5.2),a.lineTo(n*.55,t*3.8),a.lineTo(n*.3,t*3.4),a.lineTo(n*.22,t*2.4),a.lineTo(0,t*2.2),a.closePath();let l=new An(a,{depth:t*.9,bevelEnabled:!1});l.rotateY(-Math.PI/2),l.translate(o*e/2+t*.45,0,0),s.push(l)}let r=new Gt(e,t*.8,n*.95);r.translate(0,t*1.4,n/2),s.push(r);for(let o of[n*.12,n*.85]){let a=new Gt(e*1.25,t*1.1,t*1.4);a.translate(0,t*1.4,o),s.push(a);for(let l of[1,-1]){let c=new Jt(t*1.5,t*1.5,t*.7,12);c.rotateZ(Math.PI/2),c.translate(l*e*.62,t*1.5,o),s.push(c)}}return gt(s)}var ch=class{constructor(t){let e=ge();this.group=new Yt,this.group.name="guns",t.add(this.group),this.ports=[];for(let r of Oi())for(let o of[1,-1]){let a=_M(r.x,r.y,o),l=new A(a.n.x,0,a.n.z).normalize();this.ports.push({...r,side:o,basis:a,out:l,recoil:0,fireAt:-1})}this.byTier=new Map;for(let r of this.ports){let o=r.tier.name;this.byTier.has(o)||this.byTier.set(o,[]),this.byTier.get(o).push(r)}this.barrels=[],this.carriages=[];for(let[r,o]of this.byTier){let a=o[0].tier,l=new hn(a.carronade?yM(a.len,a.bore):vM(a.len,a.bore),e.iron,o.length);l.castShadow=!0,l.frustumCulled=!1;let c=new hn(a.carronade?MM(a.len,a.bore):SM(a.len,a.bore),e.carriage,o.length);c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,this.group.add(l,c),this.barrels.push({mesh:l,list:o}),this.carriages.push({mesh:c,list:o})}this.lidPorts=this.ports.filter(r=>r.tier.lid);let n=new Gt(1,1,1);n.translate(0,-.5,.5),this.lids=new hn(n,[e.black,e.black,e.black,e.black,e.black,e.inside],this.lidPorts.length),this.lids.castShadow=!0,this.lids.frustumCulled=!1,this.group.add(this.lids);let s=[];for(let r of[-.28,.28])s.push(new Gt(.07,.92,.3).translate(r,-.48,1.12)),s.push(new Jt(.045,.045,.16,6).rotateZ(Math.PI/2).translate(r,0,1.1));s.push(new Gt(.14,.08,.5).translate(0,-.86,1.2)),this.hinges=new hn(gt(s),e.iron,this.lidPorts.length),this.hinges.frustumCulled=!1,this.group.add(this.hinges),this.lidRopes=new rs(this.group,e.rope,this.lidPorts.length*2),this.lidRopes.mesh.castShadow=!1,this.breeching=new rs(this.group,e.rope,this.ports.length*6),this.breeching.mesh.castShadow=!1,this._m=new Mt,this._b=new Mt,this._r=new Mt,this._s=new Mt,this.apply(0,0)}apply(t,e){let n=this._m,s=this._b,r=this._r,o=this._s;this.lidPorts.forEach((f,u)=>{let{a:g,up:v,n:m,p:d}=f.basis,_=f.tier,y=d.clone().addScaledVector(v,_.h/2+.04).addScaledVector(m,.02);s.makeBasis(g,v,m).setPosition(y),r.makeRotationX(-t*1.45),o.makeScale(_.w+.12,_.h+.1,.11),n.copy(s).multiply(r).multiply(o),this.lids.setMatrixAt(u,n),this.hinges.setMatrixAt(u,n)}),this.lids.instanceMatrix.needsUpdate=!0,this.hinges.instanceMatrix.needsUpdate=!0;let a=this.lidRopes;if(a.begin(),t>.05){let f=new A;this.lidPorts.forEach((u,g)=>{this.lids.getMatrixAt(g,n);let{a:v,up:m,n:d,p:_}=u.basis;for(let y of[-.32,.32]){f.set(y,-.92,1).applyMatrix4(n);let x=_.clone().addScaledVector(m,u.tier.h/2+.42).addScaledVector(v,y*u.tier.w).addScaledVector(d,.03);a.add(f,x,.018)}})}a.end();let l=new qe,c=new A,h=new A(1,1,1),p=new A(0,0,1);for(let{mesh:f,list:u}of this.barrels)u.forEach((g,v)=>{let m=g.tier;l.setFromUnitVectors(p,g.out);let d=pt(m.deck,g.x),_=g.basis.p.clone(),y=-.9+e*1.6-g.recoil*1.3;c.copy(_).addScaledVector(g.out,y-m.len),c.y=g.y-.02,f.setMatrixAt(v,n.compose(c,l,h))}),f.instanceMatrix.needsUpdate=!0;for(let{mesh:f,list:u}of this.carriages)u.forEach((g,v)=>{let m=g.tier;l.setFromUnitVectors(p,g.out);let d=g.basis.p.clone(),_=-.9+e*1.6-g.recoil*1.3;c.copy(d).addScaledVector(g.out,_-m.len*(m.carronade?1.2:.88)),c.y=pt(m.deck,g.x)+.02,f.setMatrixAt(v,n.compose(c,l,h))}),f.instanceMatrix.needsUpdate=!0;this.updateBreeching(e)}updateBreeching(t){let e=this.breeching;e.begin();for(let n of this.ports){let s=n.tier;if(s.carronade)continue;let r=-.9+t*1.6-n.recoil*1.3,o=n.basis.p.clone().addScaledVector(n.out,r-s.len-.1).setY(n.y-.02);for(let a of[1,-1]){let l=n.basis.p.clone().addScaledVector(n.basis.a,a*(s.w/2+.28)).addScaledVector(n.basis.n,-.04);l.y=n.y-.25,e.addSag(l,o,.028,.06,3)}}e.end()}muzzle(t,e){let n=-.9+e*1.6;return t.basis.p.clone().addScaledVector(t.out,n+.1).setY(t.y)}};function EM(i,t,e){return Wn(24,10,(o,a)=>{let c=o/23*2-1,h=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(c),c>0?1.7:3)),.55),p=e*(.75+.25*(1-c*c)),f=a/9*Math.PI-Math.PI/2,u=.25*c*c*e;return[c*i/2,-p*Math.cos(f)*(1-.1*Math.abs(c))+u,h*Math.sin(f)]},null,!0)}function hh(i,t,e,n="#2a2622"){let s=ge(),r=new Yt,o=new ae({color:n,roughness:.7,side:Ne}),a=new X(EM(i,t,e),o);a.castShadow=!0,r.add(a);let l=[];for(let f=1;f<=4;f++){let u=-i/2+f/5*i,g=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(u/(i/2)),u>0?1.7:3)),.55),v=new Gt(.28,.06,g*1.8);v.translate(u,-e*.35,0),l.push(v)}let c=new X(gt(l),s.darkWood);r.add(c);let h=[];for(let f=0;f<=40;f++){let u=f/40*Math.PI*2,g=Math.cos(u),v=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(g),g>0?1.7:3)),.55);h.push(new A(g*i/2,.25*g*g*e+.02,Math.sign(Math.sin(u))*v))}let p=new X(new vn(new _n(h,!0),80,.06,5,!0),new ae({color:"#d8cfb6",roughness:.6}));return r.add(p),r}function Sd(){let i=ge(),t=[],e=(l,c,h=0)=>new A(l,c,h);t.push(we(e(0,0),e(0,5.3),.13,.1,8));let n=[];for(let l of[1,-1]){let c=new _s(e(0,.1),e(l*1.1,0),e(l*1.85,1.35));n.push(new vn(c,10,.11,6));let h=new Gt(.85,1,.08);h.rotateZ(-l*.55),h.translate(l*1.7,1.15,0),n.push(h)}t.push(...n);let s=new be(.32,.05,6,16);s.translate(0,5.65,0),t.push(s);let r=new X(gt(t),i.iron),o=new X(new Gt(.32,.32,5),i.darkWood);o.position.y=5;let a=new Yt;return a.add(r,o),a.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),a}function bM(i){let t=new Yt,e=()=>{let o=new Yt,a=new X(new be(.82,.05,6,28),i.darkWood);o.add(a);let l=new X(new Jt(.16,.16,.22,10),i.brass);l.rotation.x=Math.PI/2,o.add(l);for(let c=0;c<10;c++){let h=c/10*Math.PI*2,p=new X(new Jt(.03,.035,1.18,6),i.darkWood);p.position.set(Math.cos(h)*.59,Math.sin(h)*.59,0),p.rotation.z=h-Math.PI/2,o.add(p)}return o},n=e(),s=e();n.rotation.y=s.rotation.y=Math.PI/2,n.position.set(.55,1.15,0),s.position.set(-.55,1.15,0),t.add(n,s);let r=new X(new Jt(.28,.28,1,12),i.darkWood);r.rotation.z=Math.PI/2,r.position.y=1.15,t.add(r);for(let o of[.85,-.85]){let a=new X(new Gt(.18,1.2,.4),i.darkWood);a.position.set(o,.6,0),t.add(a)}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function wM(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#0e0905",t.fillRect(0,0,128,128),t.fillStyle="#8c7354";for(let n=0;n<8;n++)t.fillRect(n*16,0,9,128),t.fillRect(0,n*16,128,9);let e=new un(i);return e.colorSpace=Oe,e.wrapS=e.wrapT=nn,e}var uh=class{constructor(t,e){let n=ge();this.group=new Yt,this.group.name="fittings",t.add(this.group);let s=this.group,r=(x=0,S=0,E=0)=>new A(x,S,E),o=x=>pt("qd",x)+.35,a=hh(10.2,3,1.15,"#3a2c20");a.position.set(8.8,o(8.8)+1.1,0);let l=hh(9.4,2.4,.95,"#1d1b19");l.position.set(8.4,o(8.4)+.95,2.95);let c=hh(8.6,2.3,.9,"#1d1b19");c.position.set(8.8,o(8.8)+.9,-2.9),s.add(a,l,c);for(let x of[1,-1]){let E=Ie(-26.4)-.4,b=Et(-26.4,E)+1.7,M=hh(7.4,2,.8,"#1d1b19");M.position.set(-26.4,E,x*b),s.add(M);for(let w of[-2.6,2.6]){let T=r(-26.4+w,Ie(-26.4+w)-.2,x*(Et(-26.4+w,9)-.2)),P=r(-26.4+w,Ie(-26.4+w)+1.2,x*(b+.1)),I=new X(we(T,P,.12,.09,8),n.black);I.castShadow=!0,s.add(I),this.davitRope=this.davitRope||[],this.davitRope.push([P,r(-26.4+w*.85,E+.2,x*b)])}}let h=Ke-1,p=bM(n);p.position.set(h,pt("qd",h),0),s.add(p);let f=new Yt,u=new X(new Gt(.7,1,1.2),n.darkWood);u.position.y=.5;let g=new X(new me(.28,12,8,0,Math.PI*2,0,Math.PI/2),n.brass);g.position.y=1,f.add(u,g),f.position.set(h+2,pt("qd",h+2),0),s.add(f);let v=(x,S,E=.75)=>{let b=new Yt,M=new X(new Jt(E*.75,E*.9,1,16),n.darkWood);M.position.y=.5;let w=new X(new Jt(E*1.2,E*1.2,.35,16),n.darkWood);w.position.y=1.15,b.add(M,w);for(let T=0;T<12;T++){let P=T/12*Math.PI*2,I=new X(new Gt(.12,.9,.18),n.darkWood);I.position.set(Math.cos(P)*E*.85,.5,Math.sin(P)*E*.85),I.rotation.y=-P,b.add(I)}b.position.set(x,pt(S,x),0),b.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),s.add(b)};for(let x of["middle","lower"])v(-6.4,x,x==="middle"?.75:.62),v(3.7,x,x==="middle"?.55:.48);{let x=new Yt,S=2.6,E=2,b=.55,M=.45,w=new X(new Gt(S,b,E),n.darkWood);w.position.y=b/2,x.add(w);let T=Math.atan2(M,E/2),P=Math.hypot(M,E/2),I=new ae({color:"#1c2630",roughness:.08,metalness:.2}),N=[];for(let V of[1,-1]){let B=new X(new Gt(S-.1,.03,P),I);B.position.set(0,b+M/2,V*E/4),B.rotation.x=V*T,x.add(B);for(let Q=0;Q<=6;Q++){let W=new Gt(.05,.05,P).rotateX(V*T);W.translate(-S/2+.05+Q*(S-.1)/6,b+M/2+.02,V*E/4),N.push(W)}}N.push(new Gt(S,.08,.08).translate(0,b+M,0));let D=new Je;D.moveTo(-E/2,0),D.lineTo(E/2,0),D.lineTo(0,M),D.closePath();for(let V of[-S/2,S/2-.06])N.push(new An(D,{depth:.06,bevelEnabled:!1}).rotateY(Math.PI/2).translate(V+.06,b,0));let F=new X(gt(N),n.darkWood);x.add(F),x.traverse(V=>{V.isMesh&&(V.castShadow=!0)}),x.position.set(-8.8,pt("qd",-8.8),0),s.add(x)}let m=wM(),d=new ae({map:m,roughness:.85});for(let{x,w:S,d:E}of Un.filter(b=>b.x>gn+1&&b.x<je-1&&!b.ladder)){let b=new X(new Gt(S+.3,.3,E+.3),n.darkWood);b.position.set(x,pt("upper",x)+.15,0);let M=new X(new _i(S,E),d);M.rotation.x=-Math.PI/2,M.position.set(x,pt("upper",x)+.31,0),m.repeat.set(1,1),s.add(b,M)}{let x=new Yt,S=[];for(let[M,w]of[[.4,.4],[.4,-.4],[-.4,.4],[-.4,-.4]]){let T=new Jt(.06,.07,1.6,6);T.translate(M,.8,w),S.push(T)}let E=new xs(.75,.6,4);E.rotateY(Math.PI/4),E.translate(0,1.9,0),S.push(E),x.add(new X(gt(S),n.ochre));let b=new X(new Jt(.12,.28,.4,14,1,!0),n.brass);b.material=n.brass,b.position.y=1.25,x.add(b),x.position.set(je+.8,pt("qd",je+.8),0),s.add(x)}{let x=new X(new Gt(.6,1.6,.6),n.copper);x.position.set(20.3,pt("qd",20.3)+.8,1.6),x.castShadow=!0,s.add(x);let S=new X(new Jt(.28,.28,.5,10),n.copper);S.rotation.z=Math.PI/2,S.position.set(20.3,pt("qd",20.3)+1.75,1.6),s.add(S)}this.lanterns=[];{let x=Me(Ie(-29.4))+.5,S=Ie(-29.4)+.1;for(let[E,b]of[[0,1.25],[3.2,.9],[-3.2,.9]]){let M=new Yt,w=new X(new Jt(.42*b,.32*b,1.1*b,6),n.lantern);w.position.y=.55*b;let T=new X(new xs(.5*b,.6*b,6),n.gold);T.position.y=1.4*b;let P=new X(new me(.12*b,8,6),n.gold);P.position.y=1.8*b;let I=new X(new Jt(.2*b,.35*b,.35*b,6),n.gold);I.position.y=-.1,M.add(w,T,P,I);let N=new X(we(r(.6,-.6),r(0,0),.06,.06,6),n.gold);M.add(N),M.position.set(x-.3,S+.4,E),s.add(M),this.lanterns.push(w)}}{let x=Me(Ie(-29.4))+.6,S=r(x,Ie(-29.4)-.5),E=r(x-2.2,Ie(-29.4)+6.5);s.add(new X(we(S,E,.09,.05,8),n.spar)),this.ensignStaff=E;let M=e.bowsprit.cap.clone().add(r(0,.4,0)),w=M.clone().add(r(.6,4.2,0));s.add(new X(we(M,w,.07,.04,8),n.spar)),this.jackStaff=w}this.anchors=[];for(let x of[1,-1]){let E=pt("qd",25.6)+.55,b=Et(25.6,E)-.4,M=r(25.6+1.35,E+.2,x*(b+1.85)),w=Sd(),T=r(Math.cos(1.05),Math.sin(1.05),x*.05).normalize(),P=M.clone().add(r(0,-.5,0)),I=P.clone().addScaledVector(T,-5.65);I.z=x*(Et(I.x,I.y)+1.25);let N=P.clone().sub(I).normalize(),D=r(0,0,x).sub(N.clone().multiplyScalar(N.z*x)).normalize(),F=r().crossVectors(D,N);w.quaternion.setFromRotationMatrix(new Mt().makeBasis(D,N,F)),w.position.copy(I),s.add(w),this.anchors.push({obj:w,side:x,home:w.position.clone()})}let _=(x,S)=>{let E=Sd(),b=pt("upper",x)+3.4,M=Et(x,b-4)+.35;E.position.set(x,b-5.65,S*M),E.rotation.set(S*.06,Math.PI/2,0),s.add(E)};_(14.075,1),_(14.075,-1),_(11.025,1);let y=(x,S,E)=>{let b=Sd();b.scale.setScalar(x),b.rotation.set(Math.PI/2,0,-Math.PI/2),b.position.set(S-2.6*x,pt("qd",S)+.5,E),s.add(b)};y(.6,12.6,4.7),y(.42,12.4,-4.7),this.cable=new X(new ue,n.rope),this.cable.castShadow=!0,s.add(this.cable),this.hawse=r(26.9,pt("middle",26.9)+.9,Et(26.9,pt("middle",26.9)+.9)+.1)}setAnchor(t){let e=this.anchors[0];if(e.obj.visible=t<.95,e.obj.position.copy(e.home).add(new A(0,-t*16,0)),t>.02){let n=this.hawse,s=new A(n.x+4+t*18,fe(n.y-1,-9,t),n.z+t*3),r=n.clone().lerp(s,.5).add(new A(0,-t*2.5,0)),o=new _s(n,r,s);this.cable.geometry.dispose(),this.cable.geometry=new vn(o,16,.14,6),this.cable.visible=!0}else this.cable.visible=!1}};var dh={uTime:{value:0},uWind:{value:1}},os=class{constructor(t,e,n,s,r=0){let o=new _i(e,n,24,6);o.translate(e/2,-n/2,0);let a=new ae({map:dm(t),side:Ne,roughness:.85});a.onBeforeCompile=l=>{l.uniforms.uTime=dh.uTime,l.uniforms.uWind=dh.uWind,l.uniforms.uW={value:e},l.uniforms.uTaper={value:r},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind, uW, uTaper;`).replace("#include <begin_vertex>",`vec3 transformed = position;
float f = position.x / uW;
transformed.y = (transformed.y + ${(n/2).toFixed(3)}) * (1.0 - uTaper * f) - ${(n/2).toFixed(3)};
float droop = (1.0 - uWind) * 0.75;
float wv = sin(position.x * 0.9 - uTime * (3.0 + 4.0 * uWind) + position.y * 0.4) * f * (0.18 + 0.35 * uWind) * uW * 0.12;
transformed.z += wv;
transformed.x *= mix(1.0, 0.55, droop);
transformed.y -= f * droop * uW * 0.6;
transformed.x -= abs(wv) * 0.25;`)},this.mesh=new X(o,a),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.mesh.userData.noAO=!0,s.add(this.mesh)}place(t,e){this.mesh.position.copy(t),this.mesh.rotation.set(0,Math.atan2(-e.z,e.x),0)}static update(t,e){dh.uTime.value=t,dh.uWind.value=e}};var TM=`
attribute vec4 iData; // xyz position, w size
attribute vec4 iColor; // rgb, alpha
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vColor = iColor;
  vec4 mvPosition = viewMatrix * vec4(iData.xyz, 1.0);
  mvPosition.xy += position.xy * iData.w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,RM=`
uniform sampler2D map;
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor.rgb, t.a * vColor.a);
  if (gl_FragColor.a < 0.003) discard;
  #include <fog_fragment>
}`,fh=class{constructor(t,e,n){this.max=e;let s=new Xo,r=new _i(1,1);s.index=r.index,s.attributes.position=r.attributes.position,s.attributes.uv=r.attributes.uv,this.data=new Float32Array(e*4),this.color=new Float32Array(e*4),s.setAttribute("iData",new Qi(this.data,4).setUsage(Dc)),s.setAttribute("iColor",new Qi(this.color,4).setUsage(Dc)),s.instanceCount=0,this.geo=s;let o=new Ee({uniforms:pn.merge([St.fog,{map:{value:ud()}}]),vertexShader:TM,fragmentShader:RM,transparent:!0,depthWrite:!1,fog:!0,blending:n?Xs:ws});o.uniforms.map.value=ud(),this.mesh=new X(s,o),this.mesh.frustumCulled=!1,this.mesh.userData.noAO=!0,this.mesh.renderOrder=n?11:10,t.add(this.mesh),this.list=[]}spawn(t){this.list.length<this.max&&this.list.push(t)}update(t,e){let n=this.list;for(let s=n.length-1;s>=0;s--){let r=n[s];if(r.age+=t,r.age>=r.life){n.splice(s,1);continue}r.pos.addScaledVector(r.vel,t),r.vel.multiplyScalar(Math.exp(-r.drag*t)),r.vel.addScaledVector(r.acc,t)}e&&n.sort((s,r)=>r.pos.distanceToSquared(e)-s.pos.distanceToSquared(e)),n.forEach((s,r)=>{let o=s.age/s.life;this.data[r*4]=s.pos.x,this.data[r*4+1]=s.pos.y,this.data[r*4+2]=s.pos.z,this.data[r*4+3]=s.size0+(s.size1-s.size0)*Math.sqrt(o);let a=s.alpha*Math.min(1,s.age/(s.fadeIn||1e-4))*(1-o)**s.fadePow;this.color[r*4]=s.color[0],this.color[r*4+1]=s.color[1],this.color[r*4+2]=s.color[2],this.color[r*4+3]=a}),this.geo.instanceCount=n.length,this.geo.attributes.iData.needsUpdate=!0,this.geo.attributes.iColor.needsUpdate=!0}},ph=class{constructor(t){this.scene=t,this.smoke=new fh(t,1800,!1),this.flash=new fh(t,200,!0),this.rand=Jn(99),this.lights=[];for(let e=0;e<2;e++){let n=new Ws("#ffb060",0,60,1.6);t.add(n),this.lights.push({l:n,t:1})}this.li=0}gunshot(t,e,n){let s=this.rand;for(let o=0;o<3;o++)this.flash.spawn({pos:t.clone().addScaledVector(e,.6+o*.9),vel:e.clone().multiplyScalar(14),acc:new A,drag:6,age:0,life:.14+s()*.06,size0:2.6-o*.5,size1:3.6-o*.6,color:[1,.62,.25],alpha:1,fadePow:1});for(let o=0;o<14;o++){let a=e.clone().multiplyScalar(10+s()*22).add(new A((s()-.5)*4,(s()-.3)*3,(s()-.5)*4)),l=(.82+s()*.12)*(this.light??1);this.smoke.spawn({pos:t.clone().addScaledVector(e,.5),vel:a,acc:new A(n.x,.35,n.z),drag:1.4+s()*.6,age:0,life:9+s()*7,fadeIn:.15,size0:1.2+s(),size1:9+s()*7,color:[l,l,l*.98],alpha:.55,fadePow:1.6})}let r=this.lights[this.li++%this.lights.length];r.l.position.copy(t).addScaledVector(e,2),r.t=0}spray(t,e,n,s){let r=this.rand,o=Math.floor(s+r());for(let a=0;a<o;a++){let l=e.clone().multiplyScalar(1.5+r()*3).add(new A(0,2.5+r()*3.5,0)).add(n.clone().multiplyScalar(.6)),c=.9*(this.light??1);this.smoke.spawn({pos:t.clone().add(new A((r()-.5)*1.5,r()*.3,(r()-.5)*.6)),vel:l,acc:new A(0,-9.8,0),drag:.8,age:0,life:.9+r()*.5,fadeIn:.05,size0:.9+r()*.6,size1:3.5+r()*2.5,color:[c,c,c],alpha:.85,fadePow:1.1})}}update(t,e){this.smoke.update(t,e),this.flash.update(t,null);for(let n of this.lights)n.t+=t,n.l.intensity=n.t<.18?900*(1-n.t/.18):0}},mh=class{constructor(t,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=Jn(41);s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,256,256);for(let d=0;d<1400;d++){let _=r()*256,y=r()*256,x=1+r()*7;s.fillStyle=`rgba(255,255,255,${.1+r()*.35})`,s.beginPath(),s.ellipse(_,y,x*1.6,x,0,0,Math.PI*2),s.fill();for(let[S,E]of[[256,0],[-256,0],[0,256],[0,-256]])s.beginPath(),s.ellipse(_+S,y+E,x*1.6,x,0,0,Math.PI*2),s.fill()}let o=new un(n);o.wrapS=o.wrapT=nn,this.tex=o,this.uniforms={uFoam:{value:o},uScroll:{value:0},uStrength:{value:0},uLight:{value:1}};let a=[],l=[],c=[],h=[],p=(d,_,y,x=12)=>{let S=a.length/3;for(let E=0;E<d;E++){let b=y(E/(d-1));for(let M=0;M<_;M++){let w=M/(_-1)*2-1,T=b.x+b.px*w*b.half,P=b.z+b.pz*w*b.half;a.push(T,0,P),l.push(T/x,P/x),c.push(Math.min(1,b.a(w)))}}for(let E=0;E<d-1;E++)for(let b=0;b<_-1;b++){let M=S+E*_+b,w=M+_,T=M+1,P=w+1;h.push(M,w,T,w,P,T)}},f=Me(0)+.3,u=He(0);for(let d of[1,-1])p(110,6,_=>{let y=f+(u-f)*_,x=1.6+6.5*_**3,S=Et(y,.05);return{x:y+.6*_**2,z:d*(S-.3+x/2),px:0,pz:d,half:x/2,a:E=>(1-(E+1)/2)**1.3*(.6+1.3*_**2.2)}},9);p(60,9,d=>({x:f-d*260,z:0,px:0,pz:1,half:2.6+18*d**.8,a:_=>(1-d)**1.8*(1-_*_)*.95*Math.min(1,d*40+.3)}),14);let g=fn.degToRad(19.5);for(let d of[1,-1]){let _=u-3.5,y=d*(Et(_,.05)+1.5),x=-Math.cos(g),S=d*Math.sin(g);p(50,5,E=>{let b=E*240;return{x:_+x*b,z:y+S*b,px:S*d,pz:-x*d,half:1.4+b*.035,a:M=>.6*(1-E)**1.5*(1-M*M)*Math.min(1,E*30+.2)}},12)}let v=new ue;v.setAttribute("position",new se(a,3)),v.setAttribute("uv",new se(l,2)),v.setAttribute("alpha",new se(c,1)),v.setIndex(h);let m=new Ee({uniforms:pn.merge([St.fog,this.uniforms]),vertexShader:`attribute float alpha; varying float vA; varying vec2 vUv; varying vec3 vWorldP;
        ${xm}
        #include <fog_pars_vertex>
        varying float vWash;
        void main(){ vA = alpha; vUv = uv; vec3 p = position; p.y = seaHeight(p.xz) + 0.07;
        // Foam thickens where a crest is pushed up against the hull.
        vWash = smoothstep(-0.2, 0.7, p.y);
        vWorldP = (modelMatrix * vec4(p, 1.0)).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
        }`,fragmentShader:`uniform sampler2D uFoam; uniform float uScroll, uStrength, uLight; varying float vA; varying vec2 vUv; varying vec3 vWorldP; varying float vWash;
        ${pd}
        #include <fog_pars_fragment>
        void main(){ if (insideHull(vWorldP)) discard; float f = texture2D(uFoam, vUv + vec2(uScroll, 0.0)).a;
        float f2 = texture2D(uFoam, vUv * 0.6 + vec2(uScroll * 0.7, 0.31)).a;
        gl_FragColor = vec4(vec3(0.95) * uLight, (f * 0.7 + f2 * 0.6) * vA * clamp(uStrength + vWash * 0.6, 0.0, 1.2));
        #include <fog_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!0,side:Ne,polygonOffset:!0,polygonOffsetFactor:-2});m.uniforms.uFoam.value=o;for(let d of["uTime","uOffset","uWaveScale","uWaveRot","uShipInv","uHB0","uHB1","uHB2"])m.uniforms[d]=e[d];this.uniforms=m.uniforms,this.mesh=new X(v,m),this.mesh.renderOrder=2,this.mesh.userData.noAO=!0,this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t,e){this.uniforms.uScroll.value=t/9%1,this.uniforms.uStrength.value=Math.min(1,e/5)*.9+.1}};var AM=["course","topsail","topgallant","royal","sprit","foreTopmastStaysail","jib","flyingJib","mainTopmastStaysail","mizzenStaysail","spanker","stunTop","stunTg","stunLower"],CM={stunTop:0,stunTg:0,stunLower:0},gh=i=>Object.fromEntries(AM.map(t=>[t,i])),Ls={sail:{set:{...gh(1),sprit:0,...CM},hoist:{topsail:1,topgallant:1,royal:1},ports:0,runOut:0,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:0},trafalgar:{set:{...gh(1),sprit:0},hoist:{topsail:1,topgallant:1,royal:1},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:1,cleared:1,wind:{dir:-160,str:.15}},action:{set:{...gh(0),topsail:1,foreTopmastStaysail:1,jib:1,spanker:1},hoist:{topsail:1,topgallant:1,royal:0},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:1},anchor:{set:gh(0),hoist:{topsail:0,topgallant:0,royal:0},ports:0,runOut:0,anchor:1,gaffEnsign:0,jack:1,unionStays:0,cleared:0}},PM={course:.3,topsail:.32,topgallant:.13,royal:.05,sprit:0,foreTopmastStaysail:.04,jib:.04,flyingJib:.03,mainTopmastStaysail:.02,mizzenStaysail:.02,spanker:.05,stunTop:.06,stunTg:.03,stunLower:.05},Ed=i=>Math.min(1,Math.max(0,i)),bd=i=>(i+540)%360-180;function IM(i,t,e){let n=fn.degToRad(bd(t*(1-i.anchor))),s=Math.abs(n),r=n<0?-1:1,o=n<=0?1:-1,a=0;for(let[g,v]of Object.entries(PM))a+=v*(i[`set.${g}`]??0);let l=Ed((s-fn.degToRad(48))/fn.degToRad(30)),c=1-i.anchor,h=6*e*Math.pow(a,.8)*l*(.75+.25*Math.sin(s))*c,p=2+12*e,f=new A(-Math.cos(n),0,-Math.sin(n)).multiplyScalar(p),u=f.clone().add(new A(-h,0,0));return{rel:n,lee:o,area:a,drive:l,speed:h,toward:f,apparent:u,brace:r*.5*Ed((Math.PI-s)/fn.degToRad(110))*c,heel:-r*e*.12*a*Math.abs(Math.sin(n))*l,boomSwing:-r*(.06+.5*Ed((s-.8)/2.35))*c,belly:(.3+.7*e)*Math.max(l,.06),luff:(1-l)*(.2+e),waveScale:(.35+.9*e)*(1-.35*i.anchor)}}function Bm(i){let t={};for(let[e,n]of Object.entries(i))if(e!=="wind")if(typeof n=="object")for(let[s,r]of Object.entries(n))t[`${e}.${s}`]=r;else t[e]=n;return t}var LM=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function DM(i,t,e){let n=e>t;return i.startsWith("set.")?n?[.35,.9]:[0,.55]:i.startsWith("hoist.")?n?[.05,.45]:[.45,.9]:i==="ports"?n?[.1,.45]:[.5,.85]:i==="runOut"?n?[.45,.95]:[.05,.45]:i==="anchor"?n?[.55,.95]:[0,.4]:i==="gaffEnsign"||i==="jack"||i==="unionStays"?[.5,.52]:i.startsWith("set.stun")?n?[.75,1]:[0,.3]:i==="cleared"?n?[.05,.25]:[.7,.9]:[0,1]}var xh=class{constructor(t,e){this.scene=t,this.sea=e,this.root=new Yt,this.body=new Yt,this.root.add(this.body);let n=Rm();this.body.add(n),this.body.add(Pm()),n.traverse(r=>{r.isMesh&&["planking","innerPlanking","stern","bulwark"].includes(r.name)&&(r.userData.shell=!0)}),n.getObjectByName("quarterGalleries")?.traverse(r=>{r.isMesh&&(r.userData.shell=!0)}),this.rig=new rh,this.body.add(this.rig.group),this.root.updateMatrixWorld(!0),this.sails=Fm(this.rig,this.body),this.rigging=new lh(this.rig),this.guns=new ch(this.body),this.fittings=new uh(this.body,this.rig),this.furnishing=Dm(this.fittings),this.body.add(this.furnishing),this.furnishing.add(Nm());let s=ge();this.nightMaterials=[[this.furnishing.userData.glow,.9,3],[s.lantern,0,3.5]],n.traverse(r=>{if(r.userData.glow)for(let o of r.userData.glow)this.nightMaterials.push([o,0,.75])}),this.lanterns=this.furnishing.userData.lanterns.map(r=>({p:r})),this.root.updateMatrixWorld(!0);for(let r of this.fittings.lanterns){let o=r.getWorldPosition(new A);this.lanterns.push({p:this.body.worldToLocal(o)})}this.clearables=[{setCleared:r=>this.furnishing.userData.setCleared(r)}],this.isCleared=null,this.layoutVersion=0;for(let r of this.sails.square){let o=this.rigging.colliders[r.mastName];if(!o)continue;r.space=this.rig.group,r.colliders={course:[...o.lower,...o.futtock,...o.backstay],topsail:[...o.topmast,...o.backstay],topgallant:[...o.tg,...o.backstay],royal:[...o.backstay]}[r.kind]||[];let a={fore:{course:["fore stay","fore preventer stay"],topsail:["fore topmast stay","jib stay"],topgallant:["fore topgallant stay"],royal:["fore royal stay"]},main:{course:["main stay","main preventer stay"],topsail:["main topmast stay"],topgallant:["main topgallant stay"],royal:["main royal stay"]},mizzen:{topsail:["mizzen topmast stay"],topgallant:["mizzen topgallant stay"]}}[r.mastName]?.[r.kind]||[];r.stays=a.map(l=>this.rigging.stayLines[l]).filter(Boolean)}this.flags={ensign:new os("ensign",8.5,4.25,this.body),admiral:new os("admiral",5,2.5,this.body),jack:new os("union",4.2,2.1,this.body),unionFore:new os("union",3.6,1.8,this.body),unionMain:new os("union",3.6,1.8,this.body)},this.effects=new ph(t),this.wake=new mh(t,e.uniforms),this.distance=0,this.pose="sail",this.cur=Bm(Ls.sail),this.tween=null,this.dirty=!0,this.broadside=null,this.time=0,this.windTarget={dir:-135,str:.6},this.windNow={...this.windTarget}}setWind(t,e,n=!1){t!=null&&(this.windTarget.dir=t),e!=null&&(this.windTarget.str=e),n&&(this.windNow={...this.windTarget}),this.dirty=!0}poseNames(){return Object.keys(Ls)}setPose(t,e=!1){if(!Ls[t])return;this.pose=t;let n=Bm(Ls[t]);if(e){this.cur=n,this.tween=null,this.dirty=!0;return}this.tween={from:{...this.cur},to:n,k:0,dur:8}}fireBroadside(){if(!Ls[this.pose].ports||this.broadside)return;let t=this.guns.ports.filter(n=>n.side===1).sort((n,s)=>s.x-n.x),e=0;for(let n of t)n.fireAt=this.time+e+Math.random()*.08,e+=.075;this.broadside={list:t,end:this.time+e+4}}update(t,e){if(this.time=t,this.tween){let T=this.tween;T.k=Math.min(1,T.k+e/T.dur);for(let P of Object.keys(T.to)){let I=T.from[P],N=T.to[P],[D,F]=DM(P,I,N),V=Math.min(1,Math.max(0,(T.k-D)/(F-D)));this.cur[P]=I+(N-I)*LM(V)}T.k>=1&&(this.tween=null,this.layoutVersion++),this.dirty=!0}let n=this.cur,s=this.windNow,r=this.windTarget,o=1-Math.exp(-e*1.2),a=bd(r.dir-s.dir),l=r.str-s.str;(Math.abs(a)>.05||Math.abs(l)>.001)&&(s.dir=bd(s.dir+a*o),s.str+=l*o,this.dirty=!0);let c=IM(n,s.dir,s.str);this.W=c,this.sea.setCaps(s.str);let h=this.sea;h.setScale(c.waveScale),h.setDirection(Math.atan2(c.toward.z,c.toward.x));let p=22,f=6,u=h.heightAt(p,0),g=h.heightAt(-p,0),v=h.heightAt(0,-f),m=h.heightAt(0,f),d=h.heightAt(0,0);this.root.position.y=(u+g+v+m+d*2)/6*.85,this.root.rotation.z=Math.atan2(u-g,2*p)*.8,this.root.rotation.x=-Math.atan2(m-v,2*f)*.6,this.body.rotation.x=c.heel,this.body.rotation.z=tm,this.distance+=c.speed*e,this.dirty&&this.rig.applyYards({hoist:{topsail:n["hoist.topsail"],topgallant:n["hoist.topgallant"],royal:n["hoist.royal"]},brace:c.brace,boomSwing:c.boomSwing}),this.root.updateMatrixWorld(!0),this.sea.uniforms.uShipInv.value.copy(this.body.matrixWorld).invert();for(let T of this.sails.square)T.update(n[`set.${T.kind}`],c.belly,t,c.luff);for(let T of this.sails.stay)T.update(n[`set.${T.kind}`],c.belly,t,c.lee);this.sails.spanker.update(n["set.spanker"],c.belly,t,c.lee);for(let T of this.sails.stun)T.update(n[`set.${T.kind}`],c.belly,t);let _=this.dirty;if(this.broadside){let T=this.broadside,P=c.apparent.clone().multiplyScalar(.5);for(let I of T.list){if(I.fireAt>0&&t>=I.fireAt){I.fireAt=-1,I.firedAt=t;let N=this.guns.muzzle(I,n.runOut),D=this.body.localToWorld(N.clone()),F=I.out.clone().transformDirection(this.body.matrixWorld);this.effects.gunshot(D,F,P)}if(I.firedAt!=null){let N=t-I.firedAt;I.recoil=N<.12?N/.12:Math.max(0,1-(N-.6)/2.4),N>3.2&&(I.recoil=0,I.firedAt=null)}}_=!0,t>T.end&&(this.broadside=null)}_&&this.guns.apply(n.ports,n.runOut),this.rigging.updateRunning(this.sails,n,c),this.dirty&&this.fittings.setAnchor(n.anchor);let y=n.cleared>.5;if(y!==this.isCleared){this.isCleared=y;for(let T of this.clearables)T.setCleared(y);this.layoutVersion++}let x=this.rig,S=c.apparent.clone().setY(0).normalize();os.update(t,.2+.8*Math.min(1,c.apparent.length()/12));let E=(T,P)=>Xe(T.local[P].clone(),T.group,this.body),b=Xe(new A(x.gaff.L-.1,0,0),x.gaff.group,this.body),M=this.flags.ensign;n.gaffEnsign>.5?M.place(b,S):M.place(this.fittings.ensignStaff,S),this.flags.admiral.place(E(x.masts.fore,"poleHead").add(new A(0,.1,0)),S);let w=(T,P)=>{let[I,N]=this.rigging.stayLines[T];return I.clone().lerp(N,P).add(new A(0,-.3,0))};for(let[T,P,I]of[[this.flags.unionFore,"fore topgallant stay",.42],[this.flags.unionMain,"main topmast stay",.5]])T.mesh.visible=n.unionStays>.5,T.place(w(P,I),S);if(this.flags.jack.mesh.visible=n.jack>.5,this.flags.jack.place(this.fittings.jackStaff,S),e>0&&c.speed>.5){let T=this.sea.heightAt(27.5,0),P=Math.max(0,T-this.root.position.y+.2),I=c.speed/6*(.6+3*P)*e*60*.9;if(I>.05)for(let N of[1,-1]){let D=this.body.localToWorld(new A(27.2,.2,N*1.6)),F=new A(.5,0,N).normalize().transformDirection(this.body.matrixWorld);this.effects.spray(D,F,new A(0,0,0),I)}}this.effects.update(e,this.scene.userData.camera?.position),this.wake.update(this.distance,c.speed),this.dirty=!1}};var wd={sail:"Full sail",trafalgar:"Trafalgar, 1805",action:"Cleared for action",anchor:"At anchor",quarter:"Quarter",broadside:"Broadside",bow:"Bow",stern:"Stern",deck:"Deck",aloft:"Aloft",galleries:"Galleries",head:"Figurehead",inside:"Inside",all:"All",quarterdeck:"Quarterdeck",upper:"Upper deck",middle:"Middle deck",lower:"Lower deck",orlop:"Orlop",hold:"Hold"};function Td(i,t){let e=Math.abs(i),n=i<0?"port":"starboard",s=e<22.5?"dead ahead":e<67.5?`on the ${n} bow`:e<112.5?`on the ${n} beam`:e<157.5?`on the ${n} quarter`:"dead astern";return`${t<.12?"Light air":t<.3?"Light breeze":t<.5?"Moderate breeze":t<.7?"Fresh breeze":t<.88?"Strong breeze":"Near gale"}, ${s}`}var _h=class{constructor({onPose:t,onView:e,onFire:n,onWind:s,wind:r,poses:o,views:a,levels:l,onLevel:c,onCut:h,onXray:p,onLabels:f,onMode:u,onTime:g}){let v=document.getElementById("ui");v.innerHTML=`
      <h1>HMS Victory <span>1805</span></h1>
      <div class="group"><div class="label">Mode</div><div class="row" id="modes"></div>
        <div class="hint" id="sailorHint" style="display:none">WASD or arrows to walk, Shift to run, click to walk there.
        Walk into a ladder to climb. Q / E turn the view, scroll to zoom.</div></div>
      <div class="group"><div class="label">Pose</div><div class="row" id="poses"></div></div>
      <div class="group" id="fireGroup"><button id="fire" class="accent">Fire broadside</button></div>
      <div class="group"><div class="label">Wind</div>
        <div class="slider"><span>From</span><input id="windDir" type="range" min="-180" max="180" step="5"></div>
        <div class="slider"><span>Strength</span><input id="windStr" type="range" min="0" max="100" step="1"></div>
        <div class="windText" id="windText"></div>
        <div class="windHint" id="windHint"></div></div>
      <div class="group"><div class="label">Time</div><div class="row" id="times"></div></div>
      <div class="group"><div class="label">Inside: show decks down to</div><div class="row" id="levels"></div>
        <div class="slider"><span>Cut open</span><input id="cut" type="range" min="0" max="100" step="1" value="0"></div>
        <label class="check"><input id="xray" type="checkbox"> X-ray hull</label>
        <label class="check"><input id="labels" type="checkbox" checked> Room labels</label></div>
      <div class="group"><div class="label">View</div><div class="row" id="views"></div></div>
      <div class="hint">Drag to orbit \xB7 scroll to zoom \xB7 right-drag to pan</div>`,this.modeButtons={};let m=v.querySelector("#modes");for(let[T,P]of[["free","Free camera"],["sailor","Sailor (isometric)"]]){let I=document.createElement("button");I.textContent=P,I.onclick=()=>{u(T),this.setMode(T)},m.appendChild(I),this.modeButtons[T]=I}this.el=v,this.timeButtons={};let d=v.querySelector("#times");for(let[T,P]of[["day","Day"],["dusk","Dusk"],["night","Night"]]){let I=document.createElement("button");I.textContent=P,I.onclick=()=>g(T),d.appendChild(I),this.timeButtons[T]=I}this.poseButtons={};let _=v.querySelector("#poses");for(let T of o){let P=document.createElement("button");P.textContent=wd[T]||T,P.onclick=()=>{t(T),this.setPose(T)},_.appendChild(P),this.poseButtons[T]=P}let y=v.querySelector("#views");for(let T of a){let P=document.createElement("button");P.textContent=wd[T]||T,P.onclick=()=>e(T),y.appendChild(P)}this.levelButtons={};let x=v.querySelector("#levels");for(let T of l){let P=document.createElement("button");P.textContent=wd[T]||T,P.onclick=()=>{c(T),this.setLevel(T)},x.appendChild(P),this.levelButtons[T]=P}this.setLevel("all"),v.querySelector("#cut").oninput=T=>h(+T.target.value/100),v.querySelector("#xray").onchange=T=>p(T.target.checked),v.querySelector("#labels").onchange=T=>f(T.target.checked),this.fireGroup=v.querySelector("#fireGroup"),v.querySelector("#fire").onclick=n;let S=v.querySelector("#windDir"),E=v.querySelector("#windStr"),b=v.querySelector("#windText"),M=v.querySelector("#windHint");S.value=r.dir,E.value=Math.round(r.str*100);let w=()=>{let T=+S.value,P=+E.value/100;b.textContent=Td(T,P),M.textContent=Math.abs(T)<50?"Too close to the wind: her sails shiver and she loses way.":"",s(T,P)};S.oninput=E.oninput=w,b.textContent=Td(r.dir,r.str),this.windSet=(T,P)=>{S.value=T,E.value=Math.round(P*100),b.textContent=Td(T,P),M.textContent=""}}setTime(t){for(let[e,n]of Object.entries(this.timeButtons))n.classList.toggle("active",e===t)}setMode(t){for(let[e,n]of Object.entries(this.modeButtons))n.classList.toggle("active",e===t);this.el.querySelector("#sailorHint").style.display=t==="sailor"?"":"none",this.el.querySelector("#levels").style.opacity=t==="sailor"?.45:1,this.el.querySelector("#levels").style.pointerEvents=t==="sailor"?"none":"",this.el.querySelector("#views").style.opacity=t==="sailor"?.45:1,this.el.querySelector("#views").style.pointerEvents=t==="sailor"?"none":""}setLevel(t){for(let[e,n]of Object.entries(this.levelButtons))n.classList.toggle("active",e===t)}setPose(t){for(let[e,n]of Object.entries(this.poseButtons))n.classList.toggle("active",e===t);this.fireGroup.style.display=t==="action"||t==="trafalgar"?"":"none"}};var NM=1e-7,Rd=new A,Ad=new A,Cd=new A,Pd=new A,Id=new A,Ld=new A;function Hm(i,t,e,n,s){Ld.subVectors(t,i),Rd.subVectors(n,e),Ad.subVectors(s,e),Cd.crossVectors(Ld,Ad);let r=Rd.dot(Cd);if(Math.abs(r)<NM)return!1;let o=1/r;Pd.subVectors(i,e);let a=Pd.dot(Cd)*o;if(a<0||a>1)return!1;Id.crossVectors(Pd,Rd);let l=Ld.dot(Id)*o;if(l<0||a+l>1)return!1;let c=Ad.dot(Id)*o;return c>0&&c<1}function UM(i,t){let e=i.mesh;if(!e.visible)return null;let n=new Mt().multiplyMatrices(t,e.matrixWorld),s=e.geometry.attributes.position,r=i.NU,o=i.NV,a=(p,f)=>new A().fromBufferAttribute(s,f*r+p).applyMatrix4(n),l=[],c=new Hn,h=[];for(let p=1;p<o-2;p++)for(let f=1;f<r-2;f++){let u=a(f,p),g=a(f+1,p),v=a(f,p+1),m=a(f+1,p+1);l.push([u,g,m],[u,m,v]),c.expandByPoint(u).expandByPoint(g).expandByPoint(v).expandByPoint(m),h.push([u,g],[u,v])}return{name:i.name,tris:l,box:c,lines:h}}function zm(i){i.root.updateMatrixWorld(!0);let t=new Mt().copy(i.body.matrixWorld).invert(),n=[...i.sails.square,...i.sails.stay,i.sails.spanker,...i.sails.stun].map(h=>UM(h,t)).filter(Boolean),s=[];for(let h of[i.rigging.standing,i.rigging.running,i.rigging.sailLines])for(let p of h.segs)s.push(p);let r=(h,p,f)=>new A(h,p,f),o=(h,p)=>p.applyMatrix4(new Mt().multiplyMatrices(t,h.matrixWorld));for(let h of Object.values(i.rig.masts)){for(let v of Object.values(h.yards))s.push([o(v.group,r(0,0,-v.L/2)),o(v.group,r(0,0,v.L/2)),`${h.name} ${v.name} yard`]);let p=h.h;s.push([o(h.group,r(0,0,0)),o(h.group,r(0,p.lowerHead,0)),`${h.name} lower mast`]),s.push([o(h.group,r(h.dTop,p.topmastHeel,0)),o(h.group,r(h.dTop,p.topmastHead,0)),`${h.name} topmast`]),s.push([o(h.group,r(h.dTg,p.tgHeel,0)),o(h.group,r(h.dTg,p.poleHead,0)),`${h.name} topgallant mast`]);let f=p.topLen,u=p.topW/2,g=p.topY+.2;s.push([o(h.group,r(-f*.45,g,-u)),o(h.group,r(f*.55,g,-u)),`${h.name} top`]),s.push([o(h.group,r(-f*.45,g,u)),o(h.group,r(f*.55,g,u)),`${h.name} top`]),s.push([o(h.group,r(f*.55,g,-u)),o(h.group,r(f*.55,g,u)),`${h.name} top`])}let a=new Map,l=new Hn,c=(h,p)=>{let f=`${h}  x  ${p}`;a.set(f,(a.get(f)||0)+1)};for(let[h,p,f]of s){l.makeEmpty().expandByPoint(h).expandByPoint(p);for(let u of n)if(l.intersectsBox(u.box)){for(let[g,v,m]of u.tris)if(Hm(h,p,g,v,m)){c(f,u.name);break}}}for(let h of n)for(let p of n){if(h===p||!h.box.intersectsBox(p.box))continue;let f=0;for(let[u,g]of h.lines)if(l.makeEmpty().expandByPoint(u).expandByPoint(g),!!l.intersectsBox(p.box)){for(let[v,m,d]of p.tris)if(Hm(u,g,v,m,d)){f++;break}}f&&h.name<p.name&&c(`sail ${h.name}`,p.name)}return[...a.entries()].sort((h,p)=>p[1]-h[1]).map(([h,p])=>`${p}	${h}`)}var Dd={all:1/0,quarterdeck:qt.poop-.52,upper:qt.qd-.52,middle:qt.upper-.52,lower:qt.middle-.52,orlop:qt.lower-.52,hold:qt.orlop-.52},FM={poop:qt.poop+2.1},vh=class{constructor(t,e){this.ship=t,this.sun=e,this.uniforms={uShipInv:{value:new Mt},uCutY:{value:1e5},uCutZ:{value:1e5},uCutSide:{value:1}},this.rigCutZ={value:1e5},this.shellCutY={value:1e5},this.level="all",this.cutZ=1e5,this.xray=!1,this.applied=new WeakSet,this.applyAll()}applyAll(){let t=[this.ship.rig.group,...Object.values(this.ship.flags).map(s=>s.mesh)],e=s=>{for(let r=s;r;r=r.parent)if(t.includes(r))return!0;return!1},n=s=>this.ship.body.traverse(r=>{if(!(!r.material||e(r)!==s))for(let o of Array.isArray(r.material)?r.material:[r.material])this.inject(o,s,!!r.userData.shell)});n(!1),n(!0)}inject(t,e=!1,n=!1){if(this.applied.has(t))return;this.applied.add(t);let s=this.uniforms,r=t.onBeforeCompile,o=t.customProgramCacheKey?t.customProgramCacheKey():"";t.onBeforeCompile=(a,l)=>{r&&r.call(t,a,l),a.uniforms.uShipInv=s.uShipInv,a.uniforms.uCutY=n?this.shellCutY:s.uCutY,a.uniforms.uCutZ=e?this.rigCutZ:s.uCutZ,a.uniforms.uCutSide=s.uCutSide,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uShipInv;
varying vec3 vCutPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 cutP = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
cutP = instanceMatrix * cutP;
#endif
vCutPos = (uShipInv * modelMatrix * cutP).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCutY, uCutZ, uCutSide;
varying vec3 vCutPos;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
{ float cutSheer = 0.85 * pow((vCutPos.x - 2.0) / 28.0, 2.0);
  if (vCutPos.y > uCutY + cutSheer || vCutPos.z * uCutSide > uCutZ) discard; }`)},t.customProgramCacheKey=()=>`${o}|cut${e?"R":""}${n?"S":""}`,t.needsUpdate=!0}get active(){return this.level!=="all"||this.cutZ<50}setLevel(t){this.level=t;let e=Dd[t]??FM[t];this.uniforms.uCutY.value=Number.isFinite(e)?e:1e5,this.shellCutY.value=Math.max(this.uniforms.uCutY.value,.6),this.refresh()}setCut(t){this.cutZ=t<=.001?1e5:9-t*9.2,this.uniforms.uCutZ.value=this.cutZ,this.uniforms.uCutSide.value=1,this.refresh()}setCutPlane(t,e){this.cutZ=t,this.uniforms.uCutZ.value=t,this.uniforms.uCutSide.value=e,this.refresh()}setXray(t){this.xray=t,this.ship.body.traverse(e=>{if(!e.isMesh||!e.userData.shell)return;let n=e.material;e.userData.solid||(e.userData.solid={transparent:n.transparent,opacity:n.opacity,depthWrite:n.depthWrite});let s=e.userData.solid;n.transparent=t?!0:s.transparent,n.opacity=t?.14:s.opacity,n.depthWrite=t?!1:s.depthWrite,n.needsUpdate=!0})}refresh(){let t=!this.active;this.sun.castShadow!==t&&(this.sun.castShadow=t)}update(){this.uniforms.uShipInv.value.copy(this.ship.body.matrixWorld).invert()}};var yh=class extends cn{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new $(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Qr=new A,km=new Mt,Vm=new Mt,Gm=new A,Wm=new A,Mh=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),km.copy(v.matrixWorldInverse),Vm.multiplyMatrices(v.projectionMatrix,km),h(g,g,v),this.sortObjects&&u(g)},this.setSize=function(g,v){n=g,s=v,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function h(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Qr.setFromMatrixPosition(g.matrixWorld),Qr.applyMatrix4(Vm);let d=Qr.z>=-1&&Qr.z<=1&&g.layers.test(m.layers)===!0,_=g.element;if(_.style.display=d===!0?"":"none",d===!0){g.onBeforeRender(e,v,m);let x=100*g.center.x,S=100*g.center.y;_.style.transformOrigin=`${x}% ${S}%`;let E=-g.rotation2D,b=Qr.x*r+r,M=-Qr.y*o+o;_.style.transform=`translate(${-x}%, ${-S}%) translate(${b}px, ${M}px) rotate(${E}rad)`,_.parentNode!==l&&l.appendChild(_),g.onAfterRender(e,v,m)}let y={distanceToCameraSquared:p(m,g)};a.objects.set(g,y)}for(let d=0,_=g.children.length;d<_;d++)h(g.children[d],v,m)}function p(g,v){return Gm.setFromMatrixPosition(g.matrixWorld),Wm.setFromMatrixPosition(v.matrixWorld),Gm.distanceToSquared(Wm)}function f(g){let v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function u(g){let v=f(g).sort(function(d,_){if(d.renderOrder!==_.renderOrder)return _.renderOrder-d.renderOrder;let y=a.objects.get(d).distanceToCameraSquared,x=a.objects.get(_).distanceToCameraSquared;return y-x}),m=v.length;for(let d=0,_=v.length;d<_;d++)v[d].element.style.zIndex=m-d}}};var Xm={hold:"orlop",orlop:"lower",lower:"middle",middle:"upper",upper:"qd",qd:"poop"},qm={qd:"quarterdeck",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"},Ym={qd:"Quarterdeck and forecastle",upper:"Upper gun deck",middle:"Middle gun deck",lower:"Lower gun deck",orlop:"Orlop",hold:"Hold"},Kt={wp:'Wikipedia, "HMS Victory" (citing McGowan)',hv:"HMS Victory official site (archived deck pages)",nmrn:"National Museum of the Royal Navy",beatty:"Beatty, Authentic Narrative of the Death of Lord Nelson (1807)",mckay:"modellers' readings of McKay's plans"},wa=[{deck:"qd",name:"Captain Hardy's day cabin",x0:-28.6,x1:-23.2,z0:-7,z1:7,walls:[["fore",7]],note:"The aftermost part of the quarterdeck, under the poop, lit by the stern windows. Hardy's day cabin held two guns, cleared away like the rest of the ship for battle.",source:`${Kt.wp}; photo captions`},{deck:"qd",name:"Captain's dining cabin",x0:-23.2,x1:-17.6,z0:-7,z1:-1.6,walls:[["stbd",2]],note:"Where the captain dined, often with his officers. Its exact side is not certain.",source:`photo captions; ${Kt.mckay}`},{deck:"qd",name:"Captain's bed place",x0:-23.2,x1:-20.2,z0:1.6,z1:7,walls:["fore",["port",1.5]],note:"Hardy's sleeping cabin, part of his quarters under the poop.",source:"photo captions (medium confidence)"},{deck:"qd",name:"Master's cabin",x0:-17.6,x1:-13.6,z0:-7,z1:-1.7,walls:[["stbd",2],"fore"],note:"The master was responsible for navigation. His cabin was on the larboard (port) side, beside the wheel.",source:`R. Fraser / P. Milford deck notes; ${Kt.mckay}`},{deck:"qd",name:"Secretary's cabin",x0:-17.6,x1:-13.6,z0:1.7,z1:7,walls:[["port",2],"fore"],note:"Nelson's secretary, John Scott, was killed early in the battle. His cabin was to starboard of the wheel.",source:"R. Fraser / P. Milford deck notes (medium confidence)"},{deck:"qd",name:"Wheel",obj:!0,x0:-15,x1:-14,z0:-1,z1:1,lx:-14.4,ly:2.4,note:"The double wheel stands under the overhang of the poop, with the binnacle (compass) forward of it. At Trafalgar the wheel was shot away and she was steered from the gunroom below.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"qd",name:"Where Nelson fell",x0:-9,x1:-7,z0:1,z1:3,ly:.6,note:"Nelson was shot by a French marksman in the mizzen top of the Redoutable at about 1:15 pm while walking the quarterdeck with Hardy. A brass plaque marks the spot today; its exact position here is approximate.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"qd",name:"Forecastle",x0:18,x1:22,z0:-1,z1:1,ly:1.8,note:"Two 12-pounders and two 68-pounder carronades, the belfry and the galley chimney. The bell struck the half-hours of each watch.",source:Kt.wp},{deck:"upper",name:"Great cabin",x0:-28.9,x1:-23.6,z0:-7.4,z1:7.4,walls:[["fore",7.4]],note:"Nelson's day cabin and office at the stern windows, where he wrote his last prayer on the morning of the battle. With the dining cabin and sleeping quarters it took up about a quarter of the deck. His coffin later stood in the after part of this cabin.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"upper",name:"Dining cabin",x0:-23.6,x1:-18.6,z0:-7.4,z1:7.4,walls:[["fore",5.5]],note:"Where Nelson entertained his captains: the 'Band of Brothers' dined here before Trafalgar.",source:Kt.hv},{deck:"upper",name:"Nelson's sleeping cabin",x0:-18.6,x1:-15.2,z0:1.2,z1:7.4,walls:[["port",1.7],"fore"],note:"Nelson's cot hung between two 12-pounders. Which side it was on is not recorded in the sources found; it is shown to starboard.",source:"R. Fraser / P. Milford deck notes (side not found)"},{deck:"upper",name:"Steerage (ante-room)",x0:-18.6,x1:-14.6,z0:-7.4,z1:1.2,walls:[["fore",6]],note:"An ante-room for the admiral's clerks and secretary, leading to the dining and day cabins.",source:Kt.hv},{deck:"upper",name:"Sick berth",x0:21.6,x1:27.4,z0:.6,z1:6,walls:[["aft",3],"port"],note:"Forward, in the bow under the forecastle, where the air was best. Cots hung over the guns; the surgeon worked just forward of the foremast. In battle the wounded were taken below to the cockpit instead. The side is uncertain.",source:`${Kt.nmrn}; ${Kt.mckay}`},{deck:"middle",name:"Wardroom",x0:-29.2,x1:-15.8,z0:-3.4,z1:3.4,walls:[["fore",3.4]],note:"The commissioned officers' mess, aft, with a long table over the rudder head and the officers' cabins along both sides.",source:`${Kt.wp}; ${Kt.mckay}`},{deck:"middle",name:"First Lieutenant's cabin",x0:-26.4,x1:-22.4,z0:3.4,z1:7.6,walls:[["port",3.5],"fore"],note:"On the starboard side, with the use of the starboard quarter gallery.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officer's cabin",x0:-22.4,x1:-19.6,z0:3.4,z1:7.6,walls:[["port",2.4],"fore"],lx:-21.2,note:"One of seven small cabins of lieutenants and senior officers round the wardroom, separated by light partitions that could be taken down when the ship cleared for action.",source:Kt.mckay},{deck:"middle",name:"Officers' pantry",x0:-19.6,x1:-15.8,z0:3.4,z1:7.6,walls:[["port",3.2],"fore"],note:"The wardroom's pantry, around the mizzen mast.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officers' cabins",x0:-26.4,x1:-15.8,z0:-7.6,z1:-3.4,walls:[["stbd",2]],note:"Lieutenants' cabins on the larboard side of the wardroom.",source:Kt.mckay},{deck:"middle",name:"Main capstan",obj:!0,x0:-7,x1:-5.8,z0:-.6,z1:.6,ly:1.7,note:"Abaft the mainmast. Its drumhead is on this deck, with a second drumhead below on the lower deck, so men on two decks could heave on the bars at once to weigh the anchors.",source:`${Kt.nmrn} conservation log`},{deck:"middle",name:"Jeer capstan",obj:!0,x0:3.1,x1:4.3,z0:-.6,z1:.6,ly:1.7,note:"Forward of the mainmast, used to sway up the heavy lower yards and for other heavy lifts.",source:`${Kt.nmrn} conservation log`},{deck:"middle",name:"Galley (Brodie stove)",x0:18.6,x1:22,z0:-2.2,z1:2.2,ly:1.6,note:"Just abaft the foremast, on a stone hearth. The iron Brodie stove cooked for some 820 men and distilled a little fresh water. The museum places it on this deck; the stove now aboard dates from the 1920s.",source:`${Kt.nmrn}; ${Kt.mckay}`},{deck:"middle",name:"Galley pantry",x0:16.2,x1:18.6,z0:-1.8,z1:1.8,walls:["aft",["port",1.2],["stbd",1.2]],note:"Behind (abaft) the galley.",source:Kt.mckay},{deck:"lower",name:"Gunroom",x0:-28.6,x1:-23.6,z0:-6.6,z1:6.6,walls:[["fore",6.6]],note:"Aft on this deck: the gunner's domain and the junior officers' mess, with the tiller sweeping overhead. Some sources put a gun room on the orlop instead. After the wheel was shot away Victory was steered from here.",source:`${Kt.wp} (Gunroom); ${Kt.beatty}`},{deck:"lower",name:"Crew messes",x0:-12,x1:12,z0:3.5,z1:5.5,lx:-4,lz:4.6,note:"About 600 men ate here and 460 slept, in hammocks slung from the beams in rows 14 inches wide. Messes of up to a dozen men ate at tables hung between the guns.",source:`${Kt.hv}; ${Kt.nmrn}`},{deck:"lower",name:"Chain pumps",obj:!0,x0:-1,x1:1,z0:1.4,z1:2.6,note:"Two chain pumps each side of the mainmast drew water from the well in the hold; there was also an elm-tree pump.",source:`on-board placard; ${Kt.mckay}`},{deck:"lower",name:"Riding bitts",obj:!0,x0:20,x1:21,z0:-1,z1:1,ly:1.4,note:"The great timbers that held the anchor cables. Their posts ran down to the hold. Forward of them, the hawse holes and the manger that caught water coming in with the cables.",source:Kt.mckay},{deck:"orlop",name:"Bread room",x0:-27,x1:-23.5,z0:-6,z1:6,walls:[["fore",9.5]],note:"Right aft, lined to keep out damp and rats: ship's biscuit for months at sea.",source:Kt.mckay},{deck:"orlop",name:"After hanging magazine",x0:-23.5,x1:-21.2,z0:-1.6,z1:1.6,walls:["aft","fore","port",["stbd",1.1]],note:"A small magazine for filled cartridges for the after guns.",source:Kt.mckay},{deck:"orlop",name:"Purser's store",x0:-23.5,x1:-20.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"The purser's stores and cabin: clothing, tobacco, soap and candles, sold to the men.",source:Kt.mckay},{deck:"orlop",name:"Marines' clothes store",x0:-20.2,x1:-18.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"Store for the uniforms and kit of the 146 Royal Marines aboard.",source:Kt.mckay},{deck:"orlop",name:"Steward's room",x0:-23.5,x1:-21.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"The steward issued provisions from the bread room and stores.",source:Kt.mckay},{deck:"orlop",name:"Surgeon's cabin",x0:-21.2,x1:-18.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"William Beatty, the surgeon, kept his cabin next to the cockpit.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"orlop",name:"Cockpit",x0:-18.2,x1:-11,z0:-1.6,z1:1.6,ly:.9,note:"In battle the surgeon's station. The wounded were carried down here by the hundred; Beatty operated by lantern light below the waterline, safe from shot.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"orlop",name:"Midshipmen's berth (where Nelson died)",x0:-17,x1:-11,z0:-6.4,z1:-1.6,walls:["aft","fore",["stbd",3]],lx:-13,lz:-3.6,note:"Nelson was carried to one of the midshipmen's berths on the larboard side, and died here at about 4:30 pm, three hours after he was shot. His last words were recorded by Beatty and the chaplain. A lantern marks the spot; it was moved about 6 m forward after Goodwin's study.",source:`${Kt.beatty}; ${Kt.nmrn}`},{deck:"orlop",name:"Pump room",x0:-4,x1:-1,z0:-1.5,z1:1.5,ly:.9,note:"Around the mainmast, over the well, where the pump chains ran down.",source:Kt.mckay},{deck:"orlop",name:"Cable tiers",x0:.5,x1:12,z0:2.6,z1:6,lx:6.5,lz:4.2,note:"The great hemp anchor cables were coiled down here on both sides when the anchors were up.",source:Kt.mckay},{deck:"orlop",name:"Boatswain's store",x0:14,x1:17.5,z0:1.6,z1:6,walls:["aft",["port",1.8],"fore"],note:"The boatswain's cabin and store: spare rope, blocks and rigging stores.",source:Kt.mckay},{deck:"orlop",name:"Carpenter's workshop",x0:14,x1:17.5,z0:-6,z1:-1.6,walls:["aft",["stbd",1.8],"fore"],note:"The carpenter and his crew plugged shot holes from the carpenter's walk along the hull during the battle.",source:Kt.mckay},{deck:"orlop",name:"Sail room",x0:17.5,x1:20.6,z0:.4,z1:5.4,walls:[["port",1.5],"fore"],note:"Spare sails, kept forward and dry.",source:Kt.mckay},{deck:"orlop",name:"Rope and block room",x0:17.5,x1:20.6,z0:-5.4,z1:-.4,walls:[["stbd",1.5],"fore"],note:"Spare cordage and blocks.",source:Kt.mckay},{deck:"orlop",name:"Fore hanging magazine",x0:20.6,x1:23.6,z0:-1.8,z1:1.8,walls:[["aft",1.8],"fore","port","stbd"],note:"Filled cartridges ready for the forward guns, with ladders down to the grand magazine. The light-room entry was above the foremast step.",source:Kt.mckay},{deck:"hold",name:"After hold",x0:-20,x1:-4.5,z0:-4,z1:4,lx:-10,ly:1.4,note:"Seven compartments, among them the after powder room and the flour store.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"hold",name:"Well and shot lockers",obj:!0,x0:-4.5,x1:-.5,z0:-1.8,z1:1.8,walls:["aft","fore","port","stbd"],note:"Around the foot of the mainmast: the well, where the pumps drew from, with the shot lockers forward and aft of it.",source:`${Kt.mckay}; Longridge`},{deck:"hold",name:"Main hold",x0:-.5,x1:15,z0:-4,z1:4,lx:7,ly:1.4,note:"Water casks bedded on iron and shingle ballast: enough fresh water for several months, with beer, salt beef and pork.",source:Kt.mckay},{deck:"hold",name:"Filling room",x0:15,x1:18,z0:-3,z1:3,walls:[["aft",3],["fore",3]],note:"Where powder was made up into cartridges, lit only from the light room through glass.",source:`${Kt.mckay}; ${Kt.wp}`},{deck:"hold",name:"Grand magazine",x0:18,x1:23,z0:-3,z1:3,walls:["fore"],note:"Forward, copper-lined, below the waterline. It held the ship's main stock of gunpowder; men wore felt slippers and nothing iron was allowed inside. The layout changed after 1805.",source:`${Kt.mckay}; ${Kt.wp}`}];function OM(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");for(let n=0;n<8;n++){let s=120+n*37%30;t.fillStyle=`rgb(${s},${s*.82|0},${s*.6|0})`,t.fillRect(n*32,0,32,256),t.fillStyle="rgba(40,25,10,0.6)",t.fillRect(n*32,0,2,256)}let e=new un(i);return e.colorSpace=Oe,e.wrapS=e.wrapT=nn,e}function BM(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");t.fillStyle="#cfc5ad",t.fillRect(0,0,256,256),t.strokeStyle="rgba(90,70,40,0.45)",t.lineWidth=4;for(let[n,s,r,o]of[[14,14,100,100],[142,14,100,100],[14,142,100,100],[142,142,100,100]])t.strokeRect(n,s,r,o);t.fillStyle="rgba(90,70,40,0.25)",t.fillRect(0,124,256,8),t.fillRect(124,0,8,256);let e=new un(i);return e.colorSpace=Oe,e.wrapS=e.wrapT=nn,e}function HM(i,t,e,n,s){let r=Math.hypot(e.x-t.x,e.z-t.z),o=Xm[i],a=c=>o?pt(o,c)-.33:pt(i,c)+2,l=[];if(n!=null){let c=Math.max(0,n-.5),h=Math.min(r,n+.5);c>.05&&l.push([0,c,0]),h<r-.05&&l.push([h,r,0]),l.push([c,h,1.75])}else l.push([0,r,0]);for(let[c,h,p]of l){let f={x:fe(t.x,e.x,c/r),z:fe(t.z,e.z,c/r)},u={x:fe(t.x,e.x,h/r),z:fe(t.z,e.z,h/r)},g=new ue,v=pt(i,f.x)+p,m=pt(i,u.x)+p,d=a(f.x),_=a(u.x),y=[f.x,v,f.z,u.x,m,u.z,u.x,_,u.z,f.x,d,f.z],x=[c/1.6,v/1.6,h/1.6,m/1.6,h/1.6,_/1.6,c/1.6,d/1.6];g.setAttribute("position",new se(y,3)),g.setAttribute("uv",new se(x,2)),g.setIndex([0,1,2,0,2,3]),g.computeVertexNormals(),s.push(g)}}var Sh=(i,t,e)=>{let n=Et(t,pt(i,t)+1)-.1;return Math.max(-n,Math.min(n,e))};function Nd(){let i=[];for(let t of wa)for(let e of t.walls||[]){let[n,s]=Array.isArray(e)?e:[e,null],r,o,a=0;if(n==="fore"||n==="aft"){let l=n==="fore"?t.x1:t.x0;r={x:l,z:Sh(t.deck,l,t.z0)},o={x:l,z:Sh(t.deck,l,t.z1)},a=r.z-t.z0}else{let l=n==="stbd"?t.z1:t.z0;r={x:t.x0,z:Sh(t.deck,t.x0,l)},o={x:t.x1,z:Sh(t.deck,t.x1,l)}}i.push({deck:t.deck,a:r,b:o,door:s==null?null:s-a})}return i}var Eh=class{constructor(t,e,n){this.group=new Yt,this.group.name="rooms",t.add(this.group);let s=[],r=[],o=[];for(let l of Nd()){let c=l.deck==="lower"?r:l.deck==="orlop"||l.deck==="hold"?o:s;HM(l.deck,l.a,l.b,l.door,c)}let a=OM();this.clearable=[];for(let[l,c,h]of[[s,BM(),!0],[r,a,!0],[o,a,!1]]){if(!l.length)continue;let p=new X(gt(l),new ae({map:c,roughness:.85,side:Ne}));p.castShadow=p.receiveShadow=!0,p.name="bulkheads",this.group.add(p),h&&this.clearable.push(p)}this.renderer=new Mh,this.renderer.domElement.className="labels",e.appendChild(this.renderer.domElement),this.labels=[];for(let l of wa){let c=document.createElement("div");c.className="room-label",c.textContent=l.name,c.onclick=u=>{u.stopPropagation(),n(l)};let h=new yh(c),p=l.lx??(l.x0+l.x1)/2,f=l.lz??(l.z0+l.z1)/2;h.position.set(p,pt(l.deck,p)+(l.ly??1.1),f),h.userData.room=l,this.group.add(h),this.labels.push(h)}this.level="all",this.enabled=!0,this.refresh()}setLevel(t){this.level=t,this.refresh()}setCleared(t){for(let e of this.clearable)e.visible=!t}setEnabled(t){this.enabled=t,this.refresh()}refresh(){for(let t of this.labels){let e=t.userData.room;t.visible=this.enabled&&this.level!=="all"&&qm[e.deck]===this.level}}render(t,e,n,s){this.renderer.setSize(n,s),this.renderer.render(t,e)}};var to=["hold","orlop","lower","middle","upper","qd","poop"],zM=.24,Ta=-31,Ra=-8.6,zi=.1,er=620,bh=172;function kM(){let i=new Yt,t=_=>new ae({color:_,roughness:.8}),e=t("#22335a"),n=t("#e4ddcc"),s=t("#d9a882"),r=t("#151515"),o=t("#d8d0c0"),a=[],l=[];for(let _ of[1,-1]){let y=new Yt;y.position.set(0,.93,_*.1);let x=new X(new Be(.075,.72,4,8),n);x.position.y=-.44;let S=new X(new Gt(.24,.07,.11),r);S.position.set(.05,-.9,0),y.add(x,S),i.add(y),a.push(y);let E=new Yt;E.position.set(0,1.44,_*.25);let b=new X(new Be(.058,.48,4,8),e);b.position.y=-.3;let M=new X(new me(.06,8,6),s);M.position.y=-.6,E.add(b,M),i.add(E),l.push(E)}let c=new X(new Gt(.24,.58,.42),e);c.position.y=1.2;let h=new X(new Gt(.02,.3,.14),o);h.position.set(.125,1.32,0);let p=new X(new be(.09,.025,6,12),r);p.rotation.x=Math.PI/2,p.position.y=1.5;let f=new X(new me(.115,12,10),s);f.position.y=1.62;let u=new X(new me(.118,12,8,0,Math.PI*2,0,Math.PI/2),t("#3a2614"));u.position.y=1.625,u.rotation.z=.3;let g=new X(new Be(.02,.18,3,6),t("#3a2614"));g.position.set(-.12,1.5,0);let v=new X(new Jt(.13,.14,.1,14),r);v.position.y=1.74;let m=new X(new Jt(.2,.2,.015,16),r);m.position.y=1.695;let d=new X(new Jt(.142,.142,.03,14),t("#e8e0c8"));return d.position.y=1.71,i.add(c,h,p,f,u,g,v,m,d),i.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),i.userData={legs:a,arms:l},i}function VM(i){switch(i){case"hold":return[-20.6,19.6];case"orlop":return[Me(qt.orlop)+.5,He(qt.orlop)-.7];case"lower":case"middle":return[Me(qt[i])+.45,He(qt[i])-.6];case"upper":return[Me(qt.upper)+.8,He(qt.upper)-.8];case"qd":return[Me(qt.qd)+.6,He(qt.qd)-.6];default:return[Me(qt.poop)+.6,Ke-.15]}}var Zm=i=>i==="qd"||i==="poop";function GM(i){return Zm(i)||i==="hold"?[]:i==="orlop"?Un.filter(t=>t.x>-14&&t.x<15):Un}var Ud=class{constructor(){this.grids=Object.fromEntries(to.map(t=>[t,new Uint8Array(er*bh)])),this.portals=[]}cell(t,e){let n=Math.floor((t-Ta)/zi),s=Math.floor((e-Ra)/zi);return n<0||s<0||n>=er||s>=bh?-1:s*er+n}free(t,e,n){let s=this.cell(e,n);return s>=0&&this.grids[t][s]===1}build(t){let e=Object.fromEntries(to.map(u=>[u,[]])),n=(u,g,v,m,d,_=0)=>e[u].push({t:"box",cx:g,cz:v,hx:m,hz:d,c:Math.cos(_),s:Math.sin(_)}),s=(u,g,v,m)=>e[u].push({t:"circle",cx:g,cz:v,r:m}),r=(u,g,v,m,d,_=.06)=>e[u].push({t:"seg",ax:g,az:v,bx:m,bz:d,w:_});for(let u of to)for(let g of GM(u))n(u,g.x,0,g.w/2+.2,g.d/2+.2);let o=t.cur,a={lower:"lower",middle:"middle",upper:"upper",qd:"qd",fc:"qd",carronade:"qd"};for(let u of t.guns.ports){let g=u.tier,v=-.9+o.runOut*1.6,m=v-g.len-.15,d=Math.min(v,0),_=u.basis.p.clone().addScaledVector(u.out,(m+d)/2);n(a[g.name],_.x,_.z,(d-m)/2,g.carronade?.4:.5,Math.atan2(u.out.z,u.out.x))}for(let u of Object.values(Bi))for(let g of to)(g!=="poop"||u.x<Ke)&&s(g,u.x,0,.62);for(let[u]of[["orlop"],["lower"],["middle"]])for(let g=-20;g<20;g+=2.5)Un.some(v=>Math.abs(g-v.x)<v.w/2+.3)||u==="orlop"&&(g<-14||g>15)||s(u,g,0,.12);for(let u of["middle","lower"])s(u,-6.4,0,u==="middle"?.95:.8),s(u,3.7,0,u==="middle"?.72:.62);n("qd",Ke-1,0,.95,.55),n("qd",Ke+1,0,.4,.65),n("qd",-8.8,0,1.35,1.05),n("qd",je+.8,0,.5,.5),n("qd",20.3,1.6,.35,.35),this.portals=[];let l=(u,g,v,m,d,_,y,x)=>{n(u,(v.x+m.x)/2,(v.z+m.z)/2,Math.abs(m.x-v.x)/2+.42*(v.x===m.x?1:0)+.05,Math.abs(m.z-v.z)/2+.42*(v.z===m.z?1:0)+.05),this.portals.push({lo:u,hi:g,rail:[v,m],foot:d,footDir:_,top:y,topDir:x})},c=["orlop","lower","middle","upper"];for(let u=0;u<c.length-1;u++)for(let g of Un.filter(v=>v.ladder)){if(c[u]==="orlop"&&!(g.x>-14&&g.x<15))continue;let v=Vc(g,u%2?-1:1),m=v.side;l(c[u],c[u+1],{x:v.x,z:v.zFoot},{x:v.x,z:v.zTop},{x:v.x,z:v.zFoot+m*.32},{x:0,z:-m},{x:v.x,z:m*(g.d/2+.68)},{x:0,z:-m})}{let u=Wc(),g=u.hatch;l("hold","orlop",{x:u.x,z:u.zFoot},{x:u.x,z:u.zTop},{x:u.x,z:u.zFoot-.32},{x:0,z:1},{x:u.x,z:-(g.d/2+.68)},{x:0,z:1})}for(let u of Xc)for(let g of[1,-1]){let v=Math.sign(u.run),m=g*u.z;l(u.from,u.to,{x:u.x,z:m},{x:u.x+u.run,z:m},{x:u.x-v*.5,z:m},{x:v,z:0},{x:u.x+u.run+v*.6,z:m},{x:-v,z:0})}let h={qd:"qd",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"};for(let u of Nd()){let g=h[u.deck];if(!g||t.isCleared&&g!=="orlop"&&g!=="hold")continue;let v=Math.hypot(u.b.x-u.a.x,u.b.z-u.a.z),m=d=>[u.a.x+(u.b.x-u.a.x)*d/v,u.a.z+(u.b.z-u.a.z)*d/v];if(u.door==null)r(g,u.a.x,u.a.z,u.b.x,u.b.z);else{let d=Math.max(0,u.door-.5),_=Math.min(v,u.door+.5);d>.05&&r(g,u.a.x,u.a.z,...m(d)),_<v-.05&&r(g,...m(_),u.b.x,u.b.z)}}{let u=Ke-4.2,g=Et(u,pt("qd",u)+1)-.3;r("qd",u,-g,u,-.5),r("qd",u,.5,u,g)}let p=new Hn,f=new Mt;t.furnishing.traverse(u=>{if(!(!u.isInstancedMesh||["hammock","lantern","plate","coil"].includes(u.name)||u.name.startsWith("gear-"))){u.geometry.boundingBox||u.geometry.computeBoundingBox();for(let g=0;g<u.count;g++){if(u.getMatrixAt(g,f),f.elements[0]===0&&f.elements[5]===0)continue;p.copy(u.geometry.boundingBox).applyMatrix4(f);let v=to.slice().reverse().find(m=>{let d=ss(m==="qd"?"qd":m,(p.min.x+p.max.x)/2,0);return p.min.y>d-.4&&p.min.y<d+1});!v||p.max.y-p.min.y<.05||n(v,(p.min.x+p.max.x)/2,(p.min.z+p.max.z)/2,(p.max.x-p.min.x)/2,(p.max.z-p.min.z)/2)}}});for(let u of to){let g=this.grids[u],[v,m]=VM(u),d=u;for(let _=0;_<er;_++){let y=Ta+(_+.5)*zi,x=y>v&&y<m,S=u==="hold"?Gc:pt(d,y),E=Et(y,S+.5)-(Zm(u)||u==="upper"?.32:0)-.35;for(let b=0;b<bh;b++){let M=Ra+(b+.5)*zi,w=x&&Math.abs(M)<E;w&&u==="qd"&&y>gn&&y<je&&(w=Math.abs(M)>E+.35-jp+.25),g[b*er+_]=w?1:0}}for(let _ of e[u])this.stamp(g,_)}}stamp(t,e){let n=zM,s,r,o,a;if(e.t==="circle")s=e.cx-e.r-n,r=e.cx+e.r+n,o=e.cz-e.r-n,a=e.cz+e.r+n;else if(e.t==="box"){let f=Math.abs(e.c)*e.hx+Math.abs(e.s)*e.hz+n,u=Math.abs(e.s)*e.hx+Math.abs(e.c)*e.hz+n;s=e.cx-f,r=e.cx+f,o=e.cz-u,a=e.cz+u}else s=Math.min(e.ax,e.bx)-n-e.w,r=Math.max(e.ax,e.bx)+n+e.w,o=Math.min(e.az,e.bz)-n-e.w,a=Math.max(e.az,e.bz)+n+e.w;let l=Math.max(0,Math.floor((s-Ta)/zi)),c=Math.min(er-1,Math.floor((r-Ta)/zi)),h=Math.max(0,Math.floor((o-Ra)/zi)),p=Math.min(bh-1,Math.floor((a-Ra)/zi));for(let f=l;f<=c;f++){let u=Ta+(f+.5)*zi;for(let g=h;g<=p;g++){let v=Ra+(g+.5)*zi,m;if(e.t==="circle")m=Math.hypot(u-e.cx,v-e.cz)<e.r+n;else if(e.t==="box"){let d=u-e.cx,_=v-e.cz,y=d*e.c+_*e.s,x=-d*e.s+_*e.c;m=Math.abs(y)<e.hx+n&&Math.abs(x)<e.hz+n}else{let d=e.bx-e.ax,_=e.bz-e.az,y=d*d+_*_||1,x=Math.max(0,Math.min(1,((u-e.ax)*d+(v-e.az)*_)/y));m=Math.hypot(u-(e.ax+d*x),v-(e.az+_*x))<e.w+n}m&&(t[g*er+f]=0)}}}},wh=class{constructor(t){this.figure=kM(),this.figure.visible=!1,t.add(this.figure),this.map=new Ud,this.level="qd",this.x=-9.5,this.z=2.4,this.heading=0,this.phase=0,this.climb=null,this.target=null,this.blocked=0,this.lastPortal=null,this.version=-1}setActive(t,e){this.figure.visible=t,t&&this.rebuild(e)}rebuild(t){this.map.build(t),this.version=t.layoutVersion,this.map.free(this.level,this.x,this.z)||this.respawn()}respawn(){for(let t of[this.level,"qd"])for(let e=0;e<12;e+=.2)for(let n=0;n<Math.PI*2;n+=.4){let s=this.x+Math.cos(n)*e,r=this.z+Math.sin(n)*e;if(this.map.free(t,s,r)){this.level=t,this.x=s,this.z=r;return}}}floorY(t=this.level,e=this.x,n=this.z){return ss(t,e,n)}walkTo(t,e){this.target={x:t,z:e},this.blocked=0}update(t,e,n,s){s.layoutVersion!==this.version&&this.rebuild(s);let r=this.figure.userData;if(this.climb){let u=this.climb;u.t=Math.min(1,u.t+t/u.dur);let g=u.t,v=u.path,m=Math.min(v.length-2,Math.floor(g*(v.length-1))),d=g*(v.length-1)-m,_=v[m],y=v[m+1];this.x=_.x+(y.x-_.x)*d,this.z=_.z+(y.z-_.z)*d;let x=_.y+(y.y-_.y)*d;this.figure.position.set(this.x,x,this.z),this.phase+=t*9,r.arms.forEach((S,E)=>{S.rotation.z=2.3+Math.sin(this.phase+E*Math.PI)*.35}),r.legs.forEach((S,E)=>{S.rotation.z=.4+Math.sin(this.phase+E*Math.PI)*.4}),u.t>=1&&(this.level=u.to,this.climb=null,this.lastPortal=u.portalKey,r.arms.forEach(S=>{S.rotation.z=0}));return}let o=e.x,a=e.z;if(this.target&&!o&&!a){let u=this.target.x-this.x,g=this.target.z-this.z,v=Math.hypot(u,g);v<.12?this.target=null:(o=u/v,a=g/v)}else(o||a)&&(this.target=null);let l=Math.hypot(o,a),c=0;if(l>.01){o/=l,a/=l,c=n?3.2:1.5;let u=c*t,g=this.x+o*u,v=this.z+a*u,m=!1;this.map.free(this.level,g,v)?(this.x=g,this.z=v,m=!0):this.map.free(this.level,g,this.z)?(this.x=g,m=!0):this.map.free(this.level,this.x,v)&&(this.z=v,m=!0),!m&&this.target&&(this.blocked+=t)>.5&&(this.target=null),this.heading=Math.atan2(-a,o),this.checkPortals(o,a,s)}let h=Math.min(1,c/1.5)*(c>2?.75:.55);c>0&&(this.phase+=t*(c>2?11:7.5)),r.legs.forEach((u,g)=>{u.rotation.z=Math.sin(this.phase+g*Math.PI)*h}),r.arms.forEach((u,g)=>{u.rotation.z=-Math.sin(this.phase+g*Math.PI)*h*.8}),c||(r.legs.forEach(u=>{u.rotation.z*=.8}),r.arms.forEach(u=>{u.rotation.z*=.8}));let p=this.figure.rotation.y,f=this.heading-p;f=Math.atan2(Math.sin(f),Math.cos(f)),this.figure.rotation.y=p+f*Math.min(1,t*12),this.figure.position.set(this.x,this.floorY(),this.z)}checkPortals(t,e,n){for(let s=0;s<this.map.portals.length;s++){let r=this.map.portals[s];for(let o of["foot","top"]){if((o==="foot"?r.lo:r.hi)!==this.level)continue;let l=r[o],c=o==="foot"?r.footDir:r.topDir,h=`${s}${o}`;if(!(Math.hypot(this.x-l.x,this.z-l.z)<.55)){this.lastPortal===h&&(this.lastPortal=null);continue}if(this.lastPortal===h||t*c.x+e*c.z<.6)continue;let f=o==="foot"?r.top:r.foot,u=o==="foot"?r.hi:r.lo,[g,v]=r.rail,m={x:g.x,y:ss(r.lo,g.x,g.z),z:g.z},d={x:v.x,y:ss(r.hi,v.x,v.z),z:v.z},_={x:l.x,y:this.floorY(),z:l.z},y={x:f.x,y:ss(u,f.x,f.z),z:f.z},x=o==="foot"?[_,m,d,y]:[_,d,m,y];this.climb={path:x,t:0,dur:1.9,to:u,portalKey:`${s}${o==="foot"?"top":"foot"}`};let S=(o==="foot"?1:-1)*(v.x-g.x),E=(o==="foot"?1:-1)*(v.z-g.z);this.heading=Math.atan2(-E,S),this.figure.rotation.y=this.heading,this.target=null;return}}}};var WM={hold:"hold",orlop:"orlop",lower:"lower",middle:"middle",upper:"upper",qd:"quarterdeck",poop:"poop"},Fd=fn.degToRad(40),Th=class{constructor({ship:t,cut:e,rooms:n,renderer:s,ui:r}){this.ship=t,this.cut=e,this.rooms=n,this.renderer=s,this.ui=r,this.sailor=new wh(t.body),this.camera=new Li(-1,1,1,-1,1,2e3),this.zoom=9,this.theta=fn.degToRad(135),this.thetaTarget=this.theta,this.focus=new A,this.keys=new Set,this.active=!1,this.level=null,this.ray=new Yo,window.addEventListener("keydown",l=>{this.active&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(l.code)&&l.preventDefault(),l.code==="KeyQ"&&(this.thetaTarget-=Math.PI/2),l.code==="KeyE"&&(this.thetaTarget+=Math.PI/2),this.keys.add(l.code))}),window.addEventListener("keyup",l=>this.keys.delete(l.code)),window.addEventListener("blur",()=>this.keys.clear());let o=s.domElement;o.addEventListener("wheel",l=>{this.active&&(l.preventDefault(),this.zoom=fn.clamp(this.zoom*(l.deltaY>0?1.12:1/1.12),4,40))},{passive:!1});let a=null;o.addEventListener("pointerdown",l=>{this.active&&(a={x:l.clientX,y:l.clientY})}),o.addEventListener("pointerup",l=>{!this.active||!a||(Math.hypot(l.clientX-a.x,l.clientY-a.y)<6&&this.clickTo(l.clientX,l.clientY),a=null)})}enter(){this.active=!0,this.saved={level:this.cut.level,cutZ:this.cut.cutZ},this.cut.setCut(0),this.sailor.setActive(!0,this.ship),this.level=null,this.snap=!0}exit(){this.active=!1,this.sailor.setActive(!1,this.ship),this.cut.setLevel(this.saved?.level??"all"),this.rooms.setLevel(this.saved?.level??"all"),this.ui?.setLevel(this.saved?.level??"all")}clickTo(t,e){let n=new $(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.ray.setFromCamera(n,this.camera);let s=new Mt().copy(this.ship.body.matrixWorld).invert(),r=this.ray.ray.origin.clone().applyMatrix4(s),o=this.ray.ray.direction.clone().transformDirection(s),a=this.sailor.floorY();if(Math.abs(o.y)<1e-4)return;let l=(a-r.y)/o.y;l<0||this.sailor.walkTo(r.x+o.x*l,r.z+o.z*l)}update(t){let e=this.keys,n=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0),r=Math.cos(this.theta),o=Math.sin(this.theta),a={x:-r*n+o*s,z:-o*n-r*s};this.sailor.update(t,a,e.has("ShiftLeft")||e.has("ShiftRight"),this.ship);let l=WM[this.sailor.level];if(l!==this.level&&(this.level=l,this.cut.setLevel(l),this.rooms.setLevel(l),this.ui?.setLevel(l)),this.sailor.level==="hold"||this.sailor.level==="orlop"){let u=Math.sin(this.theta)>=0?1:-1;this.cut.setCutPlane(u*this.sailor.z+2.4,u)}else this.cut.cutZ<50&&this.cut.setCutPlane(1e5,1);this.theta+=(this.thetaTarget-this.theta)*Math.min(1,t*6);let c=this.sailor.figure.position.clone().add(new A(0,1,0));this.ship.body.localToWorld(c),this.snap?(this.focus.copy(c),this.snap=!1):this.focus.lerp(c,Math.min(1,t*6));let p=new A(Math.cos(this.theta)*Math.cos(Fd),Math.sin(Fd),Math.sin(this.theta)*Math.cos(Fd)).multiplyScalar(160);this.camera.position.copy(this.focus).add(p),this.camera.lookAt(this.focus);let f=window.innerWidth/window.innerHeight;Object.assign(this.camera,{left:-this.zoom*f,right:this.zoom*f,top:this.zoom,bottom:-this.zoom}),this.camera.updateProjectionMatrix()}};var ki={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},XM=new Li(-1,1,1,-1,0,1),Od=class extends ue{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},qM=new Od,Vi=class{constructor(t){this._mesh=new X(qM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,XM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Rh=class extends kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pn.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Aa=class extends kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ah=class extends kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ch=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rh(ki),this.copyPass.material.blending=rn,this.timer=new qo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Aa!==void 0&&(o instanceof Aa?n=!0:o instanceof Ah&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ph=class extends kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ca={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Mt},cameraProjectionMatrixInverse:{value:new Mt},cameraWorldMatrix:{value:new Mt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Pa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ih={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function $m(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=YM(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new A(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ji(s,t,t);return r.wrapS=nn,r.wrapT=nn,r.needsUpdate=!0,r}function YM(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var Ia={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Bd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new Mt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Bd(i,t,e){let n=ZM(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function ZM(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var Lh=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,p=(l+c)*h,f=l-p,u=c-p,g=t-f,v=e-u,m,d;g>v?(m=1,d=0):(m=0,d=1);let _=g-m+h,y=v-d+h,x=g-1+2*h,S=v-1+2*h,E=l&255,b=c&255,M=this.perm[E+this.perm[b]]%12,w=this.perm[E+m+this.perm[b+d]]%12,T=this.perm[E+1+this.perm[b+1]]%12,P=.5-g*g-v*v;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[M],g,v));let I=.5-_*_-y*y;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[w],_,y));let N=.5-x*x-S*S;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[T],x,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),p=Math.floor(e+c),f=Math.floor(n+c),u=1/6,g=(h+p+f)*u,v=h-g,m=p-g,d=f-g,_=t-v,y=e-m,x=n-d,S,E,b,M,w,T;_>=y?y>=x?(S=1,E=0,b=0,M=1,w=1,T=0):_>=x?(S=1,E=0,b=0,M=1,w=0,T=1):(S=0,E=0,b=1,M=1,w=0,T=1):y<x?(S=0,E=0,b=1,M=0,w=1,T=1):_<x?(S=0,E=1,b=0,M=0,w=1,T=1):(S=0,E=1,b=0,M=1,w=1,T=0);let P=_-S+u,I=y-E+u,N=x-b+u,D=_-M+2*u,F=y-w+2*u,V=x-T+2*u,B=_-1+3*u,Q=y-1+3*u,W=x-1+3*u,nt=h&255,et=p&255,bt=f&255,Rt=this.perm[nt+this.perm[et+this.perm[bt]]]%12,jt=this.perm[nt+S+this.perm[et+E+this.perm[bt+b]]]%12,Nt=this.perm[nt+M+this.perm[et+w+this.perm[bt+T]]]%12,Ht=this.perm[nt+1+this.perm[et+1+this.perm[bt+1]]]%12,U=.6-_*_-y*y-x*x;U<0?s=0:(U*=U,s=U*U*this._dot3(this.grad3[Rt],_,y,x));let k=.6-P*P-I*I-N*N;k<0?r=0:(k*=k,r=k*k*this._dot3(this.grad3[jt],P,I,N));let J=.6-D*D-F*F-V*V;J<0?o=0:(J*=J,o=J*J*this._dot3(this.grad3[Nt],D,F,V));let ut=.6-B*B-Q*Q-W*W;return ut<0?a=0:(ut*=ut,a=ut*ut*this._dot3(this.grad3[Ht],B,Q,W)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,p,f,u,g,v=(t+e+n+s)*l,m=Math.floor(t+v),d=Math.floor(e+v),_=Math.floor(n+v),y=Math.floor(s+v),x=(m+d+_+y)*c,S=m-x,E=d-x,b=_-x,M=y-x,w=t-S,T=e-E,P=n-b,I=s-M,N=w>T?32:0,D=w>P?16:0,F=T>P?8:0,V=w>I?4:0,B=T>I?2:0,Q=P>I?1:0,W=N+D+F+V+B+Q,nt=o[W][0]>=3?1:0,et=o[W][1]>=3?1:0,bt=o[W][2]>=3?1:0,Rt=o[W][3]>=3?1:0,jt=o[W][0]>=2?1:0,Nt=o[W][1]>=2?1:0,Ht=o[W][2]>=2?1:0,U=o[W][3]>=2?1:0,k=o[W][0]>=1?1:0,J=o[W][1]>=1?1:0,ut=o[W][2]>=1?1:0,lt=o[W][3]>=1?1:0,mt=w-nt+c,zt=T-et+c,K=P-bt+c,st=I-Rt+c,rt=w-jt+2*c,ct=T-Nt+2*c,dt=P-Ht+2*c,Bt=I-U+2*c,Dt=w-k+3*c,kt=T-J+3*c,te=P-ut+3*c,O=I-lt+3*c,_e=w-1+4*c,le=T-1+4*c,L=P-1+4*c,R=I-1+4*c,G=m&255,q=d&255,tt=_&255,ft=y&255,xt=a[G+a[q+a[tt+a[ft]]]]%32,it=a[G+nt+a[q+et+a[tt+bt+a[ft+Rt]]]]%32,at=a[G+jt+a[q+Nt+a[tt+Ht+a[ft+U]]]]%32,yt=a[G+k+a[q+J+a[tt+ut+a[ft+lt]]]]%32,Wt=a[G+1+a[q+1+a[tt+1+a[ft+1]]]]%32,vt=.6-w*w-T*T-P*P-I*I;vt<0?h=0:(vt*=vt,h=vt*vt*this._dot4(r[xt],w,T,P,I));let _t=.6-mt*mt-zt*zt-K*K-st*st;_t<0?p=0:(_t*=_t,p=_t*_t*this._dot4(r[it],mt,zt,K,st));let Ut=.6-rt*rt-ct*ct-dt*dt-Bt*Bt;Ut<0?f=0:(Ut*=Ut,f=Ut*Ut*this._dot4(r[at],rt,ct,dt,Bt));let Zt=.6-Dt*Dt-kt*kt-te*te-O*O;Zt<0?u=0:(Zt*=Zt,u=Zt*Zt*this._dot4(r[yt],Dt,kt,te,O));let re=.6-_e*_e-le*le-L*L-R*R;return re<0?g=0:(re*=re,g=re*re*this._dot4(r[Wt],_e,le,L,R)),27*(h+p+f+u+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var eo=class i extends kn{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$m(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ge(this.width,this.height,{type:Qe,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ee({defines:Object.assign({},Ca.defines),uniforms:pn.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:rn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ho,this.normalMaterial.blending=rn,this.pdMaterial=new Ee({defines:Object.assign({},Ia.defines),uniforms:pn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ee({defines:Object.assign({},Pa.defines),uniforms:pn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,blending:rn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ee({uniforms:pn.clone(ki.uniforms),vertexShader:ki.vertexShader,fragmentShader:ki.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Jo,blendDst:qs,blendEquation:ii,blendSrcAlpha:jo,blendDstAlpha:qs,blendEquationAlpha:ii}),this.blendMaterial=new Ee({uniforms:pn.clone(Ih.uniforms),vertexShader:Ih.vertexShader,fragmentShader:Ih.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Wl,blendSrc:Jo,blendDst:qs,blendEquation:ii,blendSrcAlpha:jo,blendDstAlpha:qs,blendEquationAlpha:ii}),this._fsQuad=new Vi(null),this._originalClearColor=new Qt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ii,this.depthTexture.format=Di,this.depthTexture.type=As,this.normalRenderTarget=new Ge(this.width,this.height,{minFilter:sn,magFilter:sn,type:Qe,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Bd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=rn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=rn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=rn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=rn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=rn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Lh,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Ji(s,t,t,Vn,Dn);return r.wrapS=nn,r.wrapT=nn,r.needsUpdate=!0,r}};eo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Km={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var no=class i extends kn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,o,{type:Qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Ge(r,o,{type:Qe,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Ge(r,o,{type:Qe,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Km;this.highPassUniforms=pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pn.clone(ki.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:ki.vertexShader,fragmentShader:ki.fragmentShader,premultipliedAlpha:!0,blending:Xs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new ji,this._fsQuad=new Vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ee({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};no.BlurDirectionX=new $(1,0);no.BlurDirectionY=new $(0,1);var La={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Dh=class extends kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=pn.clone(La.uniforms),this.material=new Br({name:La.name,uniforms:this.uniforms,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this._fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===na&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nh=class{constructor(t,e,n){this.renderer=t,this.scene=e;let s=t.getDrawingBufferSize(new $),r=new Ge(s.x,s.y,{type:Qe,samples:4});this.composer=new Ch(t,r),this.renderPass=new Ph(e,n),this.composer.addPass(this.renderPass),this.ao=new eo(e,n,s.x,s.y),this.ao.output=eo.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:.6,distanceExponent:1.4,thickness:1.2,scale:1,samples:12}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});let o=this.ao._overrideVisibility.bind(this.ao);this.ao._overrideVisibility=()=>{o(),e.traverse(a=>{a.userData.noAO&&a.visible&&(a.visible=!1,this.ao._visibilityCache.push(a))})},this.composer.addPass(this.ao),this.bloom=new no(new $(s.x/2,s.y/2),.35,.5,2.2),this.composer.addPass(this.bloom),this.composer.addPass(new Dh),this.aoWanted=!0}setCamera(t){this.renderPass.camera!==t&&(this.renderPass.camera=t,this.ao.camera=t,this.ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA=t.isPerspectiveCamera?1:0,this.ao.gtaoMaterial.needsUpdate=!0,"PERSPECTIVE_CAMERA"in this.ao.pdMaterial.defines&&(this.ao.pdMaterial.defines.PERSPECTIVE_CAMERA=t.isPerspectiveCamera?1:0,this.ao.pdMaterial.needsUpdate=!0))}setSize(t,e){this.composer.setSize(t,e)}render(t){this.ao.enabled=this.aoWanted&&!t,this.composer.render()}};var Le=new URLSearchParams(location.search),li=new Oc({antialias:!0,preserveDrawingBuffer:Le.has("shot")});li.setPixelRatio(Math.min(window.devicePixelRatio,2));li.setSize(window.innerWidth,window.innerHeight);li.toneMapping=Ys;li.toneMappingExposure=.55;li.shadowMap.enabled=!0;li.shadowMap.type=Gl;document.getElementById("app").appendChild(li.domElement);var as=new ks,Ei=new Tn(40,window.innerWidth/window.innerHeight,.2,9e3);as.userData.camera=Ei;var ti=new qc(li,as),$M=ti.sun;ti.setTime("day");var KM=as.environment,Da=new Qc(KM);as.add(Da.mesh);var ze=new xh(as,Da);as.add(ze.root);var Uh=document.getElementById("info");function jM(i){Uh.innerHTML=`<span class="close">\xD7</span><h2>${i.name}</h2><div class="deck">${Ym[i.deck]}</div>
    <div>${i.note}</div>${i.source?`<div class="src">Source: ${i.source}</div>`:""}`,Uh.style.display="block",Uh.querySelector(".close").onclick=()=>{Uh.style.display="none"}}var nr=new Eh(ze.body,document.body,jM);ze.clearables.push(nr);nr.setCleared(ze.isCleared);var ai=new vh(ze,$M),qn=new kc(Ei,li.domElement);qn.enableDamping=!0;qn.dampingFactor=.08;qn.maxPolarAngle=Math.PI*.495;qn.minDistance=4;qn.maxDistance=600;var Jm={quarter:[[78,24,96],[0,22,0]],broadside:[[4,18,132],[2,24,0]],bow:[[92,14,34],[12,20,0]],stern:[[-84,20,-46],[-14,16,0]],deck:[[-21,15.5,7],[10,9,0]],aloft:[[30,76,52],[0,30,0]],galleries:[[-44,9,24],[-26,7,0]],head:[[44,9,16],[30,8,0]],inside:[[-26,34,46],[0,2,0]]};function Hd(i,t=!1){let e=Jm[i];if(!e)return;let n=new A(...e[0]),s=new A(...e[1]);t?(Ei.position.copy(n),qn.target.copy(s)):Qn={p0:Ei.position.clone(),t0:qn.target.clone(),p1:n,t1:s,k:0}}var Qn=null,Ns=Le.get("ui")==="0"?null:new _h({onPose:i=>{ze.setPose(i);let t=Ls[i].wind;t&&(ze.setWind(t.dir,t.str),Ns?.windSet(t.dir,t.str))},onView:i=>Hd(i),onFire:()=>ze.fireBroadside(),onWind:(i,t)=>ze.setWind(i,t),wind:{dir:+(Le.get("wind")??-135),str:+(Le.get("windStr")??.6)},levels:Object.keys(Dd),onLevel:i=>{ai.setLevel(i),nr.setLevel(i)},onLabels:i=>nr.setEnabled(i),onCut:i=>ai.setCut(i),onXray:i=>ai.setXray(i),onMode:i=>zd(i),onTime:i=>Qm(i),poses:ze.poseNames(),views:Object.keys(Jm)}),Xn=new Th({ship:ze,cut:ai,rooms:nr,renderer:li,ui:Ns});ti.nightMaterials.push(...ze.nightMaterials);var JM=new Yc(ze,ze.lanterns);function Qm(i){ti.setTime(i,Da),ze.wake.uniforms.uLight.value=ti.light*(ti.night>.9?.45:1),ze.effects.light=ti.light,Da.uniforms.uLight.value=ti.light,Ns?.setTime(i),typeof Ds<"u"&&t0()}Qm(Le.get("time")||"day");function zd(i){i==="sailor"&&!Xn.active&&(Xn.enter(),qn.enabled=!1),i==="free"&&Xn.active&&(Xn.exit(),qn.enabled=!0)}Ns?.setMode("free");ze.setPose(Le.get("pose")||"sail",!0);{let i=Ls[ze.pose].wind,t=+(Le.get("wind")??i?.dir??-135),e=+(Le.get("windStr")??i?.str??.6);ze.setWind(t,e,!0),Ns?.windSet(t,e)}Hd(Le.get("view")||"quarter",!0);if(Le.has("cam")){let i=Le.get("cam").split(",").map(Number);Ei.position.set(i[0],i[1],i[2]),qn.target.set(i[3],i[4],i[5])}Ns?.setPose(ze.pose);Le.has("level")&&(ai.setLevel(Le.get("level")),nr.setLevel(Le.get("level")),Ns?.setLevel(Le.get("level")));Le.has("cut")&&ai.setCut(+Le.get("cut"));Le.has("xray")&&ai.setXray(!0);Le.has("fire")&&setTimeout(()=>ze.fireBroadside(),300);Le.get("mode")==="sailor"&&(Le.has("sx")&&(Xn.sailor.x=+Le.get("sx"),Xn.sailor.z=+Le.get("sz"),Xn.sailor.level=Le.get("sl")||"qd"),Le.has("zoom")&&(Xn.zoom=+Le.get("zoom")),zd("sailor"),Ns?.setMode("sailor"));var Ds=new Nh(li,as,Ei);function t0(){Ds.bloom.enabled=ti.night>.9,Ds.bloom.threshold=.75,Ds.bloom.strength=.55}t0();window.addEventListener("resize",()=>{Ei.aspect=window.innerWidth/window.innerHeight,Ei.updateProjectionMatrix(),li.setSize(window.innerWidth,window.innerHeight),Ds.setSize(window.innerWidth,window.innerHeight)});var QM=new Zo,Oh=Le.has("t")?parseFloat(Le.get("t")):null,Fh=Oh??0,jm=0;function e0(){let i=Math.min(QM.getDelta(),.05);if(Fh=Oh??Fh+i,ze.update(Fh,Oh!=null?1/30:i),ai.update(),Da.update(Fh,ze.distance),Qn){Qn.k=Math.min(1,Qn.k+i/1.6);let n=Qn.k<.5?2*Qn.k**2:1-(-2*Qn.k+2)**2/2;Ei.position.lerpVectors(Qn.p0,Qn.p1,n),qn.target.lerpVectors(Qn.t0,Qn.t1,n),Qn.k>=1&&(Qn=null)}let t=Xn.active?Xn.sailor.figure.position.clone():ze.body.worldToLocal(qn.target.clone());JM.update(i,t,ti.night,ai.uniforms.uCutY.value);let e=Ei;Xn.active?(Xn.update(Oh!=null?1/30:i),e=Xn.camera):qn.update(),Ma.uSunView.value.copy(ti.sun.position).normalize().transformDirection(e.matrixWorldInverse),Ma.uSunCol.value.copy(ti.sun.color).multiplyScalar(ti.sun.intensity/3.2),Ds.setCamera(e),Ds.render(ai.active||ai.xray),nr.render(as,e,window.innerWidth,window.innerHeight),jm++,jm===3&&(window.__ready=!0),requestAnimationFrame(e0)}e0();window.__victory={ship:ze,camera:Ei,controls:qn,scene:as,setView:Hd,cut:ai,iso:Xn,setMode:zd,ROOMS:wa,post:Ds,clashes:()=>zm(ze)};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
