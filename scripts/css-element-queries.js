!function(){this.ResizeSensor=function(e,t){function n(e,t){window.OverflowEvent?e.addEventListener("overflowchanged",function(e){t.call(this,e)}):(e.addEventListener("overflow",function(e){t.call(this,e)}),e.addEventListener("underflow",function(e){t.call(this,e)}))}function i(){this.q=[],this.add=function(e){this.q.push(e)};var e,t;this.call=function(){for(e=0,t=this.q.length;t>e;e++)this.q[e].call()}}function o(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function s(e,t){function s(){var t=!1,n=e.resizeSensor.offsetWidth,i=e.resizeSensor.offsetHeight;return l!=n&&(a.width=n-1+"px",c.width=n+1+"px",t=!0,l=n),u!=i&&(a.height=i-1+"px",c.height=i+1+"px",t=!0,u=i),t}if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new i,e.resizedAttached.add(t);if("onresize"in e&&11>document.documentMode)e.attachEvent?e.attachEvent("onresize",function(){e.resizedAttached.call()}):e.addEventListener&&e.addEventListener("resize",function(){e.resizedAttached.call()});else{var r=function(){s()&&e.resizedAttached.call()};e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var d="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1;";e.resizeSensor.style.cssText=d,e.resizeSensor.innerHTML='<div class="resize-sensor-overflow" style="'+d+'"><div></div></div><div class="resize-sensor-underflow" style="'+d+'"><div></div></div>',e.appendChild(e.resizeSensor),"absolute"!==o(e,"position")&&(e.style.position="relative");var l=-1,u=-1,a=e.resizeSensor.firstElementChild.firstChild.style,c=e.resizeSensor.lastElementChild.firstChild.style;s(),n(e.resizeSensor,r),n(e.resizeSensor.firstElementChild,r),n(e.resizeSensor.lastElementChild,r)}}if("array"==typeof e||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements)for(var r=0,d=e.length;d>r;r++)s(e[r],t);else s(e,t)}}(),function(){function e(){(new t).init()}var t=this.ElementQueries=function(){function e(e){e||(e=document.documentElement);var t=getComputedStyle(e,"fontSize");return parseFloat(t)||16}function t(t,n){var i=n.replace(/[0-9]*/,"");switch(n=parseFloat(n),i){case"px":return n;case"em":return n*e(t);case"rem":return n*e();case"vw":return n*document.documentElement.clientWidth/100;case"vh":return n*document.documentElement.clientHeight/100;case"vmin":case"vmax":var o=document.documentElement.clientWidth/100,s=document.documentElement.clientHeight/100,r=Math["vmin"===i?"min":"max"];return n*r(o,s);default:return n}}function n(e){this.element=e,this.options=[];var n,i,o,s,r,d,l,u,a=0,c=0;this.addOption=function(e){this.options.push(e)};var h=["min-width","min-height","max-width","max-height"];this.call=function(){for(a=this.element.offsetWidth,c=this.element.offsetHeight,d={},n=0,i=this.options.length;i>n;n++)o=this.options[n],s=t(this.element,o.value),r="width"==o.property?a:c,u=o.mode+"-"+o.property,l="","min"==o.mode&&r>=s&&(l+=o.value),"max"==o.mode&&s>=r&&(l+=o.value),d[u]||(d[u]=""),l&&-1===(" "+d[u]+" ").indexOf(" "+l+" ")&&(d[u]+=" "+l);for(var e in h)d[h[e]]?this.element.setAttribute(h[e],d[h[e]].substr(1)):this.element.removeAttribute(h[e])}}function i(e,t){e.elementQueriesSetupInformation?e.elementQueriesSetupInformation.addOption(t):(e.elementQueriesSetupInformation=new n(e),e.elementQueriesSetupInformation.addOption(t),new ResizeSensor(e,function(){e.elementQueriesSetupInformation.call()})),e.elementQueriesSetupInformation.call()}function o(e,t,n,o){var s;if(document.querySelectorAll&&(s=document.querySelectorAll.bind(document)),s||"undefined"==typeof $$||(s=$$),s||"undefined"==typeof jQuery||(s=jQuery),!s)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";for(var r=s(e),d=0,l=r.length;l>d;d++)i(r[d],{mode:t,property:n,value:o})}function s(e){var t;for(e=e.replace(/'/g,'"');null!==(t=d.exec(e));)5<t.length&&o(t[1]||t[5],t[2],t[3],t[4])}function r(e){var t="";if(e)if("string"==typeof e)e=e.toLowerCase(),(-1!==e.indexOf("min-width")||-1!==e.indexOf("max-width"))&&s(e);else for(var n=0,i=e.length;i>n;n++)1===e[n].type?(t=e[n].selectorText||e[n].cssText,-1!==t.indexOf("min-height")||-1!==t.indexOf("max-height")?s(t):(-1!==t.indexOf("min-width")||-1!==t.indexOf("max-width"))&&s(t)):4===e[n].type&&r(e[n].cssRules||e[n].rules)}var d=/,?([^,\n]*)\[[\s\t]*(min|max)-(width|height)[\s\t]*[~$\^]?=[\s\t]*"([^"]*)"[\s\t]*]([^\n\s\{]*)/gim;this.init=function(){for(var e=0,t=document.styleSheets.length;t>e;e++)r(document.styleSheets[e].cssText||document.styleSheets[e].cssRules||document.styleSheets[e].rules)}};window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent("onload",e)}();