import{g as u}from"./index-CP2yOfOm.js";var f={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(a){(function(){var o={}.hasOwnProperty;function s(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if(r==="string"||r==="number")e.push(t);else if(Array.isArray(t)&&t.length){var c=s.apply(null,t);c&&e.push(c)}else if(r==="object")for(var l in t)o.call(t,l)&&t[l]&&e.push(l)}}return e.join(" ")}a.exports?(s.default=s,a.exports=s):window.classNames=s})()})(f);var i=f.exports;const p=u(i),m=a=>o=>(s,e)=>{const n=o?`${a}-${o}`:a;return p({[n]:!!n&&!s,[`${n}-${s}`]:!!n&&!!s},e)},h=(...a)=>a.filter(Boolean).join(" "),x=m("om-react-ui");export{p as a,x as c,h as j};
