import{g as c}from"./index-LFmgH05F.js";var v={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function p(n,t,s){var e=null;if(s!==void 0&&(e=""+s),t.key!==void 0&&(e=""+t.key),"key"in t){s={};for(var r in t)r!=="key"&&(s[r]=t[r])}else s=t;return t=s.ref,{$$typeof:f,type:n,key:e,ref:t!==void 0?t:null,props:s}}a.Fragment=j;a.jsx=p;a.jsxs=p;v.exports=a;var R=v.exports,x={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(n){(function(){var t={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var l=typeof o;if(l==="string"||l==="number")e.push(o);else if(Array.isArray(o)&&o.length){var i=s.apply(null,o);i&&e.push(i)}else if(l==="object")for(var u in o)t.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(x);var E=x.exports;const m=c(E),$=n=>t=>(s,e)=>{const r=t?`${n}-${t}`:n;return m({[r]:!!r&&!s,[`${r}-${s}`]:!!r&&!!s},e)},A=(...n)=>n.filter(Boolean).join(" "),_=$("om-react-ui");export{A as a,_ as c,R as j};
