(()=>{var ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,Pc=1,Iu=2;var Kr=1,Ma=2,Ks=3,Gi=0,$e=1,Ne=2,ci=0,Wi=1,jr=2,Ic=3,Lc=4,Lu=5;var ls=100,Du=101,Nu=102,Uu=103,Fu=104,Ou=200,Bu=201,Hu=202,zu=203,Dc=204,Nc=205,ku=206,Vu=207,Gu=208,Wu=209,Xu=210,qu=211,Yu=212,Zu=213,$u=214,Vo=0,Go=1,Wo=2,Fs=3,Xo=4,qo=5,Yo=6,Zo=7,Uc=0,Ju=1,Ku=2,Zn=0,Fc=1,Oc=2,Bc=3,Qr=4,Hc=5,zc=6,kc=7;var Vc=300,Xi=301,cs=302,Sa=303,ba=304,to=306,si=1e3,ii=1001,$o=1002,Ge=1003,ju=1004;var eo=1005;var Ze=1006,Ea=1007;var qi=1008;var hn=1009,Gc=1010,Wc=1011,js=1012,Ta=1013,$n=1014,Nn=1015,Jn=1016,wa=1017,Aa=1018,Qs=1020,Xc=35902,qc=35899,Yc=1021,Zc=1022,Un=1023,ri=1026,Yi=1027,Ra=1028,Ca=1029,Zi=1030,Pa=1031;var Ia=1033,no=33776,io=33777,so=33778,ro=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,Ha=37488,za=37489,oo=37490,ka=37491,Va=37808,Ga=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,$a=37815,Ja=37816,Ka=37817,ja=37818,Qa=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,ao=36285,al=36286;var Mr=2300,Jo=2301,zo=2302,yc=2303,vc=2400,Mc=2401,Sc=2402;var Qu=3200;var ll=0,td=1,bi="",Oe="srgb",Sr="srgb-linear",br="linear",fe="srgb";var ko=7680;var ed=519,nd=512,id=513,sd=514,cl=515,rd=516,od=517,hl=518,ad=519,ld=35044,ul=35048;var $c="300 es",Wn=2e3,Os=2001;function Uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){let i=Er("canvas");return i.style.display="block",i}var tu={},Bs=null;function Jc(...i){let t="THREE."+i.shift();Bs?Bs("log",t,...i):console.log(t,...i)}function hd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=hd(i);let t="THREE."+i.shift();if(Bs)Bs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=hd(i);let t="THREE."+i.shift();if(Bs)Bs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rs(...i){let t=i.join(" ");t in tu||(tu[t]=!0,kt(...i))}function ud(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dd={[Vo]:Go,[Wo]:Yo,[Xo]:Zo,[Fs]:qo,[Go]:Vo,[Yo]:Wo,[Zo]:Xo,[qo]:Fs},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,_r=Math.PI/180,Hs=180/Math.PI;function hs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function Of(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bf(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function Hf(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function zf(i,t=1){return t-Math.abs(Kc(i,t*2)-t)}function kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wf(i,t){return i+Math.random()*(t-i)}function Xf(i){return i*(.5-Math.random())}function qf(i){i!==void 0&&(eu=i);let t=eu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yf(i){return i*_r}function Zf(i){return i*Hs}function $f(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tn={DEG2RAD:_r,RAD2DEG:Hs,generateUUID:hs,clamp:Kt,euclideanModulo:Kc,mapLinear:Of,inverseLerp:Bf,lerp:xr,damp:Hf,pingpong:zf,smoothstep:kf,smootherstep:Vf,randInt:Gf,randFloat:Wf,randFloatSpread:Xf,seededRandom:qf,degToRad:Yf,radToDeg:Zf,isPowerOfTwo:$f,ceilPowerOfTwo:Jf,floorPowerOfTwo:Kf,setQuaternionFromProperEuler:jf,normalize:sn,denormalize:Ns},at=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,a=Math.sin(a*v)/E,l=l*p+u*a,c=c*p+d*a,h=h*p+g*a,f=f*p+x*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+g*a,f=f*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new R,nu=new Be,Zt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],E=s[4],_=s[7],S=s[2],M=s[5],w=s[8];return r[0]=o*x+a*v+l*S,r[3]=o*m+a*E+l*M,r[6]=o*p+a*_+l*w,r[1]=c*x+h*v+f*S,r[4]=c*m+h*E+f*M,r[7]=c*p+h*_+f*w,r[2]=u*x+d*v+g*S,r[5]=u*m+d*E+g*M,r[8]=u*p+d*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new Zt,iu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var re=Qf();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vs,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vs===void 0&&(vs=Er("canvas")),vs.width=t.width,vs.height=t.height;let s=vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tp=0,zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var ep=0,jl=new R,rn=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ii,s=ii,r=Ze,o=qi,a=Un,l=hn,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=hs(),this.name="",this.source=new zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case si:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case si:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vc;rn.DEFAULT_ANISOTROPY=1;var Ce=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(d+1)/2,S=(p+1)/2,M=(h+u)/4,w=(f+x)/4,y=(g+m)/4;return E>_&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=w/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new zs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(n,mn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(n,mn)),Ci.normalize(),xo.crossVectors(mn,Ci),s[0]=Ci.x,s[4]=xo.x,s[8]=mn.x,s[1]=Ci.y,s[5]=xo.y,s[9]=mn.y,s[2]=Ci.z,s[6]=xo.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],E=n[7],_=n[11],S=n[15],M=s[0],w=s[4],y=s[8],T=s[12],C=s[1],I=s[5],D=s[9],N=s[13],L=s[2],H=s[6],q=s[10],k=s[14],st=s[3],Z=s[7],j=s[11],B=s[15];return r[0]=o*M+a*C+l*L+c*st,r[4]=o*w+a*I+l*H+c*Z,r[8]=o*y+a*D+l*q+c*j,r[12]=o*T+a*N+l*k+c*B,r[1]=h*M+f*C+u*L+d*st,r[5]=h*w+f*I+u*H+d*Z,r[9]=h*y+f*D+u*q+d*j,r[13]=h*T+f*N+u*k+d*B,r[2]=g*M+x*C+m*L+p*st,r[6]=g*w+x*I+m*H+p*Z,r[10]=g*y+x*D+m*q+p*j,r[14]=g*T+x*N+m*k+p*B,r[3]=v*M+E*C+_*L+S*st,r[7]=v*w+E*I+_*H+S*Z,r[11]=v*y+E*D+_*q+S*j,r[15]=v*T+E*N+_*k+S*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*u,E=a*d-c*f,_=a*u-l*f,S=o*d-c*h,M=o*u-l*h,w=o*f-a*h;return e*(x*v-m*E+p*_)-n*(g*v-m*S+p*M)+s*(g*E-x*S+p*w)-r*(g*_-x*M+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-n*o,E=e*l-s*o,_=e*c-r*o,S=n*l-s*a,M=n*c-r*a,w=s*c-r*l,y=h*x-f*g,T=h*m-u*g,C=h*p-d*g,I=f*m-u*x,D=f*p-d*x,N=u*p-d*m,L=v*N-E*D+_*I+S*C-M*T+w*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(a*N-l*D+c*I)*H,t[1]=(s*D-n*N-r*I)*H,t[2]=(x*w-m*M+p*S)*H,t[3]=(u*M-f*w-d*S)*H,t[4]=(l*C-o*N-c*T)*H,t[5]=(e*N-s*C+r*T)*H,t[6]=(m*_-g*w-p*E)*H,t[7]=(h*w-u*_+d*E)*H,t[8]=(o*D-a*C+c*y)*H,t[9]=(n*C-e*D-r*y)*H,t[10]=(g*M-x*_+p*v)*H,t[11]=(f*_-h*M-d*v)*H,t[12]=(a*T-o*I-l*y)*H,t[13]=(e*I-n*T+s*y)*H,t[14]=(x*E-g*S-m*v)*H,t[15]=(h*S-f*E+u*v)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,v=l*c,E=l*h,_=l*f,S=n.x,M=n.y,w=n.z;return s[0]=(1-(x+p))*S,s[1]=(d+_)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(d-_)*M,s[5]=(1-(u+p))*M,s[6]=(m+v)*M,s[7]=0,s[8]=(g+E)*w,s[9]=(m-v)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ms.set(s[0],s[1],s[2]).length(),a=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kn.copy(this);let c=1/o,h=1/a,f=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,e.setFromRotationMatrix(kn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Wn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Os)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Wn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Os)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new R,kn=new Yt,np=new R(0,0,0),ip=new R(1,1,1),Ci=new R,xo=new R,mn=new R,ru=new Yt,ou=new Be,vi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,au=new R,Ss=new Be,pi=new Yt,yo=new R,hr=new R,rp=new R,op=new Be,lu=new R(1,0,0),cu=new R(0,1,0),hu=new R(0,0,1),uu={type:"added"},ap={type:"removed"},bs={type:"childadded",child:null},Ql={type:"childremoved",child:null},Qe=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new vi,n=new Be,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Zt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(hr,yo,this.up):pi.lookAt(yo,hr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(pi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),bs.child=t,this.dispatchEvent(bs),bs.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new R(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ee=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Kc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return re.workingToColorSpace(je.copy(this),t),Math.round(Kt(je.r*255,0,255))*65536+Math.round(Kt(je.g*255,0,255))*256+Math.round(Kt(je.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Oe){re.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(vo);let n=xr(Pi.h,vo.h,e),s=xr(Pi.s,vo.s,e),r=xr(Pi.l,vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new ne;ne.NAMES=fd;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new R,mi=new R,ec=new R,gi=new R,Es=new R,Ts=new R,du=new R,nc=new R,ic=new R,sc=new R,rc=new Ce,oc=new Ce,ac=new Ce,Ni=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),mi.subVectors(n,e),ec.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(mi),l=Vn.dot(ec),c=mi.dot(mi),h=mi.dot(ec),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),mi.subVectors(t,e),Vn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,n),Ts.subVectors(r,n),nc.subVectors(t,n);let l=Es.dot(nc),c=Ts.dot(nc);if(l<=0&&c<=0)return e.copy(n);ic.subVectors(t,s);let h=Es.dot(ic),f=Ts.dot(ic);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Es,o);sc.subVectors(t,r);let d=Es.dot(sc),g=Ts.dot(sc);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ts,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return du.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(du,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),So.subVectors(this.max,ur),ws.subVectors(t.a,ur),As.subVectors(t.b,ur),Rs.subVectors(t.c,ur),Ii.subVectors(As,ws),Li.subVectors(Rs,As),ts.subVectors(ws,Rs);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ts.z,ts.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ts.z,0,-ts.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ts.y,ts.x,0];return!lc(e,ws,As,Rs,So)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,ws,As,Rs,So))?!1:(bo.crossVectors(Ii,Li),e=[bo.x,bo.y,bo.z],lc(e,ws,As,Rs,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new R,new R,new R,new R,new R,new R,new R,new R],Gn=new R,Mo=new xn,ws=new R,As=new R,Rs=new R,Ii=new R,Li=new R,ts=new R,ur=new R,So=new R,bo=new R,es=new R;function lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Fe=new R,Eo=new at,cp=0,ye=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ld,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},hp=new xn,dr=new R,cc=new R,oi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(cc)),this.expandByPoint(dr.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},up=0,Rn=new Yt,hc=new Qe,Cs=new R,gn=new xn,fr=new xn,Ve=new R,ce=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uf(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(gn.min,fr.min),gn.expandByPoint(Ve),Ve.addVectors(gn.max,fr.max),gn.expandByPoint(Ve)):(gn.expandByPoint(fr.min),gn.expandByPoint(fr.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(t,c),Ve.add(Cs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new R,l[y]=new R;let c=new R,h=new R,f=new R,u=new at,d=new at,g=new at,x=new R,m=new R;function p(y,T,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[y].add(x),a[T].add(x),a[C].add(x),l[y].add(m),l[T].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,T=v.length;y<T;++y){let C=v[y],I=C.start,D=C.count;for(let N=I,L=I+D;N<L;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let E=new R,_=new R,S=new R,M=new R;function w(y){S.fromBufferAttribute(s,y),M.copy(S);let T=a[y];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(M,T);let I=_.dot(l[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,I)}for(let y=0,T=v.length;y<T;++y){let C=v[y],I=C.start,D=C.count;for(let N=I,L=I+D;N<L;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new ye(u,h,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uc=new R,dp=new R,fp=new Zt,_n=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=uc.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pp=0,Ui=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Wi,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xi=new R,dc=new R,To=new R,wo=new R,Gs=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),wo.copy(this.origin).sub(dc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=wo.dot(this.direction),l=-wo.dot(To),c=wo.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(To,u),d}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,E=n.z-o.z,_=Math.abs(l),S=Math.abs(c),M=Math.abs(h),w,y,T,C,I,D,N,L,H,q,k,st;if(_>=S&&_>=M?(T=l,D=f,H=g,st=p,l>=0?(w=c,y=h,C=u,I=d,N=x,L=m,q=v,k=E):(w=h,y=c,C=d,I=u,N=m,L=x,q=E,k=v)):S>=M?(T=c,D=u,H=x,st=v,c>=0?(w=h,y=l,C=d,I=f,N=m,L=g,q=E,k=p):(w=l,y=h,C=f,I=d,N=g,L=m,q=p,k=E)):(T=h,D=d,H=m,st=E,h>=0?(w=l,y=c,C=f,I=u,N=g,L=x,q=p,k=v):(w=c,y=l,C=u,I=f,N=x,L=g,q=v,k=p)),T===0)return null;let Z=w/T,j=y/T,B=1/T,rt=C-Z*D,et=I-j*D,pt=N-Z*H,dt=L-j*H,Tt=q-Z*st,W=k-j*st,$=Tt*dt-W*pt,ht=rt*W-et*Tt,Pt=pt*et-dt*rt;if(s){if($<0||ht<0||Pt<0)return null}else if(($<0||ht<0||Pt<0)&&($>0||ht>0||Pt>0))return null;let _t=$+ht+Pt;if(_t===0)return null;let Ut=B*($*D+ht*H+Pt*st);return(_t>0?Ut<0:Ut>0)?null:this.at(Ut/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},os=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fu=new Yt,ns=new Gs,Ao=new oi,pu=new R,Ro=new R,Co=new R,Po=new R,fc=new R,Io=new R,mu=new R,Lo=new R,it=class extends Qe{constructor(t=new ce,e=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(fc.fromBufferAttribute(f,t),o?Io.addScaledVector(fc,h):Io.addScaledVector(fc.sub(e),h))}e.add(Io)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Ao.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ao,pu)===null||ns.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=E;_<S;_+=3){let M=a.getX(_),w=a.getX(_+1),y=a.getX(_+2);s=Do(this,p,t,n,c,h,f,M,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),E=a.getX(m+1),_=a.getX(m+2);s=Do(this,o,t,n,c,h,f,v,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=E;_<S;_+=3){let M=_,w=_+1,y=_+2;s=Do(this,p,t,n,c,h,f,M,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,E=m+1,_=m+2;s=Do(this,o,t,n,c,h,f,v,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function mp(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lo);return c<e.near||c>e.far?null:{distance:c,point:Lo.clone(),object:i}}function Do(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ro),i.getVertexPosition(l,Co),i.getVertexPosition(c,Po);let h=mp(i,t,e,n,Ro,Co,Po,mu);if(h){let f=new R;Ni.getBarycoord(mu,Ro,Co,Po,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,f,new at)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,f,new at)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Ni.getNormal(Ro,Co,Po,u.normal),h.face=u,h.barycoord=f}return h}var Pr=class extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ps=new Yt,gu=new Yt,No=[],_u=new xn,gp=new Yt,pr=new it,mr=new oi,ai=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),_u.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(_u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),mr.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),gu.multiplyMatrices(n,Ps),pr.matrixWorld=gu,pr.raycast(t,No);for(let o=0,a=No.length;o<a;o++){let l=No[o];l.instanceId=r,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(s*this.count),s,this.count,Ra,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new oi,_p=new at(.5,.5),Uo=new R,Ws=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],E=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,p-g,S-v).normalize(),s[1].setComponents(c+o,d+h,p+g,S+v).normalize(),s[2].setComponents(c+a,d+f,p+x,S+E).normalize(),s[3].setComponents(c-a,d-f,p-x,S-E).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,d-u,p-m,S-_).normalize();else if(s[4].setComponents(c-l,d-u,p-m,S-_).normalize(),e===Wn)s[5].setComponents(c+l,d+u,p+m,S+_).normalize();else if(e===Os)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=_p.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends rn{constructor(t=[],e=Xi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cn=class extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends rn{constructor(t,e,n=$n,s,r,o,a=Ge,l=Ge,c,h=ri,f=1){if(h!==ri&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ta=class extends Fi{constructor(t,e=$n,n=Xi,s,r,o=Ge,a=Ge,l,c=ri){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pe=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function g(x,m,p,v,E,_,S,M,w,y,T){let C=_/w,I=S/y,D=_/2,N=S/2,L=M/2,H=w+1,q=y+1,k=0,st=0,Z=new R;for(let j=0;j<q;j++){let B=j*I-N;for(let rt=0;rt<H;rt++){let et=rt*C-D;Z[x]=et*v,Z[m]=B*E,Z[p]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=M>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(rt/w),f.push(1-j/y),k+=1}}for(let j=0;j<y;j++)for(let B=0;B<w;B++){let rt=u+B+H*j,et=u+B+H*(j+1),pt=u+(B+1)+H*(j+1),dt=u+(B+1)+H*j;l.push(rt,et,dt),l.push(et,pt,dt),st+=6}a.addGroup(d,st,T),d+=st,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Si=class i extends ce{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,g=n*2+r,x=s+1,m=new R,p=new R;for(let v=0;v<=g;v++){let E=0,_=0,S=0,M=0;if(v<=n){let T=v/n,C=T*Math.PI/2;_=-h-t*Math.cos(C),S=t*Math.sin(C),M=-t*Math.cos(C),E=T*f}else if(v<=n+r){let T=(v-n)/r;_=-h+T*e,S=t,M=0,E=f+T*u}else{let T=(v-n-r)/n,C=T*Math.PI/2;_=h+t*Math.sin(C),S=t*Math.cos(C),M=t*Math.sin(C),E=f+u+T*f}let w=Math.max(0,Math.min(1,E/d)),y=0;v===0?y=.5/s:v===g&&(y=-.5/s);for(let T=0;T<=s;T++){let C=T/s,I=C*Math.PI*2,D=Math.sin(I),N=Math.cos(I);p.x=-S*N,p.y=_,p.z=S*D,a.push(p.x,p.y,p.z),m.set(-S*N,M,S*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+y,w)}if(v>0){let T=(v-1)*x;for(let C=0;C<s;C++){let I=T+C,D=T+C+1,N=v*x+C,L=v*x+C+1;o.push(I,D,N),o.push(D,L,N)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Dr=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},le=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function v(){let _=new R,S=new R,M=0,w=(e-t)/n;for(let y=0;y<=r;y++){let T=[],C=y/r,I=C*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,L=N*l+a,H=Math.sin(L),q=Math.cos(L);S.x=I*H,S.y=-C*n+m,S.z=I*q,f.push(S.x,S.y,S.z),_.set(H,w,q).normalize(),u.push(_.x,_.y,_.z),d.push(N,1-C),T.push(g++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let C=x[T][y],I=x[T+1][y],D=x[T+1][y+1],N=x[T][y+1];(t>0||T!==0)&&(h.push(C,I,N),M+=3),(e>0||T!==r-1)&&(h.push(I,D,N),M+=3)}c.addGroup(p,M,0),p+=M}function E(_){let S=g,M=new at,w=new R,y=0,T=_===!0?t:e,C=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;let I=g;for(let D=0;D<=s;D++){let L=D/s*l+a,H=Math.cos(L),q=Math.sin(L);w.x=T*q,w.y=m*C,w.z=T*H,f.push(w.x,w.y,w.z),u.push(0,C,0),M.x=H*.5+.5,M.y=q*.5*C+.5,d.push(M.x,M.y),g++}for(let D=0;D<s;D++){let N=S+D,L=I+D;_===!0?h.push(L,L+1,N):h.push(L+1,L,N),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xs=class i extends le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new Yt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qs=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var xu=new R,yu=new R,pc=new jc,mc=new jc,gc=new jc,qn=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yu.subVectors(s[0],s[1]).add(s[0]),c=yu);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),pc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),mc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),gc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),mc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),gc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(pc.calc(l),mc.calc(l),gc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function xp(i,t){let e=1-i;return e*e*t}function yp(i,t){return 2*(1-i)*i*t}function vp(i,t){return i*i*t}function yr(i,t,e,n){return xp(i,t)+yp(i,e)+vp(i,n)}function Mp(i,t){let e=1-i;return e*e*e*t}function Sp(i,t){let e=1-i;return 3*e*e*i*t}function bp(i,t){return 3*(1-i)*i*i*t}function Ep(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Mp(i,t)+Sp(i,e)+bp(i,n)+Ep(i,s)}var Nr=class extends yn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends yn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ur=class extends yn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends yn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends yn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oi=class extends yn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(vu(a,l.x,c.x,h.x,f.x),vu(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},sa=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:qn,CubicBezierCurve:Nr,CubicBezierCurve3:na,EllipseCurve:qs,LineCurve:Ur,LineCurve3:ia,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Oi,SplineCurve:Or}),ra=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sa[s.type]().fromJSON(s))}return this}},Br=class extends ra{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ur(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fr(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Nr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Or(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new qs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vn=class extends Br{constructor(t){super(t),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}};function Tp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=pd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Pp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Hr(r,o,e,a,l,c,0),o}function pd(i,t,e,n,s){let r;if(s===kp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mu(o/n|0,i[o],i[o+1],r);return r&&Ys(r,r.next)&&(kr(r),r=r.next),r}function as(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||Pe(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Up(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ap(i,n,s,r):wp(i)){t.push(l.i,i.i,c.i),kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Rp(as(i),t),Hr(i,t,e,n,s,r,2)):o===2&&Cp(i,t,e,n,s,r):Hr(as(i),t,e,n,s,r,1);break}}}function wp(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&gr(s,a,r,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ap(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),g=Math.min(h,f,u),x=Math.max(a,l,c),m=Math.max(h,f,u),p=bc(d,g,t,e,n),v=bc(x,m,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=v;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&gr(a,h,l,f,c,u,E.x,E.y)&&Pe(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&gr(a,h,l,f,c,u,_.x,_.y)&&Pe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&gr(a,h,l,f,c,u,E.x,E.y)&&Pe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&gr(a,h,l,f,c,u,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Rp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ys(n,s)&&gd(n,e,e.next,s)&&zr(n,s)&&zr(s,n)&&(t.push(n.i,e.i,s.i),kr(e),kr(e.next),e=i=s),e=e.next}while(e!==i);return as(e)}function Cp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bp(o,a)){let l=_d(o,a);o=as(o,o.next),l=as(l,l.next),Hr(o,t,e,n,s,r,0),Hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Op(c))}s.sort(Ip);for(let r=0;r<s.length;r++)e=Lp(s[r],e);return e}function Ip(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lp(i,t){let e=Dp(i,t);if(!e)return t;let n=_d(e,i);return as(n,n.next),as(e,e.next)}function Dp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ys(i,e))return e;do{if(Ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);zr(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Np(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Np(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Up(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fp(s)}function Fp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Op(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function md(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&md(i,t,e,n,s,r,o,a)}function Bp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hp(i,t)&&(zr(i,t)&&zr(t,i)&&zp(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Ys(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ys(i,t){return i.x===t.x&&i.y===t.y}function gd(i,t,e,n){let s=Oo(Pe(i,t,e)),r=Oo(Pe(i,t,n)),o=Oo(Pe(e,n,i)),a=Oo(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&Fo(i,e,t)||r===0&&Fo(i,n,t)||o===0&&Fo(e,i,n)||a===0&&Fo(e,t,n))}function Fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oo(i){return i>0?1:i<0?-1:0}function Hp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zr(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function zp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _d(i,t){let e=Ec(i.i,i.x,i.y),n=Ec(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(i,t,e,n){let s=Ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Tc=class{static triangulate(t,e,n=2){return Tp(t,e,n)}},ss=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Su(t),bu(n,t);let o=t.length;e.forEach(Su);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,bu(n,e[l]);let a=Tc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Su(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Pn=class i extends ce{constructor(t=new vn([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Vp,E,_=!1,S,M,w,y;if(p){E=p.getSpacedPoints(h),_=!0,u=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,Q),M=new R,w=new R,y=new R}u||(m=0,d=0,g=0,x=0);let T=a.extractPoints(c),C=T.shape,I=T.holes;if(!ss.isClockWise(C)){C=C.reverse();for(let Q=0,lt=I.length;Q<lt;Q++){let ct=I[Q];ss.isClockWise(ct)&&(I[Q]=ct.reverse())}}function N(Q){let ct=10000000000000001e-36,ut=Q[0];for(let gt=1;gt<=Q.length;gt++){let Vt=gt%Q.length,zt=Q[Vt],qt=zt.x-ut.x,$t=zt.y-ut.y,U=qt*qt+$t*$t,he=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(ut.x),Math.abs(ut.y)),ie=ct*he*he;if(U<=ie){Q.splice(Vt,1),gt--;continue}ut=zt}}N(C),I.forEach(N);let L=I.length,H=C;for(let Q=0;Q<L;Q++){let lt=I[Q];C=C.concat(lt)}function q(Q,lt,ct){return lt||Wt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(lt,ct)}let k=C.length;function st(Q,lt,ct){let ut,gt,Vt,zt=Q.x-lt.x,qt=Q.y-lt.y,$t=ct.x-Q.x,U=ct.y-Q.y,he=zt*zt+qt*qt,ie=zt*U-qt*$t;if(Math.abs(ie)>Number.EPSILON){let P=Math.sqrt(he),b=Math.sqrt($t*$t+U*U),z=lt.x-qt/P,X=lt.y+zt/P,J=ct.x-U/b,ft=ct.y+$t/b,mt=((J-z)*U-(ft-X)*$t)/(zt*U-qt*$t);ut=z+zt*mt-Q.x,gt=X+qt*mt-Q.y;let K=ut*ut+gt*gt;if(K<=2)return new at(ut,gt);Vt=Math.sqrt(K/2)}else{let P=!1;zt>Number.EPSILON?$t>Number.EPSILON&&(P=!0):zt<-Number.EPSILON?$t<-Number.EPSILON&&(P=!0):Math.sign(qt)===Math.sign(U)&&(P=!0),P?(ut=-qt,gt=zt,Vt=Math.sqrt(he)):(ut=zt,gt=qt,Vt=Math.sqrt(he/2))}return new at(ut/Vt,gt/Vt)}let Z=[];for(let Q=0,lt=H.length,ct=lt-1,ut=Q+1;Q<lt;Q++,ct++,ut++)ct===lt&&(ct=0),ut===lt&&(ut=0),Z[Q]=st(H[Q],H[ct],H[ut]);let j=[],B,rt=Z.concat();for(let Q=0,lt=L;Q<lt;Q++){let ct=I[Q];B=[];for(let ut=0,gt=ct.length,Vt=gt-1,zt=ut+1;ut<gt;ut++,Vt++,zt++)Vt===gt&&(Vt=0),zt===gt&&(zt=0),B[ut]=st(ct[ut],ct[Vt],ct[zt]);j.push(B),rt=rt.concat(B)}let et;if(m===0)et=ss.triangulateShape(H,I);else{let Q=[],lt=[];for(let ct=0;ct<m;ct++){let ut=ct/m,gt=d*Math.cos(ut*Math.PI/2),Vt=g*Math.sin(ut*Math.PI/2)+x;for(let zt=0,qt=H.length;zt<qt;zt++){let $t=q(H[zt],Z[zt],Vt);ht($t.x,$t.y,-gt),ut===0&&Q.push($t)}for(let zt=0,qt=L;zt<qt;zt++){let $t=I[zt];B=j[zt];let U=[];for(let he=0,ie=$t.length;he<ie;he++){let P=q($t[he],B[he],Vt);ht(P.x,P.y,-gt),ut===0&&U.push(P)}ut===0&&lt.push(U)}}et=ss.triangulateShape(Q,lt)}let pt=et.length,dt=g+x;for(let Q=0;Q<k;Q++){let lt=u?q(C[Q],rt[Q],dt):C[Q];_?(w.copy(S.normals[0]).multiplyScalar(lt.x),M.copy(S.binormals[0]).multiplyScalar(lt.y),y.copy(E[0]).add(w).add(M),ht(y.x,y.y,y.z)):ht(lt.x,lt.y,0)}for(let Q=1;Q<=h;Q++)for(let lt=0;lt<k;lt++){let ct=u?q(C[lt],rt[lt],dt):C[lt];_?(w.copy(S.normals[Q]).multiplyScalar(ct.x),M.copy(S.binormals[Q]).multiplyScalar(ct.y),y.copy(E[Q]).add(w).add(M),ht(y.x,y.y,y.z)):ht(ct.x,ct.y,f/h*Q)}for(let Q=m-1;Q>=0;Q--){let lt=Q/m,ct=d*Math.cos(lt*Math.PI/2),ut=g*Math.sin(lt*Math.PI/2)+x;for(let gt=0,Vt=H.length;gt<Vt;gt++){let zt=q(H[gt],Z[gt],ut);ht(zt.x,zt.y,f+ct)}for(let gt=0,Vt=I.length;gt<Vt;gt++){let zt=I[gt];B=j[gt];for(let qt=0,$t=zt.length;qt<$t;qt++){let U=q(zt[qt],B[qt],ut);_?ht(U.x,U.y+E[h-1].y,E[h-1].x+ct):ht(U.x,U.y,f+ct)}}}Tt(),W();function Tt(){let Q=s.length/3;if(u){let lt=0,ct=k*lt;for(let ut=0;ut<pt;ut++){let gt=et[ut];Pt(gt[2]+ct,gt[1]+ct,gt[0]+ct)}lt=h+m*2,ct=k*lt;for(let ut=0;ut<pt;ut++){let gt=et[ut];Pt(gt[0]+ct,gt[1]+ct,gt[2]+ct)}}else{for(let lt=0;lt<pt;lt++){let ct=et[lt];Pt(ct[2],ct[1],ct[0])}for(let lt=0;lt<pt;lt++){let ct=et[lt];Pt(ct[0]+k*h,ct[1]+k*h,ct[2]+k*h)}}n.addGroup(Q,s.length/3-Q,0)}function W(){let Q=s.length/3,lt=0;$(H,lt),lt+=H.length;for(let ct=0,ut=I.length;ct<ut;ct++){let gt=I[ct];$(gt,lt),lt+=gt.length}n.addGroup(Q,s.length/3-Q,1)}function $(Q,lt){let ct=Q.length;for(;--ct>=0;){let ut=ct,gt=ct-1;gt<0&&(gt=Q.length-1);for(let Vt=0,zt=h+m*2;Vt<zt;Vt++){let qt=k*Vt,$t=k*(Vt+1),U=lt+ut+qt,he=lt+gt+qt,ie=lt+gt+$t,P=lt+ut+$t;_t(U,he,ie,P)}}}function ht(Q,lt,ct){l.push(Q),l.push(lt),l.push(ct)}function Pt(Q,lt,ct){Ut(Q),Ut(lt),Ut(ct);let ut=s.length/3,gt=v.generateTopUV(n,s,ut-3,ut-2,ut-1);oe(gt[0]),oe(gt[1]),oe(gt[2])}function _t(Q,lt,ct,ut){Ut(Q),Ut(lt),Ut(ut),Ut(lt),Ut(ct),Ut(ut);let gt=s.length/3,Vt=v.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);oe(Vt[0]),oe(Vt[1]),oe(Vt[3]),oe(Vt[1]),oe(Vt[2]),oe(Vt[3])}function Ut(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function oe(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sa[s.type]().fromJSON(s)),new i(n,t.options)}},Vp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-f),new at(u,1-g),new at(x,1-p)]:[new at(a,1-l),new at(h,1-f),new at(d,1-g),new at(m,1-p)]}};function Gp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var li=class i extends ce{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new R,u=new at,d=new R,g=new R,x=new R,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){let E=n+v*h*s,_=Math.sin(E),S=Math.cos(E);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*_,f.y=t[M].y,f.z=t[M].x*S,o.push(f.x,f.y,f.z),u.x=v/e,u.y=M/(t.length-1),a.push(u.x,u.y);let w=l[3*M+0]*_,y=l[3*M+1],T=l[3*M+0]*S;c.push(w,y,T)}}for(let v=0;v<e;v++)for(let E=0;E<t.length-1;E++){let _=E+v*t.length,S=_,M=_+t.length,w=_+t.length+1,y=_+1;r.push(S,M,y),r.push(w,y,M)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Yn=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let E=0;E<c;E++){let _=E*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let E=v+c*p,_=v+c*(p+1),S=v+1+c*(p+1),M=v+1+c*p;d.push(E,_,M),d.push(_,S,M)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var In=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new R,u=new R,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],E=p/n,_=o+E*a,S=t*Math.cos(_),M=Math.sqrt(t*t-S*S),w=0;p===0&&o===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){let T=y/e,C=s+T*r;f.x=-M*Math.cos(C),f.y=S,f.z=M*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(T+w,1-E),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let E=h[p][v+1],_=h[p][v],S=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&d.push(E,_,M),(p!==n-1||l<Math.PI)&&d.push(_,S,M)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ln=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new R,d=new R,g=new R;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let v=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,E=(s+1)*(x-1)+m,_=(s+1)*x+m;l.push(p,v,_),l.push(v,E,_)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Dn=class i extends ce{constructor(t=new Oi(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new at,h=new R,f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function x(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),v(),p()}function m(E){h=t.getPointAt(E/e,h);let _=o.normals[E],S=o.binormals[E];for(let M=0;M<=s;M++){let w=M/s*Math.PI*2,y=Math.sin(w),T=-Math.cos(w);l.x=T*_.x+y*S.x,l.y=T*_.y+y*S.y,l.z=T*_.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let S=(s+1)*(E-1)+(_-1),M=(s+1)*E+(_-1),w=(s+1)*E+_,y=(s+1)*(E-1)+_;g.push(S,M,y),g.push(M,w,y)}}function v(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new sa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Eu(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var ds={clone:us,merge:en},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oa=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Le=class extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var aa=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Is(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _c(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,a=2*e-n;break;case Sc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:o=t,l=2*n-e;break;case Sc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[c+S]+E*o[l+S]+_*o[f+S];return r}},ha=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},ua=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends Bi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let u=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*u+g*2,v=f[p],E=f[p+1],_=t*u+g*2,S=h[_],M=h[_+1],w=Zp(n,e,v,S,s);r[g]=xd(w,x,E,M,m)}return r}};function xd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Yp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Zp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=xd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Yp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_c(t.settings)&&(n.settings={inTangents:Is(t.settings.inTangents,Array),outTangents:Is(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break;case yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return zo;case this.InterpolantFactoryMethodBezier:return yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_c(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ff(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Jo;var Hi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Mr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="color";var pa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="number";var ma=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Be.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Mn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Mr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="vector";var _a=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new _a,xa=class{constructor(t){this.manager=t!==void 0?t:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gr=class extends Zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xc=new Yt,wu=new R,Au=new R,Wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Os||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bo=new R,Ho=new Be,ni=new R,Xr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bo,Ho,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Ho,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bo,Ho,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Ho,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new R,Ru=new at,Cu=new at,Ye=class extends Xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var wc=class extends Wr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},qr=class extends Zs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$s=class extends Xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ac=class extends Wr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zr=class extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ls=-90,Ds=1,ya=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(Ls,Ds,t,e);s.layers=this.layers,this.add(s);let r=new Ye(Ls,Ds,t,e);r.layers=this.layers,this.add(r);let o=new Ye(Ls,Ds,t,e);o.layers=this.layers,this.add(o);let a=new Ye(Ls,Ds,t,e);a.layers=this.layers,this.add(a);let l=new Ye(Ls,Ds,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Ls,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},va=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var th="\\[\\]\\.:\\/",$p=new RegExp("["+th+"]","g"),eh="[^"+th+"]",Jp="[^"+th.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",eh),jp=/(WCOD+)?/.source.replace("WCOD",Jp),Qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),em=new RegExp("^"+Kp+jp+Qp+tm+"$"),nm=["material","materials","bones","map"],Rc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($p,"")}static parseTrackName(t){let e=em.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Rc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var $r=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,kt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Js=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Cc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Jr=class extends Xn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function nh(i,t,e,n){let s=im(n);switch(e){case Yc:return i*t;case Ra:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Zi:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case Zc:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Ia:return i*t*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case La:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case Ha:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case oo:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(i){switch(i){case hn:case Gc:return{byteLength:1,components:1};case js:case Wc:case Jn:return{byteLength:2,components:1};case wa:case Aa:return{byteLength:2,components:4};case $n:case Ta:case Nn:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
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
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Em=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,c0=`uniform sampler2D dfgLUT;
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
}`,h0=`
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,vg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,Bg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:um,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:xm,batching_pars_vertex:ym,batching_vertex:vm,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:bm,iridescence_fragment:Em,bumpmap_pars_fragment:Tm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Dm,common:Nm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:Hm,emissivemap_pars_fragment:zm,colorspace_fragment:km,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i0,envmap_vertex:Ym,fog_vertex:Zm,fog_pars_vertex:$m,fog_fragment:Jm,fog_pars_fragment:Km,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:t0,lights_lambert_pars_fragment:e0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:o0,lights_phong_pars_fragment:a0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:h0,lights_fragment_maps:u0,lights_fragment_end:d0,lightprobes_pars_fragment:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:x0,map_pars_fragment:y0,map_particle_fragment:v0,map_particle_pars_fragment:M0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:b0,morphinstance_vertex:E0,morphcolor_vertex:T0,morphnormal_vertex:w0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:I0,normal_pars_vertex:L0,normal_vertex:D0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:H0,packing:z0,premultiplied_alpha_fragment:k0,project_vertex:V0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:Z0,shadowmap_vertex:$0,shadowmask_pars_fragment:J0,skinbase_vertex:K0,skinning_pars_vertex:j0,skinning_vertex:Q0,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:lg,uv_vertex:cg,worldpos_vertex:hg,background_vert:ug,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:xg,distance_vert:yg,distance_frag:vg,equirect_vert:Mg,equirect_frag:Sg,linedashed_vert:bg,linedashed_frag:Eg,meshbasic_vert:Tg,meshbasic_frag:wg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Ig,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Ng,meshphysical_vert:Ug,meshphysical_frag:Fg,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:Hg,points_frag:zg,shadow_vert:kg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},xt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ui={basic:{uniforms:en([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:en([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:en([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:en([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:en([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ne(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:en([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:en([xt.points,xt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:en([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:en([xt.common,xt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:en([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:en([xt.sprite,xt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:en([xt.common,xt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:en([xt.lights,xt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ui.physical={uniforms:en([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var dl={r:0,b:0,g:0},Xg=new Yt,Vd=new Zt;Vd.set(-1,0,0,0,1,0,0,0,1);function qg(i,t,e,n,s,r){let o=new ne(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let _=v.backgroundBlurriness>0;E=t.get(E,_)}return E}function g(v){let E=!1,_=d(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,E){let _=d(E);_&&(_.isCubeTexture||_.mapping===to)?(c===void 0&&(c=new it(new pe(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:us(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vd),c.material.toneMapped=re.getTransfer(_.colorSpace)!==fe,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new it(new Yn(2,2),new We({name:"BackgroundMaterial",uniforms:us(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB(dl,Qc(i)),e.buffers.color.setClear(dl.r,dl.g,dl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Yg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,D,N,L,H){let q=!1,k=f(I,L,N,D);r!==k&&(r=k,c(r.object)),q=d(I,L,N,H),q&&g(I,L,N,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(I,D,N,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,D,N,L){let H=L.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let k=I.isInstancedMesh===!0?I.id:0,st=q[k];st===void 0&&(st={},q[k]=st);let Z=st[N.id];Z===void 0&&(Z={},st[N.id]=Z);let j=Z[H];return j===void 0&&(j=u(l()),Z[H]=j),j}function u(I){let D=[],N=[],L=[];for(let H=0;H<e;H++)D[H]=0,N[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,D,N,L){let H=r.attributes,q=D.attributes,k=0,st=N.getAttributes();for(let Z in st)if(st[Z].location>=0){let B=H[Z],rt=q[Z];if(rt===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),B===void 0||B.attribute!==rt||rt&&B.data!==rt.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function g(I,D,N,L){let H={},q=D.attributes,k=0,st=N.getAttributes();for(let Z in st)if(st[Z].location>=0){let B=q[Z];B===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));let rt={};rt.attribute=B,B&&B.data&&(rt.data=B.data),H[Z]=rt,k++}r.attributes=H,r.attributesNum=k,r.index=L}function x(){let I=r.newAttributes;for(let D=0,N=I.length;D<N;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){let N=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;N[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),H[I]!==D&&(i.vertexAttribDivisor(I,D),H[I]=D)}function v(){let I=r.newAttributes,D=r.enabledAttributes;for(let N=0,L=D.length;N<L;N++)D[N]!==I[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function E(I,D,N,L,H,q,k){k===!0?i.vertexAttribIPointer(I,D,N,H,q):i.vertexAttribPointer(I,D,N,L,H,q)}function _(I,D,N,L){x();let H=L.attributes,q=N.getAttributes(),k=D.defaultAttributeValues;for(let st in q){let Z=q[st];if(Z.location>=0){let j=H[st];if(j===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let B=j.normalized,rt=j.itemSize,et=t.get(j);if(et===void 0)continue;let pt=et.buffer,dt=et.type,Tt=et.bytesPerElement,W=dt===i.INT||dt===i.UNSIGNED_INT||j.gpuType===Ta;if(j.isInterleavedBufferAttribute){let $=j.data,ht=$.stride,Pt=j.offset;if($.isInstancedInterleavedBuffer){for(let _t=0;_t<Z.locationSize;_t++)p(Z.location+_t,$.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _t=0;_t<Z.locationSize;_t++)m(Z.location+_t);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let _t=0;_t<Z.locationSize;_t++)E(Z.location+_t,rt/Z.locationSize,dt,B,ht*Tt,(Pt+rt/Z.locationSize*_t)*Tt,W)}else{if(j.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)p(Z.location+$,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let $=0;$<Z.locationSize;$++)m(Z.location+$);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let $=0;$<Z.locationSize;$++)E(Z.location+$,rt/Z.locationSize,dt,B,rt*Tt,rt/Z.locationSize*$*Tt,W)}}else if(k!==void 0){let B=k[st];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(Z.location,B);break;case 3:i.vertexAttrib3fv(Z.location,B);break;case 4:i.vertexAttrib4fv(Z.location,B);break;default:i.vertexAttrib1fv(Z.location,B)}}}}v()}function S(){T();for(let I in n){let D=n[I];for(let N in D){let L=D[N];for(let H in L){let q=L[H];for(let k in q)h(q[k].object),delete q[k];delete L[H]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let N in D){let L=D[N];for(let H in L){let q=L[H];for(let k in q)h(q[k].object),delete q[k];delete L[H]}}delete n[I.id]}function w(I){for(let D in n){let N=n[D];for(let L in N){let H=N[L];if(H[I.id]===void 0)continue;let q=H[I.id];for(let k in q)h(q[k].object),delete q[k];delete H[I.id]}}}function y(I){for(let D in n){let N=n[D],L=I.isInstancedMesh===!0?I.id:0,H=N[L];if(H!==void 0){for(let q in H){let k=H[q];for(let st in k)h(k[st].object),delete k[st];delete H[q]}delete N[L],Object.keys(N).length===0&&delete n[D]}}}function T(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Zg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $g(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&w!==Nn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:_,maxSamples:S,samples:M}}function Jg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new _n,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,E=v*4,_=p.clippingState||null;l.value=_,_=h(g,u,E,d);for(let S=0;S!==E;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=d;E!==x;++E,_+=4)o.copy(f[E]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var er=4,Kg=6,jg=20,Qg=256,lo=new $s,vd=new ne,ih=null,sh=0,rh=0,oh=!1,t_=new R,fs=new R,ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=t_}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=oh,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Jn,format:Un,colorSpace:Sr,depthBuffer:!1},s=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e_(r)),this._blurMaterial=i_(r,t,e),this._ggxMaterial=n_(r,t,e)}return s}_compileMaterial(t){let e=new it(new ce,t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,s,r){let l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(vd),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new pe,new os({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(vd),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;tr(s,_*S,E>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-er?n-g+er:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,tr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,tr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,lo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-er?s-this._lodMax+er:0),u=4*(this._cubeSize-h);tr(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,lo)}};function e_(i){let t=[],e=[],n=i,s=i-er+1+Kg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let p=0;p<f;p++){let v=p%3*2/3-1,E=p>2?0:-1,_=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];g.set(_,d*u*p);for(let S=0;S<u;S++){let M=h[S*2]*2-1,w=h[S*2+1]*2-1;p===0?fs.set(1,w,M):p===1?fs.set(-M,1,-w):p===2?fs.set(-M,w,1):p===3?fs.set(-1,w,-M):p===4?fs.set(-M,-1,w):fs.set(M,w,-1),fs.toArray(x,(p*u+S)*d)}}let m=new ce;m.setAttribute("position",new ye(g,d)),m.setAttribute("outputDirection",new ye(x,d)),e.push(new it(m,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function Md(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n_(i,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function i_(i,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Sd(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function bd(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pl=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ci});r.uniforms.tEquirect.value=e;let o=new it(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Ze),new ya(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function s_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Sa||d===ba)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new pl(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===Sa||d===ba,x=d===Xi||d===cs;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ir(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new ir(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===Sa?u.mapping=Xi:d===ba&&(u.mapping=cs),u}function l(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function r_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function o_(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let E=0,_=v.length;E<_;E+=3){let S=v[E+0],M=v[E+1],w=v[E+2];u.push(S,M,M,w,w,S)}}else{let v=g.array;x=g.version;for(let E=0,_=v.length/3-1;E<_;E+=3){let S=E+0,M=E+1,w=E+2;u.push(S,M,M,w,w,S)}}let m=new(g.count>=65535?Cr:Rr)(u,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function a_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function l_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function c_(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let _=a.attributes.position.count*E,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*S*4*f),w=new Tr(M,_,S,f);w.type=Nn,w.needsUpdate=!0;let y=E*4;for(let C=0;C<f;C++){let I=m[C],D=p[C],N=v[C],L=_*S*4*C;for(let H=0;H<I.count;H++){let q=H*y;d===!0&&(s.fromBufferAttribute(I,H),M[L+q+0]=s.x,M[L+q+1]=s.y,M[L+q+2]=s.z,M[L+q+3]=0),g===!0&&(s.fromBufferAttribute(D,H),M[L+q+4]=s.x,M[L+q+5]=s.y,M[L+q+6]=s.z,M[L+q+7]=0),x===!0&&(s.fromBufferAttribute(N,H),M[L+q+8]=s.x,M[L+q+9]=s.y,M[L+q+10]=s.z,M[L+q+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new at(_,S)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function h_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var u_={[Fc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Qr]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function d_(i,t,e,n,s,r){let o=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ce;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let h=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new it(c,h),u=new $s(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],E=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),l!==null&&l.setSize(_,S);for(let M=0;M<v.length;M++){let w=v[M];w.setSize&&w.setSize(_,S)}},this.setEffects=function(_){v=_,E=v.length>0&&v[0].isRenderPass===!0;let S=o.width,M=o.height;v.length>0&&a===null&&(a=new cn(S,M,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(S,M,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let y=v[w];y.setSize&&y.setSize(S,M)}},this.begin=function(_,S){if(x||_.toneMapping===Zn&&v.length===0)return!1;if(p=S,S!==null){let M=S.width,w=S.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return E===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(_,S){_.toneMapping=m,x=!0;let M=o,w=a;for(let y=0;y<v.length;y++){let T=v[y];T.enabled!==!1&&(T.render(_,w,M,S),T.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,h.defines={},re.getTransfer(d)===fe&&(h.defines.SRGB_TRANSFER="");let y=u_[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(p),_.render(f,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gd=new rn,ch=new Fi(1,1),Wd=new Tr,Xd=new Qo,qd=new Ir,Ed=[],Td=[],wd=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function sr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _l(i,t){let e=Td[t];e===void 0&&(e=new Int32Array(t),Td[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function __(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),ze(e,n)}}function x_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),ze(e,n)}}function y_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),ze(e,n)}}function v_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function E_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function T_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function R_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=e.isReversedDepthBuffer()?hl:cl,r=ch):r=Gd,e.setTexture2D(t||r,s)}function C_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xd,s)}function P_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qd,s)}function I_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wd,s)}function L_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return x_;case 35676:return y_;case 5124:case 35670:return v_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return b_;case 5125:return E_;case 36294:return T_;case 36295:return w_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function D_(i,t){i.uniform1fv(this.addr,t)}function N_(i,t){let e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function U_(i,t){let e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function F_(i,t){let e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function O_(i,t){let e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B_(i,t){let e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H_(i,t){let e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z_(i,t){i.uniform1iv(this.addr,t)}function k_(i,t){i.uniform2iv(this.addr,t)}function V_(i,t){i.uniform3iv(this.addr,t)}function G_(i,t){i.uniform4iv(this.addr,t)}function W_(i,t){i.uniform1uiv(this.addr,t)}function X_(i,t){i.uniform2uiv(this.addr,t)}function q_(i,t){i.uniform3uiv(this.addr,t)}function Y_(i,t){i.uniform4uiv(this.addr,t)}function Z_(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ch:o=Gd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function $_(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xd,r[o])}function J_(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qd,r[o])}function K_(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wd,r[o])}function j_(i){switch(i){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return H_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}var hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}},uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j_(e.type)}},dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function Q_(i,t,e){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),o=ah.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cd(e,c===void 0?new hh(a,i,t):new uh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new dh(a),Cd(e,f)),e=f}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Q_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tx=37297,ex=0;function nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Id=new Zt;function ix(i){re._getMatrix(Id,re.workingColorSpace,i);let t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+nx(i.getShaderSource(t),a)}else return r}function sx(i,t){let e=ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var rx={[Fc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[Qr]:"ACESFilmic",[zc]:"AgX",[kc]:"Neutral",[Hc]:"Custom"};function ox(i,t){let e=rx[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fl=new R;function ax(){re.getLuminanceCoefficients(fl);let i=fl.x.toFixed(4),t=fl.y.toFixed(4),e=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function cx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ho(i){return i!==""}function Dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(ux,fx)}var dx=new Map;function fx(i,t){let e=te[t];if(e===void 0){let n=dx.get(t);if(n!==void 0)e=te[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(e)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(px,mx)}function mx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var gx={[Kr]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function _x(i){return gx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xx={[Xi]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function yx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var vx={[cs]:"ENVMAP_MODE_REFRACTION"};function Mx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sx={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ex(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_x(e),c=yx(e),h=Mx(e),f=bx(e),u=Ex(e),d=lx(e),g=cx(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?te.tonemapping_pars_fragment:"",e.toneMapping!==Zn?ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),o=fh(o),o=Dd(o,e),o=Nd(o,e),a=fh(a),a=Dd(a,e),a=Nd(a,e),o=Ud(o),a=Ud(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+m+o,_=v+p+a,S=Pd(s,s.VERTEX_SHADER,E),M=Pd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(M)||"",H=D.trim(),q=N.trim(),k=L.trim(),st=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,M);else{let j=Ld(s,S,"vertex"),B=Ld(s,M,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+j+`
`+B)}else H!==""?kt("WebGLProgram: Program Info Log:",H):(q===""||k==="")&&(Z=!1);Z&&(I.diagnostics={runnable:st,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(M),y=new nr(s,x),T=hx(s,x)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,tx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var wx=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mh(t),e.set(t,n)),n}},mh=class{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}};function Ax(i){return i===Zi||i===oo||i===ao}function Rx(i,t,e,n,s,r){let o=new wr,a=new ph,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,C,I,D,N){let L=I.fog,H=D.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,st=t.get(y.envMap||q,k),Z=st&&st.mapping===to?st.image.height:null,j=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&kt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=B!==void 0?B.length:0,et=0;H.morphAttributes.position!==void 0&&(et=1),H.morphAttributes.normal!==void 0&&(et=2),H.morphAttributes.color!==void 0&&(et=3);let pt,dt,Tt,W;if(j){let Se=ui[j];pt=Se.vertexShader,dt=Se.fragmentShader}else{pt=y.vertexShader,dt=y.fragmentShader;let Se=a.getVertexShaderStage(y),ue=a.getFragmentShaderStage(y);a.update(y,Se,ue),Tt=Se.id,W=ue.id}let $=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,_t=D.isBatchedMesh===!0,Ut=!!y.map,oe=!!y.matcap,Q=!!st,lt=!!y.aoMap,ct=!!y.lightMap,ut=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,Vt=!!y.displacementMap,zt=!!y.emissiveMap,qt=!!y.metalnessMap,$t=!!y.roughnessMap,U=y.anisotropy>0,he=y.clearcoat>0,ie=y.dispersion>0,P=y.retroreflectivity>0,b=y.iridescence>0,z=y.sheen>0,X=y.transmission>0,J=U&&!!y.anisotropyMap,ft=he&&!!y.clearcoatMap,mt=he&&!!y.clearcoatNormalMap,K=he&&!!y.clearcoatRoughnessMap,nt=b&&!!y.iridescenceMap,yt=b&&!!y.iridescenceThicknessMap,Ft=z&&!!y.sheenColorMap,bt=z&&!!y.sheenRoughnessMap,vt=!!y.specularMap,Ot=!!y.specularColorMap,Gt=!!y.specularIntensityMap,Jt=X&&!!y.transmissionMap,O=X&&!!y.thicknessMap,Mt=!!y.gradientMap,tt=!!y.alphaMap,St=y.alphaTest>0,At=!!y.alphaHash,ot=!!y.extensions,Bt=Zn;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Dt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:dt,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:_t,batchingColor:_t&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ut,matcap:oe,envMap:Q,envMapMode:Q&&st.mapping,envMapCubeUVHeight:Z,aoMap:lt,lightMap:ct,bumpMap:ut,normalMap:gt,displacementMap:Vt,emissiveMap:zt,normalMapObjectSpace:gt&&y.normalMapType===td,normalMapTangentSpace:gt&&y.normalMapType===ll,packedNormalMap:gt&&y.normalMapType===ll&&Ax(y.normalMap.format),metalnessMap:qt,roughnessMap:$t,anisotropy:U,anisotropyMap:J,clearcoat:he,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:K,dispersion:ie,retroreflection:P,iridescence:b,iridescenceMap:nt,iridescenceThicknessMap:yt,sheen:z,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:vt,specularColorMap:Ot,specularIntensityMap:Gt,transmission:X,transmissionMap:Jt,thicknessMap:O,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===Wi&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:St,alphaHash:At,combine:y.combine,mapUv:Ut&&g(y.map.channel),aoMapUv:lt&&g(y.aoMap.channel),lightMapUv:ct&&g(y.lightMap.channel),bumpMapUv:ut&&g(y.bumpMap.channel),normalMapUv:gt&&g(y.normalMap.channel),displacementMapUv:Vt&&g(y.displacementMap.channel),emissiveMapUv:zt&&g(y.emissiveMap.channel),metalnessMapUv:qt&&g(y.metalnessMap.channel),roughnessMapUv:$t&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:ft&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(y.sheenRoughnessMap.channel),specularMapUv:vt&&g(y.specularMap.channel),specularColorMapUv:Ot&&g(y.specularColorMap.channel),specularIntensityMapUv:Gt&&g(y.specularIntensityMap.channel),transmissionMapUv:Jt&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:tt&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(gt||U),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Ut||tt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ut&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ne,flipSided:y.side===$e,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){let T=d[y.type],C;if(T){let I=ui[T];C=ds.clone(I.uniforms)}else C=y.uniforms;return C}function _(y,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Tx(i,T,y,s),c.push(C),h.set(T,C)),C}function S(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:_,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function Cx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Px(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let E=a(u,d,g,x,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,x,m,p){let v=a(u,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||Px),n.length>1&&n.sort(d||Od),s.length>1&&s.sort(d||Od)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Ix(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bd,i.set(n,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new ne};break;case"SpotLight":e={position:new R,direction:new R,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Dx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Nx=0;function Ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fx(i){let t=new Lx,e=Dx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Yt,o=new Yt;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,E=0,_=0,S=0,M=0,w=0,y=0,T=0,C=0;c.sort(Ux);for(let D=0,N=c.length;D<N;D++){let L=c[D],H=L.color,q=L.intensity,k=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zi?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*q,f+=H.g*q,u+=H.b*q;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],q);C++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,B=e.get(L);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=B,n.sunShadowMap[g]=st;let rt=j.getViewportCount();for(let et=0;et<rt;et++)n.sunShadowMatrix[x+et]=j.getMatrix(et),n.sunShadowCascade[x+et]=j._cascadeData[et];x+=rt,g++}n.sun[d]=Z,d++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,B=e.get(L);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(H).multiplyScalar(q),Z.distance=k,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[v]=Z;let j=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,L.castShadow){let B=e.get(L);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=st,w++}v++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(H).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=Z,E++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let j=L.shadow,B=e.get(L);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=L.shadow.matrix,M++}n.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q),Z.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[_]=Z,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==E||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==w||I.numSpotMaps!==y||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=E,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=w,I.numSpotMaps=y,I.numLightProbes=C,n.version=Nx++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let _=c[v];if(_.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Hd(i){let t=new Fx(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ox(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hd(i),t.set(s,[a])):r>=o.length?(a=new Hd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`,zx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],kx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],zd=new Yt,co=new R,lh=new R;function Vx(i,t,e){let n=new Ws,s=new at,r=new at,o=new Ce,a=new aa,l=new la,c={},h=e.maxTextureSize,f={[Gi]:$e,[$e]:Gi,[Ne]:Ne},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Bx,fragmentShader:Hx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let p=this.type;this.render=function(M,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Ma&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=M.length;L<H;L++){let q=M[L],k=q.shadow;if(k===void 0){kt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ks){if(q.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new cn(s.x,s.y,{format:Zi,type:Jn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new Fi(s.x,s.y,Nn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=ri,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge}else q.isPointLight?(k.map=new pl(s.x),k.map.depthTexture=new ta(s.x,$n)):(k.map=new cn(s.x,s.y),k.map.depthTexture=new Fi(s.x,s.y,$n)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=ri,this.type===Kr?(k.map.depthTexture.compareFunction=Z?hl:cl,k.map.depthTexture.minFilter=Ze,k.map.depthTexture.magFilter=Ze):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,y);for(let B=0;B<j;B++){let rt=k.getCamera(B);if(q.isPointLight){let et=k.camera,pt=k.matrix,dt=q.distance||et.far;dt!==et.far&&(et.far=dt,et.updateProjectionMatrix()),co.setFromMatrixPosition(q.matrixWorld),et.position.copy(co),lh.copy(et.position),lh.add(zx[B]),et.up.copy(kx[B]),et.lookAt(lh),et.updateMatrixWorld(),pt.makeTranslation(-co.x,-co.y,-co.z),zd.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),k._frustum.setFromProjectionMatrix(zd,et.coordinateSystem,et.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,B),i.clear();else{B===0&&(i.setRenderTarget(k.map),i.clear());let et=k.getViewport(B);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),D.viewport(o)}n=k.getFrustum(B),_(w,y,rt,q,this.type)}k.isPointLightShadow!==!0&&this.type===Ks&&v(k,y),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,I)};function v(M,w){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new cn(s.x,s.y,{format:Zi,type:Jn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,y,u,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,y,d,x,null)}function E(M,w,y,T){let C=null,I=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)C=I;else if(C=y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=C.uuid,N=w.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let H=L[N];H===void 0&&(H=C.clone(),L[N]=H,w.addEventListener("dispose",S)),C=H}if(C.visible=w.visible,C.wireframe=w.wireframe,T===Ks?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:f[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=y}return C}function _(M,w,y,T,C){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Ks)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let N=t.update(M),L=M.material;if(Array.isArray(L)){let H=N.groups;for(let q=0,k=H.length;q<k;q++){let st=H[q],Z=L[st.materialIndex];if(Z&&Z.visible){let j=E(M,Z,T,C);M.onBeforeShadow(i,M,w,y,N,j,st),i.renderBufferDirect(y,null,N,j,M,st),M.onAfterShadow(i,M,w,y,N,j,st)}}}else if(L.visible){let H=E(M,L,T,C);M.onBeforeShadow(i,M,w,y,N,H,null),i.renderBufferDirect(y,null,N,H,M,null),M.onAfterShadow(i,M,w,y,N,H,null)}}let D=M.children;for(let N=0,L=D.length;N<L;N++)_(D[N],w,y,T,C)}function S(M){M.target.removeEventListener("dispose",S);for(let y in c){let T=c[y],C=M.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Gx(i,t){function e(){let O=!1,Mt=new Ce,tt=null,St=new Ce(0,0,0,0);return{setMask:function(At){tt!==At&&!O&&(i.colorMask(At,At,At,At),tt=At)},setLocked:function(At){O=At},setClear:function(At,ot,Bt,Dt,Se){Se===!0&&(At*=Dt,ot*=Dt,Bt*=Dt),Mt.set(At,ot,Bt,Dt),St.equals(Mt)===!1&&(i.clearColor(At,ot,Bt,Dt),St.copy(Mt))},reset:function(){O=!1,tt=null,St.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,tt=null,St=null,At=null;return{setReversed:function(ot){if(Mt!==ot){let Bt=t.get("EXT_clip_control");ot?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ot;let Dt=At;At=null,this.setClear(Dt)}},getReversed:function(){return Mt},setTest:function(ot){ot?$(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(ot){tt!==ot&&!O&&(i.depthMask(ot),tt=ot)},setFunc:function(ot){if(Mt&&(ot=dd[ot]),St!==ot){switch(ot){case Vo:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=ot}},setLocked:function(ot){O=ot},setClear:function(ot){At!==ot&&(At=ot,Mt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){O=!1,tt=null,St=null,At=null,Mt=!1}}}function s(){let O=!1,Mt=null,tt=null,St=null,At=null,ot=null,Bt=null,Dt=null,Se=null;return{setTest:function(ue){O||(ue?$(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ue){Mt!==ue&&!O&&(i.stencilMask(ue),Mt=ue)},setFunc:function(ue,zn,ti){(tt!==ue||St!==zn||At!==ti)&&(i.stencilFunc(ue,zn,ti),tt=ue,St=zn,At=ti)},setOp:function(ue,zn,ti){(ot!==ue||Bt!==zn||Dt!==ti)&&(i.stencilOp(ue,zn,ti),ot=ue,Bt=zn,Dt=ti)},setLocked:function(ue){O=ue},setClear:function(ue){Se!==ue&&(i.clearStencil(ue),Se=ue)},reset:function(){O=!1,Mt=null,tt=null,St=null,At=null,ot=null,Bt=null,Dt=null,Se=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,E=null,_=null,S=null,M=null,w=null,y=new ne(0,0,0),T=0,C=!1,I=null,D=null,N=null,L=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,st=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=st>=2);let j=null,B={},rt=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),pt=new Ce().fromArray(rt),dt=new Ce().fromArray(et);function Tt(O,Mt,tt,St){let At=new Uint8Array(4),ot=i.createTexture();i.bindTexture(O,ot),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<tt;Bt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Mt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ot}let W={};W[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Fs),ut(!1),gt(Pc),$(i.CULL_FACE),lt(ci);function $(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ht(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Pt(O,Mt){return u[O]!==Mt?(i.bindFramebuffer(O,Mt),u[O]=Mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function _t(O,Mt){let tt=g,St=!1;if(O){tt=d.get(Mt),tt===void 0&&(tt=[],d.set(Mt,tt));let At=O.textures;if(tt.length!==At.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Bt=At.length;ot<Bt;ot++)tt[ot]=i.COLOR_ATTACHMENT0+ot;tt.length=At.length,St=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,St=!0);St&&i.drawBuffers(tt)}function Ut(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let oe={[ls]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};oe[Uu]=i.MIN,oe[Fu]=i.MAX;let Q={[Ou]:i.ZERO,[Bu]:i.ONE,[Hu]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(O,Mt,tt,St,At,ot,Bt,Dt,Se,ue){if(O===ci){m===!0&&(ht(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),O!==Lu){if(O!==p||ue!==C){if((v!==ls||S!==ls)&&(i.blendEquation(i.FUNC_ADD),v=ls,S=ls),ue)switch(O){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",O);break}else switch(O){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",O);break}E=null,_=null,M=null,w=null,y.set(0,0,0),T=0,p=O,C=ue}return}At=At||Mt,ot=ot||tt,Bt=Bt||St,(Mt!==v||At!==S)&&(i.blendEquationSeparate(oe[Mt],oe[At]),v=Mt,S=At),(tt!==E||St!==_||ot!==M||Bt!==w)&&(i.blendFuncSeparate(Q[tt],Q[St],Q[ot],Q[Bt]),E=tt,_=St,M=ot,w=Bt),(Dt.equals(y)===!1||Se!==T)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Se),y.copy(Dt),T=Se),p=O,C=!1}function ct(O,Mt){O.side===Ne?ht(i.CULL_FACE):$(i.CULL_FACE);let tt=O.side===$e;Mt&&(tt=!tt),ut(tt),O.blending===Wi&&O.transparent===!1?lt(ci):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let St=O.stencilWrite;a.setTest(St),St&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function gt(O){O!==Pu?($(i.CULL_FACE),O!==D&&(O===Pc?i.cullFace(i.BACK):O===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),D=O}function Vt(O){O!==N&&(k&&i.lineWidth(O),N=O)}function zt(O,Mt,tt){O?($(i.POLYGON_OFFSET_FILL),(L!==Mt||H!==tt)&&(L=Mt,H=tt,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,tt))):ht(i.POLYGON_OFFSET_FILL)}function qt(O){O?$(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function $t(O){O===void 0&&(O=i.TEXTURE0+q-1),j!==O&&(i.activeTexture(O),j=O)}function U(O,Mt,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+q-1:tt=j);let St=B[tt];St===void 0&&(St={type:void 0,texture:void 0},B[tt]=St),(St.type!==O||St.texture!==Mt)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(O,Mt||W[O]),St.type=O,St.texture=Mt)}function he(){let O=B[j];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function b(){try{i.texSubImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function z(){try{i.texSubImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function ft(){try{i.texStorage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function mt(){try{i.texStorage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function K(){try{i.texImage2D(...arguments)}catch(O){Wt("WebGLState:",O)}}function nt(){try{i.texImage3D(...arguments)}catch(O){Wt("WebGLState:",O)}}function yt(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function Ft(O,Mt){f[O]!==Mt&&(i.pixelStorei(O,Mt),f[O]=Mt)}function bt(O){pt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),pt.copy(O))}function vt(O){dt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),dt.copy(O))}function Ot(O,Mt){let tt=c.get(Mt);tt===void 0&&(tt=new WeakMap,c.set(Mt,tt));let St=tt.get(O);St===void 0&&(St=i.getUniformBlockIndex(Mt,O.name),tt.set(O,St))}function Gt(O,Mt){let St=c.get(Mt).get(O);l.get(Mt)!==St&&(i.uniformBlockBinding(Mt,St,O.__bindingPointIndex),l.set(Mt,St))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,B={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,E=null,_=null,S=null,M=null,w=null,y=new ne(0,0,0),T=0,C=!1,I=null,D=null,N=null,L=null,H=null,pt.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ht,bindFramebuffer:Pt,drawBuffers:_t,useProgram:Ut,setBlending:lt,setMaterial:ct,setFlipSided:ut,setCullFace:gt,setLineWidth:Vt,setPolygonOffset:zt,setScissorTest:qt,activeTexture:$t,bindTexture:U,unbindTexture:he,compressedTexImage2D:ie,compressedTexImage3D:P,texImage2D:K,texImage3D:nt,pixelStorei:Ft,getParameter:yt,updateUBOMapping:Ot,uniformBlockBinding:Gt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:bt,viewport:vt,reset:Jt}}function Wx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return g?new OffscreenCanvas(P,b):Er("canvas")}function m(P,b,z){let X=1,J=ie(P);if((J.width>z||J.height>z)&&(X=z/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ft=Math.floor(X*J.width),mt=Math.floor(X*J.height);u===void 0&&(u=x(ft,mt));let K=b?x(ft,mt):u;return K.width=ft,K.height=mt,K.getContext("2d").drawImage(P,0,0,ft,mt),kt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ft+"x"+mt+")."),K}else return"data"in P&&kt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps}function v(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,b,z,X,J,ft=!1){if(P!==null){if(i[P]!==void 0)return i[P];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt;X&&(mt=t.get("EXT_texture_norm16"),mt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&mt&&(K=mt.R16_EXT),z===i.SHORT&&mt&&(K=mt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),b===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&mt&&(K=mt.RG16_EXT),z===i.SHORT&&mt&&(K=mt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_SHORT&&mt&&(K=mt.RGB16_EXT),z===i.SHORT&&mt&&(K=mt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),b===i.RGBA){let nt=ft?br:re.getTransfer(J);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=nt===fe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&mt&&(K=mt.RGBA16_EXT),z===i.SHORT&&mt&&(K=mt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(P,b){let z;return P?b===null||b===$n||b===Qs?z=i.DEPTH24_STENCIL8:b===Nn?z=i.DEPTH32F_STENCIL8:b===js&&(z=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$n||b===Qs?z=i.DEPTH_COMPONENT24:b===Nn?z=i.DEPTH_COMPONENT32F:b===js&&(z=i.DEPTH_COMPONENT16),z}function M(P,b){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ge&&P.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){let b=P.target;b.removeEventListener("dispose",w),T(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function y(P){let b=P.target;b.removeEventListener("dispose",y),I(b)}function T(P){let b=n.get(P);if(b.__webglInit===void 0)return;let z=P.source,X=d.get(z);if(X){let J=X[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(P),Object.keys(X).length===0&&d.delete(z)}n.remove(P)}function C(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let z=P.source,X=d.get(z);delete X[b.__cacheKey],o.memory.textures--}function I(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let J=0;J<b.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[X][J]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=P.textures;for(let X=0,J=z.length;X<J;X++){let ft=n.get(z[X]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(P)}let D=0;function N(){D=0}function L(){return D}function H(P){D=P}function q(){let P=D;return P>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function k(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function st(P,b){let z=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let X=P.image;if(X===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(z,P,b);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function Z(P,b){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ht(z,P,b);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function j(P,b){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ht(z,P,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function B(P,b){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Pt(z,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let rt={[si]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},et={[Ge]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},pt={[nd]:i.NEVER,[ad]:i.ALWAYS,[id]:i.LESS,[cl]:i.LEQUAL,[sd]:i.EQUAL,[hl]:i.GEQUAL,[rd]:i.GREATER,[od]:i.NOTEQUAL};function dt(P,b){if(b.type===Nn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ze||b.magFilter===Ea||b.magFilter===eo||b.magFilter===qi||b.minFilter===Ze||b.minFilter===Ea||b.minFilter===eo||b.minFilter===qi)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,rt[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,rt[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,rt[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ge||b.minFilter!==eo&&b.minFilter!==qi||b.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Tt(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));let X=b.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let ft=k(b);if(ft!==P.__cacheKey){J[ft]===void 0&&(J[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[ft].usedTimes++;let mt=J[P.__cacheKey];mt!==void 0&&(J[P.__cacheKey].usedTimes--,mt.usedTimes===0&&C(b)),P.__cacheKey=ft,P.__webglTexture=J[ft].texture}return z}function W(P,b,z){return Math.floor(Math.floor(P/z)/b)}function $(P,b,z,X){let ft=P.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,X,b.data);else{ft.sort((Ft,bt)=>Ft.start-bt.start);let mt=0;for(let Ft=1;Ft<ft.length;Ft++){let bt=ft[mt],vt=ft[Ft],Ot=bt.start+bt.count,Gt=W(vt.start,b.width,4),Jt=W(bt.start,b.width,4);vt.start<=Ot+1&&Gt===Jt&&W(vt.start+vt.count-1,b.width,4)===Gt?bt.count=Math.max(bt.count,vt.start+vt.count-bt.start):(++mt,ft[mt]=vt)}ft.length=mt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Ft=0,bt=ft.length;Ft<bt;Ft++){let vt=ft[Ft],Ot=Math.floor(vt.start/4),Gt=Math.ceil(vt.count/4),Jt=Ot%b.width,O=Math.floor(Ot/b.width),Mt=Gt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Jt,O,Mt,tt,z,X,b.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function ht(P,b,z){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);let J=Tt(P,b),ft=b.source;e.bindTexture(X,P.__webglTexture,i.TEXTURE0+z);let mt=n.get(ft);if(ft.version!==mt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let tt=re.getPrimaries(re.workingColorSpace),St=b.colorSpace===bi?null:re.getPrimaries(b.colorSpace),At=b.colorSpace===bi||tt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let nt=m(b.image,!1,s.maxTextureSize);nt=he(b,nt);let yt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),bt=_(b.internalFormat,yt,Ft,b.normalized,b.colorSpace,b.isVideoTexture);dt(X,b);let vt,Ot=b.mipmaps,Gt=b.isVideoTexture!==!0,Jt=mt.__version===void 0||J===!0,O=ft.dataReady,Mt=M(b,nt);if(b.isDepthTexture)bt=S(b.format===Yi,b.type),Jt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,yt,Ft,null));else if(b.isDataTexture)if(Ot.length>0){Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ot[0].width,Ot[0].height);for(let tt=0,St=Ot.length;tt<St;tt++)vt=Ot[tt],Gt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,vt.width,vt.height,yt,Ft,vt.data):e.texImage2D(i.TEXTURE_2D,tt,bt,vt.width,vt.height,0,yt,Ft,vt.data);b.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,nt.width,nt.height),O&&$(b,nt,yt,Ft)):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,yt,Ft,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,Ot[0].width,Ot[0].height,nt.depth);for(let tt=0,St=Ot.length;tt<St;tt++)if(vt=Ot[tt],b.format!==Un)if(yt!==null)if(Gt){if(O)if(b.layerUpdates.size>0){let At=nh(vt.width,vt.height,b.format,b.type);for(let ot of b.layerUpdates){let Bt=vt.data.subarray(ot*At/vt.data.BYTES_PER_ELEMENT,(ot+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,ot,vt.width,vt.height,1,yt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,vt.width,vt.height,nt.depth,yt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,bt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,vt.width,vt.height,nt.depth,yt,Ft,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,bt,vt.width,vt.height,nt.depth,0,yt,Ft,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ot[0].width,Ot[0].height);for(let tt=0,St=Ot.length;tt<St;tt++)vt=Ot[tt],b.format!==Un?yt!==null?Gt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,bt,vt.width,vt.height,0,vt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,vt.width,vt.height,yt,Ft,vt.data):e.texImage2D(i.TEXTURE_2D,tt,bt,vt.width,vt.height,0,yt,Ft,vt.data)}else if(b.isDataArrayTexture)if(Gt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,nt.width,nt.height,nt.depth),O)if(b.layerUpdates.size>0){let tt=nh(nt.width,nt.height,b.format,b.type);for(let St of b.layerUpdates){let At=nt.data.subarray(St*tt/nt.data.BYTES_PER_ELEMENT,(St+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,nt.width,nt.height,1,yt,Ft,At)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(b.isData3DTexture)Gt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Mt,bt,nt.width,nt.height,nt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(b.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(i.TEXTURE_2D,Mt,bt,nt.width,nt.height);else{let tt=nt.width,St=nt.height;for(let At=0;At<Mt;At++)e.texImage2D(i.TEXTURE_2D,At,bt,tt,St,0,yt,Ft,null),tt>>=1,St>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),f.add(b),tt.onpaint=St=>{let At=St.changedElements;for(let ot of f)At.includes(ot.image)&&(ot.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let At=i.RGBA,ot=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ot,Bt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Gt&&Jt){let tt=ie(Ot[0]);e.texStorage2D(i.TEXTURE_2D,Mt,bt,tt.width,tt.height)}for(let tt=0,St=Ot.length;tt<St;tt++)vt=Ot[tt],Gt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,yt,Ft,vt):e.texImage2D(i.TEXTURE_2D,tt,bt,yt,Ft,vt);b.generateMipmaps=!1}else if(Gt){if(Jt){let tt=ie(nt);e.texStorage2D(i.TEXTURE_2D,Mt,bt,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ft,nt)}else e.texImage2D(i.TEXTURE_2D,0,bt,yt,Ft,nt);p(b)&&v(X),mt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Pt(P,b,z){if(b.image.length!==6)return;let X=Tt(P,b),J=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);let ft=n.get(J);if(J.version!==ft.__version||X===!0){e.activeTexture(i.TEXTURE0+z);let mt=re.getPrimaries(re.workingColorSpace),K=b.colorSpace===bi?null:re.getPrimaries(b.colorSpace),nt=b.colorSpace===bi||mt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let yt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ft=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let ot=0;ot<6;ot++)!yt&&!Ft?bt[ot]=m(b.image[ot],!0,s.maxCubemapSize):bt[ot]=Ft?b.image[ot].image:b.image[ot],bt[ot]=he(b,bt[ot]);let vt=bt[0],Ot=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type),Jt=_(b.internalFormat,Ot,Gt,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,Mt=ft.__version===void 0||X===!0,tt=J.dataReady,St=M(b,vt);dt(i.TEXTURE_CUBE_MAP,b);let At;if(yt){O&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,vt.width,vt.height);for(let ot=0;ot<6;ot++){At=bt[ot].mipmaps;for(let Bt=0;Bt<At.length;Bt++){let Dt=At[Bt];b.format!==Un?Ot!==null?O?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt,0,0,Dt.width,Dt.height,Ot,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt,Jt,Dt.width,Dt.height,0,Dt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt,0,0,Dt.width,Dt.height,Ot,Gt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt,Jt,Dt.width,Dt.height,0,Ot,Gt,Dt.data)}}}else{if(At=b.mipmaps,O&&Mt){At.length>0&&St++;let ot=ie(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ft){O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt[ot].width,bt[ot].height,Ot,Gt,bt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,bt[ot].width,bt[ot].height,0,Ot,Gt,bt[ot].data);for(let Bt=0;Bt<At.length;Bt++){let Se=At[Bt].image[ot].image;O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt+1,0,0,Se.width,Se.height,Ot,Gt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt+1,Jt,Se.width,Se.height,0,Ot,Gt,Se.data)}}else{O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ot,Gt,bt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Ot,Gt,bt[ot]);for(let Bt=0;Bt<At.length;Bt++){let Dt=At[Bt];O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt+1,0,0,Ot,Gt,Dt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Bt+1,Jt,Ot,Gt,Dt.image[ot])}}}p(b)&&v(i.TEXTURE_CUBE_MAP),ft.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function _t(P,b,z,X,J,ft){let mt=r.convert(z.format,z.colorSpace),K=r.convert(z.type),nt=_(z.internalFormat,mt,K,z.normalized,z.colorSpace),yt=n.get(b),Ft=n.get(z);if(Ft.__renderTarget=b,!yt.__hasExternalTextures){let bt=Math.max(1,b.width>>ft),vt=Math.max(1,b.height>>ft);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ft,nt,bt,vt,b.depth,0,mt,K,null):e.texImage2D(J,ft,nt,bt,vt,0,mt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),$t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Ft.__webglTexture,0,qt(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Ft.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(P,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let X=b.depthTexture,J=X&&X.isDepthTexture?X.type:null,ft=S(b.stencilBuffer,J),mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(b),ft,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(b),ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,P)}else{let X=b.textures;for(let J=0;J<X.length;J++){let ft=X[J],mt=r.convert(ft.format,ft.colorSpace),K=r.convert(ft.type),nt=_(ft.internalFormat,mt,K,ft.normalized,ft.colorSpace);$t(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(b),nt,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(b),nt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,nt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(P,b,z){let X=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(b.depthTexture);if(J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),dt(i.TEXTURE_CUBE_MAP,b.depthTexture);let yt=r.convert(b.depthTexture.format),Ft=r.convert(b.depthTexture.type),bt;b.depthTexture.format===ri?bt=i.DEPTH_COMPONENT24:b.depthTexture.format===Yi&&(bt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,bt,b.width,b.height,0,yt,Ft,null)}}else st(b.depthTexture,0);let ft=J.__webglTexture,mt=qt(b),K=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,nt=b.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ri)$t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,K,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,K,ft,0);else if(b.depthTexture.format===Yi)$t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,K,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,K,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(P){let b=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=X}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)oe(b.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?oe(b.__webglFramebuffer[0],P,0):oe(b.__webglFramebuffer,P,0)}else if(z){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),Ut(b.__webglDepthbuffer[X],P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ut(b.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(P,b,z){let X=n.get(P);b!==void 0&&_t(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Q(P)}function ct(P){let b=P.texture,z=n.get(P),X=n.get(b);P.addEventListener("dispose",y);let J=P.textures,ft=P.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,o.memory.textures++),ft){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let nt=0;nt<b.mipmaps.length;nt++)z.__webglFramebuffer[K][nt]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let K=0,nt=J.length;K<nt;K++){let yt=n.get(J[K]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&$t(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let nt=J[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let yt=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),bt=_(nt.internalFormat,yt,Ft,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),vt=qt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,bt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),dt(i.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)_t(z.__webglFramebuffer[K][nt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt);else _t(z.__webglFramebuffer[K],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(b)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let K=0,nt=J.length;K<nt;K++){let yt=J[K],Ft=n.get(yt),bt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ft.__webglTexture),dt(bt,yt),_t(z.__webglFramebuffer,P,yt,i.COLOR_ATTACHMENT0+K,bt,0),p(yt)&&v(bt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,X.__webglTexture),dt(K,b),b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)_t(z.__webglFramebuffer[nt],P,b,i.COLOR_ATTACHMENT0,K,nt);else _t(z.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,K,0);p(b)&&v(K),e.unbindTexture()}P.depthBuffer&&Q(P)}function ut(P){let b=P.textures;for(let z=0,X=b.length;z<X;z++){let J=b[z];if(p(J)){let ft=E(P),mt=n.get(J).__webglTexture;e.bindTexture(ft,mt),v(ft),e.unbindTexture()}}}let gt=[],Vt=[];function zt(P){if(P.samples>0){if($t(P)===!1){let b=P.textures,z=P.width,X=P.height,J=i.COLOR_BUFFER_BIT,ft=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(P),K=b.length>1;if(K)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let Ft=n.get(b[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,J,i.NEAREST),l===!0&&(gt.length=0,Vt.length=0,gt.push(i.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(gt.push(ft),Vt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let Ft=n.get(b[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function qt(P){return Math.min(s.maxSamples,P.samples)}function $t(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function U(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function he(P,b){let z=P.colorSpace,X=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Sr&&z!==bi&&(re.getTransfer(z)===fe?(X!==Un||J!==hn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",z)),b}function ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xx(i,t){function e(n,s=bi){let r,o=re.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Un)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===Ha||n===za||n===oo||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===ao||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:qx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new gh,p={},v=e.getContextAttributes(),E=null,_=null,S=[],M=[],w=new at,y=null,T=null,C=new Ye;C.viewport=new Ce;let I=new Ye;I.viewport=new Ce;let D=[C,I],N=new va,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=S[W];return $===void 0&&($=new ks,S[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=S[W];return $===void 0&&($=new ks,S[W]=$),$.getGripSpace()},this.getHand=function(W){let $=S[W];return $===void 0&&($=new ks,S[W]=$),$.getHandSpace()};function q(W){let $=M.indexOf(W.inputSource);if($===-1)return;let ht=S[$];ht!==void 0&&(ht.update(W.inputSource,W.frame,c||o),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",st);for(let W=0;W<S.length;W++){let $=M[W];$!==null&&(M[W]=null,S[W].disconnect($))}L=null,H=null,m.reset();for(let W in p)delete p[W];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,_=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Pt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=v.stencil?Yi:ri,Pt=v.stencil?Qs:$n);let Ut={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new cn(u.textureWidth,u.textureHeight,{format:Un,type:hn,depthTexture:new Fi(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ht={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new cn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(W){for(let $=0;$<W.removed.length;$++){let ht=W.removed[$],Pt=M.indexOf(ht);Pt>=0&&(M[Pt]=null,S[Pt].disconnect(ht))}for(let $=0;$<W.added.length;$++){let ht=W.added[$],Pt=M.indexOf(ht);if(Pt===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=M.length){M.push(ht),Pt=Ut;break}else if(M[Ut]===null){M[Ut]=ht,Pt=Ut;break}if(Pt===-1)break}let _t=S[Pt];_t&&_t.connect(ht)}}let Z=new R,j=new R;function B(W,$,ht){Z.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(ht.matrixWorld);let Pt=Z.distanceTo(j),_t=$.projectionMatrix.elements,Ut=ht.projectionMatrix.elements,oe=_t[14]/(_t[10]-1),Q=_t[14]/(_t[10]+1),lt=(_t[9]+1)/_t[5],ct=(_t[9]-1)/_t[5],ut=(_t[8]-1)/_t[0],gt=(Ut[8]+1)/Ut[0],Vt=oe*ut,zt=oe*gt,qt=Pt/(-ut+gt),$t=qt*-ut;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX($t),W.translateZ(qt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_t[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let U=oe+qt,he=Q+qt,ie=Vt-$t,P=zt+(Pt-$t),b=lt*Q/he*U,z=ct*Q/he*U;W.projectionMatrix.makePerspective(ie,P,b,z,U,he),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function rt(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let $=W.near,ht=W.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),N.near=I.near=C.near=$,N.far=I.far=C.far=ht,(L!==N.near||H!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,H=N.far),N.layers.mask=W.layers.mask|6,C.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let Pt=W.parent,_t=N.cameras;rt(N,Pt);for(let Ut=0;Ut<_t.length;Ut++)rt(_t[Ut],Pt);_t.length===2?B(N,C,I):N.projectionMatrix.copy(C.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),et(W,N,Pt)};function et(W,$,ht){ht===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Hs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(W){return p[W]};let pt=null;function dt(W,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Pt=!1;ht.length!==N.cameras.length&&(N.cameras.length=0,Pt=!0);for(let Q=0;Q<ht.length;Q++){let lt=ht[Q],ct=null;if(d!==null)ct=d.getViewport(lt);else{let gt=f.getViewSubImage(u,lt);ct=gt.viewport,Q===0&&(t.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(_))}let ut=D[Q];ut===void 0&&(ut=new Ye,ut.layers.enable(Q),ut.viewport=new Ce,D[Q]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ct.x,ct.y,ct.width,ct.height),Q===0&&(N.matrix.copy(ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pt===!0&&N.cameras.push(ut)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Q=f.getDepthInformation(ht[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Q=0;Q<ht.length;Q++){let lt=ht[Q].camera;if(lt){let ct=p[lt];ct||(ct=new Lr,p[lt]=ct);let ut=f.getCameraImage(lt);ct.sourceTexture=ut}}}}for(let ht=0;ht<S.length;ht++){let Pt=M[ht],_t=S[ht];Pt!==null&&_t!==void 0&&_t.update(Pt,$,c||o)}pt&&pt(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Tt=new kd;Tt.setAnimationLoop(dt),this.setAnimationLoop=function(W){pt=W},this.dispose=function(){}}},Zx=new Yt,Yd=new Zt;Yd.set(-1,0,0,0,1,0,0,0,1);function $x(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),E=v.envMap,_=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let M=S.program;n.uniformBlockBinding(_,M)}function c(_,S){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",v));let w=S.program;n.updateUBOMapping(_,w);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let S=f();_.__bindingPointIndex=S;let M=i.createBuffer(),w=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=s[_.id],M=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=M.length;y<T;y++){let C=M[y];if(Array.isArray(C))for(let I=0,D=C.length;I<D;I++)d(C[I],y,I,w);else d(C,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,S,M,w){if(x(_,S,M,w)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let D=T[I],N=p(D);g(D,_.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,S,M){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,M)}function x(_,S,M,w){let y=_.value,T=S+"_"+M;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{let C=w[T];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(_){let S=_.uniforms,M=0,w=16;for(let T=0,C=S.length;T<C;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,N=I.length;D<N;D++){let L=I[D],H=Array.isArray(L.value)?L.value:[L.value];for(let q=0,k=H.length;q<k;q++){let st=H[q],Z=p(st),j=M%w,B=j%Z.boundary,rt=j+B;M+=B,rt!==0&&w-rt<Z.storage&&(M+=w-rt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=Z.storage}}}let y=M%w;return y>0&&(M+=w-y),_.__size=M,_.__cache={},this}function p(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",_),S}function v(_){let S=_.target;S.removeEventListener("dispose",v);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function jx(){return hi===null&&(hi=new Pr(Kx,16,16,Zi,Jn),hi.name="DFG_LUT",hi.minFilter=Ze,hi.magFilter=Ze,hi.wrapS=ii,hi.wrapT=ii,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var ml=class{constructor(t={}){let{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Ia,Pa,Ca]),p=new Set([hn,$n,js,Qs,wa,Aa]),v=new Uint32Array(4),E=new Int32Array(4),_=new R,S=null,M=null,w=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,D=null,N=null,L=null,H=null;this._outputColorSpace=Oe;let q=0,k=0,st=null,Z=-1,j=null,B=new Ce,rt=new Ce,et=null,pt=new ne(0),dt=0,Tt=e.width,W=e.height,$=1,ht=null,Pt=null,_t=new Ce(0,0,Tt,W),Ut=new Ce(0,0,Tt,W),oe=!1,Q=new Ws,lt=!1,ct=!1,ut=new Yt,gt=new R,Vt=new Ce,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function $t(){return st===null?$:1}let U=n;function he(A,F){return e.getContext(A,F)}let ie,P,b,z,X,J,ft,mt,K,nt,yt,Ft,bt,vt,Ot,Gt,Jt,O,Mt,tt,St,At,ot;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",zn,!1),U===null){let F="webgl2";if(U=he(F,A),U===null)throw he(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(A){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Wt("WebGLRenderer: "+A.message),A}function Bt(){ie=new r_(U),ie.init(),St=new Xx(U,ie),P=new $g(U,ie,t,St),b=new Gx(U,ie),P.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),N=U.createFramebuffer(),L=U.createFramebuffer(),H=U.createFramebuffer(),z=new l_(U),X=new Cx,J=new Wx(U,ie,b,X,P,St,z),ft=new s_(C),mt=new hm(U),At=new Yg(U,mt),K=new o_(U,mt,z,At),nt=new h_(U,K,mt,At,z),O=new c_(U,P,J),Ot=new Jg(X),yt=new Rx(C,ft,ie,P,At,Ot),Ft=new $x(C,X),bt=new Ix,vt=new Ox(ie),Jt=new qg(C,ft,b,nt,g,l),Gt=new Vx(C,nt,P),ot=new Jx(U,z,P,b),Mt=new Zg(U,ie,z),tt=new a_(U,ie,z),z.programs=yt.programs,C.capabilities=P,C.extensions=ie,C.properties=X,C.renderLists=bt,C.shadowMap=Gt,C.state=b,C.info=z}x!==hn&&(T=new d_(x,e.width,e.height,a,s,r));let Dt=new _h(C,U);this.xr=Dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(Tt,W,!1))},this.getSize=function(A){return A.set(Tt,W)},this.setSize=function(A,F,Y=!0){if(Dt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=A,W=F,e.width=Math.floor(A*$),e.height=Math.floor(F*$),Y===!0&&(e.style.width=A+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Tt*$,W*$).floor()},this.setDrawingBufferSize=function(A,F,Y){Tt=A,W=F,$=Y,e.width=Math.floor(A*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(x===hn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,F,Y,V){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,F,Y,V),b.viewport(B.copy(_t).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,F,Y,V){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,F,Y,V),b.scissor(rt.copy(Ut).multiplyScalar($).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){b.setScissorTest(oe=A)},this.setOpaqueSort=function(A){ht=A},this.setTransparentSort=function(A){Pt=A},this.getClearColor=function(A){return A.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Y=!0){let V=0;if(A){let G=!1;if(st!==null){let wt=st.texture.format;G=m.has(wt)}if(G){let wt=st.texture.type,Ct=p.has(wt),Et=Jt.getClearColor(),It=Jt.getClearAlpha(),Nt=Et.r,jt=Et.g,se=Et.b;Ct?(v[0]=Nt,v[1]=jt,v[2]=se,v[3]=It,U.clearBufferuiv(U.COLOR,0,v)):(E[0]=Nt,E[1]=jt,E[2]=se,E[3]=It,U.clearBufferiv(U.COLOR,0,E))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Jt.dispose(),bt.dispose(),vt.dispose(),X.dispose(),ft.dispose(),nt.dispose(),At.dispose(),ot.dispose(),yt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Xh),Dt.removeEventListener("sessionend",qh),Qi.stop()};function Se(A){A.preventDefault(),Jc("WebGLRenderer: Context Lost."),I=!0}function ue(){Jc("WebGLRenderer: Context Restored."),I=!1;let A=z.autoReset,F=Gt.enabled,Y=Gt.autoUpdate,V=Gt.needsUpdate,G=Gt.type;Bt(),z.autoReset=A,Gt.enabled=F,Gt.autoUpdate=Y,Gt.needsUpdate=V,Gt.type=G}function zn(A){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ti(A){let F=A.target;F.removeEventListener("dispose",ti),Rf(F)}function Rf(A){Cf(A),X.remove(A)}function Cf(A){let F=X.get(A).programs;F!==void 0&&(F.forEach(function(Y){yt.releaseProgram(Y)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,V,G,wt){F===null&&(F=zt);let Ct=G.isMesh&&G.matrixWorld.determinantAffine()<0,Et=Lf(A,F,Y,V,G);b.setMaterial(V,Ct);let It=Y.index,Nt=1;if(V.wireframe===!0){if(It=K.getWireframeAttribute(Y),It===void 0)return;Nt=2}let jt=Y.drawRange,se=Y.attributes.position,Lt=jt.start*Nt,de=(jt.start+jt.count)*Nt;wt!==null&&(Lt=Math.max(Lt,wt.start*Nt),de=Math.min(de,(wt.start+wt.count)*Nt)),It!==null?(Lt=Math.max(Lt,0),de=Math.min(de,It.count)):se!=null&&(Lt=Math.max(Lt,0),de=Math.min(de,se.count));let Ue=de-Lt;if(Ue<0||Ue===1/0)return;At.setup(G,V,Et,Y,It);let we,xe=Mt;if(It!==null&&(we=mt.get(It),xe=tt,xe.setIndex(we)),G.isMesh)V.wireframe===!0?(b.setLineWidth(V.wireframeLinewidth*$t()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(G.isLine){let Je=V.linewidth;Je===void 0&&(Je=1),b.setLineWidth(Je*$t()),G.isLineSegments?xe.setMode(U.LINES):G.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else G.isPoints?xe.setMode(U.POINTS):G.isSprite&&xe.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))xe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Je=G._multiDrawStarts,Rt=G._multiDrawCounts,nn=G._multiDrawCount,ae=It?mt.get(It).bytesPerElement:1,An=X.get(V).currentProgram.getUniforms();for(let ei=0;ei<nn;ei++)An.setValue(U,"_gl_DrawID",ei),xe.render(Je[ei]/ae,Rt[ei])}else if(G.isInstancedMesh)xe.renderInstances(Lt,Ue,G.count);else if(Y.isInstancedBufferGeometry){let Je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Rt=Math.min(Y.instanceCount,Je);xe.renderInstances(Lt,Ue,Rt)}else xe.render(Lt,Ue)};function Wh(A,F,Y,V){D!==null&&A.isNodeMaterial&&D.setObject(V,A),lt===!0&&Ot.setState(A,Y,!1),A.transparent===!0&&A.side===Ne&&A.forceSinglePass===!1?(A.side=$e,A.needsUpdate=!0,_o(A,F,V),A.side=Gi,A.needsUpdate=!0,_o(A,F,V),A.side=Ne):_o(A,F,V)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),D!==null&&D.renderStart(A,F,Y),M=vt.get(Y),M.init(F),y.push(M),Y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),ct=this.localClippingEnabled,lt=Ot.init(this.clippingPlanes,ct),lt===!0&&Ot.setGlobalState(this.clippingPlanes,F),D!==null&&Gt.render(M.state.shadowsArray,Y,F);let V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let wt=G.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let Et=wt[Ct];Wh(Et,Y,F,G),V.add(Et)}else Wh(wt,Y,F,G),V.add(wt)}),M=y.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(A,F,Y=null){let V=this.compile(A,F,Y);return new Promise(G=>{function wt(){if(V.forEach(function(Ct){let It=X.get(Ct).currentProgram;(It===void 0||It.isReady())&&V.delete(Ct)}),V.size===0){G(A);return}setTimeout(wt,10)}ie.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Yl=null;function Pf(A){Yl&&Yl(A)}function Xh(){Qi.stop()}function qh(){Qi.start()}let Qi=new kd;Qi.setAnimationLoop(Pf),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){Yl=A,Dt.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},Dt.addEventListener("sessionstart",Xh),Dt.addEventListener("sessionend",qh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(A,F);let Y=Dt.enabled===!0&&Dt.isPresenting===!0,V=T!==null&&(st===null||Y)&&T.begin(C,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,F,st),M=vt.get(A,y.length),M.init(F),M.state.textureUnits=J.getTextureUnits(),y.push(M),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(ut,Wn,F.reversedDepth),ct=this.localClippingEnabled,lt=Ot.init(this.clippingPlanes,ct),S=bt.get(A,w.length),S.init(),w.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=C.xr.getDepthSensingMesh();Ct!==null&&Zl(Ct,F,-1/0,C.sortObjects)}Zl(A,F,0,C.sortObjects),S.finish(),D!==null&&D.updateLights(M.state.lightsArray),C.sortObjects===!0&&S.sort(ht,Pt),qt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,qt&&Jt.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ot.beginShadows();let G=M.state.shadowsArray;if(Gt.render(G,A,F),lt===!0&&Ot.endShadows(),(V&&T.hasRenderPass())===!1){let Ct=S.opaque,Et=S.transmissive;if(M.setupLights(),F.isArrayCamera){let It=F.cameras;if(Et.length>0)for(let Nt=0,jt=It.length;Nt<jt;Nt++){let se=It[Nt];Zh(Ct,Et,A,se)}qt&&Jt.render(A);for(let Nt=0,jt=It.length;Nt<jt;Nt++){let se=It[Nt];Yh(S,A,se,se.viewport)}}else Et.length>0&&Zh(Ct,Et,A,F),qt&&Jt.render(A),Yh(S,A,F)}st!==null&&k===0&&(J.updateMultisampleRenderTarget(st),J.updateRenderTargetMipmap(st)),V&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,F),At.resetDefaultState(),Z=-1,j=null,y.pop(),y.length>0?(M=y[y.length-1],J.setTextureUnits(M.state.textureUnits),lt===!0&&Ot.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,D!==null&&D.renderEnd()};function Zl(A,F,Y,V){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Q)){V&&Vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);let Ct=nt.update(A),Et=A.material;Et.visible&&S.push(A,Ct,Et,Y,Vt.z,null,F)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Q))){let Ct=nt.update(A),Et=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Vt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Vt.copy(Ct.boundingSphere.center)),Vt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Et)){let It=Ct.groups;for(let Nt=0,jt=It.length;Nt<jt;Nt++){let se=It[Nt],Lt=Et[se.materialIndex];Lt&&Lt.visible&&S.push(A,Ct,Lt,Y,Vt.z,se,F)}}else Et.visible&&S.push(A,Ct,Et,Y,Vt.z,null,F)}}let wt=A.children;for(let Ct=0,Et=wt.length;Ct<Et;Ct++)Zl(wt[Ct],F,Y,V)}function Yh(A,F,Y,V){let{opaque:G,transmissive:wt,transparent:Ct}=A;M.setupLightsView(Y),lt===!0&&Ot.setGlobalState(C.clippingPlanes,Y),V&&b.viewport(B.copy(V)),G.length>0&&go(G,F,Y),wt.length>0&&go(wt,F,Y),Ct.length>0&&go(Ct,F,Y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Zh(A,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let Lt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new cn(1,1,{generateMipmaps:!0,type:Lt?Jn:hn,minFilter:qi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let wt=M.state.transmissionRenderTarget[V.id],Ct=V.viewport||B;wt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);let Et=C.getRenderTarget(),It=C.getActiveCubeFace(),Nt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(pt),dt=C.getClearAlpha(),dt<1&&C.setClearColor(16777215,.5),C.clear(),qt&&Jt.render(Y);let jt=C.toneMapping;C.toneMapping=Zn;let se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),lt===!0&&Ot.setGlobalState(C.clippingPlanes,V),go(A,Y,V),J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let de=0,Ue=F.length;de<Ue;de++){let we=F[de],{object:xe,geometry:Je,material:Rt,group:nn}=we;if(Rt.side===Ne&&xe.layers.test(V.layers)){let ae=Rt.side;Rt.side=$e,Rt.needsUpdate=!0,$h(xe,Y,V,Je,Rt,nn),Rt.side=ae,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt))}C.setRenderTarget(Et,It,Nt),C.setClearColor(pt,dt),se!==void 0&&(V.viewport=se),C.toneMapping=jt}function go(A,F,Y){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,wt=A.length;G<wt;G++){let Ct=A[G],{object:Et,geometry:It,group:Nt}=Ct,jt=Ct.material;jt.allowOverride===!0&&V!==null&&(jt=V),Et.layers.test(Y.layers)&&$h(Et,F,Y,It,jt,Nt)}}function $h(A,F,Y,V,G,wt){D!==null&&G.isNodeMaterial&&D.setObject(A,G),A.onBeforeRender(C,F,Y,V,G,wt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,F,Y,V,A,wt),G.transparent===!0&&G.side===Ne&&G.forceSinglePass===!1?(G.side=$e,G.needsUpdate=!0,C.renderBufferDirect(Y,F,V,G,A,wt),G.side=Gi,G.needsUpdate=!0,C.renderBufferDirect(Y,F,V,G,A,wt),G.side=Ne):C.renderBufferDirect(Y,F,V,G,A,wt),A.onAfterRender(C,F,Y,V,G,wt)}function _o(A,F,Y){F.isScene!==!0&&(F=zt);let V=X.get(A),G=M.state.lights,wt=M.state.shadowsArray,Ct=G.state.version,Et=yt.getParameters(A,G.state,wt,F,Y,M.state.lightProbeGridArray),It=yt.getProgramCacheKey(Et),Nt=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=ft.get(A.envMap||V.environment,jt),V.envMapRotation=V.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",ti),Nt=new Map,V.programs=Nt);let se=Nt.get(It);if(se!==void 0){if(V.currentProgram===se&&V.lightsStateVersion===Ct)return Kh(A,Et),se}else Et.uniforms=yt.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Y,Et),A.onBeforeCompile(Et,C),se=yt.acquireProgram(Et,It),Nt.set(It,se),V.uniforms=Et.uniforms;let Lt=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),Kh(A,Et),V.needsLights=Nf(A),V.lightsStateVersion=Ct,V.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.sunLights.value=G.state.sun,Lt.sunLightShadows.value=G.state.sunShadow,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.sunShadowMatrix.value=G.state.sunShadowMatrix,Lt.sunShadowCascade.value=G.state.sunShadowCascade,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=se,V.uniformsList=null,se}function Jh(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=nr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Kh(A,F){let Y=X.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function If(A,F){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let Y=0,V=A.length;Y<V;Y++){let G=A[Y];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function Lf(A,F,Y,V,G){F.isScene!==!0&&(F=zt),J.resetTextureUnits();let wt=F.fog,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Et=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:re.workingColorSpace,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=ft.get(V.envMap||Ct,It),jt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!Y.morphAttributes.position,de=!!Y.morphAttributes.normal,Ue=!!Y.morphAttributes.color,we=Zn;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(we=C.toneMapping);let xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Je=xe!==void 0?xe.length:0,Rt=X.get(V),nn=M.state.lights;if(lt===!0&&(ct===!0||A!==j)){let be=A===j&&V.id===Z;Ot.setState(V,A,be)}let ae=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==nn.state.version||Rt.outputColorSpace!==Et||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==Nt||V.fog===!0&&Rt.fog!==wt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ot.numPlanes||Rt.numIntersection!==Ot.numIntersection)||Rt.vertexAlphas!==jt||Rt.vertexTangents!==se||Rt.morphTargets!==Lt||Rt.morphNormals!==de||Rt.morphColors!==Ue||Rt.toneMapping!==we||Rt.morphTargetsCount!==Je||!!Rt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Rt.__version=V.version);let An=Rt.currentProgram;ae===!0&&(An=_o(V,F,G),D&&V.isNodeMaterial&&D.onUpdateProgram(V,An,Rt));let ei=!1,wi=!1,xs=!1,ge=An.getUniforms(),De=Rt.uniforms;if(b.useProgram(An.program)&&(ei=!0,wi=!0,xs=!0),V.id!==Z&&(Z=V.id,wi=!0),Rt.needsLights){let be=If(M.state.lightProbeGridArray,G);Rt.lightProbeGrid!==be&&(Rt.lightProbeGrid=be,wi=!0)}if(ei||j!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(U,"projectionMatrix",A.projectionMatrix),ge.setValue(U,"viewMatrix",A.matrixWorldInverse);let Ri=ge.map.cameraPosition;Ri!==void 0&&Ri.setValue(U,gt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,wi=!0,xs=!0)}if(Rt.needsLights&&(nn.state.sunShadowMap.length>0&&ge.setValue(U,"sunShadowMap",nn.state.sunShadowMap,J),nn.state.directionalShadowMap.length>0&&ge.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,J),nn.state.spotShadowMap.length>0&&ge.setValue(U,"spotShadowMap",nn.state.spotShadowMap,J),nn.state.pointShadowMap.length>0&&ge.setValue(U,"pointShadowMap",nn.state.pointShadowMap,J)),G.isSkinnedMesh){ge.setOptional(U,G,"bindMatrix"),ge.setOptional(U,G,"bindMatrixInverse");let be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ge.setValue(U,"boneTexture",be.boneTexture,J))}G.isBatchedMesh&&(ge.setOptional(U,G,"batchingTexture"),ge.setValue(U,"batchingTexture",G._matricesTexture,J),ge.setOptional(U,G,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",G._indirectTexture,J),ge.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",G._colorsTexture,J));let Ai=Y.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&O.update(G,Y,An),(wi||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,ge.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=jx()),wi){if(ge.setValue(U,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&Df(De,xs),wt&&V.fog===!0&&Ft.refreshFogUniforms(De,wt),Ft.refreshMaterialUniforms(De,V,$,W,M.state.transmissionRenderTarget[A.id]),Rt.needsLights&&Rt.lightProbeGrid){let be=Rt.lightProbeGrid;De.probesSH.value=be.texture,De.probesMin.value.copy(be.boundingBox.min),De.probesMax.value.copy(be.boundingBox.max),De.probesResolution.value.copy(be.resolution)}nr.upload(U,Jh(Rt),De,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(nr.upload(U,Jh(Rt),De,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(U,"center",G.center),ge.setValue(U,"modelViewMatrix",G.modelViewMatrix),ge.setValue(U,"normalMatrix",G.normalMatrix),ge.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let be=V.uniformsGroups;for(let Ri=0,ys=be.length;Ri<ys;Ri++){let Qh=be[Ri];ot.update(Qh,An),ot.bind(Qh,An)}}return An}function Df(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,F,Y){let V=X.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=F,X.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let Y=X.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){st=A,q=F,k=Y;let V=null,G=!1,wt=!1;if(A){let Et=X.get(A);if(Et.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(U.FRAMEBUFFER,Et.__webglFramebuffer),B.copy(A.viewport),rt.copy(A.scissor),et=A.scissorTest,b.viewport(B),b.scissor(rt),b.setScissorTest(et),Z=-1;return}else if(Et.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(Et.__hasExternalTextures)J.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let jt=A.depthTexture;if(Et.__boundDepthTexture!==jt){if(jt!==null&&X.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}let It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let Nt=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?V=Nt[F][Y]:V=Nt[F],G=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?V=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[Y]:V=Nt,B.copy(A.viewport),rt.copy(A.scissor),et=A.scissorTest}else B.copy(_t).multiplyScalar($).floor(),rt.copy(Ut).multiplyScalar($).floor(),et=oe;if(Y!==0&&(V=N),b.bindFramebuffer(U.FRAMEBUFFER,V)&&b.drawBuffers(A,V),b.viewport(B),b.scissor(rt),b.setScissorTest(et),G){let Et=X.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Et.__webglTexture,Y)}else if(wt){let Et=F;for(let It=0;It<A.textures.length;It++){let Nt=X.get(A.textures[It]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+It,Nt.__webglTexture,Y,Et)}}else if(A!==null&&Y!==0){let Et=X.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,Y)}Z=-1};function jh(A){let F=X.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=P.textureFormatReadable(A.format),F.__typeReadable=P.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,Y,V,G,wt,Ct,Et=0){if(!(A&&A.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){b.bindFramebuffer(U.FRAMEBUFFER,It);try{let Nt=A.textures[Et],jt=Nt.format,se=Nt.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Et);let Lt=jh(Nt);if(Lt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-V&&Y>=0&&Y<=A.height-G&&U.readPixels(F,Y,V,G,St.convert(jt),St.convert(se),wt)}finally{let Nt=st!==null?X.get(st).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,V,G,wt,Ct,Et=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(F>=0&&F<=A.width-V&&Y>=0&&Y<=A.height-G){b.bindFramebuffer(U.FRAMEBUFFER,It);let Nt=A.textures[Et],jt=Nt.format,se=Nt.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Et);let Lt=jh(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.bufferData(U.PIXEL_PACK_BUFFER,wt.byteLength,U.STREAM_READ),U.readPixels(F,Y,V,G,St.convert(jt),St.convert(se),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ue=st!==null?X.get(st).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,Ue);let we=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ud(U,we,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,wt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(de),U.deleteSync(we),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Y=0){let V=Math.pow(2,-Y),G=Math.floor(A.image.width*V),wt=Math.floor(A.image.height*V),Ct=F!==null?F.x:0,Et=F!==null?F.y:0;J.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ct,Et,G,wt),b.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,V=null,G=0,wt=0){let Ct,Et,It,Nt,jt,se,Lt,de,Ue,we=A.isCompressedTexture?A.mipmaps[wt]:A.image;if(Y!==null)Ct=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,jt=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let De=Math.pow(2,-G);Ct=Math.floor(we.width*De),Et=Math.floor(we.height*De),A.isDataArrayTexture?It=we.depth:A.isData3DTexture?It=Math.floor(we.depth*De):It=1,Nt=0,jt=0,se=0}V!==null?(Lt=V.x,de=V.y,Ue=V.z):(Lt=0,de=0,Ue=0);let xe=St.convert(F.format),Je=St.convert(F.type),Rt;F.isData3DTexture?(J.setTexture3D(F,0),Rt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),Rt=U.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),Rt=U.TEXTURE_2D),b.activeTexture(U.TEXTURE0),b.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=b.getParameter(U.UNPACK_ROW_LENGTH),ae=b.getParameter(U.UNPACK_IMAGE_HEIGHT),An=b.getParameter(U.UNPACK_SKIP_PIXELS),ei=b.getParameter(U.UNPACK_SKIP_ROWS),wi=b.getParameter(U.UNPACK_SKIP_IMAGES);b.pixelStorei(U.UNPACK_ROW_LENGTH,we.width),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we.height),b.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),b.pixelStorei(U.UNPACK_SKIP_ROWS,jt),b.pixelStorei(U.UNPACK_SKIP_IMAGES,se);let xs=A.isDataArrayTexture||A.isData3DTexture,ge=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let De=X.get(A),Ai=X.get(F),be=X.get(De.__renderTarget),Ri=X.get(Ai.__renderTarget);b.bindFramebuffer(U.READ_FRAMEBUFFER,be.__webglFramebuffer),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let ys=0;ys<It;ys++)xs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(A).__webglTexture,G,se+ys),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,wt,Ue+ys)),U.blitFramebuffer(Nt,jt,Ct,Et,Lt,de,Ct,Et,U.DEPTH_BUFFER_BIT,U.NEAREST);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||X.has(A)){let De=X.get(A),Ai=X.get(F);b.bindFramebuffer(U.READ_FRAMEBUFFER,L),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let be=0;be<It;be++)xs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,G,se+be):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,G),ge?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ai.__webglTexture,wt,Ue+be):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ai.__webglTexture,wt),G!==0?U.blitFramebuffer(Nt,jt,Ct,Et,Lt,de,Ct,Et,U.COLOR_BUFFER_BIT,U.NEAREST):ge?U.copyTexSubImage3D(Rt,wt,Lt,de,Ue+be,Nt,jt,Ct,Et):U.copyTexSubImage2D(Rt,wt,Lt,de,Nt,jt,Ct,Et);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Rt,wt,Lt,de,Ue,Ct,Et,It,xe,Je,we.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,wt,Lt,de,Ue,Ct,Et,It,xe,we.data):U.texSubImage3D(Rt,wt,Lt,de,Ue,Ct,Et,It,xe,Je,we):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,wt,Lt,de,Ct,Et,xe,Je,we.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,wt,Lt,de,we.width,we.height,xe,we.data):U.texSubImage2D(U.TEXTURE_2D,wt,Lt,de,Ct,Et,xe,Je,we);b.pixelStorei(U.UNPACK_ROW_LENGTH,nn),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),b.pixelStorei(U.UNPACK_SKIP_PIXELS,An),b.pixelStorei(U.UNPACK_SKIP_ROWS,ei),b.pixelStorei(U.UNPACK_SKIP_IMAGES,wi),wt===0&&F.generateMipmaps&&U.generateMipmap(Rt),b.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){q=0,k=0,st=null,b.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Zd={type:"change"},yh={type:"start"},Jd={type:"end"},xl=new Gs,$d=new _n,Qx=Math.cos(70*tn.DEG2RAD),ke=new R,un=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xh=1e-6,yl=class extends Jr{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Be,this._lastTargetPosition=new R,this._quat=new Be().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new R,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new R,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ey.bind(this),this._onPointerDown=ty.bind(this),this._onPointerUp=ny.bind(this),this._onContextMenu=cy.bind(this),this._onMouseWheel=ry.bind(this),this._onKeyDown=oy.bind(this),this._onTouchStart=ay.bind(this),this._onTouchMove=ly.bind(this),this._onMouseDown=iy.bind(this),this._onMouseMove=sy.bind(this),this._interceptControlDown=hy.bind(this),this._interceptControlUp=uy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zd),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ke.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<Qx?this.object.lookAt(this.target):($d.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane($d,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xh||this._lastTargetPosition.distanceToSquared(this.target)>xh?(this.dispatchEvent(Zd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?un/60*this.autoRotateSpeed*t:un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ke.copy(s).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ty(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ey(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ny(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jd),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(yh)}function sy(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ry(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jd))}function oy(i){this.enabled!==!1&&this._handleKeyDown(i)}function ay(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(yh)}function ly(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function cy(i){this.enabled!==!1&&i.preventDefault()}function hy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rr=class i extends it{constructor(){let t=i.SkyShader,e=new We({name:t.name,uniforms:ds.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:$e,depthWrite:!1});super(new pe(1,1,1),e),this.isSky=!0}};rr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var uo=i=>Math.min(1,Math.max(0,i)),Ee=(i,t,e)=>i+(t-i)*e,ms=(i,t,e)=>{let n=uo((e-i)/(t-i));return n*n*(3-2*n)};var Xe={hold:-5.75,orlop:-1.15,lower:1,middle:3.1,upper:5.2,qd:7.25,poop:9.15},bn=1.2,dn=15.6,Ei=-13.4;function Kn(i){let t=(i-2)/28;return .85*t*t}function Ht(i,t){return Xe[i]+Kn(t)}function _e(i){let t=8.65+Kn(i);return t+=1.9*ms(Ei+1,Ei-1,i),t+=.9*ms(-25,-29.5,i),t}function En(i){if(i<2){let t=uo((i- -7.4)/9.4);return 24.75+4.3*(1-(1-t)*(1-t))}return 29.05+.06*(i-2)}var ps=1.6;function qe(i){if(i<ps){let t=uo((i- -7.4)/(ps- -7.4));return Ee(-25.75,-27.65,t)}return-27.65-1.1*ms(ps,4.5,i)-.11*Math.max(0,i-4.5)}function vl(i){if(i<=-7.4)return 0;if(i<1.6){let e=(1.6-i)/9;return 7.9*Math.pow(1-Math.pow(e,2.4),1/2.4)}let t=(i-1.6)/(13-1.6);return 7.9*(1-.17*Math.pow(t,1.6))}function vh(i){return .8*ms(-2.4,2.4,i)}function Mh(i,t){let e=ms(-6.5,1.5,t),n=Ee(.58,.73,e);if(i>n){let r=uo((i-n)/(1-n)),o=Ee(1.7,2.2,e),a=Ee(1.05,.46,e);return Math.pow(Math.max(0,1-Math.pow(r,o)),a)}let s=Ee(.44,.24,e);if(i<s){let r=uo((s-i)/s),o=Ee(1.6,2,e),a=Ee(1.15,.65,e),l=vh(t);return l+(1-l)*Math.pow(Math.max(0,1-Math.pow(r,o)),a)}return 1}function Xt(i,t){let e=qe(t),n=En(t);return i<e||i>n?0:vl(t)*Mh((i-e)/(n-e),t)}var Sn=-31,$i=31,gs=-10,_s=14,Kd=i=>(i-Sn)/($i-Sn),jd=(i,t)=>(t-Kn(i)-gs)/(_s-gs),Ml=[{name:"lower",deck:"lower",count:15,x0:-20.4,dx:3,cy:.82,w:1.05,h:.95,lid:!0,bore:.165,len:3},{name:"middle",deck:"middle",count:14,x0:-21,dx:3.05,cy:.78,w:.95,h:.86,lid:!0,bore:.15,len:2.9},{name:"upper",deck:"upper",count:15,x0:-21,dx:3.05,cy:.74,w:.85,h:.8,lid:!0,bore:.12,len:2.6},{name:"qd",deck:"qd",count:6,x0:-20.4,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"fc",deck:"qd",count:1,x0:18.6,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"carronade",deck:"qd",count:1,x0:21.4,dx:3,cy:.66,w:.85,h:.75,lid:!1,bore:.2,len:1.6,carronade:!0}];function Sl(){let i=[];for(let t of Ml)for(let e=0;e<t.count;e++){let n=t.x0+e*t.dx;i.push({tier:t,x:n,y:Xe[t.deck]+t.cy+Kn(n)})}return i}var Sh=Ml.slice(0,3).map(i=>{let t=Xe[i.deck]+i.cy;return[t-i.h/2-.2,t+i.h/2+.2]}),bl=.45,Qd={fore:{x:22.75,scale:.9,rake:0},main:{x:-2.45,scale:1,rake:.035},mizzen:{x:-19.15,scale:.72,rake:.052}},tf={main:{course:31.19,topsail:22.25,topgallant:14.86,royal:10.97},fore:{course:27.15,topsail:19.66,topgallant:13.11,royal:9.75},mizzen:{course:19.66,topsail:14.94,topgallant:9.98,royal:7.32}},ef=-.0068;function Fn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function di(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function On(i,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let s=new Cn(i);return t&&(s.colorSpace=Oe),e&&(s.wrapS=s.wrapT=si),s.anisotropy=n,s.needsUpdate=!0,s}var Te={black:"#2a2d30",ochre:"#cfa65a",red:"#a88a52",deck:"#b49c76",canvas:"#e8dfc8",copper:"#a8603a",gold:"#d4a640"};function sf(){let e=Fn(4096,1024),n=e.getContext("2d"),s=Fn(1024,256),r=s.getContext("2d"),o=4096/($i-Sn),a=1024/(_s-gs),l=d=>(d-Sn)*o,c=d=>(_s-d)*a,h=di(7);n.fillStyle=Te.black,n.fillRect(0,0,4096,1024),n.fillStyle=Te.ochre;for(let[d,g]of Sh)n.fillRect(0,c(g),4096,c(d)-c(g));n.fillRect(0,c(Xe.qd+1.02),4096,.09*a);for(let d=gs;d<_s;d+=.22){n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(0,c(d),4096,1.2);let g=Sn-h()*6;for(n.fillStyle="rgba(0,0,0,0.22)";g<$i;)n.fillRect(l(g),c(d+.22),1.2,.22*a),g+=5.5+h()*2}for(let d=0;d<26e3;d++){let g=h()*.07;n.fillStyle=h()<.5?`rgba(0,0,0,${g})`:`rgba(255,240,210,${g*.6})`,n.fillRect(h()*4096,h()*1024,1+h()*5,1+h()*2)}n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,c(Sh[0][0]),4096,.9*a);for(let d of Sl()){let g=d.tier,x=d.y-Kn(d.x),m=l(d.x-g.w/2),p=c(x+g.h/2),v=g.w*o,E=g.h*a;n.fillStyle=Te.red,n.fillRect(m,p,v,E);let _=.09;n.fillStyle="#0c0705",n.fillRect(m+_*o,p+_*a,v-2*_*o,E-2*_*a)}n.save(),n.beginPath(),n.moveTo(0,1024);for(let d=0;d<=256;d++){let g=Sn+d/256*($i-Sn);n.lineTo(l(g),c(bl-Kn(g)))}n.lineTo(4096,1024),n.closePath(),n.clip(),n.fillStyle=Te.copper,n.fillRect(0,0,4096,1024);let f=1.22,u=.36;for(let d=0,g=gs;g<3;g+=u,d++)for(let x=Sn-d%2*f*.5;x<$i;x+=f){let m=h(),p=150+m*40,v=82+m*30+h()*25,E=48+m*22;n.fillStyle=`rgb(${p|0},${v|0},${E|0})`,n.fillRect(l(x)+1,c(g+u)+1,f*o-2,u*a-2),h()<.35&&(n.fillStyle=`rgba(70,140,110,${.15+h()*.25})`,n.fillRect(l(x)+1,c(g+u)+1,f*o-2,u*a-2))}n.restore(),r.fillStyle="rgb(0,165,0)",r.fillRect(0,0,1024,256),r.beginPath(),r.moveTo(0,256);for(let d=0;d<=128;d++){let g=Sn+d/128*($i-Sn);r.lineTo((g-Sn)/($i-Sn)*1024,(_s-(bl-Kn(g)))/(_s-gs)*256)}return r.lineTo(1024,256),r.closePath(),r.fillStyle="rgb(0,105,190)",r.fill(),{map:On(e,{aniso:16}),metalRough:On(s,{srgb:!1})}}function rf(){let t=Fn(1024,1024),e=t.getContext("2d"),n=di(3),s=1024/8*.28;for(let o=0,a=0;o<1024;o+=s,a++){let l=-n()*1024*.5;for(;l<1024;){let c=128*(5+n()*3),h=n();e.fillStyle=`rgb(${168+h*26|0},${146+h*22|0},${108+h*18|0})`,e.fillRect(l,o,c,s);for(let f=0;f<14;f++)e.fillStyle=`rgba(90,60,30,${n()*.08})`,e.fillRect(l,o+n()*s,c,1);e.fillStyle="rgba(40,25,10,0.7)",e.fillRect(l,o,2,s),e.fillStyle="rgba(60,40,20,0.55)",e.fillRect(l+6,o+s*.3,3,3),e.fillRect(l+6,o+s*.65,3,3),l+=c}e.fillStyle="rgba(25,18,10,0.85)",e.fillRect(0,o,1024,2)}return On(t,{repeat:!0,aniso:16})}var wl=-2.4,El=13.6;function of(i){let n=Fn(2048,2048),s=n.getContext("2d"),r=d=>(El-d)/(El-wl)*2048,o=Kn(-28.5);s.fillStyle=Te.black,s.fillRect(0,0,2048,2048),s.fillStyle=Te.copper,s.fillRect(0,r(bl),2048,2048);let a=d=>Xe[d]+o;s.fillStyle=Te.ochre,s.fillRect(0,r(a("middle")-.1),2048,.25/16*2048),s.font=`bold ${.55/16*2048}px Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=Te.gold,s.fillText("V I C T O R Y",2048/2,r(a("middle")-.75));let l=[[a("middle")+.45,a("middle")+1.75],[a("upper")+.45,a("upper")+1.75],[a("qd")+.4,a("qd")+1.6]];for(let[d,g]of l){let x=i((d+g)/2),m=x*2,p=_=>(_/m+.5)*2048;s.fillStyle=Te.ochre,s.fillRect(0,r(d),2048,r(d-.45)-r(d)),s.fillStyle="rgba(0,0,0,0.5)";for(let _=-x;_<x;_+=.22)s.fillRect(p(_),r(d-.08),3,r(d-.38)-r(d-.08));let v=9,E=(m-.5)/v;for(let _=0;_<v;_++){let S=-x+.25+_*E;s.fillStyle=Te.ochre,s.fillRect(p(S),r(g+.15),.18/m*2048,r(d)-r(g+.15));let M=p(S+.22),w=p(S+E-.05);s.fillStyle="#e7dcc0",s.fillRect(M,r(g),w-M,r(d)-r(g));let y=3,T=4,C=(w-M)/y,I=(r(d)-r(g))/T;for(let D=0;D<y;D++)for(let N=0;N<T;N++){let L=30+(D*7+N*13+_*5)%9*6;s.fillStyle=`rgb(${L*.6|0},${L*.8|0},${L|0})`,s.fillRect(M+D*C+3,r(g)+N*I+3,C-6,I-6)}}s.fillStyle=Te.ochre,s.fillRect(0,r(g+.4),2048,r(g)-r(g+.4))}let c=a("poop")+.3;s.fillStyle=Te.ochre,s.fillRect(0,0,2048,r(c)),s.fillStyle=Te.gold;let h=2048/2,f=r(c+1.1),u=.75/16*2048;s.beginPath(),s.moveTo(h-u,f-u),s.lineTo(h+u,f-u),s.lineTo(h+u,f+u*.3),s.quadraticCurveTo(h+u,f+u*1.3,h,f+u*1.5),s.quadraticCurveTo(h-u,f+u*1.3,h-u,f+u*.3),s.closePath(),s.fill(),s.fillStyle="#7a1b14",s.fillRect(h-u*.8,f-u*.8,u*.75,u*.9),s.fillStyle="#20306a",s.fillRect(h+u*.05,f-u*.8,u*.75,u*.9),s.strokeStyle=Te.gold,s.lineWidth=6;for(let d=1;d<=3;d++)s.beginPath(),s.arc(h-u*(1.6+d*1.3),f,u*.6,0,Math.PI*1.6),s.stroke(),s.beginPath(),s.arc(h+u*(1.6+d*1.3),f,u*.6,Math.PI*1.4,Math.PI*3),s.stroke();return On(n,{aniso:16})}function af(){let i=Fn(512,256),t=i.getContext("2d");t.fillStyle=Te.ochre,t.fillRect(0,0,512,256);for(let e=0;e<4;e++){let n=16+e*128;t.fillStyle="#e7dcc0",t.fillRect(n,40,96,176);for(let s=0;s<2;s++)for(let r=0;r<3;r++)t.fillStyle="#26323e",t.fillRect(n+6+s*45,46+r*57,39,51)}return On(i,{repeat:!0})}function Tl(){let e=Fn(256,512),n=e.getContext("2d"),s=di(11);n.fillStyle=Te.canvas,n.fillRect(0,0,256,512);for(let r=0;r<4e3;r++)n.fillStyle=`rgba(120,100,70,${s()*.05})`,n.fillRect(s()*256,s()*512,1+s()*3,1);for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgba(110,90,60,0.35)",n.fillRect(o,0,3,512),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(o+3,0,2,512)}return On(e,{repeat:!0})}function lf(){let e=Fn(256,1024),n=e.getContext("2d");n.drawImage(Tl().image,0,0,256,512),n.drawImage(Tl().image,0,512,256,512);for(let s of[.12,.24,.36]){let r=s*1024;n.fillStyle="rgba(150,130,95,0.55)",n.fillRect(0,r-7,256,14),n.fillStyle="rgba(110,90,60,0.6)",n.fillRect(0,r-8,256,2),n.fillRect(0,r+6,256,2);for(let o=10;o<256;o+=21)n.fillStyle="rgba(70,55,35,0.85)",n.fillRect(o,r-3,3,22)}return On(e,{repeat:!0})}function nf(i,t,e,n,s){i.fillStyle="#1f2f6b",i.fillRect(t,e,n,s);let r=(o,a)=>{i.strokeStyle=a,i.lineWidth=o,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+s),i.moveTo(t+n,e),i.lineTo(t,e+s),i.stroke()};i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),r(s*.2,"#fff"),r(s*.07,"#c8202f"),i.restore(),i.fillStyle="#fff",i.fillRect(t+n/2-s*.17,e,s*.34,s),i.fillRect(t,e+s/2-s*.17,n,s*.34),i.fillStyle="#c8202f",i.fillRect(t+n/2-s*.1,e,s*.2,s),i.fillRect(t,e+s/2-s*.1,n,s*.2)}function cf(i){let n=Fn(512,256),s=n.getContext("2d");return i==="union"?nf(s,0,0,512,256):i==="pennant"?(s.fillStyle="#fff",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(0,0,40,256),s.fillRect(0,256/2-18,40,36)):(s.fillStyle="#f4f2ec",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(512/2-20,0,40,256),s.fillRect(0,256/2-20,512,40),i==="ensign"&&nf(s,0,0,512/2-20,256/2-20)),On(n)}function hf(){let i=Fn(256,64),t=i.getContext("2d");t.fillStyle="#d9cfb4",t.fillRect(0,0,256,64);let e=di(5);for(let n=0;n<40;n++)t.fillStyle=`rgba(150,130,95,${.2+e()*.3})`,t.fillRect(n*6.4,0,4+e()*2,64);t.strokeStyle="rgba(40,30,20,0.6)",t.lineWidth=1.5;for(let n=-64;n<256;n+=12)t.beginPath(),t.moveTo(n,0),t.lineTo(n+64,64),t.stroke(),t.beginPath(),t.moveTo(n+64,0),t.lineTo(n,64),t.stroke();return On(i,{repeat:!0})}function bh(){let t=Fn(128,128),e=t.getContext("2d"),n=di(17);for(let s=0;s<18;s++){let r=64+(n()-.5)*128*.35,o=128/2+(n()-.5)*128*.35,a=128*(.18+n()*.2),l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}return On(t)}function uf(){let t=new Float32Array(65536),e=di(23),n=[];for(let l=0;l<40;l++){let c=Math.round((e()-.5)*24),h=Math.round((e()-.5)*24);!c&&!h||n.push([c,h,e()*Math.PI*2,1/Math.hypot(c,h)])}for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0;for(let[f,u,d,g]of n)h+=g*Math.sin((f*c+u*l)/256*Math.PI*2+d);t[l*256+c]=h}let s=Fn(256,256),r=s.getContext("2d"),o=r.createImageData(256,256),a=2.2;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=t[l*256+(c+1)%256]-t[l*256+(c-1+256)%256],f=t[(l+1)%256*256+c]-t[(l-1+256)%256*256+c],u=-h*a,d=-f*a,g=1,x=Math.hypot(u,d,g);u/=x,d/=x,g/=x;let m=(l*256+c)*4;o.data[m]=(u*.5+.5)*255,o.data[m+1]=(d*.5+.5)*255,o.data[m+2]=(g*.5+.5)*255,o.data[m+3]=255}return r.putImageData(o,0,0),On(s,{srgb:!1,repeat:!0})}function Eh(i="#9a7448"){let t=Fn(64,512),e=t.getContext("2d"),n=di(31);e.fillStyle=i,e.fillRect(0,0,64,512);for(let s=0;s<90;s++)e.fillStyle=`rgba(60,35,15,${n()*.18})`,e.fillRect(n()*64,0,1+n()*2,512);return On(t,{repeat:!0})}var dy=9.81,df=[[1,.35,64,.55,.5],[.75,-.65,37,.32,.55],[.25,1,19,.16,.6],[-.55,.8,11,.08,.6],[.9,-.2,7,.045,.5]],fo=df.map(([i,t,e,n,s])=>{let r=Math.hypot(i,t),o=2*Math.PI/e;return{dx:i/r,dz:t/r,k:o,A:n,Q:s/(o*n*df.length),c:Math.sqrt(dy/o)}}),ff=`
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
vec2 seaRot(vec2 d) { return vec2(uWaveRot.x * d.x - uWaveRot.y * d.y, uWaveRot.y * d.x + uWaveRot.x * d.y); }
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${fo.map(i=>`  y += ${i.A.toFixed(5)} * sin(${i.k.toFixed(5)} * (dot(seaRot(vec2(${i.dx.toFixed(5)}, ${i.dz.toFixed(5)})), p) - ${i.c.toFixed(5)} * uTime));`).join(`
`)}
  return y * uWaveScale;
}`,Al=class{constructor(t){this.time=0,this.offset=new at,this.scale=1;let e=420,n=4e3,s=new Float32Array(e*e*3),r=new Float32Array(e*e*2),o=g=>Math.sign(g)*Math.pow(Math.abs(g),2.6)*n;for(let g=0;g<e;g++)for(let x=0;x<e;x++){let m=g*e+x,p=o(x/(e-1)*2-1),v=o(g/(e-1)*2-1);s[m*3]=p,s[m*3+1]=0,s[m*3+2]=v,r[m*2]=p/70,r[m*2+1]=v/70}let a=new Uint32Array((e-1)*(e-1)*6),l=0;for(let g=0;g<e-1;g++)for(let x=0;x<e-1;x++){let m=g*e+x,p=m+1,v=m+e,E=v+1;a[l++]=m,a[l++]=v,a[l++]=p,a[l++]=p,a[l++]=v,a[l++]=E}let c=new ce;c.setAttribute("position",new ye(s,3)),c.setAttribute("uv",new ye(r,2)),c.setAttribute("normal",new ye(new Float32Array(e*e*3).fill(0).map((g,x)=>x%3===1?1:0),3)),c.setIndex(new ye(a,1)),c.boundingSphere=new oi(new R,n*1.5);let h=uf(),f=new Le({color:"#062a3a",roughness:.14,metalness:0,envMap:t,envMapIntensity:.4,normalMap:h,normalScale:new at(.09,.09)});this.uniforms={uTime:{value:0},uOffset:{value:this.offset},uWaveScale:{value:1},uWaveRot:{value:new at(1,0)}};let u=this.uniforms,d=fo.map(g=>`wave(p, vec2(${g.dx.toFixed(5)}, ${g.dz.toFixed(5)}), ${g.k.toFixed(5)}, ${g.A.toFixed(5)} * uWaveScale, ${g.Q.toFixed(5)}, ${g.c.toFixed(5)}, disp, tx, tz);`).join(`
`);f.onBeforeCompile=g=>{Object.assign(g.uniforms,u),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
${d}
disp *= fade;
vec3 objectNormal = normalize(mix(vec3(0.0, 1.0, 0.0), cross(tz, tx), fade));
vCrest = disp.y;
#ifdef USE_TANGENT
vec3 objectTangent = vec3(tangent.xyz);
#endif`).replace("#include <begin_vertex>",`vec3 transformed = position + disp;
vSeaWorld = transformed;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying float vCrest; varying vec3 vSeaWorld;`).replace("#include <color_fragment>",`#include <color_fragment>
float crest = smoothstep(0.95, 1.6, vCrest);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.2, 0.24), smoothstep(-0.8, 1.4, vCrest) * 0.22);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.8, 0.8), crest * 0.18);`)},this.normalMap=h,this.mesh=new it(c,f),this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.name="sea"}update(t,e){this.time=t,this.uniforms.uTime.value=t,this.offset.set(e,0),this.normalMap.offset.set((e/70+t*.004)%1,t*.003%1)}setScale(t){this.scale=t,this.uniforms.uWaveScale.value=t}setDirection(t){let e=Math.atan2(fo[0].dz,fo[0].dx);this.rot=t-e,this.uniforms.uWaveRot.value.set(Math.cos(this.rot),Math.sin(this.rot))}heightAt(t,e){let n=t+this.offset.x,s=e+this.offset.y,r=this.time,o=Math.cos(this.rot||0),a=Math.sin(this.rot||0),l=0;for(let c of fo){let h=o*c.dx-a*c.dz,f=a*c.dx+o*c.dz;l+=c.A*this.scale*Math.sin(c.k*(h*n+f*s-c.c*r))}return l}};function Rl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ce,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=pf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let g=pf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function pf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function fn(i,t,e,n,s=!1){let r=new Float32Array(i*t*3),o=new Float32Array(i*t*2);for(let c=0;c<t;c++)for(let h=0;h<i;h++){let f=c*i+h,u=e(h,c);r[f*3]=u[0],r[f*3+1]=u[1],r[f*3+2]=u[2];let d=n?n(h,c,u):[h/(i-1),c/(t-1)];o[f*2]=d[0],o[f*2+1]=d[1]}let a=[];for(let c=0;c<t-1;c++)for(let h=0;h<i-1;h++){let f=c*i+h,u=f+1,d=f+i,g=d+1;s?a.push(f,g,u,f,d,g):a.push(f,u,g,f,g,d)}let l=new ce;return l.setAttribute("position",new ye(r,3)),l.setAttribute("uv",new ye(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function Cl(i,t,e,n,s=!1){let r=fn(i,t,e,n,s),o=fn(i,t,(a,l)=>{let c=e(a,l);return[c[0],c[1],-c[2]]},n,!s);return Rl([r,o])}var mf=new R(0,1,0);function pn(i,t,e,n,s=mf){let r=new R().subVectors(t,i),o=r.length(),a=new pe(o,n,e),l=r.clone().normalize(),c=new R().crossVectors(l,s);c.lengthSq()<1e-6&&c.set(0,0,1),c.normalize();let h=new R().crossVectors(c,l),f=new Yt().makeBasis(l,h,c);return f.setPosition(i.clone().add(t).multiplyScalar(.5)),a.applyMatrix4(f),a}function ve(i,t,e,n=e,s=10){let r=new R().subVectors(t,i),o=r.length(),a=new le(n,e,o,s,1),l=new Be().setFromUnitVectors(mf,r.clone().normalize());return a.applyQuaternion(l),a.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),a}function Th(i,t,e,n=.28,s=.14){let r=[],o=c=>c.clone().add(new R(0,e,0));r.push(pn(o(i),o(t),s,.09));let a=i.distanceTo(t),l=Math.max(1,Math.round(a/n));for(let c=0;c<=l;c++){let h=i.clone().lerp(t,c/l),f=new le(.035,.05,e,6);f.translate(h.x,h.y+e/2,h.z),r.push(f)}return Rl(r.map(c=>c.index?c.toNonIndexed():c))}function Me(i){let t=i.map(e=>e.index?e.toNonIndexed():e);for(let e of t)e.attributes.uv||e.setAttribute("uv",new ye(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals();return Rl(t)}var Pl=null;function Ie(){if(Pl)return Pl;let i=(s,r=.7,o=0,a={})=>new Le({color:s,roughness:r,metalness:o,...a}),t=rf(),e=Eh("#b08a58"),n=Eh("#5a4630");return Pl={black:i(Te.black,.6),ochre:i(Te.ochre,.6),red:i(Te.red,.75),inside:i("#c9a965",.75),carriage:i("#b99a5c",.7),gold:i(Te.gold,.35,.8),iron:i("#26282a",.55,.6),brass:i("#b58d3e",.3,.9),copper:i(Te.copper,.45,.8),deck:i("#ffffff",.85,0,{map:t}),mast:i("#ffffff",.7,0,{map:e}),spar:i("#2a2c2e",.65),darkWood:i("#ffffff",.75,0,{map:n}),rope:i("#3b2f22",.9),ropeLight:i("#8a7556",.9),canvas:i("#ffffff",.92,0,{map:Tl(),side:Ne}),canvasReef:i("#ffffff",.92,0,{map:lf(),side:Ne}),furl:i("#dcd2b8",.95),hammock:i("#ffffff",.95,0,{map:hf()}),glass:i("#2b3a48",.15,.4,{emissive:"#000000"}),lantern:i("#ffd27a",.3,0,{emissive:"#ffb347",emissiveIntensity:0}),white:i("#eeeeee",.6)},Pl}var po=220,or=120,Bn=.32;function fy(i){return .45*i+.55*(.5-.5*Math.cos(Math.PI*i))}function py(i,t){let e=fy(i),n=-7.4,s=0;for(let r=0;r<5;r++)s=qe(n)+e*(En(n)-qe(n)),n=-7.4+t*(_e(s)- -7.4);return[s,n,vl(n)*Mh(e,n)]}function my(i){return i<Ei?Ht("poop",i):Ht("qd",i)}function gy(i){return i>bn+.2&&i<dn-.2?Ht("upper",i):my(i)}function gf(){let i=Ie(),t=new ee;t.name="hull";let e=sf(),n=new Le({map:e.map,roughnessMap:e.metalRough,metalnessMap:e.metalRough,roughness:1,metalness:1}),s=[];for(let B=0;B<or;B++)for(let rt=0;rt<po;rt++)s.push(py(rt/(po-1),B/(or-1)));let r=(B,rt)=>s[rt*po+B],o=Cl(po,or,r,(B,rt,et)=>[Kd(et[0]),jd(et[0],et[1])]),a=new it(o,n);a.castShadow=a.receiveShadow=!0,a.name="planking",t.add(a);let l=[];for(let B=0;B<or;B++){let rt=r(0,B);(rt[2]>.01||B+1<or&&r(0,B+1)[2]>.01)&&l.push(rt)}let c=48,h=B=>vl(B)*vh(B),f=new Le({map:of(h),roughness:.6}),u=fn(c,l.length,(B,rt)=>{let[et,pt,dt]=l[rt],Tt=Ee(-dt,dt,B/(c-1)),W=.45*ms(1,3,pt)*(1-(dt>0?(Tt/dt)**2:1));return[et-W,pt,Tt]},(B,rt)=>[B/(c-1),(l[rt][1]-wl)/(El-wl)]),d=new it(u,f);d.castShadow=d.receiveShadow=!0,t.add(d);let g=[];for(let B=0;B<po;B++){let rt=r(B,or-1);rt[2]-Bn>.06&&g.push(rt)}let x=10,m=Cl(g.length,x,(B,rt)=>{let et=g[B][0],pt=g[B][1],dt=Ee(gy(et)-.05,pt,rt/(x-1));return[et,dt,Math.max(.05,Xt(et,dt)-Bn)]},(B,rt)=>[g[B][0]/4,rt/(x-1)],!0),p=new it(m,i.inside);p.receiveShadow=!0,t.add(p);let v=Cl(g.length,2,(B,rt)=>{let[et,pt,dt]=g[B];return rt===0?[et,pt+.01,dt+.04]:[et,pt+.01,Math.max(.05,Xt(et,pt)-Bn-.03)]});t.add(new it(v,i.black));let E=g[0][0],_=Ht("poop",E),S=g[0][1],M=fn(12,4,(B,rt)=>{let et=Ee(_,S,rt/3),pt=Math.max(.1,Xt(E+.4,et)-Bn);return[qe(et)+.35,et,Ee(-pt,pt,B/11)]},null,!0);t.add(new it(M,i.inside));let w=[],y=(B,rt,et,pt,dt=.12)=>{let Tt=Math.max(4,Math.round((et-rt)/.8)),W=10;w.push(fn(Tt,W,($,ht)=>{let Pt=Ee(rt,et,$/(Tt-1)),_t=Ht(B,Pt),Ut=Math.max(.05,Xt(Pt,_t+.4)-Bn),[oe,Q]=pt(Ut),lt=Ee(oe,Q,ht/(W-1));return[Pt,_t+dt*(1-(lt/Ut)**2),lt]},($,ht,Pt)=>[Pt[0]/8,Pt[2]/8],!0))},T=B=>[-B,B],C=2.5;y("upper",qe(Xe.upper)+.6,En(Xe.upper)-.6,T),y("qd",qe(Xe.qd)+.4,bn,T),y("qd",dn,En(Xe.qd)-.4,T),y("qd",bn,dn,B=>[B-C,B],0),y("qd",bn,dn,B=>[-B,-B+C],0),y("poop",qe(Xe.poop)+.4,Ei,T);let I=new it(Me(w),i.deck);I.receiveShadow=!0,I.castShadow=!0,I.name="weatherDecks",t.add(I);let D=[],N=(B,rt,et,pt=0)=>{let dt=Xt(B,et)-Bn-pt;D.push(fn(2,2,(Tt,W)=>[B,W?et:rt,Tt?dt:-dt]))};N(bn,Ht("upper",bn),Ht("qd",bn)+.12),N(dn,Ht("upper",dn),Ht("qd",dn)+.12);for(let B of[1,-1])D.push(fn(16,2,(et,pt)=>{let dt=Ee(bn,dn,et/15),Tt=Ht("qd",dt),W=Xt(dt,Tt+.4)-Bn-C;return[dt,pt?Tt+.02:Tt-.35,B*W]},null,B<0));let L=Me(D),H=i.inside.clone();H.side=Ne,t.add(new it(L,H));{let B=Ei+.05,rt=Ht("qd",B),et=Ht("poop",B)+.05,pt=Xt(B,et)-Bn,dt=af();dt.repeat.set(pt*2/3.2,1);let Tt=new Le({map:dt,roughness:.6}),W=fn(2,2,($,ht)=>[B,ht?et:rt,$?-pt:pt],($,ht)=>[$,ht]);t.add(new it(W,Tt))}let q=[],k=(B,rt,et=1)=>{let pt=Ht(rt,B)+.1,dt=Xt(B,pt)-Bn-.1;q.push(Th(new R(B,pt,-dt),new R(B,pt,dt),et))};k(bn-.1,"qd"),k(dn+.1,"qd"),k(Ei-.1,"poop");for(let B of[1,-1]){let rt=[];for(let et=0;et<=6;et++){let pt=Ee(bn,dn,et/6),dt=Ht("qd",pt);rt.push(new R(pt,dt,B*(Xt(pt,dt+.4)-Bn-C+.08)))}for(let et=0;et<6;et++)q.push(Th(rt[et],rt[et+1],.95,.5,.1))}let st=new it(Me(q),i.darkWood);st.castShadow=!0,t.add(st);let Z=[];for(let B of[3.6,7,10.4,13.8]){let rt=Ht("qd",B)+.2,et=Xt(B,rt)-Bn-C+.2;Z.push(pn(new R(B,rt,-et),new R(B,rt,et),.28,.3))}let j=new it(Me(Z),i.darkWood);j.castShadow=!0,t.add(j);{let pt=i.hammock;for(let dt of[1,-1]){let Tt=[[-.24,0],[-.26,.42],[-.18,.56],[.18,.56],[.26,.42],[.24,0]],W=fn(140,Tt.length,(ht,Pt)=>{let _t=Ee(-25.2,25,ht/139),Ut=_e(_t)+.02,oe=Xt(_t,Ut)-Bn/2,[Q,lt]=Tt[Pt];return[_t,Ut+lt,dt*(oe+Q)]},(ht,Pt)=>[Ee(-25.2,25,ht/139)/2.5,Pt/(Tt.length-1)],dt>0),$=new it(W,pt);$.castShadow=!0,t.add($)}}{let B=[];for(let W=0;W<=24;W++){let $=Ee(-7.4,_e(28.5)-.3,W/24);B.push(new R(En($)+.08,$,0))}let rt=new Dn(new qn(B),48,.26,6,!1);t.add(new it(rt,i.black));let et=new vn,pt=ps+.6;et.moveTo(qe(-7.4),-7.4),et.lineTo(qe(pt)+.3,pt),et.lineTo(qe(pt)-.6,pt),et.lineTo(qe(ps)-1,ps-.6),et.lineTo(qe(-7.4)-1.7,-7.4+.3),et.closePath();let dt=new Pn(et,{depth:.36,bevelEnabled:!1});dt.translate(0,0,-.18);let Tt=new it(dt,i.black);Tt.castShadow=!0,t.add(Tt)}return t.add(_y()),t.add(vy()),t}function _y(){let i=Ie(),t=new ee;t.name="head";let e=33.35,n=Ht("upper",30)+2.3,s=new vn,r=-2.2,o=n-.2;s.moveTo(En(r),r);for(let m=1;m<=10;m++){let p=Ee(r,o,m/10);s.lineTo(En(p)-.05,p)}s.lineTo(e-.4,n+.1),s.quadraticCurveTo(e+.2,n-1.6,e-1,n-3.6),s.quadraticCurveTo(29.8,-.2,En(r)+.4,r),s.closePath();let a=new Pn(s,{depth:.5,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});a.translate(0,0,-.25);let l=new it(a,i.black);l.castShadow=!0,t.add(l);let c=new vn;c.moveTo(En(n-2.5)+.2,n-2.5),c.quadraticCurveTo(e-1.3,n-1,e-.6,n-.3),c.lineTo(e-.9,n-.9),c.quadraticCurveTo(e-2.2,n-2.3,En(n-3.2)+.3,n-3.2),c.closePath();let h=new Pn(c,{depth:.62,bevelEnabled:!1});h.translate(0,0,-.31),t.add(new it(h,i.ochre));let f=[],u=[],d=Ht("upper",27);for(let m of[1,-1]){let p=[];for(let v=0;v<3;v++){let E=-v*.55,_=[new R(26,d+2.2+E,m*(Xt(26,d+2.2+E)+.05)),new R(28.4,d+1.75+E*.9,m*2.5),new R(30.6,d+1.55+E*.75,m*1.25),new R(e-.55,n-.35+E*.55,m*.32)],S=new qn(_,!1,"centripetal");p.push(S),f.push(new Dn(S,32,v===0?.1:.075,6,!1))}for(let v of[.25,.45,.65]){let E=p[0].getPoint(v),_=p[2].getPoint(v);u.push(ve(E,_.clone().add(new R(0,-.5,0)),.07,.07,6))}}let g=new it(Me(f),i.ochre);g.castShadow=!0,t.add(g),t.add(new it(Me(u),i.black));let x=fn(6,6,(m,p)=>{let v=Ee(28.9,31.6,m/5),E=Ee(2.2,.7,m/5);return[v,d+.5+m/5*.5,Ee(-E,E,p/5)]},null,!0);t.add(new it(x,i.darkWood)),t.add(yy(e,n));for(let m of[1,-1]){let v=Ht("qd",25.6)+.55,E=Xt(25.6,v)-.4,_=new R(25.6-.6,v,m*(E-.6)),S=new R(25.6+1.4,v+.25,m*(E+1.9)),M=new it(pn(_,S,.42,.42),i.black);M.castShadow=!0,t.add(M);let w=new it(new le(.2,.2,.05,12),i.gold);w.position.copy(S),w.lookAt(S.clone().add(S.clone().sub(_))),w.rotateX(Math.PI/2),t.add(w)}for(let m of[1,-1])for(let p of[0,.75]){let v=26.9+p,E=Ht("middle",v)+.9,_=Xt(v,E),S=new it(new le(.24,.24,.1,14),i.iron),M=new it(new Dr(.17,14),new os({color:"#050403"})),w=new R(Xt(v-.2,E)-Xt(v+.2,E),0,m*.4).normalize();S.position.set(v,E,m*_),S.quaternion.setFromUnitVectors(new R(0,1,0),w),M.position.set(v,E,m*(_+.06)).addScaledVector(w,.02),M.lookAt(M.position.clone().add(w)),t.add(S,M)}return t}function xy(){let i=document.createElement("canvas");i.width=256,i.height=300;let t=i.getContext("2d"),e=[["#b8202a","#e2b33c"],["#e2b33c","#b8202a"],["#1f3c8c","#e2b33c"],["#b8202a","#e2b33c"]];[[0,0],[128,0],[0,150],[128,150]].forEach(([r,o],a)=>{t.fillStyle=e[a][0],t.fillRect(r,o,128,150),t.fillStyle=e[a][1];for(let l=0;l<(a===0?3:1);l++){let c=o+(a===0?30+l*42:75);t.beginPath(),t.ellipse(r+64,c,a===0?34:30,a===0?12:34,0,0,Math.PI*2),t.fill()}}),t.strokeStyle="#d4a640",t.lineWidth=14,t.strokeRect(0,0,256,300);let s=new Cn(i);return s.colorSpace=Oe,s}function yy(i,t){let e=Ie(),n=new ee;n.name="figurehead",n.position.set(i-.2,t,0),n.rotation.z=-.28;let s=1.45,r=new vn;r.moveTo(-.6,.75),r.lineTo(.6,.75),r.lineTo(.6,-.1),r.quadraticCurveTo(.6,-.7,0,-.95),r.quadraticCurveTo(-.6,-.7,-.6,-.1),r.closePath();let o=new Pn(r,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2}),a=o.attributes.uv,l=o.attributes.position;for(let m=0;m<a.count;m++)a.setXY(m,(l.getX(m)+.66)/1.32,(l.getY(m)+1)/1.8);o.rotateY(Math.PI/2);let c=new it(o,[new Le({map:xy(),roughness:.45,metalness:.2}),e.gold]);c.scale.setScalar(s),c.position.set(.25,.9,0),n.add(c);let h=new ee;h.add(new it(new le(.42,.36,.3,16),e.gold));for(let m=0;m<2;m++){let p=new it(new Ln(.36,.05,6,16,Math.PI),e.gold);p.rotation.y=m*Math.PI/2,p.position.y=.15,h.add(p)}let f=new it(new In(.11,10,8),e.gold);f.position.y=.6,h.add(f);let u=new it(new pe(.05,.22,.16),e.gold);u.position.y=.78,h.add(u);let d=new it(new In(.33,12,8,0,Math.PI*2,0,Math.PI/2),new Le({color:"#7a1b20",roughness:.6}));d.position.y=.12,h.add(d),h.scale.setScalar(s),h.position.set(.2,2.15,0),n.add(h);let g=new Le({color:"#e8c7a4",roughness:.55});for(let m of[1,-1]){let p=new ee,v=new it(new Si(.24,.42,4,12),g);v.rotation.x=m*.25,p.add(v);let E=new it(new In(.2,14,10),g);E.position.set(.05,.55,m*.06),p.add(E);let _=new it(new In(.21,12,8,0,Math.PI*2,0,Math.PI/2.2),e.gold);_.position.copy(E.position).add(new R(-.02,.03,0)),p.add(_);for(let w of[0,1]){let y=new it(new In(.3,10,8),e.gold);y.scale.set(.12,.75,.42),y.position.set(-.28,.25+w*.12,m*(.12+w*.12)),y.rotation.x=m*(.5+w*.3),p.add(y)}let S=new it(new Si(.07,.4,4,8),g);S.position.set(.12,.25,-m*.24),S.rotation.x=-m*1.1,p.add(S);let M=new it(new Ln(.26,.07,6,14,Math.PI*1.3),new Le({color:"#2a4a9a",roughness:.6}));M.rotation.set(Math.PI/2,0,.4),M.position.y=-.08,p.add(M),p.scale.setScalar(s),p.position.set(.05,1,m*1.25),n.add(p)}let x=new it(new Ln(.35,.12,8,18,Math.PI*1.5),e.gold);return x.rotation.set(0,Math.PI/2,0),x.position.set(0,-.2,0),n.add(x),n.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),n}function vy(){let i=Ie(),t=new ee;t.name="quarterGalleries";let e=-27.3,n=-22.4,s=Kn(-25),r=Xe.middle+s+.15,o=Xe.qd+s-.1,a=r-2.6,l=o+.9,c=.85,h=document.createElement("canvas");h.width=512,h.height=512;let f=h.getContext("2d"),u=v=>(l-v)/(l-a)*512;f.fillStyle=Te.ochre,f.fillRect(0,0,512,512),f.fillStyle=Te.black,f.fillRect(0,u(r-.3),512,u(a)-u(r-.3));for(let[v,E]of[[Xe.middle+s+.45,Xe.middle+s+1.6],[Xe.upper+s+.45,Xe.upper+s+1.6]])for(let _=0;_<5;_++){let S=20+_*98;f.fillStyle="#e7dcc0",f.fillRect(S,u(E),78,u(v)-u(E)),f.fillStyle="#26323e";for(let M=0;M<3;M++)for(let w=0;w<2;w++)f.fillRect(S+5+w*36,u(E)+5+M*(u(v)-u(E)-10)/3,32,(u(v)-u(E)-10)/3-5)}f.strokeStyle=Te.gold,f.lineWidth=4;for(let v=0;v<6;v++)f.beginPath(),f.arc(256,u(a+.6)-v*20,40+v*18,0,Math.PI,!0),f.stroke();let d=new Cn(h);d.colorSpace=Oe;let g=new Le({map:d,roughness:.6}),x=v=>{if(v<r){let E=(v-a)/(r-a);return Math.sin(E*Math.PI/2)**1.3}if(v>o){let E=(l-v)/(l-o);return Math.sqrt(Math.max(0,E))}return 1},m=24,p=40;for(let v of[1,-1]){let E=fn(m,p,(S,M)=>{let w=Ee(a,l,M/(p-1)),y=x(w),T=S/(m-1),C=(e+n)/2,I=(n-e)/2*(.25+.75*Math.min(1,y*1.4)),D=C+(T*2-1)*I,N=Math.sin(T*Math.PI)**.45,L=Xt(D,w)+c*y*N;return[D,w,v*L]},(S,M)=>[S/(m-1),M/(p-1)],v<0),_=new it(E,g);_.castShadow=!0,t.add(_)}return t}var an={lowerHead:34,topY:30.6,topLen:5.3,topW:7.1,rLower:[.5,.4],topmastHeel:29.6,topmastHead:50.4,crossY:47,crossW:4.6,rTop:[.33,.22],tgHeel:46.4,tgHead:58.4,poleHead:63.4,rTg:[.19,.08],yards:[{name:"course",L:31.5,ySet:29.2,yLow:29.2,r:.33,head:"lowerHead"},{name:"topsail",L:23.2,ySet:46.2,yLow:35,r:.25,head:"topmastHead"},{name:"topgallant",L:14.6,ySet:57.5,yLow:50.9,r:.16,head:"tgHead"},{name:"royal",L:9.6,ySet:62.5,yLow:58.9,r:.11,head:"poleHead"}]},Il=class{constructor(){let t=Ie();this.group=new ee,this.group.name="rig",this.masts={};for(let[e,n]of Object.entries(Qd))this.masts[e]=this.buildMast(e,n,t);this.buildBowsprit(t),this.buildSpankerSpars(t)}buildMast(t,e,n){let s=Ht("upper",e.x),r=e.scale,o=N=>s+(N-5.76)*r,a={name:t,x:e.x,scale:r,group:new ee,yards:{}},l=a.group;l.position.set(e.x,0,0),l.rotation.z=e.rake,this.group.add(l);let c={lowerHead:o(an.lowerHead),topY:o(an.topY),topmastHeel:o(an.topmastHeel),topmastHead:o(an.topmastHead),crossY:o(an.crossY),tgHeel:o(an.tgHeel),tgHead:o(an.tgHead),poleHead:o(an.poleHead),topLen:an.topLen*r,topW:an.topW*r,crossW:an.crossW*r};a.h=c;let h=(N,L,H=0)=>new R(N,L,H),f=N=>N.map(L=>L*(.75+.25*r)),[u,d]=f(an.rLower),[g,x]=f(an.rTop),[m,p]=f(an.rTg);a.r={lower:d,top:x,tg:p};let v=[],E=[],_=[];v.push(ve(h(0,0),h(0,c.topY),u,d*1.05,16)),E.push(ve(h(0,c.topY),h(0,c.lowerHead),d*.92,d*.88,12));for(let N=s+1.2;N<c.topY-1;N+=1.15)_.push(ve(h(0,N),h(0,N+.12),u*1.06,u*1.06,16));let S=d+g+.05;v.push(ve(h(S,c.topmastHeel),h(S,c.crossY),g,x*1.05,12)),E.push(ve(h(S,c.crossY),h(S,c.topmastHead),x,x*.9,10));let M=S+x+m+.03;v.push(ve(h(M,c.tgHeel),h(M,c.tgHead),m,p*1.3,10)),v.push(ve(h(M,c.tgHead),h(M,c.poleHead),p*1.3,p*.7,8)),a.dTop=S,a.dTg=M,E.push(ve(h(M,c.poleHead),h(M,c.poleHead+.25),.22*r,.22*r,10)),E.push(pn(h(-d-.2,c.lowerHead+.15),h(S+g+.25,c.lowerHead+.15),1*r,.45));let w=new vn,y=c.topLen,T=c.topW/2;w.moveTo(-y*.45,-T),w.lineTo(-y*.45,T),w.lineTo(y*.25,T),w.quadraticCurveTo(y*.55,T,y*.55,0),w.quadraticCurveTo(y*.55,-T,y*.25,-T),w.closePath();let C=new Pn(w,{depth:.22,bevelEnabled:!1});C.rotateX(Math.PI/2),C.translate(0,c.topY+.22,0),E.push(C);for(let N=0;N<=6;N++){let L=-T+2*T*N/6;E.push(ve(h(-y*.43,c.topY+.22,L),h(-y*.43,c.topY+1.15,L),.035,.035,5))}E.push(ve(h(-y*.43,c.topY+1.15,-T),h(-y*.43,c.topY+1.15,T),.05,.05,6)),E.push(pn(h(S,c.crossY,-c.crossW/2),h(S,c.crossY,c.crossW/2),.25,.22)),E.push(pn(h(S-1.2*r,c.crossY+.2),h(S+1*r,c.crossY+.2),c.crossW*.45,.18)),E.push(pn(h(S-x-.15,c.topmastHead+.1),h(M+m+.18,c.topmastHead+.1),.6*r,.3));let I=new it(Me(v),n.mast),D=new it(Me([...E,..._]),n.spar);I.castShadow=D.castShadow=!0,l.add(I,D),a.local={lowerHead:h(0,c.lowerHead-.2),shroudHead:h(0,c.topY-.4),stayLower:h(0,c.topY+.4),topEdge:N=>h(-y*.1,c.topY+.15,N*T*.98),topBack:h(-y*.4,c.topY+.2),topFront:h(y*.5,c.topY+.2),topmastShroudHead:h(S,c.crossY-.3),topmastHead:h(S,c.topmastHead-.2),crossEnd:N=>h(S,c.crossY+.1,N*c.crossW/2),tgHead:h(M,c.tgHead-.2),poleHead:h(M,c.poleHead-.1),futtock:h(0,c.topY-3.2*r)};for(let N of an.yards){let L=this.buildYard(a,N,o,n);a.yards[N.name]=L}return a}buildYard(t,e,n,s){let r=t.scale,o=tf[t.name][e.name],a=e.r*(.75+.25*r),l=new ee,c=n(e.ySet),h=n(e.yLow),f=e.name==="course"?t.r.lower+a+.1:e.name==="topsail"?t.dTop+t.r.top+a+.05:t.dTg+a+.18;l.position.set(f,c,0);let u=[],d=12;for(let _=0;_<=d;_++){let S=_/d;u.push(new at(a*(1-.55*S**1.6),S*o/2))}let g=new li(u,10),x=g.clone().scale(1,-1,1),m=Me([g,x]);m.rotateX(Math.PI/2);let p=new it(m,s.spar);p.castShadow=!0,l.add(p);let v=[];for(let _=0;_<=16;_++){let S=_/16*2-1;v.push(new R(-.15,-a-.9*(1-S*S)-.15,S*o*.47))}let E=[new Dn(new qn(v),32,.03,4)];for(let _=2.2;_<o*.45;_+=2.4)for(let S of[1,-1]){let M=S*_/(o*.47),w=-a-.9*(1-M*M)-.15;E.push(ve(new R(-.1,-a*.6,S*_),new R(-.15,w,S*_),.02,.02,4))}if(l.add(new it(Me(E),s.rope)),t.name!=="mizzen"&&(e.name==="course"||e.name==="topsail")){let _=[],S=.09*r*(e.name==="course"?1.2:1);for(let w of[1,-1]){_.push(ve(new R(a*.8,a*.75,w*o*.2),new R(a*.8,a*.75,w*(o*.5+2.6*r)),S,S*.8,8));for(let y of[o*.22,o*.48])_.push(new Ln(S+.04,.025,4,10).rotateY(Math.PI/2).translate(a*.8,a*.75,w*y))}let M=new it(Me(_),s.spar);M.castShadow=!0,l.add(M)}return t.group.add(l),{name:e.name,group:l,L:o,r:a,ySet:c,yLow:h,mast:t,headKey:e.head,hoist:1,brace:0}}buildBowsprit(t){let e=new R(21.2,Ht("qd",21.2)+.2,0),n=tn.degToRad(30),s=new R(Math.cos(n),Math.sin(n),0),r=(m,p=0)=>e.clone().addScaledVector(s,m).add(new R(-Math.sin(n)*p,Math.cos(n)*p,0)),o=[],a=[];o.push(ve(r(0),r(22.6),.47,.33,16)),o.push(ve(r(16.4,.6),r(32.5,.6),.2,.12,12)),o.push(ve(r(29.8,.9),r(38.8,.9),.11,.06,10)),a.push(pn(r(22.1,.1),r(22.1,.95),.7,.42,new R(0,0,1))),a.push(pn(r(32,.6),r(32,.95),.36,.28,new R(0,0,1))),a.push(ve(r(22.3,-.2),r(22.3,-2.8),.08,.06,6));let l=new it(Me(o),t.mast),c=new it(Me(a),t.spar);l.castShadow=c.castShadow=!0,this.group.add(l,c),this.bowsprit={P:r,heel:e,dir:s,steeve:n,stemPoint:r(9),fore:r(10.5,.4),cap:r(21.9,.4),jib:r(28,.8),jibEnd:r(32.2,.8),flyEnd:r(38.6,1),striker:r(22.3,-2.8)};let h=new ee;h.position.copy(r(18,-.7));let f=19.66,u=.2,d=[];for(let m=0;m<=10;m++)d.push(new at(u*(1-.5*(m/10)**1.6),m/10*f/2));let g=Me([new li(d,8),new li(d,8).scale(1,-1,1)]);g.rotateX(Math.PI/2);let x=new it(g,t.spar);x.castShadow=!0,h.add(x),this.group.add(h),this.spritYard={name:"sprit",group:h,L:f,r:u,hoist:1,brace:0,ySet:h.position.y,yLow:h.position.y,mast:null}}buildSpankerSpars(t){let e=this.masts.mizzen,n=e.h,s=new ee;s.position.set(-e.r.lower-.1,n.topY-2.4,0);let r=tn.degToRad(38);s.rotation.z=Math.PI-r;let o=13.9;s.add(new it(ve(new R(0,0,0),new R(o,0,0),.2,.12,10),t.spar)),e.group.add(s);let a=new ee,l=Ht("poop",-17.4)+2.3;a.position.set(-e.r.lower-.1,l,0),a.rotation.z=Math.PI-.04;let c=22.25;a.add(new it(ve(new R(0,0,0),new R(c,0,0),.24,.16,10),t.spar)),e.group.add(a);for(let h of[s,a])h.children[0].castShadow=!0;this.gaff={group:s,L:o},this.boom={group:a,L:c}}allYards(){let t=[];for(let e of Object.values(this.masts))t.push(...Object.values(e.yards));return t}applyYards(t){for(let e of Object.values(this.masts))for(let n of Object.values(e.yards)){let s=n.name==="course"?1:t.hoist[n.name]??1;n.group.position.y=n.yLow+(n.ySet-n.yLow)*s,n.group.rotation.y=t.brace*(n.name==="course"?.55:1)*(e.name==="mizzen"?1.15:1)}this.boom.group.rotation.y=t.boomSwing,this.gaff.group.rotation.y=t.boomSwing*1.2}};var My=new Yt,Sy=new Yt,by=new R;function Re(i,t,e,n=new R){return n.copy(i),t.localToWorld(n),e.worldToLocal(n)}function Dl(i,t){let e=new ce;e.setAttribute("position",new ye(new Float32Array(i*t*3),3)),e.setAttribute("uv",new ye(new Float32Array(i*t*2),2));let n=[];for(let s=0;s<t-1;s++)for(let r=0;r<i-1;r++){let o=s*i+r,a=o+1,l=o+i,c=l+1;n.push(o,a,c,o,c,l)}return e.setIndex(n),e}var _f=i=>i*i*(3-2*i),Ll=class{constructor(t,e,n,s){let r=Ie();this.name=t,this.yard=e,this.foot=n,this.fullness=s,this.roach=n.yard?.13:.03,this.NU=15,this.NV=13,this.geo=Dl(this.NU,this.NV),this.mesh=new it(this.geo,r.canvas),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh);let o=e.L*.86,a=Math.min(.38,.12+e.L*.009);this.furl=new it(new Si(a,o-2*a,4,10),r.furl),this.furl.rotation.x=Math.PI/2,this.furl.position.set(.12,e.r+a*.7,0),this.furl.castShadow=!0,e.group.add(this.furl),this.set=-1}update(t,e,n,s=0){let r=this.NU,o=this.NV,a=this.yard,l=t>.015;this.mesh.visible=l;let c=1-_f(Math.min(1,t/.35));if(this.furl.visible=c>.02,this.furl.scale.set(Math.max(.05,c),1,Math.max(.05,c)),!l)return;let h=a.L*.465,f=new R(0,-a.r,-h),u=new R(0,-a.r,h),d,g;if(this.foot.yard){let _=this.foot.yard,S=_.L*.465;d=Re(new R(0,_.r,-S),_.group,a.group),g=Re(new R(0,_.r,S),_.group,a.group)}else{let _=this.foot.drop();d=new R(.6,-_,-h*.74),g=new R(.6,-_,h*.74)}let x=(d.y+g.y)/2*-1,m=this.fullness*e*t,p=this.geo.attributes.position.array,v=this.geo.attributes.uv.array,E=Math.sin(n*2.1+a.L)*.04*e;for(let _=0;_<o;_++){let S=_/(o-1);for(let M=0;M<r;M++){let w=M/(r-1),y=_*r+M,T=f.x+(u.x-f.x)*w,C=f.y+(u.y-f.y)*w,I=f.z+(u.z-f.z)*w,D=Math.sin(Math.PI*w)*this.roach*x,N=d.x+(g.x-d.x)*w,L=d.y+(g.y-d.y)*w+D,H=d.z+(g.z-d.z)*w,q=S*t,k=T+(N-T)*q,st=C+(L-C)*q,Z=I+(H-I)*q,j=Math.sin(Math.PI*w)**.9*Math.sin(Math.PI*(.06+.82*S));k+=m*j*(1+E*Math.sin(w*9+n*3)),k+=(1-t)*.25*Math.sin(w*Math.PI*14)*S,s>0&&(k+=s*.3*(.5+.5*Math.sin(n*9+w*7+S*4))*Math.sin(Math.PI*w)*S),p[y*3]=k,p[y*3+1]=st,p[y*3+2]=Z,v[y*2]=Z/2,v[y*2+1]=this.reef?1-S:st/4}}(this.colliders?.length||this.stays?.length)&&this.drape(p),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}drape(t){let e=My.copy(this.space.matrixWorld).invert().multiply(this.yard.group.matrixWorld),n=Sy.copy(e).invert(),s=by,r=.35,o=2;for(let a=0;a<t.length;a+=3){s.set(t[a],t[a+1],t[a+2]).applyMatrix4(e);let l=-1/0;for(let[h,f]of this.colliders){if(s.y<Math.min(h.y,f.y)||s.y>Math.max(h.y,f.y)||Math.sign(s.z)!==Math.sign(h.z))continue;let u=(s.y-h.y)/(f.y-h.y),d=h.x+(f.x-h.x)*u,g=Math.abs(h.z+(f.z-h.z)*u),x=Math.min(1,Math.max(0,(Math.abs(s.z)-(g-o))/o));if(x<=0)continue;let m=d+r;s.x<m&&(l=Math.max(l,s.x+(m-s.x)*x*x*(3-2*x)))}let c=!1;l>s.x&&(s.x=l,c=!0);for(let[h,f]of this.stays||[]){if(s.y<Math.min(h.y,f.y)||s.y>Math.max(h.y,f.y))continue;let u=(s.y-h.y)/(f.y-h.y),d=h.x+(f.x-h.x)*u,g=h.z+(f.z-h.z)*u,x=1-Math.min(1,Math.abs(s.z-g)/2.2),m=d-.3;x>0&&s.x>m&&(s.x-=(s.x-m)*x*x*(3-2*x),c=!0)}c&&(s.applyMatrix4(n),t[a]=s.x,t[a+1]=s.y,t[a+2]=s.z)}}},wh=class{constructor(t,e,n,s,r,o){this.name=t,this.tack=n,this.head=s,this.clew=r,this.fullness=o,this.NU=12,this.NV=9,this.geo=Dl(this.NU,this.NV),this.mesh=new it(this.geo,Ie().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh)}update(t,e,n,s=1){if(this.mesh.visible=t>.015,!this.mesh.visible)return;let r=this.tack,o=r.clone().lerp(this.head,t),a=this.clew.clone();a.z=Math.abs(a.z)*s;let l=r.clone().lerp(a,.15+.85*t);this.side=s;let c=new R().subVectors(o,r).cross(new R().subVectors(l,r)).normalize();c.z*s<0&&c.negate();let h=o.distanceTo(r),f=this.fullness*e*t*h*.06,u=this.geo.attributes.position.array,d=this.geo.attributes.uv.array,g=this.NU,x=this.NV,m=new R,p=new R;for(let v=0;v<x;v++){let E=v/(x-1);for(let _=0;_<g;_++){let S=_/(g-1);p.copy(r).lerp(l,S),m.copy(p).lerp(o,E);let M=Math.sin(Math.PI*S)*Math.sin(Math.PI*Math.min(1,E*.9+.08))*(1-E*.4);m.addScaledVector(c,f*M*(1+.03*Math.sin(n*3+S*8)));let w=v*g+_;u[w*3]=m.x,u[w*3+1]=m.y,u[w*3+2]=m.z,d[w*2]=S*r.distanceTo(this.clew)/2,d[w*2+1]=E*h/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},Ah=class{constructor(t,e,n){this.name="spanker",this.mast=t,this.gaff=e,this.boom=n,this.NU=12,this.NV=12,this.geo=Dl(this.NU,this.NV),this.mesh=new it(this.geo,Ie().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,t.group.add(this.mesh);let s=Ie();this.brail=new it(new Si(.35,1,4,8),s.furl),this.brail.castShadow=!0,t.group.add(this.brail)}update(t,e,n,s=1){let r=this.mast.group,o=Re(new R(.3,-.15,0),this.gaff.group,r),a=Re(new R(this.gaff.L-.3,-.15,0),this.gaff.group,r),l=Re(new R(.3,.2,0),this.boom.group,r),c=Re(new R(this.boom.L-2,.2,0),this.boom.group,r),h=1-_f(Math.min(1,t/.4));this.brail.visible=h>.02;let f=o.clone().lerp(l,.5).add(new R(-.5,0,0));if(this.brail.position.copy(f),this.brail.scale.set(h,(o.y-l.y-.7)/1.7,h),this.mesh.visible=t>.015,!this.mesh.visible)return;let u=new R(0,0,s),d=this.geo.attributes.position.array,g=this.geo.attributes.uv.array,x=this.NU,m=this.NV,p=new R,v=new R,E=new R,_=1.3*e*t;for(let S=0;S<m;S++){let M=S/(m-1);for(let w=0;w<x;w++){let y=w/(x-1)*t;p.copy(l).lerp(c,y),v.copy(o).lerp(a,y),E.copy(p).lerp(v,M);let T=Math.sin(Math.PI*Math.min(1,y/Math.max(t,.01)))*Math.sin(Math.PI*(.08+.84*M));E.addScaledVector(u,_*T+(1-t)*.2*Math.sin(y*30));let C=S*x+w;d[C*3]=E.x,d[C*3+1]=E.y,d[C*3+2]=E.z,g[C*2]=E.x/2,g[C*2+1]=E.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},mo=class{constructor(t,e,n,s,r=null){this.name=t,this.yard=e,this.footYard=n,this.side=s,this.lower=r,this.NU=8,this.NV=10,this.geo=Dl(this.NU,this.NV),this.mesh=new it(this.geo,Ie().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh),r&&(this.boom=new it(new le(.11,.08,1,8).translate(0,.5,0).rotateZ(-Math.PI/2),Ie().spar),this.boom.castShadow=!0,r.parent.add(this.boom))}update(t,e,n){let s=t>.02;if(this.mesh.visible=s,this.boom&&(this.boom.visible=s),!s)return;let r=this.yard,o=this.side,a=r.L,l=a*.465,c=a/2+2.4*r.mast.scale,h=Math.min(c-l+.6,a*.32),f=new R(.25,-r.r,o*l),u=new R(.25,-r.r,o*(l+h*t)),d,g;if(this.footYard){let M=this.footYard,w=M.L/2+2.4*M.mast.scale;d=Re(new R(.25,M.r,o*M.L*.465),M.group,r.group),g=Re(new R(.25,M.r,o*(M.L*.465+(w-M.L*.465)*t)),M.group,r.group)}else{let{root:M,dropTo:w,reach:y}=this.lower,T=l*.78+.6;d=new R(.6,-w(),o*T),g=new R(.6,-w(),o*(T+y*t));let C=Re(M.clone(),this.lower.parent,this.lower.parent),I=Re(g.clone(),r.group,this.lower.parent);this.boom.position.copy(C),this.boom.scale.set(C.distanceTo(I),1,1),this.boom.quaternion.setFromUnitVectors(new R(1,0,0),I.clone().sub(C).normalize())}let x=this.geo.attributes.position.array,m=this.geo.attributes.uv.array,p=this.NU,v=this.NV,E=new R,_=new R,S=new R;for(let M=0;M<v;M++){let w=M/(v-1);for(let y=0;y<p;y++){let T=y/(p-1);_.copy(f).lerp(u,T),S.copy(d).lerp(g,T),E.copy(_).lerp(S,w),E.x+=1.1*e*t*Math.sin(Math.PI*T)*Math.sin(Math.PI*(.06+.82*w));let C=M*p+y;x[C*3]=E.x,x[C*3+1]=E.y,x[C*3+2]=E.z,m[C*2]=E.z/2,m[C*2+1]=E.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}};function xf(i,t){let e={square:[],stay:[],spanker:null},n={course:1.7,topsail:2,topgallant:1.3,royal:.8};for(let p of Object.values(i.masts)){let v=p.yards,E=(_,S)=>{if(!v[_]||!S&&_!=="course")return;let M=S?{yard:S}:{drop:()=>v.course.group.position.y-(_e(p.x)+2.2)},w=new Ll(`${p.name}-${_}`,v[_],M,n[_]*p.scale);w.mastName=p.name,w.kind=_,_==="topsail"&&(w.reef=!0,w.mesh.material=Ie().canvasReef),e.square.push(w)};p.name!=="mizzen"&&E("course"),E("topsail",v.course),E("topgallant",v.topsail),E("royal",v.topgallant)}{let p=i.spritYard,v=new Ll("spritsail",p,{drop:()=>3},.8);v.kind="sprit",e.square.push(v)}let s=i.bowsprit,r=i.masts.fore,o=i.masts.main,a=i.masts.mizzen;i.group.updateMatrixWorld(!0);let l=(p,v)=>Re(p.local[v].clone(),p.group,i.group),c=(p,v,E,_,S)=>{let M=new wh(p,i.group,v,E,_,S);M.kind=p,e.stay.push(M)},h=(p,v,E)=>p.clone().lerp(v,E),f=l(r,"topmastShroudHead"),u=l(r,"tgHead");c("foreTopmastStaysail",h(s.cap,f,.04),h(s.cap,f,.82),new R(r.x+4.5,Ht("qd",24)+5,1.8),1),c("jib",h(s.jibEnd,f,.05),h(s.jibEnd,f,.78),new R(r.x+7,Ht("qd",24)+8,4),1),c("flyingJib",h(s.flyEnd,u,.04),h(s.flyEnd,u,.62),new R(r.x+10.5,Ht("qd",24)+13,6),.9);let d=l(o,"topmastShroudHead"),g=l(r,"lowerHead");c("mainTopmastStaysail",h(g,d,.14),h(g,d,.85),new R(o.x+4.5,o.h.topY+1.5,.6),.9);let x=l(a,"topmastShroudHead"),m=l(o,"topBack");c("mizzenStaysail",h(m,x,.14),h(m,x,.8),new R(a.x+3,a.h.topY+.5,.6),.8),e.spanker=new Ah(a,i.gaff,i.boom),e.stun=[];for(let p of[r,o]){let v=p.yards;for(let E of[1,-1]){let _=(S,M)=>{M.kind=S,M.mastName=p.name,e.stun.push(M)};if(_("stunTop",new mo(`${p.name}-topmast-stunsail`,v.topsail,v.course,E)),_("stunTg",new mo(`${p.name}-topgallant-stunsail`,v.topgallant,v.topsail,E)),p===r){let S=Ht("upper",p.x)+1.95;_("stunLower",new mo("fore-lower-stunsail",v.course,null,E,{parent:i.group,root:new R(p.x+.5,S+.4,E*(Xt(p.x+.5,S)+.9)),dropTo:()=>v.course.group.position.y-(_e(p.x)+1.4),reach:7.5}))}}}return e}var Ey=new R(0,1,0),ar=class{constructor(t,e,n){let s=new le(1,1,1,6,1,!0);s.translate(0,.5,0),this.mesh=new ai(s,e,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=n,this._m=new Yt,this._q=new Be,this._s=new R,this._d=new R}begin(){this.n=0,this.segs=[],this.tag=""}add(t,e,n){if(this.n>=this.capacity)return;this.segs.push([t.clone(),e.clone(),this.tag]);let s=this._d.subVectors(e,t),r=s.length();r<1e-4||(this._q.setFromUnitVectors(Ey,s.multiplyScalar(1/r)),this._s.set(n,r,n),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.n++,this._m))}addSag(t,e,n,s=.02,r=4){let o=t.distanceTo(e),a=t.clone();for(let l=1;l<=r;l++){let c=l/r,h=t.clone().lerp(e,c);h.y-=s*o*4*c*(1-c),this.add(a,h,n),a=h}}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Nl=class{constructor(t){let e=Ie();this.rig=t,this.space=t.group,this.standing=new ar(this.space,e.rope,9e3),this.running=new ar(this.space,e.ropeLight,600),this.sailLines=new ar(this.space,e.ropeLight,2e3),this.sailLines.mesh.castShadow=!1,this.fittings=new ee,this.space.add(this.fittings),t.group.updateMatrixWorld(!0),this.colliders={},this.buildStanding(e)}P(t,e,...n){let s=t.local[e],r=typeof s=="function"?s(...n):s.clone();return Re(r,t.group,this.space)}L(t,e){return Re(e,t.group,this.space)}buildStanding(t){let e=this.standing;e.begin();let n=this.rig,s=[],r=[],o=[],a=(_,S,M)=>new R(_,S,M),l=(_,S,M,w,y,T)=>{for(let C=0;C<_.length-1;C++){let[I,D]=_[C],[N,L]=_[C+1];for(let H=M;H<w;H+=y){let q=(H-I.y)/(D.y-I.y),k=(H-N.y)/(L.y-N.y);q<0||q>1||k<0||k>1||e.add(I.clone().lerp(D,q),N.clone().lerp(L,k),T)}}};for(let _ of Object.values(n.masts)){let S=_.scale,M=this.colliders[_.name]={lower:[],futtock:[],topmast:[],tg:[],backstay:[]},w=_.name==="main"?9:_.name==="fore"?8:6,y=_.x+.4*S,T=Math.max(_.x-7.8*S,_.name==="mizzen"?-21.9:-99),C=Ht("upper",_.x)+1.95;for(let I of[1,-1]){let D=Xt(y,C),N=Xt(T,C);s.push(pn(a(y,C,I*(D+.5)),a(T,C,I*(N+.5)),1.2,.2));let L=[],H=this.P(_,"shroudHead");for(let pt=0;pt<w;pt++){let dt=y-.3-pt*(y-T-.6)/(w-1),Tt=Xt(dt,C)+1.05,W=a(dt,C+.2,I*Tt),$=a(dt,C+1.25,I*(Tt-.03));r.push(W,$),e.tag=`${_.name} lanyard`,e.add(W,$,.025);let ht=Ml[2],Pt=Math.round((dt-ht.x0)/ht.dx-.5),_t=ht.x0+(Pt+.5)*ht.dx,Ut=_t+Math.max(-.7,Math.min(.7,dt-_t)),oe=Xt(Ut,C-2.6)+.06;o.push([W.clone().add(a(0,-.15,0)),a(Ut,C-2.6,I*oe)]);let Q=H.clone().add(a(0,0,I*(_.r.lower+.12)));e.tag=`${_.name} lower shroud`,e.add($,Q,.06*(.8+.2*S)),M.lower.push([$,Q]),L.push([$,Q])}e.tag=`${_.name} lower ratline`,l(L,null,C+1.8,H.y-1.2,.42,.016);let q=[],k=_.h;for(let pt=0;pt<4;pt++){let dt=-k.topLen*.36+pt*k.topLen*.16,Tt=this.L(_,a(dt,k.topY+.2,I*k.topW*.48));r.push(Tt);let W=this.L(_,a(dt*.3,k.topY-3.2*S,I*.65));e.tag=`${_.name} futtock shroud`,e.add(Tt,W,.035),M.futtock.push([W,Tt]),e.tag=`${_.name} topmast shroud`;let $=this.L(_,a(_.dTop,k.crossY-.3,I*.3));e.add(Tt.clone().add(a(0,.9,0)),$,.045),M.topmast.push([Tt.clone().add(a(0,.9,0)),$]),e.add(Tt,Tt.clone().add(a(0,.9,0)),.02),q.push([Tt.clone().add(a(0,.9,0)),$])}e.tag=`${_.name} topmast ratline`,l(q,null,k.topY+1.6,k.crossY-1.2,.4,.013),e.tag=`${_.name} topgallant shroud`;let st=this.P(_,"crossEnd",I),Z=this.L(_,a(_.dTg,k.tgHead-.4,I*.14));e.add(st.clone().add(a(-.1,0,0)),Z,.03),e.add(st.clone().add(a(-.8,0,0)),Z,.03),M.tg.push([st.clone().add(a(-.1,0,0)),Z],[st.clone().add(a(-.8,0,0)),Z]),e.tag=`${_.name} backstay`;let j=C+.15,B=pt=>{if(_.name==="mizzen"){let Tt=-22.6-pt*.7,W=_e(Tt)-.3;return a(Tt,W,I*(Xt(Tt,W)+.6))}let dt=T-.9-pt*1.1;return a(dt,j,I*(Xt(dt,j)+.9))};for(let pt=0;pt<2;pt++){let dt=B(pt);r.push(dt),s.push(pn(dt.clone().add(a(.4,-.1,-I*.6)),dt.clone().add(a(-.4,-.1,-I*.6)),1.2,.2));let Tt=this.L(_,a(_.dTop,k.topmastHead-.6,I*.25));e.add(dt,Tt,.05),M.backstay.push([dt,Tt])}let rt=this.L(_,a(_.dTg,k.tgHead-.3,I*.12)),et=this.L(_,a(_.dTg,k.poleHead-.2,I*.1));e.add(B(2),rt,.035),e.add(B(2),et,.025),M.backstay.push([B(2),rt],[B(2),et])}}let c=n.bowsprit,h=n.masts.fore,f=n.masts.main,u=n.masts.mizzen,d=[["fore stay",this.P(h,"stayLower"),c.fore,.13],["fore preventer stay",this.P(h,"stayLower").add(a(0,-.3,0)),c.P(12.5,.4),.1],["fore topmast stay",this.P(h,"topmastShroudHead"),c.cap,.08],["jib stay",this.P(h,"topmastShroudHead"),c.jibEnd,.06],["fore topgallant stay",this.P(h,"tgHead"),c.flyEnd,.045],["fore royal stay",this.P(h,"poleHead"),c.flyEnd,.03],["main stay",this.P(f,"stayLower"),a(h.x+2.2,Ht("qd",h.x+2.2)+.6,0),.14],["main preventer stay",this.P(f,"stayLower").add(a(0,-.3,0)),a(h.x+3,Ht("qd",h.x+3)+.6,0),.1],["main topmast stay",this.P(f,"topmastShroudHead"),this.P(h,"lowerHead"),.08],["main topgallant stay",this.P(f,"tgHead"),this.P(h,"topmastShroudHead"),.045],["main royal stay",this.P(f,"poleHead"),this.P(h,"tgHead"),.03],["mizzen stay",this.P(u,"stayLower"),this.L(f,a(0,Ht("qd",f.x)+3.5,0)),.1],["mizzen topmast stay",this.P(u,"topmastShroudHead"),this.P(f,"topBack"),.06],["mizzen topgallant stay",this.P(u,"tgHead"),this.P(f,"lowerHead"),.035]];this.stayLines={};for(let[_,S,M,w]of d)e.tag=_,e.add(S,M,w),this.stayLines[_]=[S,M];e.tag="bowsprit rigging";let g=_=>a(31+(_-2)*.35,_,0);e.tag="bobstay",e.add(c.P(10.5,-.3),g(1.6),.08),e.add(c.P(13.5,-.3),g(3.4),.08);for(let _ of[1,-1])e.tag="bowsprit shroud",e.add(c.P(12,0),a(28.2,4.5,_*2),.06),e.add(c.P(16,0),a(28.4,5,_*2.1),.06),e.tag="martingale back rope",e.add(c.striker,a(27.5,Ht("qd",27)-.6,_*2.2),.04);e.tag="martingale stay",e.add(c.jibEnd,c.striker,.04),e.add(c.flyEnd,c.striker,.035),e.end();let x=new ar(this.space,t.iron,o.length);x.begin();for(let[_,S]of o)x.add(_,S,.04);x.end();let m=new it(Me(s),t.black);m.castShadow=!0,this.fittings.add(m);let p=new le(.17,.17,.12,10);p.rotateX(Math.PI/2);let v=new ai(p,t.darkWood,r.length),E=new Yt;r.forEach((_,S)=>{E.makeTranslation(_.x,_.y,_.z),v.setMatrixAt(S,E)}),this.fittings.add(v)}updateRunning(t,e,n){let s=this.running,r=this.rig,o=(x,m,p)=>new R(x,m,p);s.begin();let a=r.masts.main,l=r.masts.mizzen,c=(x,m,p)=>{let v=p;return x.name==="fore"?m.name==="course"?o(a.x+3.5,_e(a.x+3.5)+.3,v*7.2):m.name==="topsail"?this.P(a,"crossEnd",v):m.name==="topgallant"?this.P(a,"tgHead"):this.P(a,"poleHead"):x.name==="main"?m.name==="course"?o(-21.5,_e(-21.5)+.3,v*(Xt(-21.5,9)+.1)):m.name==="topsail"?o(l.x+1,_e(l.x+1)+.6,v*(Xt(l.x+1,9)+.4)):this.P(l,"poleHead").add(o(0,.2,0)):m.name==="course"?this.L(a,o(-1.5,Ht("qd",a.x)+6,v*3)):m.name==="topsail"?this.P(a,"topEdge",v):this.P(a,"crossEnd",v)},h={course:"lowerHead",topsail:"topmastHead",topgallant:"tgHead",royal:"poleHead"};for(let x of Object.values(r.masts))for(let m of Object.values(x.yards)){let p=this.P(x,h[m.name]);for(let v of[1,-1]){let E=Re(o(0,0,v*m.L*.48),m.group,this.space);s.tag=`${x.name} ${m.name} lift`,s.add(E,p.clone().add(o(0,0,v*.3)),.025),s.tag=`${x.name} ${m.name} brace`,s.addSag(E,c(x,m,v),.022,.012,3)}if(s.tag=`${x.name} ${m.name} tie`,s.add(Re(o(0,m.r,0),m.group,this.space),p,.04),m.name!=="course"){s.tag=`${x.name} ${m.name} halyard`;let v=m.name==="topgallant"?-1:1,E=o(x.x-1.3,Ht("upper",x.x)+(x.x>1&&x.x<15?.6:2.6),v*.9);s.add(p.clone().add(o(-.35,-.3,v*.2)),E,.03)}}for(let x of t.square){if(x.kind!=="course"||!x.mesh.visible)continue;let m=x.geo.attributes.position,p=[m.count-x.NU,m.count-1];s.tag=`${x.mastName} course sheet/tack`,p.forEach((v,E)=>{let _=Re(o(m.getX(v),m.getY(v),m.getZ(v)),x.yard.group,this.space),S=Math.sign(_.z)||(E===0?-1:1),M=x.mastName==="fore"?9:-12;s.addSag(_,o(M,_e(M)+.3,S*(Xt(M,9)+.1)),.03,.01,3),s.add(_,o(_.x+6,_e(_.x+6)+.2,S*(Xt(_.x+6,9)-.1)),.03)})}for(let x of t.stay){if(!x.mesh.visible)continue;let m=x.geo.attributes.position,p=o(m.getX(x.NU-1),m.getY(x.NU-1),m.getZ(x.NU-1)),E=x.kind==="mainTopmastStaysail"||x.kind==="mizzenStaysail"?p.x+3:Math.min(23,p.x-4);s.tag=`${x.name} sheet`,s.addSag(p,o(E,_e(E)+.3,Math.sign(p.z)*(Xt(E,9)-.2)),.025,.02,3)}let f=Re(o(r.boom.L-.3,0,0),r.boom.group,this.space),u=Re(o(r.gaff.L-.2,0,0),r.gaff.group,this.space);s.tag="boom topping lift";let d=1.3*n.belly*e["set.spanker"];for(let x of[1,-1]){let m=Re(o(r.boom.L-.3,0,x*.45),r.boom.group,this.space),p=this.P(l,"lowerHead").add(o(0,0,x*.9)),v=x===n.lee?d+.35:0,E=m;for(let _=1;_<=8;_++){let S=_/8,M=m.clone().lerp(p,S);M.z+=x*v*Math.sin(Math.PI*Math.min(1,S*1.25)),s.add(E,M,.03),E=M}}s.tag="spanker sheet",s.addSag(f,o(-29,_e(-29)+.3,0),.04,.01,2),s.tag="gaff vang",s.addSag(u,Re(o(r.boom.L-.4,.15,0),r.boom.group,this.space),.02,.02,3),s.addSag(u,o(-28.5,_e(-28.5)+.2,-n.lee*(Xt(-28.5,_e(-28.5))-.1)),.02,.02,3),s.tag="peak halyard",s.add(u,this.P(l,"topmastShroudHead"),.03);let g=r.spritYard;s.tag="spritsail yard rigging";for(let x of[1,-1]){let m=Re(o(0,0,x*g.L*.48),g.group,this.space);s.add(m,r.bowsprit.cap,.022),s.addSag(m,o(26.5,_e(26.5)+.3,x*3.5),.02,.02,3)}s.end(),this.updateSailLines(t)}updateSailLines(t){let e=this.sailLines;e.begin();let n=new Yt().copy(this.space.matrixWorld).invert(),s=new Yt,r=new R,o=new R,a=new R,l=(d,g,x,m,p)=>{let v=d.geo.attributes.position,E=d.geo.attributes.normal,_=x*d.NU+g;return r.fromBufferAttribute(v,_),a.fromBufferAttribute(E,_),a.dot(p)<0&&a.negate(),r.clone().addScaledVector(a,m).applyMatrix4(s)},c=(d,g,x,m,p,v)=>{let E=null;for(let _=d.NV-1;_>=0;_--){let S=l(d,g,_,x,m);E&&e.add(E,S,p),E=S}v&&e.add(E,v.clone().applyMatrix4(s),p)},h=new R(1,0,0),f={course:[.2,.4,.6,.8],topsail:[.28,.5,.72],topgallant:[.35,.65]};for(let d of t.square){if(!d.mesh.visible||!f[d.kind])continue;s.multiplyMatrices(n,d.yard.group.matrixWorld);let g=d.yard.L*.465;e.tag=`${d.name} buntline`;for(let x of f[d.kind]){let m=Math.round(x*(d.NU-1)),p=-g+2*g*m/(d.NU-1);c(d,m,.06,h,.018,new R(d.yard.r+.05,d.yard.r*.6,p))}if(d.kind==="course"){e.tag=`${d.name} leechline`;for(let x of[.1,.9])c(d,Math.round(x*(d.NU-1)),-.06,h,.016,null)}e.tag=`${d.name} clewline`;for(let x of[0,d.NU-1]){let m=l(d,x,d.NV-1,-.05,h),p=x===0?-1:1;e.add(m,new R(-.25,-d.yard.r,p*g*.55).applyMatrix4(s),.018)}}let u=t.spanker;if(u.mesh.visible){s.multiplyMatrices(n,u.mast.group.matrixWorld),e.tag="spanker brail";let d=new R(0,0,1);for(let g of[.3,.55,.8]){let x=Math.round(g*(u.NV-1));for(let m of[.06,-.06]){let p=null;for(let v=u.NU-1;v>=0;v--){let E=l(u,v,x,m,d);p&&e.add(p,E,.016),p=E}}}}e.end()}};function Ty(i,t,e){let s=Xt(i,t),r=(Xt(i+.05,t)-Xt(i-.05,t))/(2*.05),o=(Xt(i,t+.05)-Xt(i,t-.05))/(2*.05),a=new R(-r,-o,e).normalize(),l=new R().crossVectors(new R(0,1,0),a).normalize(),c=new R().crossVectors(a,l).normalize();return{p:new R(i,t,e*s),n:a,a:l,up:c}}function wy(i,t){let e=t*2.1,n=[[0,-.32*i/3],[e*.35,-.3*i/3],[e*.4,-.22*i/3],[e*.2,-.16*i/3],[e*.95,-.1*i/3],[e,0],[e*1.06,.02*i],[e*.98,.04*i],[e*.92,.38*i],[e*.98,.4*i],[e*.86,.42*i],[e*.72,.9*i],[e*.82,.95*i],[e*.78,i],[t,i],[t,i*.7]].map(([o,a])=>new at(o,a)),s=new li(n,14);s.rotateX(Math.PI/2);let r=new le(e*.3,e*.3,e*2.8,8);return r.rotateZ(Math.PI/2),r.translate(0,0,.42*i),Me([s,r])}function Ay(i,t){let e=t*1.65,n=[[0,-.1],[e*.5,-.09],[e*.75,-.04],[e*.95,.05],[e,.25*i],[e*.92,.6*i],[e*.86,.82*i],[e*1.05,.9*i],[e*1.08,i],[t,i],[t,i*.55]].map(([o,a])=>new at(o,a)),s=new li(n,16);s.rotateX(Math.PI/2);let r=new pe(e*.5,e*.9,e*.9);return r.translate(0,-e*1.05,.45*i),Me([s,r])}function Ry(i,t){let e=[],n=new pe(t*3.2,t*1,i*1.5);n.translate(0,t*2.4,i*.75),e.push(n);let s=new pe(t*3.6,t*1.6,i*1.3);s.translate(0,t*.95,i*.7),e.push(s);for(let r of[1,-1]){let o=new le(t*.9,t*.9,t*.6,10);o.rotateZ(Math.PI/2),o.translate(r*t*2,t*.9,i*.15),e.push(o)}return Me(e)}function Cy(i,t){let e=t*6.2,n=i*.5,s=[];for(let o of[1,-1]){let a=new vn;a.moveTo(0,0),a.lineTo(n,0),a.lineTo(n,t*5.2),a.lineTo(n*.62,t*5.2),a.lineTo(n*.55,t*3.8),a.lineTo(n*.3,t*3.4),a.lineTo(n*.22,t*2.4),a.lineTo(0,t*2.2),a.closePath();let l=new Pn(a,{depth:t*.9,bevelEnabled:!1});l.rotateY(-Math.PI/2),l.translate(o*e/2+t*.45,0,0),s.push(l)}let r=new pe(e,t*.8,n*.95);r.translate(0,t*1.4,n/2),s.push(r);for(let o of[n*.12,n*.85]){let a=new pe(e*1.25,t*1.1,t*1.4);a.translate(0,t*1.4,o),s.push(a);for(let l of[1,-1]){let c=new le(t*1.5,t*1.5,t*.7,12);c.rotateZ(Math.PI/2),c.translate(l*e*.62,t*1.5,o),s.push(c)}}return Me(s)}var Ul=class{constructor(t){let e=Ie();this.group=new ee,this.group.name="guns",t.add(this.group),this.ports=[];for(let s of Sl())for(let r of[1,-1]){let o=Ty(s.x,s.y,r),a=new R(o.n.x,0,o.n.z).normalize();this.ports.push({...s,side:r,basis:o,out:a,recoil:0,fireAt:-1})}this.byTier=new Map;for(let s of this.ports){let r=s.tier.name;this.byTier.has(r)||this.byTier.set(r,[]),this.byTier.get(r).push(s)}this.barrels=[],this.carriages=[];for(let[s,r]of this.byTier){let o=r[0].tier,a=new ai(o.carronade?Ay(o.len,o.bore):wy(o.len,o.bore),e.iron,r.length);a.castShadow=!0,a.frustumCulled=!1;let l=new ai(o.carronade?Ry(o.len,o.bore):Cy(o.len,o.bore),e.carriage,r.length);l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1,this.group.add(a,l),this.barrels.push({mesh:a,list:r}),this.carriages.push({mesh:l,list:r})}this.lidPorts=this.ports.filter(s=>s.tier.lid);let n=new pe(1,1,1);n.translate(0,-.5,.5),this.lids=new ai(n,[e.black,e.black,e.black,e.black,e.black,e.inside],this.lidPorts.length),this.lids.castShadow=!0,this.lids.frustumCulled=!1,this.group.add(this.lids),this._m=new Yt,this._b=new Yt,this._r=new Yt,this._s=new Yt,this.apply(0,0)}apply(t,e){let n=this._m,s=this._b,r=this._r,o=this._s;this.lidPorts.forEach((f,u)=>{let{a:d,up:g,n:x,p:m}=f.basis,p=f.tier,v=m.clone().addScaledVector(g,p.h/2+.04).addScaledVector(x,.02);s.makeBasis(d,g,x).setPosition(v),r.makeRotationX(-t*1.45),o.makeScale(p.w+.12,p.h+.1,.11),n.copy(s).multiply(r).multiply(o),this.lids.setMatrixAt(u,n)}),this.lids.instanceMatrix.needsUpdate=!0;let a=new Be,l=new R,c=new R(1,1,1),h=new R(0,0,1);for(let{mesh:f,list:u}of this.barrels)u.forEach((d,g)=>{let x=d.tier;a.setFromUnitVectors(h,d.out);let m=Ht(x.deck,d.x),p=d.basis.p.clone(),v=-.9+e*1.6-d.recoil*1.3;l.copy(p).addScaledVector(d.out,v-x.len),l.y=d.y-.02,f.setMatrixAt(g,n.compose(l,a,c))}),f.instanceMatrix.needsUpdate=!0;for(let{mesh:f,list:u}of this.carriages)u.forEach((d,g)=>{let x=d.tier;a.setFromUnitVectors(h,d.out);let m=d.basis.p.clone(),p=-.9+e*1.6-d.recoil*1.3;l.copy(m).addScaledVector(d.out,p-x.len*(x.carronade?1.2:.88)),l.y=Ht(x.deck,d.x)+.02,f.setMatrixAt(g,n.compose(l,a,c))}),f.instanceMatrix.needsUpdate=!0}muzzle(t,e){let n=-.9+e*1.6;return t.basis.p.clone().addScaledVector(t.out,n+.1).setY(t.y)}};function Py(i,t,e){return fn(24,10,(o,a)=>{let c=o/23*2-1,h=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(c),c>0?1.7:3)),.55),f=e*(.75+.25*(1-c*c)),u=a/9*Math.PI-Math.PI/2,d=.25*c*c*e;return[c*i/2,-f*Math.cos(u)*(1-.1*Math.abs(c))+d,h*Math.sin(u)]},null,!0)}function Fl(i,t,e,n="#2a2622"){let s=Ie(),r=new ee,o=new Le({color:n,roughness:.7,side:Ne}),a=new it(Py(i,t,e),o);a.castShadow=!0,r.add(a);let l=[];for(let u=1;u<=4;u++){let d=-i/2+u/5*i,g=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(d/(i/2)),d>0?1.7:3)),.55),x=new pe(.28,.06,g*1.8);x.translate(d,-e*.35,0),l.push(x)}let c=new it(Me(l),s.darkWood);r.add(c);let h=[];for(let u=0;u<=40;u++){let d=u/40*Math.PI*2,g=Math.cos(d),x=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(g),g>0?1.7:3)),.55);h.push(new R(g*i/2,.25*g*g*e+.02,Math.sign(Math.sin(d))*x))}let f=new it(new Dn(new qn(h,!0),80,.06,5,!0),new Le({color:"#d8cfb6",roughness:.6}));return r.add(f),r}function Rh(){let i=Ie(),t=[],e=(l,c,h=0)=>new R(l,c,h);t.push(ve(e(0,0),e(0,5.3),.13,.1,8));let n=[];for(let l of[1,-1]){let c=new Oi(e(0,.1),e(l*1.1,0),e(l*1.85,1.35));n.push(new Dn(c,10,.11,6));let h=new pe(.85,1,.08);h.rotateZ(-l*.55),h.translate(l*1.7,1.15,0),n.push(h)}t.push(...n);let s=new Ln(.32,.05,6,16);s.translate(0,5.65,0),t.push(s);let r=new it(Me(t),i.iron),o=new it(new pe(.32,.32,5),i.darkWood);o.position.y=5;let a=new ee;return a.add(r,o),a.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),a}function Iy(i){let t=new ee,e=()=>{let o=new ee,a=new it(new Ln(.82,.05,6,28),i.darkWood);o.add(a);let l=new it(new le(.16,.16,.22,10),i.brass);l.rotation.x=Math.PI/2,o.add(l);for(let c=0;c<10;c++){let h=c/10*Math.PI*2,f=new it(new le(.03,.035,1.18,6),i.darkWood);f.position.set(Math.cos(h)*.59,Math.sin(h)*.59,0),f.rotation.z=h-Math.PI/2,o.add(f)}return o},n=e(),s=e();n.rotation.y=s.rotation.y=Math.PI/2,n.position.set(.55,1.15,0),s.position.set(-.55,1.15,0),t.add(n,s);let r=new it(new le(.28,.28,1,12),i.darkWood);r.rotation.z=Math.PI/2,r.position.y=1.15,t.add(r);for(let o of[.85,-.85]){let a=new it(new pe(.18,1.2,.4),i.darkWood);a.position.set(o,.6,0),t.add(a)}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function Ly(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#0e0905",t.fillRect(0,0,128,128),t.fillStyle="#8c7354";for(let n=0;n<8;n++)t.fillRect(n*16,0,9,128),t.fillRect(0,n*16,128,9);let e=new Cn(i);return e.colorSpace=Oe,e.wrapS=e.wrapT=si,e}var Ol=class{constructor(t,e){let n=Ie();this.group=new ee,this.group.name="fittings",t.add(this.group);let s=this.group,r=(_=0,S=0,M=0)=>new R(_,S,M),o=_=>Ht("qd",_)+.35,a=Fl(10.2,3,1.15,"#3a2c20");a.position.set(8.8,o(8.8)+1.1,0);let l=Fl(9.4,2.4,.95,"#1d1b19");l.position.set(8.4,o(8.4)+.95,2.95);let c=Fl(8.6,2.3,.9,"#1d1b19");c.position.set(8.8,o(8.8)+.9,-2.9),s.add(a,l,c);for(let _ of[1,-1]){let M=_e(-26.4)-.4,w=Xt(-26.4,M)+1.7,y=Fl(7.4,2,.8,"#1d1b19");y.position.set(-26.4,M,_*w),s.add(y);for(let T of[-2.6,2.6]){let C=r(-26.4+T,_e(-26.4+T)-.2,_*(Xt(-26.4+T,9)-.2)),I=r(-26.4+T,_e(-26.4+T)+1.2,_*(w+.1)),D=new it(ve(C,I,.12,.09,8),n.black);D.castShadow=!0,s.add(D),this.davitRope=this.davitRope||[],this.davitRope.push([I,r(-26.4+T*.85,M+.2,_*w)])}}let h=Ei+1.4,f=Iy(n);f.position.set(h,Ht("qd",h),0),s.add(f);let u=new ee,d=new it(new pe(.7,1,1.2),n.darkWood);d.position.y=.5;let g=new it(new In(.28,12,8,0,Math.PI*2,0,Math.PI/2),n.brass);g.position.y=1,u.add(d,g),u.position.set(h+1.6,Ht("qd",h+1.6),0),s.add(u);let x=(_,S,M=.75)=>{let w=new ee,y=new it(new le(M*.75,M*.9,1,16),n.darkWood);y.position.y=.5;let T=new it(new le(M*1.2,M*1.2,.35,16),n.darkWood);T.position.y=1.15,w.add(y,T);for(let C=0;C<12;C++){let I=C/12*Math.PI*2,D=new it(new pe(.12,.9,.18),n.darkWood);D.position.set(Math.cos(I)*M*.85,.5,Math.sin(I)*M*.85),D.rotation.y=-I,w.add(D)}w.position.set(_,Ht(S,_),0),w.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),s.add(w)};x(-5.6,"qd"),x(bn+2.5,"upper",.65);{let _=new ee,S=new it(new pe(2.6,.5,2),n.darkWood);S.position.y=.25;let M=new it(new le(1.1,1.1,2.6,3,1),n.glass);M.rotation.z=Math.PI/2,M.rotation.x=Math.PI/6,M.scale.set(1,1,.9),M.position.y=.75,_.add(S,M),_.position.set(-8.8,Ht("qd",-8.8),0),s.add(_)}let m=Ly(),p=new Le({map:m,roughness:.85});for(let[_,S,M]of[[5.6,2.4,2.4],[10.2,3,2.6],[13.6,1.8,1.8]]){let w=new it(new pe(S+.3,.3,M+.3),n.darkWood);w.position.set(_,Ht("upper",_)+.15,0);let y=new it(new Yn(S,M),p);y.rotation.x=-Math.PI/2,y.position.set(_,Ht("upper",_)+.31,0),m.repeat.set(1,1),s.add(w,y)}{let _=new ee,S=[];for(let[y,T]of[[.4,.4],[.4,-.4],[-.4,.4],[-.4,-.4]]){let C=new le(.06,.07,1.6,6);C.translate(y,.8,T),S.push(C)}let M=new Xs(.75,.6,4);M.rotateY(Math.PI/4),M.translate(0,1.9,0),S.push(M),_.add(new it(Me(S),n.ochre));let w=new it(new le(.12,.28,.4,14,1,!0),n.brass);w.material=n.brass,w.position.y=1.25,_.add(w),_.position.set(dn+.8,Ht("qd",dn+.8),0),s.add(_)}{let _=new it(new pe(.6,1.6,.6),n.copper);_.position.set(20.3,Ht("qd",20.3)+.8,1.6),_.castShadow=!0,s.add(_);let S=new it(new le(.28,.28,.5,10),n.copper);S.rotation.z=Math.PI/2,S.position.set(20.3,Ht("qd",20.3)+1.75,1.6),s.add(S)}this.lanterns=[];{let _=qe(_e(-29.4))+.5,S=_e(-29.4)+.1;for(let[M,w]of[[0,1.25],[3.2,.9],[-3.2,.9]]){let y=new ee,T=new it(new le(.42*w,.32*w,1.1*w,6),n.lantern);T.position.y=.55*w;let C=new it(new Xs(.5*w,.6*w,6),n.gold);C.position.y=1.4*w;let I=new it(new In(.12*w,8,6),n.gold);I.position.y=1.8*w;let D=new it(new le(.2*w,.35*w,.35*w,6),n.gold);D.position.y=-.1,y.add(T,C,I,D);let N=new it(ve(r(.6,-.6),r(0,0),.06,.06,6),n.gold);y.add(N),y.position.set(_-.3,S+.4,M),s.add(y),this.lanterns.push(T)}}{let _=qe(_e(-29.4))+.6,S=r(_,_e(-29.4)-.5),M=r(_-2.2,_e(-29.4)+6.5);s.add(new it(ve(S,M,.09,.05,8),n.spar)),this.ensignStaff=M;let y=e.bowsprit.cap.clone().add(r(0,.4,0)),T=y.clone().add(r(.6,4.2,0));s.add(new it(ve(y,T,.07,.04,8),n.spar)),this.jackStaff=T}this.anchors=[];for(let _ of[1,-1]){let M=Ht("qd",25.6)+.55,w=Xt(25.6,M)-.4,y=r(25.6+1.35,M+.2,_*(w+1.85)),T=Rh(),C=r(Math.cos(1.05),Math.sin(1.05),_*.05).normalize(),I=y.clone().add(r(0,-.5,0)),D=I.clone().addScaledVector(C,-5.65);D.z=_*(Xt(D.x,D.y)+1.25);let N=I.clone().sub(D).normalize(),L=r(0,0,_).sub(N.clone().multiplyScalar(N.z*_)).normalize(),H=r().crossVectors(L,N);T.quaternion.setFromRotationMatrix(new Yt().makeBasis(L,N,H)),T.position.copy(D),s.add(T),this.anchors.push({obj:T,side:_,home:T.position.clone()})}let v=(_,S)=>{let M=Rh(),w=Ht("upper",_)+3.4,y=Xt(_,w-4)+.35;M.position.set(_,w-5.65,S*y),M.rotation.set(S*.06,Math.PI/2,0),s.add(M)};v(14.075,1),v(14.075,-1),v(11.025,1);let E=(_,S,M)=>{let w=Rh();w.scale.setScalar(_),w.rotation.set(Math.PI/2,0,-Math.PI/2),w.position.set(S-2.6*_,Ht("qd",S)+.5,M),s.add(w)};E(.6,12.6,4.7),E(.42,12.4,-4.7),this.cable=new it(new ce,n.rope),this.cable.castShadow=!0,s.add(this.cable),this.hawse=r(26.9,Ht("middle",26.9)+.9,Xt(26.9,Ht("middle",26.9)+.9)+.1)}setAnchor(t){let e=this.anchors[0];if(e.obj.visible=t<.95,e.obj.position.copy(e.home).add(new R(0,-t*16,0)),t>.02){let n=this.hawse,s=new R(n.x+4+t*18,Ee(n.y-1,-9,t),n.z+t*3),r=n.clone().lerp(s,.5).add(new R(0,-t*2.5,0)),o=new Oi(n,r,s);this.cable.geometry.dispose(),this.cable.geometry=new Dn(o,16,.14,6),this.cable.visible=!0}else this.cable.visible=!1}};var Bl={uTime:{value:0},uWind:{value:1}},Ti=class{constructor(t,e,n,s,r=0){let o=new Yn(e,n,24,6);o.translate(e/2,-n/2,0);let a=new Le({map:cf(t),side:Ne,roughness:.85});a.onBeforeCompile=l=>{l.uniforms.uTime=Bl.uTime,l.uniforms.uWind=Bl.uWind,l.uniforms.uW={value:e},l.uniforms.uTaper={value:r},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind, uW, uTaper;`).replace("#include <begin_vertex>",`vec3 transformed = position;
float f = position.x / uW;
transformed.y = (transformed.y + ${(n/2).toFixed(3)}) * (1.0 - uTaper * f) - ${(n/2).toFixed(3)};
float droop = (1.0 - uWind) * 0.75;
float wv = sin(position.x * 0.9 - uTime * (3.0 + 4.0 * uWind) + position.y * 0.4) * f * (0.18 + 0.35 * uWind) * uW * 0.12;
transformed.z += wv;
transformed.x *= mix(1.0, 0.55, droop);
transformed.y -= f * droop * uW * 0.6;
transformed.x -= abs(wv) * 0.25;`)},this.mesh=new it(o,a),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,s.add(this.mesh)}place(t,e){this.mesh.position.copy(t),this.mesh.rotation.set(0,Math.atan2(-e.z,e.x),0)}static update(t,e){Bl.uTime.value=t,Bl.uWind.value=e}};var Dy=`
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
}`,Ny=`
uniform sampler2D map;
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor.rgb, t.a * vColor.a);
  if (gl_FragColor.a < 0.003) discard;
  #include <fog_fragment>
}`,Hl=class{constructor(t,e,n){this.max=e;let s=new Zr,r=new Yn(1,1);s.index=r.index,s.attributes.position=r.attributes.position,s.attributes.uv=r.attributes.uv,this.data=new Float32Array(e*4),this.color=new Float32Array(e*4),s.setAttribute("iData",new Mi(this.data,4).setUsage(ul)),s.setAttribute("iColor",new Mi(this.color,4).setUsage(ul)),s.instanceCount=0,this.geo=s;let o=new We({uniforms:ds.merge([xt.fog,{map:{value:bh()}}]),vertexShader:Dy,fragmentShader:Ny,transparent:!0,depthWrite:!1,fog:!0,blending:n?jr:Wi});o.uniforms.map.value=bh(),this.mesh=new it(s,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?11:10,t.add(this.mesh),this.list=[]}spawn(t){this.list.length<this.max&&this.list.push(t)}update(t,e){let n=this.list;for(let s=n.length-1;s>=0;s--){let r=n[s];if(r.age+=t,r.age>=r.life){n.splice(s,1);continue}r.pos.addScaledVector(r.vel,t),r.vel.multiplyScalar(Math.exp(-r.drag*t)),r.vel.addScaledVector(r.acc,t)}e&&n.sort((s,r)=>r.pos.distanceToSquared(e)-s.pos.distanceToSquared(e)),n.forEach((s,r)=>{let o=s.age/s.life;this.data[r*4]=s.pos.x,this.data[r*4+1]=s.pos.y,this.data[r*4+2]=s.pos.z,this.data[r*4+3]=s.size0+(s.size1-s.size0)*Math.sqrt(o);let a=s.alpha*Math.min(1,s.age/(s.fadeIn||1e-4))*(1-o)**s.fadePow;this.color[r*4]=s.color[0],this.color[r*4+1]=s.color[1],this.color[r*4+2]=s.color[2],this.color[r*4+3]=a}),this.geo.instanceCount=n.length,this.geo.attributes.iData.needsUpdate=!0,this.geo.attributes.iColor.needsUpdate=!0}},zl=class{constructor(t){this.scene=t,this.smoke=new Hl(t,1800,!1),this.flash=new Hl(t,200,!0),this.rand=di(99),this.lights=[];for(let e=0;e<2;e++){let n=new qr("#ffb060",0,60,1.6);t.add(n),this.lights.push({l:n,t:1})}this.li=0}gunshot(t,e,n){let s=this.rand;for(let o=0;o<3;o++)this.flash.spawn({pos:t.clone().addScaledVector(e,.6+o*.9),vel:e.clone().multiplyScalar(14),acc:new R,drag:6,age:0,life:.14+s()*.06,size0:2.6-o*.5,size1:3.6-o*.6,color:[1,.62,.25],alpha:1,fadePow:1});for(let o=0;o<14;o++){let a=e.clone().multiplyScalar(10+s()*22).add(new R((s()-.5)*4,(s()-.3)*3,(s()-.5)*4)),l=.82+s()*.12;this.smoke.spawn({pos:t.clone().addScaledVector(e,.5),vel:a,acc:new R(n.x,.35,n.z),drag:1.4+s()*.6,age:0,life:9+s()*7,fadeIn:.15,size0:1.2+s(),size1:9+s()*7,color:[l,l,l*.98],alpha:.55,fadePow:1.6})}let r=this.lights[this.li++%this.lights.length];r.l.position.copy(t).addScaledVector(e,2),r.t=0}update(t,e){this.smoke.update(t,e),this.flash.update(t,null);for(let n of this.lights)n.t+=t,n.l.intensity=n.t<.18?900*(1-n.t/.18):0}},kl=class{constructor(t,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=di(41);s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,256,256);for(let p=0;p<1400;p++){let v=r()*256,E=r()*256,_=1+r()*7;s.fillStyle=`rgba(255,255,255,${.1+r()*.35})`,s.beginPath(),s.ellipse(v,E,_*1.6,_,0,0,Math.PI*2),s.fill();for(let[S,M]of[[256,0],[-256,0],[0,256],[0,-256]])s.beginPath(),s.ellipse(v+S,E+M,_*1.6,_,0,0,Math.PI*2),s.fill()}let o=new Cn(n);o.wrapS=o.wrapT=si,this.tex=o,this.uniforms={uFoam:{value:o},uScroll:{value:0},uStrength:{value:0}};let a=[],l=[],c=[],h=[],f=(p,v,E,_=12)=>{let S=a.length/3;for(let M=0;M<p;M++){let w=E(M/(p-1));for(let y=0;y<v;y++){let T=y/(v-1)*2-1,C=w.x+w.px*T*w.half,I=w.z+w.pz*T*w.half;a.push(C,0,I),l.push(C/_,I/_),c.push(Math.min(1,w.a(T)))}}for(let M=0;M<p-1;M++)for(let w=0;w<v-1;w++){let y=S+M*v+w,T=y+v,C=y+1,I=T+1;h.push(y,T,C,T,I,C)}},u=qe(0)+.3,d=En(0);for(let p of[1,-1])f(110,6,v=>{let E=u+(d-u)*v,_=1.6+6.5*v**3,S=Xt(E,.05);return{x:E+.6*v**2,z:p*(S-.3+_/2),px:0,pz:p,half:_/2,a:M=>(1-(M+1)/2)**1.3*(.6+1.3*v**2.2)}},9);f(60,9,p=>({x:u-p*260,z:0,px:0,pz:1,half:2.6+18*p**.8,a:v=>(1-p)**1.8*(1-v*v)*.95*Math.min(1,p*40+.3)}),14);let g=tn.degToRad(19.5);for(let p of[1,-1]){let v=d-3.5,E=p*(Xt(v,.05)+1.5),_=-Math.cos(g),S=p*Math.sin(g);f(50,5,M=>{let w=M*240;return{x:v+_*w,z:E+S*w,px:S*p,pz:-_*p,half:1.4+w*.035,a:y=>.6*(1-M)**1.5*(1-y*y)*Math.min(1,M*30+.2)}},12)}let x=new ce;x.setAttribute("position",new Qt(a,3)),x.setAttribute("uv",new Qt(l,2)),x.setAttribute("alpha",new Qt(c,1)),x.setIndex(h);let m=new We({uniforms:ds.merge([xt.fog,this.uniforms]),vertexShader:`attribute float alpha; varying float vA; varying vec2 vUv;
        ${ff}
        #include <fog_pars_vertex>
        void main(){ vA = alpha; vUv = uv; vec3 p = position; p.y = seaHeight(p.xz) + 0.07;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
        }`,fragmentShader:`uniform sampler2D uFoam; uniform float uScroll, uStrength; varying float vA; varying vec2 vUv;
        #include <fog_pars_fragment>
        void main(){ float f = texture2D(uFoam, vUv + vec2(uScroll, 0.0)).a;
        float f2 = texture2D(uFoam, vUv * 0.6 + vec2(uScroll * 0.7, 0.31)).a;
        gl_FragColor = vec4(vec3(0.95), (f * 0.7 + f2 * 0.6) * vA * uStrength);
        #include <fog_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!0,side:Ne,polygonOffset:!0,polygonOffsetFactor:-2});m.uniforms.uFoam.value=o;for(let p of["uTime","uOffset","uWaveScale","uWaveRot"])m.uniforms[p]=e[p];this.uniforms=m.uniforms,this.mesh=new it(x,m),this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t,e){this.uniforms.uScroll.value=t/9%1,this.uniforms.uStrength.value=Math.min(1,e/5)*.9+.1}};var Uy=["course","topsail","topgallant","royal","sprit","foreTopmastStaysail","jib","flyingJib","mainTopmastStaysail","mizzenStaysail","spanker","stunTop","stunTg","stunLower"],Fy={stunTop:0,stunTg:0,stunLower:0},Vl=i=>Object.fromEntries(Uy.map(t=>[t,i])),Ki={sail:{set:{...Vl(1),sprit:0,...Fy},hoist:{topsail:1,topgallant:1,royal:1},ports:0,runOut:0,anchor:0,gaffEnsign:1,jack:0,unionStays:0},trafalgar:{set:{...Vl(1),sprit:0},hoist:{topsail:1,topgallant:1,royal:1},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:1,wind:{dir:-160,str:.15}},action:{set:{...Vl(0),topsail:1,foreTopmastStaysail:1,jib:1,spanker:1},hoist:{topsail:1,topgallant:1,royal:0},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:0},anchor:{set:Vl(0),hoist:{topsail:0,topgallant:0,royal:0},ports:0,runOut:0,anchor:1,gaffEnsign:0,jack:1,unionStays:0}},Oy={course:.3,topsail:.32,topgallant:.13,royal:.05,sprit:0,foreTopmastStaysail:.04,jib:.04,flyingJib:.03,mainTopmastStaysail:.02,mizzenStaysail:.02,spanker:.05,stunTop:.06,stunTg:.03,stunLower:.05},Ch=i=>Math.min(1,Math.max(0,i)),Ph=i=>(i+540)%360-180;function By(i,t,e){let n=tn.degToRad(Ph(t*(1-i.anchor))),s=Math.abs(n),r=n<0?-1:1,o=n<=0?1:-1,a=0;for(let[g,x]of Object.entries(Oy))a+=x*(i[`set.${g}`]??0);let l=Ch((s-tn.degToRad(48))/tn.degToRad(30)),c=1-i.anchor,h=6*e*Math.pow(a,.8)*l*(.75+.25*Math.sin(s))*c,f=2+12*e,u=new R(-Math.cos(n),0,-Math.sin(n)).multiplyScalar(f),d=u.clone().add(new R(-h,0,0));return{rel:n,lee:o,area:a,drive:l,speed:h,toward:u,apparent:d,brace:r*.5*Ch((Math.PI-s)/tn.degToRad(110))*c,heel:-r*e*.12*a*Math.abs(Math.sin(n))*l,boomSwing:-r*(.06+.5*Ch((s-.8)/2.35))*c,belly:(.3+.7*e)*Math.max(l,.06),luff:(1-l)*(.2+e),waveScale:(.35+.9*e)*(1-.35*i.anchor)}}function yf(i){let t={};for(let[e,n]of Object.entries(i))if(e!=="wind")if(typeof n=="object")for(let[s,r]of Object.entries(n))t[`${e}.${s}`]=r;else t[e]=n;return t}var Hy=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function zy(i,t,e){let n=e>t;return i.startsWith("set.")?n?[.35,.9]:[0,.55]:i.startsWith("hoist.")?n?[.05,.45]:[.45,.9]:i==="ports"?n?[.1,.45]:[.5,.85]:i==="runOut"?n?[.45,.95]:[.05,.45]:i==="anchor"?n?[.55,.95]:[0,.4]:i==="gaffEnsign"||i==="jack"||i==="unionStays"?[.5,.52]:i.startsWith("set.stun")?n?[.75,1]:[0,.3]:[0,1]}var Gl=class{constructor(t,e){this.scene=t,this.sea=e,this.root=new ee,this.body=new ee,this.root.add(this.body),this.body.add(gf()),this.rig=new Il,this.body.add(this.rig.group),this.root.updateMatrixWorld(!0),this.sails=xf(this.rig,this.body),this.rigging=new Nl(this.rig),this.guns=new Ul(this.body),this.fittings=new Ol(this.body,this.rig);for(let n of this.sails.square){let s=this.rigging.colliders[n.mastName];if(!s)continue;n.space=this.rig.group,n.colliders={course:[...s.lower,...s.futtock,...s.backstay],topsail:[...s.topmast,...s.backstay],topgallant:[...s.tg,...s.backstay],royal:[...s.backstay]}[n.kind]||[];let r={fore:{course:["fore stay","fore preventer stay"],topsail:["fore topmast stay","jib stay"],topgallant:["fore topgallant stay"],royal:["fore royal stay"]},main:{course:["main stay","main preventer stay"],topsail:["main topmast stay"],topgallant:["main topgallant stay"],royal:["main royal stay"]},mizzen:{topsail:["mizzen topmast stay"],topgallant:["mizzen topgallant stay"]}}[n.mastName]?.[n.kind]||[];n.stays=r.map(o=>this.rigging.stayLines[o]).filter(Boolean)}this.flags={ensign:new Ti("ensign",8.5,4.25,this.body),admiral:new Ti("admiral",5,2.5,this.body),jack:new Ti("union",4.2,2.1,this.body),unionFore:new Ti("union",3.6,1.8,this.body),unionMain:new Ti("union",3.6,1.8,this.body)},this.effects=new zl(t),this.wake=new kl(t,e.uniforms),this.distance=0,this.pose="sail",this.cur=yf(Ki.sail),this.tween=null,this.dirty=!0,this.broadside=null,this.time=0,this.windTarget={dir:-135,str:.6},this.windNow={...this.windTarget}}setWind(t,e,n=!1){t!=null&&(this.windTarget.dir=t),e!=null&&(this.windTarget.str=e),n&&(this.windNow={...this.windTarget}),this.dirty=!0}poseNames(){return Object.keys(Ki)}setPose(t,e=!1){if(!Ki[t])return;this.pose=t;let n=yf(Ki[t]);if(e){this.cur=n,this.tween=null,this.dirty=!0;return}this.tween={from:{...this.cur},to:n,k:0,dur:8}}fireBroadside(){if(!Ki[this.pose].ports||this.broadside)return;let t=this.guns.ports.filter(n=>n.side===1).sort((n,s)=>s.x-n.x),e=0;for(let n of t)n.fireAt=this.time+e+Math.random()*.08,e+=.075;this.broadside={list:t,end:this.time+e+4}}update(t,e){if(this.time=t,this.tween){let T=this.tween;T.k=Math.min(1,T.k+e/T.dur);for(let C of Object.keys(T.to)){let I=T.from[C],D=T.to[C],[N,L]=zy(C,I,D),H=Math.min(1,Math.max(0,(T.k-N)/(L-N)));this.cur[C]=I+(D-I)*Hy(H)}T.k>=1&&(this.tween=null),this.dirty=!0}let n=this.cur,s=this.windNow,r=this.windTarget,o=1-Math.exp(-e*1.2),a=Ph(r.dir-s.dir),l=r.str-s.str;(Math.abs(a)>.05||Math.abs(l)>.001)&&(s.dir=Ph(s.dir+a*o),s.str+=l*o,this.dirty=!0);let c=By(n,s.dir,s.str);this.W=c;let h=this.sea;h.setScale(c.waveScale),h.setDirection(Math.atan2(c.toward.z,c.toward.x));let f=22,u=6,d=h.heightAt(f,0),g=h.heightAt(-f,0),x=h.heightAt(0,-u),m=h.heightAt(0,u),p=h.heightAt(0,0);this.root.position.y=(d+g+x+m+p*2)/6*.85,this.root.rotation.z=Math.atan2(d-g,2*f)*.8,this.root.rotation.x=-Math.atan2(m-x,2*u)*.6,this.body.rotation.x=c.heel,this.body.rotation.z=ef,this.distance+=c.speed*e,this.dirty&&this.rig.applyYards({hoist:{topsail:n["hoist.topsail"],topgallant:n["hoist.topgallant"],royal:n["hoist.royal"]},brace:c.brace,boomSwing:c.boomSwing}),this.root.updateMatrixWorld(!0);for(let T of this.sails.square)T.update(n[`set.${T.kind}`],c.belly,t,c.luff);for(let T of this.sails.stay)T.update(n[`set.${T.kind}`],c.belly,t,c.lee);this.sails.spanker.update(n["set.spanker"],c.belly,t,c.lee);for(let T of this.sails.stun)T.update(n[`set.${T.kind}`],c.belly,t);let v=this.dirty;if(this.broadside){let T=this.broadside,C=c.apparent.clone().multiplyScalar(.5);for(let I of T.list){if(I.fireAt>0&&t>=I.fireAt){I.fireAt=-1,I.firedAt=t;let D=this.guns.muzzle(I,n.runOut),N=this.body.localToWorld(D.clone()),L=I.out.clone().transformDirection(this.body.matrixWorld);this.effects.gunshot(N,L,C)}if(I.firedAt!=null){let D=t-I.firedAt;I.recoil=D<.12?D/.12:Math.max(0,1-(D-.6)/2.4),D>3.2&&(I.recoil=0,I.firedAt=null)}}v=!0,t>T.end&&(this.broadside=null)}v&&this.guns.apply(n.ports,n.runOut),this.rigging.updateRunning(this.sails,n,c),this.dirty&&this.fittings.setAnchor(n.anchor);let E=this.rig,_=c.apparent.clone().setY(0).normalize();Ti.update(t,.2+.8*Math.min(1,c.apparent.length()/12));let S=(T,C)=>Re(T.local[C].clone(),T.group,this.body),M=Re(new R(E.gaff.L-.1,0,0),E.gaff.group,this.body),w=this.flags.ensign;n.gaffEnsign>.5?w.place(M,_):w.place(this.fittings.ensignStaff,_),this.flags.admiral.place(S(E.masts.fore,"poleHead").add(new R(0,.1,0)),_);let y=(T,C)=>{let[I,D]=this.rigging.stayLines[T];return I.clone().lerp(D,C).add(new R(0,-.3,0))};for(let[T,C,I]of[[this.flags.unionFore,"fore topgallant stay",.42],[this.flags.unionMain,"main topmast stay",.5]])T.mesh.visible=n.unionStays>.5,T.place(y(C,I),_);this.flags.jack.mesh.visible=n.jack>.5,this.flags.jack.place(this.fittings.jackStaff,_),this.effects.update(e,this.scene.userData.camera?.position),this.wake.update(this.distance,c.speed),this.dirty=!1}};var vf={sail:"Full sail",trafalgar:"Trafalgar, 1805",action:"Cleared for action",anchor:"At anchor",quarter:"Quarter",broadside:"Broadside",bow:"Bow",stern:"Stern",deck:"Deck",aloft:"Aloft",galleries:"Galleries",head:"Figurehead"};function Ih(i,t){let e=Math.abs(i),n=i<0?"port":"starboard",s=e<22.5?"dead ahead":e<67.5?`on the ${n} bow`:e<112.5?`on the ${n} beam`:e<157.5?`on the ${n} quarter`:"dead astern";return`${t<.12?"Light air":t<.3?"Light breeze":t<.5?"Moderate breeze":t<.7?"Fresh breeze":t<.88?"Strong breeze":"Near gale"}, ${s}`}var Wl=class{constructor({onPose:t,onView:e,onFire:n,onWind:s,wind:r,poses:o,views:a}){let l=document.getElementById("ui");l.innerHTML=`
      <h1>HMS Victory <span>1805</span></h1>
      <div class="group"><div class="label">Pose</div><div class="row" id="poses"></div></div>
      <div class="group" id="fireGroup"><button id="fire" class="accent">Fire broadside</button></div>
      <div class="group"><div class="label">Wind</div>
        <div class="slider"><span>From</span><input id="windDir" type="range" min="-180" max="180" step="5"></div>
        <div class="slider"><span>Strength</span><input id="windStr" type="range" min="0" max="100" step="1"></div>
        <div class="windText" id="windText"></div>
        <div class="windHint" id="windHint"></div></div>
      <div class="group"><div class="label">View</div><div class="row" id="views"></div></div>
      <div class="hint">Drag to orbit \xB7 scroll to zoom \xB7 right-drag to pan</div>`,this.poseButtons={};let c=l.querySelector("#poses");for(let m of o){let p=document.createElement("button");p.textContent=vf[m]||m,p.onclick=()=>{t(m),this.setPose(m)},c.appendChild(p),this.poseButtons[m]=p}let h=l.querySelector("#views");for(let m of a){let p=document.createElement("button");p.textContent=vf[m]||m,p.onclick=()=>e(m),h.appendChild(p)}this.fireGroup=l.querySelector("#fireGroup"),l.querySelector("#fire").onclick=n;let f=l.querySelector("#windDir"),u=l.querySelector("#windStr"),d=l.querySelector("#windText"),g=l.querySelector("#windHint");f.value=r.dir,u.value=Math.round(r.str*100);let x=()=>{let m=+f.value,p=+u.value/100;d.textContent=Ih(m,p),g.textContent=Math.abs(m)<50?"Too close to the wind: her sails shiver and she loses way.":"",s(m,p)};f.oninput=u.oninput=x,d.textContent=Ih(r.dir,r.str),this.windSet=(m,p)=>{f.value=m,u.value=Math.round(p*100),d.textContent=Ih(m,p),g.textContent=""}}setPose(t){for(let[e,n]of Object.entries(this.poseButtons))n.classList.toggle("active",e===t);this.fireGroup.style.display=t==="action"||t==="trafalgar"?"":"none"}};var ky=1e-7,Lh=new R,Dh=new R,Nh=new R,Uh=new R,Fh=new R,Oh=new R;function Mf(i,t,e,n,s){Oh.subVectors(t,i),Lh.subVectors(n,e),Dh.subVectors(s,e),Nh.crossVectors(Oh,Dh);let r=Lh.dot(Nh);if(Math.abs(r)<ky)return!1;let o=1/r;Uh.subVectors(i,e);let a=Uh.dot(Nh)*o;if(a<0||a>1)return!1;Fh.crossVectors(Uh,Lh);let l=Oh.dot(Fh)*o;if(l<0||a+l>1)return!1;let c=Dh.dot(Fh)*o;return c>0&&c<1}function Vy(i,t){let e=i.mesh;if(!e.visible)return null;let n=new Yt().multiplyMatrices(t,e.matrixWorld),s=e.geometry.attributes.position,r=i.NU,o=i.NV,a=(f,u)=>new R().fromBufferAttribute(s,u*r+f).applyMatrix4(n),l=[],c=new xn,h=[];for(let f=1;f<o-2;f++)for(let u=1;u<r-2;u++){let d=a(u,f),g=a(u+1,f),x=a(u,f+1),m=a(u+1,f+1);l.push([d,g,m],[d,m,x]),c.expandByPoint(d).expandByPoint(g).expandByPoint(x).expandByPoint(m),h.push([d,g],[d,x])}return{name:i.name,tris:l,box:c,lines:h}}function Sf(i){i.root.updateMatrixWorld(!0);let t=new Yt().copy(i.body.matrixWorld).invert(),n=[...i.sails.square,...i.sails.stay,i.sails.spanker,...i.sails.stun].map(h=>Vy(h,t)).filter(Boolean),s=[];for(let h of[i.rigging.standing,i.rigging.running,i.rigging.sailLines])for(let f of h.segs)s.push(f);let r=(h,f,u)=>new R(h,f,u),o=(h,f)=>f.applyMatrix4(new Yt().multiplyMatrices(t,h.matrixWorld));for(let h of Object.values(i.rig.masts)){for(let x of Object.values(h.yards))s.push([o(x.group,r(0,0,-x.L/2)),o(x.group,r(0,0,x.L/2)),`${h.name} ${x.name} yard`]);let f=h.h;s.push([o(h.group,r(0,0,0)),o(h.group,r(0,f.lowerHead,0)),`${h.name} lower mast`]),s.push([o(h.group,r(h.dTop,f.topmastHeel,0)),o(h.group,r(h.dTop,f.topmastHead,0)),`${h.name} topmast`]),s.push([o(h.group,r(h.dTg,f.tgHeel,0)),o(h.group,r(h.dTg,f.poleHead,0)),`${h.name} topgallant mast`]);let u=f.topLen,d=f.topW/2,g=f.topY+.2;s.push([o(h.group,r(-u*.45,g,-d)),o(h.group,r(u*.55,g,-d)),`${h.name} top`]),s.push([o(h.group,r(-u*.45,g,d)),o(h.group,r(u*.55,g,d)),`${h.name} top`]),s.push([o(h.group,r(u*.55,g,-d)),o(h.group,r(u*.55,g,d)),`${h.name} top`])}let a=new Map,l=new xn,c=(h,f)=>{let u=`${h}  x  ${f}`;a.set(u,(a.get(u)||0)+1)};for(let[h,f,u]of s){l.makeEmpty().expandByPoint(h).expandByPoint(f);for(let d of n)if(l.intersectsBox(d.box)){for(let[g,x,m]of d.tris)if(Mf(h,f,g,x,m)){c(u,d.name);break}}}for(let h of n)for(let f of n){if(h===f||!h.box.intersectsBox(f.box))continue;let u=0;for(let[d,g]of h.lines)if(l.makeEmpty().expandByPoint(d).expandByPoint(g),!!l.intersectsBox(f.box)){for(let[x,m,p]of f.tris)if(Mf(d,g,x,m,p)){u++;break}}u&&h.name<f.name&&c(`sail ${h.name}`,f.name)}return[...a.entries()].sort((h,f)=>f[1]-h[1]).map(([h,f])=>`${f}	${h}`)}var wn=new URLSearchParams(location.search),Qn=new ml({antialias:!0,preserveDrawingBuffer:wn.has("shot")});Qn.setPixelRatio(Math.min(window.devicePixelRatio,2));Qn.setSize(window.innerWidth,window.innerHeight);Qn.toneMapping=Qr;Qn.toneMappingExposure=.55;Qn.shadowMap.enabled=!0;Qn.shadowMap.type=Ma;document.getElementById("app").appendChild(Qn.domElement);var Hn=new Vs,fi=new Ye(40,window.innerWidth/window.innerHeight,.2,9e3);Hn.userData.camera=fi;var Hh=new rr;Hh.scale.setScalar(8e3);var lr=Hh.material.uniforms;lr.turbidity.value=2.2;lr.rayleigh.value=2.2;lr.mieCoefficient.value=.003;lr.mieDirectionalG.value=.82;var zh=new R().setFromSphericalCoords(1,tn.degToRad(62),tn.degToRad(215));lr.sunPosition.value.copy(zh);Hn.add(Hh);var Gy=new ir(Qn),Ef=new Vs,ql=new rr;ql.scale.setScalar(1e3);Object.assign(ql.material.uniforms.sunPosition.value,zh);for(let i of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])ql.material.uniforms[i].value=lr[i].value;Ef.add(ql);var Tf=Gy.fromScene(Ef,0,.1,2e3).texture;Hn.environment=Tf;Hn.environmentIntensity=.7;Hn.fog=new Ar("#b9c8d2",400,3800);var ji=new Yr("#fff1dc",3.2);ji.position.copy(zh).multiplyScalar(150);ji.castShadow=!0;ji.shadow.mapSize.set(4096,4096);var cr=ji.shadow.camera;cr.left=-60;cr.right=60;cr.top=60;cr.bottom=-60;cr.near=10;cr.far=400;ji.shadow.bias=-4e-4;ji.shadow.normalBias=.04;Hn.add(ji,ji.target);Hn.add(new Gr("#cfe0f0","#30404a",.5));var kh=new Al(Tf);Hn.add(kh.mesh);var ln=new Gl(Hn,kh);Hn.add(ln.root);var jn=new yl(fi,Qn.domElement);jn.enableDamping=!0;jn.dampingFactor=.08;jn.maxPolarAngle=Math.PI*.495;jn.minDistance=4;jn.maxDistance=600;var wf={quarter:[[78,24,96],[0,22,0]],broadside:[[4,18,132],[2,24,0]],bow:[[92,14,34],[12,20,0]],stern:[[-84,20,-46],[-14,16,0]],deck:[[-21,15.5,7],[10,9,0]],aloft:[[30,76,52],[0,30,0]],galleries:[[-44,9,24],[-26,7,0]],head:[[44,9,16],[30,8,0]]};function Vh(i,t=!1){let e=wf[i];if(!e)return;let n=new R(...e[0]),s=new R(...e[1]);t?(fi.position.copy(n),jn.target.copy(s)):Tn={p0:fi.position.clone(),t0:jn.target.clone(),p1:n,t1:s,k:0}}var Tn=null,Gh=wn.get("ui")==="0"?null:new Wl({onPose:i=>{ln.setPose(i);let t=Ki[i].wind;t&&(ln.setWind(t.dir,t.str),Gh?.windSet(t.dir,t.str))},onView:i=>Vh(i),onFire:()=>ln.fireBroadside(),onWind:(i,t)=>ln.setWind(i,t),wind:{dir:+(wn.get("wind")??-135),str:+(wn.get("windStr")??.6)},poses:ln.poseNames(),views:Object.keys(wf)});ln.setPose(wn.get("pose")||"sail",!0);{let i=Ki[ln.pose].wind,t=+(wn.get("wind")??i?.dir??-135),e=+(wn.get("windStr")??i?.str??.6);ln.setWind(t,e,!0),Gh?.windSet(t,e)}Vh(wn.get("view")||"quarter",!0);if(wn.has("cam")){let i=wn.get("cam").split(",").map(Number);fi.position.set(i[0],i[1],i[2]),jn.target.set(i[3],i[4],i[5])}Gh?.setPose(ln.pose);wn.has("fire")&&setTimeout(()=>ln.fireBroadside(),300);window.addEventListener("resize",()=>{fi.aspect=window.innerWidth/window.innerHeight,fi.updateProjectionMatrix(),Qn.setSize(window.innerWidth,window.innerHeight)});var Wy=new $r,Bh=wn.has("t")?parseFloat(wn.get("t")):null,Xl=Bh??0,bf=0;function Af(){let i=Math.min(Wy.getDelta(),.05);if(Xl=Bh??Xl+i,ln.update(Xl,Bh!=null?1/30:i),kh.update(Xl,ln.distance),Tn){Tn.k=Math.min(1,Tn.k+i/1.6);let t=Tn.k<.5?2*Tn.k**2:1-(-2*Tn.k+2)**2/2;fi.position.lerpVectors(Tn.p0,Tn.p1,t),jn.target.lerpVectors(Tn.t0,Tn.t1,t),Tn.k>=1&&(Tn=null)}jn.update(),Qn.render(Hn,fi),bf++,bf===3&&(window.__ready=!0),requestAnimationFrame(Af)}Af();window.__victory={ship:ln,camera:fi,controls:jn,scene:Hn,setView:Vh,clashes:()=>Sf(ln)};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
