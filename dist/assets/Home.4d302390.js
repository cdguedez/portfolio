import{j as e,a as l,F as r}from"./index.eb8a2987.js";import{m as s}from"./portfolio.53623c8e.js";const n=({skills:t})=>e("div",{className:"my-2 text-left flex flex-wrap justify-center",children:t.map(a=>e("div",{className:"bg-white text-black font-bold m-2 py-2 px-4 rounded-full",children:a},a))}),o=({children:t})=>e("button",{className:"bg-slate-900 px-4 py-2 rounded-md text-white text-sm hover:opacity-50 transition-all",children:t}),i=()=>l(r,{children:[l("h1",{className:"uppercase font-bold text-2xl mb-2 text-left",children:["i'm ",s.name," ",e(o,{children:"Download CV"})]}),l("h2",{className:"font-semibold text-lg text-left",children:["Web developer from "," ",e("span",{className:"font-bold text-lime-400 uppercase",children:s.country})]}),e(n,{skills:s.skills})]});export{i as default};