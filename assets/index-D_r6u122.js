import{_ as n,c as d,a as e,t as a,E as c,g as r,G as m,o as s}from"./index-CqBfKhJj.js";const u={name:"AppModal",props:{targetId:{type:String,required:!0},title:{type:String,default:"Modal title"},body:{type:String,default:"..."},saveButton:{type:String,default:"Save changes"},saveAction:{type:Function,default:()=>{}},description:{type:String,default:""},size:{type:String,default:""}}},_=["id"],g={class:"modal-content"},y={class:"modal-header d-flex flex-column align-items-start pb-0 pt-2 px-4"},b={class:"modal-title",id:"exampleModalLongTitle"},f={class:"text-body-secondary"},p={class:"modal-body"},v={class:"modal-footer"},h=["id"];function S(l,o,t,x,A,B){return s(),d("div",{class:"modal fade",id:t.targetId,tabindex:"-1",role:"dialog","aria-labelledby":"Modal","aria-hidden":"true"},[e("div",{class:m("modal-dialog modal-dialog-centered"+(t.size==="lg"?" modal-lg":"")),role:"document"},[e("div",g,[e("div",y,[e("h2",b,a(t.title),1),e("p",f,a(t.description),1)]),e("div",p,[c(l.$slots,"default")]),e("div",v,[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",id:"close-modal-"+t.targetId},"Close",8,h),t.saveButton!==""?(s(),d("button",{key:0,type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...i)=>t.saveAction&&t.saveAction(...i))},a(t.saveButton),1)):r("",!0)])])],2)],8,_)}const k=n(u,[["render",S]]);export{k as A};
