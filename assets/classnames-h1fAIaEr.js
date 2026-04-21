import{g as u}from"./index-CP2yOfOm.js";var f={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(a){(function(){var e={}.hasOwnProperty;function s(){for(var o=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if(r==="string"||r==="number")o.push(n);else if(Array.isArray(n)&&n.length){var c=s.apply(null,n);c&&o.push(c)}else if(r==="object")for(var l in n)e.call(n,l)&&n[l]&&o.push(l)}}return o.join(" ")}a.exports?(s.default=s,a.exports=s):window.classNames=s})()})(f);var i=f.exports;const p=u(i),m=a=>e=>(s,o)=>{const t=e?`${a}-${e}`:a;return p({[t]:!!t&&!s,[`${t}-${s}`]:!!t&&!!s},o)},h=(...a)=>a.filter(Boolean).join(" "),x=m("om-component-ui");export{p as a,x as c,h as j};
