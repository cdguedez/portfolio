import{a as s,j as e,F as i}from"./index.705d16b8.js";import{G as t,p as a}from"./portfolio.f4163f28.js";const o=({title:r,subTitle:l})=>s("article",{children:[s("h1",{className:"font-bold text-3xl mb-4 uppercase -ml-2 text-left",children:[r,e("hr",{className:"bg-blue-400 my-4 h-1 w-1/3"})]}),e("h2",{className:"font-semibold text-xl mb-2",children:l})]}),n=({skills:r})=>e("div",{className:"my-2 text-left flex flex-wrap justify-center",children:r.map(l=>e("span",{className:"px-2 border-[1px] border-blue-400 rounded-md m-1",children:l},l))}),c=({project:r})=>s("div",{className:"h-auto w-full border-blue-400 border-2 rounded-lg p-4 text-center hover:shadow-xl hover:translate-x-1 transition-all",children:[s("div",{className:"flex justify-around items-center",children:[e(t,{}),e("h1",{className:"font-semibold text-xl uppercase mb-2",children:r.name}),e(t,{})]}),e("p",{children:r.description}),e(n,{skills:r.skills})]}),d=({projects:r})=>e("div",{className:"grid grid-cols-fill justify-center gap-2",children:r.map(l=>e(c,{project:l},l.id))}),u=()=>(console.log(a),s(i,{children:[e("article",{className:"px-4 py-10",children:e(o,{title:"Mi Portafolio",subTitle:"Aqui encontraras Proyectos personales y profesionales"})}),e("article",{className:"p-4",children:e(d,{projects:a})})]}));export{u as default};
