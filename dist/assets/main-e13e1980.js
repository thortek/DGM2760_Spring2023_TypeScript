import"./input-278ab42c.js";const c=()=>({title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
          <pre data-prefix="2"><code>    return num1 + num2</code></pre>
      <pre data-prefix="3"><code>}</code></pre>`}),n=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
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
      <pre data-prefix="21"><code>}</code></pre>`});function i(r,e){return r+e}const s=25,l=3.5;let u=i(s,l);console.log(u);const f={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0};console.log("My car is one of these",f);function d(r,e){let t;return typeof r=="number"&&typeof e=="number"?t=r+e:t=r.toString()+e.toString(),t}console.log(d(25,3.5));console.log(d("25","3.5"));function a(r,e,t){let o;return typeof r=="number"&&typeof e=="number"||t==="as-number"?o=+r+ +e:o=r.toString()+e.toString(),o}console.log(a(25,3.5,"as-number"));console.log(a("25","3.5","as-number"));console.log(a("25","3.5","as-text"));const m=[{buttonTitle:"Function Parameter Types",title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
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
      <pre data-prefix="21"><code>}</code></pre>`},{buttonTitle:"Object Types",title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
          <pre data-prefix="2"><code>    return num1 + num2</code></pre>
      <pre data-prefix="3"><code>}</code></pre>`}],x={data:m},b=document.querySelector("#funcParams"),y=document.querySelector("#objectTypes"),h=document.querySelector(".card-title"),g=document.querySelector("#card-content"),T=document.querySelector("#code-content");b.addEventListener("click",p.bind(globalThis,c));y.addEventListener("click",p.bind(globalThis,n));function p(r){const{title:e,explanation:t,code:o}=r();h.textContent=e,g.textContent=t,T.innerHTML=o}const v=document.querySelector("#nav-list"),S=r=>{r.data.forEach(e=>{console.log(e);const t=document.createElement("li");t.classList.add("my-4");const o=document.createElement("button");o.classList.add("btn","btn-primary"),o.textContent=e.buttonTitle,t.appendChild(o),v.appendChild(t)})};S(x);
