(()=>{var ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mf=0,au=1,gf=2;var Oo=1,Cl=2,Ar=3,ps=0,un=1,De=2,nn=0,ms=1,Ds=2,lu=3,cu=4,Pl=5;var jn=100,xf=101,_f=102,vf=103,yf=104,Ns=200,Mf=201,Sf=202,Ef=203,hu=204,uu=205,Bo=206,bf=207,Ho=208,wf=209,Tf=210,Rf=211,Af=212,Cf=213,Pf=214,ja=0,Ja=1,Qa=2,ur=3,tl=4,el=5,nl=6,il=7,du=0,If=1,Lf=2,ui=0,zo=1,ko=2,Vo=3,Us=4,Go=5,Wo=6,Xo=7;var fu=300,gs=301,Fs=302,Il=303,Ll=304,qo=306,tn=1e3,_i=1001,sl=1002,en=1003,Df=1004;var Yo=1005;var wn=1006,Dl=1007;var xs=1008;var In=1009,pu=1010,mu=1011,Cr=1012,Nl=1013,di=1014,Jn=1015,je=1016,Ul=1017,Fl=1018,_s=1020,gu=35902,xu=35899,_u=1021,vu=1022,zn=1023,Mi=1026,bi=1027,Ol=1028,Bl=1029,vs=1030,Hl=1031;var zl=1033,Zo=33776,$o=33777,Ko=33778,jo=33779,kl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37488,$l=37489,Jo=37490,Kl=37491,jl=37808,Jl=37809,Ql=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Qo=36285,gc=36286;var so=2300,rl=2301,$a=2302,Zh=2303,$h=2400,Kh=2401,jh=2402;var Nf=3200;var ta=0,Uf=1,qi="",Fe="srgb",ro="srgb-linear",oo="linear",Se="srgb";var Ka=7680;var Ff=519,Of=512,Bf=513,Hf=514,xc=515,zf=516,kf=517,_c=518,Vf=519,yu=35044,vc=35048;var Mu="300 es",oi=2e3,dr=2001;function Hm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=ao("canvas");return i.style.display="block",i}var Ld={},fr=null;function lo(...i){let t="THREE."+i.shift();fr?fr("log",t,...i):console.log(t,...i)}function Wf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=Wf(i);let t="THREE."+i.shift();if(fr)fr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=Wf(i);let t="THREE."+i.shift();if(fr)fr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function As(...i){let t=i.join(" ");t in Ld||(Ld[t]=!0,ee(...i))}function Xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qf={[ja]:Ja,[Qa]:nl,[tl]:il,[ur]:el,[Ja]:ja,[nl]:Qa,[il]:tl,[el]:ur},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=1234567,to=Math.PI/180,pr=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Su(i,t){return(i%t+t)%t}function km(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vm(i,t,e){return i!==t?(e-i)/(t-i):0}function eo(i,t,e){return(1-e)*i+e*t}function Gm(i,t,e,n){return eo(i,t,1-Math.exp(-e*n))}function Wm(i,t=1){return t-Math.abs(Su(i,t*2)-t)}function Xm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ym(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zm(i,t){return i+Math.random()*(t-i)}function $m(i){return i*(.5-Math.random())}function Km(i){i!==void 0&&(Dd=i);let t=Dd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jm(i){return i*to}function Jm(i){return i*pr}function Qm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function t0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function e0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function n0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sn={DEG2RAD:to,RAD2DEG:pr,generateUUID:yi,clamp:ce,euclideanModulo:Su,mapLinear:km,inverseLerp:Vm,lerp:eo,damp:Gm,pingpong:Wm,smoothstep:Xm,smootherstep:qm,randInt:Ym,randFloat:Zm,randFloatSpread:$m,seededRandom:Km,degToRad:jm,radToDeg:Jm,isPowerOfTwo:Qm,ceilPowerOfTwo:t0,floorPowerOfTwo:e0,setQuaternionFromProperEuler:n0,normalize:Ae,denormalize:ri},$=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(p!==v||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+p*v;m<0&&(f=-f,d=-d,g=-g,v=-v,m=-m);let u=1-a;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);u=Math.sin(u*_)/y,a=Math.sin(a*_)/y,l=l*u+f*a,c=c*u+d*a,h=h*u+g*a,p=p*u+v*a}else{l=l*u+f*a,c=c*u+d*a,h=h*u+g*a,p=p*u+v*a;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*d-c*f,t[e+1]=l*g+h*f+c*p-a*d,t[e+2]=c*g+h*d+a*f-l*p,t[e+3]=h*g-a*p-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*p+c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p+f*d*g;break;case"YZX":this._x=f*h*p+c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p-f*d*g;break;case"XZY":this._x=f*h*p-c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p+f*d*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=n+a+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>p){let d=2*Math.sqrt(1+n-a-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>p){let d=2*Math.sqrt(1+a-n-p);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eh=new A,Nd=new We,oe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],u=s[6],_=s[1],y=s[4],x=s[7],S=s[2],E=s[5],b=s[8];return r[0]=o*v+a*_+l*S,r[3]=o*m+a*y+l*E,r[6]=o*u+a*x+l*b,r[1]=c*v+h*_+p*S,r[4]=c*m+h*y+p*E,r[7]=c*u+h*x+p*b,r[2]=f*v+d*_+g*S,r[5]=f*m+d*y+g*E,r[8]=f*u+d*x+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=p*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bh=new oe,Ud=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i0(){let i={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ro]:{primaries:t,whitePoint:n,transfer:oo,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var pe=i0();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qs,ol=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qs===void 0&&(qs=ao("canvas")),qs.width=t.width,qs.height=t.height;let s=qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},s0=0,mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wh(s[o].image)):r.push(wh(s[o]))}else r=wh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var r0=0,Th=new A,Fn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=wn,o=xs,a=zn,l=In,c=i.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=yi(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=fu;Fn.DEFAULT_ANISOTROPY=1;var Xe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(d+1)/2,S=(u+1)/2,E=(h+f)/4,b=(p+v)/4,M=(g+m)/4;return y>x&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=b/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=b/r,s=M/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Fn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends Fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends Fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Et=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,p,f,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,f,d,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,p,f,d,g,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*p,g=a*h,v=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*p,g=c*h,v=c*p;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*p,g=c*h,v=c*p;e[0]=f-v*a,e[4]=-o*p,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*p,g=a*h,v=a*p;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*p,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*p,e[8]=g*p+d,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*p+g,e[10]=f-v*p}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+v,e[5]=o*h,e[9]=d*p-g,e[2]=g*p-d,e[6]=a*h,e[10]=v*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o0,t,a0)}lookAt(t,e,n){let s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),es.crossVectors(n,Gn),es.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),es.crossVectors(n,Gn)),es.normalize(),Sa.crossVectors(Gn,es),s[0]=es.x,s[4]=Sa.x,s[8]=Gn.x,s[1]=es.y,s[5]=Sa.y,s[9]=Gn.y,s[2]=es.z,s[6]=Sa.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],u=n[14],_=n[3],y=n[7],x=n[11],S=n[15],E=s[0],b=s[4],M=s[8],w=s[12],T=s[1],P=s[5],L=s[9],N=s[13],I=s[2],U=s[6],z=s[10],H=s[14],et=s[3],F=s[7],j=s[11],K=s[15];return r[0]=o*E+a*T+l*I+c*et,r[4]=o*b+a*P+l*U+c*F,r[8]=o*M+a*L+l*z+c*j,r[12]=o*w+a*N+l*H+c*K,r[1]=h*E+p*T+f*I+d*et,r[5]=h*b+p*P+f*U+d*F,r[9]=h*M+p*L+f*z+d*j,r[13]=h*w+p*N+f*H+d*K,r[2]=g*E+v*T+m*I+u*et,r[6]=g*b+v*P+m*U+u*F,r[10]=g*M+v*L+m*z+u*j,r[14]=g*w+v*N+m*H+u*K,r[3]=_*E+y*T+x*I+S*et,r[7]=_*b+y*P+x*U+S*F,r[11]=_*M+y*L+x*z+S*j,r[15]=_*w+y*N+x*H+S*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],u=t[15],_=l*d-c*f,y=a*d-c*p,x=a*f-l*p,S=o*d-c*h,E=o*f-l*h,b=o*p-a*h;return e*(v*_-m*y+u*x)-n*(g*_-m*S+u*E)+s*(g*y-v*S+u*b)-r*(g*x-v*E+m*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],u=t[15],_=e*a-n*o,y=e*l-s*o,x=e*c-r*o,S=n*l-s*a,E=n*c-r*a,b=s*c-r*l,M=h*v-p*g,w=h*m-f*g,T=h*u-d*g,P=p*m-f*v,L=p*u-d*v,N=f*u-d*m,I=_*N-y*L+x*P+S*T-E*w+b*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*N-l*L+c*P)*U,t[1]=(s*L-n*N-r*P)*U,t[2]=(v*b-m*E+u*S)*U,t[3]=(f*E-p*b-d*S)*U,t[4]=(l*T-o*N-c*w)*U,t[5]=(e*N-s*T+r*w)*U,t[6]=(m*x-g*b-u*y)*U,t[7]=(h*b-f*x+d*y)*U,t[8]=(o*L-a*T+c*M)*U,t[9]=(n*T-e*L-r*M)*U,t[10]=(g*E-v*x+u*_)*U,t[11]=(p*x-h*E-d*_)*U,t[12]=(a*w-o*P-l*M)*U,t[13]=(e*P-n*w+s*M)*U,t[14]=(v*y-g*S-m*_)*U,t[15]=(h*S-p*y+f*_)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,f=r*c,d=r*h,g=r*p,v=o*h,m=o*p,u=a*p,_=l*c,y=l*h,x=l*p,S=n.x,E=n.y,b=n.z;return s[0]=(1-(v+u))*S,s[1]=(d+x)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+u))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+y)*b,s[9]=(m-_)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ys.set(s[0],s[1],s[2]).length(),a=Ys.set(s[4],s[5],s[6]).length(),l=Ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,p=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,e.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===oi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===dr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===oi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===dr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ys=new A,ni=new Et,o0=new A(0,0,0),a0=new A(1,1,1),es=new A,Sa=new A,Gn=new A,Od=new Et,Bd=new We,ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},l0=0,Hd=new A,Zs=new We,Ni=new Et,Ea=new A,Wr=new A,c0=new A,h0=new We,zd=new A(1,0,0),kd=new A(0,1,0),Vd=new A(0,0,1),Gd={type:"added"},u0={type:"removed"},$s={type:"childadded",child:null},Rh={type:"childremoved",child:null},ln=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new ki,n=new We,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new oe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(kd,t)}rotateZ(t){return this.rotateOnAxis(Vd,t)}translateOnAxis(t,e){return Hd.copy(t).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(kd,t)}translateZ(t){return this.translateOnAxis(Vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Wr,Ea,this.up):Ni.lookAt(Ea,Wr,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Ni),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gd),$s.child=t,this.dispatchEvent($s),$s.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u0),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gd),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,c0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,h0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new A(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},d0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Ah(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Su(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ah(o,r,t+1/3),this.g=Ah(o,r,t),this.b=Ah(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return pe.workingToColorSpace(Pn.copy(this),t),Math.round(ce(Pn.r*255,0,255))*65536+Math.round(ce(Pn.g*255,0,255))*256+Math.round(ce(Pn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Pn.copy(this),e);let n=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Fe){pe.workingToColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,s=Pn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(ba);let n=eo(ns.h,ba.h,e),s=eo(ns.s,ba.s,e),r=eo(ns.l,ba.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Qt;Qt.NAMES=Yf;var ho=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new A,Ui=new A,Ch=new A,Fi=new A,Ks=new A,js=new A,Wd=new A,Ph=new A,Ih=new A,Lh=new A,Dh=new Xe,Nh=new Xe,Uh=new Xe,Hi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ii.subVectors(t,e),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ii.subVectors(s,e),Ui.subVectors(n,e),Ch.subVectors(t,e);let o=ii.dot(ii),a=ii.dot(Ui),l=ii.dot(Ch),c=Ui.dot(Ui),h=Ui.dot(Ch),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dh.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Dh.fromBufferAttribute(t,e),Nh.fromBufferAttribute(t,n),Uh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dh,r.x),o.addScaledVector(Nh,r.y),o.addScaledVector(Uh,r.z),o}static isFrontFacing(t,e,n,s){return ii.subVectors(n,e),Ui.subVectors(t,e),ii.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ks.subVectors(s,n),js.subVectors(r,n),Ph.subVectors(t,n);let l=Ks.dot(Ph),c=js.dot(Ph);if(l<=0&&c<=0)return e.copy(n);Ih.subVectors(t,s);let h=Ks.dot(Ih),p=js.dot(Ih);if(h>=0&&p<=h)return e.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ks,o);Lh.subVectors(t,r);let d=Ks.dot(Lh),g=js.dot(Lh);if(g>=0&&d<=g)return e.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(js,a);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return Wd.subVectors(r,s),a=(p-h)/(p-h+(d-g)),e.copy(s).addScaledVector(Wd,a);let u=1/(m+v+f);return o=v*u,a=f*u,e.copy(n).addScaledVector(Ks,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(t.matrixWorld),this.union(wa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Ta.subVectors(this.max,Xr),Js.subVectors(t.a,Xr),Qs.subVectors(t.b,Xr),tr.subVectors(t.c,Xr),is.subVectors(Qs,Js),ss.subVectors(tr,Qs),bs.subVectors(Js,tr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-bs.z,bs.y,is.z,0,-is.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-is.y,is.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!Fh(e,Js,Qs,tr,Ta)||(e=[1,0,0,0,1,0,0,0,1],!Fh(e,Js,Qs,tr,Ta))?!1:(Ra.crossVectors(is,ss),e=[Ra.x,Ra.y,Ra.z],Fh(e,Js,Qs,tr,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new A,new A,new A,new A,new A,new A,new A,new A],si=new A,wa=new On,Js=new A,Qs=new A,tr=new A,is=new A,ss=new A,bs=new A,Xr=new A,Ta=new A,Ra=new A,ws=new A;function Fh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var an=new A,Aa=new $,f0=0,ye=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var uo=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fo=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},p0=new On,qr=new A,Oh=new A,li=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):p0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);let e=qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(Oh)),this.expandByPoint(qr.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},m0=0,Kn=new Et,Bh=new ln,er=new A,Wn=new On,Yr=new On,Mn=new A,ue=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hm(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Wn.min,Yr.min),Wn.expandByPoint(Mn),Mn.addVectors(Wn.max,Yr.max),Wn.expandByPoint(Mn)):(Wn.expandByPoint(Yr.min),Wn.expandByPoint(Yr.max))}Wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mn.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(t,c),Mn.add(er)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new A,l[M]=new A;let c=new A,h=new A,p=new A,f=new $,d=new $,g=new $,v=new A,m=new A;function u(M,w,T){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,T),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),h.sub(c),p.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(P),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[M].add(v),a[w].add(v),a[T].add(v),l[M].add(m),l[w].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let M=0,w=_.length;M<w;++M){let T=_[M],P=T.start,L=T.count;for(let N=P,I=P+L;N<I;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new A,x=new A,S=new A,E=new A;function b(M){S.fromBufferAttribute(s,M),E.copy(S);let w=a[M];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(E,w);let P=x.dot(l[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,P)}for(let M=0,w=_.length;M<w;++M){let T=_[M],P=T.start,L=T.count;for(let N=P,I=P+L;N<I;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,p=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[d++]}return new ye(f,h,p)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},po=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yu,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Un=new A,_r=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hh=new A,g0=new A,x0=new oe,Xn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hh.subVectors(n,e).cross(g0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||x0.getNormalMatrix(t),s=this.coplanarPoint(Hh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_0=0,ci=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ms,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=uu,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vr=class extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nr,Zr=new A,ir=new A,sr=new A,rr=new $,$r=new $,Zf=new Et,Ca=new A,Kr=new A,Pa=new A,Xd=new $,zh=new $,qd=new $,mo=class extends ln{constructor(t=new vr){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new po(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new _r(n,3,0,!1)),nr.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=nr,this.material=t,this.center=new $(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Zf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ia(Ca.set(-.5,-.5,0),sr,o,ir,s,r),Ia(Kr.set(.5,-.5,0),sr,o,ir,s,r),Ia(Pa.set(.5,.5,0),sr,o,ir,s,r),Xd.set(0,0),zh.set(1,0),qd.set(1,1);let a=t.ray.intersectTriangle(Ca,Kr,Pa,!1,Zr);if(a===null&&(Ia(Kr.set(-.5,.5,0),sr,o,ir,s,r),zh.set(0,1),a=t.ray.intersectTriangle(Ca,Pa,Kr,!1,Zr),a===null))return;let l=t.ray.origin.distanceTo(Zr);l<t.near||l>t.far||e.push({distance:l,point:Zr.clone(),uv:Hi.getInterpolation(Zr,Ca,Kr,Pa,Xd,zh,qd,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ia(i,t,e,n,s,r){rr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($r.x=r*rr.x-s*rr.y,$r.y=s*rr.x+r*rr.y):$r.copy(rr),i.copy(t),i.x+=$r.x,i.y+=$r.y,i.applyMatrix4(Zf)}var Bi=new A,kh=new A,La=new A,Da=new A,os=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kh.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),Da.copy(this.origin).sub(kh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(La),a=Da.dot(this.direction),l=-Da.dot(La),c=Da.lengthSq(),h=Math.abs(1-o*o),p,f,d,g;if(h>0)if(p=o*l-a,f=o*a-l,g=r*h,p>=0)if(f>=-g)if(f<=g){let v=1/h;p*=v,f*=v,d=p*(p+o*f+2*a)+f*(o*p+f+2*l)+c}else f=r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+f*(f+2*l)+c);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(kh).addScaledVector(La,f),d}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,v=e.y-o.y,m=e.z-o.z,u=n.x-o.x,_=n.y-o.y,y=n.z-o.z,x=Math.abs(l),S=Math.abs(c),E=Math.abs(h),b,M,w,T,P,L,N,I,U,z,H,et;if(x>=S&&x>=E?(w=l,L=p,U=g,et=u,l>=0?(b=c,M=h,T=f,P=d,N=v,I=m,z=_,H=y):(b=h,M=c,T=d,P=f,N=m,I=v,z=y,H=_)):S>=E?(w=c,L=f,U=v,et=_,c>=0?(b=h,M=l,T=d,P=p,N=m,I=g,z=y,H=u):(b=l,M=h,T=p,P=d,N=g,I=m,z=u,H=y)):(w=h,L=d,U=m,et=y,h>=0?(b=l,M=c,T=p,P=f,N=g,I=v,z=u,H=_):(b=c,M=l,T=f,P=p,N=v,I=g,z=_,H=u)),w===0)return null;let F=b/w,j=M/w,K=1/w,mt=T-F*L,yt=P-j*L,jt=N-F*U,Nt=I-j*U,Ht=z-F*et,O=H-j*et,G=Ht*Nt-O*jt,tt=mt*O-yt*Ht,ut=jt*yt-Nt*mt;if(s){if(G<0||tt<0||ut<0)return null}else if((G<0||tt<0||ut<0)&&(G>0||tt>0||ut>0))return null;let lt=G+tt+ut;if(lt===0)return null;let gt=K*(G*L+tt*U+ut*et);return(lt>0?gt<0:gt>0)?null:this.at(gt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vi=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yd=new Et,Ts=new os,Na=new li,Zd=new A,Ua=new A,Fa=new A,Oa=new A,Vh=new A,Ba=new A,$d=new A,Ha=new A,X=class extends ln{constructor(t=new ue,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(Vh.fromBufferAttribute(p,t),o?Ba.addScaledVector(Vh,h):Ba.addScaledVector(Vh.sub(e),h))}e.add(Ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(Na.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Na,Zd)===null||Ts.origin.distanceToSquared(Zd)>(t.far-t.near)**2))&&(Yd.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Yd),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],u=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,S=y;x<S;x+=3){let E=a.getX(x),b=a.getX(x+1),M=a.getX(x+2);s=za(this,u,t,n,c,h,p,E,b,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,u=v;m<u;m+=3){let _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=za(this,o,t,n,c,h,p,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],u=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,S=y;x<S;x+=3){let E=x,b=x+1,M=x+2;s=za(this,u,t,n,c,h,p,E,b,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,u=v;m<u;m+=3){let _=m,y=m+1,x=m+2;s=za(this,o,t,n,c,h,p,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function v0(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ps,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:i}}function za(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ua),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Oa);let h=v0(i,t,e,n,Ua,Fa,Oa,$d);if(h){let p=new A;Hi.getBarycoord($d,Ua,Fa,Oa,p),s&&(h.uv=Hi.getInterpolatedAttribute(s,a,l,c,p,new $)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,l,c,p,new $)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,p,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Hi.getNormal(Ua,Fa,Oa,f.normal),h.face=f,h.barycoord=p}return h}var Gi=class extends Fn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,h=en,p,f){super(null,o,a,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=class extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new Et,Kd=new Et,ka=[],jd=new On,y0=new Et,jr=new X,Jr=new li,cn=class extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,y0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),jd.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(jd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),Jr.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Kd.multiplyMatrices(n,or),jr.matrixWorld=Kd,jr.raycast(t,ka);for(let o=0,a=ka.length;o<a;o++){let l=ka[o];l.instanceId=r,l.object=this,e.push(l)}ka.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(s*this.count),s,this.count,Ol,Jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new li,M0=new $(.5,.5),Va=new A,yr=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],u=r[11],_=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,u-g,S-_).normalize(),s[1].setComponents(c+o,d+h,u+g,S+_).normalize(),s[2].setComponents(c+a,d+p,u+v,S+y).normalize(),s[3].setComponents(c-a,d-p,u-v,S-y).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,u-m,S-x).normalize();else if(s[4].setComponents(c-l,d-f,u-m,S-x).normalize(),e===oi)s[5].setComponents(c+l,d+f,u+m,S+x).normalize();else if(e===dr)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=M0.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Va.x=s.normal.x>0?t.max.x:t.min.x,Va.y=s.normal.y>0?t.max.y:t.min.y,Va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jd=new Et,Jh=new os,Ga=new li,Wa=new A,go=class extends ln{constructor(t=new ue,e=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,t.ray.intersectsSphere(Ga)===!1)return;Jd.copy(s).invert(),Jh.copy(t.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){let m=c.getX(g);Wa.fromBufferAttribute(p,m),Qd(Wa,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(p.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Wa.fromBufferAttribute(p,g),Qd(Wa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qd(i,t,e,n,s,r,o){let a=Jh.distanceSqToPoint(i);if(a<e){let l=new A;Jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xo=class extends Fn{constructor(t=[],e=gs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hn=class extends Fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends Fn{constructor(t,e,n=di,s,r,o,a=en,l=en,c,h=Mi,p=1){if(h!==Mi&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cl=class extends Si{constructor(t,e=di,n=gs,s,r,o=en,a=en,l,c=Mi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_o=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function g(v,m,u,_,y,x,S,E,b,M,w){let T=x/b,P=S/M,L=x/2,N=S/2,I=E/2,U=b+1,z=M+1,H=0,et=0,F=new A;for(let j=0;j<z;j++){let K=j*P-N;for(let mt=0;mt<U;mt++){let yt=mt*T-L;F[v]=yt*_,F[m]=K*y,F[u]=I,c.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[u]=E>0?1:-1,h.push(F.x,F.y,F.z),p.push(mt/b),p.push(1-j/M),H+=1}}for(let j=0;j<M;j++)for(let K=0;K<b;K++){let mt=f+K+U*j,yt=f+K+U*(j+1),jt=f+(K+1)+U*(j+1),Nt=f+(K+1)+U*j;l.push(mt,yt,Nt),l.push(yt,jt,Nt),et+=6}a.addGroup(d,et,w),d+=et,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oe=class i extends ue{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,p=Math.PI/2*t,f=e,d=2*p+f,g=n*2+r,v=s+1,m=new A,u=new A;for(let _=0;_<=g;_++){let y=0,x=0,S=0,E=0;if(_<=n){let w=_/n,T=w*Math.PI/2;x=-h-t*Math.cos(T),S=t*Math.sin(T),E=-t*Math.cos(T),y=w*p}else if(_<=n+r){let w=(_-n)/r;x=-h+w*e,S=t,E=0,y=p+w*f}else{let w=(_-n-r)/n,T=w*Math.PI/2;x=h+t*Math.sin(T),S=t*Math.cos(T),E=t*Math.sin(T),y=p+f+w*p}let b=Math.max(0,Math.min(1,y/d)),M=0;_===0?M=.5/s:_===g&&(M=-.5/s);for(let w=0;w<=s;w++){let T=w/s,P=T*Math.PI*2,L=Math.sin(P),N=Math.cos(P);u.x=-S*N,u.y=x,u.z=S*L,a.push(u.x,u.y,u.z),m.set(-S*N,E,S*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+M,b)}if(_>0){let w=(_-1)*v;for(let T=0;T<s;T++){let P=w+T,L=w+T+1,N=_*v+T,I=_*v+T+1;o.push(P,L,N),o.push(L,I,N)}}}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ps=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){let d=n+p/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jt=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],d=[],g=0,v=[],m=n/2,u=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function _(){let x=new A,S=new A,E=0,b=(e-t)/n;for(let M=0;M<=r;M++){let w=[],T=M/r,P=T*(e-t)+t;for(let L=0;L<=s;L++){let N=L/s,I=N*l+a,U=Math.sin(I),z=Math.cos(I);S.x=P*U,S.y=-T*n+m,S.z=P*z,p.push(S.x,S.y,S.z),x.set(U,b,z).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-T),w.push(g++)}v.push(w)}for(let M=0;M<s;M++)for(let w=0;w<r;w++){let T=v[w][M],P=v[w+1][M],L=v[w+1][M+1],N=v[w][M+1];(t>0||w!==0)&&(h.push(T,P,N),E+=3),(e>0||w!==r-1)&&(h.push(P,L,N),E+=3)}c.addGroup(u,E,0),u+=E}function y(x){let S=g,E=new $,b=new A,M=0,w=x===!0?t:e,T=x===!0?1:-1;for(let L=1;L<=s;L++)p.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let I=L/s*l+a,U=Math.cos(I),z=Math.sin(I);b.x=w*z,b.y=m*T,b.z=w*U,p.push(b.x,b.y,b.z),f.push(0,T,0),E.x=U*.5+.5,E.y=z*.5*T+.5,d.push(E.x,E.y),g++}for(let L=0;L<s;L++){let N=S+L,I=P+L;x===!0?h.push(I,I+1,N):h.push(I+1,I,N),M+=3}c.addGroup(u,M,x===!0?1:2),u+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},as=class i extends Jt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new $:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,s=[],r=[],o=[],a=new A,l=new Et;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new $){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*p+this.aX,c=f*p+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hl=class extends Sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+p)+(l-a)/p;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var tf=new A,ef=new A,Gh=new Eu,Wh=new Eu,Xh=new Eu,gn=class extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ef.subVectors(s[0],s[1]).add(s[0]),c=ef);let p=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(tf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Gh.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,g,v,m),Wh.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,g,v,m),Xh.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Wh.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),Xh.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return n.set(Gh.calc(l),Wh.calc(l),Xh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function S0(i,t){let e=1-i;return e*e*t}function E0(i,t){return 2*(1-i)*i*t}function b0(i,t){return i*i*t}function no(i,t,e,n){return S0(i,t)+E0(i,e)+b0(i,n)}function w0(i,t){let e=1-i;return e*e*e*t}function T0(i,t){let e=1-i;return 3*e*e*i*t}function R0(i,t){return 3*(1-i)*i*i*t}function A0(i,t){return i*i*i*t}function io(i,t,e,n,s){return w0(i,t)+T0(i,e)+R0(i,n)+A0(i,s)}var vo=class extends qn{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(t,s.x,r.x,o.x,a.x),io(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends qn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(t,s.x,r.x,o.x,a.x),io(t,s.y,r.y,o.y,a.y),io(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends qn{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends qn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends qn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(no(t,s.x,r.x,o.x),no(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ls=class extends qn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(no(t,s.x,r.x,o.x),no(t,s.y,r.y,o.y),no(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(nf(a,l.x,c.x,h.x,p.x),nf(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this}},fl=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:gn,CubicBezierCurve:vo,CubicBezierCurve3:ul,EllipseCurve:Sr,LineCurve:yo,LineCurve3:dl,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:ls,SplineCurve:So}),pl=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fl[s.type]().fromJSON(s))}return this}},Xi=class extends pl{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yo(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mo(this.currentPoint.clone(),new $(t,e),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new vo(this.currentPoint.clone(),new $(t,e),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new So(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ke=class extends Xi{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xi().fromJSON(s))}return this}};function C0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=$f(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=N0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,p=l;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return Eo(r,o,e,a,l,c,0),o}function $f(i,t,e,n,s){let r;if(s===X0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=sf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=sf(o/n|0,i[o],i[o+1],r);return r&&Er(r,r.next)&&(wo(r),r=r.next),r}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||Ye(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Eo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&H0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?I0(i,n,s,r):P0(i)){t.push(l.i,i.i,c.i),wo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=L0(Is(i),t),Eo(i,t,e,n,s,r,2)):o===2&&D0(i,t,e,n,s,r):Eo(Is(i),t,e,n,s,r,1);break}}}function P0(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),p=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=p&&g.y<=d&&Qr(s,a,r,l,o,c,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,p,f),v=Math.max(a,l,c),m=Math.max(h,p,f),u=Qh(d,g,t,e,n),_=Qh(v,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=u&&x&&x.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Qr(a,h,l,p,c,f,y.x,y.y)&&Ye(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Qr(a,h,l,p,c,f,x.x,x.y)&&Ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Qr(a,h,l,p,c,f,y.x,y.y)&&Ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Qr(a,h,l,p,c,f,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function L0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Er(n,s)&&jf(n,e,e.next,s)&&bo(n,s)&&bo(s,n)&&(t.push(n.i,e.i,s.i),wo(e),wo(e.next),e=i=s),e=e.next}while(e!==i);return Is(e)}function D0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V0(o,a)){let l=Jf(o,a);o=Is(o,o.next),l=Is(l,l.next),Eo(o,t,e,n,s,r,0),Eo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function N0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=$f(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(k0(c))}s.sort(U0);for(let r=0;r<s.length;r++)e=F0(s[r],e);return e}function U0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function F0(i,t){let e=O0(i,t);if(!e)return t;let n=Jf(e,i);return Is(n,n.next),Is(e,e.next)}function O0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);bo(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&B0(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function B0(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function H0(i,t,e,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,z0(s)}function z0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Qh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function k0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Qr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Kf(i,t,e,n,s,r,o,a)}function V0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!G0(i,t)&&(bo(i,t)&&bo(t,i)&&W0(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Er(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function jf(i,t,e,n){let s=qa(Ye(i,t,e)),r=qa(Ye(i,t,n)),o=qa(Ye(e,n,i)),a=qa(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Xa(i,e,t)||r===0&&Xa(i,n,t)||o===0&&Xa(e,i,n)||a===0&&Xa(e,t,n))}function Xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function G0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bo(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function W0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jf(i,t){let e=tu(i.i,i.x,i.y),n=tu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sf(i,t,e,n){let s=tu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function X0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var eu=class{static triangulate(t,e,n=2){return C0(t,e,n)}},vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];rf(t),of(n,t);let o=t.length;e.forEach(rf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,of(n,e[l]);let a=eu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function of(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Tn=class i extends ue{constructor(t=new Ke([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:q0,y,x=!1,S,E,b,M;if(u){y=u.getSpacedPoints(h),x=!0,f=!1;let J=u.isCatmullRomCurve3?u.closed:!1;S=u.computeFrenetFrames(h,J),E=new A,b=new A,M=new A}f||(m=0,d=0,g=0,v=0);let w=a.extractPoints(c),T=w.shape,P=w.holes;if(!vi.isClockWise(T)){T=T.reverse();for(let J=0,st=P.length;J<st;J++){let rt=P[J];vi.isClockWise(rt)&&(P[J]=rt.reverse())}}function N(J){let rt=10000000000000001e-36,ct=J[0];for(let dt=1;dt<=J.length;dt++){let Bt=dt%J.length,Dt=J[Bt],kt=Dt.x-ct.x,te=Dt.y-ct.y,B=kt*kt+te*te,_e=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(ct.x),Math.abs(ct.y)),le=rt*_e*_e;if(B<=le){J.splice(Bt,1),dt--;continue}ct=Dt}}N(T),P.forEach(N);let I=P.length,U=T;for(let J=0;J<I;J++){let st=P[J];T=T.concat(st)}function z(J,st,rt){return st||ne("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(st,rt)}let H=T.length;function et(J,st,rt){let ct,dt,Bt,Dt=J.x-st.x,kt=J.y-st.y,te=rt.x-J.x,B=rt.y-J.y,_e=Dt*Dt+kt*kt,le=Dt*B-kt*te;if(Math.abs(le)>Number.EPSILON){let D=Math.sqrt(_e),R=Math.sqrt(te*te+B*B),W=st.x-kt/D,q=st.y+Dt/D,nt=rt.x-B/R,ft=rt.y+te/R,_t=((nt-W)*B-(ft-q)*te)/(Dt*B-kt*te);ct=W+Dt*_t-J.x,dt=q+kt*_t-J.y;let it=ct*ct+dt*dt;if(it<=2)return new $(ct,dt);Bt=Math.sqrt(it/2)}else{let D=!1;Dt>Number.EPSILON?te>Number.EPSILON&&(D=!0):Dt<-Number.EPSILON?te<-Number.EPSILON&&(D=!0):Math.sign(kt)===Math.sign(B)&&(D=!0),D?(ct=-kt,dt=Dt,Bt=Math.sqrt(_e)):(ct=Dt,dt=kt,Bt=Math.sqrt(_e/2))}return new $(ct/Bt,dt/Bt)}let F=[];for(let J=0,st=U.length,rt=st-1,ct=J+1;J<st;J++,rt++,ct++)rt===st&&(rt=0),ct===st&&(ct=0),F[J]=et(U[J],U[rt],U[ct]);let j=[],K,mt=F.concat();for(let J=0,st=I;J<st;J++){let rt=P[J];K=[];for(let ct=0,dt=rt.length,Bt=dt-1,Dt=ct+1;ct<dt;ct++,Bt++,Dt++)Bt===dt&&(Bt=0),Dt===dt&&(Dt=0),K[ct]=et(rt[ct],rt[Bt],rt[Dt]);j.push(K),mt=mt.concat(K)}let yt;if(m===0)yt=vi.triangulateShape(U,P);else{let J=[],st=[];for(let rt=0;rt<m;rt++){let ct=rt/m,dt=d*Math.cos(ct*Math.PI/2),Bt=g*Math.sin(ct*Math.PI/2)+v;for(let Dt=0,kt=U.length;Dt<kt;Dt++){let te=z(U[Dt],F[Dt],Bt);tt(te.x,te.y,-dt),ct===0&&J.push(te)}for(let Dt=0,kt=I;Dt<kt;Dt++){let te=P[Dt];K=j[Dt];let B=[];for(let _e=0,le=te.length;_e<le;_e++){let D=z(te[_e],K[_e],Bt);tt(D.x,D.y,-dt),ct===0&&B.push(D)}ct===0&&st.push(B)}}yt=vi.triangulateShape(J,st)}let jt=yt.length,Nt=g+v;for(let J=0;J<H;J++){let st=f?z(T[J],mt[J],Nt):T[J];x?(b.copy(S.normals[0]).multiplyScalar(st.x),E.copy(S.binormals[0]).multiplyScalar(st.y),M.copy(y[0]).add(b).add(E),tt(M.x,M.y,M.z)):tt(st.x,st.y,0)}for(let J=1;J<=h;J++)for(let st=0;st<H;st++){let rt=f?z(T[st],mt[st],Nt):T[st];x?(b.copy(S.normals[J]).multiplyScalar(rt.x),E.copy(S.binormals[J]).multiplyScalar(rt.y),M.copy(y[J]).add(b).add(E),tt(M.x,M.y,M.z)):tt(rt.x,rt.y,p/h*J)}for(let J=m-1;J>=0;J--){let st=J/m,rt=d*Math.cos(st*Math.PI/2),ct=g*Math.sin(st*Math.PI/2)+v;for(let dt=0,Bt=U.length;dt<Bt;dt++){let Dt=z(U[dt],F[dt],ct);tt(Dt.x,Dt.y,p+rt)}for(let dt=0,Bt=P.length;dt<Bt;dt++){let Dt=P[dt];K=j[dt];for(let kt=0,te=Dt.length;kt<te;kt++){let B=z(Dt[kt],K[kt],ct);x?tt(B.x,B.y+y[h-1].y,y[h-1].x+rt):tt(B.x,B.y,p+rt)}}}Ht(),O();function Ht(){let J=s.length/3;if(f){let st=0,rt=H*st;for(let ct=0;ct<jt;ct++){let dt=yt[ct];ut(dt[2]+rt,dt[1]+rt,dt[0]+rt)}st=h+m*2,rt=H*st;for(let ct=0;ct<jt;ct++){let dt=yt[ct];ut(dt[0]+rt,dt[1]+rt,dt[2]+rt)}}else{for(let st=0;st<jt;st++){let rt=yt[st];ut(rt[2],rt[1],rt[0])}for(let st=0;st<jt;st++){let rt=yt[st];ut(rt[0]+H*h,rt[1]+H*h,rt[2]+H*h)}}n.addGroup(J,s.length/3-J,0)}function O(){let J=s.length/3,st=0;G(U,st),st+=U.length;for(let rt=0,ct=P.length;rt<ct;rt++){let dt=P[rt];G(dt,st),st+=dt.length}n.addGroup(J,s.length/3-J,1)}function G(J,st){let rt=J.length;for(;--rt>=0;){let ct=rt,dt=rt-1;dt<0&&(dt=J.length-1);for(let Bt=0,Dt=h+m*2;Bt<Dt;Bt++){let kt=H*Bt,te=H*(Bt+1),B=st+ct+kt,_e=st+dt+kt,le=st+dt+te,D=st+ct+te;lt(B,_e,le,D)}}}function tt(J,st,rt){l.push(J),l.push(st),l.push(rt)}function ut(J,st,rt){gt(J),gt(st),gt(rt);let ct=s.length/3,dt=_.generateTopUV(n,s,ct-3,ct-2,ct-1);zt(dt[0]),zt(dt[1]),zt(dt[2])}function lt(J,st,rt,ct){gt(J),gt(st),gt(ct),gt(st),gt(rt),gt(ct);let dt=s.length/3,Bt=_.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);zt(Bt[0]),zt(Bt[1]),zt(Bt[3]),zt(Bt[1]),zt(Bt[2]),zt(Bt[3])}function gt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function zt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Y0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fl[s.type]().fromJSON(s)),new i(n,t.options)}},q0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-p),new $(f,1-g),new $(v,1-u)]:[new $(a,1-l),new $(h,1-p),new $(d,1-g),new $(m,1-u)]}};function Y0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sn=class i extends ue{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new A,f=new $,d=new A,g=new A,v=new A,m=0,u=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,d.x=u*1,d.y=-m,d.z=u*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*s,x=Math.sin(y),S=Math.cos(y);for(let E=0;E<=t.length-1;E++){p.x=t[E].x*x,p.y=t[E].y,p.z=t[E].x*S,o.push(p.x,p.y,p.z),f.x=_/e,f.y=E/(t.length-1),a.push(f.x,f.y);let b=l[3*E+0]*x,M=l[3*E+1],w=l[3*E+0]*S;c.push(b,M,w)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let x=y+_*t.length,S=x,E=x+t.length,b=x+t.length+1,M=x+1;r.push(S,E,M),r.push(b,M,E)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var hi=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,f=e/l,d=[],g=[],v=[],m=[];for(let u=0;u<h;u++){let _=u*f-o;for(let y=0;y<c;y++){let x=y*p-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){let y=_+c*u,x=_+c*(u+1),S=_+1+c*(u+1),E=_+1+c*u;d.push(y,x,E),d.push(x,S,E)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var br=class i extends ue{constructor(t=new Ke([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function c(h){let p=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;vi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,u=g.length;m<u;m++){let _=g[m];vi.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=vi.triangulateShape(d,g);for(let m=0,u=g.length;m<u;m++){let _=g[m];d=d.concat(_)}for(let m=0,u=d.length;m<u;m++){let _=d[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,u=v.length;m<u;m++){let _=v[m],y=_[0]+p,x=_[1]+p,S=_[2]+p;n.push(y,x,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Z0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Z0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var me=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new A,f=new A,d=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){let _=[],y=u/n,x=o+y*a,S=t*Math.cos(x),E=Math.sqrt(t*t-S*S),b=0;u===0&&o===0?b=.5/e:u===n&&l===Math.PI&&(b=-.5/e);for(let M=0;M<=e;M++){let w=M/e,T=s+w*r;p.x=-E*Math.cos(T),p.y=S,p.z=E*Math.sin(T),g.push(p.x,p.y,p.z),f.copy(p).normalize(),v.push(f.x,f.y,f.z),m.push(w+b,1-y),_.push(c++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){let y=h[u][_+1],x=h[u][_],S=h[u+1][_],E=h[u+1][_+1];(u!==0||o>0)&&d.push(y,x,E),(u!==n-1||l<Math.PI)&&d.push(x,S,E)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var be=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],f=new A,d=new A,g=new A;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let u=0;u<=s;u++){let _=u/s*r;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),p.push(u/s),p.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let u=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,y=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(u,_,x),l.push(_,y,x)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var xn=class i extends ue{constructor(t=new ls(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new $,h=new A,p=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),u()}function m(y){h=t.getPointAt(y/e,h);let x=o.normals[y],S=o.binormals[y];for(let E=0;E<=s;E++){let b=E/s*Math.PI*2,M=Math.sin(b),w=-Math.cos(b);l.x=w*x.x+M*S.x,l.y=w*x.y+M*S.y,l.z=w*x.z+M*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let S=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),b=(s+1)*y+x,M=(s+1)*(y-1)+x;g.push(S,E,M),g.push(E,b,M)}}function _(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new fl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(af(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(af(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ln(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function af(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var dn={clone:Os,merge:Ln},K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new $().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wr=class extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var To=class extends ci{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var ml=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gl=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var cs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends cs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kh:r=t,a=2*e-n;break;case jh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kh:o=t,l=2*n-e;break;case jh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,u=-f*m+2*f*v-f*g,_=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let S=0;S!==a;++S)r[S]=u*o[h+S]+_*o[c+S]+y*o[l+S]+x*o[p+S];return r}},_l=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*p+o[l+f]*h;return r}},vl=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yl=class extends cs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let v=o[c+g],m=o[l+g],u=d*f+g*2,_=p[u],y=p[u+1],x=t*f+g*2,S=h[x],E=h[x+1],b=Q0(n,e,_,S,s);r[g]=Qf(b,v,y,E,m)}return r}};function Qf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function J0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Q0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Qf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=J0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),qh(t.settings)&&(n.settings={inTangents:ar(t.settings.inTangents,Array),outTangents:ar(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new yl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case rl:e=this.InterpolantFactoryMethodLinear;break;case $a:e=this.InterpolantFactoryMethodSmooth;break;case Zh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return rl;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;qh(this.settings)&&(lf(this.settings.inTangents,t),lf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&zm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,f=p-n,d=p+n;for(let g=0;g!==n;++g){let v=e[p+g];if(v!==e[f+g]||v!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[p+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,qh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=rl;var hs=class extends Yn{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=so;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};Ml.prototype.ValueTypeName="color";var Sl=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};Sl.prototype.ValueTypeName="number";var El=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)We.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ro=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Yn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=so;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};bl.prototype.ValueTypeName="vector";var wl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tp=new wl,Tl=class{constructor(t){this.manager=t!==void 0?t:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ao=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Yh=new Et,cf=new A,hf=new A,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===dr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ya=new A,Za=new We,xi=new A,Po=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ya,Za,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ya,Za,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new A,uf=new $,df=new $,bn=class extends Po{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,uf,df),e.subVectors(df,uf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nu=class extends Co{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},Ls=class extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ei=class extends Po{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},iu=class extends Co{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new iu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Lo=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var lr=-90,cr=1,Rl=class extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new bn(lr,cr,t,e);r.layers=this.layers,this.add(r);let o=new bn(lr,cr,t,e);o.layers=this.layers,this.add(o);let a=new bn(lr,cr,t,e);a.layers=this.layers,this.add(a);let l=new bn(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new bn(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Al=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Do=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=tg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tg(){this._document.hidden===!1&&this.reset()}var wu="\\[\\]\\.:\\/",eg=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",ng="[^"+wu.replace("\\.","")+"]",ig=/((?:WC+[\/:])*)/.source.replace("WC",Tu),sg=/(WCOD+)?/.source.replace("WCOD",ng),rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),ag=new RegExp("^"+ig+sg+rg+og+"$"),lg=["material","materials","bones","map"],su=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(eg,"")}static parseTrackName(t){let e=ag.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=su;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TM=new Float32Array(1);var ff=new Et,No=class{constructor(t,e,n=0,s=1/0){this.ray=new os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(t,e=!0,n=[]){return ru(t,this,n,e),n.sort(pf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ru(t[s],this,n,e);return n.sort(pf),n}};function pf(i,t){return i.distance-t.distance}function ru(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ru(r[o],t,e,!0)}}var Uo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Rr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ou=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Fo=class extends ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ru(i,t,e,n){let s=cg(n);switch(e){case _u:return i*t;case Ol:return i*t/s.components*s.byteLength;case Bl:return i*t/s.components*s.byteLength;case vs:return i*t*2/s.components*s.byteLength;case Hl:return i*t*2/s.components*s.byteLength;case vu:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case zl:return i*t*4/s.components*s.byteLength;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Wl:return Math.max(i,16)*Math.max(t,8)/4;case kl:case Gl:return Math.max(i,8)*Math.max(t,8)/2;case Xl:case ql:case Zl:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yl:case Jo:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uc:case dc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qo:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cg(i){switch(i){case In:case pu:return{byteLength:1,components:1};case Cr:case mu:case je:return{byteLength:2,components:1};case Ul:case Fl:return{byteLength:2,components:4};case di:case Nl:case Jn:return{byteLength:4,components:1};case gu:case xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,p[f]=v)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let v=p[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mg=`#ifdef USE_AOMAP
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
#endif`,Sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ox=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
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
#endif`,fx=`uniform sampler2D dfgLUT;
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,e_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#define LAMBERT
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define MATCAP
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
}`,N_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,O_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,H_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,k_=`#define TOON
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
}`,V_=`#define TOON
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
}`,G_=`uniform float size;
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#include <common>
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
}`,q_=`uniform vec3 color;
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
}`,Y_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:xg,alphamap_pars_fragment:_g,alphatest_fragment:vg,alphatest_pars_fragment:yg,aomap_fragment:Mg,aomap_pars_fragment:Sg,batching_pars_vertex:Eg,batching_vertex:bg,begin_vertex:wg,beginnormal_vertex:Tg,bsdfs:Rg,iridescence_fragment:Ag,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Dg,color_fragment:Ng,color_pars_fragment:Ug,color_pars_vertex:Fg,color_vertex:Og,common:Bg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:zg,displacementmap_pars_vertex:kg,displacementmap_vertex:Vg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Wg,colorspace_fragment:Xg,colorspace_pars_fragment:qg,envmap_fragment:Yg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:$g,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:ax,envmap_vertex:jg,fog_vertex:Jg,fog_pars_vertex:Qg,fog_fragment:tx,fog_pars_fragment:ex,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_fragment:sx,lights_lambert_pars_fragment:rx,lights_pars_begin:ox,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:hx,lights_phong_pars_fragment:ux,lights_physical_fragment:dx,lights_physical_pars_fragment:fx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,lightprobes_pars_fragment:xx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:Mx,map_fragment:Sx,map_pars_fragment:Ex,map_particle_fragment:bx,map_particle_pars_fragment:wx,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Ax,morphcolor_vertex:Cx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Nx,normal_pars_fragment:Ux,normal_pars_vertex:Fx,normal_vertex:Ox,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Vx,opaque_fragment:Gx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:Zx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:t_,skinbase_vertex:e_,skinning_pars_vertex:n_,skinning_vertex:i_,skinnormal_vertex:s_,specularmap_fragment:r_,specularmap_pars_fragment:o_,tonemapping_fragment:a_,tonemapping_pars_fragment:l_,transmission_fragment:c_,transmission_pars_fragment:h_,uv_pars_fragment:u_,uv_pars_vertex:d_,uv_vertex:f_,worldpos_vertex:p_,background_vert:m_,background_frag:g_,backgroundCube_vert:x_,backgroundCube_frag:__,cube_vert:v_,cube_frag:y_,depth_vert:M_,depth_frag:S_,distance_vert:E_,distance_frag:b_,equirect_vert:w_,equirect_frag:T_,linedashed_vert:R_,linedashed_frag:A_,meshbasic_vert:C_,meshbasic_frag:P_,meshlambert_vert:I_,meshlambert_frag:L_,meshmatcap_vert:D_,meshmatcap_frag:N_,meshnormal_vert:U_,meshnormal_frag:F_,meshphong_vert:O_,meshphong_frag:B_,meshphysical_vert:H_,meshphysical_frag:z_,meshtoon_vert:k_,meshtoon_frag:V_,points_vert:G_,points_frag:W_,shadow_vert:X_,shadow_frag:q_,sprite_vert:Y_,sprite_frag:Z_},bt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ti={basic:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Ln([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Ln([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Ln([bt.points,bt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Ln([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Ln([bt.common,bt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Ln([bt.sprite,bt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Ln([bt.common,bt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Ln([bt.lights,bt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ti.physical={uniforms:Ln([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var yc={r:0,b:0,g:0},$_=new Et,Ep=new oe;Ep.set(-1,0,0,0,1,0,0,0,1);function K_(i,t,e,n,s,r){let o=new Qt(0),a=s===!0?0:1,l,c,h=null,p=0,f=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let x=_.backgroundBlurriness>0;y=t.get(y,x)}return y}function g(_){let y=!1,x=d(_);x===null?m(o,a):x&&x.isColor&&(m(x,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,y){let x=d(y);x&&(x.isCubeTexture||x.mapping===qo)?(c===void 0&&(c=new X(new Gt(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:Os(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($_.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ep),c.material.toneMapped=pe.getTransfer(x.colorSpace)!==Se,(h!==x||p!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new X(new hi(2,2),new Ee({name:"BackgroundMaterial",uniforms:Os(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=pe.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(yc,bu(i)),e.buffers.color.setClear(yc.r,yc.g,yc.b,y,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:v,dispose:u}}function j_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,L,N,I,U){let z=!1,H=p(P,I,N,L);r!==H&&(r=H,c(r.object)),z=d(P,I,N,U),z&&g(P,I,N,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(P,L,N,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function p(P,L,N,I){let U=I.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let H=P.isInstancedMesh===!0?P.id:0,et=z[H];et===void 0&&(et={},z[H]=et);let F=et[N.id];F===void 0&&(F={},et[N.id]=F);let j=F[U];return j===void 0&&(j=f(l()),F[U]=j),j}function f(P){let L=[],N=[],I=[];for(let U=0;U<e;U++)L[U]=0,N[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:I,object:P,attributes:{},index:null}}function d(P,L,N,I){let U=r.attributes,z=L.attributes,H=0,et=N.getAttributes();for(let F in et)if(et[F].location>=0){let K=U[F],mt=z[F];if(mt===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),K===void 0||K.attribute!==mt||mt&&K.data!==mt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(P,L,N,I){let U={},z=L.attributes,H=0,et=N.getAttributes();for(let F in et)if(et[F].location>=0){let K=z[F];K===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let mt={};mt.attribute=K,K&&K.data&&(mt.data=K.data),U[F]=mt,H++}r.attributes=U,r.attributesNum=H,r.index=I}function v(){let P=r.newAttributes;for(let L=0,N=P.length;L<N;L++)P[L]=0}function m(P){u(P,0)}function u(P,L){let N=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;N[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),U[P]!==L&&(i.vertexAttribDivisor(P,L),U[P]=L)}function _(){let P=r.newAttributes,L=r.enabledAttributes;for(let N=0,I=L.length;N<I;N++)L[N]!==P[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function y(P,L,N,I,U,z,H){H===!0?i.vertexAttribIPointer(P,L,N,U,z):i.vertexAttribPointer(P,L,N,I,U,z)}function x(P,L,N,I){v();let U=I.attributes,z=N.getAttributes(),H=L.defaultAttributeValues;for(let et in z){let F=z[et];if(F.location>=0){let j=U[et];if(j===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let K=j.normalized,mt=j.itemSize,yt=t.get(j);if(yt===void 0)continue;let jt=yt.buffer,Nt=yt.type,Ht=yt.bytesPerElement,O=Nt===i.INT||Nt===i.UNSIGNED_INT||j.gpuType===Nl;if(j.isInterleavedBufferAttribute){let G=j.data,tt=G.stride,ut=j.offset;if(G.isInstancedInterleavedBuffer){for(let lt=0;lt<F.locationSize;lt++)u(F.location+lt,G.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let lt=0;lt<F.locationSize;lt++)m(F.location+lt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let lt=0;lt<F.locationSize;lt++)y(F.location+lt,mt/F.locationSize,Nt,K,tt*Ht,(ut+mt/F.locationSize*lt)*Ht,O)}else{if(j.isInstancedBufferAttribute){for(let G=0;G<F.locationSize;G++)u(F.location+G,j.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let G=0;G<F.locationSize;G++)m(F.location+G);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let G=0;G<F.locationSize;G++)y(F.location+G,mt/F.locationSize,Nt,K,mt*Ht,mt/F.locationSize*G*Ht,O)}}else if(H!==void 0){let K=H[et];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(F.location,K);break;case 3:i.vertexAttrib3fv(F.location,K);break;case 4:i.vertexAttrib4fv(F.location,K);break;default:i.vertexAttrib1fv(F.location,K)}}}}_()}function S(){w();for(let P in n){let L=n[P];for(let N in L){let I=L[N];for(let U in I){let z=I[U];for(let H in z)h(z[H].object),delete z[H];delete I[U]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let N in L){let I=L[N];for(let U in I){let z=I[U];for(let H in z)h(z[H].object),delete z[H];delete I[U]}}delete n[P.id]}function b(P){for(let L in n){let N=n[L];for(let I in N){let U=N[I];if(U[P.id]===void 0)continue;let z=U[P.id];for(let H in z)h(z[H].object),delete z[H];delete U[P.id]}}}function M(P){for(let L in n){let N=n[L],I=P.isInstancedMesh===!0?P.id:0,U=N[I];if(U!==void 0){for(let z in U){let H=U[z];for(let et in H)h(H[et].object),delete H[et];delete U[z]}delete N[I],Object.keys(N).length===0&&delete n[L]}}}function w(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function J_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Q_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==zn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let M=b===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==In&&b!==Jn&&!M&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:E}}function tv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Xn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,x=u.clippingState||null;l.value=x,x=h(g,f,y,d);for(let S=0;S!==y;++S)x[S]=e[S];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,d,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=d+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,x=d;y!==v;++y,x+=4)o.copy(p[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ir=4,ev=6,nv=20,iv=256,ea=new Ei,ep=new Qt,Au=null,Cu=0,Pu=0,Iu=!1,sv=new A,Bs=new A,Dr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=sv}=r;Au=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Au,Cu,Pu),this._renderer.xr.enabled=Iu,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Au=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:je,format:zn,colorSpace:ro,depthBuffer:!1},s=np(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rv(r)),this._blurMaterial=av(r,t,e),this._ggxMaterial=ov(r,t,e)}return s}_compileMaterial(t){let e=new X(new ue,t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s,r){let l=new bn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(ep),p.toneMapping=ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new Gt,new Vi({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,u=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,u=!0):(m.color.copy(ep),u=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Pr(s,x*S,y>2?S:0,S,S),p.setRenderTarget(s),u&&p.render(v,l),p.render(t,l)}p.toneMapping=d,p.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=c*1.25,d=p*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ir?n-g+Ir:0),u=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Pr(r,m,u,3*v,2*v),s.setRenderTarget(r),s.render(a,ea),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Pr(t,m,u,3*v,2*v),s.setRenderTarget(t),s.render(a,ea)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ir?s-this._lodMax+Ir:0),f=4*(this._cubeSize-h);Pr(e,p,f,3*h,2*h),o.setRenderTarget(e),o.render(l,ea)}};function rv(i){let t=[],e=[],n=i,s=i-Ir+1+ev;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,f=6,d=3,g=new Float32Array(d*f*p),v=new Float32Array(d*f*p);for(let u=0;u<p;u++){let _=u%3*2/3-1,y=u>2?0:-1,x=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];g.set(x,d*f*u);for(let S=0;S<f;S++){let E=h[S*2]*2-1,b=h[S*2+1]*2-1;u===0?Bs.set(1,b,E):u===1?Bs.set(-E,1,-b):u===2?Bs.set(-E,b,1):u===3?Bs.set(-1,b,-E):u===4?Bs.set(-E,-1,b):Bs.set(E,b,-1),Bs.toArray(v,(u*f+S)*d)}}let m=new ue;m.setAttribute("position",new ye(g,d)),m.setAttribute("outputDirection",new ye(v,d)),e.push(new X(m,null)),n>Ir&&n--}return{lodMeshes:e,sizeLods:t}}function np(i,t,e){let n=new ke(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ov(i,t,e){return new Ee({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function av(i,t,e){return new Ee({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function ip(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function sp(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sc=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:nn});r.uniforms.tEquirect.value=e;let o=new X(s,r),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=wn),new Rl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function lv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Il||d===Ll)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new Sc(g.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Il||d===Ll,v=d===gs||d===Fs;if(g||v){let m=e.get(f),u=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new Dr(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Dr(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Il?f.mapping=gs:d===Ll&&(f.mapping=Fs),f}function l(f){let d=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function cv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function hv(i,t,e,n){let s={},r=new WeakMap;function o(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(p){let f=p.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(p){let f=[],d=p.index,g=p.attributes.position,v=0;if(g===void 0)return;if(d!==null){let _=d.array;v=d.version;for(let y=0,x=_.length;y<x;y+=3){let S=_[y+0],E=_[y+1],b=_[y+2];f.push(S,E,E,b,b,S)}}else{let _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){let S=y+0,E=y+1,b=y+2;f.push(S,E,E,b,b,S)}}let m=new(g.count>=65535?fo:uo)(f,1);m.version=v;let u=r.get(p);u&&t.remove(u),r.set(p,m)}function h(p){let f=r.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function uv(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function c(p,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,p*o,d),e.update(f,n,d))}function h(p,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fv(i,t,e){let n=new WeakMap,s=new Xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let w=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*S*4*p),b=new co(E,x,S,p);b.type=Jn,b.needsUpdate=!0;let M=y*4;for(let T=0;T<p;T++){let P=m[T],L=u[T],N=_[T],I=x*S*4*T;for(let U=0;U<P.count;U++){let z=U*M;d===!0&&(s.fromBufferAttribute(P,U),E[I+z+0]=s.x,E[I+z+1]=s.y,E[I+z+2]=s.z,E[I+z+3]=0),g===!0&&(s.fromBufferAttribute(L,U),E[I+z+4]=s.x,E[I+z+5]=s.y,E[I+z+6]=s.z,E[I+z+7]=0),v===!0&&(s.fromBufferAttribute(N,U),E[I+z+8]=s.x,E[I+z+9]=s.y,E[I+z+10]=s.z,E[I+z+11]=N.itemSize===4?s.w:1)}}f={count:p,texture:b,size:new $(x,S)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function pv(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,p=c.geometry,f=t.get(c,p);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var mv={[zo]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Vo]:"CINEON_TONE_MAPPING",[Us]:"ACES_FILMIC_TONE_MAPPING",[Wo]:"AGX_TONE_MAPPING",[Xo]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function gv(i,t,e,n,s,r){let o=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ue;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let h=new wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new X(c,h),f=new Ei(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,u=null,_=[],y=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let E=0;E<_.length;E++){let b=_[E];b.setSize&&b.setSize(x,S)}},this.setEffects=function(x){_=x,y=_.length>0&&_[0].isRenderPass===!0;let S=o.width,E=o.height;_.length>0&&a===null&&(a=new ke(S,E,{type:je,depthBuffer:!1,stencilBuffer:!1}),l=new ke(S,E,{type:je,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<_.length;b++){let M=_[b];M.setSize&&M.setSize(S,E)}},this.begin=function(x,S){if(v||x.toneMapping===ui&&_.length===0)return!1;if(u=S,S!==null){let E=S.width,b=S.height;(o.width!==E||o.height!==b)&&this.setSize(E,b)}return y===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ui,!0},this.hasRenderPass=function(){return y},this.end=function(x,S){x.toneMapping=m,v=!0;let E=o,b=a;for(let M=0;M<_.length;M++){let w=_[M];w.enabled!==!1&&(w.render(x,b,E,S),w.needsSwap!==!1&&(E=b,b=b===a?l:a))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},pe.getTransfer(d)===Se&&(h.defines.SRGB_TRANSFER="");let M=mv[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(u),x.render(p,f),u=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bp=new Fn,Nu=new Si(1,1),wp=new co,Tp=new ll,Rp=new xo,rp=[],op=[],ap=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=rp[s];if(r===void 0&&(r=new Float32Array(s),rp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _n(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function vn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wc(i,t){let e=op[t];e===void 0&&(e=new Int32Array(t),op[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2fv(this.addr,t),vn(e,t)}}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;i.uniform3fv(this.addr,t),vn(e,t)}}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4fv(this.addr,t),vn(e,t)}}function Mv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),vn(e,n)}}function Sv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;lp.set(n),i.uniformMatrix3fv(this.addr,!1,lp),vn(e,n)}}function Ev(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,n))return;ap.set(n),i.uniformMatrix4fv(this.addr,!1,ap),vn(e,n)}}function bv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2iv(this.addr,t),vn(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3iv(this.addr,t),vn(e,t)}}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4iv(this.addr,t),vn(e,t)}}function Av(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2uiv(this.addr,t),vn(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3uiv(this.addr,t),vn(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4uiv(this.addr,t),vn(e,t)}}function Lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nu.compareFunction=e.isReversedDepthBuffer()?_c:xc,r=Nu):r=bp,e.setTexture2D(t||r,s)}function Dv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tp,s)}function Nv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rp,s)}function Uv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wp,s)}function Fv(i){switch(i){case 5126:return xv;case 35664:return _v;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return Sv;case 35676:return Ev;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Tv;case 35669:case 35673:return Rv;case 5125:return Av;case 36294:return Cv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(i,t){i.uniform1fv(this.addr,t)}function Bv(i,t){let e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function Hv(i,t){let e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function zv(i,t){let e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function kv(i,t){let e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vv(i,t){let e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gv(i,t){let e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wv(i,t){i.uniform1iv(this.addr,t)}function Xv(i,t){i.uniform2iv(this.addr,t)}function qv(i,t){i.uniform3iv(this.addr,t)}function Yv(i,t){i.uniform4iv(this.addr,t)}function Zv(i,t){i.uniform1uiv(this.addr,t)}function $v(i,t){i.uniform2uiv(this.addr,t)}function Kv(i,t){i.uniform3uiv(this.addr,t)}function jv(i,t){i.uniform4uiv(this.addr,t)}function Jv(i,t,e){let n=this.cache,s=t.length,r=wc(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Nu:o=bp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qv(i,t,e){let n=this.cache,s=t.length,r=wc(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tp,r[o])}function ty(i,t,e){let n=this.cache,s=t.length,r=wc(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rp,r[o])}function ey(i,t,e){let n=this.cache,s=t.length,r=wc(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wp,r[o])}function ny(i){switch(i){case 5126:return Ov;case 35664:return Bv;case 35665:return Hv;case 35666:return zv;case 35674:return kv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Zv;case 36294:return $v;case 36295:return Kv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ey}}var Uu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fv(e.type)}},Fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ny(e.type)}},Ou=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function hp(i,t){i.seq.push(t),i.map[t.id]=t}function iy(i,t,e){let n=i.name,s=n.length;for(Lu.lastIndex=0;;){let r=Lu.exec(n),o=Lu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hp(e,c===void 0?new Uu(a,i,t):new Fu(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Ou(a),hp(e,p)),e=p}}}var Lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);iy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function up(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var sy=37297,ry=0;function oy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dp=new oe;function ay(i){pe._getMatrix(dp,pe.workingColorSpace,i);let t=`mat3( ${dp.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case oo:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+oy(i.getShaderSource(t),a)}else return r}function ly(i,t){let e=ay(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var cy={[zo]:"Linear",[ko]:"Reinhard",[Vo]:"Cineon",[Us]:"ACESFilmic",[Wo]:"AgX",[Xo]:"Neutral",[Go]:"Custom"};function hy(i,t){let e=cy[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mc=new A;function uy(){pe.getLuminanceCoefficients(Mc);let i=Mc.x.toFixed(4),t=Mc.y.toFixed(4),e=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function fy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function py(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ia(i){return i!==""}function pp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var my=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(i){return i.replace(my,xy)}var gy=new Map;function xy(i,t){let e=de[t];if(e===void 0){let n=gy.get(t);if(n!==void 0)e=de[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bu(e)}var _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(i){return i.replace(_y,vy)}function vy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var yy={[Oo]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function My(i){return yy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sy={[gs]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function Ey(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var by={[Fs]:"ENVMAP_MODE_REFRACTION"};function wy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":by[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[du]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function Ry(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[i.combine]||"ENVMAP_BLENDING_NONE"}function Ay(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=My(e),c=Ey(e),h=wy(e),p=Ry(e),f=Ay(e),d=dy(e),g=fy(r),v=s.createProgram(),m,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ia).join(`
`),u.length>0&&(u+=`
`)):(m=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),u=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?de.tonemapping_pars_fragment:"",e.toneMapping!==ui?hy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,ly("linearToOutputTexel",e.outputColorSpace),uy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),o=Bu(o),o=pp(o,e),o=mp(o,e),a=Bu(a),a=pp(a,e),a=mp(a,e),o=gp(o),a=gp(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=_+m+o,x=_+u+a,S=up(s,s.VERTEX_SHADER,y),E=up(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(S)||"",I=s.getShaderInfoLog(E)||"",U=L.trim(),z=N.trim(),H=I.trim(),et=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{let j=fp(s,S,"vertex"),K=fp(s,E,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+j+`
`+K)}else U!==""?ee("WebGLProgram: Program Info Log:",U):(z===""||H==="")&&(F=!1);F&&(P.diagnostics={runnable:et,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(S),s.deleteShader(E),M=new Lr(s,v),w=py(s,v)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,sy)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ry++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}var Py=0,Hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zu(t),e.set(t,n)),n}},zu=class{constructor(t){this.id=Py++,this.code=t,this.usedTimes=0}};function Iy(i){return i===vs||i===Jo||i===Qo}function Ly(i,t,e,n,s,r){let o=new gr,a=new Hu,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,w,T,P,L,N){let I=P.fog,U=L.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,et=t.get(M.envMap||z,H),F=et&&et.mapping===qo?et.image.height:null,j=d[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&ee("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=K!==void 0?K.length:0,yt=0;U.morphAttributes.position!==void 0&&(yt=1),U.morphAttributes.normal!==void 0&&(yt=2),U.morphAttributes.color!==void 0&&(yt=3);let jt,Nt,Ht,O;if(j){let Ne=Ti[j];jt=Ne.vertexShader,Nt=Ne.fragmentShader}else{jt=M.vertexShader,Nt=M.fragmentShader;let Ne=a.getVertexShaderStage(M),Te=a.getFragmentShaderStage(M);a.update(M,Ne,Te),Ht=Ne.id,O=Te.id}let G=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ut=L.isInstancedMesh===!0,lt=L.isBatchedMesh===!0,gt=!!M.map,zt=!!M.matcap,J=!!et,st=!!M.aoMap,rt=!!M.lightMap,ct=!!M.bumpMap&&M.wireframe===!1,dt=!!M.normalMap,Bt=!!M.displacementMap,Dt=!!M.emissiveMap,kt=!!M.metalnessMap,te=!!M.roughnessMap,B=M.anisotropy>0,_e=M.clearcoat>0,le=M.dispersion>0,D=M.retroreflectivity>0,R=M.iridescence>0,W=M.sheen>0,q=M.transmission>0,nt=B&&!!M.anisotropyMap,ft=_e&&!!M.clearcoatMap,_t=_e&&!!M.clearcoatNormalMap,it=_e&&!!M.clearcoatRoughnessMap,at=R&&!!M.iridescenceMap,St=R&&!!M.iridescenceThicknessMap,Wt=W&&!!M.sheenColorMap,Mt=W&&!!M.sheenRoughnessMap,vt=!!M.specularMap,Ut=!!M.specularColorMap,Zt=!!M.specularIntensityMap,re=q&&!!M.transmissionMap,V=q&&!!M.thicknessMap,Tt=!!M.gradientMap,ot=!!M.alphaMap,Rt=M.alphaTest>0,Pt=!!M.alphaHash,ht=!!M.extensions,$t=ui;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=i.toneMapping);let Vt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:Nt,defines:M.defines,customVertexShaderID:Ht,customFragmentShaderID:O,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:lt,batchingColor:lt&&L._colorsTexture!==null,instancing:ut,instancingColor:ut&&L.instanceColor!==null,instancingMorph:ut&&L.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:zt,envMap:J,envMapMode:J&&et.mapping,envMapCubeUVHeight:F,aoMap:st,lightMap:rt,bumpMap:ct,normalMap:dt,displacementMap:Bt,emissiveMap:Dt,normalMapObjectSpace:dt&&M.normalMapType===Uf,normalMapTangentSpace:dt&&M.normalMapType===ta,packedNormalMap:dt&&M.normalMapType===ta&&Iy(M.normalMap.format),metalnessMap:kt,roughnessMap:te,anisotropy:B,anisotropyMap:nt,clearcoat:_e,clearcoatMap:ft,clearcoatNormalMap:_t,clearcoatRoughnessMap:it,dispersion:le,retroreflection:D,iridescence:R,iridescenceMap:at,iridescenceThicknessMap:St,sheen:W,sheenColorMap:Wt,sheenRoughnessMap:Mt,specularMap:vt,specularColorMap:Ut,specularIntensityMap:Zt,transmission:q,transmissionMap:re,thicknessMap:V,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===ms&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:Rt,alphaHash:Pt,combine:M.combine,mapUv:gt&&g(M.map.channel),aoMapUv:st&&g(M.aoMap.channel),lightMapUv:rt&&g(M.lightMap.channel),bumpMapUv:ct&&g(M.bumpMap.channel),normalMapUv:dt&&g(M.normalMap.channel),displacementMapUv:Bt&&g(M.displacementMap.channel),emissiveMapUv:Dt&&g(M.emissiveMap.channel),metalnessMapUv:kt&&g(M.metalnessMap.channel),roughnessMapUv:te&&g(M.roughnessMap.channel),anisotropyMapUv:nt&&g(M.anisotropyMap.channel),clearcoatMapUv:ft&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(M.sheenRoughnessMap.channel),specularMapUv:vt&&g(M.specularMap.channel),specularColorMapUv:Ut&&g(M.specularColorMap.channel),specularIntensityMapUv:Zt&&g(M.specularIntensityMap.channel),transmissionMapUv:re&&g(M.transmissionMap.channel),thicknessMapUv:V&&g(M.thicknessMap.channel),alphaMapUv:ot&&g(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(dt||B),vertexNormals:!!U.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(gt||ot),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||U.attributes.normal===void 0&&dt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:tt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:yt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&pe.getTransfer(M.map.colorSpace)===Se,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&pe.getTransfer(M.emissiveMap.colorSpace)===Se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===De,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ht&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&M.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)w.push(T),w.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(u(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function u(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){let w=d[M.type],T;if(w){let P=Ti[w];T=dn.clone(P.uniforms)}else T=M.uniforms;return T}function x(M,w){let T=h.get(w);return T!==void 0?++T.usedTimes:(T=new Cy(i,w,M,s),c.push(T),h.set(w,T)),T}function S(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function b(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:b}}function Dy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ny(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _p(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,v,m,u){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:u},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.materialVariant=o(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=m,_.group=u),t++,_}function l(f,d,g,v,m,u,_){_.reversedDepth===!0&&(m=-m);let y=a(f,d,g,v,m,u);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(f,d,g,v,m,u){let _=a(f,d,g,v,m,u);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||Ny),n.length>1&&n.sort(d||_p),s.length>1&&s.sort(d||_p)}function p(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Uy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new vp,i.set(n,[o])):s>=r.length?(o=new vp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Qt};break;case"SpotLight":e={position:new A,direction:new A,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var By=0;function Hy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zy(i){let t=new Fy,e=Oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Et,o=new Et;function a(c){let h=0,p=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,g=0,v=0,m=0,u=0,_=0,y=0,x=0,S=0,E=0,b=0,M=0,w=0,T=0;c.sort(Hy);for(let L=0,N=c.length;L<N;L++){let I=c[L],U=I.color,z=I.intensity,H=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===vs?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*z,p+=U.g*z,f+=U.b*z;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],z);T++}else if(I.isSunLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,K=e.get(I);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=et;let mt=j.getViewportCount();for(let yt=0;yt<mt;yt++)n.sunShadowMatrix[v+yt]=j.getMatrix(yt),n.sunShadowCascade[v+yt]=j._cascadeData[yt];v+=mt,g++}n.sun[d]=F,d++}else if(I.isDirectionalLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,K=e.get(I);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=F,m++}else if(I.isSpotLight){let F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(U).multiplyScalar(z),F.distance=H,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[_]=F;let j=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,j.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=et,b++}_++}else if(I.isRectAreaLight){let F=t.get(I);F.color.copy(U).multiplyScalar(z),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[y]=F,y++}else if(I.isPointLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let j=I.shadow,K=e.get(I);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,n.pointShadow[u]=K,n.pointShadowMap[u]=et,n.pointShadowMatrix[u]=I.shadow.matrix,E++}n.point[u]=F,u++}else if(I.isHemisphereLight){let F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(z),F.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[x]=F,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==u||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==M||P.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=u,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,P.sunLength=d,P.directionalLength=m,P.pointLength=u,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=M,P.numLightProbes=T,n.version=By++)}function l(c,h){let p=0,f=0,d=0,g=0,v=0,m=0,u=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let x=c[_];if(x.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(u),p++}else if(x.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),f++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),g++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),o.identity(),r.copy(x.matrixWorld),r.premultiply(u),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),d++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(u),m++}}}return{setup:a,setupView:l,state:n}}function yp(i){let t=new zy(i),e=[],n=[],s=[];function r(f){p.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ky(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yp(i),t.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`,Wy=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Xy=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Mp=new Et,na=new A,Du=new A;function qy(i,t,e){let n=new yr,s=new $,r=new $,o=new Xe,a=new ml,l=new gl,c={},h=e.maxTextureSize,p={[ps]:un,[un]:ps,[De]:De},f=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Vy,fragmentShader:Gy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new X(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let u=this.type;this.render=function(E,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Cl&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oo);let w=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(nn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=u!==this.type;N&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=E.length;I<U;I++){let z=E[I],H=z.shadow;if(H===void 0){ee("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let et=H.getFrameExtents();s.multiply(et),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,H.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=F,H.map===null||N===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ar){if(z.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ke(s.x,s.y,{format:vs,type:je,minFilter:wn,magFilter:wn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Si(s.x,s.y,Jn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Mi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else z.isPointLight?(H.map=new Sc(s.x),H.map.depthTexture=new cl(s.x,di)):(H.map=new ke(s.x,s.y),H.map.depthTexture=new Si(s.x,s.y,di)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Mi,this.type===Oo?(H.map.depthTexture.compareFunction=F?_c:xc,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,M);for(let K=0;K<j;K++){let mt=H.getCamera(K);if(z.isPointLight){let yt=H.camera,jt=H.matrix,Nt=z.distance||yt.far;Nt!==yt.far&&(yt.far=Nt,yt.updateProjectionMatrix()),na.setFromMatrixPosition(z.matrixWorld),yt.position.copy(na),Du.copy(yt.position),Du.add(Wy[K]),yt.up.copy(Xy[K]),yt.lookAt(Du),yt.updateMatrixWorld(),jt.makeTranslation(-na.x,-na.y,-na.z),Mp.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mp,yt.coordinateSystem,yt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,K),i.clear();else{K===0&&(i.setRenderTarget(H.map),i.clear());let yt=H.getViewport(K);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),L.viewport(o)}n=H.getFrustum(K),x(b,M,mt,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ar&&_(H,M),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,P)};function _(E,b){let M=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ke(s.x,s.y,{format:vs,type:je}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,M,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,M,d,v,null)}function y(E,b,M,w){let T=null,P=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=M.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=T.uuid,N=b.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let U=I[N];U===void 0&&(U=T.clone(),I[N]=U,b.addEventListener("dispose",S)),T=U}if(T.visible=b.visible,T.wireframe=b.wireframe,w===Ar?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:p[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let L=i.properties.get(T);L.light=M}return T}function x(E,b,M,w,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Ar)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let N=t.update(E),I=E.material;if(Array.isArray(I)){let U=N.groups;for(let z=0,H=U.length;z<H;z++){let et=U[z],F=I[et.materialIndex];if(F&&F.visible){let j=y(E,F,w,T);E.onBeforeShadow(i,E,b,M,N,j,et),i.renderBufferDirect(M,null,N,j,E,et),E.onAfterShadow(i,E,b,M,N,j,et)}}}else if(I.visible){let U=y(E,I,w,T);E.onBeforeShadow(i,E,b,M,N,U,null),i.renderBufferDirect(M,null,N,U,E,null),E.onAfterShadow(i,E,b,M,N,U,null)}}let L=E.children;for(let N=0,I=L.length;N<I;N++)x(L[N],b,M,w,T)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let w=c[M],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function Yy(i,t){function e(){let V=!1,Tt=new Xe,ot=null,Rt=new Xe(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!V&&(i.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){V=Pt},setClear:function(Pt,ht,$t,Vt,Ne){Ne===!0&&(Pt*=Vt,ht*=Vt,$t*=Vt),Tt.set(Pt,ht,$t,Vt),Rt.equals(Tt)===!1&&(i.clearColor(Pt,ht,$t,Vt),Rt.copy(Tt))},reset:function(){V=!1,ot=null,Rt.set(-1,0,0,0)}}}function n(){let V=!1,Tt=!1,ot=null,Rt=null,Pt=null;return{setReversed:function(ht){if(Tt!==ht){let $t=t.get("EXT_clip_control");ht?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Tt=ht;let Vt=Pt;Pt=null,this.setClear(Vt)}},getReversed:function(){return Tt},setTest:function(ht){ht?G(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!V&&(i.depthMask(ht),ot=ht)},setFunc:function(ht){if(Tt&&(ht=qf[ht]),Rt!==ht){switch(ht){case ja:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=ht}},setLocked:function(ht){V=ht},setClear:function(ht){Pt!==ht&&(Pt=ht,Tt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){V=!1,ot=null,Rt=null,Pt=null,Tt=!1}}}function s(){let V=!1,Tt=null,ot=null,Rt=null,Pt=null,ht=null,$t=null,Vt=null,Ne=null;return{setTest:function(Te){V||(Te?G(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Te){Tt!==Te&&!V&&(i.stencilMask(Te),Tt=Te)},setFunc:function(Te,ei,mi){(ot!==Te||Rt!==ei||Pt!==mi)&&(i.stencilFunc(Te,ei,mi),ot=Te,Rt=ei,Pt=mi)},setOp:function(Te,ei,mi){(ht!==Te||$t!==ei||Vt!==mi)&&(i.stencilOp(Te,ei,mi),ht=Te,$t=ei,Vt=mi)},setLocked:function(Te){V=Te},setClear:function(Te){Ne!==Te&&(i.clearStencil(Te),Ne=Te)},reset:function(){V=!1,Tt=null,ot=null,Rt=null,Pt=null,ht=null,$t=null,Vt=null,Ne=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},f={},d=new WeakMap,g=[],v=null,m=!1,u=null,_=null,y=null,x=null,S=null,E=null,b=null,M=new Qt(0,0,0),w=0,T=!1,P=null,L=null,N=null,I=null,U=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,et=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=et>=1):F.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=et>=2);let j=null,K={},mt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),jt=new Xe().fromArray(mt),Nt=new Xe().fromArray(yt);function Ht(V,Tt,ot,Rt){let Pt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(V,ht),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ot;$t++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Tt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ht}let O={};O[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(i.DEPTH_TEST),o.setFunc(ur),ct(!1),dt(au),G(i.CULL_FACE),st(nn);function G(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function tt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function ut(V,Tt){return f[V]!==Tt?(i.bindFramebuffer(V,Tt),f[V]=Tt,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Tt),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function lt(V,Tt){let ot=g,Rt=!1;if(V){ot=d.get(Tt),ot===void 0&&(ot=[],d.set(Tt,ot));let Pt=V.textures;if(ot.length!==Pt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,$t=Pt.length;ht<$t;ht++)ot[ht]=i.COLOR_ATTACHMENT0+ht;ot.length=Pt.length,Rt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(ot)}function gt(V){return v!==V?(i.useProgram(V),v=V,!0):!1}let zt={[jn]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[_f]:i.FUNC_REVERSE_SUBTRACT};zt[vf]=i.MIN,zt[yf]=i.MAX;let J={[Ns]:i.ZERO,[Mf]:i.ONE,[Sf]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[Ho]:i.DST_COLOR,[Bo]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[uu]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[bf]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function st(V,Tt,ot,Rt,Pt,ht,$t,Vt,Ne,Te){if(V===nn){m===!0&&(tt(i.BLEND),m=!1);return}if(m===!1&&(G(i.BLEND),m=!0),V!==Pl){if(V!==u||Te!==T){if((_!==jn||S!==jn)&&(i.blendEquation(i.FUNC_ADD),_=jn,S=jn),Te)switch(V){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",V);break}else switch(V){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lu:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",V);break}y=null,x=null,E=null,b=null,M.set(0,0,0),w=0,u=V,T=Te}return}Pt=Pt||Tt,ht=ht||ot,$t=$t||Rt,(Tt!==_||Pt!==S)&&(i.blendEquationSeparate(zt[Tt],zt[Pt]),_=Tt,S=Pt),(ot!==y||Rt!==x||ht!==E||$t!==b)&&(i.blendFuncSeparate(J[ot],J[Rt],J[ht],J[$t]),y=ot,x=Rt,E=ht,b=$t),(Vt.equals(M)===!1||Ne!==w)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ne),M.copy(Vt),w=Ne),u=V,T=!1}function rt(V,Tt){V.side===De?tt(i.CULL_FACE):G(i.CULL_FACE);let ot=V.side===un;Tt&&(ot=!ot),ct(ot),V.blending===ms&&V.transparent===!1?st(nn):st(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Rt=V.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Dt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){P!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),P=V)}function dt(V){V!==mf?(G(i.CULL_FACE),V!==L&&(V===au?i.cullFace(i.BACK):V===gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),L=V}function Bt(V){V!==N&&(H&&i.lineWidth(V),N=V)}function Dt(V,Tt,ot){V?(G(i.POLYGON_OFFSET_FILL),(I!==Tt||U!==ot)&&(I=Tt,U=ot,o.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ot))):tt(i.POLYGON_OFFSET_FILL)}function kt(V){V?G(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function te(V){V===void 0&&(V=i.TEXTURE0+z-1),j!==V&&(i.activeTexture(V),j=V)}function B(V,Tt,ot){ot===void 0&&(j===null?ot=i.TEXTURE0+z-1:ot=j);let Rt=K[ot];Rt===void 0&&(Rt={type:void 0,texture:void 0},K[ot]=Rt),(Rt.type!==V||Rt.texture!==Tt)&&(j!==ot&&(i.activeTexture(ot),j=ot),i.bindTexture(V,Tt||O[V]),Rt.type=V,Rt.texture=Tt)}function _e(){let V=K[j];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function R(){try{i.texSubImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function W(){try{i.texSubImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function ft(){try{i.texStorage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function _t(){try{i.texStorage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function it(){try{i.texImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function at(){try{i.texImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function St(V){return p[V]!==void 0?p[V]:i.getParameter(V)}function Wt(V,Tt){p[V]!==Tt&&(i.pixelStorei(V,Tt),p[V]=Tt)}function Mt(V){jt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),jt.copy(V))}function vt(V){Nt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Nt.copy(V))}function Ut(V,Tt){let ot=c.get(Tt);ot===void 0&&(ot=new WeakMap,c.set(Tt,ot));let Rt=ot.get(V);Rt===void 0&&(Rt=i.getUniformBlockIndex(Tt,V.name),ot.set(V,Rt))}function Zt(V,Tt){let Rt=c.get(Tt).get(V);l.get(Tt)!==Rt&&(i.uniformBlockBinding(Tt,Rt,V.__bindingPointIndex),l.set(Tt,Rt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,K={},f={},d=new WeakMap,g=[],v=null,m=!1,u=null,_=null,y=null,x=null,S=null,E=null,b=null,M=new Qt(0,0,0),w=0,T=!1,P=null,L=null,N=null,I=null,U=null,jt.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:tt,bindFramebuffer:ut,drawBuffers:lt,useProgram:gt,setBlending:st,setMaterial:rt,setFlipSided:ct,setCullFace:dt,setLineWidth:Bt,setPolygonOffset:Dt,setScissorTest:kt,activeTexture:te,bindTexture:B,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:D,texImage2D:it,texImage3D:at,pixelStorei:Wt,getParameter:St,updateUBOMapping:Ut,uniformBlockBinding:Zt,texStorage2D:ft,texStorage3D:_t,texSubImage2D:R,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:nt,scissor:Mt,viewport:vt,reset:re}}function Zy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap,p=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,R){return g?new OffscreenCanvas(D,R):ao("canvas")}function m(D,R,W){let q=1,nt=le(D);if((nt.width>W||nt.height>W)&&(q=W/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ft=Math.floor(q*nt.width),_t=Math.floor(q*nt.height);f===void 0&&(f=v(ft,_t));let it=R?v(ft,_t):f;return it.width=ft,it.height=_t,it.getContext("2d").drawImage(D,0,0,ft,_t),ee("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ft+"x"+_t+")."),it}else return"data"in D&&ee("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),D;return D}function u(D){return D.generateMipmaps}function _(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(D,R,W,q,nt,ft=!1){if(D!==null){if(i[D]!==void 0)return i[D];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _t;q&&(_t=t.get("EXT_texture_norm16"),_t||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=R;if(R===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.R16_EXT),W===i.SHORT&&_t&&(it=_t.R16_SNORM_EXT)),R===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),R===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.RG16_EXT),W===i.SHORT&&_t&&(it=_t.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),R===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),R===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),R===i.RGB&&(W===i.UNSIGNED_SHORT&&_t&&(it=_t.RGB16_EXT),W===i.SHORT&&_t&&(it=_t.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),R===i.RGBA){let at=ft?oo:pe.getTransfer(nt);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=at===Se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.RGBA16_EXT),W===i.SHORT&&_t&&(it=_t.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(D,R){let W;return D?R===null||R===di||R===_s?W=i.DEPTH24_STENCIL8:R===Jn?W=i.DEPTH32F_STENCIL8:R===Cr&&(W=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===di||R===_s?W=i.DEPTH_COMPONENT24:R===Jn?W=i.DEPTH_COMPONENT32F:R===Cr&&(W=i.DEPTH_COMPONENT16),W}function E(D,R){return u(D)===!0||D.isFramebufferTexture&&D.minFilter!==en&&D.minFilter!==wn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function b(D){let R=D.target;R.removeEventListener("dispose",b),w(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&p.delete(R)}function M(D){let R=D.target;R.removeEventListener("dispose",M),P(R)}function w(D){let R=n.get(D);if(R.__webglInit===void 0)return;let W=D.source,q=d.get(W);if(q){let nt=q[R.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&T(D),Object.keys(q).length===0&&d.delete(W)}n.remove(D)}function T(D){let R=n.get(D);i.deleteTexture(R.__webglTexture);let W=D.source,q=d.get(W);delete q[R.__cacheKey],o.memory.textures--}function P(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(R.__webglFramebuffer[q]))for(let nt=0;nt<R.__webglFramebuffer[q].length;nt++)i.deleteFramebuffer(R.__webglFramebuffer[q][nt]);else i.deleteFramebuffer(R.__webglFramebuffer[q]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[q])}else{if(Array.isArray(R.__webglFramebuffer))for(let q=0;q<R.__webglFramebuffer.length;q++)i.deleteFramebuffer(R.__webglFramebuffer[q]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let q=0;q<R.__webglColorRenderbuffer.length;q++)R.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[q]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let W=D.textures;for(let q=0,nt=W.length;q<nt;q++){let ft=n.get(W[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(W[q])}n.remove(D)}let L=0;function N(){L=0}function I(){return L}function U(D){L=D}function z(){let D=L;return D>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function H(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function et(D,R){let W=n.get(D);if(D.isVideoTexture&&B(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){let q=D.image;if(q===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(W,D,R);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+R)}function F(D,R){let W=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){tt(W,D,R);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+R)}function j(D,R){let W=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){tt(W,D,R);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+R)}function K(D,R){let W=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ut(W,D,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+R)}let mt={[tn]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[sl]:i.MIRRORED_REPEAT},yt={[en]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Dl]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},jt={[Of]:i.NEVER,[Vf]:i.ALWAYS,[Bf]:i.LESS,[xc]:i.LEQUAL,[Hf]:i.EQUAL,[_c]:i.GEQUAL,[zf]:i.GREATER,[kf]:i.NOTEQUAL};function Nt(D,R){if(R.type===Jn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===wn||R.magFilter===Dl||R.magFilter===Yo||R.magFilter===xs||R.minFilter===wn||R.minFilter===Dl||R.minFilter===Yo||R.minFilter===xs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,mt[R.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,mt[R.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,mt[R.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,yt[R.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,yt[R.minFilter]),R.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,jt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===en||R.minFilter!==Yo&&R.minFilter!==xs||R.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ht(D,R){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",b));let q=R.source,nt=d.get(q);nt===void 0&&(nt={},d.set(q,nt));let ft=H(R);if(ft!==D.__cacheKey){nt[ft]===void 0&&(nt[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[ft].usedTimes++;let _t=nt[D.__cacheKey];_t!==void 0&&(nt[D.__cacheKey].usedTimes--,_t.usedTimes===0&&T(R)),D.__cacheKey=ft,D.__webglTexture=nt[ft].texture}return W}function O(D,R,W){return Math.floor(Math.floor(D/W)/R)}function G(D,R,W,q){let ft=D.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,W,q,R.data);else{ft.sort((Wt,Mt)=>Wt.start-Mt.start);let _t=0;for(let Wt=1;Wt<ft.length;Wt++){let Mt=ft[_t],vt=ft[Wt],Ut=Mt.start+Mt.count,Zt=O(vt.start,R.width,4),re=O(Mt.start,R.width,4);vt.start<=Ut+1&&Zt===re&&O(vt.start+vt.count-1,R.width,4)===Zt?Mt.count=Math.max(Mt.count,vt.start+vt.count-Mt.start):(++_t,ft[_t]=vt)}ft.length=_t+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Wt=0,Mt=ft.length;Wt<Mt;Wt++){let vt=ft[Wt],Ut=Math.floor(vt.start/4),Zt=Math.ceil(vt.count/4),re=Ut%R.width,V=Math.floor(Ut/R.width),Tt=Zt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,re,V,Tt,ot,W,q,R.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function tt(D,R,W){let q=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(q=i.TEXTURE_3D);let nt=Ht(D,R),ft=R.source;e.bindTexture(q,D.__webglTexture,i.TEXTURE0+W);let _t=n.get(ft);if(ft.version!==_t.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ot=pe.getPrimaries(pe.workingColorSpace),Rt=R.colorSpace===qi?null:pe.getPrimaries(R.colorSpace),Pt=R.colorSpace===qi||ot===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let at=m(R.image,!1,s.maxTextureSize);at=_e(R,at);let St=r.convert(R.format,R.colorSpace),Wt=r.convert(R.type),Mt=x(R.internalFormat,St,Wt,R.normalized,R.colorSpace,R.isVideoTexture);Nt(q,R);let vt,Ut=R.mipmaps,Zt=R.isVideoTexture!==!0,re=_t.__version===void 0||nt===!0,V=ft.dataReady,Tt=E(R,at);if(R.isDepthTexture)Mt=S(R.format===bi,R.type),re&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Mt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,St,Wt,null));else if(R.isDataTexture)if(Ut.length>0){Zt&&re&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Ut[0].width,Ut[0].height);for(let ot=0,Rt=Ut.length;ot<Rt;ot++)vt=Ut[ot],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,St,Wt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,Mt,vt.width,vt.height,0,St,Wt,vt.data);R.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,at.width,at.height),V&&G(R,at,St,Wt)):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,St,Wt,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Zt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Mt,Ut[0].width,Ut[0].height,at.depth);for(let ot=0,Rt=Ut.length;ot<Rt;ot++)if(vt=Ut[ot],R.format!==zn)if(St!==null)if(Zt){if(V)if(R.layerUpdates.size>0){let Pt=Ru(vt.width,vt.height,R.format,R.type);for(let ht of R.layerUpdates){let $t=vt.data.subarray(ht*Pt/vt.data.BYTES_PER_ELEMENT,(ht+1)*Pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ht,vt.width,vt.height,1,St,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,at.depth,St,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Mt,vt.width,vt.height,at.depth,0,vt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,at.depth,St,Wt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Mt,vt.width,vt.height,at.depth,0,St,Wt,vt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Zt&&re&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Ut[0].width,Ut[0].height);for(let ot=0,Rt=Ut.length;ot<Rt;ot++)vt=Ut[ot],R.format!==zn?St!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,St,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Mt,vt.width,vt.height,0,vt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,St,Wt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,Mt,vt.width,vt.height,0,St,Wt,vt.data)}else if(R.isDataArrayTexture)if(Zt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Mt,at.width,at.height,at.depth),V)if(R.layerUpdates.size>0){let ot=Ru(at.width,at.height,R.format,R.type);for(let Rt of R.layerUpdates){let Pt=at.data.subarray(Rt*ot/at.data.BYTES_PER_ELEMENT,(Rt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,at.width,at.height,1,St,Wt,Pt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Wt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,at.width,at.height,at.depth,0,St,Wt,at.data);else if(R.isData3DTexture)Zt?(re&&e.texStorage3D(i.TEXTURE_3D,Tt,Mt,at.width,at.height,at.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Wt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,at.width,at.height,at.depth,0,St,Wt,at.data);else if(R.isFramebufferTexture){if(re)if(Zt)e.texStorage2D(i.TEXTURE_2D,Tt,Mt,at.width,at.height);else{let ot=at.width,Rt=at.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Mt,ot,Rt,0,St,Wt,null),ot>>=1,Rt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),p.add(R),ot.onpaint=Rt=>{let Pt=Rt.changedElements;for(let ht of p)Pt.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Pt=i.RGBA,ht=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,ht,$t,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Zt&&re){let ot=le(Ut[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ot.width,ot.height)}for(let ot=0,Rt=Ut.length;ot<Rt;ot++)vt=Ut[ot],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,St,Wt,vt):e.texImage2D(i.TEXTURE_2D,ot,Mt,St,Wt,vt);R.generateMipmaps=!1}else if(Zt){if(re){let ot=le(at);e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ot.width,ot.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Wt,at)}else e.texImage2D(i.TEXTURE_2D,0,Mt,St,Wt,at);u(R)&&_(q),_t.__version=ft.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function ut(D,R,W){if(R.image.length!==6)return;let q=Ht(D,R),nt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+W);let ft=n.get(nt);if(nt.version!==ft.__version||q===!0){e.activeTexture(i.TEXTURE0+W);let _t=pe.getPrimaries(pe.workingColorSpace),it=R.colorSpace===qi?null:pe.getPrimaries(R.colorSpace),at=R.colorSpace===qi||_t===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let St=R.isCompressedTexture||R.image[0].isCompressedTexture,Wt=R.image[0]&&R.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!St&&!Wt?Mt[ht]=m(R.image[ht],!0,s.maxCubemapSize):Mt[ht]=Wt?R.image[ht].image:R.image[ht],Mt[ht]=_e(R,Mt[ht]);let vt=Mt[0],Ut=r.convert(R.format,R.colorSpace),Zt=r.convert(R.type),re=x(R.internalFormat,Ut,Zt,R.normalized,R.colorSpace),V=R.isVideoTexture!==!0,Tt=ft.__version===void 0||q===!0,ot=nt.dataReady,Rt=E(R,vt);Nt(i.TEXTURE_CUBE_MAP,R);let Pt;if(St){V&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,re,vt.width,vt.height);for(let ht=0;ht<6;ht++){Pt=Mt[ht].mipmaps;for(let $t=0;$t<Pt.length;$t++){let Vt=Pt[$t];R.format!==zn?Ut!==null?V?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,0,0,Vt.width,Vt.height,Ut,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,re,Vt.width,Vt.height,0,Vt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,0,0,Vt.width,Vt.height,Ut,Zt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t,re,Vt.width,Vt.height,0,Ut,Zt,Vt.data)}}}else{if(Pt=R.mipmaps,V&&Tt){Pt.length>0&&Rt++;let ht=le(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,re,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Wt){V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Ut,Zt,Mt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Mt[ht].width,Mt[ht].height,0,Ut,Zt,Mt[ht].data);for(let $t=0;$t<Pt.length;$t++){let Ne=Pt[$t].image[ht].image;V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,0,0,Ne.width,Ne.height,Ut,Zt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,re,Ne.width,Ne.height,0,Ut,Zt,Ne.data)}}else{V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut,Zt,Mt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Ut,Zt,Mt[ht]);for(let $t=0;$t<Pt.length;$t++){let Vt=Pt[$t];V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,0,0,Ut,Zt,Vt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,$t+1,re,Ut,Zt,Vt.image[ht])}}}u(R)&&_(i.TEXTURE_CUBE_MAP),ft.__version=nt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function lt(D,R,W,q,nt,ft){let _t=r.convert(W.format,W.colorSpace),it=r.convert(W.type),at=x(W.internalFormat,_t,it,W.normalized,W.colorSpace),St=n.get(R),Wt=n.get(W);if(Wt.__renderTarget=R,!St.__hasExternalTextures){let Mt=Math.max(1,R.width>>ft),vt=Math.max(1,R.height>>ft);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ft,at,Mt,vt,R.depth,0,_t,it,null):e.texImage2D(nt,ft,at,Mt,vt,0,_t,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,nt,Wt.__webglTexture,0,kt(R)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,nt,Wt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(D,R,W){if(i.bindRenderbuffer(i.RENDERBUFFER,D),R.depthBuffer){let q=R.depthTexture,nt=q&&q.isDepthTexture?q.type:null,ft=S(R.stencilBuffer,nt),_t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(R),ft,R.width,R.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(R),ft,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,D)}else{let q=R.textures;for(let nt=0;nt<q.length;nt++){let ft=q[nt],_t=r.convert(ft.format,ft.colorSpace),it=r.convert(ft.type),at=x(ft.internalFormat,_t,it,ft.normalized,ft.colorSpace);te(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(R),at,R.width,R.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(R),at,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,at,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(D,R,W){let q=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(R.depthTexture);if(nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),q){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,R.depthTexture.addEventListener("dispose",b)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,R.depthTexture);let St=r.convert(R.depthTexture.format),Wt=r.convert(R.depthTexture.type),Mt;R.depthTexture.format===Mi?Mt=i.DEPTH_COMPONENT24:R.depthTexture.format===bi&&(Mt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Mt,R.width,R.height,0,St,Wt,null)}}else et(R.depthTexture,0);let ft=nt.__webglTexture,_t=kt(R),it=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,at=R.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===Mi)te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,ft,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,ft,0);else if(R.depthTexture.format===bi)te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,ft,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(D){let R=n.get(D),W=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let q=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),q){let nt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),R.__depthDisposeCallback=nt}R.__boundDepthTexture=q}if(D.depthTexture&&!R.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)zt(R.__webglFramebuffer[q],D,q);else{let q=D.texture.mipmaps;q&&q.length>0?zt(R.__webglFramebuffer[0],D,0):zt(R.__webglFramebuffer,D,0)}else if(W){R.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[q]),R.__webglDepthbuffer[q]===void 0)R.__webglDepthbuffer[q]=i.createRenderbuffer(),gt(R.__webglDepthbuffer[q],D,!1);else{let nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ft)}}else{let q=D.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),gt(R.__webglDepthbuffer,D,!1);else{let nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(D,R,W){let q=n.get(D);R!==void 0&&lt(q.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&J(D)}function rt(D){let R=D.texture,W=n.get(D),q=n.get(R);D.addEventListener("dispose",M);let nt=D.textures,ft=D.isWebGLCubeRenderTarget===!0,_t=nt.length>1;if(_t||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=R.version,o.memory.textures++),ft){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let at=0;at<R.mipmaps.length;at++)W.__webglFramebuffer[it][at]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<R.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_t)for(let it=0,at=nt.length;it<at;it++){let St=n.get(nt[it]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&te(D)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let at=nt[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let St=r.convert(at.format,at.colorSpace),Wt=r.convert(at.type),Mt=x(at.internalFormat,St,Wt,at.normalized,at.colorSpace,D.isXRRenderTarget===!0),vt=kt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(W.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,R);for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)lt(W.__webglFramebuffer[it][at],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else lt(W.__webglFramebuffer[it],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);u(R)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let it=0,at=nt.length;it<at;it++){let St=nt[it],Wt=n.get(St),Mt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Wt.__webglTexture),Nt(Mt,St),lt(W.__webglFramebuffer,D,St,i.COLOR_ATTACHMENT0+it,Mt,0),u(St)&&_(Mt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(it=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Nt(it,R),R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)lt(W.__webglFramebuffer[at],D,R,i.COLOR_ATTACHMENT0,it,at);else lt(W.__webglFramebuffer,D,R,i.COLOR_ATTACHMENT0,it,0);u(R)&&_(it),e.unbindTexture()}D.depthBuffer&&J(D)}function ct(D){let R=D.textures;for(let W=0,q=R.length;W<q;W++){let nt=R[W];if(u(nt)){let ft=y(D),_t=n.get(nt).__webglTexture;e.bindTexture(ft,_t),_(ft),e.unbindTexture()}}}let dt=[],Bt=[];function Dt(D){if(D.samples>0){if(te(D)===!1){let R=D.textures,W=D.width,q=D.height,nt=i.COLOR_BUFFER_BIT,ft=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(D),it=R.length>1;if(it)for(let St=0;St<R.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let at=D.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let St=0;St<R.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);let Wt=n.get(R[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,W,q,0,0,W,q,nt,i.NEAREST),l===!0&&(dt.length=0,Bt.length=0,dt.push(i.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(dt.push(ft),Bt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<R.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);let Wt=n.get(R[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let R=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function kt(D){return Math.min(s.maxSamples,D.samples)}function te(D){let R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function B(D){let R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function _e(D,R){let W=D.colorSpace,q=D.format,nt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==ro&&W!==qi&&(pe.getTransfer(W)===Se?(q!==zn||nt!==In)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",W)),R}function le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=et,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $y(i,t){function e(n,s=qi){let r,o=pe.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===_u)return i.ALPHA;if(n===vu)return i.RGB;if(n===zn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Hl)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===Zo||n===$o||n===Ko||n===jo)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Vl||n===Gl||n===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jo||n===Kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Qo||n===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
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

}`,ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _o(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ee({vertexShader:Ky,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vu=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,f=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new ku,u={},_=e.getContextAttributes(),y=null,x=null,S=[],E=[],b=new $,M=null,w=null,T=new bn;T.viewport=new Xe;let P=new bn;P.viewport=new Xe;let L=[T,P],N=new Al,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let G=S[O];return G===void 0&&(G=new xr,S[O]=G),G.getTargetRaySpace()},this.getControllerGrip=function(O){let G=S[O];return G===void 0&&(G=new xr,S[O]=G),G.getGripSpace()},this.getHand=function(O){let G=S[O];return G===void 0&&(G=new xr,S[O]=G),G.getHandSpace()};function z(O){let G=E.indexOf(O.inputSource);if(G===-1)return;let tt=S[G];tt!==void 0&&(tt.update(O.inputSource,O.frame,c||o),tt.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",et);for(let O=0;O<S.length;O++){let G=E[O];G!==null&&(E[O]=null,S[O].disconnect(G))}I=null,U=null,m.reset();for(let O in u)delete u[O];if(t.setRenderTarget(y),d=null,f=null,p=null,s=null,x=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(b.width,b.height,!1),w!==null){let O=w.camera;O.fov=w.fov,O.zoom=w.zoom,O.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",et),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,ut=null,lt=null;_.depth&&(lt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?bi:Mi,ut=_.stencil?_s:di);let gt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new ke(f.textureWidth,f.textureHeight,{format:zn,type:In,depthTexture:new Si(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ke(d.framebufferWidth,d.framebufferHeight,{format:zn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(O){for(let G=0;G<O.removed.length;G++){let tt=O.removed[G],ut=E.indexOf(tt);ut>=0&&(E[ut]=null,S[ut].disconnect(tt))}for(let G=0;G<O.added.length;G++){let tt=O.added[G],ut=E.indexOf(tt);if(ut===-1){for(let gt=0;gt<S.length;gt++)if(gt>=E.length){E.push(tt),ut=gt;break}else if(E[gt]===null){E[gt]=tt,ut=gt;break}if(ut===-1)break}let lt=S[ut];lt&&lt.connect(tt)}}let F=new A,j=new A;function K(O,G,tt){F.setFromMatrixPosition(G.matrixWorld),j.setFromMatrixPosition(tt.matrixWorld);let ut=F.distanceTo(j),lt=G.projectionMatrix.elements,gt=tt.projectionMatrix.elements,zt=lt[14]/(lt[10]-1),J=lt[14]/(lt[10]+1),st=(lt[9]+1)/lt[5],rt=(lt[9]-1)/lt[5],ct=(lt[8]-1)/lt[0],dt=(gt[8]+1)/gt[0],Bt=zt*ct,Dt=zt*dt,kt=ut/(-ct+dt),te=kt*-ct;if(G.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(te),O.translateZ(kt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),lt[10]===-1)O.projectionMatrix.copy(G.projectionMatrix),O.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let B=zt+kt,_e=J+kt,le=Bt-te,D=Dt+(ut-te),R=st*J/_e*B,W=rt*J/_e*B;O.projectionMatrix.makePerspective(le,D,R,W,B,_e),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function mt(O,G){G===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(G.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let G=O.near,tt=O.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(tt=m.depthFar)),N.near=P.near=T.near=G,N.far=P.far=T.far=tt,(I!==N.near||U!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,U=N.far),N.layers.mask=O.layers.mask|6,T.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let ut=O.parent,lt=N.cameras;mt(N,ut);for(let gt=0;gt<lt.length;gt++)mt(lt[gt],ut);lt.length===2?K(N,T,P):N.projectionMatrix.copy(T.projectionMatrix),w===null&&O.isPerspectiveCamera&&(w={camera:O,fov:O.fov,zoom:O.zoom}),yt(O,N,ut)};function yt(O,G,tt){tt===null?O.matrix.copy(G.matrixWorld):(O.matrix.copy(tt.matrixWorld),O.matrix.invert(),O.matrix.multiply(G.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(G.projectionMatrix),O.projectionMatrixInverse.copy(G.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=pr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(O){return u[O]};let jt=null;function Nt(O,G){if(h=G.getViewerPose(c||o),g=G,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ut=!1;tt.length!==N.cameras.length&&(N.cameras.length=0,ut=!0);for(let J=0;J<tt.length;J++){let st=tt[J],rt=null;if(d!==null)rt=d.getViewport(st);else{let dt=p.getViewSubImage(f,st);rt=dt.viewport,J===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let ct=L[J];ct===void 0&&(ct=new bn,ct.layers.enable(J),ct.viewport=new Xe,L[J]=ct),ct.matrix.fromArray(st.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(st.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(rt.x,rt.y,rt.width,rt.height),J===0&&(N.matrix.copy(ct.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ut===!0&&N.cameras.push(ct)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let J=p.getDepthInformation(tt[0]);J&&J.isValid&&J.texture&&m.init(J,s.renderState)}if(lt&&lt.includes("camera-access")&&v){t.state.unbindTexture(),p=n.getBinding();for(let J=0;J<tt.length;J++){let st=tt[J].camera;if(st){let rt=u[st];rt||(rt=new _o,u[st]=rt);let ct=p.getCameraImage(st);rt.sourceTexture=ct}}}}for(let tt=0;tt<S.length;tt++){let ut=E[tt],lt=S[tt];ut!==null&&lt!==void 0&&lt.update(ut,G,c||o)}jt&&jt(O,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let Ht=new Sp;Ht.setAnimationLoop(Nt),this.setAnimationLoop=function(O){jt=O},this.dispose=function(){}}},Jy=new Et,Ap=new oe;Ap.set(-1,0,0,0,1,0,0,0,1);function Qy(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,bu(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,y,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===un&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===un&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ap),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=y*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let E=S.program;n.uniformBlockBinding(x,E)}function c(x,S){let E=s[x.id];E===void 0&&(m(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",_));let b=S.program;n.updateUBOMapping(x,b);let M=t.render.frame;r[x.id]!==M&&(f(x),r[x.id]=M)}function h(x){let S=p();x.__bindingPointIndex=S;let E=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let S=s[x.id],E=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,w=E.length;M<w;M++){let T=E[M];if(Array.isArray(T))for(let P=0,L=T.length;P<L;P++)d(T[P],M,P,b);else d(T,M,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,E,b){if(v(x,S,E,b)===!0){let M=x.__offset,w=x.value;if(Array.isArray(w)){let T=0;for(let P=0;P<w.length;P++){let L=w[P],N=u(L);g(L,x.__data,T),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function g(x,S,E){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,E)}function v(x,S,E,b){let M=x.value,w=S+"_"+E;if(b[w]===void 0)return typeof M=="number"||typeof M=="boolean"?b[w]=M:ArrayBuffer.isView(M)?b[w]=M.slice():b[w]=M.clone(),!0;{let T=b[w];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return b[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function m(x){let S=x.uniforms,E=0,b=16;for(let w=0,T=S.length;w<T;w++){let P=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,N=P.length;L<N;L++){let I=P[L],U=Array.isArray(I.value)?I.value:[I.value];for(let z=0,H=U.length;z<H;z++){let et=U[z],F=u(et),j=E%b,K=j%F.boundary,mt=j+K;E+=K,mt!==0&&b-mt<F.storage&&(E+=b-mt),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=F.storage}}}let M=E%b;return M>0&&(E+=b-M),x.__size=E,x.__cache={},this}function u(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),S}function _(x){let S=x.target;S.removeEventListener("dispose",_);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function y(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var e1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function n1(){return wi===null&&(wi=new Gi(e1,16,16,vs,je),wi.name="DFG_LUT",wi.minFilter=wn,wi.magFilter=wn,wi.wrapS=_i,wi.wrapT=_i,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Ec=class{constructor(t={}){let{canvas:e=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=d,m=new Set([zl,Hl,Bl]),u=new Set([In,di,Cr,_s,Ul,Fl]),_=new Uint32Array(4),y=new Int32Array(4),x=new A,S=null,E=null,b=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,L=null,N=null,I=null,U=null;this._outputColorSpace=Fe;let z=0,H=0,et=null,F=-1,j=null,K=new Xe,mt=new Xe,yt=null,jt=new Qt(0),Nt=0,Ht=e.width,O=e.height,G=1,tt=null,ut=null,lt=new Xe(0,0,Ht,O),gt=new Xe(0,0,Ht,O),zt=!1,J=new yr,st=!1,rt=!1,ct=new Et,dt=new A,Bt=new Xe,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function te(){return et===null?G:1}let B=n;function _e(C,k){return e.getContext(C,k)}let le,D,R,W,q,nt,ft,_t,it,at,St,Wt,Mt,vt,Ut,Zt,re,V,Tt,ot,Rt,Pt,ht;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",ei,!1),B===null){let k="webgl2";if(B=_e(k,C),B===null)throw _e(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(C){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),ne("WebGLRenderer: "+C.message),C}function $t(){le=new cv(B),le.init(),Rt=new $y(B,le),D=new Q_(B,le,t,Rt),R=new Yy(B,le),D.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),N=B.createFramebuffer(),I=B.createFramebuffer(),U=B.createFramebuffer(),W=new dv(B),q=new Dy,nt=new Zy(B,le,R,q,D,Rt,W),ft=new lv(T),_t=new pg(B),Pt=new j_(B,_t),it=new hv(B,_t,W,Pt),at=new pv(B,it,_t,Pt,W),V=new fv(B,D,nt),Ut=new tv(q),St=new Ly(T,ft,le,D,Pt,Ut),Wt=new Qy(T,q),Mt=new Uy,vt=new ky(le),re=new K_(T,ft,R,at,g,l),Zt=new qy(T,at,D),ht=new t1(B,W,D,R),Tt=new J_(B,le,W),ot=new uv(B,le,W),W.programs=St.programs,T.capabilities=D,T.extensions=le,T.properties=q,T.renderLists=Mt,T.shadowMap=Zt,T.state=R,T.info=W}v!==In&&(w=new gv(v,e.width,e.height,a,s,r));let Vt=new Vu(T,B);this.xr=Vt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(Ht,O,!1))},this.getSize=function(C){return C.set(Ht,O)},this.setSize=function(C,k,Q=!0){if(Vt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=C,O=k,e.width=Math.floor(C*G),e.height=Math.floor(k*G),Q===!0&&(e.style.width=C+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Ht*G,O*G).floor()},this.setDrawingBufferSize=function(C,k,Q){Ht=C,O=k,G=Q,e.width=Math.floor(C*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(v===In){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(K)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,k,Q,Y){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,k,Q,Y),R.viewport(K.copy(lt).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,k,Q,Y){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,k,Q,Y),R.scissor(mt.copy(gt).multiplyScalar(G).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(C){R.setScissorTest(zt=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Q=!0){let Y=0;if(C){let Z=!1;if(et!==null){let Ct=et.texture.format;Z=m.has(Ct)}if(Z){let Ct=et.texture.type,Lt=u.has(Ct),At=re.getClearColor(),Ft=re.getClearAlpha(),Xt=At.r,he=At.g,xe=At.b;Lt?(_[0]=Xt,_[1]=he,_[2]=xe,_[3]=Ft,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=Xt,y[1]=he,y[2]=xe,y[3]=Ft,B.clearBufferiv(B.COLOR,0,y))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),L=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ei,!1),re.dispose(),Mt.dispose(),vt.dispose(),q.dispose(),ft.dispose(),at.dispose(),Pt.dispose(),ht.dispose(),St.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ed),Vt.removeEventListener("sessionend",bd),Es.stop()};function Ne(C){C.preventDefault(),lo("WebGLRenderer: Context Lost."),P=!0}function Te(){lo("WebGLRenderer: Context Restored."),P=!1;let C=W.autoReset,k=Zt.enabled,Q=Zt.autoUpdate,Y=Zt.needsUpdate,Z=Zt.type;$t(),W.autoReset=C,Zt.enabled=k,Zt.autoUpdate=Q,Zt.needsUpdate=Y,Zt.type=Z}function ei(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mi(C){let k=C.target;k.removeEventListener("dispose",mi),Lm(k)}function Lm(C){Dm(C),q.remove(C)}function Dm(C){let k=q.get(C).programs;k!==void 0&&(k.forEach(function(Q){St.releaseProgram(Q)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Q,Y,Z,Ct){k===null&&(k=Dt);let Lt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,At=Fm(C,k,Q,Y,Z);R.setMaterial(Y,Lt);let Ft=Q.index,Xt=1;if(Y.wireframe===!0){if(Ft=it.getWireframeAttribute(Q),Ft===void 0)return;Xt=2}let he=Q.drawRange,xe=Q.attributes.position,Ot=he.start*Xt,Re=(he.start+he.count)*Xt;Ct!==null&&(Ot=Math.max(Ot,Ct.start*Xt),Re=Math.min(Re,(Ct.start+Ct.count)*Xt)),Ft!==null?(Ot=Math.max(Ot,0),Re=Math.min(Re,Ft.count)):xe!=null&&(Ot=Math.max(Ot,0),Re=Math.min(Re,xe.count));let on=Re-Ot;if(on<0||on===1/0)return;Pt.setup(Z,Y,At,Q,Ft);let He,Le=Tt;if(Ft!==null&&(He=_t.get(Ft),Le=ot,Le.setIndex(He)),Z.isMesh)Y.wireframe===!0?(R.setLineWidth(Y.wireframeLinewidth*te()),Le.setMode(B.LINES)):Le.setMode(B.TRIANGLES);else if(Z.isLine){let An=Y.linewidth;An===void 0&&(An=1),R.setLineWidth(An*te()),Z.isLineSegments?Le.setMode(B.LINES):Z.isLineLoop?Le.setMode(B.LINE_LOOP):Le.setMode(B.LINE_STRIP)}else Z.isPoints?Le.setMode(B.POINTS):Z.isSprite&&Le.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let An=Z._multiDrawStarts,It=Z._multiDrawCounts,Nn=Z._multiDrawCount,ve=Ft?_t.get(Ft).bytesPerElement:1,$n=q.get(Y).currentProgram.getUniforms();for(let gi=0;gi<Nn;gi++)$n.setValue(B,"_gl_DrawID",gi),Le.render(An[gi]/ve,It[gi])}else if(Z.isInstancedMesh)Le.renderInstances(Ot,on,Z.count);else if(Q.isInstancedBufferGeometry){let An=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,It=Math.min(Q.instanceCount,An);Le.renderInstances(Ot,on,It)}else Le.render(Ot,on)};function Sd(C,k,Q,Y){L!==null&&C.isNodeMaterial&&L.setObject(Y,C),st===!0&&Ut.setState(C,Q,!1),C.transparent===!0&&C.side===De&&C.forceSinglePass===!1?(C.side=un,C.needsUpdate=!0,Ma(C,k,Y),C.side=ps,C.needsUpdate=!0,Ma(C,k,Y),C.side=De):Ma(C,k,Y)}this.compile=function(C,k,Q=null){Q===null&&(Q=C),L!==null&&L.renderStart(C,k,Q),E=vt.get(Q),E.init(k),M.push(E),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),C!==Q&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),rt=this.localClippingEnabled,st=Ut.init(this.clippingPlanes,rt),st===!0&&Ut.setGlobalState(this.clippingPlanes,k),L!==null&&Zt.render(E.state.shadowsArray,Q,k);let Y=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Lt=0;Lt<Ct.length;Lt++){let At=Ct[Lt];Sd(At,Q,k,Z),Y.add(At)}else Sd(Ct,Q,k,Z),Y.add(Ct)}),E=M.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(C,k,Q=null){let Y=this.compile(C,k,Q);return new Promise(Z=>{function Ct(){if(Y.forEach(function(Lt){let Ft=q.get(Lt).currentProgram;(Ft===void 0||Ft.isReady())&&Y.delete(Lt)}),Y.size===0){Z(C);return}setTimeout(Ct,10)}le.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Mh=null;function Nm(C){Mh&&Mh(C)}function Ed(){Es.stop()}function bd(){Es.start()}let Es=new Sp;Es.setAnimationLoop(Nm),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(C){Mh=C,Vt.setAnimationLoop(C),C===null?Es.stop():Es.start()},Vt.addEventListener("sessionstart",Ed),Vt.addEventListener("sessionend",bd),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(C,k);let Q=Vt.enabled===!0&&Vt.isPresenting===!0,Y=w!==null&&(et===null||Q)&&w.begin(T,et);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,k,et),E=vt.get(C,M.length),E.init(k),E.state.textureUnits=nt.getTextureUnits(),M.push(E),ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(ct,oi,k.reversedDepth),rt=this.localClippingEnabled,st=Ut.init(this.clippingPlanes,rt),S=Mt.get(C,b.length),S.init(),b.push(S),Vt.enabled===!0&&Vt.isPresenting===!0){let Lt=T.xr.getDepthSensingMesh();Lt!==null&&Sh(Lt,k,-1/0,T.sortObjects)}Sh(C,k,0,T.sortObjects),S.finish(),L!==null&&L.updateLights(E.state.lightsArray),T.sortObjects===!0&&S.sort(tt,ut),kt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,kt&&re.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ut.beginShadows();let Z=E.state.shadowsArray;if(Zt.render(Z,C,k),st===!0&&Ut.endShadows(),(Y&&w.hasRenderPass())===!1){let Lt=S.opaque,At=S.transmissive;if(E.setupLights(),k.isArrayCamera){let Ft=k.cameras;if(At.length>0)for(let Xt=0,he=Ft.length;Xt<he;Xt++){let xe=Ft[Xt];Td(Lt,At,C,xe)}kt&&re.render(C);for(let Xt=0,he=Ft.length;Xt<he;Xt++){let xe=Ft[Xt];wd(S,C,xe,xe.viewport)}}else At.length>0&&Td(Lt,At,C,k),kt&&re.render(C),wd(S,C,k)}et!==null&&H===0&&(nt.updateMultisampleRenderTarget(et),nt.updateRenderTargetMipmap(et)),Y&&w.end(T),C.isScene===!0&&C.onAfterRender(T,C,k),Pt.resetDefaultState(),F=-1,j=null,M.pop(),M.length>0?(E=M[M.length-1],nt.setTextureUnits(E.state.textureUnits),st===!0&&Ut.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,L!==null&&L.renderEnd()};function Sh(C,k,Q,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(J)){Y&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let Lt=at.update(C),At=C.material;At.visible&&S.push(C,Lt,At,Q,Bt.z,null,k)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(J))){let Lt=at.update(C),At=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Bt.copy(Lt.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(At)){let Ft=Lt.groups;for(let Xt=0,he=Ft.length;Xt<he;Xt++){let xe=Ft[Xt],Ot=At[xe.materialIndex];Ot&&Ot.visible&&S.push(C,Lt,Ot,Q,Bt.z,xe,k)}}else At.visible&&S.push(C,Lt,At,Q,Bt.z,null,k)}}let Ct=C.children;for(let Lt=0,At=Ct.length;Lt<At;Lt++)Sh(Ct[Lt],k,Q,Y)}function wd(C,k,Q,Y){let{opaque:Z,transmissive:Ct,transparent:Lt}=C;E.setupLightsView(Q),st===!0&&Ut.setGlobalState(T.clippingPlanes,Q),Y&&R.viewport(K.copy(Y)),Z.length>0&&ya(Z,k,Q),Ct.length>0&&ya(Ct,k,Q),Lt.length>0&&ya(Lt,k,Q),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Td(C,k,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let Ot=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new ke(1,1,{generateMipmaps:!0,type:Ot?je:In,minFilter:xs,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Ct=E.state.transmissionRenderTarget[Y.id],Lt=Y.viewport||K;Ct.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);let At=T.getRenderTarget(),Ft=T.getActiveCubeFace(),Xt=T.getActiveMipmapLevel();T.setRenderTarget(Ct),T.getClearColor(jt),Nt=T.getClearAlpha(),Nt<1&&T.setClearColor(16777215,.5),T.clear(),kt&&re.render(Q);let he=T.toneMapping;T.toneMapping=ui;let xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),st===!0&&Ut.setGlobalState(T.clippingPlanes,Y),ya(C,Q,Y),nt.updateMultisampleRenderTarget(Ct),nt.updateRenderTargetMipmap(Ct),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Re=0,on=k.length;Re<on;Re++){let He=k[Re],{object:Le,geometry:An,material:It,group:Nn}=He;if(It.side===De&&Le.layers.test(Y.layers)){let ve=It.side;It.side=un,It.needsUpdate=!0,Rd(Le,Q,Y,An,It,Nn),It.side=ve,It.needsUpdate=!0,Ot=!0}}Ot===!0&&(nt.updateMultisampleRenderTarget(Ct),nt.updateRenderTargetMipmap(Ct))}T.setRenderTarget(At,Ft,Xt),T.setClearColor(jt,Nt),xe!==void 0&&(Y.viewport=xe),T.toneMapping=he}function ya(C,k,Q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Ct=C.length;Z<Ct;Z++){let Lt=C[Z],{object:At,geometry:Ft,group:Xt}=Lt,he=Lt.material;he.allowOverride===!0&&Y!==null&&(he=Y),At.layers.test(Q.layers)&&Rd(At,k,Q,Ft,he,Xt)}}function Rd(C,k,Q,Y,Z,Ct){L!==null&&Z.isNodeMaterial&&L.setObject(C,Z),C.onBeforeRender(T,k,Q,Y,Z,Ct),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(T,k,Q,Y,C,Ct),Z.transparent===!0&&Z.side===De&&Z.forceSinglePass===!1?(Z.side=un,Z.needsUpdate=!0,T.renderBufferDirect(Q,k,Y,Z,C,Ct),Z.side=ps,Z.needsUpdate=!0,T.renderBufferDirect(Q,k,Y,Z,C,Ct),Z.side=De):T.renderBufferDirect(Q,k,Y,Z,C,Ct),C.onAfterRender(T,k,Q,Y,Z,Ct)}function Ma(C,k,Q){k.isScene!==!0&&(k=Dt);let Y=q.get(C),Z=E.state.lights,Ct=E.state.shadowsArray,Lt=Z.state.version,At=St.getParameters(C,Z.state,Ct,k,Q,E.state.lightProbeGridArray),Ft=St.getProgramCacheKey(At),Xt=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let he=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=ft.get(C.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Xt===void 0&&(C.addEventListener("dispose",mi),Xt=new Map,Y.programs=Xt);let xe=Xt.get(Ft);if(xe!==void 0){if(Y.currentProgram===xe&&Y.lightsStateVersion===Lt)return Cd(C,At),xe}else At.uniforms=St.getUniforms(C),L!==null&&C.isNodeMaterial&&L.build(C,Q,At),C.onBeforeCompile(At,T),xe=St.acquireProgram(At,Ft),Xt.set(Ft,xe),Y.uniforms=At.uniforms;let Ot=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ot.clippingPlanes=Ut.uniform),Cd(C,At),Y.needsLights=Bm(C),Y.lightsStateVersion=Lt,Y.needsLights&&(Ot.ambientLightColor.value=Z.state.ambient,Ot.lightProbe.value=Z.state.probe,Ot.sunLights.value=Z.state.sun,Ot.sunLightShadows.value=Z.state.sunShadow,Ot.directionalLights.value=Z.state.directional,Ot.directionalLightShadows.value=Z.state.directionalShadow,Ot.spotLights.value=Z.state.spot,Ot.spotLightShadows.value=Z.state.spotShadow,Ot.rectAreaLights.value=Z.state.rectArea,Ot.ltc_1.value=Z.state.rectAreaLTC1,Ot.ltc_2.value=Z.state.rectAreaLTC2,Ot.pointLights.value=Z.state.point,Ot.pointLightShadows.value=Z.state.pointShadow,Ot.hemisphereLights.value=Z.state.hemi,Ot.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ot.sunShadowCascade.value=Z.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Z.state.spotLightMatrix,Ot.spotLightMap.value=Z.state.spotLightMap,Ot.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=xe,Y.uniformsList=null,xe}function Ad(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=Lr.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Cd(C,k){let Q=q.get(C);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Um(C,k){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let Q=0,Y=C.length;Q<Y;Q++){let Z=C[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function Fm(C,k,Q,Y,Z){k.isScene!==!0&&(k=Dt),nt.resetTextureUnits();let Ct=k.fog,Lt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,At=et===null?T.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Xt=ft.get(Y.envMap||Lt,Ft),he=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,xe=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!Q.morphAttributes.position,Re=!!Q.morphAttributes.normal,on=!!Q.morphAttributes.color,He=ui;Y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(He=T.toneMapping);let Le=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,An=Le!==void 0?Le.length:0,It=q.get(Y),Nn=E.state.lights;if(st===!0&&(rt===!0||C!==j)){let Ue=C===j&&Y.id===F;Ut.setState(Y,C,Ue)}let ve=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Nn.state.version||It.outputColorSpace!==At||Z.isBatchedMesh&&It.batching===!1||!Z.isBatchedMesh&&It.batching===!0||Z.isBatchedMesh&&It.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&It.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&It.instancing===!1||!Z.isInstancedMesh&&It.instancing===!0||Z.isSkinnedMesh&&It.skinning===!1||!Z.isSkinnedMesh&&It.skinning===!0||Z.isInstancedMesh&&It.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&It.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&It.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&It.instancingMorph===!1&&Z.morphTexture!==null||It.envMap!==Xt||Y.fog===!0&&It.fog!==Ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Ut.numPlanes||It.numIntersection!==Ut.numIntersection)||It.vertexAlphas!==he||It.vertexTangents!==xe||It.morphTargets!==Ot||It.morphNormals!==Re||It.morphColors!==on||It.toneMapping!==He||It.morphTargetsCount!==An||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,It.__version=Y.version);let $n=It.currentProgram;ve===!0&&($n=Ma(Y,k,Z),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,$n,It));let gi=!1,Ji=!1,Ws=!1,Pe=$n.getUniforms(),Qe=It.uniforms;if(R.useProgram($n.program)&&(gi=!0,Ji=!0,Ws=!0),Y.id!==F&&(F=Y.id,Ji=!0),It.needsLights){let Ue=Um(E.state.lightProbeGridArray,Z);It.lightProbeGrid!==Ue&&(It.lightProbeGrid=Ue,Ji=!0)}if(gi||j!==C){R.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(B,"projectionMatrix",C.projectionMatrix),Pe.setValue(B,"viewMatrix",C.matrixWorldInverse);let ts=Pe.map.cameraPosition;ts!==void 0&&ts.setValue(B,dt.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,Ji=!0,Ws=!0)}if(It.needsLights&&(Nn.state.sunShadowMap.length>0&&Pe.setValue(B,"sunShadowMap",Nn.state.sunShadowMap,nt),Nn.state.directionalShadowMap.length>0&&Pe.setValue(B,"directionalShadowMap",Nn.state.directionalShadowMap,nt),Nn.state.spotShadowMap.length>0&&Pe.setValue(B,"spotShadowMap",Nn.state.spotShadowMap,nt),Nn.state.pointShadowMap.length>0&&Pe.setValue(B,"pointShadowMap",Nn.state.pointShadowMap,nt)),Z.isSkinnedMesh){Pe.setOptional(B,Z,"bindMatrix"),Pe.setOptional(B,Z,"bindMatrixInverse");let Ue=Z.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(B,"boneTexture",Ue.boneTexture,nt))}Z.isBatchedMesh&&(Pe.setOptional(B,Z,"batchingTexture"),Pe.setValue(B,"batchingTexture",Z._matricesTexture,nt),Pe.setOptional(B,Z,"batchingIdTexture"),Pe.setValue(B,"batchingIdTexture",Z._indirectTexture,nt),Pe.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(B,"batchingColorTexture",Z._colorsTexture,nt));let Qi=Q.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&V.update(Z,Q,$n),(Ji||It.receiveShadow!==Z.receiveShadow)&&(It.receiveShadow=Z.receiveShadow,Pe.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Qe.envMapIntensity.value=k.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=n1()),Ji){if(Pe.setValue(B,"toneMappingExposure",T.toneMappingExposure),It.needsLights&&Om(Qe,Ws),Ct&&Y.fog===!0&&Wt.refreshFogUniforms(Qe,Ct),Wt.refreshMaterialUniforms(Qe,Y,G,O,E.state.transmissionRenderTarget[C.id]),It.needsLights&&It.lightProbeGrid){let Ue=It.lightProbeGrid;Qe.probesSH.value=Ue.texture,Qe.probesMin.value.copy(Ue.boundingBox.min),Qe.probesMax.value.copy(Ue.boundingBox.max),Qe.probesResolution.value.copy(Ue.resolution)}Lr.upload(B,Ad(It),Qe,nt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Lr.upload(B,Ad(It),Qe,nt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pe.setValue(B,"center",Z.center),Pe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(B,"normalMatrix",Z.normalMatrix),Pe.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ue=Y.uniformsGroups;for(let ts=0,Xs=Ue.length;ts<Xs;ts++){let Id=Ue[ts];ht.update(Id,$n),ht.bind(Id,$n)}}return $n}function Om(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Bm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(C,k,Q){let Y=q.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(C.texture).__webglTexture=k,q.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){let Q=q.get(C);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Q=0){et=C,z=k,H=Q;let Y=null,Z=!1,Ct=!1;if(C){let At=q.get(C);if(At.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(B.FRAMEBUFFER,At.__webglFramebuffer),K.copy(C.viewport),mt.copy(C.scissor),yt=C.scissorTest,R.viewport(K),R.scissor(mt),R.setScissorTest(yt),F=-1;return}else if(At.__webglFramebuffer===void 0)nt.setupRenderTarget(C);else if(At.__hasExternalTextures)nt.rebindTextures(C,q.get(C.texture).__webglTexture,q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let he=C.depthTexture;if(At.__boundDepthTexture!==he){if(he!==null&&q.has(he)&&(C.width!==he.image.width||C.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(C)}}let Ft=C.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Ct=!0);let Xt=q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?Y=Xt[k][Q]:Y=Xt[k],Z=!0):C.samples>0&&nt.useMultisampledRTT(C)===!1?Y=q.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[Q]:Y=Xt,K.copy(C.viewport),mt.copy(C.scissor),yt=C.scissorTest}else K.copy(lt).multiplyScalar(G).floor(),mt.copy(gt).multiplyScalar(G).floor(),yt=zt;if(Q!==0&&(Y=N),R.bindFramebuffer(B.FRAMEBUFFER,Y)&&R.drawBuffers(C,Y),R.viewport(K),R.scissor(mt),R.setScissorTest(yt),Z){let At=q.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,Q)}else if(Ct){let At=k;for(let Ft=0;Ft<C.textures.length;Ft++){let Xt=q.get(C.textures[Ft]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ft,Xt.__webglTexture,Q,At)}}else if(C!==null&&Q!==0){let At=q.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,At.__webglTexture,Q)}F=-1};function Pd(C){let k=q.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=D.textureFormatReadable(C.format),k.__typeReadable=D.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,Q,Y,Z,Ct,Lt,At=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){R.bindFramebuffer(B.FRAMEBUFFER,Ft);try{let Xt=C.textures[At],he=Xt.format,xe=Xt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+At);let Ot=Pd(Xt);if(Ot.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&Q>=0&&Q<=C.height-Z&&B.readPixels(k,Q,Y,Z,Rt.convert(he),Rt.convert(xe),Ct)}finally{let Xt=et!==null?q.get(et).__webglFramebuffer:null;R.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,k,Q,Y,Z,Ct,Lt,At=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft)if(k>=0&&k<=C.width-Y&&Q>=0&&Q<=C.height-Z){R.bindFramebuffer(B.FRAMEBUFFER,Ft);let Xt=C.textures[At],he=Xt.format,xe=Xt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+At);let Ot=Pd(Xt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,Ct.byteLength,B.STREAM_READ),B.readPixels(k,Q,Y,Z,Rt.convert(he),Rt.convert(xe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let on=et!==null?q.get(et).__webglFramebuffer:null;R.bindFramebuffer(B.FRAMEBUFFER,on);let He=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xf(B,He,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ct),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Re),B.deleteSync(He),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(C.image.width*Y),Ct=Math.floor(C.image.height*Y),Lt=k!==null?k.x:0,At=k!==null?k.y:0;nt.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Lt,At,Z,Ct),R.unbindTexture()},this.copyTextureToTexture=function(C,k,Q=null,Y=null,Z=0,Ct=0){let Lt,At,Ft,Xt,he,xe,Ot,Re,on,He=C.isCompressedTexture?C.mipmaps[Ct]:C.image;if(Q!==null)Lt=Q.max.x-Q.min.x,At=Q.max.y-Q.min.y,Ft=Q.isBox3?Q.max.z-Q.min.z:1,Xt=Q.min.x,he=Q.min.y,xe=Q.isBox3?Q.min.z:0;else{let Qe=Math.pow(2,-Z);Lt=Math.floor(He.width*Qe),At=Math.floor(He.height*Qe),C.isDataArrayTexture?Ft=He.depth:C.isData3DTexture?Ft=Math.floor(He.depth*Qe):Ft=1,Xt=0,he=0,xe=0}Y!==null?(Ot=Y.x,Re=Y.y,on=Y.z):(Ot=0,Re=0,on=0);let Le=Rt.convert(k.format),An=Rt.convert(k.type),It;k.isData3DTexture?(nt.setTexture3D(k,0),It=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(nt.setTexture2DArray(k,0),It=B.TEXTURE_2D_ARRAY):(nt.setTexture2D(k,0),It=B.TEXTURE_2D),R.activeTexture(B.TEXTURE0),R.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let Nn=R.getParameter(B.UNPACK_ROW_LENGTH),ve=R.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=R.getParameter(B.UNPACK_SKIP_PIXELS),gi=R.getParameter(B.UNPACK_SKIP_ROWS),Ji=R.getParameter(B.UNPACK_SKIP_IMAGES);R.pixelStorei(B.UNPACK_ROW_LENGTH,He.width),R.pixelStorei(B.UNPACK_IMAGE_HEIGHT,He.height),R.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),R.pixelStorei(B.UNPACK_SKIP_ROWS,he),R.pixelStorei(B.UNPACK_SKIP_IMAGES,xe);let Ws=C.isDataArrayTexture||C.isData3DTexture,Pe=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){let Qe=q.get(C),Qi=q.get(k),Ue=q.get(Qe.__renderTarget),ts=q.get(Qi.__renderTarget);R.bindFramebuffer(B.READ_FRAMEBUFFER,Ue.__webglFramebuffer),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Xs=0;Xs<Ft;Xs++)Ws&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(C).__webglTexture,Z,xe+Xs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Ct,on+Xs)),B.blitFramebuffer(Xt,he,Lt,At,Ot,Re,Lt,At,B.DEPTH_BUFFER_BIT,B.NEAREST);R.bindFramebuffer(B.READ_FRAMEBUFFER,null),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||q.has(C)){let Qe=q.get(C),Qi=q.get(k);R.bindFramebuffer(B.READ_FRAMEBUFFER,I),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ue=0;Ue<Ft;Ue++)Ws?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qe.__webglTexture,Z,xe+Ue):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qe.__webglTexture,Z),Pe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qi.__webglTexture,Ct,on+Ue):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qi.__webglTexture,Ct),Z!==0?B.blitFramebuffer(Xt,he,Lt,At,Ot,Re,Lt,At,B.COLOR_BUFFER_BIT,B.NEAREST):Pe?B.copyTexSubImage3D(It,Ct,Ot,Re,on+Ue,Xt,he,Lt,At):B.copyTexSubImage2D(It,Ct,Ot,Re,Xt,he,Lt,At);R.bindFramebuffer(B.READ_FRAMEBUFFER,null),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pe?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(It,Ct,Ot,Re,on,Lt,At,Ft,Le,An,He.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(It,Ct,Ot,Re,on,Lt,At,Ft,Le,He.data):B.texSubImage3D(It,Ct,Ot,Re,on,Lt,At,Ft,Le,An,He):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ct,Ot,Re,Lt,At,Le,An,He.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ct,Ot,Re,He.width,He.height,Le,He.data):B.texSubImage2D(B.TEXTURE_2D,Ct,Ot,Re,Lt,At,Le,An,He);R.pixelStorei(B.UNPACK_ROW_LENGTH,Nn),R.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve),R.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),R.pixelStorei(B.UNPACK_SKIP_ROWS,gi),R.pixelStorei(B.UNPACK_SKIP_IMAGES,Ji),Ct===0&&k.generateMipmaps&&B.generateMipmap(It),R.unbindTexture()},this.initRenderTarget=function(C){q.get(C).__webglFramebuffer===void 0&&nt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?nt.setTextureCube(C,0):C.isData3DTexture?nt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?nt.setTexture2DArray(C,0):nt.setTexture2D(C,0),R.unbindTexture()},this.resetState=function(){z=0,H=0,et=null,R.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Cp={type:"change"},Wu={type:"start"},Ip={type:"end"},Tc=new os,Pp=new Xn,i1=Math.cos(70*sn.DEG2RAD),yn=new A,kn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gu=1e-6,Rc=class extends Fo{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new We,this._lastTargetPosition=new A,this._quat=new We().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rr,this._sphericalDelta=new Rr,this._scale=1,this._panOffset=new A,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new A,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r1.bind(this),this._onPointerDown=s1.bind(this),this._onPointerUp=o1.bind(this),this._onContextMenu=f1.bind(this),this._onMouseWheel=c1.bind(this),this._onKeyDown=h1.bind(this),this._onTouchStart=u1.bind(this),this._onTouchMove=d1.bind(this),this._onMouseDown=a1.bind(this),this._onMouseMove=l1.bind(this),this._interceptControlDown=p1.bind(this),this._interceptControlUp=m1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cp),this.update(),this.state=Ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;yn.copy(e).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=kn:n>Math.PI&&(n-=kn),s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),e.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=yn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Tc.origin.copy(this.object.position),Tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tc.direction))<i1?this.object.lookAt(this.target):(Pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tc.intersectPlane(Pp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gu||this._lastTargetPosition.distanceToSquared(this.target)>Gu?(this.dispatchEvent(Cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){yn.setFromMatrixColumn(e,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,e){this.screenSpacePanning===!0?yn.setFromMatrixColumn(e,1):(yn.setFromMatrixColumn(e,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;yn.copy(s).sub(this.target);let r=yn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/e.clientHeight),this._rotateUp(kn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/e.clientHeight),this._rotateUp(kn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function s1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function r1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function o1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ip),this.state=Ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function a1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(Wu)}function l1(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(Wu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ip))}function h1(i){this.enabled!==!1&&this._handleKeyDown(i)}function u1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(Wu)}function d1(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function f1(i){this.enabled!==!1&&i.preventDefault()}function p1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ur=class i extends X{constructor(){let t=i.SkyShader,e=new Ee({name:t.name,uniforms:dn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:un,depthWrite:!1});super(new Gt(1,1,1),e),this.isSky=!0}};Ur.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new A},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var sa=i=>Math.min(1,Math.max(0,i)),fe=(i,t,e)=>i+(t-i)*e,Yi=(i,t,e)=>{let n=sa((e-i)/(t-i));return n*n*(3-2*n)};var qt={hold:-5.75,orlop:-1.15,lower:1,middle:3.1,upper:5.2,qd:7.25,poop:9.15},pn=1.2,$e=15.6,Ze=-13.4;function mn(i){let t=(i-2)/28;return .85*t*t}function pt(i,t){return qt[i]+mn(t)}function Ie(i){let t=8.65+mn(i);return t+=1.9*Yi(Ze+1,Ze-1,i),t+=.9*Yi(-25,-29.5,i),t}function Be(i){if(i<2){let t=sa((i- -7.4)/9.4);return 24.75+4.3*(1-(1-t)*(1-t))}return 29.05+.06*(i-2)}var Hs=1.6;function Me(i){if(i<Hs){let t=sa((i- -7.4)/(Hs- -7.4));return fe(-25.75,-27.65,t)}return-27.65-1.1*Yi(Hs,4.5,i)-.11*Math.max(0,i-4.5)}function Fr(i){if(i<=-7.4)return 0;if(i<1.6){let e=(1.6-i)/9;return 7.9*Math.pow(1-Math.pow(e,2.4),1/2.4)}let t=(i-1.6)/(13-1.6);return 7.9*(1-.17*Math.pow(t,1.6))}function ra(i){return .8*Yi(-2.4,2.4,i)}function Xu(i,t){let e=Yi(-6.5,1.5,t),n=fe(.58,.73,e);if(i>n){let r=sa((i-n)/(1-n)),o=fe(1.7,2.2,e),a=fe(1.05,.46,e);return Math.pow(Math.max(0,1-Math.pow(r,o)),a)}let s=fe(.44,.24,e);if(i<s){let r=sa((s-i)/s),o=fe(1.6,2,e),a=fe(1.15,.65,e),l=ra(t);return l+(1-l)*Math.pow(Math.max(0,1-Math.pow(r,o)),a)}return 1}function wt(i,t){let e=Me(t),n=Be(t);return i<e||i>n?0:Fr(t)*Xu((i-e)/(n-e),t)}var fn=-31,Qn=31,Ri=-10,fi=14,qu=i=>(i-fn)/(Qn-fn),Yu=(i,t)=>(t-mn(i)-Ri)/(fi-Ri),Or=[{name:"lower",deck:"lower",count:15,x0:-20.4,dx:3,cy:.82,w:1.05,h:.95,lid:!0,bore:.165,len:3},{name:"middle",deck:"middle",count:14,x0:-21,dx:3.05,cy:.78,w:.95,h:.86,lid:!0,bore:.15,len:2.9},{name:"upper",deck:"upper",count:15,x0:-21,dx:3.05,cy:.74,w:.85,h:.8,lid:!0,bore:.12,len:2.6},{name:"qd",deck:"qd",count:6,x0:-20.4,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"fc",deck:"qd",count:1,x0:18.6,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"carronade",deck:"qd",count:1,x0:21.4,dx:3,cy:.66,w:.85,h:.75,lid:!1,bore:.2,len:1.6,carronade:!0}];function Ai(){let i=[];for(let t of Or)for(let e=0;e<t.count;e++){let n=t.x0+e*t.dx;i.push({tier:t,x:n,y:qt[t.deck]+t.cy+mn(n)})}return i}var Dn=[{name:"after hatch",x:-8.4,w:2.2,d:2},{name:"main hatch",x:1.8,w:2.6,d:2.4},{name:"main ladderway",x:6,w:2.4,d:2.4,ladder:!0},{name:"fore ladderway",x:10.2,w:3,d:2.6,ladder:!0},{name:"fore hatch",x:13.6,w:1.8,d:1.8},{name:"forward hatch",x:18.2,w:2.2,d:2},{name:"after ladderway",x:-12.2,w:2,d:1.6,ladder:!0}];function Ac(i,t=1){return{x:i.x,zFoot:t*(i.d/2+1),zTop:t*(i.d/2-.05),side:t}}var Cc=-5.3;function Pc(){let i=Dn.find(t=>t.name==="main hatch");return{x:i.x,zFoot:-(i.d/2+1.75),zTop:-(i.d/2-.05),side:-1,hatch:i}}var Ic=[{from:"upper",to:"qd",x:pn+2.2,run:-2,z:2.6},{from:"upper",to:"qd",x:$e-2.2,run:2,z:2.6},{from:"qd",to:"poop",x:Ze+2.3,run:-2,z:3.4}],Lp=2.5,Dp=Or.slice(0,3).map(i=>{let t=qt[i.deck]+i.cy;return[t-i.h/2-.2,t+i.h/2+.2]}),Br=.45,Ci={fore:{x:22.75,scale:.9,rake:0},main:{x:-2.45,scale:1,rake:.035},mizzen:{x:-19.15,scale:.72,rake:.052}},Np={main:{course:31.19,topsail:22.25,topgallant:14.86,royal:10.97},fore:{course:27.15,topsail:19.66,topgallant:13.11,royal:9.75},mizzen:{course:19.66,topsail:14.94,topgallant:9.98,royal:7.32}},Up=-.0068;var Fp={day:{elev:28,az:215,color:"#fff1dc",intensity:3.2,hemi:["#cfe0f0","#30404a",.5],exposure:.55,fog:"#b9c8d2",env:.7,sky:[2.2,2.2,.003,.82],night:0,light:1},dusk:{elev:2.5,az:255,color:"#ffb27a",intensity:1.9,hemi:["#e0b8a0","#302830",.32],exposure:.62,fog:"#b98f7a",env:.55,sky:[6,2.8,.006,.9],night:.5,light:.6},night:{elev:-14,az:255,moon:{elev:34,az:140},color:"#b4c6ff",intensity:1,hemi:["#3a4c78","#06080e",.7],exposure:1.25,fog:"#0d1526",env:.45,sky:[1.2,.4,.002,.8],night:1,light:.16}};function g1(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,64);e.addColorStop(0,"rgba(255,250,235,1)"),e.addColorStop(.5,"rgba(255,250,235,1)"),e.addColorStop(.56,"rgba(200,210,255,0.35)"),e.addColorStop(1,"rgba(200,210,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="rgba(160,160,150,0.35)";for(let[s,r,o]of[[52,50,8],[74,60,6],[60,78,9],[80,44,4]])t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill();let n=new hn(i);return n.colorSpace=Fe,n}var Lc=class{constructor(t,e){this.renderer=t,this.scene=e,this.sky=new Ur,this.sky.scale.setScalar(8e3),this.sky.userData.noAO=!0,e.add(this.sky),this.pmrem=new Dr(t),this.envScene=new Cs,this.envSky=new Ur,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.sun=new Io("#fff1dc",3.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096);let n=this.sun.shadow.camera;n.left=-60,n.right=60,n.top=60,n.bottom=-60,n.near=10,n.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun,this.sun.target),this.hemi=new Ao("#cfe0f0","#30404a",.5),e.add(this.hemi),e.fog=new ho("#b9c8d2",400,3800);let s=1800,r=new Float32Array(s*3);for(let a=0;a<s;a++){let l=Math.random(),c=Math.random()*.95+.05,h=l*Math.PI*2,p=Math.acos(1-c);r[a*3]=Math.sin(p)*Math.cos(h)*3e3,r[a*3+1]=Math.cos(p)*3e3,r[a*3+2]=Math.sin(p)*Math.sin(h)*3e3}let o=new ue;o.setAttribute("position",new ye(r,3)),this.stars=new go(o,new Mr({color:"#dfe6ff",size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1})),this.stars.renderOrder=-1,e.add(this.stars),this.moon=new mo(new vr({map:g1(),fog:!1,depthWrite:!1})),this.moon.scale.setScalar(150),this.moon.userData.noAO=!0,e.add(this.moon),this.nightMaterials=[],this.name=null}dir(t,e){return new A().setFromSphericalCoords(1,sn.degToRad(90-t),sn.degToRad(e))}setTime(t,e){let n=Fp[t]||Fp.day;this.name=t,this.night=n.night;let s=this.dir(n.elev,n.az);for(let o of[this.sky,this.envSky]){let a=o.material.uniforms;[a.turbidity.value,a.rayleigh.value,a.mieCoefficient.value,a.mieDirectionalG.value]=n.sky,a.sunPosition.value.copy(s)}let r=n.moon?this.dir(n.moon.elev,n.moon.az):s;this.sun.position.copy(r).multiplyScalar(150),this.sun.color.set(n.color),this.sun.intensity=n.intensity,this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.renderer.toneMappingExposure=n.exposure,this.scene.fog.color.set(n.fog),this.stars.visible=this.moon.visible=!!n.moon,n.moon&&this.moon.position.copy(r).multiplyScalar(2900),this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,.1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=n.env,e&&(e.mesh.material.envMap=this.envRT.texture,e.mesh.material.envMapIntensity=n.moon?.07:.4,e.mesh.material.roughness=n.moon?.32:.14);for(let[o,a,l]of this.nightMaterials)o.emissiveIntensity=a+(l-a)*n.night;return this.light=n.light,n}},Dc=class{constructor(t,e,n=8){this.ship=t,this.lanterns=e,this.lights=[];for(let s=0;s<n;s++){let r=new Ls("#ffb35c",0,14,1.4);t.body.add(r),this.lights.push(r)}this.timer=0}update(t,e,n,s=1/0){if(this.timer-=t,this.timer<=0){this.timer=.3;let o=this.lanterns.filter(a=>a.p.y<s+mn(a.p.x)+.3).map(a=>({l:a,d:a.p.distanceToSquared(e)})).sort((a,l)=>a.d-l.d);this.lights.forEach((a,l)=>{let c=o[l];c&&a.position.copy(c.l.p).add(new A(0,-.3,0)),a.userData.on=!!c})}let r=16*n;for(let o of this.lights)o.intensity=o.userData.on?r:0}};function En(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Zn(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Rn(i,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let s=new hn(i);return t&&(s.colorSpace=Fe),e&&(s.wrapS=s.wrapT=tn),s.anisotropy=n,s.needsUpdate=!0,s}var qe={black:"#2a2d30",ochre:"#cfa65a",red:"#a88a52",deck:"#b49c76",canvas:"#e8dfc8",copper:"#a8603a",gold:"#d4a640"};function Bp(i,t=2.5){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=En(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=(c,h)=>s[(Math.min(n-1,Math.max(0,h))*e+Math.min(e-1,Math.max(0,c)))*4]/255;for(let c=0;c<n;c++)for(let h=0;h<e;h++){let p=(l(h+1,c)-l(h-1,c))*t,f=(l(h,c+1)-l(h,c-1))*t,d=Math.hypot(p,f,1),g=(c*e+h)*4;a.data[g]=(-p/d*.5+.5)*255,a.data[g+1]=(f/d*.5+.5)*255,a.data[g+2]=(1/d*.5+.5)*255,a.data[g+3]=255}return o.putImageData(a,0,0),r}function Hp(){let e=En(4096,1024),n=e.getContext("2d"),s=En(4096/2,1024/2),r=s.getContext("2d"),o=En(1024,256),a=o.getContext("2d"),l=4096/(Qn-fn),c=1024/(fi-Ri),h=m=>(m-fn)*l,p=m=>(fi-m)*c,f=Zn(7);n.fillStyle=qe.black,n.fillRect(0,0,4096,1024),r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,4096/2,1024/2),n.fillStyle=qe.ochre;for(let[m,u]of Dp)n.fillRect(0,p(u),4096,p(m)-p(u));n.fillRect(0,p(qt.qd+1.02),4096,.09*c);for(let m=Ri;m<fi;m+=.22){let u=[],_=fn-f()*6;for(;_<Qn;)u.push(_),_+=5.5+f()*2;n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(0,p(m),4096,1.2),n.fillStyle="rgba(0,0,0,0.22)";for(let y of u)n.fillRect(h(y),p(m+.22),1.2,.22*c);r.fillStyle="rgb(70,70,70)",r.fillRect(0,p(m)/2-.5,4096/2,1.6);for(let y of u)r.fillRect(h(y)/2-.5,p(m+.22)/2,1.4,.22*c/2);r.fillStyle="rgba(100,100,100,0.8)";for(let y=fn;y<Qn;y+=.75)r.fillRect(h(y)/2,p(m+.08)/2,1.2,1.2),r.fillRect(h(y)/2,p(m+.16)/2,1.2,1.2)}for(let m=0;m<9e3;m++){let u=110+f()*40;r.fillStyle=`rgba(${u|0},${u|0},${u|0},0.35)`,r.fillRect(f()*4096/2,f()*1024/2,4+f()*30,1)}for(let m=0;m<26e3;m++){let u=f()*.07;n.fillStyle=f()<.5?`rgba(0,0,0,${u})`:`rgba(255,240,210,${u*.6})`,n.fillRect(f()*4096,f()*1024,1+f()*5,1+f()*2)}for(let m of Ai()){let u=m.tier,_=m.y-mn(m.x),y=h(m.x-u.w/2),x=p(_+u.h/2),S=u.w*l,E=u.h*c;for(let M=0;M<5;M++){let w=y+f()*S,T=(.4+f()*1.2)*c,P=n.createLinearGradient(0,x+E,0,x+E+T);P.addColorStop(0,`rgba(20,14,8,${.12+f()*.12})`),P.addColorStop(1,"rgba(20,14,8,0)"),n.fillStyle=P,n.fillRect(w,x+E,2+f()*5,T)}n.fillStyle=qe.red,n.fillRect(y,x,S,E);let b=.09;n.fillStyle="#0c0705",n.fillRect(y+b*l,x+b*c,S-2*b*l,E-2*b*c),r.fillStyle="rgb(40,40,40)",r.fillRect((y+b*l)/2,(x+b*c)/2,(S-2*b*l)/2,(E-2*b*c)/2)}for(let m of["lower","middle","upper"])for(let u=-24;u<24;u+=4.6){let _=qt[m]-.05,y=h(u+(m==="middle"?1.5:0)),x=p(_),S=n.createLinearGradient(0,x,0,x+1.1*c);S.addColorStop(0,"rgba(70,45,25,0.35)"),S.addColorStop(1,"rgba(70,45,25,0)"),n.fillStyle=S,n.fillRect(y-4,x,8,1.1*c),n.fillStyle="#3e4042",n.fillRect(y-5,x-4,10,8),n.fillStyle="#0a0806",n.beginPath(),n.ellipse(y,x,2.6,2.2,0,0,Math.PI*2),n.fill(),r.fillStyle="rgb(150,150,150)",r.fillRect(y/2-3.5,x/2-3,7,6),r.fillStyle="rgb(30,30,30)",r.fillRect(y/2-1.5,x/2-1.5,3,3)}for(let m=0;m<256;m++){let u=fn+m/256*(Qn-fn),_=fn+(m+1)/256*(Qn-fn),y=p(Br+.45-mn(u)),x=p(Br-mn(u)),S=n.createLinearGradient(0,y,0,x);S.addColorStop(0,"rgba(45,55,35,0)"),S.addColorStop(1,"rgba(45,55,35,0.55)"),n.fillStyle=S,n.fillRect(h(u),y,h(_)-h(u)+1,x-y)}let d=m=>{m.beginPath(),m.moveTo(0,1024);for(let u=0;u<=256;u++){let _=fn+u/256*(Qn-fn);m.lineTo(h(_),p(Br-mn(_)))}m.lineTo(4096,1024),m.closePath()};n.save(),d(n),n.clip(),r.save(),r.scale(.5,.5),d(r),r.clip(),n.fillStyle=qe.copper,n.fillRect(0,0,4096,1024),r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,4096,1024);let g=1.22,v=.36;for(let m=0,u=Ri;u<3;u+=v,m++)for(let _=fn-m%2*g*.5;_<Qn;_+=g){let y=f(),x=150+y*40,S=82+y*30+f()*25,E=48+y*22;n.fillStyle=`rgb(${x|0},${S|0},${E|0})`,n.fillRect(h(_)+1,p(u+v)+1,g*l-2,v*c-2),f()<.35&&(n.fillStyle=`rgba(70,140,110,${.15+f()*.25})`,n.fillRect(h(_)+1,p(u+v)+1,g*l-2,v*c-2)),r.fillStyle="rgb(165,165,165)",r.fillRect(h(_),p(u+v),3,v*c),r.fillRect(h(_),p(u+v),g*l,3),r.fillStyle="rgb(105,105,105)";for(let b=0;b<12;b++)r.fillRect(h(_)+6+b*(g*l-12)/11,p(u+v)+6,2,2)}n.restore(),r.restore(),a.fillStyle="rgb(0,165,0)",a.fillRect(0,0,1024,256),a.beginPath(),a.moveTo(0,256);for(let m=0;m<=128;m++){let u=fn+m/128*(Qn-fn);a.lineTo((u-fn)/(Qn-fn)*1024,(fi-(Br-mn(u)))/(fi-Ri)*256)}return a.lineTo(1024,256),a.closePath(),a.fillStyle="rgb(0,105,190)",a.fill(),{map:Rn(e,{aniso:16}),metalRough:Rn(o,{srgb:!1}),normal:Rn(Bp(s),{srgb:!1,aniso:16})}}function zp(){let e=En(4096,1024),n=e.getContext("2d"),s=4096/(Qn-fn),r=1024/(fi-Ri),o=h=>(h-fn)*s,a=h=>(fi-h)*r,l=Zn(13),c=(h,p,f)=>{n.fillStyle=f,n.fillRect(0,a(p),4096,a(h)-a(p))};c(Ri,qt.orlop,"#7a6549"),c(qt.orlop,qt.lower,"#d8d0bd"),c(qt.lower,fi,"#c9a965");for(let h=Ri;h<fi;h+=.24)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(0,a(h),4096,1.2);for(let h=0;h<2e4;h++)n.fillStyle=`rgba(0,0,0,${l()*.06})`,n.fillRect(l()*4096,l()*1024,1+l()*6,1+l()*2);for(let h of["orlop","lower","middle","upper","qd"])n.fillStyle="rgba(60,40,20,0.55)",n.fillRect(0,a(qt[h]+.3),4096,.3*r),n.fillRect(0,a(qt[h]-.25),4096,.25*r);for(let h of Ai()){let p=h.tier,f=h.y-mn(h.x),d=o(h.x-p.w/2),g=a(f+p.h/2);n.fillStyle="#9c7f48",n.fillRect(d,g,p.w*s,p.h*r),n.fillStyle="#120b06",n.fillRect(d+.08*s,g+.08*r,(p.w-.16)*s,(p.h-.16)*r)}return Rn(e,{aniso:16})}function kp(){let t=En(256,256),e=t.getContext("2d"),n=Zn(29);e.fillStyle="#6d6a62",e.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=70+n()*90;e.fillStyle=`rgb(${r|0},${r*.97|0},${r*.9|0})`,e.beginPath(),e.ellipse(n()*256,n()*256,1+n()*4,1+n()*3,n()*3,0,Math.PI*2),e.fill()}return Rn(t,{repeat:!0})}function Vp(){let t=En(1024,1024),e=t.getContext("2d"),n=Zn(3),s=1024/8*.28;for(let o=0,a=0;o<1024;o+=s,a++){let l=-n()*1024*.5;for(;l<1024;){let c=128*(5+n()*3),h=n();e.fillStyle=`rgb(${168+h*26|0},${146+h*22|0},${108+h*18|0})`,e.fillRect(l,o,c,s);for(let p=0;p<14;p++)e.fillStyle=`rgba(90,60,30,${n()*.08})`,e.fillRect(l,o+n()*s,c,1);e.fillStyle="rgba(40,25,10,0.7)",e.fillRect(l,o,2,s),e.fillStyle="rgba(60,40,20,0.55)",e.fillRect(l+6,o+s*.3,3,3),e.fillRect(l+6,o+s*.65,3,3),l+=c}e.fillStyle="rgba(25,18,10,0.85)",e.fillRect(0,o,1024,2)}return Rn(t,{repeat:!0,aniso:16})}var Fc=-2.4,Nc=13.6;function Gp(i){let n=En(2048,2048),s=n.getContext("2d"),r=En(512,512),o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,512);let a=d=>(Nc-d)/(Nc-Fc)*2048,l=mn(-28.5);s.fillStyle=qe.black,s.fillRect(0,0,2048,2048),s.fillStyle=qe.copper,s.fillRect(0,a(Br),2048,2048);let c=d=>qt[d]+l;s.fillStyle=qe.ochre,s.fillRect(0,a(c("middle")-.1),2048,.25/16*2048),s.font=`bold ${.55/16*2048}px Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=qe.gold,s.fillText("V I C T O R Y",2048/2,a(c("middle")-.75));let h=[[c("middle")+.45,c("middle")+1.75],[c("upper")+.45,c("upper")+1.75],[c("qd")+.4,c("qd")+1.6]];for(let[d,g]of h){let v=i((d+g)/2),m=v*2,u=x=>(x/m+.5)*2048;s.fillStyle=qe.ochre,s.fillRect(0,a(d),2048,a(d-.45)-a(d)),s.fillStyle="rgba(0,0,0,0.5)";for(let x=-v;x<v;x+=.22)s.fillRect(u(x),a(d-.08),3,a(d-.38)-a(d-.08));let _=9,y=(m-.5)/_;for(let x=0;x<_;x++){let S=-v+.25+x*y;s.fillStyle=qe.ochre,s.fillRect(u(S),a(g+.15),.18/m*2048,a(d)-a(g+.15));let E=u(S+.22),b=u(S+y-.05);s.fillStyle="#e7dcc0",s.fillRect(E,a(g),b-E,a(d)-a(g));let M=3,w=4,T=(b-E)/M,P=(a(d)-a(g))/w;for(let L=0;L<M;L++)for(let N=0;N<w;N++){let I=30+(L*7+N*13+x*5)%9*6;s.fillStyle=`rgb(${I*.6|0},${I*.8|0},${I|0})`,s.fillRect(E+L*T+3,a(g)+N*P+3,T-6,P-6),o.fillStyle=`rgb(255,${190+(L+N+x)%3*15},${110+(L*N+x)%4*12})`,o.fillRect((E+L*T+3)/4,(a(g)+N*P+3)/4,(T-6)/4,(P-6)/4)}}s.fillStyle=qe.ochre,s.fillRect(0,a(g+.4),2048,a(g)-a(g+.4))}let p=c("poop")+.3;s.fillStyle=qe.ochre,s.fillRect(0,0,2048,a(p));let f=Rn(n,{aniso:16});return f.userData.glow=Rn(r),f}function Wp(){let i=En(512,256),t=i.getContext("2d");t.fillStyle=qe.ochre,t.fillRect(0,0,512,256);for(let e=0;e<4;e++){let n=16+e*128;t.fillStyle="#e7dcc0",t.fillRect(n,40,96,176);for(let s=0;s<2;s++)for(let r=0;r<3;r++)t.fillStyle="#26323e",t.fillRect(n+6+s*45,46+r*57,39,51)}return Rn(i,{repeat:!0})}function Uc(){let e=En(256,512),n=e.getContext("2d"),s=Zn(11);n.fillStyle=qe.canvas,n.fillRect(0,0,256,512);for(let r=0;r<4e3;r++)n.fillStyle=`rgba(120,100,70,${s()*.05})`,n.fillRect(s()*256,s()*512,1+s()*3,1);for(let r=0;r<14;r++){let o=s()*256,a=s()*512,l=20+s()*60,c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(120,105,75,${.04+s()*.06})`),c.addColorStop(1,"rgba(120,105,75,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,2*l,2*l)}for(let r=0;r<900;r++)n.fillStyle=`rgba(70,75,60,${s()*.1})`,n.fillRect(s()*256,s()*512,1+s()*2,1+s()*2);{let r=Math.floor(s()*3)*85.33333333333333,o=s()*392;n.fillStyle="rgba(255,252,240,0.35)",n.fillRect(r+3,o,256/3-3,90+s()*50)}for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgba(110,90,60,0.35)",n.fillRect(o,0,3,512),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(o+3,0,2,512)}return Rn(e,{repeat:!0})}function Xp(){let e=En(256,512),n=e.getContext("2d"),s=Zn(12);n.fillStyle="rgb(128,128,128)",n.fillRect(0,0,256,512);for(let r=0;r<260;r++){let o=105+s()*46;n.fillStyle=`rgba(${o|0},${o|0},${o|0},0.5)`,n.fillRect(s()*256,s()*512,2+s()*6,20+s()*90)}for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgb(185,185,185)",n.fillRect(o,0,5,512),n.fillStyle="rgb(90,90,90)",n.fillRect(o+5,0,1.5,512),n.fillRect(o-1.5,0,1.5,512)}return Rn(Bp(e,3),{srgb:!1,repeat:!0})}function qp(){let e=En(256,1024),n=e.getContext("2d");n.drawImage(Uc().image,0,0,256,512),n.drawImage(Uc().image,0,512,256,512);for(let s of[.12,.24,.36]){let r=s*1024;n.fillStyle="rgba(150,130,95,0.55)",n.fillRect(0,r-7,256,14),n.fillStyle="rgba(110,90,60,0.6)",n.fillRect(0,r-8,256,2),n.fillRect(0,r+6,256,2);for(let o=10;o<256;o+=21)n.fillStyle="rgba(70,55,35,0.85)",n.fillRect(o,r-3,3,22)}return Rn(e,{repeat:!0})}function Op(i,t,e,n,s){i.fillStyle="#1f2f6b",i.fillRect(t,e,n,s);let r=(o,a)=>{i.strokeStyle=a,i.lineWidth=o,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+s),i.moveTo(t+n,e),i.lineTo(t,e+s),i.stroke()};i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),r(s*.2,"#fff"),r(s*.07,"#c8202f"),i.restore(),i.fillStyle="#fff",i.fillRect(t+n/2-s*.17,e,s*.34,s),i.fillRect(t,e+s/2-s*.17,n,s*.34),i.fillStyle="#c8202f",i.fillRect(t+n/2-s*.1,e,s*.2,s),i.fillRect(t,e+s/2-s*.1,n,s*.2)}function Yp(i){let n=En(512,256),s=n.getContext("2d");return i==="union"?Op(s,0,0,512,256):i==="pennant"?(s.fillStyle="#fff",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(0,0,40,256),s.fillRect(0,256/2-18,40,36)):(s.fillStyle="#f4f2ec",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(512/2-20,0,40,256),s.fillRect(0,256/2-20,512,40),i==="ensign"&&Op(s,0,0,512/2-20,256/2-20)),Rn(n)}function Zp(){let i=En(256,64),t=i.getContext("2d");t.fillStyle="#d9cfb4",t.fillRect(0,0,256,64);let e=Zn(5);for(let n=0;n<40;n++)t.fillStyle=`rgba(150,130,95,${.2+e()*.3})`,t.fillRect(n*6.4,0,4+e()*2,64);t.strokeStyle="rgba(40,30,20,0.6)",t.lineWidth=1.5;for(let n=-64;n<256;n+=12)t.beginPath(),t.moveTo(n,0),t.lineTo(n+64,64),t.stroke(),t.beginPath(),t.moveTo(n+64,0),t.lineTo(n,64),t.stroke();return Rn(i,{repeat:!0})}function Zu(){let t=En(128,128),e=t.getContext("2d"),n=Zn(17);for(let s=0;s<18;s++){let r=64+(n()-.5)*128*.35,o=128/2+(n()-.5)*128*.35,a=128*(.18+n()*.2),l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}return Rn(t)}function $p(){let t=new Float32Array(65536),e=Zn(23),n=[];for(let l=0;l<40;l++){let c=Math.round((e()-.5)*24),h=Math.round((e()-.5)*24);!c&&!h||n.push([c,h,e()*Math.PI*2,1/Math.hypot(c,h)])}for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0;for(let[p,f,d,g]of n)h+=g*Math.sin((p*c+f*l)/256*Math.PI*2+d);t[l*256+c]=h}let s=En(256,256),r=s.getContext("2d"),o=r.createImageData(256,256),a=2.2;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=t[l*256+(c+1)%256]-t[l*256+(c-1+256)%256],p=t[(l+1)%256*256+c]-t[(l-1+256)%256*256+c],f=-h*a,d=-p*a,g=1,v=Math.hypot(f,d,g);f/=v,d/=v,g/=v;let m=(l*256+c)*4;o.data[m]=(f*.5+.5)*255,o.data[m+1]=(d*.5+.5)*255,o.data[m+2]=(g*.5+.5)*255,o.data[m+3]=255}return r.putImageData(o,0,0),Rn(s,{srgb:!1,repeat:!0})}function $u(i="#9a7448"){let t=En(64,512),e=t.getContext("2d"),n=Zn(31);e.fillStyle=i,e.fillRect(0,0,64,512);for(let s=0;s<90;s++)e.fillStyle=`rgba(60,35,15,${n()*.18})`,e.fillRect(n()*64,0,1+n()*2,512);return Rn(t,{repeat:!0})}var x1=9.81,Kp=[[1,.35,64,.55,.5],[.75,-.65,37,.32,.55],[.25,1,19,.16,.6],[-.55,.8,11,.08,.6],[.9,-.2,7,.045,.5]],oa=Kp.map(([i,t,e,n,s])=>{let r=Math.hypot(i,t),o=2*Math.PI/e;return{dx:i/r,dz:t/r,k:o,A:n,Q:s/(o*n*Kp.length),c:Math.sqrt(x1/o)}}),zs=64,Bc=-30,jp=30,Oc=[-1.2,0,1.2],Ku=Oc.map(i=>Array.from({length:zs},(t,e)=>wt(Bc+e/(zs-1)*(jp-Bc),i))),ju=`
uniform mat4 uShipInv; uniform float uHB0[${zs}], uHB1[${zs}], uHB2[${zs}];
bool insideHull(vec3 world) {
  vec3 lp = (uShipInv * vec4(world, 1.0)).xyz;
  float fx = (lp.x - (${Bc.toFixed(1)})) / ${(jp-Bc).toFixed(1)} * ${(zs-1).toFixed(1)};
  if (fx <= 0.0 || fx >= ${(zs-1).toFixed(1)}) return false;
  int i = int(floor(fx)); float f = fract(fx);
  float a = mix(uHB0[i], uHB0[i + 1], f), b = mix(uHB1[i], uHB1[i + 1], f), c = mix(uHB2[i], uHB2[i + 1], f);
  float t = clamp((lp.y - (${Oc[0].toFixed(1)})) / ${(Oc[2]-Oc[0]).toFixed(1)}, 0.0, 1.0);
  float hb = t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, t * 2.0 - 1.0);
  return abs(lp.z) < hb - 0.04;
}`;function _1(){return{uShipInv:{value:new Et},uHB0:{value:Ku[0]},uHB1:{value:Ku[1]},uHB2:{value:Ku[2]}}}var Jp=`
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
vec2 seaRot(vec2 d) { return vec2(uWaveRot.x * d.x - uWaveRot.y * d.y, uWaveRot.y * d.x + uWaveRot.x * d.y); }
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${oa.map(i=>`  y += ${i.A.toFixed(5)} * sin(${i.k.toFixed(5)} * (dot(seaRot(vec2(${i.dx.toFixed(5)}, ${i.dz.toFixed(5)})), p) - ${i.c.toFixed(5)} * uTime));`).join(`
`)}
  return y * uWaveScale;
}`;function v1(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256);let n=5,s=()=>(n=n*16807%2147483647,n/2147483647);for(let o=0;o<700;o++){let a=s()*256,l=s()*256,c=2+s()*14,h=.15+s()*.35;for(let[p,f]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]]){let d=e.createRadialGradient(a+p,l+f,0,a+p,l+f,c);d.addColorStop(0,`rgba(255,255,255,${h})`),d.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=d,e.fillRect(a+p-c,l+f-c,c*2,c*2)}}let r=new hn(t);return r.wrapS=r.wrapT=tn,r}var Hc=class{constructor(t){this.time=0,this.offset=new $,this.scale=1;let e=420,n=4e3,s=new Float32Array(e*e*3),r=new Float32Array(e*e*2),o=g=>Math.sign(g)*Math.pow(Math.abs(g),2.6)*n;for(let g=0;g<e;g++)for(let v=0;v<e;v++){let m=g*e+v,u=o(v/(e-1)*2-1),_=o(g/(e-1)*2-1);s[m*3]=u,s[m*3+1]=0,s[m*3+2]=_,r[m*2]=u/70,r[m*2+1]=_/70}let a=new Uint32Array((e-1)*(e-1)*6),l=0;for(let g=0;g<e-1;g++)for(let v=0;v<e-1;v++){let m=g*e+v,u=m+1,_=m+e,y=_+1;a[l++]=m,a[l++]=_,a[l++]=u,a[l++]=u,a[l++]=_,a[l++]=y}let c=new ue;c.setAttribute("position",new ye(s,3)),c.setAttribute("uv",new ye(r,2)),c.setAttribute("normal",new ye(new Float32Array(e*e*3).fill(0).map((g,v)=>v%3===1?1:0),3)),c.setIndex(new ye(a,1)),c.boundingSphere=new li(new A,n*1.5);let h=$p(),p=new ae({color:"#062a3a",roughness:.14,metalness:0,envMap:t,envMapIntensity:.4,normalMap:h,normalScale:new $(.09,.09)});this.uniforms={uTime:{value:0},uOffset:{value:this.offset},uWaveScale:{value:1},uWaveRot:{value:new $(1,0)},uCaps:{value:0},uFoamTex:{value:v1()},uLight:{value:1},..._1()};let f=this.uniforms,d=oa.map(g=>`wave(p, vec2(${g.dx.toFixed(5)}, ${g.dz.toFixed(5)}), ${g.k.toFixed(5)}, ${g.A.toFixed(5)} * uWaveScale, ${g.Q.toFixed(5)}, ${g.c.toFixed(5)}, disp, tx, tz);`).join(`
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
${d}
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
${ju}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92) * uLight, clamp(cap * 1.4, 0.0, 0.9));`)},this.normalMap=h,this.mesh=new X(c,p),this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.name="sea",this.mesh.userData.noAO=!0}update(t,e){this.time=t,this.uniforms.uTime.value=t,this.offset.set(e,0),this.normalMap.offset.set((e/70+t*.004)%1,t*.003%1)}setScale(t){this.scale=t,this.uniforms.uWaveScale.value=t}setCaps(t){this.uniforms.uCaps.value=Math.max(0,Math.min(1,(t-.35)/.6))}setDirection(t){let e=Math.atan2(oa[0].dz,oa[0].dx);this.rot=t-e,this.uniforms.uWaveRot.value.set(Math.cos(this.rot),Math.sin(this.rot))}heightAt(t,e){let n=t+this.offset.x,s=e+this.offset.y,r=this.time,o=Math.cos(this.rot||0),a=Math.sin(this.rot||0),l=0;for(let c of oa){let h=o*c.dx-a*c.dz,p=a*c.dx+o*c.dz;l+=c.A*this.scale*Math.sin(c.k*(h*n+p*s-c.c*r))}return l}};function ys(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<i.length;++h){let p=i[h],f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(p.morphAttributes[d])}if(t){let d;if(e)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,p=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)p.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(p)}for(let h in r){let p=Qp(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<p;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let g=Qp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Qp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let v=h.getComponent(f,g);a.setComponent(f+p,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Vn(i,t,e,n,s=!1){let r=new Float32Array(i*t*3),o=new Float32Array(i*t*2);for(let c=0;c<t;c++)for(let h=0;h<i;h++){let p=c*i+h,f=e(h,c);r[p*3]=f[0],r[p*3+1]=f[1],r[p*3+2]=f[2];let d=n?n(h,c,f):[h/(i-1),c/(t-1)];o[p*2]=d[0],o[p*2+1]=d[1]}let a=[];for(let c=0;c<t-1;c++)for(let h=0;h<i-1;h++){let p=c*i+h,f=p+1,d=p+i,g=d+1;s?a.push(p,g,f,p,d,g):a.push(p,f,g,p,g,d)}let l=new ue;return l.setAttribute("position",new ye(r,3)),l.setAttribute("uv",new ye(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function aa(i,t,e,n,s=!1){let r=Vn(i,t,e,n,s),o=Vn(i,t,(a,l)=>{let c=e(a,l);return[c[0],c[1],-c[2]]},n,!s);return ys([r,o])}var tm=new A(0,1,0);function Je(i,t,e,n,s=tm){let r=new A().subVectors(t,i),o=r.length(),a=new Gt(o,n,e),l=r.clone().normalize(),c=new A().crossVectors(l,s);c.lengthSq()<1e-6&&c.set(0,0,1),c.normalize();let h=new A().crossVectors(c,l),p=new Et().makeBasis(l,h,c);return p.setPosition(i.clone().add(t).multiplyScalar(.5)),a.applyMatrix4(p),a}function we(i,t,e,n=e,s=10){let r=new A().subVectors(t,i),o=r.length(),a=new Jt(n,e,o,s,1),l=new We().setFromUnitVectors(tm,r.clone().normalize());return a.applyQuaternion(l),a.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),a}function Ju(i,t,e,n=.28,s=.14){let r=[],o=c=>c.clone().add(new A(0,e,0));r.push(Je(o(i),o(t),s,.09));let a=i.distanceTo(t),l=Math.max(1,Math.round(a/n));for(let c=0;c<=l;c++){let h=i.clone().lerp(t,c/l),p=new Jt(.035,.05,e,6);p.translate(h.x,h.y+e/2,h.z),r.push(p)}return ys(r.map(c=>c.index?c.toNonIndexed():c))}function xt(i){let t=i.map(e=>e.index?e.toNonIndexed():e);for(let e of t)e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals();return ys(t)}var zc=null,la={uSunView:{value:new A(0,1,0)},uSunCol:{value:new Qt(1,.95,.85)}};function em(i){return i.onBeforeCompile=t=>{t.uniforms.uSunView=la.uSunView,t.uniforms.uSunCol=la.uSunCol,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView; uniform vec3 uSunCol;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
{ float back = max(0.0, -dot(normal, uSunView));
  reflectedLight.directDiffuse += diffuseColor.rgb * uSunCol * back * back * 0.22; }`)},i.customProgramCacheKey=()=>"sail-translucent",i}function ge(){if(zc)return zc;let i=(r,o=.7,a=0,l={})=>new ae({color:r,roughness:o,metalness:a,...l}),t=Vp(),e=$u("#b08a58"),n=$u("#5a4630"),s=Xp();return zc={black:i(qe.black,.6),ochre:i(qe.ochre,.6),red:i(qe.red,.75),inside:i("#c9a965",.75),carriage:i("#8a6e44",.8),gold:i(qe.gold,.35,.8),iron:i("#26282a",.55,.6),brass:i("#b58d3e",.3,.9),copper:i(qe.copper,.45,.8),deck:i("#ffffff",.85,0,{map:t}),mast:i("#ffffff",.7,0,{map:e}),spar:i("#24211d",.78),darkWood:i("#ffffff",.75,0,{map:n}),rope:i("#3b2f22",.9),ropeLight:i("#8a7556",.9),canvas:em(i("#f4efe4",.92,0,{map:Uc(),normalMap:s,normalScale:new $(.5,.5),side:De})),canvasReef:em(i("#f4efe4",.92,0,{map:qp(),normalMap:s,normalScale:new $(.5,.5),side:De})),furl:i("#c4b99c",.95),hammock:i("#ffffff",.95,0,{map:Zp()}),glass:i("#2b3a48",.15,.4,{emissive:"#000000"}),lantern:i("#ffd27a",.3,0,{emissive:"#ffb347",emissiveIntensity:0}),white:i("#eeeeee",.6)},zc}var y1=()=>new ae({color:"#c99573",roughness:.6});function ca(i,t,e,n=.3,s=1.6,r=.045,o=0){let a=[];for(let g=0;g<=40;g++){let v=g/40,m=v*s*Math.PI*2,u=n*(1-.82*v);a.push(i.clone().addScaledVector(t,Math.cos(m)*u-o*(1-v)**3).addScaledVector(e,Math.sin(m)*u))}let c=new xn(new gn(a),60,r,6,!1),h=c.attributes.position,p=h.count,f=7,d=new gn(a);for(let g=0;g<p;g++){let v=Math.floor(g/f)/60,m=d.getPoint(Math.min(1,v)),u=1-.6*v;h.setXYZ(g,m.x+(h.getX(g)-m.x)*u,m.y+(h.getY(g)-m.y)*u,m.z+(h.getZ(g)-m.z)*u)}return c.computeVertexNormals(),c}function M1(i=.5,t=.16){let e=new Ke;e.moveTo(0,0),e.quadraticCurveTo(t,i*.4,0,i),e.quadraticCurveTo(-t,i*.4,0,0);let n=new Tn(e,{depth:.03,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:1}),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getY(r);s.setZ(r,s.getZ(r)+.25*(o/i)**2)}return n.computeVertexNormals(),n}function nm(i){let t=ge(),e=y1(),n=new Yt,s=(a,l,c,h,p,f=0,d=0,g=0)=>{let v=new X(a,l);return v.position.set(c,h,p*i),v.rotation.set(f*i,d*i,g),n.add(v),v};s(new me(.19,14,12).scale(.9,1.2,1),e,0,.1,0),s(new me(.17,12,10).scale(1,.85,1.05),e,.03,-.12,0),s(new me(.17,14,12),e,.04,.5,.02);for(let a=0;a<9;a++){let l=a/9*Math.PI*2;s(new me(.055,8,6),t.gold,.04-.1*Math.cos(l)*.8,.6+.06*Math.sin(l*2),.02+.13*Math.sin(l))}s(new me(.03,6,6),e,.2,.48,.06),s(new Oe(.045,.32,4,8),e,.1,.3,-.22,-1.2,0,.3),s(new me(.055,8,6),e,.18,.47,-.42),s(new Oe(.045,.28,4,8),e,.12,.05,.22,.5,0,-.6),s(new Oe(.06,.3,4,8),e,.08,-.38,-.1,.2,0,.5),s(new Oe(.06,.28,4,8),e,.15,-.36,.12,-.3,0,-.8);for(let a=0;a<3;a++)for(let l=0;l<5;l++){let c=new me(1,8,6).scale(.04,.32-a*.07,.08);s(c,t.gold,-.2-a*.02,.32+l*.03-a*.05,.12+a*.06,0,0,0).rotation.set(i*(.35+l*.22+a*.1),0,-.25)}let r=[];for(let a=0;a<=12;a++){let l=a/12;r.push(new A(.12+.1*Math.sin(l*6),-.05-l*.5,i*(.24+.18*l+.06*Math.cos(l*7))))}let o=new X(new xn(new gn(r),30,.045,6),new ae({color:"#2a4a9a",roughness:.6}));return o.scale.set(1,1,1),n.add(o),n.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),n}function im(){let i=ge(),t=new Yt,e=new X(new be(.82,.075,8,40).scale(1,1.18,1),new ae({color:"#203a8a",roughness:.45}));e.rotation.y=Math.PI/2;let n=new X(new be(.9,.03,6,40).scale(1,1.17,1),i.gold);n.rotation.y=Math.PI/2;let s=new X(new Gt(.06,.16,.2),i.gold);s.position.set(.06,-.96,.18),t.add(e,n,s);let r=[];for(let a=0;a<18;a++){let l=a/18*Math.PI*2,c=M1(.36,.13);c.rotateZ(-Math.PI/2).rotateY(Math.PI/2),c.rotateX(l+Math.PI/2),c.translate(-.05,Math.sin(l)*1.12,Math.cos(l)*.96),r.push(c)}let o=new X(xt(r),i.gold);return t.add(o),t.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t}function sm(i,t){let e=[];for(let s of[1,-1]){let r=s*.33,o=new A(1,0,0),a=new A(0,1,0),l=[[i-1.15,t-1.15,.22],[i-1.85,t-1.85,.25],[i-2.55,t-2.45,.24],[i-3.2,t-2.9,.2]];l.forEach(([h,p,f],d)=>e.push(ca(new A(h,p,r),d%2?o.clone().negate():o,a,f,1.5,.035,.3)));let c=new gn(l.map(([h,p])=>new A(h+.15,p+.25,r)));e.push(new xn(c,30,.03,5))}let n=new X(xt(e),ge().gold);return n.castShadow=!0,n}function rm(i){let t=i.map(([n,s])=>ca(n,new A(-1,0,0),new A(0,1,0).add(new A(0,0,s*.3)).normalize(),.16,1.3,.05)),e=new X(xt(t),ge().gold);return e.castShadow=!0,e}var ks=i=>Fr(i)*ra(i);function Pi(i,t){let e=ks(t);return Me(t)-.45*Yi(1,3,t)*(1-(e>0?(i/e)**2:1))}function kc(i,t,e,n=.02){let r=(Pi(t+.05,e)-Pi(t-.05,e))/.1,o=(Pi(t,e+.05)-Pi(t,e-.05))/(2*.05),a=new A(-1,o,r).normalize(),l=new Et().lookAt(a,new A,new A(0,1,0));return i.applyMatrix4(l),i.translate(Pi(t,e)+a.x*n,e+a.y*n,t+a.z*n),i}function om(i,t=null){let e=ge(),n=mn(-28.5),s=S=>qt[S]+n,r=[[s("middle")+.45,s("middle")+1.75],[s("upper")+.45,s("upper")+1.75],[s("qd")+.4,s("qd")+1.6]],o=[],a=[],l=new Sn([[.05,0],[.05,.04],[.035,.06],[.06,.15],[.045,.24],[.028,.28],[.045,.3],[.045,.34]].map(([S,E])=>new $(S,E)),8),c=[];for(let[S,E]of r){let b=(S+E)/2,M=ks(b),w=M*2,T=9,P=(w-.5)/T;for(let N=0;N<=T;N++){let U=(-M+.25+N*P+(N===T?-.1:.09))/w,z=et=>U*2*ks(et),H=E+.15-S;o.push(kc(new Gt(.16,H,.07).translate(0,0,.035),z(S+H/2),S+H/2)),a.push(kc(new Gt(.24,.1,.1).translate(0,0,.05),z(E+.12),E+.12)),a.push(kc(new Gt(.22,.08,.09).translate(0,0,.045),z(S+.04),S+.04)),a.push(kc(ca(new A(0,0,.08),new A(1,0,0),new A(0,1,0),.06,1.4,.018),z(E+.05),E+.05))}for(let N of[S-.06,S-.42]){let I=[];for(let U=0;U<=24;U++){let z=fe(-ks(N)+.15,ks(N)-.15,U/24);I.push(new A(Pi(z,N)-.07,N,z))}a.push(new xn(new gn(I),48,.04,6))}let L=S-.4;for(let N=-ks(L)+.3;N<ks(L)-.3;N+=.22){let I=new Et().makeTranslation(Pi(N,L)-.07,L,N);c.push(I)}}let h=new Yt,p=s("poop")+.45,f=Pi(0,p+.9);h.position.set(f-.12,p,0);let d=S=>Pi(S,p+.5)-Pi(0,p+.5),g=new Ke;g.moveTo(-.45,.55),g.lineTo(.45,.55),g.lineTo(.45,-.05),g.quadraticCurveTo(.45,-.5,0,-.68),g.quadraticCurveTo(-.45,-.5,-.45,-.05),g.closePath();let v=new Tn(g,{depth:.12,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});{let S=v.attributes.uv,E=v.attributes.position;for(let b=0;b<S.count;b++)S.setXY(b,(E.getX(b)+.49)/.98,(E.getY(b)+.72)/1.31)}v.rotateY(-Math.PI/2).translate(0,.85,0);let m=[new Jt(.3,.26,.22,14).translate(0,1.6,0),new me(.09,8,6).translate(0,1.95,0)];for(let S of[0,Math.PI/2])m.push(new be(.26,.035,5,14,Math.PI).rotateY(S).translate(0,1.66,0));let u=(S,E)=>{let b=[],M=w=>S*w;if(b.push(new Oe(.15,.42,4,10).rotateX(M(-.55)).translate(0,.72,M(.9))),b.push(new Oe(.07,.3,3,8).rotateX(M(-.2)).translate(0,.28,M(1))),b.push(new Oe(.07,.28,3,8).rotateX(M(.25)).translate(0,.28,M(.8))),b.push(new Oe(.055,.34,3,8).rotateX(M(1.1)).translate(0,1,M(.58))),b.push(new Oe(.055,.3,3,8).rotateX(M(.7)).translate(0,.82,M(.6))),b.push(new Oe(.035,.35,3,6).rotateX(M(.4)).translate(0,1.12,M(.84))),E){b.push(new Oe(.075,.2,4,8).rotateX(M(1.3)).translate(0,1.3,M(.72))),b.push(new as(.025,.34,6).rotateX(M(1)).translate(0,1.42,M(.55)));for(let w=0;w<5;w++)b.push(new me(.035,6,4).translate(0,1.18-w*.07,M(.98+w*.02)))}else{b.push(new me(.13,10,8).translate(0,1.3,M(.78))),b.push(new Gt(.1,.08,.1).translate(0,1.27,M(.65)));for(let w=0;w<8;w++){let T=w/8*Math.PI*2;b.push(new me(.06,6,4).translate(0,1.3+Math.sin(T)*.15,M(.82+Math.cos(T)*.12)))}b.push(new Jt(.09,.08,.08,8).translate(0,1.46,M(.78)))}return b.push(ca(new A(0,.5,M(1.18)),new A(0,0,S),new A(0,1,0),.13,1.3,.025)),b},_=[...m,...u(1,!0),...u(-1,!1)];for(let S of[1,-1])for(let E=0;E<3;E++){let b=S*(1.5+E*1.1);_.push(ca(new A(d(b),.6,b),new A(0,0,S),new A(0,1,0),.32-E*.06,1.6,.05,.35))}h.add(new X(xt(_),e.gold)),h.add(new X(v,t?[t,e.gold]:e.gold)),h.rotation.z=.1;let y=new Yt;y.name="sternCarvings",y.add(new X(xt(o),e.ochre),new X(xt(a),e.gold),h);let x=new cn(l,e.gold,c.length);return c.forEach((S,E)=>x.setMatrixAt(E,S)),y.add(x),y.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),y}function am(i){let t=ge(),e=new Sn([[.001,-.9],[.06,-.8],[.04,-.62],[.12,-.5],[.08,-.32],[.16,-.2],[.18,0],[.001,.02]].map(([o,a])=>new $(o,a)),12),n=new Sn([[.2,0],[.22,.06],[.1,.2],[.14,.32],[.05,.5],[.08,.6],[.001,.75]].map(([o,a])=>new $(o,a)),12),s=[];for(let{p:o,kind:a}of i)s.push((a==="drop"?e:n).clone().translate(o.x,o.y,o.z));let r=new X(xt(s),t.gold);return r.castShadow=!0,r}var ha=220,Hr=120,ti=.32;function S1(i){return .45*i+.55*(.5-.5*Math.cos(Math.PI*i))}function E1(i,t){let e=S1(i),n=-7.4,s=0;for(let r=0;r<5;r++)s=Me(n)+e*(Be(n)-Me(n)),n=-7.4+t*(Ie(s)- -7.4);return[s,n,Fr(n)*Xu(e,n)]}function b1(i){return i<Ze?pt("poop",i):pt("qd",i)}function w1(i){return i>pn+.2&&i<$e-.2?pt("upper",i):b1(i)}function lm(){let i=ge(),t=new Yt;t.name="hull";let e=Hp(),n=new ae({map:e.map,roughnessMap:e.metalRough,metalnessMap:e.metalRough,normalMap:e.normal,normalScale:new $(.8,.8),roughness:1,metalness:1}),s=[];for(let O=0;O<Hr;O++)for(let G=0;G<ha;G++)s.push(E1(G/(ha-1),O/(Hr-1)));let r=(O,G)=>s[G*ha+O],o=aa(ha,Hr,r,(O,G,tt)=>[qu(tt[0]),Yu(tt[0],tt[1])]),a=new X(o,n);a.castShadow=a.receiveShadow=!0,a.name="planking",t.add(a);let l=[],c=(O,G,tt,ut=.02)=>{let lt=[[O,0],[O+ut,tt],[G-ut,tt],[G,0]],gt=(O+G)/2,zt=Me(gt+mn(-27))+.05,J=Be(gt)-.2,st=160;l.push(aa(st,lt.length,(rt,ct)=>{let dt=fe(zt,J,rt/(st-1)),[Bt,Dt]=lt[ct],kt=Bt+mn(dt),te=wt(dt,kt);return[dt,kt,te>.05?te+Dt*Math.min(1,te/1.5):0]},(rt,ct,dt)=>[qu(dt[0]),Yu(dt[0],dt[1])]))};c(.6,1.1,.09),c(2.53,3.22,.08),c(4.54,5.31,.07),c(qt.qd+1.03,qt.qd+1.1,.04,.01);let h=new X(xt(l),n);h.castShadow=h.receiveShadow=!0,h.name="wales",t.add(h);{let O=[],G=[],ut=pt("middle",2)+.1;for(let zt of[1,-1]){for(let J=.75;J<ut;J+=.32){let st=wt(2,J)+.14,rt=new Gt(.55,.1,.16);rt.translate(2,J,zt*st),O.push(rt)}for(let J of[-.42,.42]){let st=[];for(let rt=.55;rt<=ut+.6;rt+=.25)st.push(new A(2+J,rt,zt*(wt(2+J,rt)+.11)));G.push(new xn(new gn(st),24,.09,6))}}let lt=new X(xt(O),i.darkWood),gt=new X(xt(G),i.black);lt.castShadow=gt.castShadow=!0,t.add(lt,gt)}let p=new X(o,new ae({map:zp(),roughness:.85,side:un}));p.name="innerPlanking",p.receiveShadow=!0,t.add(p);let f=[];for(let O=0;O<Hr;O++){let G=r(0,O);(G[2]>.01||O+1<Hr&&r(0,O+1)[2]>.01)&&f.push(G)}let d=48,v=Gp(O=>Fr(O)*ra(O)),m=new ae({map:v,roughness:.6,emissiveMap:v.userData.glow,emissive:"#ffffff",emissiveIntensity:0});t.userData.glow=[m];let u=Vn(d,f.length,(O,G)=>{let[tt,ut,lt]=f[G],gt=fe(-lt,lt,O/(d-1)),zt=.45*Yi(1,3,ut)*(1-(lt>0?(gt/lt)**2:1));return[tt-zt,ut,gt]},(O,G)=>[O/(d-1),(f[G][1]-Fc)/(Nc-Fc)]),_=new X(u,m);_.castShadow=_.receiveShadow=!0,_.name="stern",t.add(_),t.add(om(f[f.length-1][1],new ae({map:cm(),roughness:.45,metalness:.2})));let y=new X(u,new ae({map:m.map,roughness:.7,side:un,color:"#d8cdb4"}));y.name="innerPlanking",t.add(y);let x=[];for(let O=0;O<ha;O++){let G=r(O,Hr-1);G[2]-ti>.06&&x.push(G)}let S=10,E=aa(x.length,S,(O,G)=>{let tt=x[O][0],ut=x[O][1],lt=fe(w1(tt)-.05,ut,G/(S-1));return[tt,lt,Math.max(.05,wt(tt,lt)-ti)]},(O,G)=>[x[O][0]/4,G/(S-1)],!0),b=new X(E,i.inside.clone());b.name="bulwark",b.receiveShadow=!0,t.add(b);let M=aa(x.length,2,(O,G)=>{let[tt,ut,lt]=x[O];return G===0?[tt,ut+.01,lt+.04]:[tt,ut+.01,Math.max(.05,wt(tt,ut)-ti-.03)]});t.add(new X(M,i.black));let w=x[0][0],T=pt("poop",w),P=x[0][1],L=Vn(12,4,(O,G)=>{let tt=fe(T,P,G/3),ut=Math.max(.1,wt(w+.4,tt)-ti);return[Me(tt)+.35,tt,fe(-ut,ut,O/11)]},null,!0);t.add(new X(L,i.inside));let N=[],I=(O,G,tt,ut,lt=.12)=>{let gt=Math.max(4,Math.round((tt-G)/.8)),zt=10;N.push(Vn(gt,zt,(J,st)=>{let rt=fe(G,tt,J/(gt-1)),ct=pt(O,rt),dt=Math.max(.05,wt(rt,ct+.4)-ti),[Bt,Dt]=ut(dt),kt=fe(Bt,Dt,st/(zt-1));return[rt,ct+lt*(1-(kt/dt)**2),kt]},(J,st,rt)=>[rt[0]/8,rt[2]/8],!0))},U=O=>[-O,O],z=2.5;I("qd",Me(qt.qd)+.4,pn,U),I("qd",$e,Be(qt.qd)-.4,U),I("qd",pn,$e,O=>[O-z,O],0),I("qd",pn,$e,O=>[-O,-O+z],0),I("poop",Me(qt.poop)+.4,Ze,U);let H=new X(xt(N),i.deck);i.deck.side=De,H.receiveShadow=!0,H.castShadow=!0,H.name="weatherDecks",t.add(H);let et=[],F=(O,G,tt,ut=0)=>{let lt=wt(O,tt)-ti-ut;et.push(Vn(2,2,(gt,zt)=>[O,zt?tt:G,gt?lt:-lt]))};F(pn,pt("upper",pn),pt("qd",pn)+.12),F($e,pt("upper",$e),pt("qd",$e)+.12);for(let O of[1,-1])et.push(Vn(16,2,(tt,ut)=>{let lt=fe(pn,$e,tt/15),gt=pt("qd",lt),zt=wt(lt,gt+.4)-ti-z;return[lt,ut?gt+.02:gt-.35,O*zt]},null,O<0));let j=xt(et),K=i.inside.clone();K.side=De,t.add(new X(j,K));{let O=Ze-4.2,G=pt("qd",O),tt=pt("poop",O)-.3,ut=wt(O,tt)-ti,lt=Wp();lt.repeat.set((ut-.5)/3.2,1);let gt=new ae({map:lt,roughness:.6,side:De});for(let[J,st]of[[ut,.5],[-.5,-ut]])t.add(new X(Vn(2,2,(rt,ct)=>[O,ct?tt:G,rt?st:J],(rt,ct)=>[rt,ct]),gt));let zt=Je(new A(O,G+1.95,-.5),new A(O,G+1.95,.5),.1,.1);t.add(new X(zt,i.darkWood))}let mt=[],yt=(O,G,tt,ut,lt=1)=>{let gt=pt(G,O)+.1,zt=wt(O,gt)-ti-.1-tt,J=[-zt,-ut-.45,-ut+.45,ut-.45,ut+.45,zt];for(let st=0;st<J.length;st+=2)mt.push(Ju(new A(O,gt,J[st]),new A(O,gt,J[st+1]),lt))};yt(pn-.1,"qd",z,2.6),yt($e+.1,"qd",z,2.6),yt(Ze-.1,"poop",0,3.4);for(let O of[1,-1]){let G=[];for(let tt=0;tt<=6;tt++){let ut=fe(pn,$e,tt/6),lt=pt("qd",ut);G.push(new A(ut,lt,O*(wt(ut,lt+.4)-ti-z+.08)))}for(let tt=0;tt<6;tt++)mt.push(Ju(G[tt],G[tt+1],.95,.5,.1))}let jt=new X(xt(mt),i.darkWood);jt.castShadow=!0,t.add(jt);let Nt=[];for(let O of[3.6,7,10.4,13.8]){let G=pt("qd",O)+.2,tt=wt(O,G)-ti-z+.2;Nt.push(Je(new A(O,G,-tt),new A(O,G,tt),.28,.3))}let Ht=new X(xt(Nt),i.darkWood);Ht.castShadow=!0,t.add(Ht);{let ut=i.hammock;for(let lt of[1,-1]){let gt=[[-.24,0],[-.26,.42],[-.18,.56],[.18,.56],[.26,.42],[.24,0]],zt=Vn(140,gt.length,(st,rt)=>{let ct=fe(-25.2,25,st/139),dt=Ie(ct)+.02,Bt=wt(ct,dt)-ti/2,[Dt,kt]=gt[rt];return[ct,dt+kt,lt*(Bt+Dt)]},(st,rt)=>[fe(-25.2,25,st/139)/2.5,rt/(gt.length-1)],lt>0),J=new X(zt,ut);J.castShadow=!0,t.add(J)}}{let O=[];for(let zt=0;zt<=24;zt++){let J=fe(-7.4,Ie(28.5)-.3,zt/24);O.push(new A(Be(J)+.08,J,0))}let G=new xn(new gn(O),48,.26,6,!1);t.add(new X(G,i.black));let tt=new Ke,ut=Hs+.6;tt.moveTo(Me(-7.4),-7.4),tt.lineTo(Me(ut)+.3,ut),tt.lineTo(Me(ut)-.6,ut),tt.lineTo(Me(Hs)-1,Hs-.6),tt.lineTo(Me(-7.4)-1.7,-7.4+.3),tt.closePath();let lt=new Tn(tt,{depth:.36,bevelEnabled:!1});lt.translate(0,0,-.18);let gt=new X(lt,i.black);gt.castShadow=!0,t.add(gt)}return t.add(T1()),t.add(A1()),t}function T1(){let i=ge(),t=new Yt;t.name="head";let e=33.35,n=pt("upper",30)+2.3,s=new Ke,r=-2.2,o=n-.2;s.moveTo(Be(r),r);for(let u=1;u<=10;u++){let _=fe(r,o,u/10);s.lineTo(Be(_)-.05,_)}s.lineTo(e-.4,n+.1),s.quadraticCurveTo(e+.2,n-1.6,e-1,n-3.6),s.quadraticCurveTo(29.8,-.2,Be(r)+.4,r),s.closePath();let a=new Tn(s,{depth:.5,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});a.translate(0,0,-.25);let l=new X(a,i.black);l.castShadow=!0,t.add(l);let c=new Ke;c.moveTo(Be(n-2.5)+.2,n-2.5),c.quadraticCurveTo(e-1.3,n-1,e-.6,n-.3),c.lineTo(e-.9,n-.9),c.quadraticCurveTo(e-2.2,n-2.3,Be(n-3.2)+.3,n-3.2),c.closePath();let h=new Tn(c,{depth:.62,bevelEnabled:!1});h.translate(0,0,-.31),t.add(new X(h,i.ochre)),t.add(sm(e,n));let p=[],f=[],d=pt("upper",27);for(let u of[1,-1]){let _=[];for(let y=0;y<3;y++){let x=-y*.55,S=[new A(26,d+2.2+x,u*(wt(26,d+2.2+x)+.05)),new A(28.4,d+1.75+x*.9,u*2.5),new A(30.6,d+1.55+x*.75,u*1.25),new A(e-.55,n-.35+x*.55,u*.32)],E=new gn(S,!1,"centripetal");_.push(E),p.push(new xn(E,32,y===0?.1:.075,6,!1))}for(let y of[.25,.45,.65]){let x=_[0].getPoint(y),S=_[2].getPoint(y);f.push(we(x,S.clone().add(new A(0,-.5,0)),.07,.07,6))}}let g=new X(xt(p),i.ochre);g.castShadow=!0,t.add(g);let v=[];for(let u of[1,-1])for(let _=0;_<3;_++)v.push([new A(e-.62,n-.42-_*.3,u*.36),u]);t.add(rm(v)),t.add(new X(xt(f),i.black));let m=Vn(6,6,(u,_)=>{let y=fe(28.9,31.6,u/5),x=fe(2.2,.7,u/5);return[y,d+.5+u/5*.5,fe(-x,x,_/5)]},null,!0);t.add(new X(m,i.darkWood)),t.add(R1(e,n));for(let u of[1,-1]){let y=pt("qd",25.6)+.55,x=wt(25.6,y)-.4,S=new A(25.6-.6,y,u*(x-.6)),E=new A(25.6+1.4,y+.25,u*(x+1.9)),b=new X(Je(S,E,.42,.42),i.black);b.castShadow=!0,t.add(b);let M=new X(new Jt(.2,.2,.05,12),i.gold);M.position.copy(E),M.lookAt(E.clone().add(E.clone().sub(S))),M.rotateX(Math.PI/2),t.add(M)}for(let u of[1,-1])for(let _ of[0,.75]){let y=26.9+_,x=pt("middle",y)+.9,S=wt(y,x),E=new X(new Jt(.24,.24,.1,14),i.iron),b=new X(new Ps(.17,14),new Vi({color:"#050403"})),M=new A(wt(y-.2,x)-wt(y+.2,x),0,u*.4).normalize();E.position.set(y,x,u*S),E.quaternion.setFromUnitVectors(new A(0,1,0),M),b.position.set(y,x,u*(S+.06)).addScaledVector(M,.02),b.lookAt(b.position.clone().add(M)),t.add(E,b)}return t}function cm(){let i=document.createElement("canvas");i.width=512,i.height=600;let t=i.getContext("2d"),e="#e2b33c",n="#b8202a",s="#1f3c8c",r=(c,h,p,f,d)=>{t.save(),t.translate(c,h),t.scale(p,p),f&&t.rotate(-.9),t.fillStyle=d,t.beginPath(),t.ellipse(0,0,.42,.17,0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(-.45,-.12,.15,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(-.6,-.12),t.lineTo(-.72,-.05),t.lineTo(-.58,-.02),t.fill(),t.lineWidth=.07,t.strokeStyle=d,t.lineCap="round";for(let[g,v]of[[-.28,-.4],[-.15,-.05],[.2,.12],[.32,.45]])t.beginPath(),t.moveTo(g,.08),t.lineTo(v,f?.42:.38),t.stroke();t.beginPath(),t.moveTo(.4,-.05),t.quadraticCurveTo(.75,-.2,.62,-.5),t.stroke(),t.beginPath(),t.arc(.6,-.52,.06,0,Math.PI*2),t.fill(),t.restore()},o=256,a=300;for(let[c,h]of[[0,0],[o,a]]){t.fillStyle=n,t.fillRect(c,h,o,a);for(let p=0;p<3;p++)r(c+o/2,h+60+p*85,120,!1,e)}t.fillStyle=e,t.fillRect(o,0,o,a),t.strokeStyle=n,t.lineWidth=5,t.strokeRect(o+18,18,o-36,a-36),t.strokeRect(o+30,30,o-60,a-60),r(o+o/2,a/2+10,170,!0,n),t.fillStyle=s,t.fillRect(0,a,o,a),t.strokeStyle=e,t.lineWidth=12,t.lineCap="round",t.beginPath(),t.moveTo(80,a+240),t.lineTo(80,a+70),t.quadraticCurveTo(150,a+40,190,a+90),t.lineTo(80,a+240),t.stroke(),t.lineWidth=3;for(let c=1;c<6;c++)t.beginPath(),t.moveTo(80+c*17,a+70+c*5),t.lineTo(80+c*17,a+240-c*25),t.stroke();t.fillStyle=n,t.beginPath(),t.moveTo(206,250),t.lineTo(306,250),t.lineTo(306,320),t.quadraticCurveTo(256,370,206,320),t.closePath(),t.fill(),t.fillStyle="#f0ece0",t.beginPath(),t.ellipse(256,300,26,12,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(234,282,8,14,.5,0,Math.PI*2),t.fill(),t.fillStyle=e,t.fillRect(226,232,60,14),t.strokeStyle="#d4a640",t.lineWidth=24,t.strokeRect(0,0,512,600);let l=new hn(i);return l.colorSpace=Fe,l.anisotropy=8,l}function R1(i,t){let e=ge(),n=new Yt;n.name="figurehead",n.position.set(i-.2,t,0),n.rotation.z=-.28;let s=1.45,r=new Ke;r.moveTo(-.6,.75),r.lineTo(.6,.75),r.lineTo(.6,-.1),r.quadraticCurveTo(.6,-.7,0,-.95),r.quadraticCurveTo(-.6,-.7,-.6,-.1),r.closePath();let o=new Tn(r,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2}),a=o.attributes.uv,l=o.attributes.position;for(let u=0;u<a.count;u++)a.setXY(u,(l.getX(u)+.66)/1.32,(l.getY(u)+1)/1.8);o.rotateY(Math.PI/2);let c=new X(o,[new ae({map:cm(),roughness:.45,metalness:.2}),e.gold]);c.scale.setScalar(s),c.position.set(.25,.9,0),n.add(c);let h=im();h.scale.setScalar(s),h.position.set(.15,.95,0),n.add(h);let p=new Yt;p.add(new X(new Jt(.42,.36,.3,16),e.gold));for(let u=0;u<2;u++){let _=new X(new be(.36,.05,6,16,Math.PI),e.gold);_.rotation.y=u*Math.PI/2,_.position.y=.15,p.add(_)}let f=new X(new me(.11,10,8),e.gold);f.position.y=.6,p.add(f);let d=new X(new Gt(.05,.22,.16),e.gold);d.position.y=.78,p.add(d);let g=new X(new me(.33,12,8,0,Math.PI*2,0,Math.PI/2),new ae({color:"#7a1b20",roughness:.6}));g.position.y=.12,p.add(g),p.scale.setScalar(s),p.position.set(.2,2.15,0),n.add(p);let v=new ae({color:"#e8c7a4",roughness:.55});for(let u of[1,-1]){let _=nm(u);_.scale.setScalar(s*1.1),_.position.set(0,1.05,u*1.55),n.add(_)}for(let u of[]){let _=new Yt,y=new X(new Oe(.24,.42,4,12),v);y.rotation.x=u*.25,_.add(y);let x=new X(new me(.2,14,10),v);x.position.set(.05,.55,u*.06),_.add(x);let S=new X(new me(.21,12,8,0,Math.PI*2,0,Math.PI/2.2),e.gold);S.position.copy(x.position).add(new A(-.02,.03,0)),_.add(S);for(let M of[0,1]){let w=new X(new me(.3,10,8),e.gold);w.scale.set(.12,.75,.42),w.position.set(-.28,.25+M*.12,u*(.12+M*.12)),w.rotation.x=u*(.5+M*.3),_.add(w)}let E=new X(new Oe(.07,.4,4,8),v);E.position.set(.12,.25,-u*.24),E.rotation.x=-u*1.1,_.add(E);let b=new X(new be(.26,.07,6,14,Math.PI*1.3),new ae({color:"#2a4a9a",roughness:.6}));b.rotation.set(Math.PI/2,0,.4),b.position.y=-.08,_.add(b),_.scale.setScalar(s),_.position.set(.05,1,u*1.25),n.add(_)}let m=new X(new be(.35,.12,8,18,Math.PI*1.5),e.gold);return m.rotation.set(0,Math.PI/2,0),m.position.set(0,-.2,0),n.add(m),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),n}function A1(){let i=ge(),t=new Yt;t.name="quarterGalleries";let e=-27.3,n=-22.4,s=mn(-25),r=qt.middle+s+.15,o=qt.qd+s-.1,a=r-2.6,l=o+.9,c=.85,h=document.createElement("canvas");h.width=512,h.height=512;let p=h.getContext("2d"),f=w=>(l-w)/(l-a)*512;p.fillStyle=qe.ochre,p.fillRect(0,0,512,512),p.fillStyle=qe.black,p.fillRect(0,f(r-.3),512,f(a)-f(r-.3));for(let[w,T]of[[qt.middle+s+.45,qt.middle+s+1.6],[qt.upper+s+.45,qt.upper+s+1.6]])for(let P=0;P<5;P++){let L=20+P*98;p.fillStyle="#e7dcc0",p.fillRect(L,f(T),78,f(w)-f(T)),p.fillStyle="#26323e";for(let N=0;N<3;N++)for(let I=0;I<2;I++)p.fillRect(L+5+I*36,f(T)+5+N*(f(w)-f(T)-10)/3,32,(f(w)-f(T)-10)/3-5)}p.strokeStyle=qe.gold,p.lineWidth=4;for(let w=0;w<6;w++)p.beginPath(),p.arc(256,f(a+.6)-w*20,40+w*18,0,Math.PI,!0),p.stroke();let d=new hn(h);d.colorSpace=Fe;let g=document.createElement("canvas");g.width=g.height=512;let v=g.getContext("2d");v.fillStyle="#000",v.fillRect(0,0,512,512);for(let[w,T]of[[qt.middle+s+.45,qt.middle+s+1.6],[qt.upper+s+.45,qt.upper+s+1.6]])for(let P=0;P<5;P++)v.fillStyle="#ffc883",v.fillRect(25+P*98,f(T)+5,68,f(w)-f(T)-10);let m=new hn(g);m.colorSpace=Fe;let u=new ae({map:d,roughness:.6,emissiveMap:m,emissive:"#ffffff",emissiveIntensity:0});t.userData.glow=[u];let _=w=>{if(w<r){let T=(w-a)/(r-a);return Math.sin(T*Math.PI/2)**1.3}if(w>o){let T=(l-w)/(l-o);return Math.sqrt(Math.max(0,T))}return 1},y=24,x=40;for(let w of[1,-1]){let T=Vn(y,x,(L,N)=>{let I=fe(a,l,N/(x-1)),U=_(I),z=L/(y-1),H=(e+n)/2,et=(n-e)/2*(.25+.75*Math.min(1,U*1.4)),F=H+(z*2-1)*et,j=Math.sin(z*Math.PI)**.45,K=wt(F,I)+c*U*j;return[F,I,w*K]},(L,N)=>[L/(y-1),N/(x-1)],w<0),P=new X(T,u);P.castShadow=!0,t.add(P)}let S=(w,T,P)=>{let L=_(T),N=(e+n)/2,I=(n-e)/2*(.25+.75*Math.min(1,L*1.4)),U=N+(w*2-1)*I;return[U,wt(U,T)+c*L*Math.sin(w*Math.PI)**.45+P]},E=[],b=[];for(let w of[1,-1]){for(let P of[r-.05,qt.upper+s+.3,o+.02]){let L=[];for(let N=0;N<=20;N++){let[I,U]=S(.03+.94*N/20,P,.04);L.push(new A(I,P,w*U))}E.push(new xn(new gn(L),30,.05,6))}let T=(e+n)/2;b.push({p:new A(T,a+.25,w*(wt(T,a+.25)+.08)),kind:"drop"}),b.push({p:new A(T,l-.05,w*(wt(T,l)+.12)),kind:"top"})}let M=new X(xt(E),i.gold);return M.castShadow=!0,t.add(M,am(b)),t}var C1=.06,Qu=(i,t)=>Math.max(0,wt(i,t+.25)-C1);function P1(i,t,e,n=[],s=.1){let r=f=>pt(i,f),o=Math.max(8,Math.round((e-t)/.6)),a=new Ke,l=[];for(let f=0;f<=o;f++){let d=fe(t,e,f/o);l.push([d,Qu(d,r(d))])}a.moveTo(l[0][0],-l[0][1]);for(let[f,d]of l)a.lineTo(f,d);for(let f=l.length-1;f>=0;f--)a.lineTo(l[f][0],-l[f][1]);a.closePath();for(let f of n){let d=new Xi;d.moveTo(f.x-f.w/2,-f.d/2),d.lineTo(f.x-f.w/2,f.d/2),d.lineTo(f.x+f.w/2,f.d/2),d.lineTo(f.x+f.w/2,-f.d/2),d.closePath(),a.holes.push(d)}let c=new br(a,1),h=c.attributes.position,p=c.attributes.uv;for(let f=0;f<h.count;f++){let d=h.getX(f),g=h.getY(f),v=Math.max(.5,Qu(d,r(d)));h.setXYZ(f,d,r(d)+s*(1-Math.min(1,(g/v)**2)),g),p.setXY(f,d/8,g/8)}return c.computeVertexNormals(),c}function I1(i){return Dn.filter(t=>i==="upper"?!0:i==="orlop"?t.x>-14&&t.x<15:!0)}function hm(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(Je(new A(i+l*r/2,e,t),new A(i+l*r/2,s,n),.07,.22,new A(1,0,0)));let a=Math.round((s-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new Gt(r,.05,.22);h.translate(i,fe(e,s,c),fe(t,n,c)),o.push(h)}return o}function L1(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(Je(new A(i,e,t+l*r/2),new A(i+s,n,t+l*r/2),.07,.22));let a=Math.round((n-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new Gt(.22,.05,r);h.translate(i+s*c,fe(e,n,c),t),o.push(h)}return o}function um(){let i=ge(),t=new Yt;t.name="interior";let e=[],n=[],s=[],r=[["orlop",Me(qt.orlop)+.35,Be(qt.orlop)-.5],["lower",Me(qt.lower)+.25,Be(qt.lower)-.35],["middle",Me(qt.middle)+.25,Be(qt.middle)-.35],["upper",Me(qt.upper)+.6,Be(qt.upper)-.6]];for(let[u,_,y]of r){let x=I1(u);e.push(P1(u,_,y,x));for(let S of x){let E=pt(u,S.x)+.1,b=S.w/2+.1,M=S.d/2+.1,w=(T,P)=>new A(S.x+T,E+.12,P);n.push(Je(w(-b,-M),w(b,-M),.2,.3),Je(w(-b,M),w(b,M),.2,.3)),n.push(Je(w(-b,-M),w(-b,M),.2,.3,new A(0,1,0)),Je(w(b,-M),w(b,M),.2,.3,new A(0,1,0)))}}let o=["orlop","lower","middle","upper"];for(let u=0;u<o.length-1;u++)for(let _ of Dn.filter(y=>y.ladder)){if(o[u]==="orlop"&&!(_.x>-14&&_.x<15))continue;let y=Ac(_,u%2?-1:1);s.push(...hm(y.x,y.zFoot,pt(o[u],_.x)+.05,y.zTop,pt(o[u+1],_.x)))}{let u=Pc();s.push(...hm(u.x,u.zFoot,Cc,u.zTop,pt("orlop",u.x)))}for(let u of Ic)for(let _ of[1,-1])s.push(...L1(u.x,_*u.z,pt(u.from,u.x),pt(u.to,u.x+u.run),u.run,.7));let a=new X(xt(e),i.deck);a.receiveShadow=!0,a.name="decks",t.add(a);let l=new X(xt(n),i.darkWood);l.receiveShadow=l.castShadow=!0,t.add(l);let c=new X(xt(s),i.darkWood);c.castShadow=!0,t.add(c);let h=[],p=[["orlop",-26.2,26.8],["lower",-26.5,27.5],["middle",-26.8,27.6],["upper",-27,27.6],["qd",-27.5,pn],["qd",$e,27.8],["poop",-28.2,Ze]];for(let[u,_,y]of p)for(let x=_+.4;x<y;x+=1.25){if(Dn.some(b=>Math.abs(x-b.x)<b.w/2+.05))continue;let S=pt(u,x)-.17,E=Qu(x,S-.2);E<.6||h.push([x,S,E])}let f=new cn(new Gt(.3,.3,1),i.darkWood,h.length),d=new Et;h.forEach(([u,_,y],x)=>{d.makeScale(1,1,2*y).setPosition(u,_-.15,0),f.setMatrixAt(x,d)}),f.castShadow=f.receiveShadow=!0,f.name="beams",t.add(f);let g=[],v=[["orlop","lower"],["lower","middle"],["middle","upper"]];for(let[u,_]of v)for(let y=-20;y<20;y+=2.5)Dn.some(x=>Math.abs(y-x.x)<x.w/2+.3)||u==="orlop"&&(y<-14||y>15)||g.push(we(new A(y,pt(u,y),0),new A(y,pt(_,y)-.45,0),.11,.11,8));let m=new X(xt(g),i.darkWood);m.castShadow=!0,t.add(m);{let _=new Ke,y=[];for(let M=-21;M<=20;M+=.8)y.push(M);_.moveTo(y[0],-wt(y[0],-5.3));for(let M of y)_.lineTo(M,Math.max(.2,wt(M,-5.3)-.05));for(let M=y.length-1;M>=0;M--)_.lineTo(y[M],-Math.max(.2,wt(y[M],-5.3)-.05));let x=new br(_);x.rotateX(Math.PI/2),x.translate(0,-5.3,0);let S=x.attributes.uv,E=x.attributes.position;for(let M=0;M<E.count;M++)S.setXY(M,E.getX(M)/4,E.getZ(M)/4);let b=new X(x,new ae({map:kp(),roughness:1,side:De}));b.receiveShadow=!0,b.name="ballast",t.add(b)}return t}function rn(i,t){let e=i.index?i.toNonIndexed():i,n=new Qt(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new ye(r,3)),e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(s*2),2)),e}var ie=(i,t,e,n,s,r,o)=>rn(new Gt(i,t,e).translate(n,s,r),o),pi=(i,t,e,n,s,r,o,a=10)=>rn(new Jt(t,i,e,a).translate(n,s,r),o),D1="#8a6a44",Zi="#5a4330",Vc="#a0805a",Vs="#2c2e30",N1="#a89a7c",td="#a8643c";function Gc(i,t,e=Vs,n=D1){let s=[];for(let a=0;a<=10;a++){let l=a/10;s.push(new $(t*(.82+.18*Math.sin(Math.PI*l)),(l-.5)*i))}let o=[rn(new Sn(s,14).rotateZ(Math.PI/2).translate(0,t,0),n)];for(let a of[.12,.3,.7,.88]){let l=t*(.82+.18*Math.sin(Math.PI*a))+.01;o.push(rn(new Jt(l,l,.035,14,1,!0).rotateZ(Math.PI/2).translate((a-.5)*i,t,0),e))}for(let a of[1,-1])o.push(rn(new Ps(t*.82,14).rotateY(a*Math.PI/2).translate(a*i/2,t,0),Zi));return xt(o)}function U1(i,t,e,n){return Gc(i,t,e,n).rotateZ(Math.PI/2).translate(t,i/2-t,0)}var F1={leaguer:()=>Gc(1.6,.52),butt:()=>Gc(1.3,.42),hogshead:()=>Gc(1,.36),powder:()=>U1(.6,.22,td,Vc),chest:()=>xt([ie(.9,.42,.45,0,.21,0,"#6b4a2e"),ie(.92,.05,.47,0,.44,0,"#4a3220"),ie(.12,.08,.02,0,.36,.235,Vs)]),sack:()=>rn(new me(.32,10,8).scale(1.2,.8,.8).translate(0,.25,0),"#b8a57e"),bench:()=>xt([ie(1.9,.06,.28,0,.45,0,Vc),ie(.06,.42,.24,-.8,.21,0,Zi),ie(.06,.42,.24,.8,.21,0,Zi)]),messTable:()=>xt([ie(.75,.06,1.9,0,.78,.95,Vc),ie(.06,.75,.06,0,.38,1.85,Zi),rn(new Jt(.012,.012,1).translate(0,1.3,1.85),"#6b5a40")]),table:()=>xt([ie(1.6,.06,.9,0,.76,0,"#7a5232"),...[[-.7,-.38],[.7,-.38],[-.7,.38],[.7,.38]].map(([i,t])=>ie(.06,.74,.06,i,.37,t,"#5a3c22"))]),chair:()=>xt([ie(.42,.05,.42,0,.46,0,"#6b4528"),ie(.42,.5,.05,0,.72,-.19,"#6b4528"),...[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]].map(([i,t])=>ie(.04,.46,.04,i,.23,t,"#4a3018"))]),desk:()=>xt([ie(1.1,.75,.6,0,.375,0,"#6b4528"),ie(1.12,.06,.64,0,.78,0,"#4a3018"),ie(.9,.3,.15,0,.95,-.2,"#5a3a20")]),settee:()=>xt([ie(2.2,.42,.6,0,.21,0,"#5a3a20"),ie(2.2,.12,.6,0,.48,0,"#2a4a6a"),ie(2.2,.5,.1,0,.75,-.26,"#2a4a6a")]),hammock:()=>xt([rn(new me(.5,12,6).scale(1.8,.32,.36).translate(0,-.45,0),N1),rn(new Jt(.01,.01,.5).rotateZ(.9).translate(-1.05,-.2,0),"#8a7556"),rn(new Jt(.01,.01,.5).rotateZ(-.9).translate(1.05,-.2,0),"#8a7556")]),cot:()=>xt([ie(1.9,.35,.7,0,-.75,0,"#cfc3a4"),ie(1.95,.05,.75,0,-.56,0,"#6b4a2e"),...[[-.9,-.3],[.9,-.3],[-.9,.3],[.9,.3]].map(([i,t])=>rn(new Jt(.01,.01,.6).translate(i,-.28,t),"#8a7556"))]),coil:()=>xt([0,1,2,3].map(i=>rn(new be(.95-i*.1,.12,6,24).rotateX(Math.PI/2).translate(0,.13+i*.24,0),"#6b5a40"))),ropeCoil:()=>xt([0,1,2].map(i=>rn(new be(.4,.07,5,16).rotateX(Math.PI/2).translate(0,.07+i*.13,0),"#8a7556"))),sailBundle:()=>rn(new Oe(.3,2.4,4,8).rotateZ(Math.PI/2).translate(0,.3,0),"#d0c5a8"),shotPile:()=>{let i=[];for(let t=0;t<3;t++)for(let e=0;e<4-t;e++)for(let n=0;n<4-t;n++)i.push(rn(new me(.08,8,6).translate((e-(3-t)/2)*.16,.08+t*.13,(n-(3-t)/2)*.16),Vs));return xt(i)},garland:()=>xt([ie(1.4,.12,.22,0,.06,0,Zi),...[0,1,2,3,4,5,6,7].map(i=>rn(new me(.08,8,6).translate(-.6+i*.17,.16,0),Vs))]),bucket:()=>pi(.16,.2,.32,0,.16,0,"#5a4330"),coop:()=>xt([ie(1.2,.6,.6,0,.3,0,"#7a6040"),...[0,1,2,3,4,5].map(i=>ie(.03,.5,.62,-.5+i*.2,.32,0,"#3a2a18"))]),shelf:()=>xt([ie(.4,1.6,1.8,0,.8,0,"#6b4a2e"),...[.4,.8,1.2].map(i=>ie(.38,.04,1.76,.02,i,0,"#5a3c22"))]),bin:()=>xt([ie(1.4,.9,1,0,.45,0,"#7a5a38"),ie(1.42,.05,1.02,0,.9,0,"#5a3c22")]),workbench:()=>xt([ie(2.2,.1,.7,0,.85,0,Vc),ie(.1,.8,.6,-1,.4,0,Zi),ie(.1,.8,.6,1,.4,0,Zi),ie(1.6,.18,.18,.2,.09,.15,"#9a7a50")]),stove:()=>xt([ie(2.1,1.25,1.5,0,.62,0,"#1e1f21"),ie(2.2,.08,1.6,0,1.28,0,"#2c2e30"),ie(.5,.45,.04,-.5,.55,.77,"#3a3c3e"),ie(.5,.45,.04,.3,.55,.77,"#3a3c3e"),ie(.6,.25,.04,.3,1,.77,"#7a2a10"),pi(.32,.32,.55,-.5,1.6,-.2,td,14),pi(.28,.28,.5,.35,1.58,-.25,td,14),ie(.45,1.2,.45,.6,2,.35,"#1e1f21"),ie(2.6,.12,2,0,.06,0,"#8a8478")]),pumpCase:()=>xt([pi(.22,.22,1.1,0,.55,0,"#5a4330",12),pi(.26,.26,.12,0,1.1,0,Vs,12)]),pumpWinch:()=>xt([pi(.05,.05,4.6,0,1.15,0,Vs).rotateX(Math.PI/2),ie(.12,1.2,.12,0,.6,-2.2,Zi),ie(.12,1.2,.12,0,.6,2.2,Zi),ie(.06,.06,1.2,.45,1.15,-1,"#8a6a44"),ie(.06,.06,1.2,-.45,1.15,1,"#8a6a44")]),bitts:()=>xt([ie(.5,2,.5,0,1,-1.1,"#6b4a2e"),ie(.5,2,.5,0,1,1.1,"#6b4a2e"),ie(.45,.45,2.8,.05,1.2,0,"#5a3c22")]),lantern:()=>xt([pi(.12,.1,.32,0,-.35,0,"#ffd890",8),pi(.14,.08,.1,0,-.14,0,"#3a2a18",8),rn(new Jt(.01,.01,.12).translate(0,-.05,0),"#3a2a18")]),cartridgeRack:()=>xt([ie(.35,1.4,1.6,0,.7,0,"#6b4a2e"),...[.35,.75,1.15].flatMap(i=>[0,1,2,3,4,5].map(t=>rn(new Jt(.07,.07,.3,8).rotateZ(Math.PI/2).translate(.05,i+.08,-.6+t*.24),"#e8dcc0")))]),timber:()=>xt([ie(3,.25,.25,0,.13,-.3,"#9a7a50"),ie(3,.25,.25,0,.13,0,"#8a6a44"),ie(2.6,.25,.25,0,.38,-.15,"#9a7a50")]),block:()=>xt([ie(.3,.42,.18,0,.21,0,"#6b4a2e"),pi(.04,.04,.2,0,.21,0,Vs).rotateX(Math.PI/2)]),tub:()=>pi(.3,.34,.35,0,.18,0,"#6b4a2e",12),plate:()=>rn(new Jt(.11,.1,.02,10).translate(0,.01,0),"#9a9a90"),globe:()=>xt([rn(new me(.22,14,10).translate(0,1,0),"#c8b88a"),pi(.04,.12,.8,0,.4,0,"#5a3a20")])},O1=new Set(["messTable","bench","plate","chest","tub","table","chair","desk","settee","globe","cot","hammock","bucket"]),B1=new Set(["lower","middle","upper","qd"]),H1={middle:"lower",upper:"middle",qd:"upper",poop:"qd",lower:"orlop"},ed=class{constructor(){this.items={},this.deck=null,this._q=new We}add(t,e,n,s,r=0,o=1){let a=new Et().compose(new A(e,n,s),this._q.setFromAxisAngle(new A(0,1,0),r).clone(),new A(o,o,o));a.clearable=O1.has(t)&&B1.has(this.deck),(this.items[t]||=[]).push(a)}},dm=(i,t)=>wt(i,t+.6)-.15;function $i(i,t,e){if(i==="hold")return-5.3;let n=pt(i,t),s=Math.max(.5,wt(t,n+.25)-.06);return n+.1*(1-Math.min(1,(e/s)**2))}var z1=(i,t)=>pt(i,t)-.47,fm=(i,t=.6)=>Dn.some(e=>Math.abs(i-e.x)<e.w/2+t),k1=(i,t=1.2)=>Object.values(Ci).some(e=>Math.abs(i-e.x)<t);function pm(i){let t=new ed,e=(_,y,x,S,E=0,b=0)=>{t.deck=y,t.add(_,x,$i(y,x,S)+b,S,E)},n=(_,y,x,S,E=0)=>{t.deck=H1[y],t.add(_,x,z1(y,x),S,E)},s=Ai(),r=_=>Or.find(y=>y.name===_);for(let[_,y,x,S,E]of[["lower","lower","middle",-22.6,18],["middle","middle","upper",-15,15.5],["upper","upper","qd",-13.8,20.5]]){let b=r(_),M=s.filter(w=>w.tier===b).map(w=>w.x);for(let w=0;w<M.length-1;w++){let T=(M[w]+M[w+1])/2;if(!(T<S||T>E||fm(T,.2)))for(let P of[1,-1]){let L=P*(dm(T,pt(y,T))-.05);t.deck=y,t.add("messTable",T,$i(y,T,L),L,P>0?Math.PI:0),e("bench",y,T-.6,L-P*1,Math.PI/2),e("bench",y,T+.6,L-P*1,Math.PI/2),e("plate",y,T-.15,L-P*.6,0,.81),e("plate",y,T+.15,L-P*1.3,0,.81),(w+(P>0?0:1))%2===0&&e("chest",y,T-.95,L-P*.35,Math.PI/2),w%3===0&&e("tub",y,T+.95,L-P*1.9),t.deck=null,t.add("garland",M[w]+1.5,$i(y,T,L)+.02,L-P*.12,0)}}}let o=(_,y)=>Dn.some(x=>Math.abs(_-x.x)<x.w/2+1&&Math.abs(y)<x.d/2+.3);for(let _=7.4;_<20;_+=2.05){if(k1(_,1.3))continue;let y=pt("lower",_),x=dm(_,y)-.9;for(let S=-x;S<=x;S+=.36)Math.abs(S)<.35||o(_,S)||n("hammock","middle",_,S)}for(let[_,y,x,S]of[["lower","middle",-22,22],["middle","upper",-14,18],["upper","qd",-12,20],["orlop","lower",-24,24]])for(let E=x;E<=S;E+=4.5)fm(E,.3)||n("lantern",y,E+.6,.9);let a=Ci.main.x;for(let _ of[1,-1])e("pumpCase","lower",a+1.2,_*1.5),e("pumpCase","lower",a-1.2,_*1.5),e("pumpWinch","lower",a,_*1.5,Math.PI/2);e("bitts","lower",20.6,0),e("table","lower",-25.4,0,Math.PI/2);for(let _ of[-.9,.9])for(let y of[-.5,.5])e("chair","lower",-25.4+y,_,_>0?Math.PI:0);e("chest","lower",-24.2,4.6),e("chest","lower",-24.2,-4.6),e("stove","middle",20.2,0,Math.PI),e("shelf","middle",17,-1.3,Math.PI/2),e("shelf","middle",17,1.3,-Math.PI/2),e("coop","middle",23.6,-2.2),e("coop","middle",23.6,2.2),e("tub","middle",18.8,-1.9),e("bucket","middle",18.8,2);for(let _ of[-27,-25.4,-23.8,-22.2]){e("table","middle",_,0,0);for(let y of[-.75,.75])e("chair","middle",_,y,y>0?Math.PI:0)}for(let[_,y]of[[-24.4,5.6],[-21.2,5.6],[-24.9,-5.6],[-22.4,-5.6],[-19.6,-5.6],[-17.1,-5.6]])n("cot","upper",_,y,0),e("chest","middle",_+.8,y*.8,0);e("desk","middle",-24.4,4.1,Math.PI),e("shelf","middle",-17.6,6.4,0),e("table","upper",-26,0,Math.PI/2);for(let _ of[-.9,.9])for(let y of[-.45,.45])e("chair","upper",-26+y,_,_>0?Math.PI:0);e("desk","upper",-27.6,3.2,Math.PI/2),e("settee","upper",-28.1,-2.5,Math.PI/2),e("globe","upper",-24.4,4.4);for(let _ of[-21.6,-20]){e("table","upper",_,0,0);for(let y of[-.8,.8])for(let x of[-.4,.4])e("chair","upper",_+x,y,y>0?Math.PI:0)}n("cot","qd",-16.9,4.4,0),e("desk","upper",-16,-3.5,-Math.PI/2),e("chest","upper",-17.6,-5,0);for(let[_,y]of[[22.6,2],[22.6,3.2],[24.4,2],[24.4,3.2],[26,2.2]])n("cot","qd",_,y,0);e("table","upper",23.5,4.8,0),e("table","qd",-26,0,Math.PI/2);for(let _ of[-.9,.9])e("chair","qd",-26,_,_>0?Math.PI:0);e("desk","qd",-27.8,2.8,Math.PI/2),e("table","qd",-21,-4,0);for(let _ of[-.5,.5])for(let y of[-4.8,-3.2])e("chair","qd",-21+_,y,y>-4?Math.PI:0);n("cot","poop",-21.4,3.8,0),e("desk","qd",-15.6,-4.6,0),e("chest","qd",-16.8,-5.6,0),e("desk","qd",-15.6,4.6,Math.PI),e("chest","qd",-16.8,5.6,0);for(let _ of[-.46,.46])e("chest","orlop",-14.6+_,0,Math.PI/2);e("tub","orlop",-13.3,.8),e("bucket","orlop",-15.9,-.8),e("bucket","orlop",-13.2,-.9),e("table","orlop",-14,-4,0);for(let _ of[-15.6,-12.4])e("chest","orlop",_,-5.4,0);n("lantern","lower",-13,-3.6);for(let _ of[-26.4,-25.2])for(let y of[-3.5,-1.2,1.2,3.5])e("bin","orlop",_,y,0);for(let[_,y]of[[-22.8,-4],[-21.6,-4.6],[-22,-2.6],[-21,-3.2]])e("sack","orlop",_,y,_);e("hogshead","orlop",-22.4,-5.6,0),e("hogshead","orlop",-21,-5.8,0);for(let[_,y]of[[-19.6,-4],[-18.8,-4.6],[-19.4,-2.4]])e("chest","orlop",_,y,0);e("shelf","orlop",-22.4,6,0),e("chest","orlop",-21.8,3,0),n("cot","lower",-19.7,4.6,0),e("chest","orlop",-19.7,2.6,0);for(let _=0;_<6;_++)e("powder","orlop",-22.9+_%3*.48,-.5+Math.floor(_/3)*1);for(let _ of[2.4,6,9.6])for(let y of[1,-1])e("coil","orlop",_,y*4.6,_);for(let[_,y]of[[14.8,3.2],[16.4,4.2],[15.4,5]])e("ropeCoil","orlop",_,y,0);for(let[_,y]of[[16.8,2.6],[17,3],[16.6,3.4]])e("block","orlop",_,y,_);e("workbench","orlop",15.8,-3.6,0),e("timber","orlop",15.6,-5.2,0);for(let _=0;_<4;_++)e("sailBundle","orlop",19,1.2+_*.65,0);for(let[_,y]of[[18.4,-2.6],[19.8,-3.4],[18.8,-4.2]])e("ropeCoil","orlop",_,y,0);for(let[_,y]of[[20,-1.4],[19.4,-1.2]])e("block","orlop",_,y,0);for(let _ of[21.1,21.6])for(let y of[-1.3,1.3])e("powder","orlop",_,y);let l=(_,y,x)=>Math.abs(y)<1.05+x||Math.abs(_-a)<3.2&&Math.abs(y)<3+x||_>-.2&&_<3.8&&y<.2&&y>-5.4,c=(_,y,x,S,E)=>{for(let b=_;b<=y;b+=S+.05){if(Math.abs(b-a)<2.6)continue;let M=wt(b,-5.3+E)-.25;for(let T=-M+E;T<=M-E;T+=2*E+.02)l(b,T,E)||e(x,"hold",b,T,0);let w=wt(b,-5.3+3*E)-.3;for(let T=-w+2*E;T<=w-2*E;T+=2*E+.02)l(b,T,E)||e(x,"hold",b,T,0,2*E*.9)}};c(.6,14.2,"leaguer",1.6,.52),c(-19.2,-5.2,"butt",1.3,.42);for(let _ of[a-1.6,a+1.6])for(let y of[-.6,.6])e("shotPile","hold",_,y,0);for(let _=18.4;_<22.6;_+=.5){let y=Math.min(2.6,wt(_,-5)-.5);for(let x=-y;x<=y;x+=.48)Math.abs(x)>.7&&e("powder","hold",_,x,0)}e("cartridgeRack","hold",16,-1.6,0),e("cartridgeRack","hold",16,1.6,Math.PI);let h=new Yt;h.name="furnishing";let p=new ae({vertexColors:!0,roughness:.8}),f=new ae({vertexColors:!0,roughness:.5,emissive:"#ffb347",emissiveIntensity:.9}),d=new Et().makeScale(0,0,0),g=[];for(let[_,y]of Object.entries(t.items)){let x=F1[_](),S=new cn(x,_==="lantern"?f:p,y.length);y.forEach((E,b)=>S.setMatrixAt(b,E)),g.push([S,y]),S.castShadow=_!=="lantern"&&_!=="plate",S.receiveShadow=!0,S.name=_,S.frustumCulled=!1,h.add(S)}let v=-27.6,m=pt("middle",-24)-.75,u=new X(rn(new Gt(8.2,.32,.32).translate(v+4.1,m,0),"#5a4330"),p);return u.castShadow=!0,h.add(u),h.userData.glow=f,h.userData.lanterns=(t.items.lantern||[]).map(_=>new A().setFromMatrixPosition(_)),h.userData.setCleared=_=>{for(let[y,x]of g)x.some(S=>S.clearable)&&(x.forEach((S,E)=>y.setMatrixAt(E,_&&S.clearable?d:S)),y.instanceMatrix.needsUpdate=!0)},h}var Wc=.32;function V1(i,t,e){let n=[];for(let s=0;s<e;s++)n.push(new be(i-s*t*1.6,t,5,18).rotateX(Math.PI/2).translate(0,t+s*.01,0));return xt(n)}function G1(){let i=[];for(let t=0;t<4;t++)i.push(new be(.2-t*.012,.022,4,16).scale(.85,1.25,1).translate(.01*t,-.27,.02*t));return xt(i)}function mm(){let i=ge(),t=new Yt;t.name="deckGear";let e={rail:[],pin:[],hang:[],coil:[],ring:[],bucket:[],grating:[]},n=(y,x,S,E=0,b=1,M=1,w=1)=>new Et().compose(new A(y,x,S),new We().setFromAxisAngle(new A(0,1,0),E),new A(b,M,w)),s=y=>y<Ze?pt("poop",y):pt("qd",y),r=(y,x,S)=>{let E=Math.max(2,Math.round((x-y)/.3)),b=[];for(let M=0;M<=E;M++){let w=y+(x-y)*M/E,T=s(w)+.95;b.push(new A(w,T,S*(wt(w,T)-Wc-.1)))}for(let M=0;M<E;M++){let w=b[M],T=b[M+1],P=w.distanceTo(T),L=Math.atan2(-(T.z-w.z),T.x-w.x);e.rail.push(n((w.x+T.x)/2,w.y,(w.z+T.z)/2,L,P,1,1))}b.forEach((M,w)=>{w===0||w===E||(e.pin.push(n(M.x,M.y,M.z)),w%3===1&&e.hang.push(n(M.x,M.y,M.z+S*.04,S>0?Math.PI/2:-Math.PI/2)))});for(let M=y+.6;M<x-.3;M+=2.8){let w=s(M);e.coil.push(n(M,w+.01,S*(wt(M,w+.4)-Wc-.55),M))}},o=Ai().filter(y=>y.tier.deck==="qd").map(y=>y.x).sort((y,x)=>y-x),a=[];for(let y=0;y<o.length-1;y++){let x=o[y]+.6,S=o[y+1]-.6;S-x>.8&&x>Ze+.3&&S<Be(8)-2.5&&a.push([x,S])}a.push([pn+.4,$e-.4]),a.push([o[o.length-1]+.6,Be(8)-3.2]);for(let[y,x]of a)for(let S of[1,-1])r(y,x,S);for(let y of[1,-1])r(Me(10)+3,Ze-.6,y);let l=[],c=(y,x)=>{let S=pt(x,y)+.1,E=.95,b=.85;for(let[M,w]of[[-E,-E],[-E,E],[E,-E],[E,E],[-E,0],[E,0],[0,-E],[0,E]])l.push(we(new A(y+M,S,w),new A(y+M,S+b,w),.055,.055,8));for(let[M,w]of[[[-E,-E],[E,-E]],[[-E,E],[E,E]],[[-E,-E],[-E,E]],[[E,-E],[E,E]]]){let T=new Gt(Math.abs(w[0]-M[0])+.16,.1,Math.abs(w[1]-M[1])+.16);T.translate(y+(M[0]+w[0])/2,S+b,(M[1]+w[1])/2),l.push(T)}for(let M=0;M<16;M++){let w=M/16*4,T=Math.floor(w),P=w-T,L=[[-E,-E],[E,-E],[E,E],[-E,E]],N=L[T],I=L[(T+1)%4],U=y+N[0]+(I[0]-N[0])*P,z=N[1]+(I[1]-N[1])*P;P<.12||P>.88||(e.pin.push(n(U,S+b,z)),M%3===0&&e.hang.push(n(U,S+b,z,Math.atan2(z,U-y)-Math.PI/2)))}for(let[M,w]of[[-1.6,.9],[1.5,-1],[-1.4,-1.2]])e.coil.push(n(y+M,S-.09,w,M))};c(Ci.main.x,"qd"),c(Ci.fore.x,"qd");let h=new X(xt(l),i.darkWood);h.castShadow=h.receiveShadow=!0,t.add(h);for(let y of Ai()){let x=y.tier;for(let S of[1,-1]){let E=pt(x.deck,y.x),b=S*(wt(y.x,E+.5)-(x.deck==="qd"?Wc:0)-.35);for(let M of[-x.w/2-.25,x.w/2+.25])e.ring.push(n(y.x+M,E+.11,b));e.ring.push(n(y.x,E+.11,b-S*(x.len+.6)))}}for(let y of[1,-1])for(let x=-22.9;x<Ze-2;x+=.42){let S=pt("poop",x)+.6;e.bucket.push(n(x,S,y*(wt(x,S+.3)-Wc-.12)))}for(let[y,x,S]of[[-11.6,1.6,2.2],[-5.4,1.8,2.4]])e.grating.push(n(y,pt("qd",y)+.09,0,0,x,1,S));let p=xt([new Jt(.022,.03,.2,6).translate(0,.12,0),new me(.035,6,4).translate(0,.24,0),new Jt(.018,.018,.18,6).translate(0,-.05,0)]),f=xt([new be(.07,.014,4,12).rotateX(Math.PI/2),new Jt(.03,.03,.02,6)]),d=xt([new Jt(.13,.11,.3,10),new be(.13,.012,4,12).rotateX(Math.PI/2).translate(0,.15,0),new be(.15,.01,4,12).rotateY(Math.PI/2).translate(0,.2,0)]),g=(()=>{let y=[new Gt(1.1,.16,1.1)];for(let x=-4;x<=4;x++)y.push(new Gt(.035,.03,1).translate(x*.11,.09,0)),y.push(new Gt(1,.03,.035).translate(0,.09,x*.11));return xt(y)})(),v=new ae({color:"#2a1d14",roughness:.6}),m=new ae({color:"#6b5a42",roughness:.95}),u=new ae({color:"#7a6040",roughness:.85}),_=[["rail",new Gt(1,.11,.16),i.darkWood],["pin",p,i.darkWood],["hang",G1(),m],["coil",V1(.34,.04,6),m],["ring",f,i.iron],["bucket",d,v],["grating",g,u]];for(let[y,x,S]of _){let E=e[y];if(!E.length)continue;let b=new cn(x,S,E.length);E.forEach((M,w)=>b.setMatrixAt(w,M)),b.castShadow=y!=="ring",b.receiveShadow=!0,b.name=y==="grating"||y==="coil"?y:`gear-${y}`,b.frustumCulled=!1,t.add(b)}return t}var Bn={lowerHead:34,topY:30.6,topLen:5.3,topW:7.1,rLower:[.5,.4],topmastHeel:29.6,topmastHead:50.4,crossY:47,crossW:4.6,rTop:[.33,.22],tgHeel:46.4,tgHead:58.4,poleHead:63.4,rTg:[.19,.08],yards:[{name:"course",L:31.5,ySet:29.2,yLow:29.2,r:.33,head:"lowerHead"},{name:"topsail",L:23.2,ySet:46.2,yLow:35,r:.25,head:"topmastHead"},{name:"topgallant",L:14.6,ySet:57.5,yLow:50.9,r:.16,head:"tgHead"},{name:"royal",L:9.6,ySet:62.5,yLow:58.9,r:.11,head:"poleHead"}]},Xc=class{constructor(){let t=ge();this.group=new Yt,this.group.name="rig",this.masts={};for(let[e,n]of Object.entries(Ci))this.masts[e]=this.buildMast(e,n,t);this.buildBowsprit(t),this.buildSpankerSpars(t)}buildMast(t,e,n){let s=pt("upper",e.x),r=e.scale,o=H=>s+(H-5.76)*r,a={name:t,x:e.x,scale:r,group:new Yt,yards:{}},l=a.group;l.position.set(e.x,0,0),l.rotation.z=e.rake,this.group.add(l);let c={lowerHead:o(Bn.lowerHead),topY:o(Bn.topY),topmastHeel:o(Bn.topmastHeel),topmastHead:o(Bn.topmastHead),crossY:o(Bn.crossY),tgHeel:o(Bn.tgHeel),tgHead:o(Bn.tgHead),poleHead:o(Bn.poleHead),topLen:Bn.topLen*r,topW:Bn.topW*r,crossW:Bn.crossW*r};a.h=c;let h=(H,et,F=0)=>new A(H,et,F),p=H=>H.map(et=>et*(.75+.25*r)),[f,d]=p(Bn.rLower),[g,v]=p(Bn.rTop),[m,u]=p(Bn.rTg);a.r={lower:d,top:v,tg:u};let _=[],y=[],x=[];_.push(we(h(0,0),h(0,c.topY),f,d*1.05,16)),y.push(we(h(0,c.topY),h(0,c.lowerHead),d*.92,d*.88,12));for(let H=s+1.2;H<c.topY-1;H+=1.15)x.push(we(h(0,H),h(0,H+.12),f*1.06,f*1.06,16));let S=d+g+.05;_.push(we(h(S,c.topmastHeel),h(S,c.crossY),g,v*1.05,12)),y.push(we(h(S,c.crossY),h(S,c.topmastHead),v,v*.9,10));let E=S+v+m+.03;_.push(we(h(E,c.tgHeel),h(E,c.tgHead),m,u*1.3,10)),_.push(we(h(E,c.tgHead),h(E,c.poleHead),u*1.3,u*.7,8)),a.dTop=S,a.dTg=E,y.push(we(h(E,c.poleHead),h(E,c.poleHead+.25),.22*r,.22*r,10)),y.push(Je(h(-d-.2,c.lowerHead+.15),h(S+g+.25,c.lowerHead+.15),1*r,.45));let b=new Ke,M=c.topLen,w=c.topW/2;b.moveTo(-M*.45,-w),b.lineTo(-M*.45,w),b.lineTo(M*.25,w),b.quadraticCurveTo(M*.55,w,M*.55,0),b.quadraticCurveTo(M*.55,-w,M*.25,-w),b.closePath();let T=new Xi,P=d+.15,L=Math.min(M*.45,P+.9*r),N=Math.min(w*.55,1.1*r);T.moveTo(-M*.3,-N),T.lineTo(L,-N),T.lineTo(L,N),T.lineTo(-M*.3,N),T.closePath(),b.holes.push(T);let I=new Tn(b,{depth:.22,bevelEnabled:!1});I.rotateX(Math.PI/2),I.translate(0,c.topY+.22,0),y.push(I);for(let H=-3;H<=3;H++){let et=H/3.5*w;y.push(new Gt(M*.95,.05,.08).translate(M*.05,c.topY+.25,et))}for(let H=0;H<=6;H++){let et=-w+2*w*H/6;y.push(we(h(-M*.43,c.topY+.22,et),h(-M*.43,c.topY+1.15,et),.035,.035,5))}y.push(we(h(-M*.43,c.topY+1.15,-w),h(-M*.43,c.topY+1.15,w),.05,.05,6)),y.push(Je(h(S,c.crossY,-c.crossW/2),h(S,c.crossY,c.crossW/2),.25,.22)),y.push(Je(h(S-1.2*r,c.crossY+.2),h(S+1*r,c.crossY+.2),c.crossW*.45,.18)),y.push(Je(h(S-v-.15,c.topmastHead+.1),h(E+m+.18,c.topmastHead+.1),.6*r,.3));let U=new X(xt(_),n.mast),z=new X(xt([...y,...x]),n.spar);U.castShadow=z.castShadow=!0,l.add(U,z),a.local={lowerHead:h(0,c.lowerHead-.2),shroudHead:h(0,c.topY-.4),stayLower:h(0,c.topY+.4),topEdge:H=>h(-M*.1,c.topY+.15,H*w*.98),topBack:h(-M*.4,c.topY+.2),topFront:h(M*.5,c.topY+.2),topmastShroudHead:h(S,c.crossY-.3),topmastHead:h(S,c.topmastHead-.2),crossEnd:H=>h(S,c.crossY+.1,H*c.crossW/2),tgHead:h(E,c.tgHead-.2),poleHead:h(E,c.poleHead-.1),futtock:h(0,c.topY-3.2*r)};for(let H of Bn.yards){let et=this.buildYard(a,H,o,n);a.yards[H.name]=et}return a}buildYard(t,e,n,s){let r=t.scale,o=Np[t.name][e.name],a=e.r*(.75+.25*r),l=new Yt,c=n(e.ySet),h=n(e.yLow),p=e.name==="course"?t.r.lower+a+.1:e.name==="topsail"?t.dTop+t.r.top+a+.05:t.dTg+a+.18;l.position.set(p,c,0);let f=[],d=12;for(let x=0;x<=d;x++){let S=x/d;f.push(new $(a*(1-.55*S**1.6),S*o/2))}let g=new Sn(f,10),v=g.clone().scale(1,-1,1),m=xt([g,v]);m.rotateX(Math.PI/2);let u=new X(m,s.spar);u.castShadow=!0,l.add(u);let _=[];for(let x=0;x<=16;x++){let S=x/16*2-1;_.push(new A(-.15,-a-.9*(1-S*S)-.15,S*o*.47))}let y=[new xn(new gn(_),32,.03,4)];for(let x=2.2;x<o*.45;x+=2.4)for(let S of[1,-1]){let E=S*x/(o*.47),b=-a-.9*(1-E*E)-.15;y.push(we(new A(-.1,-a*.6,S*x),new A(-.15,b,S*x),.02,.02,4))}if(l.add(new X(xt(y),s.rope)),t.name!=="mizzen"&&(e.name==="course"||e.name==="topsail")){let x=[],S=.09*r*(e.name==="course"?1.2:1);for(let b of[1,-1]){x.push(we(new A(a*.8,a*.75,b*o*.2),new A(a*.8,a*.75,b*(o*.5+2.6*r)),S,S*.8,8));for(let M of[o*.22,o*.48])x.push(new be(S+.04,.025,4,10).rotateY(Math.PI/2).translate(a*.8,a*.75,b*M))}let E=new X(xt(x),s.spar);E.castShadow=!0,l.add(E)}return t.group.add(l),{name:e.name,group:l,L:o,r:a,ySet:c,yLow:h,mast:t,headKey:e.head,hoist:1,brace:0}}buildBowsprit(t){let e=new A(21.2,pt("qd",21.2)+.2,0),n=sn.degToRad(30),s=new A(Math.cos(n),Math.sin(n),0),r=(m,u=0)=>e.clone().addScaledVector(s,m).add(new A(-Math.sin(n)*u,Math.cos(n)*u,0)),o=[],a=[];o.push(we(r(0),r(22.6),.47,.33,16)),o.push(we(r(16.4,.6),r(32.5,.6),.2,.12,12)),o.push(we(r(29.8,.9),r(38.8,.9),.11,.06,10)),a.push(Je(r(22.1,.1),r(22.1,.95),.7,.42,new A(0,0,1))),a.push(Je(r(32,.6),r(32,.95),.36,.28,new A(0,0,1))),a.push(we(r(22.3,-.2),r(22.3,-2.8),.08,.06,6));let l=new X(xt(o),t.mast),c=new X(xt(a),t.spar);l.castShadow=c.castShadow=!0,this.group.add(l,c),this.bowsprit={P:r,heel:e,dir:s,steeve:n,stemPoint:r(9),fore:r(10.5,.4),cap:r(21.9,.4),jib:r(28,.8),jibEnd:r(32.2,.8),flyEnd:r(38.6,1),striker:r(22.3,-2.8)};let h=new Yt;h.position.copy(r(18,-.7));let p=19.66,f=.2,d=[];for(let m=0;m<=10;m++)d.push(new $(f*(1-.5*(m/10)**1.6),m/10*p/2));let g=xt([new Sn(d,8),new Sn(d,8).scale(1,-1,1)]);g.rotateX(Math.PI/2);let v=new X(g,t.spar);v.castShadow=!0,h.add(v),this.group.add(h),this.spritYard={name:"sprit",group:h,L:p,r:f,hoist:1,brace:0,ySet:h.position.y,yLow:h.position.y,mast:null}}buildSpankerSpars(t){let e=this.masts.mizzen,n=e.h,s=new Yt;s.position.set(-e.r.lower-.1,n.topY-2.4,0);let r=sn.degToRad(38);s.rotation.z=Math.PI-r;let o=13.9;s.add(new X(we(new A(0,0,0),new A(o,0,0),.2,.12,10),t.spar)),e.group.add(s);let a=new Yt,l=pt("poop",-17.4)+2.3;a.position.set(-e.r.lower-.1,l,0),a.rotation.z=Math.PI-.04;let c=22.25;a.add(new X(we(new A(0,0,0),new A(c,0,0),.24,.16,10),t.spar)),e.group.add(a);for(let h of[s,a])h.children[0].castShadow=!0;this.gaff={group:s,L:o},this.boom={group:a,L:c}}allYards(){let t=[];for(let e of Object.values(this.masts))t.push(...Object.values(e.yards));return t}applyYards(t){for(let e of Object.values(this.masts))for(let n of Object.values(e.yards)){let s=n.name==="course"?1:t.hoist[n.name]??1;n.group.position.y=n.yLow+(n.ySet-n.yLow)*s,n.group.rotation.y=t.brace*(n.name==="course"?.55:1)*(e.name==="mizzen"?1.15:1)}this.boom.group.rotation.y=t.boomSwing,this.gaff.group.rotation.y=t.boomSwing*1.2}};var W1=new Et,X1=new Et,q1=new A;function Ge(i,t,e,n=new A){return n.copy(i),t.localToWorld(n),e.worldToLocal(n)}function Yc(i,t){let e=new ue;e.setAttribute("position",new ye(new Float32Array(i*t*3),3)),e.setAttribute("uv",new ye(new Float32Array(i*t*2),2));let n=[];for(let s=0;s<t-1;s++)for(let r=0;r<i-1;r++){let o=s*i+r,a=o+1,l=o+i,c=l+1;n.push(o,a,c,o,c,l)}return e.setIndex(n),e}var gm=i=>i*i*(3-2*i);function Y1(i,t){let e=ge(),n=[],s=60,r=1.35;for(let c=0;c<=s;c++){let h=-i/2+c/s*i,p=2*h/i,f=.5+.5*Math.pow(Math.max(0,1-p*p),.7),d=.9+.1*Math.abs(Math.sin(Math.PI*h/r)),g=Math.sqrt(Math.max(0,1-Math.pow(Math.abs(p),8)));n.push(new $(Math.max(.001,t*f*d*g),h))}let o=new Yt,a=new X(new Sn(n,12),e.furl);a.castShadow=!0,o.add(a);let l=[];for(let c=r*Math.ceil(-i/2/r+.3);c<i/2-.3;c+=r){let h=2*c/i,p=t*(.5+.5*Math.pow(Math.max(0,1-h*h),.7))*.9;l.push(new be(p,.022,4,14).rotateX(Math.PI/2).translate(0,c,0))}return l.length&&o.add(new X(ys(l),e.rope)),o}var qc=class{constructor(t,e,n,s){let r=ge();this.name=t,this.yard=e,this.foot=n,this.fullness=s,this.roach=n.yard?.13:.03,this.NU=15,this.NV=13,this.geo=Yc(this.NU,this.NV),this.mesh=new X(this.geo,r.canvas),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh);let o=e.L*.86,a=Math.min(.38,.12+e.L*.009);this.furl=Y1(o,a*1.15),this.furl.rotation.x=Math.PI/2,this.furl.position.set(.12,e.r+a*.7,0),e.group.add(this.furl),this.set=-1}update(t,e,n,s=0){let r=this.NU,o=this.NV,a=this.yard;this.setNow=t;let l=t>.015;this.mesh.visible=l;let c=1-gm(Math.min(1,t/.35));if(this.furl.visible=c>.02,this.furl.scale.set(Math.max(.05,c),1,Math.max(.05,c)),!l)return;let h=a.L*.465,p=new A(0,-a.r,-h),f=new A(0,-a.r,h),d,g;if(this.foot.yard){let x=this.foot.yard,S=x.L*.465;d=Ge(new A(0,x.r,-S),x.group,a.group),g=Ge(new A(0,x.r,S),x.group,a.group)}else{let x=this.foot.drop();d=new A(.6,-x,-h*.74),g=new A(.6,-x,h*.74)}let v=(d.y+g.y)/2*-1;this.height=Math.max(1,v);let m=this.fullness*e*t,u=this.geo.attributes.position.array,_=this.geo.attributes.uv.array,y=Math.sin(n*2.1+a.L)*.04*e;for(let x=0;x<o;x++){let S=x/(o-1);for(let E=0;E<r;E++){let b=E/(r-1),M=x*r+E,w=p.x+(f.x-p.x)*b,T=p.y+(f.y-p.y)*b,P=p.z+(f.z-p.z)*b,L=Math.sin(Math.PI*b)*this.roach*v,N=d.x+(g.x-d.x)*b,I=d.y+(g.y-d.y)*b+L,U=d.z+(g.z-d.z)*b,z=S*t,H=w+(N-w)*z,et=T+(I-T)*z,F=P+(U-P)*z,j=Math.sin(Math.PI*b)**.9*Math.sin(Math.PI*(.06+.82*S));H+=m*j*(1+y*Math.sin(b*9+n*3)),H+=(1-t)*.25*Math.sin(b*Math.PI*14)*S;for(let K of[0,1]){let mt=Math.hypot(b-K,(S-1)*.7);mt<.35&&(H+=m*.06*Math.sin(mt*45+Math.atan2(S-1,b-K)*6)*(1-mt/.35))}s>0&&(H+=s*.3*(.5+.5*Math.sin(n*9+b*7+S*4))*Math.sin(Math.PI*b)*S),u[M*3]=H,u[M*3+1]=et,u[M*3+2]=F,_[M*2]=F/2,_[M*2+1]=this.reef?1-S:et/4}}(this.colliders?.length||this.stays?.length)&&this.drape(u),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}drape(t){let e=W1.copy(this.space.matrixWorld).invert().multiply(this.yard.group.matrixWorld),n=X1.copy(e).invert(),s=q1,r=.35,o=2;for(let a=0;a<t.length;a+=3){s.set(t[a],t[a+1],t[a+2]).applyMatrix4(e);let l=-1/0;for(let[h,p]of this.colliders){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y)||Math.sign(s.z)!==Math.sign(h.z))continue;let f=(s.y-h.y)/(p.y-h.y),d=h.x+(p.x-h.x)*f,g=Math.abs(h.z+(p.z-h.z)*f),v=Math.min(1,Math.max(0,(Math.abs(s.z)-(g-o))/o));if(v<=0)continue;let m=d+r;s.x<m&&(l=Math.max(l,s.x+(m-s.x)*v*v*(3-2*v)))}let c=!1;l>s.x&&(s.x=l,c=!0);for(let[h,p]of this.stays||[]){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y))continue;let f=(s.y-h.y)/(p.y-h.y),d=h.x+(p.x-h.x)*f,g=h.z+(p.z-h.z)*f,v=1-Math.min(1,Math.abs(s.z-g)/2.2),m=d-.3;v>0&&s.x>m&&(s.x-=(s.x-m)*v*v*(3-2*v),c=!0)}c&&(s.applyMatrix4(n),t[a]=s.x,t[a+1]=s.y,t[a+2]=s.z)}}},nd=class{constructor(t,e,n,s,r,o){this.name=t,this.tack=n,this.head=s,this.clew=r,this.fullness=o,this.NU=12,this.NV=9,this.geo=Yc(this.NU,this.NV),this.mesh=new X(this.geo,ge().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh)}update(t,e,n,s=1){if(this.mesh.visible=t>.015,!this.mesh.visible)return;let r=this.tack,o=r.clone().lerp(this.head,t),a=this.clew.clone();a.z=Math.abs(a.z)*s;let l=r.clone().lerp(a,.15+.85*t);this.side=s;let c=new A().subVectors(o,r).cross(new A().subVectors(l,r)).normalize();c.z*s<0&&c.negate();let h=o.distanceTo(r),p=this.fullness*e*t*h*.06,f=this.geo.attributes.position.array,d=this.geo.attributes.uv.array,g=this.NU,v=this.NV,m=new A,u=new A;for(let _=0;_<v;_++){let y=_/(v-1);for(let x=0;x<g;x++){let S=x/(g-1);u.copy(r).lerp(l,S),m.copy(u).lerp(o,y);let E=Math.sin(Math.PI*S)*Math.sin(Math.PI*Math.min(1,y*.9+.08))*(1-y*.4);m.addScaledVector(c,p*E*(1+.03*Math.sin(n*3+S*8)));let b=_*g+x;f[b*3]=m.x,f[b*3+1]=m.y,f[b*3+2]=m.z,d[b*2]=S*r.distanceTo(this.clew)/2,d[b*2+1]=y*h/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},id=class{constructor(t,e,n){this.name="spanker",this.mast=t,this.gaff=e,this.boom=n,this.NU=12,this.NV=12,this.geo=Yc(this.NU,this.NV),this.mesh=new X(this.geo,ge().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,t.group.add(this.mesh);let s=ge();this.brail=new X(new Oe(.35,1,4,8),s.furl),this.brail.castShadow=!0,t.group.add(this.brail)}update(t,e,n,s=1){let r=this.mast.group,o=Ge(new A(.3,-.15,0),this.gaff.group,r),a=Ge(new A(this.gaff.L-.3,-.15,0),this.gaff.group,r),l=Ge(new A(.3,.2,0),this.boom.group,r),c=Ge(new A(this.boom.L-2,.2,0),this.boom.group,r),h=1-gm(Math.min(1,t/.4));this.brail.visible=h>.02;let p=o.clone().lerp(l,.5).add(new A(-.5,0,0));if(this.brail.position.copy(p),this.brail.scale.set(h,(o.y-l.y-.7)/1.7,h),this.mesh.visible=t>.015,!this.mesh.visible)return;let f=new A(0,0,s),d=this.geo.attributes.position.array,g=this.geo.attributes.uv.array,v=this.NU,m=this.NV,u=new A,_=new A,y=new A,x=1.3*e*t;for(let S=0;S<m;S++){let E=S/(m-1);for(let b=0;b<v;b++){let M=b/(v-1)*t;u.copy(l).lerp(c,M),_.copy(o).lerp(a,M),y.copy(u).lerp(_,E);let w=Math.sin(Math.PI*Math.min(1,M/Math.max(t,.01)))*Math.sin(Math.PI*(.08+.84*E));y.addScaledVector(f,x*w+(1-t)*.2*Math.sin(M*30));let T=S*v+b;d[T*3]=y.x,d[T*3+1]=y.y,d[T*3+2]=y.z,g[T*2]=y.x/2,g[T*2+1]=y.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},ua=class{constructor(t,e,n,s,r=null){this.name=t,this.yard=e,this.footYard=n,this.side=s,this.lower=r,this.NU=8,this.NV=10,this.geo=Yc(this.NU,this.NV),this.mesh=new X(this.geo,ge().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh),r&&(this.boom=new X(new Jt(.11,.08,1,8).translate(0,.5,0).rotateZ(-Math.PI/2),ge().spar),this.boom.castShadow=!0,r.parent.add(this.boom))}update(t,e,n){let s=t>.02;if(this.mesh.visible=s,this.boom&&(this.boom.visible=s),!s)return;let r=this.yard,o=this.side,a=r.L,l=a*.465,c=a/2+2.4*r.mast.scale,h=Math.min(c-l+.6,a*.32),p=new A(.25,-r.r,o*l),f=new A(.25,-r.r,o*(l+h*t)),d,g;if(this.footYard){let E=this.footYard,b=E.L/2+2.4*E.mast.scale;d=Ge(new A(.25,E.r,o*E.L*.465),E.group,r.group),g=Ge(new A(.25,E.r,o*(E.L*.465+(b-E.L*.465)*t)),E.group,r.group)}else{let{root:E,dropTo:b,reach:M}=this.lower,w=l*.78+.6;d=new A(.6,-b(),o*w),g=new A(.6,-b(),o*(w+M*t));let T=Ge(E.clone(),this.lower.parent,this.lower.parent),P=Ge(g.clone(),r.group,this.lower.parent);this.boom.position.copy(T),this.boom.scale.set(T.distanceTo(P),1,1),this.boom.quaternion.setFromUnitVectors(new A(1,0,0),P.clone().sub(T).normalize())}let v=this.geo.attributes.position.array,m=this.geo.attributes.uv.array,u=this.NU,_=this.NV,y=new A,x=new A,S=new A;for(let E=0;E<_;E++){let b=E/(_-1);for(let M=0;M<u;M++){let w=M/(u-1);x.copy(p).lerp(f,w),S.copy(d).lerp(g,w),y.copy(x).lerp(S,b),y.x+=1.1*e*t*Math.sin(Math.PI*w)*Math.sin(Math.PI*(.06+.82*b));let T=E*u+M;v[T*3]=y.x,v[T*3+1]=y.y,v[T*3+2]=y.z,m[T*2]=y.z/2,m[T*2+1]=y.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}};function xm(i,t){let e={square:[],stay:[],spanker:null},n={course:1.7,topsail:2,topgallant:1.3,royal:.8};for(let u of Object.values(i.masts)){let _=u.yards,y=(x,S)=>{if(!_[x]||!S&&x!=="course")return;let E=S?{yard:S}:{drop:()=>_.course.group.position.y-(Ie(u.x)+2.2)},b=new qc(`${u.name}-${x}`,_[x],E,n[x]*u.scale);b.mastName=u.name,b.kind=x,x==="topsail"&&(b.reef=!0,b.mesh.material=ge().canvasReef),e.square.push(b)};u.name!=="mizzen"&&y("course"),y("topsail",_.course),y("topgallant",_.topsail),y("royal",_.topgallant)}{let u=i.spritYard,_=new qc("spritsail",u,{drop:()=>3},.8);_.kind="sprit",e.square.push(_)}let s=i.bowsprit,r=i.masts.fore,o=i.masts.main,a=i.masts.mizzen;i.group.updateMatrixWorld(!0);let l=(u,_)=>Ge(u.local[_].clone(),u.group,i.group),c=(u,_,y,x,S)=>{let E=new nd(u,i.group,_,y,x,S);E.kind=u,e.stay.push(E)},h=(u,_,y)=>u.clone().lerp(_,y),p=l(r,"topmastShroudHead"),f=l(r,"tgHead");c("foreTopmastStaysail",h(s.cap,p,.04),h(s.cap,p,.82),new A(r.x+4.5,pt("qd",24)+5,1.8),1),c("jib",h(s.jibEnd,p,.05),h(s.jibEnd,p,.78),new A(r.x+7,pt("qd",24)+8,4),1),c("flyingJib",h(s.flyEnd,f,.04),h(s.flyEnd,f,.62),new A(r.x+10.5,pt("qd",24)+13,6),.9);let d=l(o,"topmastShroudHead"),g=l(r,"lowerHead");c("mainTopmastStaysail",h(g,d,.14),h(g,d,.85),new A(o.x+4.5,o.h.topY+1.5,.6),.9);let v=l(a,"topmastShroudHead"),m=l(o,"topBack");c("mizzenStaysail",h(m,v,.14),h(m,v,.8),new A(a.x+3,a.h.topY+.5,.6),.8),e.spanker=new id(a,i.gaff,i.boom),e.stun=[];for(let u of[r,o]){let _=u.yards;for(let y of[1,-1]){let x=(S,E)=>{E.kind=S,E.mastName=u.name,e.stun.push(E)};if(x("stunTop",new ua(`${u.name}-topmast-stunsail`,_.topsail,_.course,y)),x("stunTg",new ua(`${u.name}-topgallant-stunsail`,_.topgallant,_.topsail,y)),u===r){let S=pt("upper",u.x)+1.95;x("stunLower",new ua("fore-lower-stunsail",_.course,null,y,{parent:i.group,root:new A(u.x+.5,S+.4,y*(wt(u.x+.5,S)+.9)),dropTo:()=>_.course.group.position.y-(Ie(u.x)+1.4),reach:7.5}))}}}return e}var _m=new A(0,1,0),Ki=class{constructor(t,e,n){let s=new Jt(1,1,1,6,1,!0);s.translate(0,.5,0),this.mesh=new cn(s,e,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=n,this._m=new Et,this._q=new We,this._s=new A,this._d=new A}begin(){this.n=0,this.segs=[],this.tag=""}add(t,e,n){if(this.n>=this.capacity)return;this.segs.push([t.clone(),e.clone(),this.tag]);let s=this._d.subVectors(e,t),r=s.length();r<1e-4||(this._q.setFromUnitVectors(_m,s.multiplyScalar(1/r)),this._s.set(n,r,n),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.n++,this._m))}addSag(t,e,n,s=.02,r=4){let o=t.distanceTo(e),a=t.clone();for(let l=1;l<=r;l++){let c=l/r,h=t.clone().lerp(e,c);h.y-=s*o*4*c*(1-c),this.add(a,h,n),a=h}}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},sd=class{constructor(t,e){let n=ge(),s=new me(1,8,6).scale(.11,.17,.075),r=new be(.085,.018,4,10).scale(1,1.6,1),o=ys([s,r.translate(0,0,0)].map(a=>a.toNonIndexed()));this.mesh=new cn(o,n.darkWood,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=e,this._m=new Et,this._q=new We}begin(){this.n=0}add(t,e,n=.35,s=1){if(this.n>=this.capacity)return;let r=new A().subVectors(e,t),o=r.length();if(o<.001)return;r.multiplyScalar(1/o);let a=t.clone().addScaledVector(r,Math.min(n,o*.5));this._q.setFromUnitVectors(_m,r),this._m.compose(a,this._q,new A(s,s,s)),this.mesh.setMatrixAt(this.n++,this._m)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Zc=class{constructor(t){let e=ge();this.rig=t,this.space=t.group,this.standing=new Ki(this.space,e.rope,9e3),this.running=new Ki(this.space,e.ropeLight,600),this.sailLines=new Ki(this.space,e.ropeLight,7e3),this.blocks=new sd(this.space,400),this.sailLines.mesh.castShadow=!1,this.fittings=new Yt,this.space.add(this.fittings),t.group.updateMatrixWorld(!0),this.colliders={},this.buildStanding(e)}P(t,e,...n){let s=t.local[e],r=typeof s=="function"?s(...n):s.clone();return Ge(r,t.group,this.space)}L(t,e){return Ge(e,t.group,this.space)}buildStanding(t){let e=this.standing;e.begin();let n=this.rig,s=[],r=[],o=[],a=(x,S,E)=>new A(x,S,E),l=(x,S,E,b,M,w)=>{for(let T=0;T<x.length-1;T++){let[P,L]=x[T],[N,I]=x[T+1];for(let U=E;U<b;U+=M){let z=(U-P.y)/(L.y-P.y),H=(U-N.y)/(I.y-N.y);z<0||z>1||H<0||H>1||e.add(P.clone().lerp(L,z),N.clone().lerp(I,H),w)}}};for(let x of Object.values(n.masts)){let S=x.scale,E=this.colliders[x.name]={lower:[],futtock:[],topmast:[],tg:[],backstay:[]},b=x.name==="main"?9:x.name==="fore"?8:6,M=x.x+.4*S,w=Math.max(x.x-7.8*S,x.name==="mizzen"?-21.9:-99),T=pt("upper",x.x)+1.95;for(let P of[1,-1]){let L=wt(M,T),N=wt(w,T);s.push(Je(a(M,T,P*(L+.5)),a(w,T,P*(N+.5)),1.2,.2));let I=[],U=this.P(x,"shroudHead");for(let jt=0;jt<b;jt++){let Nt=M-.3-jt*(M-w-.6)/(b-1),Ht=wt(Nt,T)+1.05,O=a(Nt,T+.2,P*Ht),G=a(Nt,T+1.25,P*(Ht-.03));r.push(O,G),e.tag=`${x.name} lanyard`,e.add(O,G,.025);let tt=Or[2],ut=Math.round((Nt-tt.x0)/tt.dx-.5),lt=tt.x0+(ut+.5)*tt.dx,gt=lt+Math.max(-.7,Math.min(.7,Nt-lt)),zt=wt(gt,T-2.6)+.12;o.push([O.clone().add(a(0,-.15,0)),a(gt,T-2.6,P*zt)]);let J=U.clone().add(a(0,0,P*(x.r.lower+.12)));e.tag=`${x.name} lower shroud`,e.add(G,J,.06*(.8+.2*S)),E.lower.push([G,J]),I.push([G,J])}e.tag=`${x.name} lower ratline`,l(I,null,T+1.8,U.y-1.2,.42,.016);let z=[],H=x.h;for(let jt=0;jt<4;jt++){let Nt=-H.topLen*.36+jt*H.topLen*.16,Ht=this.L(x,a(Nt,H.topY+.2,P*H.topW*.48));r.push(Ht);let O=this.L(x,a(Nt*.3,H.topY-3.2*S,P*.65));e.tag=`${x.name} futtock shroud`,e.add(Ht,O,.035),E.futtock.push([O,Ht]),e.tag=`${x.name} topmast shroud`;let G=this.L(x,a(x.dTop,H.crossY-.3,P*.3));e.add(Ht.clone().add(a(0,.9,0)),G,.045),E.topmast.push([Ht.clone().add(a(0,.9,0)),G]),e.add(Ht,Ht.clone().add(a(0,.9,0)),.02),z.push([Ht.clone().add(a(0,.9,0)),G])}e.tag=`${x.name} topmast ratline`,l(z,null,H.topY+1.6,H.crossY-1.2,.4,.013),e.tag=`${x.name} topgallant shroud`;let et=this.P(x,"crossEnd",P),F=this.L(x,a(x.dTg,H.tgHead-.4,P*.14));e.add(et.clone().add(a(-.1,0,0)),F,.03),e.add(et.clone().add(a(-.8,0,0)),F,.03),E.tg.push([et.clone().add(a(-.1,0,0)),F],[et.clone().add(a(-.8,0,0)),F]),e.tag=`${x.name} backstay`;let j=T+.15,K=jt=>{if(x.name==="mizzen"){let Ht=-22.6-jt*.7,O=Ie(Ht)-.3;return a(Ht,O,P*(wt(Ht,O)+.6))}let Nt=w-.9-jt*1.1;return a(Nt,j,P*(wt(Nt,j)+.9))};for(let jt=0;jt<2;jt++){let Nt=K(jt);r.push(Nt),s.push(Je(Nt.clone().add(a(.4,-.1,-P*.6)),Nt.clone().add(a(-.4,-.1,-P*.6)),1.2,.2));let Ht=this.L(x,a(x.dTop,H.topmastHead-.6,P*.25));e.add(Nt,Ht,.05),E.backstay.push([Nt,Ht])}let mt=this.L(x,a(x.dTg,H.tgHead-.3,P*.12)),yt=this.L(x,a(x.dTg,H.poleHead-.2,P*.1));e.add(K(2),mt,.035),e.add(K(2),yt,.025),E.backstay.push([K(2),mt],[K(2),yt])}}let c=n.bowsprit,h=n.masts.fore,p=n.masts.main,f=n.masts.mizzen,d=[["fore stay",this.P(h,"stayLower"),c.fore,.13],["fore preventer stay",this.P(h,"stayLower").add(a(0,-.3,0)),c.P(12.5,.4),.1],["fore topmast stay",this.P(h,"topmastShroudHead"),c.cap,.08],["jib stay",this.P(h,"topmastShroudHead"),c.jibEnd,.06],["fore topgallant stay",this.P(h,"tgHead"),c.flyEnd,.045],["fore royal stay",this.P(h,"poleHead"),c.flyEnd,.03],["main stay",this.P(p,"stayLower"),a(h.x+2.2,pt("qd",h.x+2.2)+.6,0),.14],["main preventer stay",this.P(p,"stayLower").add(a(0,-.3,0)),a(h.x+3,pt("qd",h.x+3)+.6,0),.1],["main topmast stay",this.P(p,"topmastShroudHead"),this.P(h,"lowerHead"),.08],["main topgallant stay",this.P(p,"tgHead"),this.P(h,"topmastShroudHead"),.045],["main royal stay",this.P(p,"poleHead"),this.P(h,"tgHead"),.03],["mizzen stay",this.P(f,"stayLower"),this.L(p,a(0,pt("qd",p.x)+3.5,0)),.1],["mizzen topmast stay",this.P(f,"topmastShroudHead"),this.P(p,"topBack"),.06],["mizzen topgallant stay",this.P(f,"tgHead"),this.P(p,"lowerHead"),.035]];this.stayLines={};for(let[x,S,E,b]of d)e.tag=x,e.add(S,E,b),this.stayLines[x]=[S,E];e.tag="bowsprit rigging";let g=x=>a(31+(x-2)*.35,x,0);e.tag="bobstay",e.add(c.P(10.5,-.3),g(1.6),.08),e.add(c.P(13.5,-.3),g(3.4),.08);for(let x of[1,-1])e.tag="bowsprit shroud",e.add(c.P(12,0),a(28.2,4.5,x*2),.06),e.add(c.P(16,0),a(28.4,5,x*2.1),.06),e.tag="martingale back rope",e.add(c.striker,a(27.5,pt("qd",27)-.6,x*2.2),.04);e.tag="martingale stay",e.add(c.jibEnd,c.striker,.04),e.add(c.flyEnd,c.striker,.035),e.end();let v=new Ki(this.space,t.iron,o.length);v.begin();for(let[x,S]of o)v.add(x,S,.04);v.end();let m=new X(xt(s),t.black);m.castShadow=!0,this.fittings.add(m);let u=new Jt(.17,.17,.12,10);u.rotateX(Math.PI/2);let _=new cn(u,t.darkWood,r.length),y=new Et;r.forEach((x,S)=>{y.makeTranslation(x.x,x.y,x.z),_.setMatrixAt(S,y)}),this.fittings.add(_)}updateRunning(t,e,n){let s=this.running,r=this.rig,o=(m,u,_)=>new A(m,u,_);s.begin();let a=this.blocks;a.begin();let l=r.masts.main,c=r.masts.mizzen,h=(m,u,_)=>{let y=_;return m.name==="fore"?u.name==="course"?o(l.x+3.5,Ie(l.x+3.5)+.3,y*7.2):u.name==="topsail"?this.P(l,"crossEnd",y):u.name==="topgallant"?this.P(l,"tgHead"):this.P(l,"poleHead"):m.name==="main"?u.name==="course"?o(-21.5,Ie(-21.5)+.3,y*(wt(-21.5,9)+.1)):u.name==="topsail"?o(c.x+1,Ie(c.x+1)+.6,y*(wt(c.x+1,9)+.4)):this.P(c,"poleHead").add(o(0,.2,0)):u.name==="course"?this.L(l,o(-1.5,pt("qd",l.x)+6,y*3)):u.name==="topsail"?this.P(l,"topEdge",y):this.P(l,"crossEnd",y)},p={course:"lowerHead",topsail:"topmastHead",topgallant:"tgHead",royal:"poleHead"};for(let m of Object.values(r.masts))for(let u of Object.values(m.yards)){let _=this.P(m,p[u.name]);for(let y of[1,-1]){let x=Ge(o(0,0,y*u.L*.48),u.group,this.space);s.tag=`${m.name} ${u.name} lift`;let S=_.clone().add(o(0,0,y*.3));s.add(x,S,.025),a.add(S,x,.25,.8+.2*m.scale),a.add(x,S,.3,.7+.2*m.scale),s.tag=`${m.name} ${u.name} brace`;let E=h(m,u,y);s.addSag(x,E,.022,.012,3),a.add(x,E,.9,.8+.2*m.scale),a.add(E,x,.3,.8)}if(s.tag=`${m.name} ${u.name} tie`,s.add(Ge(o(0,u.r,0),u.group,this.space),_,.04),u.name!=="course"){s.tag=`${m.name} ${u.name} halyard`;let y=u.name==="topgallant"?-1:1,x=o(m.x-1.3,pt("upper",m.x)+(m.x>1&&m.x<15?.6:2.6),y*.9);s.add(_.clone().add(o(-.35,-.3,y*.2)),x,.03)}}for(let m of t.square){if(m.kind!=="course"||!m.mesh.visible)continue;let u=m.geo.attributes.position,_=[u.count-m.NU,u.count-1];s.tag=`${m.mastName} course sheet/tack`,_.forEach((y,x)=>{let S=Ge(o(u.getX(y),u.getY(y),u.getZ(y)),m.yard.group,this.space),E=Math.sign(S.z)||(x===0?-1:1),b=m.mastName==="fore"?9:-12;s.addSag(S,o(b,Ie(b)+.3,E*(wt(b,9)+.1)),.03,.01,3),s.add(S,o(S.x+6,Ie(S.x+6)+.2,E*(wt(S.x+6,9)-.1)),.03)})}for(let m of t.stay){if(!m.mesh.visible)continue;let u=m.geo.attributes.position,_=o(u.getX(m.NU-1),u.getY(m.NU-1),u.getZ(m.NU-1)),x=m.kind==="mainTopmastStaysail"||m.kind==="mizzenStaysail"?_.x+3:Math.min(23,_.x-4);s.tag=`${m.name} sheet`,s.addSag(_,o(x,Ie(x)+.3,Math.sign(_.z)*(wt(x,9)-.2)),.025,.02,3)}let f=Ge(o(r.boom.L-.3,0,0),r.boom.group,this.space),d=Ge(o(r.gaff.L-.2,0,0),r.gaff.group,this.space);s.tag="boom topping lift";let g=1.3*n.belly*e["set.spanker"];for(let m of[1,-1]){let u=Ge(o(r.boom.L-.3,0,m*.45),r.boom.group,this.space),_=this.P(c,"lowerHead").add(o(0,0,m*.9)),y=m===n.lee?g+.35:0,x=u;for(let S=1;S<=8;S++){let E=S/8,b=u.clone().lerp(_,E);b.z+=m*y*Math.sin(Math.PI*Math.min(1,E*1.25)),s.add(x,b,.03),x=b}}s.tag="spanker sheet",s.addSag(f,o(-29,Ie(-29)+.3,0),.04,.01,2),s.tag="gaff vang",s.addSag(d,Ge(o(r.boom.L-.4,.15,0),r.boom.group,this.space),.02,.02,3),s.addSag(d,o(-28.5,Ie(-28.5)+.2,-n.lee*(wt(-28.5,Ie(-28.5))-.1)),.02,.02,3),s.tag="peak halyard",s.add(d,this.P(c,"topmastShroudHead"),.03);let v=r.spritYard;s.tag="spritsail yard rigging";for(let m of[1,-1]){let u=Ge(o(0,0,m*v.L*.48),v.group,this.space);s.add(u,r.bowsprit.cap,.022),s.addSag(u,o(26.5,Ie(26.5)+.3,m*3.5),.02,.02,3)}s.end(),a.end(),this.updateSailLines(t)}updateSailLines(t){let e=this.sailLines;e.begin();let n=new Et().copy(this.space.matrixWorld).invert(),s=new Et,r=new A,o=new A,a=new A,l=(v,m,u,_,y)=>{let x=v.geo.attributes.position,S=v.geo.attributes.normal,E=u*v.NU+m;return r.fromBufferAttribute(x,E),a.fromBufferAttribute(S,E),a.dot(y)<0&&a.negate(),r.clone().addScaledVector(a,_).applyMatrix4(s)},c=(v,m,u,_,y,x)=>{let S=null;for(let E=v.NV-1;E>=0;E--){let b=l(v,m,E,u,_);S&&e.add(S,b,y),S=b}x&&e.add(S,x.clone().applyMatrix4(s),y)},h=new A(1,0,0),p=(v,m,u,_,y)=>{let x=m*(v.NU-1),S=u*(v.NV-1),E=Math.min(v.NU-2,Math.floor(x)),b=Math.min(v.NV-2,Math.floor(S)),M=x-E,w=S-b,T=l(v,E,b,_,y),P=l(v,E+1,b,_,y),L=l(v,E,b+1,_,y),N=l(v,E+1,b+1,_,y);return M>=w?T.addScaledVector(P.clone().sub(T),M).addScaledVector(N.clone().sub(P),w):T.addScaledVector(L.clone().sub(T),w).addScaledVector(N.clone().sub(L),M)},f=(v,m,u,_=.022)=>{for(let y of m)for(let x=0;x<v.NV-1;x++)e.add(l(v,y,x,0,h),l(v,y,x+1,0,h),_);if(u!=null)for(let y=0;y<v.NU-1;y++)e.add(l(v,y,u,0,h),l(v,y+1,u,0,h),_)},d={course:[.2,.4,.6,.8],topsail:[.28,.5,.72],topgallant:[.35,.65]};for(let v of t.square){if(!v.mesh.visible||!d[v.kind])continue;s.multiplyMatrices(n,v.yard.group.matrixWorld);let m=v.yard.L*.465;e.tag=`${v.name} buntline`;for(let u of d[v.kind]){let _=Math.round(u*(v.NU-1)),y=-m+2*m*_/(v.NU-1);c(v,_,.06,h,.018,new A(v.yard.r+.05,v.yard.r*.6,y))}if(e.tag=`${v.name} bolt rope`,f(v,[0,v.NU-1],v.NV-1),v.reef&&v.mesh.visible){e.tag=`${v.name} reef points`;let u=v.yard.L*.93,_=Math.round(u/.6);for(let y of[.12,.24,.36])if(!(y>v.setNow-.02))for(let x=1;x<_;x++)for(let S of[.05,-.05]){let E=y/Math.max(.05,v.setNow),b=.26/Math.max(1,v.height||10),M=S*1.6,w=p(v,x/_,E,M,h),T=p(v,x/_,Math.min(1,E+b),M,h);e.add(w,T,.008)}}if(v.kind==="course"){e.tag=`${v.name} leechline`;for(let u of[.1,.9])c(v,Math.round(u*(v.NU-1)),-.06,h,.016,null)}e.tag=`${v.name} clewline`;for(let u of[0,v.NU-1]){let _=l(v,u,v.NV-1,-.05,h),y=u===0?-1:1;e.add(_,new A(-.25,-v.yard.r,y*m*.55).applyMatrix4(s),.018)}}for(let v of t.stay)if(v.mesh.visible){s.multiplyMatrices(n,v.mesh.matrixWorld),e.tag=`${v.name} bolt rope`;for(let m=0;m<v.NV-1;m++)e.add(l(v,v.NU-1,m,0,h),l(v,v.NU-1,m+1,0,h),.02);for(let m=0;m<v.NU-1;m++)e.add(l(v,m,0,0,h),l(v,m+1,0,0,h),.02)}let g=t.spanker;if(g.mesh.visible){s.multiplyMatrices(n,g.mast.group.matrixWorld),e.tag="spanker bolt rope";for(let m=0;m<g.NV-1;m++)e.add(l(g,g.NU-1,m,0,h),l(g,g.NU-1,m+1,0,h),.02);e.tag="spanker brail";let v=new A(0,0,1);for(let m of[.3,.55,.8]){let u=Math.round(m*(g.NV-1));for(let _ of[.06,-.06]){let y=null;for(let x=g.NU-1;x>=0;x--){let S=l(g,x,u,_,v);y&&e.add(y,S,.016),y=S}}}}e.end()}};function Z1(i,t,e){let s=wt(i,t),r=(wt(i+.05,t)-wt(i-.05,t))/(2*.05),o=(wt(i,t+.05)-wt(i,t-.05))/(2*.05),a=new A(-r,-o,e).normalize(),l=new A().crossVectors(new A(0,1,0),a).normalize(),c=new A().crossVectors(a,l).normalize();return{p:new A(i,t,e*s),n:a,a:l,up:c}}function $1(i,t){let e=t*2.1,n=[[0,-.32*i/3],[e*.35,-.3*i/3],[e*.4,-.22*i/3],[e*.2,-.16*i/3],[e*.95,-.1*i/3],[e,0],[e*1.06,.02*i],[e*.98,.04*i],[e*.92,.38*i],[e*.98,.4*i],[e*.86,.42*i],[e*.72,.9*i],[e*.82,.95*i],[e*.78,i],[t,i],[t,i*.7]].map(([o,a])=>new $(o,a)),s=new Sn(n,14);s.rotateX(Math.PI/2);let r=new Jt(e*.3,e*.3,e*2.8,8);return r.rotateZ(Math.PI/2),r.translate(0,0,.42*i),xt([s,r])}function K1(i,t){let e=t*1.65,n=[[0,-.1],[e*.5,-.09],[e*.75,-.04],[e*.95,.05],[e,.25*i],[e*.92,.6*i],[e*.86,.82*i],[e*1.05,.9*i],[e*1.08,i],[t,i],[t,i*.55]].map(([o,a])=>new $(o,a)),s=new Sn(n,16);s.rotateX(Math.PI/2);let r=new Gt(e*.5,e*.9,e*.9);return r.translate(0,-e*1.05,.45*i),xt([s,r])}function j1(i,t){let e=[],n=new Gt(t*3.2,t*1,i*1.5);n.translate(0,t*2.4,i*.75),e.push(n);let s=new Gt(t*3.6,t*1.6,i*1.3);s.translate(0,t*.95,i*.7),e.push(s);for(let r of[1,-1]){let o=new Jt(t*.9,t*.9,t*.6,10);o.rotateZ(Math.PI/2),o.translate(r*t*2,t*.9,i*.15),e.push(o)}return xt(e)}function J1(i,t){let e=t*6.2,n=i*.5,s=[];for(let o of[1,-1]){let a=new Ke;a.moveTo(0,0),a.lineTo(n,0),a.lineTo(n,t*5.2),a.lineTo(n*.62,t*5.2),a.lineTo(n*.55,t*3.8),a.lineTo(n*.3,t*3.4),a.lineTo(n*.22,t*2.4),a.lineTo(0,t*2.2),a.closePath();let l=new Tn(a,{depth:t*.9,bevelEnabled:!1});l.rotateY(-Math.PI/2),l.translate(o*e/2+t*.45,0,0),s.push(l)}let r=new Gt(e,t*.8,n*.95);r.translate(0,t*1.4,n/2),s.push(r);for(let o of[n*.12,n*.85]){let a=new Gt(e*1.25,t*1.1,t*1.4);a.translate(0,t*1.4,o),s.push(a);for(let l of[1,-1]){let c=new Jt(t*1.5,t*1.5,t*.7,12);c.rotateZ(Math.PI/2),c.translate(l*e*.62,t*1.5,o),s.push(c)}}return xt(s)}var $c=class{constructor(t){let e=ge();this.group=new Yt,this.group.name="guns",t.add(this.group),this.ports=[];for(let r of Ai())for(let o of[1,-1]){let a=Z1(r.x,r.y,o),l=new A(a.n.x,0,a.n.z).normalize();this.ports.push({...r,side:o,basis:a,out:l,recoil:0,fireAt:-1})}this.byTier=new Map;for(let r of this.ports){let o=r.tier.name;this.byTier.has(o)||this.byTier.set(o,[]),this.byTier.get(o).push(r)}this.barrels=[],this.carriages=[];for(let[r,o]of this.byTier){let a=o[0].tier,l=new cn(a.carronade?K1(a.len,a.bore):$1(a.len,a.bore),e.iron,o.length);l.castShadow=!0,l.frustumCulled=!1;let c=new cn(a.carronade?j1(a.len,a.bore):J1(a.len,a.bore),e.carriage,o.length);c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,this.group.add(l,c),this.barrels.push({mesh:l,list:o}),this.carriages.push({mesh:c,list:o})}this.lidPorts=this.ports.filter(r=>r.tier.lid);let n=new Gt(1,1,1);n.translate(0,-.5,.5),this.lids=new cn(n,[e.black,e.black,e.black,e.black,e.black,e.inside],this.lidPorts.length),this.lids.castShadow=!0,this.lids.frustumCulled=!1,this.group.add(this.lids);let s=[];for(let r of[-.28,.28])s.push(new Gt(.07,.92,.3).translate(r,-.48,1.12)),s.push(new Jt(.045,.045,.16,6).rotateZ(Math.PI/2).translate(r,0,1.1));s.push(new Gt(.14,.08,.5).translate(0,-.86,1.2)),this.hinges=new cn(xt(s),e.iron,this.lidPorts.length),this.hinges.frustumCulled=!1,this.group.add(this.hinges),this.lidRopes=new Ki(this.group,e.rope,this.lidPorts.length*2),this.lidRopes.mesh.castShadow=!1,this.breeching=new Ki(this.group,e.rope,this.ports.length*6),this.breeching.mesh.castShadow=!1,this._m=new Et,this._b=new Et,this._r=new Et,this._s=new Et,this.apply(0,0)}apply(t,e){let n=this._m,s=this._b,r=this._r,o=this._s;this.lidPorts.forEach((f,d)=>{let{a:g,up:v,n:m,p:u}=f.basis,_=f.tier,y=u.clone().addScaledVector(v,_.h/2+.04).addScaledVector(m,.02);s.makeBasis(g,v,m).setPosition(y),r.makeRotationX(-t*1.45),o.makeScale(_.w+.12,_.h+.1,.11),n.copy(s).multiply(r).multiply(o),this.lids.setMatrixAt(d,n),this.hinges.setMatrixAt(d,n)}),this.lids.instanceMatrix.needsUpdate=!0,this.hinges.instanceMatrix.needsUpdate=!0;let a=this.lidRopes;if(a.begin(),t>.05){let f=new A;this.lidPorts.forEach((d,g)=>{this.lids.getMatrixAt(g,n);let{a:v,up:m,n:u,p:_}=d.basis;for(let y of[-.32,.32]){f.set(y,-.92,1).applyMatrix4(n);let x=_.clone().addScaledVector(m,d.tier.h/2+.42).addScaledVector(v,y*d.tier.w).addScaledVector(u,.03);a.add(f,x,.018)}})}a.end();let l=new We,c=new A,h=new A(1,1,1),p=new A(0,0,1);for(let{mesh:f,list:d}of this.barrels)d.forEach((g,v)=>{let m=g.tier;l.setFromUnitVectors(p,g.out);let u=pt(m.deck,g.x),_=g.basis.p.clone(),y=-.9+e*1.6-g.recoil*1.3;c.copy(_).addScaledVector(g.out,y-m.len),c.y=g.y-.02,f.setMatrixAt(v,n.compose(c,l,h))}),f.instanceMatrix.needsUpdate=!0;for(let{mesh:f,list:d}of this.carriages)d.forEach((g,v)=>{let m=g.tier;l.setFromUnitVectors(p,g.out);let u=g.basis.p.clone(),_=-.9+e*1.6-g.recoil*1.3;c.copy(u).addScaledVector(g.out,_-m.len*(m.carronade?1.2:.88)),c.y=pt(m.deck,g.x)+.02,f.setMatrixAt(v,n.compose(c,l,h))}),f.instanceMatrix.needsUpdate=!0;this.updateBreeching(e)}updateBreeching(t){let e=this.breeching;e.begin();for(let n of this.ports){let s=n.tier;if(s.carronade)continue;let r=-.9+t*1.6-n.recoil*1.3,o=n.basis.p.clone().addScaledVector(n.out,r-s.len-.1).setY(n.y-.02);for(let a of[1,-1]){let l=n.basis.p.clone().addScaledVector(n.basis.a,a*(s.w/2+.28)).addScaledVector(n.basis.n,-.04);l.y=n.y-.25,e.addSag(l,o,.028,.06,3)}}e.end()}muzzle(t,e){let n=-.9+e*1.6;return t.basis.p.clone().addScaledVector(t.out,n+.1).setY(t.y)}};function Q1(i,t,e){return Vn(24,10,(o,a)=>{let c=o/23*2-1,h=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(c),c>0?1.7:3)),.55),p=e*(.75+.25*(1-c*c)),f=a/9*Math.PI-Math.PI/2,d=.25*c*c*e;return[c*i/2,-p*Math.cos(f)*(1-.1*Math.abs(c))+d,h*Math.sin(f)]},null,!0)}function Kc(i,t,e,n="#2a2622"){let s=ge(),r=new Yt,o=new ae({color:n,roughness:.7,side:De}),a=new X(Q1(i,t,e),o);a.castShadow=!0,r.add(a);let l=[];for(let f=1;f<=4;f++){let d=-i/2+f/5*i,g=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(d/(i/2)),d>0?1.7:3)),.55),v=new Gt(.28,.06,g*1.8);v.translate(d,-e*.35,0),l.push(v)}let c=new X(xt(l),s.darkWood);r.add(c);let h=[];for(let f=0;f<=40;f++){let d=f/40*Math.PI*2,g=Math.cos(d),v=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(g),g>0?1.7:3)),.55);h.push(new A(g*i/2,.25*g*g*e+.02,Math.sign(Math.sin(d))*v))}let p=new X(new xn(new gn(h,!0),80,.06,5,!0),new ae({color:"#d8cfb6",roughness:.6}));return r.add(p),r}function rd(){let i=ge(),t=[],e=(l,c,h=0)=>new A(l,c,h);t.push(we(e(0,0),e(0,5.3),.13,.1,8));let n=[];for(let l of[1,-1]){let c=new ls(e(0,.1),e(l*1.1,0),e(l*1.85,1.35));n.push(new xn(c,10,.11,6));let h=new Gt(.85,1,.08);h.rotateZ(-l*.55),h.translate(l*1.7,1.15,0),n.push(h)}t.push(...n);let s=new be(.32,.05,6,16);s.translate(0,5.65,0),t.push(s);let r=new X(xt(t),i.iron),o=new X(new Gt(.32,.32,5),i.darkWood);o.position.y=5;let a=new Yt;return a.add(r,o),a.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),a}function tM(i){let t=new Yt,e=()=>{let o=new Yt,a=new X(new be(.82,.05,6,28),i.darkWood);o.add(a);let l=new X(new Jt(.16,.16,.22,10),i.brass);l.rotation.x=Math.PI/2,o.add(l);for(let c=0;c<10;c++){let h=c/10*Math.PI*2,p=new X(new Jt(.03,.035,1.18,6),i.darkWood);p.position.set(Math.cos(h)*.59,Math.sin(h)*.59,0),p.rotation.z=h-Math.PI/2,o.add(p)}return o},n=e(),s=e();n.rotation.y=s.rotation.y=Math.PI/2,n.position.set(.55,1.15,0),s.position.set(-.55,1.15,0),t.add(n,s);let r=new X(new Jt(.28,.28,1,12),i.darkWood);r.rotation.z=Math.PI/2,r.position.y=1.15,t.add(r);for(let o of[.85,-.85]){let a=new X(new Gt(.18,1.2,.4),i.darkWood);a.position.set(o,.6,0),t.add(a)}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function eM(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#0e0905",t.fillRect(0,0,128,128),t.fillStyle="#8c7354";for(let n=0;n<8;n++)t.fillRect(n*16,0,9,128),t.fillRect(0,n*16,128,9);let e=new hn(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=tn,e}var jc=class{constructor(t,e){let n=ge();this.group=new Yt,this.group.name="fittings",t.add(this.group);let s=this.group,r=(x=0,S=0,E=0)=>new A(x,S,E),o=x=>pt("qd",x)+.35,a=Kc(10.2,3,1.15,"#3a2c20");a.position.set(8.8,o(8.8)+1.1,0);let l=Kc(9.4,2.4,.95,"#1d1b19");l.position.set(8.4,o(8.4)+.95,2.95);let c=Kc(8.6,2.3,.9,"#1d1b19");c.position.set(8.8,o(8.8)+.9,-2.9),s.add(a,l,c);for(let x of[1,-1]){let E=Ie(-26.4)-.4,b=wt(-26.4,E)+1.7,M=Kc(7.4,2,.8,"#1d1b19");M.position.set(-26.4,E,x*b),s.add(M);for(let w of[-2.6,2.6]){let T=r(-26.4+w,Ie(-26.4+w)-.2,x*(wt(-26.4+w,9)-.2)),P=r(-26.4+w,Ie(-26.4+w)+1.2,x*(b+.1)),L=new X(we(T,P,.12,.09,8),n.black);L.castShadow=!0,s.add(L),this.davitRope=this.davitRope||[],this.davitRope.push([P,r(-26.4+w*.85,E+.2,x*b)])}}let h=Ze-1,p=tM(n);p.position.set(h,pt("qd",h),0),s.add(p);let f=new Yt,d=new X(new Gt(.7,1,1.2),n.darkWood);d.position.y=.5;let g=new X(new me(.28,12,8,0,Math.PI*2,0,Math.PI/2),n.brass);g.position.y=1,f.add(d,g),f.position.set(h+2,pt("qd",h+2),0),s.add(f);let v=(x,S,E=.75)=>{let b=new Yt,M=new X(new Jt(E*.75,E*.9,1,16),n.darkWood);M.position.y=.5;let w=new X(new Jt(E*1.2,E*1.2,.35,16),n.darkWood);w.position.y=1.15,b.add(M,w);for(let T=0;T<12;T++){let P=T/12*Math.PI*2,L=new X(new Gt(.12,.9,.18),n.darkWood);L.position.set(Math.cos(P)*E*.85,.5,Math.sin(P)*E*.85),L.rotation.y=-P,b.add(L)}b.position.set(x,pt(S,x),0),b.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),s.add(b)};for(let x of["middle","lower"])v(-6.4,x,x==="middle"?.75:.62),v(3.7,x,x==="middle"?.55:.48);{let x=new Yt,S=2.6,E=2,b=.55,M=.45,w=new X(new Gt(S,b,E),n.darkWood);w.position.y=b/2,x.add(w);let T=Math.atan2(M,E/2),P=Math.hypot(M,E/2),L=new ae({color:"#1c2630",roughness:.08,metalness:.2}),N=[];for(let z of[1,-1]){let H=new X(new Gt(S-.1,.03,P),L);H.position.set(0,b+M/2,z*E/4),H.rotation.x=z*T,x.add(H);for(let et=0;et<=6;et++){let F=new Gt(.05,.05,P).rotateX(z*T);F.translate(-S/2+.05+et*(S-.1)/6,b+M/2+.02,z*E/4),N.push(F)}}N.push(new Gt(S,.08,.08).translate(0,b+M,0));let I=new Ke;I.moveTo(-E/2,0),I.lineTo(E/2,0),I.lineTo(0,M),I.closePath();for(let z of[-S/2,S/2-.06])N.push(new Tn(I,{depth:.06,bevelEnabled:!1}).rotateY(Math.PI/2).translate(z+.06,b,0));let U=new X(xt(N),n.darkWood);x.add(U),x.traverse(z=>{z.isMesh&&(z.castShadow=!0)}),x.position.set(-8.8,pt("qd",-8.8),0),s.add(x)}let m=eM(),u=new ae({map:m,roughness:.85});for(let{x,w:S,d:E}of Dn.filter(b=>b.x>pn+1&&b.x<$e-1&&!b.ladder)){let b=new X(new Gt(S+.3,.3,E+.3),n.darkWood);b.position.set(x,pt("upper",x)+.15,0);let M=new X(new hi(S,E),u);M.rotation.x=-Math.PI/2,M.position.set(x,pt("upper",x)+.31,0),m.repeat.set(1,1),s.add(b,M)}{let x=new Yt,S=[];for(let[M,w]of[[.4,.4],[.4,-.4],[-.4,.4],[-.4,-.4]]){let T=new Jt(.06,.07,1.6,6);T.translate(M,.8,w),S.push(T)}let E=new as(.75,.6,4);E.rotateY(Math.PI/4),E.translate(0,1.9,0),S.push(E),x.add(new X(xt(S),n.ochre));let b=new X(new Jt(.12,.28,.4,14,1,!0),n.brass);b.material=n.brass,b.position.y=1.25,x.add(b),x.position.set($e+.8,pt("qd",$e+.8),0),s.add(x)}{let x=new X(new Gt(.6,1.6,.6),n.copper);x.position.set(20.3,pt("qd",20.3)+.8,1.6),x.castShadow=!0,s.add(x);let S=new X(new Jt(.28,.28,.5,10),n.copper);S.rotation.z=Math.PI/2,S.position.set(20.3,pt("qd",20.3)+1.75,1.6),s.add(S)}this.lanterns=[];{let x=Me(Ie(-29.4))+.5,S=Ie(-29.4)+.1;for(let[E,b]of[[0,1.25],[3.2,.9],[-3.2,.9]]){let M=new Yt,w=new X(new Jt(.42*b,.32*b,1.1*b,6),n.lantern);w.position.y=.55*b;let T=new X(new as(.5*b,.6*b,6),n.gold);T.position.y=1.4*b;let P=new X(new me(.12*b,8,6),n.gold);P.position.y=1.8*b;let L=new X(new Jt(.2*b,.35*b,.35*b,6),n.gold);L.position.y=-.1,M.add(w,T,P,L);let N=new X(we(r(.6,-.6),r(0,0),.06,.06,6),n.gold);M.add(N),M.position.set(x-.3,S+.4,E),s.add(M),this.lanterns.push(w)}}{let x=Me(Ie(-29.4))+.6,S=r(x,Ie(-29.4)-.5),E=r(x-2.2,Ie(-29.4)+6.5);s.add(new X(we(S,E,.09,.05,8),n.spar)),this.ensignStaff=E;let M=e.bowsprit.cap.clone().add(r(0,.4,0)),w=M.clone().add(r(.6,4.2,0));s.add(new X(we(M,w,.07,.04,8),n.spar)),this.jackStaff=w}this.anchors=[];for(let x of[1,-1]){let E=pt("qd",25.6)+.55,b=wt(25.6,E)-.4,M=r(25.6+1.35,E+.2,x*(b+1.85)),w=rd(),T=r(Math.cos(1.05),Math.sin(1.05),x*.05).normalize(),P=M.clone().add(r(0,-.5,0)),L=P.clone().addScaledVector(T,-5.65);L.z=x*(wt(L.x,L.y)+1.25);let N=P.clone().sub(L).normalize(),I=r(0,0,x).sub(N.clone().multiplyScalar(N.z*x)).normalize(),U=r().crossVectors(I,N);w.quaternion.setFromRotationMatrix(new Et().makeBasis(I,N,U)),w.position.copy(L),s.add(w),this.anchors.push({obj:w,side:x,home:w.position.clone()})}let _=(x,S)=>{let E=rd(),b=pt("upper",x)+3.4,M=wt(x,b-4)+.35;E.position.set(x,b-5.65,S*M),E.rotation.set(S*.06,Math.PI/2,0),s.add(E)};_(14.075,1),_(14.075,-1),_(11.025,1);let y=(x,S,E)=>{let b=rd();b.scale.setScalar(x),b.rotation.set(Math.PI/2,0,-Math.PI/2),b.position.set(S-2.6*x,pt("qd",S)+.5,E),s.add(b)};y(.6,12.6,4.7),y(.42,12.4,-4.7),this.cable=new X(new ue,n.rope),this.cable.castShadow=!0,s.add(this.cable),this.hawse=r(26.9,pt("middle",26.9)+.9,wt(26.9,pt("middle",26.9)+.9)+.1)}setAnchor(t){let e=this.anchors[0];if(e.obj.visible=t<.95,e.obj.position.copy(e.home).add(new A(0,-t*16,0)),t>.02){let n=this.hawse,s=new A(n.x+4+t*18,fe(n.y-1,-9,t),n.z+t*3),r=n.clone().lerp(s,.5).add(new A(0,-t*2.5,0)),o=new ls(n,r,s);this.cable.geometry.dispose(),this.cable.geometry=new xn(o,16,.14,6),this.cable.visible=!0}else this.cable.visible=!1}};var Jc={uTime:{value:0},uWind:{value:1}},ji=class{constructor(t,e,n,s,r=0){let o=new hi(e,n,24,6);o.translate(e/2,-n/2,0);let a=new ae({map:Yp(t),side:De,roughness:.85});a.onBeforeCompile=l=>{l.uniforms.uTime=Jc.uTime,l.uniforms.uWind=Jc.uWind,l.uniforms.uW={value:e},l.uniforms.uTaper={value:r},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind, uW, uTaper;`).replace("#include <begin_vertex>",`vec3 transformed = position;
float f = position.x / uW;
transformed.y = (transformed.y + ${(n/2).toFixed(3)}) * (1.0 - uTaper * f) - ${(n/2).toFixed(3)};
float droop = (1.0 - uWind) * 0.75;
float wv = sin(position.x * 0.9 - uTime * (3.0 + 4.0 * uWind) + position.y * 0.4) * f * (0.18 + 0.35 * uWind) * uW * 0.12;
transformed.z += wv;
transformed.x *= mix(1.0, 0.55, droop);
transformed.y -= f * droop * uW * 0.6;
transformed.x -= abs(wv) * 0.25;`)},this.mesh=new X(o,a),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.mesh.userData.noAO=!0,s.add(this.mesh)}place(t,e){this.mesh.position.copy(t),this.mesh.rotation.set(0,Math.atan2(-e.z,e.x),0)}static update(t,e){Jc.uTime.value=t,Jc.uWind.value=e}};var nM=`
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
}`,iM=`
uniform sampler2D map;
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor.rgb, t.a * vColor.a);
  if (gl_FragColor.a < 0.003) discard;
  #include <fog_fragment>
}`,Qc=class{constructor(t,e,n){this.max=e;let s=new Lo,r=new hi(1,1);s.index=r.index,s.attributes.position=r.attributes.position,s.attributes.uv=r.attributes.uv,this.data=new Float32Array(e*4),this.color=new Float32Array(e*4),s.setAttribute("iData",new Wi(this.data,4).setUsage(vc)),s.setAttribute("iColor",new Wi(this.color,4).setUsage(vc)),s.instanceCount=0,this.geo=s;let o=new Ee({uniforms:dn.merge([bt.fog,{map:{value:Zu()}}]),vertexShader:nM,fragmentShader:iM,transparent:!0,depthWrite:!1,fog:!0,blending:n?Ds:ms});o.uniforms.map.value=Zu(),this.mesh=new X(s,o),this.mesh.frustumCulled=!1,this.mesh.userData.noAO=!0,this.mesh.renderOrder=n?11:10,t.add(this.mesh),this.list=[]}spawn(t){this.list.length<this.max&&this.list.push(t)}update(t,e){let n=this.list;for(let s=n.length-1;s>=0;s--){let r=n[s];if(r.age+=t,r.age>=r.life){n.splice(s,1);continue}r.pos.addScaledVector(r.vel,t),r.vel.multiplyScalar(Math.exp(-r.drag*t)),r.vel.addScaledVector(r.acc,t)}e&&n.sort((s,r)=>r.pos.distanceToSquared(e)-s.pos.distanceToSquared(e)),n.forEach((s,r)=>{let o=s.age/s.life;this.data[r*4]=s.pos.x,this.data[r*4+1]=s.pos.y,this.data[r*4+2]=s.pos.z,this.data[r*4+3]=s.size0+(s.size1-s.size0)*Math.sqrt(o);let a=s.alpha*Math.min(1,s.age/(s.fadeIn||1e-4))*(1-o)**s.fadePow;this.color[r*4]=s.color[0],this.color[r*4+1]=s.color[1],this.color[r*4+2]=s.color[2],this.color[r*4+3]=a}),this.geo.instanceCount=n.length,this.geo.attributes.iData.needsUpdate=!0,this.geo.attributes.iColor.needsUpdate=!0}},th=class{constructor(t){this.scene=t,this.smoke=new Qc(t,1800,!1),this.flash=new Qc(t,200,!0),this.rand=Zn(99),this.lights=[];for(let e=0;e<2;e++){let n=new Ls("#ffb060",0,60,1.6);t.add(n),this.lights.push({l:n,t:1})}this.li=0}gunshot(t,e,n){let s=this.rand;for(let o=0;o<3;o++)this.flash.spawn({pos:t.clone().addScaledVector(e,.6+o*.9),vel:e.clone().multiplyScalar(14),acc:new A,drag:6,age:0,life:.14+s()*.06,size0:2.6-o*.5,size1:3.6-o*.6,color:[1,.62,.25],alpha:1,fadePow:1});for(let o=0;o<14;o++){let a=e.clone().multiplyScalar(10+s()*22).add(new A((s()-.5)*4,(s()-.3)*3,(s()-.5)*4)),l=(.82+s()*.12)*(this.light??1);this.smoke.spawn({pos:t.clone().addScaledVector(e,.5),vel:a,acc:new A(n.x,.35,n.z),drag:1.4+s()*.6,age:0,life:9+s()*7,fadeIn:.15,size0:1.2+s(),size1:9+s()*7,color:[l,l,l*.98],alpha:.55,fadePow:1.6})}let r=this.lights[this.li++%this.lights.length];r.l.position.copy(t).addScaledVector(e,2),r.t=0}spray(t,e,n,s){let r=this.rand,o=Math.floor(s+r());for(let a=0;a<o;a++){let l=e.clone().multiplyScalar(1.5+r()*3).add(new A(0,2.5+r()*3.5,0)).add(n.clone().multiplyScalar(.6)),c=.9*(this.light??1);this.smoke.spawn({pos:t.clone().add(new A((r()-.5)*1.5,r()*.3,(r()-.5)*.6)),vel:l,acc:new A(0,-9.8,0),drag:.8,age:0,life:.9+r()*.5,fadeIn:.05,size0:.9+r()*.6,size1:3.5+r()*2.5,color:[c,c,c],alpha:.85,fadePow:1.1})}}update(t,e){this.smoke.update(t,e),this.flash.update(t,null);for(let n of this.lights)n.t+=t,n.l.intensity=n.t<.18?900*(1-n.t/.18):0}},eh=class{constructor(t,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=Zn(41);s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,256,256);for(let u=0;u<1400;u++){let _=r()*256,y=r()*256,x=1+r()*7;s.fillStyle=`rgba(255,255,255,${.1+r()*.35})`,s.beginPath(),s.ellipse(_,y,x*1.6,x,0,0,Math.PI*2),s.fill();for(let[S,E]of[[256,0],[-256,0],[0,256],[0,-256]])s.beginPath(),s.ellipse(_+S,y+E,x*1.6,x,0,0,Math.PI*2),s.fill()}let o=new hn(n);o.wrapS=o.wrapT=tn,this.tex=o,this.uniforms={uFoam:{value:o},uScroll:{value:0},uStrength:{value:0},uLight:{value:1}};let a=[],l=[],c=[],h=[],p=(u,_,y,x=12)=>{let S=a.length/3;for(let E=0;E<u;E++){let b=y(E/(u-1));for(let M=0;M<_;M++){let w=M/(_-1)*2-1,T=b.x+b.px*w*b.half,P=b.z+b.pz*w*b.half;a.push(T,0,P),l.push(T/x,P/x),c.push(Math.min(1,b.a(w)))}}for(let E=0;E<u-1;E++)for(let b=0;b<_-1;b++){let M=S+E*_+b,w=M+_,T=M+1,P=w+1;h.push(M,w,T,w,P,T)}},f=Me(0)+.3,d=Be(0);for(let u of[1,-1])p(110,6,_=>{let y=f+(d-f)*_,x=1.6+6.5*_**3,S=wt(y,.05);return{x:y+.6*_**2,z:u*(S-.3+x/2),px:0,pz:u,half:x/2,a:E=>(1-(E+1)/2)**1.3*(.6+1.3*_**2.2)}},9);p(60,9,u=>({x:f-u*260,z:0,px:0,pz:1,half:2.6+18*u**.8,a:_=>(1-u)**1.8*(1-_*_)*.95*Math.min(1,u*40+.3)}),14);let g=sn.degToRad(19.5);for(let u of[1,-1]){let _=d-3.5,y=u*(wt(_,.05)+1.5),x=-Math.cos(g),S=u*Math.sin(g);p(50,5,E=>{let b=E*240;return{x:_+x*b,z:y+S*b,px:S*u,pz:-x*u,half:1.4+b*.035,a:M=>.6*(1-E)**1.5*(1-M*M)*Math.min(1,E*30+.2)}},12)}let v=new ue;v.setAttribute("position",new se(a,3)),v.setAttribute("uv",new se(l,2)),v.setAttribute("alpha",new se(c,1)),v.setIndex(h);let m=new Ee({uniforms:dn.merge([bt.fog,this.uniforms]),vertexShader:`attribute float alpha; varying float vA; varying vec2 vUv; varying vec3 vWorldP;
        ${Jp}
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
        ${ju}
        #include <fog_pars_fragment>
        void main(){ if (insideHull(vWorldP)) discard; float f = texture2D(uFoam, vUv + vec2(uScroll, 0.0)).a;
        float f2 = texture2D(uFoam, vUv * 0.6 + vec2(uScroll * 0.7, 0.31)).a;
        gl_FragColor = vec4(vec3(0.95) * uLight, (f * 0.7 + f2 * 0.6) * vA * clamp(uStrength + vWash * 0.6, 0.0, 1.2));
        #include <fog_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!0,side:De,polygonOffset:!0,polygonOffsetFactor:-2});m.uniforms.uFoam.value=o;for(let u of["uTime","uOffset","uWaveScale","uWaveRot","uShipInv","uHB0","uHB1","uHB2"])m.uniforms[u]=e[u];this.uniforms=m.uniforms,this.mesh=new X(v,m),this.mesh.renderOrder=2,this.mesh.userData.noAO=!0,this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t,e){this.uniforms.uScroll.value=t/9%1,this.uniforms.uStrength.value=Math.min(1,e/5)*.9+.1}};var sM=["course","topsail","topgallant","royal","sprit","foreTopmastStaysail","jib","flyingJib","mainTopmastStaysail","mizzenStaysail","spanker","stunTop","stunTg","stunLower"],rM={stunTop:0,stunTg:0,stunLower:0},nh=i=>Object.fromEntries(sM.map(t=>[t,i])),Ss={sail:{set:{...nh(1),sprit:0,...rM},hoist:{topsail:1,topgallant:1,royal:1},ports:0,runOut:0,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:0},trafalgar:{set:{...nh(1),sprit:0},hoist:{topsail:1,topgallant:1,royal:1},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:1,cleared:1,wind:{dir:-160,str:.15}},action:{set:{...nh(0),topsail:1,foreTopmastStaysail:1,jib:1,spanker:1},hoist:{topsail:1,topgallant:1,royal:0},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:1},anchor:{set:nh(0),hoist:{topsail:0,topgallant:0,royal:0},ports:0,runOut:0,anchor:1,gaffEnsign:0,jack:1,unionStays:0,cleared:0}},oM={course:.3,topsail:.32,topgallant:.13,royal:.05,sprit:0,foreTopmastStaysail:.04,jib:.04,flyingJib:.03,mainTopmastStaysail:.02,mizzenStaysail:.02,spanker:.05,stunTop:.06,stunTg:.03,stunLower:.05},od=i=>Math.min(1,Math.max(0,i)),ad=i=>(i+540)%360-180;function aM(i,t,e){let n=sn.degToRad(ad(t*(1-i.anchor))),s=Math.abs(n),r=n<0?-1:1,o=n<=0?1:-1,a=0;for(let[g,v]of Object.entries(oM))a+=v*(i[`set.${g}`]??0);let l=od((s-sn.degToRad(48))/sn.degToRad(30)),c=1-i.anchor,h=6*e*Math.pow(a,.8)*l*(.75+.25*Math.sin(s))*c,p=2+12*e,f=new A(-Math.cos(n),0,-Math.sin(n)).multiplyScalar(p),d=f.clone().add(new A(-h,0,0));return{rel:n,lee:o,area:a,drive:l,speed:h,toward:f,apparent:d,brace:r*.5*od((Math.PI-s)/sn.degToRad(110))*c,heel:-r*e*.12*a*Math.abs(Math.sin(n))*l,boomSwing:-r*(.06+.5*od((s-.8)/2.35))*c,belly:(.3+.7*e)*Math.max(l,.06),luff:(1-l)*(.2+e),waveScale:(.35+.9*e)*(1-.35*i.anchor)}}function vm(i){let t={};for(let[e,n]of Object.entries(i))if(e!=="wind")if(typeof n=="object")for(let[s,r]of Object.entries(n))t[`${e}.${s}`]=r;else t[e]=n;return t}var lM=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function cM(i,t,e){let n=e>t;return i.startsWith("set.")?n?[.35,.9]:[0,.55]:i.startsWith("hoist.")?n?[.05,.45]:[.45,.9]:i==="ports"?n?[.1,.45]:[.5,.85]:i==="runOut"?n?[.45,.95]:[.05,.45]:i==="anchor"?n?[.55,.95]:[0,.4]:i==="gaffEnsign"||i==="jack"||i==="unionStays"?[.5,.52]:i.startsWith("set.stun")?n?[.75,1]:[0,.3]:i==="cleared"?n?[.05,.25]:[.7,.9]:[0,1]}var ih=class{constructor(t,e){this.scene=t,this.sea=e,this.root=new Yt,this.body=new Yt,this.root.add(this.body);let n=lm();this.body.add(n),this.body.add(um()),n.traverse(r=>{r.isMesh&&["planking","innerPlanking","stern","bulwark"].includes(r.name)&&(r.userData.shell=!0)}),n.getObjectByName("quarterGalleries")?.traverse(r=>{r.isMesh&&(r.userData.shell=!0)}),this.rig=new Xc,this.body.add(this.rig.group),this.root.updateMatrixWorld(!0),this.sails=xm(this.rig,this.body),this.rigging=new Zc(this.rig),this.guns=new $c(this.body),this.fittings=new jc(this.body,this.rig),this.furnishing=pm(this.fittings),this.body.add(this.furnishing),this.furnishing.add(mm());let s=ge();this.nightMaterials=[[this.furnishing.userData.glow,.9,3],[s.lantern,0,3.5]],n.traverse(r=>{if(r.userData.glow)for(let o of r.userData.glow)this.nightMaterials.push([o,0,.75])}),this.lanterns=this.furnishing.userData.lanterns.map(r=>({p:r})),this.root.updateMatrixWorld(!0);for(let r of this.fittings.lanterns){let o=r.getWorldPosition(new A);this.lanterns.push({p:this.body.worldToLocal(o)})}this.clearables=[{setCleared:r=>this.furnishing.userData.setCleared(r)}],this.isCleared=null,this.layoutVersion=0;for(let r of this.sails.square){let o=this.rigging.colliders[r.mastName];if(!o)continue;r.space=this.rig.group,r.colliders={course:[...o.lower,...o.futtock,...o.backstay],topsail:[...o.topmast,...o.backstay],topgallant:[...o.tg,...o.backstay],royal:[...o.backstay]}[r.kind]||[];let a={fore:{course:["fore stay","fore preventer stay"],topsail:["fore topmast stay","jib stay"],topgallant:["fore topgallant stay"],royal:["fore royal stay"]},main:{course:["main stay","main preventer stay"],topsail:["main topmast stay"],topgallant:["main topgallant stay"],royal:["main royal stay"]},mizzen:{topsail:["mizzen topmast stay"],topgallant:["mizzen topgallant stay"]}}[r.mastName]?.[r.kind]||[];r.stays=a.map(l=>this.rigging.stayLines[l]).filter(Boolean)}this.flags={ensign:new ji("ensign",8.5,4.25,this.body),admiral:new ji("admiral",5,2.5,this.body),jack:new ji("union",4.2,2.1,this.body),unionFore:new ji("union",3.6,1.8,this.body),unionMain:new ji("union",3.6,1.8,this.body)},this.effects=new th(t),this.wake=new eh(t,e.uniforms),this.distance=0,this.pose="sail",this.cur=vm(Ss.sail),this.tween=null,this.dirty=!0,this.broadside=null,this.time=0,this.windTarget={dir:-135,str:.6},this.windNow={...this.windTarget}}setWind(t,e,n=!1){t!=null&&(this.windTarget.dir=t),e!=null&&(this.windTarget.str=e),n&&(this.windNow={...this.windTarget}),this.dirty=!0}poseNames(){return Object.keys(Ss)}setPose(t,e=!1){if(!Ss[t])return;this.pose=t;let n=vm(Ss[t]);if(e){this.cur=n,this.tween=null,this.dirty=!0;return}this.tween={from:{...this.cur},to:n,k:0,dur:8}}fireBroadside(){if(!Ss[this.pose].ports||this.broadside)return;let t=this.guns.ports.filter(n=>n.side===1).sort((n,s)=>s.x-n.x),e=0;for(let n of t)n.fireAt=this.time+e+Math.random()*.08,e+=.075;this.broadside={list:t,end:this.time+e+4}}update(t,e){if(this.time=t,this.tween){let T=this.tween;T.k=Math.min(1,T.k+e/T.dur);for(let P of Object.keys(T.to)){let L=T.from[P],N=T.to[P],[I,U]=cM(P,L,N),z=Math.min(1,Math.max(0,(T.k-I)/(U-I)));this.cur[P]=L+(N-L)*lM(z)}T.k>=1&&(this.tween=null,this.layoutVersion++),this.dirty=!0}let n=this.cur,s=this.windNow,r=this.windTarget,o=1-Math.exp(-e*1.2),a=ad(r.dir-s.dir),l=r.str-s.str;(Math.abs(a)>.05||Math.abs(l)>.001)&&(s.dir=ad(s.dir+a*o),s.str+=l*o,this.dirty=!0);let c=aM(n,s.dir,s.str);this.W=c,this.sea.setCaps(s.str);let h=this.sea;h.setScale(c.waveScale),h.setDirection(Math.atan2(c.toward.z,c.toward.x));let p=22,f=6,d=h.heightAt(p,0),g=h.heightAt(-p,0),v=h.heightAt(0,-f),m=h.heightAt(0,f),u=h.heightAt(0,0);this.root.position.y=(d+g+v+m+u*2)/6*.85,this.root.rotation.z=Math.atan2(d-g,2*p)*.8,this.root.rotation.x=-Math.atan2(m-v,2*f)*.6,this.body.rotation.x=c.heel,this.body.rotation.z=Up,this.distance+=c.speed*e,this.dirty&&this.rig.applyYards({hoist:{topsail:n["hoist.topsail"],topgallant:n["hoist.topgallant"],royal:n["hoist.royal"]},brace:c.brace,boomSwing:c.boomSwing}),this.root.updateMatrixWorld(!0),this.sea.uniforms.uShipInv.value.copy(this.body.matrixWorld).invert();for(let T of this.sails.square)T.update(n[`set.${T.kind}`],c.belly,t,c.luff);for(let T of this.sails.stay)T.update(n[`set.${T.kind}`],c.belly,t,c.lee);this.sails.spanker.update(n["set.spanker"],c.belly,t,c.lee);for(let T of this.sails.stun)T.update(n[`set.${T.kind}`],c.belly,t);let _=this.dirty;if(this.broadside){let T=this.broadside,P=c.apparent.clone().multiplyScalar(.5);for(let L of T.list){if(L.fireAt>0&&t>=L.fireAt){L.fireAt=-1,L.firedAt=t;let N=this.guns.muzzle(L,n.runOut),I=this.body.localToWorld(N.clone()),U=L.out.clone().transformDirection(this.body.matrixWorld);this.effects.gunshot(I,U,P)}if(L.firedAt!=null){let N=t-L.firedAt;L.recoil=N<.12?N/.12:Math.max(0,1-(N-.6)/2.4),N>3.2&&(L.recoil=0,L.firedAt=null)}}_=!0,t>T.end&&(this.broadside=null)}_&&this.guns.apply(n.ports,n.runOut),this.rigging.updateRunning(this.sails,n,c),this.dirty&&this.fittings.setAnchor(n.anchor);let y=n.cleared>.5;if(y!==this.isCleared){this.isCleared=y;for(let T of this.clearables)T.setCleared(y);this.layoutVersion++}let x=this.rig,S=c.apparent.clone().setY(0).normalize();ji.update(t,.2+.8*Math.min(1,c.apparent.length()/12));let E=(T,P)=>Ge(T.local[P].clone(),T.group,this.body),b=Ge(new A(x.gaff.L-.1,0,0),x.gaff.group,this.body),M=this.flags.ensign;n.gaffEnsign>.5?M.place(b,S):M.place(this.fittings.ensignStaff,S),this.flags.admiral.place(E(x.masts.fore,"poleHead").add(new A(0,.1,0)),S);let w=(T,P)=>{let[L,N]=this.rigging.stayLines[T];return L.clone().lerp(N,P).add(new A(0,-.3,0))};for(let[T,P,L]of[[this.flags.unionFore,"fore topgallant stay",.42],[this.flags.unionMain,"main topmast stay",.5]])T.mesh.visible=n.unionStays>.5,T.place(w(P,L),S);if(this.flags.jack.mesh.visible=n.jack>.5,this.flags.jack.place(this.fittings.jackStaff,S),e>0&&c.speed>.5){let T=this.sea.heightAt(27.5,0),P=Math.max(0,T-this.root.position.y+.2),L=c.speed/6*(.6+3*P)*e*60*.9;if(L>.05)for(let N of[1,-1]){let I=this.body.localToWorld(new A(27.2,.2,N*1.6)),U=new A(.5,0,N).normalize().transformDirection(this.body.matrixWorld);this.effects.spray(I,U,new A(0,0,0),L)}}this.effects.update(e,this.scene.userData.camera?.position),this.wake.update(this.distance,c.speed),this.dirty=!1}};var ld={sail:"Full sail",trafalgar:"Trafalgar, 1805",action:"Cleared for action",anchor:"At anchor",quarter:"Quarter",broadside:"Broadside",bow:"Bow",stern:"Stern",deck:"Deck",aloft:"Aloft",galleries:"Galleries",head:"Figurehead",inside:"Inside",all:"All",quarterdeck:"Quarterdeck",upper:"Upper deck",middle:"Middle deck",lower:"Lower deck",orlop:"Orlop",hold:"Hold"};function cd(i,t){let e=Math.abs(i),n=i<0?"port":"starboard",s=e<22.5?"dead ahead":e<67.5?`on the ${n} bow`:e<112.5?`on the ${n} beam`:e<157.5?`on the ${n} quarter`:"dead astern";return`${t<.12?"Light air":t<.3?"Light breeze":t<.5?"Moderate breeze":t<.7?"Fresh breeze":t<.88?"Strong breeze":"Near gale"}, ${s}`}var sh=class{constructor({onPose:t,onView:e,onFire:n,onWind:s,wind:r,poses:o,views:a,levels:l,onLevel:c,onCut:h,onXray:p,onLabels:f,onMode:d,onTime:g,onQuality:v,touch:m}){let u=document.getElementById("ui");u.innerHTML=`
      <h1>HMS Victory <span>1805</span><button id="collapse" title="Hide or show the controls">&#9776;</button></h1>
      <div id="panelBody">
      <div class="group"><div class="label">Mode</div><div class="row" id="modes"></div>
        <div class="hint" id="sailorHint" style="display:none">${m?"Use the stick to walk, or tap where to go. Walk into a ladder to climb. Pinch to zoom; the arrows turn the view.":"WASD or arrows to walk, Shift to run, click to walk there. Walk into a ladder to climb. Q / E turn the view, scroll to zoom."}</div></div>
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
      <div class="group"><div class="label">Quality</div><div class="row" id="qualities"></div></div>
      <div class="hint">${m?"Drag to orbit \xB7 pinch to zoom \xB7 two-finger drag to pan":"Drag to orbit \xB7 scroll to zoom \xB7 right-drag to pan"}</div>
      </div>`;let _=u.querySelector("#panelBody"),y=I=>{_.style.display=I?"none":"",u.classList.toggle("collapsed",I)};u.querySelector("#collapse").onclick=()=>y(_.style.display!=="none"),window.innerWidth<700&&y(!0),this.qualityButtons={};for(let[I,U]of[["high","High"],["medium","Medium"],["low","Low"]]){let z=document.createElement("button");z.textContent=U,z.onclick=()=>v(I),u.querySelector("#qualities").appendChild(z),this.qualityButtons[I]=z}this.modeButtons={};let x=u.querySelector("#modes");for(let[I,U]of[["free","Free camera"],["sailor","Sailor (isometric)"]]){let z=document.createElement("button");z.textContent=U,z.onclick=()=>{d(I),this.setMode(I)},x.appendChild(z),this.modeButtons[I]=z}this.el=u,this.timeButtons={};let S=u.querySelector("#times");for(let[I,U]of[["day","Day"],["dusk","Dusk"],["night","Night"]]){let z=document.createElement("button");z.textContent=U,z.onclick=()=>g(I),S.appendChild(z),this.timeButtons[I]=z}this.poseButtons={};let E=u.querySelector("#poses");for(let I of o){let U=document.createElement("button");U.textContent=ld[I]||I,U.onclick=()=>{t(I),this.setPose(I)},E.appendChild(U),this.poseButtons[I]=U}let b=u.querySelector("#views");for(let I of a){let U=document.createElement("button");U.textContent=ld[I]||I,U.onclick=()=>e(I),b.appendChild(U)}this.levelButtons={};let M=u.querySelector("#levels");for(let I of l){let U=document.createElement("button");U.textContent=ld[I]||I,U.onclick=()=>{c(I),this.setLevel(I)},M.appendChild(U),this.levelButtons[I]=U}this.setLevel("all"),u.querySelector("#cut").oninput=I=>h(+I.target.value/100),u.querySelector("#xray").onchange=I=>p(I.target.checked),u.querySelector("#labels").onchange=I=>f(I.target.checked),this.fireGroup=u.querySelector("#fireGroup"),u.querySelector("#fire").onclick=n;let w=u.querySelector("#windDir"),T=u.querySelector("#windStr"),P=u.querySelector("#windText"),L=u.querySelector("#windHint");w.value=r.dir,T.value=Math.round(r.str*100);let N=()=>{let I=+w.value,U=+T.value/100;P.textContent=cd(I,U),L.textContent=Math.abs(I)<50?"Too close to the wind: her sails shiver and she loses way.":"",s(I,U)};w.oninput=T.oninput=N,P.textContent=cd(r.dir,r.str),this.windSet=(I,U)=>{w.value=I,T.value=Math.round(U*100),P.textContent=cd(I,U),L.textContent=""}}setQuality(t){for(let[e,n]of Object.entries(this.qualityButtons))n.classList.toggle("active",e===t)}setTime(t){for(let[e,n]of Object.entries(this.timeButtons))n.classList.toggle("active",e===t)}setMode(t){for(let[e,n]of Object.entries(this.modeButtons))n.classList.toggle("active",e===t);this.el.querySelector("#sailorHint").style.display=t==="sailor"?"":"none",this.el.querySelector("#levels").style.opacity=t==="sailor"?.45:1,this.el.querySelector("#levels").style.pointerEvents=t==="sailor"?"none":"",this.el.querySelector("#views").style.opacity=t==="sailor"?.45:1,this.el.querySelector("#views").style.pointerEvents=t==="sailor"?"none":""}setLevel(t){for(let[e,n]of Object.entries(this.levelButtons))n.classList.toggle("active",e===t)}setPose(t){for(let[e,n]of Object.entries(this.poseButtons))n.classList.toggle("active",e===t);this.fireGroup.style.display=t==="action"||t==="trafalgar"?"":"none"}};var hM=1e-7,hd=new A,ud=new A,dd=new A,fd=new A,pd=new A,md=new A;function ym(i,t,e,n,s){md.subVectors(t,i),hd.subVectors(n,e),ud.subVectors(s,e),dd.crossVectors(md,ud);let r=hd.dot(dd);if(Math.abs(r)<hM)return!1;let o=1/r;fd.subVectors(i,e);let a=fd.dot(dd)*o;if(a<0||a>1)return!1;pd.crossVectors(fd,hd);let l=md.dot(pd)*o;if(l<0||a+l>1)return!1;let c=ud.dot(pd)*o;return c>0&&c<1}function uM(i,t){let e=i.mesh;if(!e.visible)return null;let n=new Et().multiplyMatrices(t,e.matrixWorld),s=e.geometry.attributes.position,r=i.NU,o=i.NV,a=(p,f)=>new A().fromBufferAttribute(s,f*r+p).applyMatrix4(n),l=[],c=new On,h=[];for(let p=1;p<o-2;p++)for(let f=1;f<r-2;f++){let d=a(f,p),g=a(f+1,p),v=a(f,p+1),m=a(f+1,p+1);l.push([d,g,m],[d,m,v]),c.expandByPoint(d).expandByPoint(g).expandByPoint(v).expandByPoint(m),h.push([d,g],[d,v])}return{name:i.name,tris:l,box:c,lines:h}}function Mm(i){i.root.updateMatrixWorld(!0);let t=new Et().copy(i.body.matrixWorld).invert(),n=[...i.sails.square,...i.sails.stay,i.sails.spanker,...i.sails.stun].map(h=>uM(h,t)).filter(Boolean),s=[];for(let h of[i.rigging.standing,i.rigging.running,i.rigging.sailLines])for(let p of h.segs)s.push(p);let r=(h,p,f)=>new A(h,p,f),o=(h,p)=>p.applyMatrix4(new Et().multiplyMatrices(t,h.matrixWorld));for(let h of Object.values(i.rig.masts)){for(let v of Object.values(h.yards))s.push([o(v.group,r(0,0,-v.L/2)),o(v.group,r(0,0,v.L/2)),`${h.name} ${v.name} yard`]);let p=h.h;s.push([o(h.group,r(0,0,0)),o(h.group,r(0,p.lowerHead,0)),`${h.name} lower mast`]),s.push([o(h.group,r(h.dTop,p.topmastHeel,0)),o(h.group,r(h.dTop,p.topmastHead,0)),`${h.name} topmast`]),s.push([o(h.group,r(h.dTg,p.tgHeel,0)),o(h.group,r(h.dTg,p.poleHead,0)),`${h.name} topgallant mast`]);let f=p.topLen,d=p.topW/2,g=p.topY+.2;s.push([o(h.group,r(-f*.45,g,-d)),o(h.group,r(f*.55,g,-d)),`${h.name} top`]),s.push([o(h.group,r(-f*.45,g,d)),o(h.group,r(f*.55,g,d)),`${h.name} top`]),s.push([o(h.group,r(f*.55,g,-d)),o(h.group,r(f*.55,g,d)),`${h.name} top`])}let a=new Map,l=new On,c=(h,p)=>{let f=`${h}  x  ${p}`;a.set(f,(a.get(f)||0)+1)};for(let[h,p,f]of s){l.makeEmpty().expandByPoint(h).expandByPoint(p);for(let d of n)if(l.intersectsBox(d.box)){for(let[g,v,m]of d.tris)if(ym(h,p,g,v,m)){c(f,d.name);break}}}for(let h of n)for(let p of n){if(h===p||!h.box.intersectsBox(p.box))continue;let f=0;for(let[d,g]of h.lines)if(l.makeEmpty().expandByPoint(d).expandByPoint(g),!!l.intersectsBox(p.box)){for(let[v,m,u]of p.tris)if(ym(d,g,v,m,u)){f++;break}}f&&h.name<p.name&&c(`sail ${h.name}`,p.name)}return[...a.entries()].sort((h,p)=>p[1]-h[1]).map(([h,p])=>`${p}	${h}`)}var gd={all:1/0,quarterdeck:qt.poop-.52,upper:qt.qd-.52,middle:qt.upper-.52,lower:qt.middle-.52,orlop:qt.lower-.52,hold:qt.orlop-.52},dM={poop:qt.poop+2.1},rh=class{constructor(t,e){this.ship=t,this.sun=e,this.uniforms={uShipInv:{value:new Et},uCutY:{value:1e5},uCutZ:{value:1e5},uCutSide:{value:1}},this.rigCutZ={value:1e5},this.shellCutY={value:1e5},this.level="all",this.cutZ=1e5,this.xray=!1,this.applied=new WeakSet,this.applyAll()}applyAll(){let t=[this.ship.rig.group,...Object.values(this.ship.flags).map(s=>s.mesh)],e=s=>{for(let r=s;r;r=r.parent)if(t.includes(r))return!0;return!1},n=s=>this.ship.body.traverse(r=>{if(!(!r.material||e(r)!==s))for(let o of Array.isArray(r.material)?r.material:[r.material])this.inject(o,s,!!r.userData.shell)});n(!1),n(!0)}inject(t,e=!1,n=!1){if(this.applied.has(t))return;this.applied.add(t);let s=this.uniforms,r=t.onBeforeCompile,o=t.customProgramCacheKey?t.customProgramCacheKey():"";t.onBeforeCompile=(a,l)=>{r&&r.call(t,a,l),a.uniforms.uShipInv=s.uShipInv,a.uniforms.uCutY=n?this.shellCutY:s.uCutY,a.uniforms.uCutZ=e?this.rigCutZ:s.uCutZ,a.uniforms.uCutSide=s.uCutSide,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
  if (vCutPos.y > uCutY + cutSheer || vCutPos.z * uCutSide > uCutZ) discard; }`)},t.customProgramCacheKey=()=>`${o}|cut${e?"R":""}${n?"S":""}`,t.needsUpdate=!0}get active(){return this.level!=="all"||this.cutZ<50}setLevel(t){this.level=t;let e=gd[t]??dM[t];this.uniforms.uCutY.value=Number.isFinite(e)?e:1e5,this.shellCutY.value=Math.max(this.uniforms.uCutY.value,.6),this.refresh()}setCut(t){this.cutZ=t<=.001?1e5:9-t*9.2,this.uniforms.uCutZ.value=this.cutZ,this.uniforms.uCutSide.value=1,this.refresh()}setCutPlane(t,e){this.cutZ=t,this.uniforms.uCutZ.value=t,this.uniforms.uCutSide.value=e,this.refresh()}setXray(t){this.xray=t,this.ship.body.traverse(e=>{if(!e.isMesh||!e.userData.shell)return;let n=e.material;e.userData.solid||(e.userData.solid={transparent:n.transparent,opacity:n.opacity,depthWrite:n.depthWrite});let s=e.userData.solid;n.transparent=t?!0:s.transparent,n.opacity=t?.14:s.opacity,n.depthWrite=t?!1:s.depthWrite,n.needsUpdate=!0})}refresh(){let t=!this.active;this.sun.castShadow!==t&&(this.sun.castShadow=t)}update(){this.uniforms.uShipInv.value.copy(this.ship.body.matrixWorld).invert()}};var oh=class extends ln{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new $(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},zr=new A,Sm=new Et,Em=new Et,bm=new A,wm=new A,ah=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Sm.copy(v.matrixWorldInverse),Em.multiplyMatrices(v.projectionMatrix,Sm),h(g,g,v),this.sortObjects&&d(g)},this.setSize=function(g,v){n=g,s=v,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function h(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){zr.setFromMatrixPosition(g.matrixWorld),zr.applyMatrix4(Em);let u=zr.z>=-1&&zr.z<=1&&g.layers.test(m.layers)===!0,_=g.element;if(_.style.display=u===!0?"":"none",u===!0){g.onBeforeRender(e,v,m);let x=100*g.center.x,S=100*g.center.y;_.style.transformOrigin=`${x}% ${S}%`;let E=-g.rotation2D,b=zr.x*r+r,M=-zr.y*o+o;_.style.transform=`translate(${-x}%, ${-S}%) translate(${b}px, ${M}px) rotate(${E}rad)`,_.parentNode!==l&&l.appendChild(_),g.onAfterRender(e,v,m)}let y={distanceToCameraSquared:p(m,g)};a.objects.set(g,y)}for(let u=0,_=g.children.length;u<_;u++)h(g.children[u],v,m)}function p(g,v){return bm.setFromMatrixPosition(g.matrixWorld),wm.setFromMatrixPosition(v.matrixWorld),bm.distanceToSquared(wm)}function f(g){let v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function d(g){let v=f(g).sort(function(u,_){if(u.renderOrder!==_.renderOrder)return _.renderOrder-u.renderOrder;let y=a.objects.get(u).distanceToCameraSquared,x=a.objects.get(_).distanceToCameraSquared;return y-x}),m=v.length;for(let u=0,_=v.length;u<_;u++)v[u].element.style.zIndex=m-u}}};var Tm={hold:"orlop",orlop:"lower",lower:"middle",middle:"upper",upper:"qd",qd:"poop"},Rm={qd:"quarterdeck",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"},Am={qd:"Quarterdeck and forecastle",upper:"Upper gun deck",middle:"Middle gun deck",lower:"Lower gun deck",orlop:"Orlop",hold:"Hold"},Kt={wp:'Wikipedia, "HMS Victory" (citing McGowan)',hv:"HMS Victory official site (archived deck pages)",nmrn:"National Museum of the Royal Navy",beatty:"Beatty, Authentic Narrative of the Death of Lord Nelson (1807)",mckay:"modellers' readings of McKay's plans"},da=[{deck:"qd",name:"Captain Hardy's day cabin",x0:-28.6,x1:-23.2,z0:-7,z1:7,walls:[["fore",7]],note:"The aftermost part of the quarterdeck, under the poop, lit by the stern windows. Hardy's day cabin held two guns, cleared away like the rest of the ship for battle.",source:`${Kt.wp}; photo captions`},{deck:"qd",name:"Captain's dining cabin",x0:-23.2,x1:-17.6,z0:-7,z1:-1.6,walls:[["stbd",2]],note:"Where the captain dined, often with his officers. Its exact side is not certain.",source:`photo captions; ${Kt.mckay}`},{deck:"qd",name:"Captain's bed place",x0:-23.2,x1:-20.2,z0:1.6,z1:7,walls:["fore",["port",1.5]],note:"Hardy's sleeping cabin, part of his quarters under the poop.",source:"photo captions (medium confidence)"},{deck:"qd",name:"Master's cabin",x0:-17.6,x1:-13.6,z0:-7,z1:-1.7,walls:[["stbd",2],"fore"],note:"The master was responsible for navigation. His cabin was on the larboard (port) side, beside the wheel.",source:`R. Fraser / P. Milford deck notes; ${Kt.mckay}`},{deck:"qd",name:"Secretary's cabin",x0:-17.6,x1:-13.6,z0:1.7,z1:7,walls:[["port",2],"fore"],note:"Nelson's secretary, John Scott, was killed early in the battle. His cabin was to starboard of the wheel.",source:"R. Fraser / P. Milford deck notes (medium confidence)"},{deck:"qd",name:"Wheel",obj:!0,x0:-15,x1:-14,z0:-1,z1:1,lx:-14.4,ly:2.4,note:"The double wheel stands under the overhang of the poop, with the binnacle (compass) forward of it. At Trafalgar the wheel was shot away and she was steered from the gunroom below.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"qd",name:"Where Nelson fell",x0:-9,x1:-7,z0:1,z1:3,ly:.6,note:"Nelson was shot by a French marksman in the mizzen top of the Redoutable at about 1:15 pm while walking the quarterdeck with Hardy. A brass plaque marks the spot today; its exact position here is approximate.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"qd",name:"Forecastle",x0:18,x1:22,z0:-1,z1:1,ly:1.8,note:"Two 12-pounders and two 68-pounder carronades, the belfry and the galley chimney. The bell struck the half-hours of each watch.",source:Kt.wp},{deck:"upper",name:"Great cabin",x0:-28.9,x1:-23.6,z0:-7.4,z1:7.4,walls:[["fore",7.4]],note:"Nelson's day cabin and office at the stern windows, where he wrote his last prayer on the morning of the battle. With the dining cabin and sleeping quarters it took up about a quarter of the deck. His coffin later stood in the after part of this cabin.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"upper",name:"Dining cabin",x0:-23.6,x1:-18.6,z0:-7.4,z1:7.4,walls:[["fore",5.5]],note:"Where Nelson entertained his captains: the 'Band of Brothers' dined here before Trafalgar.",source:Kt.hv},{deck:"upper",name:"Nelson's sleeping cabin",x0:-18.6,x1:-15.2,z0:1.2,z1:7.4,walls:[["port",1.7],"fore"],note:"Nelson's cot hung between two 12-pounders. Which side it was on is not recorded in the sources found; it is shown to starboard.",source:"R. Fraser / P. Milford deck notes (side not found)"},{deck:"upper",name:"Steerage (ante-room)",x0:-18.6,x1:-14.6,z0:-7.4,z1:1.2,walls:[["fore",6]],note:"An ante-room for the admiral's clerks and secretary, leading to the dining and day cabins.",source:Kt.hv},{deck:"upper",name:"Sick berth",x0:21.6,x1:27.4,z0:.6,z1:6,walls:[["aft",3],"port"],note:"Forward, in the bow under the forecastle, where the air was best. Cots hung over the guns; the surgeon worked just forward of the foremast. In battle the wounded were taken below to the cockpit instead. The side is uncertain.",source:`${Kt.nmrn}; ${Kt.mckay}`},{deck:"middle",name:"Wardroom",x0:-29.2,x1:-15.8,z0:-3.4,z1:3.4,walls:[["fore",3.4]],note:"The commissioned officers' mess, aft, with a long table over the rudder head and the officers' cabins along both sides.",source:`${Kt.wp}; ${Kt.mckay}`},{deck:"middle",name:"First Lieutenant's cabin",x0:-26.4,x1:-22.4,z0:3.4,z1:7.6,walls:[["port",3.5],"fore"],note:"On the starboard side, with the use of the starboard quarter gallery.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officer's cabin",x0:-22.4,x1:-19.6,z0:3.4,z1:7.6,walls:[["port",2.4],"fore"],lx:-21.2,note:"One of seven small cabins of lieutenants and senior officers round the wardroom, separated by light partitions that could be taken down when the ship cleared for action.",source:Kt.mckay},{deck:"middle",name:"Officers' pantry",x0:-19.6,x1:-15.8,z0:3.4,z1:7.6,walls:[["port",3.2],"fore"],note:"The wardroom's pantry, around the mizzen mast.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officers' cabins",x0:-26.4,x1:-15.8,z0:-7.6,z1:-3.4,walls:[["stbd",2]],note:"Lieutenants' cabins on the larboard side of the wardroom.",source:Kt.mckay},{deck:"middle",name:"Main capstan",obj:!0,x0:-7,x1:-5.8,z0:-.6,z1:.6,ly:1.7,note:"Abaft the mainmast. Its drumhead is on this deck, with a second drumhead below on the lower deck, so men on two decks could heave on the bars at once to weigh the anchors.",source:`${Kt.nmrn} conservation log`},{deck:"middle",name:"Jeer capstan",obj:!0,x0:3.1,x1:4.3,z0:-.6,z1:.6,ly:1.7,note:"Forward of the mainmast, used to sway up the heavy lower yards and for other heavy lifts.",source:`${Kt.nmrn} conservation log`},{deck:"middle",name:"Galley (Brodie stove)",x0:18.6,x1:22,z0:-2.2,z1:2.2,ly:1.6,note:"Just abaft the foremast, on a stone hearth. The iron Brodie stove cooked for some 820 men and distilled a little fresh water. The museum places it on this deck; the stove now aboard dates from the 1920s.",source:`${Kt.nmrn}; ${Kt.mckay}`},{deck:"middle",name:"Galley pantry",x0:16.2,x1:18.6,z0:-1.8,z1:1.8,walls:["aft",["port",1.2],["stbd",1.2]],note:"Behind (abaft) the galley.",source:Kt.mckay},{deck:"lower",name:"Gunroom",x0:-28.6,x1:-23.6,z0:-6.6,z1:6.6,walls:[["fore",6.6]],note:"Aft on this deck: the gunner's domain and the junior officers' mess, with the tiller sweeping overhead. Some sources put a gun room on the orlop instead. After the wheel was shot away Victory was steered from here.",source:`${Kt.wp} (Gunroom); ${Kt.beatty}`},{deck:"lower",name:"Crew messes",x0:-12,x1:12,z0:3.5,z1:5.5,lx:-4,lz:4.6,note:"About 600 men ate here and 460 slept, in hammocks slung from the beams in rows 14 inches wide. Messes of up to a dozen men ate at tables hung between the guns.",source:`${Kt.hv}; ${Kt.nmrn}`},{deck:"lower",name:"Chain pumps",obj:!0,x0:-1,x1:1,z0:1.4,z1:2.6,note:"Two chain pumps each side of the mainmast drew water from the well in the hold; there was also an elm-tree pump.",source:`on-board placard; ${Kt.mckay}`},{deck:"lower",name:"Riding bitts",obj:!0,x0:20,x1:21,z0:-1,z1:1,ly:1.4,note:"The great timbers that held the anchor cables. Their posts ran down to the hold. Forward of them, the hawse holes and the manger that caught water coming in with the cables.",source:Kt.mckay},{deck:"orlop",name:"Bread room",x0:-27,x1:-23.5,z0:-6,z1:6,walls:[["fore",9.5]],note:"Right aft, lined to keep out damp and rats: ship's biscuit for months at sea.",source:Kt.mckay},{deck:"orlop",name:"After hanging magazine",x0:-23.5,x1:-21.2,z0:-1.6,z1:1.6,walls:["aft","fore","port",["stbd",1.1]],note:"A small magazine for filled cartridges for the after guns.",source:Kt.mckay},{deck:"orlop",name:"Purser's store",x0:-23.5,x1:-20.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"The purser's stores and cabin: clothing, tobacco, soap and candles, sold to the men.",source:Kt.mckay},{deck:"orlop",name:"Marines' clothes store",x0:-20.2,x1:-18.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"Store for the uniforms and kit of the 146 Royal Marines aboard.",source:Kt.mckay},{deck:"orlop",name:"Steward's room",x0:-23.5,x1:-21.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"The steward issued provisions from the bread room and stores.",source:Kt.mckay},{deck:"orlop",name:"Surgeon's cabin",x0:-21.2,x1:-18.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"William Beatty, the surgeon, kept his cabin next to the cockpit.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"orlop",name:"Cockpit",x0:-18.2,x1:-11,z0:-1.6,z1:1.6,ly:.9,note:"In battle the surgeon's station. The wounded were carried down here by the hundred; Beatty operated by lantern light below the waterline, safe from shot.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"orlop",name:"Midshipmen's berth (where Nelson died)",x0:-17,x1:-11,z0:-6.4,z1:-1.6,walls:["aft","fore",["stbd",3]],lx:-13,lz:-3.6,note:"Nelson was carried to one of the midshipmen's berths on the larboard side, and died here at about 4:30 pm, three hours after he was shot. His last words were recorded by Beatty and the chaplain. A lantern marks the spot; it was moved about 6 m forward after Goodwin's study.",source:`${Kt.beatty}; ${Kt.nmrn}`},{deck:"orlop",name:"Pump room",x0:-4,x1:-1,z0:-1.5,z1:1.5,ly:.9,note:"Around the mainmast, over the well, where the pump chains ran down.",source:Kt.mckay},{deck:"orlop",name:"Cable tiers",x0:.5,x1:12,z0:2.6,z1:6,lx:6.5,lz:4.2,note:"The great hemp anchor cables were coiled down here on both sides when the anchors were up.",source:Kt.mckay},{deck:"orlop",name:"Boatswain's store",x0:14,x1:17.5,z0:1.6,z1:6,walls:["aft",["port",1.8],"fore"],note:"The boatswain's cabin and store: spare rope, blocks and rigging stores.",source:Kt.mckay},{deck:"orlop",name:"Carpenter's workshop",x0:14,x1:17.5,z0:-6,z1:-1.6,walls:["aft",["stbd",1.8],"fore"],note:"The carpenter and his crew plugged shot holes from the carpenter's walk along the hull during the battle.",source:Kt.mckay},{deck:"orlop",name:"Sail room",x0:17.5,x1:20.6,z0:.4,z1:5.4,walls:[["port",1.5],"fore"],note:"Spare sails, kept forward and dry.",source:Kt.mckay},{deck:"orlop",name:"Rope and block room",x0:17.5,x1:20.6,z0:-5.4,z1:-.4,walls:[["stbd",1.5],"fore"],note:"Spare cordage and blocks.",source:Kt.mckay},{deck:"orlop",name:"Fore hanging magazine",x0:20.6,x1:23.6,z0:-1.8,z1:1.8,walls:[["aft",1.8],"fore","port","stbd"],note:"Filled cartridges ready for the forward guns, with ladders down to the grand magazine. The light-room entry was above the foremast step.",source:Kt.mckay},{deck:"hold",name:"After hold",x0:-20,x1:-4.5,z0:-4,z1:4,lx:-10,ly:1.4,note:"Seven compartments, among them the after powder room and the flour store.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"hold",name:"Well and shot lockers",obj:!0,x0:-4.5,x1:-.5,z0:-1.8,z1:1.8,walls:["aft","fore","port","stbd"],note:"Around the foot of the mainmast: the well, where the pumps drew from, with the shot lockers forward and aft of it.",source:`${Kt.mckay}; Longridge`},{deck:"hold",name:"Main hold",x0:-.5,x1:15,z0:-4,z1:4,lx:7,ly:1.4,note:"Water casks bedded on iron and shingle ballast: enough fresh water for several months, with beer, salt beef and pork.",source:Kt.mckay},{deck:"hold",name:"Filling room",x0:15,x1:18,z0:-3,z1:3,walls:[["aft",3],["fore",3]],note:"Where powder was made up into cartridges, lit only from the light room through glass.",source:`${Kt.mckay}; ${Kt.wp}`},{deck:"hold",name:"Grand magazine",x0:18,x1:23,z0:-3,z1:3,walls:["fore"],note:"Forward, copper-lined, below the waterline. It held the ship's main stock of gunpowder; men wore felt slippers and nothing iron was allowed inside. The layout changed after 1805.",source:`${Kt.mckay}; ${Kt.wp}`}];function fM(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");for(let n=0;n<8;n++){let s=120+n*37%30;t.fillStyle=`rgb(${s},${s*.82|0},${s*.6|0})`,t.fillRect(n*32,0,32,256),t.fillStyle="rgba(40,25,10,0.6)",t.fillRect(n*32,0,2,256)}let e=new hn(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=tn,e}function pM(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");t.fillStyle="#cfc5ad",t.fillRect(0,0,256,256),t.strokeStyle="rgba(90,70,40,0.45)",t.lineWidth=4;for(let[n,s,r,o]of[[14,14,100,100],[142,14,100,100],[14,142,100,100],[142,142,100,100]])t.strokeRect(n,s,r,o);t.fillStyle="rgba(90,70,40,0.25)",t.fillRect(0,124,256,8),t.fillRect(124,0,8,256);let e=new hn(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=tn,e}function mM(i,t,e,n,s){let r=Math.hypot(e.x-t.x,e.z-t.z),o=Tm[i],a=c=>o?pt(o,c)-.33:pt(i,c)+2,l=[];if(n!=null){let c=Math.max(0,n-.5),h=Math.min(r,n+.5);c>.05&&l.push([0,c,0]),h<r-.05&&l.push([h,r,0]),l.push([c,h,1.75])}else l.push([0,r,0]);for(let[c,h,p]of l){let f={x:fe(t.x,e.x,c/r),z:fe(t.z,e.z,c/r)},d={x:fe(t.x,e.x,h/r),z:fe(t.z,e.z,h/r)},g=new ue,v=pt(i,f.x)+p,m=pt(i,d.x)+p,u=a(f.x),_=a(d.x),y=[f.x,v,f.z,d.x,m,d.z,d.x,_,d.z,f.x,u,f.z],x=[c/1.6,v/1.6,h/1.6,m/1.6,h/1.6,_/1.6,c/1.6,u/1.6];g.setAttribute("position",new se(y,3)),g.setAttribute("uv",new se(x,2)),g.setIndex([0,1,2,0,2,3]),g.computeVertexNormals(),s.push(g)}}var lh=(i,t,e)=>{let n=wt(t,pt(i,t)+1)-.1;return Math.max(-n,Math.min(n,e))};function xd(){let i=[];for(let t of da)for(let e of t.walls||[]){let[n,s]=Array.isArray(e)?e:[e,null],r,o,a=0;if(n==="fore"||n==="aft"){let l=n==="fore"?t.x1:t.x0;r={x:l,z:lh(t.deck,l,t.z0)},o={x:l,z:lh(t.deck,l,t.z1)},a=r.z-t.z0}else{let l=n==="stbd"?t.z1:t.z0;r={x:t.x0,z:lh(t.deck,t.x0,l)},o={x:t.x1,z:lh(t.deck,t.x1,l)}}i.push({deck:t.deck,a:r,b:o,door:s==null?null:s-a})}return i}var ch=class{constructor(t,e,n){this.group=new Yt,this.group.name="rooms",t.add(this.group);let s=[],r=[],o=[];for(let l of xd()){let c=l.deck==="lower"?r:l.deck==="orlop"||l.deck==="hold"?o:s;mM(l.deck,l.a,l.b,l.door,c)}let a=fM();this.clearable=[];for(let[l,c,h]of[[s,pM(),!0],[r,a,!0],[o,a,!1]]){if(!l.length)continue;let p=new X(xt(l),new ae({map:c,roughness:.85,side:De}));p.castShadow=p.receiveShadow=!0,p.name="bulkheads",this.group.add(p),h&&this.clearable.push(p)}this.renderer=new ah,this.renderer.domElement.className="labels",e.appendChild(this.renderer.domElement),this.labels=[];for(let l of da){let c=document.createElement("div");c.className="room-label",c.textContent=l.name,c.onclick=d=>{d.stopPropagation(),n(l)};let h=new oh(c),p=l.lx??(l.x0+l.x1)/2,f=l.lz??(l.z0+l.z1)/2;h.position.set(p,pt(l.deck,p)+(l.ly??1.1),f),h.userData.room=l,this.group.add(h),this.labels.push(h)}this.level="all",this.enabled=!0,this.refresh()}setLevel(t){this.level=t,this.refresh()}setCleared(t){for(let e of this.clearable)e.visible=!t}setEnabled(t){this.enabled=t,this.refresh()}refresh(){for(let t of this.labels){let e=t.userData.room;t.visible=this.enabled&&this.level!=="all"&&Rm[e.deck]===this.level}}render(t,e,n,s){this.renderer.setSize(n,s),this.renderer.render(t,e)}};var kr=["hold","orlop","lower","middle","upper","qd","poop"],gM=.24,fa=-31,pa=-8.6,Ii=.1,Gs=620,hh=172;function xM(){let i=new Yt,t=_=>new ae({color:_,roughness:.8}),e=t("#22335a"),n=t("#e4ddcc"),s=t("#d9a882"),r=t("#151515"),o=t("#d8d0c0"),a=[],l=[];for(let _ of[1,-1]){let y=new Yt;y.position.set(0,.93,_*.1);let x=new X(new Oe(.075,.72,4,8),n);x.position.y=-.44;let S=new X(new Gt(.24,.07,.11),r);S.position.set(.05,-.9,0),y.add(x,S),i.add(y),a.push(y);let E=new Yt;E.position.set(0,1.44,_*.25);let b=new X(new Oe(.058,.48,4,8),e);b.position.y=-.3;let M=new X(new me(.06,8,6),s);M.position.y=-.6,E.add(b,M),i.add(E),l.push(E)}let c=new X(new Gt(.24,.58,.42),e);c.position.y=1.2;let h=new X(new Gt(.02,.3,.14),o);h.position.set(.125,1.32,0);let p=new X(new be(.09,.025,6,12),r);p.rotation.x=Math.PI/2,p.position.y=1.5;let f=new X(new me(.115,12,10),s);f.position.y=1.62;let d=new X(new me(.118,12,8,0,Math.PI*2,0,Math.PI/2),t("#3a2614"));d.position.y=1.625,d.rotation.z=.3;let g=new X(new Oe(.02,.18,3,6),t("#3a2614"));g.position.set(-.12,1.5,0);let v=new X(new Jt(.13,.14,.1,14),r);v.position.y=1.74;let m=new X(new Jt(.2,.2,.015,16),r);m.position.y=1.695;let u=new X(new Jt(.142,.142,.03,14),t("#e8e0c8"));return u.position.y=1.71,i.add(c,h,p,f,d,g,v,m,u),i.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),i.userData={legs:a,arms:l},i}function _M(i){switch(i){case"hold":return[-20.6,19.6];case"orlop":return[Me(qt.orlop)+.5,Be(qt.orlop)-.7];case"lower":case"middle":return[Me(qt[i])+.45,Be(qt[i])-.6];case"upper":return[Me(qt.upper)+.8,Be(qt.upper)-.8];case"qd":return[Me(qt.qd)+.6,Be(qt.qd)-.6];default:return[Me(qt.poop)+.6,Ze-.15]}}var Cm=i=>i==="qd"||i==="poop";function vM(i){return Cm(i)||i==="hold"?[]:i==="orlop"?Dn.filter(t=>t.x>-14&&t.x<15):Dn}var _d=class{constructor(){this.grids=Object.fromEntries(kr.map(t=>[t,new Uint8Array(Gs*hh)])),this.portals=[]}cell(t,e){let n=Math.floor((t-fa)/Ii),s=Math.floor((e-pa)/Ii);return n<0||s<0||n>=Gs||s>=hh?-1:s*Gs+n}free(t,e,n){let s=this.cell(e,n);return s>=0&&this.grids[t][s]===1}build(t){let e=Object.fromEntries(kr.map(d=>[d,[]])),n=(d,g,v,m,u,_=0)=>e[d].push({t:"box",cx:g,cz:v,hx:m,hz:u,c:Math.cos(_),s:Math.sin(_)}),s=(d,g,v,m)=>e[d].push({t:"circle",cx:g,cz:v,r:m}),r=(d,g,v,m,u,_=.06)=>e[d].push({t:"seg",ax:g,az:v,bx:m,bz:u,w:_});for(let d of kr)for(let g of vM(d))n(d,g.x,0,g.w/2+.2,g.d/2+.2);let o=t.cur,a={lower:"lower",middle:"middle",upper:"upper",qd:"qd",fc:"qd",carronade:"qd"};for(let d of t.guns.ports){let g=d.tier,v=-.9+o.runOut*1.6,m=v-g.len-.15,u=Math.min(v,0),_=d.basis.p.clone().addScaledVector(d.out,(m+u)/2);n(a[g.name],_.x,_.z,(u-m)/2,g.carronade?.4:.5,Math.atan2(d.out.z,d.out.x))}for(let d of Object.values(Ci))for(let g of kr)(g!=="poop"||d.x<Ze)&&s(g,d.x,0,.62);for(let[d]of[["orlop"],["lower"],["middle"]])for(let g=-20;g<20;g+=2.5)Dn.some(v=>Math.abs(g-v.x)<v.w/2+.3)||d==="orlop"&&(g<-14||g>15)||s(d,g,0,.12);for(let d of["middle","lower"])s(d,-6.4,0,d==="middle"?.95:.8),s(d,3.7,0,d==="middle"?.72:.62);n("qd",Ze-1,0,.95,.55),n("qd",Ze+1,0,.4,.65),n("qd",-8.8,0,1.35,1.05),n("qd",$e+.8,0,.5,.5),n("qd",20.3,1.6,.35,.35),this.portals=[];let l=(d,g,v,m,u,_,y,x)=>{n(d,(v.x+m.x)/2,(v.z+m.z)/2,Math.abs(m.x-v.x)/2+.42*(v.x===m.x?1:0)+.05,Math.abs(m.z-v.z)/2+.42*(v.z===m.z?1:0)+.05),this.portals.push({lo:d,hi:g,rail:[v,m],foot:u,footDir:_,top:y,topDir:x})},c=["orlop","lower","middle","upper"];for(let d=0;d<c.length-1;d++)for(let g of Dn.filter(v=>v.ladder)){if(c[d]==="orlop"&&!(g.x>-14&&g.x<15))continue;let v=Ac(g,d%2?-1:1),m=v.side;l(c[d],c[d+1],{x:v.x,z:v.zFoot},{x:v.x,z:v.zTop},{x:v.x,z:v.zFoot+m*.32},{x:0,z:-m},{x:v.x,z:m*(g.d/2+.68)},{x:0,z:-m})}{let d=Pc(),g=d.hatch;l("hold","orlop",{x:d.x,z:d.zFoot},{x:d.x,z:d.zTop},{x:d.x,z:d.zFoot-.32},{x:0,z:1},{x:d.x,z:-(g.d/2+.68)},{x:0,z:1})}for(let d of Ic)for(let g of[1,-1]){let v=Math.sign(d.run),m=g*d.z;l(d.from,d.to,{x:d.x,z:m},{x:d.x+d.run,z:m},{x:d.x-v*.5,z:m},{x:v,z:0},{x:d.x+d.run+v*.6,z:m},{x:-v,z:0})}let h={qd:"qd",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"};for(let d of xd()){let g=h[d.deck];if(!g||t.isCleared&&g!=="orlop"&&g!=="hold")continue;let v=Math.hypot(d.b.x-d.a.x,d.b.z-d.a.z),m=u=>[d.a.x+(d.b.x-d.a.x)*u/v,d.a.z+(d.b.z-d.a.z)*u/v];if(d.door==null)r(g,d.a.x,d.a.z,d.b.x,d.b.z);else{let u=Math.max(0,d.door-.5),_=Math.min(v,d.door+.5);u>.05&&r(g,d.a.x,d.a.z,...m(u)),_<v-.05&&r(g,...m(_),d.b.x,d.b.z)}}{let d=Ze-4.2,g=wt(d,pt("qd",d)+1)-.3;r("qd",d,-g,d,-.5),r("qd",d,.5,d,g)}let p=new On,f=new Et;t.furnishing.traverse(d=>{if(!(!d.isInstancedMesh||["hammock","lantern","plate","coil"].includes(d.name)||d.name.startsWith("gear-"))){d.geometry.boundingBox||d.geometry.computeBoundingBox();for(let g=0;g<d.count;g++){if(d.getMatrixAt(g,f),f.elements[0]===0&&f.elements[5]===0)continue;p.copy(d.geometry.boundingBox).applyMatrix4(f);let v=kr.slice().reverse().find(m=>{let u=$i(m==="qd"?"qd":m,(p.min.x+p.max.x)/2,0);return p.min.y>u-.4&&p.min.y<u+1});!v||p.max.y-p.min.y<.05||n(v,(p.min.x+p.max.x)/2,(p.min.z+p.max.z)/2,(p.max.x-p.min.x)/2,(p.max.z-p.min.z)/2)}}});for(let d of kr){let g=this.grids[d],[v,m]=_M(d),u=d;for(let _=0;_<Gs;_++){let y=fa+(_+.5)*Ii,x=y>v&&y<m,S=d==="hold"?Cc:pt(u,y),E=wt(y,S+.5)-(Cm(d)||d==="upper"?.32:0)-.35;for(let b=0;b<hh;b++){let M=pa+(b+.5)*Ii,w=x&&Math.abs(M)<E;w&&d==="qd"&&y>pn&&y<$e&&(w=Math.abs(M)>E+.35-Lp+.25),g[b*Gs+_]=w?1:0}}for(let _ of e[d])this.stamp(g,_)}}stamp(t,e){let n=gM,s,r,o,a;if(e.t==="circle")s=e.cx-e.r-n,r=e.cx+e.r+n,o=e.cz-e.r-n,a=e.cz+e.r+n;else if(e.t==="box"){let f=Math.abs(e.c)*e.hx+Math.abs(e.s)*e.hz+n,d=Math.abs(e.s)*e.hx+Math.abs(e.c)*e.hz+n;s=e.cx-f,r=e.cx+f,o=e.cz-d,a=e.cz+d}else s=Math.min(e.ax,e.bx)-n-e.w,r=Math.max(e.ax,e.bx)+n+e.w,o=Math.min(e.az,e.bz)-n-e.w,a=Math.max(e.az,e.bz)+n+e.w;let l=Math.max(0,Math.floor((s-fa)/Ii)),c=Math.min(Gs-1,Math.floor((r-fa)/Ii)),h=Math.max(0,Math.floor((o-pa)/Ii)),p=Math.min(hh-1,Math.floor((a-pa)/Ii));for(let f=l;f<=c;f++){let d=fa+(f+.5)*Ii;for(let g=h;g<=p;g++){let v=pa+(g+.5)*Ii,m;if(e.t==="circle")m=Math.hypot(d-e.cx,v-e.cz)<e.r+n;else if(e.t==="box"){let u=d-e.cx,_=v-e.cz,y=u*e.c+_*e.s,x=-u*e.s+_*e.c;m=Math.abs(y)<e.hx+n&&Math.abs(x)<e.hz+n}else{let u=e.bx-e.ax,_=e.bz-e.az,y=u*u+_*_||1,x=Math.max(0,Math.min(1,((d-e.ax)*u+(v-e.az)*_)/y));m=Math.hypot(d-(e.ax+u*x),v-(e.az+_*x))<e.w+n}m&&(t[g*Gs+f]=0)}}}},uh=class{constructor(t){this.figure=xM(),this.figure.visible=!1,t.add(this.figure),this.map=new _d,this.level="qd",this.x=-9.5,this.z=2.4,this.heading=0,this.phase=0,this.climb=null,this.target=null,this.blocked=0,this.lastPortal=null,this.version=-1}setActive(t,e){this.figure.visible=t,t&&this.rebuild(e)}rebuild(t){this.map.build(t),this.version=t.layoutVersion,this.map.free(this.level,this.x,this.z)||this.respawn()}respawn(){for(let t of[this.level,"qd"])for(let e=0;e<12;e+=.2)for(let n=0;n<Math.PI*2;n+=.4){let s=this.x+Math.cos(n)*e,r=this.z+Math.sin(n)*e;if(this.map.free(t,s,r)){this.level=t,this.x=s,this.z=r;return}}}floorY(t=this.level,e=this.x,n=this.z){return $i(t,e,n)}walkTo(t,e){this.target={x:t,z:e},this.blocked=0}update(t,e,n,s){s.layoutVersion!==this.version&&this.rebuild(s);let r=this.figure.userData;if(this.climb){let d=this.climb;d.t=Math.min(1,d.t+t/d.dur);let g=d.t,v=d.path,m=Math.min(v.length-2,Math.floor(g*(v.length-1))),u=g*(v.length-1)-m,_=v[m],y=v[m+1];this.x=_.x+(y.x-_.x)*u,this.z=_.z+(y.z-_.z)*u;let x=_.y+(y.y-_.y)*u;this.figure.position.set(this.x,x,this.z),this.phase+=t*9,r.arms.forEach((S,E)=>{S.rotation.z=2.3+Math.sin(this.phase+E*Math.PI)*.35}),r.legs.forEach((S,E)=>{S.rotation.z=.4+Math.sin(this.phase+E*Math.PI)*.4}),d.t>=1&&(this.level=d.to,this.climb=null,this.lastPortal=d.portalKey,r.arms.forEach(S=>{S.rotation.z=0}));return}let o=e.x,a=e.z;if(this.target&&!o&&!a){let d=this.target.x-this.x,g=this.target.z-this.z,v=Math.hypot(d,g);v<.12?this.target=null:(o=d/v,a=g/v)}else(o||a)&&(this.target=null);let l=Math.hypot(o,a),c=0;if(l>.01){o/=l,a/=l,c=n?3.2:1.5;let d=c*t,g=this.x+o*d,v=this.z+a*d,m=!1;this.map.free(this.level,g,v)?(this.x=g,this.z=v,m=!0):this.map.free(this.level,g,this.z)?(this.x=g,m=!0):this.map.free(this.level,this.x,v)&&(this.z=v,m=!0),!m&&this.target&&(this.blocked+=t)>.5&&(this.target=null),this.heading=Math.atan2(-a,o),this.checkPortals(o,a,s)}let h=Math.min(1,c/1.5)*(c>2?.75:.55);c>0&&(this.phase+=t*(c>2?11:7.5)),r.legs.forEach((d,g)=>{d.rotation.z=Math.sin(this.phase+g*Math.PI)*h}),r.arms.forEach((d,g)=>{d.rotation.z=-Math.sin(this.phase+g*Math.PI)*h*.8}),c||(r.legs.forEach(d=>{d.rotation.z*=.8}),r.arms.forEach(d=>{d.rotation.z*=.8}));let p=this.figure.rotation.y,f=this.heading-p;f=Math.atan2(Math.sin(f),Math.cos(f)),this.figure.rotation.y=p+f*Math.min(1,t*12),this.figure.position.set(this.x,this.floorY(),this.z)}checkPortals(t,e,n){for(let s=0;s<this.map.portals.length;s++){let r=this.map.portals[s];for(let o of["foot","top"]){if((o==="foot"?r.lo:r.hi)!==this.level)continue;let l=r[o],c=o==="foot"?r.footDir:r.topDir,h=`${s}${o}`;if(!(Math.hypot(this.x-l.x,this.z-l.z)<.55)){this.lastPortal===h&&(this.lastPortal=null);continue}if(this.lastPortal===h||t*c.x+e*c.z<.6)continue;let f=o==="foot"?r.top:r.foot,d=o==="foot"?r.hi:r.lo,[g,v]=r.rail,m={x:g.x,y:$i(r.lo,g.x,g.z),z:g.z},u={x:v.x,y:$i(r.hi,v.x,v.z),z:v.z},_={x:l.x,y:this.floorY(),z:l.z},y={x:f.x,y:$i(d,f.x,f.z),z:f.z},x=o==="foot"?[_,m,u,y]:[_,u,m,y];this.climb={path:x,t:0,dur:1.9,to:d,portalKey:`${s}${o==="foot"?"top":"foot"}`};let S=(o==="foot"?1:-1)*(v.x-g.x),E=(o==="foot"?1:-1)*(v.z-g.z);this.heading=Math.atan2(-E,S),this.figure.rotation.y=this.heading,this.target=null;return}}}};var yM={hold:"hold",orlop:"orlop",lower:"lower",middle:"middle",upper:"upper",qd:"quarterdeck",poop:"poop"},vd=sn.degToRad(40),dh=class{constructor({ship:t,cut:e,rooms:n,renderer:s,ui:r}){this.ship=t,this.cut=e,this.rooms=n,this.renderer=s,this.ui=r,this.sailor=new uh(t.body),this.camera=new Ei(-1,1,1,-1,1,2e3),this.zoom=9,this.theta=sn.degToRad(135),this.thetaTarget=this.theta,this.focus=new A,this.keys=new Set,this.active=!1,this.level=null,this.ray=new No,window.addEventListener("keydown",u=>{this.active&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(u.code)&&u.preventDefault(),u.code==="KeyQ"&&(this.thetaTarget-=Math.PI/2),u.code==="KeyE"&&(this.thetaTarget+=Math.PI/2),this.keys.add(u.code))}),window.addEventListener("keyup",u=>this.keys.delete(u.code)),window.addEventListener("blur",()=>this.keys.clear());let o=s.domElement;o.addEventListener("wheel",u=>{this.active&&(u.preventDefault(),this.zoom=sn.clamp(this.zoom*(u.deltaY>0?1.12:1/1.12),4,40))},{passive:!1}),this.stick={x:0,y:0};let a=document.createElement("div");a.id="stick",a.innerHTML='<div class="nub"></div>';let l=document.createElement("div");l.id="turn",l.innerHTML='<button data-d="-1">&#10226;</button><button data-d="1">&#10227;</button>',document.body.append(a,l),this.touchUI=[a,l];let c=a.firstChild,h=null,p=u=>{let _=a.getBoundingClientRect(),y=(u.clientX-(_.left+_.width/2))/(_.width/2),x=(u.clientY-(_.top+_.height/2))/(_.height/2),S=Math.hypot(y,x);S>1&&(y/=S,x/=S),this.stick={x:y,y:x},c.style.transform=`translate(${y*38}px, ${x*38}px)`};a.addEventListener("pointerdown",u=>{h=u.pointerId,a.setPointerCapture(h),p(u)}),a.addEventListener("pointermove",u=>{u.pointerId===h&&p(u)});let f=()=>{h=null,this.stick={x:0,y:0},c.style.transform=""};a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),l.querySelectorAll("button").forEach(u=>{u.onclick=()=>{this.thetaTarget+=+u.dataset.d*Math.PI/2}});let d=new Map,g=null;o.addEventListener("pointerdown",u=>{if(!(!this.active||u.pointerType!=="touch")&&(d.set(u.pointerId,{x:u.clientX,y:u.clientY}),d.size===2)){let[_,y]=[...d.values()];g={d:Math.hypot(_.x-y.x,_.y-y.y),zoom:this.zoom}}}),o.addEventListener("pointermove",u=>{if(d.has(u.pointerId)&&(d.set(u.pointerId,{x:u.clientX,y:u.clientY}),g&&d.size===2)){let[_,y]=[...d.values()];this.zoom=sn.clamp(g.zoom*g.d/Math.max(10,Math.hypot(_.x-y.x,_.y-y.y)),4,40)}});let v=u=>{d.delete(u.pointerId),d.size<2&&(g=null)};o.addEventListener("pointerup",v),o.addEventListener("pointercancel",v);let m=null;o.addEventListener("pointerdown",u=>{this.active&&(m={x:u.clientX,y:u.clientY})}),o.addEventListener("pointerup",u=>{!this.active||!m||(Math.hypot(u.clientX-m.x,u.clientY-m.y)<6&&!g&&this.clickTo(u.clientX,u.clientY),m=null)})}enter(){this.active=!0,document.body.classList.add("sailor-mode"),this.saved={level:this.cut.level,cutZ:this.cut.cutZ},this.cut.setCut(0),this.sailor.setActive(!0,this.ship),this.level=null,this.snap=!0}exit(){this.active=!1,document.body.classList.remove("sailor-mode"),this.sailor.setActive(!1,this.ship),this.cut.setLevel(this.saved?.level??"all"),this.rooms.setLevel(this.saved?.level??"all"),this.ui?.setLevel(this.saved?.level??"all")}clickTo(t,e){let n=new $(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.ray.setFromCamera(n,this.camera);let s=new Et().copy(this.ship.body.matrixWorld).invert(),r=this.ray.ray.origin.clone().applyMatrix4(s),o=this.ray.ray.direction.clone().transformDirection(s),a=this.sailor.floorY();if(Math.abs(o.y)<1e-4)return;let l=(a-r.y)/o.y;l<0||this.sailor.walkTo(r.x+o.x*l,r.z+o.z*l)}update(t){let e=this.keys,n=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0),r=Math.cos(this.theta),o=Math.sin(this.theta),a=n||-this.stick.y,l=s||this.stick.x,c={x:-r*a+o*l,z:-o*a-r*l};this.sailor.update(t,c,e.has("ShiftLeft")||e.has("ShiftRight"),this.ship);let h=yM[this.sailor.level];if(h!==this.level&&(this.level=h,this.cut.setLevel(h),this.rooms.setLevel(h),this.ui?.setLevel(h)),this.sailor.level==="hold"||this.sailor.level==="orlop"){let v=Math.sin(this.theta)>=0?1:-1;this.cut.setCutPlane(v*this.sailor.z+2.4,v)}else this.cut.cutZ<50&&this.cut.setCutPlane(1e5,1);this.theta+=(this.thetaTarget-this.theta)*Math.min(1,t*6);let p=this.sailor.figure.position.clone().add(new A(0,1,0));this.ship.body.localToWorld(p),this.snap?(this.focus.copy(p),this.snap=!1):this.focus.lerp(p,Math.min(1,t*6));let d=new A(Math.cos(this.theta)*Math.cos(vd),Math.sin(vd),Math.sin(this.theta)*Math.cos(vd)).multiplyScalar(160);this.camera.position.copy(this.focus).add(d),this.camera.lookAt(this.focus);let g=window.innerWidth/window.innerHeight;Object.assign(this.camera,{left:-this.zoom*g,right:this.zoom*g,top:this.zoom,bottom:-this.zoom}),this.camera.updateProjectionMatrix()}};var Li={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},MM=new Ei(-1,1,1,-1,0,1),yd=class extends ue{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},SM=new yd,Di=class{constructor(t){this._mesh=new X(SM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,MM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var fh=class extends Hn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dn.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ma=class extends Hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ph=class extends Hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var mh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fh(Li),this.copyPass.material.blending=nn,this.timer=new Do}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(o instanceof ma?n=!0:o instanceof ph&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gh=class extends Hn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var ga={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Et},cameraProjectionMatrixInverse:{value:new Et},cameraWorldMatrix:{value:new Et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

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
		}`},xa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},xh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Pm(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=EM(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new A(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Gi(s,t,t);return r.wrapS=tn,r.wrapT=tn,r.needsUpdate=!0,r}function EM(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var _a={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Md(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new Et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Md(i,t,e){let n=bM(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function bM(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var _h=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,p=(l+c)*h,f=l-p,d=c-p,g=t-f,v=e-d,m,u;g>v?(m=1,u=0):(m=0,u=1);let _=g-m+h,y=v-u+h,x=g-1+2*h,S=v-1+2*h,E=l&255,b=c&255,M=this.perm[E+this.perm[b]]%12,w=this.perm[E+m+this.perm[b+u]]%12,T=this.perm[E+1+this.perm[b+1]]%12,P=.5-g*g-v*v;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[M],g,v));let L=.5-_*_-y*y;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[w],_,y));let N=.5-x*x-S*S;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[T],x,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),p=Math.floor(e+c),f=Math.floor(n+c),d=1/6,g=(h+p+f)*d,v=h-g,m=p-g,u=f-g,_=t-v,y=e-m,x=n-u,S,E,b,M,w,T;_>=y?y>=x?(S=1,E=0,b=0,M=1,w=1,T=0):_>=x?(S=1,E=0,b=0,M=1,w=0,T=1):(S=0,E=0,b=1,M=1,w=0,T=1):y<x?(S=0,E=0,b=1,M=0,w=1,T=1):_<x?(S=0,E=1,b=0,M=0,w=1,T=1):(S=0,E=1,b=0,M=1,w=1,T=0);let P=_-S+d,L=y-E+d,N=x-b+d,I=_-M+2*d,U=y-w+2*d,z=x-T+2*d,H=_-1+3*d,et=y-1+3*d,F=x-1+3*d,j=h&255,K=p&255,mt=f&255,yt=this.perm[j+this.perm[K+this.perm[mt]]]%12,jt=this.perm[j+S+this.perm[K+E+this.perm[mt+b]]]%12,Nt=this.perm[j+M+this.perm[K+w+this.perm[mt+T]]]%12,Ht=this.perm[j+1+this.perm[K+1+this.perm[mt+1]]]%12,O=.6-_*_-y*y-x*x;O<0?s=0:(O*=O,s=O*O*this._dot3(this.grad3[yt],_,y,x));let G=.6-P*P-L*L-N*N;G<0?r=0:(G*=G,r=G*G*this._dot3(this.grad3[jt],P,L,N));let tt=.6-I*I-U*U-z*z;tt<0?o=0:(tt*=tt,o=tt*tt*this._dot3(this.grad3[Nt],I,U,z));let ut=.6-H*H-et*et-F*F;return ut<0?a=0:(ut*=ut,a=ut*ut*this._dot3(this.grad3[Ht],H,et,F)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,p,f,d,g,v=(t+e+n+s)*l,m=Math.floor(t+v),u=Math.floor(e+v),_=Math.floor(n+v),y=Math.floor(s+v),x=(m+u+_+y)*c,S=m-x,E=u-x,b=_-x,M=y-x,w=t-S,T=e-E,P=n-b,L=s-M,N=w>T?32:0,I=w>P?16:0,U=T>P?8:0,z=w>L?4:0,H=T>L?2:0,et=P>L?1:0,F=N+I+U+z+H+et,j=o[F][0]>=3?1:0,K=o[F][1]>=3?1:0,mt=o[F][2]>=3?1:0,yt=o[F][3]>=3?1:0,jt=o[F][0]>=2?1:0,Nt=o[F][1]>=2?1:0,Ht=o[F][2]>=2?1:0,O=o[F][3]>=2?1:0,G=o[F][0]>=1?1:0,tt=o[F][1]>=1?1:0,ut=o[F][2]>=1?1:0,lt=o[F][3]>=1?1:0,gt=w-j+c,zt=T-K+c,J=P-mt+c,st=L-yt+c,rt=w-jt+2*c,ct=T-Nt+2*c,dt=P-Ht+2*c,Bt=L-O+2*c,Dt=w-G+3*c,kt=T-tt+3*c,te=P-ut+3*c,B=L-lt+3*c,_e=w-1+4*c,le=T-1+4*c,D=P-1+4*c,R=L-1+4*c,W=m&255,q=u&255,nt=_&255,ft=y&255,_t=a[W+a[q+a[nt+a[ft]]]]%32,it=a[W+j+a[q+K+a[nt+mt+a[ft+yt]]]]%32,at=a[W+jt+a[q+Nt+a[nt+Ht+a[ft+O]]]]%32,St=a[W+G+a[q+tt+a[nt+ut+a[ft+lt]]]]%32,Wt=a[W+1+a[q+1+a[nt+1+a[ft+1]]]]%32,Mt=.6-w*w-T*T-P*P-L*L;Mt<0?h=0:(Mt*=Mt,h=Mt*Mt*this._dot4(r[_t],w,T,P,L));let vt=.6-gt*gt-zt*zt-J*J-st*st;vt<0?p=0:(vt*=vt,p=vt*vt*this._dot4(r[it],gt,zt,J,st));let Ut=.6-rt*rt-ct*ct-dt*dt-Bt*Bt;Ut<0?f=0:(Ut*=Ut,f=Ut*Ut*this._dot4(r[at],rt,ct,dt,Bt));let Zt=.6-Dt*Dt-kt*kt-te*te-B*B;Zt<0?d=0:(Zt*=Zt,d=Zt*Zt*this._dot4(r[St],Dt,kt,te,B));let re=.6-_e*_e-le*le-D*D-R*R;return re<0?g=0:(re*=re,g=re*re*this._dot4(r[Wt],_e,le,D,R)),27*(h+p+f+d+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Vr=class i extends Hn{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Pm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ke(this.width,this.height,{type:je,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ee({defines:Object.assign({},ga.defines),uniforms:dn.clone(ga.uniforms),vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new To,this.normalMaterial.blending=nn,this.pdMaterial=new Ee({defines:Object.assign({},_a.defines),uniforms:dn.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ee({defines:Object.assign({},xa.defines),uniforms:dn.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ee({uniforms:dn.clone(Li.uniforms),vertexShader:Li.vertexShader,fragmentShader:Li.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ho,blendDst:Ns,blendEquation:jn,blendSrcAlpha:Bo,blendDstAlpha:Ns,blendEquationAlpha:jn}),this.blendMaterial=new Ee({uniforms:dn.clone(xh.uniforms),vertexShader:xh.vertexShader,fragmentShader:xh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pl,blendSrc:Ho,blendDst:Ns,blendEquation:jn,blendSrcAlpha:Bo,blendDstAlpha:Ns,blendEquationAlpha:jn}),this._fsQuad=new Di(null),this._originalClearColor=new Qt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=bi,this.depthTexture.type=_s,this.normalRenderTarget=new ke(this.width,this.height,{minFilter:en,magFilter:en,type:je,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Md(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new _h,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Gi(s,t,t,zn,In);return r.wrapS=tn,r.wrapT=tn,r.needsUpdate=!0,r}};Vr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Im={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gr=class i extends Hn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,o,{type:je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new ke(r,o,{type:je,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new ke(r,o,{type:je,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Im;this.highPassUniforms=dn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dn.clone(Li.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:Li.vertexShader,fragmentShader:Li.fragmentShader,premultipliedAlpha:!0,blending:Ds,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new Vi,this._fsQuad=new Di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ee({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Gr.BlurDirectionX=new $(1,0);Gr.BlurDirectionY=new $(0,1);var va={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var vh=class extends Hn{constructor(){super(),this.isOutputPass=!0,this.uniforms=dn.clone(va.uniforms),this.material=new wr({name:va.name,uniforms:this.uniforms,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader}),this._fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Go&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var yh=class{constructor(t,e,n){this.renderer=t,this.scene=e;let s=t.getDrawingBufferSize(new $),r=new ke(s.x,s.y,{type:je,samples:4});this.composer=new mh(t,r),this.renderPass=new gh(e,n),this.composer.addPass(this.renderPass),this.ao=new Vr(e,n,s.x,s.y),this.ao.output=Vr.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:.6,distanceExponent:1.4,thickness:1.2,scale:1,samples:12}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});let o=this.ao._overrideVisibility.bind(this.ao);this.ao._overrideVisibility=()=>{o(),e.traverse(a=>{a.userData.noAO&&a.visible&&(a.visible=!1,this.ao._visibilityCache.push(a))})},this.composer.addPass(this.ao),this.bloom=new Gr(new $(s.x/2,s.y/2),.35,.5,2.2),this.composer.addPass(this.bloom),this.composer.addPass(new vh),this.aoWanted=!0}setCamera(t){this.renderPass.camera!==t&&(this.renderPass.camera=t,this.ao.camera=t,this.ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA=t.isPerspectiveCamera?1:0,this.ao.gtaoMaterial.needsUpdate=!0,"PERSPECTIVE_CAMERA"in this.ao.pdMaterial.defines&&(this.ao.pdMaterial.defines.PERSPECTIVE_CAMERA=t.isPerspectiveCamera?1:0,this.ao.pdMaterial.needsUpdate=!0))}setSize(t,e){this.composer.setSize(t,e)}render(t){this.ao.enabled=this.aoWanted&&!t,this.composer.render()}};function wM(){let i=new URLSearchParams(location.search),t=matchMedia("(pointer: coarse)").matches,e=t&&Math.min(screen.width,screen.height)<900?"low":"high",n=i.get("quality")||localStorage.getItem("victory-quality")||e,s=new Ec({antialias:n!=="low",preserveDrawingBuffer:i.has("shot")});s.setPixelRatio(Math.min(window.devicePixelRatio,n==="high"?2:n==="medium"?1.5:1)),s.setSize(window.innerWidth,window.innerHeight),s.toneMapping=Us,s.toneMappingExposure=.55,s.shadowMap.enabled=!0,s.shadowMap.type=Cl,document.getElementById("app").appendChild(s.domElement);let r=new Cs,o=new bn(40,window.innerWidth/window.innerHeight,.2,9e3);r.userData.camera=o;let a=null,l=new Lc(s,r),c=l.sun;l.setTime("day");let h=r.environment,p=new Hc(h);r.add(p.mesh);let f=new ih(r,p);r.add(f.root);let d=document.getElementById("info");function g(F){d.innerHTML=`<span class="close">\xD7</span><h2>${F.name}</h2><div class="deck">${Am[F.deck]}</div>
      <div>${F.note}</div>${F.source?`<div class="src">Source: ${F.source}</div>`:""}`,d.style.display="block",d.querySelector(".close").onclick=()=>{d.style.display="none"}}let v=new ch(f.body,document.body,g);f.clearables.push(v),v.setCleared(f.isCleared);let m=new rh(f,c),u=new Rc(o,s.domElement);u.enableDamping=!0,u.dampingFactor=.08,u.maxPolarAngle=Math.PI*.495,u.minDistance=4,u.maxDistance=600;let _={quarter:[[78,24,96],[0,22,0]],broadside:[[4,18,132],[2,24,0]],bow:[[92,14,34],[12,20,0]],stern:[[-84,20,-46],[-14,16,0]],deck:[[-21,15.5,7],[10,9,0]],aloft:[[30,76,52],[0,30,0]],galleries:[[-44,9,24],[-26,7,0]],head:[[44,9,16],[30,8,0]],inside:[[-26,34,46],[0,2,0]]},y=!0;function x(F,j=!1){let K=_[F];if(!K)return;let mt=new A(...K[0]),yt=new A(...K[1]);j?(o.position.copy(mt),u.target.copy(yt)):S={p0:o.position.clone(),t0:u.target.clone(),p1:mt,t1:yt,k:0}}let S=null,E=i.get("ui")==="0"?null:new sh({onPose:F=>{f.setPose(F);let j=Ss[F].wind;j&&(f.setWind(j.dir,j.str),E?.windSet(j.dir,j.str))},onView:F=>x(F),onFire:()=>f.fireBroadside(),onWind:(F,j)=>f.setWind(F,j),wind:{dir:+(i.get("wind")??-135),str:+(i.get("windStr")??.6)},levels:Object.keys(gd),onLevel:F=>{m.setLevel(F),v.setLevel(F)},onLabels:F=>v.setEnabled(F),onCut:F=>m.setCut(F),onXray:F=>m.setXray(F),onMode:F=>T(F),onTime:F=>w(F),onQuality:F=>P(F),touch:t,poses:f.poseNames(),views:Object.keys(_)}),b=new dh({ship:f,cut:m,rooms:v,renderer:s,ui:E});l.nightMaterials.push(...f.nightMaterials);let M=new Dc(f,f.lanterns);function w(F){l.setTime(F,p),f.wake.uniforms.uLight.value=l.light*(l.night>.9?.45:1),f.effects.light=l.light,p.uniforms.uLight.value=l.light,E?.setTime(F),a&&L()}w(i.get("time")||"day");function T(F){F==="sailor"&&!b.active&&(b.enter(),u.enabled=!1),F==="free"&&b.active&&(b.exit(),u.enabled=!0)}E?.setMode("free"),f.setPose(i.get("pose")||"sail",!0);{let F=Ss[f.pose].wind,j=+(i.get("wind")??F?.dir??-135),K=+(i.get("windStr")??F?.str??.6);f.setWind(j,K,!0),E?.windSet(j,K)}if(x(i.get("view")||"quarter",!0),i.has("cam")){let F=i.get("cam").split(",").map(Number);o.position.set(F[0],F[1],F[2]),u.target.set(F[3],F[4],F[5])}E?.setPose(f.pose),i.has("level")&&(m.setLevel(i.get("level")),v.setLevel(i.get("level")),E?.setLevel(i.get("level"))),i.has("cut")&&m.setCut(+i.get("cut")),i.has("xray")&&m.setXray(!0),i.has("fire")&&setTimeout(()=>f.fireBroadside(),300),i.get("mode")==="sailor"&&(i.has("sx")&&(b.sailor.x=+i.get("sx"),b.sailor.z=+i.get("sz"),b.sailor.level=i.get("sl")||"qd"),i.has("zoom")&&(b.zoom=+i.get("zoom")),T("sailor"),E?.setMode("sailor")),a=new yh(s,r,o);function P(F){n=F,localStorage.setItem("victory-quality",F),s.setPixelRatio(Math.min(window.devicePixelRatio,F==="high"?2:F==="medium"?1.5:1)),s.setSize(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight),a.aoWanted=F==="high";let j=F==="low"?0:4;for(let mt of[a.composer.renderTarget1,a.composer.renderTarget2])mt.samples!==j&&(mt.samples=j,mt.dispose());s.shadowMap.enabled=F!=="low";let K=F==="high"?4096:2048;l.sun.shadow.mapSize.x!==K&&(l.sun.shadow.mapSize.set(K,K),l.sun.shadow.map?.dispose(),l.sun.shadow.map=null),r.traverse(mt=>{if(mt.material)for(let yt of[].concat(mt.material))yt.needsUpdate=!0}),E?.setQuality(F)}function L(){a.bloom.enabled=l.night>.9&&n!=="low",a.bloom.threshold=.75,a.bloom.strength=.55}L(),P(n),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight)});let N=new Uo,I=i.has("t")?parseFloat(i.get("t")):null,U=I??0,z=0;function H(){let F=Math.min(N.getDelta(),.05);if(U=I??U+F,f.update(U,I!=null?1/30:F),m.update(),p.update(U,f.distance),S){S.k=Math.min(1,S.k+F/1.6);let mt=S.k<.5?2*S.k**2:1-(-2*S.k+2)**2/2;o.position.lerpVectors(S.p0,S.p1,mt),u.target.lerpVectors(S.t0,S.t1,mt),S.k>=1&&(S=null)}let j=b.active?b.sailor.figure.position.clone():f.body.worldToLocal(u.target.clone());M.update(F,j,l.night,m.uniforms.uCutY.value);let K=o;b.active?(b.update(I!=null?1/30:F),K=b.camera):u.update(),la.uSunView.value.copy(l.sun.position).normalize().transformDirection(K.matrixWorldInverse),la.uSunCol.value.copy(l.sun.color).multiplyScalar(l.sun.intensity/3.2),a.setCamera(K),a.render(m.active||m.xray),v.render(r,K,window.innerWidth,window.innerHeight),z++,z===3&&(window.__ready=!0),requestAnimationFrame(H)}H();let et=document.getElementById("loading");et&&(et.classList.add("done"),setTimeout(()=>et.remove(),700)),window.__victory={ship:f,camera:o,controls:u,scene:r,setView:x,cut:m,iso:b,setMode:T,ROOMS:da,post:a,clashes:()=>Mm(f)}}requestAnimationFrame(()=>setTimeout(wM,30));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
