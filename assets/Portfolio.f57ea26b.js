import{a as l,F as r,j as s}from"./index.5fd3342b.js";import{p as t}from"./portfolio.4450f7e1.js";const i=({title:e,subTitle:a,country:n})=>l(r,{children:[l("h1",{className:"font-bold text-md mb-4 uppercase -ml-2 text-left",children:[e,s("hr",{className:"w-24"})]}),l("h2",{className:"font-semibold text-lg mb-2",children:[a," "," ",s("span",{className:"font-bold text-lime-400 uppercase",children:n})]})]}),d=({project:e})=>{var a;return console.log(e),l("article",{className:"bg-blue-400 my-2 rounded-lg text-black shadow-xl hover:shadow-2xl transition-shadow",children:[((a=e.images)==null?void 0:a.length)>0&&s("figure",{children:s("img",{className:"rounded-tl-lg rounded-tr-lg",src:e.images[0],alt:e.name})}),l("div",{className:"p-4 text-slate-300",children:[s("h2",{className:"uppercase",children:s("a",{target:"_blank",href:e.url,rel:"noreferrer",children:e.name})}),s("span",{className:"lowercase",children:e.isFinish?"\u2705":"\u{1F9D1}\u200D\u{1F4BB}"}),s("p",{children:e.description})]})]},e.id)},c=()=>s("section",{className:"grid md:grid-cols-2 gap-x-4",children:t.map(e=>s(d,{project:e},e.id))}),h=()=>l(r,{children:[s(i,{title:"My portfolio"}),s(c,{})]});export{h as default};