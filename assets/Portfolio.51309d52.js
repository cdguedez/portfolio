import{a as s,j as e,F as a}from"./index.ac20ee69.js";import{G as t,p as n}from"./portfolio.3de88b8b.js";const i=({title:r,subTitle:l=null})=>s("article",{children:[s("h1",{className:"font-bold text-3xl my-4 uppercase -ml-2 text-left",children:[r,e("hr",{className:"bg-blue-400 my-4 h-1 w-1/3"})]}),l&&e("h2",{className:"font-semibold text-xl mb-2",children:l})]}),o=({skills:r})=>e("div",{className:"my-2 text-left flex flex-wrap justify-center",children:r.map(l=>e("span",{className:"px-2 border-blue-400 border-2 rounded-xl m-1 text-[12px] uppercase",children:l},l))}),c=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 448 512",stroke:"currentColor",children:e("path",{d:"M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"})}),d=({project:r})=>s("div",{className:"bg-slate-100 bg-opacity-25 h-auto w-full rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-shadow",children:[s("div",{className:"flex justify-between items-center",children:[e("h1",{className:"font-semibold uppercase",children:r.name}),r.repo&&e("a",{href:r.repo,target:"_blank",rel:"noreferrer",children:e(t,{})}),r.url&&e("a",{href:r.url,target:"_blank",rel:"noreferrer",children:e(c,{})})]}),e("hr",{className:"bg-blue-400 my-2 h-1 w-1/3"}),e("p",{children:r.description}),e(o,{skills:r.skills})]}),h=({projects:r})=>e("div",{className:"grid grid-cols-fill justify-center gap-2",children:r.map(l=>e(d,{project:l},l.id))}),u=()=>s(a,{children:[e("article",{className:"px-4 py-10",children:e(i,{title:"Mi Portafolio",subTitle:"Aqui encontraras proyectos personales y profesionales"})}),e("article",{className:"p-4",children:e(h,{projects:n})})]});export{u as default};