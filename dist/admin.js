!function(e){var t={};function n(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(l,s,function(t){return e[t]}.bind(null,s));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=3)}([,,,function(e,t,n){"use strict";n(4);var l=!0;setInterval(function(){console.log(window.innerWidth)},1e3),function(){var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"1"===e.style.opacity?(e.style.opacity="0",e.style.maxHeight="0"):(e.style.opacity="1",e.style.maxHeight="150px")})}(),document.getElementsByClassName("sidebar-toggle")[0].addEventListener("click",function(){l?(document.getElementsByClassName("sidebar")[0].style.width="265px",document.getElementsByClassName("user-area")[0].style.display="flex",document.getElementsByClassName("lists")[0].style.display="block",document.getElementsByClassName("sidebar-toggle")[0].style.left="3px",l=!l):(document.getElementsByClassName("sidebar")[0].style.width="60px",document.getElementsByClassName("user-area")[0].style.display="none",document.getElementsByClassName("lists")[0].style.display="none",document.getElementsByClassName("sidebar-toggle")[0].style.left="18px",l=!l)})},function(e,t){}]);