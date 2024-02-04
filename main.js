(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"body {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: auto;\n    background-color: lightblue;\n}\n\nh1 {\n    margin: 0;\n    padding: 0;\n}\n\nform {\n    grid-column-start: 2;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr 3fr 1fr;\n    background-color: lightgray;\n}\n\nform * {\n    grid-column-start: 2;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n#container {\n    grid-column-start: 2;\n    grid-row-start: 2;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(4, 1fr);\n    justify-content: center;\n}\n\n.task {\n    overflow: scroll;\n    border: 1px solid black;\n    padding: 10px;\n    scrollbar-gutter: stable both-edges;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),u=n.n(l),d=n(589),p=n.n(d),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=[];function g(){let e=new function(e,t,n,r){this.title=document.getElementById("title").value,this.description=document.getElementById("desc").value,this.due_date=document.getElementById("due").value,this.priority=document.getElementById("priority").value};console.log("the array is:",e),console.log(`the title is ${e.title}`),""!=e.title?(v.unshift(e),console.log("this task list is ",v),function(){container.innerHTML="";for(let e=0;e<v.length;e++){let t=document.getElementById("container"),n=document.createElement("div");console.log("We found ",e+1," object(s)"),console.log("the item is ",v[e]);const r=Object.values(v[e]),o=Object.keys(v[e]);t.append(n),n.classList.add("task");for(let e=0;e<r.length;e++){let t=document.createElement("p"),i=document.createElement("h2");"title"==o[e]?(n.append(i),i.setAttribute("class",o[e]),i.innerText=r[e]):(n.append(t),t.setAttribute("class",o[e]),t.innerText=r[e])}}}()):console.log("Please add a title to continue!")}!function(){let e=document.createElement("div");e.setAttribute("id","container"),document.body.append(e)}(),function(){function e(){let e=document.getElementById("title"),t=document.getElementById("desc"),n=document.getElementById("priority"),r=document.getElementById("due");e.value="",t.value="",n.value="",r.value=""}!function(){const e=document.createElement("form");document.createElement("fieldset"),document.createElement("legend");let t=document.createElement("h1");function n(t,n,r,o,i){const a=document.createElement("label"),c=document.createElement(o);e.appendChild(a),e.appendChild(c),c.setAttribute("id",t),c.setAttribute("name",n),c.setAttribute("label",r),a.innerText="\n"+r,c.setAttribute("type",i)}document.body.prepend(e),e.prepend(t),t.innerText="New Task:",e.setAttribute("id","form"),n("title","title_input","Title:","input","text"),n("desc","description_input","Description:","textarea"),n("due","due_date_input","Due Date:","input","date"),n("priority","priority_number_input","Priority:","input","number");const r=document.getElementById("priority");r.setAttribute("min",1),r.setAttribute("max",3)}(),function(){let t=document.createElement("button");t.setAttribute("type","button"),form.appendChild(t),t.innerText="Submit the info!",t.addEventListener("click",g),t.addEventListener("click",e)}()}()})()})();