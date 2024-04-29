import{d as A,_ as k,r as w,o as s,c as h,w as I,a as c,t as x,u as S,b as v,e as $,A as r,f as i,g as l,F as b,h as L,i as q,k as f,q as C,m as T}from"./index-bb143292.js";import{_ as B}from"./AssignmentEditor.vue_vue_type_script_setup_true_lang-80b3d80a.js";import{A as p}from"./AssignmentService-e59bc306.js";import{S as E}from"./Spinner-3ca749ba.js";import"./SectionService-c2dfd566.js";const N=A({name:"AssignmentLink",props:{name:{type:String,required:!0},description:{type:String,required:!0},id:{type:String,required:!0},courseId:{type:String,required:!0}}});const V={class:"text-2xl"},D={class:"text-gray-400"};function F(t,a,n,d,o,u){const m=w("RouterLink");return s(),h(m,{to:`/course/${t.courseId}/assignment/${t.id}`,class:"hover:bg-midnightGreen flex flex-col transition duration-250"},{default:I(()=>[c("p",V,x(t.name),1),c("p",D,x(t.description)+"...",1)]),_:1},8,["to"])}const R=k(N,[["render",F],["__scopeId","data-v-0d516b07"]]),j={class:"assignmentBackground min-h-screen"},G={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 my-5"},M=c("h1",{class:"p-2 bg-mysticStone text-white rounded flex justify-center text-3xl font-bold my-3"},"Assignments",-1),P={key:0,class:"flex place-content-center"},z={key:1},U=A({__name:"AssignmentView",props:{courseId:{}},setup(t){const a=q(),n=S(),d=t,o=v({isLoading:!0,assignmentIndex:{}});async function u(e){const _={id:e.id,problemExplanation:e.problemExplanation,metadata:{name:e.name,description:e.description,requiredSectionIds:e.requiredSectionIds,courseId:d.courseId}};await p.createAsync(_,{toast:n,token:await r.getAccessTokenAsync(a,{toast:n})}),window.location.reload()}async function m(e){await p.deleteAsync(e,{toast:n,token:await r.getAccessTokenAsync(a,{toast:n})}),window.location.reload()}return $(async()=>{try{o.assignmentIndex=await p.getAllAsync({toast:n,token:await r.getAccessTokenAsync(a,{toast:n})})}finally{o.isLoading=!1}}),(e,_)=>(s(),i("div",j,[c("div",G,[M,o.isLoading?(s(),i("div",P,[l(E)])):(s(),i("div",z,[(s(!0),i(b,null,L(o.assignmentIndex,([g,y])=>(s(),i("span",null,[l(R,{class:"p-2 bg-mysticStone text-white rounded flex pl-5 my-3",id:g,courseId:d.courseId,name:y.name,description:y.description},null,8,["id","courseId","name","description"]),f(r).isAdmin(f(a))?(s(),h(T,{key:0,handler:async()=>await m(g),text:"Delete?",class:"w-20"},null,8,["handler"])):C("",!0)]))),256)),l(B,{handler:u,handlerText:"Create",assignmentId:"",assignmentProblemExplanation:"",assignmentDescription:"",assignmentName:"",assignmentSectionIds:[]})]))])]))}});export{U as default};
