(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const i=document.querySelector("#funcParams"),l=document.querySelector("#code-example");i.addEventListener("click",a);function a(){console.log("About to show example..."),l.innerHTML=`
  <div id="codeExample" class="card m-8 p-4 w-auto shadow-xl">
  <h2 class="card-title my-1">Data types set on function parameters</h2>
  <div id="codeContent" class="mockup-code bg-primary text-primary-content">
  <pre data-prefix="1">function add(num1: number, num2: number) {</pre>
  <pre data-prefix="2">    return num1 + num2 </pre>
  <pre data-prefix="3">}</pre>
  </div>
  </div>`}console.log("This is my Basic Types practice page");function u(n,r){return n+r}const d=25,p=3.5;let m=u(d,p);console.log(m);const f={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0};console.log("My car is one of these",f);
//# sourceMappingURL=index-680686cc.js.map
