(()=>{var ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,qh=1,af=2;var Bo=1,_l=2,Ir=3,ps=0,rn=1,De=2,bi=0,ms=1,Ho=2,Yh=3,$h=4,lf=5;var Fs=100,cf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Zh=204,Kh=205,xf=206,_f=207,yf=208,vf=209,Mf=210,Ef=211,Sf=212,bf=213,wf=214,Ha=0,za=1,ka=2,mr=3,Va=4,Ga=5,Wa=6,Xa=7,Jh=0,Tf=1,Rf=2,ui=0,jh=1,Qh=2,tu=3,zo=4,eu=5,nu=6,iu=7;var su=300,gs=301,Os=302,yl=303,vl=304,ko=306,Wn=1e3,yi=1001,qa=1002,gn=1003,Af=1004;var Vo=1005;var En=1006,Ml=1007;var xs=1008;var Fn=1009,ru=1010,ou=1011,Lr=1012,El=1013,di=1014,Jn=1015,fi=1016,Sl=1017,bl=1018,Dr=1020,au=35902,lu=35899,cu=1021,hu=1022,jn=1023,Ei=1026,_s=1027,wl=1028,Tl=1029,ys=1030,Rl=1031;var Al=1033,Go=33776,Wo=33777,Xo=33778,qo=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Nl=37492,Ul=37496,Fl=37488,Ol=37489,Yo=37490,Bl=37491,Hl=37808,zl=37809,kl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,$l=37817,Zl=37818,Kl=37819,Jl=37820,jl=37821,Ql=36492,tc=36494,ec=36495,nc=36283,ic=36284,$o=36285,sc=36286;var oo=2300,Ya=2301,Oa=2302,Dh=2303,Nh=2400,Uh=2401,Fh=2402;var Cf=3200;var rc=0,Pf=1,Gi="",Fe="srgb",ao="srgb-linear",lo="linear",Te="srgb";var Ba=7680;var If=519,Lf=512,Df=513,Nf=514,oc=515,Uf=516,Ff=517,ac=518,Of=519,uu=35044,lc=35048;var du="300 es",ai=2e3,gr=2001;function Um(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=co("canvas");return i.style.display="block",i}var Sd={},xr=null;function ho(...i){let t="THREE."+i.shift();xr?xr("log",t,...i):console.log(t,...i)}function Hf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=Hf(i);let t="THREE."+i.shift();if(xr)xr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Hf(i);let t="THREE."+i.shift();if(xr)xr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Sd||(Sd[t]=!0,Jt(...i))}function zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kf={[Ha]:za,[ka]:Wa,[Va]:Xa,[mr]:Ga,[za]:Ha,[Wa]:ka,[Xa]:Va,[Ga]:mr},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=1234567,no=Math.PI/180,_r=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function fu(i,t){return(i%t+t)%t}function Om(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bm(i,t,e){return i!==t?(e-i)/(t-i):0}function io(i,t,e){return(1-e)*i+e*t}function Hm(i,t,e,n){return io(i,t,1-Math.exp(-e*n))}function zm(i,t=1){return t-Math.abs(fu(i,t*2)-t)}function km(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wm(i,t){return i+Math.random()*(t-i)}function Xm(i){return i*(.5-Math.random())}function qm(i){i!==void 0&&(bd=i);let t=bd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ym(i){return i*no}function $m(i){return i*_r}function Zm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var on={DEG2RAD:no,RAD2DEG:_r,generateUUID:Mi,clamp:le,euclideanModulo:fu,mapLinear:Om,inverseLerp:Bm,lerp:io,damp:Hm,pingpong:zm,smoothstep:km,smootherstep:Vm,randInt:Gm,randFloat:Wm,randFloatSpread:Xm,seededRandom:qm,degToRad:Ym,radToDeg:$m,isPowerOfTwo:Zm,ceilPowerOfTwo:Km,floorPowerOfTwo:Jm,setQuaternionFromProperEuler:jm,normalize:Re,denormalize:oi},Q=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(p!==y||l!==f||c!==u||h!==g){let m=l*f+c*u+h*g+p*y;m<0&&(f=-f,u=-u,g=-g,y=-y,m=-m);let d=1-a;if(m<.9995){let _=Math.acos(m),v=Math.sin(_);d=Math.sin(d*_)/v,a=Math.sin(a*_)/v,l=l*d+f*a,c=c*d+u*a,h=h*d+g*a,p=p*d+y*a}else{l=l*d+f*a,c=c*d+u*a,h=h*d+g*a,p=p*d+y*a;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*u-c*f,t[e+1]=l*g+h*f+c*p-a*u,t[e+2]=c*g+h*u+a*f-l*p,t[e+3]=h*g-a*p-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*p+c*u*g,this._y=c*u*p-f*h*g,this._z=c*h*g+f*u*p,this._w=c*h*p-f*u*g;break;case"YXZ":this._x=f*h*p+c*u*g,this._y=c*u*p-f*h*g,this._z=c*h*g-f*u*p,this._w=c*h*p+f*u*g;break;case"ZXY":this._x=f*h*p-c*u*g,this._y=c*u*p+f*h*g,this._z=c*h*g+f*u*p,this._w=c*h*p-f*u*g;break;case"ZYX":this._x=f*h*p-c*u*g,this._y=c*u*p+f*h*g,this._z=c*h*g-f*u*p,this._w=c*h*p+f*u*g;break;case"YZX":this._x=f*h*p+c*u*g,this._y=c*u*p+f*h*g,this._z=c*h*g-f*u*p,this._w=c*h*p-f*u*g;break;case"XZY":this._x=f*h*p-c*u*g,this._y=c*u*p-f*h*g,this._z=c*h*g+f*u*p,this._w=c*h*p+f*u*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=n+a+p;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>p){let u=2*Math.sqrt(1+n-a-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>p){let u=2*Math.sqrt(1+a-n-p);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lh=new A,wd=new Ge,se=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],f=n[2],u=n[5],g=n[8],y=s[0],m=s[3],d=s[6],_=s[1],v=s[4],x=s[7],E=s[2],S=s[5],b=s[8];return r[0]=o*y+a*_+l*E,r[3]=o*m+a*v+l*S,r[6]=o*d+a*x+l*b,r[1]=c*y+h*_+p*E,r[4]=c*m+h*v+p*S,r[7]=c*d+h*x+p*b,r[2]=f*y+u*_+g*E,r[5]=f*m+u*v+g*S,r[8]=f*d+u*x+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*p+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=p*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=u*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ch.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ch.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ch.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ch=new se,Td=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){let i={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ao]:{primaries:t,whitePoint:n,transfer:lo,toXYZ:Td,fromXYZ:Rd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Td,fromXYZ:Rd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var xe=Qm();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ks,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ks===void 0&&(Ks=co("canvas")),Ks.width=t.width,Ks.height=t.height;let s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},t0=0,yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hh(s[o].image)):r.push(hh(s[o]))}else r=hh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function hh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var e0=0,uh=new A,Ln=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yi,s=yi,r=En,o=xs,a=jn,l=Fn,c=i.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Mi(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=su;Ln.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],u=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(u+1)/2,E=(d+1)/2,S=(h+f)/4,b=(p+y)/4,M=(g+m)/4;return v>x&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=b/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=b/r,s=M/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ln(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Rt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,p,f,u,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,f,u,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,p,f,u,g,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=u,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Js.setFromMatrixColumn(t,0).length(),r=1/Js.setFromMatrixColumn(t,1).length(),o=1/Js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*p,g=a*h,y=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*p,g=c*h,y=c*p;e[0]=f+y*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*p,g=c*h,y=c*p;e[0]=f-y*a,e[4]=-o*p,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*p,g=a*h,y=a*p;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+y,e[1]=l*p,e[5]=y*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*p,e[8]=g*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*p+g,e[10]=f-y*p}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+y,e[5]=o*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=a*h,e[10]=y*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(n0,t,i0)}lookAt(t,e,n){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Qi.crossVectors(n,kn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Qi.crossVectors(n,kn)),Qi.normalize(),ha.crossVectors(kn,Qi),s[0]=Qi.x,s[4]=ha.x,s[8]=kn.x,s[1]=Qi.y,s[5]=ha.y,s[9]=kn.y,s[2]=Qi.z,s[6]=ha.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],f=n[9],u=n[13],g=n[2],y=n[6],m=n[10],d=n[14],_=n[3],v=n[7],x=n[11],E=n[15],S=s[0],b=s[4],M=s[8],w=s[12],T=s[1],P=s[5],I=s[9],D=s[13],N=s[2],O=s[6],z=s[10],V=s[14],nt=s[3],$=s[7],it=s[11],et=s[15];return r[0]=o*S+a*T+l*N+c*nt,r[4]=o*b+a*P+l*O+c*$,r[8]=o*M+a*I+l*z+c*it,r[12]=o*w+a*D+l*V+c*et,r[1]=h*S+p*T+f*N+u*nt,r[5]=h*b+p*P+f*O+u*$,r[9]=h*M+p*I+f*z+u*it,r[13]=h*w+p*D+f*V+u*et,r[2]=g*S+y*T+m*N+d*nt,r[6]=g*b+y*P+m*O+d*$,r[10]=g*M+y*I+m*z+d*it,r[14]=g*w+y*D+m*V+d*et,r[3]=_*S+v*T+x*N+E*nt,r[7]=_*b+v*P+x*O+E*$,r[11]=_*M+v*I+x*z+E*it,r[15]=_*w+v*D+x*V+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],u=t[14],g=t[3],y=t[7],m=t[11],d=t[15],_=l*u-c*f,v=a*u-c*p,x=a*f-l*p,E=o*u-c*h,S=o*f-l*h,b=o*p-a*h;return e*(y*_-m*v+d*x)-n*(g*_-m*E+d*S)+s*(g*v-y*E+d*b)-r*(g*x-y*S+m*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],u=t[11],g=t[12],y=t[13],m=t[14],d=t[15],_=e*a-n*o,v=e*l-s*o,x=e*c-r*o,E=n*l-s*a,S=n*c-r*a,b=s*c-r*l,M=h*y-p*g,w=h*m-f*g,T=h*d-u*g,P=p*m-f*y,I=p*d-u*y,D=f*d-u*m,N=_*D-v*I+x*P+E*T-S*w+b*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(a*D-l*I+c*P)*O,t[1]=(s*I-n*D-r*P)*O,t[2]=(y*b-m*S+d*E)*O,t[3]=(f*S-p*b-u*E)*O,t[4]=(l*T-o*D-c*w)*O,t[5]=(e*D-s*T+r*w)*O,t[6]=(m*x-g*b-d*v)*O,t[7]=(h*b-f*x+u*v)*O,t[8]=(o*I-a*T+c*M)*O,t[9]=(n*T-e*I-r*M)*O,t[10]=(g*S-y*x+d*_)*O,t[11]=(p*x-h*S-u*_)*O,t[12]=(a*w-o*P-l*M)*O,t[13]=(e*P-n*w+s*M)*O,t[14]=(y*v-g*E-m*_)*O,t[15]=(h*E-p*v+f*_)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,f=r*c,u=r*h,g=r*p,y=o*h,m=o*p,d=a*p,_=l*c,v=l*h,x=l*p,E=n.x,S=n.y,b=n.z;return s[0]=(1-(y+d))*E,s[1]=(u+x)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(u-x)*S,s[5]=(1-(f+d))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+v)*b,s[9]=(m-_)*b,s[10]=(1-(f+y))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Js.set(s[0],s[1],s[2]).length(),a=Js.set(s[4],s[5],s[6]).length(),l=Js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ii.copy(this);let c=1/o,h=1/a,p=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=p,ii.elements[9]*=p,ii.elements[10]*=p,e.setFromRotationMatrix(ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ai,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===ai)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===gr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ai,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===ai)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===gr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Js=new A,ii=new Rt,n0=new A(0,0,0),i0=new A(1,1,1),Qi=new A,ha=new A,kn=new A,Ad=new Rt,Cd=new Ge,ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},s0=0,Pd=new A,js=new Ge,Ni=new Rt,ua=new A,qr=new A,r0=new A,o0=new Ge,Id=new A(1,0,0),Ld=new A(0,1,0),Dd=new A(0,0,1),Nd={type:"added"},a0={type:"removed"},Qs={type:"childadded",child:null},dh={type:"childremoved",child:null},nn=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new ki,n=new Ge,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new se}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Id,t)}rotateY(t){return this.rotateOnAxis(Ld,t)}rotateZ(t){return this.rotateOnAxis(Dd,t)}translateOnAxis(t,e){return Pd.copy(t).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Id,t)}translateY(t){return this.translateOnAxis(Ld,t)}translateZ(t){return this.translateOnAxis(Dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(qr,ua,this.up):Ni.lookAt(ua,qr,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Ni),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(a0),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,r0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,o0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new A(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},l0={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},da={h:0,s:0,l:0};function fh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=fu(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fh(o,r,t+1/3),this.g=fh(o,r,t),this.b=fh(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return xe.workingToColorSpace(Rn.copy(this),t),Math.round(le(Rn.r*255,0,255))*65536+Math.round(le(Rn.g*255,0,255))*256+Math.round(le(Rn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Fe){xe.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,s=Rn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(da);let n=io(ts.h,da.h,e),s=io(ts.s,da.s,e),r=io(ts.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new ae;ae.NAMES=Vf;var fo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new A,Ui=new A,ph=new A,Fi=new A,tr=new A,er=new A,Ud=new A,mh=new A,gh=new A,xh=new A,_h=new We,yh=new We,vh=new We,Hi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){si.subVectors(s,e),Ui.subVectors(n,e),ph.subVectors(t,e);let o=si.dot(si),a=si.dot(Ui),l=si.dot(ph),c=Ui.dot(Ui),h=Ui.dot(ph),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return _h.setScalar(0),yh.setScalar(0),vh.setScalar(0),_h.fromBufferAttribute(t,e),yh.fromBufferAttribute(t,n),vh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_h,r.x),o.addScaledVector(yh,r.y),o.addScaledVector(vh,r.z),o}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ui.subVectors(t,e),si.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,n),er.subVectors(r,n),mh.subVectors(t,n);let l=tr.dot(mh),c=er.dot(mh);if(l<=0&&c<=0)return e.copy(n);gh.subVectors(t,s);let h=tr.dot(gh),p=er.dot(gh);if(h>=0&&p<=h)return e.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(tr,o);xh.subVectors(t,r);let u=tr.dot(xh),g=er.dot(xh);if(g>=0&&u<=g)return e.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(er,a);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return Ud.subVectors(r,s),a=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(Ud,a);let d=1/(m+y+f);return o=y*d,a=f*d,e.copy(n).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),pa.subVectors(this.max,Yr),nr.subVectors(t.a,Yr),ir.subVectors(t.b,Yr),sr.subVectors(t.c,Yr),es.subVectors(ir,nr),ns.subVectors(sr,ir),ws.subVectors(nr,sr);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-ws.z,ws.y,es.z,0,-es.x,ns.z,0,-ns.x,ws.z,0,-ws.x,-es.y,es.x,0,-ns.y,ns.x,0,-ws.y,ws.x,0];return!Mh(e,nr,ir,sr,pa)||(e=[1,0,0,0,1,0,0,0,1],!Mh(e,nr,ir,sr,pa))?!1:(ma.crossVectors(es,ns),e=[ma.x,ma.y,ma.z],Mh(e,nr,ir,sr,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new A,new A,new A,new A,new A,new A,new A,new A],ri=new A,fa=new Dn,nr=new A,ir=new A,sr=new A,es=new A,ns=new A,ws=new A,Yr=new A,pa=new A,ma=new A,Ts=new A;function Mh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),h=n.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new A,ga=new Q,c0=0,ye=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var po=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},h0=new Dn,$r=new A,Eh=new A,ci=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):h0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(Eh)),this.expandByPoint($r.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},u0=0,Kn=new Rt,Sh=new nn,rr=new A,Vn=new Dn,Zr=new Dn,mn=new A,de=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Um(t)?mo:po)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Vn.min,Zr.min),Vn.expandByPoint(mn),mn.addVectors(Vn.max,Zr.max),Vn.expandByPoint(mn)):(Vn.expandByPoint(Zr.min),Vn.expandByPoint(Zr.max))}Vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(t,c),mn.add(rr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new A,l[M]=new A;let c=new A,h=new A,p=new A,f=new Q,u=new Q,g=new Q,y=new A,m=new A;function d(M,w,T){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,T),f.fromBufferAttribute(r,M),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),h.sub(c),p.sub(c),u.sub(f),g.sub(f);let P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(P),m.copy(p).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(P),a[M].add(y),a[w].add(y),a[T].add(y),l[M].add(m),l[w].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let M=0,w=_.length;M<w;++M){let T=_[M],P=T.start,I=T.count;for(let D=P,N=P+I;D<N;D+=3)d(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new A,x=new A,E=new A,S=new A;function b(M){E.fromBufferAttribute(s,M),S.copy(E);let w=a[M];v.copy(w),v.sub(E.multiplyScalar(E.dot(w))).normalize(),x.crossVectors(S,w);let P=x.dot(l[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,P)}for(let M=0,w=_.length;M<w;++M){let T=_[M],P=T.start,I=T.count;for(let D=P,N=P+I;D<N;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,p=new A;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?u=l[y]*a.data.stride+a.offset:u=l[y]*h;for(let d=0;d<h;d++)f[g++]=c[u++]}return new ye(f,h,p)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,u=p.length;f<u;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},In=new A,Er=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bh=new A,d0=new A,f0=new se,Gn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bh.subVectors(n,e).cross(d0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||f0.getNormalMatrix(t),s=this.coplanarPoint(bh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},p0=0,Si=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ms,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sr=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},or,Kr=new A,ar=new A,lr=new A,cr=new Q,Jr=new Q,Gf=new Rt,xa=new A,jr=new A,_a=new A,Fd=new Q,wh=new Q,Od=new Q,xo=class extends nn{constructor(t=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new go(e,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new Er(n,3,0,!1)),or.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=or,this.material=t,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Gf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ya(xa.set(-.5,-.5,0),lr,o,ar,s,r),ya(jr.set(.5,-.5,0),lr,o,ar,s,r),ya(_a.set(.5,.5,0),lr,o,ar,s,r),Fd.set(0,0),wh.set(1,0),Od.set(1,1);let a=t.ray.intersectTriangle(xa,jr,_a,!1,Kr);if(a===null&&(ya(jr.set(-.5,.5,0),lr,o,ar,s,r),wh.set(0,1),a=t.ray.intersectTriangle(xa,_a,jr,!1,Kr),a===null))return;let l=t.ray.origin.distanceTo(Kr);l<t.near||l>t.far||e.push({distance:l,point:Kr.clone(),uv:Hi.getInterpolation(Kr,xa,jr,_a,Fd,wh,Od,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ya(i,t,e,n,s,r){cr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Jr.x=r*cr.x-s*cr.y,Jr.y=s*cr.x+r*cr.y):Jr.copy(cr),i.copy(t),i.x+=Jr.x,i.y+=Jr.y,i.applyMatrix4(Gf)}var Bi=new A,Th=new A,va=new A,Ma=new A,ss=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Th.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Ma.copy(this.origin).sub(Th);let r=t.distanceTo(e)*.5,o=-this.direction.dot(va),a=Ma.dot(this.direction),l=-Ma.dot(va),c=Ma.lengthSq(),h=Math.abs(1-o*o),p,f,u,g;if(h>0)if(p=o*l-a,f=o*a-l,g=r*h,p>=0)if(f>=-g)if(f<=g){let y=1/h;p*=y,f*=y,u=p*(p+o*f+2*a)+f*(o*p+f+2*l)+c}else f=r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+f*(f+2*l)+c);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Th).addScaledVector(va,f),u}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=t.x-o.x,f=t.y-o.y,u=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,d=n.x-o.x,_=n.y-o.y,v=n.z-o.z,x=Math.abs(l),E=Math.abs(c),S=Math.abs(h),b,M,w,T,P,I,D,N,O,z,V,nt;if(x>=E&&x>=S?(w=l,I=p,O=g,nt=d,l>=0?(b=c,M=h,T=f,P=u,D=y,N=m,z=_,V=v):(b=h,M=c,T=u,P=f,D=m,N=y,z=v,V=_)):E>=S?(w=c,I=f,O=y,nt=_,c>=0?(b=h,M=l,T=u,P=p,D=m,N=g,z=v,V=d):(b=l,M=h,T=p,P=u,D=g,N=m,z=d,V=v)):(w=h,I=u,O=m,nt=v,h>=0?(b=l,M=c,T=p,P=f,D=g,N=y,z=d,V=_):(b=c,M=l,T=f,P=p,D=y,N=g,z=_,V=d)),w===0)return null;let $=b/w,it=M/w,et=1/w,Pt=T-$*I,At=P-it*I,ee=D-$*O,Ht=N-it*O,$t=z-$*nt,U=V-it*nt,k=$t*Ht-U*ee,J=Pt*U-At*$t,ut=ee*At-Ht*Pt;if(s){if(k<0||J<0||ut<0)return null}else if((k<0||J<0||ut<0)&&(k>0||J>0||ut>0))return null;let lt=k+J+ut;if(lt===0)return null;let gt=et*(k*I+J*O+ut*nt);return(lt>0?gt<0:gt>0)?null:this.at(gt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Is=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bd=new Rt,Rs=new ss,Ea=new ci,Hd=new A,Sa=new A,ba=new A,wa=new A,Rh=new A,Ta=new A,zd=new A,Ra=new A,W=class extends nn{constructor(t=new de,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(Rh.fromBufferAttribute(p,t),o?Ta.addScaledVector(Rh,h):Ta.addScaledVector(Rh.sub(e),h))}e.add(Ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(Ea.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ea,Hd)===null||Rs.origin.distanceToSquared(Hd)>(t.far-t.near)**2))&&(Bd.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],_=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let x=_,E=v;x<E;x+=3){let S=a.getX(x),b=a.getX(x+1),M=a.getX(x+2);s=Aa(this,d,t,n,c,h,p,S,b,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let m=g,d=y;m<d;m+=3){let _=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Aa(this,o,t,n,c,h,p,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],_=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let x=_,E=v;x<E;x+=3){let S=x,b=x+1,M=x+2;s=Aa(this,d,t,n,c,h,p,S,b,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let m=g,d=y;m<d;m+=3){let _=m,v=m+1,x=m+2;s=Aa(this,o,t,n,c,h,p,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function m0(i,t,e,n,s,r,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ps,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:i}}function Aa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Sa),i.getVertexPosition(l,ba),i.getVertexPosition(c,wa);let h=m0(i,t,e,n,Sa,ba,wa,zd);if(h){let p=new A;Hi.getBarycoord(zd,Sa,ba,wa,p),s&&(h.uv=Hi.getInterpolatedAttribute(s,a,l,c,p,new Q)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,l,c,p,new Q)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,p,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Hi.getNormal(Sa,ba,wa,f.normal),h.face=f,h.barycoord=p}return h}var _o=class extends Ln{constructor(t=null,e=1,n=1,s,r,o,a,l,c=gn,h=gn,p,f){super(null,o,a,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new Rt,kd=new Rt,Ca=[],Vd=new Dn,g0=new Rt,Qr=new W,to=new ci,sn=class extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,g0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),Vd.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(Vd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),to.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(to)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),t.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),kd.multiplyMatrices(n,hr),Qr.matrixWorld=kd,Qr.raycast(t,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=r,l.object=this,e.push(l)}Ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(s*this.count),s,this.count,wl,Jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new ci,x0=new Q(.5,.5),Pa=new A,br=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],f=r[6],u=r[7],g=r[8],y=r[9],m=r[10],d=r[11],_=r[12],v=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-o,u-h,d-g,E-_).normalize(),s[1].setComponents(c+o,u+h,d+g,E+_).normalize(),s[2].setComponents(c+a,u+p,d+y,E+v).normalize(),s[3].setComponents(c-a,u-p,d-y,E-v).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,u-f,d-m,E-x).normalize();else if(s[4].setComponents(c-l,u-f,d-m,E-x).normalize(),e===ai)s[5].setComponents(c+l,u+f,d+m,E+x).normalize();else if(e===gr)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=x0.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Pa.x=s.normal.x>0?t.max.x:t.min.x,Pa.y=s.normal.y>0?t.max.y:t.min.y,Pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wr=class extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gd=new Rt,Oh=new ss,Ia=new ci,La=new A,yo=class extends nn{constructor(t=new de,e=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;Gd.copy(s).invert(),Oh.copy(t.ray).applyMatrix4(Gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=f,y=u;g<y;g++){let m=c.getX(g);La.fromBufferAttribute(p,m),Wd(La,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let g=f,y=u;g<y;g++)La.fromBufferAttribute(p,g),Wd(La,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wd(i,t,e,n,s,r,o){let a=Oh.distanceSqToPoint(i);if(a<e){let l=new A;Oh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var vo=class extends Ln{constructor(t=[],e=gs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xn=class extends Ln{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class extends Ln{constructor(t,e,n=di,s,r,o,a=gn,l=gn,c,h=Ei,p=1){if(h!==Ei&&h!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends rs{constructor(t,e=di,n=gs,s,r,o=gn,a=gn,l,c=Ei){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mo=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kt=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(p,2));function g(y,m,d,_,v,x,E,S,b,M,w){let T=x/b,P=E/M,I=x/2,D=E/2,N=S/2,O=b+1,z=M+1,V=0,nt=0,$=new A;for(let it=0;it<z;it++){let et=it*P-D;for(let Pt=0;Pt<O;Pt++){let At=Pt*T-I;$[y]=At*_,$[m]=et*v,$[d]=N,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[d]=S>0?1:-1,h.push($.x,$.y,$.z),p.push(Pt/b),p.push(1-it/M),V+=1}}for(let it=0;it<M;it++)for(let et=0;et<b;et++){let Pt=f+et+O*it,At=f+et+O*(it+1),ee=f+(et+1)+O*(it+1),Ht=f+(et+1)+O*it;l.push(Pt,At,Ht),l.push(At,ee,Ht),nt+=6}a.addGroup(u,nt,w),u+=nt,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oe=class i extends de{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,p=Math.PI/2*t,f=e,u=2*p+f,g=n*2+r,y=s+1,m=new A,d=new A;for(let _=0;_<=g;_++){let v=0,x=0,E=0,S=0;if(_<=n){let w=_/n,T=w*Math.PI/2;x=-h-t*Math.cos(T),E=t*Math.sin(T),S=-t*Math.cos(T),v=w*p}else if(_<=n+r){let w=(_-n)/r;x=-h+w*e,E=t,S=0,v=p+w*f}else{let w=(_-n-r)/n,T=w*Math.PI/2;x=h+t*Math.sin(T),E=t*Math.cos(T),S=t*Math.sin(T),v=p+f+w*p}let b=Math.max(0,Math.min(1,v/u)),M=0;_===0?M=.5/s:_===g&&(M=-.5/s);for(let w=0;w<=s;w++){let T=w/s,P=T*Math.PI*2,I=Math.sin(P),D=Math.cos(P);d.x=-E*D,d.y=x,d.z=E*I,a.push(d.x,d.y,d.z),m.set(-E*D,S,E*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+M,b)}if(_>0){let w=(_-1)*y;for(let T=0;T<s;T++){let P=w+T,I=w+T+1,D=_*y+T,N=_*y+T+1;o.push(P,I,D),o.push(I,N,D)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ls=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){let u=n+p/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zt=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],u=[],g=0,y=[],m=n/2,d=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(u,2));function _(){let x=new A,E=new A,S=0,b=(e-t)/n;for(let M=0;M<=r;M++){let w=[],T=M/r,P=T*(e-t)+t;for(let I=0;I<=s;I++){let D=I/s,N=D*l+a,O=Math.sin(N),z=Math.cos(N);E.x=P*O,E.y=-T*n+m,E.z=P*z,p.push(E.x,E.y,E.z),x.set(O,b,z).normalize(),f.push(x.x,x.y,x.z),u.push(D,1-T),w.push(g++)}y.push(w)}for(let M=0;M<s;M++)for(let w=0;w<r;w++){let T=y[w][M],P=y[w+1][M],I=y[w+1][M+1],D=y[w][M+1];(t>0||w!==0)&&(h.push(T,P,D),S+=3),(e>0||w!==r-1)&&(h.push(P,I,D),S+=3)}c.addGroup(d,S,0),d+=S}function v(x){let E=g,S=new Q,b=new A,M=0,w=x===!0?t:e,T=x===!0?1:-1;for(let I=1;I<=s;I++)p.push(0,m*T,0),f.push(0,T,0),u.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let N=I/s*l+a,O=Math.cos(N),z=Math.sin(N);b.x=w*z,b.y=m*T,b.z=w*O,p.push(b.x,b.y,b.z),f.push(0,T,0),S.x=O*.5+.5,S.y=z*.5*T+.5,u.push(S.x,S.y),g++}for(let I=0;I<s;I++){let D=E+I,N=P+I;x===!0?h.push(N,N+1,D):h.push(N+1,N,D),M+=3}c.addGroup(d,M,x===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},os=class i extends Zt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Q:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,s=[],r=[],o=[],a=new A,l=new Rt;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(le(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Tr=class extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*p+this.aX,c=f*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ja=class extends Tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+p)+(l-a)/p;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xd=new A,qd=new A,Ah=new pu,Ch=new pu,Ph=new pu,hn=class extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qd.subVectors(s[0],s[1]).add(s[0]),c=qd);let p=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),u),y=Math.pow(p.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ah.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,g,y,m),Ch.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,g,y,m),Ph.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Ch.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),Ph.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return n.set(Ah.calc(l),Ch.calc(l),Ph.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function _0(i,t){let e=1-i;return e*e*t}function y0(i,t){return 2*(1-i)*i*t}function v0(i,t){return i*i*t}function so(i,t,e,n){return _0(i,t)+y0(i,e)+v0(i,n)}function M0(i,t){let e=1-i;return e*e*e*t}function E0(i,t){let e=1-i;return 3*e*e*i*t}function S0(i,t){return 3*(1-i)*i*i*t}function b0(i,t){return i*i*i*t}function ro(i,t,e,n,s){return M0(i,t)+E0(i,e)+S0(i,n)+b0(i,s)}var Eo=class extends Xn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(t,s.x,r.x,o.x,a.x),ro(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qa=class extends Xn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(t,s.x,r.x,o.x,a.x),ro(t,s.y,r.y,o.y,a.y),ro(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends Xn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Xn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Xn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(so(t,s.x,r.x,o.x),so(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},as=class extends Xn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(so(t,s.x,r.x,o.x),so(t,s.y,r.y,o.y),so(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Yd(a,l.x,c.x,h.x,p.x),Yd(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Q().fromArray(s))}return this}},el=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:hn,CubicBezierCurve:Eo,CubicBezierCurve3:Qa,EllipseCurve:Tr,LineCurve:So,LineCurve3:tl,QuadraticBezierCurve:bo,QuadraticBezierCurve3:as,SplineCurve:wo}),nl=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new el[s.type]().fromJSON(s))}return this}},Ds=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new bo(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Eo(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Tr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ke=class extends Ds{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ds().fromJSON(s))}return this}};function w0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=P0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,p=l;for(let f=e;f<s;f+=e){let u=i[f],g=i[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return To(r,o,e,a,l,c,0),o}function Wf(i,t,e,n,s){let r;if(s===k0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=$d(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=$d(o/n|0,i[o],i[o+1],r);return r&&Rr(r,r.next)&&(Ao(r),r=r.next),r}function Ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||Ye(e.prev,e,e.next)===0)){if(Ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function To(i,t,e,n,s,r,o){if(!i)return;!o&&r&&U0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?R0(i,n,s,r):T0(i)){t.push(l.i,i.i,c.i),Ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=A0(Ns(i),t),To(i,t,e,n,s,r,2)):o===2&&C0(i,t,e,n,s,r):To(Ns(i),t,e,n,s,r,1);break}}}function T0(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),p=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=p&&g.y<=u&&eo(s,a,r,l,o,c,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,p,f),y=Math.max(a,l,c),m=Math.max(h,p,f),d=Bh(u,g,t,e,n),_=Bh(y,m,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=d&&x&&x.z<=_;){if(v.x>=u&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&eo(a,h,l,p,c,f,v.x,v.y)&&Ye(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=u&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&eo(a,h,l,p,c,f,x.x,x.y)&&Ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=u&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&eo(a,h,l,p,c,f,v.x,v.y)&&Ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=u&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&eo(a,h,l,p,c,f,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function A0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Rr(n,s)&&qf(n,e,e.next,s)&&Ro(n,s)&&Ro(s,n)&&(t.push(n.i,e.i,s.i),Ao(e),Ao(e.next),e=i=s),e=e.next}while(e!==i);return Ns(e)}function C0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&B0(o,a)){let l=Yf(o,a);o=Ns(o,o.next),l=Ns(l,l.next),To(o,t,e,n,s,r,0),To(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function P0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Wf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(O0(c))}s.sort(I0);for(let r=0;r<s.length;r++)e=L0(s[r],e);return e}function I0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function L0(i,t){let e=D0(i,t);if(!e)return t;let n=Yf(e,i);return Ns(n,n.next),Ns(e,e.next)}function D0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Rr(i,e))return e;do{if(Rr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Xf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Ro(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&N0(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function N0(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function U0(i,t,e,n){let s=i;do s.z===0&&(s.z=Bh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,F0(s)}function F0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function eo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Xf(i,t,e,n,s,r,o,a)}function B0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!H0(i,t)&&(Ro(i,t)&&Ro(t,i)&&z0(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Rr(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rr(i,t){return i.x===t.x&&i.y===t.y}function qf(i,t,e,n){let s=Na(Ye(i,t,e)),r=Na(Ye(i,t,n)),o=Na(Ye(e,n,i)),a=Na(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Da(i,e,t)||r===0&&Da(i,n,t)||o===0&&Da(e,i,n)||a===0&&Da(e,t,n))}function Da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function H0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ro(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function z0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yf(i,t){let e=Hh(i.i,i.x,i.y),n=Hh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $d(i,t,e,n){let s=Hh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var zh=class{static triangulate(t,e,n=2){return w0(t,e,n)}},vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zd(t),Kd(n,t);let o=t.length;e.forEach(Zd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kd(n,e[l]);let a=zh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Zd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sn=class i extends de{constructor(t=new Ke([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:V0,v,x=!1,E,S,b,M;if(d){v=d.getSpacedPoints(h),x=!0,f=!1;let K=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(h,K),S=new A,b=new A,M=new A}f||(m=0,u=0,g=0,y=0);let w=a.extractPoints(c),T=w.shape,P=w.holes;if(!vi.isClockWise(T)){T=T.reverse();for(let K=0,st=P.length;K<st;K++){let ot=P[K];vi.isClockWise(ot)&&(P[K]=ot.reverse())}}function D(K){let ot=10000000000000001e-36,ht=K[0];for(let dt=1;dt<=K.length;dt++){let Vt=dt%K.length,Ut=K[Vt],qt=Ut.x-ht.x,ne=Ut.y-ht.y,F=qt*qt+ne*ne,Se=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(ht.x),Math.abs(ht.y)),me=ot*Se*Se;if(F<=me){K.splice(Vt,1),dt--;continue}ht=Ut}}D(T),P.forEach(D);let N=P.length,O=T;for(let K=0;K<N;K++){let st=P[K];T=T.concat(st)}function z(K,st,ot){return st||Qt("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,ot)}let V=T.length;function nt(K,st,ot){let ht,dt,Vt,Ut=K.x-st.x,qt=K.y-st.y,ne=ot.x-K.x,F=ot.y-K.y,Se=Ut*Ut+qt*qt,me=Ut*F-qt*ne;if(Math.abs(me)>Number.EPSILON){let L=Math.sqrt(Se),R=Math.sqrt(ne*ne+F*F),G=st.x-qt/L,Y=st.y+Ut/L,j=ot.x-F/R,pt=ot.y+ne/R,xt=((j-G)*F-(pt-Y)*ne)/(Ut*F-qt*ne);ht=G+Ut*xt-K.x,dt=Y+qt*xt-K.y;let tt=ht*ht+dt*dt;if(tt<=2)return new Q(ht,dt);Vt=Math.sqrt(tt/2)}else{let L=!1;Ut>Number.EPSILON?ne>Number.EPSILON&&(L=!0):Ut<-Number.EPSILON?ne<-Number.EPSILON&&(L=!0):Math.sign(qt)===Math.sign(F)&&(L=!0),L?(ht=-qt,dt=Ut,Vt=Math.sqrt(Se)):(ht=Ut,dt=qt,Vt=Math.sqrt(Se/2))}return new Q(ht/Vt,dt/Vt)}let $=[];for(let K=0,st=O.length,ot=st-1,ht=K+1;K<st;K++,ot++,ht++)ot===st&&(ot=0),ht===st&&(ht=0),$[K]=nt(O[K],O[ot],O[ht]);let it=[],et,Pt=$.concat();for(let K=0,st=N;K<st;K++){let ot=P[K];et=[];for(let ht=0,dt=ot.length,Vt=dt-1,Ut=ht+1;ht<dt;ht++,Vt++,Ut++)Vt===dt&&(Vt=0),Ut===dt&&(Ut=0),et[ht]=nt(ot[ht],ot[Vt],ot[Ut]);it.push(et),Pt=Pt.concat(et)}let At;if(m===0)At=vi.triangulateShape(O,P);else{let K=[],st=[];for(let ot=0;ot<m;ot++){let ht=ot/m,dt=u*Math.cos(ht*Math.PI/2),Vt=g*Math.sin(ht*Math.PI/2)+y;for(let Ut=0,qt=O.length;Ut<qt;Ut++){let ne=z(O[Ut],$[Ut],Vt);J(ne.x,ne.y,-dt),ht===0&&K.push(ne)}for(let Ut=0,qt=N;Ut<qt;Ut++){let ne=P[Ut];et=it[Ut];let F=[];for(let Se=0,me=ne.length;Se<me;Se++){let L=z(ne[Se],et[Se],Vt);J(L.x,L.y,-dt),ht===0&&F.push(L)}ht===0&&st.push(F)}}At=vi.triangulateShape(K,st)}let ee=At.length,Ht=g+y;for(let K=0;K<V;K++){let st=f?z(T[K],Pt[K],Ht):T[K];x?(b.copy(E.normals[0]).multiplyScalar(st.x),S.copy(E.binormals[0]).multiplyScalar(st.y),M.copy(v[0]).add(b).add(S),J(M.x,M.y,M.z)):J(st.x,st.y,0)}for(let K=1;K<=h;K++)for(let st=0;st<V;st++){let ot=f?z(T[st],Pt[st],Ht):T[st];x?(b.copy(E.normals[K]).multiplyScalar(ot.x),S.copy(E.binormals[K]).multiplyScalar(ot.y),M.copy(v[K]).add(b).add(S),J(M.x,M.y,M.z)):J(ot.x,ot.y,p/h*K)}for(let K=m-1;K>=0;K--){let st=K/m,ot=u*Math.cos(st*Math.PI/2),ht=g*Math.sin(st*Math.PI/2)+y;for(let dt=0,Vt=O.length;dt<Vt;dt++){let Ut=z(O[dt],$[dt],ht);J(Ut.x,Ut.y,p+ot)}for(let dt=0,Vt=P.length;dt<Vt;dt++){let Ut=P[dt];et=it[dt];for(let qt=0,ne=Ut.length;qt<ne;qt++){let F=z(Ut[qt],et[qt],ht);x?J(F.x,F.y+v[h-1].y,v[h-1].x+ot):J(F.x,F.y,p+ot)}}}$t(),U();function $t(){let K=s.length/3;if(f){let st=0,ot=V*st;for(let ht=0;ht<ee;ht++){let dt=At[ht];ut(dt[2]+ot,dt[1]+ot,dt[0]+ot)}st=h+m*2,ot=V*st;for(let ht=0;ht<ee;ht++){let dt=At[ht];ut(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let st=0;st<ee;st++){let ot=At[st];ut(ot[2],ot[1],ot[0])}for(let st=0;st<ee;st++){let ot=At[st];ut(ot[0]+V*h,ot[1]+V*h,ot[2]+V*h)}}n.addGroup(K,s.length/3-K,0)}function U(){let K=s.length/3,st=0;k(O,st),st+=O.length;for(let ot=0,ht=P.length;ot<ht;ot++){let dt=P[ot];k(dt,st),st+=dt.length}n.addGroup(K,s.length/3-K,1)}function k(K,st){let ot=K.length;for(;--ot>=0;){let ht=ot,dt=ot-1;dt<0&&(dt=K.length-1);for(let Vt=0,Ut=h+m*2;Vt<Ut;Vt++){let qt=V*Vt,ne=V*(Vt+1),F=st+ht+qt,Se=st+dt+qt,me=st+dt+ne,L=st+ht+ne;lt(F,Se,me,L)}}}function J(K,st,ot){l.push(K),l.push(st),l.push(ot)}function ut(K,st,ot){gt(K),gt(st),gt(ot);let ht=s.length/3,dt=_.generateTopUV(n,s,ht-3,ht-2,ht-1);Xt(dt[0]),Xt(dt[1]),Xt(dt[2])}function lt(K,st,ot,ht){gt(K),gt(st),gt(ht),gt(st),gt(ot),gt(ht);let dt=s.length/3,Vt=_.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);Xt(Vt[0]),Xt(Vt[1]),Xt(Vt[3]),Xt(Vt[1]),Xt(Vt[2]),Xt(Vt[3])}function gt(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Xt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return G0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new el[s.type]().fromJSON(s)),new i(n,t.options)}},V0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-p),new Q(f,1-g),new Q(y,1-d)]:[new Q(a,1-l),new Q(h,1-p),new Q(u,1-g),new Q(m,1-d)]}};function G0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _n=class i extends de{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new A,f=new Q,u=new A,g=new A,y=new A,m=0,d=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,u.x=d*1,u.y=-m,u.z=d*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,u.x=d*1,u.y=-m,u.z=d*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(g)}for(let _=0;_<=e;_++){let v=n+_*h*s,x=Math.sin(v),E=Math.cos(v);for(let S=0;S<=t.length-1;S++){p.x=t[S].x*x,p.y=t[S].y,p.z=t[S].x*E,o.push(p.x,p.y,p.z),f.x=_/e,f.y=S/(t.length-1),a.push(f.x,f.y);let b=l[3*S+0]*x,M=l[3*S+1],w=l[3*S+0]*E;c.push(b,M,w)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let x=v+_*t.length,E=x,S=x+t.length,b=x+t.length+1,M=x+1;r.push(E,S,M),r.push(b,M,S)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var hi=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,f=e/l,u=[],g=[],y=[],m=[];for(let d=0;d<h;d++){let _=d*f-o;for(let v=0;v<c;v++){let x=v*p-r;g.push(x,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){let v=_+c*d,x=_+c*(d+1),E=_+1+c*(d+1),S=_+1+c*d;u.push(v,x,S),u.push(x,E,S)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ar=class i extends de{constructor(t=new Ke([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function c(h){let p=s.length/3,f=h.extractPoints(e),u=f.shape,g=f.holes;vi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,d=g.length;m<d;m++){let _=g[m];vi.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=vi.triangulateShape(u,g);for(let m=0,d=g.length;m<d;m++){let _=g[m];u=u.concat(_)}for(let m=0,d=u.length;m<d;m++){let _=u[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,d=y.length;m<d;m++){let _=y[m],v=_[0]+p,x=_[1]+p,E=_[2]+p;n.push(v,x,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return W0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function W0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var fe=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new A,f=new A,u=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let _=[],v=d/n,x=o+v*a,E=t*Math.cos(x),S=Math.sqrt(t*t-E*E),b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let M=0;M<=e;M++){let w=M/e,T=s+w*r;p.x=-S*Math.cos(T),p.y=E,p.z=S*Math.sin(T),g.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),m.push(w+b,1-v),_.push(c++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let v=h[d][_+1],x=h[d][_],E=h[d+1][_],S=h[d+1][_+1];(d!==0||o>0)&&u.push(v,x,S),(d!==n-1||l<Math.PI)&&u.push(x,E,S)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Me=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],f=new A,u=new A,g=new A;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let d=0;d<=s;d++){let _=d/s*r;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),p.push(d/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let d=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,v=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(d,_,x),l.push(_,v,x)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var un=class i extends de{constructor(t=new as(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new Q,h=new A,p=[],f=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(u,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),_(),d()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],E=o.binormals[v];for(let S=0;S<=s;S++){let b=S/s*Math.PI*2,M=Math.sin(b),w=-Math.cos(b);l.x=w*x.x+M*E.x,l.y=w*x.y+M*E.y,l.z=w*x.z+M*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let E=(s+1)*(v-1)+(x-1),S=(s+1)*v+(x-1),b=(s+1)*v+x,M=(s+1)*(v-1)+x;g.push(E,S,M),g.push(S,b,M)}}function _(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new el[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Jd(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Jd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){let t={};for(let e=0;e<i.length;e++){let n=Bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function X0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Hs={clone:Bs,merge:An},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},il=class extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},re=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sl=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ih(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=t,a=2*e-n;break;case Fh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:o=t,l=2*n-e;break;case Fh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-u)*m+(1.5+u)*y+.5*g,x=u*m-u*y;for(let E=0;E!==a;++E)r[E]=d*o[h+E]+_*o[c+E]+v*o[l+E]+x*o[p+E];return r}},al=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*p+o[l+f]*h;return r}},ll=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends ls{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let f=a*2,u=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],d=u*f+g*2,_=p[d],v=p[d+1],x=t*f+g*2,E=h[x],S=h[x+1],b=Z0(n,e,_,E,s);r[g]=$f(b,y,v,S,m)}return r}};function $f(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Z0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=$f(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=$0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ih(t.settings)&&(n.settings={inTangents:ur(t.settings.inTangents,Array),outTangents:ur(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break;case Dh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ih(this.settings)&&(jd(this.settings.inTangents,t),jd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,f=p-n,u=p+n;for(let g=0;g!==n;++g){let y=e[p+g];if(y!==e[f+g]||y!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[p+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ya;var cs=class extends qn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=oo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};hl.prototype.ValueTypeName="color";var ul=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};ul.prototype.ValueTypeName="number";var dl=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ge.slerpFlat(r,0,o,c-a,o,c,l);return r}},Co=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends qn{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=oo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Po=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Lh=new Rt,Qd=new A,tf=new A,Io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qd),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Lh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ua=new A,Fa=new Ge,_i=new A,Lo=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Fa,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ua,Fa,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new A,ef=new Q,nf=new Q,Mn=class extends Lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,ef,nf),e.subVectors(nf,ef)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kh=class extends Io{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}},Us=class extends Cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},us=class extends Lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vh=class extends Io{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var No=class extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var dr=-90,fr=1,gl=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(dr,fr,t,e);s.layers=this.layers,this.add(s);let r=new Mn(dr,fr,t,e);r.layers=this.layers,this.add(r);let o=new Mn(dr,fr,t,e);o.layers=this.layers,this.add(o);let a=new Mn(dr,fr,t,e);a.layers=this.layers,this.add(a);let l=new Mn(dr,fr,t,e);l.layers=this.layers,this.add(l);let c=new Mn(dr,fr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xl=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gu="\\[\\]\\.:\\/",K0=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",J0="[^"+gu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",xu),Q0=/(WCOD+)?/.source.replace("WCOD",J0),tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),ng=new RegExp("^"+j0+Q0+tg+eg+"$"),ig=["material","materials","bones","map"],Gh=class{constructor(t,e,n){let s=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(t){let e=ng.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Gh;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vM=new Float32Array(1);var sf=new Rt,Uo=class{constructor(t,e,n=0,s=1/0){this.ray=new ss(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(t,e=!0,n=[]){return Wh(t,this,n,e),n.sort(rf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wh(t[s],this,n,e);return n.sort(rf),n}};function rf(i,t){return i.distance-t.distance}function Wh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Wh(r[o],t,e,!0)}}var Fo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Pr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Oo=class extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function _u(i,t,e,n){let s=sg(n);switch(e){case cu:return i*t;case wl:return i*t/s.components*s.byteLength;case Tl:return i*t/s.components*s.byteLength;case ys:return i*t*2/s.components*s.byteLength;case Rl:return i*t*2/s.components*s.byteLength;case hu:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Al:return i*t*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Ll:return Math.max(i,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(i,8)*Math.max(t,8)/2;case Dl:case Nl:case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ul:case Yo:case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ql:case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sg(i){switch(i){case Fn:case ru:return{byteLength:1,components:1};case Lr:case ou:case fi:return{byteLength:2,components:1};case Sl:case bl:return{byteLength:2,components:4};case di:case El:case Jn:return{byteLength:4,components:1};case au:case lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<p.length;u++){let g=p[f],y=p[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,p[f]=y)}p.length=f+1;for(let u=0,g=p.length;u<g;u++){let y=p[u];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ug=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,lx=`uniform sampler2D dfgLUT;
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
}`,cx=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
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
}`,x_=`#if DEPTH_PACKING == 3200
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
}`,__=`#define DISTANCE
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
}`,y_=`#define DISTANCE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,T_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,C_=`#define MATCAP
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
}`,P_=`#define NORMAL
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
}`,I_=`#define NORMAL
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
}`,L_=`#define PHONG
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
}`,D_=`#define PHONG
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
}`,N_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,F_=`#define TOON
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
}`,O_=`#define TOON
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
}`,B_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,V_=`uniform float rotation;
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
}`,G_=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:hg,alphahash_pars_fragment:ug,alphamap_fragment:dg,alphamap_pars_fragment:fg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:xg,batching_pars_vertex:_g,batching_vertex:yg,begin_vertex:vg,beginnormal_vertex:Mg,bsdfs:Eg,iridescence_fragment:Sg,bumpmap_pars_fragment:bg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Rg,clipping_planes_vertex:Ag,color_fragment:Cg,color_pars_fragment:Pg,color_pars_vertex:Ig,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Fg,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:Hg,colorspace_fragment:zg,colorspace_pars_fragment:kg,envmap_fragment:Vg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:nx,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:$g,fog_fragment:Zg,fog_pars_fragment:Kg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:tx,lights_pars_begin:ex,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:hx,lights_fragment_end:ux,lightprobes_pars_fragment:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:xx,map_pars_fragment:_x,map_particle_fragment:yx,map_particle_pars_fragment:vx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Sx,morphcolor_vertex:bx,morphnormal_vertex:wx,morphtarget_pars_vertex:Tx,morphtarget_vertex:Rx,normal_fragment_begin:Ax,normal_fragment_maps:Cx,normal_pars_fragment:Px,normal_pars_vertex:Ix,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Fx,iridescence_pars_fragment:Ox,opaque_fragment:Bx,packing:Hx,premultiplied_alpha_fragment:zx,project_vertex:kx,dithering_fragment:Vx,dithering_pars_fragment:Gx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:Yx,shadowmap_vertex:$x,shadowmask_pars_fragment:Zx,skinbase_vertex:Kx,skinning_pars_vertex:Jx,skinning_vertex:jx,skinnormal_vertex:Qx,specularmap_fragment:t_,specularmap_pars_fragment:e_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:o_,uv_pars_vertex:a_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:x_,distance_vert:__,distance_frag:y_,equirect_vert:v_,equirect_frag:M_,linedashed_vert:E_,linedashed_frag:S_,meshbasic_vert:b_,meshbasic_frag:w_,meshlambert_vert:T_,meshlambert_frag:R_,meshmatcap_vert:A_,meshmatcap_frag:C_,meshnormal_vert:P_,meshnormal_frag:I_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:F_,meshtoon_frag:O_,points_vert:B_,points_frag:H_,shadow_vert:z_,shadow_frag:k_,sprite_vert:V_,sprite_frag:G_},_t={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:An([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:An([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:An([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:An([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:An([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ae(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:An([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:An([_t.points,_t.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:An([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:An([_t.common,_t.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:An([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:An([_t.sprite,_t.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:An([_t.common,_t.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:An([_t.lights,_t.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ti.physical={uniforms:An([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var cc={r:0,b:0,g:0},W_=new Rt,_p=new se;_p.set(-1,0,0,0,1,0,0,0,1);function X_(i,t,e,n,s,r){let o=new ae(0),a=s===!0?0:1,l,c,h=null,p=0,f=null;function u(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let x=_.backgroundBlurriness>0;v=t.get(v,x)}return v}function g(_){let v=!1,x=u(_);x===null?m(o,a):x&&x.isColor&&(m(x,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,v){let x=u(v);x&&(x.isCubeTexture||x.mapping===ko)?(c===void 0&&(c=new W(new kt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Bs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(v.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_p),c.material.toneMapped=xe.getTransfer(x.colorSpace)!==Te,(h!==x||p!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new W(new hi(2,2),new yn({name:"BackgroundMaterial",uniforms:Bs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=xe.getTransfer(x.colorSpace)!==Te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(cc,mu(i)),e.buffers.color.setClear(cc.r,cc.g,cc.b,v,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:y,dispose:d}}function q_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,I,D,N,O){let z=!1,V=p(P,N,D,I);r!==V&&(r=V,c(r.object)),z=u(P,N,D,O),z&&g(P,N,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(P,I,D,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function p(P,I,D,N){let O=N.wireframe===!0,z=n[I.id];z===void 0&&(z={},n[I.id]=z);let V=P.isInstancedMesh===!0?P.id:0,nt=z[V];nt===void 0&&(nt={},z[V]=nt);let $=nt[D.id];$===void 0&&($={},nt[D.id]=$);let it=$[O];return it===void 0&&(it=f(l()),$[O]=it),it}function f(P){let I=[],D=[],N=[];for(let O=0;O<e;O++)I[O]=0,D[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:N,object:P,attributes:{},index:null}}function u(P,I,D,N){let O=r.attributes,z=I.attributes,V=0,nt=D.getAttributes();for(let $ in nt)if(nt[$].location>=0){let et=O[$],Pt=z[$];if(Pt===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Pt=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Pt=P.instanceColor)),et===void 0||et.attribute!==Pt||Pt&&et.data!==Pt.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function g(P,I,D,N){let O={},z=I.attributes,V=0,nt=D.getAttributes();for(let $ in nt)if(nt[$].location>=0){let et=z[$];et===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let Pt={};Pt.attribute=et,et&&et.data&&(Pt.data=et.data),O[$]=Pt,V++}r.attributes=O,r.attributesNum=V,r.index=N}function y(){let P=r.newAttributes;for(let I=0,D=P.length;I<D;I++)P[I]=0}function m(P){d(P,0)}function d(P,I){let D=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;D[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),O[P]!==I&&(i.vertexAttribDivisor(P,I),O[P]=I)}function _(){let P=r.newAttributes,I=r.enabledAttributes;for(let D=0,N=I.length;D<N;D++)I[D]!==P[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function v(P,I,D,N,O,z,V){V===!0?i.vertexAttribIPointer(P,I,D,O,z):i.vertexAttribPointer(P,I,D,N,O,z)}function x(P,I,D,N){y();let O=N.attributes,z=D.getAttributes(),V=I.defaultAttributeValues;for(let nt in z){let $=z[nt];if($.location>=0){let it=O[nt];if(it===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),it!==void 0){let et=it.normalized,Pt=it.itemSize,At=t.get(it);if(At===void 0)continue;let ee=At.buffer,Ht=At.type,$t=At.bytesPerElement,U=Ht===i.INT||Ht===i.UNSIGNED_INT||it.gpuType===El;if(it.isInterleavedBufferAttribute){let k=it.data,J=k.stride,ut=it.offset;if(k.isInstancedInterleavedBuffer){for(let lt=0;lt<$.locationSize;lt++)d($.location+lt,k.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let lt=0;lt<$.locationSize;lt++)m($.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let lt=0;lt<$.locationSize;lt++)v($.location+lt,Pt/$.locationSize,Ht,et,J*$t,(ut+Pt/$.locationSize*lt)*$t,U)}else{if(it.isInstancedBufferAttribute){for(let k=0;k<$.locationSize;k++)d($.location+k,it.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let k=0;k<$.locationSize;k++)m($.location+k);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let k=0;k<$.locationSize;k++)v($.location+k,Pt/$.locationSize,Ht,et,Pt*$t,Pt/$.locationSize*k*$t,U)}}else if(V!==void 0){let et=V[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv($.location,et);break;case 3:i.vertexAttrib3fv($.location,et);break;case 4:i.vertexAttrib4fv($.location,et);break;default:i.vertexAttrib1fv($.location,et)}}}}_()}function E(){w();for(let P in n){let I=n[P];for(let D in I){let N=I[D];for(let O in N){let z=N[O];for(let V in z)h(z[V].object),delete z[V];delete N[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let D in I){let N=I[D];for(let O in N){let z=N[O];for(let V in z)h(z[V].object),delete z[V];delete N[O]}}delete n[P.id]}function b(P){for(let I in n){let D=n[I];for(let N in D){let O=D[N];if(O[P.id]===void 0)continue;let z=O[P.id];for(let V in z)h(z[V].object),delete z[V];delete O[P.id]}}}function M(P){for(let I in n){let D=n[I],N=P.isInstancedMesh===!0?P.id:0,O=D[N];if(O!==void 0){for(let z in O){let V=O[z];for(let nt in V)h(V[nt].object),delete V[nt];delete O[z]}delete D[N],Object.keys(D).length===0&&delete n[I]}}}function w(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function Y_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==jn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let M=b===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Fn&&b!==Jn&&!M&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,maxSamples:E,samples:S}}function Z_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Gn,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let u=p.length!==0||f||n!==0||s;return s=f,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,u){let g=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,x=d.clippingState||null;l.value=x,x=h(g,f,v,u);for(let E=0;E!==v;++E)x[E]=e[E];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,u,g){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let d=u+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=u;v!==y;++v,x+=4)o.copy(p[v]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Ur=4,K_=6,J_=20,j_=256,Zo=new us,Kf=new ae,yu=null,vu=0,Mu=0,Eu=!1,Q_=new A,zs=new A,Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Q_}=r;yu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yu,vu,Mu),this._renderer.xr.enabled=Eu,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:fi,format:jn,colorSpace:ao,depthBuffer:!1},s=Jf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ty(r)),this._blurMaterial=ny(r,t,e),this._ggxMaterial=ey(r,t,e)}return s}_compileMaterial(t){let e=new W(new de,t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,s,r){let l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,u=p.toneMapping;p.getClearColor(Kf),p.toneMapping=ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new kt,new Is({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,d=!0):(m.color.copy(Kf),d=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let E=this._cubeSize;Nr(s,x*E,v>2?E:0,E,E),p.setRenderTarget(s),d&&p.render(y,l),p.render(t,l)}p.toneMapping=u,p.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=c*1.25,u=p*f,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ur?n-g+Ur:0),d=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-e,Nr(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(a,Zo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Nr(t,m,d,3*y,2*y),s.setRenderTarget(t),s.render(a,Zo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ur?s-this._lodMax+Ur:0),f=4*(this._cubeSize-h);Nr(e,p,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Zo)}};function ty(i){let t=[],e=[],n=i,s=i-Ur+1+K_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,f=6,u=3,g=new Float32Array(u*f*p),y=new Float32Array(u*f*p);for(let d=0;d<p;d++){let _=d%3*2/3-1,v=d>2?0:-1,x=[_,v,0,_+2/3,v,0,_+2/3,v+1,0,_,v,0,_+2/3,v+1,0,_,v+1,0];g.set(x,u*f*d);for(let E=0;E<f;E++){let S=h[E*2]*2-1,b=h[E*2+1]*2-1;d===0?zs.set(1,b,S):d===1?zs.set(-S,1,-b):d===2?zs.set(-S,b,1):d===3?zs.set(-1,b,-S):d===4?zs.set(-S,-1,b):zs.set(S,b,-1),zs.toArray(y,(d*f+E)*u)}}let m=new de;m.setAttribute("position",new ye(g,u)),m.setAttribute("outputDirection",new ye(y,u)),e.push(new W(m,null)),n>Ur&&n--}return{lodMeshes:e,sizeLods:t}}function Jf(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ey(i,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ny(i,t,e){return new yn({name:"SphericalGaussianBlur",defines:{SAMPLES:J_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function jf(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Qf(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uc=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:bi});r.uniforms.tEquirect.value=e;let o=new W(s,r),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=En),new gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function iy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===yl||u===vl)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new uc(g.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,g=u===yl||u===vl,y=u===gs||u===Os;if(g||y){let m=e.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Or(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return g&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new Or(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===yl?f.mapping=gs:u===vl&&(f.mapping=Os),f}function l(f){let u=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&u++;return u===g}function c(f){let u=f.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function sy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function ry(i,t,e,n){let s={},r=new WeakMap;function o(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(p){let f=p.attributes;for(let u in f)t.update(f[u],i.ARRAY_BUFFER)}function c(p){let f=[],u=p.index,g=p.attributes.position,y=0;if(g===void 0)return;if(u!==null){let _=u.array;y=u.version;for(let v=0,x=_.length;v<x;v+=3){let E=_[v+0],S=_[v+1],b=_[v+2];f.push(E,S,S,b,b,E)}}else{let _=g.array;y=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let E=v+0,S=v+1,b=v+2;f.push(E,S,S,b,b,E)}}let m=new(g.count>=65535?mo:po)(f,1);m.version=y;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function h(p){let f=r.get(p);if(f){let u=p.index;u!==null&&f.version<u.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function oy(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function c(p,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,p*o,u),e.update(f,n,u))}function h(p,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,u);let y=0;for(let m=0;m<u;m++)y+=f[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ay(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ly(i,t,e){let n=new WeakMap,s=new We;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let w=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;u===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let x=a.attributes.position.count*v,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*E*4*p),b=new uo(S,x,E,p);b.type=Jn,b.needsUpdate=!0;let M=v*4;for(let T=0;T<p;T++){let P=m[T],I=d[T],D=_[T],N=x*E*4*T;for(let O=0;O<P.count;O++){let z=O*M;u===!0&&(s.fromBufferAttribute(P,O),S[N+z+0]=s.x,S[N+z+1]=s.y,S[N+z+2]=s.z,S[N+z+3]=0),g===!0&&(s.fromBufferAttribute(I,O),S[N+z+4]=s.x,S[N+z+5]=s.y,S[N+z+6]=s.z,S[N+z+7]=0),y===!0&&(s.fromBufferAttribute(D,O),S[N+z+8]=s.x,S[N+z+9]=s.y,S[N+z+10]=s.z,S[N+z+11]=D.itemSize===4?s.w:1)}}f={count:p,texture:b,size:new Q(x,E)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cy(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,p=c.geometry,f=t.get(c,p);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var hy={[jh]:"LINEAR_TONE_MAPPING",[Qh]:"REINHARD_TONE_MAPPING",[tu]:"CINEON_TONE_MAPPING",[zo]:"ACES_FILMIC_TONE_MAPPING",[nu]:"AGX_TONE_MAPPING",[iu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function uy(i,t,e,n,s,r){let o=new Un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new de;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let h=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new W(c,h),f=new us(-1,1,1,-1,0,1),u=null,g=null,y=!1,m,d=null,_=[],v=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),l!==null&&l.setSize(x,E);for(let S=0;S<_.length;S++){let b=_[S];b.setSize&&b.setSize(x,E)}},this.setEffects=function(x){_=x,v=_.length>0&&_[0].isRenderPass===!0;let E=o.width,S=o.height;_.length>0&&a===null&&(a=new Un(E,S,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Un(E,S,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<_.length;b++){let M=_[b];M.setSize&&M.setSize(E,S)}},this.begin=function(x,E){if(y||x.toneMapping===ui&&_.length===0)return!1;if(d=E,E!==null){let S=E.width,b=E.height;(o.width!==S||o.height!==b)&&this.setSize(S,b)}return v===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ui,!0},this.hasRenderPass=function(){return v},this.end=function(x,E){x.toneMapping=m,y=!0;let S=o,b=a;for(let M=0;M<_.length;M++){let w=_[M];w.enabled!==!1&&(w.render(x,b,S,E),w.needsSwap!==!1&&(S=b,b=b===a?l:a))}if(u!==x.outputColorSpace||g!==x.toneMapping){u=x.outputColorSpace,g=x.toneMapping,h.defines={},xe.getTransfer(u)===Te&&(h.defines.SRGB_TRANSFER="");let M=hy[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(d),x.render(p,f),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var yp=new Ln,wu=new rs(1,1),vp=new uo,Mp=new Ka,Ep=new vo,tp=[],ep=[],np=new Float32Array(16),ip=new Float32Array(9),sp=new Float32Array(4);function Br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pc(i,t){let e=ep[t];e===void 0&&(e=new Int32Array(t),ep[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function my(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function gy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;sp.set(n),i.uniformMatrix2fv(this.addr,!1,sp),fn(e,n)}}function xy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;ip.set(n),i.uniformMatrix3fv(this.addr,!1,ip),fn(e,n)}}function _y(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;np.set(n),i.uniformMatrix4fv(this.addr,!1,np),fn(e,n)}}function yy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function My(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function Sy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function Ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=e.isReversedDepthBuffer()?ac:oc,r=wu):r=yp,e.setTexture2D(t||r,s)}function Ay(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mp,s)}function Cy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ep,s)}function Py(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vp,s)}function Iy(i){switch(i){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return yy;case 35667:case 35671:return vy;case 35668:case 35672:return My;case 35669:case 35673:return Ey;case 5125:return Sy;case 36294:return by;case 36295:return wy;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Py}}function Ly(i,t){i.uniform1fv(this.addr,t)}function Dy(i,t){let e=Br(t,this.size,2);i.uniform2fv(this.addr,e)}function Ny(i,t){let e=Br(t,this.size,3);i.uniform3fv(this.addr,e)}function Uy(i,t){let e=Br(t,this.size,4);i.uniform4fv(this.addr,e)}function Fy(i,t){let e=Br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Oy(i,t){let e=Br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function By(i,t){let e=Br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hy(i,t){i.uniform1iv(this.addr,t)}function zy(i,t){i.uniform2iv(this.addr,t)}function ky(i,t){i.uniform3iv(this.addr,t)}function Vy(i,t){i.uniform4iv(this.addr,t)}function Gy(i,t){i.uniform1uiv(this.addr,t)}function Wy(i,t){i.uniform2uiv(this.addr,t)}function Xy(i,t){i.uniform3uiv(this.addr,t)}function qy(i,t){i.uniform4uiv(this.addr,t)}function Yy(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wu:o=yp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function $y(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mp,r[o])}function Zy(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ep,r[o])}function Ky(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vp,r[o])}function Jy(i){switch(i){case 5126:return Ly;case 35664:return Dy;case 35665:return Ny;case 35666:return Uy;case 35674:return Fy;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return Hy;case 35667:case 35671:return zy;case 35668:case 35672:return ky;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Ky}}var Tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Iy(e.type)}},Ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jy(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Su=/(\w+)(\])?(\[|\.)?/g;function rp(i,t){i.seq.push(t),i.map[t.id]=t}function jy(i,t,e){let n=i.name,s=n.length;for(Su.lastIndex=0;;){let r=Su.exec(n),o=Su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rp(e,c===void 0?new Tu(a,i,t):new Ru(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Au(a),rp(e,p)),e=p}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function op(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qy=37297,tv=0;function ev(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ap=new se;function nv(i){xe._getMatrix(ap,xe.workingColorSpace,i);let t=`mat3( ${ap.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case lo:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ev(i.getShaderSource(t),a)}else return r}function iv(i,t){let e=nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var sv={[jh]:"Linear",[Qh]:"Reinhard",[tu]:"Cineon",[zo]:"ACESFilmic",[nu]:"AgX",[iu]:"Neutral",[eu]:"Custom"};function rv(i,t){let e=sv[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hc=new A;function ov(){xe.getLuminanceCoefficients(hc);let i=hc.x.toFixed(4),t=hc.y.toFixed(4),e=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function lv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jo(i){return i!==""}function cp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(i){return i.replace(hv,dv)}var uv=new Map;function dv(i,t){let e=he[t];if(e===void 0){let n=uv.get(t);if(n!==void 0)e=he[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cu(e)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(i){return i.replace(fv,pv)}function pv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var mv={[Bo]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function gv(i){return mv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xv={[gs]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function _v(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yv={[Os]:"ENVMAP_MODE_REFRACTION"};function vv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mv={[Jh]:"ENVMAP_BLENDING_MULTIPLY",[Tf]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function Ev(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mv[i.combine]||"ENVMAP_BLENDING_NONE"}function Sv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gv(e),c=_v(e),h=vv(e),p=Ev(e),f=Sv(e),u=av(e),g=lv(r),y=s.createProgram(),m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jo).join(`
`),d.length>0&&(d+=`
`)):(m=[dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),d=[dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?he.tonemapping_pars_fragment:"",e.toneMapping!==ui?rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,iv("linearToOutputTexel",e.outputColorSpace),ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jo).join(`
`)),o=Cu(o),o=cp(o,e),o=hp(o,e),a=Cu(a),a=cp(a,e),a=hp(a,e),o=up(o),a=up(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=_+m+o,x=_+d+a,E=op(s,s.VERTEX_SHADER,v),S=op(s,s.FRAGMENT_SHADER,x);s.attachShader(y,E),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(S)||"",O=I.trim(),z=D.trim(),V=N.trim(),nt=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,S);else{let it=lp(s,E,"vertex"),et=lp(s,S,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+it+`
`+et)}else O!==""?Jt("WebGLProgram: Program Info Log:",O):(z===""||V==="")&&($=!1);$&&(P.diagnostics={runnable:nt,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(E),s.deleteShader(S),M=new Fr(s,y),w=cv(s,y)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(y,Qy)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=S,this}var wv=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Iu(t),e.set(t,n)),n}},Iu=class{constructor(t){this.id=wv++,this.code=t,this.usedTimes=0}};function Tv(i){return i===ys||i===Yo||i===$o}function Rv(i,t,e,n,s,r){let o=new vr,a=new Pu,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function y(M,w,T,P,I,D){let N=P.fog,O=I.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,nt=t.get(M.envMap||z,V),$=nt&&nt.mapping===ko?nt.image.height:null,it=u[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Jt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Pt=et!==void 0?et.length:0,At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let ee,Ht,$t,U;if(it){let Ne=Ti[it];ee=Ne.vertexShader,Ht=Ne.fragmentShader}else{ee=M.vertexShader,Ht=M.fragmentShader;let Ne=a.getVertexShaderStage(M),be=a.getFragmentShaderStage(M);a.update(M,Ne,be),$t=Ne.id,U=be.id}let k=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,lt=I.isBatchedMesh===!0,gt=!!M.map,Xt=!!M.matcap,K=!!nt,st=!!M.aoMap,ot=!!M.lightMap,ht=!!M.bumpMap&&M.wireframe===!1,dt=!!M.normalMap,Vt=!!M.displacementMap,Ut=!!M.emissiveMap,qt=!!M.metalnessMap,ne=!!M.roughnessMap,F=M.anisotropy>0,Se=M.clearcoat>0,me=M.dispersion>0,L=M.retroreflectivity>0,R=M.iridescence>0,G=M.sheen>0,Y=M.transmission>0,j=F&&!!M.anisotropyMap,pt=Se&&!!M.clearcoatMap,xt=Se&&!!M.clearcoatNormalMap,tt=Se&&!!M.clearcoatRoughnessMap,at=R&&!!M.iridescenceMap,vt=R&&!!M.iridescenceThicknessMap,Gt=G&&!!M.sheenColorMap,bt=G&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,Wt=!!M.specularColorMap,jt=!!M.specularIntensityMap,oe=Y&&!!M.transmissionMap,H=Y&&!!M.thicknessMap,Et=!!M.gradientMap,rt=!!M.alphaMap,St=M.alphaTest>0,Ct=!!M.alphaHash,ct=!!M.extensions,Yt=ui;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let Ft={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:Ht,defines:M.defines,customVertexShaderID:$t,customFragmentShaderID:U,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:lt,batchingColor:lt&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:Xt,envMap:K,envMapMode:K&&nt.mapping,envMapCubeUVHeight:$,aoMap:st,lightMap:ot,bumpMap:ht,normalMap:dt,displacementMap:Vt,emissiveMap:Ut,normalMapObjectSpace:dt&&M.normalMapType===Pf,normalMapTangentSpace:dt&&M.normalMapType===rc,packedNormalMap:dt&&M.normalMapType===rc&&Tv(M.normalMap.format),metalnessMap:qt,roughnessMap:ne,anisotropy:F,anisotropyMap:j,clearcoat:Se,clearcoatMap:pt,clearcoatNormalMap:xt,clearcoatRoughnessMap:tt,dispersion:me,retroreflection:L,iridescence:R,iridescenceMap:at,iridescenceThicknessMap:vt,sheen:G,sheenColorMap:Gt,sheenRoughnessMap:bt,specularMap:Mt,specularColorMap:Wt,specularIntensityMap:jt,transmission:Y,transmissionMap:oe,thicknessMap:H,gradientMap:Et,opaque:M.transparent===!1&&M.blending===ms&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:St,alphaHash:Ct,combine:M.combine,mapUv:gt&&g(M.map.channel),aoMapUv:st&&g(M.aoMap.channel),lightMapUv:ot&&g(M.lightMap.channel),bumpMapUv:ht&&g(M.bumpMap.channel),normalMapUv:dt&&g(M.normalMap.channel),displacementMapUv:Vt&&g(M.displacementMap.channel),emissiveMapUv:Ut&&g(M.emissiveMap.channel),metalnessMapUv:qt&&g(M.metalnessMap.channel),roughnessMapUv:ne&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(M.sheenRoughnessMap.channel),specularMapUv:Mt&&g(M.specularMap.channel),specularColorMapUv:Wt&&g(M.specularColorMap.channel),specularIntensityMapUv:jt&&g(M.specularIntensityMap.channel),transmissionMapUv:oe&&g(M.transmissionMap.channel),thicknessMapUv:H&&g(M.thicknessMap.channel),alphaMapUv:rt&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||F),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(gt||rt),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:J,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&xe.getTransfer(M.map.colorSpace)===Te,decodeVideoTextureEmissive:Ut&&M.emissiveMap.isVideoTexture===!0&&xe.getTransfer(M.emissiveMap.colorSpace)===Te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===De,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ct&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&M.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)w.push(T),w.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(d(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function d(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let w=u[M.type],T;if(w){let P=Ti[w];T=Hs.clone(P.uniforms)}else T=M.uniforms;return T}function x(M,w){let T=h.get(w);return T!==void 0?++T.usedTimes:(T=new bv(i,w,M,s),c.push(T),h.set(w,T)),T}function E(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:b}}function Av(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,y,m,d){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:d},i[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=g,_.materialVariant=o(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=m,_.group=d),t++,_}function l(f,u,g,y,m,d,_){_.reversedDepth===!0&&(m=-m);let v=a(f,u,g,y,m,d);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):e.push(v)}function c(f,u,g,y,m,d){let _=a(f,u,g,y,m,d);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,u){e.length>1&&e.sort(f||Cv),n.length>1&&n.sort(u||fp),s.length>1&&s.sort(u||fp)}function p(){for(let f=t,u=i.length;f<u;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Pv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pp,i.set(n,[o])):s>=r.length?(o=new pp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Iv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new ae};break;case"SpotLight":e={position:new A,direction:new A,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Lv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Dv=0;function Nv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Uv(i){let t=new Iv,e=Lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Rt,o=new Rt;function a(c){let h=0,p=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,g=0,y=0,m=0,d=0,_=0,v=0,x=0,E=0,S=0,b=0,M=0,w=0,T=0;c.sort(Nv);for(let I=0,D=c.length;I<D;I++){let N=c[I],O=N.color,z=N.intensity,V=N.distance,nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ys?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*z,p+=O.g*z,f+=O.b*z;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],z);T++}else if(N.isSunLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let it=N.shadow,et=e.get(N);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=nt;let Pt=it.getViewportCount();for(let At=0;At<Pt;At++)n.sunShadowMatrix[y+At]=it.getMatrix(At),n.sunShadowCascade[y+At]=it._cascadeData[At];y+=Pt,g++}n.sun[u]=$,u++}else if(N.isDirectionalLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let it=N.shadow,et=e.get(N);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=N.shadow.matrix,E++}n.directional[m]=$,m++}else if(N.isSpotLight){let $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(O).multiplyScalar(z),$.distance=V,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[_]=$;let it=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,it.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[_]=it.matrix,N.castShadow){let et=e.get(N);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=nt,b++}_++}else if(N.isRectAreaLight){let $=t.get(N);$.color.copy(O).multiplyScalar(z),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[v]=$,v++}else if(N.isPointLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){let it=N.shadow,et=e.get(N);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,et.shadowCameraNear=it.camera.near,et.shadowCameraFar=it.camera.far,n.pointShadow[d]=et,n.pointShadowMap[d]=nt,n.pointShadowMatrix[d]=N.shadow.matrix,S++}n.point[d]=$,d++}else if(N.isHemisphereLight){let $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(z),$.groundColor.copy(N.groundColor).multiplyScalar(z),n.hemi[x]=$,x++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let P=n.hash;(P.sunLength!==u||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==_||P.rectAreaLength!==v||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==b||P.numSpotMaps!==M||P.numLightProbes!==T)&&(n.sun.length=u,n.directional.length=m,n.spot.length=_,n.rectArea.length=v,n.point.length=d,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,P.sunLength=u,P.directionalLength=m,P.pointLength=d,P.spotLength=_,P.rectAreaLength=v,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=b,P.numSpotMaps=M,P.numLightProbes=T,n.version=Dv++)}function l(c,h){let p=0,f=0,u=0,g=0,y=0,m=0,d=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){let x=c[_];if(x.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),p++}else if(x.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(x.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(x.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),u++}else if(x.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:n}}function mp(i){let t=new Uv(i),e=[],n=[],s=[];function r(f){p.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Fv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mp(i),t.set(s,[a])):r>=o.length?(a=new mp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
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
}`,Hv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],zv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],gp=new Rt,Ko=new A,bu=new A;function kv(i,t,e){let n=new br,s=new Q,r=new Q,o=new We,a=new sl,l=new rl,c={},h=e.maxTextureSize,p={[ps]:rn,[rn]:ps,[De]:De},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new W(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let d=this.type;this.render=function(S,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===_l&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bo);let w=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=d!==this.type;D&&b.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=S.length;N<O;N++){let z=S[N],V=z.shadow;if(V===void 0){Jt("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||D===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ir){if(z.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Un(s.x,s.y,{format:ys,type:fi,minFilter:En,magFilter:En,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new rs(s.x,s.y,Jn),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Ei,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn}else z.isPointLight?(V.map=new uc(s.x),V.map.depthTexture=new Ja(s.x,di)):(V.map=new Un(s.x,s.y),V.map.depthTexture=new rs(s.x,s.y,di)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Ei,this.type===Bo?(V.map.depthTexture.compareFunction=$?ac:oc,V.map.depthTexture.minFilter=En,V.map.depthTexture.magFilter=En):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let it=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,M);for(let et=0;et<it;et++){let Pt=V.getCamera(et);if(z.isPointLight){let At=V.camera,ee=V.matrix,Ht=z.distance||At.far;Ht!==At.far&&(At.far=Ht,At.updateProjectionMatrix()),Ko.setFromMatrixPosition(z.matrixWorld),At.position.copy(Ko),bu.copy(At.position),bu.add(Hv[et]),At.up.copy(zv[et]),At.lookAt(bu),At.updateMatrixWorld(),ee.makeTranslation(-Ko.x,-Ko.y,-Ko.z),gp.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),V._frustum.setFromProjectionMatrix(gp,At.coordinateSystem,At.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,et),i.clear();else{et===0&&(i.setRenderTarget(V.map),i.clear());let At=V.getViewport(et);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),I.viewport(o)}n=V.getFrustum(et),x(b,M,Pt,z,this.type)}V.isPointLightShadow!==!0&&this.type===Ir&&_(V,M),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,P)};function _(S,b){let M=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null?S.mapPass=new Un(s.x,s.y,{format:ys,type:fi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,M,f,y,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,M,u,y,null)}function v(S,b,M,w){let T=null,P=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)T=P;else if(T=M.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let I=T.uuid,D=b.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let O=N[D];O===void 0&&(O=T.clone(),N[D]=O,b.addEventListener("dispose",E)),T=O}if(T.visible=b.visible,T.wireframe=b.wireframe,w===Ir?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:p[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let I=i.properties.get(T);I.light=M}return T}function x(S,b,M,w,T){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Ir)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let D=t.update(S),N=S.material;if(Array.isArray(N)){let O=D.groups;for(let z=0,V=O.length;z<V;z++){let nt=O[z],$=N[nt.materialIndex];if($&&$.visible){let it=v(S,$,w,T);S.onBeforeShadow(i,S,b,M,D,it,nt),i.renderBufferDirect(M,null,D,it,S,nt),S.onAfterShadow(i,S,b,M,D,it,nt)}}}else if(N.visible){let O=v(S,N,w,T);S.onBeforeShadow(i,S,b,M,D,O,null),i.renderBufferDirect(M,null,D,O,S,null),S.onAfterShadow(i,S,b,M,D,O,null)}}let I=S.children;for(let D=0,N=I.length;D<N;D++)x(I[D],b,M,w,T)}function E(S){S.target.removeEventListener("dispose",E);for(let M in c){let w=c[M],T=S.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function Vv(i,t){function e(){let H=!1,Et=new We,rt=null,St=new We(0,0,0,0);return{setMask:function(Ct){rt!==Ct&&!H&&(i.colorMask(Ct,Ct,Ct,Ct),rt=Ct)},setLocked:function(Ct){H=Ct},setClear:function(Ct,ct,Yt,Ft,Ne){Ne===!0&&(Ct*=Ft,ct*=Ft,Yt*=Ft),Et.set(Ct,ct,Yt,Ft),St.equals(Et)===!1&&(i.clearColor(Ct,ct,Yt,Ft),St.copy(Et))},reset:function(){H=!1,rt=null,St.set(-1,0,0,0)}}}function n(){let H=!1,Et=!1,rt=null,St=null,Ct=null;return{setReversed:function(ct){if(Et!==ct){let Yt=t.get("EXT_clip_control");ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Et=ct;let Ft=Ct;Ct=null,this.setClear(Ft)}},getReversed:function(){return Et},setTest:function(ct){ct?k(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!H&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(Et&&(ct=kf[ct]),St!==ct){switch(ct){case Ha:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=ct}},setLocked:function(ct){H=ct},setClear:function(ct){Ct!==ct&&(Ct=ct,Et&&(ct=1-ct),i.clearDepth(ct))},reset:function(){H=!1,rt=null,St=null,Ct=null,Et=!1}}}function s(){let H=!1,Et=null,rt=null,St=null,Ct=null,ct=null,Yt=null,Ft=null,Ne=null;return{setTest:function(be){H||(be?k(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(be){Et!==be&&!H&&(i.stencilMask(be),Et=be)},setFunc:function(be,ni,gi){(rt!==be||St!==ni||Ct!==gi)&&(i.stencilFunc(be,ni,gi),rt=be,St=ni,Ct=gi)},setOp:function(be,ni,gi){(ct!==be||Yt!==ni||Ft!==gi)&&(i.stencilOp(be,ni,gi),ct=be,Yt=ni,Ft=gi)},setLocked:function(be){H=be},setClear:function(be){Ne!==be&&(i.clearStencil(be),Ne=be)},reset:function(){H=!1,Et=null,rt=null,St=null,Ct=null,ct=null,Yt=null,Ft=null,Ne=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},f={},u=new WeakMap,g=[],y=null,m=!1,d=null,_=null,v=null,x=null,E=null,S=null,b=null,M=new ae(0,0,0),w=0,T=!1,P=null,I=null,D=null,N=null,O=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),V=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=nt>=2);let it=null,et={},Pt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),ee=new We().fromArray(Pt),Ht=new We().fromArray(At);function $t(H,Et,rt,St){let Ct=new Uint8Array(4),ct=i.createTexture();i.bindTexture(H,ct),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<rt;Yt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Et+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ct}let U={};U[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(mr),ht(!1),dt(qh),k(i.CULL_FACE),st(bi);function k(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function J(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function ut(H,Et){return f[H]!==Et?(i.bindFramebuffer(H,Et),f[H]=Et,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function lt(H,Et){let rt=g,St=!1;if(H){rt=u.get(Et),rt===void 0&&(rt=[],u.set(Et,rt));let Ct=H.textures;if(rt.length!==Ct.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Yt=Ct.length;ct<Yt;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=Ct.length,St=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,St=!0);St&&i.drawBuffers(rt)}function gt(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Xt={[Fs]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};Xt[uf]=i.MIN,Xt[df]=i.MAX;let K={[ff]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[Zh]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[yf]:i.DST_COLOR,[xf]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[Kh]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function st(H,Et,rt,St,Ct,ct,Yt,Ft,Ne,be){if(H===bi){m===!0&&(J(i.BLEND),m=!1);return}if(m===!1&&(k(i.BLEND),m=!0),H!==lf){if(H!==d||be!==T){if((_!==Fs||E!==Fs)&&(i.blendEquation(i.FUNC_ADD),_=Fs,E=Fs),be)switch(H){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",H);break}else switch(H){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",H);break}v=null,x=null,S=null,b=null,M.set(0,0,0),w=0,d=H,T=be}return}Ct=Ct||Et,ct=ct||rt,Yt=Yt||St,(Et!==_||Ct!==E)&&(i.blendEquationSeparate(Xt[Et],Xt[Ct]),_=Et,E=Ct),(rt!==v||St!==x||ct!==S||Yt!==b)&&(i.blendFuncSeparate(K[rt],K[St],K[ct],K[Yt]),v=rt,x=St,S=ct,b=Yt),(Ft.equals(M)===!1||Ne!==w)&&(i.blendColor(Ft.r,Ft.g,Ft.b,Ne),M.copy(Ft),w=Ne),d=H,T=!1}function ot(H,Et){H.side===De?J(i.CULL_FACE):k(i.CULL_FACE);let rt=H.side===rn;Et&&(rt=!rt),ht(rt),H.blending===ms&&H.transparent===!1?st(bi):st(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let St=H.stencilWrite;a.setTest(St),St&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ut(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){P!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),P=H)}function dt(H){H!==of?(k(i.CULL_FACE),H!==I&&(H===qh?i.cullFace(i.BACK):H===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),I=H}function Vt(H){H!==D&&(V&&i.lineWidth(H),D=H)}function Ut(H,Et,rt){H?(k(i.POLYGON_OFFSET_FILL),(N!==Et||O!==rt)&&(N=Et,O=rt,o.getReversed()&&(Et=-Et),i.polygonOffset(Et,rt))):J(i.POLYGON_OFFSET_FILL)}function qt(H){H?k(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function ne(H){H===void 0&&(H=i.TEXTURE0+z-1),it!==H&&(i.activeTexture(H),it=H)}function F(H,Et,rt){rt===void 0&&(it===null?rt=i.TEXTURE0+z-1:rt=it);let St=et[rt];St===void 0&&(St={type:void 0,texture:void 0},et[rt]=St),(St.type!==H||St.texture!==Et)&&(it!==rt&&(i.activeTexture(rt),it=rt),i.bindTexture(H,Et||U[H]),St.type=H,St.texture=Et)}function Se(){let H=et[it];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(H){Qt("WebGLState:",H)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(H){Qt("WebGLState:",H)}}function R(){try{i.texSubImage2D(...arguments)}catch(H){Qt("WebGLState:",H)}}function G(){try{i.texSubImage3D(...arguments)}catch(H){Qt("WebGLState:",H)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Qt("WebGLState:",H)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Qt("WebGLState:",H)}}function pt(){try{i.texStorage2D(...arguments)}catch(H){Qt("WebGLState:",H)}}function xt(){try{i.texStorage3D(...arguments)}catch(H){Qt("WebGLState:",H)}}function tt(){try{i.texImage2D(...arguments)}catch(H){Qt("WebGLState:",H)}}function at(){try{i.texImage3D(...arguments)}catch(H){Qt("WebGLState:",H)}}function vt(H){return p[H]!==void 0?p[H]:i.getParameter(H)}function Gt(H,Et){p[H]!==Et&&(i.pixelStorei(H,Et),p[H]=Et)}function bt(H){ee.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function Mt(H){Ht.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ht.copy(H))}function Wt(H,Et){let rt=c.get(Et);rt===void 0&&(rt=new WeakMap,c.set(Et,rt));let St=rt.get(H);St===void 0&&(St=i.getUniformBlockIndex(Et,H.name),rt.set(H,St))}function jt(H,Et){let St=c.get(Et).get(H);l.get(Et)!==St&&(i.uniformBlockBinding(Et,St,H.__bindingPointIndex),l.set(Et,St))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},it=null,et={},f={},u=new WeakMap,g=[],y=null,m=!1,d=null,_=null,v=null,x=null,E=null,S=null,b=null,M=new ae(0,0,0),w=0,T=!1,P=null,I=null,D=null,N=null,O=null,ee.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:J,bindFramebuffer:ut,drawBuffers:lt,useProgram:gt,setBlending:st,setMaterial:ot,setFlipSided:ht,setCullFace:dt,setLineWidth:Vt,setPolygonOffset:Ut,setScissorTest:qt,activeTexture:ne,bindTexture:F,unbindTexture:Se,compressedTexImage2D:me,compressedTexImage3D:L,texImage2D:tt,texImage3D:at,pixelStorei:Gt,getParameter:vt,updateUBOMapping:Wt,uniformBlockBinding:jt,texStorage2D:pt,texStorage3D:xt,texSubImage2D:R,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:bt,viewport:Mt,reset:oe}}function Gv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,p=new Set,f,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,R){return g?new OffscreenCanvas(L,R):co("canvas")}function m(L,R,G){let Y=1,j=me(L);if((j.width>G||j.height>G)&&(Y=G/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let pt=Math.floor(Y*j.width),xt=Math.floor(Y*j.height);f===void 0&&(f=y(pt,xt));let tt=R?y(pt,xt):f;return tt.width=pt,tt.height=xt,tt.getContext("2d").drawImage(L,0,0,pt,xt),Jt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+pt+"x"+xt+")."),tt}else return"data"in L&&Jt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function d(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,R,G,Y,j,pt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt;Y&&(xt=t.get("EXT_texture_norm16"),xt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=R;if(R===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8),G===i.UNSIGNED_SHORT&&xt&&(tt=xt.R16_EXT),G===i.SHORT&&xt&&(tt=xt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),R===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8),G===i.UNSIGNED_SHORT&&xt&&(tt=xt.RG16_EXT),G===i.SHORT&&xt&&(tt=xt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),R===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),G===i.UNSIGNED_INT&&(tt=i.RGB32UI),G===i.BYTE&&(tt=i.RGB8I),G===i.SHORT&&(tt=i.RGB16I),G===i.INT&&(tt=i.RGB32I)),R===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),G===i.UNSIGNED_INT&&(tt=i.RGBA32UI),G===i.BYTE&&(tt=i.RGBA8I),G===i.SHORT&&(tt=i.RGBA16I),G===i.INT&&(tt=i.RGBA32I)),R===i.RGB&&(G===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGB16_EXT),G===i.SHORT&&xt&&(tt=xt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),R===i.RGBA){let at=pt?lo:xe.getTransfer(j);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=at===Te?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGBA16_EXT),G===i.SHORT&&xt&&(tt=xt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function E(L,R){let G;return L?R===null||R===di||R===Dr?G=i.DEPTH24_STENCIL8:R===Jn?G=i.DEPTH32F_STENCIL8:R===Lr&&(G=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===di||R===Dr?G=i.DEPTH_COMPONENT24:R===Jn?G=i.DEPTH_COMPONENT32F:R===Lr&&(G=i.DEPTH_COMPONENT16),G}function S(L,R){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==En?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function b(L){let R=L.target;R.removeEventListener("dispose",b),w(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&p.delete(R)}function M(L){let R=L.target;R.removeEventListener("dispose",M),P(R)}function w(L){let R=n.get(L);if(R.__webglInit===void 0)return;let G=L.source,Y=u.get(G);if(Y){let j=Y[R.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(L),Object.keys(Y).length===0&&u.delete(G)}n.remove(L)}function T(L){let R=n.get(L);i.deleteTexture(R.__webglTexture);let G=L.source,Y=u.get(G);delete Y[R.__cacheKey],o.memory.textures--}function P(L){let R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(R.__webglFramebuffer[Y]))for(let j=0;j<R.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(R.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(R.__webglFramebuffer[Y]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Y])}else{if(Array.isArray(R.__webglFramebuffer))for(let Y=0;Y<R.__webglFramebuffer.length;Y++)i.deleteFramebuffer(R.__webglFramebuffer[Y]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let G=L.textures;for(let Y=0,j=G.length;Y<j;Y++){let pt=n.get(G[Y]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(L)}let I=0;function D(){I=0}function N(){return I}function O(L){I=L}function z(){let L=I;return L>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function V(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function nt(L,R){let G=n.get(L);if(L.isVideoTexture&&F(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){let Y=L.image;if(Y===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,L,R);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+R)}function $(L,R){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){J(G,L,R);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+R)}function it(L,R){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){J(G,L,R);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+R)}function et(L,R){let G=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){ut(G,L,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+R)}let Pt={[Wn]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},At={[gn]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},ee={[Lf]:i.NEVER,[Of]:i.ALWAYS,[Df]:i.LESS,[oc]:i.LEQUAL,[Nf]:i.EQUAL,[ac]:i.GEQUAL,[Uf]:i.GREATER,[Ff]:i.NOTEQUAL};function Ht(L,R){if(R.type===Jn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===En||R.magFilter===Ml||R.magFilter===Vo||R.magFilter===xs||R.minFilter===En||R.minFilter===Ml||R.minFilter===Vo||R.minFilter===xs)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Pt[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Pt[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Pt[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,At[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,At[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===gn||R.minFilter!==Vo&&R.minFilter!==xs||R.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function $t(L,R){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",b));let Y=R.source,j=u.get(Y);j===void 0&&(j={},u.set(Y,j));let pt=V(R);if(pt!==L.__cacheKey){j[pt]===void 0&&(j[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[pt].usedTimes++;let xt=j[L.__cacheKey];xt!==void 0&&(j[L.__cacheKey].usedTimes--,xt.usedTimes===0&&T(R)),L.__cacheKey=pt,L.__webglTexture=j[pt].texture}return G}function U(L,R,G){return Math.floor(Math.floor(L/G)/R)}function k(L,R,G,Y){let pt=L.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,G,Y,R.data);else{pt.sort((Gt,bt)=>Gt.start-bt.start);let xt=0;for(let Gt=1;Gt<pt.length;Gt++){let bt=pt[xt],Mt=pt[Gt],Wt=bt.start+bt.count,jt=U(Mt.start,R.width,4),oe=U(bt.start,R.width,4);Mt.start<=Wt+1&&jt===oe&&U(Mt.start+Mt.count-1,R.width,4)===jt?bt.count=Math.max(bt.count,Mt.start+Mt.count-bt.start):(++xt,pt[xt]=Mt)}pt.length=xt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Gt=0,bt=pt.length;Gt<bt;Gt++){let Mt=pt[Gt],Wt=Math.floor(Mt.start/4),jt=Math.ceil(Mt.count/4),oe=Wt%R.width,H=Math.floor(Wt/R.width),Et=jt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,oe,H,Et,rt,G,Y,R.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function J(L,R,G){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);let j=$t(L,R),pt=R.source;e.bindTexture(Y,L.__webglTexture,i.TEXTURE0+G);let xt=n.get(pt);if(pt.version!==xt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let rt=xe.getPrimaries(xe.workingColorSpace),St=R.colorSpace===Gi?null:xe.getPrimaries(R.colorSpace),Ct=R.colorSpace===Gi||rt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let at=m(R.image,!1,s.maxTextureSize);at=Se(R,at);let vt=r.convert(R.format,R.colorSpace),Gt=r.convert(R.type),bt=x(R.internalFormat,vt,Gt,R.normalized,R.colorSpace,R.isVideoTexture);Ht(Y,R);let Mt,Wt=R.mipmaps,jt=R.isVideoTexture!==!0,oe=xt.__version===void 0||j===!0,H=pt.dataReady,Et=S(R,at);if(R.isDepthTexture)bt=E(R.format===_s,R.type),oe&&(jt?e.texStorage2D(i.TEXTURE_2D,1,bt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,bt,at.width,at.height,0,vt,Gt,null));else if(R.isDataTexture)if(Wt.length>0){jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Et,bt,Wt[0].width,Wt[0].height);for(let rt=0,St=Wt.length;rt<St;rt++)Mt=Wt[rt],jt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Gt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,bt,Mt.width,Mt.height,0,vt,Gt,Mt.data);R.generateMipmaps=!1}else jt?(oe&&e.texStorage2D(i.TEXTURE_2D,Et,bt,at.width,at.height),H&&k(R,at,vt,Gt)):e.texImage2D(i.TEXTURE_2D,0,bt,at.width,at.height,0,vt,Gt,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){jt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,bt,Wt[0].width,Wt[0].height,at.depth);for(let rt=0,St=Wt.length;rt<St;rt++)if(Mt=Wt[rt],R.format!==jn)if(vt!==null)if(jt){if(H)if(R.layerUpdates.size>0){let Ct=_u(Mt.width,Mt.height,R.format,R.type);for(let ct of R.layerUpdates){let Yt=Mt.data.subarray(ct*Ct/Mt.data.BYTES_PER_ELEMENT,(ct+1)*Ct/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,Mt.width,Mt.height,1,vt,Yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,at.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,bt,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,at.depth,vt,Gt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,bt,Mt.width,Mt.height,at.depth,0,vt,Gt,Mt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Et,bt,Wt[0].width,Wt[0].height);for(let rt=0,St=Wt.length;rt<St;rt++)Mt=Wt[rt],R.format!==jn?vt!==null?jt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,bt,Mt.width,Mt.height,0,Mt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Gt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,bt,Mt.width,Mt.height,0,vt,Gt,Mt.data)}else if(R.isDataArrayTexture)if(jt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,bt,at.width,at.height,at.depth),H)if(R.layerUpdates.size>0){let rt=_u(at.width,at.height,R.format,R.type);for(let St of R.layerUpdates){let Ct=at.data.subarray(St*rt/at.data.BYTES_PER_ELEMENT,(St+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,at.width,at.height,1,vt,Gt,Ct)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Gt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,at.width,at.height,at.depth,0,vt,Gt,at.data);else if(R.isData3DTexture)jt?(oe&&e.texStorage3D(i.TEXTURE_3D,Et,bt,at.width,at.height,at.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Gt,at.data)):e.texImage3D(i.TEXTURE_3D,0,bt,at.width,at.height,at.depth,0,vt,Gt,at.data);else if(R.isFramebufferTexture){if(oe)if(jt)e.texStorage2D(i.TEXTURE_2D,Et,bt,at.width,at.height);else{let rt=at.width,St=at.height;for(let Ct=0;Ct<Et;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,bt,rt,St,0,vt,Gt,null),rt>>=1,St>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),at.parentNode!==rt){rt.appendChild(at),p.add(R),rt.onpaint=St=>{let Ct=St.changedElements;for(let ct of p)Ct.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Ct=i.RGBA,ct=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,ct,Yt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(jt&&oe){let rt=me(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Et,bt,rt.width,rt.height)}for(let rt=0,St=Wt.length;rt<St;rt++)Mt=Wt[rt],jt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,vt,Gt,Mt):e.texImage2D(i.TEXTURE_2D,rt,bt,vt,Gt,Mt);R.generateMipmaps=!1}else if(jt){if(oe){let rt=me(at);e.texStorage2D(i.TEXTURE_2D,Et,bt,rt.width,rt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Gt,at)}else e.texImage2D(i.TEXTURE_2D,0,bt,vt,Gt,at);d(R)&&_(Y),xt.__version=pt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ut(L,R,G){if(R.image.length!==6)return;let Y=$t(L,R),j=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);let pt=n.get(j);if(j.version!==pt.__version||Y===!0){e.activeTexture(i.TEXTURE0+G);let xt=xe.getPrimaries(xe.workingColorSpace),tt=R.colorSpace===Gi?null:xe.getPrimaries(R.colorSpace),at=R.colorSpace===Gi||xt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let vt=R.isCompressedTexture||R.image[0].isCompressedTexture,Gt=R.image[0]&&R.image[0].isDataTexture,bt=[];for(let ct=0;ct<6;ct++)!vt&&!Gt?bt[ct]=m(R.image[ct],!0,s.maxCubemapSize):bt[ct]=Gt?R.image[ct].image:R.image[ct],bt[ct]=Se(R,bt[ct]);let Mt=bt[0],Wt=r.convert(R.format,R.colorSpace),jt=r.convert(R.type),oe=x(R.internalFormat,Wt,jt,R.normalized,R.colorSpace),H=R.isVideoTexture!==!0,Et=pt.__version===void 0||Y===!0,rt=j.dataReady,St=S(R,Mt);Ht(i.TEXTURE_CUBE_MAP,R);let Ct;if(vt){H&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,oe,Mt.width,Mt.height);for(let ct=0;ct<6;ct++){Ct=bt[ct].mipmaps;for(let Yt=0;Yt<Ct.length;Yt++){let Ft=Ct[Yt];R.format!==jn?Wt!==null?H?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,0,0,Ft.width,Ft.height,Wt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,oe,Ft.width,Ft.height,0,Ft.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,0,0,Ft.width,Ft.height,Wt,jt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,oe,Ft.width,Ft.height,0,Wt,jt,Ft.data)}}}else{if(Ct=R.mipmaps,H&&Et){Ct.length>0&&St++;let ct=me(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,oe,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Gt){H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt[ct].width,bt[ct].height,Wt,jt,bt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,bt[ct].width,bt[ct].height,0,Wt,jt,bt[ct].data);for(let Yt=0;Yt<Ct.length;Yt++){let Ne=Ct[Yt].image[ct].image;H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,0,0,Ne.width,Ne.height,Wt,jt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,oe,Ne.width,Ne.height,0,Wt,jt,Ne.data)}}else{H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Wt,jt,bt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,Wt,jt,bt[ct]);for(let Yt=0;Yt<Ct.length;Yt++){let Ft=Ct[Yt];H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,0,0,Wt,jt,Ft.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,oe,Wt,jt,Ft.image[ct])}}}d(R)&&_(i.TEXTURE_CUBE_MAP),pt.__version=j.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function lt(L,R,G,Y,j,pt){let xt=r.convert(G.format,G.colorSpace),tt=r.convert(G.type),at=x(G.internalFormat,xt,tt,G.normalized,G.colorSpace),vt=n.get(R),Gt=n.get(G);if(Gt.__renderTarget=R,!vt.__hasExternalTextures){let bt=Math.max(1,R.width>>pt),Mt=Math.max(1,R.height>>pt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,pt,at,bt,Mt,R.depth,0,xt,tt,null):e.texImage2D(j,pt,at,bt,Mt,0,xt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ne(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Gt.__webglTexture,0,qt(R)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Gt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(L,R,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){let Y=R.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,pt=E(R.stencilBuffer,j),xt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(R),pt,R.width,R.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(R),pt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,L)}else{let Y=R.textures;for(let j=0;j<Y.length;j++){let pt=Y[j],xt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),at=x(pt.internalFormat,xt,tt,pt.normalized,pt.colorSpace);ne(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(R),at,R.width,R.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(R),at,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,at,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(L,R,G){let Y=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(R.depthTexture);if(j.__renderTarget=R,(!j.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,R.depthTexture.addEventListener("dispose",b)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,R.depthTexture);let vt=r.convert(R.depthTexture.format),Gt=r.convert(R.depthTexture.type),bt;R.depthTexture.format===Ei?bt=i.DEPTH_COMPONENT24:R.depthTexture.format===_s&&(bt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,bt,R.width,R.height,0,vt,Gt,null)}}else nt(R.depthTexture,0);let pt=j.__webglTexture,xt=qt(R),tt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,at=R.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===Ei)ne(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,pt,0);else if(R.depthTexture.format===_s)ne(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(L){let R=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let Y=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){let j=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),R.__depthDisposeCallback=j}R.__boundDepthTexture=Y}if(L.depthTexture&&!R.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Xt(R.__webglFramebuffer[Y],L,Y);else{let Y=L.texture.mipmaps;Y&&Y.length>0?Xt(R.__webglFramebuffer[0],L,0):Xt(R.__webglFramebuffer,L,0)}else if(G){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),gt(R.__webglDepthbuffer[Y],L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,pt)}}else{let Y=L.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),gt(R.__webglDepthbuffer,L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(L,R,G){let Y=n.get(L);R!==void 0&&lt(Y.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&K(L)}function ot(L){let R=L.texture,G=n.get(L),Y=n.get(R);L.addEventListener("dispose",M);let j=L.textures,pt=L.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),pt){G.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(R.mipmaps&&R.mipmaps.length>0){G.__webglFramebuffer[tt]=[];for(let at=0;at<R.mipmaps.length;at++)G.__webglFramebuffer[tt][at]=i.createFramebuffer()}else G.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){G.__webglFramebuffer=[];for(let tt=0;tt<R.mipmaps.length;tt++)G.__webglFramebuffer[tt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(xt)for(let tt=0,at=j.length;tt<at;tt++){let vt=n.get(j[tt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ne(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let at=j[tt];G.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[tt]);let vt=r.convert(at.format,at.colorSpace),Gt=r.convert(at.type),bt=x(at.internalFormat,vt,Gt,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),Mt=qt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,bt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,G.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,R);for(let tt=0;tt<6;tt++)if(R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)lt(G.__webglFramebuffer[tt][at],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at);else lt(G.__webglFramebuffer[tt],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);d(R)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let tt=0,at=j.length;tt<at;tt++){let vt=j[tt],Gt=n.get(vt),bt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Gt.__webglTexture),Ht(bt,vt),lt(G.__webglFramebuffer,L,vt,i.COLOR_ATTACHMENT0+tt,bt,0),d(vt)&&_(bt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,Y.__webglTexture),Ht(tt,R),R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)lt(G.__webglFramebuffer[at],L,R,i.COLOR_ATTACHMENT0,tt,at);else lt(G.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,tt,0);d(R)&&_(tt),e.unbindTexture()}L.depthBuffer&&K(L)}function ht(L){let R=L.textures;for(let G=0,Y=R.length;G<Y;G++){let j=R[G];if(d(j)){let pt=v(L),xt=n.get(j).__webglTexture;e.bindTexture(pt,xt),_(pt),e.unbindTexture()}}}let dt=[],Vt=[];function Ut(L){if(L.samples>0){if(ne(L)===!1){let R=L.textures,G=L.width,Y=L.height,j=i.COLOR_BUFFER_BIT,pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(L),tt=R.length>1;if(tt)for(let vt=0;vt<R.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<R.length;vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let Gt=n.get(R[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,j,i.NEAREST),l===!0&&(dt.length=0,Vt.length=0,dt.push(i.COLOR_ATTACHMENT0+vt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(dt.push(pt),Vt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let vt=0;vt<R.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let Gt=n.get(R[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function qt(L){return Math.min(s.maxSamples,L.samples)}function ne(L){let R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function F(L){let R=o.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function Se(L,R){let G=L.colorSpace,Y=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==ao&&G!==Gi&&(xe.getTransfer(G)===Te?(Y!==jn||j!==Fn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",G)),R}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=$,this.setTexture3D=it,this.setTextureCube=et,this.rebindTextures=st,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wv(i,t){function e(n,s=Gi){let r,o=xe.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===ou)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===jn)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Go||n===Wo||n===Xo||n===qo)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Yo||n===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Nl)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fl)return r.COMPRESSED_R11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yo)return r.COMPRESSED_RG11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hl||n===zl||n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Kl||n===Jl||n===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===$o||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`,Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,f=null,u=null,g=null,y=typeof XRWebGLBinding<"u",m=new Lu,d={},_=e.getContextAttributes(),v=null,x=null,E=[],S=[],b=new Q,M=null,w=null,T=new Mn;T.viewport=new We;let P=new Mn;P.viewport=new We;let I=[T,P],D=new xl,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=E[U];return k===void 0&&(k=new Mr,E[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=E[U];return k===void 0&&(k=new Mr,E[U]=k),k.getGripSpace()},this.getHand=function(U){let k=E[U];return k===void 0&&(k=new Mr,E[U]=k),k.getHandSpace()};function z(U){let k=S.indexOf(U.inputSource);if(k===-1)return;let J=E[k];J!==void 0&&(J.update(U.inputSource,U.frame,c||o),J.dispatchEvent({type:U.type,data:U.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let U=0;U<E.length;U++){let k=S[U];k!==null&&(S[U]=null,E[U].disconnect(k))}N=null,O=null,m.reset();for(let U in d)delete d[U];if(t.setRenderTarget(v),u=null,f=null,p=null,s=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(b.width,b.height,!1),w!==null){let U=w.camera;U.fov=w.fov,U.zoom=w.zoom,U.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ut=null,lt=null;_.depth&&(lt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?_s:Ei,ut=_.stencil?Dr:di);let gt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Un(f.textureWidth,f.textureHeight,{format:jn,type:Fn,depthTexture:new rs(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let J={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Un(u.framebufferWidth,u.framebufferHeight,{format:jn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(U){for(let k=0;k<U.removed.length;k++){let J=U.removed[k],ut=S.indexOf(J);ut>=0&&(S[ut]=null,E[ut].disconnect(J))}for(let k=0;k<U.added.length;k++){let J=U.added[k],ut=S.indexOf(J);if(ut===-1){for(let gt=0;gt<E.length;gt++)if(gt>=S.length){S.push(J),ut=gt;break}else if(S[gt]===null){S[gt]=J,ut=gt;break}if(ut===-1)break}let lt=E[ut];lt&&lt.connect(J)}}let $=new A,it=new A;function et(U,k,J){$.setFromMatrixPosition(k.matrixWorld),it.setFromMatrixPosition(J.matrixWorld);let ut=$.distanceTo(it),lt=k.projectionMatrix.elements,gt=J.projectionMatrix.elements,Xt=lt[14]/(lt[10]-1),K=lt[14]/(lt[10]+1),st=(lt[9]+1)/lt[5],ot=(lt[9]-1)/lt[5],ht=(lt[8]-1)/lt[0],dt=(gt[8]+1)/gt[0],Vt=Xt*ht,Ut=Xt*dt,qt=ut/(-ht+dt),ne=qt*-ht;if(k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ne),U.translateZ(qt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),lt[10]===-1)U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let F=Xt+qt,Se=K+qt,me=Vt-ne,L=Ut+(ut-ne),R=st*K/Se*F,G=ot*K/Se*F;U.projectionMatrix.makePerspective(me,L,R,G,F,Se),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Pt(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let k=U.near,J=U.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(J=m.depthFar)),D.near=P.near=T.near=k,D.far=P.far=T.far=J,(N!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,O=D.far),D.layers.mask=U.layers.mask|6,T.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let ut=U.parent,lt=D.cameras;Pt(D,ut);for(let gt=0;gt<lt.length;gt++)Pt(lt[gt],ut);lt.length===2?et(D,T,P):D.projectionMatrix.copy(T.projectionMatrix),w===null&&U.isPerspectiveCamera&&(w={camera:U,fov:U.fov,zoom:U.zoom}),At(U,D,ut)};function At(U,k,J){J===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(J.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=_r*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(U){return d[U]};let ee=null;function Ht(U,k){if(h=k.getViewerPose(c||o),g=k,h!==null){let J=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let ut=!1;J.length!==D.cameras.length&&(D.cameras.length=0,ut=!0);for(let K=0;K<J.length;K++){let st=J[K],ot=null;if(u!==null)ot=u.getViewport(st);else{let dt=p.getViewSubImage(f,st);ot=dt.viewport,K===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let ht=I[K];ht===void 0&&(ht=new Mn,ht.layers.enable(K),ht.viewport=new We,I[K]=ht),ht.matrix.fromArray(st.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(st.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ot.x,ot.y,ot.width,ot.height),K===0&&(D.matrix.copy(ht.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ut===!0&&D.cameras.push(ht)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let K=p.getDepthInformation(J[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(lt&&lt.includes("camera-access")&&y){t.state.unbindTexture(),p=n.getBinding();for(let K=0;K<J.length;K++){let st=J[K].camera;if(st){let ot=d[st];ot||(ot=new Mo,d[st]=ot);let ht=p.getCameraImage(st);ot.sourceTexture=ht}}}}for(let J=0;J<E.length;J++){let ut=S[J],lt=E[J];ut!==null&&lt!==void 0&&lt.update(ut,k,c||o)}ee&&ee(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let $t=new xp;$t.setAnimationLoop(Ht),this.setAnimationLoop=function(U){ee=U},this.dispose=function(){}}},Yv=new Rt,Sp=new se;Sp.set(-1,0,0,0,1,0,0,0,1);function $v(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,mu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,v,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&u(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(x)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sp),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){let S=E.program;n.uniformBlockBinding(x,S)}function c(x,E){let S=s[x.id];S===void 0&&(m(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",_));let b=E.program;n.updateUBOMapping(x,b);let M=t.render.frame;r[x.id]!==M&&(f(x),r[x.id]=M)}function h(x){let E=p();x.__bindingPointIndex=E;let S=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let E=s[x.id],S=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let M=0,w=S.length;M<w;M++){let T=S[M];if(Array.isArray(T))for(let P=0,I=T.length;P<I;P++)u(T[P],M,P,b);else u(T,M,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,E,S,b){if(y(x,E,S,b)===!0){let M=x.__offset,w=x.value;if(Array.isArray(w)){let T=0;for(let P=0;P<w.length;P++){let I=w[P],D=d(I);g(I,x.__data,T),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(T+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function g(x,E,S){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,S)}function y(x,E,S,b){let M=x.value,w=E+"_"+S;if(b[w]===void 0)return typeof M=="number"||typeof M=="boolean"?b[w]=M:ArrayBuffer.isView(M)?b[w]=M.slice():b[w]=M.clone(),!0;{let T=b[w];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return b[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function m(x){let E=x.uniforms,S=0,b=16;for(let w=0,T=E.length;w<T;w++){let P=Array.isArray(E[w])?E[w]:[E[w]];for(let I=0,D=P.length;I<D;I++){let N=P[I],O=Array.isArray(N.value)?N.value:[N.value];for(let z=0,V=O.length;z<V;z++){let nt=O[z],$=d(nt),it=S%b,et=it%$.boundary,Pt=it+et;S+=et,Pt!==0&&b-Pt<$.storage&&(S+=b-Pt),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=$.storage}}}let M=S%b;return M>0&&(S+=b-M),x.__size=S,x.__cache={},this}function d(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",x),E}function _(x){let E=x.target;E.removeEventListener("dispose",_);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function v(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}var Kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function Jv(){return wi===null&&(wi=new _o(Kv,16,16,ys,fi),wi.name="DFG_LUT",wi.minFilter=En,wi.magFilter=En,wi.wrapS=yi,wi.wrapT=yi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var dc=class{constructor(t={}){let{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=u,m=new Set([Al,Rl,Tl]),d=new Set([Fn,di,Lr,Dr,Sl,bl]),_=new Uint32Array(4),v=new Int32Array(4),x=new A,E=null,S=null,b=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,I=null,D=null,N=null,O=null;this._outputColorSpace=Fe;let z=0,V=0,nt=null,$=-1,it=null,et=new We,Pt=new We,At=null,ee=new ae(0),Ht=0,$t=e.width,U=e.height,k=1,J=null,ut=null,lt=new We(0,0,$t,U),gt=new We(0,0,$t,U),Xt=!1,K=new br,st=!1,ot=!1,ht=new Rt,dt=new A,Vt=new We,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ne(){return nt===null?k:1}let F=n;function Se(C,B){return e.getContext(C,B)}let me,L,R,G,Y,j,pt,xt,tt,at,vt,Gt,bt,Mt,Wt,jt,oe,H,Et,rt,St,Ct,ct;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",ni,!1),F===null){let B="webgl2";if(F=Se(B,C),F===null)throw Se(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(C){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",ni,!1),Qt("WebGLRenderer: "+C.message),C}function Yt(){me=new sy(F),me.init(),St=new Wv(F,me),L=new $_(F,me,t,St),R=new Vv(F,me),L.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),D=F.createFramebuffer(),N=F.createFramebuffer(),O=F.createFramebuffer(),G=new ay(F),Y=new Av,j=new Gv(F,me,R,Y,L,St,G),pt=new iy(T),xt=new cg(F),Ct=new q_(F,xt),tt=new ry(F,xt,G,Ct),at=new cy(F,tt,xt,Ct,G),H=new ly(F,L,j),Wt=new Z_(Y),vt=new Rv(T,pt,me,L,Ct,Wt),Gt=new $v(T,Y),bt=new Pv,Mt=new Fv(me),oe=new X_(T,pt,R,at,g,l),jt=new kv(T,at,L),ct=new Zv(F,G,L,R),Et=new Y_(F,me,G),rt=new oy(F,me,G),G.programs=vt.programs,T.capabilities=L,T.extensions=me,T.properties=Y,T.renderLists=bt,T.shadowMap=jt,T.state=R,T.info=G}y!==Fn&&(w=new uy(y,e.width,e.height,a,s,r));let Ft=new Du(T,F);this.xr=Ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize($t,U,!1))},this.getSize=function(C){return C.set($t,U)},this.setSize=function(C,B,Z=!0){if(Ft.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=C,U=B,e.width=Math.floor(C*k),e.height=Math.floor(B*k),Z===!0&&(e.style.width=C+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set($t*k,U*k).floor()},this.setDrawingBufferSize=function(C,B,Z){$t=C,U=B,k=Z,e.width=Math.floor(C*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,C,B)},this.setEffects=function(C){if(y===Fn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let B=0;B<C.length;B++)if(C[B].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(et)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,B,Z,X){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,B,Z,X),R.viewport(et.copy(lt).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,B,Z,X){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,B,Z,X),R.scissor(Pt.copy(gt).multiplyScalar(k).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(C){R.setScissorTest(Xt=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,Z=!0){let X=0;if(C){let q=!1;if(nt!==null){let Tt=nt.texture.format;q=m.has(Tt)}if(q){let Tt=nt.texture.type,Lt=d.has(Tt),wt=oe.getClearColor(),Dt=oe.getClearAlpha(),Ot=wt.r,ce=wt.g,ge=wt.b;Lt?(_[0]=Ot,_[1]=ce,_[2]=ge,_[3]=Dt,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=Ot,v[1]=ce,v[2]=ge,v[3]=Dt,F.clearBufferiv(F.COLOR,0,v))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",ni,!1),oe.dispose(),bt.dispose(),Mt.dispose(),Y.dispose(),pt.dispose(),at.dispose(),Ct.dispose(),ct.dispose(),vt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",pd),Ft.removeEventListener("sessionend",md),bs.stop()};function Ne(C){C.preventDefault(),ho("WebGLRenderer: Context Lost."),P=!0}function be(){ho("WebGLRenderer: Context Restored."),P=!1;let C=G.autoReset,B=jt.enabled,Z=jt.autoUpdate,X=jt.needsUpdate,q=jt.type;Yt(),G.autoReset=C,jt.enabled=B,jt.autoUpdate=Z,jt.needsUpdate=X,jt.type=q}function ni(C){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gi(C){let B=C.target;B.removeEventListener("dispose",gi),Am(B)}function Am(C){Cm(C),Y.remove(C)}function Cm(C){let B=Y.get(C).programs;B!==void 0&&(B.forEach(function(Z){vt.releaseProgram(Z)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Z,X,q,Tt){B===null&&(B=Ut);let Lt=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=Lm(C,B,Z,X,q);R.setMaterial(X,Lt);let Dt=Z.index,Ot=1;if(X.wireframe===!0){if(Dt=tt.getWireframeAttribute(Z),Dt===void 0)return;Ot=2}let ce=Z.drawRange,ge=Z.attributes.position,Nt=ce.start*Ot,we=(ce.start+ce.count)*Ot;Tt!==null&&(Nt=Math.max(Nt,Tt.start*Ot),we=Math.min(we,(Tt.start+Tt.count)*Ot)),Dt!==null?(Nt=Math.max(Nt,0),we=Math.min(we,Dt.count)):ge!=null&&(Nt=Math.max(Nt,0),we=Math.min(we,ge.count));let tn=we-Nt;if(tn<0||tn===1/0)return;Ct.setup(q,X,wt,Z,Dt);let ze,Le=Et;if(Dt!==null&&(ze=xt.get(Dt),Le=rt,Le.setIndex(ze)),q.isMesh)X.wireframe===!0?(R.setLineWidth(X.wireframeLinewidth*ne()),Le.setMode(F.LINES)):Le.setMode(F.TRIANGLES);else if(q.isLine){let wn=X.linewidth;wn===void 0&&(wn=1),R.setLineWidth(wn*ne()),q.isLineSegments?Le.setMode(F.LINES):q.isLineLoop?Le.setMode(F.LINE_LOOP):Le.setMode(F.LINE_STRIP)}else q.isPoints?Le.setMode(F.POINTS):q.isSprite&&Le.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let wn=q._multiDrawStarts,It=q._multiDrawCounts,Pn=q._multiDrawCount,_e=Dt?xt.get(Dt).bytesPerElement:1,Zn=Y.get(X).currentProgram.getUniforms();for(let xi=0;xi<Pn;xi++)Zn.setValue(F,"_gl_DrawID",xi),Le.render(wn[xi]/_e,It[xi])}else if(q.isInstancedMesh)Le.renderInstances(Nt,tn,q.count);else if(Z.isInstancedBufferGeometry){let wn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,wn);Le.renderInstances(Nt,tn,It)}else Le.render(Nt,tn)};function fd(C,B,Z,X){I!==null&&C.isNodeMaterial&&I.setObject(X,C),st===!0&&Wt.setState(C,Z,!1),C.transparent===!0&&C.side===De&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,ca(C,B,X),C.side=ps,C.needsUpdate=!0,ca(C,B,X),C.side=De):ca(C,B,X)}this.compile=function(C,B,Z=null){Z===null&&(Z=C),I!==null&&I.renderStart(C,B,Z),S=Mt.get(Z),S.init(B),M.push(S),Z.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),C!==Z&&C.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),ot=this.localClippingEnabled,st=Wt.init(this.clippingPlanes,ot),st===!0&&Wt.setGlobalState(this.clippingPlanes,B),I!==null&&jt.render(S.state.shadowsArray,Z,B);let X=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){let wt=Tt[Lt];fd(wt,Z,B,q),X.add(wt)}else fd(Tt,Z,B,q),X.add(Tt)}),S=M.pop(),I!==null&&I.renderEnd(),X},this.compileAsync=function(C,B,Z=null){let X=this.compile(C,B,Z);return new Promise(q=>{function Tt(){if(X.forEach(function(Lt){let Dt=Y.get(Lt).currentProgram;(Dt===void 0||Dt.isReady())&&X.delete(Lt)}),X.size===0){q(C);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let oh=null;function Pm(C){oh&&oh(C)}function pd(){bs.stop()}function md(){bs.start()}let bs=new xp;bs.setAnimationLoop(Pm),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(C){oh=C,Ft.setAnimationLoop(C),C===null?bs.stop():bs.start()},Ft.addEventListener("sessionstart",pd),Ft.addEventListener("sessionend",md),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,B);let Z=Ft.enabled===!0&&Ft.isPresenting===!0,X=w!==null&&(nt===null||Z)&&w.begin(T,nt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(B),B=Ft.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,B,nt),S=Mt.get(C,M.length),S.init(B),S.state.textureUnits=j.getTextureUnits(),M.push(S),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(ht,ai,B.reversedDepth),ot=this.localClippingEnabled,st=Wt.init(this.clippingPlanes,ot),E=bt.get(C,b.length),E.init(),b.push(E),Ft.enabled===!0&&Ft.isPresenting===!0){let Lt=T.xr.getDepthSensingMesh();Lt!==null&&ah(Lt,B,-1/0,T.sortObjects)}ah(C,B,0,T.sortObjects),E.finish(),I!==null&&I.updateLights(S.state.lightsArray),T.sortObjects===!0&&E.sort(J,ut),qt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,qt&&oe.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Wt.beginShadows();let q=S.state.shadowsArray;if(jt.render(q,C,B),st===!0&&Wt.endShadows(),(X&&w.hasRenderPass())===!1){let Lt=E.opaque,wt=E.transmissive;if(S.setupLights(),B.isArrayCamera){let Dt=B.cameras;if(wt.length>0)for(let Ot=0,ce=Dt.length;Ot<ce;Ot++){let ge=Dt[Ot];xd(Lt,wt,C,ge)}qt&&oe.render(C);for(let Ot=0,ce=Dt.length;Ot<ce;Ot++){let ge=Dt[Ot];gd(E,C,ge,ge.viewport)}}else wt.length>0&&xd(Lt,wt,C,B),qt&&oe.render(C),gd(E,C,B)}nt!==null&&V===0&&(j.updateMultisampleRenderTarget(nt),j.updateRenderTargetMipmap(nt)),X&&w.end(T),C.isScene===!0&&C.onAfterRender(T,C,B),Ct.resetDefaultState(),$=-1,it=null,M.pop(),M.length>0?(S=M[M.length-1],j.setTextureUnits(S.state.textureUnits),st===!0&&Wt.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,I!==null&&I.renderEnd()};function ah(C,B,Z,X){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(K)){X&&Vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);let Lt=at.update(C),wt=C.material;wt.visible&&E.push(C,Lt,wt,Z,Vt.z,null,B)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(K))){let Lt=at.update(C),wt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Vt.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Vt.copy(Lt.boundingSphere.center)),Vt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){let Dt=Lt.groups;for(let Ot=0,ce=Dt.length;Ot<ce;Ot++){let ge=Dt[Ot],Nt=wt[ge.materialIndex];Nt&&Nt.visible&&E.push(C,Lt,Nt,Z,Vt.z,ge,B)}}else wt.visible&&E.push(C,Lt,wt,Z,Vt.z,null,B)}}let Tt=C.children;for(let Lt=0,wt=Tt.length;Lt<wt;Lt++)ah(Tt[Lt],B,Z,X)}function gd(C,B,Z,X){let{opaque:q,transmissive:Tt,transparent:Lt}=C;S.setupLightsView(Z),st===!0&&Wt.setGlobalState(T.clippingPlanes,Z),X&&R.viewport(et.copy(X)),q.length>0&&la(q,B,Z),Tt.length>0&&la(Tt,B,Z),Lt.length>0&&la(Lt,B,Z),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function xd(C,B,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let Nt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new Un(1,1,{generateMipmaps:!0,type:Nt?fi:Fn,minFilter:xs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Tt=S.state.transmissionRenderTarget[X.id],Lt=X.viewport||et;Tt.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);let wt=T.getRenderTarget(),Dt=T.getActiveCubeFace(),Ot=T.getActiveMipmapLevel();T.setRenderTarget(Tt),T.getClearColor(ee),Ht=T.getClearAlpha(),Ht<1&&T.setClearColor(16777215,.5),T.clear(),qt&&oe.render(Z);let ce=T.toneMapping;T.toneMapping=ui;let ge=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),st===!0&&Wt.setGlobalState(T.clippingPlanes,X),la(C,Z,X),j.updateMultisampleRenderTarget(Tt),j.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let we=0,tn=B.length;we<tn;we++){let ze=B[we],{object:Le,geometry:wn,material:It,group:Pn}=ze;if(It.side===De&&Le.layers.test(X.layers)){let _e=It.side;It.side=rn,It.needsUpdate=!0,_d(Le,Z,X,wn,It,Pn),It.side=_e,It.needsUpdate=!0,Nt=!0}}Nt===!0&&(j.updateMultisampleRenderTarget(Tt),j.updateRenderTargetMipmap(Tt))}T.setRenderTarget(wt,Dt,Ot),T.setClearColor(ee,Ht),ge!==void 0&&(X.viewport=ge),T.toneMapping=ce}function la(C,B,Z){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Tt=C.length;q<Tt;q++){let Lt=C[q],{object:wt,geometry:Dt,group:Ot}=Lt,ce=Lt.material;ce.allowOverride===!0&&X!==null&&(ce=X),wt.layers.test(Z.layers)&&_d(wt,B,Z,Dt,ce,Ot)}}function _d(C,B,Z,X,q,Tt){I!==null&&q.isNodeMaterial&&I.setObject(C,q),C.onBeforeRender(T,B,Z,X,q,Tt),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(T,B,Z,X,C,Tt),q.transparent===!0&&q.side===De&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,T.renderBufferDirect(Z,B,X,q,C,Tt),q.side=ps,q.needsUpdate=!0,T.renderBufferDirect(Z,B,X,q,C,Tt),q.side=De):T.renderBufferDirect(Z,B,X,q,C,Tt),C.onAfterRender(T,B,Z,X,q,Tt)}function ca(C,B,Z){B.isScene!==!0&&(B=Ut);let X=Y.get(C),q=S.state.lights,Tt=S.state.shadowsArray,Lt=q.state.version,wt=vt.getParameters(C,q.state,Tt,B,Z,S.state.lightProbeGridArray),Dt=vt.getProgramCacheKey(wt),Ot=X.programs;X.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let ce=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;X.envMap=pt.get(C.envMap||X.environment,ce),X.envMapRotation=X.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",gi),Ot=new Map,X.programs=Ot);let ge=Ot.get(Dt);if(ge!==void 0){if(X.currentProgram===ge&&X.lightsStateVersion===Lt)return vd(C,wt),ge}else wt.uniforms=vt.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,Z,wt),C.onBeforeCompile(wt,T),ge=vt.acquireProgram(wt,Dt),Ot.set(Dt,ge),X.uniforms=wt.uniforms;let Nt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Nt.clippingPlanes=Wt.uniform),vd(C,wt),X.needsLights=Nm(C),X.lightsStateVersion=Lt,X.needsLights&&(Nt.ambientLightColor.value=q.state.ambient,Nt.lightProbe.value=q.state.probe,Nt.sunLights.value=q.state.sun,Nt.sunLightShadows.value=q.state.sunShadow,Nt.directionalLights.value=q.state.directional,Nt.directionalLightShadows.value=q.state.directionalShadow,Nt.spotLights.value=q.state.spot,Nt.spotLightShadows.value=q.state.spotShadow,Nt.rectAreaLights.value=q.state.rectArea,Nt.ltc_1.value=q.state.rectAreaLTC1,Nt.ltc_2.value=q.state.rectAreaLTC2,Nt.pointLights.value=q.state.point,Nt.pointLightShadows.value=q.state.pointShadow,Nt.hemisphereLights.value=q.state.hemi,Nt.sunShadowMatrix.value=q.state.sunShadowMatrix,Nt.sunShadowCascade.value=q.state.sunShadowCascade,Nt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Nt.spotLightMatrix.value=q.state.spotLightMatrix,Nt.spotLightMap.value=q.state.spotLightMap,Nt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=ge,X.uniformsList=null,ge}function yd(C){if(C.uniformsList===null){let B=C.currentProgram.getUniforms();C.uniformsList=Fr.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function vd(C,B){let Z=Y.get(C);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Im(C,B){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let Z=0,X=C.length;Z<X;Z++){let q=C[Z];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function Lm(C,B,Z,X,q){B.isScene!==!0&&(B=Ut),j.resetTextureUnits();let Tt=B.fog,Lt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,wt=nt===null?T.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xe.workingColorSpace,Dt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ot=pt.get(X.envMap||Lt,Dt),ce=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ge=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!Z.morphAttributes.position,we=!!Z.morphAttributes.normal,tn=!!Z.morphAttributes.color,ze=ui;X.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ze=T.toneMapping);let Le=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wn=Le!==void 0?Le.length:0,It=Y.get(X),Pn=S.state.lights;if(st===!0&&(ot===!0||C!==it)){let Ue=C===it&&X.id===$;Wt.setState(X,C,Ue)}let _e=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Pn.state.version||It.outputColorSpace!==wt||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Ot||X.fog===!0&&It.fog!==Tt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Wt.numPlanes||It.numIntersection!==Wt.numIntersection)||It.vertexAlphas!==ce||It.vertexTangents!==ge||It.morphTargets!==Nt||It.morphNormals!==we||It.morphColors!==tn||It.toneMapping!==ze||It.morphTargetsCount!==wn||!!It.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,It.__version=X.version);let Zn=It.currentProgram;_e===!0&&(Zn=ca(X,B,q),I&&X.isNodeMaterial&&I.onUpdateProgram(X,Zn,It));let xi=!1,Ki=!1,$s=!1,Ce=Zn.getUniforms(),je=It.uniforms;if(R.useProgram(Zn.program)&&(xi=!0,Ki=!0,$s=!0),X.id!==$&&($=X.id,Ki=!0),It.needsLights){let Ue=Im(S.state.lightProbeGridArray,q);It.lightProbeGrid!==Ue&&(It.lightProbeGrid=Ue,Ki=!0)}if(xi||it!==C){R.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ce.setValue(F,"projectionMatrix",C.projectionMatrix),Ce.setValue(F,"viewMatrix",C.matrixWorldInverse);let ji=Ce.map.cameraPosition;ji!==void 0&&ji.setValue(F,dt.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&Ce.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),it!==C&&(it=C,Ki=!0,$s=!0)}if(It.needsLights&&(Pn.state.sunShadowMap.length>0&&Ce.setValue(F,"sunShadowMap",Pn.state.sunShadowMap,j),Pn.state.directionalShadowMap.length>0&&Ce.setValue(F,"directionalShadowMap",Pn.state.directionalShadowMap,j),Pn.state.spotShadowMap.length>0&&Ce.setValue(F,"spotShadowMap",Pn.state.spotShadowMap,j),Pn.state.pointShadowMap.length>0&&Ce.setValue(F,"pointShadowMap",Pn.state.pointShadowMap,j)),q.isSkinnedMesh){Ce.setOptional(F,q,"bindMatrix"),Ce.setOptional(F,q,"bindMatrixInverse");let Ue=q.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ce.setValue(F,"boneTexture",Ue.boneTexture,j))}q.isBatchedMesh&&(Ce.setOptional(F,q,"batchingTexture"),Ce.setValue(F,"batchingTexture",q._matricesTexture,j),Ce.setOptional(F,q,"batchingIdTexture"),Ce.setValue(F,"batchingIdTexture",q._indirectTexture,j),Ce.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(F,"batchingColorTexture",q._colorsTexture,j));let Ji=Z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&H.update(q,Z,Zn),(Ki||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,Ce.setValue(F,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(je.envMapIntensity.value=B.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=Jv()),Ki){if(Ce.setValue(F,"toneMappingExposure",T.toneMappingExposure),It.needsLights&&Dm(je,$s),Tt&&X.fog===!0&&Gt.refreshFogUniforms(je,Tt),Gt.refreshMaterialUniforms(je,X,k,U,S.state.transmissionRenderTarget[C.id]),It.needsLights&&It.lightProbeGrid){let Ue=It.lightProbeGrid;je.probesSH.value=Ue.texture,je.probesMin.value.copy(Ue.boundingBox.min),je.probesMax.value.copy(Ue.boundingBox.max),je.probesResolution.value.copy(Ue.resolution)}Fr.upload(F,yd(It),je,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fr.upload(F,yd(It),je,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(F,"center",q.center),Ce.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(F,"normalMatrix",q.normalMatrix),Ce.setValue(F,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Ue=X.uniformsGroups;for(let ji=0,Zs=Ue.length;ji<Zs;ji++){let Ed=Ue[ji];ct.update(Ed,Zn),ct.bind(Ed,Zn)}}return Zn}function Dm(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.sunLights.needsUpdate=B,C.sunLightShadows.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Nm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(C,B,Z){let X=Y.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(C.texture).__webglTexture=B,Y.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){let Z=Y.get(C);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,Z=0){nt=C,z=B,V=Z;let X=null,q=!1,Tt=!1;if(C){let wt=Y.get(C);if(wt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(F.FRAMEBUFFER,wt.__webglFramebuffer),et.copy(C.viewport),Pt.copy(C.scissor),At=C.scissorTest,R.viewport(et),R.scissor(Pt),R.setScissorTest(At),$=-1;return}else if(wt.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(wt.__hasExternalTextures)j.rebindTextures(C,Y.get(C.texture).__webglTexture,Y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ce=C.depthTexture;if(wt.__boundDepthTexture!==ce){if(ce!==null&&Y.has(ce)&&(C.width!==ce.image.width||C.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}let Dt=C.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Tt=!0);let Ot=Y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?X=Ot[B][Z]:X=Ot[B],q=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?X=Y.get(C).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[Z]:X=Ot,et.copy(C.viewport),Pt.copy(C.scissor),At=C.scissorTest}else et.copy(lt).multiplyScalar(k).floor(),Pt.copy(gt).multiplyScalar(k).floor(),At=Xt;if(Z!==0&&(X=D),R.bindFramebuffer(F.FRAMEBUFFER,X)&&R.drawBuffers(C,X),R.viewport(et),R.scissor(Pt),R.setScissorTest(At),q){let wt=Y.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,Z)}else if(Tt){let wt=B;for(let Dt=0;Dt<C.textures.length;Dt++){let Ot=Y.get(C.textures[Dt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,Z,wt)}}else if(C!==null&&Z!==0){let wt=Y.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wt.__webglTexture,Z)}$=-1};function Md(C){let B=Y.get(C);return(B.__readFormat!==C.format||B.__readType!==C.type)&&(B.__readFormat=C.format,B.__readType=C.type,B.__formatReadable=L.textureFormatReadable(C.format),B.__typeReadable=L.textureTypeReadable(C.type)),B}this.readRenderTargetPixels=function(C,B,Z,X,q,Tt,Lt,wt=0){if(!(C&&C.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Dt=Dt[Lt]),Dt){R.bindFramebuffer(F.FRAMEBUFFER,Dt);try{let Ot=C.textures[wt],ce=Ot.format,ge=Ot.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Nt=Md(Ot);if(Nt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-X&&Z>=0&&Z<=C.height-q&&F.readPixels(B,Z,X,q,St.convert(ce),St.convert(ge),Tt)}finally{let Ot=nt!==null?Y.get(nt).__webglFramebuffer:null;R.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,B,Z,X,q,Tt,Lt,wt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Dt=Dt[Lt]),Dt)if(B>=0&&B<=C.width-X&&Z>=0&&Z<=C.height-q){R.bindFramebuffer(F.FRAMEBUFFER,Dt);let Ot=C.textures[wt],ce=Ot.format,ge=Ot.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Nt=Md(Ot);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,we),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(B,Z,X,q,St.convert(ce),St.convert(ge),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let tn=nt!==null?Y.get(nt).__webglFramebuffer:null;R.bindFramebuffer(F.FRAMEBUFFER,tn);let ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zf(F,ze,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,we),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(we),F.deleteSync(ze),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,Z=0){let X=Math.pow(2,-Z),q=Math.floor(C.image.width*X),Tt=Math.floor(C.image.height*X),Lt=B!==null?B.x:0,wt=B!==null?B.y:0;j.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Lt,wt,q,Tt),R.unbindTexture()},this.copyTextureToTexture=function(C,B,Z=null,X=null,q=0,Tt=0){let Lt,wt,Dt,Ot,ce,ge,Nt,we,tn,ze=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(Z!==null)Lt=Z.max.x-Z.min.x,wt=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Ot=Z.min.x,ce=Z.min.y,ge=Z.isBox3?Z.min.z:0;else{let je=Math.pow(2,-q);Lt=Math.floor(ze.width*je),wt=Math.floor(ze.height*je),C.isDataArrayTexture?Dt=ze.depth:C.isData3DTexture?Dt=Math.floor(ze.depth*je):Dt=1,Ot=0,ce=0,ge=0}X!==null?(Nt=X.x,we=X.y,tn=X.z):(Nt=0,we=0,tn=0);let Le=St.convert(B.format),wn=St.convert(B.type),It;B.isData3DTexture?(j.setTexture3D(B,0),It=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(j.setTexture2DArray(B,0),It=F.TEXTURE_2D_ARRAY):(j.setTexture2D(B,0),It=F.TEXTURE_2D),R.activeTexture(F.TEXTURE0),R.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Pn=R.getParameter(F.UNPACK_ROW_LENGTH),_e=R.getParameter(F.UNPACK_IMAGE_HEIGHT),Zn=R.getParameter(F.UNPACK_SKIP_PIXELS),xi=R.getParameter(F.UNPACK_SKIP_ROWS),Ki=R.getParameter(F.UNPACK_SKIP_IMAGES);R.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),R.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),R.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),R.pixelStorei(F.UNPACK_SKIP_ROWS,ce),R.pixelStorei(F.UNPACK_SKIP_IMAGES,ge);let $s=C.isDataArrayTexture||C.isData3DTexture,Ce=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){let je=Y.get(C),Ji=Y.get(B),Ue=Y.get(je.__renderTarget),ji=Y.get(Ji.__renderTarget);R.bindFramebuffer(F.READ_FRAMEBUFFER,Ue.__webglFramebuffer),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Zs=0;Zs<Dt;Zs++)$s&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(C).__webglTexture,q,ge+Zs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,Tt,tn+Zs)),F.blitFramebuffer(Ot,ce,Lt,wt,Nt,we,Lt,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);R.bindFramebuffer(F.READ_FRAMEBUFFER,null),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Y.has(C)){let je=Y.get(C),Ji=Y.get(B);R.bindFramebuffer(F.READ_FRAMEBUFFER,N),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Ue=0;Ue<Dt;Ue++)$s?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.__webglTexture,q,ge+Ue):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,je.__webglTexture,q),Ce?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ji.__webglTexture,Tt,tn+Ue):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ji.__webglTexture,Tt),q!==0?F.blitFramebuffer(Ot,ce,Lt,wt,Nt,we,Lt,wt,F.COLOR_BUFFER_BIT,F.NEAREST):Ce?F.copyTexSubImage3D(It,Tt,Nt,we,tn+Ue,Ot,ce,Lt,wt):F.copyTexSubImage2D(It,Tt,Nt,we,Ot,ce,Lt,wt);R.bindFramebuffer(F.READ_FRAMEBUFFER,null),R.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ce?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(It,Tt,Nt,we,tn,Lt,wt,Dt,Le,wn,ze.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(It,Tt,Nt,we,tn,Lt,wt,Dt,Le,ze.data):F.texSubImage3D(It,Tt,Nt,we,tn,Lt,wt,Dt,Le,wn,ze):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,Nt,we,Lt,wt,Le,wn,ze.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,Nt,we,ze.width,ze.height,Le,ze.data):F.texSubImage2D(F.TEXTURE_2D,Tt,Nt,we,Lt,wt,Le,wn,ze);R.pixelStorei(F.UNPACK_ROW_LENGTH,Pn),R.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),R.pixelStorei(F.UNPACK_SKIP_PIXELS,Zn),R.pixelStorei(F.UNPACK_SKIP_ROWS,xi),R.pixelStorei(F.UNPACK_SKIP_IMAGES,Ki),Tt===0&&B.generateMipmaps&&F.generateMipmap(It),R.unbindTexture()},this.initRenderTarget=function(C){Y.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),R.unbindTexture()},this.resetState=function(){z=0,V=0,nt=null,R.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var bp={type:"change"},Uu={type:"start"},Tp={type:"end"},mc=new ss,wp=new Gn,jv=Math.cos(70*on.DEG2RAD),pn=new A,On=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nu=1e-6,gc=class extends Oo{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Ge,this._lastTargetPosition=new A,this._quat=new Ge().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pr,this._sphericalDelta=new Pr,this._scale=1,this._panOffset=new A,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new A,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t1.bind(this),this._onPointerDown=Qv.bind(this),this._onPointerUp=e1.bind(this),this._onContextMenu=l1.bind(this),this._onMouseWheel=s1.bind(this),this._onKeyDown=r1.bind(this),this._onTouchStart=o1.bind(this),this._onTouchMove=a1.bind(this),this._onMouseDown=n1.bind(this),this._onMouseMove=i1.bind(this),this._interceptControlDown=c1.bind(this),this._interceptControlUp=h1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ae.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bp),this.update(),this.state=Ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;pn.copy(e).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),e.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=pn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(mc.origin.copy(this.object.position),mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mc.direction))<jv?this.object.lookAt(this.target):(wp.setFromNormalAndCoplanarPoint(this.object.up,this.target),mc.intersectPlane(wp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nu||this._lastTargetPosition.distanceToSquared(this.target)>Nu?(this.dispatchEvent(bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?On/60*this.autoRotateSpeed*t:On/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pn.setFromMatrixColumn(e,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,e){this.screenSpacePanning===!0?pn.setFromMatrixColumn(e,1):(pn.setFromMatrixColumn(e,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;pn.copy(s).sub(this.target);let r=pn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Qv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function e1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=Ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function n1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ae.DOLLY;break;case ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}break;case ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Uu)}function i1(i){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function s1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(i.preventDefault(),this.dispatchEvent(Uu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tp))}function r1(i){this.enabled!==!1&&this._handleKeyDown(i)}function o1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ae.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ae.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Uu)}function a1(i){switch(this._trackPointer(i),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ae.NONE}}function l1(i){this.enabled!==!1&&i.preventDefault()}function c1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hr=class i extends W{constructor(){let t=i.SkyShader,e=new yn({name:t.name,uniforms:Hs.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:rn,depthWrite:!1});super(new kt(1,1,1),e),this.isSky=!0}};Hr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new A},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var jo=i=>Math.min(1,Math.max(0,i)),ue=(i,t,e)=>i+(t-i)*e,Wi=(i,t,e)=>{let n=jo((e-i)/(t-i));return n*n*(3-2*n)};var Bt={hold:-5.75,orlop:-1.15,lower:1,middle:3.1,upper:5.2,qd:7.25,poop:9.15},ln=1.2,Ze=15.6,$e=-13.4;function cn(i){let t=(i-2)/28;return .85*t*t}function ft(i,t){return Bt[i]+cn(t)}function Pe(i){let t=8.65+cn(i);return t+=1.9*Wi($e+1,$e-1,i),t+=.9*Wi(-25,-29.5,i),t}function Be(i){if(i<2){let t=jo((i- -7.4)/9.4);return 24.75+4.3*(1-(1-t)*(1-t))}return 29.05+.06*(i-2)}var ks=1.6;function ve(i){if(i<ks){let t=jo((i- -7.4)/(ks- -7.4));return ue(-25.75,-27.65,t)}return-27.65-1.1*Wi(ks,4.5,i)-.11*Math.max(0,i-4.5)}function zr(i){if(i<=-7.4)return 0;if(i<1.6){let e=(1.6-i)/9;return 7.9*Math.pow(1-Math.pow(e,2.4),1/2.4)}let t=(i-1.6)/(13-1.6);return 7.9*(1-.17*Math.pow(t,1.6))}function Qo(i){return .8*Wi(-2.4,2.4,i)}function Fu(i,t){let e=Wi(-6.5,1.5,t),n=ue(.58,.73,e);if(i>n){let r=jo((i-n)/(1-n)),o=ue(1.7,2.2,e),a=ue(1.05,.46,e);return Math.pow(Math.max(0,1-Math.pow(r,o)),a)}let s=ue(.44,.24,e);if(i<s){let r=jo((s-i)/s),o=ue(1.6,2,e),a=ue(1.15,.65,e),l=Qo(t);return l+(1-l)*Math.pow(Math.max(0,1-Math.pow(r,o)),a)}return 1}function yt(i,t){let e=ve(t),n=Be(t);return i<e||i>n?0:zr(t)*Fu((i-e)/(n-e),t)}var an=-31,Qn=31,Ri=-10,pi=14,Ou=i=>(i-an)/(Qn-an),Bu=(i,t)=>(t-cn(i)-Ri)/(pi-Ri),kr=[{name:"lower",deck:"lower",count:15,x0:-20.4,dx:3,cy:.82,w:1.05,h:.95,lid:!0,bore:.165,len:3},{name:"middle",deck:"middle",count:14,x0:-21,dx:3.05,cy:.78,w:.95,h:.86,lid:!0,bore:.15,len:2.9},{name:"upper",deck:"upper",count:15,x0:-21,dx:3.05,cy:.74,w:.85,h:.8,lid:!0,bore:.12,len:2.6},{name:"qd",deck:"qd",count:6,x0:-20.4,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"fc",deck:"qd",count:1,x0:18.6,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"carronade",deck:"qd",count:1,x0:21.4,dx:3,cy:.66,w:.85,h:.75,lid:!1,bore:.2,len:1.6,carronade:!0}];function Ai(){let i=[];for(let t of kr)for(let e=0;e<t.count;e++){let n=t.x0+e*t.dx;i.push({tier:t,x:n,y:Bt[t.deck]+t.cy+cn(n)})}return i}var Cn=[{name:"after hatch",x:-8.4,w:2.2,d:2},{name:"main hatch",x:1.8,w:2.6,d:2.4},{name:"main ladderway",x:6,w:2.4,d:2.4,ladder:!0},{name:"fore ladderway",x:10.2,w:3,d:2.6,ladder:!0},{name:"fore hatch",x:13.6,w:1.8,d:1.8},{name:"forward hatch",x:18.2,w:2.2,d:2},{name:"after ladderway",x:-12.2,w:2,d:1.6,ladder:!0}];function xc(i,t=1){return{x:i.x,zFoot:t*(i.d/2+1),zTop:t*(i.d/2-.05),side:t}}var _c=-5.3;function yc(){let i=Cn.find(t=>t.name==="main hatch");return{x:i.x,zFoot:-(i.d/2+1.75),zTop:-(i.d/2-.05),side:-1,hatch:i}}var vc=[{from:"upper",to:"qd",x:ln+2.2,run:-2,z:2.6},{from:"upper",to:"qd",x:Ze-2.2,run:2,z:2.6},{from:"qd",to:"poop",x:$e+2.3,run:-2,z:3.4}],Rp=2.5,Ap=kr.slice(0,3).map(i=>{let t=Bt[i.deck]+i.cy;return[t-i.h/2-.2,t+i.h/2+.2]}),Vr=.45,Ci={fore:{x:22.75,scale:.9,rake:0},main:{x:-2.45,scale:1,rake:.035},mizzen:{x:-19.15,scale:.72,rake:.052}},Cp={main:{course:31.19,topsail:22.25,topgallant:14.86,royal:10.97},fore:{course:27.15,topsail:19.66,topgallant:13.11,royal:9.75},mizzen:{course:19.66,topsail:14.94,topgallant:9.98,royal:7.32}},Pp=-.0068;var Ip={day:{elev:28,az:215,color:"#fff1dc",intensity:3.2,hemi:["#cfe0f0","#30404a",.5],exposure:.55,fog:"#b9c8d2",env:.7,sky:[2.2,2.2,.003,.82],night:0,light:1},dusk:{elev:2.5,az:255,color:"#ffb27a",intensity:1.9,hemi:["#e0b8a0","#302830",.32],exposure:.62,fog:"#b98f7a",env:.55,sky:[6,2.8,.006,.9],night:.5,light:.6},night:{elev:-14,az:255,moon:{elev:34,az:140},color:"#b4c6ff",intensity:1,hemi:["#3a4c78","#06080e",.7],exposure:1.25,fog:"#0d1526",env:.45,sky:[1.2,.4,.002,.8],night:1,light:.16}};function u1(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,64);e.addColorStop(0,"rgba(255,250,235,1)"),e.addColorStop(.5,"rgba(255,250,235,1)"),e.addColorStop(.56,"rgba(200,210,255,0.35)"),e.addColorStop(1,"rgba(200,210,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="rgba(160,160,150,0.35)";for(let[s,r,o]of[[52,50,8],[74,60,6],[60,78,9],[80,44,4]])t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill();let n=new xn(i);return n.colorSpace=Fe,n}var Mc=class{constructor(t,e){this.renderer=t,this.scene=e,this.sky=new Hr,this.sky.scale.setScalar(8e3),e.add(this.sky),this.pmrem=new Or(t),this.envScene=new Ps,this.envSky=new Hr,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.sun=new Do("#fff1dc",3.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096);let n=this.sun.shadow.camera;n.left=-60,n.right=60,n.top=60,n.bottom=-60,n.near=10,n.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun,this.sun.target),this.hemi=new Po("#cfe0f0","#30404a",.5),e.add(this.hemi),e.fog=new fo("#b9c8d2",400,3800);let s=1800,r=new Float32Array(s*3);for(let a=0;a<s;a++){let l=Math.random(),c=Math.random()*.95+.05,h=l*Math.PI*2,p=Math.acos(1-c);r[a*3]=Math.sin(p)*Math.cos(h)*3e3,r[a*3+1]=Math.cos(p)*3e3,r[a*3+2]=Math.sin(p)*Math.sin(h)*3e3}let o=new de;o.setAttribute("position",new ye(r,3)),this.stars=new yo(o,new wr({color:"#dfe6ff",size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1})),this.stars.renderOrder=-1,e.add(this.stars),this.moon=new xo(new Sr({map:u1(),fog:!1,depthWrite:!1})),this.moon.scale.setScalar(150),e.add(this.moon),this.nightMaterials=[],this.name=null}dir(t,e){return new A().setFromSphericalCoords(1,on.degToRad(90-t),on.degToRad(e))}setTime(t,e){let n=Ip[t]||Ip.day;this.name=t,this.night=n.night;let s=this.dir(n.elev,n.az);for(let o of[this.sky,this.envSky]){let a=o.material.uniforms;[a.turbidity.value,a.rayleigh.value,a.mieCoefficient.value,a.mieDirectionalG.value]=n.sky,a.sunPosition.value.copy(s)}let r=n.moon?this.dir(n.moon.elev,n.moon.az):s;this.sun.position.copy(r).multiplyScalar(150),this.sun.color.set(n.color),this.sun.intensity=n.intensity,this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.renderer.toneMappingExposure=n.exposure,this.scene.fog.color.set(n.fog),this.stars.visible=this.moon.visible=!!n.moon,n.moon&&this.moon.position.copy(r).multiplyScalar(2900),this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,.1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=n.env,e&&(e.mesh.material.envMap=this.envRT.texture,e.mesh.material.envMapIntensity=n.moon?.07:.4,e.mesh.material.roughness=n.moon?.32:.14);for(let[o,a,l]of this.nightMaterials)o.emissiveIntensity=a+(l-a)*n.night;return this.light=n.light,n}},Ec=class{constructor(t,e,n=8){this.ship=t,this.lanterns=e,this.lights=[];for(let s=0;s<n;s++){let r=new Us("#ffb35c",0,14,1.4);t.body.add(r),this.lights.push(r)}this.timer=0}update(t,e,n,s=1/0){if(this.timer-=t,this.timer<=0){this.timer=.3;let o=this.lanterns.filter(a=>a.p.y<s+cn(a.p.x)+.3).map(a=>({l:a,d:a.p.distanceToSquared(e)})).sort((a,l)=>a.d-l.d);this.lights.forEach((a,l)=>{let c=o[l];c&&a.position.copy(c.l.p).add(new A(0,-.3,0)),a.userData.on=!!c})}let r=16*n;for(let o of this.lights)o.intensity=o.userData.on?r:0}};function vn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Yn(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function bn(i,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let s=new xn(i);return t&&(s.colorSpace=Fe),e&&(s.wrapS=s.wrapT=Wn),s.anisotropy=n,s.needsUpdate=!0,s}var qe={black:"#2a2d30",ochre:"#cfa65a",red:"#a88a52",deck:"#b49c76",canvas:"#e8dfc8",copper:"#a8603a",gold:"#d4a640"};function Dp(i,t=2.5){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=vn(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=(c,h)=>s[(Math.min(n-1,Math.max(0,h))*e+Math.min(e-1,Math.max(0,c)))*4]/255;for(let c=0;c<n;c++)for(let h=0;h<e;h++){let p=(l(h+1,c)-l(h-1,c))*t,f=(l(h,c+1)-l(h,c-1))*t,u=Math.hypot(p,f,1),g=(c*e+h)*4;a.data[g]=(-p/u*.5+.5)*255,a.data[g+1]=(f/u*.5+.5)*255,a.data[g+2]=(1/u*.5+.5)*255,a.data[g+3]=255}return o.putImageData(a,0,0),r}function Np(){let e=vn(4096,1024),n=e.getContext("2d"),s=vn(4096/2,1024/2),r=s.getContext("2d"),o=vn(1024,256),a=o.getContext("2d"),l=4096/(Qn-an),c=1024/(pi-Ri),h=m=>(m-an)*l,p=m=>(pi-m)*c,f=Yn(7);n.fillStyle=qe.black,n.fillRect(0,0,4096,1024),r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,4096/2,1024/2),n.fillStyle=qe.ochre;for(let[m,d]of Ap)n.fillRect(0,p(d),4096,p(m)-p(d));n.fillRect(0,p(Bt.qd+1.02),4096,.09*c);for(let m=Ri;m<pi;m+=.22){let d=[],_=an-f()*6;for(;_<Qn;)d.push(_),_+=5.5+f()*2;n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(0,p(m),4096,1.2),n.fillStyle="rgba(0,0,0,0.22)";for(let v of d)n.fillRect(h(v),p(m+.22),1.2,.22*c);r.fillStyle="rgb(70,70,70)",r.fillRect(0,p(m)/2-.5,4096/2,1.6);for(let v of d)r.fillRect(h(v)/2-.5,p(m+.22)/2,1.4,.22*c/2);r.fillStyle="rgba(100,100,100,0.8)";for(let v=an;v<Qn;v+=.75)r.fillRect(h(v)/2,p(m+.08)/2,1.2,1.2),r.fillRect(h(v)/2,p(m+.16)/2,1.2,1.2)}for(let m=0;m<9e3;m++){let d=110+f()*40;r.fillStyle=`rgba(${d|0},${d|0},${d|0},0.35)`,r.fillRect(f()*4096/2,f()*1024/2,4+f()*30,1)}for(let m=0;m<26e3;m++){let d=f()*.07;n.fillStyle=f()<.5?`rgba(0,0,0,${d})`:`rgba(255,240,210,${d*.6})`,n.fillRect(f()*4096,f()*1024,1+f()*5,1+f()*2)}for(let m of Ai()){let d=m.tier,_=m.y-cn(m.x),v=h(m.x-d.w/2),x=p(_+d.h/2),E=d.w*l,S=d.h*c;for(let M=0;M<5;M++){let w=v+f()*E,T=(.4+f()*1.2)*c,P=n.createLinearGradient(0,x+S,0,x+S+T);P.addColorStop(0,`rgba(20,14,8,${.12+f()*.12})`),P.addColorStop(1,"rgba(20,14,8,0)"),n.fillStyle=P,n.fillRect(w,x+S,2+f()*5,T)}n.fillStyle=qe.red,n.fillRect(v,x,E,S);let b=.09;n.fillStyle="#0c0705",n.fillRect(v+b*l,x+b*c,E-2*b*l,S-2*b*c),r.fillStyle="rgb(40,40,40)",r.fillRect((v+b*l)/2,(x+b*c)/2,(E-2*b*l)/2,(S-2*b*c)/2)}for(let m of["lower","middle","upper"])for(let d=-24;d<24;d+=4.6){let _=Bt[m]-.05,v=h(d+(m==="middle"?1.5:0)),x=p(_),E=n.createLinearGradient(0,x,0,x+1.1*c);E.addColorStop(0,"rgba(70,45,25,0.35)"),E.addColorStop(1,"rgba(70,45,25,0)"),n.fillStyle=E,n.fillRect(v-4,x,8,1.1*c),n.fillStyle="#3e4042",n.fillRect(v-5,x-4,10,8),n.fillStyle="#0a0806",n.beginPath(),n.ellipse(v,x,2.6,2.2,0,0,Math.PI*2),n.fill(),r.fillStyle="rgb(150,150,150)",r.fillRect(v/2-3.5,x/2-3,7,6),r.fillStyle="rgb(30,30,30)",r.fillRect(v/2-1.5,x/2-1.5,3,3)}for(let m=0;m<256;m++){let d=an+m/256*(Qn-an),_=an+(m+1)/256*(Qn-an),v=p(Vr+.45-cn(d)),x=p(Vr-cn(d)),E=n.createLinearGradient(0,v,0,x);E.addColorStop(0,"rgba(45,55,35,0)"),E.addColorStop(1,"rgba(45,55,35,0.55)"),n.fillStyle=E,n.fillRect(h(d),v,h(_)-h(d)+1,x-v)}let u=m=>{m.beginPath(),m.moveTo(0,1024);for(let d=0;d<=256;d++){let _=an+d/256*(Qn-an);m.lineTo(h(_),p(Vr-cn(_)))}m.lineTo(4096,1024),m.closePath()};n.save(),u(n),n.clip(),r.save(),r.scale(.5,.5),u(r),r.clip(),n.fillStyle=qe.copper,n.fillRect(0,0,4096,1024),r.fillStyle="rgb(128,128,128)",r.fillRect(0,0,4096,1024);let g=1.22,y=.36;for(let m=0,d=Ri;d<3;d+=y,m++)for(let _=an-m%2*g*.5;_<Qn;_+=g){let v=f(),x=150+v*40,E=82+v*30+f()*25,S=48+v*22;n.fillStyle=`rgb(${x|0},${E|0},${S|0})`,n.fillRect(h(_)+1,p(d+y)+1,g*l-2,y*c-2),f()<.35&&(n.fillStyle=`rgba(70,140,110,${.15+f()*.25})`,n.fillRect(h(_)+1,p(d+y)+1,g*l-2,y*c-2)),r.fillStyle="rgb(165,165,165)",r.fillRect(h(_),p(d+y),3,y*c),r.fillRect(h(_),p(d+y),g*l,3),r.fillStyle="rgb(105,105,105)";for(let b=0;b<12;b++)r.fillRect(h(_)+6+b*(g*l-12)/11,p(d+y)+6,2,2)}n.restore(),r.restore(),a.fillStyle="rgb(0,165,0)",a.fillRect(0,0,1024,256),a.beginPath(),a.moveTo(0,256);for(let m=0;m<=128;m++){let d=an+m/128*(Qn-an);a.lineTo((d-an)/(Qn-an)*1024,(pi-(Vr-cn(d)))/(pi-Ri)*256)}return a.lineTo(1024,256),a.closePath(),a.fillStyle="rgb(0,105,190)",a.fill(),{map:bn(e,{aniso:16}),metalRough:bn(o,{srgb:!1}),normal:bn(Dp(s),{srgb:!1,aniso:16})}}function Up(){let e=vn(4096,1024),n=e.getContext("2d"),s=4096/(Qn-an),r=1024/(pi-Ri),o=h=>(h-an)*s,a=h=>(pi-h)*r,l=Yn(13),c=(h,p,f)=>{n.fillStyle=f,n.fillRect(0,a(p),4096,a(h)-a(p))};c(Ri,Bt.orlop,"#7a6549"),c(Bt.orlop,Bt.lower,"#d8d0bd"),c(Bt.lower,pi,"#c9a965");for(let h=Ri;h<pi;h+=.24)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(0,a(h),4096,1.2);for(let h=0;h<2e4;h++)n.fillStyle=`rgba(0,0,0,${l()*.06})`,n.fillRect(l()*4096,l()*1024,1+l()*6,1+l()*2);for(let h of["orlop","lower","middle","upper","qd"])n.fillStyle="rgba(60,40,20,0.55)",n.fillRect(0,a(Bt[h]+.3),4096,.3*r),n.fillRect(0,a(Bt[h]-.25),4096,.25*r);for(let h of Ai()){let p=h.tier,f=h.y-cn(h.x),u=o(h.x-p.w/2),g=a(f+p.h/2);n.fillStyle="#9c7f48",n.fillRect(u,g,p.w*s,p.h*r),n.fillStyle="#120b06",n.fillRect(u+.08*s,g+.08*r,(p.w-.16)*s,(p.h-.16)*r)}return bn(e,{aniso:16})}function Fp(){let t=vn(256,256),e=t.getContext("2d"),n=Yn(29);e.fillStyle="#6d6a62",e.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=70+n()*90;e.fillStyle=`rgb(${r|0},${r*.97|0},${r*.9|0})`,e.beginPath(),e.ellipse(n()*256,n()*256,1+n()*4,1+n()*3,n()*3,0,Math.PI*2),e.fill()}return bn(t,{repeat:!0})}function Op(){let t=vn(1024,1024),e=t.getContext("2d"),n=Yn(3),s=1024/8*.28;for(let o=0,a=0;o<1024;o+=s,a++){let l=-n()*1024*.5;for(;l<1024;){let c=128*(5+n()*3),h=n();e.fillStyle=`rgb(${168+h*26|0},${146+h*22|0},${108+h*18|0})`,e.fillRect(l,o,c,s);for(let p=0;p<14;p++)e.fillStyle=`rgba(90,60,30,${n()*.08})`,e.fillRect(l,o+n()*s,c,1);e.fillStyle="rgba(40,25,10,0.7)",e.fillRect(l,o,2,s),e.fillStyle="rgba(60,40,20,0.55)",e.fillRect(l+6,o+s*.3,3,3),e.fillRect(l+6,o+s*.65,3,3),l+=c}e.fillStyle="rgba(25,18,10,0.85)",e.fillRect(0,o,1024,2)}return bn(t,{repeat:!0,aniso:16})}var wc=-2.4,Sc=13.6;function Bp(i){let n=vn(2048,2048),s=n.getContext("2d"),r=vn(512,512),o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,512);let a=u=>(Sc-u)/(Sc-wc)*2048,l=cn(-28.5);s.fillStyle=qe.black,s.fillRect(0,0,2048,2048),s.fillStyle=qe.copper,s.fillRect(0,a(Vr),2048,2048);let c=u=>Bt[u]+l;s.fillStyle=qe.ochre,s.fillRect(0,a(c("middle")-.1),2048,.25/16*2048),s.font=`bold ${.55/16*2048}px Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=qe.gold,s.fillText("V I C T O R Y",2048/2,a(c("middle")-.75));let h=[[c("middle")+.45,c("middle")+1.75],[c("upper")+.45,c("upper")+1.75],[c("qd")+.4,c("qd")+1.6]];for(let[u,g]of h){let y=i((u+g)/2),m=y*2,d=x=>(x/m+.5)*2048;s.fillStyle=qe.ochre,s.fillRect(0,a(u),2048,a(u-.45)-a(u)),s.fillStyle="rgba(0,0,0,0.5)";for(let x=-y;x<y;x+=.22)s.fillRect(d(x),a(u-.08),3,a(u-.38)-a(u-.08));let _=9,v=(m-.5)/_;for(let x=0;x<_;x++){let E=-y+.25+x*v;s.fillStyle=qe.ochre,s.fillRect(d(E),a(g+.15),.18/m*2048,a(u)-a(g+.15));let S=d(E+.22),b=d(E+v-.05);s.fillStyle="#e7dcc0",s.fillRect(S,a(g),b-S,a(u)-a(g));let M=3,w=4,T=(b-S)/M,P=(a(u)-a(g))/w;for(let I=0;I<M;I++)for(let D=0;D<w;D++){let N=30+(I*7+D*13+x*5)%9*6;s.fillStyle=`rgb(${N*.6|0},${N*.8|0},${N|0})`,s.fillRect(S+I*T+3,a(g)+D*P+3,T-6,P-6),o.fillStyle=`rgb(255,${190+(I+D+x)%3*15},${110+(I*D+x)%4*12})`,o.fillRect((S+I*T+3)/4,(a(g)+D*P+3)/4,(T-6)/4,(P-6)/4)}}s.fillStyle=qe.ochre,s.fillRect(0,a(g+.4),2048,a(g)-a(g+.4))}let p=c("poop")+.3;s.fillStyle=qe.ochre,s.fillRect(0,0,2048,a(p));let f=bn(n,{aniso:16});return f.userData.glow=bn(r),f}function Hp(){let i=vn(512,256),t=i.getContext("2d");t.fillStyle=qe.ochre,t.fillRect(0,0,512,256);for(let e=0;e<4;e++){let n=16+e*128;t.fillStyle="#e7dcc0",t.fillRect(n,40,96,176);for(let s=0;s<2;s++)for(let r=0;r<3;r++)t.fillStyle="#26323e",t.fillRect(n+6+s*45,46+r*57,39,51)}return bn(i,{repeat:!0})}function bc(){let e=vn(256,512),n=e.getContext("2d"),s=Yn(11);n.fillStyle=qe.canvas,n.fillRect(0,0,256,512);for(let r=0;r<4e3;r++)n.fillStyle=`rgba(120,100,70,${s()*.05})`,n.fillRect(s()*256,s()*512,1+s()*3,1);for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgba(110,90,60,0.35)",n.fillRect(o,0,3,512),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(o+3,0,2,512)}return bn(e,{repeat:!0})}function zp(){let e=vn(256,512),n=e.getContext("2d"),s=Yn(12);n.fillStyle="rgb(128,128,128)",n.fillRect(0,0,256,512);for(let r=0;r<260;r++){let o=105+s()*46;n.fillStyle=`rgba(${o|0},${o|0},${o|0},0.5)`,n.fillRect(s()*256,s()*512,2+s()*6,20+s()*90)}for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgb(185,185,185)",n.fillRect(o,0,5,512),n.fillStyle="rgb(90,90,90)",n.fillRect(o+5,0,1.5,512),n.fillRect(o-1.5,0,1.5,512)}return bn(Dp(e,3),{srgb:!1,repeat:!0})}function kp(){let e=vn(256,1024),n=e.getContext("2d");n.drawImage(bc().image,0,0,256,512),n.drawImage(bc().image,0,512,256,512);for(let s of[.12,.24,.36]){let r=s*1024;n.fillStyle="rgba(150,130,95,0.55)",n.fillRect(0,r-7,256,14),n.fillStyle="rgba(110,90,60,0.6)",n.fillRect(0,r-8,256,2),n.fillRect(0,r+6,256,2);for(let o=10;o<256;o+=21)n.fillStyle="rgba(70,55,35,0.85)",n.fillRect(o,r-3,3,22)}return bn(e,{repeat:!0})}function Lp(i,t,e,n,s){i.fillStyle="#1f2f6b",i.fillRect(t,e,n,s);let r=(o,a)=>{i.strokeStyle=a,i.lineWidth=o,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+s),i.moveTo(t+n,e),i.lineTo(t,e+s),i.stroke()};i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),r(s*.2,"#fff"),r(s*.07,"#c8202f"),i.restore(),i.fillStyle="#fff",i.fillRect(t+n/2-s*.17,e,s*.34,s),i.fillRect(t,e+s/2-s*.17,n,s*.34),i.fillStyle="#c8202f",i.fillRect(t+n/2-s*.1,e,s*.2,s),i.fillRect(t,e+s/2-s*.1,n,s*.2)}function Vp(i){let n=vn(512,256),s=n.getContext("2d");return i==="union"?Lp(s,0,0,512,256):i==="pennant"?(s.fillStyle="#fff",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(0,0,40,256),s.fillRect(0,256/2-18,40,36)):(s.fillStyle="#f4f2ec",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(512/2-20,0,40,256),s.fillRect(0,256/2-20,512,40),i==="ensign"&&Lp(s,0,0,512/2-20,256/2-20)),bn(n)}function Gp(){let i=vn(256,64),t=i.getContext("2d");t.fillStyle="#d9cfb4",t.fillRect(0,0,256,64);let e=Yn(5);for(let n=0;n<40;n++)t.fillStyle=`rgba(150,130,95,${.2+e()*.3})`,t.fillRect(n*6.4,0,4+e()*2,64);t.strokeStyle="rgba(40,30,20,0.6)",t.lineWidth=1.5;for(let n=-64;n<256;n+=12)t.beginPath(),t.moveTo(n,0),t.lineTo(n+64,64),t.stroke(),t.beginPath(),t.moveTo(n+64,0),t.lineTo(n,64),t.stroke();return bn(i,{repeat:!0})}function Hu(){let t=vn(128,128),e=t.getContext("2d"),n=Yn(17);for(let s=0;s<18;s++){let r=64+(n()-.5)*128*.35,o=128/2+(n()-.5)*128*.35,a=128*(.18+n()*.2),l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}return bn(t)}function Wp(){let t=new Float32Array(65536),e=Yn(23),n=[];for(let l=0;l<40;l++){let c=Math.round((e()-.5)*24),h=Math.round((e()-.5)*24);!c&&!h||n.push([c,h,e()*Math.PI*2,1/Math.hypot(c,h)])}for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0;for(let[p,f,u,g]of n)h+=g*Math.sin((p*c+f*l)/256*Math.PI*2+u);t[l*256+c]=h}let s=vn(256,256),r=s.getContext("2d"),o=r.createImageData(256,256),a=2.2;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=t[l*256+(c+1)%256]-t[l*256+(c-1+256)%256],p=t[(l+1)%256*256+c]-t[(l-1+256)%256*256+c],f=-h*a,u=-p*a,g=1,y=Math.hypot(f,u,g);f/=y,u/=y,g/=y;let m=(l*256+c)*4;o.data[m]=(f*.5+.5)*255,o.data[m+1]=(u*.5+.5)*255,o.data[m+2]=(g*.5+.5)*255,o.data[m+3]=255}return r.putImageData(o,0,0),bn(s,{srgb:!1,repeat:!0})}function zu(i="#9a7448"){let t=vn(64,512),e=t.getContext("2d"),n=Yn(31);e.fillStyle=i,e.fillRect(0,0,64,512);for(let s=0;s<90;s++)e.fillStyle=`rgba(60,35,15,${n()*.18})`,e.fillRect(n()*64,0,1+n()*2,512);return bn(t,{repeat:!0})}var d1=9.81,Xp=[[1,.35,64,.55,.5],[.75,-.65,37,.32,.55],[.25,1,19,.16,.6],[-.55,.8,11,.08,.6],[.9,-.2,7,.045,.5]],ta=Xp.map(([i,t,e,n,s])=>{let r=Math.hypot(i,t),o=2*Math.PI/e;return{dx:i/r,dz:t/r,k:o,A:n,Q:s/(o*n*Xp.length),c:Math.sqrt(d1/o)}}),Vs=64,Rc=-30,qp=30,Tc=[-1.2,0,1.2],ku=Tc.map(i=>Array.from({length:Vs},(t,e)=>yt(Rc+e/(Vs-1)*(qp-Rc),i))),Vu=`
uniform mat4 uShipInv; uniform float uHB0[${Vs}], uHB1[${Vs}], uHB2[${Vs}];
bool insideHull(vec3 world) {
  vec3 lp = (uShipInv * vec4(world, 1.0)).xyz;
  float fx = (lp.x - (${Rc.toFixed(1)})) / ${(qp-Rc).toFixed(1)} * ${(Vs-1).toFixed(1)};
  if (fx <= 0.0 || fx >= ${(Vs-1).toFixed(1)}) return false;
  int i = int(floor(fx)); float f = fract(fx);
  float a = mix(uHB0[i], uHB0[i + 1], f), b = mix(uHB1[i], uHB1[i + 1], f), c = mix(uHB2[i], uHB2[i + 1], f);
  float t = clamp((lp.y - (${Tc[0].toFixed(1)})) / ${(Tc[2]-Tc[0]).toFixed(1)}, 0.0, 1.0);
  float hb = t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, t * 2.0 - 1.0);
  return abs(lp.z) < hb - 0.04;
}`;function f1(){return{uShipInv:{value:new Rt},uHB0:{value:ku[0]},uHB1:{value:ku[1]},uHB2:{value:ku[2]}}}var Yp=`
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
vec2 seaRot(vec2 d) { return vec2(uWaveRot.x * d.x - uWaveRot.y * d.y, uWaveRot.y * d.x + uWaveRot.x * d.y); }
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${ta.map(i=>`  y += ${i.A.toFixed(5)} * sin(${i.k.toFixed(5)} * (dot(seaRot(vec2(${i.dx.toFixed(5)}, ${i.dz.toFixed(5)})), p) - ${i.c.toFixed(5)} * uTime));`).join(`
`)}
  return y * uWaveScale;
}`,Ac=class{constructor(t){this.time=0,this.offset=new Q,this.scale=1;let e=420,n=4e3,s=new Float32Array(e*e*3),r=new Float32Array(e*e*2),o=g=>Math.sign(g)*Math.pow(Math.abs(g),2.6)*n;for(let g=0;g<e;g++)for(let y=0;y<e;y++){let m=g*e+y,d=o(y/(e-1)*2-1),_=o(g/(e-1)*2-1);s[m*3]=d,s[m*3+1]=0,s[m*3+2]=_,r[m*2]=d/70,r[m*2+1]=_/70}let a=new Uint32Array((e-1)*(e-1)*6),l=0;for(let g=0;g<e-1;g++)for(let y=0;y<e-1;y++){let m=g*e+y,d=m+1,_=m+e,v=_+1;a[l++]=m,a[l++]=_,a[l++]=d,a[l++]=d,a[l++]=_,a[l++]=v}let c=new de;c.setAttribute("position",new ye(s,3)),c.setAttribute("uv",new ye(r,2)),c.setAttribute("normal",new ye(new Float32Array(e*e*3).fill(0).map((g,y)=>y%3===1?1:0),3)),c.setIndex(new ye(a,1)),c.boundingSphere=new ci(new A,n*1.5);let h=Wp(),p=new re({color:"#062a3a",roughness:.14,metalness:0,envMap:t,envMapIntensity:.4,normalMap:h,normalScale:new Q(.09,.09)});this.uniforms={uTime:{value:0},uOffset:{value:this.offset},uWaveScale:{value:1},uWaveRot:{value:new Q(1,0)},...f1()};let f=this.uniforms,u=ta.map(g=>`wave(p, vec2(${g.dx.toFixed(5)}, ${g.dz.toFixed(5)}), ${g.k.toFixed(5)}, ${g.A.toFixed(5)} * uWaveScale, ${g.Q.toFixed(5)}, ${g.c.toFixed(5)}, disp, tx, tz);`).join(`
`);p.onBeforeCompile=g=>{Object.assign(g.uniforms,f),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
varying float vCrest; varying vec3 vSeaWorld;
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
#ifdef USE_TANGENT
vec3 objectTangent = vec3(tangent.xyz);
#endif`).replace("#include <begin_vertex>",`vec3 transformed = position + disp;
vSeaWorld = transformed;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying float vCrest; varying vec3 vSeaWorld;
${Vu}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (insideHull(vSeaWorld)) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
float crest = smoothstep(0.95, 1.6, vCrest);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.2, 0.24), smoothstep(-0.8, 1.4, vCrest) * 0.22);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.8, 0.8), crest * 0.18);`)},this.normalMap=h,this.mesh=new W(c,p),this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.name="sea"}update(t,e){this.time=t,this.uniforms.uTime.value=t,this.offset.set(e,0),this.normalMap.offset.set((e/70+t*.004)%1,t*.003%1)}setScale(t){this.scale=t,this.uniforms.uWaveScale.value=t}setDirection(t){let e=Math.atan2(ta[0].dz,ta[0].dx);this.rot=t-e,this.uniforms.uWaveRot.value.set(Math.cos(this.rot),Math.sin(this.rot))}heightAt(t,e){let n=t+this.offset.x,s=e+this.offset.y,r=this.time,o=Math.cos(this.rot||0),a=Math.sin(this.rot||0),l=0;for(let c of ta){let h=o*c.dx-a*c.dz,p=a*c.dx+o*c.dz;l+=c.A*this.scale*Math.sin(c.k*(h*n+p*s-c.c*r))}return l}};function vs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<i.length;++h){let p=i[h],f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,p=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let g=0;g<u.count;++g)p.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(p)}for(let h in r){let p=$p(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<p;++f){let u=[];for(let y=0;y<o[h].length;++y)u.push(o[h][y][f]);let g=$p(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function $p(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+p,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Bn(i,t,e,n,s=!1){let r=new Float32Array(i*t*3),o=new Float32Array(i*t*2);for(let c=0;c<t;c++)for(let h=0;h<i;h++){let p=c*i+h,f=e(h,c);r[p*3]=f[0],r[p*3+1]=f[1],r[p*3+2]=f[2];let u=n?n(h,c,f):[h/(i-1),c/(t-1)];o[p*2]=u[0],o[p*2+1]=u[1]}let a=[];for(let c=0;c<t-1;c++)for(let h=0;h<i-1;h++){let p=c*i+h,f=p+1,u=p+i,g=u+1;s?a.push(p,g,f,p,u,g):a.push(p,f,g,p,g,u)}let l=new de;return l.setAttribute("position",new ye(r,3)),l.setAttribute("uv",new ye(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function ea(i,t,e,n,s=!1){let r=Bn(i,t,e,n,s),o=Bn(i,t,(a,l)=>{let c=e(a,l);return[c[0],c[1],-c[2]]},n,!s);return vs([r,o])}var Zp=new A(0,1,0);function Je(i,t,e,n,s=Zp){let r=new A().subVectors(t,i),o=r.length(),a=new kt(o,n,e),l=r.clone().normalize(),c=new A().crossVectors(l,s);c.lengthSq()<1e-6&&c.set(0,0,1),c.normalize();let h=new A().crossVectors(c,l),p=new Rt().makeBasis(l,h,c);return p.setPosition(i.clone().add(t).multiplyScalar(.5)),a.applyMatrix4(p),a}function Ee(i,t,e,n=e,s=10){let r=new A().subVectors(t,i),o=r.length(),a=new Zt(n,e,o,s,1),l=new Ge().setFromUnitVectors(Zp,r.clone().normalize());return a.applyQuaternion(l),a.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),a}function Gu(i,t,e,n=.28,s=.14){let r=[],o=c=>c.clone().add(new A(0,e,0));r.push(Je(o(i),o(t),s,.09));let a=i.distanceTo(t),l=Math.max(1,Math.round(a/n));for(let c=0;c<=l;c++){let h=i.clone().lerp(t,c/l),p=new Zt(.035,.05,e,6);p.translate(h.x,h.y+e/2,h.z),r.push(p)}return vs(r.map(c=>c.index?c.toNonIndexed():c))}function mt(i){let t=i.map(e=>e.index?e.toNonIndexed():e);for(let e of t)e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals();return vs(t)}var Cc=null;function pe(){if(Cc)return Cc;let i=(r,o=.7,a=0,l={})=>new re({color:r,roughness:o,metalness:a,...l}),t=Op(),e=zu("#b08a58"),n=zu("#5a4630"),s=zp();return Cc={black:i(qe.black,.6),ochre:i(qe.ochre,.6),red:i(qe.red,.75),inside:i("#c9a965",.75),carriage:i("#b99a5c",.7),gold:i(qe.gold,.35,.8),iron:i("#26282a",.55,.6),brass:i("#b58d3e",.3,.9),copper:i(qe.copper,.45,.8),deck:i("#ffffff",.85,0,{map:t}),mast:i("#ffffff",.7,0,{map:e}),spar:i("#2a2c2e",.65),darkWood:i("#ffffff",.75,0,{map:n}),rope:i("#3b2f22",.9),ropeLight:i("#8a7556",.9),canvas:i("#ffffff",.92,0,{map:bc(),normalMap:s,normalScale:new Q(.5,.5),side:De}),canvasReef:i("#ffffff",.92,0,{map:kp(),normalMap:s,normalScale:new Q(.5,.5),side:De}),furl:i("#c4b99c",.95),hammock:i("#ffffff",.95,0,{map:Gp()}),glass:i("#2b3a48",.15,.4,{emissive:"#000000"}),lantern:i("#ffd27a",.3,0,{emissive:"#ffb347",emissiveIntensity:0}),white:i("#eeeeee",.6)},Cc}var p1=()=>new re({color:"#c99573",roughness:.6});function na(i,t,e,n=.3,s=1.6,r=.045,o=0){let a=[];for(let g=0;g<=40;g++){let y=g/40,m=y*s*Math.PI*2,d=n*(1-.82*y);a.push(i.clone().addScaledVector(t,Math.cos(m)*d-o*(1-y)**3).addScaledVector(e,Math.sin(m)*d))}let c=new un(new hn(a),60,r,6,!1),h=c.attributes.position,p=h.count,f=7,u=new hn(a);for(let g=0;g<p;g++){let y=Math.floor(g/f)/60,m=u.getPoint(Math.min(1,y)),d=1-.6*y;h.setXYZ(g,m.x+(h.getX(g)-m.x)*d,m.y+(h.getY(g)-m.y)*d,m.z+(h.getZ(g)-m.z)*d)}return c.computeVertexNormals(),c}function m1(i=.5,t=.16){let e=new Ke;e.moveTo(0,0),e.quadraticCurveTo(t,i*.4,0,i),e.quadraticCurveTo(-t,i*.4,0,0);let n=new Sn(e,{depth:.03,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:1}),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getY(r);s.setZ(r,s.getZ(r)+.25*(o/i)**2)}return n.computeVertexNormals(),n}function Kp(i){let t=pe(),e=p1(),n=new zt,s=(a,l,c,h,p,f=0,u=0,g=0)=>{let y=new W(a,l);return y.position.set(c,h,p*i),y.rotation.set(f*i,u*i,g),n.add(y),y};s(new fe(.19,14,12).scale(.9,1.2,1),e,0,.1,0),s(new fe(.17,12,10).scale(1,.85,1.05),e,.03,-.12,0),s(new fe(.17,14,12),e,.04,.5,.02);for(let a=0;a<9;a++){let l=a/9*Math.PI*2;s(new fe(.055,8,6),t.gold,.04-.1*Math.cos(l)*.8,.6+.06*Math.sin(l*2),.02+.13*Math.sin(l))}s(new fe(.03,6,6),e,.2,.48,.06),s(new Oe(.045,.32,4,8),e,.1,.3,-.22,-1.2,0,.3),s(new fe(.055,8,6),e,.18,.47,-.42),s(new Oe(.045,.28,4,8),e,.12,.05,.22,.5,0,-.6),s(new Oe(.06,.3,4,8),e,.08,-.38,-.1,.2,0,.5),s(new Oe(.06,.28,4,8),e,.15,-.36,.12,-.3,0,-.8);for(let a=0;a<3;a++)for(let l=0;l<5;l++){let c=new fe(1,8,6).scale(.04,.32-a*.07,.08);s(c,t.gold,-.2-a*.02,.32+l*.03-a*.05,.12+a*.06,0,0,0).rotation.set(i*(.35+l*.22+a*.1),0,-.25)}let r=[];for(let a=0;a<=12;a++){let l=a/12;r.push(new A(.12+.1*Math.sin(l*6),-.05-l*.5,i*(.24+.18*l+.06*Math.cos(l*7))))}let o=new W(new un(new hn(r),30,.045,6),new re({color:"#2a4a9a",roughness:.6}));return o.scale.set(1,1,1),n.add(o),n.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),n}function Jp(){let i=pe(),t=new zt,e=new W(new Me(.82,.075,8,40).scale(1,1.18,1),new re({color:"#203a8a",roughness:.45}));e.rotation.y=Math.PI/2;let n=new W(new Me(.9,.03,6,40).scale(1,1.17,1),i.gold);n.rotation.y=Math.PI/2;let s=new W(new kt(.06,.16,.2),i.gold);s.position.set(.06,-.96,.18),t.add(e,n,s);let r=[];for(let a=0;a<18;a++){let l=a/18*Math.PI*2,c=m1(.36,.13);c.rotateZ(-Math.PI/2).rotateY(Math.PI/2),c.rotateX(l+Math.PI/2),c.translate(-.05,Math.sin(l)*1.12,Math.cos(l)*.96),r.push(c)}let o=new W(mt(r),i.gold);return t.add(o),t.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t}function jp(i,t){let e=[];for(let s of[1,-1]){let r=s*.33,o=new A(1,0,0),a=new A(0,1,0),l=[[i-1.15,t-1.15,.22],[i-1.85,t-1.85,.25],[i-2.55,t-2.45,.24],[i-3.2,t-2.9,.2]];l.forEach(([h,p,f],u)=>e.push(na(new A(h,p,r),u%2?o.clone().negate():o,a,f,1.5,.035,.3)));let c=new hn(l.map(([h,p])=>new A(h+.15,p+.25,r)));e.push(new un(c,30,.03,5))}let n=new W(mt(e),pe().gold);return n.castShadow=!0,n}function Qp(i){let t=i.map(([n,s])=>na(n,new A(-1,0,0),new A(0,1,0).add(new A(0,0,s*.3)).normalize(),.16,1.3,.05)),e=new W(mt(t),pe().gold);return e.castShadow=!0,e}var Gs=i=>zr(i)*Qo(i);function Pi(i,t){let e=Gs(t);return ve(t)-.45*Wi(1,3,t)*(1-(e>0?(i/e)**2:1))}function Pc(i,t,e,n=.02){let r=(Pi(t+.05,e)-Pi(t-.05,e))/.1,o=(Pi(t,e+.05)-Pi(t,e-.05))/(2*.05),a=new A(-1,o,r).normalize(),l=new Rt().lookAt(a,new A,new A(0,1,0));return i.applyMatrix4(l),i.translate(Pi(t,e)+a.x*n,e+a.y*n,t+a.z*n),i}function tm(i,t=null){let e=pe(),n=cn(-28.5),s=E=>Bt[E]+n,r=[[s("middle")+.45,s("middle")+1.75],[s("upper")+.45,s("upper")+1.75],[s("qd")+.4,s("qd")+1.6]],o=[],a=[],l=new _n([[.05,0],[.05,.04],[.035,.06],[.06,.15],[.045,.24],[.028,.28],[.045,.3],[.045,.34]].map(([E,S])=>new Q(E,S)),8),c=[];for(let[E,S]of r){let b=(E+S)/2,M=Gs(b),w=M*2,T=9,P=(w-.5)/T;for(let D=0;D<=T;D++){let O=(-M+.25+D*P+(D===T?-.1:.09))/w,z=nt=>O*2*Gs(nt),V=S+.15-E;o.push(Pc(new kt(.16,V,.07).translate(0,0,.035),z(E+V/2),E+V/2)),a.push(Pc(new kt(.24,.1,.1).translate(0,0,.05),z(S+.12),S+.12)),a.push(Pc(new kt(.22,.08,.09).translate(0,0,.045),z(E+.04),E+.04)),a.push(Pc(na(new A(0,0,.08),new A(1,0,0),new A(0,1,0),.06,1.4,.018),z(S+.05),S+.05))}for(let D of[E-.06,E-.42]){let N=[];for(let O=0;O<=24;O++){let z=ue(-Gs(D)+.15,Gs(D)-.15,O/24);N.push(new A(Pi(z,D)-.07,D,z))}a.push(new un(new hn(N),48,.04,6))}let I=E-.4;for(let D=-Gs(I)+.3;D<Gs(I)-.3;D+=.22){let N=new Rt().makeTranslation(Pi(D,I)-.07,I,D);c.push(N)}}let h=new zt,p=s("poop")+.45,f=Pi(0,p+.9);h.position.set(f-.12,p,0);let u=E=>Pi(E,p+.5)-Pi(0,p+.5),g=new Ke;g.moveTo(-.45,.55),g.lineTo(.45,.55),g.lineTo(.45,-.05),g.quadraticCurveTo(.45,-.5,0,-.68),g.quadraticCurveTo(-.45,-.5,-.45,-.05),g.closePath();let y=new Sn(g,{depth:.12,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});{let E=y.attributes.uv,S=y.attributes.position;for(let b=0;b<E.count;b++)E.setXY(b,(S.getX(b)+.49)/.98,(S.getY(b)+.72)/1.31)}y.rotateY(-Math.PI/2).translate(0,.85,0);let m=[new Zt(.3,.26,.22,14).translate(0,1.6,0),new fe(.09,8,6).translate(0,1.95,0)];for(let E of[0,Math.PI/2])m.push(new Me(.26,.035,5,14,Math.PI).rotateY(E).translate(0,1.66,0));let d=(E,S)=>{let b=[],M=w=>E*w;if(b.push(new Oe(.15,.42,4,10).rotateX(M(-.55)).translate(0,.72,M(.9))),b.push(new Oe(.07,.3,3,8).rotateX(M(-.2)).translate(0,.28,M(1))),b.push(new Oe(.07,.28,3,8).rotateX(M(.25)).translate(0,.28,M(.8))),b.push(new Oe(.055,.34,3,8).rotateX(M(1.1)).translate(0,1,M(.58))),b.push(new Oe(.055,.3,3,8).rotateX(M(.7)).translate(0,.82,M(.6))),b.push(new Oe(.035,.35,3,6).rotateX(M(.4)).translate(0,1.12,M(.84))),S){b.push(new Oe(.075,.2,4,8).rotateX(M(1.3)).translate(0,1.3,M(.72))),b.push(new os(.025,.34,6).rotateX(M(1)).translate(0,1.42,M(.55)));for(let w=0;w<5;w++)b.push(new fe(.035,6,4).translate(0,1.18-w*.07,M(.98+w*.02)))}else{b.push(new fe(.13,10,8).translate(0,1.3,M(.78))),b.push(new kt(.1,.08,.1).translate(0,1.27,M(.65)));for(let w=0;w<8;w++){let T=w/8*Math.PI*2;b.push(new fe(.06,6,4).translate(0,1.3+Math.sin(T)*.15,M(.82+Math.cos(T)*.12)))}b.push(new Zt(.09,.08,.08,8).translate(0,1.46,M(.78)))}return b.push(na(new A(0,.5,M(1.18)),new A(0,0,E),new A(0,1,0),.13,1.3,.025)),b},_=[...m,...d(1,!0),...d(-1,!1)];for(let E of[1,-1])for(let S=0;S<3;S++){let b=E*(1.5+S*1.1);_.push(na(new A(u(b),.6,b),new A(0,0,E),new A(0,1,0),.32-S*.06,1.6,.05,.35))}h.add(new W(mt(_),e.gold)),h.add(new W(y,t?[t,e.gold]:e.gold)),h.rotation.z=.1;let v=new zt;v.name="sternCarvings",v.add(new W(mt(o),e.ochre),new W(mt(a),e.gold),h);let x=new sn(l,e.gold,c.length);return c.forEach((E,S)=>x.setMatrixAt(S,E)),v.add(x),v.traverse(E=>{E.isMesh&&(E.castShadow=!0)}),v}function em(i){let t=pe(),e=new _n([[.001,-.9],[.06,-.8],[.04,-.62],[.12,-.5],[.08,-.32],[.16,-.2],[.18,0],[.001,.02]].map(([o,a])=>new Q(o,a)),12),n=new _n([[.2,0],[.22,.06],[.1,.2],[.14,.32],[.05,.5],[.08,.6],[.001,.75]].map(([o,a])=>new Q(o,a)),12),s=[];for(let{p:o,kind:a}of i)s.push((a==="drop"?e:n).clone().translate(o.x,o.y,o.z));let r=new W(mt(s),t.gold);return r.castShadow=!0,r}var ia=220,Gr=120,ti=.32;function g1(i){return .45*i+.55*(.5-.5*Math.cos(Math.PI*i))}function x1(i,t){let e=g1(i),n=-7.4,s=0;for(let r=0;r<5;r++)s=ve(n)+e*(Be(n)-ve(n)),n=-7.4+t*(Pe(s)- -7.4);return[s,n,zr(n)*Fu(e,n)]}function _1(i){return i<$e?ft("poop",i):ft("qd",i)}function y1(i){return i>ln+.2&&i<Ze-.2?ft("upper",i):_1(i)}function nm(){let i=pe(),t=new zt;t.name="hull";let e=Np(),n=new re({map:e.map,roughnessMap:e.metalRough,metalnessMap:e.metalRough,normalMap:e.normal,normalScale:new Q(.8,.8),roughness:1,metalness:1}),s=[];for(let U=0;U<Gr;U++)for(let k=0;k<ia;k++)s.push(x1(k/(ia-1),U/(Gr-1)));let r=(U,k)=>s[k*ia+U],o=ea(ia,Gr,r,(U,k,J)=>[Ou(J[0]),Bu(J[0],J[1])]),a=new W(o,n);a.castShadow=a.receiveShadow=!0,a.name="planking",t.add(a);let l=[],c=(U,k,J,ut=.02)=>{let lt=[[U,0],[U+ut,J],[k-ut,J],[k,0]],gt=(U+k)/2,Xt=ve(gt+cn(-27))+.05,K=Be(gt)-.2,st=160;l.push(ea(st,lt.length,(ot,ht)=>{let dt=ue(Xt,K,ot/(st-1)),[Vt,Ut]=lt[ht],qt=Vt+cn(dt),ne=yt(dt,qt);return[dt,qt,ne>.05?ne+Ut*Math.min(1,ne/1.5):0]},(ot,ht,dt)=>[Ou(dt[0]),Bu(dt[0],dt[1])]))};c(.6,1.1,.09),c(2.53,3.22,.08),c(4.54,5.31,.07),c(Bt.qd+1.03,Bt.qd+1.1,.04,.01);let h=new W(mt(l),n);h.castShadow=h.receiveShadow=!0,h.name="wales",t.add(h);{let U=[],k=[],ut=ft("middle",2)+.1;for(let Xt of[1,-1]){for(let K=.75;K<ut;K+=.32){let st=yt(2,K)+.14,ot=new kt(.55,.1,.16);ot.translate(2,K,Xt*st),U.push(ot)}for(let K of[-.42,.42]){let st=[];for(let ot=.55;ot<=ut+.6;ot+=.25)st.push(new A(2+K,ot,Xt*(yt(2+K,ot)+.11)));k.push(new un(new hn(st),24,.09,6))}}let lt=new W(mt(U),i.darkWood),gt=new W(mt(k),i.black);lt.castShadow=gt.castShadow=!0,t.add(lt,gt)}let p=new W(o,new re({map:Up(),roughness:.85,side:rn}));p.name="innerPlanking",p.receiveShadow=!0,t.add(p);let f=[];for(let U=0;U<Gr;U++){let k=r(0,U);(k[2]>.01||U+1<Gr&&r(0,U+1)[2]>.01)&&f.push(k)}let u=48,y=Bp(U=>zr(U)*Qo(U)),m=new re({map:y,roughness:.6,emissiveMap:y.userData.glow,emissive:"#ffffff",emissiveIntensity:0});t.userData.glow=[m];let d=Bn(u,f.length,(U,k)=>{let[J,ut,lt]=f[k],gt=ue(-lt,lt,U/(u-1)),Xt=.45*Wi(1,3,ut)*(1-(lt>0?(gt/lt)**2:1));return[J-Xt,ut,gt]},(U,k)=>[U/(u-1),(f[k][1]-wc)/(Sc-wc)]),_=new W(d,m);_.castShadow=_.receiveShadow=!0,_.name="stern",t.add(_),t.add(tm(f[f.length-1][1],new re({map:im(),roughness:.45,metalness:.2})));let v=new W(d,new re({map:m.map,roughness:.7,side:rn,color:"#d8cdb4"}));v.name="innerPlanking",t.add(v);let x=[];for(let U=0;U<ia;U++){let k=r(U,Gr-1);k[2]-ti>.06&&x.push(k)}let E=10,S=ea(x.length,E,(U,k)=>{let J=x[U][0],ut=x[U][1],lt=ue(y1(J)-.05,ut,k/(E-1));return[J,lt,Math.max(.05,yt(J,lt)-ti)]},(U,k)=>[x[U][0]/4,k/(E-1)],!0),b=new W(S,i.inside.clone());b.name="bulwark",b.receiveShadow=!0,t.add(b);let M=ea(x.length,2,(U,k)=>{let[J,ut,lt]=x[U];return k===0?[J,ut+.01,lt+.04]:[J,ut+.01,Math.max(.05,yt(J,ut)-ti-.03)]});t.add(new W(M,i.black));let w=x[0][0],T=ft("poop",w),P=x[0][1],I=Bn(12,4,(U,k)=>{let J=ue(T,P,k/3),ut=Math.max(.1,yt(w+.4,J)-ti);return[ve(J)+.35,J,ue(-ut,ut,U/11)]},null,!0);t.add(new W(I,i.inside));let D=[],N=(U,k,J,ut,lt=.12)=>{let gt=Math.max(4,Math.round((J-k)/.8)),Xt=10;D.push(Bn(gt,Xt,(K,st)=>{let ot=ue(k,J,K/(gt-1)),ht=ft(U,ot),dt=Math.max(.05,yt(ot,ht+.4)-ti),[Vt,Ut]=ut(dt),qt=ue(Vt,Ut,st/(Xt-1));return[ot,ht+lt*(1-(qt/dt)**2),qt]},(K,st,ot)=>[ot[0]/8,ot[2]/8],!0))},O=U=>[-U,U],z=2.5;N("qd",ve(Bt.qd)+.4,ln,O),N("qd",Ze,Be(Bt.qd)-.4,O),N("qd",ln,Ze,U=>[U-z,U],0),N("qd",ln,Ze,U=>[-U,-U+z],0),N("poop",ve(Bt.poop)+.4,$e,O);let V=new W(mt(D),i.deck);i.deck.side=De,V.receiveShadow=!0,V.castShadow=!0,V.name="weatherDecks",t.add(V);let nt=[],$=(U,k,J,ut=0)=>{let lt=yt(U,J)-ti-ut;nt.push(Bn(2,2,(gt,Xt)=>[U,Xt?J:k,gt?lt:-lt]))};$(ln,ft("upper",ln),ft("qd",ln)+.12),$(Ze,ft("upper",Ze),ft("qd",Ze)+.12);for(let U of[1,-1])nt.push(Bn(16,2,(J,ut)=>{let lt=ue(ln,Ze,J/15),gt=ft("qd",lt),Xt=yt(lt,gt+.4)-ti-z;return[lt,ut?gt+.02:gt-.35,U*Xt]},null,U<0));let it=mt(nt),et=i.inside.clone();et.side=De,t.add(new W(it,et));{let U=$e-4.2,k=ft("qd",U),J=ft("poop",U)-.3,ut=yt(U,J)-ti,lt=Hp();lt.repeat.set((ut-.5)/3.2,1);let gt=new re({map:lt,roughness:.6,side:De});for(let[K,st]of[[ut,.5],[-.5,-ut]])t.add(new W(Bn(2,2,(ot,ht)=>[U,ht?J:k,ot?st:K],(ot,ht)=>[ot,ht]),gt));let Xt=Je(new A(U,k+1.95,-.5),new A(U,k+1.95,.5),.1,.1);t.add(new W(Xt,i.darkWood))}let Pt=[],At=(U,k,J,ut,lt=1)=>{let gt=ft(k,U)+.1,Xt=yt(U,gt)-ti-.1-J,K=[-Xt,-ut-.45,-ut+.45,ut-.45,ut+.45,Xt];for(let st=0;st<K.length;st+=2)Pt.push(Gu(new A(U,gt,K[st]),new A(U,gt,K[st+1]),lt))};At(ln-.1,"qd",z,2.6),At(Ze+.1,"qd",z,2.6),At($e-.1,"poop",0,3.4);for(let U of[1,-1]){let k=[];for(let J=0;J<=6;J++){let ut=ue(ln,Ze,J/6),lt=ft("qd",ut);k.push(new A(ut,lt,U*(yt(ut,lt+.4)-ti-z+.08)))}for(let J=0;J<6;J++)Pt.push(Gu(k[J],k[J+1],.95,.5,.1))}let ee=new W(mt(Pt),i.darkWood);ee.castShadow=!0,t.add(ee);let Ht=[];for(let U of[3.6,7,10.4,13.8]){let k=ft("qd",U)+.2,J=yt(U,k)-ti-z+.2;Ht.push(Je(new A(U,k,-J),new A(U,k,J),.28,.3))}let $t=new W(mt(Ht),i.darkWood);$t.castShadow=!0,t.add($t);{let ut=i.hammock;for(let lt of[1,-1]){let gt=[[-.24,0],[-.26,.42],[-.18,.56],[.18,.56],[.26,.42],[.24,0]],Xt=Bn(140,gt.length,(st,ot)=>{let ht=ue(-25.2,25,st/139),dt=Pe(ht)+.02,Vt=yt(ht,dt)-ti/2,[Ut,qt]=gt[ot];return[ht,dt+qt,lt*(Vt+Ut)]},(st,ot)=>[ue(-25.2,25,st/139)/2.5,ot/(gt.length-1)],lt>0),K=new W(Xt,ut);K.castShadow=!0,t.add(K)}}{let U=[];for(let Xt=0;Xt<=24;Xt++){let K=ue(-7.4,Pe(28.5)-.3,Xt/24);U.push(new A(Be(K)+.08,K,0))}let k=new un(new hn(U),48,.26,6,!1);t.add(new W(k,i.black));let J=new Ke,ut=ks+.6;J.moveTo(ve(-7.4),-7.4),J.lineTo(ve(ut)+.3,ut),J.lineTo(ve(ut)-.6,ut),J.lineTo(ve(ks)-1,ks-.6),J.lineTo(ve(-7.4)-1.7,-7.4+.3),J.closePath();let lt=new Sn(J,{depth:.36,bevelEnabled:!1});lt.translate(0,0,-.18);let gt=new W(lt,i.black);gt.castShadow=!0,t.add(gt)}return t.add(v1()),t.add(E1()),t}function v1(){let i=pe(),t=new zt;t.name="head";let e=33.35,n=ft("upper",30)+2.3,s=new Ke,r=-2.2,o=n-.2;s.moveTo(Be(r),r);for(let d=1;d<=10;d++){let _=ue(r,o,d/10);s.lineTo(Be(_)-.05,_)}s.lineTo(e-.4,n+.1),s.quadraticCurveTo(e+.2,n-1.6,e-1,n-3.6),s.quadraticCurveTo(29.8,-.2,Be(r)+.4,r),s.closePath();let a=new Sn(s,{depth:.5,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});a.translate(0,0,-.25);let l=new W(a,i.black);l.castShadow=!0,t.add(l);let c=new Ke;c.moveTo(Be(n-2.5)+.2,n-2.5),c.quadraticCurveTo(e-1.3,n-1,e-.6,n-.3),c.lineTo(e-.9,n-.9),c.quadraticCurveTo(e-2.2,n-2.3,Be(n-3.2)+.3,n-3.2),c.closePath();let h=new Sn(c,{depth:.62,bevelEnabled:!1});h.translate(0,0,-.31),t.add(new W(h,i.ochre)),t.add(jp(e,n));let p=[],f=[],u=ft("upper",27);for(let d of[1,-1]){let _=[];for(let v=0;v<3;v++){let x=-v*.55,E=[new A(26,u+2.2+x,d*(yt(26,u+2.2+x)+.05)),new A(28.4,u+1.75+x*.9,d*2.5),new A(30.6,u+1.55+x*.75,d*1.25),new A(e-.55,n-.35+x*.55,d*.32)],S=new hn(E,!1,"centripetal");_.push(S),p.push(new un(S,32,v===0?.1:.075,6,!1))}for(let v of[.25,.45,.65]){let x=_[0].getPoint(v),E=_[2].getPoint(v);f.push(Ee(x,E.clone().add(new A(0,-.5,0)),.07,.07,6))}}let g=new W(mt(p),i.ochre);g.castShadow=!0,t.add(g);let y=[];for(let d of[1,-1])for(let _=0;_<3;_++)y.push([new A(e-.62,n-.42-_*.3,d*.36),d]);t.add(Qp(y)),t.add(new W(mt(f),i.black));let m=Bn(6,6,(d,_)=>{let v=ue(28.9,31.6,d/5),x=ue(2.2,.7,d/5);return[v,u+.5+d/5*.5,ue(-x,x,_/5)]},null,!0);t.add(new W(m,i.darkWood)),t.add(M1(e,n));for(let d of[1,-1]){let v=ft("qd",25.6)+.55,x=yt(25.6,v)-.4,E=new A(25.6-.6,v,d*(x-.6)),S=new A(25.6+1.4,v+.25,d*(x+1.9)),b=new W(Je(E,S,.42,.42),i.black);b.castShadow=!0,t.add(b);let M=new W(new Zt(.2,.2,.05,12),i.gold);M.position.copy(S),M.lookAt(S.clone().add(S.clone().sub(E))),M.rotateX(Math.PI/2),t.add(M)}for(let d of[1,-1])for(let _ of[0,.75]){let v=26.9+_,x=ft("middle",v)+.9,E=yt(v,x),S=new W(new Zt(.24,.24,.1,14),i.iron),b=new W(new Ls(.17,14),new Is({color:"#050403"})),M=new A(yt(v-.2,x)-yt(v+.2,x),0,d*.4).normalize();S.position.set(v,x,d*E),S.quaternion.setFromUnitVectors(new A(0,1,0),M),b.position.set(v,x,d*(E+.06)).addScaledVector(M,.02),b.lookAt(b.position.clone().add(M)),t.add(S,b)}return t}function im(){let i=document.createElement("canvas");i.width=512,i.height=600;let t=i.getContext("2d"),e="#e2b33c",n="#b8202a",s="#1f3c8c",r=(c,h,p,f,u)=>{t.save(),t.translate(c,h),t.scale(p,p),f&&t.rotate(-.9),t.fillStyle=u,t.beginPath(),t.ellipse(0,0,.42,.17,0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(-.45,-.12,.15,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(-.6,-.12),t.lineTo(-.72,-.05),t.lineTo(-.58,-.02),t.fill(),t.lineWidth=.07,t.strokeStyle=u,t.lineCap="round";for(let[g,y]of[[-.28,-.4],[-.15,-.05],[.2,.12],[.32,.45]])t.beginPath(),t.moveTo(g,.08),t.lineTo(y,f?.42:.38),t.stroke();t.beginPath(),t.moveTo(.4,-.05),t.quadraticCurveTo(.75,-.2,.62,-.5),t.stroke(),t.beginPath(),t.arc(.6,-.52,.06,0,Math.PI*2),t.fill(),t.restore()},o=256,a=300;for(let[c,h]of[[0,0],[o,a]]){t.fillStyle=n,t.fillRect(c,h,o,a);for(let p=0;p<3;p++)r(c+o/2,h+60+p*85,120,!1,e)}t.fillStyle=e,t.fillRect(o,0,o,a),t.strokeStyle=n,t.lineWidth=5,t.strokeRect(o+18,18,o-36,a-36),t.strokeRect(o+30,30,o-60,a-60),r(o+o/2,a/2+10,170,!0,n),t.fillStyle=s,t.fillRect(0,a,o,a),t.strokeStyle=e,t.lineWidth=12,t.lineCap="round",t.beginPath(),t.moveTo(80,a+240),t.lineTo(80,a+70),t.quadraticCurveTo(150,a+40,190,a+90),t.lineTo(80,a+240),t.stroke(),t.lineWidth=3;for(let c=1;c<6;c++)t.beginPath(),t.moveTo(80+c*17,a+70+c*5),t.lineTo(80+c*17,a+240-c*25),t.stroke();t.fillStyle=n,t.beginPath(),t.moveTo(206,250),t.lineTo(306,250),t.lineTo(306,320),t.quadraticCurveTo(256,370,206,320),t.closePath(),t.fill(),t.fillStyle="#f0ece0",t.beginPath(),t.ellipse(256,300,26,12,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(234,282,8,14,.5,0,Math.PI*2),t.fill(),t.fillStyle=e,t.fillRect(226,232,60,14),t.strokeStyle="#d4a640",t.lineWidth=24,t.strokeRect(0,0,512,600);let l=new xn(i);return l.colorSpace=Fe,l.anisotropy=8,l}function M1(i,t){let e=pe(),n=new zt;n.name="figurehead",n.position.set(i-.2,t,0),n.rotation.z=-.28;let s=1.45,r=new Ke;r.moveTo(-.6,.75),r.lineTo(.6,.75),r.lineTo(.6,-.1),r.quadraticCurveTo(.6,-.7,0,-.95),r.quadraticCurveTo(-.6,-.7,-.6,-.1),r.closePath();let o=new Sn(r,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2}),a=o.attributes.uv,l=o.attributes.position;for(let d=0;d<a.count;d++)a.setXY(d,(l.getX(d)+.66)/1.32,(l.getY(d)+1)/1.8);o.rotateY(Math.PI/2);let c=new W(o,[new re({map:im(),roughness:.45,metalness:.2}),e.gold]);c.scale.setScalar(s),c.position.set(.25,.9,0),n.add(c);let h=Jp();h.scale.setScalar(s),h.position.set(.15,.95,0),n.add(h);let p=new zt;p.add(new W(new Zt(.42,.36,.3,16),e.gold));for(let d=0;d<2;d++){let _=new W(new Me(.36,.05,6,16,Math.PI),e.gold);_.rotation.y=d*Math.PI/2,_.position.y=.15,p.add(_)}let f=new W(new fe(.11,10,8),e.gold);f.position.y=.6,p.add(f);let u=new W(new kt(.05,.22,.16),e.gold);u.position.y=.78,p.add(u);let g=new W(new fe(.33,12,8,0,Math.PI*2,0,Math.PI/2),new re({color:"#7a1b20",roughness:.6}));g.position.y=.12,p.add(g),p.scale.setScalar(s),p.position.set(.2,2.15,0),n.add(p);let y=new re({color:"#e8c7a4",roughness:.55});for(let d of[1,-1]){let _=Kp(d);_.scale.setScalar(s*1.1),_.position.set(0,1.05,d*1.55),n.add(_)}for(let d of[]){let _=new zt,v=new W(new Oe(.24,.42,4,12),y);v.rotation.x=d*.25,_.add(v);let x=new W(new fe(.2,14,10),y);x.position.set(.05,.55,d*.06),_.add(x);let E=new W(new fe(.21,12,8,0,Math.PI*2,0,Math.PI/2.2),e.gold);E.position.copy(x.position).add(new A(-.02,.03,0)),_.add(E);for(let M of[0,1]){let w=new W(new fe(.3,10,8),e.gold);w.scale.set(.12,.75,.42),w.position.set(-.28,.25+M*.12,d*(.12+M*.12)),w.rotation.x=d*(.5+M*.3),_.add(w)}let S=new W(new Oe(.07,.4,4,8),y);S.position.set(.12,.25,-d*.24),S.rotation.x=-d*1.1,_.add(S);let b=new W(new Me(.26,.07,6,14,Math.PI*1.3),new re({color:"#2a4a9a",roughness:.6}));b.rotation.set(Math.PI/2,0,.4),b.position.y=-.08,_.add(b),_.scale.setScalar(s),_.position.set(.05,1,d*1.25),n.add(_)}let m=new W(new Me(.35,.12,8,18,Math.PI*1.5),e.gold);return m.rotation.set(0,Math.PI/2,0),m.position.set(0,-.2,0),n.add(m),n.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),n}function E1(){let i=pe(),t=new zt;t.name="quarterGalleries";let e=-27.3,n=-22.4,s=cn(-25),r=Bt.middle+s+.15,o=Bt.qd+s-.1,a=r-2.6,l=o+.9,c=.85,h=document.createElement("canvas");h.width=512,h.height=512;let p=h.getContext("2d"),f=w=>(l-w)/(l-a)*512;p.fillStyle=qe.ochre,p.fillRect(0,0,512,512),p.fillStyle=qe.black,p.fillRect(0,f(r-.3),512,f(a)-f(r-.3));for(let[w,T]of[[Bt.middle+s+.45,Bt.middle+s+1.6],[Bt.upper+s+.45,Bt.upper+s+1.6]])for(let P=0;P<5;P++){let I=20+P*98;p.fillStyle="#e7dcc0",p.fillRect(I,f(T),78,f(w)-f(T)),p.fillStyle="#26323e";for(let D=0;D<3;D++)for(let N=0;N<2;N++)p.fillRect(I+5+N*36,f(T)+5+D*(f(w)-f(T)-10)/3,32,(f(w)-f(T)-10)/3-5)}p.strokeStyle=qe.gold,p.lineWidth=4;for(let w=0;w<6;w++)p.beginPath(),p.arc(256,f(a+.6)-w*20,40+w*18,0,Math.PI,!0),p.stroke();let u=new xn(h);u.colorSpace=Fe;let g=document.createElement("canvas");g.width=g.height=512;let y=g.getContext("2d");y.fillStyle="#000",y.fillRect(0,0,512,512);for(let[w,T]of[[Bt.middle+s+.45,Bt.middle+s+1.6],[Bt.upper+s+.45,Bt.upper+s+1.6]])for(let P=0;P<5;P++)y.fillStyle="#ffc883",y.fillRect(25+P*98,f(T)+5,68,f(w)-f(T)-10);let m=new xn(g);m.colorSpace=Fe;let d=new re({map:u,roughness:.6,emissiveMap:m,emissive:"#ffffff",emissiveIntensity:0});t.userData.glow=[d];let _=w=>{if(w<r){let T=(w-a)/(r-a);return Math.sin(T*Math.PI/2)**1.3}if(w>o){let T=(l-w)/(l-o);return Math.sqrt(Math.max(0,T))}return 1},v=24,x=40;for(let w of[1,-1]){let T=Bn(v,x,(I,D)=>{let N=ue(a,l,D/(x-1)),O=_(N),z=I/(v-1),V=(e+n)/2,nt=(n-e)/2*(.25+.75*Math.min(1,O*1.4)),$=V+(z*2-1)*nt,it=Math.sin(z*Math.PI)**.45,et=yt($,N)+c*O*it;return[$,N,w*et]},(I,D)=>[I/(v-1),D/(x-1)],w<0),P=new W(T,d);P.castShadow=!0,t.add(P)}let E=(w,T,P)=>{let I=_(T),D=(e+n)/2,N=(n-e)/2*(.25+.75*Math.min(1,I*1.4)),O=D+(w*2-1)*N;return[O,yt(O,T)+c*I*Math.sin(w*Math.PI)**.45+P]},S=[],b=[];for(let w of[1,-1]){for(let P of[r-.05,Bt.upper+s+.3,o+.02]){let I=[];for(let D=0;D<=20;D++){let[N,O]=E(.03+.94*D/20,P,.04);I.push(new A(N,P,w*O))}S.push(new un(new hn(I),30,.05,6))}let T=(e+n)/2;b.push({p:new A(T,a+.25,w*(yt(T,a+.25)+.08)),kind:"drop"}),b.push({p:new A(T,l-.05,w*(yt(T,l)+.12)),kind:"top"})}let M=new W(mt(S),i.gold);return M.castShadow=!0,t.add(M,em(b)),t}var S1=.06,Wu=(i,t)=>Math.max(0,yt(i,t+.25)-S1);function b1(i,t,e,n=[],s=.1){let r=f=>ft(i,f),o=Math.max(8,Math.round((e-t)/.6)),a=new Ke,l=[];for(let f=0;f<=o;f++){let u=ue(t,e,f/o);l.push([u,Wu(u,r(u))])}a.moveTo(l[0][0],-l[0][1]);for(let[f,u]of l)a.lineTo(f,u);for(let f=l.length-1;f>=0;f--)a.lineTo(l[f][0],-l[f][1]);a.closePath();for(let f of n){let u=new Ds;u.moveTo(f.x-f.w/2,-f.d/2),u.lineTo(f.x-f.w/2,f.d/2),u.lineTo(f.x+f.w/2,f.d/2),u.lineTo(f.x+f.w/2,-f.d/2),u.closePath(),a.holes.push(u)}let c=new Ar(a,1),h=c.attributes.position,p=c.attributes.uv;for(let f=0;f<h.count;f++){let u=h.getX(f),g=h.getY(f),y=Math.max(.5,Wu(u,r(u)));h.setXYZ(f,u,r(u)+s*(1-Math.min(1,(g/y)**2)),g),p.setXY(f,u/8,g/8)}return c.computeVertexNormals(),c}function w1(i){return Cn.filter(t=>i==="upper"?!0:i==="orlop"?t.x>-14&&t.x<15:!0)}function sm(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(Je(new A(i+l*r/2,e,t),new A(i+l*r/2,s,n),.07,.22,new A(1,0,0)));let a=Math.round((s-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new kt(r,.05,.22);h.translate(i,ue(e,s,c),ue(t,n,c)),o.push(h)}return o}function T1(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(Je(new A(i,e,t+l*r/2),new A(i+s,n,t+l*r/2),.07,.22));let a=Math.round((n-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new kt(.22,.05,r);h.translate(i+s*c,ue(e,n,c),t),o.push(h)}return o}function rm(){let i=pe(),t=new zt;t.name="interior";let e=[],n=[],s=[],r=[["orlop",ve(Bt.orlop)+.35,Be(Bt.orlop)-.5],["lower",ve(Bt.lower)+.25,Be(Bt.lower)-.35],["middle",ve(Bt.middle)+.25,Be(Bt.middle)-.35],["upper",ve(Bt.upper)+.6,Be(Bt.upper)-.6]];for(let[d,_,v]of r){let x=w1(d);e.push(b1(d,_,v,x));for(let E of x){let S=ft(d,E.x)+.1,b=E.w/2+.1,M=E.d/2+.1,w=(T,P)=>new A(E.x+T,S+.12,P);n.push(Je(w(-b,-M),w(b,-M),.2,.3),Je(w(-b,M),w(b,M),.2,.3)),n.push(Je(w(-b,-M),w(-b,M),.2,.3,new A(0,1,0)),Je(w(b,-M),w(b,M),.2,.3,new A(0,1,0)))}}let o=["orlop","lower","middle","upper"];for(let d=0;d<o.length-1;d++)for(let _ of Cn.filter(v=>v.ladder)){if(o[d]==="orlop"&&!(_.x>-14&&_.x<15))continue;let v=xc(_,d%2?-1:1);s.push(...sm(v.x,v.zFoot,ft(o[d],_.x)+.05,v.zTop,ft(o[d+1],_.x)))}{let d=yc();s.push(...sm(d.x,d.zFoot,_c,d.zTop,ft("orlop",d.x)))}for(let d of vc)for(let _ of[1,-1])s.push(...T1(d.x,_*d.z,ft(d.from,d.x),ft(d.to,d.x+d.run),d.run,.7));let a=new W(mt(e),i.deck);a.receiveShadow=!0,a.name="decks",t.add(a);let l=new W(mt(n),i.darkWood);l.receiveShadow=l.castShadow=!0,t.add(l);let c=new W(mt(s),i.darkWood);c.castShadow=!0,t.add(c);let h=[],p=[["orlop",-26.2,26.8],["lower",-26.5,27.5],["middle",-26.8,27.6],["upper",-27,27.6],["qd",-27.5,ln],["qd",Ze,27.8],["poop",-28.2,$e]];for(let[d,_,v]of p)for(let x=_+.4;x<v;x+=1.25){if(Cn.some(b=>Math.abs(x-b.x)<b.w/2+.05))continue;let E=ft(d,x)-.17,S=Wu(x,E-.2);S<.6||h.push([x,E,S])}let f=new sn(new kt(.3,.3,1),i.darkWood,h.length),u=new Rt;h.forEach(([d,_,v],x)=>{u.makeScale(1,1,2*v).setPosition(d,_-.15,0),f.setMatrixAt(x,u)}),f.castShadow=f.receiveShadow=!0,f.name="beams",t.add(f);let g=[],y=[["orlop","lower"],["lower","middle"],["middle","upper"]];for(let[d,_]of y)for(let v=-20;v<20;v+=2.5)Cn.some(x=>Math.abs(v-x.x)<x.w/2+.3)||d==="orlop"&&(v<-14||v>15)||g.push(Ee(new A(v,ft(d,v),0),new A(v,ft(_,v)-.45,0),.11,.11,8));let m=new W(mt(g),i.darkWood);m.castShadow=!0,t.add(m);{let _=new Ke,v=[];for(let M=-21;M<=20;M+=.8)v.push(M);_.moveTo(v[0],-yt(v[0],-5.3));for(let M of v)_.lineTo(M,Math.max(.2,yt(M,-5.3)-.05));for(let M=v.length-1;M>=0;M--)_.lineTo(v[M],-Math.max(.2,yt(v[M],-5.3)-.05));let x=new Ar(_);x.rotateX(Math.PI/2),x.translate(0,-5.3,0);let E=x.attributes.uv,S=x.attributes.position;for(let M=0;M<S.count;M++)E.setXY(M,S.getX(M)/4,S.getZ(M)/4);let b=new W(x,new re({map:Fp(),roughness:1,side:De}));b.receiveShadow=!0,b.name="ballast",t.add(b)}return t}function Qe(i,t){let e=i.index?i.toNonIndexed():i,n=new ae(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new ye(r,3)),e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(s*2),2)),e}var te=(i,t,e,n,s,r,o)=>Qe(new kt(i,t,e).translate(n,s,r),o),mi=(i,t,e,n,s,r,o,a=10)=>Qe(new Zt(t,i,e,a).translate(n,s,r),o),R1="#8a6a44",Xi="#5a4330",Ic="#a0805a",Ws="#2c2e30",A1="#a89a7c",Xu="#a8643c";function Lc(i,t,e=Ws,n=R1){let s=[];for(let a=0;a<=10;a++){let l=a/10;s.push(new Q(t*(.82+.18*Math.sin(Math.PI*l)),(l-.5)*i))}let o=[Qe(new _n(s,14).rotateZ(Math.PI/2).translate(0,t,0),n)];for(let a of[.12,.3,.7,.88]){let l=t*(.82+.18*Math.sin(Math.PI*a))+.01;o.push(Qe(new Zt(l,l,.035,14,1,!0).rotateZ(Math.PI/2).translate((a-.5)*i,t,0),e))}for(let a of[1,-1])o.push(Qe(new Ls(t*.82,14).rotateY(a*Math.PI/2).translate(a*i/2,t,0),Xi));return mt(o)}function C1(i,t,e,n){return Lc(i,t,e,n).rotateZ(Math.PI/2).translate(t,i/2-t,0)}var P1={leaguer:()=>Lc(1.6,.52),butt:()=>Lc(1.3,.42),hogshead:()=>Lc(1,.36),powder:()=>C1(.6,.22,Xu,Ic),chest:()=>mt([te(.9,.42,.45,0,.21,0,"#6b4a2e"),te(.92,.05,.47,0,.44,0,"#4a3220"),te(.12,.08,.02,0,.36,.235,Ws)]),sack:()=>Qe(new fe(.32,10,8).scale(1.2,.8,.8).translate(0,.25,0),"#b8a57e"),bench:()=>mt([te(1.9,.06,.28,0,.45,0,Ic),te(.06,.42,.24,-.8,.21,0,Xi),te(.06,.42,.24,.8,.21,0,Xi)]),messTable:()=>mt([te(.75,.06,1.9,0,.78,.95,Ic),te(.06,.75,.06,0,.38,1.85,Xi),Qe(new Zt(.012,.012,1).translate(0,1.3,1.85),"#6b5a40")]),table:()=>mt([te(1.6,.06,.9,0,.76,0,"#7a5232"),...[[-.7,-.38],[.7,-.38],[-.7,.38],[.7,.38]].map(([i,t])=>te(.06,.74,.06,i,.37,t,"#5a3c22"))]),chair:()=>mt([te(.42,.05,.42,0,.46,0,"#6b4528"),te(.42,.5,.05,0,.72,-.19,"#6b4528"),...[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]].map(([i,t])=>te(.04,.46,.04,i,.23,t,"#4a3018"))]),desk:()=>mt([te(1.1,.75,.6,0,.375,0,"#6b4528"),te(1.12,.06,.64,0,.78,0,"#4a3018"),te(.9,.3,.15,0,.95,-.2,"#5a3a20")]),settee:()=>mt([te(2.2,.42,.6,0,.21,0,"#5a3a20"),te(2.2,.12,.6,0,.48,0,"#2a4a6a"),te(2.2,.5,.1,0,.75,-.26,"#2a4a6a")]),hammock:()=>mt([Qe(new fe(.5,12,6).scale(1.8,.32,.36).translate(0,-.45,0),A1),Qe(new Zt(.01,.01,.5).rotateZ(.9).translate(-1.05,-.2,0),"#8a7556"),Qe(new Zt(.01,.01,.5).rotateZ(-.9).translate(1.05,-.2,0),"#8a7556")]),cot:()=>mt([te(1.9,.35,.7,0,-.75,0,"#cfc3a4"),te(1.95,.05,.75,0,-.56,0,"#6b4a2e"),...[[-.9,-.3],[.9,-.3],[-.9,.3],[.9,.3]].map(([i,t])=>Qe(new Zt(.01,.01,.6).translate(i,-.28,t),"#8a7556"))]),coil:()=>mt([0,1,2,3].map(i=>Qe(new Me(.95-i*.1,.12,6,24).rotateX(Math.PI/2).translate(0,.13+i*.24,0),"#6b5a40"))),ropeCoil:()=>mt([0,1,2].map(i=>Qe(new Me(.4,.07,5,16).rotateX(Math.PI/2).translate(0,.07+i*.13,0),"#8a7556"))),sailBundle:()=>Qe(new Oe(.3,2.4,4,8).rotateZ(Math.PI/2).translate(0,.3,0),"#d0c5a8"),shotPile:()=>{let i=[];for(let t=0;t<3;t++)for(let e=0;e<4-t;e++)for(let n=0;n<4-t;n++)i.push(Qe(new fe(.08,8,6).translate((e-(3-t)/2)*.16,.08+t*.13,(n-(3-t)/2)*.16),Ws));return mt(i)},garland:()=>mt([te(1.4,.12,.22,0,.06,0,Xi),...[0,1,2,3,4,5,6,7].map(i=>Qe(new fe(.08,8,6).translate(-.6+i*.17,.16,0),Ws))]),bucket:()=>mi(.16,.2,.32,0,.16,0,"#5a4330"),coop:()=>mt([te(1.2,.6,.6,0,.3,0,"#7a6040"),...[0,1,2,3,4,5].map(i=>te(.03,.5,.62,-.5+i*.2,.32,0,"#3a2a18"))]),shelf:()=>mt([te(.4,1.6,1.8,0,.8,0,"#6b4a2e"),...[.4,.8,1.2].map(i=>te(.38,.04,1.76,.02,i,0,"#5a3c22"))]),bin:()=>mt([te(1.4,.9,1,0,.45,0,"#7a5a38"),te(1.42,.05,1.02,0,.9,0,"#5a3c22")]),workbench:()=>mt([te(2.2,.1,.7,0,.85,0,Ic),te(.1,.8,.6,-1,.4,0,Xi),te(.1,.8,.6,1,.4,0,Xi),te(1.6,.18,.18,.2,.09,.15,"#9a7a50")]),stove:()=>mt([te(2.1,1.25,1.5,0,.62,0,"#1e1f21"),te(2.2,.08,1.6,0,1.28,0,"#2c2e30"),te(.5,.45,.04,-.5,.55,.77,"#3a3c3e"),te(.5,.45,.04,.3,.55,.77,"#3a3c3e"),te(.6,.25,.04,.3,1,.77,"#7a2a10"),mi(.32,.32,.55,-.5,1.6,-.2,Xu,14),mi(.28,.28,.5,.35,1.58,-.25,Xu,14),te(.45,1.2,.45,.6,2,.35,"#1e1f21"),te(2.6,.12,2,0,.06,0,"#8a8478")]),pumpCase:()=>mt([mi(.22,.22,1.1,0,.55,0,"#5a4330",12),mi(.26,.26,.12,0,1.1,0,Ws,12)]),pumpWinch:()=>mt([mi(.05,.05,4.6,0,1.15,0,Ws).rotateX(Math.PI/2),te(.12,1.2,.12,0,.6,-2.2,Xi),te(.12,1.2,.12,0,.6,2.2,Xi),te(.06,.06,1.2,.45,1.15,-1,"#8a6a44"),te(.06,.06,1.2,-.45,1.15,1,"#8a6a44")]),bitts:()=>mt([te(.5,2,.5,0,1,-1.1,"#6b4a2e"),te(.5,2,.5,0,1,1.1,"#6b4a2e"),te(.45,.45,2.8,.05,1.2,0,"#5a3c22")]),lantern:()=>mt([mi(.12,.1,.32,0,-.35,0,"#ffd890",8),mi(.14,.08,.1,0,-.14,0,"#3a2a18",8),Qe(new Zt(.01,.01,.12).translate(0,-.05,0),"#3a2a18")]),cartridgeRack:()=>mt([te(.35,1.4,1.6,0,.7,0,"#6b4a2e"),...[.35,.75,1.15].flatMap(i=>[0,1,2,3,4,5].map(t=>Qe(new Zt(.07,.07,.3,8).rotateZ(Math.PI/2).translate(.05,i+.08,-.6+t*.24),"#e8dcc0")))]),timber:()=>mt([te(3,.25,.25,0,.13,-.3,"#9a7a50"),te(3,.25,.25,0,.13,0,"#8a6a44"),te(2.6,.25,.25,0,.38,-.15,"#9a7a50")]),block:()=>mt([te(.3,.42,.18,0,.21,0,"#6b4a2e"),mi(.04,.04,.2,0,.21,0,Ws).rotateX(Math.PI/2)]),tub:()=>mi(.3,.34,.35,0,.18,0,"#6b4a2e",12),plate:()=>Qe(new Zt(.11,.1,.02,10).translate(0,.01,0),"#9a9a90"),globe:()=>mt([Qe(new fe(.22,14,10).translate(0,1,0),"#c8b88a"),mi(.04,.12,.8,0,.4,0,"#5a3a20")])},I1=new Set(["messTable","bench","plate","chest","tub","table","chair","desk","settee","globe","cot","hammock","bucket"]),L1=new Set(["lower","middle","upper","qd"]),D1={middle:"lower",upper:"middle",qd:"upper",poop:"qd",lower:"orlop"},qu=class{constructor(){this.items={},this.deck=null,this._q=new Ge}add(t,e,n,s,r=0,o=1){let a=new Rt().compose(new A(e,n,s),this._q.setFromAxisAngle(new A(0,1,0),r).clone(),new A(o,o,o));a.clearable=I1.has(t)&&L1.has(this.deck),(this.items[t]||=[]).push(a)}},om=(i,t)=>yt(i,t+.6)-.15;function qi(i,t,e){if(i==="hold")return-5.3;let n=ft(i,t),s=Math.max(.5,yt(t,n+.25)-.06);return n+.1*(1-Math.min(1,(e/s)**2))}var N1=(i,t)=>ft(i,t)-.47,am=(i,t=.6)=>Cn.some(e=>Math.abs(i-e.x)<e.w/2+t),U1=(i,t=1.2)=>Object.values(Ci).some(e=>Math.abs(i-e.x)<t);function lm(i){let t=new qu,e=(_,v,x,E,S=0,b=0)=>{t.deck=v,t.add(_,x,qi(v,x,E)+b,E,S)},n=(_,v,x,E,S=0)=>{t.deck=D1[v],t.add(_,x,N1(v,x),E,S)},s=Ai(),r=_=>kr.find(v=>v.name===_);for(let[_,v,x,E,S]of[["lower","lower","middle",-22.6,18],["middle","middle","upper",-15,15.5],["upper","upper","qd",-13.8,20.5]]){let b=r(_),M=s.filter(w=>w.tier===b).map(w=>w.x);for(let w=0;w<M.length-1;w++){let T=(M[w]+M[w+1])/2;if(!(T<E||T>S||am(T,.2)))for(let P of[1,-1]){let I=P*(om(T,ft(v,T))-.05);t.deck=v,t.add("messTable",T,qi(v,T,I),I,P>0?Math.PI:0),e("bench",v,T-.6,I-P*1,Math.PI/2),e("bench",v,T+.6,I-P*1,Math.PI/2),e("plate",v,T-.15,I-P*.6,0,.81),e("plate",v,T+.15,I-P*1.3,0,.81),(w+(P>0?0:1))%2===0&&e("chest",v,T-.95,I-P*.35,Math.PI/2),w%3===0&&e("tub",v,T+.95,I-P*1.9),t.deck=null,t.add("garland",M[w]+1.5,qi(v,T,I)+.02,I-P*.12,0)}}}let o=(_,v)=>Cn.some(x=>Math.abs(_-x.x)<x.w/2+1&&Math.abs(v)<x.d/2+.3);for(let _=7.4;_<20;_+=2.05){if(U1(_,1.3))continue;let v=ft("lower",_),x=om(_,v)-.9;for(let E=-x;E<=x;E+=.36)Math.abs(E)<.35||o(_,E)||n("hammock","middle",_,E)}for(let[_,v,x,E]of[["lower","middle",-22,22],["middle","upper",-14,18],["upper","qd",-12,20],["orlop","lower",-24,24]])for(let S=x;S<=E;S+=4.5)am(S,.3)||n("lantern",v,S+.6,.9);let a=Ci.main.x;for(let _ of[1,-1])e("pumpCase","lower",a+1.2,_*1.5),e("pumpCase","lower",a-1.2,_*1.5),e("pumpWinch","lower",a,_*1.5,Math.PI/2);e("bitts","lower",20.6,0),e("table","lower",-25.4,0,Math.PI/2);for(let _ of[-.9,.9])for(let v of[-.5,.5])e("chair","lower",-25.4+v,_,_>0?Math.PI:0);e("chest","lower",-24.2,4.6),e("chest","lower",-24.2,-4.6),e("stove","middle",20.2,0,Math.PI),e("shelf","middle",17,-1.3,Math.PI/2),e("shelf","middle",17,1.3,-Math.PI/2),e("coop","middle",23.6,-2.2),e("coop","middle",23.6,2.2),e("tub","middle",18.8,-1.9),e("bucket","middle",18.8,2);for(let _ of[-27,-25.4,-23.8,-22.2]){e("table","middle",_,0,0);for(let v of[-.75,.75])e("chair","middle",_,v,v>0?Math.PI:0)}for(let[_,v]of[[-24.4,5.6],[-21.2,5.6],[-24.9,-5.6],[-22.4,-5.6],[-19.6,-5.6],[-17.1,-5.6]])n("cot","upper",_,v,0),e("chest","middle",_+.8,v*.8,0);e("desk","middle",-24.4,4.1,Math.PI),e("shelf","middle",-17.6,6.4,0),e("table","upper",-26,0,Math.PI/2);for(let _ of[-.9,.9])for(let v of[-.45,.45])e("chair","upper",-26+v,_,_>0?Math.PI:0);e("desk","upper",-27.6,3.2,Math.PI/2),e("settee","upper",-28.1,-2.5,Math.PI/2),e("globe","upper",-24.4,4.4);for(let _ of[-21.6,-20]){e("table","upper",_,0,0);for(let v of[-.8,.8])for(let x of[-.4,.4])e("chair","upper",_+x,v,v>0?Math.PI:0)}n("cot","qd",-16.9,4.4,0),e("desk","upper",-16,-3.5,-Math.PI/2),e("chest","upper",-17.6,-5,0);for(let[_,v]of[[22.6,2],[22.6,3.2],[24.4,2],[24.4,3.2],[26,2.2]])n("cot","qd",_,v,0);e("table","upper",23.5,4.8,0),e("table","qd",-26,0,Math.PI/2);for(let _ of[-.9,.9])e("chair","qd",-26,_,_>0?Math.PI:0);e("desk","qd",-27.8,2.8,Math.PI/2),e("table","qd",-21,-4,0);for(let _ of[-.5,.5])for(let v of[-4.8,-3.2])e("chair","qd",-21+_,v,v>-4?Math.PI:0);n("cot","poop",-21.4,3.8,0),e("desk","qd",-15.6,-4.6,0),e("chest","qd",-16.8,-5.6,0),e("desk","qd",-15.6,4.6,Math.PI),e("chest","qd",-16.8,5.6,0);for(let _ of[-.46,.46])e("chest","orlop",-14.6+_,0,Math.PI/2);e("tub","orlop",-13.3,.8),e("bucket","orlop",-15.9,-.8),e("bucket","orlop",-13.2,-.9),e("table","orlop",-14,-4,0);for(let _ of[-15.6,-12.4])e("chest","orlop",_,-5.4,0);n("lantern","lower",-13,-3.6);for(let _ of[-26.4,-25.2])for(let v of[-3.5,-1.2,1.2,3.5])e("bin","orlop",_,v,0);for(let[_,v]of[[-22.8,-4],[-21.6,-4.6],[-22,-2.6],[-21,-3.2]])e("sack","orlop",_,v,_);e("hogshead","orlop",-22.4,-5.6,0),e("hogshead","orlop",-21,-5.8,0);for(let[_,v]of[[-19.6,-4],[-18.8,-4.6],[-19.4,-2.4]])e("chest","orlop",_,v,0);e("shelf","orlop",-22.4,6,0),e("chest","orlop",-21.8,3,0),n("cot","lower",-19.7,4.6,0),e("chest","orlop",-19.7,2.6,0);for(let _=0;_<6;_++)e("powder","orlop",-22.9+_%3*.48,-.5+Math.floor(_/3)*1);for(let _ of[2.4,6,9.6])for(let v of[1,-1])e("coil","orlop",_,v*4.6,_);for(let[_,v]of[[14.8,3.2],[16.4,4.2],[15.4,5]])e("ropeCoil","orlop",_,v,0);for(let[_,v]of[[16.8,2.6],[17,3],[16.6,3.4]])e("block","orlop",_,v,_);e("workbench","orlop",15.8,-3.6,0),e("timber","orlop",15.6,-5.2,0);for(let _=0;_<4;_++)e("sailBundle","orlop",19,1.2+_*.65,0);for(let[_,v]of[[18.4,-2.6],[19.8,-3.4],[18.8,-4.2]])e("ropeCoil","orlop",_,v,0);for(let[_,v]of[[20,-1.4],[19.4,-1.2]])e("block","orlop",_,v,0);for(let _ of[21.1,21.6])for(let v of[-1.3,1.3])e("powder","orlop",_,v);let l=(_,v,x)=>Math.abs(v)<1.05+x||Math.abs(_-a)<3.2&&Math.abs(v)<3+x||_>-.2&&_<3.8&&v<.2&&v>-5.4,c=(_,v,x,E,S)=>{for(let b=_;b<=v;b+=E+.05){if(Math.abs(b-a)<2.6)continue;let M=yt(b,-5.3+S)-.25;for(let T=-M+S;T<=M-S;T+=2*S+.02)l(b,T,S)||e(x,"hold",b,T,0);let w=yt(b,-5.3+3*S)-.3;for(let T=-w+2*S;T<=w-2*S;T+=2*S+.02)l(b,T,S)||e(x,"hold",b,T,0,2*S*.9)}};c(.6,14.2,"leaguer",1.6,.52),c(-19.2,-5.2,"butt",1.3,.42);for(let _ of[a-1.6,a+1.6])for(let v of[-.6,.6])e("shotPile","hold",_,v,0);for(let _=18.4;_<22.6;_+=.5){let v=Math.min(2.6,yt(_,-5)-.5);for(let x=-v;x<=v;x+=.48)Math.abs(x)>.7&&e("powder","hold",_,x,0)}e("cartridgeRack","hold",16,-1.6,0),e("cartridgeRack","hold",16,1.6,Math.PI);let h=new zt;h.name="furnishing";let p=new re({vertexColors:!0,roughness:.8}),f=new re({vertexColors:!0,roughness:.5,emissive:"#ffb347",emissiveIntensity:.9}),u=new Rt().makeScale(0,0,0),g=[];for(let[_,v]of Object.entries(t.items)){let x=P1[_](),E=new sn(x,_==="lantern"?f:p,v.length);v.forEach((S,b)=>E.setMatrixAt(b,S)),g.push([E,v]),E.castShadow=_!=="lantern"&&_!=="plate",E.receiveShadow=!0,E.name=_,E.frustumCulled=!1,h.add(E)}let y=-27.6,m=ft("middle",-24)-.75,d=new W(Qe(new kt(8.2,.32,.32).translate(y+4.1,m,0),"#5a4330"),p);return d.castShadow=!0,h.add(d),h.userData.glow=f,h.userData.lanterns=(t.items.lantern||[]).map(_=>new A().setFromMatrixPosition(_)),h.userData.setCleared=_=>{for(let[v,x]of g)x.some(E=>E.clearable)&&(x.forEach((E,S)=>v.setMatrixAt(S,_&&E.clearable?u:E)),v.instanceMatrix.needsUpdate=!0)},h}var Dc=.32;function F1(i,t,e){let n=[];for(let s=0;s<e;s++)n.push(new Me(i-s*t*1.6,t,5,18).rotateX(Math.PI/2).translate(0,t+s*.01,0));return mt(n)}function O1(){let i=[];for(let t=0;t<4;t++)i.push(new Me(.2-t*.012,.022,4,16).scale(.85,1.25,1).translate(.01*t,-.27,.02*t));return mt(i)}function cm(){let i=pe(),t=new zt;t.name="deckGear";let e={rail:[],pin:[],hang:[],coil:[],ring:[],bucket:[],grating:[]},n=(v,x,E,S=0,b=1,M=1,w=1)=>new Rt().compose(new A(v,x,E),new Ge().setFromAxisAngle(new A(0,1,0),S),new A(b,M,w)),s=v=>v<$e?ft("poop",v):ft("qd",v),r=(v,x,E)=>{let S=Math.max(2,Math.round((x-v)/.3)),b=[];for(let M=0;M<=S;M++){let w=v+(x-v)*M/S,T=s(w)+.95;b.push(new A(w,T,E*(yt(w,T)-Dc-.1)))}for(let M=0;M<S;M++){let w=b[M],T=b[M+1],P=w.distanceTo(T),I=Math.atan2(-(T.z-w.z),T.x-w.x);e.rail.push(n((w.x+T.x)/2,w.y,(w.z+T.z)/2,I,P,1,1))}b.forEach((M,w)=>{w===0||w===S||(e.pin.push(n(M.x,M.y,M.z)),w%3===1&&e.hang.push(n(M.x,M.y,M.z+E*.04,E>0?Math.PI/2:-Math.PI/2)))});for(let M=v+.6;M<x-.3;M+=2.8){let w=s(M);e.coil.push(n(M,w+.01,E*(yt(M,w+.4)-Dc-.55),M))}},o=Ai().filter(v=>v.tier.deck==="qd").map(v=>v.x).sort((v,x)=>v-x),a=[];for(let v=0;v<o.length-1;v++){let x=o[v]+.6,E=o[v+1]-.6;E-x>.8&&x>$e+.3&&E<Be(8)-2.5&&a.push([x,E])}a.push([ln+.4,Ze-.4]),a.push([o[o.length-1]+.6,Be(8)-3.2]);for(let[v,x]of a)for(let E of[1,-1])r(v,x,E);for(let v of[1,-1])r(ve(10)+3,$e-.6,v);let l=[],c=(v,x)=>{let E=ft(x,v)+.1,S=.95,b=.85;for(let[M,w]of[[-S,-S],[-S,S],[S,-S],[S,S],[-S,0],[S,0],[0,-S],[0,S]])l.push(Ee(new A(v+M,E,w),new A(v+M,E+b,w),.055,.055,8));for(let[M,w]of[[[-S,-S],[S,-S]],[[-S,S],[S,S]],[[-S,-S],[-S,S]],[[S,-S],[S,S]]]){let T=new kt(Math.abs(w[0]-M[0])+.16,.1,Math.abs(w[1]-M[1])+.16);T.translate(v+(M[0]+w[0])/2,E+b,(M[1]+w[1])/2),l.push(T)}for(let M=0;M<16;M++){let w=M/16*4,T=Math.floor(w),P=w-T,I=[[-S,-S],[S,-S],[S,S],[-S,S]],D=I[T],N=I[(T+1)%4],O=v+D[0]+(N[0]-D[0])*P,z=D[1]+(N[1]-D[1])*P;P<.12||P>.88||(e.pin.push(n(O,E+b,z)),M%3===0&&e.hang.push(n(O,E+b,z,Math.atan2(z,O-v)-Math.PI/2)))}for(let[M,w]of[[-1.6,.9],[1.5,-1],[-1.4,-1.2]])e.coil.push(n(v+M,E-.09,w,M))};c(Ci.main.x,"qd"),c(Ci.fore.x,"qd");let h=new W(mt(l),i.darkWood);h.castShadow=h.receiveShadow=!0,t.add(h);for(let v of Ai()){let x=v.tier;for(let E of[1,-1]){let S=ft(x.deck,v.x),b=E*(yt(v.x,S+.5)-(x.deck==="qd"?Dc:0)-.35);for(let M of[-x.w/2-.25,x.w/2+.25])e.ring.push(n(v.x+M,S+.11,b));e.ring.push(n(v.x,S+.11,b-E*(x.len+.6)))}}for(let v of[1,-1])for(let x=-22.9;x<$e-2;x+=.42){let E=ft("poop",x)+.6;e.bucket.push(n(x,E,v*(yt(x,E+.3)-Dc-.12)))}for(let[v,x,E]of[[-11.6,1.6,2.2],[-5.4,1.8,2.4]])e.grating.push(n(v,ft("qd",v)+.09,0,0,x,1,E));let p=mt([new Zt(.022,.03,.2,6).translate(0,.12,0),new fe(.035,6,4).translate(0,.24,0),new Zt(.018,.018,.18,6).translate(0,-.05,0)]),f=mt([new Me(.07,.014,4,12).rotateX(Math.PI/2),new Zt(.03,.03,.02,6)]),u=mt([new Zt(.13,.11,.3,10),new Me(.13,.012,4,12).rotateX(Math.PI/2).translate(0,.15,0),new Me(.15,.01,4,12).rotateY(Math.PI/2).translate(0,.2,0)]),g=(()=>{let v=[new kt(1.1,.16,1.1)];for(let x=-4;x<=4;x++)v.push(new kt(.035,.03,1).translate(x*.11,.09,0)),v.push(new kt(1,.03,.035).translate(0,.09,x*.11));return mt(v)})(),y=new re({color:"#2a1d14",roughness:.6}),m=new re({color:"#6b5a42",roughness:.95}),d=new re({color:"#7a6040",roughness:.85}),_=[["rail",new kt(1,.11,.16),i.darkWood],["pin",p,i.darkWood],["hang",O1(),m],["coil",F1(.34,.04,6),m],["ring",f,i.iron],["bucket",u,y],["grating",g,d]];for(let[v,x,E]of _){let S=e[v];if(!S.length)continue;let b=new sn(x,E,S.length);S.forEach((M,w)=>b.setMatrixAt(w,M)),b.castShadow=v!=="ring",b.receiveShadow=!0,b.name=v==="grating"||v==="coil"?v:`gear-${v}`,b.frustumCulled=!1,t.add(b)}return t}var Nn={lowerHead:34,topY:30.6,topLen:5.3,topW:7.1,rLower:[.5,.4],topmastHeel:29.6,topmastHead:50.4,crossY:47,crossW:4.6,rTop:[.33,.22],tgHeel:46.4,tgHead:58.4,poleHead:63.4,rTg:[.19,.08],yards:[{name:"course",L:31.5,ySet:29.2,yLow:29.2,r:.33,head:"lowerHead"},{name:"topsail",L:23.2,ySet:46.2,yLow:35,r:.25,head:"topmastHead"},{name:"topgallant",L:14.6,ySet:57.5,yLow:50.9,r:.16,head:"tgHead"},{name:"royal",L:9.6,ySet:62.5,yLow:58.9,r:.11,head:"poleHead"}]},Nc=class{constructor(){let t=pe();this.group=new zt,this.group.name="rig",this.masts={};for(let[e,n]of Object.entries(Ci))this.masts[e]=this.buildMast(e,n,t);this.buildBowsprit(t),this.buildSpankerSpars(t)}buildMast(t,e,n){let s=ft("upper",e.x),r=e.scale,o=D=>s+(D-5.76)*r,a={name:t,x:e.x,scale:r,group:new zt,yards:{}},l=a.group;l.position.set(e.x,0,0),l.rotation.z=e.rake,this.group.add(l);let c={lowerHead:o(Nn.lowerHead),topY:o(Nn.topY),topmastHeel:o(Nn.topmastHeel),topmastHead:o(Nn.topmastHead),crossY:o(Nn.crossY),tgHeel:o(Nn.tgHeel),tgHead:o(Nn.tgHead),poleHead:o(Nn.poleHead),topLen:Nn.topLen*r,topW:Nn.topW*r,crossW:Nn.crossW*r};a.h=c;let h=(D,N,O=0)=>new A(D,N,O),p=D=>D.map(N=>N*(.75+.25*r)),[f,u]=p(Nn.rLower),[g,y]=p(Nn.rTop),[m,d]=p(Nn.rTg);a.r={lower:u,top:y,tg:d};let _=[],v=[],x=[];_.push(Ee(h(0,0),h(0,c.topY),f,u*1.05,16)),v.push(Ee(h(0,c.topY),h(0,c.lowerHead),u*.92,u*.88,12));for(let D=s+1.2;D<c.topY-1;D+=1.15)x.push(Ee(h(0,D),h(0,D+.12),f*1.06,f*1.06,16));let E=u+g+.05;_.push(Ee(h(E,c.topmastHeel),h(E,c.crossY),g,y*1.05,12)),v.push(Ee(h(E,c.crossY),h(E,c.topmastHead),y,y*.9,10));let S=E+y+m+.03;_.push(Ee(h(S,c.tgHeel),h(S,c.tgHead),m,d*1.3,10)),_.push(Ee(h(S,c.tgHead),h(S,c.poleHead),d*1.3,d*.7,8)),a.dTop=E,a.dTg=S,v.push(Ee(h(S,c.poleHead),h(S,c.poleHead+.25),.22*r,.22*r,10)),v.push(Je(h(-u-.2,c.lowerHead+.15),h(E+g+.25,c.lowerHead+.15),1*r,.45));let b=new Ke,M=c.topLen,w=c.topW/2;b.moveTo(-M*.45,-w),b.lineTo(-M*.45,w),b.lineTo(M*.25,w),b.quadraticCurveTo(M*.55,w,M*.55,0),b.quadraticCurveTo(M*.55,-w,M*.25,-w),b.closePath();let T=new Sn(b,{depth:.22,bevelEnabled:!1});T.rotateX(Math.PI/2),T.translate(0,c.topY+.22,0),v.push(T);for(let D=0;D<=6;D++){let N=-w+2*w*D/6;v.push(Ee(h(-M*.43,c.topY+.22,N),h(-M*.43,c.topY+1.15,N),.035,.035,5))}v.push(Ee(h(-M*.43,c.topY+1.15,-w),h(-M*.43,c.topY+1.15,w),.05,.05,6)),v.push(Je(h(E,c.crossY,-c.crossW/2),h(E,c.crossY,c.crossW/2),.25,.22)),v.push(Je(h(E-1.2*r,c.crossY+.2),h(E+1*r,c.crossY+.2),c.crossW*.45,.18)),v.push(Je(h(E-y-.15,c.topmastHead+.1),h(S+m+.18,c.topmastHead+.1),.6*r,.3));let P=new W(mt(_),n.mast),I=new W(mt([...v,...x]),n.spar);P.castShadow=I.castShadow=!0,l.add(P,I),a.local={lowerHead:h(0,c.lowerHead-.2),shroudHead:h(0,c.topY-.4),stayLower:h(0,c.topY+.4),topEdge:D=>h(-M*.1,c.topY+.15,D*w*.98),topBack:h(-M*.4,c.topY+.2),topFront:h(M*.5,c.topY+.2),topmastShroudHead:h(E,c.crossY-.3),topmastHead:h(E,c.topmastHead-.2),crossEnd:D=>h(E,c.crossY+.1,D*c.crossW/2),tgHead:h(S,c.tgHead-.2),poleHead:h(S,c.poleHead-.1),futtock:h(0,c.topY-3.2*r)};for(let D of Nn.yards){let N=this.buildYard(a,D,o,n);a.yards[D.name]=N}return a}buildYard(t,e,n,s){let r=t.scale,o=Cp[t.name][e.name],a=e.r*(.75+.25*r),l=new zt,c=n(e.ySet),h=n(e.yLow),p=e.name==="course"?t.r.lower+a+.1:e.name==="topsail"?t.dTop+t.r.top+a+.05:t.dTg+a+.18;l.position.set(p,c,0);let f=[],u=12;for(let x=0;x<=u;x++){let E=x/u;f.push(new Q(a*(1-.55*E**1.6),E*o/2))}let g=new _n(f,10),y=g.clone().scale(1,-1,1),m=mt([g,y]);m.rotateX(Math.PI/2);let d=new W(m,s.spar);d.castShadow=!0,l.add(d);let _=[];for(let x=0;x<=16;x++){let E=x/16*2-1;_.push(new A(-.15,-a-.9*(1-E*E)-.15,E*o*.47))}let v=[new un(new hn(_),32,.03,4)];for(let x=2.2;x<o*.45;x+=2.4)for(let E of[1,-1]){let S=E*x/(o*.47),b=-a-.9*(1-S*S)-.15;v.push(Ee(new A(-.1,-a*.6,E*x),new A(-.15,b,E*x),.02,.02,4))}if(l.add(new W(mt(v),s.rope)),t.name!=="mizzen"&&(e.name==="course"||e.name==="topsail")){let x=[],E=.09*r*(e.name==="course"?1.2:1);for(let b of[1,-1]){x.push(Ee(new A(a*.8,a*.75,b*o*.2),new A(a*.8,a*.75,b*(o*.5+2.6*r)),E,E*.8,8));for(let M of[o*.22,o*.48])x.push(new Me(E+.04,.025,4,10).rotateY(Math.PI/2).translate(a*.8,a*.75,b*M))}let S=new W(mt(x),s.spar);S.castShadow=!0,l.add(S)}return t.group.add(l),{name:e.name,group:l,L:o,r:a,ySet:c,yLow:h,mast:t,headKey:e.head,hoist:1,brace:0}}buildBowsprit(t){let e=new A(21.2,ft("qd",21.2)+.2,0),n=on.degToRad(30),s=new A(Math.cos(n),Math.sin(n),0),r=(m,d=0)=>e.clone().addScaledVector(s,m).add(new A(-Math.sin(n)*d,Math.cos(n)*d,0)),o=[],a=[];o.push(Ee(r(0),r(22.6),.47,.33,16)),o.push(Ee(r(16.4,.6),r(32.5,.6),.2,.12,12)),o.push(Ee(r(29.8,.9),r(38.8,.9),.11,.06,10)),a.push(Je(r(22.1,.1),r(22.1,.95),.7,.42,new A(0,0,1))),a.push(Je(r(32,.6),r(32,.95),.36,.28,new A(0,0,1))),a.push(Ee(r(22.3,-.2),r(22.3,-2.8),.08,.06,6));let l=new W(mt(o),t.mast),c=new W(mt(a),t.spar);l.castShadow=c.castShadow=!0,this.group.add(l,c),this.bowsprit={P:r,heel:e,dir:s,steeve:n,stemPoint:r(9),fore:r(10.5,.4),cap:r(21.9,.4),jib:r(28,.8),jibEnd:r(32.2,.8),flyEnd:r(38.6,1),striker:r(22.3,-2.8)};let h=new zt;h.position.copy(r(18,-.7));let p=19.66,f=.2,u=[];for(let m=0;m<=10;m++)u.push(new Q(f*(1-.5*(m/10)**1.6),m/10*p/2));let g=mt([new _n(u,8),new _n(u,8).scale(1,-1,1)]);g.rotateX(Math.PI/2);let y=new W(g,t.spar);y.castShadow=!0,h.add(y),this.group.add(h),this.spritYard={name:"sprit",group:h,L:p,r:f,hoist:1,brace:0,ySet:h.position.y,yLow:h.position.y,mast:null}}buildSpankerSpars(t){let e=this.masts.mizzen,n=e.h,s=new zt;s.position.set(-e.r.lower-.1,n.topY-2.4,0);let r=on.degToRad(38);s.rotation.z=Math.PI-r;let o=13.9;s.add(new W(Ee(new A(0,0,0),new A(o,0,0),.2,.12,10),t.spar)),e.group.add(s);let a=new zt,l=ft("poop",-17.4)+2.3;a.position.set(-e.r.lower-.1,l,0),a.rotation.z=Math.PI-.04;let c=22.25;a.add(new W(Ee(new A(0,0,0),new A(c,0,0),.24,.16,10),t.spar)),e.group.add(a);for(let h of[s,a])h.children[0].castShadow=!0;this.gaff={group:s,L:o},this.boom={group:a,L:c}}allYards(){let t=[];for(let e of Object.values(this.masts))t.push(...Object.values(e.yards));return t}applyYards(t){for(let e of Object.values(this.masts))for(let n of Object.values(e.yards)){let s=n.name==="course"?1:t.hoist[n.name]??1;n.group.position.y=n.yLow+(n.ySet-n.yLow)*s,n.group.rotation.y=t.brace*(n.name==="course"?.55:1)*(e.name==="mizzen"?1.15:1)}this.boom.group.rotation.y=t.boomSwing,this.gaff.group.rotation.y=t.boomSwing*1.2}};var B1=new Rt,H1=new Rt,z1=new A;function Ve(i,t,e,n=new A){return n.copy(i),t.localToWorld(n),e.worldToLocal(n)}function Fc(i,t){let e=new de;e.setAttribute("position",new ye(new Float32Array(i*t*3),3)),e.setAttribute("uv",new ye(new Float32Array(i*t*2),2));let n=[];for(let s=0;s<t-1;s++)for(let r=0;r<i-1;r++){let o=s*i+r,a=o+1,l=o+i,c=l+1;n.push(o,a,c,o,c,l)}return e.setIndex(n),e}var hm=i=>i*i*(3-2*i);function k1(i,t){let e=pe(),n=[],s=60,r=1.35;for(let c=0;c<=s;c++){let h=-i/2+c/s*i,p=2*h/i,f=.5+.5*Math.pow(Math.max(0,1-p*p),.7),u=.9+.1*Math.abs(Math.sin(Math.PI*h/r)),g=Math.sqrt(Math.max(0,1-Math.pow(Math.abs(p),8)));n.push(new Q(Math.max(.001,t*f*u*g),h))}let o=new zt,a=new W(new _n(n,12),e.furl);a.castShadow=!0,o.add(a);let l=[];for(let c=r*Math.ceil(-i/2/r+.3);c<i/2-.3;c+=r){let h=2*c/i,p=t*(.5+.5*Math.pow(Math.max(0,1-h*h),.7))*.9;l.push(new Me(p,.022,4,14).rotateX(Math.PI/2).translate(0,c,0))}return l.length&&o.add(new W(vs(l),e.rope)),o}var Uc=class{constructor(t,e,n,s){let r=pe();this.name=t,this.yard=e,this.foot=n,this.fullness=s,this.roach=n.yard?.13:.03,this.NU=15,this.NV=13,this.geo=Fc(this.NU,this.NV),this.mesh=new W(this.geo,r.canvas),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh);let o=e.L*.86,a=Math.min(.38,.12+e.L*.009);this.furl=k1(o,a*1.15),this.furl.rotation.x=Math.PI/2,this.furl.position.set(.12,e.r+a*.7,0),e.group.add(this.furl),this.set=-1}update(t,e,n,s=0){let r=this.NU,o=this.NV,a=this.yard;this.setNow=t;let l=t>.015;this.mesh.visible=l;let c=1-hm(Math.min(1,t/.35));if(this.furl.visible=c>.02,this.furl.scale.set(Math.max(.05,c),1,Math.max(.05,c)),!l)return;let h=a.L*.465,p=new A(0,-a.r,-h),f=new A(0,-a.r,h),u,g;if(this.foot.yard){let x=this.foot.yard,E=x.L*.465;u=Ve(new A(0,x.r,-E),x.group,a.group),g=Ve(new A(0,x.r,E),x.group,a.group)}else{let x=this.foot.drop();u=new A(.6,-x,-h*.74),g=new A(.6,-x,h*.74)}let y=(u.y+g.y)/2*-1;this.height=Math.max(1,y);let m=this.fullness*e*t,d=this.geo.attributes.position.array,_=this.geo.attributes.uv.array,v=Math.sin(n*2.1+a.L)*.04*e;for(let x=0;x<o;x++){let E=x/(o-1);for(let S=0;S<r;S++){let b=S/(r-1),M=x*r+S,w=p.x+(f.x-p.x)*b,T=p.y+(f.y-p.y)*b,P=p.z+(f.z-p.z)*b,I=Math.sin(Math.PI*b)*this.roach*y,D=u.x+(g.x-u.x)*b,N=u.y+(g.y-u.y)*b+I,O=u.z+(g.z-u.z)*b,z=E*t,V=w+(D-w)*z,nt=T+(N-T)*z,$=P+(O-P)*z,it=Math.sin(Math.PI*b)**.9*Math.sin(Math.PI*(.06+.82*E));V+=m*it*(1+v*Math.sin(b*9+n*3)),V+=(1-t)*.25*Math.sin(b*Math.PI*14)*E;for(let et of[0,1]){let Pt=Math.hypot(b-et,(E-1)*.7);Pt<.35&&(V+=m*.06*Math.sin(Pt*45+Math.atan2(E-1,b-et)*6)*(1-Pt/.35))}s>0&&(V+=s*.3*(.5+.5*Math.sin(n*9+b*7+E*4))*Math.sin(Math.PI*b)*E),d[M*3]=V,d[M*3+1]=nt,d[M*3+2]=$,_[M*2]=$/2,_[M*2+1]=this.reef?1-E:nt/4}}(this.colliders?.length||this.stays?.length)&&this.drape(d),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}drape(t){let e=B1.copy(this.space.matrixWorld).invert().multiply(this.yard.group.matrixWorld),n=H1.copy(e).invert(),s=z1,r=.35,o=2;for(let a=0;a<t.length;a+=3){s.set(t[a],t[a+1],t[a+2]).applyMatrix4(e);let l=-1/0;for(let[h,p]of this.colliders){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y)||Math.sign(s.z)!==Math.sign(h.z))continue;let f=(s.y-h.y)/(p.y-h.y),u=h.x+(p.x-h.x)*f,g=Math.abs(h.z+(p.z-h.z)*f),y=Math.min(1,Math.max(0,(Math.abs(s.z)-(g-o))/o));if(y<=0)continue;let m=u+r;s.x<m&&(l=Math.max(l,s.x+(m-s.x)*y*y*(3-2*y)))}let c=!1;l>s.x&&(s.x=l,c=!0);for(let[h,p]of this.stays||[]){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y))continue;let f=(s.y-h.y)/(p.y-h.y),u=h.x+(p.x-h.x)*f,g=h.z+(p.z-h.z)*f,y=1-Math.min(1,Math.abs(s.z-g)/2.2),m=u-.3;y>0&&s.x>m&&(s.x-=(s.x-m)*y*y*(3-2*y),c=!0)}c&&(s.applyMatrix4(n),t[a]=s.x,t[a+1]=s.y,t[a+2]=s.z)}}},Yu=class{constructor(t,e,n,s,r,o){this.name=t,this.tack=n,this.head=s,this.clew=r,this.fullness=o,this.NU=12,this.NV=9,this.geo=Fc(this.NU,this.NV),this.mesh=new W(this.geo,pe().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh)}update(t,e,n,s=1){if(this.mesh.visible=t>.015,!this.mesh.visible)return;let r=this.tack,o=r.clone().lerp(this.head,t),a=this.clew.clone();a.z=Math.abs(a.z)*s;let l=r.clone().lerp(a,.15+.85*t);this.side=s;let c=new A().subVectors(o,r).cross(new A().subVectors(l,r)).normalize();c.z*s<0&&c.negate();let h=o.distanceTo(r),p=this.fullness*e*t*h*.06,f=this.geo.attributes.position.array,u=this.geo.attributes.uv.array,g=this.NU,y=this.NV,m=new A,d=new A;for(let _=0;_<y;_++){let v=_/(y-1);for(let x=0;x<g;x++){let E=x/(g-1);d.copy(r).lerp(l,E),m.copy(d).lerp(o,v);let S=Math.sin(Math.PI*E)*Math.sin(Math.PI*Math.min(1,v*.9+.08))*(1-v*.4);m.addScaledVector(c,p*S*(1+.03*Math.sin(n*3+E*8)));let b=_*g+x;f[b*3]=m.x,f[b*3+1]=m.y,f[b*3+2]=m.z,u[b*2]=E*r.distanceTo(this.clew)/2,u[b*2+1]=v*h/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},$u=class{constructor(t,e,n){this.name="spanker",this.mast=t,this.gaff=e,this.boom=n,this.NU=12,this.NV=12,this.geo=Fc(this.NU,this.NV),this.mesh=new W(this.geo,pe().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,t.group.add(this.mesh);let s=pe();this.brail=new W(new Oe(.35,1,4,8),s.furl),this.brail.castShadow=!0,t.group.add(this.brail)}update(t,e,n,s=1){let r=this.mast.group,o=Ve(new A(.3,-.15,0),this.gaff.group,r),a=Ve(new A(this.gaff.L-.3,-.15,0),this.gaff.group,r),l=Ve(new A(.3,.2,0),this.boom.group,r),c=Ve(new A(this.boom.L-2,.2,0),this.boom.group,r),h=1-hm(Math.min(1,t/.4));this.brail.visible=h>.02;let p=o.clone().lerp(l,.5).add(new A(-.5,0,0));if(this.brail.position.copy(p),this.brail.scale.set(h,(o.y-l.y-.7)/1.7,h),this.mesh.visible=t>.015,!this.mesh.visible)return;let f=new A(0,0,s),u=this.geo.attributes.position.array,g=this.geo.attributes.uv.array,y=this.NU,m=this.NV,d=new A,_=new A,v=new A,x=1.3*e*t;for(let E=0;E<m;E++){let S=E/(m-1);for(let b=0;b<y;b++){let M=b/(y-1)*t;d.copy(l).lerp(c,M),_.copy(o).lerp(a,M),v.copy(d).lerp(_,S);let w=Math.sin(Math.PI*Math.min(1,M/Math.max(t,.01)))*Math.sin(Math.PI*(.08+.84*S));v.addScaledVector(f,x*w+(1-t)*.2*Math.sin(M*30));let T=E*y+b;u[T*3]=v.x,u[T*3+1]=v.y,u[T*3+2]=v.z,g[T*2]=v.x/2,g[T*2+1]=v.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},sa=class{constructor(t,e,n,s,r=null){this.name=t,this.yard=e,this.footYard=n,this.side=s,this.lower=r,this.NU=8,this.NV=10,this.geo=Fc(this.NU,this.NV),this.mesh=new W(this.geo,pe().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh),r&&(this.boom=new W(new Zt(.11,.08,1,8).translate(0,.5,0).rotateZ(-Math.PI/2),pe().spar),this.boom.castShadow=!0,r.parent.add(this.boom))}update(t,e,n){let s=t>.02;if(this.mesh.visible=s,this.boom&&(this.boom.visible=s),!s)return;let r=this.yard,o=this.side,a=r.L,l=a*.465,c=a/2+2.4*r.mast.scale,h=Math.min(c-l+.6,a*.32),p=new A(.25,-r.r,o*l),f=new A(.25,-r.r,o*(l+h*t)),u,g;if(this.footYard){let S=this.footYard,b=S.L/2+2.4*S.mast.scale;u=Ve(new A(.25,S.r,o*S.L*.465),S.group,r.group),g=Ve(new A(.25,S.r,o*(S.L*.465+(b-S.L*.465)*t)),S.group,r.group)}else{let{root:S,dropTo:b,reach:M}=this.lower,w=l*.78+.6;u=new A(.6,-b(),o*w),g=new A(.6,-b(),o*(w+M*t));let T=Ve(S.clone(),this.lower.parent,this.lower.parent),P=Ve(g.clone(),r.group,this.lower.parent);this.boom.position.copy(T),this.boom.scale.set(T.distanceTo(P),1,1),this.boom.quaternion.setFromUnitVectors(new A(1,0,0),P.clone().sub(T).normalize())}let y=this.geo.attributes.position.array,m=this.geo.attributes.uv.array,d=this.NU,_=this.NV,v=new A,x=new A,E=new A;for(let S=0;S<_;S++){let b=S/(_-1);for(let M=0;M<d;M++){let w=M/(d-1);x.copy(p).lerp(f,w),E.copy(u).lerp(g,w),v.copy(x).lerp(E,b),v.x+=1.1*e*t*Math.sin(Math.PI*w)*Math.sin(Math.PI*(.06+.82*b));let T=S*d+M;y[T*3]=v.x,y[T*3+1]=v.y,y[T*3+2]=v.z,m[T*2]=v.z/2,m[T*2+1]=v.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}};function um(i,t){let e={square:[],stay:[],spanker:null},n={course:1.7,topsail:2,topgallant:1.3,royal:.8};for(let d of Object.values(i.masts)){let _=d.yards,v=(x,E)=>{if(!_[x]||!E&&x!=="course")return;let S=E?{yard:E}:{drop:()=>_.course.group.position.y-(Pe(d.x)+2.2)},b=new Uc(`${d.name}-${x}`,_[x],S,n[x]*d.scale);b.mastName=d.name,b.kind=x,x==="topsail"&&(b.reef=!0,b.mesh.material=pe().canvasReef),e.square.push(b)};d.name!=="mizzen"&&v("course"),v("topsail",_.course),v("topgallant",_.topsail),v("royal",_.topgallant)}{let d=i.spritYard,_=new Uc("spritsail",d,{drop:()=>3},.8);_.kind="sprit",e.square.push(_)}let s=i.bowsprit,r=i.masts.fore,o=i.masts.main,a=i.masts.mizzen;i.group.updateMatrixWorld(!0);let l=(d,_)=>Ve(d.local[_].clone(),d.group,i.group),c=(d,_,v,x,E)=>{let S=new Yu(d,i.group,_,v,x,E);S.kind=d,e.stay.push(S)},h=(d,_,v)=>d.clone().lerp(_,v),p=l(r,"topmastShroudHead"),f=l(r,"tgHead");c("foreTopmastStaysail",h(s.cap,p,.04),h(s.cap,p,.82),new A(r.x+4.5,ft("qd",24)+5,1.8),1),c("jib",h(s.jibEnd,p,.05),h(s.jibEnd,p,.78),new A(r.x+7,ft("qd",24)+8,4),1),c("flyingJib",h(s.flyEnd,f,.04),h(s.flyEnd,f,.62),new A(r.x+10.5,ft("qd",24)+13,6),.9);let u=l(o,"topmastShroudHead"),g=l(r,"lowerHead");c("mainTopmastStaysail",h(g,u,.14),h(g,u,.85),new A(o.x+4.5,o.h.topY+1.5,.6),.9);let y=l(a,"topmastShroudHead"),m=l(o,"topBack");c("mizzenStaysail",h(m,y,.14),h(m,y,.8),new A(a.x+3,a.h.topY+.5,.6),.8),e.spanker=new $u(a,i.gaff,i.boom),e.stun=[];for(let d of[r,o]){let _=d.yards;for(let v of[1,-1]){let x=(E,S)=>{S.kind=E,S.mastName=d.name,e.stun.push(S)};if(x("stunTop",new sa(`${d.name}-topmast-stunsail`,_.topsail,_.course,v)),x("stunTg",new sa(`${d.name}-topgallant-stunsail`,_.topgallant,_.topsail,v)),d===r){let E=ft("upper",d.x)+1.95;x("stunLower",new sa("fore-lower-stunsail",_.course,null,v,{parent:i.group,root:new A(d.x+.5,E+.4,v*(yt(d.x+.5,E)+.9)),dropTo:()=>_.course.group.position.y-(Pe(d.x)+1.4),reach:7.5}))}}}return e}var dm=new A(0,1,0),Yi=class{constructor(t,e,n){let s=new Zt(1,1,1,6,1,!0);s.translate(0,.5,0),this.mesh=new sn(s,e,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=n,this._m=new Rt,this._q=new Ge,this._s=new A,this._d=new A}begin(){this.n=0,this.segs=[],this.tag=""}add(t,e,n){if(this.n>=this.capacity)return;this.segs.push([t.clone(),e.clone(),this.tag]);let s=this._d.subVectors(e,t),r=s.length();r<1e-4||(this._q.setFromUnitVectors(dm,s.multiplyScalar(1/r)),this._s.set(n,r,n),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.n++,this._m))}addSag(t,e,n,s=.02,r=4){let o=t.distanceTo(e),a=t.clone();for(let l=1;l<=r;l++){let c=l/r,h=t.clone().lerp(e,c);h.y-=s*o*4*c*(1-c),this.add(a,h,n),a=h}}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Zu=class{constructor(t,e){let n=pe(),s=new fe(1,8,6).scale(.11,.17,.075),r=new Me(.085,.018,4,10).scale(1,1.6,1),o=vs([s,r.translate(0,0,0)].map(a=>a.toNonIndexed()));this.mesh=new sn(o,n.darkWood,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=e,this._m=new Rt,this._q=new Ge}begin(){this.n=0}add(t,e,n=.35,s=1){if(this.n>=this.capacity)return;let r=new A().subVectors(e,t),o=r.length();if(o<.001)return;r.multiplyScalar(1/o);let a=t.clone().addScaledVector(r,Math.min(n,o*.5));this._q.setFromUnitVectors(dm,r),this._m.compose(a,this._q,new A(s,s,s)),this.mesh.setMatrixAt(this.n++,this._m)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Oc=class{constructor(t){let e=pe();this.rig=t,this.space=t.group,this.standing=new Yi(this.space,e.rope,9e3),this.running=new Yi(this.space,e.ropeLight,600),this.sailLines=new Yi(this.space,e.ropeLight,7e3),this.blocks=new Zu(this.space,400),this.sailLines.mesh.castShadow=!1,this.fittings=new zt,this.space.add(this.fittings),t.group.updateMatrixWorld(!0),this.colliders={},this.buildStanding(e)}P(t,e,...n){let s=t.local[e],r=typeof s=="function"?s(...n):s.clone();return Ve(r,t.group,this.space)}L(t,e){return Ve(e,t.group,this.space)}buildStanding(t){let e=this.standing;e.begin();let n=this.rig,s=[],r=[],o=[],a=(x,E,S)=>new A(x,E,S),l=(x,E,S,b,M,w)=>{for(let T=0;T<x.length-1;T++){let[P,I]=x[T],[D,N]=x[T+1];for(let O=S;O<b;O+=M){let z=(O-P.y)/(I.y-P.y),V=(O-D.y)/(N.y-D.y);z<0||z>1||V<0||V>1||e.add(P.clone().lerp(I,z),D.clone().lerp(N,V),w)}}};for(let x of Object.values(n.masts)){let E=x.scale,S=this.colliders[x.name]={lower:[],futtock:[],topmast:[],tg:[],backstay:[]},b=x.name==="main"?9:x.name==="fore"?8:6,M=x.x+.4*E,w=Math.max(x.x-7.8*E,x.name==="mizzen"?-21.9:-99),T=ft("upper",x.x)+1.95;for(let P of[1,-1]){let I=yt(M,T),D=yt(w,T);s.push(Je(a(M,T,P*(I+.5)),a(w,T,P*(D+.5)),1.2,.2));let N=[],O=this.P(x,"shroudHead");for(let ee=0;ee<b;ee++){let Ht=M-.3-ee*(M-w-.6)/(b-1),$t=yt(Ht,T)+1.05,U=a(Ht,T+.2,P*$t),k=a(Ht,T+1.25,P*($t-.03));r.push(U,k),e.tag=`${x.name} lanyard`,e.add(U,k,.025);let J=kr[2],ut=Math.round((Ht-J.x0)/J.dx-.5),lt=J.x0+(ut+.5)*J.dx,gt=lt+Math.max(-.7,Math.min(.7,Ht-lt)),Xt=yt(gt,T-2.6)+.12;o.push([U.clone().add(a(0,-.15,0)),a(gt,T-2.6,P*Xt)]);let K=O.clone().add(a(0,0,P*(x.r.lower+.12)));e.tag=`${x.name} lower shroud`,e.add(k,K,.06*(.8+.2*E)),S.lower.push([k,K]),N.push([k,K])}e.tag=`${x.name} lower ratline`,l(N,null,T+1.8,O.y-1.2,.42,.016);let z=[],V=x.h;for(let ee=0;ee<4;ee++){let Ht=-V.topLen*.36+ee*V.topLen*.16,$t=this.L(x,a(Ht,V.topY+.2,P*V.topW*.48));r.push($t);let U=this.L(x,a(Ht*.3,V.topY-3.2*E,P*.65));e.tag=`${x.name} futtock shroud`,e.add($t,U,.035),S.futtock.push([U,$t]),e.tag=`${x.name} topmast shroud`;let k=this.L(x,a(x.dTop,V.crossY-.3,P*.3));e.add($t.clone().add(a(0,.9,0)),k,.045),S.topmast.push([$t.clone().add(a(0,.9,0)),k]),e.add($t,$t.clone().add(a(0,.9,0)),.02),z.push([$t.clone().add(a(0,.9,0)),k])}e.tag=`${x.name} topmast ratline`,l(z,null,V.topY+1.6,V.crossY-1.2,.4,.013),e.tag=`${x.name} topgallant shroud`;let nt=this.P(x,"crossEnd",P),$=this.L(x,a(x.dTg,V.tgHead-.4,P*.14));e.add(nt.clone().add(a(-.1,0,0)),$,.03),e.add(nt.clone().add(a(-.8,0,0)),$,.03),S.tg.push([nt.clone().add(a(-.1,0,0)),$],[nt.clone().add(a(-.8,0,0)),$]),e.tag=`${x.name} backstay`;let it=T+.15,et=ee=>{if(x.name==="mizzen"){let $t=-22.6-ee*.7,U=Pe($t)-.3;return a($t,U,P*(yt($t,U)+.6))}let Ht=w-.9-ee*1.1;return a(Ht,it,P*(yt(Ht,it)+.9))};for(let ee=0;ee<2;ee++){let Ht=et(ee);r.push(Ht),s.push(Je(Ht.clone().add(a(.4,-.1,-P*.6)),Ht.clone().add(a(-.4,-.1,-P*.6)),1.2,.2));let $t=this.L(x,a(x.dTop,V.topmastHead-.6,P*.25));e.add(Ht,$t,.05),S.backstay.push([Ht,$t])}let Pt=this.L(x,a(x.dTg,V.tgHead-.3,P*.12)),At=this.L(x,a(x.dTg,V.poleHead-.2,P*.1));e.add(et(2),Pt,.035),e.add(et(2),At,.025),S.backstay.push([et(2),Pt],[et(2),At])}}let c=n.bowsprit,h=n.masts.fore,p=n.masts.main,f=n.masts.mizzen,u=[["fore stay",this.P(h,"stayLower"),c.fore,.13],["fore preventer stay",this.P(h,"stayLower").add(a(0,-.3,0)),c.P(12.5,.4),.1],["fore topmast stay",this.P(h,"topmastShroudHead"),c.cap,.08],["jib stay",this.P(h,"topmastShroudHead"),c.jibEnd,.06],["fore topgallant stay",this.P(h,"tgHead"),c.flyEnd,.045],["fore royal stay",this.P(h,"poleHead"),c.flyEnd,.03],["main stay",this.P(p,"stayLower"),a(h.x+2.2,ft("qd",h.x+2.2)+.6,0),.14],["main preventer stay",this.P(p,"stayLower").add(a(0,-.3,0)),a(h.x+3,ft("qd",h.x+3)+.6,0),.1],["main topmast stay",this.P(p,"topmastShroudHead"),this.P(h,"lowerHead"),.08],["main topgallant stay",this.P(p,"tgHead"),this.P(h,"topmastShroudHead"),.045],["main royal stay",this.P(p,"poleHead"),this.P(h,"tgHead"),.03],["mizzen stay",this.P(f,"stayLower"),this.L(p,a(0,ft("qd",p.x)+3.5,0)),.1],["mizzen topmast stay",this.P(f,"topmastShroudHead"),this.P(p,"topBack"),.06],["mizzen topgallant stay",this.P(f,"tgHead"),this.P(p,"lowerHead"),.035]];this.stayLines={};for(let[x,E,S,b]of u)e.tag=x,e.add(E,S,b),this.stayLines[x]=[E,S];e.tag="bowsprit rigging";let g=x=>a(31+(x-2)*.35,x,0);e.tag="bobstay",e.add(c.P(10.5,-.3),g(1.6),.08),e.add(c.P(13.5,-.3),g(3.4),.08);for(let x of[1,-1])e.tag="bowsprit shroud",e.add(c.P(12,0),a(28.2,4.5,x*2),.06),e.add(c.P(16,0),a(28.4,5,x*2.1),.06),e.tag="martingale back rope",e.add(c.striker,a(27.5,ft("qd",27)-.6,x*2.2),.04);e.tag="martingale stay",e.add(c.jibEnd,c.striker,.04),e.add(c.flyEnd,c.striker,.035),e.end();let y=new Yi(this.space,t.iron,o.length);y.begin();for(let[x,E]of o)y.add(x,E,.04);y.end();let m=new W(mt(s),t.black);m.castShadow=!0,this.fittings.add(m);let d=new Zt(.17,.17,.12,10);d.rotateX(Math.PI/2);let _=new sn(d,t.darkWood,r.length),v=new Rt;r.forEach((x,E)=>{v.makeTranslation(x.x,x.y,x.z),_.setMatrixAt(E,v)}),this.fittings.add(_)}updateRunning(t,e,n){let s=this.running,r=this.rig,o=(m,d,_)=>new A(m,d,_);s.begin();let a=this.blocks;a.begin();let l=r.masts.main,c=r.masts.mizzen,h=(m,d,_)=>{let v=_;return m.name==="fore"?d.name==="course"?o(l.x+3.5,Pe(l.x+3.5)+.3,v*7.2):d.name==="topsail"?this.P(l,"crossEnd",v):d.name==="topgallant"?this.P(l,"tgHead"):this.P(l,"poleHead"):m.name==="main"?d.name==="course"?o(-21.5,Pe(-21.5)+.3,v*(yt(-21.5,9)+.1)):d.name==="topsail"?o(c.x+1,Pe(c.x+1)+.6,v*(yt(c.x+1,9)+.4)):this.P(c,"poleHead").add(o(0,.2,0)):d.name==="course"?this.L(l,o(-1.5,ft("qd",l.x)+6,v*3)):d.name==="topsail"?this.P(l,"topEdge",v):this.P(l,"crossEnd",v)},p={course:"lowerHead",topsail:"topmastHead",topgallant:"tgHead",royal:"poleHead"};for(let m of Object.values(r.masts))for(let d of Object.values(m.yards)){let _=this.P(m,p[d.name]);for(let v of[1,-1]){let x=Ve(o(0,0,v*d.L*.48),d.group,this.space);s.tag=`${m.name} ${d.name} lift`;let E=_.clone().add(o(0,0,v*.3));s.add(x,E,.025),a.add(E,x,.25,.8+.2*m.scale),a.add(x,E,.3,.7+.2*m.scale),s.tag=`${m.name} ${d.name} brace`;let S=h(m,d,v);s.addSag(x,S,.022,.012,3),a.add(x,S,.9,.8+.2*m.scale),a.add(S,x,.3,.8)}if(s.tag=`${m.name} ${d.name} tie`,s.add(Ve(o(0,d.r,0),d.group,this.space),_,.04),d.name!=="course"){s.tag=`${m.name} ${d.name} halyard`;let v=d.name==="topgallant"?-1:1,x=o(m.x-1.3,ft("upper",m.x)+(m.x>1&&m.x<15?.6:2.6),v*.9);s.add(_.clone().add(o(-.35,-.3,v*.2)),x,.03)}}for(let m of t.square){if(m.kind!=="course"||!m.mesh.visible)continue;let d=m.geo.attributes.position,_=[d.count-m.NU,d.count-1];s.tag=`${m.mastName} course sheet/tack`,_.forEach((v,x)=>{let E=Ve(o(d.getX(v),d.getY(v),d.getZ(v)),m.yard.group,this.space),S=Math.sign(E.z)||(x===0?-1:1),b=m.mastName==="fore"?9:-12;s.addSag(E,o(b,Pe(b)+.3,S*(yt(b,9)+.1)),.03,.01,3),s.add(E,o(E.x+6,Pe(E.x+6)+.2,S*(yt(E.x+6,9)-.1)),.03)})}for(let m of t.stay){if(!m.mesh.visible)continue;let d=m.geo.attributes.position,_=o(d.getX(m.NU-1),d.getY(m.NU-1),d.getZ(m.NU-1)),x=m.kind==="mainTopmastStaysail"||m.kind==="mizzenStaysail"?_.x+3:Math.min(23,_.x-4);s.tag=`${m.name} sheet`,s.addSag(_,o(x,Pe(x)+.3,Math.sign(_.z)*(yt(x,9)-.2)),.025,.02,3)}let f=Ve(o(r.boom.L-.3,0,0),r.boom.group,this.space),u=Ve(o(r.gaff.L-.2,0,0),r.gaff.group,this.space);s.tag="boom topping lift";let g=1.3*n.belly*e["set.spanker"];for(let m of[1,-1]){let d=Ve(o(r.boom.L-.3,0,m*.45),r.boom.group,this.space),_=this.P(c,"lowerHead").add(o(0,0,m*.9)),v=m===n.lee?g+.35:0,x=d;for(let E=1;E<=8;E++){let S=E/8,b=d.clone().lerp(_,S);b.z+=m*v*Math.sin(Math.PI*Math.min(1,S*1.25)),s.add(x,b,.03),x=b}}s.tag="spanker sheet",s.addSag(f,o(-29,Pe(-29)+.3,0),.04,.01,2),s.tag="gaff vang",s.addSag(u,Ve(o(r.boom.L-.4,.15,0),r.boom.group,this.space),.02,.02,3),s.addSag(u,o(-28.5,Pe(-28.5)+.2,-n.lee*(yt(-28.5,Pe(-28.5))-.1)),.02,.02,3),s.tag="peak halyard",s.add(u,this.P(c,"topmastShroudHead"),.03);let y=r.spritYard;s.tag="spritsail yard rigging";for(let m of[1,-1]){let d=Ve(o(0,0,m*y.L*.48),y.group,this.space);s.add(d,r.bowsprit.cap,.022),s.addSag(d,o(26.5,Pe(26.5)+.3,m*3.5),.02,.02,3)}s.end(),a.end(),this.updateSailLines(t)}updateSailLines(t){let e=this.sailLines;e.begin();let n=new Rt().copy(this.space.matrixWorld).invert(),s=new Rt,r=new A,o=new A,a=new A,l=(y,m,d,_,v)=>{let x=y.geo.attributes.position,E=y.geo.attributes.normal,S=d*y.NU+m;return r.fromBufferAttribute(x,S),a.fromBufferAttribute(E,S),a.dot(v)<0&&a.negate(),r.clone().addScaledVector(a,_).applyMatrix4(s)},c=(y,m,d,_,v,x)=>{let E=null;for(let S=y.NV-1;S>=0;S--){let b=l(y,m,S,d,_);E&&e.add(E,b,v),E=b}x&&e.add(E,x.clone().applyMatrix4(s),v)},h=new A(1,0,0),p=(y,m,d,_,v)=>{let x=m*(y.NU-1),E=d*(y.NV-1),S=Math.min(y.NU-2,Math.floor(x)),b=Math.min(y.NV-2,Math.floor(E)),M=x-S,w=E-b,T=l(y,S,b,_,v),P=l(y,S+1,b,_,v),I=l(y,S,b+1,_,v),D=l(y,S+1,b+1,_,v);return M>=w?T.addScaledVector(P.clone().sub(T),M).addScaledVector(D.clone().sub(P),w):T.addScaledVector(I.clone().sub(T),w).addScaledVector(D.clone().sub(I),M)},f=(y,m,d,_=.022)=>{for(let v of m)for(let x=0;x<y.NV-1;x++)e.add(l(y,v,x,0,h),l(y,v,x+1,0,h),_);if(d!=null)for(let v=0;v<y.NU-1;v++)e.add(l(y,v,d,0,h),l(y,v+1,d,0,h),_)},u={course:[.2,.4,.6,.8],topsail:[.28,.5,.72],topgallant:[.35,.65]};for(let y of t.square){if(!y.mesh.visible||!u[y.kind])continue;s.multiplyMatrices(n,y.yard.group.matrixWorld);let m=y.yard.L*.465;e.tag=`${y.name} buntline`;for(let d of u[y.kind]){let _=Math.round(d*(y.NU-1)),v=-m+2*m*_/(y.NU-1);c(y,_,.06,h,.018,new A(y.yard.r+.05,y.yard.r*.6,v))}if(e.tag=`${y.name} bolt rope`,f(y,[0,y.NU-1],y.NV-1),y.reef&&y.mesh.visible){e.tag=`${y.name} reef points`;let d=y.yard.L*.93,_=Math.round(d/.6);for(let v of[.12,.24,.36])if(!(v>y.setNow-.02))for(let x=1;x<_;x++)for(let E of[.05,-.05]){let S=v/Math.max(.05,y.setNow),b=.26/Math.max(1,y.height||10),M=E*1.6,w=p(y,x/_,S,M,h),T=p(y,x/_,Math.min(1,S+b),M,h);e.add(w,T,.008)}}if(y.kind==="course"){e.tag=`${y.name} leechline`;for(let d of[.1,.9])c(y,Math.round(d*(y.NU-1)),-.06,h,.016,null)}e.tag=`${y.name} clewline`;for(let d of[0,y.NU-1]){let _=l(y,d,y.NV-1,-.05,h),v=d===0?-1:1;e.add(_,new A(-.25,-y.yard.r,v*m*.55).applyMatrix4(s),.018)}}for(let y of t.stay)if(y.mesh.visible){s.multiplyMatrices(n,y.mesh.matrixWorld),e.tag=`${y.name} bolt rope`;for(let m=0;m<y.NV-1;m++)e.add(l(y,y.NU-1,m,0,h),l(y,y.NU-1,m+1,0,h),.02);for(let m=0;m<y.NU-1;m++)e.add(l(y,m,0,0,h),l(y,m+1,0,0,h),.02)}let g=t.spanker;if(g.mesh.visible){s.multiplyMatrices(n,g.mast.group.matrixWorld),e.tag="spanker bolt rope";for(let m=0;m<g.NV-1;m++)e.add(l(g,g.NU-1,m,0,h),l(g,g.NU-1,m+1,0,h),.02);e.tag="spanker brail";let y=new A(0,0,1);for(let m of[.3,.55,.8]){let d=Math.round(m*(g.NV-1));for(let _ of[.06,-.06]){let v=null;for(let x=g.NU-1;x>=0;x--){let E=l(g,x,d,_,y);v&&e.add(v,E,.016),v=E}}}}e.end()}};function V1(i,t,e){let s=yt(i,t),r=(yt(i+.05,t)-yt(i-.05,t))/(2*.05),o=(yt(i,t+.05)-yt(i,t-.05))/(2*.05),a=new A(-r,-o,e).normalize(),l=new A().crossVectors(new A(0,1,0),a).normalize(),c=new A().crossVectors(a,l).normalize();return{p:new A(i,t,e*s),n:a,a:l,up:c}}function G1(i,t){let e=t*2.1,n=[[0,-.32*i/3],[e*.35,-.3*i/3],[e*.4,-.22*i/3],[e*.2,-.16*i/3],[e*.95,-.1*i/3],[e,0],[e*1.06,.02*i],[e*.98,.04*i],[e*.92,.38*i],[e*.98,.4*i],[e*.86,.42*i],[e*.72,.9*i],[e*.82,.95*i],[e*.78,i],[t,i],[t,i*.7]].map(([o,a])=>new Q(o,a)),s=new _n(n,14);s.rotateX(Math.PI/2);let r=new Zt(e*.3,e*.3,e*2.8,8);return r.rotateZ(Math.PI/2),r.translate(0,0,.42*i),mt([s,r])}function W1(i,t){let e=t*1.65,n=[[0,-.1],[e*.5,-.09],[e*.75,-.04],[e*.95,.05],[e,.25*i],[e*.92,.6*i],[e*.86,.82*i],[e*1.05,.9*i],[e*1.08,i],[t,i],[t,i*.55]].map(([o,a])=>new Q(o,a)),s=new _n(n,16);s.rotateX(Math.PI/2);let r=new kt(e*.5,e*.9,e*.9);return r.translate(0,-e*1.05,.45*i),mt([s,r])}function X1(i,t){let e=[],n=new kt(t*3.2,t*1,i*1.5);n.translate(0,t*2.4,i*.75),e.push(n);let s=new kt(t*3.6,t*1.6,i*1.3);s.translate(0,t*.95,i*.7),e.push(s);for(let r of[1,-1]){let o=new Zt(t*.9,t*.9,t*.6,10);o.rotateZ(Math.PI/2),o.translate(r*t*2,t*.9,i*.15),e.push(o)}return mt(e)}function q1(i,t){let e=t*6.2,n=i*.5,s=[];for(let o of[1,-1]){let a=new Ke;a.moveTo(0,0),a.lineTo(n,0),a.lineTo(n,t*5.2),a.lineTo(n*.62,t*5.2),a.lineTo(n*.55,t*3.8),a.lineTo(n*.3,t*3.4),a.lineTo(n*.22,t*2.4),a.lineTo(0,t*2.2),a.closePath();let l=new Sn(a,{depth:t*.9,bevelEnabled:!1});l.rotateY(-Math.PI/2),l.translate(o*e/2+t*.45,0,0),s.push(l)}let r=new kt(e,t*.8,n*.95);r.translate(0,t*1.4,n/2),s.push(r);for(let o of[n*.12,n*.85]){let a=new kt(e*1.25,t*1.1,t*1.4);a.translate(0,t*1.4,o),s.push(a);for(let l of[1,-1]){let c=new Zt(t*1.5,t*1.5,t*.7,12);c.rotateZ(Math.PI/2),c.translate(l*e*.62,t*1.5,o),s.push(c)}}return mt(s)}var Bc=class{constructor(t){let e=pe();this.group=new zt,this.group.name="guns",t.add(this.group),this.ports=[];for(let r of Ai())for(let o of[1,-1]){let a=V1(r.x,r.y,o),l=new A(a.n.x,0,a.n.z).normalize();this.ports.push({...r,side:o,basis:a,out:l,recoil:0,fireAt:-1})}this.byTier=new Map;for(let r of this.ports){let o=r.tier.name;this.byTier.has(o)||this.byTier.set(o,[]),this.byTier.get(o).push(r)}this.barrels=[],this.carriages=[];for(let[r,o]of this.byTier){let a=o[0].tier,l=new sn(a.carronade?W1(a.len,a.bore):G1(a.len,a.bore),e.iron,o.length);l.castShadow=!0,l.frustumCulled=!1;let c=new sn(a.carronade?X1(a.len,a.bore):q1(a.len,a.bore),e.carriage,o.length);c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,this.group.add(l,c),this.barrels.push({mesh:l,list:o}),this.carriages.push({mesh:c,list:o})}this.lidPorts=this.ports.filter(r=>r.tier.lid);let n=new kt(1,1,1);n.translate(0,-.5,.5),this.lids=new sn(n,[e.black,e.black,e.black,e.black,e.black,e.inside],this.lidPorts.length),this.lids.castShadow=!0,this.lids.frustumCulled=!1,this.group.add(this.lids);let s=[];for(let r of[-.28,.28])s.push(new kt(.07,.92,.3).translate(r,-.48,1.12)),s.push(new Zt(.045,.045,.16,6).rotateZ(Math.PI/2).translate(r,0,1.1));s.push(new kt(.14,.08,.5).translate(0,-.86,1.2)),this.hinges=new sn(mt(s),e.iron,this.lidPorts.length),this.hinges.frustumCulled=!1,this.group.add(this.hinges),this.lidRopes=new Yi(this.group,e.rope,this.lidPorts.length*2),this.lidRopes.mesh.castShadow=!1,this.breeching=new Yi(this.group,e.rope,this.ports.length*6),this.breeching.mesh.castShadow=!1,this._m=new Rt,this._b=new Rt,this._r=new Rt,this._s=new Rt,this.apply(0,0)}apply(t,e){let n=this._m,s=this._b,r=this._r,o=this._s;this.lidPorts.forEach((f,u)=>{let{a:g,up:y,n:m,p:d}=f.basis,_=f.tier,v=d.clone().addScaledVector(y,_.h/2+.04).addScaledVector(m,.02);s.makeBasis(g,y,m).setPosition(v),r.makeRotationX(-t*1.45),o.makeScale(_.w+.12,_.h+.1,.11),n.copy(s).multiply(r).multiply(o),this.lids.setMatrixAt(u,n),this.hinges.setMatrixAt(u,n)}),this.lids.instanceMatrix.needsUpdate=!0,this.hinges.instanceMatrix.needsUpdate=!0;let a=this.lidRopes;if(a.begin(),t>.05){let f=new A;this.lidPorts.forEach((u,g)=>{this.lids.getMatrixAt(g,n);let{a:y,up:m,n:d,p:_}=u.basis;for(let v of[-.32,.32]){f.set(v,-.92,1).applyMatrix4(n);let x=_.clone().addScaledVector(m,u.tier.h/2+.42).addScaledVector(y,v*u.tier.w).addScaledVector(d,.03);a.add(f,x,.018)}})}a.end();let l=new Ge,c=new A,h=new A(1,1,1),p=new A(0,0,1);for(let{mesh:f,list:u}of this.barrels)u.forEach((g,y)=>{let m=g.tier;l.setFromUnitVectors(p,g.out);let d=ft(m.deck,g.x),_=g.basis.p.clone(),v=-.9+e*1.6-g.recoil*1.3;c.copy(_).addScaledVector(g.out,v-m.len),c.y=g.y-.02,f.setMatrixAt(y,n.compose(c,l,h))}),f.instanceMatrix.needsUpdate=!0;for(let{mesh:f,list:u}of this.carriages)u.forEach((g,y)=>{let m=g.tier;l.setFromUnitVectors(p,g.out);let d=g.basis.p.clone(),_=-.9+e*1.6-g.recoil*1.3;c.copy(d).addScaledVector(g.out,_-m.len*(m.carronade?1.2:.88)),c.y=ft(m.deck,g.x)+.02,f.setMatrixAt(y,n.compose(c,l,h))}),f.instanceMatrix.needsUpdate=!0;this.updateBreeching(e)}updateBreeching(t){let e=this.breeching;e.begin();for(let n of this.ports){let s=n.tier;if(s.carronade)continue;let r=-.9+t*1.6-n.recoil*1.3,o=n.basis.p.clone().addScaledVector(n.out,r-s.len-.1).setY(n.y-.02);for(let a of[1,-1]){let l=n.basis.p.clone().addScaledVector(n.basis.a,a*(s.w/2+.28)).addScaledVector(n.basis.n,-.04);l.y=n.y-.25,e.addSag(l,o,.028,.06,3)}}e.end()}muzzle(t,e){let n=-.9+e*1.6;return t.basis.p.clone().addScaledVector(t.out,n+.1).setY(t.y)}};function Y1(i,t,e){return Bn(24,10,(o,a)=>{let c=o/23*2-1,h=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(c),c>0?1.7:3)),.55),p=e*(.75+.25*(1-c*c)),f=a/9*Math.PI-Math.PI/2,u=.25*c*c*e;return[c*i/2,-p*Math.cos(f)*(1-.1*Math.abs(c))+u,h*Math.sin(f)]},null,!0)}function Hc(i,t,e,n="#2a2622"){let s=pe(),r=new zt,o=new re({color:n,roughness:.7,side:De}),a=new W(Y1(i,t,e),o);a.castShadow=!0,r.add(a);let l=[];for(let f=1;f<=4;f++){let u=-i/2+f/5*i,g=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(u/(i/2)),u>0?1.7:3)),.55),y=new kt(.28,.06,g*1.8);y.translate(u,-e*.35,0),l.push(y)}let c=new W(mt(l),s.darkWood);r.add(c);let h=[];for(let f=0;f<=40;f++){let u=f/40*Math.PI*2,g=Math.cos(u),y=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(g),g>0?1.7:3)),.55);h.push(new A(g*i/2,.25*g*g*e+.02,Math.sign(Math.sin(u))*y))}let p=new W(new un(new hn(h,!0),80,.06,5,!0),new re({color:"#d8cfb6",roughness:.6}));return r.add(p),r}function Ku(){let i=pe(),t=[],e=(l,c,h=0)=>new A(l,c,h);t.push(Ee(e(0,0),e(0,5.3),.13,.1,8));let n=[];for(let l of[1,-1]){let c=new as(e(0,.1),e(l*1.1,0),e(l*1.85,1.35));n.push(new un(c,10,.11,6));let h=new kt(.85,1,.08);h.rotateZ(-l*.55),h.translate(l*1.7,1.15,0),n.push(h)}t.push(...n);let s=new Me(.32,.05,6,16);s.translate(0,5.65,0),t.push(s);let r=new W(mt(t),i.iron),o=new W(new kt(.32,.32,5),i.darkWood);o.position.y=5;let a=new zt;return a.add(r,o),a.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),a}function $1(i){let t=new zt,e=()=>{let o=new zt,a=new W(new Me(.82,.05,6,28),i.darkWood);o.add(a);let l=new W(new Zt(.16,.16,.22,10),i.brass);l.rotation.x=Math.PI/2,o.add(l);for(let c=0;c<10;c++){let h=c/10*Math.PI*2,p=new W(new Zt(.03,.035,1.18,6),i.darkWood);p.position.set(Math.cos(h)*.59,Math.sin(h)*.59,0),p.rotation.z=h-Math.PI/2,o.add(p)}return o},n=e(),s=e();n.rotation.y=s.rotation.y=Math.PI/2,n.position.set(.55,1.15,0),s.position.set(-.55,1.15,0),t.add(n,s);let r=new W(new Zt(.28,.28,1,12),i.darkWood);r.rotation.z=Math.PI/2,r.position.y=1.15,t.add(r);for(let o of[.85,-.85]){let a=new W(new kt(.18,1.2,.4),i.darkWood);a.position.set(o,.6,0),t.add(a)}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function Z1(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#0e0905",t.fillRect(0,0,128,128),t.fillStyle="#8c7354";for(let n=0;n<8;n++)t.fillRect(n*16,0,9,128),t.fillRect(0,n*16,128,9);let e=new xn(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=Wn,e}var zc=class{constructor(t,e){let n=pe();this.group=new zt,this.group.name="fittings",t.add(this.group);let s=this.group,r=(x=0,E=0,S=0)=>new A(x,E,S),o=x=>ft("qd",x)+.35,a=Hc(10.2,3,1.15,"#3a2c20");a.position.set(8.8,o(8.8)+1.1,0);let l=Hc(9.4,2.4,.95,"#1d1b19");l.position.set(8.4,o(8.4)+.95,2.95);let c=Hc(8.6,2.3,.9,"#1d1b19");c.position.set(8.8,o(8.8)+.9,-2.9),s.add(a,l,c);for(let x of[1,-1]){let S=Pe(-26.4)-.4,b=yt(-26.4,S)+1.7,M=Hc(7.4,2,.8,"#1d1b19");M.position.set(-26.4,S,x*b),s.add(M);for(let w of[-2.6,2.6]){let T=r(-26.4+w,Pe(-26.4+w)-.2,x*(yt(-26.4+w,9)-.2)),P=r(-26.4+w,Pe(-26.4+w)+1.2,x*(b+.1)),I=new W(Ee(T,P,.12,.09,8),n.black);I.castShadow=!0,s.add(I),this.davitRope=this.davitRope||[],this.davitRope.push([P,r(-26.4+w*.85,S+.2,x*b)])}}let h=$e-1,p=$1(n);p.position.set(h,ft("qd",h),0),s.add(p);let f=new zt,u=new W(new kt(.7,1,1.2),n.darkWood);u.position.y=.5;let g=new W(new fe(.28,12,8,0,Math.PI*2,0,Math.PI/2),n.brass);g.position.y=1,f.add(u,g),f.position.set(h+2,ft("qd",h+2),0),s.add(f);let y=(x,E,S=.75)=>{let b=new zt,M=new W(new Zt(S*.75,S*.9,1,16),n.darkWood);M.position.y=.5;let w=new W(new Zt(S*1.2,S*1.2,.35,16),n.darkWood);w.position.y=1.15,b.add(M,w);for(let T=0;T<12;T++){let P=T/12*Math.PI*2,I=new W(new kt(.12,.9,.18),n.darkWood);I.position.set(Math.cos(P)*S*.85,.5,Math.sin(P)*S*.85),I.rotation.y=-P,b.add(I)}b.position.set(x,ft(E,x),0),b.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),s.add(b)};for(let x of["middle","lower"])y(-6.4,x,x==="middle"?.75:.62),y(3.7,x,x==="middle"?.55:.48);{let x=new zt,E=2.6,S=2,b=.55,M=.45,w=new W(new kt(E,b,S),n.darkWood);w.position.y=b/2,x.add(w);let T=Math.atan2(M,S/2),P=Math.hypot(M,S/2),I=new re({color:"#1c2630",roughness:.08,metalness:.2}),D=[];for(let z of[1,-1]){let V=new W(new kt(E-.1,.03,P),I);V.position.set(0,b+M/2,z*S/4),V.rotation.x=z*T,x.add(V);for(let nt=0;nt<=6;nt++){let $=new kt(.05,.05,P).rotateX(z*T);$.translate(-E/2+.05+nt*(E-.1)/6,b+M/2+.02,z*S/4),D.push($)}for(let nt=1;nt<6;nt++){let $=new A(0,Math.cos(T),z*Math.sin(T));D.push(new Zt(.015,.015,P*.95).rotateX(Math.PI/2).rotateX(z*T).translate(-E/2+nt*E/6+.12,b+M/2+$.y*.09,z*S/4+$.z*.09))}}D.push(new kt(E,.08,.08).translate(0,b+M,0));let N=new Ke;N.moveTo(-S/2,0),N.lineTo(S/2,0),N.lineTo(0,M),N.closePath();for(let z of[-E/2,E/2-.06])D.push(new Sn(N,{depth:.06,bevelEnabled:!1}).rotateY(Math.PI/2).translate(z+.06,b,0));let O=new W(mt(D),n.darkWood);x.add(O),x.traverse(z=>{z.isMesh&&(z.castShadow=!0)}),x.position.set(-8.8,ft("qd",-8.8),0),s.add(x)}let m=Z1(),d=new re({map:m,roughness:.85});for(let{x,w:E,d:S}of Cn.filter(b=>b.x>ln+1&&b.x<Ze-1&&!b.ladder)){let b=new W(new kt(E+.3,.3,S+.3),n.darkWood);b.position.set(x,ft("upper",x)+.15,0);let M=new W(new hi(E,S),d);M.rotation.x=-Math.PI/2,M.position.set(x,ft("upper",x)+.31,0),m.repeat.set(1,1),s.add(b,M)}{let x=new zt,E=[];for(let[M,w]of[[.4,.4],[.4,-.4],[-.4,.4],[-.4,-.4]]){let T=new Zt(.06,.07,1.6,6);T.translate(M,.8,w),E.push(T)}let S=new os(.75,.6,4);S.rotateY(Math.PI/4),S.translate(0,1.9,0),E.push(S),x.add(new W(mt(E),n.ochre));let b=new W(new Zt(.12,.28,.4,14,1,!0),n.brass);b.material=n.brass,b.position.y=1.25,x.add(b),x.position.set(Ze+.8,ft("qd",Ze+.8),0),s.add(x)}{let x=new W(new kt(.6,1.6,.6),n.copper);x.position.set(20.3,ft("qd",20.3)+.8,1.6),x.castShadow=!0,s.add(x);let E=new W(new Zt(.28,.28,.5,10),n.copper);E.rotation.z=Math.PI/2,E.position.set(20.3,ft("qd",20.3)+1.75,1.6),s.add(E)}this.lanterns=[];{let x=ve(Pe(-29.4))+.5,E=Pe(-29.4)+.1;for(let[S,b]of[[0,1.25],[3.2,.9],[-3.2,.9]]){let M=new zt,w=new W(new Zt(.42*b,.32*b,1.1*b,6),n.lantern);w.position.y=.55*b;let T=new W(new os(.5*b,.6*b,6),n.gold);T.position.y=1.4*b;let P=new W(new fe(.12*b,8,6),n.gold);P.position.y=1.8*b;let I=new W(new Zt(.2*b,.35*b,.35*b,6),n.gold);I.position.y=-.1,M.add(w,T,P,I);let D=new W(Ee(r(.6,-.6),r(0,0),.06,.06,6),n.gold);M.add(D),M.position.set(x-.3,E+.4,S),s.add(M),this.lanterns.push(w)}}{let x=ve(Pe(-29.4))+.6,E=r(x,Pe(-29.4)-.5),S=r(x-2.2,Pe(-29.4)+6.5);s.add(new W(Ee(E,S,.09,.05,8),n.spar)),this.ensignStaff=S;let M=e.bowsprit.cap.clone().add(r(0,.4,0)),w=M.clone().add(r(.6,4.2,0));s.add(new W(Ee(M,w,.07,.04,8),n.spar)),this.jackStaff=w}this.anchors=[];for(let x of[1,-1]){let S=ft("qd",25.6)+.55,b=yt(25.6,S)-.4,M=r(25.6+1.35,S+.2,x*(b+1.85)),w=Ku(),T=r(Math.cos(1.05),Math.sin(1.05),x*.05).normalize(),P=M.clone().add(r(0,-.5,0)),I=P.clone().addScaledVector(T,-5.65);I.z=x*(yt(I.x,I.y)+1.25);let D=P.clone().sub(I).normalize(),N=r(0,0,x).sub(D.clone().multiplyScalar(D.z*x)).normalize(),O=r().crossVectors(N,D);w.quaternion.setFromRotationMatrix(new Rt().makeBasis(N,D,O)),w.position.copy(I),s.add(w),this.anchors.push({obj:w,side:x,home:w.position.clone()})}let _=(x,E)=>{let S=Ku(),b=ft("upper",x)+3.4,M=yt(x,b-4)+.35;S.position.set(x,b-5.65,E*M),S.rotation.set(E*.06,Math.PI/2,0),s.add(S)};_(14.075,1),_(14.075,-1),_(11.025,1);let v=(x,E,S)=>{let b=Ku();b.scale.setScalar(x),b.rotation.set(Math.PI/2,0,-Math.PI/2),b.position.set(E-2.6*x,ft("qd",E)+.5,S),s.add(b)};v(.6,12.6,4.7),v(.42,12.4,-4.7),this.cable=new W(new de,n.rope),this.cable.castShadow=!0,s.add(this.cable),this.hawse=r(26.9,ft("middle",26.9)+.9,yt(26.9,ft("middle",26.9)+.9)+.1)}setAnchor(t){let e=this.anchors[0];if(e.obj.visible=t<.95,e.obj.position.copy(e.home).add(new A(0,-t*16,0)),t>.02){let n=this.hawse,s=new A(n.x+4+t*18,ue(n.y-1,-9,t),n.z+t*3),r=n.clone().lerp(s,.5).add(new A(0,-t*2.5,0)),o=new as(n,r,s);this.cable.geometry.dispose(),this.cable.geometry=new un(o,16,.14,6),this.cable.visible=!0}else this.cable.visible=!1}};var kc={uTime:{value:0},uWind:{value:1}},$i=class{constructor(t,e,n,s,r=0){let o=new hi(e,n,24,6);o.translate(e/2,-n/2,0);let a=new re({map:Vp(t),side:De,roughness:.85});a.onBeforeCompile=l=>{l.uniforms.uTime=kc.uTime,l.uniforms.uWind=kc.uWind,l.uniforms.uW={value:e},l.uniforms.uTaper={value:r},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind, uW, uTaper;`).replace("#include <begin_vertex>",`vec3 transformed = position;
float f = position.x / uW;
transformed.y = (transformed.y + ${(n/2).toFixed(3)}) * (1.0 - uTaper * f) - ${(n/2).toFixed(3)};
float droop = (1.0 - uWind) * 0.75;
float wv = sin(position.x * 0.9 - uTime * (3.0 + 4.0 * uWind) + position.y * 0.4) * f * (0.18 + 0.35 * uWind) * uW * 0.12;
transformed.z += wv;
transformed.x *= mix(1.0, 0.55, droop);
transformed.y -= f * droop * uW * 0.6;
transformed.x -= abs(wv) * 0.25;`)},this.mesh=new W(o,a),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,s.add(this.mesh)}place(t,e){this.mesh.position.copy(t),this.mesh.rotation.set(0,Math.atan2(-e.z,e.x),0)}static update(t,e){kc.uTime.value=t,kc.uWind.value=e}};var K1=`
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
}`,J1=`
uniform sampler2D map;
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor.rgb, t.a * vColor.a);
  if (gl_FragColor.a < 0.003) discard;
  #include <fog_fragment>
}`,Vc=class{constructor(t,e,n){this.max=e;let s=new No,r=new hi(1,1);s.index=r.index,s.attributes.position=r.attributes.position,s.attributes.uv=r.attributes.uv,this.data=new Float32Array(e*4),this.color=new Float32Array(e*4),s.setAttribute("iData",new Vi(this.data,4).setUsage(lc)),s.setAttribute("iColor",new Vi(this.color,4).setUsage(lc)),s.instanceCount=0,this.geo=s;let o=new yn({uniforms:Hs.merge([_t.fog,{map:{value:Hu()}}]),vertexShader:K1,fragmentShader:J1,transparent:!0,depthWrite:!1,fog:!0,blending:n?Ho:ms});o.uniforms.map.value=Hu(),this.mesh=new W(s,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?11:10,t.add(this.mesh),this.list=[]}spawn(t){this.list.length<this.max&&this.list.push(t)}update(t,e){let n=this.list;for(let s=n.length-1;s>=0;s--){let r=n[s];if(r.age+=t,r.age>=r.life){n.splice(s,1);continue}r.pos.addScaledVector(r.vel,t),r.vel.multiplyScalar(Math.exp(-r.drag*t)),r.vel.addScaledVector(r.acc,t)}e&&n.sort((s,r)=>r.pos.distanceToSquared(e)-s.pos.distanceToSquared(e)),n.forEach((s,r)=>{let o=s.age/s.life;this.data[r*4]=s.pos.x,this.data[r*4+1]=s.pos.y,this.data[r*4+2]=s.pos.z,this.data[r*4+3]=s.size0+(s.size1-s.size0)*Math.sqrt(o);let a=s.alpha*Math.min(1,s.age/(s.fadeIn||1e-4))*(1-o)**s.fadePow;this.color[r*4]=s.color[0],this.color[r*4+1]=s.color[1],this.color[r*4+2]=s.color[2],this.color[r*4+3]=a}),this.geo.instanceCount=n.length,this.geo.attributes.iData.needsUpdate=!0,this.geo.attributes.iColor.needsUpdate=!0}},Gc=class{constructor(t){this.scene=t,this.smoke=new Vc(t,1800,!1),this.flash=new Vc(t,200,!0),this.rand=Yn(99),this.lights=[];for(let e=0;e<2;e++){let n=new Us("#ffb060",0,60,1.6);t.add(n),this.lights.push({l:n,t:1})}this.li=0}gunshot(t,e,n){let s=this.rand;for(let o=0;o<3;o++)this.flash.spawn({pos:t.clone().addScaledVector(e,.6+o*.9),vel:e.clone().multiplyScalar(14),acc:new A,drag:6,age:0,life:.14+s()*.06,size0:2.6-o*.5,size1:3.6-o*.6,color:[1,.62,.25],alpha:1,fadePow:1});for(let o=0;o<14;o++){let a=e.clone().multiplyScalar(10+s()*22).add(new A((s()-.5)*4,(s()-.3)*3,(s()-.5)*4)),l=(.82+s()*.12)*(this.light??1);this.smoke.spawn({pos:t.clone().addScaledVector(e,.5),vel:a,acc:new A(n.x,.35,n.z),drag:1.4+s()*.6,age:0,life:9+s()*7,fadeIn:.15,size0:1.2+s(),size1:9+s()*7,color:[l,l,l*.98],alpha:.55,fadePow:1.6})}let r=this.lights[this.li++%this.lights.length];r.l.position.copy(t).addScaledVector(e,2),r.t=0}update(t,e){this.smoke.update(t,e),this.flash.update(t,null);for(let n of this.lights)n.t+=t,n.l.intensity=n.t<.18?900*(1-n.t/.18):0}},Wc=class{constructor(t,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=Yn(41);s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,256,256);for(let d=0;d<1400;d++){let _=r()*256,v=r()*256,x=1+r()*7;s.fillStyle=`rgba(255,255,255,${.1+r()*.35})`,s.beginPath(),s.ellipse(_,v,x*1.6,x,0,0,Math.PI*2),s.fill();for(let[E,S]of[[256,0],[-256,0],[0,256],[0,-256]])s.beginPath(),s.ellipse(_+E,v+S,x*1.6,x,0,0,Math.PI*2),s.fill()}let o=new xn(n);o.wrapS=o.wrapT=Wn,this.tex=o,this.uniforms={uFoam:{value:o},uScroll:{value:0},uStrength:{value:0},uLight:{value:1}};let a=[],l=[],c=[],h=[],p=(d,_,v,x=12)=>{let E=a.length/3;for(let S=0;S<d;S++){let b=v(S/(d-1));for(let M=0;M<_;M++){let w=M/(_-1)*2-1,T=b.x+b.px*w*b.half,P=b.z+b.pz*w*b.half;a.push(T,0,P),l.push(T/x,P/x),c.push(Math.min(1,b.a(w)))}}for(let S=0;S<d-1;S++)for(let b=0;b<_-1;b++){let M=E+S*_+b,w=M+_,T=M+1,P=w+1;h.push(M,w,T,w,P,T)}},f=ve(0)+.3,u=Be(0);for(let d of[1,-1])p(110,6,_=>{let v=f+(u-f)*_,x=1.6+6.5*_**3,E=yt(v,.05);return{x:v+.6*_**2,z:d*(E-.3+x/2),px:0,pz:d,half:x/2,a:S=>(1-(S+1)/2)**1.3*(.6+1.3*_**2.2)}},9);p(60,9,d=>({x:f-d*260,z:0,px:0,pz:1,half:2.6+18*d**.8,a:_=>(1-d)**1.8*(1-_*_)*.95*Math.min(1,d*40+.3)}),14);let g=on.degToRad(19.5);for(let d of[1,-1]){let _=u-3.5,v=d*(yt(_,.05)+1.5),x=-Math.cos(g),E=d*Math.sin(g);p(50,5,S=>{let b=S*240;return{x:_+x*b,z:v+E*b,px:E*d,pz:-x*d,half:1.4+b*.035,a:M=>.6*(1-S)**1.5*(1-M*M)*Math.min(1,S*30+.2)}},12)}let y=new de;y.setAttribute("position",new ie(a,3)),y.setAttribute("uv",new ie(l,2)),y.setAttribute("alpha",new ie(c,1)),y.setIndex(h);let m=new yn({uniforms:Hs.merge([_t.fog,this.uniforms]),vertexShader:`attribute float alpha; varying float vA; varying vec2 vUv; varying vec3 vWorldP;
        ${Yp}
        #include <fog_pars_vertex>
        void main(){ vA = alpha; vUv = uv; vec3 p = position; p.y = seaHeight(p.xz) + 0.07;
        vWorldP = (modelMatrix * vec4(p, 1.0)).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
        }`,fragmentShader:`uniform sampler2D uFoam; uniform float uScroll, uStrength, uLight; varying float vA; varying vec2 vUv; varying vec3 vWorldP;
        ${Vu}
        #include <fog_pars_fragment>
        void main(){ if (insideHull(vWorldP)) discard; float f = texture2D(uFoam, vUv + vec2(uScroll, 0.0)).a;
        float f2 = texture2D(uFoam, vUv * 0.6 + vec2(uScroll * 0.7, 0.31)).a;
        gl_FragColor = vec4(vec3(0.95) * uLight, (f * 0.7 + f2 * 0.6) * vA * uStrength);
        #include <fog_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!0,side:De,polygonOffset:!0,polygonOffsetFactor:-2});m.uniforms.uFoam.value=o;for(let d of["uTime","uOffset","uWaveScale","uWaveRot","uShipInv","uHB0","uHB1","uHB2"])m.uniforms[d]=e[d];this.uniforms=m.uniforms,this.mesh=new W(y,m),this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t,e){this.uniforms.uScroll.value=t/9%1,this.uniforms.uStrength.value=Math.min(1,e/5)*.9+.1}};var j1=["course","topsail","topgallant","royal","sprit","foreTopmastStaysail","jib","flyingJib","mainTopmastStaysail","mizzenStaysail","spanker","stunTop","stunTg","stunLower"],Q1={stunTop:0,stunTg:0,stunLower:0},Xc=i=>Object.fromEntries(j1.map(t=>[t,i])),Es={sail:{set:{...Xc(1),sprit:0,...Q1},hoist:{topsail:1,topgallant:1,royal:1},ports:0,runOut:0,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:0},trafalgar:{set:{...Xc(1),sprit:0},hoist:{topsail:1,topgallant:1,royal:1},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:1,cleared:1,wind:{dir:-160,str:.15}},action:{set:{...Xc(0),topsail:1,foreTopmastStaysail:1,jib:1,spanker:1},hoist:{topsail:1,topgallant:1,royal:0},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:1},anchor:{set:Xc(0),hoist:{topsail:0,topgallant:0,royal:0},ports:0,runOut:0,anchor:1,gaffEnsign:0,jack:1,unionStays:0,cleared:0}},tM={course:.3,topsail:.32,topgallant:.13,royal:.05,sprit:0,foreTopmastStaysail:.04,jib:.04,flyingJib:.03,mainTopmastStaysail:.02,mizzenStaysail:.02,spanker:.05,stunTop:.06,stunTg:.03,stunLower:.05},Ju=i=>Math.min(1,Math.max(0,i)),ju=i=>(i+540)%360-180;function eM(i,t,e){let n=on.degToRad(ju(t*(1-i.anchor))),s=Math.abs(n),r=n<0?-1:1,o=n<=0?1:-1,a=0;for(let[g,y]of Object.entries(tM))a+=y*(i[`set.${g}`]??0);let l=Ju((s-on.degToRad(48))/on.degToRad(30)),c=1-i.anchor,h=6*e*Math.pow(a,.8)*l*(.75+.25*Math.sin(s))*c,p=2+12*e,f=new A(-Math.cos(n),0,-Math.sin(n)).multiplyScalar(p),u=f.clone().add(new A(-h,0,0));return{rel:n,lee:o,area:a,drive:l,speed:h,toward:f,apparent:u,brace:r*.5*Ju((Math.PI-s)/on.degToRad(110))*c,heel:-r*e*.12*a*Math.abs(Math.sin(n))*l,boomSwing:-r*(.06+.5*Ju((s-.8)/2.35))*c,belly:(.3+.7*e)*Math.max(l,.06),luff:(1-l)*(.2+e),waveScale:(.35+.9*e)*(1-.35*i.anchor)}}function fm(i){let t={};for(let[e,n]of Object.entries(i))if(e!=="wind")if(typeof n=="object")for(let[s,r]of Object.entries(n))t[`${e}.${s}`]=r;else t[e]=n;return t}var nM=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function iM(i,t,e){let n=e>t;return i.startsWith("set.")?n?[.35,.9]:[0,.55]:i.startsWith("hoist.")?n?[.05,.45]:[.45,.9]:i==="ports"?n?[.1,.45]:[.5,.85]:i==="runOut"?n?[.45,.95]:[.05,.45]:i==="anchor"?n?[.55,.95]:[0,.4]:i==="gaffEnsign"||i==="jack"||i==="unionStays"?[.5,.52]:i.startsWith("set.stun")?n?[.75,1]:[0,.3]:i==="cleared"?n?[.05,.25]:[.7,.9]:[0,1]}var qc=class{constructor(t,e){this.scene=t,this.sea=e,this.root=new zt,this.body=new zt,this.root.add(this.body);let n=nm();this.body.add(n),this.body.add(rm()),n.traverse(r=>{r.isMesh&&["planking","innerPlanking","stern","bulwark"].includes(r.name)&&(r.userData.shell=!0)}),n.getObjectByName("quarterGalleries")?.traverse(r=>{r.isMesh&&(r.userData.shell=!0)}),this.rig=new Nc,this.body.add(this.rig.group),this.root.updateMatrixWorld(!0),this.sails=um(this.rig,this.body),this.rigging=new Oc(this.rig),this.guns=new Bc(this.body),this.fittings=new zc(this.body,this.rig),this.furnishing=lm(this.fittings),this.body.add(this.furnishing),this.furnishing.add(cm());let s=pe();this.nightMaterials=[[this.furnishing.userData.glow,.9,3],[s.lantern,0,3.5]],n.traverse(r=>{if(r.userData.glow)for(let o of r.userData.glow)this.nightMaterials.push([o,0,.75])}),this.lanterns=this.furnishing.userData.lanterns.map(r=>({p:r})),this.root.updateMatrixWorld(!0);for(let r of this.fittings.lanterns){let o=r.getWorldPosition(new A);this.lanterns.push({p:this.body.worldToLocal(o)})}this.clearables=[{setCleared:r=>this.furnishing.userData.setCleared(r)}],this.isCleared=null,this.layoutVersion=0;for(let r of this.sails.square){let o=this.rigging.colliders[r.mastName];if(!o)continue;r.space=this.rig.group,r.colliders={course:[...o.lower,...o.futtock,...o.backstay],topsail:[...o.topmast,...o.backstay],topgallant:[...o.tg,...o.backstay],royal:[...o.backstay]}[r.kind]||[];let a={fore:{course:["fore stay","fore preventer stay"],topsail:["fore topmast stay","jib stay"],topgallant:["fore topgallant stay"],royal:["fore royal stay"]},main:{course:["main stay","main preventer stay"],topsail:["main topmast stay"],topgallant:["main topgallant stay"],royal:["main royal stay"]},mizzen:{topsail:["mizzen topmast stay"],topgallant:["mizzen topgallant stay"]}}[r.mastName]?.[r.kind]||[];r.stays=a.map(l=>this.rigging.stayLines[l]).filter(Boolean)}this.flags={ensign:new $i("ensign",8.5,4.25,this.body),admiral:new $i("admiral",5,2.5,this.body),jack:new $i("union",4.2,2.1,this.body),unionFore:new $i("union",3.6,1.8,this.body),unionMain:new $i("union",3.6,1.8,this.body)},this.effects=new Gc(t),this.wake=new Wc(t,e.uniforms),this.distance=0,this.pose="sail",this.cur=fm(Es.sail),this.tween=null,this.dirty=!0,this.broadside=null,this.time=0,this.windTarget={dir:-135,str:.6},this.windNow={...this.windTarget}}setWind(t,e,n=!1){t!=null&&(this.windTarget.dir=t),e!=null&&(this.windTarget.str=e),n&&(this.windNow={...this.windTarget}),this.dirty=!0}poseNames(){return Object.keys(Es)}setPose(t,e=!1){if(!Es[t])return;this.pose=t;let n=fm(Es[t]);if(e){this.cur=n,this.tween=null,this.dirty=!0;return}this.tween={from:{...this.cur},to:n,k:0,dur:8}}fireBroadside(){if(!Es[this.pose].ports||this.broadside)return;let t=this.guns.ports.filter(n=>n.side===1).sort((n,s)=>s.x-n.x),e=0;for(let n of t)n.fireAt=this.time+e+Math.random()*.08,e+=.075;this.broadside={list:t,end:this.time+e+4}}update(t,e){if(this.time=t,this.tween){let T=this.tween;T.k=Math.min(1,T.k+e/T.dur);for(let P of Object.keys(T.to)){let I=T.from[P],D=T.to[P],[N,O]=iM(P,I,D),z=Math.min(1,Math.max(0,(T.k-N)/(O-N)));this.cur[P]=I+(D-I)*nM(z)}T.k>=1&&(this.tween=null,this.layoutVersion++),this.dirty=!0}let n=this.cur,s=this.windNow,r=this.windTarget,o=1-Math.exp(-e*1.2),a=ju(r.dir-s.dir),l=r.str-s.str;(Math.abs(a)>.05||Math.abs(l)>.001)&&(s.dir=ju(s.dir+a*o),s.str+=l*o,this.dirty=!0);let c=eM(n,s.dir,s.str);this.W=c;let h=this.sea;h.setScale(c.waveScale),h.setDirection(Math.atan2(c.toward.z,c.toward.x));let p=22,f=6,u=h.heightAt(p,0),g=h.heightAt(-p,0),y=h.heightAt(0,-f),m=h.heightAt(0,f),d=h.heightAt(0,0);this.root.position.y=(u+g+y+m+d*2)/6*.85,this.root.rotation.z=Math.atan2(u-g,2*p)*.8,this.root.rotation.x=-Math.atan2(m-y,2*f)*.6,this.body.rotation.x=c.heel,this.body.rotation.z=Pp,this.distance+=c.speed*e,this.dirty&&this.rig.applyYards({hoist:{topsail:n["hoist.topsail"],topgallant:n["hoist.topgallant"],royal:n["hoist.royal"]},brace:c.brace,boomSwing:c.boomSwing}),this.root.updateMatrixWorld(!0),this.sea.uniforms.uShipInv.value.copy(this.body.matrixWorld).invert();for(let T of this.sails.square)T.update(n[`set.${T.kind}`],c.belly,t,c.luff);for(let T of this.sails.stay)T.update(n[`set.${T.kind}`],c.belly,t,c.lee);this.sails.spanker.update(n["set.spanker"],c.belly,t,c.lee);for(let T of this.sails.stun)T.update(n[`set.${T.kind}`],c.belly,t);let _=this.dirty;if(this.broadside){let T=this.broadside,P=c.apparent.clone().multiplyScalar(.5);for(let I of T.list){if(I.fireAt>0&&t>=I.fireAt){I.fireAt=-1,I.firedAt=t;let D=this.guns.muzzle(I,n.runOut),N=this.body.localToWorld(D.clone()),O=I.out.clone().transformDirection(this.body.matrixWorld);this.effects.gunshot(N,O,P)}if(I.firedAt!=null){let D=t-I.firedAt;I.recoil=D<.12?D/.12:Math.max(0,1-(D-.6)/2.4),D>3.2&&(I.recoil=0,I.firedAt=null)}}_=!0,t>T.end&&(this.broadside=null)}_&&this.guns.apply(n.ports,n.runOut),this.rigging.updateRunning(this.sails,n,c),this.dirty&&this.fittings.setAnchor(n.anchor);let v=n.cleared>.5;if(v!==this.isCleared){this.isCleared=v;for(let T of this.clearables)T.setCleared(v);this.layoutVersion++}let x=this.rig,E=c.apparent.clone().setY(0).normalize();$i.update(t,.2+.8*Math.min(1,c.apparent.length()/12));let S=(T,P)=>Ve(T.local[P].clone(),T.group,this.body),b=Ve(new A(x.gaff.L-.1,0,0),x.gaff.group,this.body),M=this.flags.ensign;n.gaffEnsign>.5?M.place(b,E):M.place(this.fittings.ensignStaff,E),this.flags.admiral.place(S(x.masts.fore,"poleHead").add(new A(0,.1,0)),E);let w=(T,P)=>{let[I,D]=this.rigging.stayLines[T];return I.clone().lerp(D,P).add(new A(0,-.3,0))};for(let[T,P,I]of[[this.flags.unionFore,"fore topgallant stay",.42],[this.flags.unionMain,"main topmast stay",.5]])T.mesh.visible=n.unionStays>.5,T.place(w(P,I),E);this.flags.jack.mesh.visible=n.jack>.5,this.flags.jack.place(this.fittings.jackStaff,E),this.effects.update(e,this.scene.userData.camera?.position),this.wake.update(this.distance,c.speed),this.dirty=!1}};var Qu={sail:"Full sail",trafalgar:"Trafalgar, 1805",action:"Cleared for action",anchor:"At anchor",quarter:"Quarter",broadside:"Broadside",bow:"Bow",stern:"Stern",deck:"Deck",aloft:"Aloft",galleries:"Galleries",head:"Figurehead",inside:"Inside",all:"All",quarterdeck:"Quarterdeck",upper:"Upper deck",middle:"Middle deck",lower:"Lower deck",orlop:"Orlop",hold:"Hold"};function td(i,t){let e=Math.abs(i),n=i<0?"port":"starboard",s=e<22.5?"dead ahead":e<67.5?`on the ${n} bow`:e<112.5?`on the ${n} beam`:e<157.5?`on the ${n} quarter`:"dead astern";return`${t<.12?"Light air":t<.3?"Light breeze":t<.5?"Moderate breeze":t<.7?"Fresh breeze":t<.88?"Strong breeze":"Near gale"}, ${s}`}var Yc=class{constructor({onPose:t,onView:e,onFire:n,onWind:s,wind:r,poses:o,views:a,levels:l,onLevel:c,onCut:h,onXray:p,onLabels:f,onMode:u,onTime:g}){let y=document.getElementById("ui");y.innerHTML=`
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
      <div class="hint">Drag to orbit \xB7 scroll to zoom \xB7 right-drag to pan</div>`,this.modeButtons={};let m=y.querySelector("#modes");for(let[T,P]of[["free","Free camera"],["sailor","Sailor (isometric)"]]){let I=document.createElement("button");I.textContent=P,I.onclick=()=>{u(T),this.setMode(T)},m.appendChild(I),this.modeButtons[T]=I}this.el=y,this.timeButtons={};let d=y.querySelector("#times");for(let[T,P]of[["day","Day"],["dusk","Dusk"],["night","Night"]]){let I=document.createElement("button");I.textContent=P,I.onclick=()=>g(T),d.appendChild(I),this.timeButtons[T]=I}this.poseButtons={};let _=y.querySelector("#poses");for(let T of o){let P=document.createElement("button");P.textContent=Qu[T]||T,P.onclick=()=>{t(T),this.setPose(T)},_.appendChild(P),this.poseButtons[T]=P}let v=y.querySelector("#views");for(let T of a){let P=document.createElement("button");P.textContent=Qu[T]||T,P.onclick=()=>e(T),v.appendChild(P)}this.levelButtons={};let x=y.querySelector("#levels");for(let T of l){let P=document.createElement("button");P.textContent=Qu[T]||T,P.onclick=()=>{c(T),this.setLevel(T)},x.appendChild(P),this.levelButtons[T]=P}this.setLevel("all"),y.querySelector("#cut").oninput=T=>h(+T.target.value/100),y.querySelector("#xray").onchange=T=>p(T.target.checked),y.querySelector("#labels").onchange=T=>f(T.target.checked),this.fireGroup=y.querySelector("#fireGroup"),y.querySelector("#fire").onclick=n;let E=y.querySelector("#windDir"),S=y.querySelector("#windStr"),b=y.querySelector("#windText"),M=y.querySelector("#windHint");E.value=r.dir,S.value=Math.round(r.str*100);let w=()=>{let T=+E.value,P=+S.value/100;b.textContent=td(T,P),M.textContent=Math.abs(T)<50?"Too close to the wind: her sails shiver and she loses way.":"",s(T,P)};E.oninput=S.oninput=w,b.textContent=td(r.dir,r.str),this.windSet=(T,P)=>{E.value=T,S.value=Math.round(P*100),b.textContent=td(T,P),M.textContent=""}}setTime(t){for(let[e,n]of Object.entries(this.timeButtons))n.classList.toggle("active",e===t)}setMode(t){for(let[e,n]of Object.entries(this.modeButtons))n.classList.toggle("active",e===t);this.el.querySelector("#sailorHint").style.display=t==="sailor"?"":"none",this.el.querySelector("#levels").style.opacity=t==="sailor"?.45:1,this.el.querySelector("#levels").style.pointerEvents=t==="sailor"?"none":"",this.el.querySelector("#views").style.opacity=t==="sailor"?.45:1,this.el.querySelector("#views").style.pointerEvents=t==="sailor"?"none":""}setLevel(t){for(let[e,n]of Object.entries(this.levelButtons))n.classList.toggle("active",e===t)}setPose(t){for(let[e,n]of Object.entries(this.poseButtons))n.classList.toggle("active",e===t);this.fireGroup.style.display=t==="action"||t==="trafalgar"?"":"none"}};var sM=1e-7,ed=new A,nd=new A,id=new A,sd=new A,rd=new A,od=new A;function pm(i,t,e,n,s){od.subVectors(t,i),ed.subVectors(n,e),nd.subVectors(s,e),id.crossVectors(od,nd);let r=ed.dot(id);if(Math.abs(r)<sM)return!1;let o=1/r;sd.subVectors(i,e);let a=sd.dot(id)*o;if(a<0||a>1)return!1;rd.crossVectors(sd,ed);let l=od.dot(rd)*o;if(l<0||a+l>1)return!1;let c=nd.dot(rd)*o;return c>0&&c<1}function rM(i,t){let e=i.mesh;if(!e.visible)return null;let n=new Rt().multiplyMatrices(t,e.matrixWorld),s=e.geometry.attributes.position,r=i.NU,o=i.NV,a=(p,f)=>new A().fromBufferAttribute(s,f*r+p).applyMatrix4(n),l=[],c=new Dn,h=[];for(let p=1;p<o-2;p++)for(let f=1;f<r-2;f++){let u=a(f,p),g=a(f+1,p),y=a(f,p+1),m=a(f+1,p+1);l.push([u,g,m],[u,m,y]),c.expandByPoint(u).expandByPoint(g).expandByPoint(y).expandByPoint(m),h.push([u,g],[u,y])}return{name:i.name,tris:l,box:c,lines:h}}function mm(i){i.root.updateMatrixWorld(!0);let t=new Rt().copy(i.body.matrixWorld).invert(),n=[...i.sails.square,...i.sails.stay,i.sails.spanker,...i.sails.stun].map(h=>rM(h,t)).filter(Boolean),s=[];for(let h of[i.rigging.standing,i.rigging.running,i.rigging.sailLines])for(let p of h.segs)s.push(p);let r=(h,p,f)=>new A(h,p,f),o=(h,p)=>p.applyMatrix4(new Rt().multiplyMatrices(t,h.matrixWorld));for(let h of Object.values(i.rig.masts)){for(let y of Object.values(h.yards))s.push([o(y.group,r(0,0,-y.L/2)),o(y.group,r(0,0,y.L/2)),`${h.name} ${y.name} yard`]);let p=h.h;s.push([o(h.group,r(0,0,0)),o(h.group,r(0,p.lowerHead,0)),`${h.name} lower mast`]),s.push([o(h.group,r(h.dTop,p.topmastHeel,0)),o(h.group,r(h.dTop,p.topmastHead,0)),`${h.name} topmast`]),s.push([o(h.group,r(h.dTg,p.tgHeel,0)),o(h.group,r(h.dTg,p.poleHead,0)),`${h.name} topgallant mast`]);let f=p.topLen,u=p.topW/2,g=p.topY+.2;s.push([o(h.group,r(-f*.45,g,-u)),o(h.group,r(f*.55,g,-u)),`${h.name} top`]),s.push([o(h.group,r(-f*.45,g,u)),o(h.group,r(f*.55,g,u)),`${h.name} top`]),s.push([o(h.group,r(f*.55,g,-u)),o(h.group,r(f*.55,g,u)),`${h.name} top`])}let a=new Map,l=new Dn,c=(h,p)=>{let f=`${h}  x  ${p}`;a.set(f,(a.get(f)||0)+1)};for(let[h,p,f]of s){l.makeEmpty().expandByPoint(h).expandByPoint(p);for(let u of n)if(l.intersectsBox(u.box)){for(let[g,y,m]of u.tris)if(pm(h,p,g,y,m)){c(f,u.name);break}}}for(let h of n)for(let p of n){if(h===p||!h.box.intersectsBox(p.box))continue;let f=0;for(let[u,g]of h.lines)if(l.makeEmpty().expandByPoint(u).expandByPoint(g),!!l.intersectsBox(p.box)){for(let[y,m,d]of p.tris)if(pm(u,g,y,m,d)){f++;break}}f&&h.name<p.name&&c(`sail ${h.name}`,p.name)}return[...a.entries()].sort((h,p)=>p[1]-h[1]).map(([h,p])=>`${p}	${h}`)}var ad={all:1/0,quarterdeck:Bt.poop-.52,upper:Bt.qd-.52,middle:Bt.upper-.52,lower:Bt.middle-.52,orlop:Bt.lower-.52,hold:Bt.orlop-.52},oM={poop:Bt.poop+2.1},$c=class{constructor(t,e){this.ship=t,this.sun=e,this.uniforms={uShipInv:{value:new Rt},uCutY:{value:1e5},uCutZ:{value:1e5},uCutSide:{value:1}},this.rigCutZ={value:1e5},this.shellCutY={value:1e5},this.level="all",this.cutZ=1e5,this.xray=!1,this.applied=new WeakSet,this.applyAll()}applyAll(){let t=[this.ship.rig.group,...Object.values(this.ship.flags).map(s=>s.mesh)],e=s=>{for(let r=s;r;r=r.parent)if(t.includes(r))return!0;return!1},n=s=>this.ship.body.traverse(r=>{if(!(!r.material||e(r)!==s))for(let o of Array.isArray(r.material)?r.material:[r.material])this.inject(o,s,!!r.userData.shell)});n(!1),n(!0)}inject(t,e=!1,n=!1){if(this.applied.has(t))return;this.applied.add(t);let s=this.uniforms,r=t.onBeforeCompile,o=t.customProgramCacheKey?t.customProgramCacheKey():"";t.onBeforeCompile=(a,l)=>{r&&r.call(t,a,l),a.uniforms.uShipInv=s.uShipInv,a.uniforms.uCutY=n?this.shellCutY:s.uCutY,a.uniforms.uCutZ=e?this.rigCutZ:s.uCutZ,a.uniforms.uCutSide=s.uCutSide,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
  if (vCutPos.y > uCutY + cutSheer || vCutPos.z * uCutSide > uCutZ) discard; }`)},t.customProgramCacheKey=()=>`${o}|cut${e?"R":""}${n?"S":""}`,t.needsUpdate=!0}get active(){return this.level!=="all"||this.cutZ<50}setLevel(t){this.level=t;let e=ad[t]??oM[t];this.uniforms.uCutY.value=Number.isFinite(e)?e:1e5,this.shellCutY.value=Math.max(this.uniforms.uCutY.value,.6),this.refresh()}setCut(t){this.cutZ=t<=.001?1e5:9-t*9.2,this.uniforms.uCutZ.value=this.cutZ,this.uniforms.uCutSide.value=1,this.refresh()}setCutPlane(t,e){this.cutZ=t,this.uniforms.uCutZ.value=t,this.uniforms.uCutSide.value=e,this.refresh()}setXray(t){this.xray=t,this.ship.body.traverse(e=>{if(!e.isMesh||!e.userData.shell)return;let n=e.material;e.userData.solid||(e.userData.solid={transparent:n.transparent,opacity:n.opacity,depthWrite:n.depthWrite});let s=e.userData.solid;n.transparent=t?!0:s.transparent,n.opacity=t?.14:s.opacity,n.depthWrite=t?!1:s.depthWrite,n.needsUpdate=!0})}refresh(){let t=!this.active;this.sun.castShadow!==t&&(this.sun.castShadow=t)}update(){this.uniforms.uShipInv.value.copy(this.ship.body.matrixWorld).invert()}};var Zc=class extends nn{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Q(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Wr=new A,gm=new Rt,xm=new Rt,_m=new A,ym=new A,Kc=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(g,y){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),gm.copy(y.matrixWorldInverse),xm.multiplyMatrices(y.projectionMatrix,gm),h(g,g,y),this.sortObjects&&u(g)},this.setSize=function(g,y){n=g,s=y,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=y+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let y=0,m=g.children.length;y<m;y++)c(g.children[y])}function h(g,y,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Wr.setFromMatrixPosition(g.matrixWorld),Wr.applyMatrix4(xm);let d=Wr.z>=-1&&Wr.z<=1&&g.layers.test(m.layers)===!0,_=g.element;if(_.style.display=d===!0?"":"none",d===!0){g.onBeforeRender(e,y,m);let x=100*g.center.x,E=100*g.center.y;_.style.transformOrigin=`${x}% ${E}%`;let S=-g.rotation2D,b=Wr.x*r+r,M=-Wr.y*o+o;_.style.transform=`translate(${-x}%, ${-E}%) translate(${b}px, ${M}px) rotate(${S}rad)`,_.parentNode!==l&&l.appendChild(_),g.onAfterRender(e,y,m)}let v={distanceToCameraSquared:p(m,g)};a.objects.set(g,v)}for(let d=0,_=g.children.length;d<_;d++)h(g.children[d],y,m)}function p(g,y){return _m.setFromMatrixPosition(g.matrixWorld),ym.setFromMatrixPosition(y.matrixWorld),_m.distanceToSquared(ym)}function f(g){let y=[];return g.traverseVisible(function(m){m.isCSS2DObject&&y.push(m)}),y}function u(g){let y=f(g).sort(function(d,_){if(d.renderOrder!==_.renderOrder)return _.renderOrder-d.renderOrder;let v=a.objects.get(d).distanceToCameraSquared,x=a.objects.get(_).distanceToCameraSquared;return v-x}),m=y.length;for(let d=0,_=y.length;d<_;d++)y[d].element.style.zIndex=m-d}}};var vm={hold:"orlop",orlop:"lower",lower:"middle",middle:"upper",upper:"qd",qd:"poop"},Mm={qd:"quarterdeck",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"},Em={qd:"Quarterdeck and forecastle",upper:"Upper gun deck",middle:"Middle gun deck",lower:"Lower gun deck",orlop:"Orlop",hold:"Hold"},Kt={wp:'Wikipedia, "HMS Victory" (citing McGowan)',hv:"HMS Victory official site (archived deck pages)",nmrn:"National Museum of the Royal Navy",beatty:"Beatty, Authentic Narrative of the Death of Lord Nelson (1807)",mckay:"modellers' readings of McKay's plans"},ra=[{deck:"qd",name:"Captain Hardy's day cabin",x0:-28.6,x1:-23.2,z0:-7,z1:7,walls:[["fore",7]],note:"The aftermost part of the quarterdeck, under the poop, lit by the stern windows. Hardy's day cabin held two guns, cleared away like the rest of the ship for battle.",source:`${Kt.wp}; photo captions`},{deck:"qd",name:"Captain's dining cabin",x0:-23.2,x1:-17.6,z0:-7,z1:-1.6,walls:[["stbd",2]],note:"Where the captain dined, often with his officers. Its exact side is not certain.",source:`photo captions; ${Kt.mckay}`},{deck:"qd",name:"Captain's bed place",x0:-23.2,x1:-20.2,z0:1.6,z1:7,walls:["fore",["port",1.5]],note:"Hardy's sleeping cabin, part of his quarters under the poop.",source:"photo captions (medium confidence)"},{deck:"qd",name:"Master's cabin",x0:-17.6,x1:-13.6,z0:-7,z1:-1.7,walls:[["stbd",2],"fore"],note:"The master was responsible for navigation. His cabin was on the larboard (port) side, beside the wheel.",source:`R. Fraser / P. Milford deck notes; ${Kt.mckay}`},{deck:"qd",name:"Secretary's cabin",x0:-17.6,x1:-13.6,z0:1.7,z1:7,walls:[["port",2],"fore"],note:"Nelson's secretary, John Scott, was killed early in the battle. His cabin was to starboard of the wheel.",source:"R. Fraser / P. Milford deck notes (medium confidence)"},{deck:"qd",name:"Wheel",obj:!0,x0:-15,x1:-14,z0:-1,z1:1,lx:-14.4,ly:2.4,note:"The double wheel stands under the overhang of the poop, with the binnacle (compass) forward of it. At Trafalgar the wheel was shot away and she was steered from the gunroom below.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"qd",name:"Where Nelson fell",x0:-9,x1:-7,z0:1,z1:3,ly:.6,note:"Nelson was shot by a French marksman in the mizzen top of the Redoutable at about 1:15 pm while walking the quarterdeck with Hardy. A brass plaque marks the spot today; its exact position here is approximate.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"qd",name:"Forecastle",x0:18,x1:22,z0:-1,z1:1,ly:1.8,note:"Two 12-pounders and two 68-pounder carronades, the belfry and the galley chimney. The bell struck the half-hours of each watch.",source:Kt.wp},{deck:"upper",name:"Great cabin",x0:-28.9,x1:-23.6,z0:-7.4,z1:7.4,walls:[["fore",7.4]],note:"Nelson's day cabin and office at the stern windows, where he wrote his last prayer on the morning of the battle. With the dining cabin and sleeping quarters it took up about a quarter of the deck. His coffin later stood in the after part of this cabin.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"upper",name:"Dining cabin",x0:-23.6,x1:-18.6,z0:-7.4,z1:7.4,walls:[["fore",5.5]],note:"Where Nelson entertained his captains: the 'Band of Brothers' dined here before Trafalgar.",source:Kt.hv},{deck:"upper",name:"Nelson's sleeping cabin",x0:-18.6,x1:-15.2,z0:1.2,z1:7.4,walls:[["port",1.7],"fore"],note:"Nelson's cot hung between two 12-pounders. Which side it was on is not recorded in the sources found; it is shown to starboard.",source:"R. Fraser / P. Milford deck notes (side not found)"},{deck:"upper",name:"Steerage (ante-room)",x0:-18.6,x1:-14.6,z0:-7.4,z1:1.2,walls:[["fore",6]],note:"An ante-room for the admiral's clerks and secretary, leading to the dining and day cabins.",source:Kt.hv},{deck:"upper",name:"Sick berth",x0:21.6,x1:27.4,z0:.6,z1:6,walls:[["aft",3],"port"],note:"Forward, in the bow under the forecastle, where the air was best. Cots hung over the guns; the surgeon worked just forward of the foremast. In battle the wounded were taken below to the cockpit instead. The side is uncertain.",source:`${Kt.nmrn}; ${Kt.mckay}`},{deck:"middle",name:"Wardroom",x0:-29.2,x1:-15.8,z0:-3.4,z1:3.4,walls:[["fore",3.4]],note:"The commissioned officers' mess, aft, with a long table over the rudder head and the officers' cabins along both sides.",source:`${Kt.wp}; ${Kt.mckay}`},{deck:"middle",name:"First Lieutenant's cabin",x0:-26.4,x1:-22.4,z0:3.4,z1:7.6,walls:[["port",3.5],"fore"],note:"On the starboard side, with the use of the starboard quarter gallery.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officer's cabin",x0:-22.4,x1:-19.6,z0:3.4,z1:7.6,walls:[["port",2.4],"fore"],lx:-21.2,note:"One of seven small cabins of lieutenants and senior officers round the wardroom, separated by light partitions that could be taken down when the ship cleared for action.",source:Kt.mckay},{deck:"middle",name:"Officers' pantry",x0:-19.6,x1:-15.8,z0:3.4,z1:7.6,walls:[["port",3.2],"fore"],note:"The wardroom's pantry, around the mizzen mast.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officers' cabins",x0:-26.4,x1:-15.8,z0:-7.6,z1:-3.4,walls:[["stbd",2]],note:"Lieutenants' cabins on the larboard side of the wardroom.",source:Kt.mckay},{deck:"middle",name:"Main capstan",obj:!0,x0:-7,x1:-5.8,z0:-.6,z1:.6,ly:1.7,note:"Abaft the mainmast. Its drumhead is on this deck, with a second drumhead below on the lower deck, so men on two decks could heave on the bars at once to weigh the anchors.",source:`${Kt.nmrn} conservation log`},{deck:"middle",name:"Jeer capstan",obj:!0,x0:3.1,x1:4.3,z0:-.6,z1:.6,ly:1.7,note:"Forward of the mainmast, used to sway up the heavy lower yards and for other heavy lifts.",source:`${Kt.nmrn} conservation log`},{deck:"middle",name:"Galley (Brodie stove)",x0:18.6,x1:22,z0:-2.2,z1:2.2,ly:1.6,note:"Just abaft the foremast, on a stone hearth. The iron Brodie stove cooked for some 820 men and distilled a little fresh water. The museum places it on this deck; the stove now aboard dates from the 1920s.",source:`${Kt.nmrn}; ${Kt.mckay}`},{deck:"middle",name:"Galley pantry",x0:16.2,x1:18.6,z0:-1.8,z1:1.8,walls:["aft",["port",1.2],["stbd",1.2]],note:"Behind (abaft) the galley.",source:Kt.mckay},{deck:"lower",name:"Gunroom",x0:-28.6,x1:-23.6,z0:-6.6,z1:6.6,walls:[["fore",6.6]],note:"Aft on this deck: the gunner's domain and the junior officers' mess, with the tiller sweeping overhead. Some sources put a gun room on the orlop instead. After the wheel was shot away Victory was steered from here.",source:`${Kt.wp} (Gunroom); ${Kt.beatty}`},{deck:"lower",name:"Crew messes",x0:-12,x1:12,z0:3.5,z1:5.5,lx:-4,lz:4.6,note:"About 600 men ate here and 460 slept, in hammocks slung from the beams in rows 14 inches wide. Messes of up to a dozen men ate at tables hung between the guns.",source:`${Kt.hv}; ${Kt.nmrn}`},{deck:"lower",name:"Chain pumps",obj:!0,x0:-1,x1:1,z0:1.4,z1:2.6,note:"Two chain pumps each side of the mainmast drew water from the well in the hold; there was also an elm-tree pump.",source:`on-board placard; ${Kt.mckay}`},{deck:"lower",name:"Riding bitts",obj:!0,x0:20,x1:21,z0:-1,z1:1,ly:1.4,note:"The great timbers that held the anchor cables. Their posts ran down to the hold. Forward of them, the hawse holes and the manger that caught water coming in with the cables.",source:Kt.mckay},{deck:"orlop",name:"Bread room",x0:-27,x1:-23.5,z0:-6,z1:6,walls:[["fore",9.5]],note:"Right aft, lined to keep out damp and rats: ship's biscuit for months at sea.",source:Kt.mckay},{deck:"orlop",name:"After hanging magazine",x0:-23.5,x1:-21.2,z0:-1.6,z1:1.6,walls:["aft","fore","port",["stbd",1.1]],note:"A small magazine for filled cartridges for the after guns.",source:Kt.mckay},{deck:"orlop",name:"Purser's store",x0:-23.5,x1:-20.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"The purser's stores and cabin: clothing, tobacco, soap and candles, sold to the men.",source:Kt.mckay},{deck:"orlop",name:"Marines' clothes store",x0:-20.2,x1:-18.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"Store for the uniforms and kit of the 146 Royal Marines aboard.",source:Kt.mckay},{deck:"orlop",name:"Steward's room",x0:-23.5,x1:-21.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"The steward issued provisions from the bread room and stores.",source:Kt.mckay},{deck:"orlop",name:"Surgeon's cabin",x0:-21.2,x1:-18.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"William Beatty, the surgeon, kept his cabin next to the cockpit.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"orlop",name:"Cockpit",x0:-18.2,x1:-11,z0:-1.6,z1:1.6,ly:.9,note:"In battle the surgeon's station. The wounded were carried down here by the hundred; Beatty operated by lantern light below the waterline, safe from shot.",source:`${Kt.hv}; ${Kt.beatty}`},{deck:"orlop",name:"Midshipmen's berth (where Nelson died)",x0:-17,x1:-11,z0:-6.4,z1:-1.6,walls:["aft","fore",["stbd",3]],lx:-13,lz:-3.6,note:"Nelson was carried to one of the midshipmen's berths on the larboard side, and died here at about 4:30 pm, three hours after he was shot. His last words were recorded by Beatty and the chaplain. A lantern marks the spot; it was moved about 6 m forward after Goodwin's study.",source:`${Kt.beatty}; ${Kt.nmrn}`},{deck:"orlop",name:"Pump room",x0:-4,x1:-1,z0:-1.5,z1:1.5,ly:.9,note:"Around the mainmast, over the well, where the pump chains ran down.",source:Kt.mckay},{deck:"orlop",name:"Cable tiers",x0:.5,x1:12,z0:2.6,z1:6,lx:6.5,lz:4.2,note:"The great hemp anchor cables were coiled down here on both sides when the anchors were up.",source:Kt.mckay},{deck:"orlop",name:"Boatswain's store",x0:14,x1:17.5,z0:1.6,z1:6,walls:["aft",["port",1.8],"fore"],note:"The boatswain's cabin and store: spare rope, blocks and rigging stores.",source:Kt.mckay},{deck:"orlop",name:"Carpenter's workshop",x0:14,x1:17.5,z0:-6,z1:-1.6,walls:["aft",["stbd",1.8],"fore"],note:"The carpenter and his crew plugged shot holes from the carpenter's walk along the hull during the battle.",source:Kt.mckay},{deck:"orlop",name:"Sail room",x0:17.5,x1:20.6,z0:.4,z1:5.4,walls:[["port",1.5],"fore"],note:"Spare sails, kept forward and dry.",source:Kt.mckay},{deck:"orlop",name:"Rope and block room",x0:17.5,x1:20.6,z0:-5.4,z1:-.4,walls:[["stbd",1.5],"fore"],note:"Spare cordage and blocks.",source:Kt.mckay},{deck:"orlop",name:"Fore hanging magazine",x0:20.6,x1:23.6,z0:-1.8,z1:1.8,walls:[["aft",1.8],"fore","port","stbd"],note:"Filled cartridges ready for the forward guns, with ladders down to the grand magazine. The light-room entry was above the foremast step.",source:Kt.mckay},{deck:"hold",name:"After hold",x0:-20,x1:-4.5,z0:-4,z1:4,lx:-10,ly:1.4,note:"Seven compartments, among them the after powder room and the flour store.",source:`${Kt.mckay} (low-medium confidence)`},{deck:"hold",name:"Well and shot lockers",obj:!0,x0:-4.5,x1:-.5,z0:-1.8,z1:1.8,walls:["aft","fore","port","stbd"],note:"Around the foot of the mainmast: the well, where the pumps drew from, with the shot lockers forward and aft of it.",source:`${Kt.mckay}; Longridge`},{deck:"hold",name:"Main hold",x0:-.5,x1:15,z0:-4,z1:4,lx:7,ly:1.4,note:"Water casks bedded on iron and shingle ballast: enough fresh water for several months, with beer, salt beef and pork.",source:Kt.mckay},{deck:"hold",name:"Filling room",x0:15,x1:18,z0:-3,z1:3,walls:[["aft",3],["fore",3]],note:"Where powder was made up into cartridges, lit only from the light room through glass.",source:`${Kt.mckay}; ${Kt.wp}`},{deck:"hold",name:"Grand magazine",x0:18,x1:23,z0:-3,z1:3,walls:["fore"],note:"Forward, copper-lined, below the waterline. It held the ship's main stock of gunpowder; men wore felt slippers and nothing iron was allowed inside. The layout changed after 1805.",source:`${Kt.mckay}; ${Kt.wp}`}];function aM(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");for(let n=0;n<8;n++){let s=120+n*37%30;t.fillStyle=`rgb(${s},${s*.82|0},${s*.6|0})`,t.fillRect(n*32,0,32,256),t.fillStyle="rgba(40,25,10,0.6)",t.fillRect(n*32,0,2,256)}let e=new xn(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=Wn,e}function lM(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");t.fillStyle="#cfc5ad",t.fillRect(0,0,256,256),t.strokeStyle="rgba(90,70,40,0.45)",t.lineWidth=4;for(let[n,s,r,o]of[[14,14,100,100],[142,14,100,100],[14,142,100,100],[142,142,100,100]])t.strokeRect(n,s,r,o);t.fillStyle="rgba(90,70,40,0.25)",t.fillRect(0,124,256,8),t.fillRect(124,0,8,256);let e=new xn(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=Wn,e}function cM(i,t,e,n,s){let r=Math.hypot(e.x-t.x,e.z-t.z),o=vm[i],a=c=>o?ft(o,c)-.33:ft(i,c)+2,l=[];if(n!=null){let c=Math.max(0,n-.5),h=Math.min(r,n+.5);c>.05&&l.push([0,c,0]),h<r-.05&&l.push([h,r,0]),l.push([c,h,1.75])}else l.push([0,r,0]);for(let[c,h,p]of l){let f={x:ue(t.x,e.x,c/r),z:ue(t.z,e.z,c/r)},u={x:ue(t.x,e.x,h/r),z:ue(t.z,e.z,h/r)},g=new de,y=ft(i,f.x)+p,m=ft(i,u.x)+p,d=a(f.x),_=a(u.x),v=[f.x,y,f.z,u.x,m,u.z,u.x,_,u.z,f.x,d,f.z],x=[c/1.6,y/1.6,h/1.6,m/1.6,h/1.6,_/1.6,c/1.6,d/1.6];g.setAttribute("position",new ie(v,3)),g.setAttribute("uv",new ie(x,2)),g.setIndex([0,1,2,0,2,3]),g.computeVertexNormals(),s.push(g)}}var Jc=(i,t,e)=>{let n=yt(t,ft(i,t)+1)-.1;return Math.max(-n,Math.min(n,e))};function ld(){let i=[];for(let t of ra)for(let e of t.walls||[]){let[n,s]=Array.isArray(e)?e:[e,null],r,o,a=0;if(n==="fore"||n==="aft"){let l=n==="fore"?t.x1:t.x0;r={x:l,z:Jc(t.deck,l,t.z0)},o={x:l,z:Jc(t.deck,l,t.z1)},a=r.z-t.z0}else{let l=n==="stbd"?t.z1:t.z0;r={x:t.x0,z:Jc(t.deck,t.x0,l)},o={x:t.x1,z:Jc(t.deck,t.x1,l)}}i.push({deck:t.deck,a:r,b:o,door:s==null?null:s-a})}return i}var jc=class{constructor(t,e,n){this.group=new zt,this.group.name="rooms",t.add(this.group);let s=[],r=[],o=[];for(let l of ld()){let c=l.deck==="lower"?r:l.deck==="orlop"||l.deck==="hold"?o:s;cM(l.deck,l.a,l.b,l.door,c)}let a=aM();this.clearable=[];for(let[l,c,h]of[[s,lM(),!0],[r,a,!0],[o,a,!1]]){if(!l.length)continue;let p=new W(mt(l),new re({map:c,roughness:.85,side:De}));p.castShadow=p.receiveShadow=!0,p.name="bulkheads",this.group.add(p),h&&this.clearable.push(p)}this.renderer=new Kc,this.renderer.domElement.className="labels",e.appendChild(this.renderer.domElement),this.labels=[];for(let l of ra){let c=document.createElement("div");c.className="room-label",c.textContent=l.name,c.onclick=u=>{u.stopPropagation(),n(l)};let h=new Zc(c),p=l.lx??(l.x0+l.x1)/2,f=l.lz??(l.z0+l.z1)/2;h.position.set(p,ft(l.deck,p)+(l.ly??1.1),f),h.userData.room=l,this.group.add(h),this.labels.push(h)}this.level="all",this.enabled=!0,this.refresh()}setLevel(t){this.level=t,this.refresh()}setCleared(t){for(let e of this.clearable)e.visible=!t}setEnabled(t){this.enabled=t,this.refresh()}refresh(){for(let t of this.labels){let e=t.userData.room;t.visible=this.enabled&&this.level!=="all"&&Mm[e.deck]===this.level}}render(t,e,n,s){this.renderer.setSize(n,s),this.renderer.render(t,e)}};var Xr=["hold","orlop","lower","middle","upper","qd","poop"],hM=.24,oa=-31,aa=-8.6,Ii=.1,Xs=620,Qc=172;function uM(){let i=new zt,t=_=>new re({color:_,roughness:.8}),e=t("#22335a"),n=t("#e4ddcc"),s=t("#d9a882"),r=t("#151515"),o=t("#d8d0c0"),a=[],l=[];for(let _ of[1,-1]){let v=new zt;v.position.set(0,.93,_*.1);let x=new W(new Oe(.075,.72,4,8),n);x.position.y=-.44;let E=new W(new kt(.24,.07,.11),r);E.position.set(.05,-.9,0),v.add(x,E),i.add(v),a.push(v);let S=new zt;S.position.set(0,1.44,_*.25);let b=new W(new Oe(.058,.48,4,8),e);b.position.y=-.3;let M=new W(new fe(.06,8,6),s);M.position.y=-.6,S.add(b,M),i.add(S),l.push(S)}let c=new W(new kt(.24,.58,.42),e);c.position.y=1.2;let h=new W(new kt(.02,.3,.14),o);h.position.set(.125,1.32,0);let p=new W(new Me(.09,.025,6,12),r);p.rotation.x=Math.PI/2,p.position.y=1.5;let f=new W(new fe(.115,12,10),s);f.position.y=1.62;let u=new W(new fe(.118,12,8,0,Math.PI*2,0,Math.PI/2),t("#3a2614"));u.position.y=1.625,u.rotation.z=.3;let g=new W(new Oe(.02,.18,3,6),t("#3a2614"));g.position.set(-.12,1.5,0);let y=new W(new Zt(.13,.14,.1,14),r);y.position.y=1.74;let m=new W(new Zt(.2,.2,.015,16),r);m.position.y=1.695;let d=new W(new Zt(.142,.142,.03,14),t("#e8e0c8"));return d.position.y=1.71,i.add(c,h,p,f,u,g,y,m,d),i.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),i.userData={legs:a,arms:l},i}function dM(i){switch(i){case"hold":return[-20.6,19.6];case"orlop":return[ve(Bt.orlop)+.5,Be(Bt.orlop)-.7];case"lower":case"middle":return[ve(Bt[i])+.45,Be(Bt[i])-.6];case"upper":return[ve(Bt.upper)+.8,Be(Bt.upper)-.8];case"qd":return[ve(Bt.qd)+.6,Be(Bt.qd)-.6];default:return[ve(Bt.poop)+.6,$e-.15]}}var Sm=i=>i==="qd"||i==="poop";function fM(i){return Sm(i)||i==="hold"?[]:i==="orlop"?Cn.filter(t=>t.x>-14&&t.x<15):Cn}var cd=class{constructor(){this.grids=Object.fromEntries(Xr.map(t=>[t,new Uint8Array(Xs*Qc)])),this.portals=[]}cell(t,e){let n=Math.floor((t-oa)/Ii),s=Math.floor((e-aa)/Ii);return n<0||s<0||n>=Xs||s>=Qc?-1:s*Xs+n}free(t,e,n){let s=this.cell(e,n);return s>=0&&this.grids[t][s]===1}build(t){let e=Object.fromEntries(Xr.map(u=>[u,[]])),n=(u,g,y,m,d,_=0)=>e[u].push({t:"box",cx:g,cz:y,hx:m,hz:d,c:Math.cos(_),s:Math.sin(_)}),s=(u,g,y,m)=>e[u].push({t:"circle",cx:g,cz:y,r:m}),r=(u,g,y,m,d,_=.06)=>e[u].push({t:"seg",ax:g,az:y,bx:m,bz:d,w:_});for(let u of Xr)for(let g of fM(u))n(u,g.x,0,g.w/2+.2,g.d/2+.2);let o=t.cur,a={lower:"lower",middle:"middle",upper:"upper",qd:"qd",fc:"qd",carronade:"qd"};for(let u of t.guns.ports){let g=u.tier,y=-.9+o.runOut*1.6,m=y-g.len-.15,d=Math.min(y,0),_=u.basis.p.clone().addScaledVector(u.out,(m+d)/2);n(a[g.name],_.x,_.z,(d-m)/2,g.carronade?.4:.5,Math.atan2(u.out.z,u.out.x))}for(let u of Object.values(Ci))for(let g of Xr)(g!=="poop"||u.x<$e)&&s(g,u.x,0,.62);for(let[u]of[["orlop"],["lower"],["middle"]])for(let g=-20;g<20;g+=2.5)Cn.some(y=>Math.abs(g-y.x)<y.w/2+.3)||u==="orlop"&&(g<-14||g>15)||s(u,g,0,.12);for(let u of["middle","lower"])s(u,-6.4,0,u==="middle"?.95:.8),s(u,3.7,0,u==="middle"?.72:.62);n("qd",$e-1,0,.95,.55),n("qd",$e+1,0,.4,.65),n("qd",-8.8,0,1.35,1.05),n("qd",Ze+.8,0,.5,.5),n("qd",20.3,1.6,.35,.35),this.portals=[];let l=(u,g,y,m,d,_,v,x)=>{n(u,(y.x+m.x)/2,(y.z+m.z)/2,Math.abs(m.x-y.x)/2+.42*(y.x===m.x?1:0)+.05,Math.abs(m.z-y.z)/2+.42*(y.z===m.z?1:0)+.05),this.portals.push({lo:u,hi:g,rail:[y,m],foot:d,footDir:_,top:v,topDir:x})},c=["orlop","lower","middle","upper"];for(let u=0;u<c.length-1;u++)for(let g of Cn.filter(y=>y.ladder)){if(c[u]==="orlop"&&!(g.x>-14&&g.x<15))continue;let y=xc(g,u%2?-1:1),m=y.side;l(c[u],c[u+1],{x:y.x,z:y.zFoot},{x:y.x,z:y.zTop},{x:y.x,z:y.zFoot+m*.32},{x:0,z:-m},{x:y.x,z:m*(g.d/2+.68)},{x:0,z:-m})}{let u=yc(),g=u.hatch;l("hold","orlop",{x:u.x,z:u.zFoot},{x:u.x,z:u.zTop},{x:u.x,z:u.zFoot-.32},{x:0,z:1},{x:u.x,z:-(g.d/2+.68)},{x:0,z:1})}for(let u of vc)for(let g of[1,-1]){let y=Math.sign(u.run),m=g*u.z;l(u.from,u.to,{x:u.x,z:m},{x:u.x+u.run,z:m},{x:u.x-y*.5,z:m},{x:y,z:0},{x:u.x+u.run+y*.6,z:m},{x:-y,z:0})}let h={qd:"qd",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"};for(let u of ld()){let g=h[u.deck];if(!g||t.isCleared&&g!=="orlop"&&g!=="hold")continue;let y=Math.hypot(u.b.x-u.a.x,u.b.z-u.a.z),m=d=>[u.a.x+(u.b.x-u.a.x)*d/y,u.a.z+(u.b.z-u.a.z)*d/y];if(u.door==null)r(g,u.a.x,u.a.z,u.b.x,u.b.z);else{let d=Math.max(0,u.door-.5),_=Math.min(y,u.door+.5);d>.05&&r(g,u.a.x,u.a.z,...m(d)),_<y-.05&&r(g,...m(_),u.b.x,u.b.z)}}{let u=$e-4.2,g=yt(u,ft("qd",u)+1)-.3;r("qd",u,-g,u,-.5),r("qd",u,.5,u,g)}let p=new Dn,f=new Rt;t.furnishing.traverse(u=>{if(!(!u.isInstancedMesh||["hammock","lantern","plate","coil"].includes(u.name)||u.name.startsWith("gear-"))){u.geometry.boundingBox||u.geometry.computeBoundingBox();for(let g=0;g<u.count;g++){if(u.getMatrixAt(g,f),f.elements[0]===0&&f.elements[5]===0)continue;p.copy(u.geometry.boundingBox).applyMatrix4(f);let y=Xr.slice().reverse().find(m=>{let d=qi(m==="qd"?"qd":m,(p.min.x+p.max.x)/2,0);return p.min.y>d-.4&&p.min.y<d+1});!y||p.max.y-p.min.y<.05||n(y,(p.min.x+p.max.x)/2,(p.min.z+p.max.z)/2,(p.max.x-p.min.x)/2,(p.max.z-p.min.z)/2)}}});for(let u of Xr){let g=this.grids[u],[y,m]=dM(u),d=u;for(let _=0;_<Xs;_++){let v=oa+(_+.5)*Ii,x=v>y&&v<m,E=u==="hold"?_c:ft(d,v),S=yt(v,E+.5)-(Sm(u)||u==="upper"?.32:0)-.35;for(let b=0;b<Qc;b++){let M=aa+(b+.5)*Ii,w=x&&Math.abs(M)<S;w&&u==="qd"&&v>ln&&v<Ze&&(w=Math.abs(M)>S+.35-Rp+.25),g[b*Xs+_]=w?1:0}}for(let _ of e[u])this.stamp(g,_)}}stamp(t,e){let n=hM,s,r,o,a;if(e.t==="circle")s=e.cx-e.r-n,r=e.cx+e.r+n,o=e.cz-e.r-n,a=e.cz+e.r+n;else if(e.t==="box"){let f=Math.abs(e.c)*e.hx+Math.abs(e.s)*e.hz+n,u=Math.abs(e.s)*e.hx+Math.abs(e.c)*e.hz+n;s=e.cx-f,r=e.cx+f,o=e.cz-u,a=e.cz+u}else s=Math.min(e.ax,e.bx)-n-e.w,r=Math.max(e.ax,e.bx)+n+e.w,o=Math.min(e.az,e.bz)-n-e.w,a=Math.max(e.az,e.bz)+n+e.w;let l=Math.max(0,Math.floor((s-oa)/Ii)),c=Math.min(Xs-1,Math.floor((r-oa)/Ii)),h=Math.max(0,Math.floor((o-aa)/Ii)),p=Math.min(Qc-1,Math.floor((a-aa)/Ii));for(let f=l;f<=c;f++){let u=oa+(f+.5)*Ii;for(let g=h;g<=p;g++){let y=aa+(g+.5)*Ii,m;if(e.t==="circle")m=Math.hypot(u-e.cx,y-e.cz)<e.r+n;else if(e.t==="box"){let d=u-e.cx,_=y-e.cz,v=d*e.c+_*e.s,x=-d*e.s+_*e.c;m=Math.abs(v)<e.hx+n&&Math.abs(x)<e.hz+n}else{let d=e.bx-e.ax,_=e.bz-e.az,v=d*d+_*_||1,x=Math.max(0,Math.min(1,((u-e.ax)*d+(y-e.az)*_)/v));m=Math.hypot(u-(e.ax+d*x),y-(e.az+_*x))<e.w+n}m&&(t[g*Xs+f]=0)}}}},th=class{constructor(t){this.figure=uM(),this.figure.visible=!1,t.add(this.figure),this.map=new cd,this.level="qd",this.x=-9.5,this.z=2.4,this.heading=0,this.phase=0,this.climb=null,this.target=null,this.blocked=0,this.lastPortal=null,this.version=-1}setActive(t,e){this.figure.visible=t,t&&this.rebuild(e)}rebuild(t){this.map.build(t),this.version=t.layoutVersion,this.map.free(this.level,this.x,this.z)||this.respawn()}respawn(){for(let t of[this.level,"qd"])for(let e=0;e<12;e+=.2)for(let n=0;n<Math.PI*2;n+=.4){let s=this.x+Math.cos(n)*e,r=this.z+Math.sin(n)*e;if(this.map.free(t,s,r)){this.level=t,this.x=s,this.z=r;return}}}floorY(t=this.level,e=this.x,n=this.z){return qi(t,e,n)}walkTo(t,e){this.target={x:t,z:e},this.blocked=0}update(t,e,n,s){s.layoutVersion!==this.version&&this.rebuild(s);let r=this.figure.userData;if(this.climb){let u=this.climb;u.t=Math.min(1,u.t+t/u.dur);let g=u.t,y=u.path,m=Math.min(y.length-2,Math.floor(g*(y.length-1))),d=g*(y.length-1)-m,_=y[m],v=y[m+1];this.x=_.x+(v.x-_.x)*d,this.z=_.z+(v.z-_.z)*d;let x=_.y+(v.y-_.y)*d;this.figure.position.set(this.x,x,this.z),this.phase+=t*9,r.arms.forEach((E,S)=>{E.rotation.z=2.3+Math.sin(this.phase+S*Math.PI)*.35}),r.legs.forEach((E,S)=>{E.rotation.z=.4+Math.sin(this.phase+S*Math.PI)*.4}),u.t>=1&&(this.level=u.to,this.climb=null,this.lastPortal=u.portalKey,r.arms.forEach(E=>{E.rotation.z=0}));return}let o=e.x,a=e.z;if(this.target&&!o&&!a){let u=this.target.x-this.x,g=this.target.z-this.z,y=Math.hypot(u,g);y<.12?this.target=null:(o=u/y,a=g/y)}else(o||a)&&(this.target=null);let l=Math.hypot(o,a),c=0;if(l>.01){o/=l,a/=l,c=n?3.2:1.5;let u=c*t,g=this.x+o*u,y=this.z+a*u,m=!1;this.map.free(this.level,g,y)?(this.x=g,this.z=y,m=!0):this.map.free(this.level,g,this.z)?(this.x=g,m=!0):this.map.free(this.level,this.x,y)&&(this.z=y,m=!0),!m&&this.target&&(this.blocked+=t)>.5&&(this.target=null),this.heading=Math.atan2(-a,o),this.checkPortals(o,a,s)}let h=Math.min(1,c/1.5)*(c>2?.75:.55);c>0&&(this.phase+=t*(c>2?11:7.5)),r.legs.forEach((u,g)=>{u.rotation.z=Math.sin(this.phase+g*Math.PI)*h}),r.arms.forEach((u,g)=>{u.rotation.z=-Math.sin(this.phase+g*Math.PI)*h*.8}),c||(r.legs.forEach(u=>{u.rotation.z*=.8}),r.arms.forEach(u=>{u.rotation.z*=.8}));let p=this.figure.rotation.y,f=this.heading-p;f=Math.atan2(Math.sin(f),Math.cos(f)),this.figure.rotation.y=p+f*Math.min(1,t*12),this.figure.position.set(this.x,this.floorY(),this.z)}checkPortals(t,e,n){for(let s=0;s<this.map.portals.length;s++){let r=this.map.portals[s];for(let o of["foot","top"]){if((o==="foot"?r.lo:r.hi)!==this.level)continue;let l=r[o],c=o==="foot"?r.footDir:r.topDir,h=`${s}${o}`;if(!(Math.hypot(this.x-l.x,this.z-l.z)<.55)){this.lastPortal===h&&(this.lastPortal=null);continue}if(this.lastPortal===h||t*c.x+e*c.z<.6)continue;let f=o==="foot"?r.top:r.foot,u=o==="foot"?r.hi:r.lo,[g,y]=r.rail,m={x:g.x,y:qi(r.lo,g.x,g.z),z:g.z},d={x:y.x,y:qi(r.hi,y.x,y.z),z:y.z},_={x:l.x,y:this.floorY(),z:l.z},v={x:f.x,y:qi(u,f.x,f.z),z:f.z},x=o==="foot"?[_,m,d,v]:[_,d,m,v];this.climb={path:x,t:0,dur:1.9,to:u,portalKey:`${s}${o==="foot"?"top":"foot"}`};let E=(o==="foot"?1:-1)*(y.x-g.x),S=(o==="foot"?1:-1)*(y.z-g.z);this.heading=Math.atan2(-S,E),this.figure.rotation.y=this.heading,this.target=null;return}}}};var pM={hold:"hold",orlop:"orlop",lower:"lower",middle:"middle",upper:"upper",qd:"quarterdeck",poop:"poop"},hd=on.degToRad(40),eh=class{constructor({ship:t,cut:e,rooms:n,renderer:s,ui:r}){this.ship=t,this.cut=e,this.rooms=n,this.renderer=s,this.ui=r,this.sailor=new th(t.body),this.camera=new us(-1,1,1,-1,1,2e3),this.zoom=9,this.theta=on.degToRad(135),this.thetaTarget=this.theta,this.focus=new A,this.keys=new Set,this.active=!1,this.level=null,this.ray=new Uo,window.addEventListener("keydown",l=>{this.active&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(l.code)&&l.preventDefault(),l.code==="KeyQ"&&(this.thetaTarget-=Math.PI/2),l.code==="KeyE"&&(this.thetaTarget+=Math.PI/2),this.keys.add(l.code))}),window.addEventListener("keyup",l=>this.keys.delete(l.code)),window.addEventListener("blur",()=>this.keys.clear());let o=s.domElement;o.addEventListener("wheel",l=>{this.active&&(l.preventDefault(),this.zoom=on.clamp(this.zoom*(l.deltaY>0?1.12:1/1.12),4,40))},{passive:!1});let a=null;o.addEventListener("pointerdown",l=>{this.active&&(a={x:l.clientX,y:l.clientY})}),o.addEventListener("pointerup",l=>{!this.active||!a||(Math.hypot(l.clientX-a.x,l.clientY-a.y)<6&&this.clickTo(l.clientX,l.clientY),a=null)})}enter(){this.active=!0,this.saved={level:this.cut.level,cutZ:this.cut.cutZ},this.cut.setCut(0),this.sailor.setActive(!0,this.ship),this.level=null,this.snap=!0}exit(){this.active=!1,this.sailor.setActive(!1,this.ship),this.cut.setLevel(this.saved?.level??"all"),this.rooms.setLevel(this.saved?.level??"all"),this.ui?.setLevel(this.saved?.level??"all")}clickTo(t,e){let n=new Q(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.ray.setFromCamera(n,this.camera);let s=new Rt().copy(this.ship.body.matrixWorld).invert(),r=this.ray.ray.origin.clone().applyMatrix4(s),o=this.ray.ray.direction.clone().transformDirection(s),a=this.sailor.floorY();if(Math.abs(o.y)<1e-4)return;let l=(a-r.y)/o.y;l<0||this.sailor.walkTo(r.x+o.x*l,r.z+o.z*l)}update(t){let e=this.keys,n=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0),r=Math.cos(this.theta),o=Math.sin(this.theta),a={x:-r*n+o*s,z:-o*n-r*s};this.sailor.update(t,a,e.has("ShiftLeft")||e.has("ShiftRight"),this.ship);let l=pM[this.sailor.level];if(l!==this.level&&(this.level=l,this.cut.setLevel(l),this.rooms.setLevel(l),this.ui?.setLevel(l)),this.sailor.level==="hold"||this.sailor.level==="orlop"){let u=Math.sin(this.theta)>=0?1:-1;this.cut.setCutPlane(u*this.sailor.z+2.4,u)}else this.cut.cutZ<50&&this.cut.setCutPlane(1e5,1);this.theta+=(this.thetaTarget-this.theta)*Math.min(1,t*6);let c=this.sailor.figure.position.clone().add(new A(0,1,0));this.ship.body.localToWorld(c),this.snap?(this.focus.copy(c),this.snap=!1):this.focus.lerp(c,Math.min(1,t*6));let p=new A(Math.cos(this.theta)*Math.cos(hd),Math.sin(hd),Math.sin(this.theta)*Math.cos(hd)).multiplyScalar(160);this.camera.position.copy(this.focus).add(p),this.camera.lookAt(this.focus);let f=window.innerWidth/window.innerHeight;Object.assign(this.camera,{left:-this.zoom*f,right:this.zoom*f,top:this.zoom,bottom:-this.zoom}),this.camera.updateProjectionMatrix()}};var Ie=new URLSearchParams(location.search),ei=new dc({antialias:!0,preserveDrawingBuffer:Ie.has("shot")});ei.setPixelRatio(Math.min(window.devicePixelRatio,2));ei.setSize(window.innerWidth,window.innerHeight);ei.toneMapping=zo;ei.toneMappingExposure=.55;ei.shadowMap.enabled=!0;ei.shadowMap.type=_l;document.getElementById("app").appendChild(ei.domElement);var Zi=new Ps,Di=new Mn(40,window.innerWidth/window.innerHeight,.2,9e3);Zi.userData.camera=Di;var qs=new Mc(ei,Zi),mM=qs.sun;qs.setTime("day");var gM=Zi.environment,rh=new Ac(gM);Zi.add(rh.mesh);var He=new qc(Zi,rh);Zi.add(He.root);var nh=document.getElementById("info");function xM(i){nh.innerHTML=`<span class="close">\xD7</span><h2>${i.name}</h2><div class="deck">${Em[i.deck]}</div>
    <div>${i.note}</div>${i.source?`<div class="src">Source: ${i.source}</div>`:""}`,nh.style.display="block",nh.querySelector(".close").onclick=()=>{nh.style.display="none"}}var Ys=new jc(He.body,document.body,xM);He.clearables.push(Ys);Ys.setCleared(He.isCleared);var Li=new $c(He,mM),zn=new gc(Di,ei.domElement);zn.enableDamping=!0;zn.dampingFactor=.08;zn.maxPolarAngle=Math.PI*.495;zn.minDistance=4;zn.maxDistance=600;var wm={quarter:[[78,24,96],[0,22,0]],broadside:[[4,18,132],[2,24,0]],bow:[[92,14,34],[12,20,0]],stern:[[-84,20,-46],[-14,16,0]],deck:[[-21,15.5,7],[10,9,0]],aloft:[[30,76,52],[0,30,0]],galleries:[[-44,9,24],[-26,7,0]],head:[[44,9,16],[30,8,0]],inside:[[-26,34,46],[0,2,0]]};function ud(i,t=!1){let e=wm[i];if(!e)return;let n=new A(...e[0]),s=new A(...e[1]);t?(Di.position.copy(n),zn.target.copy(s)):$n={p0:Di.position.clone(),t0:zn.target.clone(),p1:n,t1:s,k:0}}var $n=null,Ss=Ie.get("ui")==="0"?null:new Yc({onPose:i=>{He.setPose(i);let t=Es[i].wind;t&&(He.setWind(t.dir,t.str),Ss?.windSet(t.dir,t.str))},onView:i=>ud(i),onFire:()=>He.fireBroadside(),onWind:(i,t)=>He.setWind(i,t),wind:{dir:+(Ie.get("wind")??-135),str:+(Ie.get("windStr")??.6)},levels:Object.keys(ad),onLevel:i=>{Li.setLevel(i),Ys.setLevel(i)},onLabels:i=>Ys.setEnabled(i),onCut:i=>Li.setCut(i),onXray:i=>Li.setXray(i),onMode:i=>dd(i),onTime:i=>Tm(i),poses:He.poseNames(),views:Object.keys(wm)}),Hn=new eh({ship:He,cut:Li,rooms:Ys,renderer:ei,ui:Ss});qs.nightMaterials.push(...He.nightMaterials);var _M=new Ec(He,He.lanterns);function Tm(i){qs.setTime(i,rh),He.wake.uniforms.uLight.value=qs.light,He.effects.light=qs.light,Ss?.setTime(i)}Tm(Ie.get("time")||"day");function dd(i){i==="sailor"&&!Hn.active&&(Hn.enter(),zn.enabled=!1),i==="free"&&Hn.active&&(Hn.exit(),zn.enabled=!0)}Ss?.setMode("free");He.setPose(Ie.get("pose")||"sail",!0);{let i=Es[He.pose].wind,t=+(Ie.get("wind")??i?.dir??-135),e=+(Ie.get("windStr")??i?.str??.6);He.setWind(t,e,!0),Ss?.windSet(t,e)}ud(Ie.get("view")||"quarter",!0);if(Ie.has("cam")){let i=Ie.get("cam").split(",").map(Number);Di.position.set(i[0],i[1],i[2]),zn.target.set(i[3],i[4],i[5])}Ss?.setPose(He.pose);Ie.has("level")&&(Li.setLevel(Ie.get("level")),Ys.setLevel(Ie.get("level")),Ss?.setLevel(Ie.get("level")));Ie.has("cut")&&Li.setCut(+Ie.get("cut"));Ie.has("xray")&&Li.setXray(!0);Ie.has("fire")&&setTimeout(()=>He.fireBroadside(),300);Ie.get("mode")==="sailor"&&(Ie.has("sx")&&(Hn.sailor.x=+Ie.get("sx"),Hn.sailor.z=+Ie.get("sz"),Hn.sailor.level=Ie.get("sl")||"qd"),Ie.has("zoom")&&(Hn.zoom=+Ie.get("zoom")),dd("sailor"),Ss?.setMode("sailor"));window.addEventListener("resize",()=>{Di.aspect=window.innerWidth/window.innerHeight,Di.updateProjectionMatrix(),ei.setSize(window.innerWidth,window.innerHeight)});var yM=new Fo,sh=Ie.has("t")?parseFloat(Ie.get("t")):null,ih=sh??0,bm=0;function Rm(){let i=Math.min(yM.getDelta(),.05);if(ih=sh??ih+i,He.update(ih,sh!=null?1/30:i),Li.update(),rh.update(ih,He.distance),$n){$n.k=Math.min(1,$n.k+i/1.6);let n=$n.k<.5?2*$n.k**2:1-(-2*$n.k+2)**2/2;Di.position.lerpVectors($n.p0,$n.p1,n),zn.target.lerpVectors($n.t0,$n.t1,n),$n.k>=1&&($n=null)}let t=Hn.active?Hn.sailor.figure.position.clone():He.body.worldToLocal(zn.target.clone());_M.update(i,t,qs.night,Li.uniforms.uCutY.value);let e=Di;Hn.active?(Hn.update(sh!=null?1/30:i),e=Hn.camera):zn.update(),ei.render(Zi,e),Ys.render(Zi,e,window.innerWidth,window.innerHeight),bm++,bm===3&&(window.__ready=!0),requestAnimationFrame(Rm)}Rm();window.__victory={ship:He,camera:Di,controls:zn,scene:Zi,setView:ud,cut:Li,iso:Hn,setMode:dd,ROOMS:ra,clashes:()=>mm(He)};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
