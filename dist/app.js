(()=>{var ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,eh=1,hd=2;var uo=1,Fa=2,ur=3,ts=0,We=1,Ce=2,yi=0,es=1,fo=2,nh=3,ih=4,ud=5;var vs=100,dd=101,fd=102,pd=103,md=104,gd=200,xd=201,_d=202,yd=203,sh=204,rh=205,vd=206,Md=207,Sd=208,bd=209,Ed=210,wd=211,Td=212,Ad=213,Rd=214,ia=0,sa=1,ra=2,$s=3,oa=4,aa=5,la=6,ca=7,oh=0,Cd=1,Pd=2,ii=0,ah=1,lh=2,ch=3,po=4,hh=5,uh=6,dh=7;var fh=300,ns=301,Ms=302,Oa=303,Ba=304,mo=306,Ln=1e3,mi=1001,ha=1002,tn=1003,Id=1004;var go=1005;var an=1006,Ha=1007;var is=1008;var En=1009,ph=1010,mh=1011,dr=1012,za=1013,si=1014,Gn=1015,ri=1016,ka=1017,Va=1018,fr=1020,gh=35902,xh=35899,_h=1021,yh=1022,Wn=1023,xi=1026,ss=1027,Ga=1028,Wa=1029,rs=1030,Xa=1031;var qa=1033,xo=33776,_o=33777,yo=33778,vo=33779,Ya=35840,Za=35841,$a=35842,Ka=35843,Ja=36196,ja=37492,Qa=37496,tl=37488,el=37489,Mo=37490,nl=37491,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,xl=36492,_l=36494,yl=36495,vl=36283,Ml=36284,So=36285,Sl=36286;var Or=2300,ua=2301,ea=2302,Wc=2303,Xc=2400,qc=2401,Yc=2402;var Ld=3200;var bl=0,Dd=1,Li="",Fe="srgb",Br="srgb-linear",Hr="linear",ve="srgb";var na=7680;var Nd=519,Ud=512,Fd=513,Od=514,El=515,Bd=516,Hd=517,wl=518,zd=519,kd=35044,Tl=35048;var vh="300 es",jn=2e3,Ks=2001;function Tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=zr("canvas");return i.style.display="block",i}var Du={},Js=null;function Mh(...i){let t="THREE."+i.shift();Js?Js("log",t,...i):console.log(t,...i)}function Gd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Gd(i);let t="THREE."+i.shift();if(Js)Js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=Gd(i);let t="THREE."+i.shift();if(Js)Js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ms(...i){let t=i.join(" ");t in Du||(Du[t]=!0,Xt(...i))}function Wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xd={[ia]:sa,[ra]:la,[oa]:ca,[$s]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:$s},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,Dr=Math.PI/180,js=180/Math.PI;function Ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Sh(i,t){return(i%t+t)%t}function Rp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cp(i,t,e){return i!==t?(e-i)/(t-i):0}function Nr(i,t,e){return(1-e)*i+e*t}function Pp(i,t,e,n){return Nr(i,t,1-Math.exp(-e*n))}function Ip(i,t=1){return t-Math.abs(Sh(i,t*2)-t)}function Lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Up(i,t){return i+Math.random()*(t-i)}function Fp(i){return i*(.5-Math.random())}function Op(i){i!==void 0&&(Nu=i);let t=Nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bp(i){return i*Dr}function Hp(i){return i*js}function zp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fn={DEG2RAD:Dr,RAD2DEG:js,generateUUID:Ss,clamp:ie,euclideanModulo:Sh,mapLinear:Rp,inverseLerp:Cp,lerp:Nr,damp:Pp,pingpong:Ip,smoothstep:Lp,smootherstep:Dp,randInt:Np,randFloat:Up,randFloatSpread:Fp,seededRandom:Op,degToRad:Bp,radToDeg:Hp,isPowerOfTwo:zp,ceilPowerOfTwo:kp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Gp,normalize:gn,denormalize:Ys},rt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(p!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+p*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let u=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);u=Math.sin(u*_)/b,a=Math.sin(a*_)/b,l=l*u+d*a,c=c*u+f*a,h=h*u+g*a,p=p*u+y*a}else{l=l*u+d*a,c=c*u+f*a,h=h*u+g*a,p=p*u+y*a;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*f-c*d,t[e+1]=l*g+h*d+c*p-a*f,t[e+2]=c*g+h*f+a*d-l*p,t[e+3]=h*g-a*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*p+c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p-d*f*g;break;case"YXZ":this._x=d*h*p+c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p+d*f*g;break;case"ZXY":this._x=d*h*p-c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p-d*f*g;break;case"ZYX":this._x=d*h*p-c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p+d*f*g;break;case"YZX":this._x=d*h*p+c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p-d*f*g;break;case"XZY":this._x=d*h*p-c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p+d*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+a+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vc.copy(this).projectOnVector(t),this.sub(vc)}reflect(t){return this.sub(vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vc=new R,Uu=new ze,Qt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],u=s[6],_=s[1],b=s[4],x=s[7],S=s[2],M=s[5],w=s[8];return r[0]=o*y+a*_+l*S,r[3]=o*m+a*b+l*M,r[6]=o*u+a*x+l*w,r[1]=c*y+h*_+p*S,r[4]=c*m+h*b+p*M,r[7]=c*u+h*x+p*w,r[2]=d*y+f*_+g*S,r[5]=d*m+f*b+g*M,r[8]=d*u+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=p*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mc.makeScale(t,e)),this}rotate(t){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mc.makeRotation(-t)),this}translate(t,e){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new Qt,Fu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var ue=Wp();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=zr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xp=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sc(s[o].image)):r.push(Sc(s[o]))}else r=Sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var qp=0,bc=new R,xn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=an,o=is,a=Wn,l=En,c=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ss(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ln:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ln:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=fh;xn.DEFAULT_ANISOTROPY=1;var Ue=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,x=(f+1)/2,S=(u+1)/2,M=(h+d)/4,w=(p+y)/4,v=(g+m)/4;return b>x&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=w/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=v/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(p-y)*(p-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kr=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Bt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,p,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,d,f,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,p,d,f,g,y,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=f,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*p,g=a*h,y=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*p,g=c*h,y=c*p;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*p,g=c*h,y=c*p;e[0]=d-y*a,e[4]=-o*p,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*p,g=a*h,y=a*p;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*p,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*p,e[8]=g*p+f,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*p+g,e[10]=d-y*p}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+y,e[5]=o*h,e[9]=f*p-g,e[2]=g*p-f,e[6]=a*h,e[10]=y*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,Zp)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),zi.crossVectors(n,Cn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),zi.crossVectors(n,Cn)),zi.normalize(),Do.crossVectors(Cn,zi),s[0]=zi.x,s[4]=Do.x,s[8]=Cn.x,s[1]=zi.y,s[5]=Do.y,s[9]=Cn.y,s[2]=zi.z,s[6]=Do.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],u=n[14],_=n[3],b=n[7],x=n[11],S=n[15],M=s[0],w=s[4],v=s[8],T=s[12],C=s[1],P=s[5],L=s[9],N=s[13],D=s[2],B=s[6],X=s[10],k=s[14],st=s[3],Y=s[7],tt=s[11],et=s[15];return r[0]=o*M+a*C+l*D+c*st,r[4]=o*w+a*P+l*B+c*Y,r[8]=o*v+a*L+l*X+c*tt,r[12]=o*T+a*N+l*k+c*et,r[1]=h*M+p*C+d*D+f*st,r[5]=h*w+p*P+d*B+f*Y,r[9]=h*v+p*L+d*X+f*tt,r[13]=h*T+p*N+d*k+f*et,r[2]=g*M+y*C+m*D+u*st,r[6]=g*w+y*P+m*B+u*Y,r[10]=g*v+y*L+m*X+u*tt,r[14]=g*T+y*N+m*k+u*et,r[3]=_*M+b*C+x*D+S*st,r[7]=_*w+b*P+x*B+S*Y,r[11]=_*v+b*L+x*X+S*tt,r[15]=_*T+b*N+x*k+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],u=t[15],_=l*f-c*d,b=a*f-c*p,x=a*d-l*p,S=o*f-c*h,M=o*d-l*h,w=o*p-a*h;return e*(y*_-m*b+u*x)-n*(g*_-m*S+u*M)+s*(g*b-y*S+u*w)-r*(g*x-y*M+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],u=t[15],_=e*a-n*o,b=e*l-s*o,x=e*c-r*o,S=n*l-s*a,M=n*c-r*a,w=s*c-r*l,v=h*y-p*g,T=h*m-d*g,C=h*u-f*g,P=p*m-d*y,L=p*u-f*y,N=d*u-f*m,D=_*N-b*L+x*P+S*C-M*T+w*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*N-l*L+c*P)*B,t[1]=(s*L-n*N-r*P)*B,t[2]=(y*w-m*M+u*S)*B,t[3]=(d*M-p*w-f*S)*B,t[4]=(l*C-o*N-c*T)*B,t[5]=(e*N-s*C+r*T)*B,t[6]=(m*x-g*w-u*b)*B,t[7]=(h*w-d*x+f*b)*B,t[8]=(o*L-a*C+c*v)*B,t[9]=(n*C-e*L-r*v)*B,t[10]=(g*M-y*x+u*_)*B,t[11]=(p*x-h*M-f*_)*B,t[12]=(a*T-o*P-l*v)*B,t[13]=(e*P-n*T+s*v)*B,t[14]=(y*b-g*S-m*_)*B,t[15]=(h*S-p*b+d*_)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,d=r*c,f=r*h,g=r*p,y=o*h,m=o*p,u=a*p,_=l*c,b=l*h,x=l*p,S=n.x,M=n.y,w=n.z;return s[0]=(1-(y+u))*S,s[1]=(f+x)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+u))*M,s[6]=(m+_)*M,s[7]=0,s[8]=(g+b)*w,s[9]=(m-_)*w,s[10]=(1-(d+y))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$n.copy(this);let c=1/o,h=1/a,p=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=p,$n.elements[9]*=p,$n.elements[10]*=p,e.setFromRotationMatrix($n),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=jn,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===jn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ks)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===jn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ks)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ns=new R,$n=new Bt,Yp=new R(0,0,0),Zp=new R(1,1,1),zi=new R,Do=new R,Cn=new R,Bu=new Bt,Hu=new ze,Pi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$p=0,zu=new R,Us=new ze,Ei=new Bt,No=new R,Tr=new R,Kp=new R,Jp=new ze,ku=new R(1,0,0),Vu=new R(0,1,0),Gu=new R(0,0,1),Wu={type:"added"},jp={type:"removed"},Fs={type:"childadded",child:null},Ec={type:"childremoved",child:null},en=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Pi,n=new ze,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Qt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Vu,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Vu,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?No.copy(t):No.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Tr,No,this.up):Ei.lookAt(No,Tr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Ei),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jp),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new R(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function wc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Sh(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wc(o,r,t+1/3),this.g=wc(o,r,t),this.b=wc(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ue.workingToColorSpace(dn.copy(this),t),Math.round(ie(dn.r*255,0,255))*65536+Math.round(ie(dn.g*255,0,255))*256+Math.round(ie(dn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(dn.copy(this),e);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Fe){ue.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,s=dn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Uo);let n=Nr(ki.h,Uo.h,e),s=Nr(ki.s,Uo.s,e),r=Nr(ki.l,Uo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new re;re.NAMES=qd;var Gr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new R,wi=new R,Tc=new R,Ti=new R,Os=new R,Bs=new R,Xu=new R,Ac=new R,Rc=new R,Cc=new R,Pc=new Ue,Ic=new Ue,Lc=new Ue,Xi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Kn.subVectors(s,e),wi.subVectors(n,e),Tc.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(wi),l=Kn.dot(Tc),c=wi.dot(wi),h=wi.dot(Tc),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(t,e),Ic.fromBufferAttribute(t,n),Lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pc,r.x),o.addScaledVector(Ic,r.y),o.addScaledVector(Lc,r.z),o}static isFrontFacing(t,e,n,s){return Kn.subVectors(n,e),wi.subVectors(t,e),Kn.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,n),Bs.subVectors(r,n),Ac.subVectors(t,n);let l=Os.dot(Ac),c=Bs.dot(Ac);if(l<=0&&c<=0)return e.copy(n);Rc.subVectors(t,s);let h=Os.dot(Rc),p=Bs.dot(Rc);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Os,o);Cc.subVectors(t,r);let f=Os.dot(Cc),g=Bs.dot(Cc);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bs,a);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return Xu.subVectors(r,s),a=(p-h)/(p-h+(f-g)),e.copy(s).addScaledVector(Xu,a);let u=1/(m+y+d);return o=y*u,a=d*u,e.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Oo.subVectors(this.max,Ar),Hs.subVectors(t.a,Ar),zs.subVectors(t.b,Ar),ks.subVectors(t.c,Ar),Vi.subVectors(zs,Hs),Gi.subVectors(ks,zs),us.subVectors(Hs,ks);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-us.z,us.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-us.y,us.x,0];return!Dc(e,Hs,zs,ks,Oo)||(e=[1,0,0,0,1,0,0,0,1],!Dc(e,Hs,zs,ks,Oo))?!1:(Bo.crossVectors(Vi,Gi),e=[Bo.x,Bo.y,Bo.z],Dc(e,Hs,zs,ks,Oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new R,new R,new R,new R,new R,new R,new R,new R],Jn=new R,Fo=new Dn,Hs=new R,zs=new R,ks=new R,Vi=new R,Gi=new R,us=new R,Ar=new R,Oo=new R,Bo=new R,ds=new R;function Dc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ge=new R,Ho=new rt,tm=0,Me=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kd,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Wr=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},em=new Dn,Rr=new R,Nc=new R,_i=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):em.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(Nc)),this.expandByPoint(Rr.copy(t.center).sub(Nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},nm=0,Hn=new Bt,Uc=new en,Vs=new R,Pn=new Dn,Cr=new Dn,Qe=new R,fe=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Xr:Wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Uc.lookAt(t),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Pn.min,Cr.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,Cr.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(Cr.min),Pn.expandByPoint(Cr.max))}Pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),Qe.add(Vs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Me(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new R,l[v]=new R;let c=new R,h=new R,p=new R,d=new rt,f=new rt,g=new rt,y=new R,m=new R;function u(v,T,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,C),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),p.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[v].add(y),a[T].add(y),a[C].add(y),l[v].add(m),l[T].add(m),l[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,T=_.length;v<T;++v){let C=_[v],P=C.start,L=C.count;for(let N=P,D=P+L;N<D;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new R,x=new R,S=new R,M=new R;function w(v){S.fromBufferAttribute(s,v),M.copy(S);let T=a[v];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(M,T);let P=x.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,P)}for(let v=0,T=_.length;v<T;++v){let C=_[v],P=C.start,L=C.count;for(let N=P,D=P+L;N<D;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,p=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let u=0;u<h;u++)d[g++]=c[f++]}return new Me(d,h,p)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fc=new R,im=new R,sm=new Qt,In=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fc.subVectors(n,e).cross(im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sm.getNormalMatrix(t),s=this.coplanarPoint(Fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rm=0,qi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=es,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ri=new R,Oc=new R,zo=new R,ko=new R,nr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oc.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),ko.copy(this.origin).sub(Oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zo),a=ko.dot(this.direction),l=-ko.dot(zo),c=ko.lengthSq(),h=Math.abs(1-o*o),p,d,f,g;if(h>0)if(p=o*l-a,d=o*a-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let y=1/h;p*=y,d*=y,f=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Oc).addScaledVector(zo,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,u=n.x-o.x,_=n.y-o.y,b=n.z-o.z,x=Math.abs(l),S=Math.abs(c),M=Math.abs(h),w,v,T,C,P,L,N,D,B,X,k,st;if(x>=S&&x>=M?(T=l,L=p,B=g,st=u,l>=0?(w=c,v=h,C=d,P=f,N=y,D=m,X=_,k=b):(w=h,v=c,C=f,P=d,N=m,D=y,X=b,k=_)):S>=M?(T=c,L=d,B=y,st=_,c>=0?(w=h,v=l,C=f,P=p,N=m,D=g,X=b,k=u):(w=l,v=h,C=p,P=f,N=g,D=m,X=u,k=b)):(T=h,L=f,B=m,st=b,h>=0?(w=l,v=c,C=p,P=d,N=g,D=y,X=u,k=_):(w=c,v=l,C=d,P=p,N=y,D=g,X=_,k=u)),T===0)return null;let Y=w/T,tt=v/T,et=1/T,Pt=C-Y*L,$=P-tt*L,dt=N-Y*B,ot=D-tt*B,ft=X-Y*st,z=k-tt*st,q=ft*ot-z*dt,ct=Pt*z-$*ft,It=dt*$-ot*Pt;if(s){if(q<0||ct<0||It<0)return null}else if((q<0||ct<0||It<0)&&(q>0||ct>0||It>0))return null;let mt=q+ct+It;if(mt===0)return null;let Dt=et*(q*L+ct*B+It*st);return(mt>0?Dt<0:Dt>0)?null:this.at(Dt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gs=class extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qu=new Bt,fs=new nr,Vo=new _i,Yu=new R,Go=new R,Wo=new R,Xo=new R,Bc=new R,qo=new R,Zu=new R,Yo=new R,j=class extends en{constructor(t=new fe,e=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(Bc.fromBufferAttribute(p,t),o?qo.addScaledVector(Bc,h):qo.addScaledVector(Bc.sub(e),h))}e.add(qo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(Vo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Vo,Yu)===null||fs.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(qu.copy(r).invert(),fs.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],u=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,S=b;x<S;x+=3){let M=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);s=Zo(this,u,t,n,c,h,p,M,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,u=y;m<u;m+=3){let _=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Zo(this,o,t,n,c,h,p,_,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],u=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,S=b;x<S;x+=3){let M=x,w=x+1,v=x+2;s=Zo(this,u,t,n,c,h,p,M,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,u=y;m<u;m+=3){let _=m,b=m+1,x=m+2;s=Zo(this,o,t,n,c,h,p,_,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function om(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ts,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Yo);return c<e.near||c>e.far?null:{distance:c,point:Yo.clone(),object:i}}function Zo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Go),i.getVertexPosition(l,Wo),i.getVertexPosition(c,Xo);let h=om(i,t,e,n,Go,Wo,Xo,Zu);if(h){let p=new R;Xi.getBarycoord(Zu,Go,Wo,Xo,p),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,p,new rt)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,p,new rt)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,p,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};Xi.getNormal(Go,Wo,Xo,d.normal),h.face=d,h.barycoord=p}return h}var qr=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,h=tn,p,d){super(null,o,a,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new Bt,$u=new Bt,$o=[],Ku=new Dn,am=new Bt,Pr=new j,Ir=new _i,bn=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Ku.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Ir.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),$u.multiplyMatrices(n,Gs),Pr.matrixWorld=$u,Pr.raycast(t,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,e.push(l)}$o.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qr(new Float32Array(s*this.count),s,this.count,Ga,Gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new _i,lm=new rt(.5,.5),Ko=new R,ir=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],u=r[11],_=r[12],b=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,u-g,S-_).normalize(),s[1].setComponents(c+o,f+h,u+g,S+_).normalize(),s[2].setComponents(c+a,f+p,u+y,S+b).normalize(),s[3].setComponents(c-a,f-p,u-y,S-b).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,u-m,S-x).normalize();else if(s[4].setComponents(c-l,f-d,u-m,S-x).normalize(),e===jn)s[5].setComponents(c+l,f+d,u+m,S+x).normalize();else if(e===Ks)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=lm.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ko.x=s.normal.x>0?t.max.x:t.min.x,Ko.y=s.normal.y>0?t.max.y:t.min.y,Ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends xn{constructor(t=[],e=ns,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_n=class extends xn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends xn{constructor(t,e,n=si,s,r,o,a=tn,l=tn,c,h=xi,p=1){if(h!==xi&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ma=class extends Yi{constructor(t,e=si,n=ns,s,r,o=tn,a=tn,l,c=xi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(p,2));function g(y,m,u,_,b,x,S,M,w,v,T){let C=x/w,P=S/v,L=x/2,N=S/2,D=M/2,B=w+1,X=v+1,k=0,st=0,Y=new R;for(let tt=0;tt<X;tt++){let et=tt*P-N;for(let Pt=0;Pt<B;Pt++){let $=Pt*C-L;Y[y]=$*_,Y[m]=et*b,Y[u]=D,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[u]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(Pt/w),p.push(1-tt/v),k+=1}}for(let tt=0;tt<v;tt++)for(let et=0;et<w;et++){let Pt=d+et+B*tt,$=d+et+B*(tt+1),dt=d+(et+1)+B*(tt+1),ot=d+(et+1)+B*tt;l.push(Pt,$,ot),l.push($,dt,ot),st+=6}a.addGroup(f,st,T),f+=st,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ti=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,p=Math.PI/2*t,d=e,f=2*p+d,g=n*2+r,y=s+1,m=new R,u=new R;for(let _=0;_<=g;_++){let b=0,x=0,S=0,M=0;if(_<=n){let T=_/n,C=T*Math.PI/2;x=-h-t*Math.cos(C),S=t*Math.sin(C),M=-t*Math.cos(C),b=T*p}else if(_<=n+r){let T=(_-n)/r;x=-h+T*e,S=t,M=0,b=p+T*d}else{let T=(_-n-r)/n,C=T*Math.PI/2;x=h+t*Math.sin(C),S=t*Math.cos(C),M=t*Math.sin(C),b=p+d+T*p}let w=Math.max(0,Math.min(1,b/f)),v=0;_===0?v=.5/s:_===g&&(v=-.5/s);for(let T=0;T<=s;T++){let C=T/s,P=C*Math.PI*2,L=Math.sin(P),N=Math.cos(P);u.x=-S*N,u.y=x,u.z=S*L,a.push(u.x,u.y,u.z),m.set(-S*N,M,S*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+v,w)}if(_>0){let T=(_-1)*y;for(let C=0;C<s;C++){let P=T+C,L=T+C+1,N=_*y+C,D=_*y+C+1;o.push(P,L,N),o.push(L,D,N)}}}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},xs=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],f=[],g=0,y=[],m=n/2,u=0;_(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function _(){let x=new R,S=new R,M=0,w=(e-t)/n;for(let v=0;v<=r;v++){let T=[],C=v/r,P=C*(e-t)+t;for(let L=0;L<=s;L++){let N=L/s,D=N*l+a,B=Math.sin(D),X=Math.cos(D);S.x=P*B,S.y=-C*n+m,S.z=P*X,p.push(S.x,S.y,S.z),x.set(B,w,X).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-C),T.push(g++)}y.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let C=y[T][v],P=y[T+1][v],L=y[T+1][v+1],N=y[T][v+1];(t>0||T!==0)&&(h.push(C,P,N),M+=3),(e>0||T!==r-1)&&(h.push(P,L,N),M+=3)}c.addGroup(u,M,0),u+=M}function b(x){let S=g,M=new rt,w=new R,v=0,T=x===!0?t:e,C=x===!0?1:-1;for(let L=1;L<=s;L++)p.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let D=L/s*l+a,B=Math.cos(D),X=Math.sin(D);w.x=T*X,w.y=m*C,w.z=T*B,p.push(w.x,w.y,w.z),d.push(0,C,0),M.x=B*.5+.5,M.y=X*.5*C+.5,f.push(M.x,M.y),g++}for(let L=0;L<s;L++){let N=S+L,D=P+L;x===!0?h.push(D,D+1,N):h.push(D+1,D,N),v+=3}c.addGroup(u,v,x===!0?1:2),u+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sr=class i extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new Bt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*p+this.aX,c=d*p+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ga=class extends rr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+p)+(l-a)/p;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ju=new R,ju=new R,Hc=new bh,zc=new bh,kc=new bh,ei=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ju.subVectors(s[0],s[1]).add(s[0]),c=ju);let p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Hc.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,g,y,m),zc.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,g,y,m),kc.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),zc.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),kc.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set(Hc.calc(l),zc.calc(l),kc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function cm(i,t){let e=1-i;return e*e*t}function hm(i,t){return 2*(1-i)*i*t}function um(i,t){return i*i*t}function Ur(i,t,e,n){return cm(i,t)+hm(i,e)+um(i,n)}function dm(i,t){let e=1-i;return e*e*e*t}function fm(i,t){let e=1-i;return 3*e*e*i*t}function pm(i,t){return 3*(1-i)*i*i*t}function mm(i,t){return i*i*i*t}function Fr(i,t,e,n,s){return dm(i,t)+fm(i,e)+pm(i,n)+mm(i,s)}var $r=class extends Nn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends Nn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y),Fr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends Nn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Nn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Nn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zi=class extends Nn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Qu(a,l.x,c.x,h.x,p.x),Qu(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},ya=Object.freeze({__proto__:null,ArcCurve:ga,CatmullRomCurve3:ei,CubicBezierCurve:$r,CubicBezierCurve3:xa,EllipseCurve:rr,LineCurve:Kr,LineCurve3:_a,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Zi,SplineCurve:jr}),va=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ya[s.type]().fromJSON(s))}return this}},_s=class extends va{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Kr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new rr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends _s{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new _s().fromJSON(s))}return this}};function gm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Mm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,p=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return Qr(r,o,e,a,l,c,0),o}function Yd(i,t,e,n,s){let r;if(s===Lm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=td(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=td(o/n|0,i[o],i[o+1],r);return r&&or(r,r.next)&&(eo(r),r=r.next),r}function ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Oe(e.prev,e,e.next)===0)){if(eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Tm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?_m(i,n,s,r):xm(i)){t.push(l.i,i.i,c.i),eo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ym(ys(i),t),Qr(i,t,e,n,s,r,2)):o===2&&vm(i,t,e,n,s,r):Qr(ys(i),t,e,n,s,r,1);break}}}function xm(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),p=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=f&&Lr(s,a,r,l,o,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _m(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,p,d),y=Math.max(a,l,c),m=Math.max(h,p,d),u=Zc(f,g,t,e,n),_=Zc(y,m,t,e,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=u&&x&&x.z<=_;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Lr(a,h,l,p,c,d,b.x,b.y)&&Oe(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Lr(a,h,l,p,c,d,x.x,x.y)&&Oe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=u;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Lr(a,h,l,p,c,d,b.x,b.y)&&Oe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Lr(a,h,l,p,c,d,x.x,x.y)&&Oe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ym(i,t){let e=i;do{let n=e.prev,s=e.next.next;!or(n,s)&&$d(n,e,e.next,s)&&to(n,s)&&to(s,n)&&(t.push(n.i,e.i,s.i),eo(e),eo(e.next),e=i=s),e=e.next}while(e!==i);return ys(e)}function vm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let l=Kd(o,a);o=ys(o,o.next),l=ys(l,l.next),Qr(o,t,e,n,s,r,0),Qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Mm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Yd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Rm(c))}s.sort(Sm);for(let r=0;r<s.length;r++)e=bm(s[r],e);return e}function Sm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bm(i,t){let e=Em(i,t);if(!e)return t;let n=Kd(e,i);return ys(n,n.next),ys(e,e.next)}function Em(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);to(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&wm(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function wm(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function Tm(i,t,e,n){let s=i;do s.z===0&&(s.z=Zc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Am(s)}function Am(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Zc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Lr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Zd(i,t,e,n,s,r,o,a)}function Cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pm(i,t)&&(to(i,t)&&to(t,i)&&Im(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||or(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function $d(i,t,e,n){let s=jo(Oe(i,t,e)),r=jo(Oe(i,t,n)),o=jo(Oe(e,n,i)),a=jo(Oe(e,n,t));return!!(s!==r&&o!==a||s===0&&Jo(i,e,t)||r===0&&Jo(i,n,t)||o===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function Pm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$d(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function to(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function Im(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kd(i,t){let e=$c(i.i,i.x,i.y),n=$c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function td(i,t,e,n){let s=$c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $c(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kc=class{static triangulate(t,e,n=2){return gm(t,e,n)}},gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ed(t),nd(n,t);let o=t.length;e.forEach(ed);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nd(n,e[l]);let a=Kc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ed(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zn=class i extends fe{constructor(t=new ln([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Dm,b,x=!1,S,M,w,v;if(u){b=u.getSpacedPoints(h),x=!0,d=!1;let Q=u.isCatmullRomCurve3?u.closed:!1;S=u.computeFrenetFrames(h,Q),M=new R,w=new R,v=new R}d||(m=0,f=0,g=0,y=0);let T=a.extractPoints(c),C=T.shape,P=T.holes;if(!gi.isClockWise(C)){C=C.reverse();for(let Q=0,lt=P.length;Q<lt;Q++){let ht=P[Q];gi.isClockWise(ht)&&(P[Q]=ht.reverse())}}function N(Q){let ht=10000000000000001e-36,ut=Q[0];for(let _t=1;_t<=Q.length;_t++){let qt=_t%Q.length,Wt=Q[qt],Kt=Wt.x-ut.x,te=Wt.y-ut.y,U=Kt*Kt+te*te,xe=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(ut.x),Math.abs(ut.y)),ce=ht*xe*xe;if(U<=ce){Q.splice(qt,1),_t--;continue}ut=Wt}}N(C),P.forEach(N);let D=P.length,B=C;for(let Q=0;Q<D;Q++){let lt=P[Q];C=C.concat(lt)}function X(Q,lt,ht){return lt||$t("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(lt,ht)}let k=C.length;function st(Q,lt,ht){let ut,_t,qt,Wt=Q.x-lt.x,Kt=Q.y-lt.y,te=ht.x-Q.x,U=ht.y-Q.y,xe=Wt*Wt+Kt*Kt,ce=Wt*U-Kt*te;if(Math.abs(ce)>Number.EPSILON){let I=Math.sqrt(xe),E=Math.sqrt(te*te+U*U),H=lt.x-Kt/I,W=lt.y+Wt/I,K=ht.x-U/E,pt=ht.y+te/E,gt=((K-H)*U-(pt-W)*te)/(Wt*U-Kt*te);ut=H+Wt*gt-Q.x,_t=W+Kt*gt-Q.y;let J=ut*ut+_t*_t;if(J<=2)return new rt(ut,_t);qt=Math.sqrt(J/2)}else{let I=!1;Wt>Number.EPSILON?te>Number.EPSILON&&(I=!0):Wt<-Number.EPSILON?te<-Number.EPSILON&&(I=!0):Math.sign(Kt)===Math.sign(U)&&(I=!0),I?(ut=-Kt,_t=Wt,qt=Math.sqrt(xe)):(ut=Wt,_t=Kt,qt=Math.sqrt(xe/2))}return new rt(ut/qt,_t/qt)}let Y=[];for(let Q=0,lt=B.length,ht=lt-1,ut=Q+1;Q<lt;Q++,ht++,ut++)ht===lt&&(ht=0),ut===lt&&(ut=0),Y[Q]=st(B[Q],B[ht],B[ut]);let tt=[],et,Pt=Y.concat();for(let Q=0,lt=D;Q<lt;Q++){let ht=P[Q];et=[];for(let ut=0,_t=ht.length,qt=_t-1,Wt=ut+1;ut<_t;ut++,qt++,Wt++)qt===_t&&(qt=0),Wt===_t&&(Wt=0),et[ut]=st(ht[ut],ht[qt],ht[Wt]);tt.push(et),Pt=Pt.concat(et)}let $;if(m===0)$=gi.triangulateShape(B,P);else{let Q=[],lt=[];for(let ht=0;ht<m;ht++){let ut=ht/m,_t=f*Math.cos(ut*Math.PI/2),qt=g*Math.sin(ut*Math.PI/2)+y;for(let Wt=0,Kt=B.length;Wt<Kt;Wt++){let te=X(B[Wt],Y[Wt],qt);ct(te.x,te.y,-_t),ut===0&&Q.push(te)}for(let Wt=0,Kt=D;Wt<Kt;Wt++){let te=P[Wt];et=tt[Wt];let U=[];for(let xe=0,ce=te.length;xe<ce;xe++){let I=X(te[xe],et[xe],qt);ct(I.x,I.y,-_t),ut===0&&U.push(I)}ut===0&&lt.push(U)}}$=gi.triangulateShape(Q,lt)}let dt=$.length,ot=g+y;for(let Q=0;Q<k;Q++){let lt=d?X(C[Q],Pt[Q],ot):C[Q];x?(w.copy(S.normals[0]).multiplyScalar(lt.x),M.copy(S.binormals[0]).multiplyScalar(lt.y),v.copy(b[0]).add(w).add(M),ct(v.x,v.y,v.z)):ct(lt.x,lt.y,0)}for(let Q=1;Q<=h;Q++)for(let lt=0;lt<k;lt++){let ht=d?X(C[lt],Pt[lt],ot):C[lt];x?(w.copy(S.normals[Q]).multiplyScalar(ht.x),M.copy(S.binormals[Q]).multiplyScalar(ht.y),v.copy(b[Q]).add(w).add(M),ct(v.x,v.y,v.z)):ct(ht.x,ht.y,p/h*Q)}for(let Q=m-1;Q>=0;Q--){let lt=Q/m,ht=f*Math.cos(lt*Math.PI/2),ut=g*Math.sin(lt*Math.PI/2)+y;for(let _t=0,qt=B.length;_t<qt;_t++){let Wt=X(B[_t],Y[_t],ut);ct(Wt.x,Wt.y,p+ht)}for(let _t=0,qt=P.length;_t<qt;_t++){let Wt=P[_t];et=tt[_t];for(let Kt=0,te=Wt.length;Kt<te;Kt++){let U=X(Wt[Kt],et[Kt],ut);x?ct(U.x,U.y+b[h-1].y,b[h-1].x+ht):ct(U.x,U.y,p+ht)}}}ft(),z();function ft(){let Q=s.length/3;if(d){let lt=0,ht=k*lt;for(let ut=0;ut<dt;ut++){let _t=$[ut];It(_t[2]+ht,_t[1]+ht,_t[0]+ht)}lt=h+m*2,ht=k*lt;for(let ut=0;ut<dt;ut++){let _t=$[ut];It(_t[0]+ht,_t[1]+ht,_t[2]+ht)}}else{for(let lt=0;lt<dt;lt++){let ht=$[lt];It(ht[2],ht[1],ht[0])}for(let lt=0;lt<dt;lt++){let ht=$[lt];It(ht[0]+k*h,ht[1]+k*h,ht[2]+k*h)}}n.addGroup(Q,s.length/3-Q,0)}function z(){let Q=s.length/3,lt=0;q(B,lt),lt+=B.length;for(let ht=0,ut=P.length;ht<ut;ht++){let _t=P[ht];q(_t,lt),lt+=_t.length}n.addGroup(Q,s.length/3-Q,1)}function q(Q,lt){let ht=Q.length;for(;--ht>=0;){let ut=ht,_t=ht-1;_t<0&&(_t=Q.length-1);for(let qt=0,Wt=h+m*2;qt<Wt;qt++){let Kt=k*qt,te=k*(qt+1),U=lt+ut+Kt,xe=lt+_t+Kt,ce=lt+_t+te,I=lt+ut+te;mt(U,xe,ce,I)}}}function ct(Q,lt,ht){l.push(Q),l.push(lt),l.push(ht)}function It(Q,lt,ht){Dt(Q),Dt(lt),Dt(ht);let ut=s.length/3,_t=_.generateTopUV(n,s,ut-3,ut-2,ut-1);ae(_t[0]),ae(_t[1]),ae(_t[2])}function mt(Q,lt,ht,ut){Dt(Q),Dt(lt),Dt(ut),Dt(lt),Dt(ht),Dt(ut);let _t=s.length/3,qt=_.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);ae(qt[0]),ae(qt[1]),ae(qt[3]),ae(qt[1]),ae(qt[2]),ae(qt[3])}function Dt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function ae(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ya[s.type]().fromJSON(s)),new i(n,t.options)}},Dm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-p),new rt(d,1-g),new rt(y,1-u)]:[new rt(a,1-l),new rt(h,1-p),new rt(f,1-g),new rt(m,1-u)]}};function Nm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var kn=class i extends fe{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new R,d=new rt,f=new R,g=new R,y=new R,m=0,u=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,f.x=u*1,f.y=-m,f.z=u*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let _=0;_<=e;_++){let b=n+_*h*s,x=Math.sin(b),S=Math.cos(b);for(let M=0;M<=t.length-1;M++){p.x=t[M].x*x,p.y=t[M].y,p.z=t[M].x*S,o.push(p.x,p.y,p.z),d.x=_/e,d.y=M/(t.length-1),a.push(d.x,d.y);let w=l[3*M+0]*x,v=l[3*M+1],T=l[3*M+0]*S;c.push(w,v,T)}}for(let _=0;_<e;_++)for(let b=0;b<t.length-1;b++){let x=b+_*t.length,S=x,M=x+t.length,w=x+t.length+1,v=x+1;r.push(S,M,v),r.push(w,v,M)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ni=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let u=0;u<h;u++){let _=u*d-o;for(let b=0;b<c;b++){let x=b*p-r;g.push(x,-_,0),y.push(0,0,1),m.push(b/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){let b=_+c*u,x=_+c*(u+1),S=_+1+c*(u+1),M=_+1+c*u;f.push(b,x,M),f.push(x,S,M)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ar=class i extends fe{constructor(t=new ln([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let p=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){let _=g[m];gi.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=gi.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){let _=g[m];f=f.concat(_)}for(let m=0,u=f.length;m<u;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,u=y.length;m<u;m++){let _=y[m],b=_[0]+p,x=_[1]+p,S=_[2]+p;n.push(b,x,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Um(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Um(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var nn=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new R,d=new R,f=[],g=[],y=[],m=[];for(let u=0;u<=n;u++){let _=[],b=u/n,x=o+b*a,S=t*Math.cos(x),M=Math.sqrt(t*t-S*S),w=0;u===0&&o===0?w=.5/e:u===n&&l===Math.PI&&(w=-.5/e);for(let v=0;v<=e;v++){let T=v/e,C=s+T*r;p.x=-M*Math.cos(C),p.y=S,p.z=M*Math.sin(C),g.push(p.x,p.y,p.z),d.copy(p).normalize(),y.push(d.x,d.y,d.z),m.push(T+w,1-b),_.push(c++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){let b=h[u][_+1],x=h[u][_],S=h[u+1][_],M=h[u+1][_+1];(u!==0||o>0)&&f.push(b,x,M),(u!==n-1||l<Math.PI)&&f.push(x,S,M)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yn=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],d=new R,f=new R,g=new R;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let u=0;u<=s;u++){let _=u/s*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),p.push(u/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let u=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(u,_,x),l.push(_,b,x)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Vn=class i extends fe{constructor(t=new Zi(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new rt,h=new R,p=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function y(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),_(),u()}function m(b){h=t.getPointAt(b/e,h);let x=o.normals[b],S=o.binormals[b];for(let M=0;M<=s;M++){let w=M/s*Math.PI*2,v=Math.sin(w),T=-Math.cos(w);l.x=T*x.x+v*S.x,l.y=T*x.y+v*S.y,l.z=T*x.z+v*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function u(){for(let b=1;b<=e;b++)for(let x=1;x<=s;x++){let S=(s+1)*(b-1)+(x-1),M=(s+1)*b+(x-1),w=(s+1)*b+x,v=(s+1)*(b-1)+x;g.push(S,M,v),g.push(M,w,v)}}function _(){for(let b=0;b<=e;b++)for(let x=0;x<=s;x++)c.x=b/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(id(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(id(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Es={clone:bs,merge:pn},Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ma=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ge=class extends qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Sa=class extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ea=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=t,a=2*e-n;break;case Yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=t,l=2*n-e;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,u=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let S=0;S!==a;++S)r[S]=u*o[h+S]+_*o[c+S]+b*o[l+S]+x*o[p+S];return r}},wa=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*p+o[l+d]*h;return r}},Ta=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let d=a*2,f=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],u=f*d+g*2,_=p[u],b=p[u+1],x=t*d+g*2,S=h[x],M=h[x+1],w=zm(n,e,_,S,s);r[g]=Jd(w,y,b,M,m)}return r}};function Jd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Hm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Jd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Hm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ws(e,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ws(t.times,Array),values:Ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vc(t.settings)&&(n.settings={inTangents:Ws(t.settings.inTangents,Array),outTangents:Ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break;case Wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vc(this.settings)&&(sd(this.settings.inTangents,t),sd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ap(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let y=e[p+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ua;var Ki=class extends Un{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Or;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="color";var Ca=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="number";var Pa=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ze.slerpFlat(r,0,o,c-a,o,c,l);return r}},no=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Un{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Or;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="vector";var La=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new La,Da=class{constructor(t){this.manager=t!==void 0?t:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},io=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gc=new Bt,rd=new R,od=new R,so=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(rd),od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(od),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ks||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qo=new R,ta=new ze,pi=new R,ro=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qo,ta,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ta,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qo,ta,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ta,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new R,ad=new rt,ld=new rt,on=class extends ro{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,ad,ld),e.subVectors(ld,ad)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jc=class extends so{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},oo=class extends lr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},cr=class extends ro{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jc=class extends so{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ao=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lo=class extends fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Xs=-90,qs=1,Na=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new on(Xs,qs,t,e);r.layers=this.layers,this.add(r);let o=new on(Xs,qs,t,e);o.layers=this.layers,this.add(o);let a=new on(Xs,qs,t,e);a.layers=this.layers,this.add(a);let l=new on(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new on(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wh="\\[\\]\\.:\\/",km=new RegExp("["+wh+"]","g"),Th="[^"+wh+"]",Vm="[^"+wh.replace("\\.","")+"]",Gm=/((?:WC+[\/:])*)/.source.replace("WC",Th),Wm=/(WCOD+)?/.source.replace("WCOD",Vm),Xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Ym=new RegExp("^"+Gm+Wm+Xm+qm+"$"),Zm=["material","materials","bones","map"],Qc=class{constructor(t,e,n){let s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(km,"")}static parseTrackName(t){let e=Ym.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Qc;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tM=new Float32Array(1);var co=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},hr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var th=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var ho=class extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ah(i,t,e,n){let s=$m(n);switch(e){case _h:return i*t;case Ga:return i*t/s.components*s.byteLength;case Wa:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case Xa:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case qa:return i*t*4/s.components*s.byteLength;case xo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case ja:case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case Mo:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xl:case _l:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case En:case ph:return{byteLength:1,components:1};case dr:case mh:case ri:return{byteLength:2,components:1};case ka:case Va:return{byteLength:2,components:4};case si:case za:case Gn:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function n0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],y=p[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,p[d]=y)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let y=p[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:x0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:b0,color_pars_vertex:E0,color_vertex:w0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:R0,displacementmap_pars_vertex:C0,displacementmap_vertex:P0,emissivemap_fragment:I0,emissivemap_pars_fragment:L0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:U0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:$0,envmap_vertex:H0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:Y0,lights_pars_begin:Z0,lights_toon_fragment:K0,lights_toon_pars_fragment:J0,lights_phong_fragment:j0,lights_phong_pars_fragment:Q0,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,lightprobes_pars_fragment:rg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:cg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:xg,morphnormal_vertex:_g,morphtarget_pars_vertex:yg,morphtarget_vertex:vg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:bg,normal_pars_vertex:Eg,normal_vertex:wg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Pg,opaque_fragment:Ig,packing:Lg,premultiplied_alpha_fragment:Dg,project_vertex:Ng,dithering_fragment:Ug,dithering_pars_fragment:Fg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:qg,specularmap_fragment:Yg,specularmap_pars_fragment:Zg,tonemapping_fragment:$g,tonemapping_pars_fragment:Kg,transmission_fragment:Jg,transmission_pars_fragment:jg,uv_pars_fragment:Qg,uv_pars_vertex:tx,uv_vertex:ex,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:hx,distance_vert:ux,distance_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:xx,meshbasic_frag:_x,meshlambert_vert:yx,meshlambert_frag:vx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Ix,points_frag:Lx,shadow_vert:Dx,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Fx},yt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Mi={basic:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:pn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:pn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new re(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:pn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:pn([yt.points,yt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:pn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:pn([yt.common,yt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:pn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:pn([yt.sprite,yt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:pn([yt.common,yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:pn([yt.lights,yt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Mi.physical={uniforms:pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Al={r:0,b:0,g:0},Ox=new Bt,Sf=new Qt;Sf.set(-1,0,0,0,1,0,0,0,1);function Bx(i,t,e,n,s,r){let o=new re(0),a=s===!0?0:1,l,c,h=null,p=0,d=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let x=_.backgroundBlurriness>0;b=t.get(b,x)}return b}function g(_){let b=!1,x=f(_);x===null?m(o,a):x&&x.isColor&&(m(x,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===mo)?(c===void 0&&(c=new j(new de(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:bs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sf),c.material.toneMapped=ue.getTransfer(x.colorSpace)!==ve,(h!==x||p!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new j(new ni(2,2),new sn({name:"BackgroundMaterial",uniforms:bs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ue.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Al,Eh(i)),e.buffers.color.setClear(Al.r,Al.g,Al.b,b,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:y,dispose:u}}function Hx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(P,L,N,D,B){let X=!1,k=p(P,D,N,L);r!==k&&(r=k,c(r.object)),X=f(P,D,N,B),X&&g(P,D,N,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(P,L,N,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function p(P,L,N,D){let B=D.wireframe===!0,X=n[L.id];X===void 0&&(X={},n[L.id]=X);let k=P.isInstancedMesh===!0?P.id:0,st=X[k];st===void 0&&(st={},X[k]=st);let Y=st[N.id];Y===void 0&&(Y={},st[N.id]=Y);let tt=Y[B];return tt===void 0&&(tt=d(l()),Y[B]=tt),tt}function d(P){let L=[],N=[],D=[];for(let B=0;B<e;B++)L[B]=0,N[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,L,N,D){let B=r.attributes,X=L.attributes,k=0,st=N.getAttributes();for(let Y in st)if(st[Y].location>=0){let et=B[Y],Pt=X[Y];if(Pt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Pt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Pt=P.instanceColor)),et===void 0||et.attribute!==Pt||Pt&&et.data!==Pt.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(P,L,N,D){let B={},X=L.attributes,k=0,st=N.getAttributes();for(let Y in st)if(st[Y].location>=0){let et=X[Y];et===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let Pt={};Pt.attribute=et,et&&et.data&&(Pt.data=et.data),B[Y]=Pt,k++}r.attributes=B,r.attributesNum=k,r.index=D}function y(){let P=r.newAttributes;for(let L=0,N=P.length;L<N;L++)P[L]=0}function m(P){u(P,0)}function u(P,L){let N=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;N[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),B[P]!==L&&(i.vertexAttribDivisor(P,L),B[P]=L)}function _(){let P=r.newAttributes,L=r.enabledAttributes;for(let N=0,D=L.length;N<D;N++)L[N]!==P[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function b(P,L,N,D,B,X,k){k===!0?i.vertexAttribIPointer(P,L,N,B,X):i.vertexAttribPointer(P,L,N,D,B,X)}function x(P,L,N,D){y();let B=D.attributes,X=N.getAttributes(),k=L.defaultAttributeValues;for(let st in X){let Y=X[st];if(Y.location>=0){let tt=B[st];if(tt===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let et=tt.normalized,Pt=tt.itemSize,$=t.get(tt);if($===void 0)continue;let dt=$.buffer,ot=$.type,ft=$.bytesPerElement,z=ot===i.INT||ot===i.UNSIGNED_INT||tt.gpuType===za;if(tt.isInterleavedBufferAttribute){let q=tt.data,ct=q.stride,It=tt.offset;if(q.isInstancedInterleavedBuffer){for(let mt=0;mt<Y.locationSize;mt++)u(Y.location+mt,q.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let mt=0;mt<Y.locationSize;mt++)m(Y.location+mt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let mt=0;mt<Y.locationSize;mt++)b(Y.location+mt,Pt/Y.locationSize,ot,et,ct*ft,(It+Pt/Y.locationSize*mt)*ft,z)}else{if(tt.isInstancedBufferAttribute){for(let q=0;q<Y.locationSize;q++)u(Y.location+q,tt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let q=0;q<Y.locationSize;q++)m(Y.location+q);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let q=0;q<Y.locationSize;q++)b(Y.location+q,Pt/Y.locationSize,ot,et,Pt*ft,Pt/Y.locationSize*q*ft,z)}}else if(k!==void 0){let et=k[st];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}_()}function S(){T();for(let P in n){let L=n[P];for(let N in L){let D=L[N];for(let B in D){let X=D[B];for(let k in X)h(X[k].object),delete X[k];delete D[B]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let N in L){let D=L[N];for(let B in D){let X=D[B];for(let k in X)h(X[k].object),delete X[k];delete D[B]}}delete n[P.id]}function w(P){for(let L in n){let N=n[L];for(let D in N){let B=N[D];if(B[P.id]===void 0)continue;let X=B[P.id];for(let k in X)h(X[k].object),delete X[k];delete B[P.id]}}}function v(P){for(let L in n){let N=n[L],D=P.isInstancedMesh===!0?P.id:0,B=N[D];if(B!==void 0){for(let X in B){let k=B[X];for(let st in k)h(k[st].object),delete k[st];delete B[X]}delete N[D],Object.keys(N).length===0&&delete n[L]}}}function T(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function zx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function kx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==En&&w!==Gn&&!v&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:M}}function Vx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,b=_*4,x=u.clippingState||null;l.value=x,x=h(g,d,b,f);for(let S=0;S!==b;++S)x[S]=e[S];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,f,g){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let u=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,x=f;b!==y;++b,x+=4)o.copy(p[b]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var mr=4,Gx=6,Wx=20,Xx=256,bo=new cr,Qd=new re,Rh=null,Ch=0,Ph=0,Ih=!1,qx=new R,ws=new R,xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=qx}=r;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,Ph),this._renderer.xr.enabled=Ih,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:ri,format:Wn,colorSpace:Br,depthBuffer:!1},s=tf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yx(r)),this._blurMaterial=$x(r,t,e),this._ggxMaterial=Zx(r,t,e)}return s}_compileMaterial(t){let e=new j(new fe,t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s,r){let l=new on(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,f=p.toneMapping;p.getClearColor(Qd),p.toneMapping=ii,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new j(new de,new gs({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,u=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,u=!0):(m.color.copy(Qd),u=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;pr(s,x*S,b>2?S:0,S,S),p.setRenderTarget(s),u&&p.render(y,l),p.render(t,l)}p.toneMapping=f,p.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,bo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),d=c*1.25,f=p*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-mr?n-g+mr:0),u=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,pr(r,m,u,3*y,2*y),s.setRenderTarget(r),s.render(a,bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,pr(t,m,u,3*y,2*y),s.setRenderTarget(t),s.render(a,bo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-mr?s-this._lodMax+mr:0),d=4*(this._cubeSize-h);pr(e,p,d,3*h,2*h),o.setRenderTarget(e),o.render(l,bo)}};function Yx(i){let t=[],e=[],n=i,s=i-mr+1+Gx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,f=3,g=new Float32Array(f*d*p),y=new Float32Array(f*d*p);for(let u=0;u<p;u++){let _=u%3*2/3-1,b=u>2?0:-1,x=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];g.set(x,f*d*u);for(let S=0;S<d;S++){let M=h[S*2]*2-1,w=h[S*2+1]*2-1;u===0?ws.set(1,w,M):u===1?ws.set(-M,1,-w):u===2?ws.set(-M,w,1):u===3?ws.set(-1,w,-M):u===4?ws.set(-M,-1,w):ws.set(M,w,-1),ws.toArray(y,(u*d+S)*f)}}let m=new fe;m.setAttribute("position",new Me(g,f)),m.setAttribute("outputDirection",new Me(y,f)),e.push(new j(m,null)),n>mr&&n--}return{lodMeshes:e,sizeLods:t}}function tf(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zx(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function $x(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ef(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function nf(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cl=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:yi});r.uniforms.tEquirect.value=e;let o=new j(s,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=an),new Na(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Kx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Oa||f===Ba)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Cl(g.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Oa||f===Ba,y=f===ns||f===Ms;if(g||y){let m=e.get(d),u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new xr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new xr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Oa?d.mapping=ns:f===Ba&&(d.mapping=Ms),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Jx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function jx(i,t,e,n){let s={},r=new WeakMap;function o(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(p){let d=p.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(p){let d=[],f=p.index,g=p.attributes.position,y=0;if(g===void 0)return;if(f!==null){let _=f.array;y=f.version;for(let b=0,x=_.length;b<x;b+=3){let S=_[b+0],M=_[b+1],w=_[b+2];d.push(S,M,M,w,w,S)}}else{let _=g.array;y=g.version;for(let b=0,x=_.length/3-1;b<x;b+=3){let S=b+0,M=b+1,w=b+2;d.push(S,M,M,w,w,S)}}let m=new(g.count>=65535?Xr:Wr)(d,1);m.version=y;let u=r.get(p);u&&t.remove(u),r.set(p,m)}function h(p){let d=r.get(p);if(d){let f=p.index;f!==null&&d.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Qx(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*o,f),e.update(d,n,f))}function h(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function t_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,t,e){let n=new WeakMap,s=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==p){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let x=a.attributes.position.count*b,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*S*4*p),w=new kr(M,x,S,p);w.type=Gn,w.needsUpdate=!0;let v=b*4;for(let C=0;C<p;C++){let P=m[C],L=u[C],N=_[C],D=x*S*4*C;for(let B=0;B<P.count;B++){let X=B*v;f===!0&&(s.fromBufferAttribute(P,B),M[D+X+0]=s.x,M[D+X+1]=s.y,M[D+X+2]=s.z,M[D+X+3]=0),g===!0&&(s.fromBufferAttribute(L,B),M[D+X+4]=s.x,M[D+X+5]=s.y,M[D+X+6]=s.z,M[D+X+7]=0),y===!0&&(s.fromBufferAttribute(N,B),M[D+X+8]=s.x,M[D+X+9]=s.y,M[D+X+10]=s.z,M[D+X+11]=N.itemSize===4?s.w:1)}}d={count:p,texture:w,size:new rt(x,S)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function n_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var i_={[ah]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function s_(i,t,e,n,s,r){let o=new Sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new fe;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let h=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new j(c,h),d=new cr(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,u=null,_=[],b=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let M=0;M<_.length;M++){let w=_[M];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){_=x,b=_.length>0&&_[0].isRenderPass===!0;let S=o.width,M=o.height;_.length>0&&a===null&&(a=new Sn(S,M,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(S,M,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let v=_[w];v.setSize&&v.setSize(S,M)}},this.begin=function(x,S){if(y||x.toneMapping===ii&&_.length===0)return!1;if(u=S,S!==null){let M=S.width,w=S.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return b===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ii,!0},this.hasRenderPass=function(){return b},this.end=function(x,S){x.toneMapping=m,y=!0;let M=o,w=a;for(let v=0;v<_.length;v++){let T=_[v];T.enabled!==!1&&(T.render(x,w,M,S),T.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},ue.getTransfer(f)===ve&&(h.defines.SRGB_TRANSFER="");let v=i_[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(u),x.render(p,d),u=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bf=new xn,Nh=new Yi(1,1),Ef=new kr,wf=new pa,Tf=new Yr,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ll(i,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),$e(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),$e(e,n)}}function u_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),$e(e,n)}}function d_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function g_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=e.isReversedDepthBuffer()?wl:El,r=Nh):r=bf,e.setTexture2D(t||r,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wf,s)}function S_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tf,s)}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ef,s)}function E_(i){switch(i){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return __;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function w_(i,t){i.uniform1fv(this.addr,t)}function T_(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function A_(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function R_(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function C_(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function P_(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I_(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L_(i,t){i.uniform1iv(this.addr,t)}function D_(i,t){i.uniform2iv(this.addr,t)}function N_(i,t){i.uniform3iv(this.addr,t)}function U_(i,t){i.uniform4iv(this.addr,t)}function F_(i,t){i.uniform1uiv(this.addr,t)}function O_(i,t){i.uniform2uiv(this.addr,t)}function B_(i,t){i.uniform3uiv(this.addr,t)}function H_(i,t){i.uniform4uiv(this.addr,t)}function z_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Nh:o=bf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function k_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wf,r[o])}function V_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tf,r[o])}function G_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ef,r[o])}function W_(i){switch(i){case 5126:return w_;case 35664:return T_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}var Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E_(e.type)}},Fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W_(e.type)}},Oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function cf(i,t){i.seq.push(t),i.map[t.id]=t}function X_(i,t,e){let n=i.name,s=n.length;for(Lh.lastIndex=0;;){let r=Lh.exec(n),o=Lh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cf(e,c===void 0?new Uh(a,i,t):new Fh(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Oh(a),cf(e,p)),e=p}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);X_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q_=37297,Y_=0;function Z_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var uf=new Qt;function $_(i){ue._getMatrix(uf,ue.workingColorSpace,i);let t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function df(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Z_(i.getShaderSource(t),a)}else return r}function K_(i,t){let e=$_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var J_={[ah]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[po]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function j_(i,t){let e=J_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rl=new R;function Q_(){ue.getLuminanceCoefficients(Rl);let i=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function ey(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ny(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function wo(i){return i!==""}function ff(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(iy,ry)}var sy=new Map;function ry(i,t){let e=oe[t];if(e===void 0){let n=sy.get(t);if(n!==void 0)e=oe[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bh(e)}var oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(oy,ay)}function ay(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ly={[uo]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function cy(i){return ly[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hy={[ns]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function uy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var dy={[Ms]:"ENVMAP_MODE_REFRACTION"};function fy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var py={[oh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function my(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":py[i.combine]||"ENVMAP_BLENDING_NONE"}function gy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cy(e),c=uy(e),h=fy(e),p=my(e),d=gy(e),f=ty(e),g=ey(r),y=s.createProgram(),m,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),u.length>0&&(u+=`
`)):(m=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),u=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?oe.tonemapping_pars_fragment:"",e.toneMapping!==ii?j_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,K_("linearToOutputTexel",e.outputColorSpace),Q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),o=Bh(o),o=ff(o,e),o=pf(o,e),a=Bh(a),a=ff(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let b=_+m+o,x=_+u+a,S=hf(s,s.VERTEX_SHADER,b),M=hf(s,s.FRAGMENT_SHADER,x);s.attachShader(y,S),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(M)||"",B=L.trim(),X=N.trim(),k=D.trim(),st=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,M);else{let tt=df(s,S,"vertex"),et=df(s,M,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+tt+`
`+et)}else B!==""?Xt("WebGLProgram: Program Info Log:",B):(X===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:st,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:k,prefix:u}})}s.deleteShader(S),s.deleteShader(M),v=new gr(s,y),T=ny(s,y)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,q_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=M,this}var _y=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zh(t),e.set(t,n)),n}},zh=class{constructor(t){this.id=_y++,this.code=t,this.usedTimes=0}};function yy(i){return i===rs||i===Mo||i===So}function vy(i,t,e,n,s,r){let o=new Vr,a=new Hh,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,C,P,L,N){let D=P.fog,B=L.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,st=t.get(v.envMap||X,k),Y=st&&st.mapping===mo?st.image.height:null,tt=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Pt=et!==void 0?et.length:0,$=0;B.morphAttributes.position!==void 0&&($=1),B.morphAttributes.normal!==void 0&&($=2),B.morphAttributes.color!==void 0&&($=3);let dt,ot,ft,z;if(tt){let Ae=Mi[tt];dt=Ae.vertexShader,ot=Ae.fragmentShader}else{dt=v.vertexShader,ot=v.fragmentShader;let Ae=a.getVertexShaderStage(v),_e=a.getFragmentShaderStage(v);a.update(v,Ae,_e),ft=Ae.id,z=_e.id}let q=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),It=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,Dt=!!v.map,ae=!!v.matcap,Q=!!st,lt=!!v.aoMap,ht=!!v.lightMap,ut=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,qt=!!v.displacementMap,Wt=!!v.emissiveMap,Kt=!!v.metalnessMap,te=!!v.roughnessMap,U=v.anisotropy>0,xe=v.clearcoat>0,ce=v.dispersion>0,I=v.retroreflectivity>0,E=v.iridescence>0,H=v.sheen>0,W=v.transmission>0,K=U&&!!v.anisotropyMap,pt=xe&&!!v.clearcoatMap,gt=xe&&!!v.clearcoatNormalMap,J=xe&&!!v.clearcoatRoughnessMap,it=E&&!!v.iridescenceMap,vt=E&&!!v.iridescenceThicknessMap,zt=H&&!!v.sheenColorMap,Et=H&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,kt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,ee=W&&!!v.transmissionMap,O=W&&!!v.thicknessMap,St=!!v.gradientMap,nt=!!v.alphaMap,bt=v.alphaTest>0,At=!!v.alphaHash,at=!!v.extensions,Vt=ii;v.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Ot={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:dt,fragmentShader:ot,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:It,instancingColor:It&&L.instanceColor!==null,instancingMorph:It&&L.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:ae,envMap:Q,envMapMode:Q&&st.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:ht,bumpMap:ut,normalMap:_t,displacementMap:qt,emissiveMap:Wt,normalMapObjectSpace:_t&&v.normalMapType===Dd,normalMapTangentSpace:_t&&v.normalMapType===bl,packedNormalMap:_t&&v.normalMapType===bl&&yy(v.normalMap.format),metalnessMap:Kt,roughnessMap:te,anisotropy:U,anisotropyMap:K,clearcoat:xe,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:J,dispersion:ce,retroreflection:I,iridescence:E,iridescenceMap:it,iridescenceThicknessMap:vt,sheen:H,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:Mt,specularColorMap:kt,specularIntensityMap:Yt,transmission:W,transmissionMap:ee,thicknessMap:O,gradientMap:St,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:bt,alphaHash:At,combine:v.combine,mapUv:Dt&&g(v.map.channel),aoMapUv:lt&&g(v.aoMap.channel),lightMapUv:ht&&g(v.lightMap.channel),bumpMapUv:ut&&g(v.bumpMap.channel),normalMapUv:_t&&g(v.normalMap.channel),displacementMapUv:qt&&g(v.displacementMap.channel),emissiveMapUv:Wt&&g(v.emissiveMap.channel),metalnessMapUv:Kt&&g(v.metalnessMap.channel),roughnessMapUv:te&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:pt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(v.sheenRoughnessMap.channel),specularMapUv:Mt&&g(v.specularMap.channel),specularColorMapUv:kt&&g(v.specularColorMap.channel),specularIntensityMapUv:Yt&&g(v.specularIntensityMap.channel),transmissionMapUv:ee&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:nt&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_t||U),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Dt||nt),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ct,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:$,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:Wt&&v.emissiveMap.isVideoTexture===!0&&ue.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ce,flipSided:v.side===We,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(u(T,v),_(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function u(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function _(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let T=f[v.type],C;if(T){let P=Mi[T];C=Es.clone(P.uniforms)}else C=v.uniforms;return C}function x(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new xy(i,T,v,s),c.push(C),h.set(T,C)),C}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function My(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _f(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,y,m,u){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:u},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=o(d),_.groupOrder=y,_.renderOrder=d.renderOrder,_.z=m,_.group=u),t++,_}function l(d,f,g,y,m,u,_){_.reversedDepth===!0&&(m=-m);let b=a(d,f,g,y,m,u);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(d,f,g,y,m,u){let _=a(d,f,g,y,m,u);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||Sy),n.length>1&&n.sort(f||xf),s.length>1&&s.sort(f||xf)}function p(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function by(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _f,i.set(n,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new re};break;case"SpotLight":e={position:new R,direction:new R,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function wy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ty=0;function Ay(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ry(i){let t=new Ey,e=wy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Bt,o=new Bt;function a(c){let h=0,p=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,y=0,m=0,u=0,_=0,b=0,x=0,S=0,M=0,w=0,v=0,T=0,C=0;c.sort(Ay);for(let L=0,N=c.length;L<N;L++){let D=c[L],B=D.color,X=D.intensity,k=D.distance,st=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?st=D.shadow.map.texture:st=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,p+=B.g*X,d+=B.b*X;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],X);C++}else if(D.isSunLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let tt=D.shadow,et=e.get(D);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=st;let Pt=tt.getViewportCount();for(let $=0;$<Pt;$++)n.sunShadowMatrix[y+$]=tt.getMatrix($),n.sunShadowCascade[y+$]=tt._cascadeData[$];y+=Pt,g++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let tt=D.shadow,et=e.get(D);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=Y,m++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(X),Y.distance=k,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;let tt=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,tt.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=st,w++}_++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=Y,b++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let tt=D.shadow,et=e.get(D);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,n.pointShadow[u]=et,n.pointShadowMap[u]=st,n.pointShadowMatrix[u]=D.shadow.matrix,M++}n.point[u]=Y,u++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(X),Y.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[x]=Y,x++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==u||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==v||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=b,n.point.length=u,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=u,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=v,P.numLightProbes=C,n.version=Ty++)}function l(c,h){let p=0,d=0,f=0,g=0,y=0,m=0,u=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let x=c[_];if(x.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(u),p++}else if(x.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),d++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),g++}else if(x.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),o.identity(),r.copy(x.matrixWorld),r.premultiply(u),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),f++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(u),m++}}}return{setup:a,setupView:l,state:n}}function yf(i){let t=new Ry(i),e=[],n=[],s=[];function r(d){p.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Cy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yf(i),t.set(s,[a])):r>=o.length?(a=new yf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
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
}`,Ly=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Dy=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],vf=new Bt,Eo=new R,Dh=new R;function Ny(i,t,e){let n=new ir,s=new rt,r=new rt,o=new Ue,a=new Sa,l=new ba,c={},h=e.maxTextureSize,p={[ts]:We,[We]:ts,[Ce]:Ce},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Py,fragmentShader:Iy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let u=this.type;this.render=function(M,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Fa&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(yi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=u!==this.type;N&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let X=M[D],k=X.shadow;if(k===void 0){Xt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ur){if(X.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Sn(s.x,s.y,{format:rs,type:ri,minFilter:an,magFilter:an,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Yi(s.x,s.y,Gn),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=xi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn}else X.isPointLight?(k.map=new Cl(s.x),k.map.depthTexture=new ma(s.x,si)):(k.map=new Sn(s.x,s.y),k.map.depthTexture=new Yi(s.x,s.y,si)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=xi,this.type===uo?(k.map.depthTexture.compareFunction=Y?wl:El,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let tt=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,v);for(let et=0;et<tt;et++){let Pt=k.getCamera(et);if(X.isPointLight){let $=k.camera,dt=k.matrix,ot=X.distance||$.far;ot!==$.far&&($.far=ot,$.updateProjectionMatrix()),Eo.setFromMatrixPosition(X.matrixWorld),$.position.copy(Eo),Dh.copy($.position),Dh.add(Ly[et]),$.up.copy(Dy[et]),$.lookAt(Dh),$.updateMatrixWorld(),dt.makeTranslation(-Eo.x,-Eo.y,-Eo.z),vf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),k._frustum.setFromProjectionMatrix(vf,$.coordinateSystem,$.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,et),i.clear();else{et===0&&(i.setRenderTarget(k.map),i.clear());let $=k.getViewport(et);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),L.viewport(o)}n=k.getFrustum(et),x(w,v,Pt,X,this.type)}k.isPointLightShadow!==!0&&this.type===ur&&_(k,v),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,P)};function _(M,w){let v=t.update(y);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Sn(s.x,s.y,{format:rs,type:ri}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,v,d,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,v,f,y,null)}function b(M,w,v,T){let C=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=C.uuid,N=w.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let B=D[N];B===void 0&&(B=C.clone(),D[N]=B,w.addEventListener("dispose",S)),C=B}if(C.visible=w.visible,C.wireframe=w.wireframe,T===ur?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:p[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=v}return C}function x(M,w,v,T,C){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===ur)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let N=t.update(M),D=M.material;if(Array.isArray(D)){let B=N.groups;for(let X=0,k=B.length;X<k;X++){let st=B[X],Y=D[st.materialIndex];if(Y&&Y.visible){let tt=b(M,Y,T,C);M.onBeforeShadow(i,M,w,v,N,tt,st),i.renderBufferDirect(v,null,N,tt,M,st),M.onAfterShadow(i,M,w,v,N,tt,st)}}}else if(D.visible){let B=b(M,D,T,C);M.onBeforeShadow(i,M,w,v,N,B,null),i.renderBufferDirect(v,null,N,B,M,null),M.onAfterShadow(i,M,w,v,N,B,null)}}let L=M.children;for(let N=0,D=L.length;N<D;N++)x(L[N],w,v,T,C)}function S(M){M.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],C=M.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Uy(i,t){function e(){let O=!1,St=new Ue,nt=null,bt=new Ue(0,0,0,0);return{setMask:function(At){nt!==At&&!O&&(i.colorMask(At,At,At,At),nt=At)},setLocked:function(At){O=At},setClear:function(At,at,Vt,Ot,Ae){Ae===!0&&(At*=Ot,at*=Ot,Vt*=Ot),St.set(At,at,Vt,Ot),bt.equals(St)===!1&&(i.clearColor(At,at,Vt,Ot),bt.copy(St))},reset:function(){O=!1,nt=null,bt.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,nt=null,bt=null,At=null;return{setReversed:function(at){if(St!==at){let Vt=t.get("EXT_clip_control");at?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),St=at;let Ot=At;At=null,this.setClear(Ot)}},getReversed:function(){return St},setTest:function(at){at?q(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(at){nt!==at&&!O&&(i.depthMask(at),nt=at)},setFunc:function(at){if(St&&(at=Xd[at]),bt!==at){switch(at){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=at}},setLocked:function(at){O=at},setClear:function(at){At!==at&&(At=at,St&&(at=1-at),i.clearDepth(at))},reset:function(){O=!1,nt=null,bt=null,At=null,St=!1}}}function s(){let O=!1,St=null,nt=null,bt=null,At=null,at=null,Vt=null,Ot=null,Ae=null;return{setTest:function(_e){O||(_e?q(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(_e){St!==_e&&!O&&(i.stencilMask(_e),St=_e)},setFunc:function(_e,Zn,di){(nt!==_e||bt!==Zn||At!==di)&&(i.stencilFunc(_e,Zn,di),nt=_e,bt=Zn,At=di)},setOp:function(_e,Zn,di){(at!==_e||Vt!==Zn||Ot!==di)&&(i.stencilOp(_e,Zn,di),at=_e,Vt=Zn,Ot=di)},setLocked:function(_e){O=_e},setClear:function(_e){Ae!==_e&&(i.clearStencil(_e),Ae=_e)},reset:function(){O=!1,St=null,nt=null,bt=null,At=null,at=null,Vt=null,Ot=null,Ae=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},d={},f=new WeakMap,g=[],y=null,m=!1,u=null,_=null,b=null,x=null,S=null,M=null,w=null,v=new re(0,0,0),T=0,C=!1,P=null,L=null,N=null,D=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,st=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=st>=2);let tt=null,et={},Pt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),dt=new Ue().fromArray(Pt),ot=new Ue().fromArray($);function ft(O,St,nt,bt){let At=new Uint8Array(4),at=i.createTexture();i.bindTexture(O,at),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<nt;Vt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(St+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return at}let z={};z[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc($s),ut(!1),_t(eh),q(i.CULL_FACE),lt(yi);function q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ct(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function It(O,St){return d[O]!==St?(i.bindFramebuffer(O,St),d[O]=St,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function mt(O,St){let nt=g,bt=!1;if(O){nt=f.get(St),nt===void 0&&(nt=[],f.set(St,nt));let At=O.textures;if(nt.length!==At.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Vt=At.length;at<Vt;at++)nt[at]=i.COLOR_ATTACHMENT0+at;nt.length=At.length,bt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(nt)}function Dt(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let ae={[vs]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};ae[pd]=i.MIN,ae[md]=i.MAX;let Q={[gd]:i.ZERO,[xd]:i.ONE,[_d]:i.SRC_COLOR,[sh]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[vd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[rh]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(O,St,nt,bt,At,at,Vt,Ot,Ae,_e){if(O===yi){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),O!==ud){if(O!==u||_e!==C){if((_!==vs||S!==vs)&&(i.blendEquation(i.FUNC_ADD),_=vs,S=vs),_e)switch(O){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",O);break}b=null,x=null,M=null,w=null,v.set(0,0,0),T=0,u=O,C=_e}return}At=At||St,at=at||nt,Vt=Vt||bt,(St!==_||At!==S)&&(i.blendEquationSeparate(ae[St],ae[At]),_=St,S=At),(nt!==b||bt!==x||at!==M||Vt!==w)&&(i.blendFuncSeparate(Q[nt],Q[bt],Q[at],Q[Vt]),b=nt,x=bt,M=at,w=Vt),(Ot.equals(v)===!1||Ae!==T)&&(i.blendColor(Ot.r,Ot.g,Ot.b,Ae),v.copy(Ot),T=Ae),u=O,C=!1}function ht(O,St){O.side===Ce?ct(i.CULL_FACE):q(i.CULL_FACE);let nt=O.side===We;St&&(nt=!nt),ut(nt),O.blending===es&&O.transparent===!1?lt(yi):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;a.setTest(bt),bt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Wt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function _t(O){O!==cd?(q(i.CULL_FACE),O!==L&&(O===eh?i.cullFace(i.BACK):O===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),L=O}function qt(O){O!==N&&(k&&i.lineWidth(O),N=O)}function Wt(O,St,nt){O?(q(i.POLYGON_OFFSET_FILL),(D!==St||B!==nt)&&(D=St,B=nt,o.getReversed()&&(St=-St),i.polygonOffset(St,nt))):ct(i.POLYGON_OFFSET_FILL)}function Kt(O){O?q(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function te(O){O===void 0&&(O=i.TEXTURE0+X-1),tt!==O&&(i.activeTexture(O),tt=O)}function U(O,St,nt){nt===void 0&&(tt===null?nt=i.TEXTURE0+X-1:nt=tt);let bt=et[nt];bt===void 0&&(bt={type:void 0,texture:void 0},et[nt]=bt),(bt.type!==O||bt.texture!==St)&&(tt!==nt&&(i.activeTexture(nt),tt=nt),i.bindTexture(O,St||z[O]),bt.type=O,bt.texture=St)}function xe(){let O=et[tt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function E(){try{i.texSubImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function pt(){try{i.texStorage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function gt(){try{i.texStorage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function vt(O){return p[O]!==void 0?p[O]:i.getParameter(O)}function zt(O,St){p[O]!==St&&(i.pixelStorei(O,St),p[O]=St)}function Et(O){dt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),dt.copy(O))}function Mt(O){ot.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ot.copy(O))}function kt(O,St){let nt=c.get(St);nt===void 0&&(nt=new WeakMap,c.set(St,nt));let bt=nt.get(O);bt===void 0&&(bt=i.getUniformBlockIndex(St,O.name),nt.set(O,bt))}function Yt(O,St){let bt=c.get(St).get(O);l.get(St)!==bt&&(i.uniformBlockBinding(St,bt,O.__bindingPointIndex),l.set(St,bt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},tt=null,et={},d={},f=new WeakMap,g=[],y=null,m=!1,u=null,_=null,b=null,x=null,S=null,M=null,w=null,v=new re(0,0,0),T=0,C=!1,P=null,L=null,N=null,D=null,B=null,dt.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ct,bindFramebuffer:It,drawBuffers:mt,useProgram:Dt,setBlending:lt,setMaterial:ht,setFlipSided:ut,setCullFace:_t,setLineWidth:qt,setPolygonOffset:Wt,setScissorTest:Kt,activeTexture:te,bindTexture:U,unbindTexture:xe,compressedTexImage2D:ce,compressedTexImage3D:I,texImage2D:J,texImage3D:it,pixelStorei:zt,getParameter:vt,updateUBOMapping:kt,uniformBlockBinding:Yt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:E,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:Et,viewport:Mt,reset:ee}}function Fy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,p=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,E){return g?new OffscreenCanvas(I,E):zr("canvas")}function m(I,E,H){let W=1,K=ce(I);if((K.width>H||K.height>H)&&(W=H/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let pt=Math.floor(W*K.width),gt=Math.floor(W*K.height);d===void 0&&(d=y(pt,gt));let J=E?y(pt,gt):d;return J.width=pt,J.height=gt,J.getContext("2d").drawImage(I,0,0,pt,gt),Xt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+pt+"x"+gt+")."),J}else return"data"in I&&Xt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function u(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,E,H,W,K,pt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt;W&&(gt=t.get("EXT_texture_norm16"),gt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&gt&&(J=gt.R16_EXT),H===i.SHORT&&gt&&(J=gt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),E===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&gt&&(J=gt.RG16_EXT),H===i.SHORT&&gt&&(J=gt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_SHORT&&gt&&(J=gt.RGB16_EXT),H===i.SHORT&&gt&&(J=gt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),E===i.RGBA){let it=pt?Hr:ue.getTransfer(K);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=it===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&gt&&(J=gt.RGBA16_EXT),H===i.SHORT&&gt&&(J=gt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(I,E){let H;return I?E===null||E===si||E===fr?H=i.DEPTH24_STENCIL8:E===Gn?H=i.DEPTH32F_STENCIL8:E===dr&&(H=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===si||E===fr?H=i.DEPTH_COMPONENT24:E===Gn?H=i.DEPTH_COMPONENT32F:E===dr&&(H=i.DEPTH_COMPONENT16),H}function M(I,E){return u(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function v(I){let E=I.target;E.removeEventListener("dispose",v),P(E)}function T(I){let E=n.get(I);if(E.__webglInit===void 0)return;let H=I.source,W=f.get(H);if(W){let K=W[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(I),Object.keys(W).length===0&&f.delete(H)}n.remove(I)}function C(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let H=I.source,W=f.get(H);delete W[E.__cacheKey],o.memory.textures--}function P(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let K=0;K<E.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(E.__webglFramebuffer[W][K]);else i.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)i.deleteFramebuffer(E.__webglFramebuffer[W]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=I.textures;for(let W=0,K=H.length;W<K;W++){let pt=n.get(H[W]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(H[W])}n.remove(I)}let L=0;function N(){L=0}function D(){return L}function B(I){L=I}function X(){let I=L;return I>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function k(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function st(I,E){let H=n.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let W=I.image;if(W===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(H,I,E);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function Y(I,E){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ct(H,I,E);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function tt(I,E){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ct(H,I,E);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function et(I,E){let H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){It(H,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}let Pt={[Ln]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},$={[tn]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},dt={[Ud]:i.NEVER,[zd]:i.ALWAYS,[Fd]:i.LESS,[El]:i.LEQUAL,[Od]:i.EQUAL,[wl]:i.GEQUAL,[Bd]:i.GREATER,[Hd]:i.NOTEQUAL};function ot(I,E){if(E.type===Gn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Ha||E.magFilter===go||E.magFilter===is||E.minFilter===an||E.minFilter===Ha||E.minFilter===go||E.minFilter===is)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Pt[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Pt[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Pt[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,$[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==go&&E.minFilter!==is||E.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ft(I,E){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let W=E.source,K=f.get(W);K===void 0&&(K={},f.set(W,K));let pt=k(E);if(pt!==I.__cacheKey){K[pt]===void 0&&(K[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[pt].usedTimes++;let gt=K[I.__cacheKey];gt!==void 0&&(K[I.__cacheKey].usedTimes--,gt.usedTimes===0&&C(E)),I.__cacheKey=pt,I.__webglTexture=K[pt].texture}return H}function z(I,E,H){return Math.floor(Math.floor(I/H)/E)}function q(I,E,H,W){let pt=I.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,W,E.data);else{pt.sort((zt,Et)=>zt.start-Et.start);let gt=0;for(let zt=1;zt<pt.length;zt++){let Et=pt[gt],Mt=pt[zt],kt=Et.start+Et.count,Yt=z(Mt.start,E.width,4),ee=z(Et.start,E.width,4);Mt.start<=kt+1&&Yt===ee&&z(Mt.start+Mt.count-1,E.width,4)===Yt?Et.count=Math.max(Et.count,Mt.start+Mt.count-Et.start):(++gt,pt[gt]=Mt)}pt.length=gt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let zt=0,Et=pt.length;zt<Et;zt++){let Mt=pt[zt],kt=Math.floor(Mt.start/4),Yt=Math.ceil(Mt.count/4),ee=kt%E.width,O=Math.floor(kt/E.width),St=Yt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,ee,O,St,nt,H,W,E.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function ct(I,E,H){let W=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=i.TEXTURE_3D);let K=ft(I,E),pt=E.source;e.bindTexture(W,I.__webglTexture,i.TEXTURE0+H);let gt=n.get(pt);if(pt.version!==gt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let nt=ue.getPrimaries(ue.workingColorSpace),bt=E.colorSpace===Li?null:ue.getPrimaries(E.colorSpace),At=E.colorSpace===Li||nt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let it=m(E.image,!1,s.maxTextureSize);it=xe(E,it);let vt=r.convert(E.format,E.colorSpace),zt=r.convert(E.type),Et=x(E.internalFormat,vt,zt,E.normalized,E.colorSpace,E.isVideoTexture);ot(W,E);let Mt,kt=E.mipmaps,Yt=E.isVideoTexture!==!0,ee=gt.__version===void 0||K===!0,O=pt.dataReady,St=M(E,it);if(E.isDepthTexture)Et=S(E.format===ss,E.type),ee&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Et,it.width,it.height,0,vt,zt,null));else if(E.isDataTexture)if(kt.length>0){Yt&&ee&&e.texStorage2D(i.TEXTURE_2D,St,Et,kt[0].width,kt[0].height);for(let nt=0,bt=kt.length;nt<bt;nt++)Mt=kt[nt],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Mt.width,Mt.height,vt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,nt,Et,Mt.width,Mt.height,0,vt,zt,Mt.data);E.generateMipmaps=!1}else Yt?(ee&&e.texStorage2D(i.TEXTURE_2D,St,Et,it.width,it.height),O&&q(E,it,vt,zt)):e.texImage2D(i.TEXTURE_2D,0,Et,it.width,it.height,0,vt,zt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Et,kt[0].width,kt[0].height,it.depth);for(let nt=0,bt=kt.length;nt<bt;nt++)if(Mt=kt[nt],E.format!==Wn)if(vt!==null)if(Yt){if(O)if(E.layerUpdates.size>0){let At=Ah(Mt.width,Mt.height,E.format,E.type);for(let at of E.layerUpdates){let Vt=Mt.data.subarray(at*At/Mt.data.BYTES_PER_ELEMENT,(at+1)*At/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,at,Mt.width,Mt.height,1,vt,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Mt.width,Mt.height,it.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Et,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Mt.width,Mt.height,it.depth,vt,zt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Et,Mt.width,Mt.height,it.depth,0,vt,zt,Mt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Yt&&ee&&e.texStorage2D(i.TEXTURE_2D,St,Et,kt[0].width,kt[0].height);for(let nt=0,bt=kt.length;nt<bt;nt++)Mt=kt[nt],E.format!==Wn?vt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Et,Mt.width,Mt.height,0,Mt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Mt.width,Mt.height,vt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,nt,Et,Mt.width,Mt.height,0,vt,zt,Mt.data)}else if(E.isDataArrayTexture)if(Yt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Et,it.width,it.height,it.depth),O)if(E.layerUpdates.size>0){let nt=Ah(it.width,it.height,E.format,E.type);for(let bt of E.layerUpdates){let At=it.data.subarray(bt*nt/it.data.BYTES_PER_ELEMENT,(bt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,it.width,it.height,1,vt,zt,At)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,zt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,vt,zt,it.data);else if(E.isData3DTexture)Yt?(ee&&e.texStorage3D(i.TEXTURE_3D,St,Et,it.width,it.height,it.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,zt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,vt,zt,it.data);else if(E.isFramebufferTexture){if(ee)if(Yt)e.texStorage2D(i.TEXTURE_2D,St,Et,it.width,it.height);else{let nt=it.width,bt=it.height;for(let At=0;At<St;At++)e.texImage2D(i.TEXTURE_2D,At,Et,nt,bt,0,vt,zt,null),nt>>=1,bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),p.add(E),nt.onpaint=bt=>{let At=bt.changedElements;for(let at of p)At.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let At=i.RGBA,at=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,at,Vt,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Yt&&ee){let nt=ce(kt[0]);e.texStorage2D(i.TEXTURE_2D,St,Et,nt.width,nt.height)}for(let nt=0,bt=kt.length;nt<bt;nt++)Mt=kt[nt],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,vt,zt,Mt):e.texImage2D(i.TEXTURE_2D,nt,Et,vt,zt,Mt);E.generateMipmaps=!1}else if(Yt){if(ee){let nt=ce(it);e.texStorage2D(i.TEXTURE_2D,St,Et,nt.width,nt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,zt,it)}else e.texImage2D(i.TEXTURE_2D,0,Et,vt,zt,it);u(E)&&_(W),gt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function It(I,E,H){if(E.image.length!==6)return;let W=ft(I,E),K=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let pt=n.get(K);if(K.version!==pt.__version||W===!0){e.activeTexture(i.TEXTURE0+H);let gt=ue.getPrimaries(ue.workingColorSpace),J=E.colorSpace===Li?null:ue.getPrimaries(E.colorSpace),it=E.colorSpace===Li||gt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=E.isCompressedTexture||E.image[0].isCompressedTexture,zt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let at=0;at<6;at++)!vt&&!zt?Et[at]=m(E.image[at],!0,s.maxCubemapSize):Et[at]=zt?E.image[at].image:E.image[at],Et[at]=xe(E,Et[at]);let Mt=Et[0],kt=r.convert(E.format,E.colorSpace),Yt=r.convert(E.type),ee=x(E.internalFormat,kt,Yt,E.normalized,E.colorSpace),O=E.isVideoTexture!==!0,St=pt.__version===void 0||W===!0,nt=K.dataReady,bt=M(E,Mt);ot(i.TEXTURE_CUBE_MAP,E);let At;if(vt){O&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ee,Mt.width,Mt.height);for(let at=0;at<6;at++){At=Et[at].mipmaps;for(let Vt=0;Vt<At.length;Vt++){let Ot=At[Vt];E.format!==Wn?kt!==null?O?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Ot.width,Ot.height,kt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,ee,Ot.width,Ot.height,0,Ot.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Ot.width,Ot.height,kt,Yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,ee,Ot.width,Ot.height,0,kt,Yt,Ot.data)}}}else{if(At=E.mipmaps,O&&St){At.length>0&&bt++;let at=ce(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ee,at.width,at.height)}for(let at=0;at<6;at++)if(zt){O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et[at].width,Et[at].height,kt,Yt,Et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ee,Et[at].width,Et[at].height,0,kt,Yt,Et[at].data);for(let Vt=0;Vt<At.length;Vt++){let Ae=At[Vt].image[at].image;O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Ae.width,Ae.height,kt,Yt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,ee,Ae.width,Ae.height,0,kt,Yt,Ae.data)}}else{O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,kt,Yt,Et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ee,kt,Yt,Et[at]);for(let Vt=0;Vt<At.length;Vt++){let Ot=At[Vt];O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,kt,Yt,Ot.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,ee,kt,Yt,Ot.image[at])}}}u(E)&&_(i.TEXTURE_CUBE_MAP),pt.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function mt(I,E,H,W,K,pt){let gt=r.convert(H.format,H.colorSpace),J=r.convert(H.type),it=x(H.internalFormat,gt,J,H.normalized,H.colorSpace),vt=n.get(E),zt=n.get(H);if(zt.__renderTarget=E,!vt.__hasExternalTextures){let Et=Math.max(1,E.width>>pt),Mt=Math.max(1,E.height>>pt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,pt,it,Et,Mt,E.depth,0,gt,J,null):e.texImage2D(K,pt,it,Et,Mt,0,gt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),te(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,zt.__webglTexture,0,Kt(E)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,zt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(I,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let W=E.depthTexture,K=W&&W.isDepthTexture?W.type:null,pt=S(E.stencilBuffer,K),gt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(E),pt,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(E),pt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,I)}else{let W=E.textures;for(let K=0;K<W.length;K++){let pt=W[K],gt=r.convert(pt.format,pt.colorSpace),J=r.convert(pt.type),it=x(pt.internalFormat,gt,J,pt.normalized,pt.colorSpace);te(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(E),it,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(E),it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(I,E,H){let W=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(E.depthTexture);if(K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ot(i.TEXTURE_CUBE_MAP,E.depthTexture);let vt=r.convert(E.depthTexture.format),zt=r.convert(E.depthTexture.type),Et;E.depthTexture.format===xi?Et=i.DEPTH_COMPONENT24:E.depthTexture.format===ss&&(Et=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Et,E.width,E.height,0,vt,zt,null)}}else st(E.depthTexture,0);let pt=K.__webglTexture,gt=Kt(E),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,it=E.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===xi)te(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,J,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,it,J,pt,0);else if(E.depthTexture.format===ss)te(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,J,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,it,J,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(I){let E=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){let K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=W}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)ae(E.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?ae(E.__webglFramebuffer[0],I,0):ae(E.__webglFramebuffer,I,0)}else if(H){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=i.createRenderbuffer(),Dt(E.__webglDepthbuffer[W],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,pt)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Dt(E.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,E,H){let W=n.get(I);E!==void 0&&mt(W.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Q(I)}function ht(I){let E=I.texture,H=n.get(I),W=n.get(E);I.addEventListener("dispose",v);let K=I.textures,pt=I.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=E.version,o.memory.textures++),pt){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let it=0;it<E.mipmaps.length;it++)H.__webglFramebuffer[J][it]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(gt)for(let J=0,it=K.length;J<it;J++){let vt=n.get(K[J]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&te(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let it=K[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let vt=r.convert(it.format,it.colorSpace),zt=r.convert(it.type),Et=x(it.internalFormat,vt,zt,it.normalized,it.colorSpace,I.isXRRenderTarget===!0),Mt=Kt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Et,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ot(i.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)mt(H.__webglFramebuffer[J][it],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,it);else mt(H.__webglFramebuffer[J],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);u(E)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let J=0,it=K.length;J<it;J++){let vt=K[J],zt=n.get(vt),Et=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,zt.__webglTexture),ot(Et,vt),mt(H.__webglFramebuffer,I,vt,i.COLOR_ATTACHMENT0+J,Et,0),u(vt)&&_(Et)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),ot(J,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)mt(H.__webglFramebuffer[it],I,E,i.COLOR_ATTACHMENT0,J,it);else mt(H.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,J,0);u(E)&&_(J),e.unbindTexture()}I.depthBuffer&&Q(I)}function ut(I){let E=I.textures;for(let H=0,W=E.length;H<W;H++){let K=E[H];if(u(K)){let pt=b(I),gt=n.get(K).__webglTexture;e.bindTexture(pt,gt),_(pt),e.unbindTexture()}}}let _t=[],qt=[];function Wt(I){if(I.samples>0){if(te(I)===!1){let E=I.textures,H=I.width,W=I.height,K=i.COLOR_BUFFER_BIT,pt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(I),J=E.length>1;if(J)for(let vt=0;vt<E.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let it=I.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let vt=0;vt<E.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let zt=n.get(E[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,K,i.NEAREST),l===!0&&(_t.length=0,qt.length=0,_t.push(i.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(_t.push(pt),qt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let vt=0;vt<E.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let zt=n.get(E[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Kt(I){return Math.min(s.maxSamples,I.samples)}function te(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function U(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function xe(I,E){let H=I.colorSpace,W=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Br&&H!==Li&&(ue.getTransfer(H)===ve?(W!==Wn||K!==En)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",H)),E}function ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=et,this.rebindTextures=lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Oy(i,t){function e(n,s=Li){let r,o=ue.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===yh)return i.RGB;if(n===Wn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Ga)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===xo||n===_o||n===yo||n===vo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===$a||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===ja||n===Qa||n===tl||n===el||n===Mo||n===nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===ja)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tl)return r.COMPRESSED_R11_EAC;if(n===el)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mo)return r.COMPRESSED_RG11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===_l||n===yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xl)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===Ml||n===So||n===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:By,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vh=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new kh,u={},_=e.getContextAttributes(),b=null,x=null,S=[],M=[],w=new rt,v=null,T=null,C=new on;C.viewport=new Ue;let P=new on;P.viewport=new Ue;let L=[C,P],N=new Ua,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=S[z];return q===void 0&&(q=new tr,S[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=S[z];return q===void 0&&(q=new tr,S[z]=q),q.getGripSpace()},this.getHand=function(z){let q=S[z];return q===void 0&&(q=new tr,S[z]=q),q.getHandSpace()};function X(z){let q=M.indexOf(z.inputSource);if(q===-1)return;let ct=S[q];ct!==void 0&&(ct.update(z.inputSource,z.frame,c||o),ct.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",st);for(let z=0;z<S.length;z++){let q=M[z];q!==null&&(M[z]=null,S[z].disconnect(q))}D=null,B=null,m.reset();for(let z in u)delete u[z];if(t.setRenderTarget(b),f=null,d=null,p=null,s=null,x=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),T!==null){let z=T.camera;z.fov=T.fov,z.zoom=T.zoom,z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",k),s.addEventListener("inputsourceschange",st),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,It=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?ss:xi,It=_.stencil?fr:si);let Dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Sn(d.textureWidth,d.textureHeight,{format:Wn,type:En,depthTexture:new Yi(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Sn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(z){for(let q=0;q<z.removed.length;q++){let ct=z.removed[q],It=M.indexOf(ct);It>=0&&(M[It]=null,S[It].disconnect(ct))}for(let q=0;q<z.added.length;q++){let ct=z.added[q],It=M.indexOf(ct);if(It===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=M.length){M.push(ct),It=Dt;break}else if(M[Dt]===null){M[Dt]=ct,It=Dt;break}if(It===-1)break}let mt=S[It];mt&&mt.connect(ct)}}let Y=new R,tt=new R;function et(z,q,ct){Y.setFromMatrixPosition(q.matrixWorld),tt.setFromMatrixPosition(ct.matrixWorld);let It=Y.distanceTo(tt),mt=q.projectionMatrix.elements,Dt=ct.projectionMatrix.elements,ae=mt[14]/(mt[10]-1),Q=mt[14]/(mt[10]+1),lt=(mt[9]+1)/mt[5],ht=(mt[9]-1)/mt[5],ut=(mt[8]-1)/mt[0],_t=(Dt[8]+1)/Dt[0],qt=ae*ut,Wt=ae*_t,Kt=It/(-ut+_t),te=Kt*-ut;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(te),z.translateZ(Kt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),mt[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let U=ae+Kt,xe=Q+Kt,ce=qt-te,I=Wt+(It-te),E=lt*Q/xe*U,H=ht*Q/xe*U;z.projectionMatrix.makePerspective(ce,I,E,H,U,xe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Pt(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let q=z.near,ct=z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),N.near=P.near=C.near=q,N.far=P.far=C.far=ct,(D!==N.near||B!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,B=N.far),N.layers.mask=z.layers.mask|6,C.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let It=z.parent,mt=N.cameras;Pt(N,It);for(let Dt=0;Dt<mt.length;Dt++)Pt(mt[Dt],It);mt.length===2?et(N,C,P):N.projectionMatrix.copy(C.projectionMatrix),T===null&&z.isPerspectiveCamera&&(T={camera:z,fov:z.fov,zoom:z.zoom}),$(z,N,It)};function $(z,q,ct){ct===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(ct.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=js*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(z){return u[z]};let dt=null;function ot(z,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let It=!1;ct.length!==N.cameras.length&&(N.cameras.length=0,It=!0);for(let Q=0;Q<ct.length;Q++){let lt=ct[Q],ht=null;if(f!==null)ht=f.getViewport(lt);else{let _t=p.getViewSubImage(d,lt);ht=_t.viewport,Q===0&&(t.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(x))}let ut=L[Q];ut===void 0&&(ut=new on,ut.layers.enable(Q),ut.viewport=new Ue,L[Q]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),Q===0&&(N.matrix.copy(ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),It===!0&&N.cameras.push(ut)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let Q=p.getDepthInformation(ct[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,s.renderState)}if(mt&&mt.includes("camera-access")&&y){t.state.unbindTexture(),p=n.getBinding();for(let Q=0;Q<ct.length;Q++){let lt=ct[Q].camera;if(lt){let ht=u[lt];ht||(ht=new Zr,u[lt]=ht);let ut=p.getCameraImage(lt);ht.sourceTexture=ut}}}}for(let ct=0;ct<S.length;ct++){let It=M[ct],mt=S[ct];It!==null&&mt!==void 0&&mt.update(It,q,c||o)}dt&&dt(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let ft=new Mf;ft.setAnimationLoop(ot),this.setAnimationLoop=function(z){dt=z},this.dispose=function(){}}},zy=new Bt,Af=new Qt;Af.set(-1,0,0,0,1,0,0,0,1);function ky(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Eh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,b,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&f(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===We&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===We&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),b=_.envMap,x=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Af),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=b*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let M=S.program;n.uniformBlockBinding(x,M)}function c(x,S){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",_));let w=S.program;n.updateUBOMapping(x,w);let v=t.render.frame;r[x.id]!==v&&(d(x),r[x.id]=v)}function h(x){let S=p();x.__bindingPointIndex=S;let M=i.createBuffer(),w=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let S=s[x.id],M=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,T=M.length;v<T;v++){let C=M[v];if(Array.isArray(C))for(let P=0,L=C.length;P<L;P++)f(C[P],v,P,w);else f(C,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,M,w){if(y(x,S,M,w)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let C=0;for(let P=0;P<T.length;P++){let L=T[P],N=u(L);g(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,S,M){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,M)}function y(x,S,M,w){let v=x.value,T=S+"_"+M;if(w[T]===void 0)return typeof v=="number"||typeof v=="boolean"?w[T]=v:ArrayBuffer.isView(v)?w[T]=v.slice():w[T]=v.clone(),!0;{let C=w[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(x){let S=x.uniforms,M=0,w=16;for(let T=0,C=S.length;T<C;T++){let P=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,N=P.length;L<N;L++){let D=P[L],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,k=B.length;X<k;X++){let st=B[X],Y=u(st),tt=M%w,et=tt%Y.boundary,Pt=tt+et;M+=et,Pt!==0&&w-Pt<Y.storage&&(M+=w-Pt),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Y.storage}}}let v=M%w;return v>0&&(M+=w-v),x.__size=M,x.__cache={},this}function u(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",x),S}function _(x){let S=x.target;S.removeEventListener("dispose",_);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}var Gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function Wy(){return vi===null&&(vi=new qr(Gy,16,16,rs,ri),vi.name="DFG_LUT",vi.minFilter=an,vi.magFilter=an,vi.wrapS=mi,vi.wrapT=mi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Pl=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([qa,Xa,Wa]),u=new Set([En,si,dr,fr,ka,Va]),_=new Uint32Array(4),b=new Int32Array(4),x=new R,S=null,M=null,w=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,L=null,N=null,D=null,B=null;this._outputColorSpace=Fe;let X=0,k=0,st=null,Y=-1,tt=null,et=new Ue,Pt=new Ue,$=null,dt=new re(0),ot=0,ft=e.width,z=e.height,q=1,ct=null,It=null,mt=new Ue(0,0,ft,z),Dt=new Ue(0,0,ft,z),ae=!1,Q=new ir,lt=!1,ht=!1,ut=new Bt,_t=new R,qt=new Ue,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function te(){return st===null?q:1}let U=n;function xe(A,F){return e.getContext(A,F)}let ce,I,E,H,W,K,pt,gt,J,it,vt,zt,Et,Mt,kt,Yt,ee,O,St,nt,bt,At,at;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Zn,!1),U===null){let F="webgl2";if(U=xe(F,A),U===null)throw xe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(A){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Zn,!1),$t("WebGLRenderer: "+A.message),A}function Vt(){ce=new Jx(U),ce.init(),bt=new Oy(U,ce),I=new kx(U,ce,t,bt),E=new Uy(U,ce),I.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),N=U.createFramebuffer(),D=U.createFramebuffer(),B=U.createFramebuffer(),H=new t_(U),W=new My,K=new Fy(U,ce,E,W,I,bt,H),pt=new Kx(C),gt=new n0(U),At=new Hx(U,gt),J=new jx(U,gt,H,At),it=new n_(U,J,gt,At,H),O=new e_(U,I,K),kt=new Vx(W),vt=new vy(C,pt,ce,I,At,kt),zt=new ky(C,W),Et=new by,Mt=new Cy(ce),ee=new Bx(C,pt,E,it,g,l),Yt=new Ny(C,it,I),at=new Vy(U,H,I,E),St=new zx(U,ce,H),nt=new Qx(U,ce,H),H.programs=vt.programs,C.capabilities=I,C.extensions=ce,C.properties=W,C.renderLists=Et,C.shadowMap=Yt,C.state=E,C.info=H}y!==En&&(T=new s_(y,e.width,e.height,a,s,r));let Ot=new Vh(C,U);this.xr=Ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(ft,z,!1))},this.getSize=function(A){return A.set(ft,z)},this.setSize=function(A,F,Z=!0){if(Ot.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=A,z=F,e.width=Math.floor(A*q),e.height=Math.floor(F*q),Z===!0&&(e.style.width=A+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(ft*q,z*q).floor()},this.setDrawingBufferSize=function(A,F,Z){ft=A,z=F,q=Z,e.width=Math.floor(A*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(y===En){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(mt)},this.setViewport=function(A,F,Z,V){A.isVector4?mt.set(A.x,A.y,A.z,A.w):mt.set(A,F,Z,V),E.viewport(et.copy(mt).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,F,Z,V){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,F,Z,V),E.scissor(Pt.copy(Dt).multiplyScalar(q).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){E.setScissorTest(ae=A)},this.setOpaqueSort=function(A){ct=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Z=!0){let V=0;if(A){let G=!1;if(st!==null){let Tt=st.texture.format;G=m.has(Tt)}if(G){let Tt=st.texture.type,Ct=u.has(Tt),wt=ee.getClearColor(),Nt=ee.getClearAlpha(),Ht=wt.r,se=wt.g,he=wt.b;Ct?(_[0]=Ht,_[1]=se,_[2]=he,_[3]=Nt,U.clearBufferuiv(U.COLOR,0,_)):(b[0]=Ht,b[1]=se,b[2]=he,b[3]=Nt,U.clearBufferiv(U.COLOR,0,b))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Zn,!1),ee.dispose(),Et.dispose(),Mt.dispose(),W.dispose(),pt.dispose(),it.dispose(),At.dispose(),at.dispose(),vt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Eu),Ot.removeEventListener("sessionend",wu),hs.stop()};function Ae(A){A.preventDefault(),Mh("WebGLRenderer: Context Lost."),P=!0}function _e(){Mh("WebGLRenderer: Context Restored."),P=!1;let A=H.autoReset,F=Yt.enabled,Z=Yt.autoUpdate,V=Yt.needsUpdate,G=Yt.type;Vt(),H.autoReset=A,Yt.enabled=F,Yt.autoUpdate=Z,Yt.needsUpdate=V,Yt.type=G}function Zn(A){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function di(A){let F=A.target;F.removeEventListener("dispose",di),yp(F)}function yp(A){vp(A),W.remove(A)}function vp(A){let F=W.get(A).programs;F!==void 0&&(F.forEach(function(Z){vt.releaseProgram(Z)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Z,V,G,Tt){F===null&&(F=Wt);let Ct=G.isMesh&&G.matrixWorld.determinantAffine()<0,wt=bp(A,F,Z,V,G);E.setMaterial(V,Ct);let Nt=Z.index,Ht=1;if(V.wireframe===!0){if(Nt=J.getWireframeAttribute(Z),Nt===void 0)return;Ht=2}let se=Z.drawRange,he=Z.attributes.position,Ut=se.start*Ht,ye=(se.start+se.count)*Ht;Tt!==null&&(Ut=Math.max(Ut,Tt.start*Ht),ye=Math.min(ye,(Tt.start+Tt.count)*Ht)),Nt!==null?(Ut=Math.max(Ut,0),ye=Math.min(ye,Nt.count)):he!=null&&(Ut=Math.max(Ut,0),ye=Math.min(ye,he.count));let Ve=ye-Ut;if(Ve<0||Ve===1/0)return;At.setup(G,V,wt,Z,Nt);let Ie,Te=St;if(Nt!==null&&(Ie=gt.get(Nt),Te=nt,Te.setIndex(Ie)),G.isMesh)V.wireframe===!0?(E.setLineWidth(V.wireframeLinewidth*te()),Te.setMode(U.LINES)):Te.setMode(U.TRIANGLES);else if(G.isLine){let hn=V.linewidth;hn===void 0&&(hn=1),E.setLineWidth(hn*te()),G.isLineSegments?Te.setMode(U.LINES):G.isLineLoop?Te.setMode(U.LINE_LOOP):Te.setMode(U.LINE_STRIP)}else G.isPoints?Te.setMode(U.POINTS):G.isSprite&&Te.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let hn=G._multiDrawStarts,Rt=G._multiDrawCounts,mn=G._multiDrawCount,me=Nt?gt.get(Nt).bytesPerElement:1,Bn=W.get(V).currentProgram.getUniforms();for(let fi=0;fi<mn;fi++)Bn.setValue(U,"_gl_DrawID",fi),Te.render(hn[fi]/me,Rt[fi])}else if(G.isInstancedMesh)Te.renderInstances(Ut,Ve,G.count);else if(Z.isInstancedBufferGeometry){let hn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Rt=Math.min(Z.instanceCount,hn);Te.renderInstances(Ut,Ve,Rt)}else Te.render(Ut,Ve)};function bu(A,F,Z,V){L!==null&&A.isNodeMaterial&&L.setObject(V,A),lt===!0&&kt.setState(A,Z,!1),A.transparent===!0&&A.side===Ce&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,Lo(A,F,V),A.side=ts,A.needsUpdate=!0,Lo(A,F,V),A.side=Ce):Lo(A,F,V)}this.compile=function(A,F,Z=null){Z===null&&(Z=A),L!==null&&L.renderStart(A,F,Z),M=Mt.get(Z),M.init(F),v.push(M),Z.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),A!==Z&&A.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),ht=this.localClippingEnabled,lt=kt.init(this.clippingPlanes,ht),lt===!0&&kt.setGlobalState(this.clippingPlanes,F),L!==null&&Yt.render(M.state.shadowsArray,Z,F);let V=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Tt=G.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){let wt=Tt[Ct];bu(wt,Z,F,G),V.add(wt)}else bu(Tt,Z,F,G),V.add(Tt)}),M=v.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(A,F,Z=null){let V=this.compile(A,F,Z);return new Promise(G=>{function Tt(){if(V.forEach(function(Ct){let Nt=W.get(Ct).currentProgram;(Nt===void 0||Nt.isReady())&&V.delete(Ct)}),V.size===0){G(A);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _c=null;function Mp(A){_c&&_c(A)}function Eu(){hs.stop()}function wu(){hs.start()}let hs=new Mf;hs.setAnimationLoop(Mp),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(A){_c=A,Ot.setAnimationLoop(A),A===null?hs.stop():hs.start()},Ot.addEventListener("sessionstart",Eu),Ot.addEventListener("sessionend",wu),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(A,F);let Z=Ot.enabled===!0&&Ot.isPresenting===!0,V=T!==null&&(st===null||Z)&&T.begin(C,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(F),F=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,F,st),M=Mt.get(A,v.length),M.init(F),M.state.textureUnits=K.getTextureUnits(),v.push(M),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(ut,jn,F.reversedDepth),ht=this.localClippingEnabled,lt=kt.init(this.clippingPlanes,ht),S=Et.get(A,w.length),S.init(),w.push(S),Ot.enabled===!0&&Ot.isPresenting===!0){let Ct=C.xr.getDepthSensingMesh();Ct!==null&&yc(Ct,F,-1/0,C.sortObjects)}yc(A,F,0,C.sortObjects),S.finish(),L!==null&&L.updateLights(M.state.lightsArray),C.sortObjects===!0&&S.sort(ct,It),Kt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Kt&&ee.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&kt.beginShadows();let G=M.state.shadowsArray;if(Yt.render(G,A,F),lt===!0&&kt.endShadows(),(V&&T.hasRenderPass())===!1){let Ct=S.opaque,wt=S.transmissive;if(M.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(wt.length>0)for(let Ht=0,se=Nt.length;Ht<se;Ht++){let he=Nt[Ht];Au(Ct,wt,A,he)}Kt&&ee.render(A);for(let Ht=0,se=Nt.length;Ht<se;Ht++){let he=Nt[Ht];Tu(S,A,he,he.viewport)}}else wt.length>0&&Au(Ct,wt,A,F),Kt&&ee.render(A),Tu(S,A,F)}st!==null&&k===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),V&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,F),At.resetDefaultState(),Y=-1,tt=null,v.pop(),v.length>0?(M=v[v.length-1],K.setTextureUnits(M.state.textureUnits),lt===!0&&kt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,L!==null&&L.renderEnd()};function yc(A,F,Z,V){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Q)){V&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);let Ct=it.update(A),wt=A.material;wt.visible&&S.push(A,Ct,wt,Z,qt.z,null,F)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Q))){let Ct=it.update(A),wt=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),qt.copy(Ct.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){let Nt=Ct.groups;for(let Ht=0,se=Nt.length;Ht<se;Ht++){let he=Nt[Ht],Ut=wt[he.materialIndex];Ut&&Ut.visible&&S.push(A,Ct,Ut,Z,qt.z,he,F)}}else wt.visible&&S.push(A,Ct,wt,Z,qt.z,null,F)}}let Tt=A.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)yc(Tt[Ct],F,Z,V)}function Tu(A,F,Z,V){let{opaque:G,transmissive:Tt,transparent:Ct}=A;M.setupLightsView(Z),lt===!0&&kt.setGlobalState(C.clippingPlanes,Z),V&&E.viewport(et.copy(V)),G.length>0&&Io(G,F,Z),Tt.length>0&&Io(Tt,F,Z),Ct.length>0&&Io(Ct,F,Z),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Au(A,F,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let Ut=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new Sn(1,1,{generateMipmaps:!0,type:Ut?ri:En,minFilter:is,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Tt=M.state.transmissionRenderTarget[V.id],Ct=V.viewport||et;Tt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);let wt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Ht=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(dt),ot=C.getClearAlpha(),ot<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&ee.render(Z);let se=C.toneMapping;C.toneMapping=ii;let he=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),lt===!0&&kt.setGlobalState(C.clippingPlanes,V),Io(A,Z,V),K.updateMultisampleRenderTarget(Tt),K.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ye=0,Ve=F.length;ye<Ve;ye++){let Ie=F[ye],{object:Te,geometry:hn,material:Rt,group:mn}=Ie;if(Rt.side===Ce&&Te.layers.test(V.layers)){let me=Rt.side;Rt.side=We,Rt.needsUpdate=!0,Ru(Te,Z,V,hn,Rt,mn),Rt.side=me,Rt.needsUpdate=!0,Ut=!0}}Ut===!0&&(K.updateMultisampleRenderTarget(Tt),K.updateRenderTargetMipmap(Tt))}C.setRenderTarget(wt,Nt,Ht),C.setClearColor(dt,ot),he!==void 0&&(V.viewport=he),C.toneMapping=se}function Io(A,F,Z){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Tt=A.length;G<Tt;G++){let Ct=A[G],{object:wt,geometry:Nt,group:Ht}=Ct,se=Ct.material;se.allowOverride===!0&&V!==null&&(se=V),wt.layers.test(Z.layers)&&Ru(wt,F,Z,Nt,se,Ht)}}function Ru(A,F,Z,V,G,Tt){L!==null&&G.isNodeMaterial&&L.setObject(A,G),A.onBeforeRender(C,F,Z,V,G,Tt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,F,Z,V,A,Tt),G.transparent===!0&&G.side===Ce&&G.forceSinglePass===!1?(G.side=We,G.needsUpdate=!0,C.renderBufferDirect(Z,F,V,G,A,Tt),G.side=ts,G.needsUpdate=!0,C.renderBufferDirect(Z,F,V,G,A,Tt),G.side=Ce):C.renderBufferDirect(Z,F,V,G,A,Tt),A.onAfterRender(C,F,Z,V,G,Tt)}function Lo(A,F,Z){F.isScene!==!0&&(F=Wt);let V=W.get(A),G=M.state.lights,Tt=M.state.shadowsArray,Ct=G.state.version,wt=vt.getParameters(A,G.state,Tt,F,Z,M.state.lightProbeGridArray),Nt=vt.getProgramCacheKey(wt),Ht=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=pt.get(A.envMap||V.environment,se),V.envMapRotation=V.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",di),Ht=new Map,V.programs=Ht);let he=Ht.get(Nt);if(he!==void 0){if(V.currentProgram===he&&V.lightsStateVersion===Ct)return Pu(A,wt),he}else wt.uniforms=vt.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Z,wt),A.onBeforeCompile(wt,C),he=vt.acquireProgram(wt,Nt),Ht.set(Nt,he),V.uniforms=wt.uniforms;let Ut=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=kt.uniform),Pu(A,wt),V.needsLights=wp(A),V.lightsStateVersion=Ct,V.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.sunLights.value=G.state.sun,Ut.sunLightShadows.value=G.state.sunShadow,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.sunShadowMatrix.value=G.state.sunShadowMatrix,Ut.sunShadowCascade.value=G.state.sunShadowCascade,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=he,V.uniformsList=null,he}function Cu(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=gr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Pu(A,F){let Z=W.get(A);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Sp(A,F){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let Z=0,V=A.length;Z<V;Z++){let G=A[Z];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function bp(A,F,Z,V,G){F.isScene!==!0&&(F=Wt),K.resetTextureUnits();let Tt=F.fog,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,wt=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ue.workingColorSpace,Nt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ht=pt.get(V.envMap||Ct,Nt),se=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,he=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!Z.morphAttributes.position,ye=!!Z.morphAttributes.normal,Ve=!!Z.morphAttributes.color,Ie=ii;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ie=C.toneMapping);let Te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,hn=Te!==void 0?Te.length:0,Rt=W.get(V),mn=M.state.lights;if(lt===!0&&(ht===!0||A!==tt)){let Re=A===tt&&V.id===Y;kt.setState(V,A,Re)}let me=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==mn.state.version||Rt.outputColorSpace!==wt||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==Ht||V.fog===!0&&Rt.fog!==Tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==kt.numPlanes||Rt.numIntersection!==kt.numIntersection)||Rt.vertexAlphas!==se||Rt.vertexTangents!==he||Rt.morphTargets!==Ut||Rt.morphNormals!==ye||Rt.morphColors!==Ve||Rt.toneMapping!==Ie||Rt.morphTargetsCount!==hn||!!Rt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Rt.__version=V.version);let Bn=Rt.currentProgram;me===!0&&(Bn=Lo(V,F,G),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Bn,Rt));let fi=!1,Oi=!1,Is=!1,Ee=Bn.getUniforms(),He=Rt.uniforms;if(E.useProgram(Bn.program)&&(fi=!0,Oi=!0,Is=!0),V.id!==Y&&(Y=V.id,Oi=!0),Rt.needsLights){let Re=Sp(M.state.lightProbeGridArray,G);Rt.lightProbeGrid!==Re&&(Rt.lightProbeGrid=Re,Oi=!0)}if(fi||tt!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ee.setValue(U,"projectionMatrix",A.projectionMatrix),Ee.setValue(U,"viewMatrix",A.matrixWorldInverse);let Hi=Ee.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,_t.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),tt!==A&&(tt=A,Oi=!0,Is=!0)}if(Rt.needsLights&&(mn.state.sunShadowMap.length>0&&Ee.setValue(U,"sunShadowMap",mn.state.sunShadowMap,K),mn.state.directionalShadowMap.length>0&&Ee.setValue(U,"directionalShadowMap",mn.state.directionalShadowMap,K),mn.state.spotShadowMap.length>0&&Ee.setValue(U,"spotShadowMap",mn.state.spotShadowMap,K),mn.state.pointShadowMap.length>0&&Ee.setValue(U,"pointShadowMap",mn.state.pointShadowMap,K)),G.isSkinnedMesh){Ee.setOptional(U,G,"bindMatrix"),Ee.setOptional(U,G,"bindMatrixInverse");let Re=G.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ee.setValue(U,"boneTexture",Re.boneTexture,K))}G.isBatchedMesh&&(Ee.setOptional(U,G,"batchingTexture"),Ee.setValue(U,"batchingTexture",G._matricesTexture,K),Ee.setOptional(U,G,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",G._indirectTexture,K),Ee.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",G._colorsTexture,K));let Bi=Z.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&O.update(G,Z,Bn),(Oi||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,Ee.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(He.envMapIntensity.value=F.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=Wy()),Oi){if(Ee.setValue(U,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&Ep(He,Is),Tt&&V.fog===!0&&zt.refreshFogUniforms(He,Tt),zt.refreshMaterialUniforms(He,V,q,z,M.state.transmissionRenderTarget[A.id]),Rt.needsLights&&Rt.lightProbeGrid){let Re=Rt.lightProbeGrid;He.probesSH.value=Re.texture,He.probesMin.value.copy(Re.boundingBox.min),He.probesMax.value.copy(Re.boundingBox.max),He.probesResolution.value.copy(Re.resolution)}gr.upload(U,Cu(Rt),He,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gr.upload(U,Cu(Rt),He,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(U,"center",G.center),Ee.setValue(U,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(U,"normalMatrix",G.normalMatrix),Ee.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Re=V.uniformsGroups;for(let Hi=0,Ls=Re.length;Hi<Ls;Hi++){let Lu=Re[Hi];at.update(Lu,Bn),at.bind(Lu,Bn)}}return Bn}function Ep(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function wp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,F,Z){let V=W.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=F,W.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let Z=W.get(A);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Z=0){st=A,X=F,k=Z;let V=null,G=!1,Tt=!1;if(A){let wt=W.get(A);if(wt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(U.FRAMEBUFFER,wt.__webglFramebuffer),et.copy(A.viewport),Pt.copy(A.scissor),$=A.scissorTest,E.viewport(et),E.scissor(Pt),E.setScissorTest($),Y=-1;return}else if(wt.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(wt.__hasExternalTextures)K.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let se=A.depthTexture;if(wt.__boundDepthTexture!==se){if(se!==null&&W.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Tt=!0);let Ht=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?V=Ht[F][Z]:V=Ht[F],G=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?V=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[Z]:V=Ht,et.copy(A.viewport),Pt.copy(A.scissor),$=A.scissorTest}else et.copy(mt).multiplyScalar(q).floor(),Pt.copy(Dt).multiplyScalar(q).floor(),$=ae;if(Z!==0&&(V=N),E.bindFramebuffer(U.FRAMEBUFFER,V)&&E.drawBuffers(A,V),E.viewport(et),E.scissor(Pt),E.setScissorTest($),G){let wt=W.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,Z)}else if(Tt){let wt=F;for(let Nt=0;Nt<A.textures.length;Nt++){let Ht=W.get(A.textures[Nt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Nt,Ht.__webglTexture,Z,wt)}}else if(A!==null&&Z!==0){let wt=W.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,Z)}Y=-1};function Iu(A){let F=W.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=I.textureFormatReadable(A.format),F.__typeReadable=I.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,Z,V,G,Tt,Ct,wt=0){if(!(A&&A.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt){E.bindFramebuffer(U.FRAMEBUFFER,Nt);try{let Ht=A.textures[wt],se=Ht.format,he=Ht.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);let Ut=Iu(Ht);if(Ut.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-V&&Z>=0&&Z<=A.height-G&&U.readPixels(F,Z,V,G,bt.convert(se),bt.convert(he),Tt)}finally{let Ht=st!==null?W.get(st).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,F,Z,V,G,Tt,Ct,wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt)if(F>=0&&F<=A.width-V&&Z>=0&&Z<=A.height-G){E.bindFramebuffer(U.FRAMEBUFFER,Nt);let Ht=A.textures[wt],se=Ht.format,he=Ht.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);let Ut=Iu(Ht);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,Tt.byteLength,U.STREAM_READ),U.readPixels(F,Z,V,G,bt.convert(se),bt.convert(he),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ve=st!==null?W.get(st).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,Ve);let Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wd(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Tt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ye),U.deleteSync(Ie),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Z=0){let V=Math.pow(2,-Z),G=Math.floor(A.image.width*V),Tt=Math.floor(A.image.height*V),Ct=F!==null?F.x:0,wt=F!==null?F.y:0;K.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Ct,wt,G,Tt),E.unbindTexture()},this.copyTextureToTexture=function(A,F,Z=null,V=null,G=0,Tt=0){let Ct,wt,Nt,Ht,se,he,Ut,ye,Ve,Ie=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(Z!==null)Ct=Z.max.x-Z.min.x,wt=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,Ht=Z.min.x,se=Z.min.y,he=Z.isBox3?Z.min.z:0;else{let He=Math.pow(2,-G);Ct=Math.floor(Ie.width*He),wt=Math.floor(Ie.height*He),A.isDataArrayTexture?Nt=Ie.depth:A.isData3DTexture?Nt=Math.floor(Ie.depth*He):Nt=1,Ht=0,se=0,he=0}V!==null?(Ut=V.x,ye=V.y,Ve=V.z):(Ut=0,ye=0,Ve=0);let Te=bt.convert(F.format),hn=bt.convert(F.type),Rt;F.isData3DTexture?(K.setTexture3D(F,0),Rt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),Rt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),Rt=U.TEXTURE_2D),E.activeTexture(U.TEXTURE0),E.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let mn=E.getParameter(U.UNPACK_ROW_LENGTH),me=E.getParameter(U.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(U.UNPACK_SKIP_PIXELS),fi=E.getParameter(U.UNPACK_SKIP_ROWS),Oi=E.getParameter(U.UNPACK_SKIP_IMAGES);E.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),E.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),E.pixelStorei(U.UNPACK_SKIP_ROWS,se),E.pixelStorei(U.UNPACK_SKIP_IMAGES,he);let Is=A.isDataArrayTexture||A.isData3DTexture,Ee=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let He=W.get(A),Bi=W.get(F),Re=W.get(He.__renderTarget),Hi=W.get(Bi.__renderTarget);E.bindFramebuffer(U.READ_FRAMEBUFFER,Re.__webglFramebuffer),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ls=0;Ls<Nt;Ls++)Is&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(A).__webglTexture,G,he+Ls),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Tt,Ve+Ls)),U.blitFramebuffer(Ht,se,Ct,wt,Ut,ye,Ct,wt,U.DEPTH_BUFFER_BIT,U.NEAREST);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||W.has(A)){let He=W.get(A),Bi=W.get(F);E.bindFramebuffer(U.READ_FRAMEBUFFER,D),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Re=0;Re<Nt;Re++)Is?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,G,he+Re):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,G),Ee?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bi.__webglTexture,Tt,Ve+Re):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bi.__webglTexture,Tt),G!==0?U.blitFramebuffer(Ht,se,Ct,wt,Ut,ye,Ct,wt,U.COLOR_BUFFER_BIT,U.NEAREST):Ee?U.copyTexSubImage3D(Rt,Tt,Ut,ye,Ve+Re,Ht,se,Ct,wt):U.copyTexSubImage2D(Rt,Tt,Ut,ye,Ht,se,Ct,wt);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ee?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Rt,Tt,Ut,ye,Ve,Ct,wt,Nt,Te,hn,Ie.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,Tt,Ut,ye,Ve,Ct,wt,Nt,Te,Ie.data):U.texSubImage3D(Rt,Tt,Ut,ye,Ve,Ct,wt,Nt,Te,hn,Ie):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Tt,Ut,ye,Ct,wt,Te,hn,Ie.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Tt,Ut,ye,Ie.width,Ie.height,Te,Ie.data):U.texSubImage2D(U.TEXTURE_2D,Tt,Ut,ye,Ct,wt,Te,hn,Ie);E.pixelStorei(U.UNPACK_ROW_LENGTH,mn),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me),E.pixelStorei(U.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(U.UNPACK_SKIP_ROWS,fi),E.pixelStorei(U.UNPACK_SKIP_IMAGES,Oi),Tt===0&&F.generateMipmaps&&U.generateMipmap(Rt),E.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){X=0,k=0,st=null,E.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Rf={type:"change"},Wh={type:"start"},Pf={type:"end"},Dl=new nr,Cf=new In,Xy=Math.cos(70*fn.DEG2RAD),Je=new R,wn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gh=1e-6,Nl=class extends ho{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new ze,this._lastTargetPosition=new R,this._quat=new ze().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new R,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new R,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yy.bind(this),this._onPointerDown=qy.bind(this),this._onPointerUp=Zy.bind(this),this._onContextMenu=ev.bind(this),this._onMouseWheel=Jy.bind(this),this._onKeyDown=jy.bind(this),this._onTouchStart=Qy.bind(this),this._onTouchMove=tv.bind(this),this._onMouseDown=$y.bind(this),this._onMouseMove=Ky.bind(this),this._interceptControlDown=nv.bind(this),this._interceptControlUp=iv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rf),this.update(),this.state=Se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=wn:n>Math.PI&&(n-=wn),s<-Math.PI?s+=wn:s>Math.PI&&(s-=wn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Je.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dl.origin.copy(this.object.position),Dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dl.direction))<Xy?this.object.lookAt(this.target):(Cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dl.intersectPlane(Cf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gh||this._lastTargetPosition.distanceToSquared(this.target)>Gh?(this.dispatchEvent(Rf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){this.screenSpacePanning===!0?Je.setFromMatrixColumn(e,1):(Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je)),Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Je.copy(s).sub(this.target);let r=Je.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function qy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Zy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pf),this.state=Se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $y(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Se.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Wh)}function Ky(i){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jy(i){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(i.preventDefault(),this.dispatchEvent(Wh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pf))}function jy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Se.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Se.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Wh)}function tv(i){switch(this._trackPointer(i),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Se.NONE}}function ev(i){this.enabled!==!1&&i.preventDefault()}function nv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var yr=class i extends j{constructor(){let t=i.SkyShader,e=new sn({name:t.name,uniforms:Es.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:We,depthWrite:!1});super(new de(1,1,1),e),this.isSky=!0}};yr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var To=i=>Math.min(1,Math.max(0,i)),pe=(i,t,e)=>i+(t-i)*e,As=(i,t,e)=>{let n=To((e-i)/(t-i));return n*n*(3-2*n)};var le={hold:-5.75,orlop:-1.15,lower:1,middle:3.1,upper:5.2,qd:7.25,poop:9.15},rn=1.2,Xe=15.6,oi=-13.4;function Xn(i){let t=(i-2)/28;return .85*t*t}function xt(i,t){return le[i]+Xn(t)}function we(i){let t=8.65+Xn(i);return t+=1.9*As(oi+1,oi-1,i),t+=.9*As(-25,-29.5,i),t}function cn(i){if(i<2){let t=To((i- -7.4)/9.4);return 24.75+4.3*(1-(1-t)*(1-t))}return 29.05+.06*(i-2)}var Ts=1.6;function Be(i){if(i<Ts){let t=To((i- -7.4)/(Ts- -7.4));return pe(-25.75,-27.65,t)}return-27.65-1.1*As(Ts,4.5,i)-.11*Math.max(0,i-4.5)}function Ul(i){if(i<=-7.4)return 0;if(i<1.6){let e=(1.6-i)/9;return 7.9*Math.pow(1-Math.pow(e,2.4),1/2.4)}let t=(i-1.6)/(13-1.6);return 7.9*(1-.17*Math.pow(t,1.6))}function Xh(i){return .8*As(-2.4,2.4,i)}function qh(i,t){let e=As(-6.5,1.5,t),n=pe(.58,.73,e);if(i>n){let r=To((i-n)/(1-n)),o=pe(1.7,2.2,e),a=pe(1.05,.46,e);return Math.pow(Math.max(0,1-Math.pow(r,o)),a)}let s=pe(.44,.24,e);if(i<s){let r=To((s-i)/s),o=pe(1.6,2,e),a=pe(1.15,.65,e),l=Xh(t);return l+(1-l)*Math.pow(Math.max(0,1-Math.pow(r,o)),a)}return 1}function Lt(i,t){let e=Be(t),n=cn(t);return i<e||i>n?0:Ul(t)*qh((i-e)/(n-e),t)}var vn=-31,Di=31,Si=-10,ai=14,If=i=>(i-vn)/(Di-vn),Lf=(i,t)=>(t-Xn(i)-Si)/(ai-Si),vr=[{name:"lower",deck:"lower",count:15,x0:-20.4,dx:3,cy:.82,w:1.05,h:.95,lid:!0,bore:.165,len:3},{name:"middle",deck:"middle",count:14,x0:-21,dx:3.05,cy:.78,w:.95,h:.86,lid:!0,bore:.15,len:2.9},{name:"upper",deck:"upper",count:15,x0:-21,dx:3.05,cy:.74,w:.85,h:.8,lid:!0,bore:.12,len:2.6},{name:"qd",deck:"qd",count:6,x0:-20.4,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"fc",deck:"qd",count:1,x0:18.6,dx:3,cy:.68,w:.75,h:.7,lid:!1,bore:.12,len:2.2},{name:"carronade",deck:"qd",count:1,x0:21.4,dx:3,cy:.66,w:.85,h:.75,lid:!1,bore:.2,len:1.6,carronade:!0}];function Rs(){let i=[];for(let t of vr)for(let e=0;e<t.count;e++){let n=t.x0+e*t.dx;i.push({tier:t,x:n,y:le[t.deck]+t.cy+Xn(n)})}return i}var bi=[{name:"after hatch",x:-8.4,w:2.2,d:2},{name:"main hatch",x:1.8,w:2.6,d:2.4},{name:"main ladderway",x:6,w:2.4,d:2.4,ladder:!0},{name:"fore ladderway",x:10.2,w:3,d:2.6,ladder:!0},{name:"fore hatch",x:13.6,w:1.8,d:1.8},{name:"forward hatch",x:18.2,w:2.2,d:2},{name:"after ladderway",x:-12.2,w:2,d:1.6,ladder:!0}],Yh=vr.slice(0,3).map(i=>{let t=le[i.deck]+i.cy;return[t-i.h/2-.2,t+i.h/2+.2]}),Fl=.45,Ao={fore:{x:22.75,scale:.9,rake:0},main:{x:-2.45,scale:1,rake:.035},mizzen:{x:-19.15,scale:.72,rake:.052}},Df={main:{course:31.19,topsail:22.25,topgallant:14.86,royal:10.97},fore:{course:27.15,topsail:19.66,topgallant:13.11,royal:9.75},mizzen:{course:19.66,topsail:14.94,topgallant:9.98,royal:7.32}},Nf=-.0068;function Tn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function qn(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function An(i,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let s=new _n(i);return t&&(s.colorSpace=Fe),e&&(s.wrapS=s.wrapT=Ln),s.anisotropy=n,s.needsUpdate=!0,s}var Pe={black:"#2a2d30",ochre:"#cfa65a",red:"#a88a52",deck:"#b49c76",canvas:"#e8dfc8",copper:"#a8603a",gold:"#d4a640"};function Ff(){let e=Tn(4096,1024),n=e.getContext("2d"),s=Tn(1024,256),r=s.getContext("2d"),o=4096/(Di-vn),a=1024/(ai-Si),l=f=>(f-vn)*o,c=f=>(ai-f)*a,h=qn(7);n.fillStyle=Pe.black,n.fillRect(0,0,4096,1024),n.fillStyle=Pe.ochre;for(let[f,g]of Yh)n.fillRect(0,c(g),4096,c(f)-c(g));n.fillRect(0,c(le.qd+1.02),4096,.09*a);for(let f=Si;f<ai;f+=.22){n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(0,c(f),4096,1.2);let g=vn-h()*6;for(n.fillStyle="rgba(0,0,0,0.22)";g<Di;)n.fillRect(l(g),c(f+.22),1.2,.22*a),g+=5.5+h()*2}for(let f=0;f<26e3;f++){let g=h()*.07;n.fillStyle=h()<.5?`rgba(0,0,0,${g})`:`rgba(255,240,210,${g*.6})`,n.fillRect(h()*4096,h()*1024,1+h()*5,1+h()*2)}n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,c(Yh[0][0]),4096,.9*a);for(let f of Rs()){let g=f.tier,y=f.y-Xn(f.x),m=l(f.x-g.w/2),u=c(y+g.h/2),_=g.w*o,b=g.h*a;n.fillStyle=Pe.red,n.fillRect(m,u,_,b);let x=.09;n.fillStyle="#0c0705",n.fillRect(m+x*o,u+x*a,_-2*x*o,b-2*x*a)}n.save(),n.beginPath(),n.moveTo(0,1024);for(let f=0;f<=256;f++){let g=vn+f/256*(Di-vn);n.lineTo(l(g),c(Fl-Xn(g)))}n.lineTo(4096,1024),n.closePath(),n.clip(),n.fillStyle=Pe.copper,n.fillRect(0,0,4096,1024);let p=1.22,d=.36;for(let f=0,g=Si;g<3;g+=d,f++)for(let y=vn-f%2*p*.5;y<Di;y+=p){let m=h(),u=150+m*40,_=82+m*30+h()*25,b=48+m*22;n.fillStyle=`rgb(${u|0},${_|0},${b|0})`,n.fillRect(l(y)+1,c(g+d)+1,p*o-2,d*a-2),h()<.35&&(n.fillStyle=`rgba(70,140,110,${.15+h()*.25})`,n.fillRect(l(y)+1,c(g+d)+1,p*o-2,d*a-2))}n.restore(),r.fillStyle="rgb(0,165,0)",r.fillRect(0,0,1024,256),r.beginPath(),r.moveTo(0,256);for(let f=0;f<=128;f++){let g=vn+f/128*(Di-vn);r.lineTo((g-vn)/(Di-vn)*1024,(ai-(Fl-Xn(g)))/(ai-Si)*256)}return r.lineTo(1024,256),r.closePath(),r.fillStyle="rgb(0,105,190)",r.fill(),{map:An(e,{aniso:16}),metalRough:An(s,{srgb:!1})}}function Of(){let e=Tn(4096,1024),n=e.getContext("2d"),s=4096/(Di-vn),r=1024/(ai-Si),o=h=>(h-vn)*s,a=h=>(ai-h)*r,l=qn(13),c=(h,p,d)=>{n.fillStyle=d,n.fillRect(0,a(p),4096,a(h)-a(p))};c(Si,le.orlop,"#7a6549"),c(le.orlop,le.lower,"#d8d0bd"),c(le.lower,ai,"#c9a965");for(let h=Si;h<ai;h+=.24)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(0,a(h),4096,1.2);for(let h=0;h<2e4;h++)n.fillStyle=`rgba(0,0,0,${l()*.06})`,n.fillRect(l()*4096,l()*1024,1+l()*6,1+l()*2);for(let h of["orlop","lower","middle","upper","qd"])n.fillStyle="rgba(60,40,20,0.55)",n.fillRect(0,a(le[h]+.3),4096,.3*r),n.fillRect(0,a(le[h]-.25),4096,.25*r);for(let h of Rs()){let p=h.tier,d=h.y-Xn(h.x),f=o(h.x-p.w/2),g=a(d+p.h/2);n.fillStyle="#9c7f48",n.fillRect(f,g,p.w*s,p.h*r),n.fillStyle="#120b06",n.fillRect(f+.08*s,g+.08*r,(p.w-.16)*s,(p.h-.16)*r)}return An(e,{aniso:16})}function Bf(){let t=Tn(256,256),e=t.getContext("2d"),n=qn(29);e.fillStyle="#6d6a62",e.fillRect(0,0,256,256);for(let s=0;s<2200;s++){let r=70+n()*90;e.fillStyle=`rgb(${r|0},${r*.97|0},${r*.9|0})`,e.beginPath(),e.ellipse(n()*256,n()*256,1+n()*4,1+n()*3,n()*3,0,Math.PI*2),e.fill()}return An(t,{repeat:!0})}function Hf(){let t=Tn(1024,1024),e=t.getContext("2d"),n=qn(3),s=1024/8*.28;for(let o=0,a=0;o<1024;o+=s,a++){let l=-n()*1024*.5;for(;l<1024;){let c=128*(5+n()*3),h=n();e.fillStyle=`rgb(${168+h*26|0},${146+h*22|0},${108+h*18|0})`,e.fillRect(l,o,c,s);for(let p=0;p<14;p++)e.fillStyle=`rgba(90,60,30,${n()*.08})`,e.fillRect(l,o+n()*s,c,1);e.fillStyle="rgba(40,25,10,0.7)",e.fillRect(l,o,2,s),e.fillStyle="rgba(60,40,20,0.55)",e.fillRect(l+6,o+s*.3,3,3),e.fillRect(l+6,o+s*.65,3,3),l+=c}e.fillStyle="rgba(25,18,10,0.85)",e.fillRect(0,o,1024,2)}return An(t,{repeat:!0,aniso:16})}var Hl=-2.4,Ol=13.6;function zf(i){let n=Tn(2048,2048),s=n.getContext("2d"),r=f=>(Ol-f)/(Ol-Hl)*2048,o=Xn(-28.5);s.fillStyle=Pe.black,s.fillRect(0,0,2048,2048),s.fillStyle=Pe.copper,s.fillRect(0,r(Fl),2048,2048);let a=f=>le[f]+o;s.fillStyle=Pe.ochre,s.fillRect(0,r(a("middle")-.1),2048,.25/16*2048),s.font=`bold ${.55/16*2048}px Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=Pe.gold,s.fillText("V I C T O R Y",2048/2,r(a("middle")-.75));let l=[[a("middle")+.45,a("middle")+1.75],[a("upper")+.45,a("upper")+1.75],[a("qd")+.4,a("qd")+1.6]];for(let[f,g]of l){let y=i((f+g)/2),m=y*2,u=x=>(x/m+.5)*2048;s.fillStyle=Pe.ochre,s.fillRect(0,r(f),2048,r(f-.45)-r(f)),s.fillStyle="rgba(0,0,0,0.5)";for(let x=-y;x<y;x+=.22)s.fillRect(u(x),r(f-.08),3,r(f-.38)-r(f-.08));let _=9,b=(m-.5)/_;for(let x=0;x<_;x++){let S=-y+.25+x*b;s.fillStyle=Pe.ochre,s.fillRect(u(S),r(g+.15),.18/m*2048,r(f)-r(g+.15));let M=u(S+.22),w=u(S+b-.05);s.fillStyle="#e7dcc0",s.fillRect(M,r(g),w-M,r(f)-r(g));let v=3,T=4,C=(w-M)/v,P=(r(f)-r(g))/T;for(let L=0;L<v;L++)for(let N=0;N<T;N++){let D=30+(L*7+N*13+x*5)%9*6;s.fillStyle=`rgb(${D*.6|0},${D*.8|0},${D|0})`,s.fillRect(M+L*C+3,r(g)+N*P+3,C-6,P-6)}}s.fillStyle=Pe.ochre,s.fillRect(0,r(g+.4),2048,r(g)-r(g+.4))}let c=a("poop")+.3;s.fillStyle=Pe.ochre,s.fillRect(0,0,2048,r(c)),s.fillStyle=Pe.gold;let h=2048/2,p=r(c+1.1),d=.75/16*2048;s.beginPath(),s.moveTo(h-d,p-d),s.lineTo(h+d,p-d),s.lineTo(h+d,p+d*.3),s.quadraticCurveTo(h+d,p+d*1.3,h,p+d*1.5),s.quadraticCurveTo(h-d,p+d*1.3,h-d,p+d*.3),s.closePath(),s.fill(),s.fillStyle="#7a1b14",s.fillRect(h-d*.8,p-d*.8,d*.75,d*.9),s.fillStyle="#20306a",s.fillRect(h+d*.05,p-d*.8,d*.75,d*.9),s.strokeStyle=Pe.gold,s.lineWidth=6;for(let f=1;f<=3;f++)s.beginPath(),s.arc(h-d*(1.6+f*1.3),p,d*.6,0,Math.PI*1.6),s.stroke(),s.beginPath(),s.arc(h+d*(1.6+f*1.3),p,d*.6,Math.PI*1.4,Math.PI*3),s.stroke();return An(n,{aniso:16})}function kf(){let i=Tn(512,256),t=i.getContext("2d");t.fillStyle=Pe.ochre,t.fillRect(0,0,512,256);for(let e=0;e<4;e++){let n=16+e*128;t.fillStyle="#e7dcc0",t.fillRect(n,40,96,176);for(let s=0;s<2;s++)for(let r=0;r<3;r++)t.fillStyle="#26323e",t.fillRect(n+6+s*45,46+r*57,39,51)}return An(i,{repeat:!0})}function Bl(){let e=Tn(256,512),n=e.getContext("2d"),s=qn(11);n.fillStyle=Pe.canvas,n.fillRect(0,0,256,512);for(let r=0;r<4e3;r++)n.fillStyle=`rgba(120,100,70,${s()*.05})`,n.fillRect(s()*256,s()*512,1+s()*3,1);for(let r=0;r<3;r++){let o=r/3*256;n.fillStyle="rgba(110,90,60,0.35)",n.fillRect(o,0,3,512),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(o+3,0,2,512)}return An(e,{repeat:!0})}function Vf(){let e=Tn(256,1024),n=e.getContext("2d");n.drawImage(Bl().image,0,0,256,512),n.drawImage(Bl().image,0,512,256,512);for(let s of[.12,.24,.36]){let r=s*1024;n.fillStyle="rgba(150,130,95,0.55)",n.fillRect(0,r-7,256,14),n.fillStyle="rgba(110,90,60,0.6)",n.fillRect(0,r-8,256,2),n.fillRect(0,r+6,256,2);for(let o=10;o<256;o+=21)n.fillStyle="rgba(70,55,35,0.85)",n.fillRect(o,r-3,3,22)}return An(e,{repeat:!0})}function Uf(i,t,e,n,s){i.fillStyle="#1f2f6b",i.fillRect(t,e,n,s);let r=(o,a)=>{i.strokeStyle=a,i.lineWidth=o,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+s),i.moveTo(t+n,e),i.lineTo(t,e+s),i.stroke()};i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),r(s*.2,"#fff"),r(s*.07,"#c8202f"),i.restore(),i.fillStyle="#fff",i.fillRect(t+n/2-s*.17,e,s*.34,s),i.fillRect(t,e+s/2-s*.17,n,s*.34),i.fillStyle="#c8202f",i.fillRect(t+n/2-s*.1,e,s*.2,s),i.fillRect(t,e+s/2-s*.1,n,s*.2)}function Gf(i){let n=Tn(512,256),s=n.getContext("2d");return i==="union"?Uf(s,0,0,512,256):i==="pennant"?(s.fillStyle="#fff",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(0,0,40,256),s.fillRect(0,256/2-18,40,36)):(s.fillStyle="#f4f2ec",s.fillRect(0,0,512,256),s.fillStyle="#c8202f",s.fillRect(512/2-20,0,40,256),s.fillRect(0,256/2-20,512,40),i==="ensign"&&Uf(s,0,0,512/2-20,256/2-20)),An(n)}function Wf(){let i=Tn(256,64),t=i.getContext("2d");t.fillStyle="#d9cfb4",t.fillRect(0,0,256,64);let e=qn(5);for(let n=0;n<40;n++)t.fillStyle=`rgba(150,130,95,${.2+e()*.3})`,t.fillRect(n*6.4,0,4+e()*2,64);t.strokeStyle="rgba(40,30,20,0.6)",t.lineWidth=1.5;for(let n=-64;n<256;n+=12)t.beginPath(),t.moveTo(n,0),t.lineTo(n+64,64),t.stroke(),t.beginPath(),t.moveTo(n+64,0),t.lineTo(n,64),t.stroke();return An(i,{repeat:!0})}function Zh(){let t=Tn(128,128),e=t.getContext("2d"),n=qn(17);for(let s=0;s<18;s++){let r=64+(n()-.5)*128*.35,o=128/2+(n()-.5)*128*.35,a=128*(.18+n()*.2),l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,128,128)}return An(t)}function Xf(){let t=new Float32Array(65536),e=qn(23),n=[];for(let l=0;l<40;l++){let c=Math.round((e()-.5)*24),h=Math.round((e()-.5)*24);!c&&!h||n.push([c,h,e()*Math.PI*2,1/Math.hypot(c,h)])}for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0;for(let[p,d,f,g]of n)h+=g*Math.sin((p*c+d*l)/256*Math.PI*2+f);t[l*256+c]=h}let s=Tn(256,256),r=s.getContext("2d"),o=r.createImageData(256,256),a=2.2;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=t[l*256+(c+1)%256]-t[l*256+(c-1+256)%256],p=t[(l+1)%256*256+c]-t[(l-1+256)%256*256+c],d=-h*a,f=-p*a,g=1,y=Math.hypot(d,f,g);d/=y,f/=y,g/=y;let m=(l*256+c)*4;o.data[m]=(d*.5+.5)*255,o.data[m+1]=(f*.5+.5)*255,o.data[m+2]=(g*.5+.5)*255,o.data[m+3]=255}return r.putImageData(o,0,0),An(s,{srgb:!1,repeat:!0})}function $h(i="#9a7448"){let t=Tn(64,512),e=t.getContext("2d"),n=qn(31);e.fillStyle=i,e.fillRect(0,0,64,512);for(let s=0;s<90;s++)e.fillStyle=`rgba(60,35,15,${n()*.18})`,e.fillRect(n()*64,0,1+n()*2,512);return An(t,{repeat:!0})}var sv=9.81,qf=[[1,.35,64,.55,.5],[.75,-.65,37,.32,.55],[.25,1,19,.16,.6],[-.55,.8,11,.08,.6],[.9,-.2,7,.045,.5]],Ro=qf.map(([i,t,e,n,s])=>{let r=Math.hypot(i,t),o=2*Math.PI/e;return{dx:i/r,dz:t/r,k:o,A:n,Q:s/(o*n*qf.length),c:Math.sqrt(sv/o)}}),Cs=64,kl=-30,Yf=30,zl=[-1.2,0,1.2],Kh=zl.map(i=>Array.from({length:Cs},(t,e)=>Lt(kl+e/(Cs-1)*(Yf-kl),i))),Jh=`
uniform mat4 uShipInv; uniform float uHB0[${Cs}], uHB1[${Cs}], uHB2[${Cs}];
bool insideHull(vec3 world) {
  vec3 lp = (uShipInv * vec4(world, 1.0)).xyz;
  float fx = (lp.x - (${kl.toFixed(1)})) / ${(Yf-kl).toFixed(1)} * ${(Cs-1).toFixed(1)};
  if (fx <= 0.0 || fx >= ${(Cs-1).toFixed(1)}) return false;
  int i = int(floor(fx)); float f = fract(fx);
  float a = mix(uHB0[i], uHB0[i + 1], f), b = mix(uHB1[i], uHB1[i + 1], f), c = mix(uHB2[i], uHB2[i + 1], f);
  float t = clamp((lp.y - (${zl[0].toFixed(1)})) / ${(zl[2]-zl[0]).toFixed(1)}, 0.0, 1.0);
  float hb = t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, t * 2.0 - 1.0);
  return abs(lp.z) < hb - 0.04;
}`;function rv(){return{uShipInv:{value:new Bt},uHB0:{value:Kh[0]},uHB1:{value:Kh[1]},uHB2:{value:Kh[2]}}}var Zf=`
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
vec2 seaRot(vec2 d) { return vec2(uWaveRot.x * d.x - uWaveRot.y * d.y, uWaveRot.y * d.x + uWaveRot.x * d.y); }
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${Ro.map(i=>`  y += ${i.A.toFixed(5)} * sin(${i.k.toFixed(5)} * (dot(seaRot(vec2(${i.dx.toFixed(5)}, ${i.dz.toFixed(5)})), p) - ${i.c.toFixed(5)} * uTime));`).join(`
`)}
  return y * uWaveScale;
}`,Vl=class{constructor(t){this.time=0,this.offset=new rt,this.scale=1;let e=420,n=4e3,s=new Float32Array(e*e*3),r=new Float32Array(e*e*2),o=g=>Math.sign(g)*Math.pow(Math.abs(g),2.6)*n;for(let g=0;g<e;g++)for(let y=0;y<e;y++){let m=g*e+y,u=o(y/(e-1)*2-1),_=o(g/(e-1)*2-1);s[m*3]=u,s[m*3+1]=0,s[m*3+2]=_,r[m*2]=u/70,r[m*2+1]=_/70}let a=new Uint32Array((e-1)*(e-1)*6),l=0;for(let g=0;g<e-1;g++)for(let y=0;y<e-1;y++){let m=g*e+y,u=m+1,_=m+e,b=_+1;a[l++]=m,a[l++]=_,a[l++]=u,a[l++]=u,a[l++]=_,a[l++]=b}let c=new fe;c.setAttribute("position",new Me(s,3)),c.setAttribute("uv",new Me(r,2)),c.setAttribute("normal",new Me(new Float32Array(e*e*3).fill(0).map((g,y)=>y%3===1?1:0),3)),c.setIndex(new Me(a,1)),c.boundingSphere=new _i(new R,n*1.5);let h=Xf(),p=new ge({color:"#062a3a",roughness:.14,metalness:0,envMap:t,envMapIntensity:.4,normalMap:h,normalScale:new rt(.09,.09)});this.uniforms={uTime:{value:0},uOffset:{value:this.offset},uWaveScale:{value:1},uWaveRot:{value:new rt(1,0)},...rv()};let d=this.uniforms,f=Ro.map(g=>`wave(p, vec2(${g.dx.toFixed(5)}, ${g.dz.toFixed(5)}), ${g.k.toFixed(5)}, ${g.A.toFixed(5)} * uWaveScale, ${g.Q.toFixed(5)}, ${g.c.toFixed(5)}, disp, tx, tz);`).join(`
`);p.onBeforeCompile=g=>{Object.assign(g.uniforms,d),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
${f}
disp *= fade;
vec3 objectNormal = normalize(mix(vec3(0.0, 1.0, 0.0), cross(tz, tx), fade));
vCrest = disp.y;
#ifdef USE_TANGENT
vec3 objectTangent = vec3(tangent.xyz);
#endif`).replace("#include <begin_vertex>",`vec3 transformed = position + disp;
vSeaWorld = transformed;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying float vCrest; varying vec3 vSeaWorld;
${Jh}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (insideHull(vSeaWorld)) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
float crest = smoothstep(0.95, 1.6, vCrest);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.2, 0.24), smoothstep(-0.8, 1.4, vCrest) * 0.22);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.8, 0.8), crest * 0.18);`)},this.normalMap=h,this.mesh=new j(c,p),this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.name="sea"}update(t,e){this.time=t,this.uniforms.uTime.value=t,this.offset.set(e,0),this.normalMap.offset.set((e/70+t*.004)%1,t*.003%1)}setScale(t){this.scale=t,this.uniforms.uWaveScale.value=t}setDirection(t){let e=Math.atan2(Ro[0].dz,Ro[0].dx);this.rot=t-e,this.uniforms.uWaveRot.value.set(Math.cos(this.rot),Math.sin(this.rot))}heightAt(t,e){let n=t+this.offset.x,s=e+this.offset.y,r=this.time,o=Math.cos(this.rot||0),a=Math.sin(this.rot||0),l=0;for(let c of Ro){let h=o*c.dx-a*c.dz,p=a*c.dx+o*c.dz;l+=c.A*this.scale*Math.sin(c.k*(h*n+p*s-c.c*r))}return l}};function Gl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new fe,c=0;for(let h=0;h<i.length;++h){let p=i[h],d=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(t){let f;if(e)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,p=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(p)}for(let h in r){let p=$f(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<p;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let g=$f(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function $f(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Me(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);a.setComponent(d+p,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Rn(i,t,e,n,s=!1){let r=new Float32Array(i*t*3),o=new Float32Array(i*t*2);for(let c=0;c<t;c++)for(let h=0;h<i;h++){let p=c*i+h,d=e(h,c);r[p*3]=d[0],r[p*3+1]=d[1],r[p*3+2]=d[2];let f=n?n(h,c,d):[h/(i-1),c/(t-1)];o[p*2]=f[0],o[p*2+1]=f[1]}let a=[];for(let c=0;c<t-1;c++)for(let h=0;h<i-1;h++){let p=c*i+h,d=p+1,f=p+i,g=f+1;s?a.push(p,g,d,p,f,g):a.push(p,d,g,p,g,f)}let l=new fe;return l.setAttribute("position",new Me(r,3)),l.setAttribute("uv",new Me(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function Wl(i,t,e,n,s=!1){let r=Rn(i,t,e,n,s),o=Rn(i,t,(a,l)=>{let c=e(a,l);return[c[0],c[1],-c[2]]},n,!s);return Gl([r,o])}var Kf=new R(0,1,0);function qe(i,t,e,n,s=Kf){let r=new R().subVectors(t,i),o=r.length(),a=new de(o,n,e),l=r.clone().normalize(),c=new R().crossVectors(l,s);c.lengthSq()<1e-6&&c.set(0,0,1),c.normalize();let h=new R().crossVectors(c,l),p=new Bt().makeBasis(l,h,c);return p.setPosition(i.clone().add(t).multiplyScalar(.5)),a.applyMatrix4(p),a}function be(i,t,e,n=e,s=10){let r=new R().subVectors(t,i),o=r.length(),a=new ne(n,e,o,s,1),l=new ze().setFromUnitVectors(Kf,r.clone().normalize());return a.applyQuaternion(l),a.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),a}function jh(i,t,e,n=.28,s=.14){let r=[],o=c=>c.clone().add(new R(0,e,0));r.push(qe(o(i),o(t),s,.09));let a=i.distanceTo(t),l=Math.max(1,Math.round(a/n));for(let c=0;c<=l;c++){let h=i.clone().lerp(t,c/l),p=new ne(.035,.05,e,6);p.translate(h.x,h.y+e/2,h.z),r.push(p)}return Gl(r.map(c=>c.index?c.toNonIndexed():c))}function Ft(i){let t=i.map(e=>e.index?e.toNonIndexed():e);for(let e of t)e.attributes.uv||e.setAttribute("uv",new Me(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals();return Gl(t)}var Xl=null;function De(){if(Xl)return Xl;let i=(s,r=.7,o=0,a={})=>new ge({color:s,roughness:r,metalness:o,...a}),t=Hf(),e=$h("#b08a58"),n=$h("#5a4630");return Xl={black:i(Pe.black,.6),ochre:i(Pe.ochre,.6),red:i(Pe.red,.75),inside:i("#c9a965",.75),carriage:i("#b99a5c",.7),gold:i(Pe.gold,.35,.8),iron:i("#26282a",.55,.6),brass:i("#b58d3e",.3,.9),copper:i(Pe.copper,.45,.8),deck:i("#ffffff",.85,0,{map:t}),mast:i("#ffffff",.7,0,{map:e}),spar:i("#2a2c2e",.65),darkWood:i("#ffffff",.75,0,{map:n}),rope:i("#3b2f22",.9),ropeLight:i("#8a7556",.9),canvas:i("#ffffff",.92,0,{map:Bl(),side:Ce}),canvasReef:i("#ffffff",.92,0,{map:Vf(),side:Ce}),furl:i("#dcd2b8",.95),hammock:i("#ffffff",.95,0,{map:Wf()}),glass:i("#2b3a48",.15,.4,{emissive:"#000000"}),lantern:i("#ffd27a",.3,0,{emissive:"#ffb347",emissiveIntensity:0}),white:i("#eeeeee",.6)},Xl}var Co=220,Mr=120,Yn=.32;function ov(i){return .45*i+.55*(.5-.5*Math.cos(Math.PI*i))}function av(i,t){let e=ov(i),n=-7.4,s=0;for(let r=0;r<5;r++)s=Be(n)+e*(cn(n)-Be(n)),n=-7.4+t*(we(s)- -7.4);return[s,n,Ul(n)*qh(e,n)]}function lv(i){return i<oi?xt("poop",i):xt("qd",i)}function cv(i){return i>rn+.2&&i<Xe-.2?xt("upper",i):lv(i)}function Jf(){let i=De(),t=new jt;t.name="hull";let e=Ff(),n=new ge({map:e.map,roughnessMap:e.metalRough,metalnessMap:e.metalRough,roughness:1,metalness:1}),s=[];for(let $=0;$<Mr;$++)for(let dt=0;dt<Co;dt++)s.push(av(dt/(Co-1),$/(Mr-1)));let r=($,dt)=>s[dt*Co+$],o=Wl(Co,Mr,r,($,dt,ot)=>[If(ot[0]),Lf(ot[0],ot[1])]),a=new j(o,n);a.castShadow=a.receiveShadow=!0,a.name="planking",t.add(a);let l=new j(o,new ge({map:Of(),roughness:.85,side:We}));l.name="innerPlanking",l.receiveShadow=!0,t.add(l);let c=[];for(let $=0;$<Mr;$++){let dt=r(0,$);(dt[2]>.01||$+1<Mr&&r(0,$+1)[2]>.01)&&c.push(dt)}let h=48,p=$=>Ul($)*Xh($),d=new ge({map:zf(p),roughness:.6}),f=Rn(h,c.length,($,dt)=>{let[ot,ft,z]=c[dt],q=pe(-z,z,$/(h-1)),ct=.45*As(1,3,ft)*(1-(z>0?(q/z)**2:1));return[ot-ct,ft,q]},($,dt)=>[$/(h-1),(c[dt][1]-Hl)/(Ol-Hl)]),g=new j(f,d);g.castShadow=g.receiveShadow=!0,g.name="stern",t.add(g);let y=new j(f,new ge({map:d.map,roughness:.7,side:We,color:"#d8cdb4"}));y.name="innerPlanking",t.add(y);let m=[];for(let $=0;$<Co;$++){let dt=r($,Mr-1);dt[2]-Yn>.06&&m.push(dt)}let u=10,_=Wl(m.length,u,($,dt)=>{let ot=m[$][0],ft=m[$][1],z=pe(cv(ot)-.05,ft,dt/(u-1));return[ot,z,Math.max(.05,Lt(ot,z)-Yn)]},($,dt)=>[m[$][0]/4,dt/(u-1)],!0),b=new j(_,i.inside.clone());b.name="bulwark",b.receiveShadow=!0,t.add(b);let x=Wl(m.length,2,($,dt)=>{let[ot,ft,z]=m[$];return dt===0?[ot,ft+.01,z+.04]:[ot,ft+.01,Math.max(.05,Lt(ot,ft)-Yn-.03)]});t.add(new j(x,i.black));let S=m[0][0],M=xt("poop",S),w=m[0][1],v=Rn(12,4,($,dt)=>{let ot=pe(M,w,dt/3),ft=Math.max(.1,Lt(S+.4,ot)-Yn);return[Be(ot)+.35,ot,pe(-ft,ft,$/11)]},null,!0);t.add(new j(v,i.inside));let T=[],C=($,dt,ot,ft,z=.12)=>{let q=Math.max(4,Math.round((ot-dt)/.8)),ct=10;T.push(Rn(q,ct,(It,mt)=>{let Dt=pe(dt,ot,It/(q-1)),ae=xt($,Dt),Q=Math.max(.05,Lt(Dt,ae+.4)-Yn),[lt,ht]=ft(Q),ut=pe(lt,ht,mt/(ct-1));return[Dt,ae+z*(1-(ut/Q)**2),ut]},(It,mt,Dt)=>[Dt[0]/8,Dt[2]/8],!0))},P=$=>[-$,$],L=2.5;C("qd",Be(le.qd)+.4,rn,P),C("qd",Xe,cn(le.qd)-.4,P),C("qd",rn,Xe,$=>[$-L,$],0),C("qd",rn,Xe,$=>[-$,-$+L],0),C("poop",Be(le.poop)+.4,oi,P);let N=new j(Ft(T),i.deck);i.deck.side=Ce,N.receiveShadow=!0,N.castShadow=!0,N.name="weatherDecks",t.add(N);let D=[],B=($,dt,ot,ft=0)=>{let z=Lt($,ot)-Yn-ft;D.push(Rn(2,2,(q,ct)=>[$,ct?ot:dt,q?z:-z]))};B(rn,xt("upper",rn),xt("qd",rn)+.12),B(Xe,xt("upper",Xe),xt("qd",Xe)+.12);for(let $ of[1,-1])D.push(Rn(16,2,(ot,ft)=>{let z=pe(rn,Xe,ot/15),q=xt("qd",z),ct=Lt(z,q+.4)-Yn-L;return[z,ft?q+.02:q-.35,$*ct]},null,$<0));let X=Ft(D),k=i.inside.clone();k.side=Ce,t.add(new j(X,k));{let $=oi+.05,dt=xt("qd",$),ot=xt("poop",$)+.05,ft=Lt($,ot)-Yn,z=kf();z.repeat.set(ft*2/3.2,1);let q=new ge({map:z,roughness:.6}),ct=Rn(2,2,(It,mt)=>[$,mt?ot:dt,It?-ft:ft],(It,mt)=>[It,mt]);t.add(new j(ct,q))}let st=[],Y=($,dt,ot=1)=>{let ft=xt(dt,$)+.1,z=Lt($,ft)-Yn-.1;st.push(jh(new R($,ft,-z),new R($,ft,z),ot))};Y(rn-.1,"qd"),Y(Xe+.1,"qd"),Y(oi-.1,"poop");for(let $ of[1,-1]){let dt=[];for(let ot=0;ot<=6;ot++){let ft=pe(rn,Xe,ot/6),z=xt("qd",ft);dt.push(new R(ft,z,$*(Lt(ft,z+.4)-Yn-L+.08)))}for(let ot=0;ot<6;ot++)st.push(jh(dt[ot],dt[ot+1],.95,.5,.1))}let tt=new j(Ft(st),i.darkWood);tt.castShadow=!0,t.add(tt);let et=[];for(let $ of[3.6,7,10.4,13.8]){let dt=xt("qd",$)+.2,ot=Lt($,dt)-Yn-L+.2;et.push(qe(new R($,dt,-ot),new R($,dt,ot),.28,.3))}let Pt=new j(Ft(et),i.darkWood);Pt.castShadow=!0,t.add(Pt);{let ft=i.hammock;for(let z of[1,-1]){let q=[[-.24,0],[-.26,.42],[-.18,.56],[.18,.56],[.26,.42],[.24,0]],ct=Rn(140,q.length,(mt,Dt)=>{let ae=pe(-25.2,25,mt/139),Q=we(ae)+.02,lt=Lt(ae,Q)-Yn/2,[ht,ut]=q[Dt];return[ae,Q+ut,z*(lt+ht)]},(mt,Dt)=>[pe(-25.2,25,mt/139)/2.5,Dt/(q.length-1)],z>0),It=new j(ct,ft);It.castShadow=!0,t.add(It)}}{let $=[];for(let ct=0;ct<=24;ct++){let It=pe(-7.4,we(28.5)-.3,ct/24);$.push(new R(cn(It)+.08,It,0))}let dt=new Vn(new ei($),48,.26,6,!1);t.add(new j(dt,i.black));let ot=new ln,ft=Ts+.6;ot.moveTo(Be(-7.4),-7.4),ot.lineTo(Be(ft)+.3,ft),ot.lineTo(Be(ft)-.6,ft),ot.lineTo(Be(Ts)-1,Ts-.6),ot.lineTo(Be(-7.4)-1.7,-7.4+.3),ot.closePath();let z=new zn(ot,{depth:.36,bevelEnabled:!1});z.translate(0,0,-.18);let q=new j(z,i.black);q.castShadow=!0,t.add(q)}return t.add(hv()),t.add(fv()),t}function hv(){let i=De(),t=new jt;t.name="head";let e=33.35,n=xt("upper",30)+2.3,s=new ln,r=-2.2,o=n-.2;s.moveTo(cn(r),r);for(let m=1;m<=10;m++){let u=pe(r,o,m/10);s.lineTo(cn(u)-.05,u)}s.lineTo(e-.4,n+.1),s.quadraticCurveTo(e+.2,n-1.6,e-1,n-3.6),s.quadraticCurveTo(29.8,-.2,cn(r)+.4,r),s.closePath();let a=new zn(s,{depth:.5,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});a.translate(0,0,-.25);let l=new j(a,i.black);l.castShadow=!0,t.add(l);let c=new ln;c.moveTo(cn(n-2.5)+.2,n-2.5),c.quadraticCurveTo(e-1.3,n-1,e-.6,n-.3),c.lineTo(e-.9,n-.9),c.quadraticCurveTo(e-2.2,n-2.3,cn(n-3.2)+.3,n-3.2),c.closePath();let h=new zn(c,{depth:.62,bevelEnabled:!1});h.translate(0,0,-.31),t.add(new j(h,i.ochre));let p=[],d=[],f=xt("upper",27);for(let m of[1,-1]){let u=[];for(let _=0;_<3;_++){let b=-_*.55,x=[new R(26,f+2.2+b,m*(Lt(26,f+2.2+b)+.05)),new R(28.4,f+1.75+b*.9,m*2.5),new R(30.6,f+1.55+b*.75,m*1.25),new R(e-.55,n-.35+b*.55,m*.32)],S=new ei(x,!1,"centripetal");u.push(S),p.push(new Vn(S,32,_===0?.1:.075,6,!1))}for(let _ of[.25,.45,.65]){let b=u[0].getPoint(_),x=u[2].getPoint(_);d.push(be(b,x.clone().add(new R(0,-.5,0)),.07,.07,6))}}let g=new j(Ft(p),i.ochre);g.castShadow=!0,t.add(g),t.add(new j(Ft(d),i.black));let y=Rn(6,6,(m,u)=>{let _=pe(28.9,31.6,m/5),b=pe(2.2,.7,m/5);return[_,f+.5+m/5*.5,pe(-b,b,u/5)]},null,!0);t.add(new j(y,i.darkWood)),t.add(dv(e,n));for(let m of[1,-1]){let _=xt("qd",25.6)+.55,b=Lt(25.6,_)-.4,x=new R(25.6-.6,_,m*(b-.6)),S=new R(25.6+1.4,_+.25,m*(b+1.9)),M=new j(qe(x,S,.42,.42),i.black);M.castShadow=!0,t.add(M);let w=new j(new ne(.2,.2,.05,12),i.gold);w.position.copy(S),w.lookAt(S.clone().add(S.clone().sub(x))),w.rotateX(Math.PI/2),t.add(w)}for(let m of[1,-1])for(let u of[0,.75]){let _=26.9+u,b=xt("middle",_)+.9,x=Lt(_,b),S=new j(new ne(.24,.24,.1,14),i.iron),M=new j(new xs(.17,14),new gs({color:"#050403"})),w=new R(Lt(_-.2,b)-Lt(_+.2,b),0,m*.4).normalize();S.position.set(_,b,m*x),S.quaternion.setFromUnitVectors(new R(0,1,0),w),M.position.set(_,b,m*(x+.06)).addScaledVector(w,.02),M.lookAt(M.position.clone().add(w)),t.add(S,M)}return t}function uv(){let i=document.createElement("canvas");i.width=256,i.height=300;let t=i.getContext("2d"),e=[["#b8202a","#e2b33c"],["#e2b33c","#b8202a"],["#1f3c8c","#e2b33c"],["#b8202a","#e2b33c"]];[[0,0],[128,0],[0,150],[128,150]].forEach(([r,o],a)=>{t.fillStyle=e[a][0],t.fillRect(r,o,128,150),t.fillStyle=e[a][1];for(let l=0;l<(a===0?3:1);l++){let c=o+(a===0?30+l*42:75);t.beginPath(),t.ellipse(r+64,c,a===0?34:30,a===0?12:34,0,0,Math.PI*2),t.fill()}}),t.strokeStyle="#d4a640",t.lineWidth=14,t.strokeRect(0,0,256,300);let s=new _n(i);return s.colorSpace=Fe,s}function dv(i,t){let e=De(),n=new jt;n.name="figurehead",n.position.set(i-.2,t,0),n.rotation.z=-.28;let s=1.45,r=new ln;r.moveTo(-.6,.75),r.lineTo(.6,.75),r.lineTo(.6,-.1),r.quadraticCurveTo(.6,-.7,0,-.95),r.quadraticCurveTo(-.6,-.7,-.6,-.1),r.closePath();let o=new zn(r,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2}),a=o.attributes.uv,l=o.attributes.position;for(let m=0;m<a.count;m++)a.setXY(m,(l.getX(m)+.66)/1.32,(l.getY(m)+1)/1.8);o.rotateY(Math.PI/2);let c=new j(o,[new ge({map:uv(),roughness:.45,metalness:.2}),e.gold]);c.scale.setScalar(s),c.position.set(.25,.9,0),n.add(c);let h=new jt;h.add(new j(new ne(.42,.36,.3,16),e.gold));for(let m=0;m<2;m++){let u=new j(new yn(.36,.05,6,16,Math.PI),e.gold);u.rotation.y=m*Math.PI/2,u.position.y=.15,h.add(u)}let p=new j(new nn(.11,10,8),e.gold);p.position.y=.6,h.add(p);let d=new j(new de(.05,.22,.16),e.gold);d.position.y=.78,h.add(d);let f=new j(new nn(.33,12,8,0,Math.PI*2,0,Math.PI/2),new ge({color:"#7a1b20",roughness:.6}));f.position.y=.12,h.add(f),h.scale.setScalar(s),h.position.set(.2,2.15,0),n.add(h);let g=new ge({color:"#e8c7a4",roughness:.55});for(let m of[1,-1]){let u=new jt,_=new j(new ti(.24,.42,4,12),g);_.rotation.x=m*.25,u.add(_);let b=new j(new nn(.2,14,10),g);b.position.set(.05,.55,m*.06),u.add(b);let x=new j(new nn(.21,12,8,0,Math.PI*2,0,Math.PI/2.2),e.gold);x.position.copy(b.position).add(new R(-.02,.03,0)),u.add(x);for(let w of[0,1]){let v=new j(new nn(.3,10,8),e.gold);v.scale.set(.12,.75,.42),v.position.set(-.28,.25+w*.12,m*(.12+w*.12)),v.rotation.x=m*(.5+w*.3),u.add(v)}let S=new j(new ti(.07,.4,4,8),g);S.position.set(.12,.25,-m*.24),S.rotation.x=-m*1.1,u.add(S);let M=new j(new yn(.26,.07,6,14,Math.PI*1.3),new ge({color:"#2a4a9a",roughness:.6}));M.rotation.set(Math.PI/2,0,.4),M.position.y=-.08,u.add(M),u.scale.setScalar(s),u.position.set(.05,1,m*1.25),n.add(u)}let y=new j(new yn(.35,.12,8,18,Math.PI*1.5),e.gold);return y.rotation.set(0,Math.PI/2,0),y.position.set(0,-.2,0),n.add(y),n.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),n}function fv(){let i=De(),t=new jt;t.name="quarterGalleries";let e=-27.3,n=-22.4,s=Xn(-25),r=le.middle+s+.15,o=le.qd+s-.1,a=r-2.6,l=o+.9,c=.85,h=document.createElement("canvas");h.width=512,h.height=512;let p=h.getContext("2d"),d=_=>(l-_)/(l-a)*512;p.fillStyle=Pe.ochre,p.fillRect(0,0,512,512),p.fillStyle=Pe.black,p.fillRect(0,d(r-.3),512,d(a)-d(r-.3));for(let[_,b]of[[le.middle+s+.45,le.middle+s+1.6],[le.upper+s+.45,le.upper+s+1.6]])for(let x=0;x<5;x++){let S=20+x*98;p.fillStyle="#e7dcc0",p.fillRect(S,d(b),78,d(_)-d(b)),p.fillStyle="#26323e";for(let M=0;M<3;M++)for(let w=0;w<2;w++)p.fillRect(S+5+w*36,d(b)+5+M*(d(_)-d(b)-10)/3,32,(d(_)-d(b)-10)/3-5)}p.strokeStyle=Pe.gold,p.lineWidth=4;for(let _=0;_<6;_++)p.beginPath(),p.arc(256,d(a+.6)-_*20,40+_*18,0,Math.PI,!0),p.stroke();let f=new _n(h);f.colorSpace=Fe;let g=new ge({map:f,roughness:.6}),y=_=>{if(_<r){let b=(_-a)/(r-a);return Math.sin(b*Math.PI/2)**1.3}if(_>o){let b=(l-_)/(l-o);return Math.sqrt(Math.max(0,b))}return 1},m=24,u=40;for(let _ of[1,-1]){let b=Rn(m,u,(S,M)=>{let w=pe(a,l,M/(u-1)),v=y(w),T=S/(m-1),C=(e+n)/2,P=(n-e)/2*(.25+.75*Math.min(1,v*1.4)),L=C+(T*2-1)*P,N=Math.sin(T*Math.PI)**.45,D=Lt(L,w)+c*v*N;return[L,w,_*D]},(S,M)=>[S/(m-1),M/(u-1)],_<0),x=new j(b,g);x.castShadow=!0,t.add(x)}return t}var pv=.06,tu=(i,t)=>Math.max(0,Lt(i,t+.25)-pv);function mv(i,t,e,n=[],s=.1){let r=d=>xt(i,d),o=Math.max(8,Math.round((e-t)/.6)),a=new ln,l=[];for(let d=0;d<=o;d++){let f=pe(t,e,d/o);l.push([f,tu(f,r(f))])}a.moveTo(l[0][0],-l[0][1]);for(let[d,f]of l)a.lineTo(d,f);for(let d=l.length-1;d>=0;d--)a.lineTo(l[d][0],-l[d][1]);a.closePath();for(let d of n){let f=new _s;f.moveTo(d.x-d.w/2,-d.d/2),f.lineTo(d.x-d.w/2,d.d/2),f.lineTo(d.x+d.w/2,d.d/2),f.lineTo(d.x+d.w/2,-d.d/2),f.closePath(),a.holes.push(f)}let c=new ar(a,1),h=c.attributes.position,p=c.attributes.uv;for(let d=0;d<h.count;d++){let f=h.getX(d),g=h.getY(d),y=Math.max(.5,tu(f,r(f)));h.setXYZ(d,f,r(f)+s*(1-Math.min(1,(g/y)**2)),g),p.setXY(d,f/8,g/8)}return c.computeVertexNormals(),c}function gv(i){return bi.filter(t=>i==="upper"?!0:i==="orlop"?t.x>-14&&t.x<15:!0)}function Qh(i,t,e,n,s,r=.8){let o=[];for(let l of[1,-1])o.push(qe(new R(i,e,t+l*r/2),new R(i+s,n,t+l*r/2),.07,.22));let a=Math.round((n-e)/.24);for(let l=1;l<a;l++){let c=l/a,h=new de(.22,.05,r);h.translate(i+s*c,pe(e,n,c),t),o.push(h)}return o}function jf(){let i=De(),t=new jt;t.name="interior";let e=[],n=[],s=[],r=[["orlop",Be(le.orlop)+.35,cn(le.orlop)-.5],["lower",Be(le.lower)+.25,cn(le.lower)-.35],["middle",Be(le.middle)+.25,cn(le.middle)-.35],["upper",Be(le.upper)+.6,cn(le.upper)-.6]];for(let[u,_,b]of r){let x=gv(u);e.push(mv(u,_,b,x));for(let S of x){let M=xt(u,S.x)+.1,w=S.w/2+.1,v=S.d/2+.1,T=(C,P)=>new R(S.x+C,M+.12,P);n.push(qe(T(-w,-v),T(w,-v),.2,.3),qe(T(-w,v),T(w,v),.2,.3)),n.push(qe(T(-w,-v),T(-w,v),.2,.3,new R(0,1,0)),qe(T(w,-v),T(w,v),.2,.3,new R(0,1,0)))}}let o=["orlop","lower","middle","upper"];for(let u=0;u<o.length-1;u++)for(let _ of bi.filter(b=>b.ladder)){if(o[u]==="orlop"&&!(_.x>-14&&_.x<15))continue;let b=xt(o[u+1],_.x),x=xt(o[u],_.x-1.4);s.push(...Qh(_.x-_.w/2-1.2,0,x,b,_.w*.55))}for(let u of[1,-1])s.push(...Qh(rn+2.2,u*2.6,xt("upper",rn+2.2),xt("qd",rn),-2,.7)),s.push(...Qh(Xe-2.2,u*2.6,xt("upper",Xe-2.2),xt("qd",Xe),2,.7));let a=new j(Ft(e),i.deck);a.receiveShadow=!0,a.name="decks",t.add(a);let l=new j(Ft(n),i.darkWood);l.receiveShadow=l.castShadow=!0,t.add(l);let c=new j(Ft(s),i.darkWood);c.castShadow=!0,t.add(c);let h=[],p=[["orlop",-26.2,26.8],["lower",-26.5,27.5],["middle",-26.8,27.6],["upper",-27,27.6],["qd",-27.5,rn],["qd",Xe,27.8],["poop",-28.2,oi]];for(let[u,_,b]of p)for(let x=_+.4;x<b;x+=1.25){if(bi.some(w=>Math.abs(x-w.x)<w.w/2+.05))continue;let S=xt(u,x)-.17,M=tu(x,S-.2);M<.6||h.push([x,S,M])}let d=new bn(new de(.3,.3,1),i.darkWood,h.length),f=new Bt;h.forEach(([u,_,b],x)=>{f.makeScale(1,1,2*b).setPosition(u,_-.15,0),d.setMatrixAt(x,f)}),d.castShadow=d.receiveShadow=!0,d.name="beams",t.add(d);let g=[],y=[["orlop","lower"],["lower","middle"],["middle","upper"]];for(let[u,_]of y)for(let b=-20;b<20;b+=2.5)bi.some(x=>Math.abs(b-x.x)<x.w/2+.3)||u==="orlop"&&(b<-14||b>15)||g.push(be(new R(b,xt(u,b),0),new R(b,xt(_,b)-.45,0),.11,.11,8));let m=new j(Ft(g),i.darkWood);m.castShadow=!0,t.add(m);{let _=new ln,b=[];for(let v=-21;v<=20;v+=.8)b.push(v);_.moveTo(b[0],-Lt(b[0],-5.3));for(let v of b)_.lineTo(v,Math.max(.2,Lt(v,-5.3)-.05));for(let v=b.length-1;v>=0;v--)_.lineTo(b[v],-Math.max(.2,Lt(b[v],-5.3)-.05));let x=new ar(_);x.rotateX(Math.PI/2),x.translate(0,-5.3,0);let S=x.attributes.uv,M=x.attributes.position;for(let v=0;v<M.count;v++)S.setXY(v,M.getX(v)/4,M.getZ(v)/4);let w=new j(x,new ge({map:Bf(),roughness:1,side:Ce}));w.receiveShadow=!0,w.name="ballast",t.add(w)}return t}function ke(i,t){let e=i.index?i.toNonIndexed():i,n=new re(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new Me(r,3)),e.attributes.uv||e.setAttribute("uv",new Me(new Float32Array(s*2),2)),e}var Zt=(i,t,e,n,s,r,o)=>ke(new de(i,t,e).translate(n,s,r),o),li=(i,t,e,n,s,r,o,a=10)=>ke(new ne(t,i,e,a).translate(n,s,r),o),xv="#8a6a44",Ni="#5a4330",ql="#a0805a",Ps="#2c2e30",_v="#a89a7c",eu="#a8643c";function Yl(i,t,e=Ps,n=xv){let s=[];for(let a=0;a<=10;a++){let l=a/10;s.push(new rt(t*(.82+.18*Math.sin(Math.PI*l)),(l-.5)*i))}let o=[ke(new kn(s,14).rotateZ(Math.PI/2).translate(0,t,0),n)];for(let a of[.12,.3,.7,.88]){let l=t*(.82+.18*Math.sin(Math.PI*a))+.01;o.push(ke(new ne(l,l,.035,14,1,!0).rotateZ(Math.PI/2).translate((a-.5)*i,t,0),e))}for(let a of[1,-1])o.push(ke(new xs(t*.82,14).rotateY(a*Math.PI/2).translate(a*i/2,t,0),Ni));return Ft(o)}function yv(i,t,e,n){return Yl(i,t,e,n).rotateZ(Math.PI/2).translate(t,i/2-t,0)}var vv={leaguer:()=>Yl(1.6,.52),butt:()=>Yl(1.3,.42),hogshead:()=>Yl(1,.36),powder:()=>yv(.6,.22,eu,ql),chest:()=>Ft([Zt(.9,.42,.45,0,.21,0,"#6b4a2e"),Zt(.92,.05,.47,0,.44,0,"#4a3220"),Zt(.12,.08,.02,0,.36,.235,Ps)]),sack:()=>ke(new nn(.32,10,8).scale(1.2,.8,.8).translate(0,.25,0),"#b8a57e"),bench:()=>Ft([Zt(1.9,.06,.28,0,.45,0,ql),Zt(.06,.42,.24,-.8,.21,0,Ni),Zt(.06,.42,.24,.8,.21,0,Ni)]),messTable:()=>Ft([Zt(.75,.06,1.9,0,.78,.95,ql),Zt(.06,.75,.06,0,.38,1.85,Ni),ke(new ne(.012,.012,1).translate(0,1.3,1.85),"#6b5a40")]),table:()=>Ft([Zt(1.6,.06,.9,0,.76,0,"#7a5232"),...[[-.7,-.38],[.7,-.38],[-.7,.38],[.7,.38]].map(([i,t])=>Zt(.06,.74,.06,i,.37,t,"#5a3c22"))]),chair:()=>Ft([Zt(.42,.05,.42,0,.46,0,"#6b4528"),Zt(.42,.5,.05,0,.72,-.19,"#6b4528"),...[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]].map(([i,t])=>Zt(.04,.46,.04,i,.23,t,"#4a3018"))]),desk:()=>Ft([Zt(1.1,.75,.6,0,.375,0,"#6b4528"),Zt(1.12,.06,.64,0,.78,0,"#4a3018"),Zt(.9,.3,.15,0,.95,-.2,"#5a3a20")]),settee:()=>Ft([Zt(2.2,.42,.6,0,.21,0,"#5a3a20"),Zt(2.2,.12,.6,0,.48,0,"#2a4a6a"),Zt(2.2,.5,.1,0,.75,-.26,"#2a4a6a")]),hammock:()=>Ft([ke(new nn(.5,12,6).scale(1.8,.32,.36).translate(0,-.45,0),_v),ke(new ne(.01,.01,.5).rotateZ(.9).translate(-1.05,-.2,0),"#8a7556"),ke(new ne(.01,.01,.5).rotateZ(-.9).translate(1.05,-.2,0),"#8a7556")]),cot:()=>Ft([Zt(1.9,.35,.7,0,-.75,0,"#cfc3a4"),Zt(1.95,.05,.75,0,-.56,0,"#6b4a2e"),...[[-.9,-.3],[.9,-.3],[-.9,.3],[.9,.3]].map(([i,t])=>ke(new ne(.01,.01,.6).translate(i,-.28,t),"#8a7556"))]),coil:()=>Ft([0,1,2,3].map(i=>ke(new yn(1.15-i*.12,.13,6,24).rotateX(Math.PI/2).translate(0,.13+i*.24,0),"#6b5a40"))),ropeCoil:()=>Ft([0,1,2].map(i=>ke(new yn(.4,.07,5,16).rotateX(Math.PI/2).translate(0,.07+i*.13,0),"#8a7556"))),sailBundle:()=>ke(new ti(.3,2.4,4,8).rotateZ(Math.PI/2).translate(0,.3,0),"#d0c5a8"),shotPile:()=>{let i=[];for(let t=0;t<3;t++)for(let e=0;e<4-t;e++)for(let n=0;n<4-t;n++)i.push(ke(new nn(.08,8,6).translate((e-(3-t)/2)*.16,.08+t*.13,(n-(3-t)/2)*.16),Ps));return Ft(i)},garland:()=>Ft([Zt(1.4,.12,.22,0,.06,0,Ni),...[0,1,2,3,4,5,6,7].map(i=>ke(new nn(.08,8,6).translate(-.6+i*.17,.16,0),Ps))]),bucket:()=>li(.16,.2,.32,0,.16,0,"#5a4330"),coop:()=>Ft([Zt(1.2,.6,.6,0,.3,0,"#7a6040"),...[0,1,2,3,4,5].map(i=>Zt(.03,.5,.62,-.5+i*.2,.32,0,"#3a2a18"))]),shelf:()=>Ft([Zt(.4,1.6,1.8,0,.8,0,"#6b4a2e"),...[.4,.8,1.2].map(i=>Zt(.38,.04,1.76,.02,i,0,"#5a3c22"))]),bin:()=>Ft([Zt(1.4,.9,1,0,.45,0,"#7a5a38"),Zt(1.42,.05,1.02,0,.9,0,"#5a3c22")]),workbench:()=>Ft([Zt(2.2,.1,.7,0,.85,0,ql),Zt(.1,.8,.6,-1,.4,0,Ni),Zt(.1,.8,.6,1,.4,0,Ni),Zt(1.6,.18,.18,.2,.09,.15,"#9a7a50")]),stove:()=>Ft([Zt(2.1,1.25,1.5,0,.62,0,"#1e1f21"),Zt(2.2,.08,1.6,0,1.28,0,"#2c2e30"),Zt(.5,.45,.04,-.5,.55,.77,"#3a3c3e"),Zt(.5,.45,.04,.3,.55,.77,"#3a3c3e"),Zt(.6,.25,.04,.3,1,.77,"#7a2a10"),li(.32,.32,.55,-.5,1.6,-.2,eu,14),li(.28,.28,.5,.35,1.58,-.25,eu,14),Zt(.45,1.2,.45,.6,2,.35,"#1e1f21"),Zt(2.6,.12,2,0,.06,0,"#8a8478")]),pumpCase:()=>Ft([li(.22,.22,1.1,0,.55,0,"#5a4330",12),li(.26,.26,.12,0,1.1,0,Ps,12)]),pumpWinch:()=>Ft([li(.05,.05,4.6,0,1.15,0,Ps).rotateX(Math.PI/2),Zt(.12,1.2,.12,0,.6,-2.2,Ni),Zt(.12,1.2,.12,0,.6,2.2,Ni),Zt(.06,.06,1.2,.45,1.15,-1,"#8a6a44"),Zt(.06,.06,1.2,-.45,1.15,1,"#8a6a44")]),bitts:()=>Ft([Zt(.5,2,.5,0,1,-1.1,"#6b4a2e"),Zt(.5,2,.5,0,1,1.1,"#6b4a2e"),Zt(.45,.45,2.8,.05,1.2,0,"#5a3c22")]),lantern:()=>Ft([li(.12,.1,.32,0,-.35,0,"#ffd890",8),li(.14,.08,.1,0,-.14,0,"#3a2a18",8),ke(new ne(.01,.01,.12).translate(0,-.05,0),"#3a2a18")]),cartridgeRack:()=>Ft([Zt(.35,1.4,1.6,0,.7,0,"#6b4a2e"),...[.35,.75,1.15].flatMap(i=>[0,1,2,3,4,5].map(t=>ke(new ne(.07,.07,.3,8).rotateZ(Math.PI/2).translate(.05,i+.08,-.6+t*.24),"#e8dcc0")))]),timber:()=>Ft([Zt(3,.25,.25,0,.13,-.3,"#9a7a50"),Zt(3,.25,.25,0,.13,0,"#8a6a44"),Zt(2.6,.25,.25,0,.38,-.15,"#9a7a50")]),block:()=>Ft([Zt(.3,.42,.18,0,.21,0,"#6b4a2e"),li(.04,.04,.2,0,.21,0,Ps).rotateX(Math.PI/2)]),tub:()=>li(.3,.34,.35,0,.18,0,"#6b4a2e",12),plate:()=>ke(new ne(.11,.1,.02,10).translate(0,.01,0),"#9a9a90"),globe:()=>Ft([ke(new nn(.22,14,10).translate(0,1,0),"#c8b88a"),li(.04,.12,.8,0,.4,0,"#5a3a20")])},Mv=new Set(["messTable","bench","plate","chest","tub","table","chair","desk","settee","globe","cot","hammock","bucket"]),Sv=new Set(["lower","middle","upper","qd"]),bv={middle:"lower",upper:"middle",qd:"upper",poop:"qd",lower:"orlop"},iu=class{constructor(){this.items={},this.deck=null,this._q=new ze}add(t,e,n,s,r=0,o=1){let a=new Bt().compose(new R(e,n,s),this._q.setFromAxisAngle(new R(0,1,0),r).clone(),new R(o,o,o));a.clearable=Mv.has(t)&&Sv.has(this.deck),(this.items[t]||=[]).push(a)}},Qf=(i,t)=>Lt(i,t+.6)-.15;function nu(i,t,e){if(i==="hold")return-5.3;let n=xt(i,t),s=Math.max(.5,Lt(t,n+.25)-.06);return n+.1*(1-Math.min(1,(e/s)**2))}var Ev=(i,t)=>xt(i,t)-.47,tp=(i,t=.6)=>bi.some(e=>Math.abs(i-e.x)<e.w/2+t),wv=(i,t=1.2)=>Object.values(Ao).some(e=>Math.abs(i-e.x)<t);function ep(i){let t=new iu,e=(u,_,b,x,S=0,M=0)=>{t.deck=_,t.add(u,b,nu(_,b,x)+M,x,S)},n=(u,_,b,x,S=0)=>{t.deck=bv[_],t.add(u,b,Ev(_,b),x,S)},s=Rs(),r=u=>vr.find(_=>_.name===u);for(let[u,_,b,x,S]of[["lower","lower","middle",-22.6,18],["middle","middle","upper",-15,15.5],["upper","upper","qd",-13.8,20.5]]){let M=r(u),w=s.filter(v=>v.tier===M).map(v=>v.x);for(let v=0;v<w.length-1;v++){let T=(w[v]+w[v+1])/2;if(!(T<x||T>S||tp(T,.2)))for(let C of[1,-1]){let P=C*(Qf(T,xt(_,T))-.05);t.deck=_,t.add("messTable",T,nu(_,T,P),P,C>0?Math.PI:0),e("bench",_,T-.6,P-C*1,Math.PI/2),e("bench",_,T+.6,P-C*1,Math.PI/2),e("plate",_,T-.15,P-C*.6,0,.81),e("plate",_,T+.15,P-C*1.3,0,.81),(v+(C>0?0:1))%2===0&&e("chest",_,T-.95,P-C*.35,Math.PI/2),v%3===0&&e("tub",_,T+.95,P-C*1.9),t.deck=null,t.add("garland",w[v]+1.5,nu(_,T,P)+.02,P-C*.12,0)}}}let o=(u,_)=>bi.some(b=>Math.abs(u-b.x)<b.w/2+1&&Math.abs(_)<b.d/2+.3);for(let u=7.4;u<20;u+=2.05){if(wv(u,1.3))continue;let _=xt("lower",u),b=Qf(u,_)-.9;for(let x=-b;x<=b;x+=.36)Math.abs(x)<.35||o(u,x)||n("hammock","middle",u,x)}for(let[u,_,b,x]of[["lower","middle",-22,22],["middle","upper",-14,18],["upper","qd",-12,20],["orlop","lower",-24,24]])for(let S=b;S<=x;S+=4.5)tp(S,.3)||n("lantern",_,S+.6,.9);let a=Ao.main.x;for(let u of[1,-1])e("pumpCase","lower",a+1.2,u*1.5),e("pumpCase","lower",a-1.2,u*1.5),e("pumpWinch","lower",a,u*1.5,Math.PI/2);e("bitts","lower",20.6,0),e("table","lower",-25.4,0,Math.PI/2);for(let u of[-.9,.9])for(let _ of[-.5,.5])e("chair","lower",-25.4+_,u,u>0?Math.PI:0);e("chest","lower",-24.2,4.6),e("chest","lower",-24.2,-4.6),e("stove","middle",20.2,0,Math.PI),e("shelf","middle",17,-1.3,Math.PI/2),e("shelf","middle",17,1.3,-Math.PI/2),e("coop","middle",23.6,-2.2),e("coop","middle",23.6,2.2),e("tub","middle",18.8,-1.9),e("bucket","middle",18.8,2);for(let u of[-27,-25.4,-23.8,-22.2]){e("table","middle",u,0,0);for(let _ of[-.75,.75])e("chair","middle",u,_,_>0?Math.PI:0)}for(let[u,_]of[[-24.4,5.6],[-21.2,5.6],[-24.9,-5.6],[-22.4,-5.6],[-19.6,-5.6],[-17.1,-5.6]])n("cot","upper",u,_,0),e("chest","middle",u,_*.72,Math.PI/2);e("desk","middle",-24.4,4.1,Math.PI),e("shelf","middle",-17.6,6.4,0),e("table","upper",-26,0,Math.PI/2);for(let u of[-.9,.9])for(let _ of[-.45,.45])e("chair","upper",-26+_,u,u>0?Math.PI:0);e("desk","upper",-27.6,3.2,Math.PI/2),e("settee","upper",-28.1,-2.5,Math.PI/2),e("globe","upper",-24.4,4.4);for(let u of[-22.6,-21,-19.4]){e("table","upper",u,0,0);for(let _ of[-.8,.8])for(let b of[-.4,.4])e("chair","upper",u+b,_,_>0?Math.PI:0)}n("cot","qd",-16.9,4.4,0),e("desk","upper",-16,-3.5,-Math.PI/2),e("chest","upper",-17.6,-5,0);for(let[u,_]of[[22.6,2],[22.6,3.2],[24.4,2],[24.4,3.2],[26,2.2]])n("cot","qd",u,_,0);e("table","upper",23.5,4.8,0),e("table","qd",-26,0,Math.PI/2);for(let u of[-.9,.9])e("chair","qd",-26,u,u>0?Math.PI:0);e("desk","qd",-27.8,2.8,Math.PI/2),e("table","qd",-21,-3.6,0);for(let u of[-.5,.5])for(let _ of[-4.4,-2.8])e("chair","qd",-21+u,_,_>-3.6?Math.PI:0);n("cot","poop",-21.4,3.8,0),e("desk","qd",-15.6,-4.6,0),e("chest","qd",-16.8,-5.6,0),e("desk","qd",-15.6,4.6,Math.PI),e("chest","qd",-16.8,5.6,0);for(let u of[-.46,.46])e("chest","orlop",-14.6+u,0,Math.PI/2);e("tub","orlop",-13.3,.8),e("bucket","orlop",-15.9,-.8),e("bucket","orlop",-13.2,-.9),e("table","orlop",-14,-4,0);for(let u of[-15.6,-12.4])e("chest","orlop",u,-5.4,0);n("lantern","lower",-13,-3.6);for(let u=-26.2;u<-23.8;u+=.9)for(let _ of[-3.5,-1.2,1.2,3.5])e("bin","orlop",u,_,0);for(let[u,_]of[[-22.8,-4],[-21.6,-4.6],[-22,-2.6],[-21,-3.2]])e("sack","orlop",u,_,u);e("hogshead","orlop",-22.4,-5.6,0),e("hogshead","orlop",-21,-5.8,0);for(let[u,_]of[[-19.6,-4],[-18.8,-4.6],[-19.4,-2.4]])e("chest","orlop",u,_,0);e("shelf","orlop",-22.4,6,0),e("chest","orlop",-21.8,3,0),n("cot","lower",-19.7,4.6,0),e("chest","orlop",-19.7,2.6,0);for(let u=0;u<6;u++)e("powder","orlop",-22.9+u%3*.48,-.5+Math.floor(u/3)*1);for(let u of[2.4,5.4,8.4,11])for(let _ of[1,-1])e("coil","orlop",u,_*4.3,u);for(let[u,_]of[[14.8,3.2],[16.4,4.2],[15.4,5]])e("ropeCoil","orlop",u,_,0);for(let[u,_]of[[16.8,2.6],[17,3],[16.6,3.4]])e("block","orlop",u,_,u);e("workbench","orlop",15.8,-3.6,0),e("timber","orlop",15.6,-5.2,0);for(let u=0;u<4;u++)e("sailBundle","orlop",19,1.2+u*.65,0);for(let[u,_]of[[18.4,-2.6],[19.8,-3.4],[18.8,-4.2]])e("ropeCoil","orlop",u,_,0);for(let[u,_]of[[20,-1.4],[19.4,-1.2]])e("block","orlop",u,_,0);for(let u=0;u<9;u++)e("powder","orlop",21.2+u%3*.5,-.8+Math.floor(u/3)*.6);let l=(u,_,b,x,S)=>{for(let M=u;M<=_;M+=x+.05){if(Math.abs(M-a)<2.6)continue;let w=Lt(M,-5.3+S)-.25;for(let T=-w+S;T<=w-S;T+=2*S+.02)e(b,"hold",M,T,0);let v=Lt(M,-5.3+3*S)-.3;for(let T=-v+2*S;T<=v-2*S;T+=2*S+.02)e(b,"hold",M,T,0,2*S*.9)}};l(.6,14.2,"leaguer",1.6,.52),l(-19.2,-5.2,"butt",1.3,.42);for(let u of[a-1.6,a+1.6])for(let _ of[-.6,.6])e("shotPile","hold",u,_,0);for(let u=18.4;u<22.6;u+=.5){let _=Math.min(2.6,Lt(u,-5)-.5);for(let b=-_;b<=_;b+=.48)e("powder","hold",u,b,0)}e("cartridgeRack","hold",16,-1.6,0),e("cartridgeRack","hold",16,1.6,Math.PI);let c=new jt;c.name="furnishing";let h=new ge({vertexColors:!0,roughness:.8}),p=new ge({vertexColors:!0,roughness:.5,emissive:"#ffb347",emissiveIntensity:.9}),d=new Bt().makeScale(0,0,0),f=[];for(let[u,_]of Object.entries(t.items)){let b=vv[u](),x=new bn(b,u==="lantern"?p:h,_.length);_.forEach((S,M)=>x.setMatrixAt(M,S)),f.push([x,_]),x.castShadow=u!=="lantern"&&u!=="plate",x.receiveShadow=!0,x.name=u,x.frustumCulled=!1,c.add(x)}let g=-27.6,y=xt("middle",-24)-.75,m=new j(ke(new de(8.2,.32,.32).translate(g+4.1,y,0),"#5a4330"),h);return m.castShadow=!0,c.add(m),c.userData.setCleared=u=>{for(let[_,b]of f)b.some(x=>x.clearable)&&(b.forEach((x,S)=>_.setMatrixAt(S,u&&x.clearable?d:x)),_.instanceMatrix.needsUpdate=!0)},c}var Mn={lowerHead:34,topY:30.6,topLen:5.3,topW:7.1,rLower:[.5,.4],topmastHeel:29.6,topmastHead:50.4,crossY:47,crossW:4.6,rTop:[.33,.22],tgHeel:46.4,tgHead:58.4,poleHead:63.4,rTg:[.19,.08],yards:[{name:"course",L:31.5,ySet:29.2,yLow:29.2,r:.33,head:"lowerHead"},{name:"topsail",L:23.2,ySet:46.2,yLow:35,r:.25,head:"topmastHead"},{name:"topgallant",L:14.6,ySet:57.5,yLow:50.9,r:.16,head:"tgHead"},{name:"royal",L:9.6,ySet:62.5,yLow:58.9,r:.11,head:"poleHead"}]},Zl=class{constructor(){let t=De();this.group=new jt,this.group.name="rig",this.masts={};for(let[e,n]of Object.entries(Ao))this.masts[e]=this.buildMast(e,n,t);this.buildBowsprit(t),this.buildSpankerSpars(t)}buildMast(t,e,n){let s=xt("upper",e.x),r=e.scale,o=N=>s+(N-5.76)*r,a={name:t,x:e.x,scale:r,group:new jt,yards:{}},l=a.group;l.position.set(e.x,0,0),l.rotation.z=e.rake,this.group.add(l);let c={lowerHead:o(Mn.lowerHead),topY:o(Mn.topY),topmastHeel:o(Mn.topmastHeel),topmastHead:o(Mn.topmastHead),crossY:o(Mn.crossY),tgHeel:o(Mn.tgHeel),tgHead:o(Mn.tgHead),poleHead:o(Mn.poleHead),topLen:Mn.topLen*r,topW:Mn.topW*r,crossW:Mn.crossW*r};a.h=c;let h=(N,D,B=0)=>new R(N,D,B),p=N=>N.map(D=>D*(.75+.25*r)),[d,f]=p(Mn.rLower),[g,y]=p(Mn.rTop),[m,u]=p(Mn.rTg);a.r={lower:f,top:y,tg:u};let _=[],b=[],x=[];_.push(be(h(0,0),h(0,c.topY),d,f*1.05,16)),b.push(be(h(0,c.topY),h(0,c.lowerHead),f*.92,f*.88,12));for(let N=s+1.2;N<c.topY-1;N+=1.15)x.push(be(h(0,N),h(0,N+.12),d*1.06,d*1.06,16));let S=f+g+.05;_.push(be(h(S,c.topmastHeel),h(S,c.crossY),g,y*1.05,12)),b.push(be(h(S,c.crossY),h(S,c.topmastHead),y,y*.9,10));let M=S+y+m+.03;_.push(be(h(M,c.tgHeel),h(M,c.tgHead),m,u*1.3,10)),_.push(be(h(M,c.tgHead),h(M,c.poleHead),u*1.3,u*.7,8)),a.dTop=S,a.dTg=M,b.push(be(h(M,c.poleHead),h(M,c.poleHead+.25),.22*r,.22*r,10)),b.push(qe(h(-f-.2,c.lowerHead+.15),h(S+g+.25,c.lowerHead+.15),1*r,.45));let w=new ln,v=c.topLen,T=c.topW/2;w.moveTo(-v*.45,-T),w.lineTo(-v*.45,T),w.lineTo(v*.25,T),w.quadraticCurveTo(v*.55,T,v*.55,0),w.quadraticCurveTo(v*.55,-T,v*.25,-T),w.closePath();let C=new zn(w,{depth:.22,bevelEnabled:!1});C.rotateX(Math.PI/2),C.translate(0,c.topY+.22,0),b.push(C);for(let N=0;N<=6;N++){let D=-T+2*T*N/6;b.push(be(h(-v*.43,c.topY+.22,D),h(-v*.43,c.topY+1.15,D),.035,.035,5))}b.push(be(h(-v*.43,c.topY+1.15,-T),h(-v*.43,c.topY+1.15,T),.05,.05,6)),b.push(qe(h(S,c.crossY,-c.crossW/2),h(S,c.crossY,c.crossW/2),.25,.22)),b.push(qe(h(S-1.2*r,c.crossY+.2),h(S+1*r,c.crossY+.2),c.crossW*.45,.18)),b.push(qe(h(S-y-.15,c.topmastHead+.1),h(M+m+.18,c.topmastHead+.1),.6*r,.3));let P=new j(Ft(_),n.mast),L=new j(Ft([...b,...x]),n.spar);P.castShadow=L.castShadow=!0,l.add(P,L),a.local={lowerHead:h(0,c.lowerHead-.2),shroudHead:h(0,c.topY-.4),stayLower:h(0,c.topY+.4),topEdge:N=>h(-v*.1,c.topY+.15,N*T*.98),topBack:h(-v*.4,c.topY+.2),topFront:h(v*.5,c.topY+.2),topmastShroudHead:h(S,c.crossY-.3),topmastHead:h(S,c.topmastHead-.2),crossEnd:N=>h(S,c.crossY+.1,N*c.crossW/2),tgHead:h(M,c.tgHead-.2),poleHead:h(M,c.poleHead-.1),futtock:h(0,c.topY-3.2*r)};for(let N of Mn.yards){let D=this.buildYard(a,N,o,n);a.yards[N.name]=D}return a}buildYard(t,e,n,s){let r=t.scale,o=Df[t.name][e.name],a=e.r*(.75+.25*r),l=new jt,c=n(e.ySet),h=n(e.yLow),p=e.name==="course"?t.r.lower+a+.1:e.name==="topsail"?t.dTop+t.r.top+a+.05:t.dTg+a+.18;l.position.set(p,c,0);let d=[],f=12;for(let x=0;x<=f;x++){let S=x/f;d.push(new rt(a*(1-.55*S**1.6),S*o/2))}let g=new kn(d,10),y=g.clone().scale(1,-1,1),m=Ft([g,y]);m.rotateX(Math.PI/2);let u=new j(m,s.spar);u.castShadow=!0,l.add(u);let _=[];for(let x=0;x<=16;x++){let S=x/16*2-1;_.push(new R(-.15,-a-.9*(1-S*S)-.15,S*o*.47))}let b=[new Vn(new ei(_),32,.03,4)];for(let x=2.2;x<o*.45;x+=2.4)for(let S of[1,-1]){let M=S*x/(o*.47),w=-a-.9*(1-M*M)-.15;b.push(be(new R(-.1,-a*.6,S*x),new R(-.15,w,S*x),.02,.02,4))}if(l.add(new j(Ft(b),s.rope)),t.name!=="mizzen"&&(e.name==="course"||e.name==="topsail")){let x=[],S=.09*r*(e.name==="course"?1.2:1);for(let w of[1,-1]){x.push(be(new R(a*.8,a*.75,w*o*.2),new R(a*.8,a*.75,w*(o*.5+2.6*r)),S,S*.8,8));for(let v of[o*.22,o*.48])x.push(new yn(S+.04,.025,4,10).rotateY(Math.PI/2).translate(a*.8,a*.75,w*v))}let M=new j(Ft(x),s.spar);M.castShadow=!0,l.add(M)}return t.group.add(l),{name:e.name,group:l,L:o,r:a,ySet:c,yLow:h,mast:t,headKey:e.head,hoist:1,brace:0}}buildBowsprit(t){let e=new R(21.2,xt("qd",21.2)+.2,0),n=fn.degToRad(30),s=new R(Math.cos(n),Math.sin(n),0),r=(m,u=0)=>e.clone().addScaledVector(s,m).add(new R(-Math.sin(n)*u,Math.cos(n)*u,0)),o=[],a=[];o.push(be(r(0),r(22.6),.47,.33,16)),o.push(be(r(16.4,.6),r(32.5,.6),.2,.12,12)),o.push(be(r(29.8,.9),r(38.8,.9),.11,.06,10)),a.push(qe(r(22.1,.1),r(22.1,.95),.7,.42,new R(0,0,1))),a.push(qe(r(32,.6),r(32,.95),.36,.28,new R(0,0,1))),a.push(be(r(22.3,-.2),r(22.3,-2.8),.08,.06,6));let l=new j(Ft(o),t.mast),c=new j(Ft(a),t.spar);l.castShadow=c.castShadow=!0,this.group.add(l,c),this.bowsprit={P:r,heel:e,dir:s,steeve:n,stemPoint:r(9),fore:r(10.5,.4),cap:r(21.9,.4),jib:r(28,.8),jibEnd:r(32.2,.8),flyEnd:r(38.6,1),striker:r(22.3,-2.8)};let h=new jt;h.position.copy(r(18,-.7));let p=19.66,d=.2,f=[];for(let m=0;m<=10;m++)f.push(new rt(d*(1-.5*(m/10)**1.6),m/10*p/2));let g=Ft([new kn(f,8),new kn(f,8).scale(1,-1,1)]);g.rotateX(Math.PI/2);let y=new j(g,t.spar);y.castShadow=!0,h.add(y),this.group.add(h),this.spritYard={name:"sprit",group:h,L:p,r:d,hoist:1,brace:0,ySet:h.position.y,yLow:h.position.y,mast:null}}buildSpankerSpars(t){let e=this.masts.mizzen,n=e.h,s=new jt;s.position.set(-e.r.lower-.1,n.topY-2.4,0);let r=fn.degToRad(38);s.rotation.z=Math.PI-r;let o=13.9;s.add(new j(be(new R(0,0,0),new R(o,0,0),.2,.12,10),t.spar)),e.group.add(s);let a=new jt,l=xt("poop",-17.4)+2.3;a.position.set(-e.r.lower-.1,l,0),a.rotation.z=Math.PI-.04;let c=22.25;a.add(new j(be(new R(0,0,0),new R(c,0,0),.24,.16,10),t.spar)),e.group.add(a);for(let h of[s,a])h.children[0].castShadow=!0;this.gaff={group:s,L:o},this.boom={group:a,L:c}}allYards(){let t=[];for(let e of Object.values(this.masts))t.push(...Object.values(e.yards));return t}applyYards(t){for(let e of Object.values(this.masts))for(let n of Object.values(e.yards)){let s=n.name==="course"?1:t.hoist[n.name]??1;n.group.position.y=n.yLow+(n.ySet-n.yLow)*s,n.group.rotation.y=t.brace*(n.name==="course"?.55:1)*(e.name==="mizzen"?1.15:1)}this.boom.group.rotation.y=t.boomSwing,this.gaff.group.rotation.y=t.boomSwing*1.2}};var Tv=new Bt,Av=new Bt,Rv=new R;function Ne(i,t,e,n=new R){return n.copy(i),t.localToWorld(n),e.worldToLocal(n)}function Kl(i,t){let e=new fe;e.setAttribute("position",new Me(new Float32Array(i*t*3),3)),e.setAttribute("uv",new Me(new Float32Array(i*t*2),2));let n=[];for(let s=0;s<t-1;s++)for(let r=0;r<i-1;r++){let o=s*i+r,a=o+1,l=o+i,c=l+1;n.push(o,a,c,o,c,l)}return e.setIndex(n),e}var np=i=>i*i*(3-2*i),$l=class{constructor(t,e,n,s){let r=De();this.name=t,this.yard=e,this.foot=n,this.fullness=s,this.roach=n.yard?.13:.03,this.NU=15,this.NV=13,this.geo=Kl(this.NU,this.NV),this.mesh=new j(this.geo,r.canvas),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh);let o=e.L*.86,a=Math.min(.38,.12+e.L*.009);this.furl=new j(new ti(a,o-2*a,4,10),r.furl),this.furl.rotation.x=Math.PI/2,this.furl.position.set(.12,e.r+a*.7,0),this.furl.castShadow=!0,e.group.add(this.furl),this.set=-1}update(t,e,n,s=0){let r=this.NU,o=this.NV,a=this.yard,l=t>.015;this.mesh.visible=l;let c=1-np(Math.min(1,t/.35));if(this.furl.visible=c>.02,this.furl.scale.set(Math.max(.05,c),1,Math.max(.05,c)),!l)return;let h=a.L*.465,p=new R(0,-a.r,-h),d=new R(0,-a.r,h),f,g;if(this.foot.yard){let x=this.foot.yard,S=x.L*.465;f=Ne(new R(0,x.r,-S),x.group,a.group),g=Ne(new R(0,x.r,S),x.group,a.group)}else{let x=this.foot.drop();f=new R(.6,-x,-h*.74),g=new R(.6,-x,h*.74)}let y=(f.y+g.y)/2*-1,m=this.fullness*e*t,u=this.geo.attributes.position.array,_=this.geo.attributes.uv.array,b=Math.sin(n*2.1+a.L)*.04*e;for(let x=0;x<o;x++){let S=x/(o-1);for(let M=0;M<r;M++){let w=M/(r-1),v=x*r+M,T=p.x+(d.x-p.x)*w,C=p.y+(d.y-p.y)*w,P=p.z+(d.z-p.z)*w,L=Math.sin(Math.PI*w)*this.roach*y,N=f.x+(g.x-f.x)*w,D=f.y+(g.y-f.y)*w+L,B=f.z+(g.z-f.z)*w,X=S*t,k=T+(N-T)*X,st=C+(D-C)*X,Y=P+(B-P)*X,tt=Math.sin(Math.PI*w)**.9*Math.sin(Math.PI*(.06+.82*S));k+=m*tt*(1+b*Math.sin(w*9+n*3)),k+=(1-t)*.25*Math.sin(w*Math.PI*14)*S,s>0&&(k+=s*.3*(.5+.5*Math.sin(n*9+w*7+S*4))*Math.sin(Math.PI*w)*S),u[v*3]=k,u[v*3+1]=st,u[v*3+2]=Y,_[v*2]=Y/2,_[v*2+1]=this.reef?1-S:st/4}}(this.colliders?.length||this.stays?.length)&&this.drape(u),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}drape(t){let e=Tv.copy(this.space.matrixWorld).invert().multiply(this.yard.group.matrixWorld),n=Av.copy(e).invert(),s=Rv,r=.35,o=2;for(let a=0;a<t.length;a+=3){s.set(t[a],t[a+1],t[a+2]).applyMatrix4(e);let l=-1/0;for(let[h,p]of this.colliders){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y)||Math.sign(s.z)!==Math.sign(h.z))continue;let d=(s.y-h.y)/(p.y-h.y),f=h.x+(p.x-h.x)*d,g=Math.abs(h.z+(p.z-h.z)*d),y=Math.min(1,Math.max(0,(Math.abs(s.z)-(g-o))/o));if(y<=0)continue;let m=f+r;s.x<m&&(l=Math.max(l,s.x+(m-s.x)*y*y*(3-2*y)))}let c=!1;l>s.x&&(s.x=l,c=!0);for(let[h,p]of this.stays||[]){if(s.y<Math.min(h.y,p.y)||s.y>Math.max(h.y,p.y))continue;let d=(s.y-h.y)/(p.y-h.y),f=h.x+(p.x-h.x)*d,g=h.z+(p.z-h.z)*d,y=1-Math.min(1,Math.abs(s.z-g)/2.2),m=f-.3;y>0&&s.x>m&&(s.x-=(s.x-m)*y*y*(3-2*y),c=!0)}c&&(s.applyMatrix4(n),t[a]=s.x,t[a+1]=s.y,t[a+2]=s.z)}}},su=class{constructor(t,e,n,s,r,o){this.name=t,this.tack=n,this.head=s,this.clew=r,this.fullness=o,this.NU=12,this.NV=9,this.geo=Kl(this.NU,this.NV),this.mesh=new j(this.geo,De().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh)}update(t,e,n,s=1){if(this.mesh.visible=t>.015,!this.mesh.visible)return;let r=this.tack,o=r.clone().lerp(this.head,t),a=this.clew.clone();a.z=Math.abs(a.z)*s;let l=r.clone().lerp(a,.15+.85*t);this.side=s;let c=new R().subVectors(o,r).cross(new R().subVectors(l,r)).normalize();c.z*s<0&&c.negate();let h=o.distanceTo(r),p=this.fullness*e*t*h*.06,d=this.geo.attributes.position.array,f=this.geo.attributes.uv.array,g=this.NU,y=this.NV,m=new R,u=new R;for(let _=0;_<y;_++){let b=_/(y-1);for(let x=0;x<g;x++){let S=x/(g-1);u.copy(r).lerp(l,S),m.copy(u).lerp(o,b);let M=Math.sin(Math.PI*S)*Math.sin(Math.PI*Math.min(1,b*.9+.08))*(1-b*.4);m.addScaledVector(c,p*M*(1+.03*Math.sin(n*3+S*8)));let w=_*g+x;d[w*3]=m.x,d[w*3+1]=m.y,d[w*3+2]=m.z,f[w*2]=S*r.distanceTo(this.clew)/2,f[w*2+1]=b*h/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},ru=class{constructor(t,e,n){this.name="spanker",this.mast=t,this.gaff=e,this.boom=n,this.NU=12,this.NV=12,this.geo=Kl(this.NU,this.NV),this.mesh=new j(this.geo,De().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,t.group.add(this.mesh);let s=De();this.brail=new j(new ti(.35,1,4,8),s.furl),this.brail.castShadow=!0,t.group.add(this.brail)}update(t,e,n,s=1){let r=this.mast.group,o=Ne(new R(.3,-.15,0),this.gaff.group,r),a=Ne(new R(this.gaff.L-.3,-.15,0),this.gaff.group,r),l=Ne(new R(.3,.2,0),this.boom.group,r),c=Ne(new R(this.boom.L-2,.2,0),this.boom.group,r),h=1-np(Math.min(1,t/.4));this.brail.visible=h>.02;let p=o.clone().lerp(l,.5).add(new R(-.5,0,0));if(this.brail.position.copy(p),this.brail.scale.set(h,(o.y-l.y-.7)/1.7,h),this.mesh.visible=t>.015,!this.mesh.visible)return;let d=new R(0,0,s),f=this.geo.attributes.position.array,g=this.geo.attributes.uv.array,y=this.NU,m=this.NV,u=new R,_=new R,b=new R,x=1.3*e*t;for(let S=0;S<m;S++){let M=S/(m-1);for(let w=0;w<y;w++){let v=w/(y-1)*t;u.copy(l).lerp(c,v),_.copy(o).lerp(a,v),b.copy(u).lerp(_,M);let T=Math.sin(Math.PI*Math.min(1,v/Math.max(t,.01)))*Math.sin(Math.PI*(.08+.84*M));b.addScaledVector(d,x*T+(1-t)*.2*Math.sin(v*30));let C=S*y+w;f[C*3]=b.x,f[C*3+1]=b.y,f[C*3+2]=b.z,g[C*2]=b.x/2,g[C*2+1]=b.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}},Po=class{constructor(t,e,n,s,r=null){this.name=t,this.yard=e,this.footYard=n,this.side=s,this.lower=r,this.NU=8,this.NV=10,this.geo=Kl(this.NU,this.NV),this.mesh=new j(this.geo,De().canvas),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.group.add(this.mesh),r&&(this.boom=new j(new ne(.11,.08,1,8).translate(0,.5,0).rotateZ(-Math.PI/2),De().spar),this.boom.castShadow=!0,r.parent.add(this.boom))}update(t,e,n){let s=t>.02;if(this.mesh.visible=s,this.boom&&(this.boom.visible=s),!s)return;let r=this.yard,o=this.side,a=r.L,l=a*.465,c=a/2+2.4*r.mast.scale,h=Math.min(c-l+.6,a*.32),p=new R(.25,-r.r,o*l),d=new R(.25,-r.r,o*(l+h*t)),f,g;if(this.footYard){let M=this.footYard,w=M.L/2+2.4*M.mast.scale;f=Ne(new R(.25,M.r,o*M.L*.465),M.group,r.group),g=Ne(new R(.25,M.r,o*(M.L*.465+(w-M.L*.465)*t)),M.group,r.group)}else{let{root:M,dropTo:w,reach:v}=this.lower,T=l*.78+.6;f=new R(.6,-w(),o*T),g=new R(.6,-w(),o*(T+v*t));let C=Ne(M.clone(),this.lower.parent,this.lower.parent),P=Ne(g.clone(),r.group,this.lower.parent);this.boom.position.copy(C),this.boom.scale.set(C.distanceTo(P),1,1),this.boom.quaternion.setFromUnitVectors(new R(1,0,0),P.clone().sub(C).normalize())}let y=this.geo.attributes.position.array,m=this.geo.attributes.uv.array,u=this.NU,_=this.NV,b=new R,x=new R,S=new R;for(let M=0;M<_;M++){let w=M/(_-1);for(let v=0;v<u;v++){let T=v/(u-1);x.copy(p).lerp(d,T),S.copy(f).lerp(g,T),b.copy(x).lerp(S,w),b.x+=1.1*e*t*Math.sin(Math.PI*T)*Math.sin(Math.PI*(.06+.82*w));let C=M*u+v;y[C*3]=b.x,y[C*3+1]=b.y,y[C*3+2]=b.z,m[C*2]=b.z/2,m[C*2+1]=b.y/4}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeVertexNormals()}};function ip(i,t){let e={square:[],stay:[],spanker:null},n={course:1.7,topsail:2,topgallant:1.3,royal:.8};for(let u of Object.values(i.masts)){let _=u.yards,b=(x,S)=>{if(!_[x]||!S&&x!=="course")return;let M=S?{yard:S}:{drop:()=>_.course.group.position.y-(we(u.x)+2.2)},w=new $l(`${u.name}-${x}`,_[x],M,n[x]*u.scale);w.mastName=u.name,w.kind=x,x==="topsail"&&(w.reef=!0,w.mesh.material=De().canvasReef),e.square.push(w)};u.name!=="mizzen"&&b("course"),b("topsail",_.course),b("topgallant",_.topsail),b("royal",_.topgallant)}{let u=i.spritYard,_=new $l("spritsail",u,{drop:()=>3},.8);_.kind="sprit",e.square.push(_)}let s=i.bowsprit,r=i.masts.fore,o=i.masts.main,a=i.masts.mizzen;i.group.updateMatrixWorld(!0);let l=(u,_)=>Ne(u.local[_].clone(),u.group,i.group),c=(u,_,b,x,S)=>{let M=new su(u,i.group,_,b,x,S);M.kind=u,e.stay.push(M)},h=(u,_,b)=>u.clone().lerp(_,b),p=l(r,"topmastShroudHead"),d=l(r,"tgHead");c("foreTopmastStaysail",h(s.cap,p,.04),h(s.cap,p,.82),new R(r.x+4.5,xt("qd",24)+5,1.8),1),c("jib",h(s.jibEnd,p,.05),h(s.jibEnd,p,.78),new R(r.x+7,xt("qd",24)+8,4),1),c("flyingJib",h(s.flyEnd,d,.04),h(s.flyEnd,d,.62),new R(r.x+10.5,xt("qd",24)+13,6),.9);let f=l(o,"topmastShroudHead"),g=l(r,"lowerHead");c("mainTopmastStaysail",h(g,f,.14),h(g,f,.85),new R(o.x+4.5,o.h.topY+1.5,.6),.9);let y=l(a,"topmastShroudHead"),m=l(o,"topBack");c("mizzenStaysail",h(m,y,.14),h(m,y,.8),new R(a.x+3,a.h.topY+.5,.6),.8),e.spanker=new ru(a,i.gaff,i.boom),e.stun=[];for(let u of[r,o]){let _=u.yards;for(let b of[1,-1]){let x=(S,M)=>{M.kind=S,M.mastName=u.name,e.stun.push(M)};if(x("stunTop",new Po(`${u.name}-topmast-stunsail`,_.topsail,_.course,b)),x("stunTg",new Po(`${u.name}-topgallant-stunsail`,_.topgallant,_.topsail,b)),u===r){let S=xt("upper",u.x)+1.95;x("stunLower",new Po("fore-lower-stunsail",_.course,null,b,{parent:i.group,root:new R(u.x+.5,S+.4,b*(Lt(u.x+.5,S)+.9)),dropTo:()=>_.course.group.position.y-(we(u.x)+1.4),reach:7.5}))}}}return e}var Cv=new R(0,1,0),as=class{constructor(t,e,n){let s=new ne(1,1,1,6,1,!0);s.translate(0,.5,0),this.mesh=new bn(s,e,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.capacity=n,this._m=new Bt,this._q=new ze,this._s=new R,this._d=new R}begin(){this.n=0,this.segs=[],this.tag=""}add(t,e,n){if(this.n>=this.capacity)return;this.segs.push([t.clone(),e.clone(),this.tag]);let s=this._d.subVectors(e,t),r=s.length();r<1e-4||(this._q.setFromUnitVectors(Cv,s.multiplyScalar(1/r)),this._s.set(n,r,n),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.n++,this._m))}addSag(t,e,n,s=.02,r=4){let o=t.distanceTo(e),a=t.clone();for(let l=1;l<=r;l++){let c=l/r,h=t.clone().lerp(e,c);h.y-=s*o*4*c*(1-c),this.add(a,h,n),a=h}}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},Jl=class{constructor(t){let e=De();this.rig=t,this.space=t.group,this.standing=new as(this.space,e.rope,9e3),this.running=new as(this.space,e.ropeLight,600),this.sailLines=new as(this.space,e.ropeLight,2e3),this.sailLines.mesh.castShadow=!1,this.fittings=new jt,this.space.add(this.fittings),t.group.updateMatrixWorld(!0),this.colliders={},this.buildStanding(e)}P(t,e,...n){let s=t.local[e],r=typeof s=="function"?s(...n):s.clone();return Ne(r,t.group,this.space)}L(t,e){return Ne(e,t.group,this.space)}buildStanding(t){let e=this.standing;e.begin();let n=this.rig,s=[],r=[],o=[],a=(x,S,M)=>new R(x,S,M),l=(x,S,M,w,v,T)=>{for(let C=0;C<x.length-1;C++){let[P,L]=x[C],[N,D]=x[C+1];for(let B=M;B<w;B+=v){let X=(B-P.y)/(L.y-P.y),k=(B-N.y)/(D.y-N.y);X<0||X>1||k<0||k>1||e.add(P.clone().lerp(L,X),N.clone().lerp(D,k),T)}}};for(let x of Object.values(n.masts)){let S=x.scale,M=this.colliders[x.name]={lower:[],futtock:[],topmast:[],tg:[],backstay:[]},w=x.name==="main"?9:x.name==="fore"?8:6,v=x.x+.4*S,T=Math.max(x.x-7.8*S,x.name==="mizzen"?-21.9:-99),C=xt("upper",x.x)+1.95;for(let P of[1,-1]){let L=Lt(v,C),N=Lt(T,C);s.push(qe(a(v,C,P*(L+.5)),a(T,C,P*(N+.5)),1.2,.2));let D=[],B=this.P(x,"shroudHead");for(let dt=0;dt<w;dt++){let ot=v-.3-dt*(v-T-.6)/(w-1),ft=Lt(ot,C)+1.05,z=a(ot,C+.2,P*ft),q=a(ot,C+1.25,P*(ft-.03));r.push(z,q),e.tag=`${x.name} lanyard`,e.add(z,q,.025);let ct=vr[2],It=Math.round((ot-ct.x0)/ct.dx-.5),mt=ct.x0+(It+.5)*ct.dx,Dt=mt+Math.max(-.7,Math.min(.7,ot-mt)),ae=Lt(Dt,C-2.6)+.06;o.push([z.clone().add(a(0,-.15,0)),a(Dt,C-2.6,P*ae)]);let Q=B.clone().add(a(0,0,P*(x.r.lower+.12)));e.tag=`${x.name} lower shroud`,e.add(q,Q,.06*(.8+.2*S)),M.lower.push([q,Q]),D.push([q,Q])}e.tag=`${x.name} lower ratline`,l(D,null,C+1.8,B.y-1.2,.42,.016);let X=[],k=x.h;for(let dt=0;dt<4;dt++){let ot=-k.topLen*.36+dt*k.topLen*.16,ft=this.L(x,a(ot,k.topY+.2,P*k.topW*.48));r.push(ft);let z=this.L(x,a(ot*.3,k.topY-3.2*S,P*.65));e.tag=`${x.name} futtock shroud`,e.add(ft,z,.035),M.futtock.push([z,ft]),e.tag=`${x.name} topmast shroud`;let q=this.L(x,a(x.dTop,k.crossY-.3,P*.3));e.add(ft.clone().add(a(0,.9,0)),q,.045),M.topmast.push([ft.clone().add(a(0,.9,0)),q]),e.add(ft,ft.clone().add(a(0,.9,0)),.02),X.push([ft.clone().add(a(0,.9,0)),q])}e.tag=`${x.name} topmast ratline`,l(X,null,k.topY+1.6,k.crossY-1.2,.4,.013),e.tag=`${x.name} topgallant shroud`;let st=this.P(x,"crossEnd",P),Y=this.L(x,a(x.dTg,k.tgHead-.4,P*.14));e.add(st.clone().add(a(-.1,0,0)),Y,.03),e.add(st.clone().add(a(-.8,0,0)),Y,.03),M.tg.push([st.clone().add(a(-.1,0,0)),Y],[st.clone().add(a(-.8,0,0)),Y]),e.tag=`${x.name} backstay`;let tt=C+.15,et=dt=>{if(x.name==="mizzen"){let ft=-22.6-dt*.7,z=we(ft)-.3;return a(ft,z,P*(Lt(ft,z)+.6))}let ot=T-.9-dt*1.1;return a(ot,tt,P*(Lt(ot,tt)+.9))};for(let dt=0;dt<2;dt++){let ot=et(dt);r.push(ot),s.push(qe(ot.clone().add(a(.4,-.1,-P*.6)),ot.clone().add(a(-.4,-.1,-P*.6)),1.2,.2));let ft=this.L(x,a(x.dTop,k.topmastHead-.6,P*.25));e.add(ot,ft,.05),M.backstay.push([ot,ft])}let Pt=this.L(x,a(x.dTg,k.tgHead-.3,P*.12)),$=this.L(x,a(x.dTg,k.poleHead-.2,P*.1));e.add(et(2),Pt,.035),e.add(et(2),$,.025),M.backstay.push([et(2),Pt],[et(2),$])}}let c=n.bowsprit,h=n.masts.fore,p=n.masts.main,d=n.masts.mizzen,f=[["fore stay",this.P(h,"stayLower"),c.fore,.13],["fore preventer stay",this.P(h,"stayLower").add(a(0,-.3,0)),c.P(12.5,.4),.1],["fore topmast stay",this.P(h,"topmastShroudHead"),c.cap,.08],["jib stay",this.P(h,"topmastShroudHead"),c.jibEnd,.06],["fore topgallant stay",this.P(h,"tgHead"),c.flyEnd,.045],["fore royal stay",this.P(h,"poleHead"),c.flyEnd,.03],["main stay",this.P(p,"stayLower"),a(h.x+2.2,xt("qd",h.x+2.2)+.6,0),.14],["main preventer stay",this.P(p,"stayLower").add(a(0,-.3,0)),a(h.x+3,xt("qd",h.x+3)+.6,0),.1],["main topmast stay",this.P(p,"topmastShroudHead"),this.P(h,"lowerHead"),.08],["main topgallant stay",this.P(p,"tgHead"),this.P(h,"topmastShroudHead"),.045],["main royal stay",this.P(p,"poleHead"),this.P(h,"tgHead"),.03],["mizzen stay",this.P(d,"stayLower"),this.L(p,a(0,xt("qd",p.x)+3.5,0)),.1],["mizzen topmast stay",this.P(d,"topmastShroudHead"),this.P(p,"topBack"),.06],["mizzen topgallant stay",this.P(d,"tgHead"),this.P(p,"lowerHead"),.035]];this.stayLines={};for(let[x,S,M,w]of f)e.tag=x,e.add(S,M,w),this.stayLines[x]=[S,M];e.tag="bowsprit rigging";let g=x=>a(31+(x-2)*.35,x,0);e.tag="bobstay",e.add(c.P(10.5,-.3),g(1.6),.08),e.add(c.P(13.5,-.3),g(3.4),.08);for(let x of[1,-1])e.tag="bowsprit shroud",e.add(c.P(12,0),a(28.2,4.5,x*2),.06),e.add(c.P(16,0),a(28.4,5,x*2.1),.06),e.tag="martingale back rope",e.add(c.striker,a(27.5,xt("qd",27)-.6,x*2.2),.04);e.tag="martingale stay",e.add(c.jibEnd,c.striker,.04),e.add(c.flyEnd,c.striker,.035),e.end();let y=new as(this.space,t.iron,o.length);y.begin();for(let[x,S]of o)y.add(x,S,.04);y.end();let m=new j(Ft(s),t.black);m.castShadow=!0,this.fittings.add(m);let u=new ne(.17,.17,.12,10);u.rotateX(Math.PI/2);let _=new bn(u,t.darkWood,r.length),b=new Bt;r.forEach((x,S)=>{b.makeTranslation(x.x,x.y,x.z),_.setMatrixAt(S,b)}),this.fittings.add(_)}updateRunning(t,e,n){let s=this.running,r=this.rig,o=(y,m,u)=>new R(y,m,u);s.begin();let a=r.masts.main,l=r.masts.mizzen,c=(y,m,u)=>{let _=u;return y.name==="fore"?m.name==="course"?o(a.x+3.5,we(a.x+3.5)+.3,_*7.2):m.name==="topsail"?this.P(a,"crossEnd",_):m.name==="topgallant"?this.P(a,"tgHead"):this.P(a,"poleHead"):y.name==="main"?m.name==="course"?o(-21.5,we(-21.5)+.3,_*(Lt(-21.5,9)+.1)):m.name==="topsail"?o(l.x+1,we(l.x+1)+.6,_*(Lt(l.x+1,9)+.4)):this.P(l,"poleHead").add(o(0,.2,0)):m.name==="course"?this.L(a,o(-1.5,xt("qd",a.x)+6,_*3)):m.name==="topsail"?this.P(a,"topEdge",_):this.P(a,"crossEnd",_)},h={course:"lowerHead",topsail:"topmastHead",topgallant:"tgHead",royal:"poleHead"};for(let y of Object.values(r.masts))for(let m of Object.values(y.yards)){let u=this.P(y,h[m.name]);for(let _ of[1,-1]){let b=Ne(o(0,0,_*m.L*.48),m.group,this.space);s.tag=`${y.name} ${m.name} lift`,s.add(b,u.clone().add(o(0,0,_*.3)),.025),s.tag=`${y.name} ${m.name} brace`,s.addSag(b,c(y,m,_),.022,.012,3)}if(s.tag=`${y.name} ${m.name} tie`,s.add(Ne(o(0,m.r,0),m.group,this.space),u,.04),m.name!=="course"){s.tag=`${y.name} ${m.name} halyard`;let _=m.name==="topgallant"?-1:1,b=o(y.x-1.3,xt("upper",y.x)+(y.x>1&&y.x<15?.6:2.6),_*.9);s.add(u.clone().add(o(-.35,-.3,_*.2)),b,.03)}}for(let y of t.square){if(y.kind!=="course"||!y.mesh.visible)continue;let m=y.geo.attributes.position,u=[m.count-y.NU,m.count-1];s.tag=`${y.mastName} course sheet/tack`,u.forEach((_,b)=>{let x=Ne(o(m.getX(_),m.getY(_),m.getZ(_)),y.yard.group,this.space),S=Math.sign(x.z)||(b===0?-1:1),M=y.mastName==="fore"?9:-12;s.addSag(x,o(M,we(M)+.3,S*(Lt(M,9)+.1)),.03,.01,3),s.add(x,o(x.x+6,we(x.x+6)+.2,S*(Lt(x.x+6,9)-.1)),.03)})}for(let y of t.stay){if(!y.mesh.visible)continue;let m=y.geo.attributes.position,u=o(m.getX(y.NU-1),m.getY(y.NU-1),m.getZ(y.NU-1)),b=y.kind==="mainTopmastStaysail"||y.kind==="mizzenStaysail"?u.x+3:Math.min(23,u.x-4);s.tag=`${y.name} sheet`,s.addSag(u,o(b,we(b)+.3,Math.sign(u.z)*(Lt(b,9)-.2)),.025,.02,3)}let p=Ne(o(r.boom.L-.3,0,0),r.boom.group,this.space),d=Ne(o(r.gaff.L-.2,0,0),r.gaff.group,this.space);s.tag="boom topping lift";let f=1.3*n.belly*e["set.spanker"];for(let y of[1,-1]){let m=Ne(o(r.boom.L-.3,0,y*.45),r.boom.group,this.space),u=this.P(l,"lowerHead").add(o(0,0,y*.9)),_=y===n.lee?f+.35:0,b=m;for(let x=1;x<=8;x++){let S=x/8,M=m.clone().lerp(u,S);M.z+=y*_*Math.sin(Math.PI*Math.min(1,S*1.25)),s.add(b,M,.03),b=M}}s.tag="spanker sheet",s.addSag(p,o(-29,we(-29)+.3,0),.04,.01,2),s.tag="gaff vang",s.addSag(d,Ne(o(r.boom.L-.4,.15,0),r.boom.group,this.space),.02,.02,3),s.addSag(d,o(-28.5,we(-28.5)+.2,-n.lee*(Lt(-28.5,we(-28.5))-.1)),.02,.02,3),s.tag="peak halyard",s.add(d,this.P(l,"topmastShroudHead"),.03);let g=r.spritYard;s.tag="spritsail yard rigging";for(let y of[1,-1]){let m=Ne(o(0,0,y*g.L*.48),g.group,this.space);s.add(m,r.bowsprit.cap,.022),s.addSag(m,o(26.5,we(26.5)+.3,y*3.5),.02,.02,3)}s.end(),this.updateSailLines(t)}updateSailLines(t){let e=this.sailLines;e.begin();let n=new Bt().copy(this.space.matrixWorld).invert(),s=new Bt,r=new R,o=new R,a=new R,l=(f,g,y,m,u)=>{let _=f.geo.attributes.position,b=f.geo.attributes.normal,x=y*f.NU+g;return r.fromBufferAttribute(_,x),a.fromBufferAttribute(b,x),a.dot(u)<0&&a.negate(),r.clone().addScaledVector(a,m).applyMatrix4(s)},c=(f,g,y,m,u,_)=>{let b=null;for(let x=f.NV-1;x>=0;x--){let S=l(f,g,x,y,m);b&&e.add(b,S,u),b=S}_&&e.add(b,_.clone().applyMatrix4(s),u)},h=new R(1,0,0),p={course:[.2,.4,.6,.8],topsail:[.28,.5,.72],topgallant:[.35,.65]};for(let f of t.square){if(!f.mesh.visible||!p[f.kind])continue;s.multiplyMatrices(n,f.yard.group.matrixWorld);let g=f.yard.L*.465;e.tag=`${f.name} buntline`;for(let y of p[f.kind]){let m=Math.round(y*(f.NU-1)),u=-g+2*g*m/(f.NU-1);c(f,m,.06,h,.018,new R(f.yard.r+.05,f.yard.r*.6,u))}if(f.kind==="course"){e.tag=`${f.name} leechline`;for(let y of[.1,.9])c(f,Math.round(y*(f.NU-1)),-.06,h,.016,null)}e.tag=`${f.name} clewline`;for(let y of[0,f.NU-1]){let m=l(f,y,f.NV-1,-.05,h),u=y===0?-1:1;e.add(m,new R(-.25,-f.yard.r,u*g*.55).applyMatrix4(s),.018)}}let d=t.spanker;if(d.mesh.visible){s.multiplyMatrices(n,d.mast.group.matrixWorld),e.tag="spanker brail";let f=new R(0,0,1);for(let g of[.3,.55,.8]){let y=Math.round(g*(d.NV-1));for(let m of[.06,-.06]){let u=null;for(let _=d.NU-1;_>=0;_--){let b=l(d,_,y,m,f);u&&e.add(u,b,.016),u=b}}}}e.end()}};function Pv(i,t,e){let s=Lt(i,t),r=(Lt(i+.05,t)-Lt(i-.05,t))/(2*.05),o=(Lt(i,t+.05)-Lt(i,t-.05))/(2*.05),a=new R(-r,-o,e).normalize(),l=new R().crossVectors(new R(0,1,0),a).normalize(),c=new R().crossVectors(a,l).normalize();return{p:new R(i,t,e*s),n:a,a:l,up:c}}function Iv(i,t){let e=t*2.1,n=[[0,-.32*i/3],[e*.35,-.3*i/3],[e*.4,-.22*i/3],[e*.2,-.16*i/3],[e*.95,-.1*i/3],[e,0],[e*1.06,.02*i],[e*.98,.04*i],[e*.92,.38*i],[e*.98,.4*i],[e*.86,.42*i],[e*.72,.9*i],[e*.82,.95*i],[e*.78,i],[t,i],[t,i*.7]].map(([o,a])=>new rt(o,a)),s=new kn(n,14);s.rotateX(Math.PI/2);let r=new ne(e*.3,e*.3,e*2.8,8);return r.rotateZ(Math.PI/2),r.translate(0,0,.42*i),Ft([s,r])}function Lv(i,t){let e=t*1.65,n=[[0,-.1],[e*.5,-.09],[e*.75,-.04],[e*.95,.05],[e,.25*i],[e*.92,.6*i],[e*.86,.82*i],[e*1.05,.9*i],[e*1.08,i],[t,i],[t,i*.55]].map(([o,a])=>new rt(o,a)),s=new kn(n,16);s.rotateX(Math.PI/2);let r=new de(e*.5,e*.9,e*.9);return r.translate(0,-e*1.05,.45*i),Ft([s,r])}function Dv(i,t){let e=[],n=new de(t*3.2,t*1,i*1.5);n.translate(0,t*2.4,i*.75),e.push(n);let s=new de(t*3.6,t*1.6,i*1.3);s.translate(0,t*.95,i*.7),e.push(s);for(let r of[1,-1]){let o=new ne(t*.9,t*.9,t*.6,10);o.rotateZ(Math.PI/2),o.translate(r*t*2,t*.9,i*.15),e.push(o)}return Ft(e)}function Nv(i,t){let e=t*6.2,n=i*.5,s=[];for(let o of[1,-1]){let a=new ln;a.moveTo(0,0),a.lineTo(n,0),a.lineTo(n,t*5.2),a.lineTo(n*.62,t*5.2),a.lineTo(n*.55,t*3.8),a.lineTo(n*.3,t*3.4),a.lineTo(n*.22,t*2.4),a.lineTo(0,t*2.2),a.closePath();let l=new zn(a,{depth:t*.9,bevelEnabled:!1});l.rotateY(-Math.PI/2),l.translate(o*e/2+t*.45,0,0),s.push(l)}let r=new de(e,t*.8,n*.95);r.translate(0,t*1.4,n/2),s.push(r);for(let o of[n*.12,n*.85]){let a=new de(e*1.25,t*1.1,t*1.4);a.translate(0,t*1.4,o),s.push(a);for(let l of[1,-1]){let c=new ne(t*1.5,t*1.5,t*.7,12);c.rotateZ(Math.PI/2),c.translate(l*e*.62,t*1.5,o),s.push(c)}}return Ft(s)}var jl=class{constructor(t){let e=De();this.group=new jt,this.group.name="guns",t.add(this.group),this.ports=[];for(let s of Rs())for(let r of[1,-1]){let o=Pv(s.x,s.y,r),a=new R(o.n.x,0,o.n.z).normalize();this.ports.push({...s,side:r,basis:o,out:a,recoil:0,fireAt:-1})}this.byTier=new Map;for(let s of this.ports){let r=s.tier.name;this.byTier.has(r)||this.byTier.set(r,[]),this.byTier.get(r).push(s)}this.barrels=[],this.carriages=[];for(let[s,r]of this.byTier){let o=r[0].tier,a=new bn(o.carronade?Lv(o.len,o.bore):Iv(o.len,o.bore),e.iron,r.length);a.castShadow=!0,a.frustumCulled=!1;let l=new bn(o.carronade?Dv(o.len,o.bore):Nv(o.len,o.bore),e.carriage,r.length);l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1,this.group.add(a,l),this.barrels.push({mesh:a,list:r}),this.carriages.push({mesh:l,list:r})}this.lidPorts=this.ports.filter(s=>s.tier.lid);let n=new de(1,1,1);n.translate(0,-.5,.5),this.lids=new bn(n,[e.black,e.black,e.black,e.black,e.black,e.inside],this.lidPorts.length),this.lids.castShadow=!0,this.lids.frustumCulled=!1,this.group.add(this.lids),this.breeching=new as(this.group,e.rope,this.ports.length*6),this.breeching.mesh.castShadow=!1,this._m=new Bt,this._b=new Bt,this._r=new Bt,this._s=new Bt,this.apply(0,0)}apply(t,e){let n=this._m,s=this._b,r=this._r,o=this._s;this.lidPorts.forEach((p,d)=>{let{a:f,up:g,n:y,p:m}=p.basis,u=p.tier,_=m.clone().addScaledVector(g,u.h/2+.04).addScaledVector(y,.02);s.makeBasis(f,g,y).setPosition(_),r.makeRotationX(-t*1.45),o.makeScale(u.w+.12,u.h+.1,.11),n.copy(s).multiply(r).multiply(o),this.lids.setMatrixAt(d,n)}),this.lids.instanceMatrix.needsUpdate=!0;let a=new ze,l=new R,c=new R(1,1,1),h=new R(0,0,1);for(let{mesh:p,list:d}of this.barrels)d.forEach((f,g)=>{let y=f.tier;a.setFromUnitVectors(h,f.out);let m=xt(y.deck,f.x),u=f.basis.p.clone(),_=-.9+e*1.6-f.recoil*1.3;l.copy(u).addScaledVector(f.out,_-y.len),l.y=f.y-.02,p.setMatrixAt(g,n.compose(l,a,c))}),p.instanceMatrix.needsUpdate=!0;for(let{mesh:p,list:d}of this.carriages)d.forEach((f,g)=>{let y=f.tier;a.setFromUnitVectors(h,f.out);let m=f.basis.p.clone(),u=-.9+e*1.6-f.recoil*1.3;l.copy(m).addScaledVector(f.out,u-y.len*(y.carronade?1.2:.88)),l.y=xt(y.deck,f.x)+.02,p.setMatrixAt(g,n.compose(l,a,c))}),p.instanceMatrix.needsUpdate=!0;this.updateBreeching(e)}updateBreeching(t){let e=this.breeching;e.begin();for(let n of this.ports){let s=n.tier;if(s.carronade)continue;let r=-.9+t*1.6-n.recoil*1.3,o=n.basis.p.clone().addScaledVector(n.out,r-s.len-.1).setY(n.y-.02);for(let a of[1,-1]){let l=n.basis.p.clone().addScaledVector(n.basis.a,a*(s.w/2+.28)).addScaledVector(n.basis.n,-.04);l.y=n.y-.25,e.addSag(l,o,.028,.06,3)}}e.end()}muzzle(t,e){let n=-.9+e*1.6;return t.basis.p.clone().addScaledVector(t.out,n+.1).setY(t.y)}};function Uv(i,t,e){return Rn(24,10,(o,a)=>{let c=o/23*2-1,h=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(c),c>0?1.7:3)),.55),p=e*(.75+.25*(1-c*c)),d=a/9*Math.PI-Math.PI/2,f=.25*c*c*e;return[c*i/2,-p*Math.cos(d)*(1-.1*Math.abs(c))+f,h*Math.sin(d)]},null,!0)}function Ql(i,t,e,n="#2a2622"){let s=De(),r=new jt,o=new ge({color:n,roughness:.7,side:Ce}),a=new j(Uv(i,t,e),o);a.castShadow=!0,r.add(a);let l=[];for(let d=1;d<=4;d++){let f=-i/2+d/5*i,g=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(f/(i/2)),f>0?1.7:3)),.55),y=new de(.28,.06,g*1.8);y.translate(f,-e*.35,0),l.push(y)}let c=new j(Ft(l),s.darkWood);r.add(c);let h=[];for(let d=0;d<=40;d++){let f=d/40*Math.PI*2,g=Math.cos(f),y=t/2*Math.pow(Math.max(0,1-Math.pow(Math.abs(g),g>0?1.7:3)),.55);h.push(new R(g*i/2,.25*g*g*e+.02,Math.sign(Math.sin(f))*y))}let p=new j(new Vn(new ei(h,!0),80,.06,5,!0),new ge({color:"#d8cfb6",roughness:.6}));return r.add(p),r}function ou(){let i=De(),t=[],e=(l,c,h=0)=>new R(l,c,h);t.push(be(e(0,0),e(0,5.3),.13,.1,8));let n=[];for(let l of[1,-1]){let c=new Zi(e(0,.1),e(l*1.1,0),e(l*1.85,1.35));n.push(new Vn(c,10,.11,6));let h=new de(.85,1,.08);h.rotateZ(-l*.55),h.translate(l*1.7,1.15,0),n.push(h)}t.push(...n);let s=new yn(.32,.05,6,16);s.translate(0,5.65,0),t.push(s);let r=new j(Ft(t),i.iron),o=new j(new de(.32,.32,5),i.darkWood);o.position.y=5;let a=new jt;return a.add(r,o),a.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),a}function Fv(i){let t=new jt,e=()=>{let o=new jt,a=new j(new yn(.82,.05,6,28),i.darkWood);o.add(a);let l=new j(new ne(.16,.16,.22,10),i.brass);l.rotation.x=Math.PI/2,o.add(l);for(let c=0;c<10;c++){let h=c/10*Math.PI*2,p=new j(new ne(.03,.035,1.18,6),i.darkWood);p.position.set(Math.cos(h)*.59,Math.sin(h)*.59,0),p.rotation.z=h-Math.PI/2,o.add(p)}return o},n=e(),s=e();n.rotation.y=s.rotation.y=Math.PI/2,n.position.set(.55,1.15,0),s.position.set(-.55,1.15,0),t.add(n,s);let r=new j(new ne(.28,.28,1,12),i.darkWood);r.rotation.z=Math.PI/2,r.position.y=1.15,t.add(r);for(let o of[.85,-.85]){let a=new j(new de(.18,1.2,.4),i.darkWood);a.position.set(o,.6,0),t.add(a)}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function Ov(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#0e0905",t.fillRect(0,0,128,128),t.fillStyle="#8c7354";for(let n=0;n<8;n++)t.fillRect(n*16,0,9,128),t.fillRect(0,n*16,128,9);let e=new _n(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=Ln,e}var tc=class{constructor(t,e){let n=De();this.group=new jt,this.group.name="fittings",t.add(this.group);let s=this.group,r=(x=0,S=0,M=0)=>new R(x,S,M),o=x=>xt("qd",x)+.35,a=Ql(10.2,3,1.15,"#3a2c20");a.position.set(8.8,o(8.8)+1.1,0);let l=Ql(9.4,2.4,.95,"#1d1b19");l.position.set(8.4,o(8.4)+.95,2.95);let c=Ql(8.6,2.3,.9,"#1d1b19");c.position.set(8.8,o(8.8)+.9,-2.9),s.add(a,l,c);for(let x of[1,-1]){let M=we(-26.4)-.4,w=Lt(-26.4,M)+1.7,v=Ql(7.4,2,.8,"#1d1b19");v.position.set(-26.4,M,x*w),s.add(v);for(let T of[-2.6,2.6]){let C=r(-26.4+T,we(-26.4+T)-.2,x*(Lt(-26.4+T,9)-.2)),P=r(-26.4+T,we(-26.4+T)+1.2,x*(w+.1)),L=new j(be(C,P,.12,.09,8),n.black);L.castShadow=!0,s.add(L),this.davitRope=this.davitRope||[],this.davitRope.push([P,r(-26.4+T*.85,M+.2,x*w)])}}let h=oi-1,p=Fv(n);p.position.set(h,xt("qd",h),0),s.add(p);let d=new jt,f=new j(new de(.7,1,1.2),n.darkWood);f.position.y=.5;let g=new j(new nn(.28,12,8,0,Math.PI*2,0,Math.PI/2),n.brass);g.position.y=1,d.add(f,g),d.position.set(h+2,xt("qd",h+2),0),s.add(d);let y=(x,S,M=.75)=>{let w=new jt,v=new j(new ne(M*.75,M*.9,1,16),n.darkWood);v.position.y=.5;let T=new j(new ne(M*1.2,M*1.2,.35,16),n.darkWood);T.position.y=1.15,w.add(v,T);for(let C=0;C<12;C++){let P=C/12*Math.PI*2,L=new j(new de(.12,.9,.18),n.darkWood);L.position.set(Math.cos(P)*M*.85,.5,Math.sin(P)*M*.85),L.rotation.y=-P,w.add(L)}w.position.set(x,xt(S,x),0),w.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),s.add(w)};for(let x of["middle","lower"])y(-6.4,x,x==="middle"?.75:.62),y(3.7,x,x==="middle"?.55:.48);{let x=new jt,S=new j(new de(2.6,.5,2),n.darkWood);S.position.y=.25;let M=new j(new ne(1.1,1.1,2.6,3,1),n.glass);M.rotation.z=Math.PI/2,M.rotation.x=Math.PI/6,M.scale.set(1,1,.9),M.position.y=.75,x.add(S,M),x.position.set(-8.8,xt("qd",-8.8),0),s.add(x)}let m=Ov(),u=new ge({map:m,roughness:.85});for(let{x,w:S,d:M}of bi.filter(w=>w.x>rn+1&&w.x<Xe-1&&!w.ladder)){let w=new j(new de(S+.3,.3,M+.3),n.darkWood);w.position.set(x,xt("upper",x)+.15,0);let v=new j(new ni(S,M),u);v.rotation.x=-Math.PI/2,v.position.set(x,xt("upper",x)+.31,0),m.repeat.set(1,1),s.add(w,v)}{let x=new jt,S=[];for(let[v,T]of[[.4,.4],[.4,-.4],[-.4,.4],[-.4,-.4]]){let C=new ne(.06,.07,1.6,6);C.translate(v,.8,T),S.push(C)}let M=new sr(.75,.6,4);M.rotateY(Math.PI/4),M.translate(0,1.9,0),S.push(M),x.add(new j(Ft(S),n.ochre));let w=new j(new ne(.12,.28,.4,14,1,!0),n.brass);w.material=n.brass,w.position.y=1.25,x.add(w),x.position.set(Xe+.8,xt("qd",Xe+.8),0),s.add(x)}{let x=new j(new de(.6,1.6,.6),n.copper);x.position.set(20.3,xt("qd",20.3)+.8,1.6),x.castShadow=!0,s.add(x);let S=new j(new ne(.28,.28,.5,10),n.copper);S.rotation.z=Math.PI/2,S.position.set(20.3,xt("qd",20.3)+1.75,1.6),s.add(S)}this.lanterns=[];{let x=Be(we(-29.4))+.5,S=we(-29.4)+.1;for(let[M,w]of[[0,1.25],[3.2,.9],[-3.2,.9]]){let v=new jt,T=new j(new ne(.42*w,.32*w,1.1*w,6),n.lantern);T.position.y=.55*w;let C=new j(new sr(.5*w,.6*w,6),n.gold);C.position.y=1.4*w;let P=new j(new nn(.12*w,8,6),n.gold);P.position.y=1.8*w;let L=new j(new ne(.2*w,.35*w,.35*w,6),n.gold);L.position.y=-.1,v.add(T,C,P,L);let N=new j(be(r(.6,-.6),r(0,0),.06,.06,6),n.gold);v.add(N),v.position.set(x-.3,S+.4,M),s.add(v),this.lanterns.push(T)}}{let x=Be(we(-29.4))+.6,S=r(x,we(-29.4)-.5),M=r(x-2.2,we(-29.4)+6.5);s.add(new j(be(S,M,.09,.05,8),n.spar)),this.ensignStaff=M;let v=e.bowsprit.cap.clone().add(r(0,.4,0)),T=v.clone().add(r(.6,4.2,0));s.add(new j(be(v,T,.07,.04,8),n.spar)),this.jackStaff=T}this.anchors=[];for(let x of[1,-1]){let M=xt("qd",25.6)+.55,w=Lt(25.6,M)-.4,v=r(25.6+1.35,M+.2,x*(w+1.85)),T=ou(),C=r(Math.cos(1.05),Math.sin(1.05),x*.05).normalize(),P=v.clone().add(r(0,-.5,0)),L=P.clone().addScaledVector(C,-5.65);L.z=x*(Lt(L.x,L.y)+1.25);let N=P.clone().sub(L).normalize(),D=r(0,0,x).sub(N.clone().multiplyScalar(N.z*x)).normalize(),B=r().crossVectors(D,N);T.quaternion.setFromRotationMatrix(new Bt().makeBasis(D,N,B)),T.position.copy(L),s.add(T),this.anchors.push({obj:T,side:x,home:T.position.clone()})}let _=(x,S)=>{let M=ou(),w=xt("upper",x)+3.4,v=Lt(x,w-4)+.35;M.position.set(x,w-5.65,S*v),M.rotation.set(S*.06,Math.PI/2,0),s.add(M)};_(14.075,1),_(14.075,-1),_(11.025,1);let b=(x,S,M)=>{let w=ou();w.scale.setScalar(x),w.rotation.set(Math.PI/2,0,-Math.PI/2),w.position.set(S-2.6*x,xt("qd",S)+.5,M),s.add(w)};b(.6,12.6,4.7),b(.42,12.4,-4.7),this.cable=new j(new fe,n.rope),this.cable.castShadow=!0,s.add(this.cable),this.hawse=r(26.9,xt("middle",26.9)+.9,Lt(26.9,xt("middle",26.9)+.9)+.1)}setAnchor(t){let e=this.anchors[0];if(e.obj.visible=t<.95,e.obj.position.copy(e.home).add(new R(0,-t*16,0)),t>.02){let n=this.hawse,s=new R(n.x+4+t*18,pe(n.y-1,-9,t),n.z+t*3),r=n.clone().lerp(s,.5).add(new R(0,-t*2.5,0)),o=new Zi(n,r,s);this.cable.geometry.dispose(),this.cable.geometry=new Vn(o,16,.14,6),this.cable.visible=!0}else this.cable.visible=!1}};var ec={uTime:{value:0},uWind:{value:1}},Ui=class{constructor(t,e,n,s,r=0){let o=new ni(e,n,24,6);o.translate(e/2,-n/2,0);let a=new ge({map:Gf(t),side:Ce,roughness:.85});a.onBeforeCompile=l=>{l.uniforms.uTime=ec.uTime,l.uniforms.uWind=ec.uWind,l.uniforms.uW={value:e},l.uniforms.uTaper={value:r},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind, uW, uTaper;`).replace("#include <begin_vertex>",`vec3 transformed = position;
float f = position.x / uW;
transformed.y = (transformed.y + ${(n/2).toFixed(3)}) * (1.0 - uTaper * f) - ${(n/2).toFixed(3)};
float droop = (1.0 - uWind) * 0.75;
float wv = sin(position.x * 0.9 - uTime * (3.0 + 4.0 * uWind) + position.y * 0.4) * f * (0.18 + 0.35 * uWind) * uW * 0.12;
transformed.z += wv;
transformed.x *= mix(1.0, 0.55, droop);
transformed.y -= f * droop * uW * 0.6;
transformed.x -= abs(wv) * 0.25;`)},this.mesh=new j(o,a),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,s.add(this.mesh)}place(t,e){this.mesh.position.copy(t),this.mesh.rotation.set(0,Math.atan2(-e.z,e.x),0)}static update(t,e){ec.uTime.value=t,ec.uWind.value=e}};var Bv=`
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
}`,Hv=`
uniform sampler2D map;
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor.rgb, t.a * vColor.a);
  if (gl_FragColor.a < 0.003) discard;
  #include <fog_fragment>
}`,nc=class{constructor(t,e,n){this.max=e;let s=new lo,r=new ni(1,1);s.index=r.index,s.attributes.position=r.attributes.position,s.attributes.uv=r.attributes.uv,this.data=new Float32Array(e*4),this.color=new Float32Array(e*4),s.setAttribute("iData",new Ii(this.data,4).setUsage(Tl)),s.setAttribute("iColor",new Ii(this.color,4).setUsage(Tl)),s.instanceCount=0,this.geo=s;let o=new sn({uniforms:Es.merge([yt.fog,{map:{value:Zh()}}]),vertexShader:Bv,fragmentShader:Hv,transparent:!0,depthWrite:!1,fog:!0,blending:n?fo:es});o.uniforms.map.value=Zh(),this.mesh=new j(s,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?11:10,t.add(this.mesh),this.list=[]}spawn(t){this.list.length<this.max&&this.list.push(t)}update(t,e){let n=this.list;for(let s=n.length-1;s>=0;s--){let r=n[s];if(r.age+=t,r.age>=r.life){n.splice(s,1);continue}r.pos.addScaledVector(r.vel,t),r.vel.multiplyScalar(Math.exp(-r.drag*t)),r.vel.addScaledVector(r.acc,t)}e&&n.sort((s,r)=>r.pos.distanceToSquared(e)-s.pos.distanceToSquared(e)),n.forEach((s,r)=>{let o=s.age/s.life;this.data[r*4]=s.pos.x,this.data[r*4+1]=s.pos.y,this.data[r*4+2]=s.pos.z,this.data[r*4+3]=s.size0+(s.size1-s.size0)*Math.sqrt(o);let a=s.alpha*Math.min(1,s.age/(s.fadeIn||1e-4))*(1-o)**s.fadePow;this.color[r*4]=s.color[0],this.color[r*4+1]=s.color[1],this.color[r*4+2]=s.color[2],this.color[r*4+3]=a}),this.geo.instanceCount=n.length,this.geo.attributes.iData.needsUpdate=!0,this.geo.attributes.iColor.needsUpdate=!0}},ic=class{constructor(t){this.scene=t,this.smoke=new nc(t,1800,!1),this.flash=new nc(t,200,!0),this.rand=qn(99),this.lights=[];for(let e=0;e<2;e++){let n=new oo("#ffb060",0,60,1.6);t.add(n),this.lights.push({l:n,t:1})}this.li=0}gunshot(t,e,n){let s=this.rand;for(let o=0;o<3;o++)this.flash.spawn({pos:t.clone().addScaledVector(e,.6+o*.9),vel:e.clone().multiplyScalar(14),acc:new R,drag:6,age:0,life:.14+s()*.06,size0:2.6-o*.5,size1:3.6-o*.6,color:[1,.62,.25],alpha:1,fadePow:1});for(let o=0;o<14;o++){let a=e.clone().multiplyScalar(10+s()*22).add(new R((s()-.5)*4,(s()-.3)*3,(s()-.5)*4)),l=.82+s()*.12;this.smoke.spawn({pos:t.clone().addScaledVector(e,.5),vel:a,acc:new R(n.x,.35,n.z),drag:1.4+s()*.6,age:0,life:9+s()*7,fadeIn:.15,size0:1.2+s(),size1:9+s()*7,color:[l,l,l*.98],alpha:.55,fadePow:1.6})}let r=this.lights[this.li++%this.lights.length];r.l.position.copy(t).addScaledVector(e,2),r.t=0}update(t,e){this.smoke.update(t,e),this.flash.update(t,null);for(let n of this.lights)n.t+=t,n.l.intensity=n.t<.18?900*(1-n.t/.18):0}},sc=class{constructor(t,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=qn(41);s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,256,256);for(let u=0;u<1400;u++){let _=r()*256,b=r()*256,x=1+r()*7;s.fillStyle=`rgba(255,255,255,${.1+r()*.35})`,s.beginPath(),s.ellipse(_,b,x*1.6,x,0,0,Math.PI*2),s.fill();for(let[S,M]of[[256,0],[-256,0],[0,256],[0,-256]])s.beginPath(),s.ellipse(_+S,b+M,x*1.6,x,0,0,Math.PI*2),s.fill()}let o=new _n(n);o.wrapS=o.wrapT=Ln,this.tex=o,this.uniforms={uFoam:{value:o},uScroll:{value:0},uStrength:{value:0}};let a=[],l=[],c=[],h=[],p=(u,_,b,x=12)=>{let S=a.length/3;for(let M=0;M<u;M++){let w=b(M/(u-1));for(let v=0;v<_;v++){let T=v/(_-1)*2-1,C=w.x+w.px*T*w.half,P=w.z+w.pz*T*w.half;a.push(C,0,P),l.push(C/x,P/x),c.push(Math.min(1,w.a(T)))}}for(let M=0;M<u-1;M++)for(let w=0;w<_-1;w++){let v=S+M*_+w,T=v+_,C=v+1,P=T+1;h.push(v,T,C,T,P,C)}},d=Be(0)+.3,f=cn(0);for(let u of[1,-1])p(110,6,_=>{let b=d+(f-d)*_,x=1.6+6.5*_**3,S=Lt(b,.05);return{x:b+.6*_**2,z:u*(S-.3+x/2),px:0,pz:u,half:x/2,a:M=>(1-(M+1)/2)**1.3*(.6+1.3*_**2.2)}},9);p(60,9,u=>({x:d-u*260,z:0,px:0,pz:1,half:2.6+18*u**.8,a:_=>(1-u)**1.8*(1-_*_)*.95*Math.min(1,u*40+.3)}),14);let g=fn.degToRad(19.5);for(let u of[1,-1]){let _=f-3.5,b=u*(Lt(_,.05)+1.5),x=-Math.cos(g),S=u*Math.sin(g);p(50,5,M=>{let w=M*240;return{x:_+x*w,z:b+S*w,px:S*u,pz:-x*u,half:1.4+w*.035,a:v=>.6*(1-M)**1.5*(1-v*v)*Math.min(1,M*30+.2)}},12)}let y=new fe;y.setAttribute("position",new Jt(a,3)),y.setAttribute("uv",new Jt(l,2)),y.setAttribute("alpha",new Jt(c,1)),y.setIndex(h);let m=new sn({uniforms:Es.merge([yt.fog,this.uniforms]),vertexShader:`attribute float alpha; varying float vA; varying vec2 vUv; varying vec3 vWorldP;
        ${Zf}
        #include <fog_pars_vertex>
        void main(){ vA = alpha; vUv = uv; vec3 p = position; p.y = seaHeight(p.xz) + 0.07;
        vWorldP = (modelMatrix * vec4(p, 1.0)).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
        }`,fragmentShader:`uniform sampler2D uFoam; uniform float uScroll, uStrength; varying float vA; varying vec2 vUv; varying vec3 vWorldP;
        ${Jh}
        #include <fog_pars_fragment>
        void main(){ if (insideHull(vWorldP)) discard; float f = texture2D(uFoam, vUv + vec2(uScroll, 0.0)).a;
        float f2 = texture2D(uFoam, vUv * 0.6 + vec2(uScroll * 0.7, 0.31)).a;
        gl_FragColor = vec4(vec3(0.95), (f * 0.7 + f2 * 0.6) * vA * uStrength);
        #include <fog_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!0,side:Ce,polygonOffset:!0,polygonOffsetFactor:-2});m.uniforms.uFoam.value=o;for(let u of["uTime","uOffset","uWaveScale","uWaveRot","uShipInv","uHB0","uHB1","uHB2"])m.uniforms[u]=e[u];this.uniforms=m.uniforms,this.mesh=new j(y,m),this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t,e){this.uniforms.uScroll.value=t/9%1,this.uniforms.uStrength.value=Math.min(1,e/5)*.9+.1}};var zv=["course","topsail","topgallant","royal","sprit","foreTopmastStaysail","jib","flyingJib","mainTopmastStaysail","mizzenStaysail","spanker","stunTop","stunTg","stunLower"],kv={stunTop:0,stunTg:0,stunLower:0},rc=i=>Object.fromEntries(zv.map(t=>[t,i])),ls={sail:{set:{...rc(1),sprit:0,...kv},hoist:{topsail:1,topgallant:1,royal:1},ports:0,runOut:0,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:0},trafalgar:{set:{...rc(1),sprit:0},hoist:{topsail:1,topgallant:1,royal:1},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:1,cleared:1,wind:{dir:-160,str:.15}},action:{set:{...rc(0),topsail:1,foreTopmastStaysail:1,jib:1,spanker:1},hoist:{topsail:1,topgallant:1,royal:0},ports:1,runOut:1,anchor:0,gaffEnsign:1,jack:0,unionStays:0,cleared:1},anchor:{set:rc(0),hoist:{topsail:0,topgallant:0,royal:0},ports:0,runOut:0,anchor:1,gaffEnsign:0,jack:1,unionStays:0,cleared:0}},Vv={course:.3,topsail:.32,topgallant:.13,royal:.05,sprit:0,foreTopmastStaysail:.04,jib:.04,flyingJib:.03,mainTopmastStaysail:.02,mizzenStaysail:.02,spanker:.05,stunTop:.06,stunTg:.03,stunLower:.05},au=i=>Math.min(1,Math.max(0,i)),lu=i=>(i+540)%360-180;function Gv(i,t,e){let n=fn.degToRad(lu(t*(1-i.anchor))),s=Math.abs(n),r=n<0?-1:1,o=n<=0?1:-1,a=0;for(let[g,y]of Object.entries(Vv))a+=y*(i[`set.${g}`]??0);let l=au((s-fn.degToRad(48))/fn.degToRad(30)),c=1-i.anchor,h=6*e*Math.pow(a,.8)*l*(.75+.25*Math.sin(s))*c,p=2+12*e,d=new R(-Math.cos(n),0,-Math.sin(n)).multiplyScalar(p),f=d.clone().add(new R(-h,0,0));return{rel:n,lee:o,area:a,drive:l,speed:h,toward:d,apparent:f,brace:r*.5*au((Math.PI-s)/fn.degToRad(110))*c,heel:-r*e*.12*a*Math.abs(Math.sin(n))*l,boomSwing:-r*(.06+.5*au((s-.8)/2.35))*c,belly:(.3+.7*e)*Math.max(l,.06),luff:(1-l)*(.2+e),waveScale:(.35+.9*e)*(1-.35*i.anchor)}}function sp(i){let t={};for(let[e,n]of Object.entries(i))if(e!=="wind")if(typeof n=="object")for(let[s,r]of Object.entries(n))t[`${e}.${s}`]=r;else t[e]=n;return t}var Wv=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function Xv(i,t,e){let n=e>t;return i.startsWith("set.")?n?[.35,.9]:[0,.55]:i.startsWith("hoist.")?n?[.05,.45]:[.45,.9]:i==="ports"?n?[.1,.45]:[.5,.85]:i==="runOut"?n?[.45,.95]:[.05,.45]:i==="anchor"?n?[.55,.95]:[0,.4]:i==="gaffEnsign"||i==="jack"||i==="unionStays"?[.5,.52]:i.startsWith("set.stun")?n?[.75,1]:[0,.3]:i==="cleared"?n?[.05,.25]:[.7,.9]:[0,1]}var oc=class{constructor(t,e){this.scene=t,this.sea=e,this.root=new jt,this.body=new jt,this.root.add(this.body);let n=Jf();this.body.add(n),this.body.add(jf()),n.traverse(s=>{s.isMesh&&["planking","innerPlanking","stern","bulwark"].includes(s.name)&&(s.userData.shell=!0)}),n.getObjectByName("quarterGalleries")?.traverse(s=>{s.isMesh&&(s.userData.shell=!0)}),this.rig=new Zl,this.body.add(this.rig.group),this.root.updateMatrixWorld(!0),this.sails=ip(this.rig,this.body),this.rigging=new Jl(this.rig),this.guns=new jl(this.body),this.fittings=new tc(this.body,this.rig),this.furnishing=ep(this.fittings),this.body.add(this.furnishing),this.clearables=[{setCleared:s=>this.furnishing.userData.setCleared(s)}],this.isCleared=null;for(let s of this.sails.square){let r=this.rigging.colliders[s.mastName];if(!r)continue;s.space=this.rig.group,s.colliders={course:[...r.lower,...r.futtock,...r.backstay],topsail:[...r.topmast,...r.backstay],topgallant:[...r.tg,...r.backstay],royal:[...r.backstay]}[s.kind]||[];let o={fore:{course:["fore stay","fore preventer stay"],topsail:["fore topmast stay","jib stay"],topgallant:["fore topgallant stay"],royal:["fore royal stay"]},main:{course:["main stay","main preventer stay"],topsail:["main topmast stay"],topgallant:["main topgallant stay"],royal:["main royal stay"]},mizzen:{topsail:["mizzen topmast stay"],topgallant:["mizzen topgallant stay"]}}[s.mastName]?.[s.kind]||[];s.stays=o.map(a=>this.rigging.stayLines[a]).filter(Boolean)}this.flags={ensign:new Ui("ensign",8.5,4.25,this.body),admiral:new Ui("admiral",5,2.5,this.body),jack:new Ui("union",4.2,2.1,this.body),unionFore:new Ui("union",3.6,1.8,this.body),unionMain:new Ui("union",3.6,1.8,this.body)},this.effects=new ic(t),this.wake=new sc(t,e.uniforms),this.distance=0,this.pose="sail",this.cur=sp(ls.sail),this.tween=null,this.dirty=!0,this.broadside=null,this.time=0,this.windTarget={dir:-135,str:.6},this.windNow={...this.windTarget}}setWind(t,e,n=!1){t!=null&&(this.windTarget.dir=t),e!=null&&(this.windTarget.str=e),n&&(this.windNow={...this.windTarget}),this.dirty=!0}poseNames(){return Object.keys(ls)}setPose(t,e=!1){if(!ls[t])return;this.pose=t;let n=sp(ls[t]);if(e){this.cur=n,this.tween=null,this.dirty=!0;return}this.tween={from:{...this.cur},to:n,k:0,dur:8}}fireBroadside(){if(!ls[this.pose].ports||this.broadside)return;let t=this.guns.ports.filter(n=>n.side===1).sort((n,s)=>s.x-n.x),e=0;for(let n of t)n.fireAt=this.time+e+Math.random()*.08,e+=.075;this.broadside={list:t,end:this.time+e+4}}update(t,e){if(this.time=t,this.tween){let C=this.tween;C.k=Math.min(1,C.k+e/C.dur);for(let P of Object.keys(C.to)){let L=C.from[P],N=C.to[P],[D,B]=Xv(P,L,N),X=Math.min(1,Math.max(0,(C.k-D)/(B-D)));this.cur[P]=L+(N-L)*Wv(X)}C.k>=1&&(this.tween=null),this.dirty=!0}let n=this.cur,s=this.windNow,r=this.windTarget,o=1-Math.exp(-e*1.2),a=lu(r.dir-s.dir),l=r.str-s.str;(Math.abs(a)>.05||Math.abs(l)>.001)&&(s.dir=lu(s.dir+a*o),s.str+=l*o,this.dirty=!0);let c=Gv(n,s.dir,s.str);this.W=c;let h=this.sea;h.setScale(c.waveScale),h.setDirection(Math.atan2(c.toward.z,c.toward.x));let p=22,d=6,f=h.heightAt(p,0),g=h.heightAt(-p,0),y=h.heightAt(0,-d),m=h.heightAt(0,d),u=h.heightAt(0,0);this.root.position.y=(f+g+y+m+u*2)/6*.85,this.root.rotation.z=Math.atan2(f-g,2*p)*.8,this.root.rotation.x=-Math.atan2(m-y,2*d)*.6,this.body.rotation.x=c.heel,this.body.rotation.z=Nf,this.distance+=c.speed*e,this.dirty&&this.rig.applyYards({hoist:{topsail:n["hoist.topsail"],topgallant:n["hoist.topgallant"],royal:n["hoist.royal"]},brace:c.brace,boomSwing:c.boomSwing}),this.root.updateMatrixWorld(!0),this.sea.uniforms.uShipInv.value.copy(this.body.matrixWorld).invert();for(let C of this.sails.square)C.update(n[`set.${C.kind}`],c.belly,t,c.luff);for(let C of this.sails.stay)C.update(n[`set.${C.kind}`],c.belly,t,c.lee);this.sails.spanker.update(n["set.spanker"],c.belly,t,c.lee);for(let C of this.sails.stun)C.update(n[`set.${C.kind}`],c.belly,t);let _=this.dirty;if(this.broadside){let C=this.broadside,P=c.apparent.clone().multiplyScalar(.5);for(let L of C.list){if(L.fireAt>0&&t>=L.fireAt){L.fireAt=-1,L.firedAt=t;let N=this.guns.muzzle(L,n.runOut),D=this.body.localToWorld(N.clone()),B=L.out.clone().transformDirection(this.body.matrixWorld);this.effects.gunshot(D,B,P)}if(L.firedAt!=null){let N=t-L.firedAt;L.recoil=N<.12?N/.12:Math.max(0,1-(N-.6)/2.4),N>3.2&&(L.recoil=0,L.firedAt=null)}}_=!0,t>C.end&&(this.broadside=null)}_&&this.guns.apply(n.ports,n.runOut),this.rigging.updateRunning(this.sails,n,c),this.dirty&&this.fittings.setAnchor(n.anchor);let b=n.cleared>.5;if(b!==this.isCleared){this.isCleared=b;for(let C of this.clearables)C.setCleared(b)}let x=this.rig,S=c.apparent.clone().setY(0).normalize();Ui.update(t,.2+.8*Math.min(1,c.apparent.length()/12));let M=(C,P)=>Ne(C.local[P].clone(),C.group,this.body),w=Ne(new R(x.gaff.L-.1,0,0),x.gaff.group,this.body),v=this.flags.ensign;n.gaffEnsign>.5?v.place(w,S):v.place(this.fittings.ensignStaff,S),this.flags.admiral.place(M(x.masts.fore,"poleHead").add(new R(0,.1,0)),S);let T=(C,P)=>{let[L,N]=this.rigging.stayLines[C];return L.clone().lerp(N,P).add(new R(0,-.3,0))};for(let[C,P,L]of[[this.flags.unionFore,"fore topgallant stay",.42],[this.flags.unionMain,"main topmast stay",.5]])C.mesh.visible=n.unionStays>.5,C.place(T(P,L),S);this.flags.jack.mesh.visible=n.jack>.5,this.flags.jack.place(this.fittings.jackStaff,S),this.effects.update(e,this.scene.userData.camera?.position),this.wake.update(this.distance,c.speed),this.dirty=!1}};var cu={sail:"Full sail",trafalgar:"Trafalgar, 1805",action:"Cleared for action",anchor:"At anchor",quarter:"Quarter",broadside:"Broadside",bow:"Bow",stern:"Stern",deck:"Deck",aloft:"Aloft",galleries:"Galleries",head:"Figurehead",inside:"Inside",all:"All",quarterdeck:"Quarterdeck",upper:"Upper deck",middle:"Middle deck",lower:"Lower deck",orlop:"Orlop",hold:"Hold"};function hu(i,t){let e=Math.abs(i),n=i<0?"port":"starboard",s=e<22.5?"dead ahead":e<67.5?`on the ${n} bow`:e<112.5?`on the ${n} beam`:e<157.5?`on the ${n} quarter`:"dead astern";return`${t<.12?"Light air":t<.3?"Light breeze":t<.5?"Moderate breeze":t<.7?"Fresh breeze":t<.88?"Strong breeze":"Near gale"}, ${s}`}var ac=class{constructor({onPose:t,onView:e,onFire:n,onWind:s,wind:r,poses:o,views:a,levels:l,onLevel:c,onCut:h,onXray:p,onLabels:d}){let f=document.getElementById("ui");f.innerHTML=`
      <h1>HMS Victory <span>1805</span></h1>
      <div class="group"><div class="label">Pose</div><div class="row" id="poses"></div></div>
      <div class="group" id="fireGroup"><button id="fire" class="accent">Fire broadside</button></div>
      <div class="group"><div class="label">Wind</div>
        <div class="slider"><span>From</span><input id="windDir" type="range" min="-180" max="180" step="5"></div>
        <div class="slider"><span>Strength</span><input id="windStr" type="range" min="0" max="100" step="1"></div>
        <div class="windText" id="windText"></div>
        <div class="windHint" id="windHint"></div></div>
      <div class="group"><div class="label">Inside: show decks down to</div><div class="row" id="levels"></div>
        <div class="slider"><span>Cut open</span><input id="cut" type="range" min="0" max="100" step="1" value="0"></div>
        <label class="check"><input id="xray" type="checkbox"> X-ray hull</label>
        <label class="check"><input id="labels" type="checkbox" checked> Room labels</label></div>
      <div class="group"><div class="label">View</div><div class="row" id="views"></div></div>
      <div class="hint">Drag to orbit \xB7 scroll to zoom \xB7 right-drag to pan</div>`,this.poseButtons={};let g=f.querySelector("#poses");for(let M of o){let w=document.createElement("button");w.textContent=cu[M]||M,w.onclick=()=>{t(M),this.setPose(M)},g.appendChild(w),this.poseButtons[M]=w}let y=f.querySelector("#views");for(let M of a){let w=document.createElement("button");w.textContent=cu[M]||M,w.onclick=()=>e(M),y.appendChild(w)}this.levelButtons={};let m=f.querySelector("#levels");for(let M of l){let w=document.createElement("button");w.textContent=cu[M]||M,w.onclick=()=>{c(M),this.setLevel(M)},m.appendChild(w),this.levelButtons[M]=w}this.setLevel("all"),f.querySelector("#cut").oninput=M=>h(+M.target.value/100),f.querySelector("#xray").onchange=M=>p(M.target.checked),f.querySelector("#labels").onchange=M=>d(M.target.checked),this.fireGroup=f.querySelector("#fireGroup"),f.querySelector("#fire").onclick=n;let u=f.querySelector("#windDir"),_=f.querySelector("#windStr"),b=f.querySelector("#windText"),x=f.querySelector("#windHint");u.value=r.dir,_.value=Math.round(r.str*100);let S=()=>{let M=+u.value,w=+_.value/100;b.textContent=hu(M,w),x.textContent=Math.abs(M)<50?"Too close to the wind: her sails shiver and she loses way.":"",s(M,w)};u.oninput=_.oninput=S,b.textContent=hu(r.dir,r.str),this.windSet=(M,w)=>{u.value=M,_.value=Math.round(w*100),b.textContent=hu(M,w),x.textContent=""}}setLevel(t){for(let[e,n]of Object.entries(this.levelButtons))n.classList.toggle("active",e===t)}setPose(t){for(let[e,n]of Object.entries(this.poseButtons))n.classList.toggle("active",e===t);this.fireGroup.style.display=t==="action"||t==="trafalgar"?"":"none"}};var qv=1e-7,uu=new R,du=new R,fu=new R,pu=new R,mu=new R,gu=new R;function rp(i,t,e,n,s){gu.subVectors(t,i),uu.subVectors(n,e),du.subVectors(s,e),fu.crossVectors(gu,du);let r=uu.dot(fu);if(Math.abs(r)<qv)return!1;let o=1/r;pu.subVectors(i,e);let a=pu.dot(fu)*o;if(a<0||a>1)return!1;mu.crossVectors(pu,uu);let l=gu.dot(mu)*o;if(l<0||a+l>1)return!1;let c=du.dot(mu)*o;return c>0&&c<1}function Yv(i,t){let e=i.mesh;if(!e.visible)return null;let n=new Bt().multiplyMatrices(t,e.matrixWorld),s=e.geometry.attributes.position,r=i.NU,o=i.NV,a=(p,d)=>new R().fromBufferAttribute(s,d*r+p).applyMatrix4(n),l=[],c=new Dn,h=[];for(let p=1;p<o-2;p++)for(let d=1;d<r-2;d++){let f=a(d,p),g=a(d+1,p),y=a(d,p+1),m=a(d+1,p+1);l.push([f,g,m],[f,m,y]),c.expandByPoint(f).expandByPoint(g).expandByPoint(y).expandByPoint(m),h.push([f,g],[f,y])}return{name:i.name,tris:l,box:c,lines:h}}function op(i){i.root.updateMatrixWorld(!0);let t=new Bt().copy(i.body.matrixWorld).invert(),n=[...i.sails.square,...i.sails.stay,i.sails.spanker,...i.sails.stun].map(h=>Yv(h,t)).filter(Boolean),s=[];for(let h of[i.rigging.standing,i.rigging.running,i.rigging.sailLines])for(let p of h.segs)s.push(p);let r=(h,p,d)=>new R(h,p,d),o=(h,p)=>p.applyMatrix4(new Bt().multiplyMatrices(t,h.matrixWorld));for(let h of Object.values(i.rig.masts)){for(let y of Object.values(h.yards))s.push([o(y.group,r(0,0,-y.L/2)),o(y.group,r(0,0,y.L/2)),`${h.name} ${y.name} yard`]);let p=h.h;s.push([o(h.group,r(0,0,0)),o(h.group,r(0,p.lowerHead,0)),`${h.name} lower mast`]),s.push([o(h.group,r(h.dTop,p.topmastHeel,0)),o(h.group,r(h.dTop,p.topmastHead,0)),`${h.name} topmast`]),s.push([o(h.group,r(h.dTg,p.tgHeel,0)),o(h.group,r(h.dTg,p.poleHead,0)),`${h.name} topgallant mast`]);let d=p.topLen,f=p.topW/2,g=p.topY+.2;s.push([o(h.group,r(-d*.45,g,-f)),o(h.group,r(d*.55,g,-f)),`${h.name} top`]),s.push([o(h.group,r(-d*.45,g,f)),o(h.group,r(d*.55,g,f)),`${h.name} top`]),s.push([o(h.group,r(d*.55,g,-f)),o(h.group,r(d*.55,g,f)),`${h.name} top`])}let a=new Map,l=new Dn,c=(h,p)=>{let d=`${h}  x  ${p}`;a.set(d,(a.get(d)||0)+1)};for(let[h,p,d]of s){l.makeEmpty().expandByPoint(h).expandByPoint(p);for(let f of n)if(l.intersectsBox(f.box)){for(let[g,y,m]of f.tris)if(rp(h,p,g,y,m)){c(d,f.name);break}}}for(let h of n)for(let p of n){if(h===p||!h.box.intersectsBox(p.box))continue;let d=0;for(let[f,g]of h.lines)if(l.makeEmpty().expandByPoint(f).expandByPoint(g),!!l.intersectsBox(p.box)){for(let[y,m,u]of p.tris)if(rp(f,g,y,m,u)){d++;break}}d&&h.name<p.name&&c(`sail ${h.name}`,p.name)}return[...a.entries()].sort((h,p)=>p[1]-h[1]).map(([h,p])=>`${p}	${h}`)}var lc={all:1/0,quarterdeck:le.poop-.52,upper:le.qd-.52,middle:le.upper-.52,lower:le.middle-.52,orlop:le.lower-.52,hold:le.orlop-.52},cc=class{constructor(t,e){this.ship=t,this.sun=e,this.uniforms={uShipInv:{value:new Bt},uCutY:{value:1e5},uCutZ:{value:1e5}},this.rigCutZ={value:1e5},this.shellCutY={value:1e5},this.level="all",this.cutZ=1e5,this.xray=!1,this.applied=new WeakSet,this.applyAll()}applyAll(){let t=[this.ship.rig.group,...Object.values(this.ship.flags).map(s=>s.mesh)],e=s=>{for(let r=s;r;r=r.parent)if(t.includes(r))return!0;return!1},n=s=>this.ship.body.traverse(r=>{if(!(!r.material||e(r)!==s))for(let o of Array.isArray(r.material)?r.material:[r.material])this.inject(o,s,!!r.userData.shell)});n(!1),n(!0)}inject(t,e=!1,n=!1){if(this.applied.has(t))return;this.applied.add(t);let s=this.uniforms,r=t.onBeforeCompile,o=t.customProgramCacheKey?t.customProgramCacheKey():"";t.onBeforeCompile=(a,l)=>{r&&r.call(t,a,l),a.uniforms.uShipInv=s.uShipInv,a.uniforms.uCutY=n?this.shellCutY:s.uCutY,a.uniforms.uCutZ=e?this.rigCutZ:s.uCutZ,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uShipInv;
varying vec3 vCutPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 cutP = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
cutP = instanceMatrix * cutP;
#endif
vCutPos = (uShipInv * modelMatrix * cutP).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCutY, uCutZ;
varying vec3 vCutPos;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
{ float cutSheer = 0.85 * pow((vCutPos.x - 2.0) / 28.0, 2.0);
  if (vCutPos.y > uCutY + cutSheer || vCutPos.z > uCutZ) discard; }`)},t.customProgramCacheKey=()=>`${o}|cut${e?"R":""}${n?"S":""}`,t.needsUpdate=!0}get active(){return this.level!=="all"||this.cutZ<50}setLevel(t){this.level=t,this.uniforms.uCutY.value=Number.isFinite(lc[t])?lc[t]:1e5,this.shellCutY.value=Math.max(this.uniforms.uCutY.value,.6),this.refresh()}setCut(t){this.cutZ=t<=.001?1e5:9-t*9.2,this.uniforms.uCutZ.value=this.cutZ,this.refresh()}setXray(t){this.xray=t,this.ship.body.traverse(e=>{if(!e.isMesh||!e.userData.shell)return;let n=e.material;e.userData.solid||(e.userData.solid={transparent:n.transparent,opacity:n.opacity,depthWrite:n.depthWrite});let s=e.userData.solid;n.transparent=t?!0:s.transparent,n.opacity=t?.14:s.opacity,n.depthWrite=t?!1:s.depthWrite,n.needsUpdate=!0})}refresh(){let t=!this.active;this.sun.castShadow!==t&&(this.sun.castShadow=t)}update(){this.uniforms.uShipInv.value.copy(this.ship.body.matrixWorld).invert()}};var hc=class extends en{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new rt(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Sr=new R,ap=new Bt,lp=new Bt,cp=new R,hp=new R,uc=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(g,y){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),ap.copy(y.matrixWorldInverse),lp.multiplyMatrices(y.projectionMatrix,ap),h(g,g,y),this.sortObjects&&f(g)},this.setSize=function(g,y){n=g,s=y,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=y+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let y=0,m=g.children.length;y<m;y++)c(g.children[y])}function h(g,y,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Sr.setFromMatrixPosition(g.matrixWorld),Sr.applyMatrix4(lp);let u=Sr.z>=-1&&Sr.z<=1&&g.layers.test(m.layers)===!0,_=g.element;if(_.style.display=u===!0?"":"none",u===!0){g.onBeforeRender(e,y,m);let x=100*g.center.x,S=100*g.center.y;_.style.transformOrigin=`${x}% ${S}%`;let M=-g.rotation2D,w=Sr.x*r+r,v=-Sr.y*o+o;_.style.transform=`translate(${-x}%, ${-S}%) translate(${w}px, ${v}px) rotate(${M}rad)`,_.parentNode!==l&&l.appendChild(_),g.onAfterRender(e,y,m)}let b={distanceToCameraSquared:p(m,g)};a.objects.set(g,b)}for(let u=0,_=g.children.length;u<_;u++)h(g.children[u],y,m)}function p(g,y){return cp.setFromMatrixPosition(g.matrixWorld),hp.setFromMatrixPosition(y.matrixWorld),cp.distanceToSquared(hp)}function d(g){let y=[];return g.traverseVisible(function(m){m.isCSS2DObject&&y.push(m)}),y}function f(g){let y=d(g).sort(function(u,_){if(u.renderOrder!==_.renderOrder)return _.renderOrder-u.renderOrder;let b=a.objects.get(u).distanceToCameraSquared,x=a.objects.get(_).distanceToCameraSquared;return b-x}),m=y.length;for(let u=0,_=y.length;u<_;u++)y[u].element.style.zIndex=m-u}}};var up={hold:"orlop",orlop:"lower",lower:"middle",middle:"upper",upper:"qd",qd:"poop"},dp={qd:"quarterdeck",upper:"upper",middle:"middle",lower:"lower",orlop:"orlop",hold:"hold"},fp={qd:"Quarterdeck and forecastle",upper:"Upper gun deck",middle:"Middle gun deck",lower:"Lower gun deck",orlop:"Orlop",hold:"Hold"},Gt={wp:'Wikipedia, "HMS Victory" (citing McGowan)',hv:"HMS Victory official site (archived deck pages)",nmrn:"National Museum of the Royal Navy",beatty:"Beatty, Authentic Narrative of the Death of Lord Nelson (1807)",mckay:"modellers' readings of McKay's plans"},xu=[{deck:"qd",name:"Captain Hardy's day cabin",x0:-28.6,x1:-23.2,z0:-7,z1:7,walls:[["fore",7]],note:"The aftermost part of the quarterdeck, under the poop, lit by the stern windows. Hardy's day cabin held two guns, cleared away like the rest of the ship for battle.",source:`${Gt.wp}; photo captions`},{deck:"qd",name:"Captain's dining cabin",x0:-23.2,x1:-17.6,z0:-7,z1:0,walls:[["fore",3.5],"stbd"],note:"Where the captain dined, often with his officers. Its exact side is not certain.",source:`photo captions; ${Gt.mckay}`},{deck:"qd",name:"Captain's bed place",x0:-23.2,x1:-19.8,z0:0,z1:7,walls:[["fore",3]],note:"Hardy's sleeping cabin, part of his quarters under the poop.",source:"photo captions (medium confidence)"},{deck:"qd",name:"Master's cabin",x0:-17.6,x1:-13.6,z0:-7,z1:-1.7,walls:["aft",["stbd",2]],note:"The master was responsible for navigation. His cabin was on the larboard (port) side, beside the wheel.",source:`R. Fraser / P. Milford deck notes; ${Gt.mckay}`},{deck:"qd",name:"Secretary's cabin",x0:-17.6,x1:-13.6,z0:1.7,z1:7,walls:["aft",["port",2]],note:"Nelson's secretary, John Scott, was killed early in the battle. His cabin was to starboard of the wheel.",source:"R. Fraser / P. Milford deck notes (medium confidence)"},{deck:"qd",name:"Wheel",x0:-15,x1:-14,z0:-1,z1:1,lx:-14.4,ly:2.4,note:"The double wheel stands under the overhang of the poop, with the binnacle (compass) forward of it. At Trafalgar the wheel was shot away and she was steered from the gunroom below.",source:`${Gt.hv}; ${Gt.beatty}`},{deck:"qd",name:"Where Nelson fell",x0:-9,x1:-7,z0:1,z1:3,ly:.6,note:"Nelson was shot by a French marksman in the mizzen top of the Redoutable at about 1:15 pm while walking the quarterdeck with Hardy. A brass plaque marks the spot today; its exact position here is approximate.",source:`${Gt.hv}; ${Gt.beatty}`},{deck:"qd",name:"Forecastle",x0:18,x1:22,z0:-1,z1:1,ly:1.8,note:"Two 12-pounders and two 68-pounder carronades, the belfry and the galley chimney. The bell struck the half-hours of each watch.",source:Gt.wp},{deck:"upper",name:"Great cabin",x0:-28.9,x1:-23.6,z0:-7.4,z1:7.4,walls:[["fore",7.4]],note:"Nelson's day cabin and office at the stern windows, where he wrote his last prayer on the morning of the battle. With the dining cabin and sleeping quarters it took up about a quarter of the deck. His coffin later stood in the after part of this cabin.",source:`${Gt.hv}; ${Gt.beatty}`},{deck:"upper",name:"Dining cabin",x0:-23.6,x1:-18.6,z0:-7.4,z1:7.4,walls:[["fore",5.5]],note:"Where Nelson entertained his captains: the 'Band of Brothers' dined here before Trafalgar.",source:Gt.hv},{deck:"upper",name:"Nelson's sleeping cabin",x0:-18.6,x1:-15.2,z0:1.2,z1:7.4,walls:[["port",1.7],"fore"],note:"Nelson's cot hung between two 12-pounders. Which side it was on is not recorded in the sources found; it is shown to starboard.",source:"R. Fraser / P. Milford deck notes (side not found)"},{deck:"upper",name:"Steerage (ante-room)",x0:-18.6,x1:-14.6,z0:-7.4,z1:1.2,walls:[["fore",3.5]],note:"An ante-room for the admiral's clerks and secretary, leading to the dining and day cabins.",source:Gt.hv},{deck:"upper",name:"Sick berth",x0:21.6,x1:27.4,z0:.6,z1:6,walls:[["aft",3],"port"],note:"Forward, in the bow under the forecastle, where the air was best. Cots hung over the guns; the surgeon worked just forward of the foremast. In battle the wounded were taken below to the cockpit instead. The side is uncertain.",source:`${Gt.nmrn}; ${Gt.mckay}`},{deck:"middle",name:"Wardroom",x0:-29.2,x1:-15.8,z0:-3.4,z1:3.4,walls:[["fore",3.4]],note:"The commissioned officers' mess, aft, with a long table over the rudder head and the officers' cabins along both sides.",source:`${Gt.wp}; ${Gt.mckay}`},{deck:"middle",name:"First Lieutenant's cabin",x0:-26.4,x1:-22.4,z0:3.4,z1:7.6,walls:[["port",2],"fore"],note:"On the starboard side, with the use of the starboard quarter gallery.",source:`${Gt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officer's cabin",x0:-22.4,x1:-19.9,z0:3.4,z1:7.6,walls:[["port",1.25],"fore"],lx:-21.2,note:"One of seven small cabins of lieutenants and senior officers round the wardroom, separated by light partitions that could be taken down when the ship cleared for action.",source:Gt.mckay},{deck:"middle",name:"Officers' pantry",x0:-19.9,x1:-15.8,z0:3.4,z1:7.6,walls:[["port",2],"fore"],note:"The wardroom's pantry, around the mizzen mast.",source:`${Gt.mckay} (low-medium confidence)`},{deck:"middle",name:"Officers' cabins",x0:-26.4,x1:-15.8,z0:-7.6,z1:-3.4,walls:[["stbd",2]],note:"Lieutenants' cabins on the larboard side of the wardroom.",source:Gt.mckay},{deck:"middle",name:"Main capstan",x0:-7,x1:-5.8,z0:-.6,z1:.6,ly:1.7,note:"Abaft the mainmast. Its drumhead is on this deck, with a second drumhead below on the lower deck, so men on two decks could heave on the bars at once to weigh the anchors.",source:`${Gt.nmrn} conservation log`},{deck:"middle",name:"Jeer capstan",x0:3.1,x1:4.3,z0:-.6,z1:.6,ly:1.7,note:"Forward of the mainmast, used to sway up the heavy lower yards and for other heavy lifts.",source:`${Gt.nmrn} conservation log`},{deck:"middle",name:"Galley (Brodie stove)",x0:18.6,x1:22,z0:-2.2,z1:2.2,ly:1.6,note:"Just abaft the foremast, on a stone hearth. The iron Brodie stove cooked for some 820 men and distilled a little fresh water. The museum places it on this deck; the stove now aboard dates from the 1920s.",source:`${Gt.nmrn}; ${Gt.mckay}`},{deck:"middle",name:"Galley pantry",x0:16.2,x1:18.6,z0:-1.8,z1:1.8,walls:["aft",["port",1.2],["stbd",1.2]],note:"Behind (abaft) the galley.",source:Gt.mckay},{deck:"lower",name:"Gunroom",x0:-28.6,x1:-23.6,z0:-6.6,z1:6.6,walls:[["fore",6.6]],note:"Aft on this deck: the gunner's domain and the junior officers' mess, with the tiller sweeping overhead. Some sources put a gun room on the orlop instead. After the wheel was shot away Victory was steered from here.",source:`${Gt.wp} (Gunroom); ${Gt.beatty}`},{deck:"lower",name:"Crew messes",x0:-12,x1:12,z0:3.5,z1:5.5,lx:-4,lz:4.6,note:"About 600 men ate here and 460 slept, in hammocks slung from the beams in rows 14 inches wide. Messes of up to a dozen men ate at tables hung between the guns.",source:`${Gt.hv}; ${Gt.nmrn}`},{deck:"lower",name:"Chain pumps",x0:-1,x1:1,z0:1.4,z1:2.6,note:"Two chain pumps each side of the mainmast drew water from the well in the hold; there was also an elm-tree pump.",source:`on-board placard; ${Gt.mckay}`},{deck:"lower",name:"Riding bitts",x0:20,x1:21,z0:-1,z1:1,ly:1.4,note:"The great timbers that held the anchor cables. Their posts ran down to the hold. Forward of them, the hawse holes and the manger that caught water coming in with the cables.",source:Gt.mckay},{deck:"orlop",name:"Bread room",x0:-27,x1:-23.5,z0:-6,z1:6,walls:[["fore",5]],note:"Right aft, lined to keep out damp and rats: ship's biscuit for months at sea.",source:Gt.mckay},{deck:"orlop",name:"After hanging magazine",x0:-23.5,x1:-21.2,z0:-1.6,z1:1.6,walls:["aft","fore","port",["stbd",1.1]],note:"A small magazine for filled cartridges for the after guns.",source:Gt.mckay},{deck:"orlop",name:"Purser's store",x0:-23.5,x1:-20.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"The purser's stores and cabin: clothing, tobacco, soap and candles, sold to the men.",source:Gt.mckay},{deck:"orlop",name:"Marines' clothes store",x0:-20.2,x1:-18.2,z0:-6.5,z1:-1.6,walls:[["fore",2.5]],note:"Store for the uniforms and kit of the 146 Royal Marines aboard.",source:Gt.mckay},{deck:"orlop",name:"Steward's room",x0:-23.5,x1:-21.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"The steward issued provisions from the bread room and stores.",source:Gt.mckay},{deck:"orlop",name:"Surgeon's cabin",x0:-21.2,x1:-18.2,z0:1.6,z1:6.5,walls:[["fore",2.4]],note:"William Beatty, the surgeon, kept his cabin next to the cockpit.",source:`${Gt.mckay} (low-medium confidence)`},{deck:"orlop",name:"Cockpit",x0:-18.2,x1:-11,z0:-1.6,z1:1.6,ly:.9,note:"In battle the surgeon's station. The wounded were carried down here by the hundred; Beatty operated by lantern light below the waterline, safe from shot.",source:`${Gt.hv}; ${Gt.beatty}`},{deck:"orlop",name:"Midshipmen's berth (where Nelson died)",x0:-17,x1:-11,z0:-6.4,z1:-1.6,walls:["aft","fore",["stbd",3]],lx:-13,lz:-3.6,note:"Nelson was carried to one of the midshipmen's berths on the larboard side, and died here at about 4:30 pm, three hours after he was shot. His last words were recorded by Beatty and the chaplain. A lantern marks the spot; it was moved about 6 m forward after Goodwin's study.",source:`${Gt.beatty}; ${Gt.nmrn}`},{deck:"orlop",name:"Pump room",x0:-4,x1:-1,z0:-1.5,z1:1.5,ly:.9,note:"Around the mainmast, over the well, where the pump chains ran down.",source:Gt.mckay},{deck:"orlop",name:"Cable tiers",x0:.5,x1:12,z0:2.6,z1:6,lx:6.5,lz:4.2,note:"The great hemp anchor cables were coiled down here on both sides when the anchors were up.",source:Gt.mckay},{deck:"orlop",name:"Boatswain's store",x0:14,x1:17.5,z0:1.6,z1:6,walls:["aft",["port",1.8],"fore"],note:"The boatswain's cabin and store: spare rope, blocks and rigging stores.",source:Gt.mckay},{deck:"orlop",name:"Carpenter's workshop",x0:14,x1:17.5,z0:-6,z1:-1.6,walls:["aft",["stbd",1.8],"fore"],note:"The carpenter and his crew plugged shot holes from the carpenter's walk along the hull during the battle.",source:Gt.mckay},{deck:"orlop",name:"Sail room",x0:17.5,x1:20.6,z0:.4,z1:5.4,walls:[["port",1.5],"fore"],note:"Spare sails, kept forward and dry.",source:Gt.mckay},{deck:"orlop",name:"Rope and block room",x0:17.5,x1:20.6,z0:-5.4,z1:-.4,walls:[["stbd",1.5],"fore"],note:"Spare cordage and blocks.",source:Gt.mckay},{deck:"orlop",name:"Fore hanging magazine",x0:20.6,x1:23.6,z0:-1.8,z1:1.8,walls:[["aft",1.8],"fore","port","stbd"],note:"Filled cartridges ready for the forward guns, with ladders down to the grand magazine. The light-room entry was above the foremast step.",source:Gt.mckay},{deck:"hold",name:"After hold",x0:-20,x1:-4.5,z0:-4,z1:4,lx:-10,ly:1.4,note:"Seven compartments, among them the after powder room and the flour store.",source:`${Gt.mckay} (low-medium confidence)`},{deck:"hold",name:"Well and shot lockers",x0:-4.5,x1:-.5,z0:-1.8,z1:1.8,walls:["aft","fore","port","stbd"],note:"Around the foot of the mainmast: the well, where the pumps drew from, with the shot lockers forward and aft of it.",source:`${Gt.mckay}; Longridge`},{deck:"hold",name:"Main hold",x0:-.5,x1:15,z0:-4,z1:4,lx:7,ly:1.4,note:"Water casks bedded on iron and shingle ballast: enough fresh water for several months, with beer, salt beef and pork.",source:Gt.mckay},{deck:"hold",name:"Filling room",x0:15,x1:18,z0:-3,z1:3,walls:[["aft",3],"fore"],note:"Where powder was made up into cartridges, lit only from the light room through glass.",source:`${Gt.mckay}; ${Gt.wp}`},{deck:"hold",name:"Grand magazine",x0:18,x1:23,z0:-3,z1:3,walls:["fore"],note:"Forward, copper-lined, below the waterline. It held the ship's main stock of gunpowder; men wore felt slippers and nothing iron was allowed inside. The layout changed after 1805.",source:`${Gt.mckay}; ${Gt.wp}`}];function Zv(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");for(let n=0;n<8;n++){let s=120+n*37%30;t.fillStyle=`rgb(${s},${s*.82|0},${s*.6|0})`,t.fillRect(n*32,0,32,256),t.fillStyle="rgba(40,25,10,0.6)",t.fillRect(n*32,0,2,256)}let e=new _n(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=Ln,e}function $v(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");t.fillStyle="#cfc5ad",t.fillRect(0,0,256,256),t.strokeStyle="rgba(90,70,40,0.45)",t.lineWidth=4;for(let[n,s,r,o]of[[14,14,100,100],[142,14,100,100],[14,142,100,100],[142,142,100,100]])t.strokeRect(n,s,r,o);t.fillStyle="rgba(90,70,40,0.25)",t.fillRect(0,124,256,8),t.fillRect(124,0,8,256);let e=new _n(i);return e.colorSpace=Fe,e.wrapS=e.wrapT=Ln,e}function Kv(i,t,e,n,s){let r=Math.hypot(e.x-t.x,e.z-t.z),o=up[i],a=c=>o?xt(o,c)-.33:xt(i,c)+2,l=[];if(n!=null){let c=Math.max(0,n-.45),h=Math.min(r,n+.45);c>.05&&l.push([0,c,0]),h<r-.05&&l.push([h,r,0]),l.push([c,h,1.75])}else l.push([0,r,0]);for(let[c,h,p]of l){let d={x:pe(t.x,e.x,c/r),z:pe(t.z,e.z,c/r)},f={x:pe(t.x,e.x,h/r),z:pe(t.z,e.z,h/r)},g=new fe,y=xt(i,d.x)+p,m=xt(i,f.x)+p,u=a(d.x),_=a(f.x),b=[d.x,y,d.z,f.x,m,f.z,f.x,_,f.z,d.x,u,d.z],x=[c/1.6,y/1.6,h/1.6,m/1.6,h/1.6,_/1.6,c/1.6,u/1.6];g.setAttribute("position",new Jt(b,3)),g.setAttribute("uv",new Jt(x,2)),g.setIndex([0,1,2,0,2,3]),g.computeVertexNormals(),s.push(g)}}var dc=(i,t,e)=>{let n=Lt(t,xt(i,t)+1)-.1;return Math.max(-n,Math.min(n,e))},fc=class{constructor(t,e,n){this.group=new jt,this.group.name="rooms",t.add(this.group);let s=[],r=[],o=[];for(let l of xu){let c=l.deck==="lower"?r:l.deck==="orlop"||l.deck==="hold"?o:s;for(let h of l.walls||[]){let[p,d]=Array.isArray(h)?h:[h,null],f,g;if(p==="fore"||p==="aft"){let y=p==="fore"?l.x1:l.x0;f={x:y,z:dc(l.deck,y,l.z0)},g={x:y,z:dc(l.deck,y,l.z1)}}else{let y=p==="stbd"?l.z1:l.z0;f={x:l.x0,z:dc(l.deck,l.x0,y)},g={x:l.x1,z:dc(l.deck,l.x1,y)}}Kv(l.deck,f,g,d,c)}}let a=Zv();this.clearable=[];for(let[l,c,h]of[[s,$v(),!0],[r,a,!0],[o,a,!1]]){if(!l.length)continue;let p=new j(Ft(l),new ge({map:c,roughness:.85,side:Ce}));p.castShadow=p.receiveShadow=!0,p.name="bulkheads",this.group.add(p),h&&this.clearable.push(p)}this.renderer=new uc,this.renderer.domElement.className="labels",e.appendChild(this.renderer.domElement),this.labels=[];for(let l of xu){let c=document.createElement("div");c.className="room-label",c.textContent=l.name,c.onclick=f=>{f.stopPropagation(),n(l)};let h=new hc(c),p=l.lx??(l.x0+l.x1)/2,d=l.lz??(l.z0+l.z1)/2;h.position.set(p,xt(l.deck,p)+(l.ly??1.1),d),h.userData.room=l,this.group.add(h),this.labels.push(h)}this.level="all",this.enabled=!0,this.refresh()}setLevel(t){this.level=t,this.refresh()}setCleared(t){for(let e of this.clearable)e.visible=!t}setEnabled(t){this.enabled=t,this.refresh()}refresh(){for(let t of this.labels){let e=t.userData.room;t.visible=this.enabled&&this.level!=="all"&&dp[e.deck]===this.level}}render(t,e,n,s){this.renderer.setSize(n,s),this.renderer.render(t,e)}};var Ye=new URLSearchParams(location.search),ui=new Pl({antialias:!0,preserveDrawingBuffer:Ye.has("shot")});ui.setPixelRatio(Math.min(window.devicePixelRatio,2));ui.setSize(window.innerWidth,window.innerHeight);ui.toneMapping=po;ui.toneMappingExposure=.55;ui.shadowMap.enabled=!0;ui.shadowMap.type=Fa;document.getElementById("app").appendChild(ui.domElement);var On=new er,ci=new on(40,window.innerWidth/window.innerHeight,.2,9e3);On.userData.camera=ci;var yu=new yr;yu.scale.setScalar(8e3);var Er=yu.material.uniforms;Er.turbidity.value=2.2;Er.rayleigh.value=2.2;Er.mieCoefficient.value=.003;Er.mieDirectionalG.value=.82;var vu=new R().setFromSphericalCoords(1,fn.degToRad(62),fn.degToRad(215));Er.sunPosition.value.copy(vu);On.add(yu);var Jv=new xr(ui),mp=new er,gc=new yr;gc.scale.setScalar(1e3);Object.assign(gc.material.uniforms.sunPosition.value,vu);for(let i of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])gc.material.uniforms[i].value=Er[i].value;mp.add(gc);var gp=Jv.fromScene(mp,0,.1,2e3).texture;On.environment=gp;On.environmentIntensity=.7;On.fog=new Gr("#b9c8d2",400,3800);var Fi=new ao("#fff1dc",3.2);Fi.position.copy(vu).multiplyScalar(150);Fi.castShadow=!0;Fi.shadow.mapSize.set(4096,4096);var wr=Fi.shadow.camera;wr.left=-60;wr.right=60;wr.top=60;wr.bottom=-60;wr.near=10;wr.far=400;Fi.shadow.bias=-4e-4;Fi.shadow.normalBias=.04;On.add(Fi,Fi.target);On.add(new io("#cfe0f0","#30404a",.5));var Mu=new Vl(gp);On.add(Mu.mesh);var je=new oc(On,Mu);On.add(je.root);var pc=document.getElementById("info");function jv(i){pc.innerHTML=`<span class="close">\xD7</span><h2>${i.name}</h2><div class="deck">${fp[i.deck]}</div>
    <div>${i.note}</div>${i.source?`<div class="src">Source: ${i.source}</div>`:""}`,pc.style.display="block",pc.querySelector(".close").onclick=()=>{pc.style.display="none"}}var br=new fc(je.body,document.body,jv);je.clearables.push(br);br.setCleared(je.isCleared);var cs=new cc(je,Fi),hi=new Nl(ci,ui.domElement);hi.enableDamping=!0;hi.dampingFactor=.08;hi.maxPolarAngle=Math.PI*.495;hi.minDistance=4;hi.maxDistance=600;var xp={quarter:[[78,24,96],[0,22,0]],broadside:[[4,18,132],[2,24,0]],bow:[[92,14,34],[12,20,0]],stern:[[-84,20,-46],[-14,16,0]],deck:[[-21,15.5,7],[10,9,0]],aloft:[[30,76,52],[0,30,0]],galleries:[[-44,9,24],[-26,7,0]],head:[[44,9,16],[30,8,0]],inside:[[-26,34,46],[0,2,0]]};function Su(i,t=!1){let e=xp[i];if(!e)return;let n=new R(...e[0]),s=new R(...e[1]);t?(ci.position.copy(n),hi.target.copy(s)):Fn={p0:ci.position.clone(),t0:hi.target.clone(),p1:n,t1:s,k:0}}var Fn=null,xc=Ye.get("ui")==="0"?null:new ac({onPose:i=>{je.setPose(i);let t=ls[i].wind;t&&(je.setWind(t.dir,t.str),xc?.windSet(t.dir,t.str))},onView:i=>Su(i),onFire:()=>je.fireBroadside(),onWind:(i,t)=>je.setWind(i,t),wind:{dir:+(Ye.get("wind")??-135),str:+(Ye.get("windStr")??.6)},levels:Object.keys(lc),onLevel:i=>{cs.setLevel(i),br.setLevel(i)},onLabels:i=>br.setEnabled(i),onCut:i=>cs.setCut(i),onXray:i=>cs.setXray(i),poses:je.poseNames(),views:Object.keys(xp)});je.setPose(Ye.get("pose")||"sail",!0);{let i=ls[je.pose].wind,t=+(Ye.get("wind")??i?.dir??-135),e=+(Ye.get("windStr")??i?.str??.6);je.setWind(t,e,!0),xc?.windSet(t,e)}Su(Ye.get("view")||"quarter",!0);if(Ye.has("cam")){let i=Ye.get("cam").split(",").map(Number);ci.position.set(i[0],i[1],i[2]),hi.target.set(i[3],i[4],i[5])}xc?.setPose(je.pose);Ye.has("level")&&(cs.setLevel(Ye.get("level")),br.setLevel(Ye.get("level")),xc?.setLevel(Ye.get("level")));Ye.has("cut")&&cs.setCut(+Ye.get("cut"));Ye.has("xray")&&cs.setXray(!0);Ye.has("fire")&&setTimeout(()=>je.fireBroadside(),300);window.addEventListener("resize",()=>{ci.aspect=window.innerWidth/window.innerHeight,ci.updateProjectionMatrix(),ui.setSize(window.innerWidth,window.innerHeight)});var Qv=new co,_u=Ye.has("t")?parseFloat(Ye.get("t")):null,mc=_u??0,pp=0;function _p(){let i=Math.min(Qv.getDelta(),.05);if(mc=_u??mc+i,je.update(mc,_u!=null?1/30:i),cs.update(),Mu.update(mc,je.distance),Fn){Fn.k=Math.min(1,Fn.k+i/1.6);let t=Fn.k<.5?2*Fn.k**2:1-(-2*Fn.k+2)**2/2;ci.position.lerpVectors(Fn.p0,Fn.p1,t),hi.target.lerpVectors(Fn.t0,Fn.t1,t),Fn.k>=1&&(Fn=null)}hi.update(),ui.render(On,ci),br.render(On,ci,window.innerWidth,window.innerHeight),pp++,pp===3&&(window.__ready=!0),requestAnimationFrame(_p)}_p();window.__victory={ship:je,camera:ci,controls:hi,scene:On,setView:Su,cut:cs,clashes:()=>op(je)};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
