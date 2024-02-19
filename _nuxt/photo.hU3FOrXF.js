import{_ as vt,u as It,r as te,i as Rt,c as R,a as A,t as P,f as M,l as x,F as St,g as At,q as Ct,d as Be,C as Dt,E as kt,o as S,p as Ot,e as Ut}from"./entry.FMCj0XuI.js";import{u as Bt}from"./index.hXItWwvk.js";import{b as Nt,a as Pt,_ as Mt}from"./agnes_et_florent_19-08-2023-violet.SXCG8gej.js";import"./vue.f36acd1f.JDoCXSdf.js";var Ne={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xt=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ye={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let f=(c&15)<<2|l>>6,d=l&63;a||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Je(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||l==null||h==null)throw new Lt;const f=i<<2|c>>4;if(s.push(f),l!==64){const d=c<<4&240|l>>2;if(s.push(d),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ft=function(t){const e=Je(t);return Ye.encodeByteArray(e,!0)},re=function(t){return Ft(t).replace(/\./g,"")},$t=function(t){try{return Ye.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=()=>Ht().__FIREBASE_DEFAULTS__,jt=()=>{if(typeof process>"u"||typeof Ne>"u")return;const t=Ne.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$t(t[1]);return e&&JSON.parse(e)},Ze=()=>{try{return zt()||jt()||Vt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qt=t=>{var e,n;return(n=(e=Ze())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wt=t=>{const e=qt(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qe=()=>{var t;return(t=Ze())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[re(JSON.stringify(n)),re(JSON.stringify(o)),""].join(".")}function Kt(){try{return typeof indexedDB=="object"}catch{return!1}}function Jt(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="FirebaseError";class W extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yt,Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Zt(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new W(r,c,s)}}function Zt(t,e){return t.replace(Qt,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Qt=/\{\$([^}]+)}/g;function ge(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Pe(i)&&Pe(o)){if(!ge(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Pe(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Y{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nn(e))try{this.getOrInitializeService({instanceIdentifier:L})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=L){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=L){return this.instances.has(e)}getOptions(e=L){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tn(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=L){return this.component?this.component.multipleInstances?e:L:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tn(t){return t===L?void 0:t}function nn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new en(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_||(_={}));const rn={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},on=_.INFO,an={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},cn=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=an[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ln{constructor(e){this.name=e,this._logLevel=on,this._logHandler=cn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...e),this._logHandler(this,_.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...e),this._logHandler(this,_.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_.INFO,...e),this._logHandler(this,_.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_.WARN,...e),this._logHandler(this,_.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...e),this._logHandler(this,_.ERROR,...e)}}const un=(t,e)=>e.some(n=>t instanceof n);let Me,xe;function hn(){return Me||(Me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dn(){return xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tt=new WeakMap,be=new WeakMap,nt=new WeakMap,ue=new WeakMap,Re=new WeakMap;function fn(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(U(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tt.set(n,t)}).catch(()=>{}),Re.set(e,t),e}function pn(t){if(be.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});be.set(t,e)}let Ee={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return be.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return U(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _n(t){Ee=t(Ee)}function mn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(he(this),e,...n);return nt.set(s,e.sort?e.sort():[e]),U(s)}:dn().includes(t)?function(...e){return t.apply(he(this),e),U(tt.get(this))}:function(...e){return U(t.apply(he(this),e))}}function gn(t){return typeof t=="function"?mn(t):(t instanceof IDBTransaction&&pn(t),un(t,hn())?new Proxy(t,Ee):t)}function U(t){if(t instanceof IDBRequest)return fn(t);if(ue.has(t))return ue.get(t);const e=gn(t);return e!==t&&(ue.set(t,e),Re.set(e,t)),e}const he=t=>Re.get(t);function bn(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),c=U(o);return s&&o.addEventListener("upgradeneeded",a=>{s(U(o.result),a.oldVersion,a.newVersion,U(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const En=["get","getKey","getAll","getAllKeys","count"],yn=["put","add","delete","clear"],de=new Map;function Le(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(de.get(e))return de.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yn.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||En.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return s&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return de.set(e,i),i}_n(t=>({...t,get:(e,n,s)=>Le(e,n)||t.get(e,n,s),has:(e,n)=>!!Le(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tn(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ye="@firebase/app",Fe="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new ln("@firebase/app"),vn="@firebase/app-compat",In="@firebase/analytics-compat",Rn="@firebase/analytics",Sn="@firebase/app-check-compat",An="@firebase/app-check",Cn="@firebase/auth",Dn="@firebase/auth-compat",kn="@firebase/database",On="@firebase/database-compat",Un="@firebase/functions",Bn="@firebase/functions-compat",Nn="@firebase/installations",Pn="@firebase/installations-compat",Mn="@firebase/messaging",xn="@firebase/messaging-compat",Ln="@firebase/performance",Fn="@firebase/performance-compat",$n="@firebase/remote-config",Hn="@firebase/remote-config-compat",zn="@firebase/storage",jn="@firebase/storage-compat",Vn="@firebase/firestore",qn="@firebase/firestore-compat",Wn="firebase",Gn="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="[DEFAULT]",Xn={[ye]:"fire-core",[vn]:"fire-core-compat",[Rn]:"fire-analytics",[In]:"fire-analytics-compat",[An]:"fire-app-check",[Sn]:"fire-app-check-compat",[Cn]:"fire-auth",[Dn]:"fire-auth-compat",[kn]:"fire-rtdb",[On]:"fire-rtdb-compat",[Un]:"fire-fn",[Bn]:"fire-fn-compat",[Nn]:"fire-iid",[Pn]:"fire-iid-compat",[Mn]:"fire-fcm",[xn]:"fire-fcm-compat",[Ln]:"fire-perf",[Fn]:"fire-perf-compat",[$n]:"fire-rc",[Hn]:"fire-rc-compat",[zn]:"fire-gcs",[jn]:"fire-gcs-compat",[Vn]:"fire-fst",[qn]:"fire-fst-compat","fire-js":"fire-js",[Wn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Map,Te=new Map;function Kn(t,e){try{t.container.addComponent(e)}catch(n){$.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oe(t){const e=t.name;if(Te.has(e))return $.debug(`There were multiple attempts to register component ${e}.`),!1;Te.set(e,t);for(const n of ie.values())Kn(n,t);return!0}function Jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},B=new et("app","Firebase",Yn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=Gn;function st(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:we,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw B.create("bad-app-name",{appName:String(r)});if(n||(n=Qe()),!n)throw B.create("no-options");const i=ie.get(r);if(i){if(ge(n,i.options)&&ge(s,i.config))return i;throw B.create("duplicate-app",{appName:r})}const o=new sn(r);for(const a of Te.values())o.addComponent(a);const c=new Zn(n,s,o);return ie.set(r,c),c}function es(t=we){const e=ie.get(t);if(!e&&t===we&&Qe())return st();if(!e)throw B.create("no-app",{appName:t});return e}function q(t,e,n){var s;let r=(s=Xn[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$.warn(c.join(" "));return}oe(new Y(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="firebase-heartbeat-database",ns=1,Z="firebase-heartbeat-store";let fe=null;function rt(){return fe||(fe=bn(ts,ns,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Z)}catch(n){console.warn(n)}}}}).catch(t=>{throw B.create("idb-open",{originalErrorMessage:t.message})})),fe}async function ss(t){try{const n=(await rt()).transaction(Z),s=await n.objectStore(Z).get(it(t));return await n.done,s}catch(e){if(e instanceof W)$.warn(e.message);else{const n=B.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$.warn(n.message)}}}async function $e(t,e){try{const s=(await rt()).transaction(Z,"readwrite");await s.objectStore(Z).put(e,it(t)),await s.done}catch(n){if(n instanceof W)$.warn(n.message);else{const s=B.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$.warn(s.message)}}}function it(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=1024,is=30*24*60*60*1e3;class os{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cs(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=He();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=is}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=He(),{heartbeatsToSend:s,unsentEntries:r}=as(this._heartbeatsCache.heartbeats),i=re(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function He(){return new Date().toISOString().substring(0,10)}function as(t,e=rs){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ze(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ze(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kt()?Jt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ss(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $e(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $e(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ze(t){return re(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){oe(new Y("platform-logger",e=>new wn(e),"PRIVATE")),oe(new Y("heartbeat",e=>new os(e),"PRIVATE")),q(ye,Fe,t),q(ye,Fe,"esm2017"),q("fire-js","")}ls("");var us="firebase",hs="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */q(us,hs,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="firebasestorage.googleapis.com",at="storageBucket",ds=2*60*1e3,fs=10*60*1e3,ps=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g extends W{constructor(e,n,s=0){super(pe(e),`Firebase Storage: ${n} (${pe(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var m;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(m||(m={}));function pe(t){return"storage/"+t}function Se(){const t="An unknown error occurred, please check the error payload for server response.";return new g(m.UNKNOWN,t)}function _s(t){return new g(m.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ms(t){return new g(m.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gs(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new g(m.UNAUTHENTICATED,t)}function bs(){return new g(m.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Es(t){return new g(m.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ct(){return new g(m.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lt(){return new g(m.CANCELED,"User canceled the upload/download.")}function ys(t){return new g(m.INVALID_URL,"Invalid URL '"+t+"'.")}function ws(t){return new g(m.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ts(){return new g(m.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+at+"' property when initializing the app?")}function ut(){return new g(m.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vs(){return new g(m.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Is(t){return new g(m.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ve(t){return new g(m.INVALID_ARGUMENT,t)}function ht(){return new g(m.APP_DELETED,"The Firebase app was deleted.")}function Rs(t){return new g(m.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function J(t,e){return new g(m.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function X(t){throw new g(m.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=v.makeFromUrl(e,n)}catch{return new v(e,"")}if(s.path==="")return s;throw ws(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},I=n===ot?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",D=new RegExp(`^https?://${I}/${r}/${b}`,"i"),y=[{regex:c,indices:a,postModify:i},{regex:d,indices:p,postModify:l},{regex:D,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<y.length;E++){const z=y[E],j=z.regex.exec(e);if(j){const ce=j[z.indices.bucket];let G=j[z.indices.path];G||(G=""),s=new v(ce,G),z.postModify(s);break}}if(s==null)throw ys(e);return s}}class Ss{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){let s=1,r=null,i=null,o=!1,c=0;function a(){return c===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,a())},b)}function f(){i&&clearTimeout(i)}function d(b,...D){if(l){f();return}if(b){f(),u.call(null,b,...D);return}if(a()||o){f(),u.call(null,b,...D);return}s<64&&(s*=2);let y;c===1?(c=2,y=0):y=(s+Math.random())*1e3,h(y)}let p=!1;function I(b){p||(p=!0,f(),!l&&(r!==null?(b||(c=2),clearTimeout(r),h(0)):b||(c=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function Cs(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){return t!==void 0}function ks(t){return typeof t=="function"}function Os(t){return typeof t=="object"&&!Array.isArray(t)}function Ae(t){return typeof t=="string"||t instanceof String}function je(t){return Ce()&&t instanceof Blob}function Ce(){return typeof Blob<"u"}function Ve(t,e,n,s){if(s<e)throw ve(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ve(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Us(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(F||(F={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s,r,i,o,c,a,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ne(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const a=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===F.NO_ERROR,a=i.getStatus();if(!c||dt(a,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===F.ABORT;s(!1,new ne(!1,null,u));return}const l=this.successCodes_.indexOf(a)!==-1;s(!0,new ne(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());Ds(a)?i(a):i()}catch(a){o(a)}else if(c!==null){const a=Se();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(r.canceled){const a=this.appDelete_?ht():lt();o(a)}else{const a=ct();o(a)}};this.canceled_?n(!1,new ne(!1,null,!0)):this.backoffId_=As(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Cs(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ne{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ns(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ps(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ms(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xs(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ls(t,e,n,s,r,i,o=!0){const c=Us(t.urlParams),a=t.url+c,l=Object.assign({},t.headers);return Ms(l,e),Ns(l,n),Ps(l,i),xs(l,s),new Bs(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $s(...t){const e=Fs();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ce())return new Blob(t);throw new g(m.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Hs(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(typeof atob>"u")throw Is("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _e{constructor(e,n){this.data=e,this.contentType=n||null}}function js(t,e){switch(t){case C.RAW:return new _e(ft(e));case C.BASE64:case C.BASE64URL:return new _e(pt(t,e));case C.DATA_URL:return new _e(qs(e),Ws(e))}throw Se()}function ft(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Vs(t){let e;try{e=decodeURIComponent(t)}catch{throw J(C.DATA_URL,"Malformed data URL.")}return ft(e)}function pt(t,e){switch(t){case C.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw J(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case C.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw J(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zs(e)}catch(r){throw r.message.includes("polyfill")?r:J(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class _t{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw J(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Gs(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function qs(t){const e=new _t(t);return e.base64?pt(C.BASE64,e.rest):Vs(e.rest)}function Ws(t){return new _t(t).contentType}function Gs(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,n){let s=0,r="";je(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(je(this.data_)){const s=this.data_,r=Hs(s,e,n);return r===null?null:new O(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new O(s,!0)}}static getBlob(...e){if(Ce()){const n=e.map(s=>s instanceof O?s.data_:s);return new O($s.apply(null,n))}else{const n=e.map(o=>Ae(o)?js(C.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)r[i++]=o[c]}),new O(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){let e;try{e=JSON.parse(t)}catch{return null}return Os(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Js(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function mt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){return e}class w{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Ys}}let se=null;function Zs(t){return!Ae(t)||t.length<2?t:mt(t)}function Qs(){if(se)return se;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(i,o){return Zs(o)}const n=new w("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new w("size");return r.xform=s,t.push(r),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),se=t,se}function er(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new v(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function tr(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return er(s,t),s}function nr(t,e,n){const s=Xs(e);return s===null?null:tr(t,s,n)}function gt(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Q{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){if(!t)throw Se()}function ke(t,e){function n(s,r){const i=nr(t,r,e);return N(i!==null),i}return n}function ee(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=bs():r=gs():n.getStatus()===402?r=ms(t.bucket):n.getStatus()===403?r=Es(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function sr(t){const e=ee(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=_s(t.path)),i.serverResponse=r.serverResponse,i}return n}function rr(t,e,n){const s=e.fullServerUrl(),r=De(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Q(r,i,ke(t,n),o);return c.errorHandler=sr(e),c}function ir(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bt(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=ir(null,e)),s}function or(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const a=c();o["Content-Type"]="multipart/related; boundary="+a;const l=bt(e,s,r),u=gt(l,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+a+"--",d=O.getBlob(h,s,f);if(d===null)throw ut();const p={name:l.fullPath},I=De(i,t.host,t._protocol),b="POST",D=t.maxUploadRetryTime,k=new Q(I,b,ke(t,n),D);return k.urlParams=p,k.headers=o,k.body=d.uploadData(),k.errorHandler=ee(e),k}class ae{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function Oe(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{N(!1)}return N(!!n&&(e||["active"]).indexOf(n)!==-1),n}function ar(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=bt(e,s,r),c={name:o.fullPath},a=De(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=gt(o,n),f=t.maxUploadRetryTime;function d(I){Oe(I);let b;try{b=I.getResponseHeader("X-Goog-Upload-URL")}catch{N(!1)}return N(Ae(b)),b}const p=new Q(a,l,d,f);return p.urlParams=c,p.headers=u,p.body=h,p.errorHandler=ee(e),p}function cr(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=Oe(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{N(!1)}h||N(!1);const f=Number(h);return N(!isNaN(f)),new ae(f,s.size(),u==="final")}const o="POST",c=t.maxUploadRetryTime,a=new Q(n,o,i,c);return a.headers=r,a.errorHandler=ee(e),a}const qe=256*1024;function lr(t,e,n,s,r,i,o,c){const a=new ae(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw vs();const l=a.total-a.current;let u=l;r>0&&(u=Math.min(u,r));const h=a.current,f=h+u;let d="";u===0?d="finalize":l===u?d="upload, finalize":d="upload";const p={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${a.current}`},I=s.slice(h,f);if(I===null)throw ut();function b(E,z){const j=Oe(E,["active","final"]),ce=a.current+u,G=s.size();let le;return j==="final"?le=ke(e,i)(E,z):le=null,new ae(ce,G,j==="final",le)}const D="POST",k=e.maxUploadRetryTime,y=new Q(n,D,b,k);return y.headers=p,y.body=I.uploadData(),y.progressCallback=c||null,y.errorHandler=ee(t),y}const T={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function me(t){switch(t){case"running":case"pausing":case"canceling":return T.RUNNING;case"paused":return T.PAUSED;case"success":return T.SUCCESS;case"canceled":return T.CANCELED;case"error":return T.ERROR;default:return T.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,s){if(ks(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class hr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=F.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=F.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=F.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw X("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw X("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw X("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw X("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw X("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dr extends hr{initXhr(){this.xhr_.responseType="text"}}function K(){return new dr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Qs(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(m.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(dt(r.status,[]))if(i)r=ct();else{this.sleepTime=Math.max(this.sleepTime*2,ps),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(m.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=ar(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,K,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=cr(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,K,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=qe*this._chunkMultiplier,n=new ae(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=lr(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const c=this._ref.storage._makeRequest(o,K,r,i,!1);this._request=c,c.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){qe*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=rr(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,K,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=or(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,K,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=lt(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=me(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new ur(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(me(this._state)){case T.SUCCESS:V(this._resolve.bind(null,this.snapshot))();break;case T.CANCELED:case T.ERROR:const n=this._reject;V(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(me(this._state)){case T.RUNNING:case T.PAUSED:e.next&&V(e.next.bind(e,this.snapshot))();break;case T.SUCCESS:e.complete&&V(e.complete.bind(e))();break;case T.CANCELED:case T.ERROR:e.error&&V(e.error.bind(e,this._error))();break;default:e.error&&V(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this._service=e,n instanceof v?this._location=n:this._location=v.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new H(e,n)}get root(){const e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mt(this._location.path)}get storage(){return this._service}get parent(){const e=Ks(this._location.path);if(e===null)return null;const n=new v(this._location.bucket,e);return new H(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rs(e)}}function pr(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new fr(t,new O(e),n)}function _r(t,e){const n=Js(t._location.path,e),s=new v(t._location.bucket,n);return new H(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return/^[A-Za-z]+:\/\//.test(t)}function gr(t,e){return new H(t,e)}function Et(t,e){if(t instanceof Ue){const n=t;if(n._bucket==null)throw Ts();const s=new H(n,n._bucket);return e!=null?Et(s,e):s}else return e!==void 0?_r(t,e):t}function br(t,e){if(e&&mr(e)){if(t instanceof Ue)return gr(t,e);throw ve("To use ref(service, url), the first argument must be a Storage instance.")}else return Et(t,e)}function We(t,e){const n=e==null?void 0:e[at];return n==null?null:v.makeFromBucketSpec(n,t)}function Er(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Xt(r,t.app.options.projectId))}class Ue{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ot,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ds,this._maxUploadRetryTime=fs,this._requests=new Set,r!=null?this._bucket=v.makeFromBucketSpec(r,this._host):this._bucket=We(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=We(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ve("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ve("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new H(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Ss(ht());{const o=Ls(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ge="@firebase/storage",Xe="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="storage";function yr(t,e,n){return t=Ie(t),pr(t,e,n)}function wr(t,e){return t=Ie(t),br(t,e)}function Tr(t=es(),e){t=Ie(t);const s=Jn(t,yt).getImmediate({identifier:e}),r=Wt("storage");return r&&vr(s,...r),s}function vr(t,e,n,s={}){Er(t,e,n,s)}function Ir(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ue(n,s,r,e,Qn)}function Rr(){oe(new Y(yt,Ir,"PUBLIC").setMultipleInstances(!0)),q(Ge,Xe,""),q(Ge,Xe,"esm2017")}Rr();function Ke(t){const e=t;e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{fr:{meta:{title:{t:0,b:{t:2,i:[{t:3}],s:"Partage de photos et vidéos - Mariage Agnès et Florent"}},description:{t:0,b:{t:2,i:[{t:3}],s:"Vous pouvez nous partager vos photos et vidéos ici."}}},title:{t:0,b:{t:2,i:[{t:3}],s:"Partage de photos et vidéos"}},takePictureButton:{t:0,b:{t:2,i:[{t:3}],s:"Prendre une photo"}},shareAssetButton:{t:0,b:{t:2,i:[{t:3}],s:"Partager photos & vidéos"}},uploading:{t:0,b:{t:2,i:[{t:3}],s:"En cours"}},uploadingPaused:{t:0,b:{t:2,i:[{t:3}],s:"En pause"}},uploadingError:{t:0,b:{t:2,i:[{t:3}],s:"Une erreur est survenu."}},uploadingSuccess:{t:0,b:{t:2,i:[{t:3}],s:"Chargé ! 🎉"}}},en:{meta:{title:{t:0,b:{t:2,i:[{t:3}],s:"Sharing photos and videos - Agnès and Florent wedding"}},description:{t:0,b:{t:2,i:[{t:3}],s:"You can share your photos and videos here."}}},title:{t:0,b:{t:2,i:[{t:3}],s:"Sharing photos and videos"}},takePictureButton:{t:0,b:{t:2,i:[{t:3}],s:"Take a picture"}},shareAssetButton:{t:0,b:{t:2,i:[{t:3}],s:"Share photos & videos"}},uploading:{t:0,b:{t:2,i:[{t:3}],s:"Uploading"}},uploadingPaused:{t:0,b:{t:2,i:[{t:3}],s:"Paused"}},uploadingError:{t:0,b:{t:2,i:[{t:3}],s:"An error occurred."}},uploadingSuccess:{t:0,b:{t:2,i:[{t:3}],s:"Uploaded! 🎉"}}}}})}const wt=t=>(Ot("data-v-11117126"),t=t(),Ut(),t),Sr={id:"wedding-design-system"},Ar={class:"title typography-title-2"},Cr={key:0,class:"background-img",src:Nt,alt:""},Dr={key:1,class:"preview-container"},kr=["src"],Or={key:0,class:"preview-progression-container"},Ur={class:"typography-paragraph"},Br=["value"],Nr={key:1,class:"preview-progression-container"},Pr={key:2,class:"preview-progression-container"},Mr={class:"action"},xr=wt(()=>A("img",{alt:"",src:Pt},null,-1)),Lr={key:1,for:"imageInput",class:"button"},Fr=wt(()=>A("img",{alt:"",src:Mt},null,-1)),Tt={__name:"photo",setup(t){const e=kt(),{t:n}=It({useScope:"local"});Bt({ogType:"website",title:n("meta.title"),ogTitle:n("meta.title"),twitterTitle:n("meta.title"),description:n("meta.description"),ogDescription:n("meta.description"),twitterDescription:n("meta.description"),twitterCard:"summary",ogUrl:"https://berthelot.io/mariage/photo"});const s=te([]),r=te(null),i=te(null),o=te(!1),c=l=>{s.value=[...s.value,...Array.from(l.target.files).map(u=>{const h=`/photos/${u.lastModified}-${u.name}`;return s.value.find(f=>f.firestoreUrl===h)?null:{firestoreUrl:h,objectUrl:URL.createObjectURL(u),rawFile:u,status:"starting",uploadPct:0}}).filter(Boolean)],s.value.filter(u=>u.status==="starting").forEach(u=>{a(u)})},a=l=>{var f;const u=wr(i.value,l.firestoreUrl),h=yr(u,l.rawFile,{customMetadata:{userAgent:window.navigator.userAgent,lastModified:l.rawFile.lastModified,lastModifiedDate:(f=l.rawFile.lastModifiedDate)==null?void 0:f.toISOString(),originalName:l.rawFile.name}});s.value=s.value.map(d=>l.firestoreUrl===d.firestoreUrl?{...d,status:"running"}:d),h.on("state_changed",d=>{s.value=s.value.map(p=>l.firestoreUrl===p.firestoreUrl?{...p,status:d.state,uploadPct:d.bytesTransferred/d.totalBytes*100}:p)},d=>{s.value=s.value.map(p=>l.firestoreUrl===p.firestoreUrl?{...p,status:"error",error:d}:p)},()=>{s.value=s.value.map(d=>l.firestoreUrl===d.firestoreUrl?{...d,status:"success"}:d)})};return Rt(()=>{const l={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID};r.value=st(l),i.value=Tr(r.value);const u=document.createElement("input");o.value=u.capture!==void 0}),(l,u)=>(S(),R("main",Sr,[A("h1",Ar,P(M(n)("title")),1),A("form",{onSubmit:u[0]||(u[0]=Dt((...h)=>l.handleUploadingPhoto&&l.handleUploadingPhoto(...h),["prevent"]))},[s.value.length?x("",!0):(S(),R("img",Cr)),s.value.length?(S(),R("section",Dr,[(S(!0),R(St,null,At(s.value,h=>(S(),R("article",{key:h.firestoreUrl,class:"preview-item"},[A("img",{class:"preview-img",src:h.objectUrl,alt:""},null,8,kr),["starting","running","paused"].includes(h.status)?(S(),R("div",Or,[A("span",Ur,P(h.status==="paused"?M(n)("uploadingPaused"):M(n)("uploading")),1),A("progress",{class:"preview-progression",max:"100",value:h.uploadPct},null,8,Br)])):x("",!0),h.status==="error"?(S(),R("div",Nr,P(M(n)("uploadingError"))+P(h.error.message),1)):x("",!0),h.status==="success"?(S(),R("div",Pr,P(M(n)("uploadingSuccess")),1)):x("",!0)]))),128))])):x("",!0),A("div",Mr,[A("input",{id:"imageUpload",type:"file",accept:"video/*,image/*",multiple:"",onChange:c},null,32),A("label",{for:"imageUpload",class:Ct({noAnimate:o.value,button:!0})},[xr,Be(P(M(n)("shareAssetButton")),1)],2),o.value?(S(),R("input",{key:0,id:"imageInput",type:"file",accept:"image/*",capture:"user",onChange:c},null,32)):x("",!0),o.value?(S(),R("label",Lr,[Fr,Be(P(M(n)("takePictureButton")),1)])):x("",!0)])],32)]))}};typeof Ke=="function"&&Ke(Tt);const Vr=vt(Tt,[["__scopeId","data-v-11117126"]]);export{Vr as default};
