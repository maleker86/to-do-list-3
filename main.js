(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,'body {\n    display: grid;\n    gap: 10px;\n    grid-template-areas: \n        "navi main main"\n        "navi main main"\n        "navi footer footer"\n    ;\n    background-color: lightblue;\n}\n\n#navigation {\n    grid-area: navi;\n    border: 2px solid green;\n}\n\n#main {\n    grid-area: main;\n    display: flex;\n    border: 2px solid orange;\n}\n\n#footer {\n    grid-area: footer;\n    border: 2px solid purple;\n}\n\nh1, h2, h3 {\n    display: inline;\n    margin: 0;\n    padding: 0;\n}\n\nbutton {\n    width: fit-content;\n}\n\ninput[type="radio"] {\n    display: inline-block;\n}\n\nform {\n    grid-column-start: 2;\n    /* grid-area: main; */\n    display: none;\n    gap: 5px;\n    grid-template-columns: 1fr auto 1fr;\n    justify-items: center;\n    justify-self: center;\n    align-items: center;\n    background-color: lightgray;\n    padding: 10px;\n    z-index: 99999999;\n    /* position: absolute; */\n}\n\nform * {\n    grid-column-start: 2;\n}\n\ntextarea {\n    resize: vertical;\n    max-width: 48vw;\n}\n\n#project {\n    border: 2px solid red;\n}\n\n#task_container {\n    grid-area: main;\n    grid-column-start: 2;\n    grid-row-start: 1;\n    gap: 10px;\n    padding: 10px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    align-items: baseline;\n    border: 2px solid blue;\n}\n\n#project_container {\n    grid-area: main;\n    grid-column-start: 3;\n    grid-row-start: 1;\n    gap: 10px;\n    padding: 10px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    align-items: baseline;\n    border: 2px solid yellow;\n}\n\n.task {\n    overflow: scroll;\n    border: 1px solid black;\n    padding: 10px;\n    scrollbar-gutter: stable both-edges;\n}',""]);const s=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=i(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var d=r(e,i),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},507:()=>{}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),s=n(565),d=n.n(s),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var v=n(507);const y=document.createElement("div"),g=document.createElement("div"),b=document.createElement("div"),h=document.createElement("button");document.body.append(y),document.body.append(g),document.body.append(b),y.setAttribute("id","navigation"),g.setAttribute("id","main"),b.setAttribute("id","footer"),y.append(h),h.addEventListener("click",I),h.setAttribute("grid-area","navigation"),h.innerText="Add Task";let x=document.createElement("div"),E=document.createElement("div");x.setAttribute("id","task_container"),E.setAttribute("id","project_container"),g.append(x,E);const w=document.createElement("form");document.createElement("fieldset"),document.createElement("legend");let A=document.createElement("h1");function k(e,t,n,r,i){const a=document.createElement("label"),o=document.createElement(r);w.appendChild(a),w.appendChild(o),o.setAttribute("id",e),o.setAttribute("name",t),o.setAttribute("label",n),a.innerText="\n"+n,o.setAttribute("type",i)}document.body.prepend(w),w.style.display="grid",w.prepend(A),A.innerText="New Task:",w.setAttribute("id","task_form"),w.style.display="none",k("task_title","title_input","Title:","input","text"),k("desc","description_input","Description:","textarea"),k("due","due_date_input","Due Date:","input","date"),k("priority","priority_number_input","Priority:","input","number");const T=document.getElementById("priority");T.setAttribute("min",1),T.setAttribute("max",3);let _=document.createElement("button");function I(){let e=document.getElementById("task_form");"none"==e.style.display?e.style.display="grid":e.style.display="none"}_.setAttribute("type","button"),w.appendChild(_),_.innerText="Submit the info!",_.style.width="flex-self",_.addEventListener("click",(()=>{v.Task,function(){let e=document.getElementById("task_title"),t=document.getElementById("desc"),n=document.getElementById("priority"),r=document.getElementById("due");e.value="",t.value="",n.value="",r.value=""}(),I()}))})()})();