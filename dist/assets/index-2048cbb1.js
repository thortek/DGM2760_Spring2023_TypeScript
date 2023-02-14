(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=()=>({title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`}),d=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
        <pre data-prefix="2"><code></code></pre>
        <pre data-prefix="3"><code>const sportsCar: {</code></pre>
        <pre data-prefix="4"><code>  make: string</code></pre>
        <pre data-prefix="5"><code>  model: string</code></pre>
        <pre data-prefix="6"><code>  horsepower: number</code></pre>
        <pre data-prefix="7"><code>  style: string</code></pre>
        <pre data-prefix="8"><code>  isFast: boolean</code></pre>
        <pre data-prefix="9"><code>  colors: string[]</code></pre>
        <pre data-prefix="10"><code>  driver: [number, string]</code></pre>
        <pre data-prefix="11"><code>  role: Role</code></pre>
        <pre data-prefix="12"><code>} = {</code></pre>
        <pre data-prefix="13"><code>  make: 'McLaren',</code></pre>
        <pre data-prefix="14"><code>  model: '720s',</code></pre>
        <pre data-prefix="15"><code>  horsepower: 720,</code></pre>
        <pre data-prefix="16"><code>  style: 'coupe',</code></pre>
        <pre data-prefix="17"><code>  isFast: true,</code></pre>
        <pre data-prefix="18"><code>  colors: ['red', 'blue', 'silver'],</code></pre>
        <pre data-prefix="19"><code>  driver: [1, 'McLaren'],</code></pre>
        <pre data-prefix="20"><code>  role: Role.ADMIN,</code></pre>
        <pre data-prefix="21"><code>}</code></pre>`});console.log("This is my Basic Types practice page");function u(o,r){return o+r}const f=25,m=3.5;let x=u(f,m);console.log(x);const y={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0};console.log("My car is one of these",y);const h=document.querySelector("#funcParams"),b=document.querySelector("#objectTypes"),p=document.querySelector(".card-title"),i=document.querySelector("#card-content"),s=document.querySelector("#code-content");h.addEventListener("click",g);b.addEventListener("click",T);function g(){p.textContent=a().title;const{explanation:o,code:r}=a();i.textContent=o,s.innerHTML=r}function T(){p.textContent=d().title;const{explanation:o,code:r}=d();i.textContent=o,s.innerHTML=r}
