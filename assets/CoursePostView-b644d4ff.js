import{d as u,u as m,b as _,o as s,f as n,a as x,k as i,t as f,q as c,i as h,e as y,A as k,g as l}from"./index-bb143292.js";import{C}from"./CourseService-4bbb34fd.js";import{S as g}from"./Spinner-3ca749ba.js";import"./SectionService-c2dfd566.js";import"./AssignmentService-e59bc306.js";import"./BlogService-4efc6870.js";const v={class:"coursePostBackground min-h-screen"},b={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-white"},A={key:0,class:"text-2xl font-bold border-slate-400 rounded border-2 p-1 pl-2"},w=["innerHTML"],L=["innerHTML"],M=u({__name:"CoursePost",props:{id:{},name:{},description:{},content:{},templatedContent:{}},setup(a){const o=h();m();const t=a,e=_({isEditMode:!1,showPreview:!1,id:t.id,name:t.name,description:t.description,content:t.content});return(d,p)=>{var r;return s(),n("div",v,[x("div",b,[i(o).isAuthenticated?(s(),n("p",A,f((r=e.name)==null?void 0:r.toUpperCase()),1)):c("",!0),i(o).isAuthenticated?(s(),n("p",{key:1,class:"text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2",innerHTML:e.description},null,8,w)):c("",!0),i(o).isAuthenticated?(s(),n("div",{key:2,class:"text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2",innerHTML:t.templatedContent},null,8,L)):c("",!0)])])}}}),T={key:0,class:"flex place-content-center"},S={key:1},E=u({__name:"CoursePostView",props:{id:{}},setup(a){const o=h(),t=a,e=_({isLoading:!0,course:{}}),d=m();return y(async()=>{try{e.course=await C.getAsync(t.id,{toast:d,token:await k.getAccessTokenAsync(o)})}finally{e.isLoading=!1}}),(p,r)=>e.isLoading?(s(),n("div",T,[l(g)])):(s(),n("div",S,[l(M,{id:p.id,name:e.course.metadata.name,content:e.course.content,"templated-content":e.course.templatedContent?e.course.templatedContent:"",description:e.course.metadata.description},null,8,["id","name","content","templated-content","description"])]))}});export{E as default};
