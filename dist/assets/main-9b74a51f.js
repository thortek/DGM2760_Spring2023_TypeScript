import"./modulepreload-polyfill-ec808ebb.js";const o=()=>({title:"Data types set on function parameters",explanation:"Here is where I explain the syntax of function parameters when using TypeScript",code:`
    <pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
    <pre data-prefix="2"><code>    return num1 + num2</code></pre>
    <pre data-prefix="3"><code>}</code></pre>
    `}),d={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0},n=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`
    <pre data-prefix="1"><code>enum Role {</code></pre>
    <pre data-prefix="2"><code>  ADMIN,</code></pre>
    <pre data-prefix="3"><code>  DEV,</code></pre>
    <pre data-prefix="4"><code>  STUDENT,</code></pre>
    <pre data-prefix="5"><code>}</code></pre>
    <pre data-prefix="6"><code></code></pre>
    <pre data-prefix="7"><code>const sportsCar: {</code></pre>
    <pre data-prefix="8"><code>  make: string</code></pre>
    <pre data-prefix="9"><code>  model: string</code></pre>
    <pre data-prefix="10"><code>  horsepower: number</code></pre>
    <pre data-prefix="11"><code>  style: string</code></pre>
    <pre data-prefix="12"><code>  isFast: boolean</code></pre>
    <pre data-prefix="13"><code>  colors: string[]</code></pre>
    <pre data-prefix="14"><code>  driver: [number, string]</code></pre>
    <pre data-prefix="15"><code>  role: Role</code></pre>
    <pre data-prefix="16"><code>} = {</code></pre>
    <pre data-prefix="17"><code>  make: 'McLaren',</code></pre>
    <pre data-prefix="18"><code>  model: '720s',</code></pre>
    <pre data-prefix="19"><code>  horsepower: 720,</code></pre>
    <pre data-prefix="20"><code>  style: 'coupe',</code></pre>
    <pre data-prefix="21"><code>  isFast: true,</code></pre>
    <pre data-prefix="22"><code>  colors: ['red', 'blue', 'silver'],</code></pre>
    <pre data-prefix="23"><code>  driver: [1, 'McLaren'],</code></pre>
    <pre data-prefix="24"><code>  role: Role.ADMIN,</code></pre>
    <pre data-prefix="25"><code>}</code></pre>
  `});console.log("This is my Basic Types practice page");function i(e,r){return e+r}const s=25,l=3.5;let u=i(s,l);console.log(u);console.log("My car is one of these",d);const x=document.querySelector("#funcParams"),f=document.querySelector("#objTypes"),t=document.querySelector(".card-title"),c=document.querySelector("#card-content"),p=document.querySelector("#codeContent");x.addEventListener("click",m);f.addEventListener("click",y);function m(){console.log("About to show example...");const{explanation:e,code:r}=o();t.textContent=o().title,c.textContent=e,p.innerHTML=r}function y(){const{title:e,explanation:r,code:a}=n();t.textContent=e,c.textContent=r,p.innerHTML=a}
